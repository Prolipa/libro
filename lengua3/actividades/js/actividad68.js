var titulos = 'exploro';
numero_pagina(34);
var loadValues = {
    text : {
        0 : [
            'Día de la Madre',
            'Día del Padre',
            'Inti Raymi',
            'La Mama Negra',
            'Año Nuevo',
            'cumpleaños',
            'Fiesta del Yamor',
            'Día de los Difuntos!',
            'Año Viejo']
    },
    clases : ['col-md-3','cajasmodif']
}
    var contenedores = 'contenedor1'

var respuestasCorrectas=['silla','cuadro','me','El cuento','cielo'];

initElementos(contenedores,loadValues.text["0"],1,1,loadValues.clases);

eventosSelectedElements(contenedores,5);

//calcularNotaSelItem(respuestasCorrectas,respuestasCorrectas.length);