var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 4,
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
    var n = [];
    for (i = 0; i < 1; i++) {

        var numero = parseInt(Math.random() * 110 + 10);
        if (numero % 2 == 0) {
            n.push(numero);
            $("#p1im" + (i + 1) + "").html(n[i]);
        } else {
            i--;
        }
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        var p1dcon3 = $('#p1dcon3').val();
        var p1dcon4 = $('#p1dcon4').val();
        if (p1dcon1 == (n[0] / 2)) {
            cor++;
            f_ok($('#p1dcon1'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == (n[0])) {
            cor++;
            f_ok($('#p1dcon2'));
        } else {
            inc++;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3 == (n[0] / 2)) {
            cor++;
            f_ok($('#p1dcon3'));
        } else {
            inc++;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4 == (n[0] / 2)) {
            cor++;
            f_ok($('#p1dcon4'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
        }
        Calculo_nota();
    }
}