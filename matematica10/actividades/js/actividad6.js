var titulos = 'aplico';
numero_pagina(14);

var testimg = [
    ["1", "Calcula el perímetro de un círculo cuyo radio mide 7 cm."],    
    ["2", "Calcula la diagonal de un rectángulo cuyos lados miden 12 cm y 5 cm."],
    ["3", "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm."],
    ["4", "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm."],
    ["5", "Calcula el área de un círculo cuyo radio mide 12 cm."],
    ["6", "Calcula el perímetro de un rectángulo,si uno de sus lados mide 12 cm y su área es de 60 cm2."],
    ["7", "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm."],
]

var CorrectasP = [
    ["1", "Calcula el perímetro de un círculo cuyo radio mide 7 cm."],
    ["2", "Calcula el área de un círculo cuyo radio mide 12 cm."],
    ["3", "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm."],
    ["4", "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm."],
    ["5", "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm."],
]

finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');

    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<span class="" id="' + testimg[i][1] + '">' + testimg[i][1] + '</span>');
    }
}

$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});
var respr1=0;
var respr2=0;
var respr3=0;
var respr4=0;
var respr5=0;
var respr6=0;
var respr7=0;
var respri1=0;
var respri2=0;
var respri3=0;
var respri4=0;
var respri5=0;
var respri6=0;
var respri7=0;

function calculoR() {
    var caja1 = $("div[id=caja_img1]").find('span')[0].id;
    if ($("#caja_img1").hasClass("seleccionCaja")) {

        if ((caja1 == "Calcula el perímetro de un círculo cuyo radio mide 7 cm.") || (caja1 == "Calcula el área de un círculo cuyo radio mide 12 cm.") || (caja1 == "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm.")|| (caja1 == "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm.") || (caja1 == "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm.")) {
            respr1 = 1;
            $("#caja_img1").addClass('correcto')
        } else {
            respri1 = 1;
            $("#caja_img1").removeClass('correcto')
            $("#caja_img1").addClass('incorrecto')

        }

    } else {
        respr1 = 0;

    }

    var caja2 = $("div[id=caja_img2]").find('span')[0].id;
    if ($("#caja_img2").hasClass("seleccionCaja")) {

        if ((caja2 == "Calcula el perímetro de un círculo cuyo radio mide 7 cm.") || (caja2 == "Calcula el área de un círculo cuyo radio mide 12 cm.") || (caja2 == "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm.")|| (caja2 == "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm.") || (caja2 == "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm.")) {
            respr2 = 1;
            $("#caja_img2").addClass('correcto')

        } else {
            respri2 = 1;
            $("#caja_img2").removeClass('correcto')
            $("#caja_img2").addClass('incorrecto')


        }

    } else {
        respr2 = 0;

    }

    var caja3 = $("div[id=caja_img3]").find('span')[0].id;
    if ($("#caja_img3").hasClass("seleccionCaja")) {

        if ((caja3 == "Calcula el perímetro de un círculo cuyo radio mide 7 cm.") || (caja3 == "Calcula el área de un círculo cuyo radio mide 12 cm.") || (caja3 == "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm.")|| (caja3 == "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm.") || (caja3 == "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm.")) {
            respr3 = 1;
            $("#caja_img3").addClass('correcto')


        } else {
            respri3 = 1;
            $("#caja_img3").removeClass('correcto')
            $("#caja_img3").addClass('incorrecto')


        }

    } else {
        respr3 = 0;

    }
    var caja4 = $("div[id=caja_img4]").find('span')[0].id;
    if ($("#caja_img4").hasClass("seleccionCaja")) {

        if ((caja4 == "Calcula el perímetro de un círculo cuyo radio mide 7 cm.") || (caja4 == "Calcula el área de un círculo cuyo radio mide 12 cm.") || (caja4 == "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm.")|| (caja4 == "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm.") || (caja4 == "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm.")) {
            respr4 = 1;
            $("#caja_img4").addClass('correcto')


        } else {
            respri4 = 1;
            $("#caja_img4").removeClass('correcto')
            $("#caja_img4").addClass('incorrecto')


        }

    } else {
        respr4 = 0;

    }

    var caja5 = $("div[id=caja_img5]").find('span')[0].id;
    if ($("#caja_img5").hasClass("seleccionCaja")) {

        if ((caja5 == "Calcula el perímetro de un círculo cuyo radio mide 7 cm.") || (caja5 == "Calcula el área de un círculo cuyo radio mide 12 cm.") || (caja5 == "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm.")|| (caja5 == "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm.") || (caja5 == "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm.")) {
            respr5 = 1;

            $("#caja_img5").addClass('correcto')


        } else {
            respri5 = 1;
            $("#caja_img5").removeClass('correcto')
            $("#caja_img5").addClass('incorrecto')


        }

    } else {
        respr5 = 0;

    }

    var caja6 = $("div[id=caja_img6]").find('span')[0].id;
    if ($("#caja_img6").hasClass("seleccionCaja")) {

        if ((caja6 == "Calcula el perímetro de un círculo cuyo radio mide 7 cm.") || (caja6 == "Calcula el área de un círculo cuyo radio mide 12 cm.") || (caja6 == "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm.")|| (caja6 == "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm.") || (caja6 == "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm.")) {
            respr6 = 1;

            $("#caja_img6").addClass('correcto')


        } else {
            respri6 = 1;
            $("#caja_img6").removeClass('correcto')
            $("#caja_img6").addClass('incorrecto')


        }

    } else {
        respr6 = 0;

    }

    var caja7 = $("div[id=caja_img7]").find('span')[0].id;
    if ($("#caja_img7").hasClass("seleccionCaja")) {

        if ((caja7 == "Calcula el perímetro de un círculo cuyo radio mide 7 cm.") || (caja7 == "Calcula el área de un círculo cuyo radio mide 12 cm.") || (caja7 == "Calcula el perímetro de un cuadrado cuya diagonal mide 2 cm.")|| (caja7 == "Calcula la diagonal de un cuadrado cuyo lado mide 19 cm.") || (caja7 == "Calcula el área de un rectángulo cuyos lados miden 5 cm y 7 cm.")) {
            respr7 = 1;

            $("#caja_img7").addClass('correcto')


        } else {
            respri7 = 1;
            $("#caja_img7").removeClass('correcto')
            $("#caja_img7").addClass('incorrecto')


        }

    } else {
        respr7 = 0;

    }
    var suma = parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4) + parseInt(respr5) + parseInt(respr6) + parseInt(respr7) ;
    var sumai = parseInt(respri1) + parseInt(respri2) + parseInt(respri3) + parseInt(respri4) + parseInt(respri5) + parseInt(respri6) + parseInt(respri7) ;
    
    if (suma == 0 && sumai ==0 ) {
        alert('Debe escoger al menos una respuesta de la pregunta');
    } 
    else 
    {
    var totalR = (suma-sumai)*10/5 ;
    if(totalR<0)
    {
        totalR=0;
        $('#txtNota').html(totalR.toFixed(2) + ' ');
        document.getElementById('bt_comprobar').disabled = true;
    }
    else
    {
        $('#txtNota').html(totalR.toFixed(2) + ' ');
        document.getElementById('bt_comprobar').disabled = true;
    }
}
}
