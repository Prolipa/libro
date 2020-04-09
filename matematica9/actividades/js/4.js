var nPregs;
var actual;
var nota;
var npaso;
indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var fracs = [
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion()
]
var sols = [
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion(),
    new fraccion()
]

denom = [
    21, -6, 'a', 15, 26, 21, 12, 25, 14, 3, 7, 14, 'b', 'x'
]
fracs[0].Init(0, 6, '7', '+');
fracs[1].Init(0, 18, -30, '+');
fracs[2].Init(0, 3, 11, '+');
fracs[3].Init(0, -18, 5, '+');
fracs[4].Init(0, 21, 13, '+');
fracs[5].Init(0, -6, 7, '+');
fracs[6].Init(0, 22, -3, '+');
fracs[7].Init(0, 19, -5, '+');
fracs[8].Init(0, 4, -7, '+');
fracs[9].Init(0, 27, 9, '+');
fracs[10].Init(0, 48, 21, '+');
fracs[11].Init(0, 11, 7, '+');
fracs[12].Init(0, 21, -26, '+');
fracs[13].Init(0, 13, 27, '+');

sols[0].Init(0, 18, 31, '+');
sols[1].Init(0, 3, -5, '+');
sols[2].Init(0, '3a', '11a', '+');
sols[3].Init(0, -54, 15, '+');
sols[4].Init(0, 42, 26, '+');
sols[5].Init(0, -18, 21, '+');
sols[6].Init(0, 88, -12, '+');
sols[7].Init(0, 95, -25, '+');
sols[8].Init(0, -8, 14, '+');
sols[9].Init(0, 9, 3, '+');
sols[10].Init(0, 16, 7, '+');
sols[11].Init(0, 22, 14, '+');
sols[12].Init(0, '21b', '-26b', '+');
sols[13].Init(0, '13x', '27x', '+');

console.log('init...');
var frac = new fraccion();

$(document).ready(function () {
    nPregs = 5;
    actual = 1;
    nota = 0;
    indices = reorder_array(indices)
    show();
})

function show() {
    habilitar_by_class('respuestas');
    habilitar_by_class('btnCalificar');
    $('#txtNota').html(nota.toFixed(2));
    $('#act_actual').html(actual);
    $('#act_total').html(nPregs);
    npaso = 10 / nPregs;

    fracs[indices[actual]].ShowSimpleSigno('f')
    $(".denominador").html(denom[indices[actual]])
    $(".num1").val(sols[indices[actual]].numerador)
    $(".denom1").val(sols[indices[actual]].denominador)
    var respuestas = document.getElementsByClassName('respuestas');
    for (var i = 0; i < respuestas.length; i++) {
        respuestas[i].classList.remove('no-valid');
        respuestas[i].classList.remove('valid');
        $(respuestas[i]).val('');
    }
}

function califica() {

    var band = 0;

    if ($('#num1').val() == $('.num1').val()) {
        band++;
        $('#num1').addClass('valid')
        $('#num1').removeClass('no-valid')
    } else {
        $('#num1').removeClass('valid')
        $('#num1').addClass('no-valid')
    }
    if ($('#denom1').val() == $('.denom1').val()) {
        band++
        $('#denom1').addClass('valid')
        $('#denom1').removeClass('no-valid')
    } else {
        $('#denom1').removeClass('valid')
        $('#denom1').addClass('no-valid')
    }
    if (band == 2) {
        nota = nota + npaso
    }
    desabilitar_by_class('respuestas');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota.toFixed(2);
    if (actual < nPregs) {
        setTimeout(siguiente, 2000);
    }
}

function siguiente() {
    actual++;

    show();
}