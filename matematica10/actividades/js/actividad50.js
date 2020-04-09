var titulos = 'aplico';
numero_pagina(35);

var cor=0;
var inc=0;





function actividadA()
{
    
    var pre1a = document.getElementById('pre1a').value;
    var pre1b = document.getElementById('pre1b').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre2b = document.getElementById('pre2b').value;

    document.getElementById('pre3a').addEventListener('keypress',()=>{
        validNumero(0,9,1);
        
    });
    document.getElementById('pre3a').addEventListener('keyup',()=>{
        validMaxIngreso(document.getElementById('pre3a'),2);
    });
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre4b = document.getElementById('pre4b').value;
    var pre4c = document.getElementById('pre4c').value;
    var pre5a = document.getElementById('pre5a').value;
    var pre5b = document.getElementById('pre5b').value;
    var pre6a = document.getElementById('pre6a').value;

    if(pre1a=="" || pre1b=="" || pre2a=="" || pre2b=="" || pre3a=="" || pre4a=="" || pre4b=="" || pre4c=="" || pre5a=="" || pre5b=="" || pre6a=="")
    {
        alert("Responda a todas las preguntas");
    }
    else
    {
        if(pre1a=="4" && pre1b=="34")
        {
            cor=cor+1;
            $("#pre1a").addClass('correcto')
            $("#pre1b").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#pre1a").addClass('incorrecto')
            $("#pre1b").addClass('incorrecto')
        }

        if(pre2a=="3" && pre2b=="30")
        {
            cor=cor+1;
            $("#pre2a").addClass('correcto')
            $("#pre2b").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#pre2a").addClass('incorrecto')
            $("#pre2b").addClass('incorrecto')
        }

        if(pre3a!="" )
        {
            $("#pre3a").addClass('correcto')
        }
        else
        {
            $("#pre3a").addClass('incorrecto')
        }

        if(pre4a=="12" && pre4b=="3" || pre4c=="2")
        {
            cor=cor+1;
            $("#pre4a").addClass('correcto')
            $("#pre4b").addClass('correcto')
            $("#pre4c").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#pre4a").addClass('incorrecto')
            $("#pre4b").addClass('incorrecto')
            $("#pre4c").addClass('incorrecto')
        }

        if(pre5a=="6" && pre5b=="3")
        {
            cor=cor+1;
            $("#pre5a").addClass('correcto')
            $("#pre5b").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#pre5a").addClass('incorrecto')
            $("#pre5b").addClass('incorrecto')
        }
        if(pre6a=="180" )
        {
            cor=cor+1;
            $("#pre6a").addClass('correcto')
        }
        else
        {
            inc=inc+1;
            $("#pre6a").addClass('incorrecto')
        }

        var Nota = ((cor-inc) * 8) / 5;
        var NotaF=Nota+parseInt(pre3a);
            if( NotaF<0)
            {
                NotaF=0;
                $('#txtNota').html(NotaF.toFixed(2) + ' ');
                document.getElementById('bt_comprobar').disabled = true;
            }
            else
            {
                $('#txtNota').html(NotaF.toFixed(2) + ' ');
                document.getElementById('bt_comprobar').disabled = true;
            }
    }
}
