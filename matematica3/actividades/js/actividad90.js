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

function f_iniciar() {
    var num1 = parseInt((Math.random() * 30) + 10);
    var num2 = parseInt((Math.random() * 20) + 10);
    $('#a90im1').html(num1);
    $('#a90im2').html(num2);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a90dcon1 = $('#a90dcon1').val();

        if (a90dcon1 == (num1 + num1 + num2 + num2)) {
            cor++;
            f_ok($('#a90dcon1'));
        } else {
            inc++;
            f_no($('#a90dcon1'));
        }
        Calculo_nota();
    }
}