var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("27");

var testimg = [
    ["1", "¡Qué dolor!"],
    ["2", "¡Ya basta!"], //respuesta correcta
    ["3", "¡Hasta mañana!"],
    ["4", "¡Hola!"],
    ["5", "¡Adiós!"],
    ["6", "¡Qué rico!"],
    ["7", "El médico me atenderá."],
    ["8", "No iré mañana."],
    ["9", "Los peajes son caros."],

]

var CorrectasP = [
    ["1", "¡Qué dolor!"],
    ["2", "¡Ya basta!"],
    ["3", "¡Hasta mañana!"],
    ["4", "¡Hola!"],
    ["5", "¡Adiós!"],
    ["6", "¡Qué rico!"],
]

finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');

    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<span class="" id="' + testimg[i][1] + '">' + testimg[i][1] + '</span>');




    }
}

//$("div[id=caja_img1]").click(function(){


$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});
var respr1, respr2,respr3,respr4,respr5,respr6,respr7,respr8,respr9;

function calculoR() {
    var caja1 = $("div[id=caja_img1]").find('span')[0].id;
    if ($("#caja_img1").hasClass("seleccionCaja")) {

        if ((caja1 == "¡Hola!") || (caja1 == "¡Qué dolor!") || (caja1 == "¡Ya basta!") || (caja1 == "¡Hasta mañana!") || (caja1 == "¡Adiós!") || (caja1 == "¡Qué rico!")) {
            respr1 = 10;
            $("#caja_img1").addClass('correcto')
        } else {
            respr1 = -5;
            $("#caja_img1").removeClass('correcto')
            $("#caja_img1").addClass('incorrecto')

        }

    } else {
        respr1 = 0;

    }

    var caja2 = $("div[id=caja_img2]").find('span')[0].id;
    if ($("#caja_img2").hasClass("seleccionCaja")) {

        if ((caja2 == "¡Hola!") || (caja2 == "¡Qué dolor!") || (caja2 == "¡Ya basta!") || (caja2 == "¡Hasta mañana!") || (caja2 == "¡Adiós!") || (caja2 == "¡Qué rico!")) {
            respr2 = 10;
            $("#caja_img2").addClass('correcto')

        } else {
            respr2 = -5;
            $("#caja_img2").removeClass('correcto')
            $("#caja_img2").addClass('incorrecto')


        }

    } else {
        respr2 = 0;

    }

    var caja3 = $("div[id=caja_img3]").find('span')[0].id;
    if ($("#caja_img3").hasClass("seleccionCaja")) {

        if ((caja3 == "¡Hola!") || (caja3 == "¡Qué dolor!") || (caja3 == "¡Ya basta!") || (caja3 == "¡Hasta mañana!") || (caja3 == "¡Adiós!") || (caja3 == "¡Qué rico!")) {
            respr3 = 10;
            $("#caja_img3").addClass('correcto')


        } else {
            respr3 = -5;
            $("#caja_img3").removeClass('correcto')
            $("#caja_img3").addClass('incorrecto')


        }

    } else {
        respr3 = 0;

    }
    var caja4 = $("div[id=caja_img4]").find('span')[0].id;
    if ($("#caja_img4").hasClass("seleccionCaja")) {

        if ((caja4 == "¡Hola!") || (caja4 == "¡Qué dolor!") || (caja4 == "¡Ya basta!") || (caja4 == "¡Hasta mañana!") || (caja4 == "¡Adiós!") || (caja4 == "¡Qué rico!")) {
            respr4 = 10;
            $("#caja_img4").addClass('correcto')


        } else {
            respr4 = -5;
            $("#caja_img4").removeClass('correcto')
            $("#caja_img4").addClass('incorrecto')


        }

    } else {
        respr4 = 0;

    }

    var caja5 = $("div[id=caja_img5]").find('span')[0].id;
    if ($("#caja_img5").hasClass("seleccionCaja")) {

        if ((caja5 == "¡Hola!") || (caja5 == "¡Qué dolor!") || (caja5 == "¡Ya basta!") || (caja5 == "¡Hasta mañana!") || (caja5 == "¡Adiós!") || (caja5 == "¡Qué rico!")) {
            respr5 = 10;

            $("#caja_img5").addClass('correcto')


        } else {
            respr5 = -5;
            $("#caja_img5").removeClass('correcto')
            $("#caja_img5").addClass('incorrecto')


        }

    } else {
        respr5 = 0;

    }

    var caja6 = $("div[id=caja_img6]").find('span')[0].id;
    if ($("#caja_img6").hasClass("seleccionCaja")) {

        if ((caja6 == "¡Hola!") || (caja6 == "¡Qué dolor!") || (caja6 == "¡Ya basta!") || (caja6 == "¡Hasta mañana!") || (caja6 == "¡Adiós!") || (caja6 == "¡Qué rico!")) {
            respr6 = 10;

            $("#caja_img6").addClass('correcto')


        } else {
            respr6 = -5;
            $("#caja_img6").removeClass('correcto')
            $("#caja_img6").addClass('incorrecto')


        }

    } else {
        respr6 = 0;

    }

    var caja7 = $("div[id=caja_img7]").find('span')[0].id;
    if ($("#caja_img7").hasClass("seleccionCaja")) {

        if ((caja7 == "¡Hola!") || (caja7 == "¡Qué dolor!") || (caja7 == "¡Ya basta!") || (caja7 == "¡Hasta mañana!") || (caja7 == "¡Adiós!") || (caja7 == "¡Qué rico!")) {
            respr7 = 10;

            $("#caja_img7").addClass('correcto')


        } else {
            respr7 = -5;
            $("#caja_img7").removeClass('correcto')
            $("#caja_img7").addClass('incorrecto')


        }

    } else {
        respr7 = 0;

    }

    var caja8 = $("div[id=caja_img8]").find('span')[0].id;
    if ($("#caja_img8").hasClass("seleccionCaja")) {

        if ((caja8 == "¡Hola!") || (caja8 == "¡Qué dolor!") || (caja8 == "¡Ya basta!") || (caja8 == "¡Hasta mañana!") || (caja8 == "¡Adiós!") || (caja8 == "¡Qué rico!")) {
            respr8 = 10;

            $("#caja_img8").addClass('correcto')


        } else {
            respr8 = -5;
            $("#caja_img8").removeClass('correcto')
            $("#caja_img8").addClass('incorrecto')


        }

    } else {
        respr8 = 0;

    }

    var caja9 = $("div[id=caja_img9]").find('span')[0].id;
    if ($("#caja_img9").hasClass("seleccionCaja")) {

        if ((caja9 == "¡Hola!") || (caja9 == "¡Qué dolor!") || (caja9 == "¡Ya basta!") || (caja9 == "¡Hasta mañana!") || (caja9 == "¡Adiós!") || (caja9 == "¡Qué rico!")) {
            respr9 = 10;

            $("#caja_img9").addClass('correcto')


        } else {
            respr9 = -5;
            $("#caja_img9").removeClass('correcto')
            $("#caja_img9").addClass('incorrecto')


        }

    } else {
        respr9 = 0;

    }


    var suma = parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4) + parseInt(respr5) + parseInt(respr6) + parseInt(respr7) + parseInt(respr8) + parseInt(respr9);
    var totalR = suma / 10;
    var NotaF = (totalR * 10) / 6
    $('#txtNota').html(NotaF.toFixed(2) + ' ');

    document.getElementById('bt_comprobar').disabled = true;
    // body...
}
/*
$("div[id=caja_img1]").click(function(){


//$('.enc').click(function(){
  
  if ($(this).hasClass('seleccionCaja')) {
    $(this).removeClass('seleccionCaja')
   
  }else{
    $(this).addClass('seleccionCaja')
      }    
});


/*   var caja1=$("div[id=caja_img1]").find('span')[0].id;
 
     if ((caja1 == "¡Hola!")||(caja1 == "¡Qué dolor!")||(caja1 == "¡Ya basta!")||(caja1 == "¡Hasta mañana!")||(caja1 == "¡Adiós!")||(caja1 == "¡Qué rico!")) {
      respr1=10;
    }else{
      respr1 =0;
    
     }*/