var titulos = "aplico";
f_titulos();
$("#n_pagina").html('217');

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 5);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

var tpre2 = 0;
var tpre3 = 0;

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1
$(".enc1").click(function() {
  if ($(this).hasClass("vacio")) {
    $(this).removeClass("vacio");
    $(this).addClass("subrayar");
  } else if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
    $(this).addClass("subrayar1");
  } else {
    $(this).removeClass("subrayar1");
    $(this).addClass("vacio");
  }
});
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
      var pre1a = document.getElementById("pre1a").value;
        if (pre1a == "") {
            alert("Pregunta 1: Califiqué la pregunta");
        } else {
        var pre2a = document.getElementById("pre2a").value;
        if (pre2a == "") {
            alert("Pregunta 2: Califiqué la pregunta");
        } else {
            pregunta1();
            pregunta2();
            cor =
                parseFloat(tpre1) +
                parseFloat(tpre2);
            Calculo_nota();
        }
    }
}

// #endregion