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
var titulos = "refuerzo";
numero_pagina(176);

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
        case '1 p1en1':
            $('.p1en1').addClass('encierra1');
            $('.p1en2').removeClass('encierra1');
            $('.p1en3').removeClass('encierra1');
            $('.p1en4').removeClass('encierra1');
            $('.p1en5').removeClass('encierra1');
            break;
        case '1 p1en2':
            $('.p1en2').addClass('encierra1');
            $('.p1en1').removeClass('encierra1');
            $('.p1en3').removeClass('encierra1');
            $('.p1en4').removeClass('encierra1');
            $('.p1en5').removeClass('encierra1');
            break;
        case '1 p1en3':
            $('.p1en3').addClass('encierra1');
            $('.p1en1').removeClass('encierra1');
            $('.p1en2').removeClass('encierra1');
            $('.p1en4').removeClass('encierra1');
            $('.p1en5').removeClass('encierra1');
            break;
        case '1 p1en4':
            $('.p1en4').addClass('encierra1');
            $('.p1en1').removeClass('encierra1');
            $('.p1en2').removeClass('encierra1');
            $('.p1en3').removeClass('encierra1');
            $('.p1en5').removeClass('encierra1');
            break;
        case '1 p1en5':
            $('.p1en5').addClass('encierra1');
            $('.p1en1').removeClass('encierra1');
            $('.p1en2').removeClass('encierra1');
            $('.p1en3').removeClass('encierra1');
            $('.p1en4').removeClass('encierra1');
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
function f_iniciar() {
    var p1vec1 = [
        '<li>' +
        '<span class="1 p1en1" style="color: black;">Solo la mediana</span>' +
        '</li>',
        '<li>' +
        '<span class="1 p1en2" style="color: black;">Solo la media aritmética</span>' +
        '</li>',
        '<li>' +
        '<span class="1 p1en3" style="color: black;">Solo la moda</span>' +
        '</li>',
        '<li>' +
        '<span class="1 p1en4" style="color: black;">La mediana y la moda</span>' +
        '</li>',
        '<li>' +
        '<span class="1 p1en5" style="color: black;">Las tres medidas</span>' +
        '</li>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1rs1').html(p1vec1);

    var p3vec1=['10 y 5','6.5 y 6','5 y 10','3 y 12'];
    p3vec1.sort(f_randomico);
    for (var i = 0; i < p3vec1.length; i++) {
        $('#p3im'+(i+1)).html(p3vec1[i]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1rs1 = $('#p1rs1 .encierra1').text();
        var p1cont1 = 0;
        if (!p1rs1) {
            p1cont1;
            f_no($('.1'));
        } else {
            if (p1rs1 == 'Solo la media aritmética') {
                p1cont1++;
                f_ok($('#p1rs1 .encierra1'))
            }else{
                p1cont1;
                f_no($('#p1rs1 .encierra1'))
            }
        }
        var result1 = (p1cont1 * 2) / 1;
        cor = cor + result1;
        inc = inc + (2 - result1);
        $('#pre1a1').val(result1.toFixed(2));

        var p2dcon1=parseFloat($('#p2dcon1').val()).toFixed(1);
        var p2dcon2=parseFloat($('#p2dcon2').val()).toFixed(1);
        var p2dcon3=parseFloat($('#p2dcon3').val()).toFixed(1);
        var p2cont1=0;
        if (p2dcon1=='16.5' || p2dcon1=='16.6') {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2=='17.0') {
            p2cont1++;
            f_ok($('#p2dcon2'));
        }else{
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3=='18.0') {
            p2cont1++;
            f_ok($('#p2dcon3'));
        }else{
            p2cont1;
            f_no($('#p2dcon3'));
        }

        var p2dcon4=parseFloat($('#p2dcon4').val()).toFixed(1);
        var p2dcon5=parseFloat($('#p2dcon5').val()).toFixed(1);
        var p2dcon6=parseFloat($('#p2dcon6').val()).toFixed(1);
        var p2dcon7=parseFloat($('#p2dcon7').val()).toFixed(1);
        if (p2dcon4=='1.8') {
            p2cont1++;
            f_ok($('#p2dcon4'));
        }else{
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5=='16.6' || p2dcon5=='16.5') {
            p2cont1++;
            f_ok($('#p2dcon5'));
        }else{
            p2cont1;
            f_no($('#p2dcon5'));
        }
        if (p2dcon6=='32.0') {
            p2cont1++;
            f_ok($('#p2dcon6'));
        }else{
            p2cont1;
            f_no($('#p2dcon6'));
        }
        if (p2dcon7=='61.8') {
            p2cont1++;
            f_ok($('#p2dcon7'));
        }else{
            p2cont1;
            f_no($('#p2dcon7'));
        }

        var result2 = (p2cont1 * 2) / 7;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#pre1a2').val(result2.toFixed(2));

        var p3dcon1 = $('#p3rs1 .encierra1 span').text();
        var p3cont1 = 0;
        if (!p3dcon1) {
            p3cont1;
            f_no($('.2'));
        } else {
            if (p3dcon1 == '5 y 10') {
                p3cont1++;
                f_ok($('#p3rs1 .encierra1'));
            } else {
                p3cont1;
                f_no($('#p3rs1 .encierra1'));
            }
        }
        var result3 = (p3cont1 * 2) / 1;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#pre1a3').val(result3.toFixed(2));

        var p4dcon1=$('#p4dcon1').val();
        var p4dcon2=$('#p4dcon2').val();
        var p4cont1=0;
        if (p4dcon1=='29') {
            p4cont1++;
            f_ok($('#p4dcon1'));
        }else{
            p4cont1;
            f_no($('#p4dcon1'));
        }
        if (p4dcon2=='36') {
            p4cont1++;
            f_ok($('#p4dcon2'));
        }else{
            p4cont1;
            f_no($('#p4dcon2'));
        }
        var result4 = (p4cont1 * 2) / 2;
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#pre1a4').val(result4.toFixed(2));

        var p5dcon1=parseFloat($('#p5dcon1').val()).toFixed(1);
        var p5dcon2=parseFloat($('#p5dcon2').val()).toFixed(1);
        var p5dcon3=parseFloat($('#p5dcon3').val()).toFixed(1);
        var p5cont1=0;
        if (p5dcon1=='55.8') {
            p5cont1++;
            f_ok($('#p5dcon1'));
        }else{
            p5cont1;
            f_no($('#p5dcon1'));
        }
        if (p5dcon2=='85.3') {
            p5cont1++;
            f_ok($('#p5dcon2'));
        }else{
            p5cont1;
            f_no($('#p5dcon2'));
        }
        if (p5dcon3=='77.0') {
            p5cont1++;
            f_ok($('#p5dcon3'));
        }else{
            p5cont1;
            f_no($('#p5dcon3'));
        }
        var result5 = (p5cont1 * 2) / 3;
        cor = cor + result5;
        inc = inc + (2 - result5);
        $('#pre1a5').val(result5.toFixed(2));
        Calculo_nota();
    }
}