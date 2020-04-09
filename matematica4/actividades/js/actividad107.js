var titulos = "evaluacion";
numero_pagina(130);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;

function validar3(e) {
  tecla = document.all ? e.keyCode : e.which;
  if (tecla == 8) return true;
  patron = /[,qwertyuiopñlkjhgdsazcxbnmQWERTYUIOPÑLKJHGDSAZCBNM1230456789.]/;
  te = String.fromCharCode(tecla);
  if (patron.test(te)) {
    alert("INGRESE V(VERDADERO) O F(FALSO) ");
    return false;
  }
}

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 1);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre6a"), 1);
});

document.getElementById("pre7a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre7a"), 1);
});

// #region Random1
var random1 = [
  [
    '<h4>En el par ordenado (40 , 30) se encuentra la letra R <input type="text" size="1" style="width:50px" maxlength="1" onkeypress="return validar3(event)" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="v"></h4>'
  ],
  [
    '<h4>El par ordenado (40, 20) corresponde a la letra O <input type="text" size="1" style="width:50px" maxlength="1" onkeypress="return validar3(event)" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="f"></h4>'
  ],
  [
    '<h4>La letra S corresponde al par ordenado (50, 10) <input type="text" size="1" style="width:50px" maxlength="1" onkeypress="return validar3(event)" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="f"></h4>'
  ],
  [
    '<h4>La letra E se encuentra en el par ordenado (60, 50) <input type="text" size="1" style="width:50px" maxlength="1" onkeypress="return validar3(event)" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="v"></h4>'
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
  tpre1 = nota / 10;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  [
    '<span class="enc2" id="2">Conjunto de salida (0, 5, 10, 20, 25),Conjunto de llegada (0, 10, 25, 5, 15)</span>'
  ],
  [
    '<span class="enc2" id="1">Conjunto de llegada (0, 5, 10, 20, 30),Conjunto de salida (0, 10, 25, 5, 15)</span>'
  ],
  [
    '<span class="enc2" id="3">Conjunto de salida (0, 5, 15, 20, 25),Conjunto de llegada (0, 10, 25, 5, 20)</span>'
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
$(".enc2").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta2() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 4; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja ==
        "Conjunto de salida (0, 5, 10, 20, 25),Conjunto de llegada (0, 10, 25, 5, 15)"
      ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 1;
  if (total < 0) {
    total = 0;
    tpre2 = total;
  } else {
    tpre2 = total;
  }

  tpre2 = total.toFixed(2);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
  [
    '<img class="img-responsive" src="img/i2_p130_act3.jpg"><br><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text"  size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="24"></h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="8"> veces <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="24"></h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input  type="hidden" style="color:blue" class="solucion3" value="8"> x <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="24"></h4>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p130_act3.jpg"><br><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> + <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden"   style="color:blue" class="solucion3" value="3"> + <input type="text"  size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden"  style="color:blue" class="solucion3" value="3"> + <input type="text"  size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden"  style="color:blue" class="solucion3" value="3"> + <input type="text"  size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> = <input type="text"  size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden"  style="color:blue" class="solucion3" value="21"></h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input  type="hidden" style="color:blue" class="solucion3" value="7"> veces <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input  type="hidden" style="color:blue" class="solucion3" value="21"></h4><h4><input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input  type="hidden" style="color:blue" class="solucion3" value="7"> x <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"> = <input type="text" size="1" style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="21"></h4>'
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
  tpre3 = (nota * 3) / 10;
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
  var pre4a = document.getElementById("pre4a").value;
  tpre4 = pre4a;
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Random5
var random5 = [
  [
    '<h4>Felipe compra 35 cm de cinta para empacar un regalo, y Joselyn compra 3 dm y 5 cm de cinta. ¿Quién compró más cantidad de cinta?</h4><br><img class="img-responsive" src="img/i1_p130_act5.jpg"><br><h4><b>R.</b> Por lo tanto, Felipe compró 35 cm es <input type="text" size="1" style="width:100px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="igual*="> que Joselyn que compró 3 dm y 5 cm de cinta.</h4>'
  ],
  [
    '<h4>Andrés compra para su negocio de venta de ensaladas de frutas 9 sandías a 3 dólares y 8 guanábanas a 7 dólares. ¿Cuánto paga en total por las frutas?</h4><br><img class="img-responsive" src="img/i2_p130_act5.jpg"><br><h4><b>R.</b> Paga <input type="text" size="1" style="width:50px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="83"> dólares en total.</h4>'
  ],
  [
    '<h4>Priscila compró 5 pares de zapatos a 5 dólares cada par. Esteban compró el doble de los mismos pares de zapatos de Priscila al mismo precio cada par y Jaime el triple de los de la compra de Esteban al mismo precio. ¿Cuánto paga cada uno?</h4><br><h4><b>R.</b> Pricila $ <input type="text" size="1" style="width:50px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="25">, Esteban $ <input type="text" size="1" style="width:50px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="50"> y Jaime $ <input type="text" size="1" style="width:50px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="150">.</h4>'
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
  tpre5 = nota / 5;
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
function pregunta6() {
  var pre6a = document.getElementById("pre6a").value;
  tpre6 = pre6a;
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

// #region Calculo Nota Final
function NotaFinal() {
  var pre4a = document.getElementById("pre4a").value;
  if (pre4a == "") {
    alert("Pregunta 4: Califiqué la pregunta");
  } else {
    var pre6a = document.getElementById("pre6a").value;
    if (pre6a == "") {
      alert("Pregunta 6: Califiqué la pregunta");
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
        var Nf =
          parseFloat(tpre1) +
          parseFloat(tpre2) +
          parseFloat(tpre3) +
          parseFloat(tpre4) +
          parseFloat(tpre5) +
          parseFloat(tpre6) +
          parseFloat(tpre7);

        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}
// #endregion
