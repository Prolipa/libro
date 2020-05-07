var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});


document.getElementById("pre8a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre8a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre8a"), 1);
});

var random10 = ['<td> <div style="background-color: #FEEDBB; border-radius: 15px"> <p class="fuente2"><b style="color: #00AEEF">Polinización</b>. Proceso en el que ocurre la transferencia del polen de los estambres al pistilo de las flores por medio del viento, del agua o de los insectos.</p> </div> </td> <td style="width: 50px"></td> <td> <div align="center" id="div0" data-placeholder="Arrastra aquí" class="caja form-control pintar c1" style="height: 130px;"></div> </td>', '<td> <div style="background-color: #DFDAEC; border-radius: 15px"> <p class="fuente2"><b style="color: #00AEEF">Dispersión</b>. Proceso que consiste en el movimiento y acomodo de las semillas para buscar mejor crecimiento y desarrollo por medio del viento, el agua o de los insectos. </p> </div> </td> <td style="width: 50px"></td> <td> <div align="center" id="div1" data-placeholder="Arrastra aquí" class="caja form-control pintar c1" style="height: 130px;"></div> </td>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random11 = ['<td align="center"> <font color="#0055A6" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated"><img id="1" class="hvr-grow" src="img/i1_p19_act8.jpg" style="max-width: 100%"></div> </font> </td>', '<td align="center"> <font color="#0055A6" size="4"> <div class="drag2" data-anijs="if: mouseup, do: bounceIn animated"><img id="2" class="hvr-grow" src="img/i2_p19_act8.jpg" style="max-width: 100%"></div> </font> </td>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

var random12 = ['<td><input id="a0" class="form-control 0 hvr-grow-shadow" style="width: 45px; height: 45px; border-radius: 10px; text-align: center; font-size: 15px;border: 2px solid #00aeef" onkeyup="this.value=this.value.toUpperCase()" type="text" maxlength="1" onkeypress="return soloNumeros1(event)" placeholder="__"></td> <td style="width: 40px"></td> <td> <p class="fuente">El Sol gira alrededor de la Tierra.</p> </td>', '<td><input id="a1" class="form-control 0 hvr-grow-shadow" style="width: 45px; height: 45px; border-radius: 10px; text-align: center; font-size: 15px;border: 2px solid #00aeef" onkeyup="this.value=this.value.toUpperCase()" type="text" maxlength="1" onkeypress="return soloNumeros1(event)" placeholder="__"></td> <td style="width: 40px"></td> <td> <p class="fuente">La Tierra tarda 24 horas en su movimiento de rotación.</p> </td>', '<td><input id="a2" class="form-control 0 hvr-grow-shadow" style="width: 45px; height: 45px; border-radius: 10px; text-align: center; font-size: 15px;border: 2px solid #00aeef" onkeyup="this.value=this.value.toUpperCase()" type="text" maxlength="1" onkeypress="return soloNumeros1(event)" placeholder="__"></td> <td style="width: 40px"></td> <td> <p class="fuente">El giro de la Tierra es de norte a sur.</p> </td>', '<td><input id="a3" class="form-control 0 hvr-grow-shadow" style="width: 45px; height: 45px; border-radius: 10px; text-align: center; font-size: 15px;border: 2px solid #00aeef" onkeyup="this.value=this.value.toUpperCase()" type="text" maxlength="1" onkeypress="return soloNumeros1(event)" placeholder="__"></td> <td style="width: 40px"></td> <td> <p class="fuente">El día y la noche se producen por el movimiento de rotación.</p> </td>', '<td><input id="a4" class="form-control 0 hvr-grow-shadow" style="width: 45px; height: 45px; border-radius: 10px; text-align: center; font-size: 15px;border: 2px solid #00aeef" onkeyup="this.value=this.value.toUpperCase()" type="text" maxlength="1" onkeypress="return soloNumeros1(event)" placeholder="__"></td> <td style="width: 40px"></td> <td> <p class="fuente">El movimiento que realiza la Tierra sobre su propio eje es el movimiento de traslación.</p> </td>', '<td><input id="a5" class="form-control 0 hvr-grow-shadow" style="width: 45px; height: 45px; border-radius: 10px; text-align: center; font-size: 15px;border: 2px solid #00aeef" onkeyup="this.value=this.value.toUpperCase()" type="text" maxlength="1" onkeypress="return soloNumeros1(event)" placeholder="__"></td> <td style="width: 40px"></td> <td> <p class="fuente">El movimiento de traslación da lugar a la sucesión de las estaciones.</p> </td>']
var act012Txt = document.getElementsByClassName('act12class');

random12.sort(f_randomico);
for (i = 0; i < act012Txt.length; i++) {
    $('#' + act012Txt[i].id).html(random12[i]);
}

var random13 = ['<div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a1"><img class="hvr-grow" style="mix-blend-mode: multiply; max-width: 100%;" src="img/i2_p20_act8.jpg"></div> </div> <br> <select class="hvr-bounce-in random2 imaf2" id="sell0" style="font-size: 15px;"></select><br><br>', '<div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a2"><img class="hvr-grow" style="mix-blend-mode: multiply; max-width: 100%;" src="img/i3_p20_act8.jpg"></div> </div><br> <select class="hvr-bounce-in random2 imaf2" id="sell1" style="font-size: 15px;"></select><br><br>', '<div data-anijs="if: click, do: bounceIn animated"> <div class="1 enc1a3"><img class="hvr-grow" style="mix-blend-mode: multiply; max-width: 100%;" src="img/i4_p20_act8.jpg"></div> </div><br> <select class="hvr-bounce-in random2 imaf2" id="sell2" style="font-size: 15px;"></select><br><br>']
var act013Txt = document.getElementsByClassName('act13class');

random13.sort(f_randomico);
for (i = 0; i < act013Txt.length; i++) {
    $('#' + act013Txt[i].id).html(random13[i]);
}

var random14 = ['<p class="fuente" style="display: inline; width: 100%"><br>La energía&emsp;<select class="hvr-bounce-in random3 imaf2" id="selll0"> </select>&emsp;nos proporciona luz.</p>', '<p class="fuente" style="display: inline; width: 100%"><br>La energía&emsp;<select class="hvr-bounce-in random3 imaf2" id="selll1"> </select>&emsp;nos produce calor.</p>', '<p class="fuente" style="display: inline; width: 100%"><br>La energía&emsp;<select class="hvr-bounce-in random3 imaf2" id="selll2"> </select>&emsp;hace funcionar motores.</p>']
var act014Txt = document.getElementsByClassName('act14class');

random14.sort(f_randomico);
for (i = 0; i < act014Txt.length; i++) {
    $('#' + act014Txt[i].id).html(random14[i]);
}


function pregunta1() {
    var respact2 = ['2', '1'];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#div' + [i] + ' img').attr('id');
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#div' + [i] + '').css("background", "#00e600");
        } else {
            $('#div' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 2;
    $("#pre1a").val(parseFloat(total).toFixed(2));
}


function pregunta2() {
    var cont1 = 0;
    var respact1 = ['pez', 'rana', 'pollo', 'perro', 'lagarto'];
    for (var i = 1; i < 6; i++) {
        var res1 = $('#act3num' + [i] + '').val();
        var rc = respact1.indexOf(res1);
        if (respact1[rc] == res1) {
            cont1 = cont1 + 1;
            respact1[rc] = 'A';
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");

        }
        console.log(respact1);

    }
    var cont2 = 0;
    var respact2 = ['mariposa', 'araña', 'abeja', 'saltamontes', 'escarabajo'];
    for (var j = 6; j < 11; j++) {
        var res2 = $('#act3num' + [j] + '').val();
        var rc = respact2.indexOf(res2);
        if (respact2[rc] == res2) {
            cont2 = cont2 + 1;
            respact2[rc] = 'A';
            $('#act3num' + [j] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [j] + '').css("background", "#ff6666");


        }
        console.log(respact2);

    }
    var totalcont = cont1 + cont2;
    var total = (totalcont * 1) / 10;
    $('#pre2a').val(parseFloat(total).toFixed(2));
}



var random1 = [
    '<option>Cráneo</option>',
    '<option>Costillas</option>',
    '<option>Fémur</option>',
    '<option>Tibia</option>',
    '<option>Peroné</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta3() {

    var respact2 = ['Cráneo', 'Costillas', 'Fémur', 'Peroné', 'Tibia'];
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
        $('#pre3a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre3a').val(parseFloat(total).toFixed(2));
    }
}


var tpre1 = 0;

var correctas1 = {
    0: ['F', 'V', 'F', 'V', 'F', 'F'],

};


var corr1 = 0;
var veclet1 = ['a'];
var limite1 = [5];


function pregunta5() {

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
    tpre1 = ((corr1 * 1) / 6).toFixed(2);
    $("#pre5a").val(parseFloat(tpre1).toFixed(2));
    // body...
}



$('.1').css('cursor', 'pointer');
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1a1':
            $('.enc1a1').addClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');

            break;
        case '1 enc1a2':
            $('.enc1a2').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');

            break;

        case '1 enc1a3':
            $('.enc1a3').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');

            break;
    }
});




