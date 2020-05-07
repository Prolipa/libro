var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 5, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

var random1 = ['<td style="width: 500px; border-radius: 20px;border: 5px solid #35bef2"> <p class="fuente">declamación</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #35bef2"> <span class="1 enc1a1" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px; border-radius: 20px;border: 5px solid #35bef2"> <p class="fuente">narración</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #35bef2"> <span class="1 enc1a2" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px; border-radius: 20px;border: 5px solid #35bef2"> <p class="fuente">representación</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #35bef2"> <span class="1 enc1a3" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>']
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
        nt1 = 5;
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
        $('#pre1a').val(parseFloat(subtotal).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(subtotal).toFixed(2));
    }
}


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;

    if (pre2a == "") {
        alert("Calificar Pregunta 2");
    } else {
        pregunta1();
        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').addClass('backnota');
    }
}