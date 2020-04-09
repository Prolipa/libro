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
numero_pagina(168);

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
        case '1 p2en1':
            $('.p2en1').addClass('encierra1');
            $('.p2en2').removeClass('encierra1');
            $('.p2en3').removeClass('encierra1');
            $('.p2en4').removeClass('encierra1');

            break;
        case '1 p2en2':
            $('.p2en2').addClass('encierra1');
            $('.p2en1').removeClass('encierra1');
            $('.p2en3').removeClass('encierra1');
            $('.p2en4').removeClass('encierra1');
            break;
        case '1 p2en3':
            $('.p2en3').addClass('encierra1');
            $('.p2en1').removeClass('encierra1');
            $('.p2en2').removeClass('encierra1');
            $('.p2en4').removeClass('encierra1');

            break;
        case '1 p2en4':
            $('.p2en4').addClass('encierra1');
            $('.p2en1').removeClass('encierra1');
            $('.p2en2').removeClass('encierra1');
            $('.p2en3').removeClass('encierra1');

            break;


    }
});

$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p3en1':
            $('.p3en1').addClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');

            break;
        case '2 p3en2':
            $('.p3en2').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');
            break;
        case '2 p3en3':
            $('.p3en3').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');

            break;
        case '2 p3en4':
            $('.p3en4').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');

            break;


    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 p4en1':
            $('.p4en1').addClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            $('.p4en5').removeClass('encierra1');
            break;
        case '3 p4en2':
            $('.p4en2').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            $('.p4en5').removeClass('encierra1');
            break;
        case '3 p4en3':
            $('.p4en3').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            $('.p4en5').removeClass('encierra1');
            break;
        case '3 p4en4':
            $('.p4en4').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en5').removeClass('encierra1');
            break;
        case '3 p4en5':
            $('.p4en5').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            break;

    }
});

$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 p5en1':
            $('.p5en1').addClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '4 p5en2':
            $('.p5en2').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '4 p5en3':
            $('.p5en3').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '4 p5en4':
            $('.p5en4').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '4 p5en5':
            $('.p5en5').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            break;

    }
});

$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 p6en1':
            $('.p6en1').addClass('encierra1');
            $('.p6en2').removeClass('encierra1');
            $('.p6en3').removeClass('encierra1');
            $('.p6en4').removeClass('encierra1');

            break;
        case '5 p6en2':
            $('.p6en2').addClass('encierra1');
            $('.p6en1').removeClass('encierra1');
            $('.p6en3').removeClass('encierra1');
            $('.p6en4').removeClass('encierra1');
            break;
        case '5 p6en3':
            $('.p6en3').addClass('encierra1');
            $('.p6en1').removeClass('encierra1');
            $('.p6en2').removeClass('encierra1');
            $('.p6en4').removeClass('encierra1');

            break;
        case '5 p6en4':
            $('.p6en4').addClass('encierra1');
            $('.p6en1').removeClass('encierra1');
            $('.p6en2').removeClass('encierra1');
            $('.p6en3').removeClass('encierra1');

            break;


    }
});

