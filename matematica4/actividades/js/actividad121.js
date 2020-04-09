var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 7,
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
    var p1vec1 = ['2', '6', '3', '36'];
    var p1aux1 = [];
    p1aux1.push((p1vec1[0].toString()) + (p1vec1[1].toString()) + (p1vec1[2].toString()) + (p1vec1[3].toString()));
    p1aux1.push((p1vec1[0].toString()) + (p1vec1[2].toString()) + (p1vec1[1].toString()) + (p1vec1[3].toString()));
    p1aux1.push((p1vec1[1].toString()) + (p1vec1[0].toString()) + (p1vec1[2].toString()) + (p1vec1[3].toString()));
    p1aux1.push((p1vec1[1].toString()) + (p1vec1[2].toString()) + (p1vec1[0].toString()) + (p1vec1[3].toString()));
    p1aux1.push((p1vec1[2].toString()) + (p1vec1[1].toString()) + (p1vec1[0].toString()) + (p1vec1[3].toString()));
    p1aux1.push((p1vec1[2].toString()) + (p1vec1[0].toString()) + (p1vec1[1].toString()) + (p1vec1[3].toString()));

    var vec8res = [];
    for (i = 0; i < 6; i++) {
        n1 = parseInt((Math.random() * 10) + 2);

        $("#nran" + [i] + "").html(n1);
        vec8res.push(n1);
    }
    vec8res.push(vec8res[0] * vec8res[1] * vec8res[2]);
    vec8res.push(vec8res[3] * vec8res[4] * vec8res[5]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1res1 = $('#p1dcon1').val();
        var p1res2 = [];
        var p1res3 = [];
        var p1res4 = [];
        var p1res5 = $('#p12dcon1').val();
        for (var i = 0; i < 4; i++) {
            var res1 = $("#p1dcon" + [i + 2] + "").val();
            p1res2.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p11dcon" + [i + 1] + "").val();
            p1res3.push(res1);
        }

        for (var i = 0; i < 4; i++) {
            var res1 = $("#p11dcon" + [i + 5] + "").val();
            p1res4.push(res1);
        }
        p1res2 = p1res2.join('');
        p1res3 = p1res3.join('');
        p1res4 = p1res4.join('');
        if (p1res1 == p1vec1[3]) {
            cor++;
            f_ok($('#p1dcon1'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1res5 == p1vec1[3]) {
            cor++;
            f_ok($('#p12dcon1'));
        } else {
            inc++;
            f_no($('#p12dcon1'));
        }
        var ace2 = 0;
        var ace3 = 0;
        var ace4 = 0;
        for (var i = 0; i < 6; i++) {
            if (p1aux1[0] != p1res2) {
                if (p1res2 == p1aux1[i]) {
                    ace2 = 1;
                } else {
                    ace2;
                }
            } else {
                ace2;
            }
        }
        if (ace2 == 1) {
            cor++;
            f_ok($("#p1dcon2"));
            f_ok($("#p1dcon3"));
            f_ok($("#p1dcon4"));
            f_ok($("#p1dcon5"));
        } else {
            inc++;
            f_no($("#p1dcon2"));
            f_no($("#p1dcon3"));
            f_no($("#p1dcon4"));
            f_no($("#p1dcon5"));
        }


        for (var i = 0; i < 6; i++) {
            if (p1res3 == p1aux1[i]) {
                ace3 = 1;
            } else {
                ace3;
            }
        }
        if (ace3 == 1) {
            cor++;
            f_ok($("#p11dcon1"));
            f_ok($("#p11dcon2"));
            f_ok($("#p11dcon3"));
            f_ok($("#p11dcon4"));
        } else {
            inc++;
            f_no($("#p11dcon1"));
            f_no($("#p11dcon2"));
            f_no($("#p11dcon3"));
            f_no($("#p11dcon4"));
        }

        for (var i = 0; i < 6; i++) {
            if (p1res3 != p1res4) {
                if (p1res4 == p1aux1[i]) {
                    ace4 = 1;
                } else {
                    ace4;
                }
            } else {
                ace4;
            }
        }
        if (ace4 == 1) {
            cor++;
            f_ok($("#p11dcon5"));
            f_ok($("#p11dcon6"));
            f_ok($("#p11dcon7"));
            f_ok($("#p11dcon8"));
        } else {
            inc++;
            f_no($("#p11dcon5"));
            f_no($("#p11dcon6"));
            f_no($("#p11dcon7"));
            f_no($("#p11dcon8"));
        }

        var n1 = $("#p8aux0").val();
        var n2 = $("#p8aux1").val();
        if (n1 == vec8res[6]) {
            cor++;
            f_ok($("#p8aux0"));
        } else {
            f_no($("#p8aux0"));
            inc++;
        }

        if (n2 == vec8res[7]) {
            cor++;
            f_ok($("#p8aux1"));
        } else {
            f_no($("#p8aux1"));
            inc++;
        }
        Calculo_nota();
    }
}