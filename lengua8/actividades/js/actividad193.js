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

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 4, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 4);
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

var random1 = ['<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">Tiene un título interesante.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">La introducción presenta el tema, el objetivo y la idea central de la carta.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', ' <td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">El desarrollo expone las justificaciones y razonamientos acerca de las opiniones vertidas. </p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">La información expuesta es de utilidad para el público.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">La conclusión resume las ideas expuestas y contiene sugerencias constructivas. </p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">En la carta de lector se utilizan párrafos argumentativos y descriptivos; uso de reglas ortográficas de la<font color="#00afef"><b> v</b></font> y la<font color="#00afef"><b> b</b></font>.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="width: 500px;border-radius: 20px;border: 5px solid #00aeef"> <p class="fuente">Una revista estudiantil del colegio</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #00aeef"> <span class="1 enc1a1" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #00aeef"> <p class="fuente">La página web de tu institución educativa</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #00aeef"> <span class="1 enc1a2" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #00aeef"> <p class="fuente">Un blog</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #00aeef"> <span class="1 enc1a3" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', ' <td style="width: 500px;border-radius: 20px;border: 5px solid #00aeef"> <p class="fuente">La cartelera de la clase</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #00aeef"> <span class="1 enc1a4" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #00aeef"> <p class="fuente">Otra forma que tú propongas</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #00aeef"> <span class="1 enc1a5" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}


$(".enc3a").css('cursor', 'pointer');
$(".enc3a").click(function() {
    if ($(this).hasClass("seleccionCaja")) {
        $(this).removeClass("seleccionCaja");
    } else {
        $(this).addClass("seleccionCaja");
    }
});

$(".1").css('cursor', 'pointer');
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1a1':
            $('.enc1a1').addClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');
            $('.enc1a4').removeClass('seleccionCaja');
            $('.enc1a5').removeClass('seleccionCaja');

            break;
        case '1 enc1a2':
            $('.enc1a2').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');
            $('.enc1a4').removeClass('seleccionCaja');
            $('.enc1a5').removeClass('seleccionCaja');

            break;
        case '1 enc1a3':
            $('.enc1a3').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');
            $('.enc1a4').removeClass('seleccionCaja');
            $('.enc1a5').removeClass('seleccionCaja');

            break;
        case '1 enc1a4':
            $('.enc1a4').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');
            $('.enc1a5').removeClass('seleccionCaja');

            break;
        case '1 enc1a5':
            $('.enc1a5').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');
            $('.enc1a4').removeClass('seleccionCaja');

            break;

    }
});

function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;

    if (pre1a == "" || pre2a == "" || pre3a == "" || pre4a == "") {
        alert("Calificar Pregunta 1 ó 2");
    } else {

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
        $('.nota-abierta').addClass('backnota');
        $('.enc3a').off('click');
        $('.1').off('click');
    }
}