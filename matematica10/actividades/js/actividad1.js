var titulos = 'exploro';
numero_pagina(10);


var classInsertarTomar=[];
var numRandAnt =0;
var selectorTomar,selectorInsertar;
var respCor = [],respInCor = [];

// #region Pregunta1
for(i=0; i<2;i++){
    var numRandomico = Math.floor(Math.random() * 4) + 1;
    var letRandomica ;
    if(numRandAnt == numRandomico){
        numRandomico = numRandomico-1;
    }
    selectorInsertar = '.contenedorfrac_'+numRandomico;
    numRandAnt = numRandomico;
    switch(numRandomico){
        case 1:
        selectorTomar = '.contenedorfrac_a';
        break;

        case 2:
        selectorTomar = '.contenedorfrac_b';
        break;

        case 3:
        selectorTomar = '.contenedorfrac_c';
        break;

        case 4:
        selectorTomar = '.contenedorfrac_d';
        break;
    }
    classInsertarTomar.push([selectorInsertar,selectorTomar]);
}
initMathRandomFractions('.contenedorfrac',1,100);
initMathRandomFractions('.cf',1,100);
classInsertarTomar.forEach(elemento =>{
    var parentNode = Array.from(document.querySelectorAll(elemento[0]));
    var parentChild = Array.from(parentNode[0].children);
    parentChild.forEach((elementPN,indexPN) =>{
        parentNode[0].removeChild(elementPN);
    });
    
    initMathRandomFractionsEq(elemento[0],elemento[1],1,5);
});
Array.from(document.getElementsByClassName('styleCont')).forEach(elemento =>{
    elemento.addEventListener('click',function(){
        selectDselectSelItems(elemento,2);
    });
    
});
function CalcP1(){
    return calcEqFunctions('.seleccionCaja .contenedorfrac','.seleccionCaja .cf',2,1,false);
}
// #endregion
// #region Pregunta2
initRandomRationalDecimalNumbers('.decimalEntero',1,5,2);

function CalcP2(){
    return (1 * getVvaluesRationalInt())/8;
    
}
function getVvaluesRationalInt(){
    var numContent = document.querySelectorAll('.divIntContAct2 div span'); 
    var ansContent = document.querySelectorAll('.divIntContAct2 select');
    respCor = [],respInCor = [];

    Array.from(numContent).forEach((element,index) =>{
        var decimalNumber = element.textContent;
        var select = ansContent[index];
        var selection = select.selectedIndex;

        if(parseFloat(decimalNumber) % 1 == 0 && selection == 3){
            respCor.push(select.id);
        }else if(parseFloat(decimalNumber) % 1 != 0 && selection == 2){
            respCor.push(select.id);
        }else{
            respInCor.push(select.id);
        }
    });
    return respCor.length;
}

// #endregion Pregunta2
// #region Pregunta3
var classes = {
    preg2DnD : ['dndAligned']
};
var array = initRandomRationalDecimalNumbers('.divdec',1,20,2,true);
initMathfractionGeneratriz('.divfrac',array);
insertAttributeDraggableElements('.divdec');
insertAttributeDroppableElements('.divfrac',classes.preg2DnD);
function CalcP3(){
    respCor = [],respInCor = [];
    return (1 * getRespuestas())/5;
}
var numDec;
function getRespuestas(){
    var selection = document.getElementsByClassName('dndAligned');
    
    Array.from(selection).forEach((elemento) =>{
        var convertionToDecimal = new Fraction(elemento.children[0].textContent);
        var selectNumDec = elemento.children[1];
        
        if(selectNumDec == undefined){
            numDec = 0;
        }else{
            numDec = selectNumDec;
        }
        if(numDec!=0){
            if(selectNumDec.textContent % 1 == 0){
                var decimalConvert = parseInt(selectNumDec.textContent).toFixed(2);
            }else{
                var decimalConvert = selectNumDec.textContent;
            }
            if(parseFloat(convertionToDecimal.valueOf()).toFixed(2) == decimalConvert){
                respCor.push(elemento.id);
            }else{
                respInCor.push(elemento.id);
            }
        }else{
            respInCor.push(elemento.id);
        }
        
    });
    return respCor.length;
}
// #endregion
// #region Pregunta4
    var respuestasCorrectasP4 = ['infinito','exacto','0,323232'];
    Array.from(document.getElementsByClassName('seleccionarp4')).forEach(elemento =>{
        elemento.addEventListener('click',function(){
        selectDselectSelItems2(elemento,3);
       });
    });  
    function CalcP4(){
        return calcSeparatedActScoreSelectionRf('.seleccionarp4.seleccionCaja2',respuestasCorrectasP4,'txtNota',1,false,false);
    }
