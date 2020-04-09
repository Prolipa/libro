var titulos = 'aplico';
numero_pagina(23);

Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(0,9);
    });
    elemento.addEventListener('keyup',()=>{
        validMaxIngreso(elemento,10);
    });
}));



