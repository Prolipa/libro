var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 8,
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
        var a93dcon1 = $('#a93dcon1').val();
        var a93dcon2 = $('#a93dcon2').val();
        var a93dcon3 = $('#a93dcon3').val();
        var a93dcon4 = $('#a93dcon4').val();

        if (a93dcon1 == '5') {
            cor++;
            f_ok($('#a93dcon1'));
        } else {
            inc++;
            f_no($('#a93dcon1'));
        }
        if (a93dcon2 == '11') {
            cor++;
            f_ok($('#a93dcon2'));
        } else {
            inc++;
            f_no($('#a93dcon2'));
        }
        if (a93dcon3 == '6') {
            cor++;
            f_ok($('#a93dcon3'));
        } else {
            inc++;
            f_no($('#a93dcon3'));
        }
        if (a93dcon4 == '2') {
            cor++;
            f_ok($('#a93dcon4'));
        } else {
            inc++;
            f_no($('#a93dcon4'));
        }

        var a93dco1 = $('#a93dco1').val().split('');
        var a93dco2 = $('#a93dco2').val().split('');
        var a93dco3 = $('#a93dco3').val().split('');
        var a93dco4 = $('#a93dco4').val().split('');
        if (a93dco1.length == '5') {
            cor++;
            f_ok($('#a93dco1'));
        } else {
            inc++;
            f_no($('#a93dco1'));
        }
        if (a93dco2.length == '11') {
            cor++;
            f_ok($('#a93dco2'));
        } else {
            inc++;
            f_no($('#a93dco2'));
        }
        if (a93dco3.length == '6') {
            cor++;
            f_ok($('#a93dco3'));
        } else {
            inc++;
            f_no($('#a93dco3'));
        }
        if (a93dco4.length == '2') {
            cor++;
            f_ok($('#a93dco4'));
        } else {
            inc++;
            f_no($('#a93dco4'));
        }
        Calculo_nota();
    }
}