var titulos = "preparo";
numero_pagina(94);

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

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1.5);
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
  validMaxIngreso(document.getElementById("pre7a"), 1.5);
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
    '<img class="img-responsive" src="img/i1_p94_act1.jpg"><br><select class="form-control" id="cbounoa"><option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i3_p94_act1.jpg"><br><select class="form-control" id="cbounoc"><option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p94_act1.jpg"><br><select class="form-control" id="cbounob"><option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i4_p94_act1.jpg"><br><select class="form-control" id="cbounod"><option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
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

  if (cbounoa == "2") {
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
  if (cbounod == "2") {
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
  $("#pre1a").val(parseFloat(total).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  [
    '<img class="img-responsive" src="img/i3_p94_act2.jpg"><br><select class="form-control" id="cbodosc"><option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p94_act2.jpg"><br><select class="form-control" id="cbodosb"><option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i4_p94_act2.jpg"><br><select class="form-control" id="cbodosd"><option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p94_act2.jpg"><br><select class="form-control" id="cbodosa"><option value="1">Seleccione</option><option value="2">Función</option><option value="3">Relación</option></select>'
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
  if (cbodosd == "3") {
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
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
  [
    '<span>Para hallar analíticamente el recorrido de una función, primero se debe despejar la variable x.</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj3c">'
  ],
  [
    '<span>El dominio de una función corresponde al intervalo de números que puede tomar la variable x.</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj3a">'
  ],
  [
    '<span>El recorrido de una función se determina gráficamente observando los valores que toma f(x) en la gráfica.</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj3d">'
  ],
  [
    '<span>Si una función posee radicales, el dominio siempre está formado por el conjunto de los números reales.</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj3b">'
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
  var cor = 0;
  var inc = 0;

  var cj3a = document.getElementById("cj3a").value;
  var cj3b = document.getElementById("cj3b").value;
  var cj3c = document.getElementById("cj3c").value;
  var cj3d = document.getElementById("cj3d").value;

  if (cj3a == "v" || cj3a == "V") {
    cor = cor + 1;
    $("#cj3a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3a").addClass("incorrecto");
  }

  if (cj3b == "f" || cj3b == "F") {
    cor = cor + 1;
    $("#cj3b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3b").addClass("incorrecto");
  }

  if (cj3c == "v" || cj3c == "V") {
    cor = cor + 1;
    $("#cj3c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3c").addClass("incorrecto");
  }

  if (cj3d == "v" || cj3d == "V") {
    cor = cor + 1;
    $("#cj3d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3d").addClass("incorrecto");
  }

  var total = (cor * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre3 = total.toFixed(2);
  } else {
    tpre3 = total.toFixed(2);
  }
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
  [
    '<img class="img-responsive" src="img/i3_p94_act4.jpg"><br><select class="form-control" style="width:180px" id="cbocuatroc"><option value="1">Seleccione</option><option value="2">Función constante</option><option value="3">Función creciente</option><option value="4">Función decreciente</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p94_act4.jpg"><br><select class="form-control" style="width:180px" id="cbocuatroa"><option value="1">Seleccione</option><option value="2">Función constante</option><option value="3">Función creciente</option><option value="4">Función decreciente</option></select>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p94_act4.jpg"><br><select class="form-control" style="width:180px" id="cbocuatrob"><option value="1">Seleccione</option><option value="2">Función constante</option><option value="3">Función creciente</option><option value="4">Función decreciente</option></select>'
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
  var cor = 0;
  var inc = 0;

  var cbocuatroa = document.getElementById("cbocuatroa").value;
  var cbocuatrob = document.getElementById("cbocuatrob").value;
  var cbocuatroc = document.getElementById("cbocuatroc").value;

  if (cbocuatroa == "2") {
    cor = cor + 1;
    $("#cbocuatroa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocuatroa").removeClass("correcto");
    $("#cbocuatroa").addClass("incorrecto");
  }
  if (cbocuatrob == "3") {
    cor = cor + 1;
    $("#cbocuatrob").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocuatrob").removeClass("correcto");
    $("#cbocuatrob").addClass("incorrecto");
  }
  if (cbocuatroc == "4") {
    cor = cor + 1;
    $("#cbocuatroc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocuatroc").removeClass("correcto");
    $("#cbocuatroc").addClass("incorrecto");
  }

  var total = (cor * 1.5) / 3;
  if (total < 0) {
    total = 0;
    tpre4 = total.toFixed(2);
  } else {
    tpre4 = total.toFixed(2);
  }
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Random5
var random5 = [
  [
    '<label>Decreciente:</label><input type="text"  size="1" style="width:100px">'
  ],
  [
    '<label>Creciente:</label><input type="text"  size="1" style="width:100px">'
  ],
  ['<label>Constante:</label><input type="text"  size="1" style="width:100px">']
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

// #region Random6
var random6 = [
  [
    '<span>Función impar es </span><br><textarea class="form-control text-question no-redimensionar " cols="100" rows="1"></textarea>'
  ],
  [
    '<span>Una función par es </span><br><textarea class="form-control text-question no-redimensionar " cols="100" rows="1"></textarea>'
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

// #region Pregunta8
function pregunta8() {
  var cor = 0;
  var inc = 0;

  var cj8a = document.getElementById("cj8a").value;

  if (cj8a == "18") {
    cor = cor + 1;
    $("#cj8a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8a").removeClass("correcto");
    $("#cj8a").addClass("incorrecto");
  }

  var total = (cor * 1.5) / 1;
  if (total < 0) {
    total = 0;
    tpre8 = total.toFixed(2);
  } else {
    tpre8 = total.toFixed(2);
  }
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}

// #region Calculo Nota Final
function NotaFinal() {
  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  var cbounod = document.getElementById("cbounod").value;
  if (cbounoa == "1" || cbounob == "1" || cbounoc == "1" || cbounod == "1") {
    alert("Pregunta 1: Seleccione todas las respuestas posibles");
  } else {
    var cbodosa = document.getElementById("cbodosa").value;
    var cbodosb = document.getElementById("cbodosb").value;
    var cbodosc = document.getElementById("cbodosc").value;
    var cbodosd = document.getElementById("cbodosd").value;
    if (cbodosa == "1" || cbodosb == "1" || cbodosc == "1" || cbodosd == "1") {
      alert("Pregunta 2: Seleccione todas las respuestas posibles");
    } else {
      var cbocuatroa = document.getElementById("cbocuatroa").value;
      var cbocuatrob = document.getElementById("cbocuatrob").value;
      var cbocuatroc = document.getElementById("cbocuatroc").value;
      if (cbocuatroa == "1" || cbocuatrob == "1" || cbocuatroc == "1") {
        alert("Pregunta 4: Seleccione todas las respuestas posibles");
      } else {
        var pre5a = document.getElementById("pre5a").value;
        if (pre5a == "") {
          alert("Pregunta 5: Califiqué la pregunta");
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
              var Vtotal = Nf.toFixed(2);
              $("#txtNota").html(Vtotal);
              document.getElementById("bt_comprobar").disabled = true;
            }
          }
        }
      }
    }
  }
}
// #endregion
