var titulos = "aplico";
numero_pagina(98);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 2.5);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 2.5);
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
      '<table class="table"><div class="col-sm-6"><img class="img-responsive" src="img/i4_p98_act2.jpg"></div><div class="col-sm-6 cajas"><h4>(<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> ; <input type="text" maxlength="1" size="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">)</h4></div></table>'
    ],
    [
      '<table class="table"><div class="col-sm-6"><img class="img-responsive" src="img/i6_p98_act2.jpg"></div><div class="col-sm-6 cajas"><h4>(<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"> ; <input type="text" maxlength="1" size="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">)</h4></div></table>'
    ],
    [
        '<table class="table"><div class="col-sm-6"><img class="img-responsive" src="img/i7_p98_act2.jpg"></div><div class="col-sm-6 cajas"><h4>(<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas2"><input  type="hidden" style="color:blue" class="solucion2" value="1"> ; <input type="text" maxlength="1" size="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">)</h4></div></table>'
    ],
    [
      '<table class="table"><div class="col-sm-6"><img class="img-responsive" src="img/i3_p98_act2.jpg"></div><div class="col-sm-6 cajas"><h4>(<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"> ; <input type="text" maxlength="1" size="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3">)</h4></div></table>'
    ],
    [
      '<table class="table"><div class="col-sm-6"><img class="img-responsive" src="img/i5_p98_act2.jpg"></div><div class="col-sm-6 cajas"><h4>(<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"> ; <input type="text" maxlength="1" size="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3">)</h4></div></table>'
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
  tpre2 = nota / 4;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
    [
      '<div class="col-sm-6"><h4>¿Dónde está la iglesia (I)?</h4></div><div class="col-sm-6"><h4>Está en (<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="4">,<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="5">)</h4></div>'
    ],
    [
      '<div class="col-sm-6"><h4>¿Dónde está la biblioteca (L)?</h4></div><div class="col-sm-6"><h4>Está en (<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2">,<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2">)</h4></div>'
    ],
    [
        '<div class="col-sm-6"><h4>¿Dónde está el supermercado (S)?</h4></div><div class="col-sm-6"><h4>Está en (<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"> <input type="hidden" style="color:blue" class="solucion3" value="3">,<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="1">)</h4></div>'
    ],
    [
      '<div class="col-sm-6"><h4>¿Dónde está la farmacia (D)?</h4></div><div class="col-sm-6"><h4>Está en (<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="6">,<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="7">)</h4></div>'
    ],
    [
      '<div class="col-sm-6"><h4>¿Dónde está la escuela (E)?</h4></div><div class="col-sm-6"><h4>Está en (<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="1">,<input type="text" size="1" style="width:20px" maxlength="1" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="7">)</h4></div>'
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
    tpre3 = nota / 4;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
function pregunta4() {
  var pre4a = document.getElementById("pre4a").value;
  tpre4 = pre4a;
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
      alert("Pregunta 4: Califiqué la pregunta");
    } else {
      pregunta1();
      pregunta2();
      pregunta3();
      pregunta4();
      var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4);

      var Vtotal = Nf.toFixed(2);
      $("#txtNota").html(Vtotal);
      document.getElementById("bt_comprobar").disabled = true;
    }
  }
}

// #endregion
