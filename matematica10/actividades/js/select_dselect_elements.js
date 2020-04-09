function selectDselectSelItems(elemento,maxAnsToSelect){
    var selectedElement = document.getElementsByClassName('seleccionCaja');
    if(selectedElement.length == maxAnsToSelect && !elemento.classList.contains('seleccionCaja')){
        alert('SOLO PUEDE SELECCINOAR HASTA '+ maxAnsToSelect+' OPCIONES');
    }else{
        if(!elemento.classList.contains('seleccionCaja')){
            elemento.classList.add('seleccionCaja');
            elemento.classList.remove('deseleccionCaja');
        }else{
            elemento.classList.add('deseleccionCaja');
            elemento.classList.remove('seleccionCaja');
        }
    }
    
}
function selectDselectSelItems2(elemento,maxAnsToSelect){
    var selectedElement = document.getElementsByClassName('seleccionCaja2');
    if(selectedElement.length == maxAnsToSelect && !elemento.classList.contains('seleccionCaja2')){
        alert('SOLO PUEDE SELECCINOAR HASTA '+ maxAnsToSelect+' OPCIONES');
    }else{
        if(!elemento.classList.contains('seleccionCaja2')){
            elemento.classList.add('seleccionCaja2');
            elemento.classList.remove('deseleccionCaja2');
        }else{
            elemento.classList.add('deseleccionCaja2');
            elemento.classList.remove('seleccionCaja2');
        }
    }
    
}

