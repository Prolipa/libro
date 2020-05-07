var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;



document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1.5, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1.5);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1.5, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1.5);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});

var random10 = ['<p class="fuente" style="display: inline; width: 100%"><br>Continentes:&emsp;<select class="hvr-bounce-in random1 imaf2" id="sel0"> </select>.</p>', '<p class="fuente" style="display: inline; width: 100%"><br>Océanos:&emsp;<select class="hvr-bounce-in random1 imaf2" id="sel1"> </select>.</p>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random11 = ['<div class="10 enc1a1"> <font size="5">el mapamundi</font> </div>', '<div class="10 enc1a2"> <font size="5">la carta topográfica</font> </div>', '<div class="10 enc1a3"> <font size="5">el globo terráqueo</font> </div>', '<div class="10 enc1a4"> <font size="5">el planisferio estelar</font> </div>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

var random12 = ['<div class="11 enc11a1"> <font size="5">topógrafos</font> </div>', '<div class="11 enc11a2"> <font size="5">cartógrafos</font> </div>', '<div class="11 enc11a3"> <font size="5">fotógrafos</font> </div>', '<div class="11 enc11a4"> <font size="5">geógrafos</font> </div>']
var act012Txt = document.getElementsByClassName('act12class');

random12.sort(f_randomico);
for (i = 0; i < act012Txt.length; i++) {
    $('#' + act012Txt[i].id).html(random12[i]);
}

var random13 = ['<div class="12 enc12a1"> <font size="5">una parte</font> </div>', '<div class="12 enc12a2"> <font size="5">un continente</font> </div>', '<div class="12 enc12a3"> <font size="5">un hemisferio</font> </div>', '<div class="12 enc12a4"> <font size="5">su totalidad</font> </div>']
var act013Txt = document.getElementsByClassName('act13class');

random13.sort(f_randomico);
for (i = 0; i < act013Txt.length; i++) {
    $('#' + act013Txt[i].id).html(random13[i]);
}

var random14 = ['<div class="13 enc13a1"> <font size="5">distorsionada</font> </div>', '<div class="13 enc13a2"> <font size="5">ampliada</font> </div>', '<div class="13 enc13a3"> <font size="5">reducida</font> </div>', '<div class="13 enc13a4"> <font size="5">igual</font> </div>']
var act014Txt = document.getElementsByClassName('act14class');

random14.sort(f_randomico);
for (i = 0; i < act014Txt.length; i++) {
    $('#' + act014Txt[i].id).html(random14[i]);
}



var random1 = [
    '<option>América, Europa, Asia, África, Oceanía y Antártida</option>',
    '<option>Pacífico, Atlántico, Índico, Ártico y Antártico</option>',

];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');


function pregunta1() {

    var respact2 = ['América, Europa, Asia, África, Oceanía y Antártida', 'Pacífico, Atlántico, Índico, Ártico y Antártico'];
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
        $('#pre1a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre1a').val(parseFloat(total).toFixed(2));
    }
}

$('.10').css('cursor', 'pointer');
$('.10').click(function() {
    switch ($(this).attr('class')) {
        case '10 enc1a1':
            $('.enc1a1').addClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');
            $('.enc1a4').removeClass('encierreCaja');

            break;
        case '10 enc1a2':
            $('.enc1a2').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');
            $('.enc1a4').removeClass('encierreCaja');

            break;

        case '10 enc1a3':
            $('.enc1a3').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');
            $('.enc1a4').removeClass('encierreCaja');

            break;

        case '10 enc1a4':
            $('.enc1a4').addClass('encierreCaja');
            $('.enc1a1').removeClass('encierreCaja');
            $('.enc1a2').removeClass('encierreCaja');
            $('.enc1a3').removeClass('encierreCaja');

            break;
    }
});

