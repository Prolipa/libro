var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 12,
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
        var a85dcon1 = $('#a85dcon1').val();
        var a85dcon2 = $('#a85dcon2').val();
        var a85dcon3 = $('#a85dcon3').val();
        var a85dcon4 = $('#a85dcon4').val();
        var a85dcon5 = $('#a85dcon5').val();
        var a85dcon6 = $('#a85dcon6').val();
        var a85dcon7 = $('#a85dcon7').val();
        var a85dcon8 = $('#a85dcon8').val();
        var a85dcon9 = $('#a85dcon9').val();
        var a85dcon10 = $('#a85dcon10').val();
        var a85dcon11 = $('#a85dcon11').val();
        var a85dcon12 = $('#a85dcon12').val();

        if (a85dcon1 == 'rectángulo') {
            cor++;
            f_ok($('#a85dcon1'));
        } else {
            inc++;
            f_no($('#a85dcon1'));
        }
        if (a85dcon2 == 'lados' || a85dcon2 == 'lado') {
            cor++;
            f_ok($('#a85dcon2'));
        } else {
            inc++;
            f_no($('#a85dcon2'));
        }
        if (a85dcon3 == 'ángulo' || a85dcon3 == 'ángulos') {
            cor++;
            f_ok($('#a85dcon3'));
        } else {
            inc++;
            f_no($('#a85dcon3'));
        }
        if (a85dcon4 == 'vértice' || a85dcon4 == 'vértices') {
            cor++;
            f_ok($('#a85dcon4'));
        } else {
            inc++;
            f_no($('#a85dcon4'));
        }
        if (a85dcon5 == 'cuadrado') {
            cor++;
            f_ok($('#a85dcon5'));
        } else {
            inc++;
            f_no($('#a85dcon5'));
        }
        if (a85dcon6 == 'lados' || a85dcon6 == 'lado') {
            cor++;
            f_ok($('#a85dcon6'));
        } else {
            inc++;
            f_no($('#a85dcon6'));
        }
        if (a85dcon7 == 'ángulo' || a85dcon7 == 'ángulos') {
            cor++;
            f_ok($('#a85dcon7'));
        } else {
            inc++;
            f_no($('#a85dcon7'));
        }
        if (a85dcon8 == 'vértice' || a85dcon8 == 'vértices') {
            cor++;
            f_ok($('#a85dcon8'));
        } else {
            inc++;
            f_no($('#a85dcon8'));
        }
        if (a85dcon9 == 'triángulo') {
            cor++;
            f_ok($('#a85dcon9'));
        } else {
            inc++;
            f_no($('#a85dcon9'));
        }
        if (a85dcon10 == 'lados' || a85dcon10 == 'lado') {
            cor++;
            f_ok($('#a85dcon10'));
        } else {
            inc++;
            f_no($('#a85dcon10'));
        }
        if (a85dcon11 == 'ángulo' || a85dcon11 == 'ángulos') {
            cor++;
            f_ok($('#a85dcon11'));
        } else {
            inc++;
            f_no($('#a85dcon11'));
        }
        if (a85dcon12 == 'vértice' || a85dcon12 == 'vértices') {
            cor++;
            f_ok($('#a85dcon12'));
        } else {
            inc++;
            f_no($('#a85dcon12'));
        }
        Calculo_nota();
    }
}