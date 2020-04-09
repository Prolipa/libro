var titulos = 'aplico';
numero_pagina(31);

var loadValues = [
        ['No puedes salir ya que no has terminado las tareas.'],
        ['Me alegra que todo haya salido bien.'],
        ['Los estudiantes que estaban enfermos no entraron a clase.'],
        ['No tenemos idea de lo que pasará mañana.'],
        ['La niña que te presenté ayer es mi prima.']
    ]
var corAns = {
        respuestasCorrectasSubrayar: [
            ['ya que no has terminado las tareas'],
            ['que todo haya salido bien'],
            ['que estaban enfermos'],
            ['de lo que pasará mañana'],
            ['que te presenté ayer']
        ],
        respuestasCorrectasSeleccionar: [
            [0,'Subordinada adverbial'],
            [1,'Subordinada sustantiva'],
            [2,'Subordinada adjetiva'],
            [3,'Subordinada sustantiva'],
            [4,'Subordinada adjetiva']
        ]
    };
    
;
loadValues.sort(f_randomico);
Array.from(document.getElementsByClassName('divTd')).forEach((elemento,index) => {
    elemento.textContent = loadValues[index];
});
Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(0,9);
        
    });
    elemento.addEventListener('keyup',()=>{
        validMaxIngreso(elemento,10);
    });
}));
Array.from(document.getElementsByClassName('divTd')).forEach(elemento =>{
    elemento.addEventListener('mouseup',()=>{
        if(event.detail > 1){
            window.getSelection().removeAllRanges();
        }
        underlinetext(elemento);
    });
});
document.getElementById('bt_comprobar').addEventListener('click',function(){
    //calcSeparatedActScoreSelection('contTr','span',corAns,'txtNota',10,1);
    calcMixedNotesSameActivitySelectionOther('classSelection','contTr','select','span',corAns.respuestasCorrectasSeleccionar,corAns.respuestasCorrectasSubrayar,'txtNota',10,1);
    
});