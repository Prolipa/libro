var titulos = "evaluacion";
numero_pagina(88);

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 2);
});
document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 0.5);
});
document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 0.5);
});
document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1);
});
document.getElementById("pre9a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre9a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre9a"), 1);
});
document.getElementById("pre10a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre10a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre10a"), 0.5);
});

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
var tpre12 = 0;
var tpre13 = 0;
// #region Pregunta1
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() {
  var pre2a = document.getElementById("pre2a").value;
  tpre2 = pre2a;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;
  tpre3 = pre3a;
  $("#pre3a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
  [
    '<span class="enc4" id="1">El idioma en que está escrita la información.</span>'
  ],
  [
    '<span class="enc4" id="3">Si quien escribe la información la quiere compartir.</span>'
  ],
  [
    '<span class="enc4" id="2">La fecha de publicación de la información.</span>'
  ],
  [
    '<span class="enc4" id="4">El número de traducciones que tiene la información.</span>'
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
  for (var i = 1; i <= 4; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "La fecha de publicación de la información.") {
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

// #region Pregunta5
function pregunta5() {
  var pre5a = document.getElementById("pre5a").value;
  tpre5 = pre5a;
  $("#pre5a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random6
var random6 = [
  [
    '<span class="enc6" id="5">Indagar en los distintos buscadores académicos de Internet.</span>'
  ],
  [
    '<span class="enc6" id="6">Establecer la utilidad o no de la información seleccionada.</span>'
  ],
  [
    '<span class="enc6" id="7">Analizar las semejanzas y diferencias de la información encontrada.</span>'
  ],
  [
    '<span class="enc6" id="8">Solicitar ayuda en caso necesario de un especialista o experto.</span>'
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
$(".enc6").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta6() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 5; i <= 8; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "Establecer la utilidad o no de la información seleccionada."
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

  var total = ((respr1 - respr2) * 0.5) / 1;
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

// #region Random7
var random7 = [
  [
    '<span><span class="enc" id="12">Los dueños de los autos</span> <span class="enc" id="13">que fueron matriculados fuera del plazo estipulado</span> <span class="enc" id="14">deben pagar una multa de veinticinco dólares</span>.</span>'
  ],
  [
    '<span><span class="enc" id="15">Los vehículos</span> <span class="enc" id="16">que estaban mal estacionados</span>, <span class="enc" id="17">fueron llevados por las grúas de la municipalidad</span>.</span>'
  ],
  [
    '<span><span class="enc" id="9">Las reservas ecológicas</span>, <span class="enc" id="10">zonas que deben ser protegidas</span>, <span class="enc" id="11">merecen mayor atención</span>.</span>'
  ],
  [
    '<span><span class="enc" id="18">Las ambulancias</span>, <span class="enc" id="19">que son vehículos para emergencias</span>, <span class="enc" id="20">llegaron enseguida.</span>'
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
$(".enc").click(function() {
  if ($(this).hasClass("vacio")) {
    $(this).removeClass("vacio");
    $(this).addClass("subrayar");
  } else if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
    $(this).addClass("subrayar1");
  } else {
    $(this).removeClass("subrayar1");
    $(this).addClass("vacio");
  }
});

function pregunta7() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 9; i <= 20; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "zonas que deben ser protegidas" ||
        caja == "que estaban mal estacionados" ||
        caja == "que son vehículos para emergencias"
      ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  for (var i = 9; i <= 20; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar1")) {
      if (caja == "que fueron matriculados fuera del plazo estipulado") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  var total = ((respr1 - respr2) * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre7 = total;
  } else {
    tpre7 = total;
  }

  tpre7 = total.toFixed(2);
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
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
  for (var i = 21; i <= 108; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "lo" || caja == "le" || caja == "él" || caja == "se") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 6;
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

// #region Pregunta9
function pregunta9() {
  var pre9a = document.getElementById("pre9a").value;
  tpre9 = pre9a;
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

// #region Random11
var Randon11 = [
  ["1", "img/i2_p90_act11.jpg"],
  ["2", "img/i3_p90_act11.jpg"],
  ["3", "img/i1_p90_act11.jpg"],
  ["4", "img/i4_p90_act11.jpg"]
];

var ranonce = document.getElementsByClassName("imagen11");

Randon11.sort(f_randomico);
for (i = 0; i < ranonce.length; i++) {
  $("#" + ranonce[i].id).html(
    "<img id=" +
      Randon11[i][1] +
      ' class="img-responsive imgAcom" src="' +
      Randon11[i][1] +
      '">'
  );
}

// #endregion

// #region Pregunta11

$(".enc11").click(function() {
  if ($(this).hasClass("seleccionCajai")) {
    $(this).removeClass("seleccionCajai");
  } else {
    $(this).addClass("seleccionCajai");
  }
});
var respr1 = 0;
var respr2 = 0;
var respr3 = 0;
var respr4 = 0;
var respri1 = 0;
var respri2 = 0;
var respri3 = 0;
var respri4 = 0;

function pregunta11() {
  var caja1 = $("div[id=ranonce1]").find("img")[0].id;
  if ($("#ranonce1").hasClass("seleccionCajai")) {
    if (caja1 == "img/i3_p90_act11.jpg") {
      respr1 = 1;
      $("#ranonce1").addClass("correctoi");
    } else {
      respri1 = 1;
      $("#ranonce1").addClass("incorrectoi");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=ranonce2]").find("img")[0].id;
  if ($("#ranonce2").hasClass("seleccionCajai")) {
    if (caja2 == "img/i3_p90_act11.jpg") {
      respr2 = 1;
      $("#ranonce2").addClass("correctoi");
    } else {
      respri2 = 1;
      $("#ranonce2").addClass("incorrectoi");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=ranonce3]").find("img")[0].id;
  if ($("#ranonce3").hasClass("seleccionCajai")) {
    if (caja3 == "img/i3_p90_act11.jpg") {
      respr3 = 1;
      $("#ranonce3").addClass("correctoi");
    } else {
      respri3 = 1;
      $("#ranonce3").addClass("incorrectoi");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=ranonce4]").find("img")[0].id;
  if ($("#ranonce4").hasClass("seleccionCajai")) {
    if (caja4 == "img/i3_p90_act11.jpg") {
      respr4 = 1;
      $("#ranonce4").addClass("correctoi");
    } else {
      respri4 = 1;
      $("#ranonce4").addClass("incorrectoi");
    }
  } else {
    respr4 = 0;
  }

  var suma =
    parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4);
  var sumai =
    parseInt(respri1) +
    parseInt(respri2) +
    parseInt(respri3) +
    parseInt(respri4);

  var totalR = ((suma - sumai) * 0.5) / 1;
  if (totalR < 0) {
    tpre11 = 0;
  } else {
    tpre11 = totalR;
  }

  tpre11 = totalR.toFixed(2);
  $("#pre11a").val(parseFloat(tpre11).toFixed(2));
}

// #endregion

// #region Pregunta12

function pregunta12() {
  var cor = 0;
  var inc = 0;

  var cbodocea = document.getElementById("cbodocea").value;

  if (cbodocea == "2") {
    cor = cor + 1;
    $("#cbodocea").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodocea").removeClass("correcto");
    $("#cbodocea").addClass("incorrecto");
  }

  var total = cor * 0.5;
  if (total < 0) {
    total = 0;
    tpre12 = total.toFixed(2);
  } else {
    tpre12 = total.toFixed(2);
  }
  $("#pre12a").val(parseFloat(tpre12).toFixed(2));
}
// #endregion

// #region Random13
var random13 = [
  ['<span><span class="enc13" id="109">la inmortalidad</span>'],
  ['<span><span class="enc13" id="111">la amistad</span>'],
  ['<span><span class="enc13" id="112">la muerte</span>'],
  ['<span><span class="enc13" id="110">el poder</span>']
];

var rantrece = document.getElementsByClassName("imagen13");
random13.sort(f_randomico);
for (i = 0; i < rantrece.length; i++) {
  $("#" + rantrece[i].id).html(
    '<span width="50px">' + random13[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta13
$(".enc13").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta13() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 109; i <= 112; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "la inmortalidad") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
  if (total < 0) {
    total = 0;
    tpre13 = total;
  } else {
    tpre13 = total;
  }

  tpre13 = total.toFixed(2);
  $("#pre13a").val(parseFloat(tpre13).toFixed(2));
}
// #endregion

function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
      alert("Pregunta 2: Califiqué la pregunta");
    } else {
      var pre3a = document.getElementById("pre3a").value;
      if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
      } else {
        if (
          $("#1").hasClass("subrayar") != true &&
          $("#2").hasClass("subrayar") != true &&
          $("#3").hasClass("subrayar") != true &&
          $("#4").hasClass("subrayar") != true
        ) {
          alert("Pregunta 4: Subraye al menos una respuesta");
        } else {
          var pre5a = document.getElementById("pre5a").value;
          if (pre5a == "") {
            alert("Pregunta 5: Califiqué la pregunta");
          } else {
            if (
              $("#5").hasClass("subrayar") != true &&
              $("#6").hasClass("subrayar") != true &&
              $("#7").hasClass("subrayar") != true &&
              $("#8").hasClass("subrayar") != true
            ) {
              alert("Pregunta 6: Subraye al menos una respuesta");
            } else {
              if (
                $("#9").hasClass("subrayar") != true &&
                $("#10").hasClass("subrayar") != true &&
                $("#11").hasClass("subrayar") != true &&
                $("#12").hasClass("subrayar") != true &&
                $("#13").hasClass("subrayar") != true &&
                $("#14").hasClass("subrayar") != true &&
                $("#15").hasClass("subrayar") != true &&
                $("#16").hasClass("subrayar") != true &&
                $("#17").hasClass("subrayar") != true &&
                $("#18").hasClass("subrayar") != true &&
                $("#19").hasClass("subrayar") != true &&
                $("#20").hasClass("subrayar") != true
              ) {
                alert("Pregunta 7: Subraye al menos una respuesta");
              } else {
                if (
                  $("#21").hasClass("subrayar") != true &&
                  $("#22").hasClass("subrayar") != true &&
                  $("#23").hasClass("subrayar") != true &&
                  $("#24").hasClass("subrayar") != true &&
                  $("#25").hasClass("subrayar") != true &&
                  $("#26").hasClass("subrayar") != true &&
                  $("#27").hasClass("subrayar") != true &&
                  $("#28").hasClass("subrayar") != true &&
                  $("#29").hasClass("subrayar") != true &&
                  $("#30").hasClass("subrayar") != true &&
                  $("#31").hasClass("subrayar") != true &&
                  $("#32").hasClass("subrayar") != true &&
                  $("#33").hasClass("subrayar") != true &&
                  $("#34").hasClass("subrayar") != true &&
                  $("#35").hasClass("subrayar") != true &&
                  $("#36").hasClass("subrayar") != true &&
                  $("#37").hasClass("subrayar") != true &&
                  $("#38").hasClass("subrayar") != true &&
                  $("#39").hasClass("subrayar") != true &&
                  $("#40").hasClass("subrayar") != true &&
                  $("#42").hasClass("subrayar") != true &&
                  $("#43").hasClass("subrayar") != true &&
                  $("#44").hasClass("subrayar") != true &&
                  $("#45").hasClass("subrayar") != true &&
                  $("#46").hasClass("subrayar") != true &&
                  $("#47").hasClass("subrayar") != true &&
                  $("#48").hasClass("subrayar") != true &&
                  $("#49").hasClass("subrayar") != true &&
                  $("#50").hasClass("subrayar") != true &&
                  $("#51").hasClass("subrayar") != true &&
                  $("#52").hasClass("subrayar") != true &&
                  $("#53").hasClass("subrayar") != true &&
                  $("#54").hasClass("subrayar") != true &&
                  $("#55").hasClass("subrayar") != true &&
                  $("#56").hasClass("subrayar") != true &&
                  $("#57").hasClass("subrayar") != true &&
                  $("#58").hasClass("subrayar") != true &&
                  $("#59").hasClass("subrayar") != true &&
                  $("#60").hasClass("subrayar") != true &&
                  $("#61").hasClass("subrayar") != true &&
                  $("#62").hasClass("subrayar") != true &&
                  $("#63").hasClass("subrayar") != true &&
                  $("#64").hasClass("subrayar") != true &&
                  $("#65").hasClass("subrayar") != true &&
                  $("#66").hasClass("subrayar") != true &&
                  $("#67").hasClass("subrayar") != true &&
                  $("#68").hasClass("subrayar") != true &&
                  $("#69").hasClass("subrayar") != true &&
                  $("#70").hasClass("subrayar") != true &&
                  $("#71").hasClass("subrayar") != true &&
                  $("#72").hasClass("subrayar") != true &&
                  $("#73").hasClass("subrayar") != true &&
                  $("#74").hasClass("subrayar") != true &&
                  $("#75").hasClass("subrayar") != true &&
                  $("#76").hasClass("subrayar") != true &&
                  $("#77").hasClass("subrayar") != true &&
                  $("#78").hasClass("subrayar") != true &&
                  $("#79").hasClass("subrayar") != true &&
                  $("#80").hasClass("subrayar") != true &&
                  $("#81").hasClass("subrayar") != true &&
                  $("#82").hasClass("subrayar") != true &&
                  $("#83").hasClass("subrayar") != true &&
                  $("#84").hasClass("subrayar") != true &&
                  $("#85").hasClass("subrayar") != true &&
                  $("#86").hasClass("subrayar") != true &&
                  $("#87").hasClass("subrayar") != true &&
                  $("#88").hasClass("subrayar") != true &&
                  $("#89").hasClass("subrayar") != true &&
                  $("#90").hasClass("subrayar") != true &&
                  $("#91").hasClass("subrayar") != true &&
                  $("#92").hasClass("subrayar") != true &&
                  $("#93").hasClass("subrayar") != true &&
                  $("#94").hasClass("subrayar") != true &&
                  $("#95").hasClass("subrayar") != true &&
                  $("#96").hasClass("subrayar") != true &&
                  $("#97").hasClass("subrayar") != true &&
                  $("#98").hasClass("subrayar") != true &&
                  $("#99").hasClass("subrayar") != true &&
                  $("#100").hasClass("subrayar") != true &&
                  $("#101").hasClass("subrayar") != true &&
                  $("#102").hasClass("subrayar") != true &&
                  $("#103").hasClass("subrayar") != true &&
                  $("#104").hasClass("subrayar") != true &&
                  $("#105").hasClass("subrayar") != true &&
                  $("#106").hasClass("subrayar") != true &&
                  $("#107").hasClass("subrayar") != true &&
                  $("#108").hasClass("subrayar") != true
                ) {
                  alert("Pregunta 8: Subraye al menos una respuesta");
                } else {
                  var pre9a = document.getElementById("pre9a").value;
                  if (pre9a == "") {
                    alert("Pregunta 9: Califiqué la pregunta");
                  } else {
                    var pre10a = document.getElementById("pre10a").value;
                    if (pre10a == "") {
                      alert("Pregunta 10: Califiqué la pregunta");
                    } else {
                      if (
                        $("#ranonce1").hasClass("seleccionCajai") != true &&
                        $("#ranonce2").hasClass("seleccionCajai") != true &&
                        $("#ranonce3").hasClass("seleccionCajai") != true &&
                        $("#ranonce4").hasClass("seleccionCajai") != true
                      ) {
                        alert("Pregunta 11: Subraye al menos una respuesta");
                      } else {
                        var cbodocea = document.getElementById("cbodocea")
                          .value;
                        if (cbodocea == "1") {
                          alert("Pregunta 12: Seleccione la respuesta");
                        } else {
                          if (
                            $("#109").hasClass("subrayar") != true &&
                            $("#110").hasClass("subrayar") != true &&
                            $("#111").hasClass("subrayar") != true &&
                            $("#112").hasClass("subrayar") != true
                          ) {
                            alert(
                              "Pregunta 13: Subraye al menos una respuesta"
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
                              parseFloat(tpre13);
                            var Vtotal = Nf.toFixed(2);
                            $("#txtNota").html(Vtotal);
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
