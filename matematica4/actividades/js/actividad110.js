var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 19,
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
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1vec1 = ['mora, naranjilla', 'mora, mango', 'mora, coco', 'guanábana, naranjilla', 'guanábana, mango', 'guanábana, coco', 'taxo, naranjilla', 'taxo, mango', 'taxo, coco'];
        var p1vec2 = ['mora, naranjilla', 'mora, mango', 'mora, coco', 'guanábana, naranjilla', 'guanábana, mango', 'guanábana, coco', 'taxo, naranjilla', 'taxo, mango', 'taxo, coco'];
        var p1res1 = [];
        for (var i = 0; i < 9; i++) {
            p1res1.push($('#p1dcon' + (i + 1)).val() + ', ' + $('#p1dco' + (i + 1)).val());
        }
        var p1res2 = [];
        for (var i = 0; i < 9; i++) {
            p1res2.push($('#p11dcon' + (i + 1)).val() + ', ' + $('#p11dco' + (i + 1)).val());
        }
        for (var i = 0; i < 9; i++) {
            var p1cont1 = 0;
            for (var j = 0; j < 9; j++) {
                if (p1res1[i] == p1vec1[j]) {
                    p1cont1++;
                    p1vec1[j] == 'nnn';
                } else {
                    p1cont1;
                }
            }
            if (p1cont1 == '1') {
                cor++;
                f_ok($('#p1dcon' + (i + 1)));
                f_ok($('#p1dco' + (i + 1)));
            } else {
                inc++;
                f_no($('#p1dcon' + (i + 1)));
                f_no($('#p1dco' + (i + 1)));
            }
        }
        for (var i = 0; i < 9; i++) {
            var p1cont2 = 0;
            if (p1res2[i] == p1vec2[i]) {
                p1cont2++;
                p1vec2[j] == 'nnn';
            } else {
                p1cont2;
            }

            if (p1cont2 == '1') {
                cor++;
                f_ok($('#p11dcon' + (i + 1)));
                f_ok($('#p11dco' + (i + 1)));
            } else {
                inc++;
                f_no($('#p11dcon' + (i + 1)));
                f_no($('#p11dco' + (i + 1)));
            }
        }
        var p1res1 = $('#p1res1').val();
        if (p1res1 == '9') {
            cor++;
            f_ok($('#p1res1'));
        } else {
            inc++;
            f_no($('#p1res1'));
        }
        Calculo_nota();
    }
}