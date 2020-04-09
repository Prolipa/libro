var n1
var n2
var d1
var d2
var e
var b

var nPregs;
var actual;
var nota;
var npaso;
function show() {

    $('#txtNota').html(nota.toFixed(2));
    $('#act_actual').html(actual);
    $('#act_total').html(nPregs);
    n1 = aleatorio(1, 30)
    n2 = aleatorio(1, 30)
    d1 = aleatorio(1, 30)
    d2 = aleatorio(1, 30)
    e = aleatorio(1, 20)
    b = aleatorio(1, 5)
    s = '....'
    switch (b) {
        case 2:
            $('.e1').html(e)
            $('.n2').html(n2)
            $('.d2').html(d2)
            f = n2 / d2
            s = (e > f) ? '>' : (e < f) ? '<' : '=';
            break;
        case 4:
            $('.e2').html(e)
            $('.n1').html(n1)
            $('.d1').html(d1)
            f = n1 / d1
            s = (f > e) ? '>' : (f < e) ? '<' : '=';
            break;
        default:
            $('.n1').html(n1)
            $('.d1').html(d1)
            $('.n2').html(n2)
            $('.d2').html(d2)
            f1 = n1 / d1
            f2 = n2 / d2
            s = (f1 > f2) ? '>' : (f1 < f2) ? '<' : '=';
    }
    $('#solucion').val(s)
    $('.respuestas').removeAttr('disabled')
    $('.respuestas').removeClass('valid')
    $('.respuestas').removeClass('no-valid')
    document.getElementById('resp').getElementsByTagName('option')[0].selected = 'selected'
    $('.btnCalificar').removeAttr('disabled')

}

$(document).ready(function () {
    nPregs = 5;
    actual = 1;
    nota = 0;
    npaso = 10 / nPregs;
    show();
})

function califica() {
    var res = $('#resp').val()
    var sol = $('#solucion').val()
    console.log(res);
    console.log(sol);
    if (res == sol) {
        nota += npaso;
        $('#resp').addClass('valid')
    } else {
        $('#resp').addClass('no-valid')
    }
    desabilitar_by_class('respuestas');
    desabilitar_by_class('btnCalificar');
    if (actual < nPregs) {
        setTimeout(siguiente, 2000);
    }
}

function siguiente() {
    actual++;
    console.log('siguiente');
    show();
}