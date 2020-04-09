var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 4,
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
        var p1dcon1 = [$('#p1dcon1').val(), $('#p1dcon11').val()];
        p1dcon1 = p1dcon1.join(',');
        var p1dcon2 = [$('#p1dcon2').val(), $('#p1dcon12').val()];
        p1dcon2 = p1dcon2.join(',');
        var p1dcon3 = [$('#p1dcon3').val(), $('#p1dcon13').val()];
        p1dcon3 = p1dcon3.join(',');
        var p1dcon4 = [$('#p1dcon4').val(), $('#p1dcon14').val()];
        p1dcon4 = p1dcon4.join(',');
        if (p1dcon1 == 'a,1') {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon11'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon11'));
        }
        if (p1dcon2 == 'b,2') {
            cor++;
            f_ok($('#p1dcon2'));
            f_ok($('#p1dcon12'));
        } else {
            inc++;
            f_no($('#p1dcon2'));
            f_no($('#p1dcon12'));
        }
        if (p1dcon3 == 'c,3') {
            cor++;
            f_ok($('#p1dcon3'));
            f_ok($('#p1dcon13'));
        } else {
            inc++;
            f_no($('#p1dcon3'));
            f_no($('#p1dcon13'));
        }
        if (p1dcon4 == 'd,4') {
            cor++;
            f_ok($('#p1dcon4'));
            f_ok($('#p1dcon14'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
            f_no($('#p1dcon14'));
        }
        Calculo_nota();
    }
}