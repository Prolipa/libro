var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre6a"), 1);
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
  var cor = 0;
  var inc = 0;

  var sel1 = document.getElementById("sel1").value;
  var sel2 = document.getElementById("sel2").value;
  var sel3 = document.getElementById("sel3").value;
  var sel4 = document.getElementById("sel4").value;
  var sel5 = document.getElementById("sel5").value;
  var sel6 = document.getElementById("sel6").value;
  var sel7 = document.getElementById("sel7").value;
  var sel8 = document.getElementById("sel8").value;
  var sel9 = document.getElementById("sel9").value;
  var sel10 = document.getElementById("sel10").value;
  var sel11 = document.getElementById("sel11").value;
  var sel12 = document.getElementById("sel12").value;
  var sel13 = document.getElementById("sel13").value;
  var sel14 = document.getElementById("sel14").value;
  var sel15 = document.getElementById("sel15").value;
  var sel16 = document.getElementById("sel16").value;
  var sel17 = document.getElementById("sel17").value;
  var sel18 = document.getElementById("sel18").value;
  var sel19 = document.getElementById("sel19").value;

  if (sel1 == "5") {
    cor = cor + 1;
    $("#sel1").addClass("correcto");
  } else {
    cor;
    $("#sel1").removeClass("correcto");
    $("#sel1").addClass("incorrecto");
  }
  if (sel2 == "2") {
    cor = cor + 1;
    $("#sel2").addClass("correcto");
  } else {
    cor;
    $("#sel2").removeClass("correcto");
    $("#sel2").addClass("incorrecto");
  }
  if (sel3 == "3") {
    cor = cor + 1;
    $("#sel3").addClass("correcto");
  } else {
    cor;
    $("#sel3").removeClass("correcto");
    $("#sel3").addClass("incorrecto");
  }
  if (sel4 == "3") {
    cor = cor + 1;
    $("#sel4").addClass("correcto");
  } else {
    cor;
    $("#sel4").removeClass("correcto");
    $("#sel4").addClass("incorrecto");
  }
  if (sel5 == "4") {
    cor = cor + 1;
    $("#sel5").addClass("correcto");
  } else {
    cor;
    $("#sel5").removeClass("correcto");
    $("#sel5").addClass("incorrecto");
  }
  if (sel6 == "4") {
    cor = cor + 1;
    $("#sel6").addClass("correcto");
  } else {
    cor;
    $("#sel6").removeClass("correcto");
    $("#sel6").addClass("incorrecto");
  }
  if (sel7 == "5") {
    cor = cor + 1;
    $("#sel7").addClass("correcto");
  } else {
    cor;
    $("#sel7").removeClass("correcto");
    $("#sel7").addClass("incorrecto");
  }
  if (sel8 == "4") {
    cor = cor + 1;
    $("#sel8").addClass("correcto");
  } else {
    cor;
    $("#sel8").removeClass("correcto");
    $("#sel8").addClass("incorrecto");
  }
  if (sel9 == "5") {
    cor = cor + 1;
    $("#sel9").addClass("correcto");
  } else {
    cor;
    $("#sel9").removeClass("correcto");
    $("#sel9").addClass("incorrecto");
  }
  if (sel10 == "6") {
    cor = cor + 1;
    $("#sel10").addClass("correcto");
  } else {
    cor;
    $("#sel10").removeClass("correcto");
    $("#sel10").addClass("incorrecto");
  }
  if (sel11 == "3") {
    cor = cor + 1;
    $("#sel11").addClass("correcto");
  } else {
    cor;
    $("#sel11").removeClass("correcto");
    $("#sel11").addClass("incorrecto");
  }
  if (sel12 == "7") {
    cor = cor + 1;
    $("#sel12").addClass("correcto");
  } else {
    cor;
    $("#sel12").removeClass("correcto");
    $("#sel12").addClass("incorrecto");
  }
  if (sel13 == "6") {
    cor = cor + 1;
    $("#sel13").addClass("correcto");
  } else {
    cor;
    $("#sel13").removeClass("correcto");
    $("#sel13").addClass("incorrecto");
  }
  if (sel14 == "8") {
    cor = cor + 1;
    $("#sel14").addClass("correcto");
  } else {
    cor;
    $("#sel14").removeClass("correcto");
    $("#sel14").addClass("incorrecto");
  }
  if (sel15 == "2") {
    cor = cor + 1;
    $("#sel15").addClass("correcto");
  } else {
    cor;
    $("#sel15").removeClass("correcto");
    $("#sel15").addClass("incorrecto");
  }
  if (sel16 == "9") {
    cor = cor + 1;
    $("#sel16").addClass("correcto");
  } else {
    cor;
    $("#sel16").removeClass("correcto");
    $("#sel16").addClass("incorrecto");
  }
  if (sel17 == "7") {
    cor = cor + 1;
    $("#sel17").addClass("correcto");
  } else {
    cor;
    $("#sel17").removeClass("correcto");
    $("#sel17").addClass("incorrecto");
  }
  if (sel18 == "10") {
    cor = cor + 1;
    $("#sel18").addClass("correcto");
  } else {
    cor;
    $("#sel18").removeClass("correcto");
    $("#sel18").addClass("incorrecto");
  }
  if (sel19 == "11") {
    cor = cor + 1;
    $("#sel19").addClass("correcto");
  } else {
    cor;
    $("#sel19").removeClass("correcto");
    $("#sel19").addClass("incorrecto");
  }

  var total = (cor * 2) / 19;
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

