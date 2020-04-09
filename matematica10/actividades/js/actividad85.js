var titulos = "aplico";
numero_pagina(89);

function pregunta1() {
  var cor = 0;
  var inc = 0;
  var tpre1 = 0;
  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;

  if (cj1a == "9,45") {
    cor = cor + 1;
    $("#cj1a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1a").addClass("incorrecto");
  }

  if (cj1b == "11,7") {
    cor = cor + 1;
    $("#cj1b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1b").addClass("incorrecto");
  }


  var total = (cor * 10) / 2;

  $("#txtNota").html(total);
  document.getElementById("bt_comprobar").disabled = true;
}
