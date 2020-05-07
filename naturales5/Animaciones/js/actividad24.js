

//Variables Iniciales
var titulos = 'reflexiono';
numero_pagina(18);

var loadValues = {
    pictures : [
        'img/i1_p18_act23.png',
        'img/i2_p18_act23.png'
        ]
}
finitimg()

//initElementos("caja_img1",loadValues.pictures,1);
enviarEventosListener("caja_img1"); 
enviarEventosListener("caja_img2");
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

function finitimg(){
    var cajasImg = document.getElementsByClassName('imagen');
    
    loadValues.pictures.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        
		$('#'+cajasImg[i].id).html('<img class="img-responsive imgAcom" src="'+ loadValues.pictures[i] +'" alt="' + loadValues.pictures[i] + '" width="227px" height="180px">');
    } 
}