var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("11");

var testimg = [
    ["1", "Tiene mucho humor."],
    ["2", "Es una edición cuidada."], //respuesta correcta
    ["3", "Tiene escenas delicadas."],
    ["4", "Transmite ternura."],
    ["5", "Enseña valores."],
    ["6", "Habla sobre temas reales."],

]
var imagen = [

    ["1", "Es una edición cuidada."], //respuesta correcta
    ["2", "Tiene escenas delicadas."],
    ["3", "Transmite ternura."],



]

finitimg();


function finitimg() {
    var cajasImg = document.getElementsByClassName('imagen');
    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<div class="table-responsive"><table class="table"><thead><tr><th><input type="" alt="' + testimg[i][0] + '" value="' + testimg[i][1] + '" id="I' + testimg[i][0] + '" name="" class="form-control" disabled></th><th><input type="checkbox" value="' + testimg[i][1] + '" id="R' + testimg[i][0] + '" class="cajas1"></th></tr></thead></table></div>');




    }
}

function calificarN30() {
    var r1 = $("#R1:checked").val();
    var r2 = $("#R2:checked").val();
    var r3 = $("#R3:checked").val();
    var r4 = $("#R4:checked").val();
    var r5 = $("#R5:checked").val();
    var r6 = $("#R6:checked").val();
    var res1 = 0,
        res2 = 0,
        res3 = 0,
        res4 = 0,
        res5 = 0,
        res6 = 0;
    var resm1 = 0,
        resm2 = 0,
        resm3 = 0,
        resm4 = 0,
        resm5 = 0,
        resm6 = 0;

    if ($("#R1:checked").prop('checked')) {
        if ((r1 == "Es una edición cuidada.") || (r1 == "Tiene escenas delicadas.") || (r1 == "Transmite ternura.")) {
            res1 = 10;
           document.getElementById("I1").style.backgroundColor = "#6DFF6F";
        } else {
            resm1 = 5;
            document.getElementById("I1").style.backgroundColor = "#F95858";
        }
    }

    if ($("#R2:checked").prop('checked')) {
        if ((r2 == "Es una edición cuidada.") || (r2 == "Tiene escenas delicadas.") || (r2 == "Transmite ternura.")) {
            res2 = 10;
             document.getElementById("I2").style.backgroundColor = "#6DFF6F";
        } else {
            resm2 = 5;
            document.getElementById("I2").style.backgroundColor = "#F95858";
        }
    }
    if ($("#R3:checked").prop('checked')) {
        if ((r3 == "Es una edición cuidada.") || (r3 == "Tiene escenas delicadas.") || (r3 == "Transmite ternura.")) {
            res3 = 10;
             document.getElementById("I3").style.backgroundColor = "#6DFF6F";
        } else {
            resm3 = 5;
            document.getElementById("I3").style.backgroundColor = "#F95858";
        }
    }
    if ($("#R4:checked").prop('checked')) {
        if ((r4 == "Es una edición cuidada.") || (r4 == "Tiene escenas delicadas.") || (r4 == "Transmite ternura.")) {
            res4 = 10;
             document.getElementById("I4").style.backgroundColor = "#6DFF6F";
        } else {
            resm4 = 5;
            document.getElementById("I4").style.backgroundColor = "#F95858";
        }
    }
    if ($("#R5:checked").prop('checked')) {
        if ((r5 == "Es una edición cuidada.") || (r5 == "Tiene escenas delicadas.") || (r5 == "Transmite ternura.")) {
            res5 = 10;
             document.getElementById("I5").style.backgroundColor = "#6DFF6F";
        } else {
            resm5 = 5;
            document.getElementById("I5").style.backgroundColor = "#F95858";
        }
    }
    if ($("#R6:checked").prop('checked')) {
        if ((r6 == "Es una edición cuidada.") || (r6 == "Tiene escenas delicadas.") || (r6 == "Transmite ternura.")) {
            res6 = 10;
             document.getElementById("I6").style.backgroundColor = "#6DFF6F";
        } else {
            resm6 = 5;
            document.getElementById("I6").style.backgroundColor = "#F95858";
        }
    }
     var result1 = parseInt(res1) + parseInt(res2) + parseInt(res3) + parseInt(res4)+ parseInt(res5) + parseInt(res6);
     var result2 = parseInt(resm1) + parseInt(resm2) + parseInt(resm3) + parseInt(resm4)+ parseInt(resm5) + parseInt(resm6);
     totales = (result1-result2)/3;

 $('#txtNota').html(totales.toFixed(2) + ' ');

        document.getElementById('R1').disabled = true;
        document.getElementById('R2').disabled = true;
        document.getElementById('R3').disabled = true;
        document.getElementById('R4').disabled = true;

        document.getElementById('R5').disabled = true;
        document.getElementById('R6').disabled = true;
        document.getElementById('bt_comprobar').disabled = true;



    /*
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
        document.getElementById('bt_comprobar').disabled = true;*/


}
