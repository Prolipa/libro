var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;

/*
*/

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
  validMaxIngreso(document.getElementById("pre2a"), 1);
});
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
    if (numero < n1) {
      i--;
    } else {
      vector1.push(numero + n1);
    }
  }
  if (i >= 5 && i < 10) {
    vector1.push(numero + n2);
  }
  if (i >= 10 && i < 15) {
    if (numero < n3) {
      i--;
    } else {
      vector1.push(numero + n3);
    }
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

function pregunta4() {
  var corr = 0;
  var num1 = n1;
  var num2 = n2;
  var num3 = n5;
  var num4 = n6;

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

  var result4 = (corr * 1) / 2;
  tpre4 = parseFloat(result4);
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var vn = [];
var n = [];
for (i = 0; i < 3; i++) {
  numero = parseInt(Math.random() * 200 + 1);
  if (numero % 2 == 0) {
    n.push(numero);
    $("#p5r" + [i] + "").html(n[i]);
  } else {
    i--;
  }
}
for (i = 0; i < 3; i++) {
  vn.push(n[i] / 2);
}
for (i = 0; i < 3; i++) {
  vn.push(n[i] * 2);
}
function pregunta5() {
  var corr = 0;
  for (i = 0; i < 6; i++) {
    var resp = $("#p5m" + [i] + "").val();
    if (resp == vn[i]) {
      corr++;
      f_ok($("#p5m" + [i] + ""));
    } else {
      corr;
      f_no($("#p5m" + [i] + ""));
    }
  }
  var res = (corr * 1) / 6;
  tpre5 = parseFloat(res);
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

var v6n = [];
var v6r = ["1", "2", "3", "4", "5"];
var nseis = [];

var i, j, k;
for (i = v6r.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = v6r[i - 1];
  v6r[i - 1] = v6r[j];
  v6r[j] = k;
}
for (i = 0; i < 3; i++) {
  numero = parseInt(v6r[i]);

  nseis.push(numero);
  $("#p6r" + [i] + "").html(nseis[i]);
}
for (i = 0; i < 3; i++) {
  v6n.push(nseis[i] * 100);
}
for (i = 0; i < 3; i++) {
  v6n.push(nseis[i] * 4);
}
//billetes
var na = [];
for (i = 0; i < 3; i++) {
  numero = parseInt(Math.random() * 100 + 1);
  na.push(numero);
  $("#p6ar" + [i] + "").html(na[i]);
}

var sum_total1 = 0;
var sum_total2 = 0;
var sum_total3 = 0;

sum_total1 = 0;

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
      $(this).attr("style", "mix-blend-mode:multiply;width:120px");
    });
    $(this)
      .find(".drop1")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total1 += 1;
    } else if (str1 == "b2") {
      sum_total1 += 5;
    } else if (str1 == "b3") {
      sum_total1 += 10;
    } else if (str1 == "b4") {
      sum_total1 += 20;
    } else if (str1 == "b5") {
      sum_total1 += 50;
    }
  }
});

sum_total2 = 0;

$(".drop2").droppable({
  accept: ".drag1",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply;width:120px");
    });
    $(this)
      .find(".drop2")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total2 += 1;
    } else if (str1 == "b2") {
      sum_total2 += 5;
    } else if (str1 == "b3") {
      sum_total2 += 10;
    } else if (str1 == "b4") {
      sum_total2 += 20;
    } else if (str1 == "b5") {
      sum_total2 += 50;
    }
  }
});

sum_total3 = 0;

$(".drop3").droppable({
  accept: ".drag1",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply;width:120px");
    });
    $(this)
      .find(".drop3")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total3 += 1;
    } else if (str1 == "b2") {
      sum_total3 += 5;
    } else if (str1 == "b3") {
      sum_total3 += 10;
    } else if (str1 == "b4") {
      sum_total3 += 20;
    } else if (str1 == "b5") {
      sum_total3 += 50;
    }
  }
});

function pregunta6() {
  var corr = 0;
  for (i = 0; i < 6; i++) {
    var resp = $("#p6m" + [i] + "").val();
    if (resp == v6n[i]) {
      corr++;
      f_ok($("#p6m" + [i] + ""));
    } else {
      corr;
      f_no($("#p6m" + [i] + ""));
    }
  }
  if (sum_total1 == parseInt(na[0])) {
    corr = corr + 1;
    f_ok($(".drop1"));
  } else {
    corr;
    f_no($(".drop1"));
  }
  if (sum_total2 == parseInt(na[1])) {
    corr = corr + 1;
    f_ok($(".drop2"));
  } else {
    corr;
    f_no($(".drop2"));
  }
  if (sum_total3 == parseInt(na[2])) {
    corr = corr + 1;
    f_ok($(".drop3"));
  } else {
    corr;
    f_no($(".drop3"));
  }
  var res = (corr * 1) / 9;
  tpre6 = parseFloat(res);
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}

//pregunta 7
var random7 = [
  [
    'En dos días hay <input type="text" size="1" maxlength="4" style="width:50px"  class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="48"> horas.'
  ],
  [
    'En cinco días hay <input type="text" size="1" maxlength="4" style="width:50px"  class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="120"> horas.'
  ],
  [
    'En 10 minutos hay <input type="text" size="1" maxlength="4" style="width:50px"  class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="600"> segundos.'
  ],
  [
    'En 120 segundos hay <input type="text" size="1" maxlength="4" style="width:50px"  class=" border-blue respuestas7"><input type="hidden" style="color:blue" class="solucion7" value="2"> minutos.'
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
var random8 = [
  [
    '¿Cuál es el mes que más pesca tuvieron? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="Febrero">'
  ],
  [
    '¿Y el que menos pesca tuvieron? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="Marzo">'
  ],
  [
    '¿Cuántos peces obtuvieron en enero? <input type="text" size="1"  style="width:150px"  class=" border-blue respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="200 peces*200">'
  ]
];

var ranocho = document.getElementsByClassName("imagen8");
random8.sort(f_randomico);
for (i = 0; i < ranocho.length; i++) {
  $("#" + ranocho[i].id).html(
    '<span width="50px">' + random8[i][0] + "</span> "
  );
}
function pregunta8() {
  var respuestas = document.getElementsByClassName("respuestas8");
  var soluciones = document.getElementsByClassName("solucion8");
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
  tpre8 = nota / 10;
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
      alert("Pregunta 2: Califiqué la pregunta");
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
