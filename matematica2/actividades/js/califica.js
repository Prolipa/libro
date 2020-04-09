function califica() {
    var respuesta1 = document.getElementById('in1');
    var respuesta2 = document.getElementById('in2');
    var respuesta3 = document.getElementById('in3');
    var respuesta4 = document.getElementById('in4');
    var respuesta5 = document.getElementById('in5');
    var respuesta6 = document.getElementById('in6');
    var valor1 = 0;
    var valor2 = 0;
    var valor3 = 0;
    var valor4 = 0;
    var valor5 = 0;
    var valor6 = 0;
    var nota = 0;
    if (respuesta1 == 2) {
        valor1 = 1;

    } else {
        valor1 = 0;
    }
    if (respuesta2 == 5) {
        valor2 = 1;

    } else {
        valor2 = 0;
    }
    if (respuesta3 == 3) {
        valor3 = 1;

    } else {
        valor3 = 0;
    }
    if (respuesta4 == 1) {
        valor4 = 1;

    } else {
        valor4 = 0;
    }

    nota = valor1 + valor2 + valor3 + valor4 + valor5 + valor6;
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota + ' / 10';

}



/*function comprobar_calificar_txt() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            respuestas[i].classList.add('valid');
            respuestas[i].classList.remove('no-valid');
            nota += valor;
        } else {
            respuestas[i].classList.add('no-valid');
            respuestas[i].classList.remove('valid');
        }
        ;
    }
    desabilitar_by_class('respuestas');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota + ' / 10';
}*/