// #endregion
// #region Pregunta5
    var calculop5;
    function CalcP5(){
        var NumeradorPregA = document.querySelectorAll('.pregaA>.inputNumeradorp5')
        var DenominadorPregA = document.querySelectorAll('.pregaA>.inputDenominadorp5')
        var NumeradorPregB = document.querySelectorAll('.pregaB>.inputNumeradorp5')
        var DenominadorPregB = document.querySelectorAll('.pregaB>.inputDenominadorp5')
        var comparativa = document.querySelectorAll('.simbComp input');
        var cont_cor=0;
        
        if(NumeradorPregA[0].value == '21' && DenominadorPregA[0].value == '13'){
            cont_cor = cont_cor+1;
        }
        if(NumeradorPregB[0].value == '21' && DenominadorPregB[0].value == '13'){
            cont_cor = cont_cor+1;
        }
        if(comparativa[0].value == '='){
            cont_cor = cont_cor+1;
        }

        calculop5 = (cont_cor*1)/3;

        return calculop5;

    }
// #endregion
// #region Pregunta6
document.getElementById('resp6').addEventListener('keypress',()=>{
        validNumero(0,9,1);
        
    });
document.getElementById('resp6').addEventListener('keyup',()=>{
        validMaxIngreso(document.getElementById('resp6'),1);
    });

// #endregion
// #region Pregunta7
var numerosRandomicos = {
    1: Math.floor(Math.random() * 4) + 1,
    2: Math.floor(Math.random() * 16) + 1,
    3: Math.floor(Math.random() * 3) + 1,
    4: Math.floor(Math.random() * 36) + 1,
    5: Math.floor(Math.random() * 2) + 1,
    6: Math.floor(Math.random() * 8) + 1,
    7: Math.floor(Math.random() * 33) + 1,
    8: Math.floor(Math.random() * 2) + 0,
    9: Math.floor(Math.random() * 2) + 1,
    10: Math.floor(Math.random() * 3) + 1,
    11: Math.floor(Math.random() * 4) + 1,
    12: Math.floor(Math.random() * 8) + 1,
    13: Math.floor(Math.random() * 4) + -2
};
var mathFieldSpan = document.getElementById('math-field');
var latexSpan = document.getElementById('latex');
var str = String.fromCharCode(247).toString();

var p7Num = document.getElementsByClassName('p7Num');
var p7Den = document.getElementsByClassName('p7Den');

mathFieldSpan.textContent = '\\frac{\\left(\\frac{'+numerosRandomicos[1]+'}{'+numerosRandomicos[2]+'}\\right)^'+numerosRandomicos[3]+'\\cdot\\left('+numerosRandomicos[4]+'\\right)^'+numerosRandomicos[5]+'\\cdot\\left(\\frac{'+numerosRandomicos[6]+'}{'+numerosRandomicos[7]+'}\\right)^'+numerosRandomicos[8]+'}{'+numerosRandomicos[9]+'^'+numerosRandomicos[10]+'\\'+str+'\\left(\\frac{'+numerosRandomicos[11]+'}{'+numerosRandomicos[12]+'}\\right)^{'+numerosRandomicos[13]+'}}';


var MQ = MathQuill.getInterface(2); // for backcompat
var mathField = MQ.MathField(mathFieldSpan, {
  spaceBehavesLikeTab: true, // configurable
  handlers: {
    edit: function() { // useful event handlers
      latexSpan.textContent = mathField.latex(); // simple API
    }
  }
});

var enDisInput = calculoAritP7();
if(enDisInput.d == 1){
    p7Den[0].hidden = true;
}


function CalcP7(){
    return calculoNotaP7(enDisInput);
}
function calculoNotaP7(calcFrac){
    if(calcFrac.d==1){
        if(p7Num[0].value == calcFrac.n){
            return 1;
        }else{
            return 0;
        }    
    }else{
        if(p7Num[0].value == calcFrac.n && p7Den[0].value == calcFrac.d){
            return 1;
        }else{
            return 0;
        }
    }
}
function calculoAritP7(){
    var genTerminosFrac = (n1,n2,n3) => {return Math.pow(numerosRandomicos[n1]/numerosRandomicos[n2],numerosRandomicos[n3])};
    var genTerminosEnt = (n1,n2) => {return Math.pow(numerosRandomicos[n1],numerosRandomicos[n2])};
    
    var terminos = {
        1 : genTerminosFrac(1,2,3),
        2 : genTerminosEnt(4,5),
        3 : genTerminosFrac(6,7,8),
        4 : genTerminosEnt(9,10),
        5 : genTerminosFrac(11,12,13)
    }
    var calc = (terminos[1]*terminos[2]*terminos[3])/(terminos[4]/terminos[5]);
    var calcFrac = new Fraction(calc);
    return calcFrac;
}
// #endregion
// #region Pregunta8
var valuesLoadP8 = [
    'Dos triángulos son congruentes si poseen sus tres lados congruentes.',
    'Dos triángulos son congruentes si poseen sus tres ángulos congruentes.',
    'Dos triángulos rectángulos son semejantes si poseen un ángulo agudo congruente.',
    'Dos triángulos rectángulos son congruentes si poseen un ángulo agudo y el lado entre los dos ángulos congruentes.'];
