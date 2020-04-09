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
    var p1vec1 = ['<td>' +
        '<img src="img/i2_p137_act115.jpg" class="img-responsive" style="min-width: 40px;">    ' +
        '</td>' +
        '<td style="vertical-align: middle;">' +
        '<b>(<input id="p1dcon1" type="text" style="width: 40px; text-align: center; border: none; border-bottom: 2px dotted black; display: inline-block;" maxlength="1" onkeyup="mayus(this)" name="">,</b>' +
        '</td>' +
        '<td style="vertical-align: middle;">' +
        '<b><input id="p1dcon11" type="text" style="width: 40px; text-align: center; border: none; border-bottom: 2px dotted black; display: inline-block;" maxlength="1" onkeypress="return soloNumeros1(event)" name="">)</b>' +
        '</td>',
        '<td>' +
        '<img src="img/i3_p137_act115.jpg" class="img-responsive" style="min-width: 40px;">    ' +
        '</td>' +
        '<td style="vertical-align: middle;">' +
        '<b>(<input id="p1dcon2" type="text" style="width: 40px; text-align: center; border: none; border-bottom: 2px dotted black; display: inline-block;" maxlength="1" onkeyup="mayus(this)" name="">,</b>' +
        '</td>' +
        '<td style="vertical-align: middle;">' +
        '<b><input id="p1dcon12" type="text" style="width: 40px; text-align: center; border: none; border-bottom: 2px dotted black; display: inline-block;" maxlength="1" onkeypress="return soloNumeros1(event)" name="">)</b>' +
        '</td>',
        '<td>' +
        '<img src="img/i4_p137_act115.jpg" class="img-responsive" style="min-width: 40px;">    ' +
        '</td>' +
        '<td style="vertical-align: middle;">' +
        '<b>(<input id="p1dcon3" type="text" style="width: 40px; text-align: center; border: none; border-bottom: 2px dotted black; display: inline-block;" maxlength="1" onkeyup="mayus(this)" name="">,</b>' +
        '</td>' +
        '<td style="vertical-align: middle;">' +
        '<b><input id="p1dcon13" type="text" style="width: 40px; text-align: center; border: none; border-bottom: 2px dotted black; display: inline-block;" maxlength="1" onkeypress="return soloNumeros1(event)" name="">)</b>' +
        '</td>',
        '<td>' +
        '<img src="img/i5_p137_act115.jpg" class="img-responsive" style="min-width: 40px;">    ' +
        '</td>' +
        '<td style="vertical-align: middle;">' +
        '<b>(<input id="p1dcon4" type="text" style="width: 40px; text-align: center; border: none; border-bottom: 2px dotted black; display: inline-block;" maxlength="1" onkeyup="mayus(this)" name="">,</b>' +
        '</td>' +
        '<td style="vertical-align: middle;">' +
        '<b><input id="p1dcon14" type="text" style="width: 40px; text-align: center; border: none; border-bottom: 2px dotted black; display: inline-block;" maxlength="1" onkeypress="return soloNumeros1(event)" name="">)</b>' +
        '</td>'
    ];
    var myArray1 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c = myArray1[i - 1];
        $("#p1im" + i).html(p1vec1[c]);


    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = [$('#p1dcon1').val(), $('#p1dcon11').val()];
        p1dcon1 = p1dcon1.join(',');
        var p1dcon2 = [$('#p1dcon2').val(), $('#p1dcon12').val()];
        p1dcon2 = p1dcon2.join(',');
        var p1dcon3 = [$('#p1dcon3').val(), $('#p1dcon13').val()];
        p1dcon3 = p1dcon3.join(',');
        var p1dcon4 = [$('#p1dcon4').val(), $('#p1dcon14').val()];
        p1dcon4 = p1dcon4.join(',');
        if (p1dcon1 == 'c,4') {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon11'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon11'));
        }
        if (p1dcon2 == 'a,3') {
            cor++;
            f_ok($('#p1dcon2'));
            f_ok($('#p1dcon12'));
        } else {
            inc++;
            f_no($('#p1dcon2'));
            f_no($('#p1dcon12'));
        }
        if (p1dcon3 == 'd,2') {
            cor++;
            f_ok($('#p1dcon3'));
            f_ok($('#p1dcon13'));
        } else {
            inc++;
            f_no($('#p1dcon3'));
            f_no($('#p1dcon13'));
        }
        if (p1dcon4 == 'b,1') {
            cor++;
            f_ok($('#p1dcon4'));
            f_ok($('#p1dcon14'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
            f_no($('#p1dcon14'));
        }
        Calculo_nota();
    }
}