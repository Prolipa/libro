var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 15,
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

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a88dcon1 = $('#a88dcon1').val();
        var a88dcon2 = $('#a88dcon2').val();
        var a88dcon3 = $('#a88dcon3').val();
        var a88dcon4 = $('#a88dcon4').val();
        var a88dcon5 = $('#a88dcon5').val();
        var a88dcon6 = $('#a88dcon6').val();
        var a88dcon7 = $('#a88dcon7').val();
        var a88dcon8 = $('#a88dcon8').val();
        var a88dcon9 = $('#a88dcon9').val();
        var a88dcon10 = $('#a88dcon10').val();
        var a88dcon11 = $('#a88dcon11').val();
        var a88dcon12 = $('#a88dcon12').val();
        var a88dcon13 = $('#a88dcon13').val();
        var a88dcon14 = $('#a88dcon14').val();
        var a88dcon15 = $('#a88dcon15').val();

        if (a88dcon1 == '3') {
            cor++;
            f_ok($('#a88dcon1'));
        } else {
            inc++;
            f_no($('#a88dcon1'));
        }
        if (a88dcon2 == '3') {
            cor++;
            f_ok($('#a88dcon2'));
        } else {
            inc++;
            f_no($('#a88dcon2'));
        }
        if (a88dcon3 == '3') {
            cor++;
            f_ok($('#a88dcon3'));
        } else {
            inc++;
            f_no($('#a88dcon3'));
        }
        if (a88dcon4 == '3') {
            cor++;
            f_ok($('#a88dcon4'));
        } else {
            inc++;
            f_no($('#a88dcon4'));
        }
        if (a88dcon5 == '3') {
            cor++;
            f_ok($('#a88dcon5'));
        } else {
            inc++;
            f_no($('#a88dcon5'));
        }
        if (a88dcon6 == '3') {
            cor++;
            f_ok($('#a88dcon6'));
        } else {
            inc++;
            f_no($('#a88dcon6'));
        }
        if (a88dcon7 == '16') {
            cor++;
            f_ok($('#a88dcon7'));
        } else {
            inc++;
            f_no($('#a88dcon7'));
        }
        if (a88dcon8 == '3') {
            cor++;
            f_ok($('#a88dcon8'));
        } else {
            inc++;
            f_no($('#a88dcon8'));
        }
        if (a88dcon9 == '3') {
            cor++;
            f_ok($('#a88dcon9'));
        } else {
            inc++;
            f_no($('#a88dcon9'));
        }
        if (a88dcon10 == '3') {
            cor++;
            f_ok($('#a88dcon10'));
        } else {
            inc++;
            f_no($('#a88dcon10'));
        }
        if (a88dcon11 == '3') {
            cor++;
            f_ok($('#a88dcon11'));
        } else {
            inc++;
            f_no($('#a88dcon11'));
        }
        if (a88dcon12 == '12') {
            cor++;
            f_ok($('#a88dcon12'));
        } else {
            inc++;
            f_no($('#a88dcon12'));
        }
        if (a88dcon13 == '12') {
            cor++;
            f_ok($('#a88dcon13'));
        } else {
            inc++;
            f_no($('#a88dcon13'));
        }
        if (a88dcon14 == '16') {
            cor++;
            f_ok($('#a88dcon14'));
        } else {
            inc++;
            f_no($('#a88dcon14'));
        }
        if (a88dcon15 == '12') {
            cor++;
            f_ok($('#a88dcon15'));
        } else {
            inc++;
            f_no($('#a88dcon15'));
        }
        Calculo_nota();
    }
}