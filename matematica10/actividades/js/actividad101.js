var titulos = "preparo";
numero_pagina(134);

document.getElementById("pre10a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre10a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre10a"), 1.2);
});

var tpre1a = 0;
var tpre1b = 0;
var tpre1c = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;

// #region Random1
var random1 = [
  [
    '<h4>La pendiente es positiva cuando forma un ángulo <select id="cbounoc"><option value="1">Seleccione</option><option value="2">agudo</option><option value="3">recto</option><option value="4">obtuso</option><option value="5">llano</option></select> con el eje de las abscisas, y es negativa si forma un ángulo <select id="cbounod"><option value="1">Seleccione</option><option value="2">negativo</option><option value="3">positivo</option></select>.</h4>'
  ],
  [
    '<h4>La pendiente de una función lineal indica la inclinación de la recta y, por lo tanto, su monotonía es: <select id="cbounoe"><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">decreciente</option></select> si la pendiente es positiva; y <select id="cbounof"><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">decreciente</option></select> , si es negativa.</h4>'
  ],
  [
    '<h4>En la función y = mx + b, m es la <select id="cbounoa"><option value="1">Seleccione</option><option value="2">parelela</option><option value="3">pendiente</option><option value="4">perpendicular</option></select> y b es <select id="cbounob"><option value="1">Seleccione</option><option value="2">el intercepto con el eje x</option><option value="3">el intercepto con el eje y</option></select>.</h4>'
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
  if (cbounob == "3") {
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
  if (cbounod == "2") {
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
  if (cbounof == "3") {
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
  tpre2 = nota / 10;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
    [
      '<h4>x + y + 12 = 0<br><br> m= <input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="-1"></h4>'
    ],
    [
      '<h4>18x + 3y + 15 = 0<br><br> m= <input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="-6"></h4>'
    ],
    [
      '<h4>y = –2x + 4<br><br> m= <input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="-2"></h4>'
    ],
    [
      '<h4>2x – 3y + 2 = 0<br><br><table><td>m=</td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"></td></tr><tr><td class=" numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"></td></tr></table></td></table></h4>'
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

// #region Random7
var random7 = [
  [
    '<h4>La hipotenusa siempre es <select id="cbosietea"><option value="1">Seleccione</option><option value="2">mayor</option><option value="3">menor</option></select> que cualquiera de sus catetos.</h4>'
  ],
  [
    '<h4>La hipotenusa siempre es <select id="cbosieteb"><option value="1">Seleccione</option><option value="2">mayor</option><option value="3">menor</option></select> que la suma de sus catetos.</h4>'
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

  var total = (cor * 0.4) / 2;
  if (total < 0) {
    total = 0;
    tpre7 = total.toFixed(2);
  } else {
    tpre7 = total.toFixed(2);
  }
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}

// #endregion

// #region Random8
var random8 = [
  [
    '<img class="img-responsive" src="img/i2_p134_act8.jpg"><br><h4>x= <input type="text" size="1" style="width:30px" class=" border-blue respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="8">√(<input type="text" size="1" style="width:30px" class=" border-blue respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="2"> )</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p134_act8.jpg"><br><h4>x= <input type="text" size="1" style="width:30px" class=" border-blue respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="7">√(<input type="text" size="1" style="width:30px" class=" border-blue respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="2"> )</h4>'
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
  tpre8 = nota / 8.33;
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Pregunta9
function pregunta9() {
  var respuestas = document.getElementsByClassName("respuestas9");
  var soluciones = document.getElementsByClassName("solucion9");
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
  tpre9 = nota / 8.33;
  $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Pregunta10
function pregunta10() {
  var pre10a = document.getElementById("pre10a").value;
  tpre10 = pre10a;
  $("#pre10a").val(parseFloat(tpre10).toFixed(2));
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
    alert("Pregunta 1: Seleccione todas las respuestas posibles.");
  } else {
    var cbosietea = document.getElementById("cbosietea").value;
    var cbosieteb = document.getElementById("cbosieteb").value;
    if (cbosietea == "1" || cbosieteb == "1") {
      alert("Pregunta 1: Seleccione todas las respuestas posibles.");
    } else {
      var pre10a = document.getElementById("pre10a").value;
      if (pre10a == "") {
        alert("Pregunta 10: Califiqué la pregunta");
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
        pregunta10();
        var Nf =
          parseFloat(tpre1) +
          parseFloat(tpre2) +
          parseFloat(tpre3) +
          parseFloat(tpre4) +
          parseFloat(tpre5) +
          parseFloat(tpre6) +
          parseFloat(tpre7) +
          parseFloat(tpre8) +
          parseFloat(tpre9) +
          parseFloat(tpre10);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}

// #endregion
