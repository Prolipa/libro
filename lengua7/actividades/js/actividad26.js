var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("11");

var testimg = [
    ["1", "RECORDAR"],
    ["2", "De dónde vienen esas voces es un libro que rastrea la historia en busca de esas canciones que acompañan a la infancia y le dan significados nuevos a los juegos."], //respuesta correcta
    ["3", "Lucila Carabelli ha elegido momentos culturales en América Latina para explicar algunas de sus costumbres. El carnaval, los cantos a la muerte, las voces indígenas, los bailes cantados y todos aquellos ritmos latinoamericanos presentes en todos lados. Las ilustraciones de Mariana Ruiz Johnson dan color y ritmo a este volumen."],
    ["4", "Es un libro que se puede leer de a poquito, mientras se busca la música original, o de una vez, por su buen diseño y las ganas de saberlo todo."],

]
finitimg();
 document.getElementById("I1").value = "RECORDAR";
 document.getElementById("I2").value = "De dónde vienen esas voces es un libro que rastrea la historia en busca de esas canciones que acompañan a la infancia y le dan significados nuevos a los juegos. ";
 document.getElementById("I3").value = "Lucila Carabelli ha elegido momentos culturales en América Latina para explicar algunas de sus costumbres. El carnaval, los cantos a la muerte, las voces indígenas, los bailes cantados y todos aquellos ritmos latinoamericanos presentes en todos lados. Las ilustraciones de Mariana Ruiz Johnson dan color y ritmo a este volumen.";
 document.getElementById("I4").value = "Es un libro que se puede leer de a poquito, mientras se busca la música original, o de una vez, por su buen diseño y las ganas de saberlo todo.";

function finitimg() {

    var cajasImg = document.getElementsByClassName('imagen');
   testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        $('#' + cajasImg[i].id).html('<div class="table-responsive"><table class="table"><thead><tr><th><textarea alt="' + testimg[i][0] + '" placeholder="' + testimg[i][0] + '" id="I' + testimg[i][0] + '" cols="30" rows="5" style="resize:none;" class="form-control cajas2" disabled></textarea></th><th><input type="number" placeholder="0" id="R' + testimg[i][0] + '" class="form-control cajas1" min="1" max="4"></th></tr></thead></table></div>');




    }
}

function calificarN30() {
    var r1 = document.getElementById("R1").value;
    var i1 = $("#I1")[0].placeholder;
    var r2 = document.getElementById("R2").value;
    var i2 = $("#I2")[0].placeholder;
    var r3 = document.getElementById("R3").value;
    var i3 = $("#I3")[0].placeholder;
    var r4 = document.getElementById("R4").value;
    var i4 = $("#I4")[0].placeholder;

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
