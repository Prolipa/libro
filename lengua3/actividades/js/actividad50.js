var titulos = 'aplico';
numero_pagina(27);
var loadValues = {
    text : {
        0 : ['Te deseo muchas felicidades.','Espero que te recuperes pronto.','las amigas','tarjetas bonitas'],
    },
    clases : ['col-md-1','cajasmodif']
}
    var contenedores = 'contenedor1'

var respuestasCorrectas=['las amigas','tarjetas bonitas'];

initElementos(contenedores,loadValues.text["0"],1,1,loadValues.clases);

eventosSelectedElements(contenedores,2);

calcularNotaSelItem(respuestasCorrectas,2);