var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 22,
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
        var p1vec1=['20','30','40','50'];
        var p1vec2=['15','25','35','45','55'];
        var p1res1=[];
        for (var i = 0; i < 4; i++) {
            p1res1.push($('#p2dcon' + (i + 1)).val());
        }
        var p1res2 = [];
        for (var i = 0; i < 5; i++) {
            p1res2.push($('#p2dco' + (i + 1)).val());
        }
        for (var i = 0; i < 4; i++) {
            var p1cont1 = 0;
            for (var j = 0; j < 4; j++) {
                if (p1res1[i] == p1vec1[j]) {
                    p1cont1++;
                    p1vec1[j] == 'nnn';
                } else {
                    p1cont1;
                }
            }
            if (p1cont1 == '1') {
                cor++;
                f_ok($('#p2dcon' + (i + 1)));
            } else {
                inc++;
                f_no($('#p2dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < 5; i++) {
            var p1cont2 = 0;
            for (var j = 0; j < 5; j++) {
                if (p1res2[i] == p1vec2[j]) {
                    p1cont2++;
                    p1vec2[j] == 'nnn';
                } else {
                    p1cont2;
                }
            }
            if (p1cont2 == '1') {
                cor++;
                f_ok($('#p2dco' + (i + 1)));
            } else {
                inc++;
                f_no($('#p2dco' + (i + 1)));
            }
        }

        var p1vec3=['20; 25','20; 35','20; 45','20; 55','30; 35','30; 45','30; 55','40; 45','40; 55','50; 55'];
        var p1res3=[];
        for (var i = 0; i < 10; i++) {
            p1res3.push($('#p11dcon' + (i + 1)).val() + '; ' + $('#p11dco' + (i + 1)).val());
        }
        for (var i = 0; i < 10; i++) {
            var p1cont3 = 0;
            for (var j = 0; j < 10; j++) {
                if (p1res3[i] == p1vec3[j]) {
                    p1cont3++;
                    p1vec3[j] == 'nnn';
                } else {
                    p1cont3;
                }
            }
            if (p1cont3 == '1') {
                cor++;
                f_ok($('#p11dcon' + (i + 1)));
                f_ok($('#p11dco' + (i + 1)));
            } else {
                inc++;
                f_no($('#p11dcon' + (i + 1)));
                f_no($('#p11dco' + (i + 1)));
            }
        }

        var p1vec4=['20; 15','20; 25','30; 15'];
        var p1res4=[];
        for (var i = 0; i < 3; i++) {
            p1res4.push($('#p12dcon' + (i + 1)).val() + '; ' + $('#p12dco' + (i + 1)).val());
        }
        for (var i = 0; i < 3; i++) {
            var p1cont4 = 0;
            for (var j = 0; j < 3; j++) {
                if (p1res4[i] == p1vec4[j]) {
                    p1cont4++;
                    p1vec4[j] == 'nnn';
                } else {
                    p1cont4;
                }
            }
            if (p1cont4 == '1') {
                cor++;
                f_ok($('#p12dcon' + (i + 1)));
                f_ok($('#p12dco' + (i + 1)));
            } else {
                inc++;
                f_no($('#p12dcon' + (i + 1)));
                f_no($('#p12dco' + (i + 1)));
            }
        }
        Calculo_nota();
    }
}