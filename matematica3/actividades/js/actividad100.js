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
    var a100vec1 = ['<tr align="center">' +
        '<td>F</td>' +
        '<td>' +
        '<select name="" id="a100sel1" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>U</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td>N</td>' +
        '<td>' +
        '<select name="" id="a100sel2" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>U</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td><img src="img/i2_p93_act100.jpg" alt=""></td>' +
        '<td>' +
        '<select name="" id="a100sel3" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>F</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td><img src="img/i3_p93_act100.jpg" alt=""></td>' +
        '<td>' +
        '<select name="" id="a100sel4" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>N</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td><img src="img/i4_p93_act100.jpg" alt=""></td>' +
        '<td>' +
        '<select name="" id="a100sel5" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>F</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td><img src="img/i5_p93_act100.jpg" alt=""></td>' +
        '<td>' +
        '<select name="" id="a100sel6" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>F</td>' +
        '</tr>'
    ];
    a100vec1.sort(f_randomico);
    $('#a100im1').html(a100vec1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        var a100sel1 = $('#a100sel1').val();
        var a100sel2 = $('#a100sel2').val();
        var a100sel3 = $('#a100sel3').val();
        var a100sel4 = $('#a100sel4').val();
        var a100sel5 = $('#a100sel5').val();
        var a100sel6 = $('#a100sel6').val();
        if (a100sel1 == '⊂') {
            cor++;
            f_ok($('#a100sel1'));
        } else {
            inc++;
            f_no($('#a100sel1'));
        }
        if (a100sel2 == '⊂') {
            cor++;
            f_ok($('#a100sel2'));
        } else {
            inc++;
            f_no($('#a100sel2'));
        }
        if (a100sel3 == '⊄') {
            cor++;
            f_ok($('#a100sel3'));
        } else {
            inc++;
            f_no($('#a100sel3'));
        }
        if (a100sel4 == '⊄') {
            cor++;
            f_ok($('#a100sel4'));
        } else {
            inc++;
            f_no($('#a100sel4'));
        }
        if (a100sel5 == '⊄') {
            cor++;
            f_ok($('#a100sel5'));
        } else {
            inc++;
            f_no($('#a100sel5'));
        }
        if (a100sel6 == '⊂') {
            cor++;
            f_ok($('#a100sel6'));
        } else {
            inc++;
            f_no($('#a100sel6'));
        }
        Calculo_nota();
    }
}