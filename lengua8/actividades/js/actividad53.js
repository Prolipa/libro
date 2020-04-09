var titulos = "aplico";
numero_pagina(59);

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 4);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 2);
});


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Random2
var random2 = [
  ['<span class="enc2" id="1">objetivo u omnisciente</span>'],
  ['<span class="enc2" id="2">subjetivo</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}
// #endregion

// #region Random3
var random3 = [
  ['<span class="enc2" id="3">primera</span>'],
  ['<span class="enc2" id="5">segunda</span>'],
  ['<span class="enc2" id="4">tercera</span>']
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
  $("#" + rantres[i].id).html(
    '<span width="50px">' + random3[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta4
$(".enc2").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta1() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 5; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "objetivo u omnisciente" || caja == "primera") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 4) / 2;
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

// #region Random2
var testimg = [["1", "img/i1_p59_act2.jpg"], ["2", "img/i2_p59_act2.jpg"]];

finitimg();

function finitimg() {
  var rancuatro = document.getElementsByClassName("imagen4");

  testimg.sort(f_randomico);
  for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
      "<img id=" +
        testimg[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta2

$(".enc4").click(function() {
  if ($(this).hasClass("seleccionCajai")) {
    $(this).removeClass("seleccionCajai");
  } else {
    $(this).addClass("seleccionCajai");
  }
});

function pregunta2() {
  var pre2a = document.getElementById("pre2a").value;
  tpre2 = pre2a;
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
  if (
    $("#1").hasClass("subrayar") != true &&
    $("#2").hasClass("subrayar") != true &&
    $("#3").hasClass("subrayar") != true &&
    $("#4").hasClass("subrayar") != true &&
    $("#5").hasClass("subrayar") != true
  ) {
    alert("Pregunta 1: Subraye al menos una respuesta");
  } else {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
      alert("Pregunta 2: Califiqué la pregunta");
    } else {
      var cj1a = document.getElementById("cj1a").value;
      var cj1b = document.getElementById("cj1b").value;
      if (cj1a == "" && cj1b == "") {
        alert("Pregunta 3. Responda a la pregunta");
      } else {
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
    }
  }
}
