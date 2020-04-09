var titulos = 'reflexiono';
numero_pagina(27);

var corAns = {
    lecturaLiteral:[
        [0,'V'],
        [1,'V'],
        [2,'V'],
        [3,'V']
    ]
    };
var idInputs = {
    notaAbierta: ['nA1','nA2']
    }
Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(0,9,1);
        
    });
    elemento.addEventListener('keyup',()=>{
        validMaxIngreso(elemento,10);
    });
}));
/*
document.getElementById('califLectLit').addEventListener('click',function(){
    calcSeparatedActScore('radiobutton','label>input',corAns.lecturaLiteral,'notaLectLit',3.2);
});
document.getElementById('bt_comprobar').addEventListener('click',()=>{
    sumTotalMixedQuest('notasCalc','txtNota');
});*/

