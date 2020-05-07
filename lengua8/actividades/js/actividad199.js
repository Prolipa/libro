$('#activity .panel-collapse').addClass('in');

var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 0.25, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 0.25)
});

document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 1.25, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 1.25)
});

document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 1)
});

document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 0.5)
});

document.getElementById('nota6').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota6'), 1.5)
});

document.getElementById('nota7').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota7'), 1.5)
});

document.getElementById('nota8').addEventListener('keypress', () => {
    validNumero(0, 0.25, 1);
});
document.getElementById('nota8').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota8'), 0.25)
});

document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 1)
});

document.getElementById('nota10').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota10'), 1.5)
});

var random1 = ['<td style="width: 800px; "> <p class="fuente">la presencia de dioses.</p> </td> <td> <span class="1 enc1a1" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">el encanto del paisaje.</p> </td> <td> <span class="1 enc1a2" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">la lucha entre dioses.</p> </td> <td> <span class="1 enc1a3" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">la creación del hombre y la mujer. </p> </td> <td> <span class="1 enc1a4" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="width: 800px; "> <p class="fuente">personas y deidad.</p> </td> <td> <span class="2 enc2a1" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">objetos inanimados.</p> </td> <td> <span class="2 enc2a2" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">montes y volcanes.</p> </td> <td> <span class="2 enc2a3" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">personajes de telenovela.</p> </td> <td> <span class="2 enc2a4" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

var random3 = ['<td style="width: 800px; "> <p class="fuente">la personificación. </p> </td> <td> <span class="3 enc3a1" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">la etopeya.</p> </td> <td> <span class="3 enc3a2" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">la hipérbole.</p> </td> <td> <span class="3 enc3a3" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">todas las anteriores.</p> </td> <td> <span class="3 enc3a4" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>']
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

var random4 = ['<td style="width: 800px; "> <p class="fuente">la ciencia, la tecnología y el laboratorio.</p> </td> <td> <span class="4 enc4a1" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">la incomprensión de fenómenos naturales.</p> </td> <td> <span class="4 enc4a2" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">las guerras y las disputas entre parientes.</p> </td> <td> <span class="4 enc4a3" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">la solidaridad familiar.</p> </td> <td> <span class="4 enc4a4" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>']
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

var random5 = ['<td style="width: 800px; "> <p class="fuente">Se conoce el tiempo en que ocurrió la historia, los personajes son personas y animales, el tema es una aventura.</p> </td> <td> <span class="5 enc5a1" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>', '<td style="width: 800px;"> <p class="fuente">No se sabe cuándo ocurrió; los personajes son fenómenos de la naturaleza, seres sobrenaturales; el tema es explicar el origen de los seres y las cosas.</p> </td> <td> <span class="5 enc5a2" style="padding: 10px; width: 50px;border: 3px solid #914f9e; border-radius: 15px">&emsp;&emsp;</span> </td>']
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}

var random6 = ['<p class="fuente2"><b>Párrafo descriptivo</b></p> <textarea class="form-control text-question no-redimensionar " cols="60" rows="5" placeholder="Texto"></textarea> <br>', '<p class="fuente2"><b>El párrafo argumentativo </b></p> <textarea class="form-control text-question no-redimensionar " cols="60" rows="5" placeholder="Texto"></textarea> <br>', '<p class="fuente2"><b>Párrafo expositivo</b></p> <textarea class="form-control text-question no-redimensionar " cols="60" rows="5" placeholder="Texto"></textarea> <br>']
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

var random7 = ['<table align="center"> <tr> <td style="border: 2px solid #faaf19; background-color: #fef0d0"> <p class="fuente2" style="line-height: 56px">anduve, anduvimos tuviste, tuvieron estuvisteis, estuvo.</p> </td> </tr> <tr> <td style="border: 2px solid #faaf19"> <textarea class="form-control text-question no-redimensionar " cols="60" rows="5" placeholder="Texto"></textarea> </td> </tr> </table>', '<table align="center"> <tr> <td style="border: 2px solid #0095d9; background-color: #e8f4f9"> <p class="fuente2">voy, vas, va, vamos, vais, van ve, vaya, vayan vaya, vayas, vaya, vayamos, vayáis, vayan</p> </td> </tr> <tr> <td style="border: 2px solid #0095d9"> <textarea class="form-control text-question no-redimensionar " cols="60" rows="5" placeholder="Texto"></textarea> </td> </tr> </table>']
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}

