var titulos = "reflexiono";
$("#n_pagina").html("18");

function resolverN39() {

    var nota1 = document.getElementById("nt39_1").value;
    var nota2 = document.getElementById("nt39_2").value;

    if ((nota1 >= 1) && (nota1 <= 5)) {
        document.getElementById("nt39_1").style.backgroundColor = "#6DFF6F";
    } else {
        document.getElementById("nt39_1").style.backgroundColor = "#F95858";
        alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 5 puntos');
        nota1= 0;
    }

    if ((nota2 >= 1) && (nota2 <= 5)) {
        document.getElementById("nt39_2").style.backgroundColor = "#6DFF6F";
    } else {
        document.getElementById("nt39_2").style.backgroundColor = "#F95858";
        alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 5 puntos');
        nota2 = 0;
    }



    if ((nota1 > 5) || (nota2 > 5)) {
        var resp = 0;
        $('#txtNota').html(resp.toFixed(2) + ' ');
    } else {
        var resp = parseInt(nota1) + parseInt(nota2);
        $('#txtNota').html(resp.toFixed(2) + ' ');

        document.getElementById('bt_comprobar').disabled = true;
        document.getElementById('nt39_1').disabled = true;
        document.getElementById('nt39_2').disabled = true;
    }

}