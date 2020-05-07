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

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
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

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

document.getElementById("pre9a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre9a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre9a"), 1);
});

var random10 = ['<div align="center"><img src="img/i2_p20_act10.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random2 imaf2" id="sell0" style="font-size: 15px;"></select><br><br></div>', '<div align="center"><img src="img/i3_p20_act10.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random2 imaf2" id="sell1" style="font-size: 15px;"></select><br><br></div>', '<div align="center"><img src="img/i4_p20_act10.jpg" style="max-width: 100%"><br> <select class="hvr-bounce-in random2 imaf2" id="sell2" style="font-size: 15px;"></select><br><br></div>']
var act010Txt = document.getElementsByClassName('act10class');

random10.sort(f_randomico);
for (i = 0; i < act010Txt.length; i++) {
    $('#' + act010Txt[i].id).html(random10[i]);
}

var random13 = ['<p class="fuente">El cantón es constituido por la unión de:</p> <table class="table table-bordered" align="center" style="text-align: center;"> <tr> <td class="act11class" id="act011Txt1"> </td> <td class="act11class" id="act011Txt2"> </td> <td class="act11class" id="act011Txt3"> </td> <td class="act11class" id="act011Txt4"> </td> </tr> </table>', '<p class="fuente">La máxima autoridad de la parroquia rural es:</p> <table class="table table-bordered" align="center" style="text-align: center;"> <tr> <td class="act12class" id="act012Txt1"> </td> <td class="act12class" id="act012Txt2"> </td> <td class="act12class" id="act012Txt3"> </td> <td class="act12class" id="act012Txt4"> </td> </tr> </table>']
var act013Txt = document.getElementsByClassName('act13class');

random13.sort(f_randomico);
for (i = 0; i < act013Txt.length; i++) {
    $('#' + act013Txt[i].id).html(random13[i]);
}

var random11 = ['<font size="5" class="hvr-grow-shadow"> <div class="5 enc5a1">dos o más parroquias</div> </font>', '<font size="5" class="hvr-grow-shadow"> <div class="5 enc5a2">tres manzanas</div> </font>', '<font size="5" class="hvr-grow-shadow"> <div class="5 enc5a3">dos provincias pequeñas</div> </font>', '<font size="5" class="hvr-grow-shadow"> <div class="5 enc5a4">un vecindario</div> </font>']
var act011Txt = document.getElementsByClassName('act11class');

random11.sort(f_randomico);
for (i = 0; i < act011Txt.length; i++) {
    $('#' + act011Txt[i].id).html(random11[i]);
}

var random12 = ['<font size="5" class="hvr-grow-shadow"> <div class="6 enc6a1">el alcalde</div> </font>', '<font size="5" class="hvr-grow-shadow"> <div class="6 enc6a2">el presidente</div> </font>', '<font size="5" class="hvr-grow-shadow"> <div class="6 enc6a3">el presidente de la junta parroquial</div> </font>', '<font size="5" class="hvr-grow-shadow"> <div class="6 enc6a4">el prefecto</div> </font>']
var act012Txt = document.getElementsByClassName('act12class');

random12.sort(f_randomico);
for (i = 0; i < act012Txt.length; i++) {
    $('#' + act012Txt[i].id).html(random12[i]);
}



var random14 = ['<table> <tr> <td> <div style="background-color: #E1F4FC; border: 2px dotted #00AEEF; border-radius: 15px"> <p class="fuente2"><b>Minga</b></p> </div> </td> </tr> </table> <div> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="; border: 2px dotted #00AEEF; border-radius: 15px" rows="4" placeholder="Texto"></textarea> <br><br> </div>', '<table> <tr> <td> <div style="background-color: #FEF7F0; border: 2px dotted #F36E21; border-radius: 15px"> <p class="fuente2"><b>Randi-randi</b></p> </div> </td> </tr> </table> <div> <textarea class="form-control text-question no-redimensionar hvr-grow-shadow" style="; border: 2px dotted #F36E21; border-radius: 15px" rows="4" placeholder="Texto"></textarea> <br><br> </div>']
var act014Txt = document.getElementsByClassName('act14class');