var loadClassesP8 = ['col-md-4'];
var corAnsP9 = [
    ['Dos triángulos son congruentes si poseen sus tres lados congruentes.','V'],
    ['Dos triángulos son congruentes si poseen sus tres ángulos congruentes.','F'],
    ['Dos triángulos rectángulos son semejantes si poseen un ángulo agudo congruente.','V'],
    ['Dos triángulos rectángulos son congruentes si poseen un ángulo agudo y el lado entre los dos ángulos congruentes.','V']
];
initElementos('.p8vf','span',valuesLoadP8,true,loadClassesP8);
function CalcP8(){
    return calcSeparatedActScoreVF('.radiobutton',corAnsP9,'txtNota',1,false);
}
// #endregion
// #region Pregunta9
    var elemLarg = document.getElementById('divVinLarg');
    var elemAnch = document.getElementById('divVinAnch');
    var elemLargPar = document.getElementById('largPar');
    var elemAnchPar = document.getElementById('ancgPar');
    var numero =  Math.floor(Math.random() * 70) + 10;
    var numeroAu = numero+10;
    elemLarg.innerText= numeroAu+' m';
    elemAnch.innerText= numero+' m';
    elemLargPar.innerText= numeroAu;
    elemAnchPar.innerText= numero;

    function CalcP9(){
        var calculoArea = areas('triangulo',numero,numeroAu);
        var calculoPerimetros = perimetros('triangulo',numero,numeroAu,false);
        var valArea = document.getElementById('inpA');
        var valDiag = document.getElementById('inpD');
        var varPer = document.getElementById('inpP');
        var ContCor = 0;
        if(Math.trunc(valArea.value) == Math.trunc(calculoArea)){
            ContCor = ContCor+1;
        }
        if(Math.trunc(valDiag.value) == Math.trunc(calculoPerimetros[1])){
            ContCor = ContCor+1;
        }
        if(Math.trunc(varPer.value) == Math.trunc(calculoPerimetros[0])){
            ContCor = ContCor+1;
        }
        var scroreP9 = (ContCor*1)/3;
        return scroreP9;

    }

// #endregion
// #region Pregunta10
function CalcP10(){
    var inputA1 = document.getElementById('inpA1'); 
    var inputA2 = document.getElementById('inpA2');
    var inputA3 = document.getElementById('inpA3');
    var inputAT = document.getElementById('inpAT');
    var ContCor =0;
    if(inputA1.value == 1.5){
        ContCor = ContCor+1;
    }
    if(inputA2.value == 6){
        ContCor = ContCor+1;
    }
    if(inputA3.value == 12){
        ContCor = ContCor+1;
    }
    if(inputAT.value == 19.5){
        ContCor = ContCor+1;
    }
    var scroreP10 = (ContCor*1)/4;
    return scroreP10;
}
// #endregion
// #region Pregunta11
document.getElementById('resp11').addEventListener('keypress',()=>{
    validNumero(0,9,1);
    
});
document.getElementById('resp11').addEventListener('keyup',()=>{
    validMaxIngreso(document.getElementById('resp11'),1);
});

// #endregion
// #region CalculoTotalNotas
document.getElementById('bt_comprobar').addEventListener('click',function(){
    var Rp1 = CalcP1();
    var Rp2 = CalcP2();
    var Rp3 = CalcP3();
    var Rp4 = CalcP4();
    var Rp5 = CalcP5();
    var Rp6 = document.getElementById('resp6').value;
    if(Rp6 == ''){
        Rp6 =0;
    }
    var Rp7 = CalcP7();
    var Rp8 = CalcP8();
    var Rp9 = CalcP9();
    var Rp10= CalcP10();
    var Rp11= document.getElementById('resp11').value;
    if(Rp11 == ''){
        Rp11 =0;
    }
    var total = parseInt(Rp1)+parseInt(Rp2)+parseInt(Rp3)+parseInt(Rp4)+parseInt(Rp5)+parseInt(Rp6)+parseInt(Rp7)+parseInt(Rp8)+parseInt(Rp9)+parseInt(Rp10)+parseInt(Rp11);
    showAnswer('txtNota',total)
});
//#endregion