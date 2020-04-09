var elementoContenedor = function(contenedorPadre){
    return document.getElementById(contenedorPadre);
    },
    elementosHijos = function(contenedorPadre){
    return elementoContenedor(contenedorPadre).childNodes;
    };
var elementosSeleccionados = [],respuestasIncorrectasSelected=[];
function eventosSelectedElements(contenedorPadre,valMaxSeleccion){
    elementosHijos(contenedorPadre).forEach(function(array){
        document.getElementById(array.id).addEventListener('click',function(){
            selectDselectSelItems(array.id,valMaxSeleccion);
        });
    });
}
function selectDselectSelItems(id,valMaxSeleccion){
    var elemento = document.getElementById(id);
    if(elementosSeleccionados.length == valMaxSeleccion && !elemento.classList.contains('seleccionCaja')){
        alert('SOLO PUEDE SELECCINAR HASTA '+ valMaxSeleccion+' OPCIONES');
    }else if(!elemento.classList.contains('seleccionCaja')){
            elemento.classList.add('seleccionCaja');
            elemento.classList.remove('deseleccionCaja');
            capturarElementosSeleccionadosSelItems(elemento.textContent);
        }else{
            elemento.classList.add('deseleccionCaja');
            elemento.classList.remove('seleccionCaja');
            eliminarElementosDeseleccionadosSelItems(elemento.textContent);
        }
}
function capturarElementosSeleccionadosSelItems(elemento){
    elementosSeleccionados.push(elemento);
}
function eliminarElementosDeseleccionadosSelItems(elemento){
    var pos = elementosSeleccionados.indexOf(elemento);
    elementosSeleccionados.splice(pos,1);
}
function calcularNotaSelItem(respuestasCorrectas,totalNota){
    document.getElementById('bt_comprobar').addEventListener('click',function(){
        var notaSobre = 10;
        var calculo = (notaSobre * validarRespuestasCorrectasSelItem(respuestasCorrectas) )/ totalNota;
        document.getElementById('txtNota').innerHTML = calculo.toFixed(2);
        document.getElementById('bt_comprobar').disabled = true;
    });
}
var respu=0;
function validarRespuestasCorrectasSelItem(respuestasCorrectas){
    var numRespCorrectas=0;
    elementosSeleccionados.forEach( function( element ) {
        if(respuestasCorrectas.indexOf(element)>= 0){
            respu = respu+1;
            numRespCorrectas = numRespCorrectas+1;
        }else{
            respuestasIncorrectasSelected.push(element);
        }
    });
    return numRespCorrectas;
}
    