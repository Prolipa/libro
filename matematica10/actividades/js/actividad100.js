var titulos = "refuerzo";
numero_pagina(130);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 2);
});

// #region Random1
var random1 = [
  [
    '<div class="col-lg-3"><img class="img-responsive" src="img/i2_p130_act1.jpg"></div><div class="col-lg-9"><table><tr><td><h4><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden"  style="color:blue" class="solucion1" value="3">√(<input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden"  style="color:blue" class="solucion1" value="2">)</h4></td></tr><tr><td class=" numerador"></td></tr><tr><td>&nbsp;<input type="text" size="1" style="width:70px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></td></tr></table></div>'
  ],
  [
    '<div class="col-lg-3"><img class="img-responsive" src="img/i1_p130_act1.jpg"></div><div class="col-lg-9"><h4>y= <input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></h4><br><h4>x= √(<input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3">)</h4></div>'
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
  var respuestas = document.getElementsByClassName("respuestas1");
  var soluciones = document.getElementsByClassName("solucion1");
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
  tpre1 = nota / 5;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  [
    '<div class="col-lg-4"><h4><table><td>Sen(C)=</td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td></tr><tr><td class=" numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td></tr></table></td></table></h4></div><div class="col-lg-4"><h4><table><td>Cos C=</td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"></td></tr><tr><td class=" numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td></tr></table></td></table></h4></div><div class="col-lg-4"><h4><table><td>Tan (C)=</td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td></tr><tr><td class=" numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"></td></tr></table></td></table></h4></div>'
  ],
  [
    '<div class="col-lg-4"><h4><table><td>Sen(B)=</td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"></td></tr><tr><td class=" numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td></tr></table></td></table></h4></div><div class="col-lg-4"><h4><table><td>Cos (B)=</td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td></tr><tr><td class=" numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"></td></tr></table></td></table></h4></div><div class="col-lg-4"><h4><table><td>Tan (B)=</td><td><table><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"></td></tr><tr><td class=" numerador"></td></tr><tr><td><input type="text" size="1" style="width:30px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></td></tr></table></td></table></h4></div>'
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
  tpre2 = nota / 5;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
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
  tpre3 = nota / 5;
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
  tpre4 = nota / 5;
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

var loadValues = {
  preg2: [
    ["Seno", "Coseno", "Tangente"],
    [30, 60, 45],
    ["0,5", "√(2)/2", "√(3)/3"]
  ]
};
var respCor = {
  preg2: [
    ["√(2)/2", "Seno", , "45"],
    ["0,5", "Coseno", "60"],
    ["√(3)/3", "Tangente", "30"]
  ]
};
var valuesAdic = {
  selectorsAct1: [".tabact1 tr td div span", ".tabact1 tr td div input"],
  selectorsAct2: [
    ".columna1draggable span",
    ".columna1droppable",
    ".columna3draggable span"
  ]
};
var classes = {
  preg2DnD: ["dndAligned"]
};
initElementos(".columna1draggable", "span", loadValues.preg2[0], true);
initElementos(".columna1droppable", "span", loadValues.preg2[1], true);
initElementos(".columna3draggable", "span", loadValues.preg2[2], true);

insertAttributeDraggableElements(".columna1draggable");
insertAttributeDroppableElements(".columna1droppable", classes.preg2DnD);
insertAttributeDraggableElements(".columna3draggable");

function pregunta10() {
  var selector = [];
  selector.push(valuesAdic.selectorsAct2[1]);
  calcMultiLinkActivity(
    selector,
    respCor.preg2,
    valuesAdic.selectorsAct2[1],
    "pre5a",
    2,
    true
  );
}
// #region Pregunta10
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

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}

// #endregion
