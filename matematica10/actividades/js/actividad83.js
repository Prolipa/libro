var titulos = "aplico";
numero_pagina(89);

function pregunta1() {
    var cor = 0;
    var inc = 0;
    var tpre1=0;
    var cj1a = document.getElementById("cj1a").value;
  
    if (cj1a == "5" ) {
      cor = cor + 1;
      $("#cj1a").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj1a").addClass("incorrecto");
    }
  
    var total = (cor  * 10) / 1;

    $("#txtNota").html(total);
    document.getElementById("bt_comprobar").disabled = true;
  }