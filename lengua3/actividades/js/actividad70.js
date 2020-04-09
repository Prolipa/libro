var titulos = 'exploro';
numero_pagina(36);
var loadValues = {
    text : {
        0 : [
            '¡Bravo! ¡Lo hiciste muy bien!',
            'Debes mejorar',
            'Te felicito por tu esfuerzo.']
    },
    clases : ['col-md-3', 'cajas']
}
    var contenedores = 'contenedor1'

var respuestasCorrectas=['¡Bravo! ¡Lo hiciste muy bien!','Te felicito por tu esfuerzo.'];

initElementos(contenedores,loadValues.text["0"],1,1,loadValues.clases);

eventosSelectedElements(contenedores,2);

calcularNotaSelItem(respuestasCorrectas,respuestasCorrectas.length);