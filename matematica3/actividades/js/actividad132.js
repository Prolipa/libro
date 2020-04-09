var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 8,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var p1num1 = parseInt((Math.random() * 300) + 100);
    var p1num2 = parseInt((Math.random() * 300) + 100);
    $("#p1im1").html(p1num1);
    $("#p1im2").html(p1num2);


    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        if (p1dcon1 == (p1num1)) {
            cor++;
            f_ok($('#p1dcon1'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == (p1num2)) {
            cor++;
            f_ok($('#p1dcon2'));
        } else {
            inc++;
            f_no($('#p1dcon2'));
        }
        var p1dcon3 = $('#p1dcon3').val().toLowerCase();
        if (p1dcon3 == 'resta' || p1dcon3 == 'resta.' || p1dcon3 == 'sustracción' || p1dcon3 == 'sustracción.') {
            cor++;
            f_ok($('#p1dcon3'));
        } else {
            inc++;
            f_no($('#p1dcon3'));
        }
        var p1dcon4 = $('#p1dcon4').val();
        var p1dcon5 = $('#p1dcon5').val();
        if (p1dcon4 == (p1num1)) {
            cor++;
            f_ok($('#p1dcon4'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5 == (p1num2)) {
            cor++;
            f_ok($('#p1dcon5'));
        } else {
            inc++;
            f_no($('#p1dcon5'));
        }
        var p1dcon6 = [$('#p1dcon6').val(), $('#p1dcon7').val(), $('#p1dcon8').val()];
        p1dcon6 = p1dcon6.join('');
        var p1dcon7 = [$('#p1dcon9').val(), $('#p1dcon10').val(), $('#p1dcon11').val()];
        p1dcon7 = p1dcon7.join('');
        var p1dcon8 = [$('#p1dcon12').val(), $('#p1dcon13').val(), $('#p1dcon14').val()];
        p1dcon8 = p1dcon8.join('');
        if (p1dcon6 == p1num1) {
            cor++;
            f_ok($('#p1dcon6'));
            f_ok($('#p1dcon7'));
            f_ok($('#p1dcon8'));
        } else {
            inc++;
            f_no($('#p1dcon6'));
            f_no($('#p1dcon7'));
            f_no($('#p1dcon8'));
        }
        if (p1dcon7 == p1num2) {
            cor++;
            f_ok($('#p1dcon9'));
            f_ok($('#p1dcon10'));
            f_ok($('#p1dcon11'));
        } else {
            inc++;
            f_no($('#p1dcon9'));
            f_no($('#p1dcon10'));
            f_no($('#p1dcon11'));
        }
        if (p1dcon8 == (p1num1 - p1num2)) {
            cor++;
            f_ok($('#p1dcon12'));
            f_ok($('#p1dcon13'));
            f_ok($('#p1dcon14'));
        } else {
            inc++;
            f_no($('#p1dcon12'));
            f_no($('#p1dcon13'));
            f_no($('#p1dcon14'));
        }

        Calculo_nota();
    }
}