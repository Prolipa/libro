var titulos = 'reflexiono';
numero_pagina(35);

corAns = [
    [0,'s'],
    [1,'c'],
    [2,'c'],
    [3,'c'],
    [4,'s'],
    [5,'c'],
    [6,'c']
];

Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(0,9);
        
    });
    elemento.addEventListener('keyup',()=>{
        validMaxIngreso(elemento,5);
    });
}));

document.getElementById('califAct1').addEventListener('click',()=>{
    calcSeparatedActScore('txtletras','input',corAns,'califact1',5);
});
document.getElementById('bt_comprobar').addEventListener('click',()=>{
    sumTotalMixedQuest('sumtot','txtNota');
});