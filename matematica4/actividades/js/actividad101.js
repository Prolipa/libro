var titulos = "aplico";
numero_pagina(109);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 2);
});

// #region Random1
var random1 = [
  [
    '<h4> 4 filas de 3 columnas = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="12"></h4> <h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="4"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="3"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="12"></h4> <br> <table> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr></table>'
  ],
  [
    '<h4> 3 filas de 6 columnas = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="18"></h4> <h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="3"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="6"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="18"></h4> <br> <table> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></table>'
  ],
  [
    '<h4> 5 filas de 2 columnas = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="10"></h4> <h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="5"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="2"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="10"></h4> <br> <table> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr> </table>'
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
$(".enc").click(function() {
  if ($(this).hasClass("pintar")) {
    $(this).removeClass("pintar");
  } else {
    $(this).addClass("pintar");
  }
});
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  [
    '<img class="img-responsive" src="img/i2_p109_act2.jpg"><br><h4><input type="text" size="1" maxlength="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"> x <input type="text" size="1" maxlength="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> = 15</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p109_act2.jpg"><br><h4><input type="text" size="1" maxlength="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"> x <input type="text" size="1" maxlength="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> = 10</h4>'
  ],
  [
    '<img class="img-responsive" src="img/i3_p109_act2.jpg"><br><h4><input type="text" size="1" maxlength="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"> x <input type="text" size="1" maxlength="1" style="width:20px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"> = 32</h4>'
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
  tpre2 = nota / 10;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
  [
    '<div class="col-sm-6"><h4>3 x 10 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="30"></h4><h4>3 x 3 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="9"></h4><br><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="30"> + <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input  type="hidden" style="color:blue" class="solucion3" value="9"> = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="39"></h4></div><div class="col-sm-6"><table style="text-align: center" bordercolor="#E7892B" border="1"><tr><td width="33" bgcolor="#EAB784" style="color: #FFFFFF;border-color: #FFFFFF"><h4><font color="green">C</font><br></h4></td><td width="33" bgcolor="#EAB784" style="color: #FFFFFF;border-color: #FFFFFF"><h4><font color="purple">D</font><br></h4></td><td width="33" bgcolor="#EAB784" style="color: #FFFFFF;border-color: #FFFFFF"><h4><font color="blue">U</font><br></h4></td></tr><tr><td><h4><b></b></h4></td><td><h4>1</h4></td><td><h4>3</h4></td></tr><tr><td><h4><b></b></h4></td><td><h4></h4></td><td><h4>3</h4></td></tr><tr class="cajas"><td><h4><b></b></h4></td><td><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"></h4></td><td><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="9"></h4></td></tr></table><br></div>'
  ],
  [
    '<div class="col-sm-6"><h4>2 x 10 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="20"></h4><h4>2 x 3 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="6"></h4><br><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="20"> + <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="6"> = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="26"></h4></div><div class="col-sm-6"><table style="text-align: center" bordercolor="#E7892B" border="1"><tr><td width="33" bgcolor="#EAB784" style="color: #FFFFFF;border-color: #FFFFFF"><h4><font color="green">C</font><br></h4></td><td width="33" bgcolor="#EAB784" style="color: #FFFFFF;border-color: #FFFFFF"><h4><font color="purple">D</font><br></h4></td><td width="33" bgcolor="#EAB784" style="color: #FFFFFF;border-color: #FFFFFF"><h4><font color="blue">U</font><br></h4></td></tr><tr><td><h4><b></b></h4></td><td><h4>1</h4></td><td><h4>3</h4></td></tr><tr><td><h4><b></b></h4></td><td><h4></h4></td><td><h4>2</h4></td></tr><tr class="cajas"><td><h4><b></b></h4></td><td><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"></h4></td><td><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="6"></h4></td></tr></table><br></div>'
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
  tpre3 = nota / 5;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
  [
    '<img class="img-responsive" src="img/i2_p109_act4.jpg"><br><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> x <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="16"></h4>'
  ],
  [
    '<img class="img-responsive" src="img/i3_p109_act4.jpg"><br><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> x <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6"> = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="36"></h4>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p109_act4.jpg"><br><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"> x <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3">= <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="9"></h4>'
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

// #region Random5
var random5 = [
  [
    '<h4> 5 x 5 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="25"></h4><br><table><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr></table>'
  ],
  [
    '<h4>6 x 6 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="36"></h4><br><table><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr></table>'
  ],
  [
    '<h4>2 x 2 = <input type="text"  size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="4"></h4><br><table><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr></table>'
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
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
function pregunta6() 
{
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
  tpre6 = nota / 5;
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre5a = document.getElementById("pre5a").value;
    if (pre5a == "") {
      alert("Pregunta 5: Califiqué la pregunta");
    } else {
      pregunta1();
      pregunta2();
      pregunta3();
      pregunta4();
      pregunta5();
      pregunta6();
      var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4) +
        parseFloat(tpre5) +
        parseFloat(tpre6);

      var Vtotal = Nf.toFixed(2);
      $("#txtNota").html(Vtotal);
      document.getElementById("bt_comprobar").disabled = true;
    }
  }
}

// #endregion