$(".1").css('cursor', 'pointer');
$(".2").css('cursor', 'pointer');
$(".3").css('cursor', 'pointer');
$(".4").css('cursor', 'pointer');
$(".5").css('cursor', 'pointer');
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1a1':
            $('.enc1a1').addClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');
            $('.enc1a4').removeClass('seleccionCaja');

            break;
        case '1 enc1a2':
            $('.enc1a2').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');
            $('.enc1a4').removeClass('seleccionCaja');

            break;
        case '1 enc1a3':
            $('.enc1a3').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');
            $('.enc1a4').removeClass('seleccionCaja');

            break;
        case '1 enc1a4':
            $('.enc1a4').addClass('seleccionCaja');
            $('.enc1a1').removeClass('seleccionCaja');
            $('.enc1a2').removeClass('seleccionCaja');
            $('.enc1a3').removeClass('seleccionCaja');

            break;

    }
});

$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc2a1':
            $('.enc2a1').addClass('seleccionCaja');
            $('.enc2a2').removeClass('seleccionCaja');
            $('.enc2a3').removeClass('seleccionCaja');
            $('.enc2a4').removeClass('seleccionCaja');

            break;
        case '2 enc2a2':
            $('.enc2a2').addClass('seleccionCaja');
            $('.enc2a1').removeClass('seleccionCaja');
            $('.enc2a3').removeClass('seleccionCaja');
            $('.enc2a4').removeClass('seleccionCaja');

            break;
        case '2 enc2a3':
            $('.enc2a3').addClass('seleccionCaja');
            $('.enc2a1').removeClass('seleccionCaja');
            $('.enc2a2').removeClass('seleccionCaja');
            $('.enc2a4').removeClass('seleccionCaja');

            break;
        case '2 enc2a4':
            $('.enc2a4').addClass('seleccionCaja');
            $('.enc2a1').removeClass('seleccionCaja');
            $('.enc2a2').removeClass('seleccionCaja');
            $('.enc2a3').removeClass('seleccionCaja');

            break;

    }
});

$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 enc3a1':
            $('.enc3a1').addClass('seleccionCaja');
            $('.enc3a2').removeClass('seleccionCaja');
            $('.enc3a3').removeClass('seleccionCaja');
            $('.enc3a4').removeClass('seleccionCaja');

            break;
        case '3 enc3a2':
            $('.enc3a2').addClass('seleccionCaja');
            $('.enc3a1').removeClass('seleccionCaja');
            $('.enc3a3').removeClass('seleccionCaja');
            $('.enc3a4').removeClass('seleccionCaja');

            break;
        case '3 enc3a3':
            $('.enc3a3').addClass('seleccionCaja');
            $('.enc3a1').removeClass('seleccionCaja');
            $('.enc3a2').removeClass('seleccionCaja');
            $('.enc3a4').removeClass('seleccionCaja');

            break;
        case '3 enc3a4':
            $('.enc3a4').addClass('seleccionCaja');
            $('.enc3a1').removeClass('seleccionCaja');
            $('.enc3a2').removeClass('seleccionCaja');
            $('.enc3a3').removeClass('seleccionCaja');

            break;

    }
});

$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 enc4a1':
            $('.enc4a1').addClass('seleccionCaja');
            $('.enc4a2').removeClass('seleccionCaja');
            $('.enc4a3').removeClass('seleccionCaja');
            $('.enc4a4').removeClass('seleccionCaja');

            break;
        case '4 enc4a2':
            $('.enc4a2').addClass('seleccionCaja');
            $('.enc4a1').removeClass('seleccionCaja');
            $('.enc4a3').removeClass('seleccionCaja');
            $('.enc4a4').removeClass('seleccionCaja');

            break;
        case '4 enc4a3':
            $('.enc4a3').addClass('seleccionCaja');
            $('.enc4a1').removeClass('seleccionCaja');
            $('.enc4a2').removeClass('seleccionCaja');
            $('.enc4a4').removeClass('seleccionCaja');

            break;
        case '4 enc4a4':
            $('.enc4a4').addClass('seleccionCaja');
            $('.enc4a1').removeClass('seleccionCaja');
            $('.enc4a2').removeClass('seleccionCaja');
            $('.enc4a3').removeClass('seleccionCaja');

            break;

    }
});

