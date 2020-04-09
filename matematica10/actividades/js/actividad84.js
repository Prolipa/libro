var titulos = "aplico";
numero_pagina(89);

function pregunta1() {
  var cor = 0;
  var inc = 0;
  var tpre1 = 0;
  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;

  if (cj1a == "1,8") {
    cor = cor + 1;
    $("#cj1a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1a").addClass("incorrecto");
  }

  if (cj1b == "2,4") {
    cor = cor + 1;
    $("#cj1b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1b").addClass("incorrecto");
  }

  if (cj1c == "3,2") {
    cor = cor + 1;
    $("#cj1c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1c").addClass("incorrecto");
  }

  var total = (cor * 10) / 3;

  $("#txtNota").html(total);
  document.getElementById("bt_comprobar").disabled = true;
}
