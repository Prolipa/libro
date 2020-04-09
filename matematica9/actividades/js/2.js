var actual;
var nPregs = 5;

function siguiente() {
    actual++;

    cargar();
}

function comprobar2() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
    var respuestas1 = document.getElementsByClassName('respuestas1');
    var soluciones1 = document.getElementsByClassName('solucion1');
//    console.log(respuestas);
//    console.log(soluciones);
//    console.log(respuestas1);
//    console.log(soluciones1);

    var valor = calc_valor_pregunta(respuestas, 4);
    var valor1 = calc_valor_pregunta(respuestas1, 3);
//    console.log(valor);
//    console.log(valor1);
    var nota = 0;
    var nota1 = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            respuestas[i].classList.add('valid');
            respuestas[i].classList.remove('no-valid');
            nota += valor;
        } else {
            respuestas[i].classList.add('no-valid');
            respuestas[i].classList.remove('valid');
        }
    }
//    console.log(nota);
    nota = Math.round(nota)
    for (var i = 0; i < respuestas1.length; i++) {
        if (verificar_contenido(respuestas1[i].value.toLowerCase(), soluciones1[i].value.toLowerCase().split('*'))) {
            respuestas1[i].classList.add('valid');
            respuestas1[i].classList.remove('no-valid');
            nota1 += valor1;
        } else {
            respuestas1[i].classList.add('no-valid');
            respuestas1[i].classList.remove('valid');
        }
    }
    console.log()
    nota2 = ($('#nota2').val() != '') ? parseFloat($('#nota2').val()) : 0;
    $('#nota2').val(nota2)
    desabilitar_by_class('respuestas');
    desabilitar_by_class('respuestas1');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = (nota + nota1 + nota2);

    if (actual < nPregs) {
        setTimeout(siguiente, 2000);
    }
}



var aleat = [aleatorio(0, 1), aleatorio(0, 1), aleatorio(0, 1), aleatorio(0, 1), aleatorio(0, 1), aleatorio(0, 1), aleatorio(0, 1), aleatorio(0, 1)]
var a1 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var a2 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var b1 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var b2 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var c1 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var c2 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var d1 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var d2 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var e1 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var e2 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var f1 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var f2 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var g1 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]
var g2 = [new fraccion(), new fraccion(), new fraccion(), new fraccion(), new fraccion()]


a1[0].Init(2, 1, 2, '+');
a1[1].Init(0, 1, 2, '+');
a1[2].Init(0, 3, 4, '+');
a1[3].Init(0, 1, 4, '+');
a1[4].Init(0, 1, 2, '+');

a2[0].Init(2, 2, 4, '+');
a2[1].Init(0, 1, 2, '+');
a2[2].Init(0, 3, 4, '+');
a2[3].Init(0, 2, 4, '+');
a2[4].Init(0, 2, 8, '+');

b1[0].Init(1, 3, 4, '+');
b1[1].Init(0, 3, 5, '+');
b1[2].Init(0, 1, 2, '+');
b1[3].Init(0, 2, 4, '+');
b1[4].Init(0, 3, 4, '+');

b2[0].Init(1, 6, 8, '+');
b2[1].Init(0, 3, 4, '+');
b2[2].Init(0, 2, 4, '+');
b2[3].Init(0, 4, 8, '+');
b2[4].Init(0, 3, 4, '+');

c1[0].Init(2, 3, 4, '+');
c1[1].Init(0, 6, 4, '+');
c1[2].Init(0, 3, 4, '+');
c1[3].Init(0, 1, 5, '+');
c1[4].Init(0, 2, 4, '+');

c2[0].Init(2, 6, 8, '+');
c2[1].Init(0, 3, 2, '+');
c2[2].Init(0, 6, 8, '+');
c2[3].Init(0, 1, 5, '+');
c2[4].Init(0, 1, 2, '+');

d1[0].Init(1, 5, 7, '+');
d1[1].Init(0, 5, 4, '+');
d1[2].Init(0, 8, 6, '+');
d1[3].Init(0, 1, 5, '+');
d1[4].Init(0, 3, 4, '+');

d2[0].Init(1, 10, 14, '+');
d2[1].Init(0, 10, 8, '+');
d2[2].Init(0, 4, 3, '+');
d2[3].Init(0, 2, 10, '+');
d2[4].Init(0, 3, 4, '+');

e1[0].Init(3, 2, 3, '+');
e1[1].Init(0, 3, 4, '+');
e1[2].Init(0, 10, 12, '+');
e1[3].Init(0, 4, 5, '+');
e1[4].Init(0, 2, 8, '+');

