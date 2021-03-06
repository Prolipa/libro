var ansAns      = [],ansAnsSel      = [],ansAnsLinkActivity=[],
    ansAnsCor   = [],ansAnsCorSel   = [],ansAnsCorLinkActivity=[],
    ansAnsIncor = [],ansAnsIncorSel = [],ansAnsIncorLinkActivity=[];

var rateButtonActions = ()=>{
    document.getElementById(event.target.id).disabled = true;
    };
var idImputShowAns;

function calcSeparatedActScoreSelection(classNameContenedorRespSelected,lastChildNodeType,corAns,idImputShowAns,totalTestPoints,snCormenIncor){
    ansAnsSel=[],ansAnsCorSel=[],ansAnsIncorSel=[];
    var maxCorAns=corAns.length;
    var conAnsScore = getNodesElementsSelection(classNameContenedorRespSelected,lastChildNodeType,corAns,snCormenIncor);
    var score = (totalTestPoints * conAnsScore)/maxCorAns;
    if(snCormenIncor==0){
        if(score < 1){
            score = 0;
        }
    }
    showAnswer(idImputShowAns,score);
}
function getNodesElementsSelection(classNameContenedorRespSelected,lastChildNodeType,corAns,snCormenIncor){
    var selectorQuery = '.'+classNameContenedorRespSelected;
    var lastChildNode = document.querySelectorAll(selectorQuery+'>div>'+lastChildNodeType);
    lastChildNode.forEach((element)=>{
        buildParSelection(element.textContent.trim());
    });
    return checkAnsSelection(corAns,ansAnsSel,lastChildNode,snCormenIncor);
}
function buildParSelection(valueAns){
    ansAnsSel.push(valueAns);
}
function checkAnsSelection(corAns,ansAnsSel,nodeList,snCormenIncor){ //snCormenIncor 0 se resta correctas menos incorrectas, 1 solo se toma en cuenta las correctas
    ansAnsSel.forEach((elementAA,indexAA)=>{
        if(JSON.stringify(corAns).indexOf(JSON.stringify(elementAA)) >= 0){
            ansAnsCorSel.push(nodeList[indexAA].id);
        }else{
            ansAnsIncorSel.push(nodeList[indexAA].id);
        }
    });
    if(snCormenIncor == 0){
        return ansAnsCorSel.length -  ansAnsIncor.length;
    }else if(snCormenIncor == 1){
        return ansAnsCorSel.length;
    }
    
}
function calcSeparatedActScore(classNameContenedorRespSelected,lastChildNodeType,corAns,idImputShowAns,totalTestPoints){
    ansAns=[],ansAnsCor=[],ansAnsIncor=[];
    var maxCorAns=corAns.length;
    var conAnsScore = getNodesElements(classNameContenedorRespSelected,lastChildNodeType,corAns);
    var score = (totalTestPoints * conAnsScore)/maxCorAns;
    showAnswer(idImputShowAns,score);
    
}
function getNodesElements(classNameContenedorRespSelected,lastChildNodeType,corAns){
    var selectorQuery = '.'+classNameContenedorRespSelected;
    var lastChildNode = document.querySelectorAll(selectorQuery+'>div>'+lastChildNodeType);
    lastChildNode.forEach((element,index)=>{
        var attributeType = element.getAttribute('type');
        if(element.nodeName == 'INPUT'){
            if(attributeType=='text'){
                buildPar(index,element.value);
            }else if(attributeType == 'radio'){
                if(element.checked){
                    var lastArrayIndex = ansAns.length;
                    buildPar(lastArrayIndex,element.value);
                }
            }
        }else if(element.nodeName == 'SPAN'){
            buildPar(index,element.textContent);
        }else if(element.nodeName == 'SELECT'){
            Array.from(element).forEach(elemento => {
                if(elemento.selected){
                    buildPar(ansAns.length,element.value);
                }
                
            });
                
        }
    });
    return checkAns(corAns,ansAns,lastChildNode);
}
function buildPar(indexAns,valueAns){
    ansAns.push([indexAns,valueAns]);
}
function checkAns(corAns,ansAns,nodeList){
    ansAns.forEach((elementAA,indexAA)=>{
        if(JSON.stringify(corAns).indexOf(JSON.stringify(elementAA)) >= 0){
            ansAnsCor.push(nodeList[indexAA].id);
        }else{
            ansAnsIncor.push(nodeList[indexAA].id);
        }
    });
    return ansAnsCor.length;
}
function showAnswer(idImputShowAns,score){
    var nodeToShow = document.getElementById(idImputShowAns);
    if(nodeToShow.nodeName=='INPUT'){
       nodeToShow.value = score.toFixed(2);
    }else if(nodeToShow.nodeName=='SPAN'){
        nodeToShow.innerHTML = score.toFixed(2);
    } 
    rateButtonActions();
}
function sumPartQuestMix(idNodShowAns,classNodesGetAns){
    var nodeToShow = document.getElementById(idNodShowAns);
    var nodeToGetAns = document.getElementsByClassName(classNodesGetAns);
    nodeToShow.value = 0;
    Array.from(nodeToGetAns).forEach(elemento =>{
        if(elemento.value==""){
            elemento.value=0;
        }
        nodeToShow.value= parseFloat(nodeToShow.value) + parseFloat(elemento.value);
    });
}
function sumTotalMixedQuest(classSumTotalMixedQuest,idImputShowAns){
    var nodesToSum = document.getElementsByClassName(classSumTotalMixedQuest);
    var total=0;
    Array.from(nodesToSum).forEach(elemento=>{
        if(elemento.value==""){
            elemento.value=0;
        }
        total=parseFloat(total)+parseFloat(elemento.value);
    });
    showAnswer(idImputShowAns,total);
}
function calcMixedNotesSameActivitySelectionOther(classNameContenedorRespSelected,className2,lastChildNodeType,last2,corAns1,corAns2,idImputShowAns,totalTestPoints,snCormenIncor){
    ansAns=[],ansAnsCor=[],ansAnsIncor=[];
    var maxCorAns=corAns1.length+corAns2.length;
    var corAnsScoregetNodesElementsSelection = getNodesElements(classNameContenedorRespSelected,lastChildNodeType,corAns1);
    var corAnsScoreUnderline = getNodesElementsSelection(className2,last2,corAns2,snCormenIncor);
    var score = (totalTestPoints * (corAnsScoregetNodesElementsSelection+corAnsScoreUnderline))/maxCorAns;
    showAnswer(idImputShowAns,score);
    
}
function calcLinkActivity(selector,corAns,queryToMarkIncorrect,idImputShowAns,totalTestPoints){
    ansAnsLinkActivity=[],ansAnsCorLinkActivity=[],ansAnsIncorLinkActivity=[];
    var maxCorAns=corAns.length;
    var conAnsScore = getNodesElementsLinkActivity(selector,corAns,queryToMarkIncorrect);
    var score = (totalTestPoints * conAnsScore)/maxCorAns;
    showAnswer(idImputShowAns,score);
    
}
function getNodesElementsLinkActivity(selector,corAns,queryToMarkIncorrect){
    selector.forEach((elementsSelector,indexParent) => {
        var containers = document.querySelectorAll(elementsSelector);
        containers.forEach((elements,indexChild) =>{
            if(elements.nodeName == 'IMG'){
                var elementValue = elements.getAttribute('src');
            }else if(elements.nodeName == 'INPUT'){
                var elementValue = elements.value;
            }
            buildParLinkActivity(elementValue,indexParent,indexChild);
        });
    });
    
    return checkAnsLinkActivity(corAns,ansAnsLinkActivity,queryToMarkIncorrect);
}
function buildParLinkActivity(values,indexParent,indexChildren){
    if(indexParent ==0){
        ansAnsLinkActivity.push([values]);
    }else{
        ansAnsLinkActivity[indexChildren].push(values);
    }
}
function checkAnsLinkActivity(corAns,ansAns,queryToMarkIncorrect){
    var nodeList = document.querySelectorAll(queryToMarkIncorrect);
    ansAns.forEach((elementAA,indexAA)=>{
        if(JSON.stringify(corAns).indexOf(JSON.stringify(elementAA)) >= 0){
            ansAnsCor.push(nodeList[indexAA].id);
        }else{
            ansAnsIncor.push(nodeList[indexAA].id);
        }
    });
    return ansAnsCor.length;
}
//CALIFICAR SELECCION REESTRUCTURADA
function calcSeparatedActScoreSelectionRf(querySelectorSelect,corAns,idImputShowAns,totalTestPoints,snCormenIncor){
    ansAnsSel=[],ansAnsCorSel=[],ansAnsIncorSel=[];
    var maxCorAns=corAns.length;
    var conAnsScore = getNodesElementsSelectionRf(querySelectorSelect,corAns,snCormenIncor);
    var score = (totalTestPoints * conAnsScore)/maxCorAns;
    if(snCormenIncor==0){
        if(score < 0){
            score = 0;
        }
    }
    showAnswer(idImputShowAns,score);
}
function getNodesElementsSelectionRf(querySelectorSelect,corAns,snCormenIncor){
    //var selectorQuery = '.'+classNameContenedorRespSelected;
    var lastChildNode = document.querySelectorAll(querySelectorSelect);
    lastChildNode.forEach((element)=>{
        buildParSelectionRf(element.textContent.trim());
    });
    return checkAnsSelectionRf(corAns,ansAnsSel,lastChildNode,snCormenIncor);
}
function buildParSelectionRf(valueAns){
    ansAnsSel.push(valueAns);
}
function checkAnsSelectionRf(corAns,ansAnsSel,nodeList,snCormenIncor){ //snCormenIncor 0 se resta correctas menos incorrectas, 1 solo se toma en cuenta las correctas
    ansAnsSel.forEach((elementAA,indexAA)=>{
        if(JSON.stringify(corAns).indexOf(JSON.stringify(elementAA)) >= 0){
            ansAnsCorSel.push(nodeList[indexAA].id);
        }else{
            ansAnsIncorSel.push(nodeList[indexAA].id);
        }
    });
    if(snCormenIncor == 0){
        return ansAnsCorSel.length -  ansAnsIncorSel.length;
    }else if(snCormenIncor == 1){
        return ansAnsCorSel.length;
    }
    
}