var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 6, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 6);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});

var random1 = ['<td style="width: 500px;border-radius: 20px;border: 5px solid #00aeef"> <p class="fuente">Hacer publicidad.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #00aeef"> <span class="1 enc1a1" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #00aeef"> <p class="fuente">Dar a conocer los pormenores de la historia de una joya urbana.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #00aeef"> <span class="1 enc1a2" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #00aeef"> <p class="fuente">Reflexionar sobre un problema social.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #00aeef"> <span class="1 enc1a3" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

$(".1").css('cursor', 'pointer');
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1a1':
            $('.enc1a1').addClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');

            break;
        case '1 enc1a2':
            $('.enc1a2').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');

            break;
        case '1 enc1a3':
            $('.enc1a3').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');

            break;

    }
});

function pregunta1() {
    var nt1 = 0;

    if ($('.enc1a2').hasClass('seleccionCaja') == true) {
        nt1 = 2;
        $('.enc1a2').addClass('correcto');

    } else if ($('.enc1a1').hasClass('seleccionCaja') == true) {
        $('.enc1a1').addClass('incorrecto');

    } else if ($('.enc1a3').hasClass('seleccionCaja') == true) {
        $('.enc1a3').addClass('incorrecto');

    }

    $('.1').off('click');

    var subtotal = parseFloat(nt1);
    //var total = (subtotal * 2) / 3;
    if (subtotal < 0) {
        subtotal = 0;
        $('#pre2a').val(parseFloat(subtotal).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(subtotal).toFixed(2));
    }
}


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;

    if (pre1a == "" || pre3a == "" || pre4a == "") {
        alert("Calificar Pregunta 1,3 ó 4");
    } else {
        pregunta1();
        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;
        var pre4a = document.getElementById('pre4a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
    }
}