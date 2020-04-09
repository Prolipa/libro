var titulos = "refuerzo";
numero_pagina(118);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;
var tpre11 = 0;

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

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1);
});

// #region Random1
var random1 = [
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#3498DB"><td WIDTH="50%"><select id="cbounoc" class="form-control"><option value="1">Seleccione</option><option value="2">Cero</option><option value="3">Negativa</option><option value="4">No Definida</option><option value="5">Positiva</option></select></td><td WIDTH="50%">Horizontal</td></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#3498DB"><td WIDTH="50%"><select id="cbounob" class="form-control"><option value="1">Seleccione</option><option value="2">Cero</option><option value="3">Negativa</option><option value="4">No Definida</option><option value="5">Positiva</option></select></td><td WIDTH="50%">Decreciente</td></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#3498DB"><td WIDTH="50%"><select id="cbounod" class="form-control"><option value="1">Seleccione</option><option value="2">Cero</option><option value="3">Negativa</option><option value="4">No Definida</option><option value="5">Positiva</option></select></td><td WIDTH="50%">Vertical</td></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#3498DB"><td WIDTH="50%"><select id="cbounoa" class="form-control"><option value="1">Seleccione</option><option value="2">Cero</option><option value="3">Negativa</option><option value="4">No Definida</option><option value="5">Positiva</option></select></td><td WIDTH="50%">Creciente</td></table>'
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

  if (cbounoa == "5") {
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
  if (cbounod == "4") {
    cor = cor + 1;
    $("#cbounod").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounod").removeClass("correcto");
    $("#cbounod").addClass("incorrecto");
  }

  var total = (cor * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  [
    '<center><label><h4>m es <select id="cbodose" ><option value="1">Seleccione</option><option value="2">igual</option><option value="3">indefinida</option><option value="4">mayor</option><option value="5">menor</option></select> a cero</h4></label><img class="img-responsive" src="img/i3_p118_act2.jpg"><label><h4>Monotonía <select id="cbodosf" ><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">constante</option><option value="4">decreciente</option><option value="5">indefinida</option></select></h4></label></center>'
  ],
  [
    '<center><label><h4>m es <select id="cbodosc" ><option value="1">Seleccione</option><option value="2">igual</option><option value="3">indefinida</option><option value="4">mayor</option><option value="5">menor</option></select> a cero</h4></label><img class="img-responsive" src="img/i2_p118_act2.jpg"><label><h4>Monotonía <select id="cbodosd" ><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">constante</option><option value="4">decreciente</option><option value="5">indefinida</option></select></h4></label></center>'
  ],
  [
    '<center><label><h4>m es <select id="cbodosa" ><option value="1">Seleccione</option><option value="2">igual</option><option value="3">indefinida</option><option value="4">mayor</option><option value="5">menor</option></select> a cero</h4></label><img class="img-responsive" src="img/i1_p118_act2.jpg"><label><h4>Monotonía <select id="cbodosb" ><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">constante</option><option value="4">decreciente</option><option value="5">indefinida</option></select></h4></label></center>'
  ],
  [
    '<center><label><h4>m es <select id="cbodosg" ><option value="1">Seleccione</option><option value="2">igual</option><option value="3">indefinida</option><option value="4">mayor</option><option value="5">menor</option></select> a cero</h4></label><img class="img-responsive" src="img/i4_p118_act2.jpg"><label><h4>Monotonía <select id="cbodosh" ><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">constante</option><option value="4">decreciente</option><option value="5">indefinida</option></select></h4></label></center>'
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
  var cbodose = document.getElementById("cbodose").value;
  var cbodosf = document.getElementById("cbodosf").value;
  var cbodosg = document.getElementById("cbodosg").value;
  var cbodosh = document.getElementById("cbodosh").value;

  if (cbodosa == "4") {
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
  if (cbodosc == "5") {
    cor = cor + 1;
    $("#cbodosc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosc").removeClass("correcto");
    $("#cbodosc").addClass("incorrecto");
  }
  if (cbodosd == "4") {
    cor = cor + 1;
    $("#cbodosd").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosd").removeClass("correcto");
    $("#cbodosd").addClass("incorrecto");
  }
  if (cbodose == "2") {
    cor = cor + 1;
    $("#cbodose").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodose").removeClass("correcto");
    $("#cbodose").addClass("incorrecto");
  }
  if (cbodosf == "3") {
    cor = cor + 1;
    $("#cbodosf").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosf").removeClass("correcto");
    $("#cbodosf").addClass("incorrecto");
  }
  if (cbodosg == "3") {
    cor = cor + 1;
    $("#cbodosg").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosg").removeClass("correcto");
    $("#cbodosg").addClass("incorrecto");
  }
  if (cbodosh == "5") {
    cor = cor + 1;
    $("#cbodosh").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosh").removeClass("correcto");
    $("#cbodosh").addClass("incorrecto");
  }

  var total = (cor * 1) / 8;
  if (total < 0) {
    total = 0;
    tpre2 = total.toFixed(2);
  } else {
    tpre2 = total.toFixed(2);
  }
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

// #region Random4
var random4 = [
  [
    '<span><h4> Si la pendiente es igual a cero, la gráfica es una recta horizontal o función constante.<input type="text" maxlength="1" size="1" style="width:30px" class=" border-blue respuestas4" onkeypress="return validar3(event)"><input type="hidden"  style="color:blue" class="solucion4" value="v*V"></h4></span><textarea class="form-control text-question no-redimensionar " cols="60" rows="1" placeholder="Texto"></textarea>'
  ],
  [
    '<span><h4> El corte con el eje de las ordenadas en la ecuación 4x − y + 7 = 0 es b = 7. <input type="text" maxlength="1" size="1" style="width:30px" class=" border-blue respuestas4" onkeypress="return validar3(event)"><input type="hidden"  style="color:blue" class="solucion4" value="v*V"></h4></span><textarea class="form-control text-question no-redimensionar " cols="60" rows="1" placeholder="Texto"></textarea>'
  ],
  [
    '<span><h4> El punto (2, –1) pertenece a la recta y = −4x + 7. <input type="text" maxlength="1" size="1" style="width:30px" class=" border-blue respuestas4" onkeypress="return validar3(event)"><input type="hidden"  style="color:blue" class="solucion4" value="V*v"></h4></span><textarea class="form-control text-question no-redimensionar " cols="60" rows="1" placeholder="Texto"></textarea>'
  ],
  [
    '<span><h4> Una ecuación 2y + 3x = 0 tiene pendiente positiva. <input type="text" maxlength="1" size="1" style="width:30px" class=" border-blue respuestas4" onkeypress="return validar3(event)"><input type="hidden"  style="color:blue" class="solucion4" value="F*f"></h4></span><textarea class="form-control text-question no-redimensionar " cols="60" rows="1" placeholder="Texto"></textarea>'
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

// #region Random5
var random5 = [
  [
    '<span><h4>La posición de una persona que recorre una pista dando x pasos por minuto, si camina durante 45 minutos.</h4></span><br> <h4><label>G(x) =</label> <input type="text" size="1" style="width:50px" class=" border-blue respuestas5"> <input type="hidden" style="color:blue" class="solucion5" value="45x"> <label>(<input type="text" size="1" style="width:50px" class=" border-blue respuestas5"> <input type="hidden" style="color:blue" class="solucion5" value="pasos*Pasos"> / <input type="text" size="1" style="width:70px" class=" border-blue respuestas5"> <input type="hidden" style="color:blue" class="solucion5" value="minutos*Minutos">)</label></h4>'
  ],
  [
    '<span><h4>La ganancia de vender cierta cantidad de helados a $ 0,50 cada uno, si el costo de producción fijo es de $ 20.</h4></span><br><h4><label>G(x) =</label><input type="text" size="1" style="width:50px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="0,50x">&nbsp;<input type="text" size="1" style="width:15px" class=" border-blue respuestas5"><input type="hidden" maxlength="1" style="color:blue" class="solucion5" value="-">&nbsp;<input type="text" size="1" style="width:50px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="20"></h4>'
  ],
  [
    '<span><h4>Un ciclista profesional cobra en una carrera de exhibición un valor de $ 25 por cada kilómetro que recorra.</h4></span><br><h4><label>G(x) =</label><input type="text" size="1" style="width:50px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="25x"></h4>'
  ],
  [
    '<span><h4>El costo mensual fijo de una línea telefónica es de $ 6,25; y se cobra $ 0,01 por cada minuto consumido.</h4></span><br> <h4><label>G(x) =</label> <input type="text" size="1" style="width:50px" class=" border-blue respuestas5"> <input type="hidden" style="color:blue" class="solucion5" value="0,01x">&nbsp; <input type="text" size="1" style="width:15px" class=" border-blue respuestas5"> <input type="hidden" maxlength="1" style="color:blue" class="solucion5" value="+">&nbsp; <input type="text" size="1" style="width:50px" class=" border-blue respuestas5"> <input type="hidden" style="color:blue" class="solucion5" value="6,25"></h4>'
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
  tpre5 = nota / 10;
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Random6
var random6 = [
  [
    '<h4>L<sub>1</sub> : 3x + 2y = 15 <br> L<sub>2</sub> : 2x - 3y = 5</h4><br><label>L<sub>1</sub> <select id="cboseisc" ><option value="1">Seleccione</option><option value="2">es paralela a</option><option value="3">es perpendicular a</option><option value="4">es secante a</option></select> L<sub>2</sub></label>'
  ],
  [
    '<h4>L<sub>1</sub> : y + 3x - 1 = 0 <br> L<sub>2</sub> : 6x + 2y = -4</h4><br><label>L<sub>1</sub> <select id="cboseisa" ><option value="1">Seleccione</option><option value="2">es paralela a</option><option value="3">es perpendicular a</option><option value="4">es secante a</option></select> L<sub>2</sub></label>'
  ],
  [
    '<h4>L<sub>1</sub> : 4x - y - 2 = 0 <br> L<sub>2</sub> : x - 4y = 4</h4><br><label>L<sub>1</sub> <select id="cboseisb" ><option value="1">Seleccione</option><option value="2">es paralela a</option><option value="3">es perpendicular a</option><option value="4">es secante a</option></select> L<sub>2</sub></label>'
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

  if (cboseisa == "2") {
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

  var total = (cor * 1) / 3;
  if (total < 0) {
    total = 0;
    tpre6 = total.toFixed(2);
  } else {
    tpre6 = total.toFixed(2);
  }
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Random7
var random7 = [
  [
    '<label>m = −7 y b = −8</label><br><br><input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="y">&nbsp;<input type="text" size="1" maxlength="1" style="width:15px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="+">&nbsp;<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="7x">&nbsp;<input type="text" size="1" maxlength="1" style="width:15px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="+">&nbsp;<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="8">&nbsp;= <input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="0">'
  ],
  [
    '<label>m = 2/5 y b = −3</label><br><br><input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="2x">&nbsp;<input type="text" size="1" maxlength="1" style="width:15px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="-">&nbsp;<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="5y">&nbsp;<input type="text" size="1" maxlength="1" style="width:15px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="-">&nbsp;<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="15">&nbsp;=<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="0">'
  ],
  [
    '<label>m = 5 y b = −2</label><br><br> <input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="y">&nbsp;<input type="text" size="1" maxlength="1" style="width:15px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="-">&nbsp;<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="5x">&nbsp;<input type="text" size="1" maxlength="1" style="width:15px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="+">&nbsp;<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="2">&nbsp;=<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="0">'
  ],
  [
    '<label>m = −7/3 y b = −5/7</label><br><br><input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="49x">&nbsp;<input type="text" size="1" maxlength="1" style="width:15px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="+">&nbsp;<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="21y">&nbsp;<input type="text" size="1" maxlength="1" style="width:15px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="+">&nbsp;<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="15">&nbsp;=<input type="text" size="1" style="width:30px" class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="0">'
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
    '<h4>m<sub>1</sub> = 4/10 y m<sub>-2</sub> = -5/2 <b>rectas</b><select id="cboochob"><option value="1">Seleccione</option><option value="2">paralelas</option><option value="3">perpendiculares</option><option value="4">secantes</option></select></h4>'
  ],
  [
    '<h4>m<sub>1</sub> = -3 y m<sub>2</sub> = -21/7 <b>rectas</b><select id="cboochod"><option value="1">Seleccione</option><option value="2">paralelas</option><option value="3">perpendiculares</option><option value="4">secantes</option></select></h4>'
  ],
  [
    '<h4>m<sub>1</sub> = 3 y m<sub>2</sub> = -3 <b>rectas</b><select id="cboochoa"><option value="1">Seleccione</option><option value="2">paralelas</option><option value="3">perpendiculares</option><option value="4">secantes</option></select></h4>'
  ],
  [
    '<h4>m<sub>1</sub> = 3 y m<sub>2</sub> = -3 <b>rectas</b><select id="cboochoc"><option value="1">Seleccione</option><option value="2">paralelas</option><option value="3">perpendiculares</option><option value="4">secantes</option></select></h4>'
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
  var cboochoc = document.getElementById("cboochoc").value;
  var cboochod = document.getElementById("cboochod").value;

  if (cboochoa == "4") {
    cor = cor + 1;
    $("#cboochoa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboochoa").removeClass("correcto");
    $("#cboochoa").addClass("incorrecto");
  }
  if (cboochob == "3") {
    cor = cor + 1;
    $("#cboochob").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboochob").removeClass("correcto");
    $("#cboochob").addClass("incorrecto");
  }
  if (cboochoc == "4") {
    cor = cor + 1;
    $("#cboochoc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboochoc").removeClass("correcto");
    $("#cboochoc").addClass("incorrecto");
  }
  if (cboochod == "2") {
    cor = cor + 1;
    $("#cboochod").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cboochod").removeClass("correcto");
    $("#cboochod").addClass("incorrecto");
  }

  var total = (cor * 1) / 4;
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
  tpre9 = nota / 10;
  $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Pregunta10
function pregunta10() {
  var respuestas = document.getElementsByClassName("respuestas10");
  var soluciones = document.getElementsByClassName("solucion10");
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
  tpre10 = nota / 20;
  $("#pre10a").val(parseFloat(tpre10).toFixed(2));
}
// #endregion

// #region Pregunta11
function pregunta11() {
  var respuestas = document.getElementsByClassName("respuestas11");
  var soluciones = document.getElementsByClassName("solucion11");
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
  tpre11 = nota / 20;
  $("#pre11a").val(parseFloat(tpre11).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  var cbounod = document.getElementById("cbounod").value;
  if (cbounoa == "1" || cbounob == "1" || cbounoc == "1" || cbounod == "1") {
    alert("Pregunta 1: Seleccione todas las respuestas posibles.");
  } else {
    var cbodosa = document.getElementById("cbodosa").value;
    var cbodosb = document.getElementById("cbodosb").value;
    var cbodosc = document.getElementById("cbodosc").value;
    var cbodosd = document.getElementById("cbodosd").value;
    var cbodose = document.getElementById("cbodose").value;
    var cbodosf = document.getElementById("cbodosf").value;
    var cbodosg = document.getElementById("cbodosg").value;
    var cbodosh = document.getElementById("cbodosh").value;
    var pre3a = document.getElementById("pre3a").value;
    if (
      cbodosa == "1" ||
      cbodosb == "1" ||
      cbodosc == "1" ||
      cbodosd == "1" ||
      cbodose == "1" ||
      cbodosf == "1" ||
      cbodosg == "1" ||
      cbodosh == "1"
    ) {
      alert("Pregunta 2: Seleccione todas las respuestas posibles.");
    } else {
      if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
      } else {
        var cboseisa = document.getElementById("cboseisa").value;
        var cboseisb = document.getElementById("cboseisb").value;
        var cboseisc = document.getElementById("cboseisc").value;
        if (cboseisa == "1" || cboseisb == "1" || cboseisc == "1") {
          alert("Pregunta 6: Seleccione todas las respuestas posibles.");
        } else {
          var cboochoa = document.getElementById("cboochoa").value;
          var cboochob = document.getElementById("cboochob").value;
          var cboochoc = document.getElementById("cboochoc").value;
          var cboochod = document.getElementById("cboochod").value;
          if (
            cboochoa == "1" ||
            cboochob == "1" ||
            cboochoc == "1" ||
            cboochod == "1"
          ) {
            alert("Pregunta 8: Seleccione todas las respuestas posibles.");
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
            pregunta11();
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
              parseFloat(tpre10) +
              parseFloat(tpre11);

            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
          }
        }
      }
    }
  }
}
// #endregion
