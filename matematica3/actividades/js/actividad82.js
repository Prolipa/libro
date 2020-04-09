var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
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
        var a82dcon1 = $('#a82dcon1').val();
        var a82dcon2 = $('#a82dcon2').val();
        var a82dcon3 = $('#a82dcon3').val();
        var a82dcon4 = $('#a82dcon4').val();
        var a82dcon5 = $('#a82dcon5').val();
        var a82dcon6 = $('#a82dcon6').val();
        var a82dcon7 = $('#a82dcon7').val();
        var a82dcon8 = $('#a82dcon8').val();
        var a82dcon9 = $('#a82dcon9').val();
        var a82dcon10 = $('#a82dcon10').val();

        if (a82dcon1 == '22') {
            cor++;
            f_ok($('#a82dcon1'));
        } else {
            inc++;
            f_no($('#a82dcon1'));
        }
        if (a82dcon3 == '74') {
            cor++;
            f_ok($('#a82dcon3'));
        } else {
            inc++;
            f_no($('#a82dcon3'));
        }
        if (a82dcon5 == '36') {
            cor++;
            f_ok($('#a82dcon5'));
        } else {
            inc++;
            f_no($('#a82dcon5'));
        }
        if (a82dcon7 == '89') {
            cor++;
            f_ok($('#a82dcon7'));
        } else {
            inc++;
            f_no($('#a82dcon7'));
        }
        if (a82dcon9 == '78') {
            cor++;
            f_ok($('#a82dcon9'));
        } else {
            inc++;
            f_no($('#a82dcon9'));
        }
        if (a82dcon2 == '1.°' || a82dcon2 == 'primer' || a82dcon2 == 'primero') {
            cor++;
            f_ok($('#a82dcon2'));
        } else {
            inc++;
            f_no($('#a82dcon2'));
        }
        if (a82dcon4 == '2.°' || a82dcon4 == 'segundo') {
            cor++;
            f_ok($('#a82dcon4'));
        } else {
            inc++;
            f_no($('#a82dcon4'));
        }
        if (a82dcon6 == '3.°' || a82dcon6 == 'tercer' || a82dcon6 == 'tercero') {
            cor++;
            f_ok($('#a82dcon6'));
        } else {
            inc++;
            f_no($('#a82dcon6'));
        }
        if (a82dcon8 == '4.°' || a82dcon8 == 'cuarto') {
            cor++;
            f_ok($('#a82dcon8'));
        } else {
            inc++;
            f_no($('#a82dcon8'));
        }
        if (a82dcon10 == '5.°' || a82dcon10 == 'quinto') {
            cor++;
            f_ok($('#a82dcon10'));
        } else {
            inc++;
            f_no($('#a82dcon10'));
        }
        Calculo_nota();
    }
}