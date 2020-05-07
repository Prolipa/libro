function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    return document.getElementById(data);


//    console.log(childs);
}

function moveimage(ev) {
    var el = drop(ev);
    //extra al drag and drop
    var childs = ev.target.children;
    for (var i = 0; i < childs.length; i++) {
        if (childs[i].className === 'respuestas') {
            childs[i].value = el.id;
        }
    }
}

function evaluar_act_drag() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            respuestas[i].parentNode.classList.add('valid');
            respuestas[i].parentNode.classList.remove('no-valid');
            nota += valor;
        } else {
            respuestas[i].parentNode.classList.add('no-valid');
            respuestas[i].parentNode.classList.remove('valid');
        }
        ;
    }
    desabilitar_by_class('btnCalificar');
    document.getElementById('Nota').innerHTML = Math.round(nota) + ' / 10';
}

function comprobar_seleccion_txt() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
    var marks = document.getElementsByClassName('img');
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            marks[i].classList.add('valid');
            marks[i].classList.remove('no-valid');
            nota += valor;
        } else {
            marks[i].classList.add('no-valid');
            marks[i].classList.remove('valid');
        }
        ;
    }
    desabilitar_by_class('heart');
    desabilitar_by_class('cross');
    desabilitar_by_class('btnCalificar');
    document.getElementById('Nota').innerHTML = Math.round(nota) + ' / 10';
}