$('.6').click(function() {
    switch ($(this).attr('class')) {
        case '6 p7en1':
            $('.p7en1').addClass('encierra1');
            $('.p7en2').removeClass('encierra1');
            $('.p7en3').removeClass('encierra1');
            $('.p7en4').removeClass('encierra1');

            break;
        case '6 p7en2':
            $('.p7en2').addClass('encierra1');
            $('.p7en1').removeClass('encierra1');
            $('.p7en3').removeClass('encierra1');
            $('.p7en4').removeClass('encierra1');
            break;
        case '6 p7en3':
            $('.p7en3').addClass('encierra1');
            $('.p7en1').removeClass('encierra1');
            $('.p7en2').removeClass('encierra1');
            $('.p7en4').removeClass('encierra1');

            break;
        case '6 p7en4':
            $('.p7en4').addClass('encierra1');
            $('.p7en1').removeClass('encierra1');
            $('.p7en2').removeClass('encierra1');
            $('.p7en3').removeClass('encierra1');

            break;


    }
});
$('.7').click(function() {
    switch ($(this).attr('class')) {
        case '7 p8en1':
            $('.p8en1').addClass('encierra1');
            $('.p8en2').removeClass('encierra1');
            $('.p8en3').removeClass('encierra1');
            $('.p8en4').removeClass('encierra1');

            break;
        case '7 p8en2':
            $('.p8en2').addClass('encierra1');
            $('.p8en1').removeClass('encierra1');
            $('.p8en3').removeClass('encierra1');
            $('.p8en4').removeClass('encierra1');
            break;
        case '7 p8en3':
            $('.p8en3').addClass('encierra1');
            $('.p8en1').removeClass('encierra1');
            $('.p8en2').removeClass('encierra1');
            $('.p8en4').removeClass('encierra1');

            break;
        case '7 p8en4':
            $('.p8en4').addClass('encierra1');
            $('.p8en1').removeClass('encierra1');
            $('.p8en2').removeClass('encierra1');
            $('.p8en3').removeClass('encierra1');

            break;


    }
});
$('.8').click(function() {
    switch ($(this).attr('class')) {
        case '8 p9en1':
            $('.p9en1').addClass('encierra1');
            $('.p9en2').removeClass('encierra1');
            $('.p9en3').removeClass('encierra1');
            $('.p9en4').removeClass('encierra1');

            break;
        case '8 p9en2':
            $('.p9en2').addClass('encierra1');
            $('.p9en1').removeClass('encierra1');
            $('.p9en3').removeClass('encierra1');
            $('.p9en4').removeClass('encierra1');
            break;
        case '8 p9en3':
            $('.p9en3').addClass('encierra1');
            $('.p9en1').removeClass('encierra1');
            $('.p9en2').removeClass('encierra1');
            $('.p9en4').removeClass('encierra1');

            break;
        case '8 p9en4':
            $('.p9en4').addClass('encierra1');
            $('.p9en1').removeClass('encierra1');
            $('.p9en2').removeClass('encierra1');
            $('.p9en3').removeClass('encierra1');

            break;


    }
});
function f_iniciar() {
    var p2vec1 = ['F', 'V', 'V o F', 'No se puede determinar'];
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
        $("#p2im" + i).html(p2vec1[c1]);
    }

    var p3vec1 = ['F', 'V', 'V o F', 'No se puede determinar'];
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
        $("#p3im" + i).html(p3vec1[c2]);
    }

    var p4vec1 = ['VFF', 'FVV', 'VVV', 'VVF','FFF'];
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
        $("#p4im" + i).html(p4vec1[c3]);
    }
    var p5vec1 = ['p; r', 'p; q', 'r; t', 'q; t','p; r; t'];
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
        $("#p5im" + i).html(p5vec1[c4]);
    }
    var p6vec1 = ['V', 'F', 'V o F', 'No se puede determinar'];
    var myArray5 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray5.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray5[i - 1];
        myArray5[i - 1] = myArray5[j];
        myArray5[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c5 = myArray5[i - 1];
        $("#p6im" + i).html(p6vec1[c5]);
    }

    var p7vec1 = ['V', 'F', 'V o F', 'No se puede determinar'];
    var myArray6 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray6.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray6[i - 1];
        myArray6[i - 1] = myArray6[j];
        myArray6[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c6 = myArray6[i - 1];
        $("#p7im" + i).html(p7vec1[c6]);
    }
    var p8vec1 = ['i; ii', 'i; iii', 'i; iii; iv', 'i'];
    var myArray7 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray7.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray7[i - 1];
        myArray7[i - 1] = myArray7[j];
        myArray7[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c7 = myArray7[i - 1];
        $("#p8im" + i).html(p8vec1[c7]);
    }
    var p9vec1 = ['V V', 'V F', 'F F', 'F V'];
    var myArray8 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray8.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray8[i - 1];
        myArray8[i - 1] = myArray8[j];
        myArray8[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c8 = myArray8[i - 1];
        $("#p9im" + i).html(p9vec1[c8]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var padcon1 = $('#padcon1').val();
        var padcon2 = $('#padcon2').val();
        var padcon3 = $('#padcon3').val();
        var pasel1 = $('#pasel1').val();
        var pacont1=0;
        if (padcon1=='distributiva') {
            pacont1++;
            f_ok($('#padcon1'));
        }else{
            pacont1;
            f_no($('#padcon1'));
        }
        if (padcon2=='del complemento' || padcon2=='de complemento' || padcon2=='complemento') {
            pacont1++;
            f_ok($('#padcon2'));
        }else{
            pacont1;
            f_no($('#padcon2'));
        }
        if (padcon3=='de identidad' || padcon3=='identidad') {
            pacont1++;
            f_ok($('#padcon3'));
        }else{
            pacont1;
            f_no($('#padcon3'));
        }
        if (pasel1=='V') {
            pacont1++;
            f_ok($('#pasel1'));
        }else{
            pacont1;
            f_no($('#pasel1'));
        }

        var resulta = (pacont1 * 1) / 4;
        cor = cor + resulta;
        inc = inc + (1 - resulta);
        $('#pre1a').val(resulta.toFixed(2));

        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        var p1dcon3 = $('#p1dcon3').val();
        var p1sel1 = $('#p1sel1').val();
        var p1cont1=0;
        if (p1dcon1=='distributiva') {
            p1cont1++;
            f_ok($('#p1dcon1'));
        }else{
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2=='del complemento' || p1dcon2=='de complemento' || p1dcon2=='complemento') {
            p1cont1++;
            f_ok($('#p1dcon2'));
        }else{
            p1cont1;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3=='de identidad' || p1dcon3=='identidad') {
            p1cont1++;
            f_ok($('#p1dcon3'));
        }else{
            p1cont1;
            f_no($('#p1dcon3'));
        }
        if (p1sel1=='F') {
            p1cont1++;
            f_ok($('#p1sel1'));
        }else{
            p1cont1;
            f_no($('#p1sel1'));
        }

        var result1 = (p1cont1 * 1) / 4;
        cor = cor + result1;
        inc = inc + (1 - result1);
        $('#pre1a1').val(result1.toFixed(2));

        var p2dcon1 = $('#p2rs1 .encierra1 span').text();
        var p2cont1 = 0;
        if (!p2dcon1) {
            p2cont1;
            f_no($('.1'));
        } else {
            if (p2dcon1 == 'V o F') {
                p2cont1++;
                f_ok($('#p2rs1 .encierra1'));
            } else {
                p2cont1;
                f_no($('#p2rs1 .encierra1'));
            }
        }
        var result2 = (p2cont1 * 1) / 1;
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#pre1a2').val(result2.toFixed(2));

        var p3dcon1 = $('#p3rs1 .encierra1 span').text();
        var p3cont1 = 0;
        if (!p3dcon1) {
            p3cont1;
            f_no($('.2'));
        } else {
            if (p3dcon1 == 'F') {
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
            f_no($('.3'));
        } else {
            if (p4dcon1 == 'VVF') {
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
            f_no($('.4'));
        } else {
            if (p5dcon1 == 'q; t') {
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
            f_no($('.5'));
        } else {
            if (p6dcon1 == 'F') {
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

        var p7dcon1 = $('#p7rs1 .encierra1 span').text();
        var p7cont1 = 0;
        if (!p7dcon1) {
            p7cont1;
            f_no($('.6'));
        } else {
            if (p7dcon1 == 'V') {
                p7cont1++;
                f_ok($('#p7rs1 .encierra1'));
            } else {
                p7cont1;
                f_no($('#p7rs1 .encierra1'));
            }
        }
        var result7 = (p7cont1 * 1) / 1;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#pre1a7').val(result7.toFixed(2));

        var p8dcon1 = $('#p8rs1 .encierra1 span').text();
        var p8cont1 = 0;
        if (!p8dcon1) {
            p8cont1;
            f_no($('.7'));
        } else {
            if (p8dcon1 == 'i; iii; iv') {
                p8cont1++;
                f_ok($('#p8rs1 .encierra1'));
            } else {
                p8cont1;
                f_no($('#p8rs1 .encierra1'));
            }
        }
        var result8 = (p8cont1 * 1) / 1;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#pre1a8').val(result8.toFixed(2));

        var p9dcon1 = $('#p9rs1 .encierra1 span').text();
        var p9cont1 = 0;
        if (!p9dcon1) {
            p9cont1;
            f_no($('.8'));
        } else {
            if (p9dcon1 == 'F F') {
                p9cont1++;
                f_ok($('#p9rs1 .encierra1'));
            } else {
                p9cont1;
                f_no($('#p9rs1 .encierra1'));
            }
        }
        var result8 = (p9cont1 * 1) / 1;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#pre1a9').val(result8.toFixed(2));
        Calculo_nota();
    }
}