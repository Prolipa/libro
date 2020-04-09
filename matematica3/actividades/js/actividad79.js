var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 3,
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
        var a79dcon1 = $('#a79dcon1').val();
        var a79dcon2 = $('#a79dcon2').val();
        var a79dcon3 = $('#a79dcon3').val();

        if (a79dcon1 == '15') {
            cor++;
            f_ok($('#a79dcon1'));
        } else {
            inc++;
            f_no($('#a79dcon1'));
        }
        if (a79dcon2 == 'la ardilla' || a79dcon2 == 'ardilla') {
            cor++;
            f_ok($('#a79dcon2'));
        } else {
            inc++;
            f_no($('#a79dcon2'));
        }

        if (a79dcon3 == 'el zorro' || a79dcon3 == 'zorro') {
            cor++;
            f_ok($('#a79dcon3'));
        } else {
            inc++;
            f_no($('#a79dcon3'));
        }

        Calculo_nota();
    }
}