$('.11').css('cursor', 'pointer');
$('.11').click(function() {
    switch ($(this).attr('class')) {
        case '11 enc11a1':
            $('.enc11a1').addClass('encierreCaja');
            $('.enc11a2').removeClass('encierreCaja');
            $('.enc11a3').removeClass('encierreCaja');
            $('.enc11a4').removeClass('encierreCaja');

            break;
        case '11 enc11a2':
            $('.enc11a2').addClass('encierreCaja');
            $('.enc11a1').removeClass('encierreCaja');
            $('.enc11a3').removeClass('encierreCaja');
            $('.enc11a4').removeClass('encierreCaja');

            break;

        case '11 enc11a3':
            $('.enc11a3').addClass('encierreCaja');
            $('.enc11a1').removeClass('encierreCaja');
            $('.enc11a2').removeClass('encierreCaja');
            $('.enc11a4').removeClass('encierreCaja');

            break;

        case '11 enc11a4':
            $('.enc11a4').addClass('encierreCaja');
            $('.enc11a1').removeClass('encierreCaja');
            $('.enc11a2').removeClass('encierreCaja');
            $('.enc11a3').removeClass('encierreCaja');

            break;
    }
});

$('.12').css('cursor', 'pointer');
$('.12').click(function() {
    switch ($(this).attr('class')) {
        case '12 enc12a1':
            $('.enc12a1').addClass('encierreCaja');
            $('.enc12a2').removeClass('encierreCaja');
            $('.enc12a3').removeClass('encierreCaja');
            $('.enc12a4').removeClass('encierreCaja');

            break;
        case '12 enc12a2':
            $('.enc12a2').addClass('encierreCaja');
            $('.enc12a1').removeClass('encierreCaja');
            $('.enc12a3').removeClass('encierreCaja');
            $('.enc12a4').removeClass('encierreCaja');

            break;

        case '12 enc12a3':
            $('.enc12a3').addClass('encierreCaja');
            $('.enc12a1').removeClass('encierreCaja');
            $('.enc12a2').removeClass('encierreCaja');
            $('.enc12a4').removeClass('encierreCaja');

            break;

        case '12 enc12a4':
            $('.enc12a4').addClass('encierreCaja');
            $('.enc12a1').removeClass('encierreCaja');
            $('.enc12a2').removeClass('encierreCaja');
            $('.enc12a3').removeClass('encierreCaja');

            break;
    }
});

$('.13').css('cursor', 'pointer');
$('.13').click(function() {
    switch ($(this).attr('class')) {
        case '13 enc13a1':
            $('.enc13a1').addClass('encierreCaja');
            $('.enc13a2').removeClass('encierreCaja');
            $('.enc13a3').removeClass('encierreCaja');
            $('.enc13a4').removeClass('encierreCaja');

            break;
        case '13 enc13a2':
            $('.enc13a2').addClass('encierreCaja');
            $('.enc13a1').removeClass('encierreCaja');
            $('.enc13a3').removeClass('encierreCaja');
            $('.enc13a4').removeClass('encierreCaja');

            break;

        case '13 enc13a3':
            $('.enc13a3').addClass('encierreCaja');
            $('.enc13a1').removeClass('encierreCaja');
            $('.enc13a2').removeClass('encierreCaja');
            $('.enc13a4').removeClass('encierreCaja');

            break;

        case '13 enc13a4':
            $('.enc13a4').addClass('encierreCaja');
            $('.enc13a1').removeClass('encierreCaja');
            $('.enc13a2').removeClass('encierreCaja');
            $('.enc13a3').removeClass('encierreCaja');

            break;
    }
});