$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 enc5a1':
            $('.enc5a1').addClass('seleccionCaja');
            $('.enc5a2').removeClass('seleccionCaja');

            break;
        case '5 enc5a2':
            $('.enc5a2').addClass('seleccionCaja');
            $('.enc5a1').removeClass('seleccionCaja');

            break;
    }
});

function pregunta1() {
    var nt1 = 0;
    var nt2 = 0;
    var nt3 = 0;
    var nt4 = 0;
    var nt5 = 0;

    if ($('.enc1a4').hasClass('seleccionCaja') == true) {
        nt1 = 1;
        $('.enc1a4').addClass('correcto');

    } else if ($('.enc1a1').hasClass('seleccionCaja') == true) {
        $('.enc1a1').addClass('incorrecto');

    } else if ($('.enc1a2').hasClass('seleccionCaja') == true) {
        $('.enc1a2').addClass('incorrecto');

    } else if ($('.enc1a3').hasClass('seleccionCaja') == true) {
        $('.enc1a3').addClass('incorrecto');

    }
    if ($('.enc2a1').hasClass('seleccionCaja') == true) {
        nt2 = 1;
        $('.enc2a1').addClass('correcto');

    } else if ($('.enc2a2').hasClass('seleccionCaja') == true) {
        $('.enc2a2').addClass('incorrecto');

    } else if ($('.enc2a3').hasClass('seleccionCaja') == true) {
        $('.enc2a3').addClass('incorrecto');

    } else if ($('.enc2a4').hasClass('seleccionCaja') == true) {
        $('.enc2a4').addClass('incorrecto');

    }
    if ($('.enc3a2').hasClass('seleccionCaja') == true) {
        nt3 = 1;
        $('.enc3a2').addClass('correcto');

    } else if ($('.enc3a1').hasClass('seleccionCaja') == true) {
        $('.enc3a1').addClass('incorrecto');

    } else if ($('.enc3a3').hasClass('seleccionCaja') == true) {
        $('.enc3a3').addClass('incorrecto');

    } else if ($('.enc3a4').hasClass('seleccionCaja') == true) {
        $('.enc3a4').addClass('incorrecto');

    }
    if ($('.enc4a2').hasClass('seleccionCaja') == true) {
        nt4 = 1;
        $('.enc4a2').addClass('correcto');

    } else if ($('.enc4a1').hasClass('seleccionCaja') == true) {
        $('.enc4a1').addClass('incorrecto');

    } else if ($('.enc4a3').hasClass('seleccionCaja') == true) {
        $('.enc4a3').addClass('incorrecto');

    } else if ($('.enc4a4').hasClass('seleccionCaja') == true) {
        $('.enc4a4').addClass('incorrecto');

    }
    if ($('.enc5a2').hasClass('seleccionCaja') == true) {
        nt5 = 1;
        $('.enc5a2').addClass('correcto');

    } else if ($('.enc5a1').hasClass('seleccionCaja') == true) {
        $('.enc5a1').addClass('incorrecto');

    }

    $('.1').off('click');
    $('.2').off('click');
    $('.3').off('click');
    $('.4').off('click');
    $('.5').off('click');

    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5);
    var total = (subtotal * 1.25) / 5;
    if (total < 0) {
        total = 0;
        $('#nota1').val(parseFloat(total).toFixed(2));
    } else {
        $('#nota1').val(parseFloat(total).toFixed(2));
    }
}



function total() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;


    if (nota2 == "" || nota3 == "" || nota4 == "" || nota5 == "" || nota6 == "" || nota7 == "" || nota8 == "" || nota9 == "" || nota10 == "") {
        alert("Calificar Pregunta 2,3,4,5,6,7,8,9 ó  10");
    } else {
        pregunta1();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var nota9 = document.getElementById('nota9').value;
        var nota10 = document.getElementById('nota10').value;

        cor = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
        $('.enc3a').off('click');
    }
}