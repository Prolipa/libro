var titulos = 'aplico';

var resp_cor_len3_act16 = {
    0:['¿A quién está dirigida la tarjeta?','A la abuelita'],
    1:['¿Quién escribió la tarjeta?','El nieto'],
    2:['¿Cuál es el motivo de enviar la tarjeta?','La recuperación de la abuelita']
}
var cajas = document.getElementsByClassName('cajas');
var loadImg = ['¿A quién está dirigida la tarjeta?','¿Quién escribió la tarjeta?','¿Cuál es el motivo de enviar la tarjeta?'];
var loadTxt = ['A la abuelita','El nieto','La recuperación de la abuelita'];  
var divs = $(".td, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt ;
var indice;
var contador_nota=0;


numero_pagina(21);
initElementos("imagen",loadImg);
initElementos("texto",loadTxt);
insertDraggable();
enviarEventosListener("caja_img1","caja_txt11"); //caja1 img y texto
enviarEventosListener("caja_img2","caja_txt12"); //caja1 img y texto
enviarEventosListener("caja_img3","caja_txt13"); //caja1 img y texto

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
    //divsImg = $('#'+id).find("img")[0].alt ;
    //divsImg = $('#'+id+ ' > span').text() ;
    divsImg = document.getElementById(id).parentNode.getElementsByTagName('td')[0].innerText
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
  divsImg = $('#'+id+ ' > span').text() ;
  //divsImg = document.getElementById(id).parentNode.getElementsByTagName('td')[0].innerText

}
function insertaParOnDrop(id){
    //divsTxt = id;//$('#'+id).find("span").text().toLowerCase(); 
    divsTxt = document.getElementById(id).parentNode.getElementsByTagName('td')[0].getElementsByTagName('span')[0].innerText;
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
            $('#'+cajas[i].id).html('<span id="'+ 'span'+[i] +'">' + arrayElement[i] + '</span>');
        }else if(classDiv == "texto"){
            $('#'+cajas[i].id).html('<span id="'+ 'span2'+[i] +'">' + arrayElement[i] + '</span>');
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
    for(i=0; i< $('.td').length; i++){
        //var ids = $('td');
        $('.td').attr({
            "ondrop" : "drop(event)",
            "ondragover" : "allowDrop(event)"
        });
            
    }
    for(i=0; i< divs.find("span").length; i++){
        $('#'+divs.find("span")[i].id).attr({
            "draggable" : "true",
            "ondragstart" : "drag(event)"
        });
    }
 



}
function contarRespCorrectaDnD(){
    
    //i=respcorrectas j= a comprobar
    for(var i=0; i<Object.values(resp_cor_len3_act16).length; i++){
        for(j=0; j<Object.values(cont_resp_cor).length;j++){
            if(JSON.stringify(Object.values(resp_cor_len3_act16)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])){
                contador_nota = contador_nota+1;
            }
        }
    }
    calcularNotaGeneral(
        Object.keys(resp_cor_len3_act16).length,
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
