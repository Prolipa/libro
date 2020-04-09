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
    validNumero(0, 3, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 3)
});

function f_iniciar() {
    var a86vec1 = ['<tr align="center">' +
        '<td>' +
        '<img src="img/i1_p77_act86.jpg" class="img-responsive" alt="">' +
        '</td>' +
        '<td>' +
        '<p>Lados: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon1"></p>' +
        '<p>Vértices: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon2"></p>' +
        '<p>Ángulos: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon3"></p>' +
        '</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i2_p77_act86.jpg" class="img-responsive" alt="">' +
        '</td>' +
        '<td>' +
        '<p>Lados: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon4"></p>' +
        '<p>Vértices: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon5"></p>' +
        '<p>Ángulos: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon6"></p>' +
        '</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i3_p77_act86.jpg" class="img-responsive" alt="">' +
        '</td>' +
        '<td>' +
        '<p>Lados: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon7"></p>' +
        '<p>Vértices: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon8"></p>' +
        '<p>Ángulos: <br><input type="text" style="width: 30px; border: none; border-bottom: 2px dotted black; text-align: center;" onkeypress="return soloNumeros1(event)" id="a86dcon9"></p>' +
        '</td>' +
        '</tr>'
    ];
    var myArray1 = ['0', '1', '2'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c = myArray1[i - 1];
        $("#a86im" + (i)).html(a86vec1[c]);

    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a86dcon1 = $('#a86dcon1').val();
        var a86dcon2 = $('#a86dcon2').val();
        var a86dcon3 = $('#a86dcon3').val();
        var a86dcon4 = $('#a86dcon4').val();
        var a86dcon5 = $('#a86dcon5').val();
        var a86dcon6 = $('#a86dcon6').val();
        var a86dcon7 = $('#a86dcon7').val();
        var a86dcon8 = $('#a86dcon8').val();
        var a86dcon9 = $('#a86dcon9').val();
        var a86cont1 = 0;

        if (a86dcon1 == '4') {
            a86cont1++;
            f_ok($('#a86dcon1'));
        } else {
            a86cont1;
            f_no($('#a86dcon1'));
        }
        if (a86dcon2 == '4') {
            a86cont1++;
            f_ok($('#a86dcon2'));
        } else {
            a86cont1;
            f_no($('#a86dcon2'));
        }
        if (a86dcon3 == '4') {
            a86cont1++;
            f_ok($('#a86dcon3'));
        } else {
            a86cont1;
            f_no($('#a86dcon3'));
        }
        if (a86dcon4 == '4') {
            a86cont1++;
            f_ok($('#a86dcon4'));
        } else {
            a86cont1;
            f_no($('#a86dcon4'));
        }
        if (a86dcon5 == '4') {
            a86cont1++;
            f_ok($('#a86dcon5'));
        } else {
            a86cont1;
            f_no($('#a86dcon5'));
        }
        if (a86dcon6 == '4') {
            a86cont1++;
            f_ok($('#a86dcon6'));
        } else {
            a86cont1;
            f_no($('#a86dcon6'));
        }
        if (a86dcon7 == '3') {
            a86cont1++;
            f_ok($('#a86dcon7'));
        } else {
            a86cont1;
            f_no($('#a86dcon7'));
        }
        if (a86dcon8 == '3') {
            a86cont1++;
            f_ok($('#a86dcon8'));
        } else {
            a86cont1;
            f_no($('#a86dcon8'));
        }
        if (a86dcon9 == '3') {
            a86cont1++;
            f_ok($('#a86dcon9'));
        } else {
            a86cont1;
            f_no($('#a86dcon9'));
        }
        var result1 = (a86cont1 * 3) / 9;
        cor = cor + result1;
        inc = inc + (3 - result1);

        var a86dcon10 = $('#a86dcon10').val();
        var a86dcon11 = $('#a86dcon11').val();
        var a86dcon12 = $('#a86dcon12').val();
        var a86dcon13 = $('#a86dcon13').val();
        var a86dcon14 = $('#a86dcon14').val();
        var a86cont2 = 0;
        var a86aux1 = 0;
        var a86aux2 = 0;
        var a86vec2 = ['cuadrado', 'rectángulo'];
        for (var i = 0; i < a86vec2.length; i++) {
            if (a86dcon10 == a86vec2[i]) {
                a86aux1++;
                a86vec2[i] = a86aux1;
            }
        }
        if (a86aux1 == '1') {
            a86cont2++;
            f_ok($('#a86dcon10'));
        } else {
            a86cont2;
            f_no($('#a86dcon10'));
        }
        for (var i = 0; i < a86vec2.length; i++) {
            if (a86dcon11 == a86vec2[i]) {
                a86aux2++;
                a86vec2[i] = a86aux2;
            }
        }
        if (a86aux2 == '1') {
            a86cont2++;
            f_ok($('#a86dcon11'));
        } else {
            a86cont2;
            f_no($('#a86dcon11'));
        }
        if (a86dcon12 == 'triángulo' || a86dcon12 == 'el triángulo') {
            a86cont2++;
            f_ok($('#a86dcon12'));
        } else {
            a86cont2;
            f_no($('#a86dcon12'));
        }
        if (a86dcon13 == '4') {
            a86cont2++;
            f_ok($('#a86dcon13'));
        } else {
            a86cont2;
            f_no($('#a86dcon13'));
        }
        if (a86dcon14 == '3') {
            a86cont2++;
            f_ok($('#a86dcon14'));
        } else {
            a86cont2;
            f_no($('#a86dcon14'));
        }
        var result2 = (a86cont2 * 4) / 5;
        cor = cor + result2;
        inc = inc + (4 - result2);
        var nota1_1 = $('#nota1_1').val();

        if (!nota1_1) {
            inc = inc + 3;
            f_no($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (3 - parseFloat(nota1_1));
            f_ok($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        }
        Calculo_nota();
    }
}