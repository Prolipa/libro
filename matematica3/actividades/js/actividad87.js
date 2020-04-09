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
        var a87dcon1 = $('#a87dcon1').val();
        var a87dcon2 = $('#a87dcon2').val();
        var a87dcon3 = $('#a87dcon3').val();

        if (a87dcon1 == 'rectangular') {
            cor++;
            f_ok($('#a87dcon1'));
        } else {
            inc++;
            f_no($('#a87dcon1'));
        }
        if (a87dcon2 == 'cuadrada') {
            cor++;
            f_ok($('#a87dcon2'));
        } else {
            inc++;
            f_no($('#a87dcon2'));
        }
        if (a87dcon3 == '2') {
            cor++;
            f_ok($('#a87dcon3'));
        } else {
            inc++;
            f_no($('#a87dcon3'));
        }
        Calculo_nota();
    }
}