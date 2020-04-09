var titulos = 'aplico';
numero_pagina(33);
var loadValues = {
        act3: ['Los autos circulan por donde hay más tráfico.','La casa que tiene un mural en la pared es ahora un museo.'],
        act4: ['La fiesta a la que asistí el sábado resultó estupenda.','La manera con la que te ha mirado no me ha parecido correcta.','Los padres cuyos hijos no se han quedado a supletorios están muy satisfechos.']
    };
    
    
corAns = {
    act1: ['La nueva casa, cuya arquitecta logró terminarla a tiempo, está de venta.','Los profesores, cuyos alumnos aprobaron, estaban muy satisfechos.'],
    act3: ['que tiene un mural en la pared'],
    act4_1:['a la que asistí el sábado','con la que te ha mirado','cuyos hijos no se han quedado a supletorios']
};


loadValues.act3.sort(f_randomico);
Array.from(document.getElementsByClassName('sptxt')).forEach((elemento,index)=>{
    elemento.textContent = loadValues.act3[index];
});
loadValues.act4.sort(f_randomico);
Array.from(document.getElementsByClassName('sptxt4')).forEach((elemento,index)=>{
    elemento.textContent = loadValues.act4[index];
});
Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento =>{
    elemento.addEventListener('keypress',()=>{
        validNumero(0,9);
        
    });
    elemento.addEventListener('keyup',()=>{
        validMaxIngreso(elemento,2);
    });
}));
Array.from(document.getElementsByClassName('sptxt')).forEach(elemento =>{
    elemento.addEventListener('mouseup',()=>{
        if(event.detail > 1){
            window.getSelection().removeAllRanges();
        }
        underlinetext(elemento);
    });
});
Array.from(document.getElementsByClassName('sptxt4')).forEach(elemento =>{
    elemento.addEventListener('mouseup',()=>{
        if(event.detail > 1){
            window.getSelection().removeAllRanges();
        }
        underlinetext(elemento);
    });
});
document.getElementById('califAct1').addEventListener('click',function(){
    var oracion = document.getElementById('oracion1').value;
    var nexo = document.getElementById('oracion2').value;
    var contCorAns = 0;
    if(oracion == corAns.act1[0]){
        contCorAns = contCorAns+1;
    }
    if(nexo == corAns.act1[1]){
        contCorAns = contCorAns+1;
    }

    document.getElementById('nota1').value = ((2*contCorAns)/2).toFixed(2);
    document.getElementById('califAct1').disabled = true;
});
document.getElementById('califAct3').addEventListener('click',()=>{
    calcSeparatedActScoreSelection('gentxt','span',corAns.act3,'notact3',2,0);
});
document.getElementById('califAct4.1').addEventListener('click',()=>{
    calcSeparatedActScoreSelection('gentxt4','span',corAns.act4_1,'notact4.1',1,1);
});
var valorValidMaxIngreso;
document.getElementById('na41').addEventListener('keyup',()=>{
    valorValidMaxIngreso = validMaxIngreso(document.getElementById('na41'),1);
});
document.getElementById('na41').addEventListener('blur',()=>{
    if(valorValidMaxIngreso == 0){
        sumPartQuestMix('notact4','notsump');
    }
});
document.getElementById('bt_comprobar').addEventListener('click',()=>{
    sumTotalMixedQuest('notsum','txtNota');
});