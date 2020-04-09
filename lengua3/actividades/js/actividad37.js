var titulos = 'reflexiono';

var resp_cor_len3_act16 = {
    0:['caja_txt1','img/i2_p16_act16.png'],
    1:['caja_txt2','img/i3_p16_act16.png'],
    2:['caja_txt3','img/i4_p16_act16.png']
}
var cajas = document.getElementsByClassName('cajas');

var loadTxt = [ 'colores',
    'ilustraciones.',
    'mensaje',
    'sobre',
    'tamaño'];
var divs = $(".imagen, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt,divsImgReduc ;
var indice;
var contador_nota=0;


numero_pagina(22);
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
enviarEventosListener("caja_txt10");



function enviarEventosListener(id)
{
    document.getElementById(id).addEventListener('click',function(){
        selectDselect(id);
    });
    

}

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