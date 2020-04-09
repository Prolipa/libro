var titulos = "evaluacion";

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
  validMaxIngreso(document.getElementById("pre7a"), 0.5);
});

document.getElementById("pre10a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre10a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre10a"), 1);
});

document.getElementById("pre11a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre11a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre11a"), 0.5);
});

document.getElementById("pre12a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre12a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre12a"), 1);
});

document.getElementById("pre13a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre13a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre13a"), 0.5);
});

document.getElementById("pre14a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre14a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre14a"), 0.5);
});

document.getElementById("pre15a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre15a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre15a"), 0.5);
});

document.getElementById("pre16a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre16a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre16a"), 0.5);
});

document.getElementById("pre17a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre17a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre17a"), 0.5);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;
var tpre11 = 0;
var tpre12 = 0;
var tpre13 = 0;
var tpre14 = 0;
var tpre15 = 0;
var tpre16 = 0;
var tpre17 = 0;

// #region Random1
var random1 = [
  ['<span class="enc1" id="2">El tema</span>'],
  ['<span class="enc1" id="3">La dirección de la obra</span>'],
  ['<span class="enc1" id="1">El argumento de la obra</span>'],
  ['<span class="enc1" id="4">El conflicto dramático</span>']
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
$(".enc1").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta1() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 4; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "El tema") {
        respr1 = respr1 + 1;
        $("#" + [i] + "").removeClass("subrayar");
        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").removeClass("subrayar");
        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
  if (total < 0) {
    total = 0;
    tpre1 = total;
  } else {
    tpre1 = total;
  }

  tpre1 = total.toFixed(2);
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  ['<span class="enc2" id="7">las distintas acciones de la obra.</span>'],
  ['<span class="enc2" id="6">el o los momentos culminantes.</span>'],
  ['<span class="enc2" id="5">el desarrollo de la historia.</span>'],
  ['<span class="enc2" id="8">el tipo de conflicto de la historia.</span>']
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
  for (var i = 5; i <= 8; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "el o los momentos culminantes.") {
        respr1 = respr1 + 1;
        $("#" + [i] + "").removeClass("subrayar");
        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").removeClass("subrayar");
        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
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
  ['<span class="enc3" id="11">Tiempo evocado</span>'],
  ['<span class="enc3" id="9">Tiempo creciente</span>'],
  ['<span class="enc3" id="12">Tiempo interior</span>'],
  ['<span class="enc3" id="10">Tiempo cronológico</span>']
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
$(".enc3").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta3() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 9; i <= 12; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "Tiempo interior") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
  if (total < 0) {
    total = 0;
    tpre3 = total;
  } else {
    tpre3 = total;
  }

  tpre3 = total.toFixed(2);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
  ['<span class="enc4" id="14">tiempo.</span>'],
  ['<span class="enc4" id="16">tema.</span>'],
  ['<span class="enc4" id="15">argumento.</span>'],
  ['<span class="enc4" id="13">conflicto.</span>']
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
$(".enc4").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta4() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 13; i <= 16; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "argumento.") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
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

// #region Random5
var random5 = [
  ['<span class="enc5" id="19">Escenas, monólogo y acotación</span>'],
  ['<span class="enc5" id="18">Idea macro, conflicto y tiempo evocado</span>'],
  [
    '<span class="enc5" id="20">Relación de acontecimientos, universo literario y espacio físico</span>'
  ],
  ['<span class="enc5" id="17">Presentación, desarrollo y desenlace</span>']
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
$(".enc5").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta5() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 17; i <= 20; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "Escenas, monólogo y acotación") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
  if (total < 0) {
    total = 0;
    tpre5 = total;
  } else {
    tpre5 = total;
  }

  tpre5 = total.toFixed(2);
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

