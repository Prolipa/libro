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
    var a108num1 = [parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100)];
    $("#a110im1").html(a108num1[0]);
    $("#a110im2").html(a108num1[1]);

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a110dcon1 = [$('#a110dcon1').val(), $('#a110dcon2').val(), $('#a110dcon3').val()];
        a110dcon1 = a110dcon1.join('');
        var a110dcon2 = [$('#a110dcon4').val(), $('#a110dcon5').val(), $('#a110dcon6').val()];
        a110dcon2 = a110dcon2.join('');
        var a110dcon3 = [$('#a110dcon7').val(), $('#a110dcon8').val(), $('#a110dcon9').val()];
        a110dcon3 = a110dcon3.join('');

        if (a110dcon1 == a108num1[0]) {
            cor++;
            f_ok($('#a110dcon1'));
            f_ok($('#a110dcon2'));
            f_ok($('#a110dcon3'));
        } else {
            inc++;
            f_no($('#a110dcon1'));
            f_no($('#a110dcon2'));
            f_no($('#a110dcon3'));
        }
        if (a110dcon2 == a108num1[1]) {
            cor++;
            f_ok($('#a110dcon4'));
            f_ok($('#a110dcon5'));
            f_ok($('#a110dcon6'));
        } else {
            inc++;
            f_no($('#a110dcon4'));
            f_no($('#a110dcon5'));
            f_no($('#a110dcon6'));
        }
        if (a110dcon3 == (parseInt(a108num1[0]) + parseInt(a108num1[1]))) {
            cor++;
            f_ok($('#a110dcon7'));
            f_ok($('#a110dcon8'));
            f_ok($('#a110dcon9'));
        } else {
            inc++;
            f_no($('#a110dcon7'));
            f_no($('#a110dcon8'));
            f_no($('#a110dcon9'));
        }

        var a110dcon10 = $('#a110dcon10').val();
        if (a110dcon10 == (parseInt(a108num1[0]) + parseInt(a108num1[1]))) {
            cor++;
            f_ok($('#a110dcon10'));

        } else {
            inc++;
            f_no($('#a110dcon10'));

        }
        Calculo_nota();
    }
}