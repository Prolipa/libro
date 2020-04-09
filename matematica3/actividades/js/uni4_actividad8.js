var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;

// #region Pregunta1
var random1 = [
  [
    '<br><img src="img/i2_p174_act1.jpg" class="img-resposive"><br><br>      <input type="text" size="1" style="width:200px"  style="text-align: center" class=" border-blue respuestas10"><br>      <input type="hidden" style="color:blue" class="solucion10" value="comprensión"><br>'
  ],
  [
    '<br><img src="img/i1_p174_act1.jpg" class="img-resposive"><br><br>        <input type="text" size="1" style="width:200px" style="text-align: center"  class=" border-blue respuestas10"><br>        <input type="hidden" style="color:blue" class="solucion10" value="extensión"><br>'
  ],
  [
    '<br><img src="img/i4_p174_act1.jpg" class="img-resposive"><br><br>        <input type="text" size="1" style="width:200px" style="text-align: center"  class=" border-blue respuestas10"><br>        <input type="hidden" style="color:blue" class="solucion10" value="comprensión"><br>'
  ],
  [
    '<br><img src="img/i3_p174_act1.jpg" class="img-resposive"><br><br>        <input type="text" size="1" style="width:200px" style="text-align: center"  class=" border-blue respuestas10"> <br>       <input type="hidden" style="color:blue" class="solucion10" value="extensión"><br>'
  ]
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
  $("#" + ranuno[i].id).html(
    '<span width="50px">' + random1[i][0] + "</span> "
  );
}
function pregunta1() {
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
  tpre1 = nota / 10;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var random2 = [
  [
    '<span><img src="img/i6_p174_act2.jpg" class="img-resposive" style="display: inline-block">      ( <input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">      <input type="hidden" style="color:blue" class="solucion2" value="D">,<input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">      <input type="hidden" style="color:blue" class="solucion2" value="2">)</span><br>'
  ],
  [
    '<span><img src="img/i2_p174_act2.jpg" class="img-resposive" style="display: inline-block">        ( <input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">        <input type="hidden" style="color:blue" class="solucion2" value="A">,<input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">        <input type="hidden" style="color:blue" class="solucion2" value="2">)</span><br>'
  ],
  [
    '<span><img src="img/i5_p174_act2.jpg" class="img-resposive" style="display: inline-block">        ( <input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">        <input type="hidden" style="color:blue" class="solucion2" value="C">,<input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">        <input type="hidden" style="color:blue" class="solucion2" value="4">)</span><br>'
  ],
  [
    '<span><img src="img/i4_p174_act2.jpg" class="img-resposive" style="display: inline-block">        ( <input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">        <input type="hidden" style="color:blue" class="solucion2" value="C">,<input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">        <input type="hidden" style="color:blue" class="solucion2" value="1">)</span><br>'
  ],
  [
    '<span><img src="img/i3_p174_act2.jpg" class="img-resposive" style="display: inline-block">        ( <input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">        <input type="hidden" style="color:blue" class="solucion2" value="B">,<input type="text" size="1" style="width:25px" maxlength="1" style="text-align: center"  class=" border-blue respuestas2">        <input type="hidden" style="color:blue" class="solucion2" value="4">)</span><br>'
  ]
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}
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

var n1 = parseInt(Math.random() * -19 - 10);
var n2 = parseInt(Math.random() * 20 + 10);

$("#nm41").val(n1);
$("#nm41").attr("disabled", "true");

$("#nm42").val("+" + n2 + "");
$("#nm42").attr("disabled", "true");

for (i = 0; i < 10; i++) {
  var numero = parseInt(Math.random() * 99 + 15);
  if (i >= 0 && i < 5) {
    if (numero < n1) {
      i--;
    } else {
      vector1.push(numero + n1);
    }
  }
  if (i >= 5 && i < 10) {
    vector1.push(numero + n2);
  }
  $("#nm" + [i] + "").val(numero);
  $("#nm" + [i] + "").attr("disabled", "true");
}

function pregunta3() {
  var corr = 0;
  for (i = 0; i < 10; i++) {
    var resp = $("#nr" + [i] + "").val();
    if (resp == vector1[i]) {
      corr++;
      f_ok($("#nr" + [i] + ""));
    } else {
      corr;
      f_no($("#nr" + [i] + ""));
    }
  }
  var res = (corr * 1) / 10;
  tpre3 = parseFloat(res);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var vn = [];
var n = [];
for (i = 0; i < 5; i++) {
  numero = parseInt(Math.random() * 500 + 1);
  if (numero % 2 == 0) {
    n.push(numero);
    $("#p4r" + [i] + "").html(n[i]);
  } else {
    i--;
  }
}
for (i = 0; i < 5; i++) {
  vn.push(n[i] / 2);
}
for (i = 0; i < 5; i++) {
  vn.push(n[i] * 2);
}
function pregunta4() {
  var corr = 0;
  for (i = 0; i < 10; i++) {
    var resp = $("#p4m" + [i] + "").val();
    if (resp == vn[i]) {
      corr++;
      f_ok($("#p4m" + [i] + ""));
    } else {
      corr;
      f_no($("#p4m" + [i] + ""));
    }
  }
  var res = (corr * 1) / 10;
  tpre4 = parseFloat(res);
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
  n1 = parseInt(Math.random() * 500 + 1);
  n2 = parseInt(Math.random() * 300 + 1);
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
  n5 = parseInt(Math.random() * 500 + 1);
  n6 = parseInt(Math.random() * 300 + 1);
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

  var dif = parseInt(num1) + parseInt(num2);
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

  var dif1 = parseInt(num3) + parseInt(num4);
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

//pregunta 6
var vn = [];
var n = [];
for (i = 0; i < 3; i++) {
  numero = parseInt(Math.random() * 500 + 1);
  if (numero % 100 == 0) {
    n.push(numero);
    $("#p6r" + [i] + "").html(n[i]);
  } else {
    i--;
  }
}
for (i = 0; i < 3; i++) {
  vn.push(n[i] / 100);
}
for (i = 0; i < 3; i++) {
  vn.push(n[i] / 25);
}

function pregunta6() {
  var corr = 0;
  for (i = 0; i < 6; i++) {
    var resp = $("#p6m" + [i] + "").val();
    if (resp == vn[i]) {
      corr++;
      f_ok($("#p6m" + [i] + ""));
    } else {
      corr;
      f_no($("#p6m" + [i] + ""));
    }
  }
  var res = (corr * 1) / 6;
  tpre6 = parseFloat(res);
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
//

//pregunta 7
var random7 = [
  [
    '¿Cuántos minutos hay en 3 horas? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="180 minutos*180  minutos">'
  ],
  [
    '¿Cuántos días completos hay en 48 horas? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="2 días*2  días">'
  ],
  [
    '¿Cuántas horas hay en una noche? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="12 horas*12  horas">'
  ],
  [
    '¿Cuántos minutos hay 5 horas? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="300 minutos*300  minutos">'
  ]
];

var ransiete = document.getElementsByClassName("imagen7");
random7.sort(f_randomico);
for (i = 0; i < ransiete.length; i++) {
  $("#" + ransiete[i].id).html(
    '<span width="50px">' + random7[i][0] + "</span> "
  );
}
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

//pregunta 8
var sum_total1 = [];

$(".drag1").draggable({
  rever: "invalid",
  helper: "clone",
  containment: "#activ1",
  scroll: false
});
$(".drop1").droppable({
  accept: ".drag1",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply");
    });
    $(this)
      .find(".drop1")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "1") {
      sum_total1.push(1);
    } else if (str1 == "2") {
      sum_total1.push(2);
    } else if (str1 == "3") {
      sum_total1.push(3);
    } else if (str1 == "4") {
      sum_total1.push(4);
    } else if (str1 == "5") {
      sum_total1.push(5);
    } else if (str1 == "6") {
      sum_total1.push(6);
    }
  }
});

