var titulos = "refuerzo";
numero_pagina(80);
document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
// #region Random1
var random1 = [
  [
    '<img class="img-responsive" src="img/i3_p80_act1.jpg"><br><select class="form-control" id="cbounoc">' +
      '<option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p80_act1.jpg"><br><select class="form-control" id="cbounob"><option value="1">Seleccione</option>' +
      '<option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i4_p80_act1.jpg"><br><select class="form-control" id="cbounod">' +
      '<option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p80_act1.jpg"><br><select class="form-control" id="cbounoa"><option value="1">Seleccione</option>' +
      '<option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i5_p80_act1.jpg"><br><select class="form-control" id="cbounoe"><option value="1">Seleccione</option>' +
      '<option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i6_p80_act1.jpg"><br><select class="form-control" id="cbounof">' +
      '<option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
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

  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  var cbounod = document.getElementById("cbounod").value;
  var cbounoe = document.getElementById("cbounoe").value;
  var cbounof = document.getElementById("cbounof").value;

  if (cbounoa == "3") {
    cor = cor + 1;
    $("#cbounoa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoa").removeClass("correcto");
    $("#cbounoa").addClass("incorrecto");
  }
  if (cbounob == "2") {
    cor = cor + 1;
    $("#cbounob").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounob").removeClass("correcto");
    $("#cbounob").addClass("incorrecto");
  }
  if (cbounoc == "2") {
    cor = cor + 1;
    $("#cbounoc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoc").removeClass("correcto");
    $("#cbounoc").addClass("incorrecto");
  }
  if (cbounod == "3") {
    cor = cor + 1;
    $("#cbounod").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounod").removeClass("correcto");
    $("#cbounod").addClass("incorrecto");
  }
  if (cbounoe == "2") {
    cor = cor + 1;
    $("#cbounoe").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoe").removeClass("correcto");
    $("#cbounoe").addClass("incorrecto");
  }
  if (cbounof == "2") {
    cor = cor + 1;
    $("#cbounof").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounof").removeClass("correcto");
    $("#cbounof").addClass("incorrecto");
  }
  var total = (cor * 1) / 6;
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }
}
// #endregion

