var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 20,
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
    var p1vec1 = [parseInt((Math.random() * 300) + 11), parseInt((Math.random() * 300) + 11), parseInt((Math.random() * 300) + 11), parseInt((Math.random() * 300) + 11), parseInt((Math.random() * 300) + 11)];
    var p1pt1 = parseInt((Math.random() * 10) + 1);
    var p1vec2 = [(p1vec1[0] - p1pt1), (p1vec1[1] - p1pt1), (p1vec1[2] - p1pt1), (p1vec1[3] - p1pt1), (p1vec1[4] - p1pt1)];
    $('#nm0').val(p1vec1[0]);
    $('#nm0').attr('disabled', 'true');
    $('#nm1').val(p1vec1[1]);
    $('#nm1').attr('disabled', 'true');
    $('#nm2').val(p1vec1[2]);
    $('#nm2').attr('disabled', 'true');
    $('#nm3').val(p1vec1[3]);
    $('#nm3').attr('disabled', 'true');
    $('#nm4').val(p1vec1[4]);
    $('#nm4').attr('disabled', 'true');
    $('#nm41').val(p1pt1);
    $('#nm41').attr('disabled', 'true');

    var p1vec3 = [parseInt((Math.random() * 200) + 11), parseInt((Math.random() * 200) + 11), parseInt((Math.random() * 200) + 11), parseInt((Math.random() * 200) + 11), parseInt((Math.random() * 200) + 11)];
    var p1pt2 = parseInt((Math.random() * 10) + 1);
    var p1vec4 = [(p1vec3[0] - p1pt2), (p1vec3[1] - p1pt2), (p1vec3[2] - p1pt2), (p1vec3[3] - p1pt2), (p1vec3[4] - p1pt2)];
    $('#nm10').val(p1vec3[0]);
    $('#nm10').attr('disabled', 'true');
    $('#nm11').val(p1vec3[1]);
    $('#nm11').attr('disabled', 'true');
    $('#nm12').val(p1vec3[2]);
    $('#nm12').attr('disabled', 'true');
    $('#nm13').val(p1vec3[3]);
    $('#nm13').attr('disabled', 'true');
    $('#nm14').val(p1vec3[4]);
    $('#nm14').attr('disabled', 'true');
    $('#nm42').val(p1pt2);
    $('#nm42').attr('disabled', 'true');

    var p1vec5 = [parseInt((Math.random() * 500) + 17), parseInt((Math.random() * 500) + 17), parseInt((Math.random() * 500) + 17), parseInt((Math.random() * 500) + 17), parseInt((Math.random() * 500) + 17)];
    var p1pt3 = parseInt((Math.random() * 15) + 1);
    var p1vec6 = [(p1vec5[0] - p1pt3), (p1vec5[1] - p1pt3), (p1vec5[2] - p1pt3), (p1vec5[3] - p1pt3), (p1vec5[4] - p1pt3)];
    $('#nm20').val(p1vec5[0]);
    $('#nm20').attr('disabled', 'true');
    $('#nm21').val(p1vec5[1]);
    $('#nm21').attr('disabled', 'true');
    $('#nm22').val(p1vec5[2]);
    $('#nm22').attr('disabled', 'true');
    $('#nm23').val(p1vec5[3]);
    $('#nm23').attr('disabled', 'true');
    $('#nm24').val(p1vec5[4]);
    $('#nm24').attr('disabled', 'true');
    $('#nm43').val(p1pt3);
    $('#nm43').attr('disabled', 'true');

    var p1vec7 = [parseInt((Math.random() * 500) + 22), parseInt((Math.random() * 500) + 22), parseInt((Math.random() * 500) + 22), parseInt((Math.random() * 500) + 22), parseInt((Math.random() * 500) + 22)];
    var p1pt4 = parseInt((Math.random() * 20) + 1);
    var p1vec8 = [(p1vec7[0] - p1pt4), (p1vec7[1] - p1pt4), (p1vec7[2] - p1pt4), (p1vec7[3] - p1pt4), (p1vec7[4] - p1pt4)];
    $('#nm30').val(p1vec7[0]);
    $('#nm30').attr('disabled', 'true');
    $('#nm31').val(p1vec7[1]);
    $('#nm31').attr('disabled', 'true');
    $('#nm32').val(p1vec7[2]);
    $('#nm32').attr('disabled', 'true');
    $('#nm33').val(p1vec7[3]);
    $('#nm33').attr('disabled', 'true');
    $('#nm34').val(p1vec7[4]);
    $('#nm34').attr('disabled', 'true');
    $('#nm44').val(p1pt4);
    $('#nm44').attr('disabled', 'true');
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        for (i = 0; i < 5; i++) {
            var resp = $("#nr" + [i] + "").val();
            if (resp == p1vec2[i]) {
                cor++;
                f_ok($("#nr" + [i] + ""));
            } else {
                inc++;
                f_no($("#nr" + [i] + ""));
            }
        }
        for (i = 0; i < 5; i++) {
            var resp = $("#nr1" + [i] + "").val();
            if (resp == p1vec4[i]) {
                cor++;
                f_ok($("#nr1" + [i] + ""));
            } else {
                inc++;
                f_no($("#nr1" + [i] + ""));
            }
        }
        for (i = 0; i < 5; i++) {
            var resp = $("#nr2" + [i] + "").val();
            if (resp == p1vec6[i]) {
                cor++;
                f_ok($("#nr2" + [i] + ""));
            } else {
                inc++;
                f_no($("#nr2" + [i] + ""));
            }
        }
        for (i = 0; i < 5; i++) {
            var resp = $("#nr3" + [i] + "").val();
            if (resp == p1vec8[i]) {
                cor++;
                f_ok($("#nr3" + [i] + ""));
            } else {
                inc++;
                f_no($("#nr3" + [i] + ""));
            }
        }
        Calculo_nota();
    }
}