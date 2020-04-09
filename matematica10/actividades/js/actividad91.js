var titulos = "aplico";
numero_pagina(103);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

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
  validMaxIngreso(document.getElementById("pre4a"), 2.5);
});

// #region Random1
var random1 = [
  [
    '<img src="img/i3_p103_act1.jpg" class="img-responsive"><br><select id="cbounoc" class="form-control"><option value="1">Seleccione</option><option value="2">Sí es</option><option value="3">No es</option></select><br>'
  ],
  [
    '<img src="img/i1_p103_act1.jpg" class="img-responsive"><select id="cbounoa" class="form-control"><option value="1">Seleccione</option><option value="2">Sí es</option><option value="3">No es</option></select><br>'
  ],
  [
    '<img src="img/i4_p103_act1.jpg" class="img-responsive"><br><select id="cbounod" class="form-control"><option value="1">Seleccione</option><option value="2">Sí es</option><option value="3">No es</option></select><br>'
  ],
  [
    ' <img src="img/i2_p103_act1.jpg" class="img-responsive"><br><select id="cbounob" class="form-control"><option value="1">Seleccione</option><option value="2">Sí es</option><option value="3">No es</option></select><br>'
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

  var total = (cor * 2.5) / 4;
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
    '<span>El dominio y recorrido de una función lineal son los números reales.</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj2d">'
  ],
  [
    '<span>Una función simple lineal puede ser a la vez creciente y decreciente, en dependencia del intervalo del dominio.</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj2a">'
  ],
  [
    '<span>Si en una función lineal se incrementan los valores de x y también los de y, entonces es creciente.</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj2c">'
  ],
  [
    '<span>La función lineal siempre es creciente.</span><input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj2b">'
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

  var cj2a = document.getElementById("cj2a").value;
  var cj2b = document.getElementById("cj2b").value;
  var cj2c = document.getElementById("cj2c").value;
  var cj2d = document.getElementById("cj2d").value;

  if (cj2a == "f" || cj2a == "F") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }

  if (cj2b == "f" || cj2b == "F") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").addClass("incorrecto");
  }

  if (cj2c == "v" || cj2c == "V") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").addClass("incorrecto");
  }

  if (cj2d == "v" || cj2d == "V") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").addClass("incorrecto");
  }

  var total = (cor * 2.5) / 4;
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
    '<img src="img/i4_p103_act3.jpg" class="img-responsive"><br><select id="cbotresd" class="form-control"><option value="1">Seleccione</option><option value="2">Sí es lineal (creciente)</option><option value="3">Sí es lineal (decreciente)</option><option value="4">No es lineal</option></select><br>'
  ],
  [
    '<img src="img/i1_p103_act3.jpg" class="img-responsive"><br><select id="cbotresa" class="form-control"><option value="1">Seleccione</option><option value="2">Sí es lineal (creciente)</option><option value="3">Sí es lineal (decreciente)</option><option value="4">No es lineal</option></select><br>'
  ],
  [
    '<img src="img/i3_p103_act3.jpg" class="img-responsive"><br><select id="cbotresc" class="form-control"><option value="1">Seleccione</option><option value="2">Sí es lineal (creciente)</option><option value="3">Sí es lineal (decreciente)</option><option value="4">No es lineal</option></select><br>'
  ],
  [
    '<img src="img/i2_p103_act3.jpg" class="img-responsive"><br><select id="cbotresb" class="form-control"><option value="1">Seleccione</option><option value="2">Sí es lineal (creciente)</option><option value="3">Sí es lineal (decreciente)</option><option value="4">No es lineal</option></select><br>'
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

  var cbotresa = document.getElementById("cbotresa").value;
  var cbotresb = document.getElementById("cbotresb").value;
  var cbotresc = document.getElementById("cbotresc").value;
  var cbotresd = document.getElementById("cbotresd").value;

  if (cbotresa == "2") {
    cor = cor + 1;
    $("#cbotresa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbotresa").removeClass("correcto");
    $("#cbotresa").addClass("incorrecto");
  }
  if (cbotresb == "4") {
    cor = cor + 1;
    $("#cbotresb").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbotresb").removeClass("correcto");
    $("#cbotresb").addClass("incorrecto");
  }
  if (cbotresc == "3") {
    cor = cor + 1;
    $("#cbotresc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbotresc").removeClass("correcto");
    $("#cbotresc").addClass("incorrecto");
  }
  if (cbotresd == "3") {
    cor = cor + 1;
    $("#cbotresd").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbotresd").removeClass("correcto");
    $("#cbotresd").addClass("incorrecto");
  }

  var total = (cor * 2.5) / 4;
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
  ['<img src="img/i2_p103_act4.jpg" class="img-responsive">'],
  ['<img src="img/i1_p103_act4.jpg" class="img-responsive">']
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

// #region Calculo Nota Final
function NotaFinal() {
  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  var cbounod = document.getElementById("cbounod").value;
  if (cbounoa == "1" || cbounob == "1" || cbounoc == "1" || cbounod == "1") {
    alert("Pregunta 1: Seleccione todas las respuestas posibles");
  } else {
    var cj2a = document.getElementById("cj2a").value;
    var cj2b = document.getElementById("cj2b").value;
    var cj2c = document.getElementById("cj2c").value;
    var cj2d = document.getElementById("cj2d").value;
    if (cj2a == "" || cj2b == "" || cj2c == "1" || cj2d == "1") {
      alert("Pregunta 2: Debe Registrar todas las respuestas posible ");
    } else {
      var cbotresa = document.getElementById("cbotresa").value;
      var cbotresb = document.getElementById("cbotresb").value;
      var cbotresc = document.getElementById("cbotresc").value;
      var cbotresd = document.getElementById("cbotresd").value;
      if (
        cbotresa == "1" ||
        cbotresb == "1" ||
        cbotresc == "1" ||
        cbotresd == "1"
      ) {
        alert("Pregunta 3: Seleccione todas las respuestas posibles");
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
  }
}

// #endregion
