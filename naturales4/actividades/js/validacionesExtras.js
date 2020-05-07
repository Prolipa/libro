function validNumero(num1,num2,allowFloat=0){
    if(allowFloat==1){
        var regex = new RegExp("^.|["+num1+"-"+num2+"]+$");
    }else{
        var regex = new RegExp("^["+num1+"-"+num2+"]+$");
    }
    
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

function validMaxIngreso(elemento,num){
    if(elemento.value>num){
        alert('La calificación no puede ser mayor a '+num)
        elemento.value= "";
        return 1;
    }else{
        
        return 0;
        
    }
}
function separateString(stringToSeparate){
    var separator = " ";
    var stringSplited = [];
    stringSplited = stringToSeparate.split(separator);
    return stringSplited;
}