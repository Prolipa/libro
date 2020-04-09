
function Inicio() {
  $("#nota-informativa").slideUp("slow");
  $("#Calificar").removeAttr("disabled");
  $("#Refrescar").attr("disabled", true);
}

$(".btn_mostrar").on("click", function() {
  //mostrar todas las preguntas
  $(".panel-collapse").removeClass("in");
  $(".panel-collapse").addClass("in");
});

$(document).ready(function() {
  $(".panel-collapse").removeClass("in");
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 1);
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
    '<div class="col-sm-4" style="text-align:right" align="right"><br>        <img src="img/i3_p159_act2.jpg" class="img-responsive">    </div>    <div class="col-sm-8" >        <h3><input type="text" size="1" style="width:30px" maxlength="1" class=" border-blue respuestas2"><input                type="hidden" style="color:blue" class="solucion2" value="b">,<input                type="text" size="1" style="width:30px" maxlength="1" class=" border-blue respuestas2"><input                type="hidden" style="color:blue" class="solucion2" value="1"></h3>    </div>'
  ],
  [
    '<div class="col-sm-4" style="text-align:right" align="right"><br>        <img src="img/i5_p159_act2.jpg" class="img-responsive">    </div>    <div class="col-sm-8" >        <h3><input type="text" size="1" style="width:30px" maxlength="1" class=" border-blue respuestas2"><input                type="hidden" style="color:blue" class="solucion2" value="d">,<input                type="text" size="1" style="width:30px" maxlength="1" class=" border-blue respuestas2"><input                type="hidden" style="color:blue" class="solucion2" value="4"></h3>    </div>'
  ],
  [
    '<div class="col-sm-4" style="text-align:right" align="right"><br>        <img src="img/i2_p159_act2.jpg" class="img-responsive">    </div>    <div class="col-sm-8" >        <h3><input type="text" size="1" style="width:30px" maxlength="1" class=" border-blue respuestas2"><input                type="hidden" style="color:blue" class="solucion2" value="a">,<input                type="text" size="1" style="width:30px" maxlength="1" class=" border-blue respuestas2"><input                type="hidden" style="color:blue" class="solucion2" value="3"></h3>    </div>'
  ],
  [
    '<div class="col-sm-4" style="text-align:right" align="right"><br>      <img src="img/i4_p159_act2.jpg" class="img-responsive">  </div>  <div class="col-sm-8" >      <h3><input type="text" size="1" style="width:30px" maxlength="1" class=" border-blue respuestas2"><input              type="hidden" style="color:blue" class="solucion2" value="c">,<input              type="text" size="1" style="width:30px" maxlength="1" class=" border-blue respuestas2"><input              type="hidden" style="color:blue" class="solucion2" value="2"></h3>  </div>'
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

// #region Pregunta3
var vector1 = [];

var n1 = parseInt(Math.random() * -10 - 5);
var n2 = parseInt(Math.random() * 35 + 30);
var n3 = parseInt(Math.random() * -20 - 19);
var n4 = parseInt(Math.random() * 25 + 20);

$("#nm41").val(n1);
$("#nm41").attr("disabled", "true");

$("#nm42").val(n2);
$("#nm42").attr("disabled", "true");

$("#nm43").val(n3);
$("#nm43").attr("disabled", "true");

$("#nm44").val(n4);
$("#nm44").attr("disabled", "true");

for (i = 0; i < 20; i++) {
  var numero = parseInt(Math.random() * 99 + 15);
  if (i >= 0 && i < 5) {
    vector1.push(numero + n1);
  }
  if (i >= 5 && i < 10) {
    vector1.push(numero + n2);
  }
  if (i >= 10 && i < 15) {
    vector1.push(numero + n3);
  }
  if (i >= 15 && i < 20) {
    vector1.push(numero + n4);
  }
  $("#nm" + [i] + "").val(numero);
  $("#nm" + [i] + "").attr("disabled", "true");
}

function pregunta3() {
  var corr = 0;
  for (i = 0; i < 20; i++) {
    var resp = $("#nr" + [i] + "").val();
    if (resp == vector1[i]) {
      corr++;
      f_ok($("#nr" + [i] + ""));
    } else {
      corr;
      f_no($("#nr" + [i] + ""));
    }
  }
  var res = (corr * 2) / 20;
  tpre3 = parseFloat(res);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
for (i = 0; i < 4; i++) {
  var random = parseInt(Math.random() * 450 + 1);
  $("#r" + [i] + "").val(random);
  $("#r" + [i] + "").attr("disabled", "true");
}

function pregunta4() {
  var pre4a = document.getElementById("pre4a").value;
  tpre4 = pre4a;
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;

var n5 = 0;
var n6 = 0;
var n7 = 0;
var n8 = 0;

var n9 = 0;
var n10 = 0;
var n11 = 0;
var n12 = 0;

var n13 = 0;
var n14 = 0;
var n15 = 0;
var n16 = 0;

for (i = 0; i < 1; i++) {
  n1 = parseInt(Math.random() * 999 + 1);
  n2 = parseInt(Math.random() * 500 + 1);
  if (n1 > n2) {
    n3 = n1.toString().split("");
    n4 = n2.toString().split("");

    for (i = 0; i < 3; i++) {
      $("#nla" + [i] + "").val(parseInt(n3[i]));
      $("#nla" + [i] + "").attr("disabled", "true");
    }

    if (n4.length == 1) {
      $("#nlsa0").val("0");
      $("#nlsa0").attr("disabled", "true");

      $("#nlsa1").val("0");
      $("#nlsa1").attr("disabled", "true");

      $("#nlsa2").val(n4);
      $("#nlsa2").attr("disabled", "true");
    } else {
      if (n4.length == 2) {
        $("#nlsa0").val("0");
        $("#nlsa0").attr("disabled", "true");

        $("#nlsa1").val(n4[0]);
        $("#nlsa1").attr("disabled", "true");

        $("#nlsa2").val(n4[1]);
        $("#nlsa2").attr("disabled", "true");
      } else {
        if (n4.length == 3) {
          for (i = 0; i < 3; i++) {
            $("#nlsa" + [i] + "").val(parseInt(n4[i]));
            $("#nlsa" + [i] + "").attr("disabled", "true");
          }
        }
      }
    }
  } else {
    i = i - 1;
  }
}

for (i = 0; i < 1; i++) {
  n5 = parseInt(Math.random() * 999 + 1);
  n6 = parseInt(Math.random() * 500 + 1);
  if (n5 > n6) {
    n7 = n5.toString().split("");
    n8 = n6.toString().split("");

    for (i = 0; i < 3; i++) {
      $("#nlb" + [i] + "").val(parseInt(n7[i]));
      $("#nlb" + [i] + "").attr("disabled", "true");
    }

    if (n8.length == 1) {
      $("#nlsb0").val("0");
      $("#nlsb0").attr("disabled", "true");

      $("#nlsb1").val("0");
      $("#nlsb1").attr("disabled", "true");

      $("#nlsb2").val(n8);
      $("#nlsb2").attr("disabled", "true");
    } else {
      if (n8.length == 2) {
        $("#nlsb0").val("0");
        $("#nlsb0").attr("disabled", "true");

        $("#nlsb1").val(n8[0]);
        $("#nlsb1").attr("disabled", "true");

        $("#nlsb2").val(n8[1]);
        $("#nlsb2").attr("disabled", "true");
      } else {
        if (n8.length == 3) {
          for (i = 0; i < 3; i++) {
            $("#nlsb" + [i] + "").val(parseInt(n8[i]));
            $("#nlsb" + [i] + "").attr("disabled", "true");
          }
        }
      }
    }
  } else {
    i = i - 1;
  }
}

for (i = 0; i < 1; i++) {
  n9 = parseInt(Math.random() * 999 + 1);
  n10 = parseInt(Math.random() * 500 + 1);
  if (n9 > n10) {
    n11 = n9.toString().split("");
    n12 = n10.toString().split("");

    for (i = 0; i < 3; i++) {
      $("#nlc" + [i] + "").val(parseInt(n11[i]));
      $("#nlc" + [i] + "").attr("disabled", "true");
    }

    if (n12.length == 1) {
      $("#nlsc0").val("0");
      $("#nlsc0").attr("disabled", "true");

      $("#nlsc1").val("0");
      $("#nlsc1").attr("disabled", "true");

      $("#nlsc2").val(n12);
      $("#nlsc2").attr("disabled", "true");
    } else {
      if (n12.length == 2) {
        $("#nlsc0").val("0");
        $("#nlsc0").attr("disabled", "true");

        $("#nlsc1").val(n12[0]);
        $("#nlsc1").attr("disabled", "true");

        $("#nlsc2").val(n12[1]);
        $("#nlsc2").attr("disabled", "true");
      } else {
        if (n12.length == 3) {
          for (i = 0; i < 3; i++) {
            $("#nlsc" + [i] + "").val(parseInt(n12[i]));
            $("#nlsc" + [i] + "").attr("disabled", "true");
          }
        }
      }
    }
  } else {
    i = i - 1;
  }
}

for (i = 0; i < 1; i++) {
  n13 = parseInt(Math.random() * 999 + 1);
  n14 = parseInt(Math.random() * 500 + 1);
  if (n13 > n14) {
    n15 = n13.toString().split("");
    n16 = n14.toString().split("");

    for (i = 0; i < 3; i++) {
      $("#nld" + [i] + "").val(parseInt(n15[i]));
      $("#nld" + [i] + "").attr("disabled", "true");
    }

    if (n16.length == 1) {
      $("#nlsd0").val("0");
      $("#nlsd0").attr("disabled", "true");

      $("#nlsd1").val("0");
      $("#nlsd1").attr("disabled", "true");

      $("#nlsd2").val(n16);
      $("#nlsd2").attr("disabled", "true");
    } else {
      if (n16.length == 2) {
        $("#nlsd0").val("0");
        $("#nlsd0").attr("disabled", "true");

        $("#nlsd1").val(n16[0]);
        $("#nlsd1").attr("disabled", "true");

        $("#nlsd2").val(n16[1]);
        $("#nlsd2").attr("disabled", "true");
      } else {
        if (n16.length == 3) {
          for (i = 0; i < 3; i++) {
            $("#nlsd" + [i] + "").val(parseInt(n16[i]));
            $("#nlsd" + [i] + "").attr("disabled", "true");
          }
        }
      }
    }
  } else {
    i = i - 1;
  }
}

function pregunta5() {
  var corr = 0;
  var num1 = n1;
  var num2 = n2;
  var num3 = n5;
  var num4 = n6;
  var num5 = n9;
  var num6 = n10;
  var num7 = n13;
  var num8 = n14;

  var dif = parseInt(num1) - parseInt(num2);
  var res =
    $("#nlra" + [0] + "").val() +
    $("#nlra" + [1] + "").val() +
    $("#nlra" + [2] + "").val();

  if (dif == res) {
    corr++;
    f_ok($("#nlra0"));
    f_ok($("#nlra1"));
    f_ok($("#nlra2"));
  } else {
    f_no($("#nlra0"));
    f_no($("#nlra1"));
    f_no($("#nlra2"));
    corr;
  }

  var dif1 = parseInt(num3) - parseInt(num4);
  var res1 =
    $("#nlrb" + [0] + "").val() +
    $("#nlrb" + [1] + "").val() +
    $("#nlrb" + [2] + "").val();

  if (dif1 == res1) {
    corr++;
    f_ok($("#nlrb0"));
    f_ok($("#nlrb1"));
    f_ok($("#nlrb2"));
  } else {
    f_no($("#nlrb0"));
    f_no($("#nlrb1"));
    f_no($("#nlrb2"));
    corr;
  }

  var dif2 = parseInt(num5) - parseInt(num6);
  var res2 =
    $("#nlrc" + [0] + "").val() +
    $("#nlrc" + [1] + "").val() +
    $("#nlrc" + [2] + "").val();

  if (dif2 == res2) {
    corr++;
    f_ok($("#nlrc0"));
    f_ok($("#nlrc1"));
    f_ok($("#nlrc2"));
  } else {
    f_no($("#nlrc0"));
    f_no($("#nlrc1"));
    f_no($("#nlrc2"));
    corr;
  }

  var dif3 = parseInt(num7) - parseInt(num8);
  var res3 =
    $("#nlrd" + [0] + "").val() +
    $("#nlrd" + [1] + "").val() +
    $("#nlrd" + [2] + "").val();

  if (dif3 == res3) {
    corr++;
    f_ok($("#nlrd0"));
    f_ok($("#nlrd1"));
    f_ok($("#nlrd2"));
  } else {
    f_no($("#nlrd0"));
    f_no($("#nlrd1"));
    f_no($("#nlrd2"));
    corr;
  }

  var result5 = (corr * 2) / 4;
  tpre5 = parseFloat(result5);
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
function pregunta6() {
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

// #region Pregunta3
var vector7 = [];
var vector6 = [];

for (i = 0; i < 8; i++) {
  var numero = parseInt(Math.random() * 50 + 1);
  if (i >= 0 && i < 4) {
    vector7.push(numero * 2);
    vector6.push(numero);
  }
  if (i >= 4 && i < 8) {
    if (numero % 2 == 0) {
      vector7.push(numero / 2);
      vector6.push(numero);
    } else {
      i = i - 1;
    }
  }
}
for (i = 0; i < 8; i++) {
  $("#n7m" + [i] + "").val(vector6[i]);
  $("#n7m" + [i] + "").attr("disabled", "true");
}

function pregunta7() {
  var corr = 0;
  for (i = 0; i < 8; i++) {
    var resp = $("#n7r" + [i] + "").val();
    if (resp == vector7[i]) {
      corr++;
      f_ok($("#n7r" + [i] + ""));
    } else {
      corr;
      f_no($("#n7r" + [i] + ""));
    }
  }
  var res = (corr * 1) / 8;
  tpre7 = parseFloat(res);
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
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
      pregunta5();
      pregunta6();
      pregunta7();
      var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4) +
        parseFloat(tpre5) +
        parseFloat(tpre6) +
        parseFloat(tpre7);
      var Vtotal = Nf.toFixed(2);
      $("#txtNota").html(Vtotal);
      document.getElementById("bt_comprobar").disabled = true;
    }
  }
}

function Cargar() {
  location.reload(true);
}
