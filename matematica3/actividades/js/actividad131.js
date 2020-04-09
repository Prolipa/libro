var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 14,
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
    var p1vec1 = [];
    for (var i = 0; i < 2; i++) {
        var p1nm1 = parseInt((Math.random() * 800) + 100);
        var p1nm2 = parseInt((Math.random() * 800) + 100);
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
    $("#p1im1").html(p1vec1[0]);
    $("#p1im2").html(p1vec1[1]);
    $("#p1im3").html(p1vec1[0]);
    $("#p1im4").html(p1vec1[1]);

    $("#p2im1").html(p1vec1[2]);
    $("#p2im2").html(p1vec1[3]);
    $("#p2im3").html(p1vec1[2]);
    $("#p2im4").html(p1vec1[3]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        if (p1dcon1 == (p1vec1[0])) {
            cor++;
            f_ok($('#p1dcon1'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == (p1vec1[1])) {
            cor++;
            f_ok($('#p1dcon2'));
        } else {
            inc++;
            f_no($('#p1dcon2'));
        }
        var p1dcon3 = $('#p1dcon3').val().toLowerCase();
        if (p1dcon3 == 'resta' || p1dcon3 == 'resta.' || p1dcon3 == 'sustracción' || p1dcon3 == 'sustracción.') {
            cor++;
            f_ok($('#p1dcon3'));
        } else {
            inc++;
            f_no($('#p1dcon3'));
        }
        var p1dcon4 = [$('#p1dcon4').val(), $('#p1dcon5').val(), $('#p1dcon6').val()];
        p1dcon4 = p1dcon4.join('');
        var p1dcon5 = [$('#p1dcon7').val(), $('#p1dcon8').val(), $('#p1dcon9').val()];
        p1dcon5 = p1dcon5.join('');
        var p1dcon6 = [$('#p1dcon10').val(), $('#p1dcon11').val(), $('#p1dcon12').val()];
        p1dcon6 = p1dcon6.join('');
        if (p1dcon4 == p1vec1[0]) {
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
        if (p1dcon5 == p1vec1[1]) {
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
        if (p1dcon6 == (p1vec1[0] - p1vec1[1])) {
            cor++;
            f_ok($('#p1dcon10'));
            f_ok($('#p1dcon11'));
            f_ok($('#p1dcon12'));
        } else {
            inc++;
            f_no($('#p1dcon10'));
            f_no($('#p1dcon11'));
            f_no($('#p1dcon12'));
        }
        var p1dcon13 = $('#p1dcon13').val();
        if (p1dcon13 == (p1vec1[0] - p1vec1[1])) {
            cor++;
            f_ok($('#p1dcon13'));
        } else {
            inc++;
            f_no($('#p1dcon13'));
        }

        var p2dcon1 = $('#p2dcon1').val();
        var p2dcon2 = $('#p2dcon2').val();
        if (p2dcon1 == (p1vec1[2])) {
            cor++;
            f_ok($('#p2dcon1'));
        } else {
            inc++;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2 == (p1vec1[3])) {
            cor++;
            f_ok($('#p2dcon2'));
        } else {
            inc++;
            f_no($('#p2dcon2'));
        }
        var p2dcon3 = $('#p2dcon3').val().toLowerCase();
        if (p2dcon3 == 'resta' || p2dcon3 == 'resta.' || p2dcon3 == 'sustracción' || p2dcon3 == 'sustracción.') {
            cor++;
            f_ok($('#p2dcon3'));
        } else {
            inc++;
            f_no($('#p2dcon3'));
        }
        var p2dcon4 = [$('#p2dcon4').val(), $('#p2dcon5').val(), $('#p2dcon6').val()];
        p2dcon4 = p2dcon4.join('');
        var p2dcon5 = [$('#p2dcon7').val(), $('#p2dcon8').val(), $('#p2dcon9').val()];
        p2dcon5 = p2dcon5.join('');
        var p2dcon6 = [$('#p2dcon10').val(), $('#p2dcon11').val(), $('#p2dcon12').val()];
        p2dcon6 = p2dcon6.join('');
        if (p2dcon4 == p1vec1[2]) {
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
        if (p2dcon5 == p1vec1[3]) {
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
        if (p2dcon6 == (p1vec1[2] - p1vec1[3])) {
            cor++;
            f_ok($('#p2dcon10'));
            f_ok($('#p2dcon11'));
            f_ok($('#p2dcon12'));
        } else {
            inc++;
            f_no($('#p2dcon10'));
            f_no($('#p2dcon11'));
            f_no($('#p2dcon12'));
        }
        var p2dcon13 = $('#p2dcon13').val();
        if (p2dcon13 == (p1vec1[2] - p1vec1[3])) {
            cor++;
            f_ok($('#p2dcon13'));
        } else {
            inc++;
            f_no($('#p2dcon13'));
        }
        Calculo_nota();
    }
}