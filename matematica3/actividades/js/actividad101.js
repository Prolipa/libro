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
    var a101vec1 = ['<tr align="center">' +
        '<td>R</td>' +
        '<td>' +
        '<select name="" id="a101sel1" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>U</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td>B</td>' +
        '<td>' +
        '<select name="" id="a101sel2" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>R</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td>abeja</td>' +
        '<td>' +
        '<select name="" id="a101sel3" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>U</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td>B</td>' +
        '<td>' +
        '<select name="" id="a101sel4" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>U</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td>mariposa</td>' +
        '<td>' +
        '<select name="" id="a101sel5" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>B</td>' +
        '</tr>',
        '<tr align="center">' +
        '<td>hormiga</td>' +
        '<td>' +
        '<select name="" id="a101sel6" class="form-control">' +
        '<option value="" disabled selected>Seleccione</option>' +
        '<option value="⊂">⊂</option>' +
        '<option value="⊄">⊄</option>' +
        '</select>' +
        '</td>' +
        '<td>U</td>' +
        '</tr>'
    ];
    a101vec1.sort(f_randomico);
    $('#a101im1').html(a101vec1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        var a101sel1 = $('#a101sel1').val();
        var a101sel2 = $('#a101sel2').val();
        var a101sel3 = $('#a101sel3').val();
        var a101sel4 = $('#a101sel4').val();
        var a101sel5 = $('#a101sel5').val();
        var a101sel6 = $('#a101sel6').val();
        if (a101sel1 == '⊂') {
            cor++;
            f_ok($('#a101sel1'));
        } else {
            inc++;
            f_no($('#a101sel1'));
        }
        if (a101sel2 == '⊄') {
            cor++;
            f_ok($('#a101sel2'));
        } else {
            inc++;
            f_no($('#a101sel2'));
        }
        if (a101sel3 == '⊂') {
            cor++;
            f_ok($('#a101sel3'));
        } else {
            inc++;
            f_no($('#a101sel3'));
        }
        if (a101sel4 == '⊂') {
            cor++;
            f_ok($('#a101sel4'));
        } else {
            inc++;
            f_no($('#a101sel4'));
        }
        if (a101sel5 == '⊄') {
            cor++;
            f_ok($('#a101sel5'));
        } else {
            inc++;
            f_no($('#a101sel5'));
        }
        if (a101sel6 == '⊂') {
            cor++;
            f_ok($('#a101sel6'));
        } else {
            inc++;
            f_no($('#a101sel6'));
        }
        Calculo_nota();
    }
}