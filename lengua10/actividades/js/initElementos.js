
function initElementosTable(contenedor,arrayElement,theadelements){
    var contenedores = document.getElementById(contenedor);
    var createTable = document.createElement('table');
    var createTrow = document.createElement('tr');
    theadelements.forEach(function(currelement){
        var createThead = document.createElement('thead');
        var createNodoTh = document.createTextNode(currelement);
        
        createThead.appendChild(createNodoTh);
        createTable.appendChild(createThead);
    });
    contenedores.appendChild(createTable);
}
function genIdRandom(){
    var d = new Date();
    var a = d.getSeconds();
    var b = d.getMilliseconds();
    var random = Math.random();
    var randomFixed = (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(4);
    var randomFixed2 = (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(2);
    return ((a*b*random*randomFixed)/randomFixed2).toFixed(2)
}
function initElementos(selector,newNodeElementType,valuesToLoad,isRandom,cssClasses=[],inputTypeElement){ //inputTypeElement text,button,number,etc
    var containers = document.querySelectorAll(selector);
    if(isRandom){
        valuesToLoad.sort(f_randomico);
    }
    Array.from(containers).forEach((element,index) =>{
        var createNewNodeElement = document.createElement(newNodeElementType);
        createNewNodeElement.id = newNodeElementType+genIdRandom();
        if(newNodeElementType=='img'){
            createNewNodeElement.src = valuesToLoad[index];
        }
        if(newNodeElementType=='input'){
            createNewNodeElement.setAttribute('type', inputTypeElement);
        }
        if(newNodeElementType=='span'){
            var newTextNode = document.createTextNode(valuesToLoad[index]);
            createNewNodeElement.appendChild(newTextNode);
        }
        cssClasses.forEach(currentClass =>{
            createNewNodeElement.classList.add(currentClass);
        });
        element.appendChild(createNewNodeElement);
    });
}
function initMathRandomFractions(selector,numDesde,numHasta){
    var containers = document.querySelectorAll(selector);
    var newNodeElementType = 'span';
    var randomNum = function() {return (Math.floor(Math.random() * numHasta) + numDesde);};
    Array.from(containers).forEach((element) =>{
        var createNodeNumerator = document.createElement(newNodeElementType);
        var createNodeDenominator = document.createElement(newNodeElementType);
        var fracLine = document.createElement('br');
        createNodeNumerator.id = newNodeElementType+genIdRandom();
        createNodeDenominator.id = newNodeElementType+genIdRandom();
        if(newNodeElementType=='span'){
            var newTextNodeNum = document.createTextNode(randomNum());
            var newTextNodeDen = document.createTextNode(randomNum());
            createNodeNumerator.appendChild(newTextNodeNum);
            createNodeDenominator.appendChild(newTextNodeDen);
            createNodeNumerator.classList.add('fracLineButtonNum');
        }
        element.classList.add('alignFraction');
        element.appendChild(createNodeNumerator);
        element.appendChild(fracLine);
        element.appendChild(createNodeDenominator);
    });
}
function initMathRandomFractionsEq(selectorInsertEqFrac,SelectorTakeValues,numDesde,numHasta){
    var containersInsertEqFrac = document.querySelectorAll(selectorInsertEqFrac);
    var containersTakeValues = document.querySelectorAll(SelectorTakeValues);
    var newNodeElementType = 'span';
    var randomNum = Math.floor(Math.random() * numHasta) + numDesde;
    
    Array.from(containersInsertEqFrac).forEach((element,index) =>{
        var createNodeNumerator = document.createElement(newNodeElementType);
        var createNodeDenominator = document.createElement(newNodeElementType);
        var fracLine = document.createElement('br');
        
        createNodeNumerator.id = newNodeElementType+genIdRandom();
        createNodeDenominator.id = newNodeElementType+genIdRandom();
        if(newNodeElementType=='span'){
            var tomar_valores = containersTakeValues[index];
            var numNumerator = tomar_valores.querySelectorAll('span')[0].textContent;
            var numDenominator = tomar_valores.querySelectorAll('span')[1].textContent;
            var newTextNodeNum = document.createTextNode(numNumerator*randomNum);
            var newTextNodeDen = document.createTextNode(numDenominator*randomNum);
            createNodeNumerator.appendChild(newTextNodeNum);
            createNodeDenominator.appendChild(newTextNodeDen);
            createNodeNumerator.classList.add('fracLineButtonNum');
        }
        element.classList.add('alignFraction');
        element.appendChild(createNodeNumerator);
        element.appendChild(fracLine);
        element.appendChild(createNodeDenominator);
    });
}
var arrayDecimals=[];
function initRandomRationalDecimalNumbers(selector,numDesde,numHasta,fixNumber,requireDivision){
    var containers = document.querySelectorAll(selector);
    var newNodeElementType = 'span';
    var num1Num = function() {return (Math.floor(Math.random() * numHasta) + numDesde)};
    var num2Den = function() {return (Math.floor(Math.random() * numHasta) + numDesde)};  
    var division;
    
    Array.from(containers).forEach((element) =>{
        var createNodeDecimal = document.createElement(newNodeElementType);
        createNodeDecimal.id = newNodeElementType+genIdRandom();
        if(newNodeElementType=='span'){
            var n1 = num1Num();
            var n2 = num2Den();
            division = n1/n2;
            
            var mode = n1%n2;
            if(mode != 0){
                var newTextNodeNum = document.createTextNode((division).toFixed(fixNumber));
            }else{
                var newTextNodeNum = document.createTextNode((division));
            }
            createNodeDecimal.appendChild(newTextNodeNum);
        }
        var decimalLenght = function(){
            var spltedDecimal = division.toString().split('.');
            return spltedDecimal[1].length;
        }
        if(mode != 0 && decimalLenght() > 2){
            createNodeDecimal.classList.add('periodDecimalIndicator');       
        }
        element.appendChild(createNodeDecimal);
        if(requireDivision){
            arrayDecimals.push(division);
        }
        
    });
    if(requireDivision){
        
        return arrayDecimals;
    }
}
function initMathfractionGeneratriz(selectorInsertEqFrac,arrayDecimals=[]){
    var sortedArrayDecimals = arrayDecimals.sort(f_randomico);
    var containersInsertEqFrac = document.querySelectorAll(selectorInsertEqFrac);
    var newNodeElementType = 'span';
    Array.from(containersInsertEqFrac).forEach((element,index) =>{
        var createNodefraccionGen = document.createElement(newNodeElementType);
        createNodefraccionGen.id = newNodeElementType+genIdRandom();
        if(newNodeElementType=='span'){
            var tomar_valores = sortedArrayDecimals[index];
            var newFraction = new Fraction(tomar_valores);
            var fracResult = newFraction.toFraction(true); 
            var createTextNodefraccionGen = document.createTextNode(fracResult);
            createNodefraccionGen.appendChild(createTextNodefraccionGen);
        }
        element.appendChild(createNodefraccionGen);
    });
}
