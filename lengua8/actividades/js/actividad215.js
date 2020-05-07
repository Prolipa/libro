var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 3, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 3);
});

var random1 = ['<td style="border: 3px solid #5c98cb"> <p class="fuente1">El autor de la crónica se refiere a otra persona.</p> </td> <td align="center" style="border: 3px solid #5c98cb"> <input placeholder="I-C" id="a0" class="form-control" style="display:inline; max-width: 55px; border: 2px solid #b41e8d; text-align: center;" onkeyup="this.value=this.value.toUpperCase()" maxlength="1" type="text"> </td>', '<td style="border: 3px solid #5c98cb"> <p class="fuente1">El autor de la crónica se refiere a sí mismo. </p> </td> <td align="center" style="border: 3px solid #5c98cb"> <input placeholder="I-C" id="a1" class="form-control" style="display:inline; max-width: 55px; border: 2px solid #b41e8d; text-align: center;" onkeyup="this.value=this.value.toUpperCase()" maxlength="1" type="text"> </td>', '<td style="border: 3px solid #5c98cb"> <p class="fuente1">El autor de la crónica no es testigo presencial. </p> </td> <td align="center" style="border: 3px solid #5c98cb"> <input placeholder="I-C" id="a2" class="form-control" style="display:inline; max-width: 55px; border: 2px solid #b41e8d; text-align: center;" onkeyup="this.value=this.value.toUpperCase()" maxlength="1" type="text"> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="width: 500px;border-radius: 20px;border: 3px solid #62a0cf"> <p class="fuente">El cronista basa los datos en un testigo.</p> </td> <td style="width: 160px; border-radius: 20px; border: 3px solid #62a0cf"> <span class="1 enc4a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 3px solid #62a0cf"> <p class="fuente">El cronista interpreta los datos.</p> </td> <td style="width: 160px; border-radius: 20px; border: 3px solid #62a0cf"> <span class="2 enc4a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 3px solid #62a0cf"> <p class="fuente">El cronista añade sus comentarios.</p> </td> <td style="width: 160px; border-radius: 20px; border: 3px solid #62a0cf"> <span class="3 enc4a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 3px solid #62a0cf"> <p class="fuente">El cronista está implícito.</p> </td> <td style="width: 160px; border-radius: 20px; border: 3px solid #62a0cf"> <span class="4 enc4a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 3px solid #62a0cf"> <p class="fuente">El cronista es el escritor.</p> </td> <td style="width: 160px; border-radius: 20px; border: 3px solid #62a0cf"> <span class="5 enc4a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 3px solid #62a0cf"> <p class="fuente">El cronista no escribe.</p> </td> <td style="width: 160px; border-radius: 20px; border: 3px solid #62a0cf"> <span class="6 enc4a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>', '<td style="width: 500px;border-radius: 20px;border: 3px solid #62a0cf"> <p class="fuente">El fragmento narra hechos actuales.</p> </td> <td style="width: 160px; border-radius: 20px; border: 3px solid #62a0cf"> <span class="7 enc4a" style="padding: 10px; width: 50px;border: 5px solid #cadbec">&emsp;&emsp;&emsp;</span> </td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

//pregunta1
var tpre1 = 0;

var correctas1 = {
    0: ['I', 'C', 'I'],

};


var corr1 = 0;
var veclet1 = ['a'];
var limite1 = [2];


function pregunta2() {

    for (var i = 0; i <= veclet1.length; i++) {
        for (var j = 0; j <= limite1[i]; j++) {

            if ((correctas1[i][j]) == ($('#' + veclet1[i] + [j] + '').val())) {
                corr1++;
                f_ok($('#' + veclet1[i] + [j] + '').css("background", "#00e600"));
            } else {
                f_no($('#' + veclet1[i] + [j] + '').css("background", "#ff6666"));
                corr1;
            }
        }
    }
    tpre1 = ((corr1 * 3) / 3).toFixed(2);
    $("#pre2a").val(parseFloat(tpre1).toFixed(2));
    // body...
}

$(".enc4a").css('cursor', 'pointer');
$(".enc4a").click(function() {
    if ($(this).hasClass("seleccionCaja")) {
        $(this).removeClass("seleccionCaja");
    } else {
        $(this).addClass("seleccionCaja");
    }
});

function pregunta4() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0;
    if ($('.2').hasClass('seleccionCaja') == true) {
        nt1 = 1;
        $('.2').addClass('correcto');
    }

    if ($('.3').hasClass('seleccionCaja') == true) {
        nt2 = 1;
        $('.3').addClass('correcto');
    }

    if ($('.4').hasClass('seleccionCaja') == true) {
        nt3 = 1;
        $('.4').addClass('correcto');
    }

    if ($('.5').hasClass('seleccionCaja') == true) {
        nt4 = 1;
        $('.5').addClass('correcto');
    }

    if ($('.1').hasClass('seleccionCaja') == true) {
        nt5 = 1;
        $('.1').addClass('incorrecto');

    }

    if ($('.6').hasClass('seleccionCaja') == true) {
        nt6 = 1;
        $('.6').addClass('incorrecto');

    }

    if ($('.7').hasClass('seleccionCaja') == true) {
        nt7 = 1;
        $('.7').addClass('incorrecto');

    }

    ////////////////////////////////////////////

    $('.enc4a').off('click');
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) - parseFloat(nt5) - parseFloat(nt6) - parseFloat(nt7);
    var pre4aa = (subtotal * 4) / 4;

    if (pre4aa < 0) {
        pre4aa = 0;
        $('#pre4a').val(parseFloat(pre4aa).toFixed(2));
    } else {
        $('#pre4a').val(parseFloat(pre4aa).toFixed(2));
    }
}



function total() {
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;

    if (pre3a == "") {
        alert("Calificar Pregunta 3");
    } else {
        pregunta2();
        pregunta4();
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;
        var pre4a = document.getElementById('pre4a').value;

        cor = parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
    }
}