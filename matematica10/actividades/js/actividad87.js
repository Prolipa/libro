var titulos = "refuerzo";
numero_pagina(92);

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 2);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

// #region Random1
var random1 = [
  [
    '<label>Los ángulos</label><input type="text" id="cj1c"><label>son aquellos que se encuentran a lados contrarios de la recta secante, pero afuera de las paralelas.</label>'
  ],
  [
    '<label>Los ángulos</label><input type="text" id="cj1b"><label>son aquellos que se encuentran a lados contrarios de la recta secante, pero dentro de las paralelas.</label>'
  ],
  [
    '<label>Los ángulos</label><input type="text" id="cj1a"><label>son aquellos que se encuentran a lados contrarios del vértice y son congruentes.</label>'
  ],
  [
    '<label>Los ángulos <input type="text" id="cj1d">son aquellos que se encuentran a un solo lado de la secante, pero uno es interno y el otro es externo y no son consecutivos.</label>'
  ]
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
  $("#" + ranuno[i].id).html(
    '<span width="50px">' + random1[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta1
function pregunta1() {
  var cor = 0;
  var inc = 0;

  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj1d = document.getElementById("cj1d").value;

  if (cj1a == "opuestos por el vértice") {
    cor = cor + 1;
    $("#cj1a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1a").addClass("incorrecto");
  }

  if (cj1b == "alternos internos") {
    cor = cor + 1;
    $("#cj1b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1b").addClass("incorrecto");
  }

  if (cj1c == "alternos internos") {
    cor = cor + 1;
    $("#cj1c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1c").addClass("incorrecto");
  }

  if (cj1d == "correspondientes") {
    cor = cor + 1;
    $("#cj1d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1d").addClass("incorrecto");
  }

  var total = ((cor) * 2) / 4;
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }

  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() {
  var cor = 0;
  var inc = 0;

  var cj2a = document.getElementById("cj2a").value;

  if (cj2a == "5,5") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }

  var total = ((cor) * 2) / 1;
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
  var cor = 0;
  var inc = 0;

  var cj3a = document.getElementById("cj3a").value;
  var cj3b = document.getElementById("cj3b").value;

  if (cj3a == "6") {
    cor = cor + 1;
    $("#cj3a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3a").addClass("incorrecto");
  }

  if (cj3b == "8") {
    cor = cor + 1;
    $("#cj3b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3b").addClass("incorrecto");
  }

  var total = ((cor ) * 2) / 2;
  if (total < 0) {
    total = 0;
    tpre3 = total.toFixed(2);
  } else {
    tpre3 = total.toFixed(2);
  }

  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
function pregunta4() {
  var cor = 0;
  var inc = 0;

  var cj4a = document.getElementById("cj4a").value;

  if (cj4a == "27") {
    cor = cor + 1;
    $("#cj4a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj4a").addClass("incorrecto");
  }

  var total = ((cor ) * 2) / 1;
  if (total < 0) {
    total = 0;
    tpre4 = total.toFixed(2);
  } else {
    tpre4 = total.toFixed(2);
  }
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
function pregunta5() {
  var pre5a = document.getElementById("pre5a").value;

  tpre5 = pre5a;

  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre5a = document.getElementById("pre5a").value;
  if (pre5a == "") {
    alert("Pregunta 5: Califiqué la pregunta");
  } else {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    var Nf =
      parseFloat(tpre1) +
      parseFloat(tpre2) +
      parseFloat(tpre3) +
      parseFloat(tpre4) +
      parseFloat(tpre5);
    var Vtotal = (Nf).toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}

// #endregion
