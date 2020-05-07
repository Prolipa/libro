//#region OBJETO SUGERIDO PARA DATOS
/* var loadValues = {
    pictures : [
        'img/lgavilanesTest.jpg',
        'img/lgavilanesTest.jpg'
        ],
    text     : ['prueba1']
} */
//#endregion



//Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
function initElementos(contenedor,arrayElement,divBlank,isRandom,clases=[]){ //divBlank = 0 en blanco, 1 con span
    var contenedores = document.getElementById(contenedor);
    if(isRandom == 1){ //1 hacer randomicao, 0 no hacer randomico
        arrayElement.sort(f_randomico);
    }
    
    for(i=0; i<arrayElement.length;i++){
        var createDiv = document.createElement('div');
        var UID = genIdRandom();
        var createNodo = document.createTextNode(arrayElement[i]);
        createDiv.id='div'+genIdRandom();
        clases.forEach(function(currentElement){ //INGRESAR UN ARRAY DE CLASES A IMPLEMENTAR EN EL DIV
            createDiv.classList.add(currentElement);
            //createDiv.classList.add('cajas','col-md-1','estiloP','texto');
        });
        
        if(divBlank==1){
            var createSpan = document.createElement('span');
            createSpan.id = 'span'+genIdRandom()+i;
            createSpan.appendChild(createNodo);
            createDiv.appendChild(createSpan);
        }
        
        contenedores.appendChild(createDiv);
    }
}
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
    /*
    if(isRandom == 1){ //1 hacer randomicao, 0 no hacer randomico
        arrayElement.sort(f_randomico);
    } */
/*
    for(i=0; i<arrayElement.length;i++){
        var createTable = document.createElement('table');
        
        var createTdoby = document.createElement('tbody');
        var UID = genIdRandom();
        //var createNodo = document.createTextNode(arrayElement[i]);
        createDiv.id='div'+genIdRandom();
        clases.forEach(function(currentElement){ //INGRESAR UN ARRAY DE CLASES A IMPLEMENTAR EN EL DIV
            createDiv.classList.add(currentElement);
            //createDiv.classList.add('cajas','col-md-1','estiloP','texto');
        });
        
        if(divBlank==1){
            var createSpan = document.createElement('span');
            createSpan.id = 'span'+genIdRandom()+i;
            createSpan.appendChild(createNodo);
            createDiv.appendChild(createSpan);
        }
        
        contenedores.appendChild(createDiv);
    }*/ 
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