var nm1 = parseInt(Math.random() * 99 + 1);
var nm2 = parseInt(Math.random() * 99 + 1);
var nm3 = parseInt(Math.random() * 99 + 1);
var nm4 = parseInt(Math.random() * 99 + 1);
var nm5 = parseInt(Math.random() * 99 + 1);
var nm6 = parseInt(Math.random() * 99 + 1);
var nm7 = parseInt(Math.random() * 99 + 1);
var nm8 = parseInt(Math.random() * 99 + 1);
var nm9 = parseInt(Math.random() * 99 + 1);
var nm10 = parseInt(Math.random() * 99 + 1);

$("#nm1").val(nm1);
$("#nm1").attr("disabled", "true");

$("#nm4").val(nm4);
$("#nm4").attr("disabled", "true");

$("#nm5").val(nm5);
$("#nm5").attr("disabled", "true");

$("#nm8").val(nm8);
$("#nm8").attr("disabled", "true");

$("#nm9").val(nm9);
$("#nm9").attr("disabled", "true");

function pregunta3() {
  var cor = 0;
  var lt1 = document.getElementById("lt1").value;
  var lt4 = document.getElementById("lt4").value;
  var lt5 = document.getElementById("lt5").value;
  var lt8 = document.getElementById("lt8").value;
  var lt9 = document.getElementById("lt9").value;

  if (lt1 == tra1) {
    f_ok("#lt1");
    cor = cor + 1;
  } else {
    f_no("#lt1");
    cor;
  }
  if (lt4 == tra4) {
    f_ok("#lt4");
    cor = cor + 1;
  } else {
    f_no("#lt4");
    cor;
  }
  if (lt5 == tra5) {
    f_ok("#lt5");
    cor = cor + 1;
  } else {
    f_no("#lt5");
    cor;
  }
  if (lt8 == tra8) {
    f_ok("#lt8");
    cor = cor + 1;
  } else {
    f_no("#lt8");
    cor;
  }
  if (lt9 == tra9) {
    f_ok("#lt9");
    cor = cor + 1;
  } else {
    f_no("#lt9");
    cor;
  }

  var nume2 = document.getElementById("nm2").value;
  var nume3 = document.getElementById("nm3").value;
  var nume6 = document.getElementById("nm6").value;
  var nume7 = document.getElementById("nm7").value;
  var nume10 = document.getElementById("nm10").value;

  if (nume2 == nm2) {
    f_ok("#nm2");
    cor = cor + 1;
  } else {
    f_no("#nm2");
    cor;
  }
  if (nume3 == nm3) {
    f_ok("#nm3");
    cor = cor + 1;
  } else {
    f_no("#nm3");
    cor;
  }
  if (nume6 == nm6) {
    f_ok("#nm6");
    cor = cor + 1;
  } else {
    f_no("#nm6");
    cor;
  }
  if (nume7 == nm7) {
    f_ok("#nm7");
    cor = cor + 1;
  } else {
    f_no("#nm7");
    cor;
  }
  if (nume10 == nm10) {
    f_ok("#nm10");
    cor = cor + 1;
  } else {
    f_no("#nm10");
    cor;
  }

  var total = (cor * 2) / 10;
  if (total < 0) {
    total = 0;
    tpre3 = total.toFixed(2);
  } else {
    tpre3 = total.toFixed(2);
  }
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var sum_total1 = 0;
var sum_total2 = 0;
var sum_total3 = 0;
var sum_total4 = 0;

var n1 = parseInt(Math.random() * 99 + 1);
var n2 = parseInt(Math.random() * 99 + 1);
$("#n1").val(n1);
$("#n1").attr("disabled", "true");

// carga de imagen deacuerdo al número
var vector5 = [];
//separo los numeros en partes
var n3 = n2.toString().split("");
var n4 = n1.toString().split("");
//

for (var i = 0; i < parseInt(n3[0]); i++) {
  vector5.push(
    '<img class="img-responsive" src="img/i1_p107_act108.jpg" style="mix-blend-mode: multiply; display: inline-block;">'
  );
}

for (var i = 0; i < parseInt(n3[1]); i++) {
  vector5.push(
    '<img class="img-responsive" src="img/i1_p105_act105.jpg" style="mix-blend-mode: multiply; display: inline-block;">'
  );
}

$(".p3res3").html(vector5);
//

// conversión de numero a letras

var t1 = 0;
var t2 = 0;

var tra1 = 0;
var tra2 = 0;
var tra3 = 0;
var tra4 = 0;
var tra5 = 0;
var tra6 = 0;
var tra7 = 0;
var tra8 = 0;
var tra9 = 0;
var tra10 = 0;

function st() {
  t1 = nn(n1);
  t2 = nn(n2);

  tra1 = nn(nm1);
  tra2 = nn(nm2);
  tra3 = nn(nm3);
  tra4 = nn(nm4);
  tra5 = nn(nm5);
  tra6 = nn(nm6);
  tra7 = nn(nm7);
  tra8 = nn(nm8);
  tra9 = nn(nm9);
  tra10 = nn(nm10);

  $("#lt2").val(tra2);
  $("#lt2").attr("disabled", "true");

  $("#lt3").val(tra3);
  $("#lt3").attr("disabled", "true");

  $("#lt6").val(tra6);
  $("#lt6").attr("disabled", "true");

  $("#lt7").val(tra7);
  $("#lt7").attr("disabled", "true");

  $("#lt10").val(tra10);
  $("#lt10").attr("disabled", "true");
}

window.onload = st;
//

sum_total1 = 0;

$(".c_destino").html("");

$(".drag1").draggable({
  rever: "invalid",
  helper: "clone"
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
    str = ui.draggable.attr("id"); //capturamos los IDS
    if (str == "b1") {
      sum_total1 += 10;
    } else if (str == "b2") {
      sum_total1 += 1;
    }
  }
});

