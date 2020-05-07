var titulos = 'aplico';
numero_pagina(31);
var loadValues = {
    pictures : [
        'img/lgavilanesTest.jpg',
        'img/lgavilanesTest.jpg'
        ],
    text : {
        0 : ['campanas','tumbado','comprar','tiempo','hombre','limpieza','alambre','cumbre','simple','cambio']
    },
    clases : ['cajas','col-md-1','estiloP','texto'],
    thead : ['mp','mb']
}
var contenedores = {
    contenedorDraggable : {
        0 : 'contenedor1'
    },
    contenedorDroppable : {
        0 : 'tdmp1',
        1 : 'tdmb1',
        2 : 'tdmp2',
        3 : 'tdmb2',
        4 : 'tdmp3',
        5 : 'tdmb3',
        6 : 'tdmp4',
        7 : 'tdmb4',
        8 : 'tdmp5',
        9 : 'tdmb5'
    }
    
    
}

var respuestasCorrectas={
    mp: ['campanas','comprar','tiempo','limpieza','simple']
        ,
    mb: ['cumbre','cambio','hombre','alambre','tumbado']
        
}
var respuestasIncorrectasSelected =[],respuestasCorrectasSelected=[];

initElementos(contenedores.contenedorDraggable["0"],loadValues.text["0"],1,1,loadValues.clases);
document.getElementById('bt_comprobar').addEventListener('click',function(){
    calcularNota();
});

Object.values(contenedores.contenedorDraggable).forEach(function(index){
    insertDraggableDnD(index);
});

function dragLeave(id2){
    document.getElementById(id2).classList.remove('colorDivDragOvered');
}
function dragOver(id2){
    document.getElementById(id2).classList.add('colorDivDragOvered');
}

function calcularNota(){
    if(hasRespNoSelected()){
        alert('DEBE ESCRIBIR TODAS LAS LETRAS EN LOS CASILLEROS CORRESPONDIENTES');
    }else{
        var tdmb = document.getElementsByName('mb');
        var tdmp = document.getElementsByName('mp');
        
        
        var notaSobre = 10;
        var respCormb = validarRespuestasCorrectasSelItem(respuestasCorrectas.mb ,tdmb);
        var respCormp = validarRespuestasCorrectasSelItem(respuestasCorrectas.mp ,tdmp);
        var calculo = respCormb + respCormp;
        document.getElementById('txtNota').innerHTML = calculo.toFixed(2);
        pintarRespuestasEquivocadas();
        pintarRespuestasCorrectas();
        document.getElementById('bt_comprobar').disabled = true;
    }
    
}
var respu=0;
function validarRespuestasCorrectasSelItem(respuestasCorrectas,respuestasSeleccionadas){
    
    var numRespCorrectas=0;
    respuestasSeleccionadas.forEach( function(element) {
        if(JSON.stringify(respuestasCorrectas).indexOf(element.textContent)>= 0){
            respu = respu+1;
            numRespCorrectas = numRespCorrectas+1;
            respuestasCorrectasSelected.push(element.id);
        }else{
            respuestasIncorrectasSelected.push(element.id);
        }
    });
    return numRespCorrectas;
}
function pintarRespuestasEquivocadas(){
    respuestasIncorrectasSelected.forEach(function(element){
        document.getElementById(element).style.background='red';
    });
}
function pintarRespuestasCorrectas(){
    respuestasCorrectasSelected.forEach(function(element){
        document.getElementById(element).style.background='green';
    });
}
var result,cont,respNoSelected=[];
function hasRespNoSelected(){
    cont =0;
    var tdmb = document.getElementsByName('mb');
    var tdmp = document.getElementsByName('mp');
    //inputElements.forEach(function(element){
    //    document.getElementById(element.id).classList.remove('parpadea');
        
    //});
    tdmb.forEach(function(element){
        if(element.textContent == ""){
            cont = cont+1;
            respNoSelected.push(element.id);
        }
    });
    tdmp.forEach(function(element){
        if(element.textContent == ""){
            cont = cont+1;
            respNoSelected.push(element.id);
        }
    });
    if(cont!=0){
        result = true;
    }else{
        result = false;
    }
    respNoSelected.forEach(function(element){
        document.getElementById(element).classList.add('parpadea');
        
    });
    return result;
}

