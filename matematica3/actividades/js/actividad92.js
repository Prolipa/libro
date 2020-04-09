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
        var a92dcon1 = $('#a92dcon1').val();
        var a92dcon2 = $('#a92dcon2').val();
        var a92dcon3 = $('#a92dcon3').val();
        var a92dcon4 = $('#a92dcon4').val();

        if (a92dcon1 == 'pintar') {
            cor++;
            f_ok($('#a92dcon1'));
        } else {
            inc++;
            f_no($('#a92dcon1'));
        }
        if (a92dcon2 == 'leer') {
            cor++;
            f_ok($('#a92dcon2'));
        } else {
            inc++;
            f_no($('#a92dcon2'));
        }
        if (a92dcon3 == '20') {
            cor++;
            f_ok($('#a92dcon3'));
        } else {
            inc++;
            f_no($('#a92dcon3'));
        }
        if (a92dcon4 == '11') {
            cor++;
            f_ok($('#a92dcon4'));
        } else {
            inc++;
            f_no($('#a92dcon4'));
        }
        Calculo_nota();
    }
}