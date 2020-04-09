var titulos = "aplico";
numero_pagina(77);

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 2);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre2 = 3;

// #region Pregunta1
$(".enc1").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta1() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 8; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "Tu " || caja == "Tú " || caja == "Se " || caja == "Sé ") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 4) / 4;
  if(respr1=="2" && respr2=="2")
  {
      total=2.00;
  }
  if (total < 0) {
    total = 0;
    tpre1 = total;
  } else {
    tpre1 = total;
  }

  tpre1 = total.toFixed(2);
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() {
  var cor = 0;
  var inc = 0;

  var cj2a = document.getElementById("cj2a").value;
  var cj2b = document.getElementById("cj2b").value;
  var cj2c = document.getElementById("cj2c").value;
  var cj2d = document.getElementById("cj2d").value;
  var cj2e = document.getElementById("cj2e").value;
  var cj2f = document.getElementById("cj2f").value;
  var cj2g = document.getElementById("cj2g").value;
  var cj2h = document.getElementById("cj2h").value;

  if (cj2a == "Tú" || cj2a == " Tú" || cj2a == "  Tú") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").removeClass("correcto");
    $("#cj2a").addClass("incorrecto");
  }

  if (cj2b == "tu" || cj2b == " tu" || cj2b == "  tu") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").removeClass("correcto");
    $("#cj2b").addClass("incorrecto");
  }

  if (cj2c == "Si" || cj2c == " Si" || cj2c == "  Si") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").removeClass("correcto");
    $("#cj2c").addClass("incorrecto");
  }

  if (cj2d == "sí" || cj2d == " sí" || cj2d == "  sí") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").removeClass("correcto");
    $("#cj2d").addClass("incorrecto");
  }

  if (cj2e == "Él" || cj2e == " Él" || cj2e == "  Él") {
    cor = cor + 1;
    $("#cj2e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2e").removeClass("correcto");
    $("#cj2e").addClass("incorrecto");
  }

  if (cj2f == "el" || cj2f == " el" || cj2f == "  el") {
    cor = cor + 1;
    $("#cj2f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2f").removeClass("correcto");
    $("#cj2f").addClass("incorrecto");
  }

  if (cj2g == "dé" || cj2g == " dé" || cj2g == "  dé") {
    cor = cor + 1;
    $("#cj2g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2g").removeClass("correcto");
    $("#cj2g").addClass("incorrecto");
  }

  if (cj2h == "de" || cj2h == " de" || cj2h == "  de") {
    cor = cor + 1;
    $("#cj2h").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2h").removeClass("correcto");
    $("#cj2h").addClass("incorrecto");
  }

  var total = ((cor ) * 4) / 8;
  
  if (total < 0) {
    total = 0;
    tpre2 = total.toFixed(2);
  } else {
    tpre2 = total.toFixed(2);
  }
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;
  tpre3 = pre3a;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

function NotaFinal() {
  var pre3a = document.getElementById("pre3a").value;
  if (pre3a == "") {
    alert("Pregunta 3: Califiqué la pregunta");
  } else {
    pregunta1();
    pregunta2();
    pregunta3();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}
