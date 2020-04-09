$("#txtNota").html("0");
$("#n_pagina").html("29");
var titulos = "aplico";
$('.enc').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
    } else {
        $(this).addClass('encierra')
    }
})

$('.enc1').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
});
var respr1 = 0,
    respr2 = 0,
    respr3 = 0,
    respr4 = 0;

function calcular() {

    for (var i = 0; i <= 40; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if ($('#' + [i] + '').hasClass("subrayar")) {

            if ((caja == "El") || (caja == "el") || (caja == "los") || (caja == "la") || (caja == "las")) {
                respr1 = respr1 + 1;

                $('#' + [i] + '').addClass('correcto')
            } else {
                respr2 = respr2 + 1;

                $('#' + [i] + '').removeClass('correcto')
                $('#' + [i] + '').addClass('incorrecto')

            }

        } else {
        


        }



    }
    var buenas = (1*10)/8;
    var resbuenas = buenas*respr1;
    var malas = (1*10)/32;
    var resmalas = malas * respr2;
    var total = resbuenas - resmalas;

    

    /*var rbuenas = parseFloat(respr1) / 40;
    var rmalas = parseFloat(respr2) / 40;
    var subtotal = ((rbuenas - rmalas) * 10) / rbuenas;*/

    for (var i = 41; i <= 82; i++) {
        var caja2 = $('span[id=' + [i] + ']').text();
        if ($('#' + [i] + '').hasClass("encierra")) {

            if ((caja2 == "jefe") || (caja2 == "albañiles") || (caja2 == "importancia") || (caja2 == "piedras") || (caja2 == "edificio") || (caja2 == "palacio") || (caja2 == "trabajo")) {
                respr3 = respr3 + 1;

                $('#' + [i] + '').addClass('correcto')
            } else {
                respr4 = respr4 + 1;

                $('#' + [i] + '').removeClass('correcto')
                $('#' + [i] + '').addClass('incorrecto')

            }

        } else {



        }



    }

    	  var buenas2 = (1*10)/7;
    var resbuenas2 = buenas2*respr3;
    var malas2 = (1*10)/33;
    var resmalas2 = malas2 * respr4;
    var total2 = resbuenas2 - resmalas2;
   var totales = (total+total2)/2;
    $('#txtNota').html(totales.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
  

}