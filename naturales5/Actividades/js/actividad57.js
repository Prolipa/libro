var titulos = 'aplico';
numero_pagina(29);
var loadValues = {
    pictures : [
        'img/lgavilanesTest.jpg',
        'img/lgavilanesTest.jpg'
        ],
    text : {
        0 : ['abuelito','mi','felicidades','Muchas','para','Jaime.'],
        1 : ['importante','para','la','Eres','mí.','persona','más'],
        2 : ['queremos','Te','gran','amigo.','un','ser','por'],
        3 : ['especial','este','es','día','muy','Porque','para','ti.']
    },
    clases : ['cajas','col-md-1','estiloP','texto']
}
var contenedores = {
    contenedorDraggable : {
        0 : 'contenedor1',
        1 : 'contenedor2',
        2 : 'contenedor3',
        3 : 'contenedor4',
    },
    contenedorDroppable : {
        0 : 'contblank1',
        1 : 'contblank2',
        2 : 'contblank3',
        3 : 'contblank4' 
    }
    
    
}

var respuestasCorrectas={
    0:  ['Muchas', 'felicidades', 'para', 'mi', 'abuelito', 'Jaime.'],
    1:  ['Eres', 'la', 'persona','más', 'importante', 'para', 'mí.'],
    2:  ['Te', 'queremos', 'por', 'ser', 'un', 'gran', 'amigo.'],
    3:  ['Porque', 'este', 'día', 'es', 'muy', 'especial', 'para', 'ti.']
};

initElementos(contenedores.contenedorDraggable["0"],loadValues.text["0"],1,1,loadValues.clases);
initElementos(contenedores.contenedorDraggable["1"],loadValues.text["1"],1,1,loadValues.clases);
initElementos(contenedores.contenedorDraggable["2"],loadValues.text["2"],1,1,loadValues.clases);
initElementos(contenedores.contenedorDraggable["3"],loadValues.text["3"],1,1,loadValues.clases);

initElementos(contenedores.contenedorDroppable["0"],loadValues.text["0"],0,1,loadValues.clases);
initElementos(contenedores.contenedorDroppable["1"],loadValues.text["1"],0,1,loadValues.clases);
initElementos(contenedores.contenedorDroppable["2"],loadValues.text["2"],0,1,loadValues.clases);
initElementos(contenedores.contenedorDroppable["3"],loadValues.text["3"],0,1,loadValues.clases);

Object.values(contenedores.contenedorDraggable).forEach(function(index){
    insertDraggableDnD(index);
});
Object.values(contenedores.contenedorDroppable).forEach(function(index){
    insertDraggableDnD(index);
});

eventosDnDDrag_ReturnContent(contenedores.contenedorDraggable["0"]); 
eventosDnDDropContent(contenedores.contenedorDroppable["0"]);
eventosDnDDrag_ReturnContent(contenedores.contenedorDraggable["1"]); 
eventosDnDDropContent(contenedores.contenedorDroppable["1"]);
eventosDnDDrag_ReturnContent(contenedores.contenedorDraggable["2"]); 
eventosDnDDropContent(contenedores.contenedorDroppable["2"]);
eventosDnDDrag_ReturnContent(contenedores.contenedorDraggable["3"]); 
eventosDnDDropContent(contenedores.contenedorDroppable["3"]);

calcularNotaGeneralDnD(Object.values(contenedores.contenedorDroppable),Object.values(respuestasCorrectas),Object.values(respuestasCorrectas).length);


function dragLeave(id2){
    document.getElementById(id2).classList.remove('colorDivDragOvered');
}
function dragOver(id2){
    document.getElementById(id2).classList.add('colorDivDragOvered');
}
