function dropParentNode(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.parentNode.appendChild(document.getElementById(data));
    return document.getElementById(data);

}

function dropReplace(ev) {
    ev.preventDefault();
    obtenerNodoyParent(ev.target,ev.target.parentNode);
    var data = ev.dataTransfer.getData("text");
    ev.target.parentNode.replaceChild(document.getElementById(data),ev.target);
    return document.getElementById(data);

}

function obtenerNodoyParent(nodo,parent){
    if(parent.id == 'caja_txt1'){
        nodosImg.img1[0] = nodo;
        nodosImg.img1[1] = parent;
    }else if(parent.id == 'caja_txt2'){
        nodosImg.img2[0] = nodo;
        nodosImg.img2[1] = parent;
    }else if(parent.id == 'caja_txt3'){
        nodosImg.img3[0] = nodo;
        nodosImg.img3[1] = parent;
    }else if(parent.id == 'caja_txt4'){
        nodosImg.img4[0] = nodo;
        nodosImg.img4[1] = parent;
    }else if(parent.id == 'caja_txt5'){
        nodosImg.img5[0] = nodo;
        nodosImg.img5[1] = parent;
    }else if(parent.id == 'caja_txt6'){
        nodosImg.img6[0] = nodo;
        nodosImg.img6[1] = parent;
    }

}

var testIdAleatorio= []; //variable de prueba para revisar el UID aleatrio
////////REVISAR FUNCIONES DE ARRIBA OPTIMIZAR
//FUNCIONES A PARTIR DE AQUI SON EEMPLAZADAS

var elementoContenedor = function(contenedorPadre){
    return document.getElementById(contenedorPadre);
    },
    elementosHijos = function(contenedorPadre){
    return elementoContenedor(contenedorPadre).childNodes;
    };
var elementDragged,
    contRespDragged = [];
function eventosDnDDrag_ReturnContent(contenedorPadre)
{
    elementosHijos(contenedorPadre).forEach(function(array){
        document.getElementById(array.id).addEventListener('dragstart',function(){
            dragStartDnD(array.id);
        });
        document.getElementById(array.id).addEventListener('drop',function(){
            onDropReturnDnD(array.id);
        });

    });
}
function eventosDnDDropContent(contenedorPadre)
{
    elementosHijos(contenedorPadre).forEach(function(array){
        document.getElementById(array.id).addEventListener('drop',function(){
            onDropDnD(elementDragged);
        });
        document.getElementById(array.id).addEventListener('dragover',function(){
            dragOver(array.id);
        });
        document.getElementById(array.id).addEventListener('dragleave',function(){
            dragLeave(array.id);
        });
    });
}
function calcularNotaGeneralDnD(contenedorDragged,respuestasCorrectas,totalNota){
    document.getElementById('bt_comprobar').addEventListener('click',function(){
        var draggedVacios =0;
        contenedorDragged.forEach(function(currentValue){
            document.getElementById(currentValue).childNodes.forEach(function(currentValue){
                if(validarDraggedCompleto(currentValue)){
                    draggedVacios = draggedVacios+1;
                }

            });
        });
        if(draggedVacios==0){
            var notaSobre = 10;
            var calculo = (notaSobre * validarRespuestasDnD(contenedorDragged,respuestasCorrectas) )/ totalNota;
            document.getElementById('txtNota').innerHTML = calculo.toFixed(2);
        }else{
            alert('POR FAVOR COMPLETAR TODAS LAS PREGUNTAS ANTES DE CONTINUAR');
        }

    });
}
function validarRespuestasDnD (contenedorDragged,respuestasCorrectas){
        var arrNodosDiv =[],numRespCorr=0;
        contenedorDragged.forEach(function(array,index){
            arrNodosDiv = document.getElementById(array).childNodes;
            var newArrary=[];
            arrNodosDiv.forEach(function(array){
                newArrary.push(array.childNodes[0].textContent);
            });
            if(JSON.stringify(respuestasCorrectas[index])===JSON.stringify(newArrary)){
                numRespCorr=numRespCorr+1;
            }
        });
    return numRespCorr;
}
function insertDraggableDroppableDnD(contenedorPadre){
    elementosHijos(contenedorPadre).forEach(function(array){
        document.getElementById(array.id).setAttribute("ondrop", "drop(event)");
        document.getElementById(array.id).setAttribute("ondragover", "allowDrop(event)");
        if(document.getElementById(array.id).childNodes.length!=0){
            document.getElementById(array.id).childNodes[0].setAttribute("draggable", "true");
            document.getElementById(array.id).childNodes[0].setAttribute("ondragstart", "drag(event)");
            testIdAleatorio.push(array);
        }
    });
}
function getElementDragged(contenedorPadre){
    elementDragged = document.getElementById(contenedorPadre).childNodes;
    elementDragged.forEach(function(array){
        elementDragged = array.textContent;
    });
    return elementDragged;
}
function dragStartDnD(contenedorPadre){
    getElementDragged(contenedorPadre);
}
function onDropDnD(elementDragged){
    contRespDragged.push(elementDragged);
}
function onDropReturnDnD(contenedorPadre){
    var pos = contRespDragged.indexOf(getElementDragged(contenedorPadre));
    contRespDragged.splice(pos,1);
}
function validarDraggedCompleto(contenedorDragged){
    if(contenedorDragged.childNodes.length != 0){
        return false;
    }else{
        return true;
    }
}

//OPTIMIZACION 2 PROBAR Y BORRAR EL RESTO SI NO ES NECESARIO
function insertAttributeDraggableElements(querySelector){
    var draggableElements = document.querySelectorAll(querySelector);
    Array.from(draggableElements).forEach(elements=>{
        elements.setAttribute("ondrop", "drop(event)");
        elements.setAttribute("ondragover", "allowDrop(event)");
        elements.childNodes.forEach(elementsCN =>{
            elementsCN.setAttribute("draggable", "true");
            elementsCN.setAttribute("ondragstart", "drag(event)");
        });
    });
}
function insertAttributeDroppableElements(querySelector,alignElementsDroppedClass=[]){
    var draggableElements = document.querySelectorAll(querySelector);
    Array.from(draggableElements).forEach(elements=>{
        elements.setAttribute("ondrop", "drop(event)");
        elements.setAttribute("ondragover", "allowDrop(event)");
        Array.from(alignElementsDroppedClass).forEach(classAlElements=>{
            elements.classList.add(classAlElements);
        });
    });
}
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    return document.getElementById(data);
}

function allowDrop2(ev) {
    ev.preventDefault();
}

function drag2(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop2(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}
