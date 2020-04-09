/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ladoA = [
    {'texto': 'texto de ejemplo',
        'id': '0',
        'enlaceId': '-1',
        'y': '0'
    },
    {'texto': 'texto de ejemplo 2',
        'id': '1',
        'enlaceId': '-1',
        'y': '0'
    },
    {'texto': 'texto de ejemplo 3',
        'id': '2',
        'y': '-1'
    },
    {'texto': 'texto de ejemplo 4',
        'id': '3',
        'enlaceId': '-1',
        'y': '0'
    }
];

var ladoB = [
    {'texto': 'resp 1',
        'id': '0',
        'enlaceId': '-1',
        'y': '0'
    },
    {'texto': 'resp 2',
        'id': '1',
        'enlaceId': '-1',
        'y': '0'
    },
    {'texto': 'resp 3',
        'id': '2',
        'enlaceId': '-1',
        'y': '0'
    },
    {'texto': 'resp 4',
        'id': '3',
        'enlaceId': '-1',
        'y': '0'
    }
];

/**
 * variables para saber donde se hace click
 */


/*
 $(document).ready(function () {
 console.log('iniciando.....');
 cargar_data();
 });
 */
var item;
var context;

window.onload = function () {
    console.log('iniciando.....');
    cargar_data();
    context = document.querySelector("#micanvas").getContext('2d');
};


function cargar_data() {
    var elementsA = document.getElementsByClassName('ladoA');
    var elementsB = document.getElementsByClassName('ladoB');
    var sum_y = 0;
    for (var i = 0; i < elementsA.length; i++) {
        elementsA[i].innerHTML = ladoA[i].texto + '<input type="hidden">';
        elementsB[i].innerHTML = ladoB[i].texto + '<input type="hidden">';
        elementsA[i].children[0].value = ladoA[i].id;
        elementsB[i].children[0].value = ladoB[i].id;
        // sum_y += elementsA[i].clientHeight;
        ladoA[i].y = elementsA[i].getBoundingClientRect().top - Math.trunc(elementsA[i].clientHeight / 2);
        ladoB[i].y = elementsB[i].getBoundingClientRect().top - Math.trunc(elementsA[i].clientHeight / 2);
        ladoA[i].x = 10;
        ladoB[i].x = document.getElementById('centro').getBoundingClientRect().width - 10;
    }
    //console.log(ladoA);
    //console.log(ladoB);
}

function select(element, className) {
    //console.log('clicked');
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('border-10');
        elements[i].classList.remove('border-4');
        //  borrar_marca(className, element.children[0].value);
    }
    element.classList.add('border-4');
    element.classList.remove('border-10');
    // dibuja_marca(className, element.children[0].value);
}

function selectA(element) {
    select(element, 'ladoA');
}
function selectB(element) {
    select(element, 'ladoB');
    // dibuja_marca(289, ladoB[element.children[0].value].y);
}

function dibuja_marca(lado, id) {
    x = (lado == 'ladoA') ? 10 : 289;
    y = (lado == 'ladoA') ? ladoA[id].y : ladoB[id].y;
    console.log(lado);
    console.log(x + '--' + y);
    context.beginPath();
    context.fillStyle = "red";
    context.strokeStyle = "black";
    context.arc(x, y, 5, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
    context.closePath();
}
function borrar_marca(lado, id) {
    x = (lado == 'ladoA') ? 10 : 289;
    y = (lado == 'ladoA') ? ladoA[id].y : ladoB[id].y;
    console.log('borrar');
    context.clearRect(x - 5, y - 5, x + 5, y + 5);
}



function dibuja_linea() {

}