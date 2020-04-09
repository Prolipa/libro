var titulos = 'exploro';

var loadValues = [
        ['<p>Estoy molesta con</p><p>los compañeros</p><p>que copian nuestras</p><p>tareas en clase.</p>'],
        ['<p>Me preocupa que</p><p>algunas compañeras se</p><p>burlen de los demás.</p>'],
        ['<p>Los compañeros no</p><p>deben hacer “bullying”.</p>'],
        ['<p>Los varones son</p><p>abusivos porque solo</p><p>ellos quieren utilizar la</p><p>cancha en los recreos.</p>'],
        ['<p>Los baños después</p><p>del recreo quedan</p><p>súper sucios.</p>']
    ];
var corAns = ['copian','preocupa','deben','quieren','quedan'];    

numero_pagina(30);

Array.from(document.getElementsByClassName('span-responsive')).forEach((elemento,index) =>{
    elemento.innerHTML = loadValues[index];
    Array.from(elemento.getElementsByTagName('p')).forEach(elementoP=>{
        var textoSeparado = separateString(elementoP.textContent);
        elementoP.textContent="";
        textoSeparado.forEach((elementoTC)=>{
            var newSpanNode = document.createElement('span');
            newSpanNode.id='span'+genIdRandom();
            var nodoTextoSeparado = document.createTextNode(elementoTC+" ");
            newSpanNode.appendChild(nodoTextoSeparado);
            elementoP.appendChild(newSpanNode);
        });
    });
});

Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(0,9,1);
        
    });
    elemento.addEventListener('keyup',()=>{
        validMaxIngreso(elemento,10);
    });
}));
Array.from(document.querySelectorAll('.span-responsive>p>span')).forEach(elemento => {
    elemento.addEventListener('click',function(){
        selectDselectSelItems(elemento);
        if(event.detail > 1){
            window.getSelection().removeAllRanges();

        }
    }); 
});
/*
document.getElementById('califLectLit').addEventListener('click',()=>{
    calcSeparatedActScoreSelection('contenedorDivVin','span>p>.seleccionCaja',corAns,'inp_resp_cer',5);
});
*/
/*
document.getElementById('bt_comprobar').addEventListener('click',()=>{
    sumTotalMixedQuest('nota-abierta','txtNota');
});*/