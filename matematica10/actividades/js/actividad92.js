var titulos = "aplico";
numero_pagina(105);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

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

// #region Pregunta1
function pregunta1() {
  var cor = 0;
  var inc = 0;

  var cbounoa = document.getElementById("cbounoa").value;

  if (cbounoa == "2") {
    cor = cor + 1;
    $("#cbounoa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoa").removeClass("correcto");
    $("#cbounoa").addClass("incorrecto");
  }

  var total = (cor * 2) / 1;
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
  var cor = 0;
  var inc = 0;

  var cj2a = document.getElementById("cj2a").value;
  var cj2b = document.getElementById("cj2b").value;
  var cj2c = document.getElementById("cj2c").value;
  var cj2d = document.getElementById("cj2d").value;
  var cj2e = document.getElementById("cj2e").value;

  if (cj2a == "0") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }

  if (cj2b == "1") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").addClass("incorrecto");
  }

  if (cj2c == "2") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").addClass("incorrecto");
  }

  if (cj2d == "3") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").addClass("incorrecto");
  }

  if (cj2e == "4") {
    cor = cor + 1;
    $("#cj2e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2e").addClass("incorrecto");
  }

  var total = (cor * 2) / 5;
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
    '<span>La gráfica de la función f (x)=−2x+3 pasa por el punto (0, 3).</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj3d">'
  ],
  [
    '<span>Cuando la pendiente de una función lineal es positiva entonces esta es creciente en todo su dominio</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj3a">'
  ],
  [
    '<span>Si b = 2, la gráfica de la función cortará al eje X en el punto (2, 0).</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj3c">'
  ],
  [
    '<span>El valor de b (intercepto con y) determina si una función es creciente o decreciente</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj3b">'
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

  if (cj3a == "V" || cj3a == "v") {
    cor = cor + 1;
    $("#cj3a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3a").addClass("incorrecto");
  }

  if (cj3b == "V" || cj3b == "v") {
    cor = cor + 1;
    $("#cj3b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3b").addClass("incorrecto");
  }

  if (cj3c == "f" || cj3c == "F") {
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

  var total = (cor * 2) / 4;
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
    '<span><label>(−2, 0)</label></span>&nbsp;&nbsp;<select id="cbocuatrob"><option value="1">Seleccione</option><option value="2">Sí pertenece</option><option value="3">No pertenece</option></select><br>'
  ],
  [
    '<span><label>(−3, 1)</label></span>&nbsp;&nbsp;<select id="cbocuatrod"><option value="1">Seleccione</option><option value="2">Sí pertenece</option><option value="3">No pertenece</option></select><br>'
  ],
  [
    '<span><label>(0, −2)</label></span>&nbsp;&nbsp;<select id="cbocuatroa"><option value="1">Seleccione</option><option value="2">Sí pertenece</option><option value="3">No pertenece</option></select><br>'
  ],
  [
    '<span><label>(1, 3)</label></span>&nbsp;&nbsp;<select id="cbocuatroc"><option value="1">Seleccione</option><option value="2">Sí pertenece</option><option value="3">No pertenece</option></select><br>'
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
  var cbocuatrod = document.getElementById("cbocuatrod").value;

  if (cbocuatroa == "3") {
    cor = cor + 1;
    $("#cbocuatroa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocuatroa").removeClass("correcto");
    $("#cbocuatroa").addClass("incorrecto");
  }

  if (cbocuatrob == "2") {
    cor = cor + 1;
    $("#cbocuatrob").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocuatrob").removeClass("correcto");
    $("#cbocuatrob").addClass("incorrecto");
  }

  if (cbocuatroc == "2") {
    cor = cor + 1;
    $("#cbocuatroc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocuatroc").removeClass("correcto");
    $("#cbocuatroc").addClass("incorrecto");
  }

  if (cbocuatrod == "3") {
    cor = cor + 1;
    $("#cbocuatrod").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocuatrod").removeClass("correcto");
    $("#cbocuatrod").addClass("incorrecto");
  }

  var total = (cor * 2) / 4;
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
    '<img src="img/i3_p103_act5.jpg" class="img-responsive">&nbsp;&nbsp;<select id="cbocincoc"><option value="1">Seleccione</option><option value="2">Creciente</option><option value="3">Decreciente</option></select>'
  ],
  [
    '<img src="img/i6_p103_act5.jpg" class="img-responsive">&nbsp;&nbsp;<select id="cbocincof"><option value="1">Seleccione</option><option value="2">Creciente</option><option value="3">Decreciente</option></select>'
  ],
  [
    '<img src="img/i2_p103_act5.jpg" class="img-responsive">&nbsp;&nbsp;<select id="cbocincob"><option value="1">Seleccione</option><option value="2">Creciente</option><option value="3">Decreciente</option></select>'
  ],
  [
    '<img src="img/i4_p103_act5.jpg" class="img-responsive">&nbsp;&nbsp;<select id="cbocincod"><option value="1">Seleccione</option><option value="2">Creciente</option><option value="3">Decreciente</option></select>'
  ],
  [
    '<img src="img/i1_p103_act5.jpg" class="img-responsive">&nbsp;&nbsp;<select id="cbocincoa"><option value="1">Seleccione</option><option value="2">Creciente</option><option value="3">Decreciente</option></select>'
  ],
  [
    '<img src="img/i5_p103_act5.jpg" class="img-responsive">&nbsp;&nbsp;<select id="cbocincoe"><option value="1">Seleccione</option><option value="2">Creciente</option><option value="3">Decreciente</option></select>'
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
  var cor = 0;
  var inc = 0;

  var cbocincoa = document.getElementById("cbocincoa").value;
  var cbocincob = document.getElementById("cbocincob").value;
  var cbocincoc = document.getElementById("cbocincoc").value;
  var cbocincod = document.getElementById("cbocincod").value;
  var cbocincoe = document.getElementById("cbocincoe").value;
  var cbocincof = document.getElementById("cbocincof").value;

  if (cbocincoa == "3") {
    cor = cor + 1;
    $("#cbocincoa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocincoa").removeClass("correcto");
    $("#cbocincoa").addClass("incorrecto");
  }

  if (cbocincob == "2") {
    cor = cor + 1;
    $("#cbocincob").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocincob").removeClass("correcto");
    $("#cbocincob").addClass("incorrecto");
  }

  if (cbocincoc == "3") {
    cor = cor + 1;
    $("#cbocincoc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocincoc").removeClass("correcto");
    $("#cbocincoc").addClass("incorrecto");
  }

  if (cbocincod == "2") {
    cor = cor + 1;
    $("#cbocincod").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocincod").removeClass("correcto");
    $("#cbocincod").addClass("incorrecto");
  }

  if (cbocincoe == "3") {
    cor = cor + 1;
    $("#cbocincoe").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocincoe").removeClass("correcto");
    $("#cbocincoe").addClass("incorrecto");
  }

  if (cbocincof == "2") {
    cor = cor + 1;
    $("#cbocincof").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbocincof").removeClass("correcto");
    $("#cbocincof").addClass("incorrecto");

    var total = (cor * 2) / 6;
    if (total < 0) {
      total = 0;
      tpre5 = total.toFixed(2);
    } else {
      tpre5 = total.toFixed(2);
    }
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
  }
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var cbounoa = document.getElementById("cbounoa").value;
  if (cbounoa == "1") {
    alert("Pregunta 1: Seleccione todas las respuestas posibles");
  } else {
    var cj2a = document.getElementById("cj2a").value;
    var cj2b = document.getElementById("cj2b").value;
    var cj2c = document.getElementById("cj2c").value;
    var cj2d = document.getElementById("cj2d").value;
    var cj2e = document.getElementById("cj2e").value;
    if (cj2a == "" || cj2b == "" || cj2c == "" || cj2d == "" || cj2e == "") {
      alert("Pregunta 2: Ingrese todas las respuestas posibles");
    } else {
      var cj3a = document.getElementById("cj3a").value;
      var cj3b = document.getElementById("cj3b").value;
      var cj3c = document.getElementById("cj3c").value;
      var cj3d = document.getElementById("cj3d").value;
      if (cj3a == "" || cj3b == "" || cj3c == "1" || cj3d == "1") {
        alert("Pregunta 3: Debe Registrar todas las respuestas posible");
      } else {
        var cbocuatroa = document.getElementById("cbocuatroa").value;
        var cbocuatrob = document.getElementById("cbocuatrob").value;
        var cbocuatroc = document.getElementById("cbocuatroc").value;
        var cbocuatrod = document.getElementById("cbocuatrod").value;
        if (
          cbocuatroa == "1" ||
          cbocuatrob == "1" ||
          cbocuatroc == "1" ||
          cbocuatrod == "1"
        ) {
          alert("Pregunta 4: Seleccione todas las respuestas posibles");
        } else {
          var cbocincoa = document.getElementById("cbocincoa").value;
          var cbocincob = document.getElementById("cbocincob").value;
          var cbocincoc = document.getElementById("cbocincoc").value;
          var cbocincod = document.getElementById("cbocincod").value;
          var cbocincoe = document.getElementById("cbocincoe").value;
          var cbocincof = document.getElementById("cbocincof").value;
          if (
            cbocincoa == "1" ||
            cbocincob == "1" ||
            cbocincoc == "1" ||
            cbocincod == "1" ||
            cbocincoe == "1" ||
            cbocincof == "1"
          ) {
            alert("Pregunta 5: Seleccione todas las respuestas posibles");
          }
          {
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
      }
    }
  }
}
// #endregion
