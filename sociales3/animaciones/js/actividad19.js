//#region VARIABLES GENERALES
var titulos = 'exploro';
var loadTxt = [ 'Había una vez...',
                'Érase una vez...',
                'Hace mucho tiempo...'];
//#endregion
numero_pagina(17);
initElementos("texto",loadTxt);
enviarEventosListener("caja_txt1"); 
enviarEventosListener("caja_txt2");
enviarEventosListener("caja_txt3");



function initElementos(classDiv,arrayElement){       //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if(classDiv == "imagen"){
            $('#'+cajas[i].id).html('<img class="center"  src="'+ arrayElement[i] +'" alt="' + arrayElement[i] + '" width="227px" height="180px"  id="img'+ [i] +'">');
        }else if(classDiv == "texto"){
            $('#'+cajas[i].id).html('<span id="'+ arrayElement[i] +'">' + arrayElement[i] + '</span>');
        }
		
    } 
}
function enviarEventosListener(id)
{
    document.getElementById(id).addEventListener('click',function(){
        selectDselect(id);
    });
}
function selectDselect(id){
    var elemento = document.getElementById(id);
    if(!elemento.classList.contains('seleccionCaja')){
        elemento.classList.add('seleccionCaja');
        elemento.classList.remove('deseleccionCaja');
    }else{
        elemento.classList.add('deseleccionCaja');
        elemento.classList.remove('seleccionCaja');
    }
}