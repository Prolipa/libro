var titulos = "aplico";
numero_pagina(124);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre7a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre7a"), 1);
});

// #region Pregunta1
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2a
var random2a = [
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔAB<sub>1</sub>C<sub>1</sub> ⇒ sen (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2" ><input type="hidden" style="color:blue" class="solucion2" value="10"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="26"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="6" size="1"  style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,3846"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ],
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔABC ⇒ sen (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="13"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="6" size="1" style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,3846"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ],
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔAB<sub>2</sub>C<sub>2</sub> ⇒ sen (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="15"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="39"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="6" size="1" style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,3846"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ]
];

var randosa = document.getElementsByClassName("imagen2a");
random2a.sort(f_randomico);
for (i = 0; i < randosa.length; i++) {
  $("#" + randosa[i].id).html(
    '<span width="50px">' + random2a[i][0] + "</span> "
  );
}
// #endregion
// #region Random2b
var random2b = [
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔAB<sub>1</sub>C<sub>1</sub> ⇒ cos (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="24"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="26"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="6" size="1" style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,9230"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ],
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔABC ⇒ cos (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="12"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="13"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="6" size="1" style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,9230"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ],
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔAB<sub>2</sub>C<sub>2</sub> ⇒ cos (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="36"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="39"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="6" size="1" style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,9230"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ]
];

var randosb = document.getElementsByClassName("imagen2b");
random2b.sort(f_randomico);
for (i = 0; i < randosb.length; i++) {
  $("#" + randosb[i].id).html(
    '<span width="50px">' + random2b[i][0] + "</span> "
  );
}
// #endregion
// #region Random2c
var random2c = [
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔAB<sub>1</sub>C<sub>1</sub> ⇒ tan (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="24"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="5" size="1" style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,416"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ],
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔAB<sub>2</sub>C<sub>2</sub> ⇒ tan (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="15"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="36"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="5" size="1" style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,416"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ],
  [
    '<table class="table"><td WIDTH="40%"><h4><b>ΔABC ⇒ tan (θ) =</b></h4></td><td WIDTH="60%"><table><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="12"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label>= <input type="text" maxlength="5" size="1" style="width:80px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0,416"></label></td></tr><tr><td></td></tr></table></td></table></td></table>'
  ]
];

var randosc = document.getElementsByClassName("imagen2c");
random2c.sort(f_randomico);
for (i = 0; i < randosc.length; i++) {
  $("#" + randosc[i].id).html(
    '<span width="50px">' + random2c[i][0] + "</span> "
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
    '<table class="table"><td><table><td><table><tr><td></td></tr><tr><td><label>sen (α) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="8"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="15"></td></tr></table></td></table></td><td><table><td><table><tr><td></td></tr><tr><td><label>cos (α) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="38"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="45"></td></tr></table></td></table></td> <td><table><td><table><tr><td></td></tr><tr><td><label>tan (α) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="24"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="38"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label> &nbsp;= </label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="19"></td></tr></table></td></table></td></table>'
  ],
  [
    '<table class="table"><td><table><td><table><tr><td></td></tr><tr><td><label>sen (β) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="38"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="45"></td></tr></table></td></table></td><td><table><td><table><tr><td></td></tr><tr><td><label>cos (β) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="8"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="15"></td></tr></table></td></table></td><td><table><td><table><tr><td></td></tr><tr><td><label>tan (β) =</label></td></tr><tr><td></td> </tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="38"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="24"></td></tr></table></td><td><table><tr><td></td></tr><tr><td><label> &nbsp;= </label></td></tr><tr><td></td></tr></table> </td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="19"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"></td></tr></table></td></table></td></table>'
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
    '<table class="table"><td><table><td><table><tr><td></td></tr><tr><td><label>sen (C) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"></td></tr></table></td> </table></td><td><table><td><table><tr><td></td></tr><tr><td><label>cos (C) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"></td></tr></table></td></table></td><td><table><td><table><tr><td></td></tr><tr><td><label>tan (C) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"></td></tr></table></td></table></td></table>'
  ],
  [
    '<table class="table"><td><table><td><table><tr><td></td></tr><tr><td><label>sen (B) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input  type="hidden" style="color:blue" class="solucion4" value="5"></td></tr></table></td></table></td><td><table><td><table><tr><td></td></tr><tr><td><label>cos (B) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"></td></tr></table></td></table></td><td><table><td><table><tr><td></td></tr><tr><td><label>tan (B) =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"></td></tr></table></td></table></td></table>'
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
  tpre4 = nota / 10;
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

// #region Random6
var random6 = [
  [
    '<img class="img-responsive" src="img/i3_p124_act6.jpg"><br><label>M =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="60">°</label><br><label>N =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="30">°</label><br><label>O =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="90">°</label><br><label>m =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="8">√( <input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="3">)</label><br><label>n =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="8"></label><br><label>o =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="16"></label>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p124_act6.jpg"><br><label>B =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="90">°</label><br><label>C =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="45">°</label><br><label>a =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="4"></label><br><label>b =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="4"></label><br><label>c =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="4">√( <input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="2">)</label>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p124_act6.jpg"><br><label>P =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="48,37">°</label><br><label>Q =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="90">°</label><br><label>R =<input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="41,63">°</label><br><label>q =√( <input type="text" size="1" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="145">)=<input type="text" size="1" maxlength="5" style="width:60px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="12,04"></label>'
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
  var pre7a = document.getElementById("pre7a").value;
  tpre7 = pre7a;
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Pregunta8
function pregunta8() 
{
    var respuestas = document.getElementsByClassName("respuestas8");
  var soluciones = document.getElementsByClassName("solucion8");
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
  tpre8 = nota / 10;
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre7a = document.getElementById("pre7a").value;
    if (pre7a == "") {
      alert("Pregunta 7: Califiqué la pregunta");
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

      var Vtotal = ((Nf*10)/8).toFixed(2);
      $("#txtNota").html(Vtotal);
      document.getElementById("bt_comprobar").disabled = true;
    }
  }
}

// #endregion
