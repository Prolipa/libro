var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 18,
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
    var a105num1 = [parseInt((Math.random() * 100) + 70)];
    var a105pt1 = parseInt((Math.random() * 9) + 1);
    for (var i = 0; i < 8; i++) {
        a105num1.push((a105num1[i] - a105pt1));
    }
    $('#a105dcon1').val(a105num1[0]);
    $('#a105dcon2').val(a105num1[1]);
    $('#a105dcon3').val(a105num1[2]);

    var a105num2 = [parseInt((Math.random() * 500) + 100)];
    var a105pt2 = parseInt((Math.random() * 10) + 1);
    for (var i = 0; i < 8; i++) {
        a105num2.push((a105num2[i] - a105pt2));
    }
    $('#a1051dcon1').val(a105num2[0]);
    $('#a1051dcon2').val(a105num2[1]);
    $('#a1051dcon3').val(a105num2[2]);
    var a105num3 = [parseInt((Math.random() * 500) + 100)];
    var a105pt3 = parseInt((Math.random() * 10) + 1);
    for (var i = 0; i < 8; i++) {
        a105num3.push((a105num3[i] - a105pt3));
    }
    $('#a1052dcon1').val(a105num3[0]);
    $('#a1052dcon2').val(a105num3[1]);
    $('#a1052dcon3').val(a105num3[2]);

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        var a105dcon4 = $('#a105dcon4').val();
        var a105dcon5 = $('#a105dcon5').val();
        var a105dcon6 = $('#a105dcon6').val();
        var a105dcon7 = $('#a105dcon7').val();
        var a105dcon8 = $('#a105dcon8').val();
        var a105dcon9 = $('#a105dcon9').val();
        if (a105dcon4 == a105num1[3]) {
            cor++;
            f_ok($('#a105dcon4'));
        } else {
            inc++;
            f_no($('#a105dcon4'));
        }
        if (a105dcon5 == a105num1[4]) {
            cor++;
            f_ok($('#a105dcon5'));
        } else {
            inc++;
            f_no($('#a105dcon5'));
        }
        if (a105dcon6 == a105num1[5]) {
            cor++;
            f_ok($('#a105dcon6'));
        } else {
            inc++;
            f_no($('#a105dcon6'));
        }
        if (a105dcon7 == a105num1[6]) {
            cor++;
            f_ok($('#a105dcon7'));
        } else {
            inc++;
            f_no($('#a105dcon7'));
        }
        if (a105dcon8 == a105num1[7]) {
            cor++;
            f_ok($('#a105dcon8'));
        } else {
            inc++;
            f_no($('#a105dcon8'));
        }
        if (a105dcon9 == a105pt1) {
            cor++;
            f_ok($('#a105dcon9'));
        } else {
            inc++;
            f_no($('#a105dcon9'));
        }

        var a1051dcon4 = $('#a1051dcon4').val();
        var a1051dcon5 = $('#a1051dcon5').val();
        var a1051dcon6 = $('#a1051dcon6').val();
        var a1051dcon7 = $('#a1051dcon7').val();
        var a1051dcon8 = $('#a1051dcon8').val();
        var a1051dcon9 = $('#a1051dcon9').val();
        if (a1051dcon4 == a105num2[3]) {
            cor++;
            f_ok($('#a1051dcon4'));
        } else {
            inc++;
            f_no($('#a1051dcon4'));
        }
        if (a1051dcon5 == a105num2[4]) {
            cor++;
            f_ok($('#a1051dcon5'));
        } else {
            inc++;
            f_no($('#a1051dcon5'));
        }
        if (a1051dcon6 == a105num2[5]) {
            cor++;
            f_ok($('#a1051dcon6'));
        } else {
            inc++;
            f_no($('#a1051dcon6'));
        }
        if (a1051dcon7 == a105num2[6]) {
            cor++;
            f_ok($('#a1051dcon7'));
        } else {
            inc++;
            f_no($('#a1051dcon7'));
        }
        if (a1051dcon8 == a105num2[7]) {
            cor++;
            f_ok($('#a1051dcon8'));
        } else {
            inc++;
            f_no($('#a1051dcon8'));
        }
        if (a1051dcon9 == a105pt2) {
            cor++;
            f_ok($('#a1051dcon9'));
        } else {
            inc++;
            f_no($('#a1051dcon9'));
        }

        var a1052dcon4 = $('#a1052dcon4').val();
        var a1052dcon5 = $('#a1052dcon5').val();
        var a1052dcon6 = $('#a1052dcon6').val();
        var a1052dcon7 = $('#a1052dcon7').val();
        var a1052dcon8 = $('#a1052dcon8').val();
        var a1052dcon9 = $('#a1052dcon9').val();
        if (a1052dcon4 == a105num3[3]) {
            cor++;
            f_ok($('#a1052dcon4'));
        } else {
            inc++;
            f_no($('#a1052dcon4'));
        }
        if (a1052dcon5 == a105num3[4]) {
            cor++;
            f_ok($('#a1052dcon5'));
        } else {
            inc++;
            f_no($('#a1052dcon5'));
        }
        if (a1052dcon6 == a105num3[5]) {
            cor++;
            f_ok($('#a1052dcon6'));
        } else {
            inc++;
            f_no($('#a1052dcon6'));
        }
        if (a1052dcon7 == a105num3[6]) {
            cor++;
            f_ok($('#a1052dcon7'));
        } else {
            inc++;
            f_no($('#a1052dcon7'));
        }
        if (a1052dcon8 == a105num3[7]) {
            cor++;
            f_ok($('#a1052dcon8'));
        } else {
            inc++;
            f_no($('#a1052dcon8'));
        }
        if (a1052dcon9 == a105pt3) {
            cor++;
            f_ok($('#a1052dcon9'));
        } else {
            inc++;
            f_no($('#a1052dcon9'));
        }
        Calculo_nota();
    }
}