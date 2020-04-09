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
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 4)
});

function f_iniciar() {
    var p2vec1 = ['img/i1_p82_act94.jpg',
        'img/i2_p82_act94.jpg',
        'img/i3_p82_act94.jpg'
    ];
    var p2vec2 = ['img/i5_p82_act94.jpg',
        'img/i6_p82_act94.jpg',
        'img/i7_p82_act94.jpg'
    ];
    var myArray1 = ['0', '1', '2'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    var c = myArray1[0];
    var c1 = myArray1[1];
    $("#p2im2").attr('src', p2vec2[c1]);
    $("#p2im1").attr('src', p2vec1[c]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p2dcon1 = $('#p2dcon1').val();
        var p2dcon2 = $('#p2dcon2').val();
        var p2dcon3 = $('#p2dcon3').val();
        var p2dcon4 = $('#p2dcon4').val();
        var p2dcon5 = $('#p2dcon5').val();
        var p2dcon6 = $('#p2dcon6').val();
        var p2vec3 = [];
        var p2cont1 = 0;
        if (c == 0) {
            p2vec3 = ['2', '2', '2', '2', '8', '8'];
        } else if (c == 1) {
            p2vec3 = ['3', '3', '3', '3', '12', '12'];
        } else if (c == 2) {
            p2vec3 = ['4', '4', '4', '4', '16', '16'];
        }
        if (p2dcon1 == p2vec3[0]) {
            p2cont1++;
            f_ok($('#p2dcon1'));
        } else {
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2 == p2vec3[1]) {
            p2cont1++;
            f_ok($('#p2dcon2'));
        } else {
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3 == p2vec3[2]) {
            p2cont1++;
            f_ok($('#p2dcon3'));
        } else {
            p2cont1;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4 == p2vec3[3]) {
            p2cont1++;
            f_ok($('#p2dcon4'));
        } else {
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5 == p2vec3[4]) {
            p2cont1++;
            f_ok($('#p2dcon5'));
        } else {
            p2cont1;
            f_no($('#p2dcon5'));
        }
        if (p2dcon6 == p2vec3[5]) {
            p2cont1++;
            f_ok($('#p2dcon6'));
        } else {
            p2cont1;
            f_no($('#p2dcon6'));
        }


        var p2dcon7 = $('#p2dcon7').val();
        var p2dcon8 = $('#p2dcon8').val();
        var p2dcon9 = $('#p2dcon9').val();
        var p2dcon10 = $('#p2dcon10').val();
        var p2dcon11 = $('#p2dcon11').val();
        var p2dcon12 = $('#p2dcon12').val();
        var p2vec4 = [];
        var p2aux1 = 0;
        if (c1 == 0) {
            p2vec4 = ['2', '6', '2', '6', '16', '16'];
        } else if (c1 == 1) {
            p2vec4 = ['3', '7', '3', '7', '20', '20'];
        } else if (c1 == 2) {
            p2vec4 = ['4', '8', '4', '8', '24', '24'];
        }
        for (var i = 0; i < 4; i++) {
            if (p2dcon7 == p2vec4[i] && (parseInt(p2dcon9) + parseInt(p2dcon10) + parseInt(p2dcon8) + parseInt(p2dcon7)) == p2vec4[4]) {
                p2aux1++;

            }
        }
        if (p2aux1 == '2') {
            p2cont1++;
            f_ok($('#p2dcon7'));
        } else {
            p2cont1;
            f_no($('#p2dcon7'));
        }
        var p2aux2 = 0;
        for (var i = 0; i < 4; i++) {
            if (p2dcon8 == p2vec4[i] && (parseInt(p2dcon9) + parseInt(p2dcon10) + parseInt(p2dcon8) + parseInt(p2dcon7)) == p2vec4[4]) {
                p2aux2++;

            }
        }
        if (p2aux2 == '2') {
            p2cont1++;
            f_ok($('#p2dcon8'));
        } else {
            p2cont1;
            f_no($('#p2dcon8'));
        }
        var p2aux3 = 0;
        for (var i = 0; i < 4; i++) {
            if (p2dcon9 == p2vec4[i] && (parseInt(p2dcon9) + parseInt(p2dcon10) + parseInt(p2dcon8) + parseInt(p2dcon7)) == p2vec4[4]) {
                p2aux3++;

            }
        }
        if (p2aux3 == '2') {
            p2cont1++;
            f_ok($('#p2dcon9'));
        } else {
            p2cont1;
            f_no($('#p2dcon9'));
        }
        var p2aux4 = 0;
        for (var i = 0; i < 4; i++) {
            if (p2dcon10 == p2vec4[i] && (parseInt(p2dcon9) + parseInt(p2dcon10) + parseInt(p2dcon8) + parseInt(p2dcon7)) == p2vec4[4]) {
                p2aux4++;

            }
        }
        if (p2aux4 == '2') {
            p2cont1++;
            f_ok($('#p2dcon10'));
        } else {
            p2cont1;
            f_no($('#p2dcon10'));
        }
        if (p2dcon11 == p2vec4[4]) {
            p2cont1++;
            f_ok($('#p2dcon11'));
        } else {
            p2cont1;
            f_no($('#p2dcon11'));
        }
        if (p2dcon12 == p2vec4[5]) {
            p2cont1++;
            f_ok($('#p2dcon12'));
        } else {
            p2cont1;
            f_no($('#p2dcon12'));
        }

        var result2 = (p2cont1 * 3) / 12;
        cor = cor + result2;
        inc = inc + (3 - result2);

        var p3dcon1 = $('#p3dcon1').val();
        var p3dcon2 = $('#p3dcon2').val();
        var p3dcon3 = $('#p3dcon3').val();
        var p3dcon4 = $('#p3dcon4').val();
        var p3dcon5 = $('#p3dcon5').val();
        var p3cont1 = 0;
        if (p3dcon1 == 'llll') {
            p3cont1++;
            f_ok($('#p3dcon1'));
        } else {
            p3cont1;
            f_no($('#p3dcon1'));
        }
        if (p3dcon2 == 'llllllll') {
            p3cont1++;
            f_ok($('#p3dcon2'));
        } else {
            p3cont1;
            f_no($('#p3dcon2'));
        }
        if (p3dcon3 == 'll') {
            p3cont1++;
            f_ok($('#p3dcon3'));
        } else {
            p3cont1;
            f_no($('#p3dcon3'));
        }
        if (p3dcon4 == 'llllllllll') {
            p3cont1++;
            f_ok($('#p3dcon4'));
        } else {
            p3cont1;
            f_no($('#p3dcon4'));
        }
        if (p3dcon5 == 'lllllllllllllll') {
            p3cont1++;
            f_ok($('#p3dcon5'));
        } else {
            p3cont1;
            f_no($('#p3dcon5'));
        }
        var p3dcon6 = $('#p3dcon6').val();
        var p3dcon7 = $('#p3dcon7').val();
        var p3dcon8 = $('#p3dcon8').val();
        var p3dcon9 = $('#p3dcon9').val();
        var p3dcon10 = $('#p3dcon10').val();
        if (p3dcon6 == '5') {
            p3cont1++;
            f_ok($('#p3dcon6'));
        } else {
            p3cont1;
            f_no($('#p3dcon6'));
        }
        if (p3dcon7 == 'chicle') {
            p3cont1++;
            f_ok($('#p3dcon7'));
        } else {
            p3cont1;
            f_no($('#p3dcon7'));
        }
        if (p3dcon8 == 'mora') {
            p3cont1++;
            f_ok($('#p3dcon8'));
        } else {
            p3cont1;
            f_no($('#p3dcon8'));
        }
        if (p3dcon9 == '14') {
            p3cont1++;
            f_ok($('#p3dcon9'));
        } else {
            p3cont1;
            f_no($('#p3dcon9'));
        }
        if (p3dcon10 == '39') {
            p3cont1++;
            f_ok($('#p3dcon10'));
        } else {
            p3cont1;
            f_no($('#p3dcon10'));
        }
        var result3 = (p3cont1 * 3) / 10;
        cor = cor + result3;
        inc = inc + (3 - result3);

        var nota1_1 = $('#nota1_1').val();

        if (!nota1_1) {
            inc = inc + 4;
            f_no($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (4 - parseFloat(nota1_1));
            f_ok($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        }
        Calculo_nota();
    }
}