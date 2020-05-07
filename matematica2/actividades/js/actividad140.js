var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Pregunta1
var numero11 = parseInt(Math.random() * 31 + 7);
var numero12 = parseInt(Math.random() * 80 + 10);
var numero13 = parseInt(Math.random() * 40 + 40);
var numero14 = parseInt(Math.random() * 70 + 10);


var p7vec1 = [numero11];
for (var i = 0; i < 6; i++) {
  p7vec1.push(p7vec1[i] + 1);
}
$("#p7dcon1").val(p7vec1[0]);
$("#p7dcon1").attr("disabled", "true");
$("#p7dcon2").val(p7vec1[1]);
$("#p7dcon2").attr("disabled", "true");
$("#p7dcon3").val(p7vec1[2]);
$("#p7dcon3").attr("disabled", "true");

var p7vec2 = [numero12];
for (var i = 0; i < 6; i++) {
  p7vec2.push(p7vec2[i] - 1);
}
$("#p7dcon7").val(p7vec2[0]);
$("#p7dcon7").attr("disabled", "true");
$("#p7dcon8").val(p7vec2[1]);
$("#p7dcon8").attr("disabled", "true");
$("#p7dcon9").val(p7vec2[2]);
$("#p7dcon9").attr("disabled", "true");

var p7vec3 = [numero13];
for (var i = 0; i < 6; i++) {
  p7vec3.push(p7vec3[i] + 1);
}
$("#p7dcon13").val(p7vec3[0]);
$("#p7dcon13").attr("disabled", "true");
$("#p7dcon14").val(p7vec3[1]);
$("#p7dcon14").attr("disabled", "true");
$("#p7dcon15").val(p7vec3[2]);
$("#p7dcon15").attr("disabled", "true");

var p7vec4 = [numero14];
for (var i = 0; i < 6; i++) {
  p7vec4.push(p7vec4[i] - 1);
}
$("#p7dcon19").val(p7vec4[0]);
$("#p7dcon19").attr("disabled", "true");
$("#p7dcon20").val(p7vec4[1]);
$("#p7dcon20").attr("disabled", "true");
$("#p7dcon21").val(p7vec4[2]);
$("#p7dcon21").attr("disabled", "true");

var num1 = parseInt(Math.random() * 22 + 7);
var num2 = parseInt(Math.random() * 81 + 7);

var vector1 = [num1];
for (var i = 0; i < 13; i++) {
  vector1.push(vector1[i] + 1);
}
$("#3").val(vector1[2]);
$("#3").attr("disabled", "true");
$("#4").val(vector1[3]);
$("#4").attr("disabled", "true");
$("#5").val(vector1[4]);
$("#5").attr("disabled", "true");

$("#9").val(vector1[8]);
$("#9").attr("disabled", "true");
$("#10").val(vector1[9]);
$("#10").attr("disabled", "true");
$("#13").val(vector1[12]);
$("#13").attr("disabled", "true");



function pregunta1() {
  var p7dcon4 = $("#p7dcon4").val();
  var p7dcon5 = $("#p7dcon5").val();
  var p7dcon6 = $("#p7dcon6").val();
  var p7dcon10 = $("#p7dcon10").val();
  var p7dcon11 = $("#p7dcon11").val();
  var p7dcon12 = $("#p7dcon12").val();
  var p7dcon16 = $("#p7dcon16").val();
  var p7dcon17 = $("#p7dcon17").val();
  var p7dcon18 = $("#p7dcon18").val();
  var p7dcon22 = $("#p7dcon22").val();
  var p7dcon23 = $("#p7dcon23").val();
  var p7dcon24 = $("#p7dcon24").val();
  var p7cont1 = 0;
  if (p7dcon4 == p7vec1[3]) {
    p7cont1++;
    f_ok($("#p7dcon4"));
  } else {
    p7cont1;
    f_no($("#p7dcon4"));
  }
  if (p7dcon5 == p7vec1[4]) {
    p7cont1++;
    f_ok($("#p7dcon5"));
  } else {
    p7cont1;
    f_no($("#p7dcon5"));
  }
  if (p7dcon6 == p7vec1[5]) {
    p7cont1++;
    f_ok($("#p7dcon6"));
  } else {
    p7cont1;
    f_no($("#p7dcon6"));
  }

  if (p7dcon10 == p7vec2[3]) {
    p7cont1++;
    f_ok($("#p7dcon10"));
  } else {
    p7cont1;
    f_no($("#p7dcon10"));
  }
  if (p7dcon11 == p7vec2[4]) {
    p7cont1++;
    f_ok($("#p7dcon11"));
  } else {
    p7cont1;
    f_no($("#p7dcon11"));
  }
  if (p7dcon12 == p7vec2[5]) {
    p7cont1++;
    f_ok($("#p7dcon12"));
  } else {
    p7cont1;
    f_no($("#p7dcon12"));
  }

  if (p7dcon16 == p7vec3[3]) {
    p7cont1++;
    f_ok($("#p7dcon16"));
  } else {
    p7cont1;
    f_no($("#p7dcon16"));
  }
  if (p7dcon17 == p7vec3[4]) {
    p7cont1++;
    f_ok($("#p7dcon17"));
  } else {
    p7cont1;
    f_no($("#p7dcon17"));
  }
  if (p7dcon18 == p7vec3[5]) {
    p7cont1++;
    f_ok($("#p7dcon18"));
  } else {
    p7cont1;
    f_no($("#p7dcon18"));
  }

  if (p7dcon22 == p7vec4[3]) {
    p7cont1++;
    f_ok($("#p7dcon22"));
  } else {
    p7cont1;
    f_no($("#p7dcon22"));
  }
  if (p7dcon23 == p7vec4[4]) {
    p7cont1++;
    f_ok($("#p7dcon23"));
  } else {
    p7cont1;
    f_no($("#p7dcon23"));
  }
  if (p7dcon24 == p7vec4[5]) {
    p7cont1++;
    f_ok($("#p7dcon24"));
  } else {
    p7cont1;
    f_no($("#p7dcon24"));
  }
  var result7 = (p7cont1 * 4) / 12;
  tpre1 = parseFloat(result7);
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var vector2 = [num2];
for (var i = 0; i < 13; i++) {
  vector2.push(vector2[i] + 1);
}
$("#14").val(vector2[0]);
$("#14").attr("disabled", "true");
$("#18").val(vector2[4]);
$("#18").attr("disabled", "true");
$("#19").val(vector2[5]);
$("#19").attr("disabled", "true");
$("#20").val(vector2[6]);
$("#20").attr("disabled", "true");
$("#24").val(vector2[10]);
$("#24").attr("disabled", "true");
function pregunta2() {
    var i1 = $("#1").val();
    var i2 = $("#2").val();
    var i6 = $("#6").val();
    var i7  =$("#7").val();
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
      var i21  =$("#21").val();
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
    
    var result7 = (corr * 4) / 15;
    tpre2 = parseFloat(result7);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
function pregunta3() {
    var respuestas = document.getElementsByClassName("respuestas3");
    var soluciones = document.getElementsByClassName("solucion3");
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
    tpre3 = nota / 5;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
  }
  // #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  pregunta3();
  var Nf = parseFloat(tpre1) + parseFloat(tpre2)+parseFloat(tpre3);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
