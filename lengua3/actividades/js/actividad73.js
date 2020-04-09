var titulos = 'reflexiono';
numero_pagina(36);
var loadValues = {
    text : {
        0 : [
            'Hasta luego, hermano.',
            'Hola, panita, cómo le va.']
    },
    clases : ['col-md-3', 'cajas']
}
    var contenedores = 'contenedor1'

var respuestasCorrectas=['Hola, panita, cómo le va.'];

initElementos(contenedores,loadValues.text["0"],1,1,loadValues.clases);

eventosSelectedElements(contenedores,1);

calcularNotaSelItem(respuestasCorrectas,respuestasCorrectas.length);