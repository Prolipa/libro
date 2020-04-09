var titulos = 'exploro';
numero_pagina(28);
var loadValues = {
    text : {
        0 : [
            'silla',
            'Ayer escribí una tarjeta.',
            'cuadro',
            'Esta es mi tarjeta de felicitación.',
            'me',
            'El cuento',
            'cielo',
            '¡Auxilio!',
            '¡Voy!']
    },
    clases : ['col-md-3','cajasmodif']
}
    var contenedores = 'contenedor1'

var respuestasCorrectas=['silla','cuadro','me','El cuento','cielo'];

initElementos(contenedores,loadValues.text["0"],1,1,loadValues.clases);

eventosSelectedElements(contenedores,5);

calcularNotaSelItem(respuestasCorrectas,respuestasCorrectas.length);