function pregunta3() {
    var nt1 = 0;
    var nt2 = 0;
    var nt3 = 0;
    var nt4 = 0;

    if ($('.enc1a3').hasClass('encierreCaja') == true) {
        nt1 = 1;
        $('.enc1a3').addClass('correcto');
    } else if ($('.enc1a1').hasClass('encierreCaja') == true) {
        $('.enc1a2').addClass('incorrecto');
    } else if ($('.enc1a2').hasClass('encierreCaja') == true) {
        $('.enc1a2').addClass('incorrecto');
    } else if ($('.enc1a4').hasClass('encierreCaja') == true) {
        $('.enc1a4').addClass('incorrecto');
    }

    if ($('.enc11a2').hasClass('encierreCaja') == true) {
        nt2 = 1;
        $('.enc11a2').addClass('correcto');
    } else if ($('.enc11a1').hasClass('encierreCaja') == true) {
        $('.enc11a1').addClass('incorrecto');
    } else if ($('.enc11a3').hasClass('encierreCaja') == true) {
        $('.enc11a3').addClass('incorrecto');
    } else if ($('.enc11a4').hasClass('encierreCaja') == true) {
        $('.enc11a4').addClass('incorrecto');
    }

    if ($('.enc12a4').hasClass('encierreCaja') == true) {
        nt3 = 1;
        $('.enc12a4').addClass('correcto');
    } else if ($('.enc12a1').hasClass('encierreCaja') == true) {
        $('.enc12a1').addClass('incorrecto');
    } else if ($('.enc12a2').hasClass('encierreCaja') == true) {
        $('.enc12a2').addClass('incorrecto');
    } else if ($('.enc12a3').hasClass('encierreCaja') == true) {
        $('.enc12a3').addClass('incorrecto');
    }

    if ($('.enc13a1').hasClass('encierreCaja') == true) {
        nt4 = 1;
        $('.enc13a1').addClass('correcto');
    } else if ($('.enc13a2').hasClass('encierreCaja') == true) {
        $('.enc13a2').addClass('incorrecto');
    } else if ($('.enc13a3').hasClass('encierreCaja') == true) {
        $('.enc13a3').addClass('incorrecto');
    } else if ($('.enc13a4').hasClass('encierreCaja') == true) {
        $('.enc13a4').addClass('incorrecto');
    }

    $('.10').off('click');
    $('.11').off('click');
    $('.12').off('click');
    $('.13').off('click');

    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    var total = (subtotal * 4) / 4;
    if (total < 0) {
        total = 0;
        $('#pre3a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre3a').val(parseFloat(total).toFixed(2));
    }
}


function total() {

    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;
    var pre6a = document.getElementById('pre6a').value;

    if (pre2a == "") {
        alert("Calificar Pregunta b de la Pregunta 1");
        document.getElementById('pre2a').focus();
        $('#pre2a').addClass("alertaabierta");
    } else {
        if (pre4a == "") {
            alert("Calificar Pregunta 3");
            document.getElementById('pre4a').focus();
            $('#pre4a').addClass("alertaabierta");
        } else {
            if (pre5a == "") {
                alert("Calificar Pregunta 4");
                document.getElementById('pre5a').focus();
                $('#pre5a').addClass("alertaabierta");
            } else {
                if (pre6a == "") {
                    alert("Calificar Pregunta de Evaluo mi proceso");
                    document.getElementById('pre6a').focus();
                    $('#pre6a').addClass("alertaabierta");
                } else {

                    pregunta1();
                    pregunta3();
                    var pre1a = document.getElementById('pre1a').value;
                    var pre2a = document.getElementById('pre2a').value;
                    var pre3a = document.getElementById('pre3a').value;
                    var pre4a = document.getElementById('pre4a').value;
                    var pre5a = document.getElementById('pre5a').value;
                    var pre6a = document.getElementById('pre6a').value;

                    cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a) + parseFloat(pre6a);
                    Calculo_nota();
                    document.getElementById('bt_comprobar').disabled = true;
                    $('input').attr("disabled", true);
                    $('textarea').attr("disabled", true);
                    $('#txtAlumno').attr("disabled", false);
                    $('div').attr("disabled", true);
                    $('.nota-abierta').css("background", "#00e600");
                    $('select').attr("disabled", true);
                }
            }
        }
    }
}