sum_total2 = 0;

$(".drag2").draggable({
  rever: "invalid",
  helper: "clone"
});
$(".drop2").droppable({
  accept: ".drag2",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply");
    });
    $(this)
      .find(".drop2")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total2 += 10;
    } else if (str1 == "b2") {
      sum_total2 += 1;
    }
  }
});

sum_total3 = 0;

$(".drag3").draggable({
  rever: "invalid",
  helper: "clone"
});
$(".drop3").droppable({
  accept: ".drag3",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply");
    });
    $(this)
      .find(".drop3")
      .draggable({ disabled: true });
    str2 = ui.draggable.attr("id"); //capturamos los IDS
    if (str2 == "b1") {
      sum_total3 += 10;
    } else if (str2 == "b2") {
      sum_total3 += 1;
    }
  }
});

sum_total4 = 0;

$(".drag4").draggable({
  rever: "invalid",
  helper: "clone"
});
$(".drop4").droppable({
  accept: ".drag4",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply");
    });
    $(this)
      .find(".drop4")
      .draggable({ disabled: true });
    str2 = ui.draggable.attr("id"); //capturamos los IDS
    if (str2 == "b1") {
      sum_total4 += 10;
    } else if (str2 == "b2") {
      sum_total4 += 1;
    }
  }
});