random14.sort(f_randomico);
for (i = 0; i < act014Txt.length; i++) {
    $('#' + act014Txt[i].id).html(random14[i]);
}

var random15 = ['<td align="center" class="hvr-grow"> <div data-anijs="if: click, do: flip animated" style="width: 100px"> <span class="10 enc8a" style="padding: 10px; border: 3px solid #7559a8; border-radius: 10px; border-radius: 10px"> <font color="#ffffff" size="5"><b>&emsp;</b></font> </span></div> </td> <td> <p class="fuente">Cruzar la calle por el paso cebra </p> </td>', '<td align="center" class="hvr-grow"> <div data-anijs="if: click, do: flip animated" style="width: 100px"> <span class="11 enc8a" style="padding: 10px; border: 3px solid #7559a8; border-radius: 10px; border-radius: 10px"> <font color="#ffffff" size="5"><b>&emsp;</b></font> </span></div> </td> <td> <p class="fuente">Caminar por las aceras</p> </td>', '<td align="center" class="hvr-grow"> <div data-anijs="if: click, do: flip animated" style="width: 100px"> <span class="12 enc8a" style="padding: 10px; border: 3px solid #7559a8; border-radius: 10px; border-radius: 10px"> <font color="#ffffff" size="5"><b>&emsp;</b></font> </span></div> </td> <td> <p class="fuente">Detener el auto ante la señal de pare</p> </td>', '<td align="center" class="hvr-grow"> <div data-anijs="if: click, do: flip animated" style="width: 100px"> <span class="13 enc8a" style="padding: 10px; border: 3px solid #7559a8; border-radius: 10px; border-radius: 10px"> <font color="#ffffff" size="5"><b>&emsp;</b></font> </span></div> </td> <td> <p class="fuente">Respetar los límites de velocidad</p> </td>', '<td align="center" class="hvr-grow"> <div data-anijs="if: click, do: flip animated" style="width: 100px"> <span class="14 enc8a" style="padding: 10px; border: 3px solid #7559a8; border-radius: 10px; border-radius: 10px"> <font color="#ffffff" size="5"><b>&emsp;</b></font> </span></div> </td> <td> <p class="fuente">Realizar el chequeo mecánico del vehículo</p> </td>', '<td align="center" class="hvr-grow"> <div data-anijs="if: click, do: flip animated" style="width: 100px"> <span class="15 enc8a" style="padding: 10px; border: 3px solid #7559a8; border-radius: 10px; border-radius: 10px"> <font color="#ffffff" size="5"><b>&emsp;</b></font> </span></div> </td> <td> <p class="fuente">No jugar en la calle</p> </td>']
var act015Txt = document.getElementsByClassName('act15class');

random15.sort(f_randomico);
for (i = 0; i < act015Txt.length; i++) {
    $('#' + act015Txt[i].id).html(random15[i]);
}



var random1 = [
    '<option>Noroeste</option>',
    '<option>Norte</option>',
    '<option>Noreste</option>',
    '<option>Oeste</option>',
    '<option>Este</option>',
    '<option>Suroeste</option>',
    '<option>Sur</option>',
    '<option>Sureste</option>',
];
random1.sort(f_randomico);
$('.random1').html('<option>-Seleccione-</option>' + random1 + '');

function pregunta6() {

    var respact2 = ['Noroeste', 'Norte', 'Noreste', 'Oeste', 'Este', 'Suroeste', 'Sur', 'Sureste'];
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
        $('#pre6a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre6a').val(parseFloat(total).toFixed(2));
    }
}



var random2 = [
    '<option>Inundaciones</option>',
    '<option>Deslaves</option>',
    '<option>Incendios forestales</option>',
];
random2.sort(f_randomico);
$('.random2').html('<option>-Seleccione-</option>' + random2 + '');

function pregunta7() {

    var respact2 = ['Inundaciones', 'Deslaves', 'Incendios forestales'];
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
    var total = (cont * 1) / respact2.length;
    //var totin = ((sumtotal * 4) / 9).toFixed(2);

    if (total < 0) {
        total = 0;
        $('#pre7a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre7a').val(parseFloat(total).toFixed(2));
    }
}



