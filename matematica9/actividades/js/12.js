var n1
var n2
var d1
var d2
var nPregs;
var actual;
var nota;
var npaso;

$(document).ready(function () {
    nPregs = 5;
    actual = 1;
    nota = 0;
    npaso = 10 / nPregs;
    show();
})

function show() {

    $('#txtNota').html(nota.toFixed(2));
    $('#act_actual').html(actual);
    $('#act_total').html(nPregs);


    n1 = aleatorio(1, 30)
    n2 = aleatorio(1, 30)
    d1 = aleatorio(1, 30)
    d2 = aleatorio(1, 30)
    $('.n1').html(n1)
    $('.d1').html(d1)
    $('.n2').html(n2)
    $('.d2').html(d2)
    $('.soluno').val(n1 + '*' + d2)
    $('.soldos').val(n1 + '*' + d2)
    $('.soltres').val(n2 + '*' + d1)
    $('.solcuatro').val(n2 + '*' + d1)
    $('.solcinco').val(n1 * d2)
    $('.solseis').val(n2 * d1)
    if ((n1 * d2) > (n2 * d1)) {
        $('.solsiete').val('mayor')
    }
    if ((n1 * d2) < (n2 * d1)) {
        $('.solsiete').val('menor')
    }
    if ((n1 * d2) == (n2 * d1)) {
        $('.solsiete').val('igual')
    }
    $('.respuestas').removeAttr('disabled')
    $('.respuestas').removeClass('valid')
    $('.respuestas').removeClass('no-valid')
    $('.respuestas').val('')
    $('.btnCalificar').removeAttr('disabled')

}

function siguiente() {
    actual++;
    console.log('siguiente');
    show();
}
;

function califica() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
    var valor = npaso / respuestas.length;
    var nt = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            respuestas[i].classList.add('valid');
            respuestas[i].classList.remove('no-valid');
            nt += valor;
        } else {
            respuestas[i].classList.add('no-valid');
            respuestas[i].classList.remove('valid');
        }
        ;
    }
    desabilitar_by_class('respuestas');
    desabilitar_by_class('btnCalificar');
    nota += nt;
    if (actual < nPregs) {
        setTimeout(siguiente, 2000);
    }
}

