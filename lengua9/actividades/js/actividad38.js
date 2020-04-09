var titulos = "aplico";
numero_pagina(54);

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 4);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 4);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
// #region Pregunta1
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

// #region Random3
var random3 = [
    ['<span class="enc" id="3">Hoguera de estupor en que mi sed ardía.</span>'],
    ['<span class="enc" id="1">Apegada a mis brazos como una enredadera.</span>'],
    ['<span class="enc" id="4">Dulce jacinto azul torcido sobre mi alma.</span>'],
    ['<span class="enc" id="2">Las hojas recogían tu voz lenta y en calma.</span>']
  ];
  
  var rantres = document.getElementsByClassName("imagen3");
  random3.sort(f_randomico);
  for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
      '<span width="50px">' + random3[i][0] + "</span> "
    );
  }
  // #endregion

// #region Pregunta3
$(".enc").click(function() {
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

function pregunta3() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 4; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar1")) {
      if (caja == "Apegada a mis brazos como una enredadera.") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  for (var i = 1; i <= 4; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "Hoguera de estupor en que mi sed ardía.") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  var total = ((respr1 - respr2) * 2) / 2;
  if (total < 0) {
    total = 0;
    tpre3 = total;
  } else {
    tpre3 = total;
  }

  tpre3 = total.toFixed(2);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}

// #endregion

function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
      alert("Pregunta 2: Califiqué la pregunta");
    } else {
      if (
        $("#1").hasClass("subrayar") != true &&
        $("#2").hasClass("subrayar") != true &&
        $("#3").hasClass("subrayar") != true &&
        $("#4").hasClass("subrayar") != true &&
        $("#1").hasClass("subrayar1") != true &&
        $("#2").hasClass("subrayar1") != true &&
        $("#3").hasClass("subrayar1") != true &&
        $("#4").hasClass("subrayar1") != true
      ) {
        alert("Pregunta 3: Subraye al menos una respuesta");
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
  }
}
