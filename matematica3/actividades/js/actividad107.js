var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 14,
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

function f_iniciar() {
    var a107num1 = [parseInt((Math.random() * 15) + 20)];
    for (var i = 0; i < 8; i++) {
        a107num1.push((a107num1[i] - 2));
    }
    $('#a107dcon1').val(a107num1[0]);
    $('#a107dcon2').val(a107num1[1]);
    $('#a107im1').html(a107num1[0]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a107dcon3 = $('#a107dcon3').val();
        var a107dcon4 = $('#a107dcon4').val();
        var a107dcon5 = $('#a107dcon5').val();
        var a107dcon6 = $('#a107dcon6').val();
        var a107dcon7 = $('#a107dcon7').val();
        var a107dcon8 = $('#a107dcon8').val();
        var a107dcon9 = $('#a107dcon9').val();
        if (a107dcon3 == a107num1[2]) {
            cor++;
            f_ok($('#a107dcon3'));
        } else {
            inc++;
            f_no($('#a107dcon3'));
        }
        if (a107dcon4 == a107num1[3]) {
            cor++;
            f_ok($('#a107dcon4'));
        } else {
            inc++;
            f_no($('#a107dcon4'));
        }
        if (a107dcon5 == a107num1[4]) {
            cor++;
            f_ok($('#a107dcon5'));
        } else {
            inc++;
            f_no($('#a107dcon5'));
        }
        if (a107dcon6 == a107num1[5]) {
            cor++;
            f_ok($('#a107dcon6'));
        } else {
            inc++;
            f_no($('#a107dcon6'));
        }
        if (a107dcon7 == a107num1[6]) {
            cor++;
            f_ok($('#a107dcon7'));
        } else {
            inc++;
            f_no($('#a107dcon7'));
        }
        if (a107dcon8 == a107num1[7]) {
            cor++;
            f_ok($('#a107dcon8'));
        } else {
            inc++;
            f_no($('#a107dcon8'));
        }
        if (a107dcon9 == '2') {
            cor++;
            f_ok($('#a107dcon9'));
        } else {
            inc++;
            f_no($('#a107dcon9'));
        }

        var a107dcon11 = $('#a107dcon11').val();
        var a107dcon12 = $('#a107dcon12').val();
        var a107dcon13 = $('#a107dcon13').val();
        var a107dcon14 = $('#a107dcon14').val();
        var a107dcon15 = $('#a107dcon15').val();
        var a107dcon16 = $('#a107dcon16').val();
        var a107dcon17 = $('#a107dcon17').val();
        if (a107dcon11 == '2') {
            cor++;
            f_ok($('#a107dcon11'));
        } else {
            inc++;
            f_no($('#a107dcon11'));
        }
        if (a107dcon12 == '2') {
            cor++;
            f_ok($('#a107dcon12'));
        } else {
            inc++;
            f_no($('#a107dcon12'));
        }
        if (a107dcon13 == '2') {
            cor++;
            f_ok($('#a107dcon13'));
        } else {
            inc++;
            f_no($('#a107dcon13'));
        }
        if (a107dcon14 == '2') {
            cor++;
            f_ok($('#a107dcon14'));
        } else {
            inc++;
            f_no($('#a107dcon14'));
        }
        if (a107dcon15 == '2') {
            cor++;
            f_ok($('#a107dcon15'));
        } else {
            inc++;
            f_no($('#a107dcon15'));
        }
        if (a107dcon16 == '2') {
            cor++;
            f_ok($('#a107dcon16'));
        } else {
            inc++;
            f_no($('#a107dcon16'));
        }
        if (a107dcon17 == '2') {
            cor++;
            f_ok($('#a107dcon17'));
        } else {
            inc++;
            f_no($('#a107dcon17'));
        }
        Calculo_nota();
    }
}