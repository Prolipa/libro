var titulos = 'aplico';
numero_pagina(19);

var num =[];
for (var i = 0; i < 4; i++) 
{
    var larg= i+3;
    num.push((Math.random() * (99.120000000 - 0.0225425007) + 0.0200).toFixed(larg))   
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
function Validar() 
{
    
var cor=0;
var inc=0;

var num0 = num[0];
var num1 = num[1];
var num2 = num[2];
var num3 = num[3];

var res0 = document.getElementById("res0").value;
var res1 = document.getElementById("res1").value;
var res2 = document.getElementById("res2").value;
var res3 = document.getElementById("res3").value;

function redondear(numero, digitos){
    let base = Math.pow(10, digitos);
    let entero = Math.round(numero * base);
    return entero / base;
}
if((redondear(num0, 2)) ==res0)
        {
        cor=cor+1;
        $("#res0").addClass('correcto')
        } else {
         inc=inc+1;
         $("#res0").removeClass('correcto')
         $("#res0").addClass('incorrecto')
        }

        if((redondear(num1, 2))==res1)
        {
        cor=cor+1;
        $("#res1").addClass('correcto')
        } else {
         inc=inc+1;
         $("#res1").removeClass('correcto')
         $("#res1").addClass('incorrecto')
        }
        if((redondear(num2, 2))==res2)
        {
        cor=cor+1;
        $("#res2").addClass('correcto')
        } else {
         inc=inc+1;
         $("#res2").removeClass('correcto')
         $("#res2").addClass('incorrecto')
        }
        if((redondear(num3, 2))==res3)
        {
        cor=cor+1;
        $("#res3").addClass('correcto')
        } else {
         inc=inc+1;
         $("#res3").removeClass('correcto')
         $("#res3").addClass('incorrecto')
        }

        var totalR = cor * 10;
        var NotaF = (totalR / 4) ;
        $('#txtNota').html(NotaF.toFixed(2) + ' ');
    
        document.getElementById('bt_comprobar').disabled = true;
}