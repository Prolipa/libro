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
    var p1vec1 = ['487', '643', '358', '576', '732'];
    var p1vec2 = ['398', '348', '289', '488', '457'];
    var p1vec3 = [89, 295, 69, 88, 275];
    var p1vec4 = [];
    var p1vec5 = ['andrés', 'pedro', 'juan', 'tomás', 'mateo'];
    var p1aux1 = [];
    var p1aux2 = [];
    var p1aux3 = [];
    var p1aux4 = [];

    var p1aux6 = [295, 275, 89, 88, 69];
    var myArray1 = ['0', '1', '2', '3', '4'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c = myArray1[i - 1];
        p1aux1.push(p1vec1[c]);
        p1aux2.push(p1vec2[c]);
        p1aux3.push(p1vec3[c]);
        p1vec4.push(p1vec3[c]);

    };

    for (var i = 0; i < p1aux6.length; i++) {
        for (var j = 0; j < p1vec4.length; j++) {
            if (p1aux6[i] == p1vec4[j]) {
                p1aux4.push(p1vec5[j]);
            }
        }
    }

    var p1a1 = p1aux1[0].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon' + (i + 1)).val(p1a1[i]);
        $('#p1dcon' + (i + 1)).attr('disabled', 'true');
    };
    var p1a2 = p1aux2[0].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon' + (i + 4)).val(p1a2[i]);
        $('#p1dcon' + (i + 4)).attr('disabled', 'true');
    };
    var p1a3 = p1aux1[1].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon1' + (i + 1)).val(p1a3[i]);
        $('#p1dcon1' + (i + 1)).attr('disabled', 'true');
    };
    var p1a4 = p1aux2[1].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon1' + (i + 4)).val(p1a4[i]);
        $('#p1dcon1' + (i + 4)).attr('disabled', 'true');
    };
    var p1a5 = p1aux1[2].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon2' + (i + 1)).val(p1a5[i]);
        $('#p1dcon2' + (i + 1)).attr('disabled', 'true');
    };
    var p1a6 = p1aux2[2].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon2' + (i + 4)).val(p1a6[i]);
        $('#p1dcon2' + (i + 4)).attr('disabled', 'true');
    };
    var p1a7 = p1aux1[3].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon3' + (i + 1)).val(p1a7[i]);
        $('#p1dcon3' + (i + 1)).attr('disabled', 'true');
    };
    var p1a8 = p1aux2[3].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon3' + (i + 4)).val(p1a8[i]);
        $('#p1dcon3' + (i + 4)).attr('disabled', 'true');
    };
    var p1a9 = p1aux1[4].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon4' + (i + 1)).val(p1a9[i]);
        $('#p1dcon4' + (i + 1)).attr('disabled', 'true');
    };
    var p1a10 = p1aux2[4].split('');
    for (var i = 0; i < 3; i++) {
        $('#p1dcon4' + (i + 4)).val(p1a10[i]);
        $('#p1dcon4' + (i + 4)).attr('disabled', 'true');
    };

    var p2vec1 = [];
    for (var i = 0; i < 8; i++) {
        var p2nm1 = parseInt((Math.random() * 500) + 100);
        var p2nm2 = parseInt((Math.random() * 500) + 100);
        if (p2nm1 > p2nm2) {
            p2vec1.push(p2nm1);
            p2vec1.push(p2nm2);
        } else if (p2nm1 < p2nm2) {
            p2vec1.push(p2nm2);
            p2vec1.push(p2nm1);
        } else if (p2nm1 == p2nm2) {
            p2vec1.push((p2nm1 + 100));
            p2vec1.push(p2nm2);
        }
    }
    var p2aux1 = p2vec1[0].toString().split('');
    var p2aux2 = p2vec1[1].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p2dcon' + (i + 1)).val(p2aux1[i]);
        $('#p2dcon' + (i + 1)).attr('disabled', 'true');
        $('#p2dcon' + (i + 4)).val(p2aux2[i]);
        $('#p2dcon' + (i + 4)).attr('disabled', 'true');
    }

    var p2aux3 = p2vec1[2].toString().split('');
    var p2aux4 = p2vec1[3].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p2dcon1' + (i + 1)).val(p2aux3[i]);
        $('#p2dcon1' + (i + 1)).attr('disabled', 'true');
        $('#p2dcon1' + (i + 4)).val(p2aux4[i]);
        $('#p2dcon1' + (i + 4)).attr('disabled', 'true');
    }
    var p2aux5 = p2vec1[4].toString().split('');
    var p2aux6 = p2vec1[5].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p2dcon2' + (i + 1)).val(p2aux5[i]);
        $('#p2dcon2' + (i + 1)).attr('disabled', 'true');
        $('#p2dcon2' + (i + 4)).val(p2aux6[i]);
        $('#p2dcon2' + (i + 4)).attr('disabled', 'true');
    }
    var p2aux7 = p2vec1[6].toString().split('');
    var p2aux8 = p2vec1[7].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p2dcon3' + (i + 1)).val(p2aux7[i]);
        $('#p2dcon3' + (i + 1)).attr('disabled', 'true');
        $('#p2dcon3' + (i + 4)).val(p2aux8[i]);
        $('#p2dcon3' + (i + 4)).attr('disabled', 'true');
    }
    var p2aux9 = p2vec1[8].toString().split('');
    var p2aux10 = p2vec1[9].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p2dcon4' + (i + 1)).val(p2aux9[i]);
        $('#p2dcon4' + (i + 1)).attr('disabled', 'true');
        $('#p2dcon4' + (i + 4)).val(p2aux10[i]);
        $('#p2dcon4' + (i + 4)).attr('disabled', 'true');
    }
    var p2aux11 = p2vec1[10].toString().split('');
    var p2aux12 = p2vec1[11].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p2dcon5' + (i + 1)).val(p2aux11[i]);
        $('#p2dcon5' + (i + 1)).attr('disabled', 'true');
        $('#p2dcon5' + (i + 4)).val(p2aux12[i]);
        $('#p2dcon5' + (i + 4)).attr('disabled', 'true');
    }
    var p2aux13 = p2vec1[12].toString().split('');
    var p2aux14 = p2vec1[13].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p2dcon6' + (i + 1)).val(p2aux13[i]);
        $('#p2dcon6' + (i + 1)).attr('disabled', 'true');
        $('#p2dcon6' + (i + 4)).val(p2aux14[i]);
        $('#p2dcon6' + (i + 4)).attr('disabled', 'true');
    }
    var p2aux15 = p2vec1[14].toString().split('');
    var p2aux16 = p2vec1[15].toString().split('');
    for (var i = 0; i < 3; i++) {
        $('#p2dcon7' + (i + 1)).val(p2aux15[i]);
        $('#p2dcon7' + (i + 1)).attr('disabled', 'true');
        $('#p2dcon7' + (i + 4)).val(p2aux16[i]);
        $('#p2dcon7' + (i + 4)).attr('disabled', 'true');
    }

    var p3vec1 = ['642', '587', '453', '371'];
    var p3vec2 = ['537', '498', '269', '289'];
    var p3vec3 = [105, 89, 184, 82];
    var p3aux1 = [];
    var p3aux2 = [];
    var p3aux3 = [];
    var myArray2 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c1 = myArray2[i - 1];
        p3aux1.push(p3vec1[c1]);
        p3aux2.push(p3vec2[c1]);
        p3aux3.push(p3vec3[c1]);
    };
    var p3a1 = p3aux1[0].split('');
    for (var i = 0; i < 3; i++) {
        $('#p3dcon' + (i + 1)).val(p3a1[i]);
        $('#p3dcon' + (i + 1)).attr('disabled', 'true');
    };
    var p3a2 = p3aux2[0].split('');
    for (var i = 0; i < 3; i++) {
        $('#p3dcon' + (i + 4)).val(p3a2[i]);
        $('#p3dcon' + (i + 4)).attr('disabled', 'true');
    };
    var p3a3 = p3aux1[1].split('');
    for (var i = 0; i < 3; i++) {
        $('#p3dcon1' + (i + 1)).val(p3a3[i]);
        $('#p3dcon1' + (i + 1)).attr('disabled', 'true');
    };
    var p3a4 = p3aux2[1].split('');
    for (var i = 0; i < 3; i++) {
        $('#p3dcon1' + (i + 4)).val(p3a4[i]);
        $('#p3dcon1' + (i + 4)).attr('disabled', 'true');
    };
    var p3a5 = p3aux1[2].split('');
    for (var i = 0; i < 3; i++) {
        $('#p3dcon2' + (i + 1)).val(p3a5[i]);
        $('#p3dcon2' + (i + 1)).attr('disabled', 'true');
    };
    var p3a6 = p3aux2[2].split('');
    for (var i = 0; i < 3; i++) {
        $('#p3dcon2' + (i + 4)).val(p3a6[i]);
        $('#p3dcon2' + (i + 4)).attr('disabled', 'true');
    };
    var p3a7 = p3aux1[3].split('');
    for (var i = 0; i < 3; i++) {
        $('#p3dcon3' + (i + 1)).val(p3a7[i]);
        $('#p3dcon3' + (i + 1)).attr('disabled', 'true');
    };
    var p3a8 = p3aux2[3].split('');
    for (var i = 0; i < 3; i++) {
        $('#p3dcon3' + (i + 4)).val(p3a8[i]);
        $('#p3dcon3' + (i + 4)).attr('disabled', 'true');
    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = [$('#p1dcon7').val(), $('#p1dcon8').val(), $('#p1dcon9').val()];
        var p1dcon2 = [$('#p1dcon17').val(), $('#p1dcon18').val(), $('#p1dcon19').val()];
        var p1dcon3 = [$('#p1dcon27').val(), $('#p1dcon28').val(), $('#p1dcon29').val()];
        var p1dcon4 = [$('#p1dcon37').val(), $('#p1dcon38').val(), $('#p1dcon39').val()];
        var p1dcon5 = [$('#p1dcon47').val(), $('#p1dcon48').val(), $('#p1dcon49').val()];
        var p1cont1 = 0;
        if (p1dcon1.join('') == p1aux3[0]) {
            p1cont1++;
            f_ok($('#p1dcon7'));
            f_ok($('#p1dcon8'));
            f_ok($('#p1dcon9'));
        } else {
            p1cont1;
            f_no($('#p1dcon7'));
            f_no($('#p1dcon8'));
            f_no($('#p1dcon9'));
        }
        if (p1dcon2.join('') == p1aux3[1]) {
            p1cont1++;
            f_ok($('#p1dcon17'));
            f_ok($('#p1dcon18'));
            f_ok($('#p1dcon19'));
        } else {
            p1cont1;
            f_no($('#p1dcon17'));
            f_no($('#p1dcon18'));
            f_no($('#p1dcon19'));
        }
        if (p1dcon3.join('') == p1aux3[2]) {
            p1cont1++;
            f_ok($('#p1dcon27'));
            f_ok($('#p1dcon28'));
            f_ok($('#p1dcon29'));
        } else {
            p1cont1;
            f_no($('#p1dcon27'));
            f_no($('#p1dcon28'));
            f_no($('#p1dcon29'));
        }
        if (p1dcon4.join('') == p1aux3[3]) {
            p1cont1++;
            f_ok($('#p1dcon37'));
            f_ok($('#p1dcon38'));
            f_ok($('#p1dcon39'));
        } else {
            p1cont1;
            f_no($('#p1dcon37'));
            f_no($('#p1dcon38'));
            f_no($('#p1dcon39'));
        }
        if (p1dcon5.join('') == p1aux3[4]) {
            p1cont1++;
            f_ok($('#p1dcon47'));
            f_ok($('#p1dcon48'));
            f_ok($('#p1dcon49'));
        } else {
            p1cont1;
            f_no($('#p1dcon47'));
            f_no($('#p1dcon48'));
            f_no($('#p1dcon49'));
        }
        var p1dc1 = $('#p1dc1').val().toLowerCase();
        var p1dc2 = $('#p1dc2').val().toLowerCase();
        var p1dc3 = $('#p1dc3').val().toLowerCase();
        var p1dc4 = $('#p1dc4').val().toLowerCase();
        var p1dc5 = $('#p1dc5').val().toLowerCase();
        if (p1dc1 == p1aux4[0]) {
            p1cont1++;
            f_ok($('#p1dc1'));
        } else {
            p1cont1;
            f_no($('#p1dc1'));
        }
        if (p1dc2 == p1aux4[1]) {
            p1cont1++;
            f_ok($('#p1dc2'));
        } else {
            p1cont1;
            f_no($('#p1dc2'));
        }
        if (p1dc3 == p1aux4[2]) {
            p1cont1++;
            f_ok($('#p1dc3'));
        } else {
            p1cont1;
            f_no($('#p1dc3'));
        }
        if (p1dc4 == p1aux4[3]) {
            p1cont1++;
            f_ok($('#p1dc4'));
        } else {
            p1cont1;
            f_no($('#p1dc4'));
        }
        if (p1dc5 == p1aux4[4]) {
            p1cont1++;
            f_ok($('#p1dc5'));
        } else {
            p1cont1;
            f_no($('#p1dc5'));
        }
        var result1 = (p1cont1 * 4) / 10;
        cor = cor + result1;
        inc = inc + (4 - result1);

        var p2dcon1 = [$('#p2dcon7').val(), $('#p2dcon8').val(), $('#p2dcon9').val()];
        var p2dcon2 = [$('#p2dcon17').val(), $('#p2dcon18').val(), $('#p2dcon19').val()];
        var p2dcon3 = [$('#p2dcon27').val(), $('#p2dcon28').val(), $('#p2dcon29').val()];
        var p2dcon4 = [$('#p2dcon37').val(), $('#p2dcon38').val(), $('#p2dcon39').val()];
        var p2dcon5 = [$('#p2dcon47').val(), $('#p2dcon48').val(), $('#p2dcon49').val()];
        var p2dcon6 = [$('#p2dcon57').val(), $('#p2dcon58').val(), $('#p2dcon59').val()];
        var p2dcon7 = [$('#p2dcon67').val(), $('#p2dcon68').val(), $('#p2dcon69').val()];
        var p2dcon8 = [$('#p2dcon77').val(), $('#p2dcon78').val(), $('#p2dcon79').val()];
        var p2cont1 = 0;
        if (p2dcon1.join('') == (p2vec1[0] - p2vec1[1])) {
            p2cont1++;
            f_ok($('#p2dcon7'));
            f_ok($('#p2dcon8'));
            f_ok($('#p2dcon9'));
        } else {
            p2cont1;
            f_no($('#p2dcon7'));
            f_no($('#p2dcon8'));
            f_no($('#p2dcon9'));
        }
        if (p2dcon2.join('') == (p2vec1[2] - p2vec1[3])) {
            p2cont1++;
            f_ok($('#p2dcon17'));
            f_ok($('#p2dcon18'));
            f_ok($('#p2dcon19'));
        } else {
            p2cont1;
            f_no($('#p2dcon17'));
            f_no($('#p2dcon18'));
            f_no($('#p2dcon19'));
        }
        if (p2dcon3.join('') == (p2vec1[4] - p2vec1[5])) {
            p2cont1++;
            f_ok($('#p2dcon27'));
            f_ok($('#p2dcon28'));
            f_ok($('#p2dcon29'));
        } else {
            p2cont1;
            f_no($('#p2dcon27'));
            f_no($('#p2dcon28'));
            f_no($('#p2dcon29'));
        }
        if (p2dcon4.join('') == (p2vec1[6] - p2vec1[7])) {
            p2cont1++;
            f_ok($('#p2dcon37'));
            f_ok($('#p2dcon38'));
            f_ok($('#p2dcon39'));
        } else {
            p2cont1;
            f_no($('#p2dcon37'));
            f_no($('#p2dcon38'));
            f_no($('#p2dcon39'));
        }
        if (p2dcon5.join('') == (p2vec1[8] - p2vec1[9])) {
            p2cont1++;
            f_ok($('#p2dcon47'));
            f_ok($('#p2dcon48'));
            f_ok($('#p2dcon49'));
        } else {
            p2cont1;
            f_no($('#p2dcon47'));
            f_no($('#p2dcon48'));
            f_no($('#p2dcon49'));
        }
        if (p2dcon6.join('') == (p2vec1[10] - p2vec1[11])) {
            p2cont1++;
            f_ok($('#p2dcon57'));
            f_ok($('#p2dcon58'));
            f_ok($('#p2dcon59'));
        } else {
            p2cont1;
            f_no($('#p2dcon57'));
            f_no($('#p2dcon58'));
            f_no($('#p2dcon59'));
        }
        if (p2dcon7.join('') == (p2vec1[12] - p2vec1[13])) {
            p2cont1++;
            f_ok($('#p2dcon67'));
            f_ok($('#p2dcon68'));
            f_ok($('#p2dcon69'));
        } else {
            p2cont1;
            f_no($('#p2dcon67'));
            f_no($('#p2dcon68'));
            f_no($('#p2dcon69'));
        }
        if (p2dcon8.join('') == (p2vec1[14] - p2vec1[15])) {
            p2cont1++;
            f_ok($('#p2dcon77'));
            f_ok($('#p2dcon78'));
            f_ok($('#p2dcon79'));
        } else {
            p2cont1;
            f_no($('#p2dcon77'));
            f_no($('#p2dcon78'));
            f_no($('#p2dcon79'));
        }
        var result2 = (p2cont1 * 3) / 8;
        cor = cor + result2;
        inc = inc + (3 - result2);

        var p3dc1 = $('#p3dc1').val();
        var p3dc2 = $('#p3dc2').val();
        var p3dc3 = $('#p3dc3').val();
        var p3dc4 = $('#p3dc4').val();
        var p3cont1 = 0;
        if (p3dc1 == '4') {
            p3cont1++;
            f_ok($('#p3dc1'));
        } else {
            p3cont1;
            f_no($('#p3dc1'));
        }
        if (p3dc2 == '3') {
            p3cont1++;
            f_ok($('#p3dc2'));
        } else {
            p3cont1;
            f_no($('#p3dc2'));
        }
        var p3r1 = ['2', '1'];
        var p3cont2 = 0;
        for (var i = 0; i < p3r1.length; i++) {
            if (p3dc3 == p3r1[i]) {
                p3cont2++;
                p3r1[i] = '0';
            }
        }
        if (p3cont2 == '1') {
            p3cont1++;
            f_ok($('#p3dc3'));
        } else {
            p3cont1;
            f_no($('#p3dc3'));
        }
        var p3cont3 = 0;
        for (var i = 0; i < p3r1.length; i++) {
            if (p3dc4 == p3r1[i]) {
                p3cont3++;
                p3r1[i] = '0';
            }
        }
        if (p3cont3 == '1') {
            p3cont1++;
            f_ok($('#p3dc4'));
        } else {
            p3cont1;
            f_no($('#p3dc4'));
        }
        var p3dcon1 = [$('#p3dcon7').val(), $('#p3dcon8').val(), $('#p3dcon9').val()];
        var p3dcon2 = [$('#p3dcon17').val(), $('#p3dcon18').val(), $('#p3dcon19').val()];
        var p3dcon3 = [$('#p3dcon27').val(), $('#p3dcon28').val(), $('#p3dcon29').val()];
        var p3dcon4 = [$('#p3dcon37').val(), $('#p3dcon38').val(), $('#p3dcon39').val()];
        if (p3dcon1.join('') == p3aux3[0]) {
            p3cont1++;
            f_ok($('#p3dcon7'));
            f_ok($('#p3dcon8'));
            f_ok($('#p3dcon9'));
        } else {
            p3cont1;
            f_no($('#p3dcon7'));
            f_no($('#p3dcon8'));
            f_no($('#p3dcon9'));
        }
        if (p3dcon2.join('') == p3aux3[1]) {
            p3cont1++;
            f_ok($('#p3dcon17'));
            f_ok($('#p3dcon18'));
            f_ok($('#p3dcon19'));
        } else {
            p3cont1;
            f_no($('#p3dcon17'));
            f_no($('#p3dcon18'));
            f_no($('#p3dcon19'));
        }
        if (p3dcon3.join('') == p3aux3[2]) {
            p3cont1++;
            f_ok($('#p3dcon27'));
            f_ok($('#p3dcon28'));
            f_ok($('#p3dcon29'));
        } else {
            p3cont1;
            f_no($('#p3dcon27'));
            f_no($('#p3dcon28'));
            f_no($('#p3dcon29'));
        }
        if (p3dcon4.join('') == p3aux3[3]) {
            p3cont1++;
            f_ok($('#p3dcon37'));
            f_ok($('#p3dcon38'));
            f_ok($('#p3dcon39'));
        } else {
            p3cont1;
            f_no($('#p3dcon37'));
            f_no($('#p3dcon38'));
            f_no($('#p3dcon39'));
        }
        var result3 = (p3cont1 * 3) / 8;
        cor = cor + result3;
        inc = inc + (3 - result3);
        Calculo_nota();
    }
}