$('.5').css('cursor', 'pointer');
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 enc5a1':
            $('.enc5a1').addClass('encierreCaja');
            $('.enc5a2').removeClass('encierreCaja');
            $('.enc5a3').removeClass('encierreCaja');
            $('.enc5a4').removeClass('encierreCaja');

            break;
        case '5 enc5a2':
            $('.enc5a2').addClass('encierreCaja');
            $('.enc5a1').removeClass('encierreCaja');
            $('.enc5a3').removeClass('encierreCaja');
            $('.enc5a4').removeClass('encierreCaja');

            break;

        case '5 enc5a3':
            $('.enc5a3').addClass('encierreCaja');
            $('.enc5a1').removeClass('encierreCaja');
            $('.enc5a2').removeClass('encierreCaja');
            $('.enc5a4').removeClass('encierreCaja');

            break;

        case '5 enc5a4':
            $('.enc5a4').addClass('encierreCaja');
            $('.enc5a1').removeClass('encierreCaja');
            $('.enc5a2').removeClass('encierreCaja');
            $('.enc5a3').removeClass('encierreCaja');

            break;
    }
});

$('.6').css('cursor', 'pointer');
$('.6').click(function() {
    switch ($(this).attr('class')) {
        case '6 enc6a1':
            $('.enc6a1').addClass('encierreCaja');
            $('.enc6a2').removeClass('encierreCaja');
            $('.enc6a3').removeClass('encierreCaja');
            $('.enc6a4').removeClass('encierreCaja');

            break;
        case '6 enc6a2':
            $('.enc6a2').addClass('encierreCaja');
            $('.enc6a1').removeClass('encierreCaja');
            $('.enc6a3').removeClass('encierreCaja');
            $('.enc6a4').removeClass('encierreCaja');

            break;

        case '6 enc6a3':
            $('.enc6a3').addClass('encierreCaja');
            $('.enc6a1').removeClass('encierreCaja');
            $('.enc6a2').removeClass('encierreCaja');
            $('.enc6a4').removeClass('encierreCaja');

            break;

        case '6 enc6a4':
            $('.enc6a4').addClass('encierreCaja');
            $('.enc6a1').removeClass('encierreCaja');
            $('.enc6a2').removeClass('encierreCaja');
            $('.enc6a3').removeClass('encierreCaja');

            break;
    }
});

function pregunta8() {
    var nt1 = 0;
    var nt2 = 0;
    var nt3 = 0;

    if ($('.enc5a1').hasClass('encierreCaja') == true) {
        nt1 = 1;
        $('.enc5a1').addClass('correcto');
    } else if ($('.enc5a2').hasClass('encierreCaja') == true) {
        $('.enc5a2').addClass('incorrecto');
    } else if ($('.enc5a3').hasClass('encierreCaja') == true) {
        $('.enc5a3').addClass('incorrecto');
    } else if ($('.enc5a4').hasClass('encierreCaja') == true) {
        $('.enc5a4').addClass('incorrecto');
    }

    if ($('.enc6a3').hasClass('encierreCaja') == true) {
        nt2 = 1;
        $('.enc6a3').addClass('correcto');
    } else if ($('.enc6a1').hasClass('encierreCaja') == true) {
        $('.enc6a1').addClass('incorrecto');
    } else if ($('.enc6a2').hasClass('encierreCaja') == true) {
        $('.enc6a2').addClass('incorrecto');
    } else if ($('.enc6a4').hasClass('encierreCaja') == true) {
        $('.enc6a4').addClass('incorrecto');
    }

    $('.5').off('click');
    $('.6').off('click');

    var subtotal = parseFloat(nt1) + parseFloat(nt2);
    var total = (subtotal * 1) / 2;
    if (total < 0) {
        total = 0;
        $('#pre8a').val(parseFloat(total).toFixed(2));
    } else {
        $('#pre8a').val(parseFloat(total).toFixed(2));
    }
}


