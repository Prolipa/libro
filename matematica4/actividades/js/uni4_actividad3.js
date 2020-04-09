var titulos = "aplico";
numero_pagina(163);

var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
var random1 = [
  ['<span class="enc1" id="1">$ 1</span>'],
  ['<span class="enc1" id="2">$ 1 con 25 ctvs</span>'],
  ['<span class="enc1" id="3">$ 1 con 50 ctvs</span>']
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
  $("#" + ranuno[i].id).html(
    '<span width="50px">' + random1[i][0] + "</span> "
  );
}

var random2 = [
  ['<span class="enc1" id="4">$ 3</span>'],
  ['<span class="enc1" id="5">$ 4</span>'],
  ['<span class="enc1" id="6">$ 5</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}

var random3 = [
  ['<span class="enc1" id="7">$ 8 con 25 ctvs</span>'],
  ['<span class="enc1" id="8">$ 9</span>'],
  ['<span class="enc1" id="9">$ 9 con 25 ctvs</span>']
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
  $("#" + rantres[i].id).html(
    '<span width="50px">' + random3[i][0] + "</span> "
  );
}
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
  for (var i = 1; i <= 9; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "$ 1" || caja=="$ 4" || caja=="$ 9 con 25 ctvs") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 5) / 3;
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
  var respuestas = document.getElementsByClassName("respuestas2");
  var soluciones = document.getElementsByClassName("solucion2");
  var valor = valor_pregunta(respuestas);
  var nota = 0;
  for (var i = 0; i < respuestas.length; i++) {
    if (
      verificar_contenido(
        respuestas[i].value.toLowerCase(),
        soluciones[i].value.toLowerCase().split("*")
      )
    ) {
      respuestas[i].classList.add("valid");
      respuestas[i].classList.remove("no-valid");
      nota += valor;
    } else {
      respuestas[i].classList.add("no-valid");
      respuestas[i].classList.remove("valid");
    }
  }
  tpre2 = nota / 2;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  var Nf =
    parseFloat(tpre1) +
    parseFloat(tpre2);

  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
  $("input").attr('disabled','disabled');
}

// #endregion
