var titulos = "reflexiono";
numero_pagina(66);

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
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

$(".enc2").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});
function pregunta2() {
  var pre2a = document.getElementById("pre2a").value;
  tpre2 = pre2a;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
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
      $("#18").hasClass("subrayar") != true &&
      $("#19").hasClass("subrayar") != true &&
      $("#20").hasClass("subrayar") != true &&
      $("#21").hasClass("subrayar") != true &&
      $("#22").hasClass("subrayar") != true &&
      $("#23").hasClass("subrayar") != true &&
      $("#24").hasClass("subrayar") != true &&
      $("#25").hasClass("subrayar") != true &&
      $("#26").hasClass("subrayar") != true &&
      $("#27").hasClass("subrayar") != true &&
      $("#28").hasClass("subrayar") != true &&
      $("#29").hasClass("subrayar") != true &&
      $("#30").hasClass("subrayar") != true &&
      $("#31").hasClass("subrayar") != true &&
      $("#32").hasClass("subrayar") != true &&
      $("#33").hasClass("subrayar") != true &&
      $("#34").hasClass("subrayar") != true &&
      $("#35").hasClass("subrayar") != true &&
      $("#36").hasClass("subrayar") != true &&
      $("#37").hasClass("subrayar") != true &&
      $("#38").hasClass("subrayar") != true &&
      $("#39").hasClass("subrayar") != true &&
      $("#40").hasClass("subrayar") != true &&
      $("#41").hasClass("subrayar") != true &&
      $("#42").hasClass("subrayar") != true &&
      $("#43").hasClass("subrayar") != true &&
      $("#44").hasClass("subrayar") != true &&
      $("#45").hasClass("subrayar") != true &&
      $("#46").hasClass("subrayar") != true &&
      $("#47").hasClass("subrayar") != true &&
      $("#48").hasClass("subrayar") != true &&
      $("#49").hasClass("subrayar") != true &&
      $("#50").hasClass("subrayar") != true &&
      $("#51").hasClass("subrayar") != true &&
      $("#52").hasClass("subrayar") != true &&
      $("#53").hasClass("subrayar") != true &&
      $("#54").hasClass("subrayar") != true &&
      $("#55").hasClass("subrayar") != true &&
      $("#56").hasClass("subrayar") != true &&
      $("#57").hasClass("subrayar") != true &&
      $("#58").hasClass("subrayar") != true &&
      $("#59").hasClass("subrayar") != true &&
      $("#60").hasClass("subrayar") != true &&
      $("#61").hasClass("subrayar") != true &&
      $("#62").hasClass("subrayar") != true &&
      $("#63").hasClass("subrayar") != true &&
      $("#64").hasClass("subrayar") != true &&
      $("#65").hasClass("subrayar") != true &&
      $("#66").hasClass("subrayar") != true &&
      $("#67").hasClass("subrayar") != true &&
      $("#68").hasClass("subrayar") != true &&
      $("#69").hasClass("subrayar") != true &&
      $("#70").hasClass("subrayar") != true &&
      $("#71").hasClass("subrayar") != true &&
      $("#72").hasClass("subrayar") != true &&
      $("#73").hasClass("subrayar") != true &&
      $("#74").hasClass("subrayar") != true &&
      $("#75").hasClass("subrayar") != true &&
      $("#76").hasClass("subrayar") != true &&
      $("#77").hasClass("subrayar") != true &&
      $("#78").hasClass("subrayar") != true &&
      $("#79").hasClass("subrayar") != true &&
      $("#80").hasClass("subrayar") != true &&
      $("#81").hasClass("subrayar") != true &&
      $("#82").hasClass("subrayar") != true &&
      $("#83").hasClass("subrayar") != true &&
      $("#84").hasClass("subrayar") != true &&
      $("#85").hasClass("subrayar") != true
    ) {
      alert("Pregunta 2: Subraye al menos una respuesta");
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