e2[0].Init(3, 3, 6, '+');
e2[1].Init(0, 6, 8, '+');
e2[2].Init(0, 5, 6, '+');
e2[3].Init(0, 2, 3, '+');
e2[4].Init(0, 1, 4, '+');

conteo = 0;

var problems = [
    [a1, a2, 0],
    [b1, b2, 1],
    [c1, c2, 0],
    [d1, d2, 0],
    [e1, e2, -1]
]

problems = reorder_array(problems);
//problems = vector_randomico(problems);
$(document).ready(function () {
    actual = 1;
    cargar();
    $(".frac").on("click", function () {
        console.log('click td')
        if ($(this).hasClass('bg-exploro')) {
            $(this).removeClass('bg-exploro')
        } else {
            $(this).addClass('bg-exploro')
        }
        console.log($(this).css())
    });
})



function cargar() {
    $('#act_actual').html(actual);

    habilitar_by_class('respuestas');
    habilitar_by_class('respuestas1');
    habilitar_by_class('btnCalificar');

    problems[conteo][0][0].Show('a1');
    problems[conteo][0][3].Show('c2');
    var content = '';
    for (var i = 0; i < problems[conteo][0][3].denominador; i++) {
        content += '<td style="border:1px solid black" class="frac"> &nbsp</td>'
    }
    $('#grafica-fraccion').html(content);
    $('.solc').val(problems[conteo][2]);

    if (aleat[0] == 1) {
        problems[conteo][0][1].Show('a2');
        problems[conteo][0][1].Show('ta2');
    } else {
        problems[conteo][0][1].ShowDecimal('a2');
        problems[conteo][0][1].ShowDecimal('ta2');
    }
    if (aleat[1] == 1) {
        problems[conteo][0][2].Show('a3');
        problems[conteo][0][2].Show('ta3');
    } else {
        problems[conteo][0][2].ShowDecimal('a3');
        problems[conteo][0][2].ShowDecimal('ta3');
    }
    if (aleat[2] == 1) {
        problems[conteo][0][3].Show('a4');
        problems[conteo][0][3].Show('ta4');
        $('.sola4').val(1);


    } else {
        problems[conteo][0][3].ShowDecimal('a4');
        problems[conteo][0][3].ShowDecimal('ta4');
        $('.sola4').val(0);
    }
    if (aleat[3] == 1) {
        problems[conteo][0][4].Show('a5');
        problems[conteo][0][4].Show('ta5');
        $('.sola5').val(1);
    } else {
        problems[conteo][0][4].ShowDecimal('a5');
        problems[conteo][0][4].ShowDecimal('ta5');
        $('.sola5').val(0);
    }
    problems[conteo][1][0].Show('b1');
    if (aleat[4] == 1) {
        problems[conteo][1][1].Show('b2');
        problems[conteo][1][1].Show('tb2');
        $('.solb2').val(1);
    } else {
        problems[conteo][1][1].ShowDecimal('b2');
        problems[conteo][1][1].ShowDecimal('tb2');
        $('.solb2').val(0);
    }
    if (aleat[5] == 1) {
        problems[conteo][1][2].Show('b3');
        problems[conteo][1][2].Show('tb3');
        $('.solb3').val(1);
    } else {
        problems[conteo][1][2].ShowDecimal('b3');
        problems[conteo][1][2].ShowDecimal('tb3');
        $('.solb3').val(0);
    }
    if (aleat[6] == 1) {
        problems[conteo][1][3].Show('b4');
        problems[conteo][1][3].Show('tb4');
        $('.solb4').val(1);
    } else {
        problems[conteo][1][3].ShowDecimal('b4');
        problems[conteo][1][3].ShowDecimal('tb4');
        $('.solb4').val(0);
    }
    if (aleat[7] == 1) {
        problems[conteo][1][4].Show('b5');
        problems[conteo][1][4].Show('tb5');
        $('.solb5').val(1);
    } else {
        problems[conteo][1][4].ShowDecimal('b5');
        problems[conteo][1][4].ShowDecimal('tb5');
        $('.solb5').val(0);
    }


    problems[conteo][0][0].Show('ta1');
    problems[conteo][0][0].ShowSimple('tas1');
    problems[conteo][1][0].Show('tb1');
    problems[conteo][1][0].ShowSimple('tbs1');
    conteo++;
    $('#actividad').html(conteo);
}

