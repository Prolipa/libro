var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 4, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 4);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

var random1 = ['<td style="width: 160px; border-radius: 20px; border: 5px solid #aadba8"> <span class="1 enc2a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td> <td style="border-radius: 20px;border: 5px solid #aadba8"> <p class="fuente">Preservar, restaurar y cuidar exige tiempo y esfuerzo. </p> </td>', '<td style="width: 160px; border-radius: 20px; border: 5px solid #aadba8"> <span class="2 enc2a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td> <td style="border-radius: 20px;border: 5px solid #aadba8"> <p class="fuente">Debemos evitar el consumismo, sobre todo el que produce basura.</p> </td>', '<td style="width: 160px; border-radius: 20px; border: 5px solid #aadba8"> <span class="3 enc2a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td> <td style="border-radius: 20px;border: 5px solid #aadba8"> <p class="fuente">Es indispensable usar nuestros recursos de manera racional.</p> </td>', '<td style="width: 160px; border-radius: 20px; border: 5px solid #aadba8"> <span class="4 enc2a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td> <td style="border-radius: 20px;border: 5px solid #aadba8"> <p class="fuente">Evitemos sobreexplotar los recursos vegetales y acuáticos.</p> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

$(".enc2a").css('cursor', 'pointer');
$(".enc2a").click(function() {
    if ($(this).hasClass("seleccionCaja")) {
        $(this).removeClass("seleccionCaja");
    } else {
        $(this).addClass("seleccionCaja");
    }
});

function pregunta2() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if ($('.2').hasClass('seleccionCaja') == true) {
        nt1 = 1;
        $('.2').addClass('correcto');
    }

    if ($('.3').hasClass('seleccionCaja') == true) {
        nt2 = 1;
        $('.3').addClass('correcto');
    }

    if ($('.1').hasClass('seleccionCaja') == true) {
        nt3 = 1;
        $('.1').addClass('incorrecto');

    }

    if ($('.4').hasClass('seleccionCaja') == true) {
        nt4 = 1;
        $('.4').addClass('incorrecto');

    }

    ////////////////////////////////////////////

    $('.enc2a').off('click');
    var subtotal = parseFloat(nt1) + parseFloat(nt2) - parseFloat(nt3) - parseFloat(nt4);
    /// var pre2a = (subtotal * 6) / 4;

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
    var pre5a = document.getElementById('pre5a').value;

    if (pre1a == "" || pre3a == "" || pre4a == "" || pre5a == "") {
        alert("Calificar Pregunta 1,3,4 ó 5");
    } else {
        pregunta2();
        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;
        var pre4a = document.getElementById('pre4a').value;
        var pre5a = document.getElementById('pre5a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').addClass('backnota');
    }
}