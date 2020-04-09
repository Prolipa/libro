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
var nump1 = 0;
var nump2 = 0;
var nump3 = 0;
var nump4 = 0;
var t = 0;
var t1 = 0;
var t2 = 0;
var t3 = 0;
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 1)
});
document.getElementById('nota1_5').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_5'), 2)
});
document.getElementById('nota1_6').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_6'), 1)
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

$('.enc1').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc2').removeClass('encierra');
        $('.enc3').removeClass('encierra');
        $('.enc4').removeClass('encierra');

    }

})
$('.enc2').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc1').removeClass('encierra');
        $('.enc3').removeClass('encierra');
        $('.enc4').removeClass('encierra');

    }

})
$('.enc3').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc2').removeClass('encierra');
        $('.enc1').removeClass('encierra');
        $('.enc4').removeClass('encierra');

    }

})
$('.enc4').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc2').removeClass('encierra');
        $('.enc3').removeClass('encierra');
        $('.enc1').removeClass('encierra');

    }

})



$('.enc5').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc6').removeClass('encierra');
        $('.enc7').removeClass('encierra');
        $('.enc8').removeClass('encierra');

    }

})
$('.enc6').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc5').removeClass('encierra');
        $('.enc7').removeClass('encierra');
        $('.enc8').removeClass('encierra');

    }

})
$('.enc7').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc6').removeClass('encierra');
        $('.enc5').removeClass('encierra');
        $('.enc8').removeClass('encierra');

    }

})
$('.enc8').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc6').removeClass('encierra');
        $('.enc7').removeClass('encierra');
        $('.enc5').removeClass('encierra');

    }

})

function st() {
    t = nn(nump1);
    t1 = nn(nump2);
    t2 = nn(nump3);
    t3 = nn(nump4);
    $('#p3dcon12').val(t1);
    $('#p3dcon14').val(t3);
}
window.onload = st;

