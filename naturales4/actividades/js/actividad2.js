var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;


document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

var random1 = ['<div align="center"><img src="img/i1_p11_act2.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random1 imaf2" id="sel0" style="font-size: 15px;"></select><br><br></div>', '<div align="center"><img src="img/i2_p11_act2.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random1 imaf2" id="sel1" style="font-size: 15px;"></select><br><br></div>', '<div align="center"><img src="img/i3_p11_act2.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random1 imaf2" id="sel2" style="font-size: 15px;"></select><br><br></div>', '<div align="center"><img src="img/i4_p11_act2.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random1 imaf2" id="sel3" style="font-size: 15px;"></select><br><br></div>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">La semilla está desnuda</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">Son plantas maderables y de gran tamaño</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">Tienen raíz, tallo, hojas, flores y fruto</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">Tienen la semilla dentro del fruto</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">Hojas de formas variadas, perennes y caducas</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">Sus hojas y flores son de diferentes colores formas y tamaño</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">Son de clima templado o frío</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">Las hojas son perennes en forma de aguja y resistentes al frío</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">No tienen fruto</div> </font>', '<font color="#0077c0" size="4"> <div class="drag1" data-anijs="if: mouseup, do: bounceIn animated; if: mouseover, do: hvr-grow2 animated">Tienen la semilla protegida por escamas duras en forma de cono</div> </font>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}


var random1 = [
    '<option>Angiosperma</option>',
    '<option>Gimnosperma</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta2() {

    var respact2 = ['Angiosperma', 'Gimnosperma', 'Angiosperma', 'Gimnosperma'];
    var cont = 0;
    for (var i = 0; i < respact2.length; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }
    }
    var total = (cont * 1) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre2a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre2a').val(parseFloat(total).toFixed(2));
    }
}




