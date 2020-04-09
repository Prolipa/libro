var titulos = "aplico";
numero_pagina(57);

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

var tpre1 = 0;
var tpre2 = 0;
// #region Pregunta1
$(".enc1").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
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


function NotaFinal() {
  if (
    $("#1").hasClass("subrayar") != true &&
    $("#2").hasClass("subrayar") != true &&
    $("#3").hasClass("subrayar") != true &&
    $("#4").hasClass("subrayar") != true &&
    $("#5").hasClass("subrayar") != true &&
    $("#6").hasClass("subrayar") != true &&
    $("#7").hasClass("subrayar") != true &&
    $("#8").hasClass("subrayar") != true &&
    $("#9").hasClass("subrayar") != true &&
    $("#10").hasClass("subrayar") != true &&
    $("#11").hasClass("subrayar") != true &&
    $("#12").hasClass("subrayar") != true &&
    $("#12").hasClass("subrayar") != true &&
    $("#14").hasClass("subrayar") != true &&
    $("#15").hasClass("subrayar") != true &&
    $("#16").hasClass("subrayar") != true &&
    $("#17").hasClass("subrayar") != true &&
    $("#18").hasClass("subrayar") != true
  ) {
    alert("Pregunta 1: Subraye al menos una respuesta");
  } else {
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
        var Nf = parseFloat(tpre1) + parseFloat(tpre2);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}
