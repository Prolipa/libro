var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;


// #region Pregunta1
function pregunta1() {
  var respuestas = document.getElementsByClassName("respuestas1");
  var soluciones = document.getElementsByClassName("solucion1");
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
  tpre1 = (nota * 4) / 10;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var num1 = parseInt(Math.random() * 9 + 1);
var num2 = parseInt(Math.random() * 9 + 1);
var num3 = parseInt(Math.random() * 9 + 1);
var num4 = parseInt(Math.random() * 9 + 1);
var num5 = parseInt(Math.random() * 9 + 1);
var num6 = parseInt(Math.random() * 9 + 1);
var num7 = parseInt(Math.random() * 9 + 1);
var num8 = parseInt(Math.random() * 9 + 1);
var num9 = parseInt(Math.random() * 9 + 1);
var num10 = parseInt(Math.random() * 9 + 1);
var num11 = parseInt(Math.random() * 9 + 1);
var num12 = parseInt(Math.random() * 9 + 1);

$("#1").val(num1);
$("#1").attr("disabled", "true");
$("#2").val(num2);
$("#2").attr("disabled", "true");
$("#3").val(num3);
$("#3").attr("disabled", "true");
$("#4").val(num4);
$("#4").attr("disabled", "true");
$("#5").val(num5);
$("#5").attr("disabled", "true");
$("#6").val(num6);
$("#6").attr("disabled", "true");
$("#7").val(num7);
$("#7").attr("disabled", "true");
$("#8").val(num8);
$("#8").attr("disabled", "true");
$("#9").val(num9);
$("#9").attr("disabled", "true");
$("#10").val(num10);
$("#10").attr("disabled", "true");
$("#11").val(num11);
$("#11").attr("disabled", "true");
$("#12").val(num12);
$("#12").attr("disabled", "true");

$("#13").val(num1);
$("#13").attr("disabled", "true");
$("#14").val(num3);
$("#14").attr("disabled", "true");
$("#15").val(num2);
$("#15").attr("disabled", "true");
$("#16").val(num4);
$("#16").attr("disabled", "true");
$("#17").val(num1.toString() + num2.toString());
$("#17").attr("disabled", "true");
$("#18").val(num3.toString() + num4.toString());
$("#18").attr("disabled", "true");

$("#19").val(num5);
$("#19").attr("disabled", "true");
$("#20").val(num7);
$("#20").attr("disabled", "true");
$("#21").val(num6);
$("#21").attr("disabled", "true");
$("#22").val(num8);
$("#22").attr("disabled", "true");
$("#23").val(num5.toString() + num6.toString());
$("#23").attr("disabled", "true");
$("#24").val(num7.toString() + num8.toString());
$("#24").attr("disabled", "true");

$("#25").val(num9);
$("#25").attr("disabled", "true");
$("#26").val(num11);
$("#26").attr("disabled", "true");
$("#27").val(num10);
$("#27").attr("disabled", "true");
$("#28").val(num12);
$("#28").attr("disabled", "true");
$("#29").val(num9.toString() + num10.toString());
$("#29").attr("disabled", "true");
$("#30").val(num11.toString() + num12.toString());
$("#30").attr("disabled", "true");

function pregunta2() {
  var corr = 0;
  var res = $("#sel1 option:selected").text();

  switch (res) {
    case "<":
      if (num1 < num3) {
        $("#sel1").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel1").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if (num1 > num3) {
        $("#sel1").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel1").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if ((num1 = num3)) {
        $("#sel1").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel1").addClass("incorrecto");
        corr = corr;
      }
      break;
  }

  res = $("#sel2 option:selected").text();

  switch (res) {
    case "<":
      if (num2 < num4) {
        $("#sel2").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel2").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if (num2 > num4) {
        $("#sel2").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel2").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if ((num2 = num4)) {
        $("#sel2").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel2").addClass("incorrecto");
        corr = corr;
      }
      break;
  }
  res = $("#sel3 option:selected").text();

  switch (res) {
    case "<":
      if ($("#17").val() < $("#18").val()) {
        $("#sel3").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel3").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if ($("#17").val() > $("#18").val()) {
        $("#sel3").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel3").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if (($("#17").val() = $("#18").val())) {
        $("#sel3").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel3").addClass("incorrecto");
        corr = corr;
      }
      break;
  }




  res = $("#sel4 option:selected").text();

  switch (res) {
    case "<":
      if (num5 < num7) {
        $("#sel4").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel4").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if (num5 > num7) {
        $("#sel4").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel4").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if ((num5 = num7)) {
        $("#sel4").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel4").addClass("incorrecto");
        corr = corr;
      }
      break;
  }

  res = $("#sel5 option:selected").text();

  switch (res) {
    case "<":
      if (num6 < num8) {
        $("#sel5").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel5").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if (num6 > num8) {
        $("#sel5").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel5").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if ((num6 = num8)) {
        $("#sel5").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel5").addClass("incorrecto");
        corr = corr;
      }
      break;
  }
  res = $("#sel6 option:selected").text();

  switch (res) {
    case "<":
      if ($("#23").val() < $("#24").val()) {
        $("#sel6").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel6").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if ($("#23").val() > $("#24").val()) {
        $("#sel6").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel6").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if (($("#23").val() = $("#24").val())) {
        $("#sel6").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel6").addClass("incorrecto");
        corr = corr;
      }
      break;
  }



  res = $("#sel7 option:selected").text();

  switch (res) {
    case "<":
      if (num9 < num11) {
        $("#sel7").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel7").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if (num9 > num11) {
        $("#sel7").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel7").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if ((num9 = num11)) {
        $("#sel7").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel7").addClass("incorrecto");
        corr = corr;
      }
      break;
  }

  res = $("#sel8 option:selected").text();

  switch (res) {
    case "<":
      if (num10 < num12) {
        $("#sel8").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel8").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if (num10 > num12) {
        $("#sel8").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel8").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if ((num10 = num12)) {
        $("#sel8").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel8").addClass("incorrecto");
        corr = corr;
      }
      break;
  }
  res = $("#sel9 option:selected").text();

  switch (res) {
    case "<":
      if ($("#29").val() < $("#30").val()) {
        $("#sel9").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel9").addClass("incorrecto");
        corr = corr;
      }
      break;
    case ">":
      if ($("#29").val() > $("#30").val()) {
        $("#sel9").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel9").addClass("incorrecto");
        corr = corr;
      }
      break;
    case "=":
      if (($("#29").val() = $("#30").val())) {
        $("#sel9").addClass("correcto");
        corr = corr + 1;
      } else {
        $("#sel9").addClass("incorrecto");
        corr = corr;
      }
      break;
  }
  tpre2 = ((corr*4)/9);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
  
}
// #endregion

// #region Pregunta3
function pregunta3() {
  var corr=0;
   if ($("#50").val() < $("#51").val()) {
    $("#50").addClass("correcto");
    $("#51").addClass("correcto");
    corr = corr + 1;
  } else {
    $("#50").addClass("incorrecto");
    $("#51").addClass("incorrecto");
    corr = corr;
  }

  if ($("#52").val() > $("#53").val()) {
    $("#52").addClass("correcto");
    $("#53").addClass("correcto");
    corr = corr + 1;
  } else {
    $("#52").addClass("incorrecto");
    $("#53").addClass("incorrecto");
    corr = corr;
  }

  if ($("#54").val() == $("#55").val()) {
    $("#54").addClass("correcto");
    $("#55").addClass("correcto");
    corr = corr + 1;
  } else {
    $("#54").addClass("incorrecto");
    $("#55").addClass("incorrecto");
    corr = corr;
  }
  
  tpre3 = ((corr*2)/3);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
  
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var sel1 = document.getElementById("sel1").value;
  var sel2 = document.getElementById("sel2").value;
  var sel3 = document.getElementById("sel3").value;
  var sel4 = document.getElementById("sel4").value;
  var sel5 = document.getElementById("sel5").value;
  var sel6 = document.getElementById("sel6").value;
  var sel7 = document.getElementById("sel7").value;
  var sel8 = document.getElementById("sel8").value;
  var sel9 = document.getElementById("sel9").value;
  if (sel1 == "1" || sel2 == "1" || sel3 == "1" || sel4 == "1"||sel5 == "1" || sel6 == "1" || sel7 == "1" || sel8 == "1"|| sel9=="1") {
    alert("Pregunta 2: Seleccione todas las respuestas posibles.");
  } else {
  pregunta1();
  pregunta2();
  pregunta3();
  var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
  }
}