var random2 = [
    '<option>Microscopio</option>',
    '<option>Lupa</option>',
    '<option>Telescopio</option>',
];
random2.sort(f_randomico);
$('.random2').html('<option>-Seleccione-</option>' + random2 + '');

function pregunta6() {

    var respact2 = ['Microscopio', 'Lupa', 'Telescopio'];
    var cont = 0;
    for (var i = 0; i < respact2.length; i++) {
        var res = $('#sell' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sell' + [i] + '').css("background", "#00e600");
        } else {
            $('#sell' + [i] + '').css("background", "#ff6666");
        }
    }
    var total = (cont * 0.75) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);


    var nt1 = 0;

    if ($('.enc1a3').hasClass('encierreCaja') == true) {
        nt1 = 1;
        $('.enc1a3').addClass('correcto');
    } else if ($('.enc1a1').hasClass('encierreCaja') == true) {
        $('.enc1a1').addClass('incorrecto');
    } else if ($('.enc1a2').hasClass('encierreCaja') == true) {
        $('.enc1a2').addClass('incorrecto');
    }
    var subtotal = parseFloat(nt1);
    var seltotal = (subtotal * 0.75) / 1;

    var sumatotal = parseFloat(total) + parseFloat(seltotal);

    if (sumatotal < 0) {
        sumatotal = 0;
        $('#pre6a').val(parseFloat(sumatotal).toFixed(2));
    } else {
        $('#pre6a').val(parseFloat(sumatotal).toFixed(2));
    }
}


