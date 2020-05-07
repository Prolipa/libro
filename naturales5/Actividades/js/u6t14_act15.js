var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 2)
});
document.getElementById('nota1_5').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_5'), 2)
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var p1vec1 = [
        '<div class="col-sm-3">' +
        '<p align="center">1´p1</p>' +
        '<div align="center">' +
        '<img src="img/i1_p229_u6t14a15.jpg" class="img-responsive">' +
        '</div>' +
        '<input type="text" class="form-control" id="p1dcon1" onkeyup="mayus(this)">' +
        '</div>',
        '<div class="col-sm-3">' +
        '<p align="center">1y1n</p>' +
        '<div align="center">' +
        '<img src="img/i2_p229_u6t14a15.jpg" class="img-responsive">' +
        '</div>' +
        '<input type="text" class="form-control" id="p1dcon2" onkeyup="mayus(this)">' +
        '</div>',
        '<div class="col-sm-3">' +
        '<p align="center">n1- 4</p>' +
        '<div align="center">' +
        '<img src="img/i3_p229_u6t14a15.jpg" class="img-responsive">' +
        '</div>' +
        '<input type="text" class="form-control" id="p1dcon3" onkeyup="mayus(this)">' +
        '</div>',
        '<div class="col-sm-3">' +
        '<p align="center">n1m1</p>' +
        '<div align="center">' +
        '<img src="img/i4_p229_u6t14a15.jpg" class="img-responsive">' +
        '</div>' +
        '<input type="text" class="form-control" id="p1dcon4" onkeyup="mayus(this)">' +
        '</div>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);

    var p3vec1 = [
        '<tr>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 110px;" onkeyup="mayus(this)" id="p3dcon1"></td>' +
        '<td>Sal, fuera</td>' +
        '</tr>' ,
        '<tr>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 110px;" onkeyup="mayus(this)" id="p3dcon2"></td>' +
        '<td>Poco</td>' +
        '</tr>' ,
        '<tr>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 110px;" onkeyup="mayus(this)" id="p3dcon3"></td>' +
        '<td>Suave</td>' +
        '</tr>' ,
        '<tr>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 110px;" onkeyup="mayus(this)" id="p3dcon4"></td>' +
        '<td>¿Cómo estás?</td>' +
        '</tr>' ,
        '<tr>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 110px;" onkeyup="mayus(this)" id="p3dcon5"></td>' +
        '<td>Buenos días</td>' +
        '</tr>' ,
        '<tr>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 110px;" onkeyup="mayus(this)" id="p3dcon6"></td>' +
        '<td>Buenas tardes</td>' +
        '</tr>' ,
        '<tr>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 110px;" onkeyup="mayus(this)" id="p3dcon7"></td>' +
        '<td>Buenas noches</td>' +
        '</tr>' ,
        '<tr>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 110px;" onkeyup="mayus(this)" id="p3dcon8"></td>' +
        '<td>Hasta mañana</td>' +
        '</tr>' 
    ];
    p3vec1.sort(f_randomico);
    $('#p3im1').html(p3vec1);
    bt_comprobar.addEventListener("click", f_preg4);

    function f_preg4() {
        var nota1_4 = $('#nota1_4').val();
        cor = 0;
        inc = 0;
        if (!nota1_4) {
            alert('Ingrese la calificación en la pregunta 4.')
        } else {
            cor = cor + parseFloat(nota1_4);
            inc = inc + (2 - parseFloat(nota1_4));
            $('#nota1_4').val(parseFloat(nota1_4).toFixed(2));
            $('#nota1_4').attr('disabled', 'true');
            f_preg5();
        }
    }

    function f_preg5() {
        var nota1_5 = $('#nota1_5').val();
        if (!nota1_5) {
            alert('Ingrese la calificación en la pregunta 5.')
        } else {
            cor = cor + parseFloat(nota1_5);
            inc = inc + (2 - parseFloat(nota1_5));
            $('#nota1_5').val(parseFloat(nota1_5).toFixed(2));
            $('#nota1_5').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg4);
        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        var p1dcon3 = $('#p1dcon3').val();
        var p1dcon4 = $('#p1dcon4').val();
        var p1cont1 = 0;
        if (p1dcon1 == 'a`pa' || p1dcon1 == "a'pa" || p1dcon1 == "a´pa") {
            p1cont1++;
            f_ok($('#p1dcon1'));
        } else {
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == 'ayan') {
            p1cont1++;
            f_ok($('#p1dcon2'));
        } else {
            p1cont1;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3 == 'na-o') {
            p1cont1++;
            f_ok($('#p1dcon3'));
        } else {
            p1cont1;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4 == 'nama') {
            p1cont1++;
            f_ok($('#p1dcon4'));
        } else {
            p1cont1;
            f_no($('#p1dcon4'));
        }
        var result1 = (p1cont1 * 3) / 4;
        cor = cor + result1;
        inc = inc + (3 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p3dcon1 = $('#p3dcon1').val();
        var p3dcon2 = $('#p3dcon2').val();
        var p3dcon3 = $('#p3dcon3').val();
        var p3dcon4 = $('#p3dcon4').val();
        var p3dcon5 = $('#p3dcon5').val();
        var p3dcon6 = $('#p3dcon6').val();
        var p3dcon7 = $('#p3dcon7').val();
        var p3dcon8 = $('#p3dcon8').val();
        var p3cont1 = 0;
        if (p3dcon1 == 'llukshi') {
            p3cont1++;
            f_ok($('#p3dcon1'));
        } else {
            p3cont1;
            f_no($('#p3dcon1'));
        }
        if (p3dcon2 == 'piti') {
            p3cont1++;
            f_ok($('#p3dcon2'));
        } else {
            p3cont1;
            f_no($('#p3dcon2'));
        }
        if (p3dcon3 == 'ñutu') {
            p3cont1++;
            f_ok($('#p3dcon3'));
        } else {
            p3cont1;
            f_no($('#p3dcon3'));
        }
        if (p3dcon4 == 'imanalla') {
            p3cont1++;
            f_ok($('#p3dcon4'));
        } else {
            p3cont1;
            f_no($('#p3dcon4'));
        }
        if (p3dcon5 == 'allí puncha') {
            p3cont1++;
            f_ok($('#p3dcon5'));
        } else {
            p3cont1;
            f_no($('#p3dcon5'));
        }
        if (p3dcon6 == 'allí chishi') {
            p3cont1++;
            f_ok($('#p3dcon6'));
        } else {
            p3cont1;
            f_no($('#p3dcon6'));
        }
        if (p3dcon7 == 'allí tuta') {
            p3cont1++;
            f_ok($('#p3dcon7'));
        } else {
            p3cont1;
            f_no($('#p3dcon7'));
        }
        if (p3dcon8 == 'kayakaman') {
            p3cont1++;
            f_ok($('#p3dcon8'));
        } else {
            p3cont1;
            f_no($('#p3dcon8'));
        }
        var result3 = (p3cont1 * 3) / 8;
        cor = cor + result3;
        inc = inc + (3 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');
        Calculo_nota();
    }
}