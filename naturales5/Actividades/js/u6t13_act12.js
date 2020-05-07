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

document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 3)
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var p1vec1 = [
        '<div class="col-sm-4">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr align="center" style="border: 2px solid #7bbe7f;">' +
        '<td><img src="img/i1_p227_u6t13a12.jpg" class="img-responsive"></td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 2px solid #7bbe7f; padding: 10px; background: #fde6e6;">' +
        '<p align="justify">Si el semáforo está en <input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" id="p1dcon1" onkeyup="mayus(this)"> significa que los autos no pueden cruzar, los peatones sí.</p>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-4">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr align="center" style="border: 2px solid #7bbe7f;">' +
        '<td><img src="img/i2_p227_u6t13a12.jpg" class="img-responsive"></td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 2px solid #7bbe7f; padding: 10px; background: #feebcb;">' +
        '<p align="justify">Si el semáforo está en <input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" id="p1dcon2" onkeyup="mayus(this)"> significa que los autos y los peatones deben detenerse.</p>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-4">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr align="center" style="border: 2px solid #7bbe7f;">' +
        '<td><img src="img/i3_p227_u6t13a12.jpg" class="img-responsive"></td>' +
        '</tr>' +
        '<tr>' +
        '<td style="border: 2px solid #7bbe7f; padding: 10px; background: #dbebd1;">' +
        '<p align="justify">Si el semáforo está en <input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" id="p1dcon3" onkeyup="mayus(this)"> significa que los autos deben seguir, los peatones no.</p>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);

    var p2vec1 = [
        '<tr>' +
        '<td>Alto total, no pase</td>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" onkeyup="mayus(this)" id="p2dcon1"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td>Peligro, mantenimiento</td>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" onkeyup="mayus(this)" id="p2dcon2"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td>Prevención</td>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" onkeyup="mayus(this)" id="p2dcon3"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td>Información</td>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" onkeyup="mayus(this)" id="p2dcon4"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td>Es seguro pasar</td>' +
        '<td><input type="text" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" onkeyup="mayus(this)" id="p2dcon5"></td>' +
        '</tr>' 
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);
    bt_comprobar.addEventListener("click", f_preg3);

    function f_preg3() {
        var nota1_3 = $('#nota1_3').val();
        cor = 0;
        inc = 0;
        if (!nota1_3) {
            alert('Ingrese la calificación en la pregunta 3.')
        } else {
            cor = cor + parseFloat(nota1_3);
            inc = inc + (3 - parseFloat(nota1_3));
            $('#nota1_3').val(parseFloat(nota1_3).toFixed(2));
            $('#nota1_3').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg3);
        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        var p1dcon3 = $('#p1dcon3').val();
        var p1cont1 = 0;
        if (p1dcon1 == 'rojo') {
            p1cont1++;
            f_ok($('#p1dcon1'));
        } else {
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == 'amarillo') {
            p1cont1++;
            f_ok($('#p1dcon2'));
        } else {
            p1cont1;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3 == 'verde') {
            p1cont1++;
            f_ok($('#p1dcon3'));
        } else {
            p1cont1;
            f_no($('#p1dcon3'));
        }
        var result1 = (p1cont1 * 3.5) / 3;
        cor = cor + result1;
        inc = inc + (3.5 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p2dcon1 = $('#p2dcon1').val();
        var p2dcon2 = $('#p2dcon2').val();
        var p2dcon3 = $('#p2dcon3').val();
        var p2dcon4 = $('#p2dcon4').val();
        var p2dcon5 = $('#p2dcon5').val();
        var p2cont1 = 0;
        if (p2dcon1 == 'rojo') {
            p2cont1++;
            f_ok($('#p2dcon1'));
        } else {
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2 == 'anaranjado' || p2dcon2 == 'naranja') {
            p2cont1++;
            f_ok($('#p2dcon2'));
        } else {
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3 == 'amarillo') {
            p2cont1++;
            f_ok($('#p2dcon3'));
        } else {
            p2cont1;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4 == 'azul') {
            p2cont1++;
            f_ok($('#p2dcon4'));
        } else {
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5 == 'verde') {
            p2cont1++;
            f_ok($('#p2dcon5'));
        } else {
            p2cont1;
            f_no($('#p2dcon5'));
        }
        var result2 = (p2cont1 * 3.5) / 5;
        cor = cor + result2;
        inc = inc + (3.5 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}