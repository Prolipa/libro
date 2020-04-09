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
    var p1vec1 = [parseInt((Math.random() * 10) + 15), parseInt((Math.random() * 10) + 15), parseInt((Math.random() * 10) + 15), parseInt((Math.random() * 10) + 15)];
    var p1pt1 = parseInt((Math.random() * 9) + 1);
    var p1vec2 = [(p1vec1[0] + p1pt1), (p1vec1[1] + p1pt1), (p1vec1[2] + p1pt1), (p1vec1[3] + p1pt1)];
    $('#nm0').val(p1vec1[0]);
    $('#nm0').attr('disabled', 'true');
    $('#nm1').val(p1vec1[1]);
    $('#nm1').attr('disabled', 'true');
    $('#nm2').val(p1vec1[2]);
    $('#nm2').attr('disabled', 'true');
    $('#nm3').val(p1vec1[3]);
    $('#nm3').attr('disabled', 'true');
    $('#nm41').val(p1pt1);
    $('#nm41').attr('disabled', 'true');

    $('#p1im1').html(p1vec1[0]);
    $('#p1im2').html(p1vec1[1]);
    $('#p1im3').html(p1vec1[2]);
    $('#p1im4').html(p1vec1[3]);
    $('#p1im5').html(p1pt1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        for (i = 0; i < 4; i++) {
            var resp = $("#nr" + [i] + "").val();
            if (resp == p1vec2[i]) {
                cor++;
                f_ok($("#nr" + [i] + ""));
            } else {
                inc++;
                f_no($("#nr" + [i] + ""));
            }
        }

        Calculo_nota();
    }
}