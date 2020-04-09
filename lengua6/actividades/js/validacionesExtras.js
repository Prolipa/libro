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


function comprobarPuntajes(){
    var c=0;
    var calF=0;
    var conf=false;
    var ret = [];
        for( var i=1; i<cantPuntaje; i++ ){
          if( $('#calificacion'+i).val() !='' ){
            if( $('#calificacion'+i).val()<=punt[i-1] && $('#calificacion'+i).val()>=0 ){
              c++;
              calF=calF+(parseFloat($('#calificacion'+i).val()));
              $('#calificacion'+i).css("background-color", "#05D576");
            }else{
              $('#calificacion'+i).focus();
              $('#calificacion'+i).css("background-color", "#D50545");
              alert('La calificación no es valida, verifique que el puntaje ingresado no exceda los '+punt[i-1]+' puntos.');
            }
          }else{
              $('#calificacion'+i).focus();
              $('#calificacion'+i).css("background-color", "#D50545");
          }
        }
        
        if( c==(cantPuntaje-1) ){conf=true;}
        c=0;
        ret=[conf,calF]
        return ret;
}
