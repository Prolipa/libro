var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("11");

var testimg = [
    ["1", "Mezclar el agua y el jabón juntos."],
    ["2", "Añadir el resto de los ingredientes."], //respuesta correcta
    ["3", "Remover hasta que se mezclen."],
    ["4", "Verter en una botella flexible."],

]
finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');
    var imagen = ['Mezclar el agua y el jabón juntos.', 'Añadir el resto de los ingredientes.', 'Remover hasta que se mezclen.', 'Verter en una botella flexible.'];
    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<div class="table-responsive"><table class="table"><thead><tr><th><input type="number" placeholder="0" id="R' + testimg[i][0] + '" class="form-control cajas1" min="0" max="10"></th><th><input type="" alt="' + testimg[i][0] + '" value="' + testimg[i][1] + '" id="I' + testimg[i][0] + '" name="" class="form-control" disabled></th></tr></thead></table></div>');




    }
}

function calificarN30() {
    var r1 = document.getElementById("R1").value;
    var i1 = $("#I1")[0].alt;
    var r2 = document.getElementById("R2").value;
    var i2 = $("#I2")[0].alt;
    var r3 = document.getElementById("R3").value;
    var i3 = $("#I3")[0].alt;
    var r4 = document.getElementById("R4").value;
    var i4 = $("#I4")[0].alt;

    var res1, res2, res3, res4, res5, res6;



    if (r1 == i1) {
        res1 = 10;
        document.getElementById("R1").style.backgroundColor = "#6DFF6F";
    } else {
        res1 = 0;
        document.getElementById("R1").style.backgroundColor = "#F95858";
    }

    if (r2 == i2) {
        res2 = 10;
        document.getElementById("R2").style.backgroundColor = "#6DFF6F";
    } else {
        res2 = 0;
        document.getElementById("R2").style.backgroundColor = "#F95858";
    }

    if (r3 == i3) {
        res3 = 10;
        document.getElementById("R3").style.backgroundColor = "#6DFF6F";
    } else {
        res3 = 0;
        document.getElementById("R3").style.backgroundColor = "#F95858";
    }

    if (r4 == i4) {
        res4 = 10;
        document.getElementById("R4").style.backgroundColor = "#6DFF6F";
    } else {
        res4 = 0;
        document.getElementById("R4").style.backgroundColor = "#F95858";
    }

    var result = parseInt(res1) + parseInt(res2) + parseInt(res3) + parseInt(res4);
    var total = result / 4;
    $('#txtNota').html(total.toFixed(2) + ' ');

    document.getElementById('R1').disabled = true;
    document.getElementById('R2').disabled = true;
    document.getElementById('R3').disabled = true;
    document.getElementById('R4').disabled = true;
    document.getElementById('bt_comprobar').disabled = true;


}