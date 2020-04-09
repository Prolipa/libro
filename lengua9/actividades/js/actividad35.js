var titulos = 'aplico';

var loadTxt = {
    comOral3 : ['La presencia de los expositores.','El diálogo.','El moderador.','Que el tema sea polémico.'],
    comOral4 : ['El gusto de las personas.','Las necesidades de la audiencia.','La preparación del moderador.','El espacio donde se lo realiza.'],
    lect5    : ['1 A, 2 B, 3 C, 4 D','1 B, 2 D, 3 A, 4 C','1 C, 2 A, 3 D, 4 B','1 D, 2 C, 3 B, 4 A'],
    lect6    : ['Es un párrafo expositivo porque muestra lo que el sabio hizo para encontrar a su burro.','Es un párrafo argumentativo porque evidencia que el burro era inteligente como su amo.','Es un párrafo narrativo porque cuenta lo que le pasó al amo y a su burro.','Es un párrafo descriptivo porque describe lo que el sabio hizo en la ciudad.'],
    escrib7  : ['De las partes que tiene un calamar.','De cómo se pescan a los calamares.','De cómo se ocultan los calamares.','De cómo se protegen los calamares.'],
    lectComb10: ['pictograma con otro pictograma.','pictograma con un ideograma.','ideograma con un pictograma.','ideograma con otro ideograma.'],
    lectComb11: ['1,3,4,2','2,4,1,3','3,1,2,4','4,2,3,1']
};

var corAns = {
    comOral : ['El diálogo.','Las necesidades de la audiencia.'],
    lect : ['1 C, 2 A, 3 D, 4 B','Es un párrafo narrativo porque cuenta lo que le pasó al amo y a su burro.'],
    escrib7 : ['De cómo se pescan a los calamares.'],
    leycult: ['ideograma con otro ideograma.','2,4,1,3']
};


// #region ValidarNumeroIngresoNotas
document.getElementById('nt1').addEventListener('keyup',()=>{
    validMaxIngreso(document.getElementById('nt1'),parseFloat('4'));
});
document.getElementById('nt2').addEventListener('keyup',()=>{
    validMaxIngreso(document.getElementById('nt2'),2);
});
document.getElementById('nt3').addEventListener('keyup',()=>{
    validMaxIngreso(document.getElementById('nt3'),parseFloat('1.5'));
});

document.getElementById('nt4').addEventListener('keyup',()=>{
    validMaxIngreso(document.getElementById('nt4'),3);
});

document.getElementById('nt5').addEventListener('keyup',()=>{
    validMaxIngreso(document.getElementById('nt5'),2);
});
document.getElementById('nes8').addEventListener('keyup',()=>{
    validMaxIngreso(document.getElementById('nes8'),1.5);
});

document.getElementById('nt1').addEventListener('keypress',()=>{
    validNumero(0,9);
});
document.getElementById('nt2').addEventListener('keypress',()=>{
    validNumero(0,9);
});
document.getElementById('nt3').addEventListener('keypress',()=>{
    validNumero(0,9);
});

document.getElementById('nt4').addEventListener('keypress',()=>{
    validNumero(0,9);
});

document.getElementById('nt5').addEventListener('keypress',()=>{
    validNumero(0,9);
});
document.getElementById('nes8').addEventListener('keypress',()=>{
    validNumero(0,9,1);
});
// #endregion
// #region InitElementos
initElementosImg('.tqco3 p','span',loadTxt.comOral3,1);
initElementosImg('.tqco4 p','span',loadTxt.comOral4,1);
initElementosImg('.contlect>div>div','span',loadTxt.lect5,1);
initElementosImg('.conlect6 p','span',loadTxt.lect6,1);
initElementosImg('.conescrib7 p','span',loadTxt.escrib7,1);
initElementosImg('.lc10 p','span',loadTxt.lectComb10,1);
initElementosImg('.lc11 p','span',loadTxt.lectComb11,1);
// #endregion

Array.from(document.querySelectorAll('.tqco3 p')).forEach(elemento =>{
    elemento.addEventListener('click',function(){
        selectDselectSelItems(elemento);
    }); 
});
Array.from(document.querySelectorAll('.contlect>div>div')).forEach(elemento => {
    elemento.addEventListener('click',()=>{
        selectDselectSelItems(elemento);
    });
});
Array.from(document.querySelectorAll('.tqco4 p')).forEach(elemento =>{
    elemento.addEventListener('click',function(){
        selectDselectSelItems(elemento);
    }); 
});
Array.from(document.querySelectorAll('.conlect6 p')).forEach(elemento =>{
    elemento.addEventListener('click',function(){
        selectDselectSelItems(elemento);
    }); 
});
Array.from(document.querySelectorAll('.conescrib7 p')).forEach(elemento =>{
    elemento.addEventListener('click',function(){
        selectDselectSelItems(elemento);
    }); 
});
Array.from(document.querySelectorAll('.lc10 p')).forEach(elemento =>{
    elemento.addEventListener('click',function(){
        selectDselectSelItems(elemento);
    }); 
});
Array.from(document.querySelectorAll('.lc11 p')).forEach(elemento =>{
    elemento.addEventListener('click',function(){
        selectDselectSelItems(elemento);
    }); 
});
document.getElementById('btnCalifComunicOral').addEventListener('click',()=>{
    calcSeparatedActScoreSelectionRf('.tqco3 .seleccionCaja span,.tqco4 .seleccionCaja span',corAns.comOral,'nt2',1,0);
}); 
document.getElementById('btnCalifLectura').addEventListener('click',()=>{
    calcSeparatedActScoreSelectionRf('.contlect .seleccionCaja span,.conlect6 .seleccionCaja span',corAns.lect,'nt3',2,0);
});
document.getElementById('btnCalifEscrit7').addEventListener('click',()=>{
    calcSeparatedActScoreSelectionRf('.conescrib7 .seleccionCaja span',corAns.escrib7,'nes7',0.5,0);
});
document.getElementById('nes8').addEventListener('blur',()=>{
    sumPartQuestMix('nt4','ne');
});
document.getElementById('btnCaliflectcom').addEventListener('click',()=>{
    calcSeparatedActScoreSelectionRf('.lc10 .seleccionCaja span,.lc11 .seleccionCaja span',corAns.leycult,'nt5',1,0);
});
document.getElementById('bt_comprobar').addEventListener('click',function(){
    sumTotalMixedQuest('sumna','txtNota');
});