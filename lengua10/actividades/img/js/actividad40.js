var titulos = "aplico";

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1);
});
document.getElementById("pre6a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre6a"), 1);
});
function validar3(e) {
  tecla = document.all ? e.keyCode : e.which;
  if (tecla == 8) return true;
  patron = /[,qwertyuiopñlkjhgdsazcbnmQfvFVWERTYUIOPÑLKJHGDSAZCBNM]/;
  te = String.fromCharCode(tecla);
  if (patron.test(te)) {
    alert("INGRESE SOLO | X |");
    return false;
  }
}

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
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
    '<table class="table" border="1" bordercolor="#2E86C1"><tr><td WIDTH="95%">Victoria asistió <span class="enc2" id="17">tal como</span> lo prometió.</td><td WIDTH="5%"><input type="text" id="cj2f" style="width:30px" onkeypress="return validar3(event)"></td></tr></table>'
  ],
  [
    '<table class="table" border="1" bordercolor="#2E86C1"><tr><td WIDTH="95%">No le <span class="enc2" id="10">autorizaron</span> salir, <span class="enc2" id="11">sin embargo</span>, <span class="enc2" id="12">lo hizo</span>.</td><td WIDTH="5%"><input type="text" id="cj2c" style="width:30px" onkeypress="return validar3(event)"></td></tr></table>'
  ],
  [
    '<table class="table" border="1" bordercolor="#2E86C1"><tr><td WIDTH="95%"><span class="enc2" id="1">Esta</span> <span class="enc2" id="2">fiesta </span><span class="enc2" id="3">resultó</span> <span class="enc2" id="4">aburrida</span> <span class="enc2" id="5">como</span> <span class="enc2" id="6">la del mes pasado</span>.</td><td WIDTH="5%"><input type="text" id="cj2a" style="width:30px" onkeypress="return validar3(event)"></td></tr></table>'
  ],
  [
    '<table class="table" border="1" bordercolor="#2E86C1"><tr><td WIDTH="95%">Se <span class="enc2" id="7">suspendieron</span> los <span class="enc2" id="8">partidos</span> por los <span class="enc2" id="9">fuertes</span> aguaceros.</td><td WIDTH="5%"><input type="text" id="cj2b" style="width:30px" onkeypress="return validar3(event)"></td></tr></table>'
  ],
  [
    '<table class="table" border="1" bordercolor="#2E86C1"><tr><td WIDTH="95%">Filomena <span class="enc2" id="15">siguió</span> adelante <span class="enc2" id="16">a pesar de</span> la caída que sufrió.</td><td WIDTH="5%"><input type="text" id="cj2e" style="width:30px" onkeypress="return validar3(event)"></td></tr></table>'
  ],
  [
    '<table class="table" border="1" bordercolor="#2E86C1"><tr><td WIDTH="95%"><span class="enc2" id="13">Le enviaron</span> un mensaje <span class="enc2" id="14">a fin de que</span> apruebe el préstamo.</td><td WIDTH="5%"><input type="text" id="cj2d" style="width:30px" onkeypress="return validar3(event)"></td></tr></table>'
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
  for (var i = 1; i <= 17; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "sin embargo" ||
        caja == "a fin de que" ||
        caja == "a pesar de" ||
        caja == "tal como"
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

  var cor = 0;
  var inc = 0;

  var cj2a = document.getElementById("cj2a").value;
  var cj2b = document.getElementById("cj2b").value;
  var cj2c = document.getElementById("cj2c").value;
  var cj2d = document.getElementById("cj2d").value;
  var cj2e = document.getElementById("cj2e").value;
  var cj2f = document.getElementById("cj2f").value;

  if (cj2a == "") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }
  if (cj2b == "") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").addClass("incorrecto");
  }
  if (cj2c == "x" || cj2c == "X") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").addClass("incorrecto");
  }
  if (cj2d == "x" || cj2d == "X") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").addClass("incorrecto");
  }
  if (cj2e == "x" || cj2e == "X") {
    cor = cor + 1;
    $("#cj2e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2e").addClass("incorrecto");
  }
  if (cj2f == "x" || cj2f == "X") {
    cor = cor + 1;
    $("#cj2f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2f").addClass("incorrecto");
  }
  var totalt = 0;
  var totalc = (cor * 1) / 1;
  var cajas = 0;
  if (totalc < 0) {
    totalc = 0;
    cajas = totalc.toFixed(2);
  } else {
    cajas = totalc.toFixed(2);
  }

  var total = ((respr1 - respr2) * 1) / 4;
  var letras = 0;
  if (total < 0) {
    total = 0;
    letras = total;
  } else {
    letras = total;
  }

  totalt = parseFloat(letras) + parseFloat(cajas);
  tpre2 = (totalt / 7).toFixed(2);
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

// #region Pregunta4
$(".enc1").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta4() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 18; i <= 30; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "es decir" ||
        caja == "tal como" ||
        caja == "Mejor que" ||
        caja == "Sin embargo" ||
        caja == "para que"
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

  var total = ((respr1 - respr2) * 1) / 5;
  if (total < 0) {
    total = 0;
    tpre4 = total;
  } else {
    tpre4 = total;
  }

  tpre4 = total.toFixed(2);
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
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
$(".enc3").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta6() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 31; i <= 32; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "Juana estaba haciendo la tarea, mientras que su hermana dormía." 
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
    tpre6 = total;
  } else {
    tpre6 = total;
  }

  tpre6 = total.toFixed(2);
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Random6
var random6 = [
  [
    '<div class="text-question"><span class="enc3" id="32">Todos estaremos satisfechos mientras te sigas portando bien como tu hermana.</span></div><br><br>'
  ],
  [
    '<div class="text-question"><span class="enc3" id="31">Juana estaba haciendo la tarea, mientras que su hermana dormía.</span></div><br><br>'
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

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
      alert("Pregunta 3: Califiqué la pregunta");
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
        var Vtotal = ((Nf * 10) / 6).toFixed(2);
        $("#txtNota").html(Vtotal + "/10");
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}

// #endregion
