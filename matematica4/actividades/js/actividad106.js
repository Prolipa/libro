var titulos = "preparo";
numero_pagina(128);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 1);
});

// #region Pregunta1
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  [
    '<img class="img-responsive" src="img/i4_p128_act2.jpg"><h4>=(<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="20">,<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="40">)</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i3_p128_act2.jpg"><h4>=(<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="60">,<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10">)</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i6_p128_act2.jpg"><h4>=(<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="90">,<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="50">)</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p128_act2.jpg"><h4>=(<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10">,<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="30">)</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i7_p128_act2.jpg"><h4>=(<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="70">,<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="20">)</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i5_p128_act2.jpg"><h4>=(<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="30">,<input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="30">)</h4>'
  ]
];

var rancuatro = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
  $("#" + rancuatro[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
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
  tpre2 = nota / 10;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}

// #endregion

// #region Random3
var random3 = [
  [
    '<img class="img-responsive" src="img/i1_p128_act3.jpg"><br><h4>8 + 8 + 8 + 8 = 32</h4><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="4"> veces <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="8"> = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="32"></h4><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="4"> x <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="8"> = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="32"></h4><h4>Hay <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="32"> globos.</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p128_act3.jpg"><br><h4>7 + 7 + 7 = 21</h4><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> veces <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="7"> = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="21"></h4><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> x <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="7"> = <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="21"></h4><h4>Hay <input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="21"> globos.</h4>'
  ]
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
function pregunta3() {
  var respuestas = document.getElementsByClassName("respuestas3");
  var soluciones = document.getElementsByClassName("solucion3");
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
  tpre3 = nota / 10;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
  [
    '<img class="img-responsive" src="img/i3_p128_act4.jpg"><br><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> columnas.</h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input  type="hidden" style="color:blue" class="solucion4" value="6"> filas.</h4><h4>  <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> filas de <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> columnas = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30"></h4><h4>  <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> veces el <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30"></h4><h4>  <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> x <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30"></h4>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p128_act4.jpg"><br><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> columnas. </h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input  type="hidden" style="color:blue" class="solucion4" value="4"> filas.</h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> filas de <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input  type="hidden" style="color:blue" class="solucion4" value="6"> columnas = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="24"></h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> veces el <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="24"></h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> x <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="24"></h4>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p128_act4.jpg"><br><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> columnas.</h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> filas.</h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> filas de <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> columnas = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="64"></h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> veces el <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="64"> </h4> <h4> <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> x <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="64"></h4>'
  ]
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
  $("#" + rancuatro[i].id).html(
    '<span width="50px">' + random4[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta4
function pregunta4() {
  var respuestas = document.getElementsByClassName("respuestas4");
  var soluciones = document.getElementsByClassName("solucion4");
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
  tpre4 = nota / 5;
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
function pregunta5() {
  var respuestas = document.getElementsByClassName("respuestas5");
  var soluciones = document.getElementsByClassName("solucion5");
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
  tpre5 = nota / 10;
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
function pregunta6() {
  var respuestas = document.getElementsByClassName("respuestas6");
  var soluciones = document.getElementsByClassName("solucion6");
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
  tpre6 = nota / 10;
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7
function pregunta7() {
  var respuestas = document.getElementsByClassName("respuestas7");
  var soluciones = document.getElementsByClassName("solucion7");
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
  tpre7 = nota / 10;
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Random8
var random8 = [
  [
    '<img class="img-responsive" src="img/i2_p128_act8.jpg"><br><select id="cboochob" class="form-control"><option value="1">Seleccione</option><option value="2">diámetro</option><option value="3">radio</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p128_act8.jpg"><br><select id="cboochoa" class="form-control"><option value="1">Seleccione</option><option value="2">diámetro</option><option value="3">radio</option></select>'
  ]
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

  var cboochoa = document.getElementById("cboochoa").value;
  var cboochob = document.getElementById("cboochob").value;

  if (cboochoa == "3") {
    cor = cor + 1;
    $("#cboochoa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboochoa").removeClass("correcto");
    $("#cboochoa").addClass("incorrecto");
  }
  if (cboochob == "2") {
    cor = cor + 1;
    $("#cboochob").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboochob").removeClass("correcto");
    $("#cboochob").addClass("incorrecto");
  }
  var total = (cor * 1) / 2;
  if (total < 0) {
    total = 0;
    tpre8 = total.toFixed(2);
  } else {
    tpre8 = total.toFixed(2);
  }
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Pregunta9
function pregunta9() {
  var pre9a = document.getElementById("pre9a").value;
  tpre9 = pre9a;
  $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var cboochoa = document.getElementById("cboochoa").value;
    var cboochob = document.getElementById("cboochob").value;
    if (cboochoa == "1" || cboochob == "2") {
      alert("Pregunta 8: Seleccione al menos una respuesta.");
    } else {
      var pre9a = document.getElementById("pre9a").value;
      if (pre9a == "") {
        alert("Pregunta 9: Califiqué la pregunta");
      } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        pregunta8();
        pregunta9();
        var Nf =
          parseFloat(tpre1) +
          parseFloat(tpre2) +
          parseFloat(tpre3) +
          parseFloat(tpre4) +
          parseFloat(tpre5) +
          parseFloat(tpre6) +
          parseFloat(tpre7) +
          parseFloat(tpre8) +
          parseFloat(tpre9);

        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}
// #endregion
