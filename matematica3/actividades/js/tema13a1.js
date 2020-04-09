var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 6,
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
var p1aux1 = 0;
$('.pint1').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux1 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint2').removeClass('pinta');
        p1aux1 = 1;
    }

})
$('.pint2').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux1 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint1').removeClass('pinta');
        p1aux1 = 2;
    }

})
var p1aux2 = 0;
$('.pint3').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux2 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint4').removeClass('pinta');
        p1aux2 = 1;
    }

})
$('.pint4').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux2 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint3').removeClass('pinta');
        p1aux2 = 2;
    }

})
var p1aux3 = 0;
$('.pint5').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux3 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint6').removeClass('pinta');
        p1aux3 = 1;
    }

})
$('.pint6').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux3 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint5').removeClass('pinta');
        p1aux3 = 2;
    }

})
var p1aux4 = 0;
$('.pint7').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux4 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint8').removeClass('pinta');
        p1aux4 = 1;
    }

})
$('.pint8').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux4 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint7').removeClass('pinta');
        p1aux4 = 2;
    }

})
var p1aux5 = 0;
$('.pint9').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux5 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint10').removeClass('pinta');
        p1aux5 = 1;
    }

})
$('.pint10').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux5 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint9').removeClass('pinta');
        p1aux5 = 2;
    }

})
var p1aux6 = 0;
$('.pint11').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux6 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint12').removeClass('pinta');
        p1aux6 = 1;
    }

})
$('.pint12').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux6 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint11').removeClass('pinta');
        p1aux6 = 2;
    }

})

function f_iniciar() {
    var a108num1 = ['img/i1_p121_tema13a1.jpg', 'img/i2_p121_tema13a1.jpg', 'img/i3_p121_tema13a1.jpg', 'img/i4_p121_tema13a1.jpg', 'img/i5_p121_tema13a1.jpg', 'img/i6_p121_tema13a1.jpg'];
    var a108num2 = ['1', '2', '2', '1', '1', '2'];
    var p5aux1 = [];
    var myArray1 = ['0', '1', '2', '3', '4', '5'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 6; i++) {
        var c = myArray1[i - 1];
        $("#p1im" + i).attr('src', a108num1[c]);
        p5aux1.push(a108num2[c]);

    };

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        if (p1aux1 == p5aux1[0]) {
            cor++;
            f_ok($('#pi' + p5aux1[0]));
        } else {
            inc++;
            f_no($('#pi' + p5aux1[0]));
        }
        if (p1aux2 == p5aux1[1]) {
            cor++;
            f_ok($('#pi1' + p5aux1[1]));
        } else {
            inc++;
            f_no($('#pi1' + p5aux1[1]));
        }
        if (p1aux3 == p5aux1[2]) {
            cor++;
            f_ok($('#pi2' + p5aux1[2]));
        } else {
            inc++;
            f_no($('#pi2' + p5aux1[2]));
        }
        if (p1aux4 == p5aux1[3]) {
            cor++;
            f_ok($('#pi3' + p5aux1[3]));
        } else {
            inc++;
            f_no($('#pi3' + p5aux1[3]));
        }
        if (p1aux5 == p5aux1[4]) {
            cor++;
            f_ok($('#pi4' + p5aux1[4]));
        } else {
            inc++;
            f_no($('#pi4' + p5aux1[4]));
        }
        if (p1aux6 == p5aux1[5]) {
            cor++;
            f_ok($('#pi5' + p5aux1[5]));
        } else {
            inc++;
            f_no($('#pi5' + p5aux1[5]));
        }
        Calculo_nota();
    }
}