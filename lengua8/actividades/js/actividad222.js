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
    validNumero(0, 2, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});

var random1 = ['<td> <p class="fuente"><b>Crónica urbana:</b> Temas de la ciudad</p> </td> <td> <span class="1 enc1a1" style="padding: 10px; width: 50px;border: 5px solid #8e499b">&emsp;&emsp;&emsp;</span> </td>', '<td> <p class="fuente"><b>Crónica local:</b> Temas concretos de zonas rurales o de provincia</p> </td> <td> <span class="1 enc1a2" style="padding: 10px; width: 50px;border: 5px solid #b41e8d">&emsp;&emsp;&emsp;</span> </td>', '<td> <p class="fuente"><b>Crónica de viajes:</b> Experiencias de un viajero</p> </td> <td> <span class="1 enc1a3" style="padding: 10px; width: 50px;border: 5px solid #f8b5b9">&emsp;&emsp;&emsp;</span> </td>', '<td> <p class="fuente"><b>Crónica especializada:</b> Política, deporte, cultura, salud, etc.</p> </td> <td> <span class="1 enc1a4" style="padding: 10px; width: 50px;border: 5px solid #fab01b">&emsp;&emsp;&emsp;</span> </td>', '<td> <p class="fuente"><b>Crónica social:</b> Problemas propios de los grupos sociales</p> </td> <td> <span class="1 enc1a5" style="padding: 10px; width: 50px;border: 5px solid #40ae49">&emsp;&emsp;&emsp;</span> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">Tiene un título interesante.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">Contiene la información necesaria de acuerdo con el tipo de crónica elegida.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">Cumple con la estructura seleccionada: cronológica o de acción.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">El contenido refleja el trabajo de investigación y veracidad.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">En la crónica se utilizan adverbios.</p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 5px solid #b284bb"> <p class="fuente">En la crónica se emplean oraciones compuestas coordinadas. </p> </td> <td style="width: 160px; border-radius: 20px; border: 5px solid #b284bb"> <span class="enc3a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

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

$(".enc3a").css('cursor', 'pointer');
$(".enc3a").click(function() {
    if ($(this).hasClass("seleccionCaja")) {
        $(this).removeClass("seleccionCaja");
    } else {
        $(this).addClass("seleccionCaja");
    }
});


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;

    if (pre1a == "" || pre2a == "" || pre3a == "") {
        alert("Calificar Pregunta 1,2 ó 3");
    } else {

        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
        $('.enc3a').off('click');
        $('.1').off('click');
    }
}