$(".enc8a").css('cursor', 'pointer');
$(".enc8a").click(function() {
    if ($(this).hasClass("vistoCaja")) {
        $(this).removeClass("vistoCaja");
        $(this).addClass("tacharCaja");
    } else if ($(this).hasClass("tacharCaja")) {
        $(this).removeClass("tacharCaja");
    } else {
        $(this).addClass("vistoCaja");
    }
});


function pregunta10() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0;

    if ($('.10').hasClass('vistoCaja') == true) {
        nt1 = 1;
        $('.10').addClass('correcto');
    } else {
        $('.10').addClass('incorrecto');
    }

    if ($('.11').hasClass('vistoCaja') == true) {
        nt2 = 1;
        $('.11').addClass('correcto');
    } else {
        $('.11').addClass('incorrecto');
    }

    if ($('.12').hasClass('tacharCaja') == true) {
        nt3 = 1;
        $('.12').addClass('correcto');
    } else {
        $('.12').addClass('incorrecto');
    }

    if ($('.13').hasClass('tacharCaja') == true) {
        nt4 = 1;
        $('.13').addClass('correcto');
    } else {
        $('.13').addClass('incorrecto');
    }

    if ($('.14').hasClass('tacharCaja') == true) {
        nt5 = 1;
        $('.14').addClass('correcto');
    } else {
        $('.14').addClass('incorrecto');
    }

    if ($('.15').hasClass('vistoCaja') == true) {
        nt6 = 1;
        $('.15').addClass('correcto');
    } else {
        $('.15').addClass('incorrecto');
    }



    ////////////////////////////////////////////

    $('.enc8a').off('click');
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5) + parseFloat(nt6);
    var pre1a = (subtotal * 1) / 6;

    if (pre1a < 0) {
        pre1a = 0;
        $('#pre10a').val(parseFloat(pre1a).toFixed(2));
    } else {
        $('#pre10a').val(parseFloat(pre1a).toFixed(2));
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
    var pre9a = document.getElementById('pre9a').value;
    var pre10a = document.getElementById('pre10a').value;

    if (pre1a == "") {
        alert("Calificar Pregunta 1");
        document.getElementById('pre1a').focus();
        $('#pre1a').addClass("alertaabierta");
    } else {
        if (pre2a == "") {
            alert("Calificar Pregunta 2");
            document.getElementById('pre2a').focus();
            $('#pre2a').addClass("alertaabierta");
        } else {
            if (pre3a == "") {
                alert("Calificar Pregunta 3");
                document.getElementById('pre3a').focus();
                $('#pre3a').addClass("alertaabierta");
            } else {
                if (pre4a == "") {
                    alert("Calificar Pregunta 4");
                    document.getElementById('pre4a').focus();
                    $('#pre4a').addClass("alertaabierta");
                } else {
                    if (pre5a == "") {
                        alert("Calificar Pregunta 5");
                        document.getElementById('pre5a').focus();
                        $('#pre5a').addClass("alertaabierta");
                    } else {
                        if (pre9a == "") {
                            alert("Calificar Pregunta 9");
                            document.getElementById('pre9a').focus();
                            $('#pre9a').addClass("alertaabierta");
                        } else {

                            pregunta6();
                            pregunta7();
                            pregunta8();
                            pregunta10();
                            var pre1a = document.getElementById('pre1a').value;
                            var pre2a = document.getElementById('pre2a').value;
                            var pre3a = document.getElementById('pre3a').value;
                            var pre4a = document.getElementById('pre4a').value;
                            var pre5a = document.getElementById('pre5a').value;
                            var pre6a = document.getElementById('pre6a').value;
                            var pre7a = document.getElementById('pre7a').value;
                            var pre8a = document.getElementById('pre8a').value;
                            var pre9a = document.getElementById('pre9a').value;
                            var pre10a = document.getElementById('pre10a').value;

                            cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a) + parseFloat(pre6a) + parseFloat(pre7a) + parseFloat(pre8a) + parseFloat(pre9a) + parseFloat(pre10a);
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
        }
    }
}