// #region Random2
var random2 = [
  [
    '<img class="img-responsive" src="img/i2_p80_act2.jpg"><br><select class="form-control" id="cbodosb"><option value="1">Seleccione</option>' +
      '<option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i4_p80_act2.jpg"><br><select class="form-control" id="cbodosd">' +
      '<option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i3_p80_act2.jpg"><br><select class="form-control" id="cbodosc">' +
      '<option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p80_act2.jpg"><br><select class="form-control" id="cbodosa">' +
      '<option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ]
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta2
function pregunta2() {
  var cor = 0;
  var inc = 0;

  var cbodosa = document.getElementById("cbodosa").value;
  var cbodosb = document.getElementById("cbodosb").value;
  var cbodosc = document.getElementById("cbodosc").value;
  var cbodosd = document.getElementById("cbodosd").value;

  if (cbodosa == "3") {
    cor = cor + 1;
    $("#cbodosa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosa").removeClass("correcto");
    $("#cbodosa").addClass("incorrecto");
  }
  if (cbodosb == "2") {
    cor = cor + 1;
    $("#cbodosb").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosb").removeClass("correcto");
    $("#cbodosb").addClass("incorrecto");
  }
  if (cbodosc == "2") {
    cor = cor + 1;
    $("#cbodosc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosc").removeClass("correcto");
    $("#cbodosc").addClass("incorrecto");
  }
  if (cbodosd == "2") {
    cor = cor + 1;
    $("#cbodosd").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosd").removeClass("correcto");
    $("#cbodosd").addClass("incorrecto");
  }

  var total = (cor * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre2 = total.toFixed(2);
  } else {
    tpre2 = total.toFixed(2);
  }
}

// #endregion

// #region Pregunta3
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;

  tpre3 = pre3a;
}
// #endregion

// #region Pregunta4
function pregunta4() {
  var pre4a = document.getElementById("pre4a").value;

  tpre4 = pre4a;
}
// #endregion

// #region Random5
var random5 = [
  [
    "<span>f(x ) = √(2x − 2)</span>" +
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="5"></textarea>'
  ],
  [
    "<span>f(x ) = 5 − 3x</span>" +
      '<textarea class="form-control text-question no-redimensionar " cols="60" rows="5"></textarea>'
  ]
];

var rancinco = document.getElementsByClassName("imagen5");
random5.sort(f_randomico);
for (i = 0; i < rancinco.length; i++) {
  $("#" + rancinco[i].id).html(
    '<span width="50px">' + random5[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta5
function pregunta5() {
  var pre5a = document.getElementById("pre5a").value;

  tpre5 = pre5a;
}
// #endregion

// #region Random6
var random6 = [
  [
    '<img class="img-responsive" src="img/i3_p81_act6.jpg"><br><select class="form-control" id="cboseisc">' +
      '<option value="1">Seleccione</option><option value="2">Par</option><option value="3">Impar</option><option value="4">Ninguna</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p81_act6.jpg"><br><select class="form-control" id="cboseisb">' +
      '<option value="1">Seleccione</option><option value="2">Par</option><option value="3">Impar</option><option value="4">Ninguna</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i4_p81_act6.jpg"><br><select class="form-control" id="cboseisd">' +
      '<option value="1">Seleccione</option><option value="2">Par</option><option value="3">Impar</option><option value="4">Ninguna</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p81_act6.jpg"><br><select class="form-control" id="cboseisa">' +
      '<option value="1">Seleccione</option><option value="2">Par</option><option value="3">Impar</option><option value="4">Ninguna</option></select>'
  ]
];

var ranseis = document.getElementsByClassName("imagen6");
random6.sort(f_randomico);
for (i = 0; i < ranseis.length; i++) {
  $("#" + ranseis[i].id).html(
    '<span width="50px">' + random6[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta6
function pregunta6() {
  var cor = 0;
  var inc = 0;

  var cboseisa = document.getElementById("cboseisa").value;
  var cboseisb = document.getElementById("cboseisb").value;
  var cboseisc = document.getElementById("cboseisc").value;
  var cboseisd = document.getElementById("cboseisd").value;

  if (cboseisa == "3") {
    cor = cor + 1;
    $("#cboseisa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboseisa").removeClass("correcto");
    $("#cboseisa").addClass("incorrecto");
  }
  if (cboseisb == "4") {
    cor = cor + 1;
    $("#cboseisb").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboseisb").removeClass("correcto");
    $("#cboseisb").addClass("incorrecto");
  }
  if (cboseisc == "3") {
    cor = cor + 1;
    $("#cboseisc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboseisc").removeClass("correcto");
    $("#cboseisc").addClass("incorrecto");
  }
  if (cboseisd == "2") {
    cor = cor + 1;
    $("#cboseisd").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboseisd").removeClass("correcto");
    $("#cboseisd").addClass("incorrecto");
  }

  var total = (cor * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre6 = total.toFixed(2);
  } else {
    tpre6 = total.toFixed(2);
  }
}

// #endregion

// #region Random7
var random7 = [
  [
    '<span>f(x ) = 2 −  x<sup>4</sup></span><br><select class="form-control" id="cbosietec"><option value="1">Seleccione</option><option value="2">Par</option><option value="3">Impar</option><option value="4">No es par ni impar</option></select>'
  ],
  [
    '<span>f(x ) = 2x −  x<sup>3</sup></span><br><select class="form-control" id="cbosieteb"><option value="1">Seleccione</option><option value="2">Par</option><option value="3">Impar</option><option value="4">No es par ni impar</option></select>'
  ],
  [
    '<span>f(x ) = x<sup>2</sup>  + 5</span><br><select class="form-control" id="cbosietea"><option value="1">Seleccione</option><option value="2">Par</option><option value="3">Impar</option><option value="4">No es par ni impar</option></select>'
  ],
  [
    '<span>f(x ) = x<sup>2</sup>  − 2x</span><br><select class="form-control" id="cbosieted"><option value="1">Seleccione</option><option value="2">Par</option><option value="3">Impar</option><option value="4">No es par ni impar</option></select>'
  ]
];

var ransiete = document.getElementsByClassName("imagen7");
random7.sort(f_randomico);
for (i = 0; i < ransiete.length; i++) {
  $("#" + ransiete[i].id).html(
    '<span width="50px">' + random7[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta7
function pregunta7() {
  var cor = 0;
  var inc = 0;

  var cbosietea = document.getElementById("cbosietea").value;
  var cbosieteb = document.getElementById("cbosieteb").value;
  var cbosietec = document.getElementById("cbosietec").value;
  var cbosieted = document.getElementById("cbosieted").value;

  if (cbosietea == "2") {
    cor = cor + 1;
    $("#cbosietea").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbosietea").removeClass("correcto");
    $("#cbosietea").addClass("incorrecto");
  }
  if (cbosieteb == "3") {
    cor = cor + 1;
    $("#cbosieteb").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbosieteb").removeClass("correcto");
    $("#cbosieteb").addClass("incorrecto");
  }
  if (cbosietec == "2") {
    cor = cor + 1;
    $("#cbosietec").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbosietec").removeClass("correcto");
    $("#cbosietec").addClass("incorrecto");
  }
  if (cbosieted == "4") {
    cor = cor + 1;
    $("#cbosieted").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbosieted").removeClass("correcto");
    $("#cbosieted").addClass("incorrecto");
  }

  var total = (cor * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre7 = total.toFixed(2);
  } else {
    tpre7 = total.toFixed(2);
  }
}

// #endregion

// #region Random8
var random8 = [
  [
    '<span>El intervalo donde la función es constante es:</span><input type="text" id="cj8e">'
  ],
  ['<span>El recorrido de la función es:</span><input type="text" id="cj8b">'],
  [
    '<span>El intervalo de decrecimiento es:</span><input type="text" id="cj8d">'
  ],
  ['<span>El dominio de la función es:</span><input type="text" id="cj8a">'],
  [
    '<span>¿La simetría de la función es par, impar o ninguna?</span><input type="text" id="cj8f">'
  ],
  ['<span>El intervalo de crecimiento es:</span><input type="text" id="cj8c">']
];

var ranocho = document.getElementsByClassName("imagen8");
random8.sort(f_randomico);
for (i = 0; i < ranocho.length; i++) {
  $("#" + ranocho[i].id).html(
    '<span width="50px">' + random8[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta8
function pregunta8() {
  var cor = 0;
  var inc = 0;

  var cj8a = document.getElementById("cj8a").value;
  var cj8b = document.getElementById("cj8b").value;
  var cj8c = document.getElementById("cj8c").value;
  var cj8d = document.getElementById("cj8d").value;
  var cj8e = document.getElementById("cj8e").value;
  var cj8f = document.getElementById("cj8f").value;

  if (cj8a == "[−2,5]") {
    cor = cor + 1;
    $("#cj8a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8a").addClass("incorrecto");
  }

  if (cj8b == "[−7,2]") {
    cor = cor + 1;
    $("#cj8b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8b").addClass("incorrecto");
  }

  if (cj8c == "[1,2]") {
    cor = cor + 1;
    $("#cj8c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8c").addClass("incorrecto");
  }

  if (cj8d == "[−2,1]") {
    cor = cor + 1;
    $("#cj8d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8d").addClass("incorrecto");
  }

  if (cj8e == "[2,5]") {
    cor = cor + 1;
    $("#cj8e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8e").addClass("incorrecto");
  }

  if (cj8f == "Ninguna" || cj8f == "ninguna") {
    cor = cor + 1;
    $("#cj8f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8f").addClass("incorrecto");
  }

  var total = (cor * 1) / 6;
  if (total < 0) {
    total = 0;
    tpre8 = total.toFixed(2);
  } else {
    tpre8 = total.toFixed(2);
  }
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  var cbounod = document.getElementById("cbounod").value;
  var cbounoe = document.getElementById("cbounoe").value;
  var cbounof = document.getElementById("cbounof").value;
  if (
    cbounoa == "1" ||
    cbounob == "1" ||
    cbounoc == "1" ||
    cbounod == "1" ||
    cbounoe == "1" ||
    cbounof == "1"
  ) {
    alert("Pregunta 1: Seleccione todas las respuestas posibles");
  } else {
    if (cbodosa == "1" || cbodosb == "1" || cbodosc == "1" || cbodosd == "1") {
      alert("Pregunta 2: Seleccione todas las respuestas posibles");
    } else {
      var cboseisa = document.getElementById("cboseisa").value;
      var cboseisb = document.getElementById("cboseisb").value;
      var cboseisc = document.getElementById("cboseisc").value;
      var cboseisd = document.getElementById("cboseisd").value;
      if (
        cboseisa == "1" ||
        cboseisb == "1" ||
        cboseisc == "1" ||
        cboseisd == "1"
      ) {
        alert("Pregunta 6: Seleccione todas las respuestas posibles");
      } else {
        var cbosietea = document.getElementById("cbosietea").value;
        var cbosieteb = document.getElementById("cbosieteb").value;
        var cbosietec = document.getElementById("cbosietec").value;
        var cbosieted = document.getElementById("cbosieted").value;
        if (
          cbosietea == "1" ||
          cbosieteb == "1" ||
          cbosietec == "1" ||
          cbosieted == "1"
        ) {
          alert("Pregunta 7: Seleccione todas las respuestas posibles");
        } else {
          var pre3a = document.getElementById("pre3a").value;
          var pre4a = document.getElementById("pre4a").value;
          var pre5a = document.getElementById("pre5a").value;

          if (pre3a == "" || pre4a == "" || pre5a == "") {
            alert("Califique todas las preguntas!");
          } else {
            pregunta1();
            pregunta2();
            pregunta3();
            pregunta4();
            pregunta5();
            pregunta6();
            pregunta7();
            pregunta8();
            var Nf =
              parseFloat(tpre1) +
              parseFloat(tpre2) +
              parseFloat(tpre3) +
              parseFloat(tpre4) +
              parseFloat(tpre5) +
              parseFloat(tpre6) +
              parseFloat(tpre7) +
              parseFloat(tpre8);
            var Vtotal = (Nf * 10) / 8;
            var total = Vtotal.toFixed(2);
            $("#txtNota").html(total);
            document.getElementById("bt_comprobar").disabled = true;
          }
        }
      }
    }
  }
}

// #endregion
