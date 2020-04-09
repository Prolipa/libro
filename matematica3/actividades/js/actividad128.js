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
    var p1vec1 = [];
    for (var i = 0; i < 2; i++) {
        var p1nm1 = parseInt((Math.random() * 500) + 100);
        var p1nm2 = parseInt((Math.random() * 500) + 100);
        if (p1nm1 > p1nm2) {
            p1vec1.push(p1nm1);
            p1vec1.push(p1nm2);
        } else if (p1nm1 < p1nm2) {
            p1vec1.push(p1nm2);
            p1vec1.push(p1nm1);
        } else if (p1nm1 == p1nm2) {
            p1vec1.push((p1nm1 + 50));
            p1vec1.push(p1nm2);
        }
    }
    for (var i = 0; i < 4; i++) {
        $('#p1im' + (i + 1)).val(p1vec1[i]);
    }
    var p1aux1 = p1vec1[1].toString().split('');
    var p1aux2 = p1vec1[3].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon2' + (i + 1)).val(p1aux1[i]);
        $('#p1dcon3' + (i + 1)).val(p1aux2[i]);

    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var resp1 = [$("#p1dcon1").val(), $("#p1dcon2").val(), $("#p1dcon3").val()];
        if (resp1.join('') == p1vec1[0]) {
            cor++;
            f_ok($("#p1dcon1"));
            f_ok($("#p1dcon2"));
            f_ok($("#p1dcon3"));
        } else {
            inc++;
            f_no($("#p1dcon1"));
            f_no($("#p1dcon2"));
            f_no($("#p1dcon3"));
        }

        var resp2 = [$("#p1dcon4").val(), $("#p1dcon5").val(), $("#p1dcon6").val()];
        if (resp2.join('') == p1vec1[1]) {
            cor++;
            f_ok($("#p1dcon4"));
            f_ok($("#p1dcon5"));
            f_ok($("#p1dcon6"));
        } else {
            inc++;
            f_no($("#p1dcon4"));
            f_no($("#p1dcon5"));
            f_no($("#p1dcon6"));
        }

        var resp3 = [$("#p1dcon7").val(), $("#p1dcon8").val(), $("#p1dcon9").val()];
        if (resp3.join('') == (p1vec1[0] - p1vec1[1])) {
            cor++;
            f_ok($("#p1dcon7"));
            f_ok($("#p1dcon8"));
            f_ok($("#p1dcon9"));
        } else {
            inc++;
            f_no($("#p1dcon7"));
            f_no($("#p1dcon8"));
            f_no($("#p1dcon9"));
        }

        var resp4 = [$("#p1dcon11").val(), $("#p1dcon12").val(), $("#p1dcon13").val()];
        if (resp4.join('') == p1vec1[2]) {
            cor++;
            f_ok($("#p1dcon11"));
            f_ok($("#p1dcon12"));
            f_ok($("#p1dcon13"));
        } else {
            inc++;
            f_no($("#p1dcon11"));
            f_no($("#p1dcon12"));
            f_no($("#p1dcon13"));
        }

        var resp5 = [$("#p1dcon14").val(), $("#p1dcon15").val(), $("#p1dcon16").val()];
        if (resp5.join('') == p1vec1[3]) {
            cor++;
            f_ok($("#p1dcon14"));
            f_ok($("#p1dcon15"));
            f_ok($("#p1dcon16"));
        } else {
            inc++;
            f_no($("#p1dcon14"));
            f_no($("#p1dcon15"));
            f_no($("#p1dcon16"));
        }

        var resp6 = [$("#p1dcon17").val(), $("#p1dcon18").val(), $("#p1dcon19").val()];
        if (resp6.join('') == (p1vec1[2] - p1vec1[3])) {
            cor++;
            f_ok($("#p1dcon17"));
            f_ok($("#p1dcon18"));
            f_ok($("#p1dcon19"));
        } else {
            inc++;
            f_no($("#p1dcon17"));
            f_no($("#p1dcon18"));
            f_no($("#p1dcon19"));
        }

        var resp7 = [$("#p1dcon24").val(), $("#p1dcon25").val(), $("#p1dcon26").val()];
        if (resp7.join('') == (p1vec1[0] - p1vec1[1])) {
            cor++;
            f_ok($("#p1dcon24"));
            f_ok($("#p1dcon25"));
            f_ok($("#p1dcon26"));
        } else {
            inc++;
            f_no($("#p1dcon24"));
            f_no($("#p1dcon25"));
            f_no($("#p1dcon26"));
        }

        var resp8 = [$("#p1dcon27").val(), $("#p1dcon28").val(), $("#p1dcon29").val()];
        if (resp8.join('') == p1vec1[0]) {
            cor++;
            f_ok($("#p1dcon27"));
            f_ok($("#p1dcon28"));
            f_ok($("#p1dcon29"));
        } else {
            inc++;
            f_no($("#p1dcon27"));
            f_no($("#p1dcon28"));
            f_no($("#p1dcon29"));
        }

        var resp9 = [$("#p1dcon34").val(), $("#p1dcon35").val(), $("#p1dcon36").val()];
        if (resp9.join('') == (p1vec1[2] - p1vec1[3])) {
            cor++;
            f_ok($("#p1dcon34"));
            f_ok($("#p1dcon35"));
            f_ok($("#p1dcon36"));
        } else {
            inc++;
            f_no($("#p1dcon34"));
            f_no($("#p1dcon35"));
            f_no($("#p1dcon36"));
        }

        var resp8 = [$("#p1dcon37").val(), $("#p1dcon38").val(), $("#p1dcon39").val()];
        if (resp8.join('') == p1vec1[2]) {
            cor++;
            f_ok($("#p1dcon37"));
            f_ok($("#p1dcon38"));
            f_ok($("#p1dcon39"));
        } else {
            inc++;
            f_no($("#p1dcon37"));
            f_no($("#p1dcon38"));
            f_no($("#p1dcon39"));
        }
        Calculo_nota();
    }
}