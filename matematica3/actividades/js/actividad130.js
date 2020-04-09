var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 16,
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
    var p1vec1 = [];
    for (var i = 0; i < 4; i++) {
        var p1nm1 = parseInt((Math.random() * 500) + 100);
        var p1nm2 = parseInt((Math.random() * 500) + 100);
        if (p1nm1 > p1nm2) {
            p1vec1.push(p1nm1);
            p1vec1.push(p1nm2);
        } else if (p1nm1 < p1nm2) {
            p1vec1.push(p1nm2);
            p1vec1.push(p1nm1);
        } else if (p1nm1 == p1nm2) {
            p1vec1.push((p1nm1 + 100));
            p1vec1.push(p1nm2);
        }
    }
    $('#p1im1').html(p1vec1[1]);
    $('#p1im2').html(p1vec1[0]);
    $('#p1im3').html(p1vec1[2]);
    $('#p1im4').html(p1vec1[3]);
    $('#p1im5').html(p1vec1[5]);
    $('#p1im6').html(p1vec1[4]);
    $('#p1im7').html(p1vec1[6]);
    $('#p1im8').html(p1vec1[7]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = [$('#p1dcon1').val(), $('#p1dcon2').val(), $('#p1dcon3').val()];
        var p1dcon2 = [$('#p1dcon4').val(), $('#p1dcon5').val(), $('#p1dcon6').val()];
        var p1dcon3 = [$('#p1dcon7').val(), $('#p1dcon8').val(), $('#p1dcon9').val()];
        if (p1dcon1.join('') == p1vec1[0]) {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon2'));
            f_ok($('#p1dcon3'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon2'));
            f_no($('#p1dcon3'));
        }
        if (p1dcon2.join('') == p1vec1[1]) {
            cor++;
            f_ok($('#p1dcon4'));
            f_ok($('#p1dcon5'));
            f_ok($('#p1dcon6'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
            f_no($('#p1dcon5'));
            f_no($('#p1dcon6'));
        }
        if (p1dcon3.join('') == (p1vec1[0] - p1vec1[1])) {
            cor++;
            f_ok($('#p1dcon7'));
            f_ok($('#p1dcon8'));
            f_ok($('#p1dcon9'));
        } else {
            inc++;
            f_no($('#p1dcon7'));
            f_no($('#p1dcon8'));
            f_no($('#p1dcon9'));
        }
        var p1dc1 = $('#p1dc1').val();
        if (p1dc1 == (p1vec1[0] - p1vec1[1])) {
            cor++;
            f_ok($('#p1dc1'));
        } else {
            inc++;
            f_no($('#p1dc1'));
        }
        var p2dcon1 = [$('#p2dcon1').val(), $('#p2dcon2').val(), $('#p2dcon3').val()];
        var p2dcon2 = [$('#p2dcon4').val(), $('#p2dcon5').val(), $('#p2dcon6').val()];
        var p2dcon3 = [$('#p2dcon7').val(), $('#p2dcon8').val(), $('#p2dcon9').val()];
        if (p2dcon1.join('') == p1vec1[2]) {
            cor++;
            f_ok($('#p2dcon1'));
            f_ok($('#p2dcon2'));
            f_ok($('#p2dcon3'));
        } else {
            inc++;
            f_no($('#p2dcon1'));
            f_no($('#p2dcon2'));
            f_no($('#p2dcon3'));
        }
        if (p2dcon2.join('') == p1vec1[3]) {
            cor++;
            f_ok($('#p2dcon4'));
            f_ok($('#p2dcon5'));
            f_ok($('#p2dcon6'));
        } else {
            inc++;
            f_no($('#p2dcon4'));
            f_no($('#p2dcon5'));
            f_no($('#p2dcon6'));
        }
        if (p2dcon3.join('') == (p1vec1[2] - p1vec1[3])) {
            cor++;
            f_ok($('#p2dcon7'));
            f_ok($('#p2dcon8'));
            f_ok($('#p2dcon9'));
        } else {
            inc++;
            f_no($('#p2dcon7'));
            f_no($('#p2dcon8'));
            f_no($('#p2dcon9'));
        }
        var p1dc2 = $('#p1dc2').val();
        if (p1dc2 == (p1vec1[2] - p1vec1[3])) {
            cor++;
            f_ok($('#p1dc2'));
        } else {
            inc++;
            f_no($('#p1dc2'));
        }

        var p3dcon1 = [$('#p3dcon1').val(), $('#p3dcon2').val(), $('#p3dcon3').val()];
        var p3dcon2 = [$('#p3dcon4').val(), $('#p3dcon5').val(), $('#p3dcon6').val()];
        var p3dcon3 = [$('#p3dcon7').val(), $('#p3dcon8').val(), $('#p3dcon9').val()];
        if (p3dcon1.join('') == p1vec1[4]) {
            cor++;
            f_ok($('#p3dcon1'));
            f_ok($('#p3dcon2'));
            f_ok($('#p3dcon3'));
        } else {
            inc++;
            f_no($('#p3dcon1'));
            f_no($('#p3dcon2'));
            f_no($('#p3dcon3'));
        }
        if (p3dcon2.join('') == p1vec1[5]) {
            cor++;
            f_ok($('#p3dcon4'));
            f_ok($('#p3dcon5'));
            f_ok($('#p3dcon6'));
        } else {
            inc++;
            f_no($('#p3dcon4'));
            f_no($('#p3dcon5'));
            f_no($('#p3dcon6'));
        }
        if (p3dcon3.join('') == (p1vec1[4] - p1vec1[5])) {
            cor++;
            f_ok($('#p3dcon7'));
            f_ok($('#p3dcon8'));
            f_ok($('#p3dcon9'));
        } else {
            inc++;
            f_no($('#p3dcon7'));
            f_no($('#p3dcon8'));
            f_no($('#p3dcon9'));
        }
        var p1dc3 = $('#p1dc3').val();
        if (p1dc3 == (p1vec1[4] - p1vec1[5])) {
            cor++;
            f_ok($('#p1dc3'));
        } else {
            inc++;
            f_no($('#p1dc3'));
        }

        var p4dcon1 = [$('#p4dcon1').val(), $('#p4dcon2').val(), $('#p4dcon3').val()];
        var p4dcon2 = [$('#p4dcon4').val(), $('#p4dcon5').val(), $('#p4dcon6').val()];
        var p4dcon3 = [$('#p4dcon7').val(), $('#p4dcon8').val(), $('#p4dcon9').val()];
        if (p4dcon1.join('') == p1vec1[6]) {
            cor++;
            f_ok($('#p4dcon1'));
            f_ok($('#p4dcon2'));
            f_ok($('#p4dcon3'));
        } else {
            inc++;
            f_no($('#p4dcon1'));
            f_no($('#p4dcon2'));
            f_no($('#p4dcon3'));
        }
        if (p4dcon2.join('') == p1vec1[7]) {
            cor++;
            f_ok($('#p4dcon4'));
            f_ok($('#p4dcon5'));
            f_ok($('#p4dcon6'));
        } else {
            inc++;
            f_no($('#p4dcon4'));
            f_no($('#p4dcon5'));
            f_no($('#p4dcon6'));
        }
        if (p4dcon3.join('') == (p1vec1[6] - p1vec1[7])) {
            cor++;
            f_ok($('#p4dcon7'));
            f_ok($('#p4dcon8'));
            f_ok($('#p4dcon9'));
        } else {
            inc++;
            f_no($('#p4dcon7'));
            f_no($('#p4dcon8'));
            f_no($('#p4dcon9'));
        }
        var p1dc4 = $('#p1dc4').val();
        if (p1dc4 == (p1vec1[6] - p1vec1[7])) {
            cor++;
            f_ok($('#p1dc4'));
        } else {
            inc++;
            f_no($('#p1dc4'));
        }
        Calculo_nota();
    }
}