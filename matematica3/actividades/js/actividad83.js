var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});
$('.pint1').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')


    } else {
        $(this).addClass('pinta')
        $('.pint2').removeClass('pinta');

    }

})
$('.pint2').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')


    } else {
        $(this).addClass('pinta')
        $('.pint1').removeClass('pinta');

    }

})

function f_iniciar() {
    var p2num1 = [parseInt((Math.random() * 50) + 10)];
    var p2pt1 = parseInt((Math.random() * 6) + 1);
    for (var i = 0; i < 4; i++) {
        p2num1.push((p2num1[i] + p2pt1));
    }
    for (var i = 0; i < 3; i++) {
        $('#p2im' + (i + 1)).val(p2num1[i]);
    }

    var p2num2 = [parseInt((Math.random() * 60) + 10)];
    var p2pt2 = parseInt((Math.random() * 7) + 1);
    for (var i = 0; i < 4; i++) {
        p2num2.push((p2num2[i] + p2pt2));
    }
    for (var i = 0; i < 3; i++) {
        $('#p2im1' + (i + 1)).val(p2num2[i]);
    }


    var p3vec1 = ['img/i2_p74_act83.jpg',
        'img/i3_p74_act83.jpg',
        'img/i4_p74_act83.jpg',
        'img/i5_p74_act83.jpg',
        'img/i6_p74_act83.jpg'
    ];
    var p3vec2 = ['3', '5', '4', '7', '6'];
    var p3vec3 = [];
    var myArray1 = ['0', '1', '2', '3', '4'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c = myArray1[i - 1];
        $("#p3im" + (i)).attr('src', p3vec1[c]);
        p3vec3.push(p3vec2[c]);
    };


    var p4num1 = [parseInt((Math.random() * 9) + 1)];
    var p4num2 = [parseInt((Math.random() * 9) + 1)];
    var p4num3 = [parseInt((Math.random() * 9) + 1)];
    var p4vec1 = [];
    for (var i = 0; i < p4num1; i++) {
        p4vec1.push('<img src="img/i8_p74_act83.jpg" class="img-responsive" style="display:inline-block;" alt="">');
    }
    for (var i = 0; i < p4num2; i++) {
        p4vec1.push('<img src="img/i9_p74_act83.jpg" class="img-responsive" style="display:inline-block;" alt="">');
    }
    for (var i = 0; i < p4num3; i++) {
        p4vec1.push('<img src="img/i7_p74_act83.jpg" class="img-responsive" style="display:inline-block;" alt="">');
    }
    $("#p4im1").html(p4vec1);

    var p4num4 = [parseInt((Math.random() * 9) + 1)];
    var p4num5 = [parseInt((Math.random() * 9) + 1)];
    var p4num6 = [parseInt((Math.random() * 9) + 1)];
    var p4vec2 = [];
    for (var i = 0; i < p4num4; i++) {
        p4vec2.push('<img src="img/i8_p74_act83.jpg" class="img-responsive" style="display:inline-block;" alt="">');
    }
    for (var i = 0; i < p4num5; i++) {
        p4vec2.push('<img src="img/i9_p74_act83.jpg" class="img-responsive" style="display:inline-block;" alt="">');
    }
    for (var i = 0; i < p4num6; i++) {
        p4vec2.push('<img src="img/i7_p74_act83.jpg" class="img-responsive" style="display:inline-block;" alt="">');
    }
    $("#p4im2").html(p4vec2);



    var p5num1 = [parseInt((Math.random() * 9) + 1)];
    var p5num2 = [parseInt((Math.random() * 9) + 1)];
    var p5num3 = [parseInt((Math.random() * 9) + 1)];
    $('#p5im1').html(p5num1 + 'C,');
    $('#p5im2').html(p5num2 + 'D,');
    $('#p5im3').html(p5num3 + 'U,');
    var p5num4 = [parseInt((Math.random() * 9) + 1)];
    var p5num5 = [parseInt((Math.random() * 9) + 1)];
    var p5num6 = [parseInt((Math.random() * 9) + 1)];
    $('#p5im11').html(p5num4 + 'C,');
    $('#p5im12').html(p5num5 + 'D,');
    $('#p5im13').html(p5num6 + 'U,');
    var p5num7 = [parseInt((Math.random() * 9) + 1)];
    var p5num8 = [parseInt((Math.random() * 9) + 1)];
    var p5num9 = [parseInt((Math.random() * 9) + 1)];
    $('#p5im21').html(p5num7 + 'C,');
    $('#p5im22').html(p5num8 + 'D,');
    $('#p5im23').html(p5num9 + 'U,');
    var p5num10 = [parseInt((Math.random() * 9) + 1)];
    var p5num11 = [parseInt((Math.random() * 9) + 1)];
    var p5num12 = [parseInt((Math.random() * 9) + 1)];
    $('#p5im31').html(p5num10 + 'C,');
    $('#p5im32').html(p5num11 + 'D,');
    $('#p5im33').html(p5num12 + 'U,');
    var p5num13 = [parseInt((Math.random() * 9) + 1)];
    var p5num14 = [parseInt((Math.random() * 9) + 1)];
    var p5num15 = [parseInt((Math.random() * 9) + 1)];
    $('#p5im41').html(p5num13 + 'C,');
    $('#p5im42').html(p5num14 + 'D,');
    $('#p5im43').html(p5num15 + 'U,');
    var p5num16 = [parseInt((Math.random() * 9) + 1)];
    var p5num17 = [parseInt((Math.random() * 9) + 1)];
    var p5num18 = [parseInt((Math.random() * 9) + 1)];
    $('#p5im51').html(p5num16 + 'C,');
    $('#p5im52').html(p5num17 + 'D,');
    $('#p5im53').html(p5num18 + 'U,');
    var p5num19 = [parseInt((Math.random() * 9) + 1)];
    var p5num20 = [parseInt((Math.random() * 9) + 1)];
    var p5num21 = [parseInt((Math.random() * 9) + 1)];
    $('#p5im61').html(p5num19 + 'C,');
    $('#p5im62').html(p5num20 + 'D,');
    $('#p5im63').html(p5num21 + 'U,');



    var p6vec1 = [];
    var p6num1 = parseInt((Math.random() * 800) + 100);
    var p6num2 = parseInt((Math.random() * 800) + 100);
    $('#p6im1').html(p6num1);
    $('#p6im2').html(p6num2);
    if (p6num1 == p6num2) {
        p6vec1.push('=');
    } else if (p6num1 < p6num2) {
        p6vec1.push('<');
    } else if (p6num1 > p6num2) {
        p6vec1.push('>');
    }
    var p6num3 = parseInt((Math.random() * 800) + 100);
    var p6num4 = parseInt((Math.random() * 800) + 100);
    $('#p6im11').html(p6num3);
    $('#p6im12').html(p6num4);
    if (p6num3 == p6num4) {
        p6vec1.push('=');
    } else if (p6num3 < p6num4) {
        p6vec1.push('<');
    } else if (p6num3 > p6num4) {
        p6vec1.push('>');
    }
    var p6num5 = parseInt((Math.random() * 800) + 100);
    var p6num6 = parseInt((Math.random() * 800) + 100);
    $('#p6im21').html(p6num5);
    $('#p6im22').html(p6num6);
    if (p6num5 == p6num6) {
        p6vec1.push('=');
    } else if (p6num5 < p6num6) {
        p6vec1.push('<');
    } else if (p6num5 > p6num6) {
        p6vec1.push('>');
    }
    var p6num7 = parseInt((Math.random() * 800) + 100);
    var p6num8 = parseInt((Math.random() * 800) + 100);
    $('#p6im31').html(p6num7);
    $('#p6im32').html(p6num8);
    if (p6num7 == p6num8) {
        p6vec1.push('=');
    } else if (p6num7 < p6num8) {
        p6vec1.push('<');
    } else if (p6num7 > p6num8) {
        p6vec1.push('>');
    }
    var p6num9 = parseInt((Math.random() * 800) + 100);
    var p6num10 = parseInt((Math.random() * 800) + 100);
    $('#p6im41').html(p6num9);
    $('#p6im42').html(p6num10);
    if (p6num9 == p6num10) {
        p6vec1.push('=');
    } else if (p6num9 < p6num10) {
        p6vec1.push('<');
    } else if (p6num9 > p6num10) {
        p6vec1.push('>');
    }
    var p6num11 = parseInt((Math.random() * 800) + 100);
    var p6num12 = parseInt((Math.random() * 800) + 100);
    $('#p6im51').html(p6num11);
    $('#p6im52').html(p6num12);
    if (p6num11 == p6num12) {
        p6vec1.push('=');
    } else if (p6num11 < p6num12) {
        p6vec1.push('<');
    } else if (p6num11 > p6num12) {
        p6vec1.push('>');
    }
    var p6num13 = parseInt((Math.random() * 800) + 100);
    var p6num14 = parseInt((Math.random() * 800) + 100);
    $('#p6im61').html(p6num13);
    $('#p6im62').html(p6num14);
    if (p6num13 == p6num14) {
        p6vec1.push('=');
    } else if (p6num13 < p6num14) {
        p6vec1.push('<');
    } else if (p6num13 > p6num14) {
        p6vec1.push('>');
    }
    var p6num15 = parseInt((Math.random() * 800) + 100);
    var p6num16 = parseInt((Math.random() * 800) + 100);
    $('#p6im71').html(p6num15);
    $('#p6im72').html(p6num16);
    if (p6num15 == p6num16) {
        p6vec1.push('=');
    } else if (p6num15 < p6num16) {
        p6vec1.push('<');
    } else if (p6num15 > p6num16) {
        p6vec1.push('>');
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p2dcon1 = $('#p2dcon1').val();
        var p2dcon2 = $('#p2dcon2').val();
        var p2dcon3 = $('#p2dcon3').val();
        var p2dcon4 = $('#p2dcon4').val();
        var p2dcon5 = $('#p2dcon5').val();
        var p2dcon6 = $('#p2dcon6').val();
        var p2cont1 = 0;
        if (p2dcon1 == p2num1[3]) {
            p2cont1++;
            f_ok($('#p2dcon1'));

        } else {
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2 == p2num1[4]) {
            p2cont1++;
            f_ok($('#p2dcon2'));

        } else {
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3 == p2num2[3]) {
            p2cont1++;
            f_ok($('#p2dcon3'));

        } else {
            p2cont1;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4 == p2num2[4]) {
            p2cont1++;
            f_ok($('#p2dcon4'));

        } else {
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5 == p2pt1) {
            p2cont1++;
            f_ok($('#p2dcon5'));

        } else {
            p2cont1;
            f_no($('#p2dcon5'));
        }
        if (p2dcon6 == p2pt2) {
            p2cont1++;
            f_ok($('#p2dcon6'));

        } else {
            p2cont1;
            f_no($('#p2dcon6'));
        }
        var result2 = (p2cont1 * 1) / 6;
        cor = cor + result2;
        inc = inc + (1 - result2);

        var p3dcon1 = $('#p3dcon1').val();
        var p3dcon2 = $('#p3dcon2').val();
        var p3dcon3 = $('#p3dcon3').val();
        var p3cont1 = 0;
        if (p3dcon1 == p3vec3[0]) {
            p3cont1++;
            f_ok($('#p3dcon1'));

        } else {
            p3cont1;
            f_no($('#p3dcon1'));
        }
        if (p3dcon2 == p3vec3[1]) {
            p3cont1++;
            f_ok($('#p3dcon2'));

        } else {
            p3cont1;
            f_no($('#p3dcon2'));
        }
        if (p3dcon3 == p3vec3[2]) {
            p3cont1++;
            f_ok($('#p3dcon3'));

        } else {
            p3cont1;
            f_no($('#p3dcon3'));
        }
        var result3 = (p3cont1 * 1) / 3;
        cor = cor + result3;
        inc = inc + (1 - result3);

        var p4dcon1 = $('#p4dcon1').val();
        var p4dcon2 = $('#p4dcon2').val();
        var p4dcon3 = $('#p4dcon3').val();
        var p4dcon4 = $('#p4dcon4').val();
        var p4dcon5 = $('#p4dcon5').val();
        var p4dcon6 = $('#p4dcon6').val();
        var p4cont1 = 0;
        if (p4dcon1 == p4num1) {
            p4cont1++;
            f_ok($('#p4dcon1'));

        } else {
            p4cont1;
            f_no($('#p4dcon1'));
        }
        if (p4dcon2 == p4num2) {
            p4cont1++;
            f_ok($('#p4dcon2'));

        } else {
            p4cont1;
            f_no($('#p4dcon2'));
        }
        if (p4dcon3 == p4num3) {
            p4cont1++;
            f_ok($('#p4dcon3'));

        } else {
            p4cont1;
            f_no($('#p4dcon3'));
        }
        if (p4dcon4 == p4num4) {
            p4cont1++;
            f_ok($('#p4dcon4'));

        } else {
            p4cont1;
            f_no($('#p4dcon4'));
        }
        if (p4dcon5 == p4num5) {
            p4cont1++;
            f_ok($('#p4dcon5'));

        } else {
            p4cont1;
            f_no($('#p4dcon5'));
        }
        if (p4dcon6 == p4num6) {
            p4cont1++;
            f_ok($('#p4dcon6'));

        } else {
            p4cont1;
            f_no($('#p4dcon6'));
        }
        var result4 = (p4cont1 * 1) / 6;
        cor = cor + result4;
        inc = inc + (1 - result4);

        var p5dcon1 = $('#p5dcon1').val();
        var p5dcon2 = $('#p5dcon2').val();
        var p5dcon3 = $('#p5dcon3').val();
        var p5dcon4 = $('#p5dcon4').val();
        var p5dcon5 = $('#p5dcon5').val();
        var p5dcon6 = $('#p5dcon6').val();
        var p5dcon7 = $('#p5dcon7').val();
        var p5cont1 = 0;
        if (p5dcon1 == p5num1[0]) {
            p5cont1++;
            f_ok($('#p5dcon1'));

        } else {
            p5cont1;
            f_no($('#p5dcon1'));
        }
        if (p5dcon2 == p5num2[0]) {
            p5cont1++;
            f_ok($('#p5dcon2'));

        } else {
            p5cont1;
            f_no($('#p5dcon2'));
        }
        if (p5dcon3 == p5num3[0]) {
            p5cont1++;
            f_ok($('#p5dcon3'));

        } else {
            p5cont1;
            f_no($('#p5dcon3'));
        }
        if (p5dcon4 == (p5num1[0] * 100)) {
            p5cont1++;
            f_ok($('#p5dcon4'));

        } else {
            p5cont1;
            f_no($('#p5dcon4'));
        }
        if (p5dcon5 == (p5num2[0] * 10)) {
            p5cont1++;
            f_ok($('#p5dcon5'));

        } else {
            p5cont1;
            f_no($('#p5dcon5'));
        }
        if (p5dcon6 == p5num3[0]) {
            p5cont1++;
            f_ok($('#p5dcon6'));

        } else {
            p5cont1;
            f_no($('#p5dcon6'));
        }
        if (p5dcon7 == ((p5num1[0] * 100) + (p5num2[0] * 10) + (p5num3[0]))) {
            p5cont1++;
            f_ok($('#p5dcon7'));

        } else {
            p5cont1;
            f_no($('#p5dcon7'));
        }
        var p5dcon11 = $('#p5dcon11').val();
        var p5dcon12 = $('#p5dcon12').val();
        var p5dcon13 = $('#p5dcon13').val();
        var p5dcon14 = $('#p5dcon14').val();
        var p5dcon15 = $('#p5dcon15').val();
        var p5dcon16 = $('#p5dcon16').val();
        var p5dcon17 = $('#p5dcon17').val();

        if (p5dcon11 == p5num4[0]) {
            p5cont1++;
            f_ok($('#p5dcon11'));

        } else {
            p5cont1;
            f_no($('#p5dcon11'));
        }
        if (p5dcon12 == p5num5[0]) {
            p5cont1++;
            f_ok($('#p5dcon12'));

        } else {
            p5cont1;
            f_no($('#p5dcon12'));
        }
        if (p5dcon13 == p5num6[0]) {
            p5cont1++;
            f_ok($('#p5dcon13'));

        } else {
            p5cont1;
            f_no($('#p5dcon13'));
        }
        if (p5dcon14 == (p5num4[0] * 100)) {
            p5cont1++;
            f_ok($('#p5dcon14'));

        } else {
            p5cont1;
            f_no($('#p5dcon14'));
        }
        if (p5dcon15 == (p5num5[0] * 10)) {
            p5cont1++;
            f_ok($('#p5dcon15'));

        } else {
            p5cont1;
            f_no($('#p5dcon15'));
        }
        if (p5dcon16 == p5num6[0]) {
            p5cont1++;
            f_ok($('#p5dcon16'));

        } else {
            p5cont1;
            f_no($('#p5dcon16'));
        }
        if (p5dcon17 == ((p5num4[0] * 100) + (p5num5[0] * 10) + (p5num6[0]))) {
            p5cont1++;
            f_ok($('#p5dcon17'));

        } else {
            p5cont1;
            f_no($('#p5dcon17'));
        }

        var p5dcon21 = $('#p5dcon21').val();
        var p5dcon22 = $('#p5dcon22').val();
        var p5dcon23 = $('#p5dcon23').val();
        var p5dcon24 = $('#p5dcon24').val();
        var p5dcon25 = $('#p5dcon25').val();
        var p5dcon26 = $('#p5dcon26').val();
        var p5dcon27 = $('#p5dcon27').val();

        if (p5dcon21 == p5num7[0]) {
            p5cont1++;
            f_ok($('#p5dcon21'));

        } else {
            p5cont1;
            f_no($('#p5dcon21'));
        }
        if (p5dcon22 == p5num8[0]) {
            p5cont1++;
            f_ok($('#p5dcon22'));

        } else {
            p5cont1;
            f_no($('#p5dcon22'));
        }
        if (p5dcon23 == p5num9[0]) {
            p5cont1++;
            f_ok($('#p5dcon23'));

        } else {
            p5cont1;
            f_no($('#p5dcon23'));
        }
        if (p5dcon24 == (p5num7[0] * 100)) {
            p5cont1++;
            f_ok($('#p5dcon24'));

        } else {
            p5cont1;
            f_no($('#p5dcon24'));
        }
        if (p5dcon25 == (p5num8[0] * 10)) {
            p5cont1++;
            f_ok($('#p5dcon25'));

        } else {
            p5cont1;
            f_no($('#p5dcon25'));
        }
        if (p5dcon26 == p5num9[0]) {
            p5cont1++;
            f_ok($('#p5dcon26'));

        } else {
            p5cont1;
            f_no($('#p5dcon26'));
        }
        if (p5dcon27 == ((p5num7[0] * 100) + (p5num8[0] * 10) + (p5num9[0]))) {
            p5cont1++;
            f_ok($('#p5dcon27'));

        } else {
            p5cont1;
            f_no($('#p5dcon27'));
        }

        var p5dcon31 = $('#p5dcon31').val();
        var p5dcon32 = $('#p5dcon32').val();
        var p5dcon33 = $('#p5dcon33').val();
        var p5dcon34 = $('#p5dcon34').val();
        var p5dcon35 = $('#p5dcon35').val();
        var p5dcon36 = $('#p5dcon36').val();
        var p5dcon37 = $('#p5dcon37').val();

        if (p5dcon31 == p5num10[0]) {
            p5cont1++;
            f_ok($('#p5dcon31'));

        } else {
            p5cont1;
            f_no($('#p5dcon31'));
        }
        if (p5dcon32 == p5num11[0]) {
            p5cont1++;
            f_ok($('#p5dcon32'));

        } else {
            p5cont1;
            f_no($('#p5dcon32'));
        }
        if (p5dcon33 == p5num12[0]) {
            p5cont1++;
            f_ok($('#p5dcon33'));

        } else {
            p5cont1;
            f_no($('#p5dcon33'));
        }
        if (p5dcon34 == (p5num10[0] * 100)) {
            p5cont1++;
            f_ok($('#p5dcon34'));

        } else {
            p5cont1;
            f_no($('#p5dcon34'));
        }
        if (p5dcon35 == (p5num11[0] * 10)) {
            p5cont1++;
            f_ok($('#p5dcon35'));

        } else {
            p5cont1;
            f_no($('#p5dcon35'));
        }
        if (p5dcon36 == p5num12[0]) {
            p5cont1++;
            f_ok($('#p5dcon36'));

        } else {
            p5cont1;
            f_no($('#p5dcon36'));
        }
        if (p5dcon37 == ((p5num10[0] * 100) + (p5num11[0] * 10) + (p5num12[0]))) {
            p5cont1++;
            f_ok($('#p5dcon37'));

        } else {
            p5cont1;
            f_no($('#p5dcon37'));
        }

        var p5dcon41 = $('#p5dcon41').val();
        var p5dcon42 = $('#p5dcon42').val();
        var p5dcon43 = $('#p5dcon43').val();
        var p5dcon44 = $('#p5dcon44').val();
        var p5dcon45 = $('#p5dcon45').val();
        var p5dcon46 = $('#p5dcon46').val();
        var p5dcon47 = $('#p5dcon47').val();

        if (p5dcon41 == p5num13[0]) {
            p5cont1++;
            f_ok($('#p5dcon41'));

        } else {
            p5cont1;
            f_no($('#p5dcon41'));
        }
        if (p5dcon42 == p5num14[0]) {
            p5cont1++;
            f_ok($('#p5dcon42'));

        } else {
            p5cont1;
            f_no($('#p5dcon42'));
        }
        if (p5dcon43 == p5num15[0]) {
            p5cont1++;
            f_ok($('#p5dcon43'));

        } else {
            p5cont1;
            f_no($('#p5dcon43'));
        }
        if (p5dcon44 == (p5num13[0] * 100)) {
            p5cont1++;
            f_ok($('#p5dcon44'));

        } else {
            p5cont1;
            f_no($('#p5dcon44'));
        }
        if (p5dcon45 == (p5num14[0] * 10)) {
            p5cont1++;
            f_ok($('#p5dcon45'));

        } else {
            p5cont1;
            f_no($('#p5dcon45'));
        }
        if (p5dcon46 == p5num15[0]) {
            p5cont1++;
            f_ok($('#p5dcon46'));

        } else {
            p5cont1;
            f_no($('#p5dcon46'));
        }
        if (p5dcon47 == ((p5num13[0] * 100) + (p5num14[0] * 10) + (p5num15[0]))) {
            p5cont1++;
            f_ok($('#p5dcon47'));

        } else {
            p5cont1;
            f_no($('#p5dcon47'));
        }

        var p5dcon51 = $('#p5dcon51').val();
        var p5dcon52 = $('#p5dcon52').val();
        var p5dcon53 = $('#p5dcon53').val();
        var p5dcon54 = $('#p5dcon54').val();
        var p5dcon55 = $('#p5dcon55').val();
        var p5dcon56 = $('#p5dcon56').val();
        var p5dcon57 = $('#p5dcon57').val();

        if (p5dcon51 == p5num16[0]) {
            p5cont1++;
            f_ok($('#p5dcon51'));

        } else {
            p5cont1;
            f_no($('#p5dcon51'));
        }
        if (p5dcon52 == p5num17[0]) {
            p5cont1++;
            f_ok($('#p5dcon52'));

        } else {
            p5cont1;
            f_no($('#p5dcon52'));
        }
        if (p5dcon53 == p5num18[0]) {
            p5cont1++;
            f_ok($('#p5dcon53'));

        } else {
            p5cont1;
            f_no($('#p5dcon53'));
        }
        if (p5dcon54 == (p5num16[0] * 100)) {
            p5cont1++;
            f_ok($('#p5dcon54'));

        } else {
            p5cont1;
            f_no($('#p5dcon54'));
        }
        if (p5dcon55 == (p5num17[0] * 10)) {
            p5cont1++;
            f_ok($('#p5dcon55'));

        } else {
            p5cont1;
            f_no($('#p5dcon55'));
        }
        if (p5dcon56 == p5num18[0]) {
            p5cont1++;
            f_ok($('#p5dcon56'));

        } else {
            p5cont1;
            f_no($('#p5dcon56'));
        }
        if (p5dcon57 == ((p5num16[0] * 100) + (p5num17[0] * 10) + (p5num18[0]))) {
            p5cont1++;
            f_ok($('#p5dcon57'));

        } else {
            p5cont1;
            f_no($('#p5dcon57'));
        }

        var p5dcon61 = $('#p5dcon61').val();
        var p5dcon62 = $('#p5dcon62').val();
        var p5dcon63 = $('#p5dcon63').val();
        var p5dcon64 = $('#p5dcon64').val();
        var p5dcon65 = $('#p5dcon65').val();
        var p5dcon66 = $('#p5dcon66').val();
        var p5dcon67 = $('#p5dcon67').val();

        if (p5dcon61 == p5num19[0]) {
            p5cont1++;
            f_ok($('#p5dcon61'));

        } else {
            p5cont1;
            f_no($('#p5dcon61'));
        }
        if (p5dcon62 == p5num20[0]) {
            p5cont1++;
            f_ok($('#p5dcon62'));

        } else {
            p5cont1;
            f_no($('#p5dcon62'));
        }
        if (p5dcon63 == p5num21[0]) {
            p5cont1++;
            f_ok($('#p5dcon63'));

        } else {
            p5cont1;
            f_no($('#p5dcon63'));
        }
        if (p5dcon64 == (p5num19[0] * 100)) {
            p5cont1++;
            f_ok($('#p5dcon64'));

        } else {
            p5cont1;
            f_no($('#p5dcon64'));
        }
        if (p5dcon65 == (p5num20[0] * 10)) {
            p5cont1++;
            f_ok($('#p5dcon65'));

        } else {
            p5cont1;
            f_no($('#p5dcon65'));
        }
        if (p5dcon66 == p5num21[0]) {
            p5cont1++;
            f_ok($('#p5dcon66'));

        } else {
            p5cont1;
            f_no($('#p5dcon66'));
        }
        if (p5dcon67 == ((p5num19[0] * 100) + (p5num20[0] * 10) + (p5num21[0]))) {
            p5cont1++;
            f_ok($('#p5dcon67'));

        } else {
            p5cont1;
            f_no($('#p5dcon67'));
        }
        var result5 = (p5cont1 * 2) / 49;
        cor = cor + result5;
        inc = inc + (2 - result5);

        var p6sel1 = $('#p6sel1').val();
        var p6sel2 = $('#p6sel2').val();
        var p6sel3 = $('#p6sel3').val();
        var p6sel4 = $('#p6sel4').val();
        var p6sel5 = $('#p6sel5').val();
        var p6sel6 = $('#p6sel6').val();
        var p6sel7 = $('#p6sel7').val();
        var p6sel8 = $('#p6sel8').val();
        var p6cont1 = 0;
        if (p6sel1 == p6vec1[0]) {
            p6cont1++;
            f_ok($('#p6sel1'));

        } else {
            p6cont1;
            f_no($('#p6sel1'));
        }
        if (p6sel2 == p6vec1[1]) {
            p6cont1++;
            f_ok($('#p6sel2'));

        } else {
            p6cont1;
            f_no($('#p6sel2'));
        }
        if (p6sel3 == p6vec1[2]) {
            p6cont1++;
            f_ok($('#p6sel3'));

        } else {
            p6cont1;
            f_no($('#p6sel3'));
        }
        if (p6sel4 == p6vec1[3]) {
            p6cont1++;
            f_ok($('#p6sel4'));

        } else {
            p6cont1;
            f_no($('#p6sel4'));
        }
        if (p6sel5 == p6vec1[4]) {
            p6cont1++;
            f_ok($('#p6sel5'));

        } else {
            p6cont1;
            f_no($('#p6sel5'));
        }
        if (p6sel6 == p6vec1[5]) {
            p6cont1++;
            f_ok($('#p6sel6'));

        } else {
            p6cont1;
            f_no($('#p6sel6'));
        }
        if (p6sel7 == p6vec1[6]) {
            p6cont1++;
            f_ok($('#p6sel7'));

        } else {
            p6cont1;
            f_no($('#p6sel7'));
        }
        if (p6sel8 == p6vec1[7]) {
            p6cont1++;
            f_ok($('#p6sel8'));

        } else {
            p6cont1;
            f_no($('#p6sel8'));
        }
        var result6 = (p6cont1 * 1) / 8;
        cor = cor + result6;
        inc = inc + (1 - result6);

        var nota1_1 = $('#nota1_1').val();

        if (!nota1_1) {
            inc = inc + 2;
            f_no($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (2 - parseFloat(nota1_1));
            f_ok($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        }
        var nota1_2 = $('#nota1_2').val();

        if (!nota1_2) {
            inc = inc + 2;
            f_no($('#nota1_2'));
            $('#nota1_2').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (2 - parseFloat(nota1_2));
            f_ok($('#nota1_2'));
            $('#nota1_2').attr('disabled', 'true');
        }
        Calculo_nota();
    }
}