var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 6,
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

        var a102dcon1 = $('#a102dcon1').val();
        var a102dcon2 = $('#a102dcon2').val();
        var a102dcon3 = $('#a102dcon3').val();
        var a102dcon4 = $('#a102dcon4').val();
        var a102dcon5 = $('#a102dcon5').val();
        var a102dcon6 = $('#a102dcon6').val();
        var a102vec1 = ['perro', 'mono', 'ratón'];
        var a102vec2 = ['hueso', 'plátano', 'queso'];
        var a102cont1 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon1 == a102vec1[i] && (a102dcon1 + ',' + a102dcon2) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont1++;
                a102vec1[i] == a102cont1;

            }
        }
        if (a102cont1 == '1') {
            cor++;
            f_ok($('#a102dcon1'));
        } else {
            inc++;
            f_no($('#a102dcon1'));
        }
        var a102cont2 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon2 == a102vec2[i] && (a102dcon1 + ',' + a102dcon2) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont2++;

                a102vec2[i] == a102cont2;
            }
        }
        if (a102cont2 == '1') {
            cor++;
            f_ok($('#a102dcon2'));
        } else {
            inc++;
            f_no($('#a102dcon2'));
        }
        var a102cont3 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon3 == a102vec1[i] && (a102dcon3 + ',' + a102dcon4) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont3++;
                a102vec1[i] == a102cont3;

            }
        }
        if (a102cont3 == '1') {
            cor++;
            f_ok($('#a102dcon3'));
        } else {
            inc++;
            f_no($('#a102dcon3'));
        }
        var a102cont4 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon4 == a102vec2[i] && (a102dcon3 + ',' + a102dcon4) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont4++;

                a102vec2[i] == a102cont4;
            }
        }
        if (a102cont4 == '1') {
            cor++;
            f_ok($('#a102dcon4'));
        } else {
            inc++;
            f_no($('#a102dcon4'));
        }
        var a102cont5 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon5 == a102vec1[i] && (a102dcon5 + ',' + a102dcon6) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont5++;
                a102vec1[i] == a102cont5;

            }
        }
        if (a102cont5 == '1') {
            cor++;
            f_ok($('#a102dcon5'));
        } else {
            inc++;
            f_no($('#a102dcon5'));
        }
        var a102cont6 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon6 == a102vec2[i] && (a102dcon5 + ',' + a102dcon6) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont6++;

                a102vec2[i] == a102cont6;
            }
        }
        if (a102cont6 == '1') {
            cor++;
            f_ok($('#a102dcon6'));
        } else {
            inc++;
            f_no($('#a102dcon6'));
        }
        Calculo_nota();
    }
}