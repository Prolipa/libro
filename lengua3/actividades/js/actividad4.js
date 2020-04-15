var titulos = 'aplico';
numero_pagina(11);

function validNotAbierta(){
    var valInpNotAb = document.getElementById('inpNotAb').value;
    if (valInpNotAb >10){
        alert("La nota ingresada no puede ser mayor a 10");
        validNotAbierta = 0;
    }
}