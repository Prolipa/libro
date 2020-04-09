var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 21,
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
        var p1vec1 = ['niño, leche', 'niño, pan', 'gato, leche', 'gato, pan', 'perro, leche', 'perro, pan'];
        var p1vec2 = [];
        for (var i = 0; i < 6; i++) {
            p1vec2.push($('#p1dcon' + (i + 1)).val() + ', ' + $('#p1dco' + (i + 1)).val());
        }
        var p1cont1 = 0;
        for (var j = 0; j < 6; j++) {
            if (p1vec2[0] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j]='niño';
            } else {
                p1cont1;
            }
        }

        if (p1cont1=='1') {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dco1'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dco1'));
        }
        var p1cont2 =0;
        for (var j = 0; j < 6; j++) {
            if (p1vec2[1] == p1vec1[j]) {
                p1cont2++;
                p1vec1[j]='niño';
            } else {
                p1cont2;
            }
        }

        if (p1cont2=='1') {
            cor++;
            f_ok($('#p1dcon2'));
            f_ok($('#p1dco2'));
        }else{
            inc++;
            f_no($('#p1dcon2'));
            f_no($('#p1dco2'));
        }
        var p1cont3 =0;
        for (var j = 0; j < 6; j++) {
            if (p1vec2[2] == p1vec1[j]) {
                p1cont3++;
                p1vec1[j]='niño';
            } else {
                p1cont3;
            }
        }

        if (p1cont3=='1') {
            cor++;
            f_ok($('#p1dcon3'));
            f_ok($('#p1dco3'));
        }else{
            inc++;
            f_no($('#p1dcon3'));
            f_no($('#p1dco3'));
        }
        var p1cont4 =0;
        for (var j = 0; j < 6; j++) {
            if (p1vec2[3] == p1vec1[j]) {
                p1cont4++;
                p1vec1[j]='niño';
            } else {
                p1cont4;
            }
        }

        if (p1cont4=='1') {
            cor++;
            f_ok($('#p1dcon4'));
            f_ok($('#p1dco4'));
        }else{
            inc++;
            f_no($('#p1dcon4'));
            f_no($('#p1dco4'));
        }
        var p1cont5 =0;
        for (var j = 0; j < 6; j++) {
            if (p1vec2[4] == p1vec1[j]) {
                p1cont5++;
                p1vec1[j]='niño';
            } else {
                p1cont5;
            }
        }

        if (p1cont5=='1') {
            cor++;
            f_ok($('#p1dcon5'));
            f_ok($('#p1dco5'));
        }else{
            inc++;
            f_no($('#p1dcon5'));
            f_no($('#p1dco5'));
        }
        var p1cont6 =0;
        for (var j = 0; j < 6; j++) {
            if (p1vec2[5] == p1vec1[j]) {
                p1cont6++;
                p1vec1[j]='niño';
            } else {
                p1cont6;
            }
        }

        if (p1cont6=='1') {
            cor++;
            f_ok($('#p1dcon6'));
            f_ok($('#p1dco6'));
        }else{
            inc++;
            f_no($('#p1dcon6'));
            f_no($('#p1dco6'));
        }

        var p1vec3 = ['10, 15', '10, 20', '10, 25', '15, 15', '15, 20', '15, 25','20, 15','20, 20','20, 25'];
        var p1vec4 = [];
        for (var i = 0; i < 9; i++) {
            p1vec4.push($('#p11dcon' + (i + 1)).val() + ', ' + $('#p11dco' + (i + 1)).val());
        }
        var p1cont7 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[0] == p1vec3[j]) {
                p1cont7++;
                p1vec3[j]='niño';
            } else {
                p1cont7;
            }
        }

        if (p1cont7=='1') {
            cor++;
            f_ok($('#p11dcon1'));
            f_ok($('#p11dco1'));
        }else{
            inc++;
            f_no($('#p11dcon1'));
            f_no($('#p11dco1'));
        }
        var p1cont8 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[1] == p1vec3[j]) {
                p1cont8++;
                p1vec3[j]='niño';
            } else {
                p1cont8;
            }
        }

        if (p1cont8=='1') {
            cor++;
            f_ok($('#p11dcon2'));
            f_ok($('#p11dco2'));
        }else{
            inc++;
            f_no($('#p11dcon2'));
            f_no($('#p11dco2'));
        }
        var p1cont9 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[2] == p1vec3[j]) {
                p1cont9++;
                p1vec3[j]='niño';
            } else {
                p1cont9;
            }
        }

        if (p1cont9=='1') {
            cor++;
            f_ok($('#p11dcon3'));
            f_ok($('#p11dco3'));
        }else{
            inc++;
            f_no($('#p11dcon3'));
            f_no($('#p11dco3'));
        }
        var p1cont10 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[3] == p1vec3[j]) {
                p1cont10++;
                p1vec3[j]='niño';
            } else {
                p1cont10;
            }
        }

        if (p1cont10=='1') {
            cor++;
            f_ok($('#p11dcon4'));
            f_ok($('#p11dco4'));
        }else{
            inc++;
            f_no($('#p11dcon4'));
            f_no($('#p11dco4'));
        }
        var p1cont11 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[4] == p1vec3[j]) {
                p1cont11++;
                p1vec3[j]='niño';
            } else {
                p1cont11;
            }
        }

        if (p1cont11=='1') {
            cor++;
            f_ok($('#p11dcon5'));
            f_ok($('#p11dco5'));
        }else{
            inc++;
            f_no($('#p11dcon5'));
            f_no($('#p11dco5'));
        }
        var p1cont12 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[5] == p1vec3[j]) {
                p1cont12++;
                p1vec3[j]='niño';
            } else {
                p1cont12;
            }
        }

        if (p1cont12=='1') {
            cor++;
            f_ok($('#p11dcon6'));
            f_ok($('#p11dco6'));
        }else{
            inc++;
            f_no($('#p11dcon6'));
            f_no($('#p11dco6'));
        }
        var p1cont13 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[6] == p1vec3[j]) {
                p1cont13++;
                p1vec3[j]='niño';
            } else {
                p1cont13;
            }
        }

        if (p1cont13=='1') {
            cor++;
            f_ok($('#p11dcon7'));
            f_ok($('#p11dco7'));
        }else{
            inc++;
            f_no($('#p11dcon7'));
            f_no($('#p11dco7'));
        }
        var p1cont14 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[7] == p1vec3[j]) {
                p1cont14++;
                p1vec3[j]='niño';
            } else {
                p1cont14;
            }
        }

        if (p1cont14=='1') {
            cor++;
            f_ok($('#p11dcon8'));
            f_ok($('#p11dco8'));
        }else{
            inc++;
            f_no($('#p11dcon8'));
            f_no($('#p11dco8'));
        }
        var p1cont15 =0;
        for (var j = 0; j < 9; j++) {
            if (p1vec4[8] == p1vec3[j]) {
                p1cont15++;
                p1vec3[j]='niño';
            } else {
                p1cont15;
            }
        }

        if (p1cont15=='1') {
            cor++;
            f_ok($('#p11dcon9'));
            f_ok($('#p11dco9'));
        }else{
            inc++;
            f_no($('#p11dcon9'));
            f_no($('#p11dco9'));
        }

        var p2vec1=['15','20','25'];
        var p2vec2=['a','b','c'];
        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2dco1=$('#p2dco1').val();
        var p2dco2=$('#p2dco2').val();
        var p2dco3=$('#p2dco3').val();
        var p2cont1 =0;
        for (var j = 0; j < 3; j++) {
            if (p2dcon1 == p2vec1[j]) {
                p2cont1++;
                p2vec1[j]='niño';
            } else {
                p2cont1;
            }
        }
        if (p2cont1=='1') {
            cor++;
            f_ok($('#p2dcon1'));
        }else{
            inc++;
            f_no($('#p2dcon1'));
        }
        var p2cont2 =0;
        for (var j = 0; j < 3; j++) {
            if (p2dcon2 == p2vec1[j]) {
                p2cont2++;
                p2vec1[j]='niño';
            } else {
                p2cont2;
            }
        }
        if (p2cont2=='1') {
            cor++;
            f_ok($('#p2dcon2'));
        }else{
            inc++;
            f_no($('#p2dcon2'));
        }
        var p2cont3 =0;
        for (var j = 0; j < 3; j++) {
            if (p2dcon3 == p2vec1[j]) {
                p2cont3++;
                p2vec1[j]='niño';
            } else {
                p2cont3;
            }
        }
        if (p2cont3=='1') {
            cor++;
            f_ok($('#p2dcon3'));
        }else{
            inc++;
            f_no($('#p2dcon3'));
        }
        var p2cont4 =0;
        for (var j = 0; j < 3; j++) {
            if (p2dco1 == p2vec2[j]) {
                p2cont4++;
                p2vec2[j]='niño';
            } else {
                p2cont4;
            }
        }
        if (p2cont4=='1') {
            cor++;
            f_ok($('#p2dco1'));
        }else{
            inc++;
            f_no($('#p2dco1'));
        }
        var p2cont5 =0;
        for (var j = 0; j < 3; j++) {
            if (p2dco2 == p2vec2[j]) {
                p2cont5++;
                p2vec2[j]='niño';
            } else {
                p2cont5;
            }
        }
        if (p2cont5=='1') {
            cor++;
            f_ok($('#p2dco2'));
        }else{
            inc++;
            f_no($('#p2dco2'));
        }
        var p2cont6 =0;
        for (var j = 0; j < 3; j++) {
            if (p2dco3 == p2vec2[j]) {
                p2cont6++;
                p2vec2[j]='niño';
            } else {
                p2cont6;
            }
        }
        if (p2cont6=='1') {
            cor++;
            f_ok($('#p2dco3'));
        }else{
            inc++;
            f_no($('#p2dco3'));
        }
        Calculo_nota();
    }
}