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
        var a84dcon1 = $('#a84dcon1').val();
        var a84dcon2 = $('#a84dcon2').val();
        var a84dcon3 = $('#a84dcon3').val();

        if (a84dcon1 == 'cuadrado') {
            cor++;
            f_ok($('#a84dcon1'));
        } else {
            inc++;
            f_no($('#a84dcon1'));
        }
        if (a84dcon2 == 'triángulo') {
            cor++;
            f_ok($('#a84dcon2'));
        } else {
            inc++;
            f_no($('#a84dcon2'));
        }
        if (a84dcon3 == 'rectángulo') {
            cor++;
            f_ok($('#a84dcon3'));
        } else {
            inc++;
            f_no($('#a84dcon3'));
        }
        Calculo_nota();
    }
}