// #region Random8
var random8 = [
  ['<span class="enc8" id="22">Se vale de soportes para su desarrollo.</span>'],
  [
    '<span class="enc8" id="24">Es un camino de ida y vuelta, no unidireccional.</span>'
  ],
  [
    '<span class="enc8" id="21">Contribuye a la creación, recreación y desarrollo de la cultura.</span>'
  ],
  ['<span class="enc8" id="23">Facilita construir acuerdos y consensos.</span>']
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
$(".enc8").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta8() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 21; i <= 24; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "Se vale de soportes para su desarrollo.") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
  if (total < 0) {
    total = 0;
    tpre8 = total;
  } else {
    tpre8 = total;
  }

  tpre8 = total.toFixed(2);
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Random9
var random9 = [
  ['<span class="enc9" id="28">¿Dónde sucedió? ¿Cómo es?.</span>'],
  ['<span class="enc9" id="27">¿Por qué es así? ¿Qué es?</span>'],
  ['<span class="enc9" id="25">¿De quién se trata? ¿Cuándo pasó?</span>'],
  ['<span class="enc9" id="26">¿Qué debemos hacer sobre…?</span>']
];

var rannueve = document.getElementsByClassName("imagen9");
random9.sort(f_randomico);
for (i = 0; i < rannueve.length; i++) {
  $("#" + rannueve[i].id).html(
    '<span width="50px">' + random9[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta9
$(".enc9").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta9() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 25; i <= 28; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "¿Por qué es así? ¿Qué es?") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
  if (total < 0) {
    total = 0;
    tpre9 = total;
  } else {
    tpre9 = total;
  }

  tpre9 = total.toFixed(2);
  $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Pregunta10
function pregunta10() {
  var pre10a = document.getElementById("pre10a").value;
  tpre10 = pre10a;
  $("#pre10a").val(parseFloat(tpre10).toFixed(2));
}
// #endregion

// #region Pregunta11
function pregunta11() {
  var pre11a = document.getElementById("pre11a").value;
  tpre11 = pre11a;
  $("#pre11a").val(parseFloat(tpre11).toFixed(2));
}
// #endregion

// #region Pregunta12
function pregunta12() {
  var pre12a = document.getElementById("pre12a").value;
  tpre12 = pre12a;
  $("#pre12a").val(parseFloat(tpre12).toFixed(2));
}
// #endregion

// #region Pregunta13
function pregunta13() {
  var pre13a = document.getElementById("pre13a").value;
  tpre13 = pre13a;
  $("#pre13a").val(parseFloat(tpre13).toFixed(2));
}
// #endregion

// #region Pregunta14
function pregunta14() {
  var pre14a = document.getElementById("pre14a").value;
  tpre14 = pre14a;
  $("#pre14a").val(parseFloat(tpre14).toFixed(2));
}
// #endregion

// #region Pregunta15
$(".enc15").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});
function pregunta15() {
  var pre15a = document.getElementById("pre15a").value;
  tpre15 = pre15a;
  $("#pre15a").val(parseFloat(tpre15).toFixed(2));
}
// #endregion

// #region Pregunta16
function pregunta16() {
  var pre16a = document.getElementById("pre16a").value;
  tpre16 = pre16a;
  $("#pre16a").val(parseFloat(tpre16).toFixed(2));
}
// #endregion