function f_iniciar() {
    var p2num1 = [parseInt((Math.random() * 50) + 10)];
    var p2pt1 = parseInt((Math.random() * 9) + 1);
    for (var i = 0; i < 8; i++) {
        p2num1.push((p2num1[i] + p2pt1));
    }
    $('#p2dcon5').val(p2num1[0]);
    $('#p2dcon6').val(p2num1[1]);
    $('#p2dcon7').val(p2num1[2]);
    $('#p2dcon10').val(p2num1[5]);



    var p3num1 = parseInt((Math.random() * 700) + 100);
    var p3num2 = parseInt((Math.random() * 700) + 100);
    var p3num3 = parseInt((Math.random() * 700) + 100);
    var p3num4 = parseInt((Math.random() * 700) + 100);
    $('#p3dcon1').val(p3num1);
    $('#p3dcon3').val(p3num3);

    nump1 = p3num1;
    nump2 = p3num2;
    nump3 = p3num3;
    nump4 = p3num4;

    var p4num1 = parseInt((Math.random() * 9) + 1);
    var p4num2 = parseInt((Math.random() * 9) + 1);
    var p4num3 = parseInt((Math.random() * 9) + 1);
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

    var p4vec3 = [p4num1, p4num2, p4num3];
    var p4res1 = [p4vec3.join(''), (parseInt(p4vec3.join('')) - 50), (parseInt(p4vec3.join('')) + 50), (parseInt(p4vec3.join('')) + 10)];
    p4res1.sort(f_randomico);
    $("#p4im11").html(p4res1[0]);
    $("#p4im12").html(p4res1[1]);
    $("#p4im13").html(p4res1[2]);
    $("#p4im14").html(p4res1[3]);

    var p4num4 = parseInt((Math.random() * 9) + 1);
    var p4num5 = parseInt((Math.random() * 9) + 1);
    var p4num6 = parseInt((Math.random() * 9) + 1);
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
    var p4vec4 = [p4num4, p4num5, p4num6];
    var p4res2 = [p4vec4.join(''), (parseInt(p4vec4.join('')) - 50), (parseInt(p4vec4.join('')) + 50), (parseInt(p4vec4.join('')) + 10)];
    p4res2.sort(f_randomico);
    $("#p4im15").html(p4res2[0]);
    $("#p4im16").html(p4res2[1]);
    $("#p4im17").html(p4res2[2]);
    $("#p4im18").html(p4res2[3]);


    var p7vec1 = ['3', '7', '4'];
    var p7vec2 = ['lll', 'lllllll', 'llll'];
    var myArray1 = ['0', '1', '2'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    var c = myArray1[0];
    var c1 = myArray1[1];
    var c2 = myArray1[2];
    $("#p7dcon1" + (parseInt(c) + 1)).val(p7vec1[c]);
    $("#p7dcon1" + (parseInt(c) + 1)).attr('disabled', 'disabled');
    $("#p7dcon1" + (parseInt(c2) + 1)).val(p7vec1[c2]);
    $("#p7dcon1" + (parseInt(c2) + 1)).attr('disabled', 'disabled');
    $("#p7dcon" + (parseInt(c1) + 1)).val(p7vec2[c1]);
    $("#p7dcon" + (parseInt(c1) + 1)).attr('disabled', 'disabled');
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

        var p2dcon8 = $('#p2dcon8').val();
        var p2dcon9 = $('#p2dcon9').val();

        var p2dcon11 = $('#p2dcon11').val();
        var p2dcon12 = $('#p2dcon12').val();
        var p2dcon13 = $('#p2dcon13').val();
        var p2cont1 = 0;
        if (p2dcon1 == p2pt1) {
            p2cont1++;
            f_ok($('#p2dcon1'));
        } else {
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2 == p2pt1) {
            p2cont1++;
            f_ok($('#p2dcon2'));
        } else {
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3 == p2pt1) {
            p2cont1++;
            f_ok($('#p2dcon3'));
        } else {
            p2cont1;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4 == p2pt1) {
            p2cont1++;
            f_ok($('#p2dcon4'));
        } else {
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon8 == p2num1[3]) {
            p2cont1++;
            f_ok($('#p2dcon8'));
        } else {
            p2cont1;
            f_no($('#p2dcon8'));
        }
        if (p2dcon9 == p2num1[4]) {
            p2cont1++;
            f_ok($('#p2dcon9'));
        } else {
            p2cont1;
            f_no($('#p2dcon9'));
        }
        if (p2dcon11 == p2num1[6]) {
            p2cont1++;
            f_ok($('#p2dcon11'));
        } else {
            p2cont1;
            f_no($('#p2dcon11'));
        }
        if (p2dcon12 == p2num1[7]) {
            p2cont1++;
            f_ok($('#p2dcon12'));
        } else {
            p2cont1;
            f_no($('#p2dcon12'));
        }
        if (p2dcon13 == p2num1[8]) {
            p2cont1++;
            f_ok($('#p2dcon13'));
        } else {
            p2cont1;
            f_no($('#p2dcon13'));
        }
        var result2 = (p2cont1 * 1) / 9
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css("display", "");
        f_ok($('#nota1_2'));

        var p3dcon2 = $('#p3dcon2').val();
        var p3dcon4 = $('#p3dcon4').val();
        var p3cont1 = 0;
        if (p3dcon2 == p3num2) {
            p3cont1++;
            f_ok($('#p3dcon2'));
        } else {
            p3cont1;
            f_no($('#p3dcon2'));
        }
        if (p3dcon4 == p3num4) {
            p3cont1++;
            f_ok($('#p3dcon4'));
        } else {
            p3cont1;
            f_no($('#p3dcon4'));
        }
        var p3dcon11 = $('#p3dcon11').val();
        var p3dcon13 = $('#p3dcon13').val();
        if (p3dcon11 == t) {
            p3cont1++;
            f_ok($('#p3dcon11'));
        } else {
            p3cont1;
            f_no($('#p3dcon11'));
        }
        if (p3dcon13 == t2) {
            p3cont1++;
            f_ok($('#p3dcon13'));
        } else {
            p3cont1;
            f_no($('#p3dcon13'));
        }
        var result3 = (p3cont1 * 2) / 4
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css("display", "");
        f_ok($('#nota1_3'));

        var encr1 = $('.encr1 .encierra span').html();
        var p4cont1 = 0;
        if (!encr1) {
            f_no($('.enc1'));
            f_no($('.enc2'));
            f_no($('.enc3'));
            f_no($('.enc4'));
        } else {
            if (encr1 == p4vec3.join('')) {
                p4cont1++;
                f_ok($('.encr1 .encierra'));
            } else {
                p4cont1;
                f_no($('.encr1 .encierra'));
            }
        }

        var encr2 = $('.encr2 .encierra span').html();
        if (!encr2) {
            f_no($('.enc5'));
            f_no($('.enc6'));
            f_no($('.enc7'));
            f_no($('.enc8'));
        } else {
            if (encr2 == p4vec4.join('')) {
                p4cont1++;
                f_ok($('.encr2 .encierra'));
            } else {
                p4cont1;
                f_no($('.encr2 .encierra'));
            }
        }

        var result4 = (p4cont1 * 2) / 2
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#nota1_4').val(result4.toFixed(2));
        $('#nota1_4').css("display", "");
        f_ok($('#nota1_4'));

        var p7dco1 = $('#p7dcon1' + (parseInt(c1) + 1)).val();
        var p7dco2 = $('#p7dcon' + (parseInt(c) + 1)).val();
        var p7dco3 = $('#p7dcon' + (parseInt(c2) + 1)).val();
        var p7cont1 = 0;
        if (p7dco1 == p7vec1[(parseInt(c1))]) {
            p7cont1++;
            f_ok($('#p7dcon1' + (parseInt(c1) + 1)));
        } else {
            p7cont1;
            f_no($('#p7dcon1' + (parseInt(c1) + 1)));
        }
        if (p7dco2 == p7vec2[(parseInt(c))]) {
            p7cont1++;
            f_ok($('#p7dcon' + (parseInt(c) + 1)));
        } else {
            p7cont1;
            f_no($('#p7dcon' + (parseInt(c) + 1)));
        }
        if (p7dco3 == p7vec2[(parseInt(c2))]) {
            p7cont1++;
            f_ok($('#p7dcon' + (parseInt(c2) + 1)));
        } else {
            p7cont1;
            f_no($('#p7dcon' + (parseInt(c2) + 1)));
        }
        var p7dcon4 = $('#p7dcon4').val();
        var p7dcon5 = $('#p7dcon5').val();
        var p7dcon6 = $('#p7dcon6').val();
        if (p7dcon4 == '14') {
            p7cont1++;
            f_ok($('#p7dcon4'));
        } else {
            p7cont1;
            f_no($('#p7dcon4'));
        }
        if (p7dcon5 == 'los chupetes' || p7dcon5 == 'chupetes' || p7dcon5 == 'chupete' || p7dcon5 == 'el chupete') {
            p7cont1++;
            f_ok($('#p7dcon5'));
        } else {
            p7cont1;
            f_no($('#p7dcon5'));
        }
        if (p7dcon6 == 'los chicles' || p7dcon6 == 'chicles' || p7dcon6 == 'el chicle' || p7dcon6 == 'chicle') {
            p7cont1++;
            f_ok($('#p7dcon6'));
        } else {
            p7cont1;
            f_no($('#p7dcon6'));
        }
        var result7 = (p7cont1 * 1) / 6
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#nota1_7').val(result7.toFixed(2));
        $('#nota1_7').css("display", "");
        f_ok($('#nota1_7'));

        var nota1_1 = $('#nota1_1').val();

        if (!nota1_1) {
            inc = inc + 4;
            f_no($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (4 - parseFloat(nota1_1));
            f_ok($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        }
        var nota1_5 = $('#nota1_5').val();

        if (!nota1_5) {
            inc = inc + 4;
            f_no($('#nota1_5'));
            $('#nota1_5').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_5);
            inc = inc + (4 - parseFloat(nota1_5));
            f_ok($('#nota1_5'));
            $('#nota1_5').attr('disabled', 'true');
        }
        var nota1_6 = $('#nota1_6').val();

        if (!nota1_6) {
            inc = inc + 4;
            f_no($('#nota1_6'));
            $('#nota1_6').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_6);
            inc = inc + (4 - parseFloat(nota1_6));
            f_ok($('#nota1_6'));
            $('#nota1_6').attr('disabled', 'true');
        }
        Calculo_nota();
    }
}