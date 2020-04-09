var titulos = "aplico";
numero_pagina(105);


document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 2);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Random1
var random1 = [
  [
    '<h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="3"> veces <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="9"> --> <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="3"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="9"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="27"></h4><img class="img-responsive" src="img/i6_p105_act1.jpg"><img class="img-responsive" src="img/i3_p105_act1.jpg"><br>'
  ],
  [
    '<h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="4"> veces <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="6"> --> <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="4"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="6"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="24"></h4><img class="img-responsive" src="img/i5_p105_act1.jpg"><img class="img-responsive" src="img/i2_p105_act1.jpg"><br>'
  ],
  [
    '<h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="5"> veces <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="2"> --> <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="5"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="2"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="10"></h4><img class="img-responsive" src="img/i4_p105_act1.jpg"><img class="img-responsive" src="img/i1_p105_act1.jpg"><br>'
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
  tpre1 = (nota / 10) * 4;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  [
    '<h4> 4 x 8 = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="32"></h4>'
  ],
  [
    '<h4> 8 x 3 = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="24"></h4>'
  ],
  [
    '<h4> 5 x 6 = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="30"></h4>'
  ],
  [
    '<h4> 7 x 2 = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="14"></h4>'
  ],
  [
    '<h4> 2 x 5 = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10"></h4>'
  ],
  [
    '<h4> 3 x 2 = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></h4>'
  ]
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}

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
  tpre2 = (nota / 10) * 4;
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

// #region Calculo Nota Final
function NotaFinal() {
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

// #endregion
