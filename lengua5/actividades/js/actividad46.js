$("#txtNota").html("0");
$("#n_pagina").html("31");
var titulos = "aplico"; 


var resp_cor_len3_act10_p13 = {
    0 : ["caja_txt2","img/i3_p31_act46.png"],
    1 : ["caja_txt2","img/i5_p31_act46.png"],
    2 : ["caja_txt2","img/i7_p31_act46.png"],
    3 : ["caja_txt2","img/i4_p31_act46.png"],
    4 : ["caja_txt3","img/i2_p31_act46.png"],
    5 : ["caja_txt3","img/i1_p31_act46.png"],
    6 : ["caja_txt3","img/i6_p31_act46.png"],
    7 : ["caja_txt3","img/i8_p31_act46.png"]
  
   
}
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['img/i1_p31_act46.png','img/i2_p31_act46.png','img/i3_p31_act46.png','img/i4_p31_act46.png','img/i5_p31_act46.png','img/i6_p31_act46.png','img/i7_p31_act46.png','img/i8_p31_act46.png'];
var loadTxt = ['caja_txt1','caja_txt2'];
var divs = $(".imagen, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt,divsImgReduc ;
var indice;
var contador_nota=0;


initElementos("imagen",loadImg);
initElementos("texto",loadTxt);
insertDraggable();
enviarEventosListener("caja_img1","caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img2","caja_txt3"); //caja1 img y texto
enviarEventosListener("caja_img3","caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img4","caja_txt3"); //caja1 img y texto
enviarEventosListener("caja_img5","caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img6","caja_txt3"); //caja1 img y texto
enviarEventosListener("caja_img7","caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img8","caja_txt3"); //caja1 img y texto

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
    
    document.getElementById(divsImgReduc).classList.remove('reducImg');
    document.getElementById(divsImgReduc).classList.remove('reducImgCaja1');

    for(i = 0; i < objetoLength; i++){
        
        if(Object.values(objComparar)[i].indexOf(divsImg) != -1){
            
            indice = Object.keys(objComparar)[i];
            delete cont_resp_cor[indice];
            
        }
        
    }
    
}
function dragStart(id){
  divsImg = $('#'+id).find("img")[0].alt ;
  divsImgReduc = $('#'+id).find("img")[0].id ;
 
}
function insertaParOnDrop(id){
    divsTxt = $('#'+id).find("span").text().toLowerCase(); 
    
    if(divsTxt == 'caja_txt3' || divsTxt == 'caja_txt2'){
        document.getElementById(divsImgReduc).className = "reducImg";
        
    }else if(divsTxt == 'caja_txt1'){
        document.getElementById(divsImgReduc).className = "reducImgCaja1";
    }
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
            $('#'+cajas[i].id).html('<img  class="img-responsive"  src="'+ arrayElement[i] +'" alt="' + arrayElement[i] + '"  id="img'+ [i] +'">');
        }/*else if(classDiv == "texto"){
            $('#'+cajas[i].id).html('<span class= "cajas-cuentos  id="'+ arrayElement[i] +'">' + arrayElement[i] + '</span>');
        }*/
        
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
    for(var i=0; i<Object.values(resp_cor_len3_act10_p13).length; i++){
        for(j=0; j<Object.values(cont_resp_cor).length;j++){
            if(JSON.stringify(Object.values(resp_cor_len3_act10_p13)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])){
                contador_nota = contador_nota+1;
            }
        }
    }
    calcularNotaGeneral(
        Object.values(resp_cor_len3_act10_p13).length,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}
function calcularNotaGeneral(total_nota,r_correctas,op_seleccionadas,total_preguntas){
    var result_sobre = 10;
    var tiempoReload=4000; //en milisegundos
    
        if(op_seleccionadas < total_nota){
            alert('Debe escoger '+ total_nota + ' respuestas de la pregunta');
            
        }else{
            var calculo = (result_sobre * r_correctas )/ total_nota
            $('#txtNota').html(calculo.toFixed(2)+' ');
        }    
    document.getElementById('bt_comprobar').disabled = true;    
    //setTimeout('document.location.reload()',tiempoReload)
    
}
