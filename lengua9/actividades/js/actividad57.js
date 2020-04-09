var titulos = "aplico";
numero_pagina(76);

var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
function pregunta1() {
  var cor = 0;
  var inc = 0;

  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj1d = document.getElementById("cj1d").value;
  var cj1e = document.getElementById("cj1e").value;
  var cj1f = document.getElementById("cj1f").value;
  var cj1g = document.getElementById("cj1g").value;
  var cj1h = document.getElementById("cj1h").value;

  if (cj1a == "S" || cj1a == " S" || cj1a == "   S") {
    cor = cor + 1;
    $("#cj1a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1a").addClass("incorrecto");
  }
  if (cj1b == "d" || cj1b == " d" || cj1b == "  d") {
    cor = cor + 1;
    $("#cj1b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1b").addClass("incorrecto");
  }
  if (cj1c == "u" || cj1c == " u" || cj1c == "  u") {
    cor = cor + 1;
    $("#cj1c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1c").addClass("incorrecto");
  }
  if (cj1d == "S" || cj1d == " S" || cj1d == "  S") {
    cor = cor + 1;
    $("#cj1d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1d").addClass("incorrecto");
  }
  if (cj1e == "E" || cj1e == " E" || cj1e == "  E") {
    cor = cor + 1;
    $("#cj1e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1e").addClass("incorrecto");
  }
  if (cj1f == "D" || cj1f == " D" || cj1f == "  D") {
    cor = cor + 1;
    $("#cj1f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1f").addClass("incorrecto");
  }
  if (cj1g == "S" || cj1g == " S" || cj1g == "  S") {
    cor = cor + 1;
    $("#cj1g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1g").addClass("incorrecto");
  }
  if (cj1h == "E" || cj1h == " E" || cj1h == "  E") {
    cor = cor + 1;
    $("#cj1h").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1h").addClass("incorrecto");
  }
  var total = (cor * 10) / 8;
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

function NotaFinal() {
  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj1d = document.getElementById("cj1d").value;
  var cj1e = document.getElementById("cj1e").value;
  var cj1f = document.getElementById("cj1f").value;
  var cj1g = document.getElementById("cj1g").value;
  var cj1h = document.getElementById("cj1h").value;
  if (
    cj1a == "" ||
    cj1b == "" ||
    cj1c == "" ||
    cj1d == "" ||
    cj1e == "" ||
    cj1f == "" ||
    cj1g == "" ||
    cj1h == ""
  ) {
    alert("Pregunta 1: Ingrese todas las respuestas.");
  } else {
    pregunta1();
    var Nf = parseFloat(tpre1);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}