function pregunta4() {
  var cor = 0;
  if (sum_total1 == n1) {
    f_ok(".p3res1");
    cor = cor + 1;
  } else {
    f_no(".p3res1");
    cor;
  }
  if (sum_total2 == n1) {
    f_ok(".p3res2");
    cor = cor + 1;
  } else {
    f_no(".p3res2");
    cor;
  }
  if (sum_total4 == n2) {
    f_ok(".p3res4");
    cor = cor + 1;
  } else {
    f_no(".p3res4");
    cor;
  }
  var numero2 = document.getElementById("n2").value;

  if (numero2 == n2) {
    f_ok("#n2");
    cor = cor + 1;
  } else {
    f_no("#n2");
    cor;
  }
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;
  var num3 = document.getElementById("numero3").value;
  var num4 = document.getElementById("numero4").value;

  if (num3 == parseInt(n3[0])) {
    f_ok("#numero1");
    cor = cor + 1;
  } else {
    f_no("#numero1");
    cor;
  }

  if (num4 == parseInt(n3[1])) {
    f_ok("#numero2");
    cor = cor + 1;
  } else {
    f_no("#numero2");
    cor;
  }

  if (num1 == parseInt(n4[0])) {
    f_ok("#numero3");
    cor = cor + 1;
  } else {
    f_no("#numero3");
    cor;
  }

  if (num2 == parseInt(n4[1])) {
    f_ok("#numero4");
    cor = cor + 1;
  } else {
    f_no("#numero4");
    cor;
  }

  var l1 = document.getElementById("l1").value;
  var l2 = document.getElementById("l2").value;

  if (l1 == t1) {
    f_ok("#l1");
    cor = cor + 1;
  } else {
    f_no("#l1");
    cor;
  }
  if (l2 == t2) {
    f_ok("#l2");
    cor = cor + 1;
  } else {
    f_no("#l2");
    cor;
  }

  var result7 = (cor * 2) / 10;
  tpre4 = parseFloat(result7);
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var num1 = parseInt(Math.random() * 5 + 1);
var num2 = parseInt(Math.random() * 5 + 1);

var vector1 = [num1];
var vector3 = [];
for (var i = 0; i < 13; i++) {
  vector1.push(vector1[i] + 3);
}
$("#3").val(vector1[2]);
$("#3").attr("disabled", "true");
$("#4").val(vector1[3]);
$("#4").attr("disabled", "true");
$("#5").val(vector1[4]);
$("#5").attr("disabled", "true");
vector3.push(vector1[0]);
vector3.push(vector1[1]);
vector3.push(vector1[5]);
vector3.push(vector1[6]);
vector3.push(vector1[7]);
vector3.push(vector1[10]);
vector3.push(vector1[11]);

$("#9").val(vector1[8]);
$("#9").attr("disabled", "true");
$("#10").val(vector1[9]);
$("#10").attr("disabled", "true");
$("#13").val(vector1[12]);
$("#13").attr("disabled", "true");

var vector2 = [num2];
for (var i = 0; i < 13; i++) {
  vector2.push(vector2[i] + 2);
}
var vector4 = [];
$("#14").val(vector2[0]);
$("#14").attr("disabled", "true");

vector4.push(vector2[1]);
vector4.push(vector2[2]);
vector4.push(vector2[3]);
vector4.push(vector2[7]);
vector4.push(vector2[8]);
vector4.push(vector2[9]);
vector4.push(vector2[11]);
vector4.push(vector2[12]);

$("#18").val(vector2[4]);
$("#18").attr("disabled", "true");
$("#19").val(vector2[5]);
$("#19").attr("disabled", "true");
$("#20").val(vector2[6]);
$("#20").attr("disabled", "true");
$("#24").val(vector2[10]);
$("#24").attr("disabled", "true");
function pregunta5() {
  var i1 = $("#1").val();
  var i2 = $("#2").val();
  var i6 = $("#6").val();
  var i7 = $("#7").val();
  var i8 = $("#8").val();
  var i11 = $("#11").val();
  var i12 = $("#12").val();

  var corr = 0;
  if (i1 == vector1[0]) {
    corr++;
    f_ok($("#1"));
  } else {
    corr;
    f_no($("#1"));
  }
  if (i2 == vector1[1]) {
    corr++;
    f_ok($("#2"));
  } else {
    corr;
    f_no($("#2"));
  }
  if (i6 == vector1[5]) {
    corr++;
    f_ok($("#6"));
  } else {
    corr;
    f_no($("#6"));
  }
  if (i7 == vector1[6]) {
    corr++;
    f_ok($("#7"));
  } else {
    corr;
    f_no($("#7"));
  }
  if (i8 == vector1[7]) {
    corr++;
    f_ok($("#8"));
  } else {
    corr;
    f_no($("#8"));
  }
  if (i11 == vector1[10]) {
    corr++;
    f_ok($("#11"));
  } else {
    corr;
    f_no($("#11"));
  }
  if (i12 == vector1[11]) {
    corr++;
    f_ok($("#12"));
  } else {
    corr;
    f_no($("#12"));
  }
  var i15 = $("#15").val();
  var i16 = $("#16").val();
  var i17 = $("#17").val();
  var i21 = $("#21").val();
  var i22 = $("#22").val();
  var i23 = $("#23").val();
  var i25 = $("#25").val();
  var i26 = $("#26").val();

  if (i15 == vector2[1]) {
    corr++;
    f_ok($("#15"));
  } else {
    corr;
    f_no($("#15"));
  }
  if (i16 == vector2[2]) {
    corr++;
    f_ok($("#16"));
  } else {
    corr;
    f_no($("#16"));
  }
  if (i17 == vector2[3]) {
    corr++;
    f_ok($("#17"));
  } else {
    corr;
    f_no($("#17"));
  }
  if (i21 == vector2[7]) {
    corr++;
    f_ok($("#21"));
  } else {
    corr;
    f_no($("#21"));
  }
  if (i22 == vector2[8]) {
    corr++;
    f_ok($("#22"));
  } else {
    corr;
    f_no($("#22"));
  }
  if (i23 == vector2[9]) {
    corr++;
    f_ok($("#23"));
  } else {
    corr;
    f_no($("#23"));
  }
  if (i25 == vector2[11]) {
    corr++;
    f_ok($("#25"));
  } else {
    corr;
    f_no($("#25"));
  }
  if (i26 == vector2[12]) {
    corr++;
    f_ok($("#26"));
  } else {
    corr;
    f_no($("#26"));
  }
  var i50 = $("#50").val();
  var i51 = $("#51").val();
  var i52 = $("#52").val();
  var i53 = $("#53").val();
  var i54 = $("#54").val();
  var i55 = $("#55").val();
  var i56 = $("#56").val();

  var i57 = $("#57").val();
  var i58 = $("#58").val();
  var i59 = $("#59").val();
  var i60 = $("#60").val();
  var i61 = $("#61").val();
  var i62 = $("#62").val();
  var i63 = $("#63").val();
  var i64 = $("#64").val();

  if (i50 == vector3[6]) {
    corr++;
    f_ok($("#50"));
  } else {
    corr;
    f_no($("#50"));
  }
  if (i51 == vector3[5]) {
    corr++;
    f_ok($("#51"));
  } else {
    corr;
    f_no($("#51"));
  }
  if (i52 == vector3[4]) {
    corr++;
    f_ok($("#52"));
  } else {
    corr;
    f_no($("#52"));
  }
  if (i53 == vector3[3]) {
    corr++;
    f_ok($("#53"));
  } else {
    corr;
    f_no($("#53"));
  }
  if (i54 == vector3[2]) {
    corr++;
    f_ok($("#54"));
  } else {
    corr;
    f_no($("#54"));
  }
  if (i55 == vector3[1]) {
    corr++;
    f_ok($("#55"));
  } else {
    corr;
    f_no($("#55"));
  }
  if (i56 == vector3[0]) {
    corr++;

    f_ok($("#56"));
  } else {
    corr;

    f_no($("#56"));
  }
  if (i57 == vector4[7]) {
    corr++;
    f_ok($("#57"));
  } else {
    corr;
    f_no($("#57"));
  }
  if (i58 == vector4[6]) {
    corr++;
    f_ok($("#58"));
  } else {
    corr;
    f_no($("#58"));
  }
  if (i59 == vector4[5]) {
    corr++;
    f_ok($("#59"));
  } else {
    corr;
    f_no($("#59"));
  }
  if (i60 == vector4[4]) {
    corr++;
    f_ok($("#60"));
  } else {
    corr;
    f_no($("#60"));
  }
  if (i61 == vector4[3]) {
    corr++;
    f_ok($("#61"));
  } else {
    corr;
    f_no($("#61"));
  }
  if (i62 == vector4[2]) {
    corr++;
    f_ok($("#62"));
  } else {
    corr;
    f_no($("#62"));
  }
  if (i63 == vector4[1]) {
    corr++;
    f_ok($("#63"));
  } else {
    corr;
    f_no($("#63"));
  }
  if (i64 == vector4[0]) {
    corr++;
    f_ok($("#64"));
  } else {
    corr;
    f_no($("#64"));
  }

  var result7 = (corr * 2) / 30;
  tpre5 = parseFloat(result7);
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

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre6a = document.getElementById("pre6a").value;
    if (pre6a == "") {
      alert("Pregunta 6: Califiqué la pregunta");
    } else {
      var sel1 = document.getElementById("sel1").value;
      var sel2 = document.getElementById("sel2").value;
      var sel3 = document.getElementById("sel3").value;
      var sel4 = document.getElementById("sel4").value;
      var sel5 = document.getElementById("sel5").value;
      var sel6 = document.getElementById("sel6").value;
      var sel7 = document.getElementById("sel7").value;
      var sel8 = document.getElementById("sel8").value;
      var sel9 = document.getElementById("sel9").value;
      var sel10 = document.getElementById("sel10").value;
      var sel11 = document.getElementById("sel11").value;
      var sel12 = document.getElementById("sel12").value;
      var sel13 = document.getElementById("sel13").value;
      var sel14 = document.getElementById("sel14").value;
      var sel15 = document.getElementById("sel15").value;
      var sel16 = document.getElementById("sel16").value;
      var sel17 = document.getElementById("sel17").value;
      var sel18 = document.getElementById("sel18").value;
      var sel19 = document.getElementById("sel19").value;
      if (
        sel1 == "1" ||
        sel2 == "1" ||
        sel3 == "1" ||
        sel4 == "1" ||
        sel5 == "1" ||
        sel6 == "1" ||
        sel7 == "1" ||
        sel8 == "1" ||
        sel9 == "1" ||
        sel10 == "1" ||
        sel11 == "1" ||
        sel12 == "1" ||
        sel13 == "1" ||
        sel14 == "1" ||
        sel15 == "1" ||
        sel16 == "1" ||
        sel17 == "1" ||
        sel18 == "1" ||
        sel19 == "1"
      ) {
        alert("Pregunta 3: Seleccione todas las respuestas posibles");
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
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr("disabled", "disabled");
      }
    }
  }
}
// #endregion
