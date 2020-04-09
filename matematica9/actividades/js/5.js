var nPregs;
var actual;
var nota;
var npaso;

var pregs = [
    ['Tres de cada diez estudiantes no van a clases.', 3, 10],
    ['La mitad de la población es hincha de algún equipo extranjero de fútbol.', 1, 2],
    ['De 30 lanzamientos al tablero de básquetbol, 27 son canastas.', 27, 30],
    ['Las apuestas en una carrera del hipódromo están 3 a 1.', 3, 1],
    ['En una oferta de productos de limpieza compras 3, pero solo pagas 2.', 2, 3],
    ['Uno de cada 3 buses esta lleno', 1, 3],
    ['Los jugadores de futbol 9 de cada 11 son altos', 9, 11],
    ['las frutas de la canasta, 3 de cada 5 estan maduras', 3, 5],
//    ['', 5, 2],
//    ['', 5, 2],
//    ['', 5, 2],
//    ['', 5, 2],
]

$(document).ready(function () {
    nPregs = 5;
    actual = 1;
    nota = 0;
    pregs = reorder_array(pregs)
    show();
})

function show() {
    habilitar_by_class('respuestas');
    habilitar_by_class('btnCalificar');
    $('#txtNota').html(nota.toFixed(2));
    $('#act_actual').html(actual);
    $('#act_total').html(nPregs);
    npaso = 10 / nPregs;


    pre = pregs[actual][0]
    n = pregs[actual][1]
    d = pregs[actual][2]
    $(".pregunta").html(pre)
    $(".num1").val(n)
    $(".denom1").val(d)
    var respuestas = document.getElementsByClassName('respuestas');
    for (var i = 0; i < respuestas.length; i++) {
        respuestas[i].classList.remove('no-valid');
        respuestas[i].classList.remove('valid');
        $(respuestas[i]).val('');
    }
}

function siguiente() {
    actual++;

    show();
}

function calificar() {

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