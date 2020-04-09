var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 6,
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
    var a108num1 = ['<td><img src="img/i1_p121_tema13a2.jpg" class="img-responsive" alt=""></td>' +
        '<td style="vertical-align: middle;"><input type="text" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p1dcon1" maxlength="2" onkeypress="return soloNumeros1(event)"></td>' +
        '<td style="vertical-align: middle;"><b>medios litros</b></td>',
        '<td><img src="img/i2_p121_tema13a2.jpg" class="img-responsive" alt=""></td>' +
        '<td style="vertical-align: middle;"><input type="text" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p1dcon2" maxlength="2" onkeypress="return soloNumeros1(event)"></td>' +
        '<td style="vertical-align: middle;"><b>medios litros</b></td>',
        '<td><img src="img/i3_p121_tema13a2.jpg" class="img-responsive" alt=""></td>' +
        '<td style="vertical-align: middle;"><input type="text" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p1dcon3" maxlength="2" onkeypress="return soloNumeros1(event)"></td>' +
        '<td style="vertical-align: middle;"><b>vasos de 250 ml</b></td>',
        '<td><img src="img/i4_p121_tema13a2.jpg" class="img-responsive" alt=""></td>' +
        '<td style="vertical-align: middle;"><input type="text" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p1dcon4" maxlength="2" onkeypress="return soloNumeros1(event)"></td>' +
        '<td style="vertical-align: middle;"><b>vasos de 250 ml</b></td>',
        '<td><img src="img/i5_p121_tema13a2.jpg" style="min-width: 80px" class="img-responsive" alt=""></td>' +
        '<td colspan="2" style="vertical-align: middle;">' +
        '<table class="table">' +
        '<tr align="center">' +
        '<td><input type="text" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p1dcon5" maxlength="2" onkeypress="return soloNumeros1(event)"></td>' +
        '<td><input type="text" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p1dcon6" maxlength="2" onkeypress="return soloNumeros1(event)"></td>' +
        '</tr>' +
        '<tr align="center">' +
        '<td><b>medios litros</b></td>' +
        '<td><b>vasos de 250 ml</b></td>' +
        '</tr>' +
        '</table>' +
        '</td>'
    ];
    var a108num2 = ['2', '4', '4', '8', '6'];
    var p5aux1 = [];
    var myArray1 = ['0', '1', '2', '3', '4'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 6; i++) {
        var c = myArray1[i - 1];
        $("#p1im" + i).html(a108num1[c]);
        p5aux1.push(a108num2[c]);

    };

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        var p1dcon3 = $('#p1dcon3').val();
        var p1dcon4 = $('#p1dcon4').val();
        var p1dcon5 = $('#p1dcon5').val();
        var p1dcon6 = $('#p1dcon6').val();
        if (p1dcon1 == '2') {
            cor++;
            f_ok($('#p1dcon1'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == '4') {
            cor++;
            f_ok($('#p1dcon2'));
        } else {
            inc++;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3 == '4') {
            cor++;
            f_ok($('#p1dcon3'));
        } else {
            inc++;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4 == '8') {
            cor++;
            f_ok($('#p1dcon4'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5 == '6') {
            cor++;
            f_ok($('#p1dcon5'));
        } else {
            inc++;
            f_no($('#p1dcon5'));
        }
        if (p1dcon6 == '12') {
            cor++;
            f_ok($('#p1dcon6'));
        } else {
            inc++;
            f_no($('#p1dcon6'));
        }
        Calculo_nota();
    }
}