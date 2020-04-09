var titulos = "reflexiono";
numero_pagina(72);

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 5);
});

var tpre1 = 0;
var tpre2 = 0;

// #region Random1
var random1 = [
  [
    '<table><td WIDTH="40%" bgcolor="#F1D822"><h4>Es sujeto</h4></td><td WIDTH="10%"><input type="text" style="width:50px" id="cj1b"></td></table>'
  ],
  [
    '<table><td WIDTH="40%" bgcolor="#B4F4A7"><h4>Es predicado</h4></td><td WIDTH="10%"><input type="text" style="width:50px" id="cj1c"></td></table>'
  ],
  [
    '<table><td WIDTH="40%" bgcolor="#D4A4F1"><h4>Es sustantivo</h4></td><td WIDTH="10%"><input type="text" style="width:50px" id="cj1a"></td></table>'
  ],
  [
    '<table><td WIDTH="40%" bgcolor="#9BEFF5"><h4>Es núcleo del predicado</h4></td><td WIDTH="10%"><input type="text" style="width:50px" id="cj1d"></td></table>'
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

  if (cj1a == "x" || cj1a == " x" || cj1a == "  x" ||cj1a == "X" || cj1a == " X" || cj1a == "  X") {
    cor = cor + 1;
    $("#cj1a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1a").removeClass("correcto");
    $("#cj1a").addClass("incorrecto");
  }

  if (cj1b == "x" || cj1b == " x" || cj1b == "  x"||cj1b == "X" || cj1b == " X" || cj1b == "  X") {
    cor = cor + 1;
    $("#cj1b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1b").removeClass("correcto");
    $("#cj1b").addClass("incorrecto");
  }


  var total = ((cor - inc) * 5) / 2;
  if(cor=="1")
  {
      total=2.50;
  }
  if (total<0) {
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
  var pre2a = document.getElementById("pre2a").value;
  tpre2 = pre2a;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

function NotaFinal() {
  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj1d = document.getElementById("cj1d").value;
  if (cj1a == "" && cj1b == "" && cj1c == "" && cj1d == "") {
    alert("Pregunta 1: Seleccione al menos una respuesta");
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
