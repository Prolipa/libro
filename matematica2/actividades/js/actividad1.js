function mostrar1() {
    document.getElementById('circle1').style.display = '';
    document.getElementById('circle').style.display = 'none';
    document.getElementById('in1').value = 1;
    document.getElementById('in1').style.color = '#fff';
    return false;

}



function comprobar_calificar_txt2() {
    //var m1 = document.getElementById() 
    if (document.getElementById('m1').value == "" & document.getElementById('m2').value == "" & document.getElementById('m3').value == "") {
        document.getElementById('m1').remove('respuestas');
        document.getElementById('s1').remove('solucion');
        document.getElementById('m2').remove('respuestas');
        document.getElementById('s2').remove('solucion');
        document.getElementById('m3').remove('respuestas');
        document.getElementById('s3').remove('solucion');
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
            };
        }
        desabilitar_by_class('respuestas');
        desabilitar_by_class('btnCalificar');
        document.getElementById('txtNota').innerHTML = nota.toFixed(2) + ' / 10';
    } else {
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
            };
        }
        desabilitar_by_class('respuestas');
        desabilitar_by_class('btnCalificar');
        document.getElementById('txtNota').innerHTML = nota.toFixed(2) + ' / 10';
    }
}