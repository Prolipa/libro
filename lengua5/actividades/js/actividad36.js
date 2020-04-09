var titulos = 'aplico';

var resp_cor_len3_act13_p14 = {
    inicio : ["tengo mucho dolor del cuerpo.","img/i1_p27_act36.png"],
    desarrollo : ["hoy hizo mucho calor.","img/i2_p27_act36.png"],
    final : ["los dulces están muy ricos.","img/i3_p27_act36.png"],
    final2 : ["los estudiantes saludan a su ciudad.","img/i4_p27_act36.png"] 
}
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p27_act36.png','img/i2_p27_act36.png','img/i3_p27_act36.png','img/i4_p27_act36.png'];
var loadTxt = ['Los dulces están muy ricos.','Tengo mucho dolor del cuerpo.','Hoy hizo mucho calor.','Los estudiantes saludan a su ciudad.'];
var divs = $(".imagen, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt ;
var indice;
var contador_nota=0;



initElementos("imagen",loadImg);
initElementos("texto",loadTxt);
insertDraggable();
enviarEventosListener("caja_img1","caja_txt1"); //caja1 img y texto
enviarEventosListener("caja_img2","caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img3","caja_txt3"); //caja1 img y texto
enviarEventosListener("caja_img4","caja_txt4"); //caja1 img y texto

function genIdRandom(){
    //genera un Id Aleatorio en base a milisegundos para que no se repita
    var d = new Date();
    var a = d.getSeconds();
    var b = d.getMilliseconds();

    return a*b;
}
function enviarEventosListener(id,id2)
{
    document.getElementById(id).addEventListener('dragstart',function(){
        dragStart(id);
    });
    document.getElementById(id2).addEventListener('drop',function(){
        onDrop(id2,divsImg);
    });
    document.getElementById(id).addEventListener('drop',function(){
        onDropReturn(id);
    });
    document.getElementById('bt_comprobar').addEventListener('click',contarRespCorrectaDnD);

}
function onDropReturn(id){
    divsImg = $('#'+id).find("img")[0].alt ;
    var objetoLength = Object.keys(cont_resp_cor).length;
    var objComparar = Object.assign({} , cont_resp_cor);
    
    for(i = 0; i < objetoLength; i++){
        
        if(Object.values(objComparar)[i].indexOf(divsImg) != -1){
            
            indice = Object.keys(objComparar)[i];
            delete cont_resp_cor[indice];
            
        }
        
    }
    
}
function dragStart(id){
  divsImg = $('#'+id).find("img")[0].alt ;
  
}
function insertaParOnDrop(id){
    divsTxt = $('#'+id).find("span").text().toLowerCase(); 
    
            var prop = Object.keys(cont_resp_cor);
          
            cont_resp_cor[genIdRandom()] = [divsTxt,divsImg];

}
function onDrop(id,divsImg){
    var objetoLength = Object.keys(cont_resp_cor).length;
    var contador=0;
    if(objetoLength == 0){
        insertaParOnDrop(id);
    }else{
        for(i = 0; i < objetoLength; i++){
            if(Object.values(cont_resp_cor)[i].indexOf(divsImg) != -1){
                contador = contador+1;
                
            }
            
        }
        if(contador==0){
        insertaParOnDrop(id); 
        }
    }
}
function initElementos(classDiv,arrayElement){       //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if(classDiv == "imagen"){
            $('#'+cajas[i].id).html('<img class="center"  src="'+ arrayElement[i] +'" alt="' + arrayElement[i] + '" width="227px" height="180px"  id="img'+ [i] +'">');
        }else if(classDiv == "texto"){
            $('#'+cajas[i].id).html('<span class= "cajas-cuentos"  id="'+ arrayElement[i] +'">' + arrayElement[i] + '</span>');
        }
		
    } 
}
function insertDraggable(){

    
    for(i=0; i < divs.length; i++){
        $('#'+divs[i].id).attr({
            "ondrop" : "drop(event)",
            "ondragover" : "allowDrop(event)"
        });    
    }
    for(i=0; i< divs.find("img").length; i++){
        $('#img'+i).attr({
            "draggable" : "true",
            "ondragstart" : "drag(event)"
        });
            
    } 
/*     for(i=0; i< divs.find("span").length; i++){
        $('#'+divs.find("span")[i].id).attr({
            "draggable" : "true",
            "ondragstart" : "drag(event)"
        });
            
    } */

 



}
function contarRespCorrectaDnD(){
    
    //i=respcorrectas j= a comprobar
    for(var i=0; i<Object.values(resp_cor_len3_act13_p14).length; i++){
        for(j=0; j<Object.values(cont_resp_cor).length;j++){
            if(JSON.stringify(Object.values(resp_cor_len3_act13_p14)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])){
                contador_nota = contador_nota+1;
            }
        }
    }
    calcularNotaGeneral(
        4,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}
function calcularNotaGeneral(total_nota,r_correctas,op_seleccionadas,total_preguntas){
    var result_sobre = 10;
    //var tiempoReload=4000; //en milisegundos
    
        if(op_seleccionadas < total_nota){
            alert('Debe escoger '+ total_nota + ' respuestas de la pregunta');
            
        }else{
            var calculo = (result_sobre * r_correctas )/ total_nota
            $('#txtNota').html(calculo.toFixed(2)+' ');
        }    
    document.getElementById('bt_comprobar').disabled = true;    
    //setTimeout('document.location.reload()',tiempoReload)
    
}
