var titulos = 'aplico';
numero_pagina(19);




var num =[];
for (var i = 0; i < 2; i++) 
{
    num.push((Math.random() * (10.120000000 - 0.0225425007) + 0.0200).toFixed(9))   
}

var sumaNum = document.getElementsByClassName('rad');
num.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + num[i] + '</span> ');

}
function validarN(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNM,]/;
    te = String.fromCharCode(tecla);
    if (patron.test(te)) {
        alert("INGRESE SOLO NUMEROS Y LOS DECIMALES CON EL PUNTO(.) ");
        return false;
    }
    
}

function redondear(numero, digitos){
    let base = Math.pow(10, digitos);
    let entero = Math.round(numero * base);
    return entero / base;
}
function Validar() 
    {
    var cor=0;
    var inc=0;
    var num1=num[0];
    var num2=num[1];
    
    var unidaduno1 = document.getElementById("resUno1").value;
    var unidaddos1 = document.getElementById("resDos1").value;
    if ($('#resUno1').text() != " ") 
    {
        if(parseInt(num1)==unidaduno1)
        {
        cor=cor+1;
        $("#resUno1").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resUno1").removeClass('correcto')
         $("#resUno1").addClass('incorrecto')
        }
    }
    if ($('#resDos1').text() != " ") 
    {
        if(parseInt(num2)==unidaddos1)
        {
        cor=cor+1;
        $("#resDos1").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resDos1").removeClass('correcto')
         $("#resDos1").addClass('incorrecto')
        }
    }
        
        ///////
        var decimauno1 = document.getElementById("resUno2").value;
        var decimados1 = document.getElementById("resDos2").value;
 
        if(parseFloat(num1).toFixed(1)==parseFloat(decimauno1))
        
        {
            cor=cor+1;
        $("#resUno2").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resUno2").removeClass('correcto')
         $("#resUno2").addClass('incorrecto')
        }
    if ($('#resDos2').text() != " ") 
    {
        if(parseFloat(num2).toFixed(1)==parseFloat(decimados1))
        {
        cor=cor+1;
        $("#resDos2").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resDos2").removeClass('correcto')
         $("#resDos2").addClass('incorrecto')
        }
    }
      ////
    var centesimauno1 = document.getElementById("resUno3").value;
    var centesimados1 = document.getElementById("resDos3").value;
    if ($('#resUno3').text() != " ") 
    {
      if(parseFloat(num1).toFixed(2)==parseFloat(centesimauno1))
        {
        cor=cor+1;
        $("#resUno3").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resUno3").removeClass('correcto')
         $("#resUno3").addClass('incorrecto')
        }
    }
    if ($('#resDos3').text() != " ") 
    {
        if(parseFloat(num2).toFixed(2)==parseFloat(centesimados1))
        {
        cor=cor+1;
        $("#resDos3").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resDos3").removeClass('correcto')
         $("#resDos3").addClass('incorrecto')
        }
    }

        /////

        var unidaduno2 = document.getElementById("resUno4").value;
        var unidaddos2 = document.getElementById("resDos4").value;
    if ($('#resUno4').text() != " ") 
    {
        if((redondear(num1, 0))==unidaduno2)
        {
        cor=cor+1;
        $("#resUno4").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resUno4").removeClass('correcto')
         $("#resUno4").addClass('incorrecto')
        }
    }
    if ($('#resDos4').text() != " ") 
    {
        if((redondear(num2, 0))==unidaddos2)
        {
        cor=cor+1;
        $("#resDos4").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resDos4").removeClass('correcto')
         $("#resDos4").addClass('incorrecto')
        }
    }

        ///////

        var decimauno2 = document.getElementById("resUno5").value;
        var decimados2 = document.getElementById("resDos5").value;

    if ($('#resUno5').text() != " ") 
    {
        if((redondear(num1, 1))==parseFloat(decimauno2))
        {
        cor=cor+1;
        $("#resUno5").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resUno5").removeClass('correcto')
         $("#resUno5").addClass('incorrecto')
        }
    }

    if ($('#resDos5').text() != " ") 
    {
        if((redondear(num1, 2)).toFixed(1)==parseFloat(decimados2))
        {
        cor=cor+1;
        $("#resDos5").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resDos5").removeClass('correcto')
         $("#resDos5").addClass('incorrecto')
        }
    }
      ////
      var centesimauno2 = document.getElementById("resUno6").value;
      var centesimados2 = document.getElementById("resDos6").value;
    if ($('#resUno6').text() != " ") 
    { 
      if((redondear(num1, 2))==parseFloat(centesimauno2))
        {
        cor=cor+1;
        $("#resUno6").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resUno6").removeClass('correcto')
         $("#resUno6").addClass('incorrecto')
        }
    }

    if ($('#resDos6').text() != " ") 
    {
        if((redondear(num1, 2))==parseFloat(centesimados2))
        {
        cor=cor+1;
        $("#resDos6").addClass('correcto')
        } else {
         inc=inc+1;
         $("#resDos6").removeClass('correcto')
         $("#resDos6").addClass('incorrecto')
        }
    }
    
       var totalR = cor * 10;
        var NotaF = (totalR / 12) ;
        $('#txtNota').html(NotaF.toFixed(2) + ' ');
    
        document.getElementById('bt_comprobar').disabled = true;

    }