function pregunta8() {
  var corr = 0;
  function comparar(a, b) {
    return a - b;
  }
  sum_total1.sort(comparar);

  var res = [1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5];
  function comparar(a, b) {
    return a - b;
  }
  res.sort(comparar);

  var a = 0;
  for (i = 0; i < res.length; i++) {
    if (sum_total1[i] == res[i]) {
      a = a + 1;
    } else {
      a = a - 1;
    }
  }
  if (a == 12) {
    corr = corr + 1;
    f_ok($(".drop1"));
  } else {
    corr;
    f_no($(".drop1"));
  }
  var res = (corr * 1) / 1;
  tpre8 = parseFloat(res);
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
//

//pregunta 9

var random9 = [
  [
    '¿Qué lugar consume menos luz? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas9"><input type="hidden" style="color:blue" class="solucion9" value="La cancha de tenis">'
  ],
  [
    '¿Qué lugar ocupa más luz? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas9"><input type="hidden" style="color:blue" class="solucion9" value="Los casilleros">'
  ],
  [
    '¿Cuántas horas están prendidas las luces de la piscina? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas9"><input type="hidden" style="color:blue" class="solucion9" value="55">'
  ],
  [
    '¿Cuántas horas prenden las luces de la sala de ejercicios? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas9"><input type="hidden" style="color:blue" class="solucion9" value="65">'
  ]
];

var rannueve = document.getElementsByClassName("imagen9");
random9.sort(f_randomico);
for (i = 0; i < rannueve.length; i++) {
  $("#" + rannueve[i].id).html(
    '<span width="50px">' + random9[i][0] + "</span> "
  );
}

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
//

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  pregunta3();
  pregunta4();
  pregunta5();
  pregunta6();
  pregunta7();
  pregunta8();
  pregunta9();
  var Nf =
    parseFloat(tpre1) +
    parseFloat(tpre2) +
    parseFloat(tpre3) +
    parseFloat(tpre4) +
    parseFloat(tpre5) +
    parseFloat(tpre6) +
    parseFloat(tpre7) +
    parseFloat(tpre8) +
    parseFloat(tpre9);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
