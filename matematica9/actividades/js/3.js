var nPregs;
var actual;
var nota;
var npaso;


console.log('init...');
frac1 = new fraccion();
frac2 = new fraccion();


$(document).ready(function () {
    nPregs = 5;
    actual = 1;
    nota = 0;
    show();
})

function siguiente() {
    actual++;

    show();
}

function show() {
    habilitar_by_class('respuestas');
    habilitar_by_class('btnCalificar');
    frac1.RandomPropia(1, 6)
    al = aleatorio(0, 1)
    if (al == 1) {
        frac2.RandomPropia(1, 6)

    } else {
        frac2.Asigna(frac1);
        frac2.Multiplica(2);
    }
    frac1.ShowSimpleSigno('f1')
    frac2.ShowSimpleSigno('f2')

    var respuestas = document.getElementsByClassName('respuestas');
    for (var i = 0; i < respuestas.length; i++) {
        respuestas[i].classList.remove('no-valid');
        respuestas[i].classList.remove('valid');
        $(respuestas[i]).val('');
    }

    $('#txtNota').html(nota.toFixed(2));
    $('#act_actual').html(actual);
    $('#act_total').html(nPregs);
    npaso = 10 / nPregs;
    num1 = (frac1.signo == '-') ? '-' : '';
    num1 += frac1.numerador;
    $('.num1').val(num1);
    $('.denom1').val(frac1.denominador);

    num2 = (frac2.signo == '-') ? '-' : '';
    num2 += frac2.numerador;
    $('.num2').val(num2);
    $('.denom2').val(frac2.denominador);

    ecu = num1 + '.' + frac2.denominador
    $('.ecu1').val(ecu);
    ecu = num2 + '.' + frac1.denominador
    $('.ecu2').val(ecu);
    igu1 = (frac1.signo == '-') ? '-' : '';
    igu1 += (frac1.numerador * frac2.denominador);
    $('.igu1').val(igu1);
    igu2 = (frac2.signo == '-') ? '-' : '';
    igu2 += (frac2.numerador * frac1.denominador);
    $('.igu2').val(igu2);

    if (igu1 == igu2) {
        $('.paso2').val(1);
    } else {
        $('.paso2').val(-1);
    }

}

function calificar() {

    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
    //console.log(respuestas)
    //console.log(soluciones)
    var valor = npaso / respuestas.length;
    var nt = 0;

    for (var i = 0; i < respuestas.length; i++) {
        resp = respuestas[i].value.toLowerCase();
        resp = resp.split("*").join(".");
        resp = resp.split("x").join(".");
        if (verificar_contenido(resp, soluciones[i].value.toLowerCase().split('*'))) {
            respuestas[i].classList.add('valid');
            respuestas[i].classList.remove('no-valid');
            nt += valor;
        } else {
            respuestas[i].classList.add('no-valid');
            respuestas[i].classList.remove('valid');
        }
        ;
    }
    nota = nota + nt;
    desabilitar_by_class('respuestas');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota.toFixed(2);
    if (actual < nPregs) {
        setTimeout(siguiente, 2000);
    }
}
