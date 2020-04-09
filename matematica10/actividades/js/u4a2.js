var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
var titulos = "aplico";
numero_pagina(167);
document.getElementById("pre1a2").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a2").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a2"), 1);
});
document.getElementById("pre1a7").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a7").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a7"), 1);
});
document.getElementById("pre1a8").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a8").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a8"), 1);
});
f_iniciar();
$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 p3en1':
            $('.p3en1').addClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');

            break;
        case '1 p3en2':
            $('.p3en2').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');
            break;
        case '1 p3en3':
            $('.p3en3').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');

            break;
        case '1 p3en4':
            $('.p3en4').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');

            break;


    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p4en1':
            $('.p4en1').addClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');

            break;
        case '2 p4en2':
            $('.p4en2').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            break;
        case '2 p4en3':
            $('.p4en3').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');

            break;
        case '2 p4en4':
            $('.p4en4').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');

            break;


    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 p5en1':
            $('.p5en1').addClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '3 p5en2':
            $('.p5en2').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '3 p5en3':
            $('.p5en3').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '3 p5en4':
            $('.p5en4').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '3 p5en5':
            $('.p5en5').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            break;

    }
});

$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 p6en1':
            $('.p6en1').addClass('encierra1');
            $('.p6en2').removeClass('encierra1');
            $('.p6en3').removeClass('encierra1');
            $('.p6en4').removeClass('encierra1');
            $('.p6en5').removeClass('encierra1');
            break;
        case '4 p6en2':
            $('.p6en2').addClass('encierra1');
            $('.p6en1').removeClass('encierra1');
            $('.p6en3').removeClass('encierra1');
            $('.p6en4').removeClass('encierra1');
            $('.p6en5').removeClass('encierra1');
            break;
        case '4 p6en3':
            $('.p6en3').addClass('encierra1');
            $('.p6en1').removeClass('encierra1');
            $('.p6en2').removeClass('encierra1');
            $('.p6en4').removeClass('encierra1');
            $('.p6en5').removeClass('encierra1');
            break;
        case '4 p6en4':
            $('.p6en4').addClass('encierra1');
            $('.p6en1').removeClass('encierra1');
            $('.p6en2').removeClass('encierra1');
            $('.p6en3').removeClass('encierra1');
            $('.p6en5').removeClass('encierra1');
            break;
        case '4 p6en5':
            $('.p6en5').addClass('encierra1');
            $('.p6en1').removeClass('encierra1');
            $('.p6en2').removeClass('encierra1');
            $('.p6en3').removeClass('encierra1');
            $('.p6en4').removeClass('encierra1');
            break;

    }
});
function f_iniciar() {
    var p3vec1 = ['p ∨ q', 'p ∧ q', '∼p∨∼q', '∼p∧∼q'];
    var myArray1 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c1 = myArray1[i - 1];
        $("#p3im" + i).html(p3vec1[c1]);
    }

    var p4vec1 = ['Todas', 'i, ii, iii', 'i, ii, iv', 'i, iii, iv'];
    var myArray2 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c2 = myArray2[i - 1];
        $("#p4im" + i).html(p4vec1[c2]);
    }

    var p5vec1 = ['VVV', 'VFF', 'FFV', 'FVF','VFV'];
    var myArray3 = ["0", "1", "2", "3","4"];
    var i, j, k;
    for (i = myArray3.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray3[i - 1];
        myArray3[i - 1] = myArray3[j];
        myArray3[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c3 = myArray3[i - 1];
        $("#p5im" + i).html(p5vec1[c3]);
    }

    var p6vec1 = ['p', '∼p', 'q', '∼q','p ∧ q'];
    var myArray4 = ["0", "1", "2", "3","4"];
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c4 = myArray4[i - 1];
        $("#p6im" + i).html(p6vec1[c4]);
    }
    bt_comprobar.addEventListener("click", preg2);
    function preg2() {
        cor=0;
        var pre1a2 = $('#pre1a2').val();
        if (!pre1a2) {
            alert('Ingrese la calificación en la Pregunta 2.')
        } else {
            cor = cor + parseFloat(pre1a2);
            inc = inc + (1 - parseFloat(pre1a2));
            $('#pre1a2').val(parseFloat(pre1a2).toFixed(2));
            $('#pre1a2').attr('disabled', 'true');
            preg7();
        }

    }
    function preg7() {
        
        var pre1a7 = $('#pre1a7').val();
        if (!pre1a7) {
            alert('Ingrese la calificación en la Pregunta 7.')
        } else {
            cor = cor + parseFloat(pre1a7);
            inc = inc + (1 - parseFloat(pre1a7));
            $('#pre1a7').val(parseFloat(pre1a7).toFixed(2));
            $('#pre1a7').attr('disabled', 'true');
            preg8();
        }

    }
    function preg8() {
        
        var pre1a8 = $('#pre1a8').val();
        if (!pre1a8) {
            alert('Ingrese la calificación en la Pregunta 8.')
        } else {
            cor = cor + parseFloat(pre1a8);
            inc = inc + (1 - parseFloat(pre1a8));
            $('#pre1a8').val(parseFloat(pre1a8).toFixed(2));
            $('#pre1a8').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg2);
        var pavec1 = ['V', 'F', 'V', 'V'];
        var pavec2 = ['F', 'F', 'F', 'V'];
        var pavec3 = ['F', 'V', 'F', 'V'];
        var pavec4 = ['V', 'V', 'V', 'V'];
        var pavec5 = ['F', 'F', 'V', 'V'];
        var pacont1 = 0;
        for (var i = 0; i < pavec1.length; i++) {
            var pars1 = $('#pa2dcon' + (i + 1)).val();
            if (pars1 == pavec1[i]) {
                pacont1++;
                f_ok($('#pa2dcon' + (i + 1)));
            } else {
                pacont1;
                f_no($('#pa2dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < pavec2.length; i++) {
            var pars2 = $('#pa3dcon' + (i + 1)).val();
            if (pars2 == pavec2[i]) {
                pacont1++;
                f_ok($('#pa3dcon' + (i + 1)));
            } else {
                pacont1;
                f_no($('#pa3dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < pavec3.length; i++) {
            var pars3 = $('#pa4dcon' + (i + 1)).val();
            if (pars3 == pavec3[i]) {
                pacont1++;
                f_ok($('#pa4dcon' + (i + 1)));
            } else {
                pacont1;
                f_no($('#pa4dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < pavec4.length; i++) {
            var pars4 = $('#pa5dcon' + (i + 1)).val();
            if (pars4 == pavec4[i]) {
                pacont1++;
                f_ok($('#pa5dcon' + (i + 1)));
            } else {
                pacont1;
                f_no($('#pa5dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < pavec5.length; i++) {
            var pars5 = $('#pa6dcon' + (i + 1)).val();
            if (pars5 == pavec5[i]) {
                pacont1++;
                f_ok($('#pa6dcon' + (i + 1)));
            } else {
                pacont1;
                f_no($('#pa6dcon' + (i + 1)));
            }
        }
        var pasel1 = $('#pasel1').val();
        if (pasel1 == 'V') {
            pacont1++;
            f_ok($('#pasel1'));
        } else {
            pacont1;
            f_no($('#pasel1'));
        }
        var resulta = (pacont1 * 2) / 21;
        cor = cor + resulta;
        inc = inc + (2 - resulta);
        $('#pre1a').val(resulta.toFixed(2));

        var p1vec1 = ['V', 'V', 'V', 'F'];
        var p1vec2 = ['F', 'F', 'V', 'F'];
        var p1vec3 = ['F', 'F', 'V', 'V'];
        var p1vec4 = ['V', 'V', 'V', 'V'];
        var p1vec5 = ['V', 'F', 'V', 'F'];
        var p1cont1 = 0;
        for (var i = 0; i < p1vec1.length; i++) {
            var p1rs1 = $('#p12dcon' + (i + 1)).val();
            if (p1rs1 == p1vec1[i]) {
                p1cont1++;
                f_ok($('#p12dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p12dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1vec2.length; i++) {
            var p1rs2 = $('#p13dcon' + (i + 1)).val();
            if (p1rs2 == p1vec2[i]) {
                p1cont1++;
                f_ok($('#p13dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p13dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1vec3.length; i++) {
            var p1rs3 = $('#p14dcon' + (i + 1)).val();
            if (p1rs3 == p1vec3[i]) {
                p1cont1++;
                f_ok($('#p14dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p14dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1vec4.length; i++) {
            var p1rs4 = $('#p15dcon' + (i + 1)).val();
            if (p1rs4 == p1vec4[i]) {
                p1cont1++;
                f_ok($('#p15dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p15dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1vec5.length; i++) {
            var p1rs5 = $('#p16dcon' + (i + 1)).val();
            if (p1rs5 == p1vec5[i]) {
                p1cont1++;
                f_ok($('#p16dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p16dcon' + (i + 1)));
            }
        }
        var p1sel1 = $('#p1sel1').val();
        if (p1sel1 == 'V') {
            p1cont1++;
            f_ok($('#p1sel1'));
        } else {
            p1cont1;
            f_no($('#p1sel1'));
        }
        var result1 = (p1cont1 * 1) / 21;
        cor = cor + result1;
        inc = inc + (1 - result1);
        $('#pre1a1').val(result1.toFixed(2));

        var p3dcon1 = $('#p3rs1 .encierra1 span').text();
        var p3cont1 = 0;
        if (!p3dcon1) {
            p3cont1;
            f_no($('.1'));
        } else {
            if (p3dcon1 == 'p ∨ q') {
                p3cont1++;
                f_ok($('#p3rs1 .encierra1'));
            } else {
                p3cont1;
                f_no($('#p3rs1 .encierra1'));
            }
        }
        var result3 = (p3cont1 * 1) / 1;
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#pre1a3').val(result3.toFixed(2));

        var p4dcon1 = $('#p4rs1 .encierra1 span').text();
        var p4cont1 = 0;
        if (!p4dcon1) {
            p4cont1;
            f_no($('.2'));
        } else {
            if (p4dcon1 == 'i, ii, iv') {
                p4cont1++;
                f_ok($('#p4rs1 .encierra1'));
            } else {
                p4cont1;
                f_no($('#p4rs1 .encierra1'));
            }
        }
        var result4 = (p4cont1 * 1) / 1;
        cor = cor + result4;
        inc = inc + (1 - result4);
        $('#pre1a4').val(result4.toFixed(2));

        var p5dcon1 = $('#p5rs1 .encierra1 span').text();
        var p5cont1 = 0;
        if (!p5dcon1) {
            p5cont1;
            f_no($('.3'));
        } else {
            if (p5dcon1 == 'VFF') {
                p5cont1++;
                f_ok($('#p5rs1 .encierra1'));
            } else {
                p5cont1;
                f_no($('#p5rs1 .encierra1'));
            }
        }
        var result5 = (p5cont1 * 1) / 1;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#pre1a5').val(result5.toFixed(2));

        var p6dcon1 = $('#p6rs1 .encierra1 span').text();
        var p6cont1 = 0;
        if (!p6dcon1) {
            p6cont1;
            f_no($('.4'));
        } else {
            if (p6dcon1 == '∼p') {
                p6cont1++;
                f_ok($('#p6rs1 .encierra1'));
            } else {
                p6cont1;
                f_no($('#p6rs1 .encierra1'));
            }
        }
        var result6 = (p6cont1 * 1) / 1;
        cor = cor + result6;
        inc = inc + (1 - result6);
        $('#pre1a6').val(result6.toFixed(2));
        Calculo_nota();
    }
}