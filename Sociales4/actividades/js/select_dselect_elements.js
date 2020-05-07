function selectDselectSelItems(elemento){
    /*var elemento = document.getElementById(id);
    if(elementosSeleccionados.length == valMaxSeleccion && !elemento.classList.contains('seleccionCaja')){
        alert('SOLO PUEDE SELECCINAR HASTA '+ valMaxSeleccion+' OPCIONES');
    }else */
    if(!elemento.classList.contains('seleccionCaja')){
            elemento.classList.add('seleccionCaja');
            elemento.classList.remove('deseleccionCaja');
            //capturarElementosSeleccionadosSelItems(elemento.textContent);
        }else{
            elemento.classList.add('deseleccionCaja');
            elemento.classList.remove('seleccionCaja');
            //eliminarElementosDeseleccionadosSelItems(elemento.textContent);
        }
}
