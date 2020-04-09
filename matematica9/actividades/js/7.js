var nPregs;
var actual;
var nota;
var npaso;
var cifra1;
var cifra2;
var dec;

$(document).ready(function () {
    nPregs = 5;
    actual = 1;
    nota = 0;
//    pregs = reorder_array(pregs)
    show();

})

function show() {

    habilitar_by_class('input1');
    habilitar_by_class('btnCalificar');
    $(".input1").val('');
    $('#txtNota').html(nota.toFixed(2));
    $('#act_actual').html(actual);
    $('#act_total').html(nPregs);
    npaso = 10 / nPregs;

    dec1 = aleatorio(1, 3);
    dec2 = aleatorio(1, 3);
    cif2 = 1;
    cif1 = 1;
    for (var i = 0; i < dec1; i++) {
        cif1 = cif1 * 10;
    }
    for (var i = 0; i < dec2; i++) {
        cif2 = cif2 * 10;
    }
    cifra2 = aleatorio(1, cif2);
    aleat = Math.random()
    for (var i = 0; i < dec2; i++) {
        aleat = aleat * 10;
    }
    cifra1 = aleat.toFixed(dec1);

    $('#cifra1').html(cifra1);
    $('#cifra2').html(cifra2);
    $('#denom2').html(cif2);
    $('.sol1').val(Math.round(cifra1 * cif1));
    $('.sol2').val(cif1);
    $('.sol3').val(cifra2 / cif2);


}

function siguiente() {
    actual++;
    console.log('siguiente');

    show();
}

function calificar() {

    console.log('calificando');
    //var band = 0;

    nt = npaso / 2;

//    console.log($('.respuesta1').val())
//    console.log($('.sol1').val())
//    if ($('.respuesta1').val() == $('.sol1')) {
//        console.log('1')
//    }

    if ($('.respuesta1').val() == $('.sol1').val() && $('.respuesta2').val() == $('.sol2').val()) {
        nota = nota + nt;
        $('.respuesta1').addClass('valid');
        $('.respuesta1').remove('no-valid');
        $('.respuesta2').addClass('valid');
        $('.respuesta2').remove('no-valid');
    } else {
        $('.respuesta1').addClass('no-valid');
        $('.respuesta1').remove('valid');
        $('.respuesta2').addClass('no-valid');
        $('.respuesta2').remove('valid');
    }
    if ($('.respuesta3').val() == $('.sol3').val()) {
        nota = nota + nt;
        $('.respuesta3').addClass('valid');
        $('.respuesta3').remove('no-valid');
    } else {
        $('.respuesta3').addClass('no-valid');
        $('.respuesta3').remove('valid');
    }
    desabilitar_by_class('input1');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota.toFixed(2);
    if (actual < nPregs) {
        setTimeout(siguiente, 2000);
    }
}