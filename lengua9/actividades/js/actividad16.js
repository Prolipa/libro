var titulos = 'reflexiono';
numero_pagina(24);

var loadTxt = ['informar','explicar','convencer','describir'],
    loadClass = ['col-md-2','cajas'],
    loadClassDroppable = ['panel-footer'];

var corAns = {
    lecturaLiteral:[
        [0,'2'],
        [1,'3'],
        [2,'1'],
        [3,'4']
    ],
    lecturaInferencial: [
        [0,'informar'],
        [1,'explicar'],
        [2,'convencer'],
        [3,'describir']]
    };
    
var idInputs = {
    notaAbierta: ['nA1','nA2'],
    notaSumativaParcial:['nAAC'],
    classNotasSumar:['notasCalc','notaCalcCerrada']
}
document.getElementById(idInputs.notaAbierta[0]).addEventListener('keypress',()=>{
    validNumero(0,9,1);
});
document.getElementById(idInputs.notaAbierta[0]).addEventListener('keyup',()=>{
    validMaxIngreso(document.getElementById(idInputs.notaAbierta[0]),2.5);
});
document.getElementById(idInputs.notaAbierta[1]).addEventListener('keypress',()=>{
    validNumero(0,9,1);
});
var valorValidMaxIngreso;
document.getElementById(idInputs.notaAbierta[1]).addEventListener('keyup',()=>{
    valorValidMaxIngreso = validMaxIngreso(document.getElementById(idInputs.notaAbierta[1]),2.5);
});
document.getElementById(idInputs.notaAbierta[1]).addEventListener('blur',()=>{
    if(valorValidMaxIngreso == 0){
        sumPartQuestMix(idInputs.notaSumativaParcial[0],idInputs.classNotasSumar[0]);
    }
});
Array.from(document.getElementsByClassName('numero')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(1,4);
        
    });
}));
initElementos('contenedorIntCom',loadTxt,1,1,loadClass);
Array.from(document.getElementsByClassName('tdDroppable')).forEach((elemento=>{
    initElementos(elemento.id,['1'],0,0,loadClassDroppable);
}));

insertDraggableDroppableDnD('contenedorIntCom');

Array.from(document.getElementsByClassName('tdDroppable')).forEach((elemento => {
    insertDraggableDroppableDnD(elemento.id);
}));

document.getElementById('califLectInf').addEventListener('click',function(){
    calcSeparatedActScore('tdDroppable','span',corAns.lecturaInferencial,'notaLectInf',2.5);
    sumPartQuestMix(idInputs.notaSumativaParcial[0],idInputs.classNotasSumar[0]);
});

document.getElementById('califLectLit').addEventListener('click',function(){
    calcSeparatedActScore('tdpadre','input',corAns.lecturaLiteral,'notaLectLit',2.5);
    sumPartQuestMix(idInputs.notaSumativaParcial[0],idInputs.classNotasSumar[0]);
});
document.getElementById('bt_comprobar').addEventListener('click',()=>{
    sumTotalMixedQuest('notaAbiertaAccordion','txtNota');
});
