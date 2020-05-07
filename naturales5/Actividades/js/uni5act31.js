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
    sopa = 0,
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 3.5, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 3.5)
});

function f_iniciar() {
    var p1vec1 = [
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">nariz</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon1"></td>' +
        '</tr>',
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">voz</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon2"></td>' +
        '</tr>',
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">arroz</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon3"></td>' +
        '</tr>',
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">fugaz</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon4"></td>' +
        '</tr>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);
    var p1vec2 = [
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">cruz</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon5"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">veloz</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon6"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">tenaz</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon7"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">eficaz</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon8"></td>' +
        '</tr>' 
    ];
    p1vec2.sort(f_randomico);
    $('#p1im2').html(p1vec2);
    bt_comprobar.addEventListener("click", preg3);

    function preg3() {
        cor = 0;
        var nota1_3 = $('#nota1_3').val();
        if (!nota1_3) {
            alert('Ingrese la calificación en la pregunta 3.')
        } else {
            cor = cor + parseFloat(nota1_3);
            inc = inc + (3.5 - parseFloat(nota1_3));
            $('#nota1_3').val(parseFloat(nota1_3).toFixed(2));
            $('#nota1_3').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg3);
        var p1vec1 = ['narices', 'voces', 'arroces', 'fugaces', 'cruces', 'veloces', 'tenaces', 'eficaces'];
        var p1cont1 = 0;
        for (var i = 0; i < p1vec1.length; i++) {
            var p1res1 = $('#p1dcon' + (i + 1)).val();
            if (p1res1 == p1vec1[i]) {
                p1cont1++;
                f_ok($('#p1dcon' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p1dcon' + (i + 1)));
            }
        }
        var result1 = (p1cont1 * 3.5) / 8;
        cor = cor + result1;
        inc = inc + (3.5 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p2cont1 = 0;
        for (var i = 0; i < 6; i++) {
            var p2res1 = $('#p2dcon' + (i + 1)).val();
            if (p2res1 == 'c') {
                p2cont1++;
                f_ok($('#p2dcon' + (i + 1)));
            } else {
                p2cont1;
                f_no($('#p2dcon' + (i + 1)));
            }
        }
        var result2 = (p2cont1 * 3) / 6;
        cor = cor + result2;
        inc = inc + (3 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}