function pregunta3() {
    var cont = 0
    var div0 = $('#div0').text();
    if ((div0 == "Tienen raíz, tallo, hojas, flores y fruto") || (div0 == "Tienen la semilla dentro del fruto") || (div0 == "Hojas de formas variadas, perennes y caducas") || (div0 == "Sus hojas y flores son de diferentes colores formas y tamaño")) {
        cont = cont + 1;
        $('#div0').css("background", "#00e600");
    } else {
        $('#div0').css("background", "#ff6666");
    }

    var div2 = $('#div2').text();
    if ((div2 == "Tienen raíz, tallo, hojas, flores y fruto") || (div2 == "Tienen la semilla dentro del fruto") || (div2 == "Hojas de formas variadas, perennes y caducas") || (div2 == "Sus hojas y flores son de diferentes colores formas y tamaño")) {
        cont = cont + 1;
        $('#div2').css("background", "#00e600");
    } else {
        $('#div2').css("background", "#ff6666");
    }

    var div4 = $('#div4').text();
    if ((div4 == "Tienen raíz, tallo, hojas, flores y fruto") || (div4 == "Tienen la semilla dentro del fruto") || (div4 == "Hojas de formas variadas, perennes y caducas") || (div4 == "Sus hojas y flores son de diferentes colores formas y tamaño")) {
        cont = cont + 1;
        $('#div4').css("background", "#00e600");
    } else {
        $('#div4').css("background", "#ff6666");
    }

    var div6 = $('#div6').text();
    if ((div6 == "Tienen raíz, tallo, hojas, flores y fruto") || (div6 == "Tienen la semilla dentro del fruto") || (div6 == "Hojas de formas variadas, perennes y caducas") || (div6 == "Sus hojas y flores son de diferentes colores formas y tamaño")) {
        cont = cont + 1;
        $('#div6').css("background", "#00e600");
    } else {
        $('#div6').css("background", "#ff6666");
    }

    var div1 = $('#div1').text();
    if ((div1 == "La semilla está desnuda") || (div1 == "Son plantas maderables y de gran tamaño") || (div1 == "Son de clima templado o frío") || (div1 == "Las hojas son perennes en forma de aguja y resistentes al frío") || (div1 == "No tienen fruto") || (div1 == "Tienen la semilla protegida por escamas duras en forma de cono")) {
        cont = cont + 1;
        $('#div1').css("background", "#00e600");
    } else {
        $('#div1').css("background", "#ff6666");
    }

    var div3 = $('#div3').text();
    if ((div3 == "La semilla está desnuda") || (div3 == "Son plantas maderables y de gran tamaño") || (div3 == "Son de clima templado o frío") || (div3 == "Las hojas son perennes en forma de aguja y resistentes al frío") || (div3 == "No tienen fruto") || (div3 == "Tienen la semilla protegida por escamas duras en forma de cono")) {
        cont = cont + 1;
        $('#div3').css("background", "#00e600");
    } else {
        $('#div3').css("background", "#ff6666");
    }

    var div5 = $('#div5').text();
    if ((div5 == "La semilla está desnuda") || (div5 == "Son plantas maderables y de gran tamaño") || (div5 == "Son de clima templado o frío") || (div5 == "Las hojas son perennes en forma de aguja y resistentes al frío") || (div5 == "No tienen fruto") || (div5 == "Tienen la semilla protegida por escamas duras en forma de cono")) {
        cont = cont + 1;
        $('#div5').css("background", "#00e600");
    } else {
        $('#div5').css("background", "#ff6666");
    }

    var div7 = $('#div7').text();
    if ((div7 == "La semilla está desnuda") || (div7 == "Son plantas maderables y de gran tamaño") || (div7 == "Son de clima templado o frío") || (div7 == "Las hojas son perennes en forma de aguja y resistentes al frío") || (div7 == "No tienen fruto") || (div7 == "Tienen la semilla protegida por escamas duras en forma de cono")) {
        cont = cont + 1;
        $('#div7').css("background", "#00e600");
    } else {
        $('#div7').css("background", "#ff6666");
    }

    var div8 = $('#div8').text();
    if ((div8 == "La semilla está desnuda") || (div8 == "Son plantas maderables y de gran tamaño") || (div8 == "Son de clima templado o frío") || (div8 == "Las hojas son perennes en forma de aguja y resistentes al frío") || (div8 == "No tienen fruto") || (div8 == "Tienen la semilla protegida por escamas duras en forma de cono")) {
        cont = cont + 1;
        $('#div8').css("background", "#00e600");
    } else {
        $('#div8').css("background", "#ff6666");
    }

    var div9 = $('#div9').text();
    if ((div9 == "La semilla está desnuda") || (div9 == "Son plantas maderables y de gran tamaño") || (div9 == "Son de clima templado o frío") || (div9 == "Las hojas son perennes en forma de aguja y resistentes al frío") || (div9 == "No tienen fruto") || (div9 == "Tienen la semilla protegida por escamas duras en forma de cono")) {
        cont = cont + 1;
        $('#div9').css("background", "#00e600");
    } else {
        $('#div9').css("background", "#ff6666");
    }


    var total = (cont * 5) / 10;
    $('#pre3a').val(parseFloat(total).toFixed(2));
}


function total() {

    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;

    if (pre1a == "") {
        alert("Calificar Pregunta 1");
        document.getElementById('pre1a').focus();
        $('#pre1a').addClass("alertaabierta");
    } else {
        if (pre4a == "") {
            alert("Calificar Pregunta 4");
            document.getElementById('pre4a').focus();
            $('#pre4a').addClass("alertaabierta");
        } else {
            if (pre5a == "") {
                alert("Calificar Pregunta de Evaluo mi proceso");
                document.getElementById('pre5a').focus();
                $('#pre5a').addClass("alertaabierta");
            } else {

                pregunta2();
                pregunta3();
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
                $('.nota-abierta').css("background", "#00e600");
                $('.enc2a').off('click');
                $('select').attr("disabled", true);
                $('.desaparece').filter(function() {
                    return $.trim($(this).text()) === ''
                }).hide()
            }
        }
    }
}