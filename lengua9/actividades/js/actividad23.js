var titulos = 'exploro';
numero_pagina(32);

corAns = ['Con los días se amontonan los momentos que perdimos por tratar de ser sinceros','que']

Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(0,9);
        
    });
    elemento.addEventListener('keyup',()=>{
        validMaxIngreso(elemento,10);
    });
}));

document.getElementById('bt_comprobar').addEventListener('click',function(){
    var oracion = document.getElementById('oracion').value;
    var nexo = document.getElementById('nexo').value;
    var contCorAns = 0;
    if(oracion == corAns[0]){
        contCorAns = contCorAns+1;
    }
    if(nexo == corAns[1]){
        contCorAns = contCorAns+1;
    }

    document.getElementById('txtNota').innerHTML = ((10*contCorAns)/2).toFixed(2);
    document.getElementById('bt_comprobar').disabled = true;
});

