var titulos = 'aplico';

var resp_cor_len3_act16 = {
    0:['caja_txt1','img/i2_p16_act16.png'],
    1:['caja_txt2','img/i3_p16_act16.png'],
    2:['caja_txt3','img/i4_p16_act16.png']
}
var cajas = document.getElementsByClassName('cajas');
var loadImg = [
    'img/i1_p17_act21.png',
    'img/i2_p17_act21.png',
    'img/i3_p17_act21.png'
    ];
var loadTxt = ['caja_txt1','caja_txt2','caja_txt3'];
var divs = $(".imagen, .texto");
var cont_resp_cor = {};
var divsImg, divsTxt,divsImgReduc ;
var indice;
var contador_nota=0;


numero_pagina(17);
initElementos("imagen",loadImg);
enviarEventosListener("caja_img1","caja_txt1"); //caja1 img y texto
enviarEventosListener("caja_img2","caja_txt2"); //caja1 img y texto
enviarEventosListener("caja_img3","caja_txt3"); //caja1 img y texto


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
        }/*else if(classDiv == "texto"){
            $('#'+cajas[i].id).html('<span class= "cajas-cuentos"  id="'+ arrayElement[i] +'">' + arrayElement[i] + '</span>');
        }*/
		
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