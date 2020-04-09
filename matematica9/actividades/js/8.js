rows = 100;
cant = 65
$(document).ready(function () {
    nPregs = 5;
    actual = 1;
    nota = 0;
    show()
})

function siguiente() {
    actual++;
    show();
}

function show() {
    habilitar_by_class('input1');
    habilitar_by_class('btnCalificar');
    $(".input1").val('');
    $('#txtNota').html(nota.toFixed(2));
    $('#act_actual').html(actual);
    $('#act_total').html(nPregs);
    npaso = 10 / nPregs;



    rows = (aleatorio(1, 2) == 1) ? 10 : 100;
    cant = aleatorio(1, rows);
    showFig()
    $('.sol1').val(rows)
    $('.sol2').val(cant)
    $('.sol3').val(rows)
    $('.sol4').val(cant / rows)
}


function showFig() {
    content = '';
    for (var i = 0; i < (rows / 10); i++) {
        content += '<tr class="tr"><tr>'
    }
    document.getElementById('figure').innerHTML = content;
    animedAdd();

    cellList = document.getElementsByClassName('cell');
    for (var i = 0; i < cant; i++) {
        $(cellList[i]).addClass('select');
    }
}


function addCell(el) {
    content = el.innerHTML;
    content += '<td class="cell"></td>';
    el.innerHTML = content;
}
function animedAdd() {
    rowList = document.getElementsByClassName('tr');
    for (var i = 0; i < rowList.length; i++) {
        for (var j = 0; j < 10; j++) {
            addCell(rowList[i])
        }
    }
}
function colored(el) {
    $(el).addClass('select');
}


function calificar() {

    nt = npaso / 2;



    if ($('.respuesta1').val() == $('.sol1').val()) {
        nota = nota + nt;
        $('.respuesta1').addClass('valid');
        $('.respuesta1').remove('no-valid');
    } else {
        $('.respuesta1').addClass('no-valid');
        $('.respuesta1').remove('valid');
    }
    if ($('.respuesta3').val() == $('.sol3').val() && $('.respuesta2').val() == $('.sol2').val() && $('.respuesta4').val() == $('.sol4').val()) {
        nota = nota + nt;
        $('.respuesta2').addClass('valid');
        $('.respuesta2').remove('no-valid');
        $('.respuesta3').addClass('valid');
        $('.respuesta3').remove('no-valid');
        $('.respuesta4').addClass('valid');
        $('.respuesta4').remove('no-valid');
    } else {
        $('.respuesta2').addClass('no-valid');
        $('.respuesta2').remove('valid');
        $('.respuesta3').addClass('no-valid');
        $('.respuesta3').remove('valid');
        $('.respuesta4').addClass('no-valid');
        $('.respuesta4').remove('valid');
    }
    desabilitar_by_class('input1');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota.toFixed(2);
    if (actual < nPregs) {
        setTimeout(siguiente, 2000);
    }
}