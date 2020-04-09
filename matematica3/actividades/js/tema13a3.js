var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 1,
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
        $('.pint3').removeClass('pinta');
        $('.pint4').removeClass('pinta');
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
        $('.pint3').removeClass('pinta');
        $('.pint4').removeClass('pinta');
        p1aux1 = 2;
    }

})
$('.pint3').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux1 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint4').removeClass('pinta');
        $('.pint1').removeClass('pinta');
        $('.pint2').removeClass('pinta');
        p1aux1 = 3;
    }

})
$('.pint4').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
        p1aux1 = 0;

    } else {
        $(this).addClass('pinta')
        $('.pint3').removeClass('pinta');
        $('.pint2').removeClass('pinta');
        $('.pint1').removeClass('pinta');
        p1aux1 = 4;
    }

})

function f_iniciar() {
    var a108num1 = ['5', '14', '15', '16'];
    var a108num2 = ['5', '14', '15', '16'];
    var p5aux1 = [];
    var myArray1 = ['0', '1', '2', '3'];
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
        $("#p1im" + i).html(a108num1[c]);
        p5aux1.push(a108num2[c]);

    };

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1im1 = $('#p1im' + p1aux1).html();
        if (!p1im1) {
            inc++;
            f_no($('#p1im1'));
            f_no($('#p1im2'));
            f_no($('#p1im3'));
            f_no($('#p1im4'));
        } else {
            if (p1im1 == '15') {
                cor++;
                f_ok($('#p1im' + p1aux1));
            } else {
                inc++;
                f_no($('#p1im' + p1aux1));
            }
        }


        Calculo_nota();
    }
}