var random3 = [
    '<option>luminosa</option>',
    '<option>calórica</option>',
    '<option>eléctrica</option>',
];
random3.sort(f_randomico);
$('.random3').html('<option>-Seleccione-</option>' + random3 + '');

function pregunta7() {

    var respact2 = ['luminosa', 'calórica', 'eléctrica'];
    var cont = 0;
    for (var i = 0; i < respact2.length; i++) {
        var res = $('#selll' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#selll' + [i] + '').css("background", "#00e600");
        } else {
            $('#selll' + [i] + '').css("background", "#ff6666");
        }
    }
    var total = (cont * 1.5) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre7a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre7a').val(parseFloat(total).toFixed(2));
    }
}


function total() {

    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;
    var pre6a = document.getElementById('pre6a').value;
    var pre7a = document.getElementById('pre7a').value;
    var pre8a = document.getElementById('pre8a').value;

    if (pre4a == "") {
        alert("Calificar Pregunta 4");
        document.getElementById('pre4a').focus();
        $('#pre4a').addClass("alertaabierta");
    } else {
        if (pre8a == "") {
            alert("Calificar Pregunta 7.1");
            document.getElementById('pre8a').focus();
            $('#pre8a').addClass("alertaabierta");
        } else {

            pregunta1();
            pregunta2();
            pregunta3();
            pregunta5();
            pregunta6();
            pregunta7();
            var pre1a = document.getElementById('pre1a').value;
            var pre2a = document.getElementById('pre2a').value;
            var pre3a = document.getElementById('pre3a').value;
            var pre4a = document.getElementById('pre4a').value;
            var pre5a = document.getElementById('pre5a').value;
            var pre6a = document.getElementById('pre6a').value;
            var pre7a = document.getElementById('pre7a').value;
            var pre8a = document.getElementById('pre8a').value;

            cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a) + parseFloat(pre6a) + parseFloat(pre7a) + parseFloat(pre8a);
            Calculo_nota();
            document.getElementById('bt_comprobar').disabled = true;
            $('input').attr("disabled", true);
            $('textarea').attr("disabled", true);
            $('#txtAlumno').attr("disabled", false);
            $('div').attr("disabled", true);
            $('.nota-abierta').css("background", "#00e600");
            $('select').attr("disabled", true);
            $('.1').off('click');
            $('.desaparece').filter(function() {
                return $.trim($(this).text()) === ''
            }).hide()
        }
    }
}