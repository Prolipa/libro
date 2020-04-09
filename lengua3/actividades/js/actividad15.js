//#region VARIABLES GENERALES
var titulos = 'exploro';
var loadTxt = [ 'La Cenicienta',
                'Caperucita roja',
                'La bella durmiente',
                'Los tres cerditos',
                'El gato con botas',
                'Los tres osos',
                'Rapunzel',
                'Blancanieves',
                'Pinocho'];
//#endregion
numero_pagina(16);
initElementos("texto",loadTxt);
enviarEventosListener("caja_txt1"); 
enviarEventosListener("caja_txt2");
enviarEventosListener("caja_txt3");
enviarEventosListener("caja_txt4");
enviarEventosListener("caja_txt5");
enviarEventosListener("caja_txt6");
enviarEventosListener("caja_txt7");
enviarEventosListener("caja_txt8");
enviarEventosListener("caja_txt9");


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