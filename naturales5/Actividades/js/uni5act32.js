var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 8,
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
        '<td style="border: 2px solid #0067b4; padding: 10px;">voces</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon1"></td>' +
        '</tr>',
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">perdices</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon2"></td>' +
        '</tr>',
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">jueces</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon3"></td>' +
        '</tr>',
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">aprendices</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon4"></td>' +
        '</tr>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);
    var p1vec2 = [
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">capaces</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon5"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">cicatrices</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon6"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">codornices</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon7"></td>' +
        '</tr>' ,
        '<tr>' +
        '<td style="border: 2px solid #0067b4; padding: 10px;">avestruces</td>' +
        '<td style="border: 2px solid #0067b4;"><input type="text" class="form-control" style="min-width: 80px; text-align: center;" onkeyup="mayus(this)" id="p1dcon8"></td>' +
        '</tr>' 
    ];
    p1vec2.sort(f_randomico);
    $('#p1im2').html(p1vec2);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1vec1 = ['voz', 'perdiz', 'juez', 'aprendiz', 'capaz', 'cicatriz', 'codorniz', 'avestruz'];
        var p1cont1 = 0;
        for (var i = 0; i < p1vec1.length; i++) {
            var p1res1 = $('#p1dcon' + (i + 1)).val();
            if (p1res1 == p1vec1[i]) {
                cor++;
                f_ok($('#p1dcon' + (i + 1)));
            } else {
                inc++;
                f_no($('#p1dcon' + (i + 1)));
            }
        }
        Calculo_nota();
    }
}