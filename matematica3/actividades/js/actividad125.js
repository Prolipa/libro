var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 12,
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
    var p1pt1 = parseInt((Math.random() * 5) + 1);
    var p1pt2 = parseInt((Math.random() * 15) + 10);
    var p1pt3 = parseInt((Math.random() * 80) + 15);
    $('#nm41').val(p1pt1);
    $('#nm41').attr('disabled', 'true');
    $('#nm42').val(p1pt2);
    $('#nm42').attr('disabled', 'true');
    $('#nm43').val(p1pt3);
    $('#nm43').attr('disabled', 'true');
    var p1aux1 = [];
    for (var i = 0; i < 4; i++) {
        p1aux1.push(parseInt((Math.random() * 90) + 6));

    }
    for (var i = 0; i < p1aux1.length; i++) {
        $('#nm' + i).val(p1aux1[i]);
        $('#nm' + i).attr('disabled', 'true');
    }
    var p1aux2 = [];
    for (var i = 0; i < 4; i++) {
        p1aux2.push(parseInt((Math.random() * 300) + 26));

    }
    for (var i = 0; i < p1aux2.length; i++) {
        $('#nm1' + i).val(p1aux2[i]);
        $('#nm1' + i).attr('disabled', 'true');
    }
    var p1aux3 = [];
    for (var i = 0; i < 4; i++) {
        p1aux3.push(parseInt((Math.random() * 500) + 100));

    }
    for (var i = 0; i < p1aux3.length; i++) {
        $('#nm2' + i).val(p1aux3[i]);
        $('#nm2' + i).attr('disabled', 'true');
    }

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        for (i = 0; i < 4; i++) {
            var resp = $("#nr" + [i] + "").val();
            if (resp == (p1aux1[i] - p1pt1)) {
                cor++;
                f_ok($("#nr" + [i] + ""));
            } else {
                inc++;
                f_no($("#nr" + [i] + ""));
            }
        }
        for (i = 0; i < 4; i++) {
            var resp = $("#nr1" + [i] + "").val();
            if (resp == (p1aux2[i] - p1pt2)) {
                cor++;
                f_ok($("#nr1" + [i] + ""));
            } else {
                inc++;
                f_no($("#nr1" + [i] + ""));
            }
        }
        for (i = 0; i < 4; i++) {
            var resp = $("#nr2" + [i] + "").val();
            if (resp == (p1aux3[i] - p1pt3)) {
                cor++;
                f_ok($("#nr2" + [i] + ""));
            } else {
                inc++;
                f_no($("#nr2" + [i] + ""));
            }
        }
        Calculo_nota();
    }
}