// #region Pregunta17
function pregunta17() {
  var pre17a = document.getElementById("pre17a").value;
  tpre17 = pre17a;
  $("#pre17a").val(parseFloat(tpre17).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  if (
    $("#1").hasClass("subrayar") != true &&
    $("#2").hasClass("subrayar") != true &&
    $("#3").hasClass("subrayar") != true &&
    $("#4").hasClass("subrayar") != true
  ) {
    alert("Pregunta 1: Subraye al menos una respuesta");
  } else {
    if (
      $("#5").hasClass("subrayar") != true &&
      $("#6").hasClass("subrayar") != true &&
      $("#7").hasClass("subrayar") != true &&
      $("#8").hasClass("subrayar") != true
    ) {
      alert("Pregunta 2: Subraye al menos una respuesta");
    } else {
      if (
        $("#9").hasClass("subrayar") != true &&
        $("#10").hasClass("subrayar") != true &&
        $("#11").hasClass("subrayar") != true &&
        $("#12").hasClass("subrayar") != true
      ) {
        alert("Pregunta 3: Subraye al menos una respuesta");
      } else {
        if (
          $("#13").hasClass("subrayar") != true &&
          $("#14").hasClass("subrayar") != true &&
          $("#15").hasClass("subrayar") != true &&
          $("#16").hasClass("subrayar") != true
        ) {
          alert("Pregunta 4: Subraye al menos una respuesta");
        } else {
          if (
            $("#17").hasClass("subrayar") != true &&
            $("#18").hasClass("subrayar") != true &&
            $("#19").hasClass("subrayar") != true &&
            $("#20").hasClass("subrayar") != true
          ) {
            alert("Pregunta 5: Subraye al menos una respuesta");
          } else {
            var pre6a = document.getElementById("pre6a").value;
            if (pre6a == "") {
              alert("Pregunta 6: Califiqué la pregunta");
            } else {
              var pre7a = document.getElementById("pre7a").value;
              if (pre7a == "") {
                alert("Pregunta 7: Califiqué la pregunta");
              } else {
                if (
                  $("#21").hasClass("subrayar") != true &&
                  $("#22").hasClass("subrayar") != true &&
                  $("#23").hasClass("subrayar") != true &&
                  $("#24").hasClass("subrayar") != true
                ) {
                  alert("Pregunta 8: Subraye al menos una respuesta");
                } else {
                  if (
                    $("#25").hasClass("subrayar") != true &&
                    $("#26").hasClass("subrayar") != true &&
                    $("#27").hasClass("subrayar") != true &&
                    $("#28").hasClass("subrayar") != true
                  ) {
                    alert("Pregunta 9: Subraye al menos una respuesta");
                  } else {
                    var pre10a = document.getElementById("pre10a").value;
                    if (pre10a == "") {
                      alert("Pregunta 10: Califiqué la pregunta");
                    } else {
                      var pre11a = document.getElementById("pre11a").value;
                      if (pre11a == "") {
                        alert("Pregunta 11: Califiqué la pregunta");
                      } else {
                        var pre12a = document.getElementById("pre12a").value;
                        if (pre12a == "") {
                          alert("Pregunta 12: Califiqué la pregunta");
                        } else {
                          var pre13a = document.getElementById("pre13a").value;
                          if (pre13a == "") {
                            alert("Pregunta 13: Califiqué la pregunta");
                          } else {
                            var pre14a = document.getElementById("pre14a")
                              .value;
                            if (pre14a == "") {
                              alert("Pregunta 14: Califiqué la pregunta");
                            } else {
                              if (
                                $("#29").hasClass("subrayar") != true &&
                                $("#30").hasClass("subrayar") != true &&
                                $("#31").hasClass("subrayar") != true &&
                                $("#32").hasClass("subrayar") != true &&
                                $("#33").hasClass("subrayar") != true &&
                                $("#34").hasClass("subrayar") != true
                              ) {
                                alert(
                                  "Pregunta 15: Subraye al menos una respuesta"
                                );
                              } else {
                                var pre15a = document.getElementById("pre15a")
                                  .value;
                                if (pre15a == "") {
                                  alert("Pregunta 15: Califiqué la pregunta");
                                } else {
                                  var pre16a = document.getElementById("pre16a")
                                    .value;
                                  if (pre16a == "") {
                                    alert("Pregunta 16: Califiqué la pregunta");
                                  } else {
                                    var pre17a = document.getElementById(
                                      "pre17a"
                                    ).value;
                                    if (pre17a == "") {
                                      alert(
                                        "Pregunta 17: Califiqué la pregunta"
                                      );
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
                                      pregunta12();
                                      pregunta13();
                                      pregunta14();
                                      pregunta15();
                                      pregunta16();
                                      pregunta17();
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
                                        parseFloat(tpre11) +
                                        parseFloat(tpre12) +
                                        parseFloat(tpre13) +
                                        parseFloat(tpre14) +
                                        parseFloat(tpre15) +
                                        parseFloat(tpre16) +
                                        parseFloat(tpre17);
                                      var Vtotal = Nf.toFixed(2);
                                      $("#txtNota").html(Vtotal + "/10");
                                      document.getElementById(
                                        "bt_comprobar"
                                      ).disabled = true;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// #endregion
