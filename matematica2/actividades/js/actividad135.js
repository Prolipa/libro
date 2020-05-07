var titulos = "prueba";
var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 2);
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

// #region Pregunta1
function pregunta1() {
  $(".drag").draggable({
    rever: "invalid",
    helper: "clone"
  });
  $(".drop").droppable({
    accept: ".drag",
    drop: function(e, ui) {
      ui.helper.clone().appendTo(this);
      $.each($(this).children(), function(index, value) {
        $(this).attr("style", "mix-blend-mode:multiply");
      });
      $(this)
        .find(".drop")
        .draggable({ disabled: true });
      str = ui.draggable.attr("id"); //capturamos los IDS
      if (str == "b1") {
        sum_total += 1;
      }
    }
  });
  var correcto = 0;
  var p3imag1 = $("#p3imag1 img").attr("alt");
  var p3imag2 = $("#p3imag2 img").attr("alt");
  var p3imag3 = $("#p3imag3 img").attr("alt");
  var p3imag4 = $("#p3imag4 img").attr("alt");
  var p3imag5 = $("#p3imag5 img").attr("alt");
  var p3imag6 = $("#p3imag6 img").attr("alt");
  var p3imag7 = $("#p3imag7 img").attr("alt");
  var p3imag8 = $("#p3imag8 img").attr("alt");
  var p3imag9 = $("#p3imag9 img").attr("alt");
  var p3imag10 = $("#p3imag10 img").attr("alt");
  var p3imag11 = $("#p3imag11 img").attr("alt");
  var p3imag12 = $("#p3imag12 img").attr("alt");
  var p3imag13 = $("#p3imag13 img").attr("alt");
  var p3imag14 = $("#p3imag14 img").attr("alt");
  if (p3imag1 == "1") {
    correcto = correcto + 1;
    ($("#p3imag1").addClass('correcto'));
  } else {
    ($("#p3imag1").addClass('incorrecto'));
  }

  if (p3imag2 == "2") {
    correcto = correcto + 1;
    ($("#p3imag2").addClass('correcto'));
  } else {
    ($("#p3imag2").addClass('incorrecto'));
  }
  if (p3imag3 == "3") {
    correcto = correcto + 1;
    ($("#p3imag3").addClass('correcto'));
  } else {
    ($("#p3imag3").addClass('incorrecto'));
  }
  if (p3imag4 == "4") {
    correcto = correcto + 1;
    ($("#p3imag4").addClass('correcto'));
  } else {
    ($("#p3imag4").addClass('incorrecto'));
  }
  if (p3imag5 == "1") {
    correcto = correcto + 1;
    ($("#p3imag5").addClass('correcto'));
  } else {
    ($("#p3imag5").addClass('incorrecto'));
  }
  if (p3imag6 == "2") {
    correcto = correcto + 1;
    ($("#p3imag6").addClass('correcto'));
  } else {
    ($("#p3imag6").addClass('incorrecto'));
  }
  if (p3imag7 == "3") {
    correcto = correcto + 1;
    ($("#p3imag7").addClass('correcto'));
  } else {
    ($("#p3imag7").addClass('incorrecto'));
  }
  if (p3imag8 == "4") {
    correcto = correcto + 1;
    ($("#p3imag8").addClass('correcto'));
  } else {
    ($("#p3imag8").addClass('incorrecto'));
  }
  if (p3imag9 == "5") {
    correcto = correcto + 1;
    ($("#p3imag9").addClass('correcto'));
  } else {
    ($("#p3imag9").addClass('incorrecto'));
  }
  if (p3imag10 == "6") {
    correcto = correcto + 1;
    ($("#p3imag10").addClass('correcto'));
  } else {
    ($("#p3imag10").addClass('incorrecto'));
  }
  if (p3imag11 == "7") {
    correcto = correcto + 1;
    ($("#p3imag11").addClass('correcto'));
  } else {
    ($("#p3imag11").addClass('incorrecto'));
  }
  if (p3imag12 == "5") {
    correcto = correcto + 1;
    ($("#p3imag12").addClass('correcto'));
  } else {
    ($("#p3imag12").addClass('incorrecto'));
  }
  if (p3imag13 == "6") {
    correcto = correcto + 1;
    ($("#p3imag13").addClass('correcto'));
  } else {
    ($("#p3imag13").addClass('incorrecto'));
  }
  if (p3imag14 == "7") {
    correcto = correcto + 1;
    ($("#p3imag14").addClass('correcto'));
  } else {
    ($("#p3imag14").addClass('incorrecto'));
  }
  var total = (correcto * 2) / 14;
  tpre1 = total;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
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
  tpre2 = nota / 5;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
  [
    '<table class="table-bordered" style="text-align: center">    <tr>        <td width="4%"></td>        <td width="48%">            <h4>                <font color="#EC407A"><b>D</b></font>            </h4>        </td>        <td width="48%">            <h4>                <font color="#2196F3"><b>U</b></font>            </h4>        </td>    </tr>    <tr>        <td></td>        <td><h4><b>2</b></h4></td>        <td><h4><b>6</b></h4></td>    </tr>    <tr>        <td><h4><b>-</b></h4></td>            <td><h4><b>1</b></h4></td>            <td><h4><b>2</b></h4></td>        </tr>        <tr style="border-top:2px solid #303F9F">            <td></td>            <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input                type="hidden" style="color:blue" class="solucion3" value="1"></td>                <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input                    type="hidden" style="color:blue" class="solucion3" value="4"></td>        </tr></table><br>'
  ],
  [
    '<table class="table-bordered" style="text-align: center">    <tr>        <td width="4%"></td>        <td width="48%">            <h4>                <font color="#EC407A"><b>D</b></font>            </h4>        </td>        <td width="48%">            <h4>                <font color="#2196F3"><b>U</b></font>            </h4>        </td>    </tr>    <tr>        <td></td>        <td><h4><b>1</b></h4></td>        <td><h4><b>8</b></h4></td>    </tr>    <tr>        <td><h4><b>-</b></h4></td>            <td><h4><b></b></h4></td>            <td><h4><b>6</b></h4></td>        </tr>        <tr style="border-top:2px solid #303F9F">            <td></td>            <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input                type="hidden" style="color:blue" class="solucion3" value="1"></td>                <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input                    type="hidden" style="color:blue" class="solucion3" value="2"></td>        </tr></table><br>'
  ],
  [
    '<table class="table-bordered" style="text-align: center">    <tr>        <td width="4%"></td>        <td width="48%">            <h4>                <font color="#EC407A"><b>D</b></font>            </h4>        </td>        <td width="48%">            <h4>                <font color="#2196F3"><b>U</b></font>            </h4>        </td>    </tr>    <tr>        <td></td>        <td><h4><b>1</b></h4></td>        <td><h4><b>5</b></h4></td>    </tr>    <tr>        <td><h4><b>+</b></h4></td>            <td><h4><b>1</b></h4></td>            <td><h4><b>3</b></h4></td>        </tr>        <tr style="border-top:2px solid #303F9F">            <td></td>            <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input                type="hidden" style="color:blue" class="solucion3" value="2"></td>                <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input                    type="hidden" style="color:blue" class="solucion3" value="8"></td>        </tr></table><br>'
  ],
  [
    '<table class="table-bordered" style="text-align: center">    <tr>        <td width="4%"></td>        <td width="48%">            <h4>                <font color="#EC407A"><b>D</b></font>            </h4>        </td>        <td width="48%">            <h4>                <font color="#2196F3"><b>U</b></font>            </h4>        </td>    </tr>    <tr>        <td></td>        <td><h4><b>2</b></h4></td>        <td><h4><b>1</b></h4></td>    </tr>    <tr>        <td><h4><b>+</b></h4></td>            <td><h4><b></b></h4></td>            <td><h4><b>3</b></h4></td>        </tr>        <tr style="border-top:2px solid #303F9F">            <td></td>            <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input                type="hidden" style="color:blue" class="solucion3" value="2"></td>                <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input                    type="hidden" style="color:blue" class="solucion3" value="4"></td>        </tr></table><br>'
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

// #region Random4
var random4 = [
  [
    '<img class="img-responsive" src="img/i4_p98_act4.jpg"><br>      <center>              <h3><input type="text" maxlength="2" size="1" style="width:30px"  class="cajas border-blue respuestas4"><input              type="hidden" style="color:blue" class="solucion4"              value="26"></h3><br>      </center>'
  ],
  [
    '<img class="img-responsive" src="img/i3_p98_act4.jpg"><br>        <center>                <h3><input type="text" maxlength="2" size="1" style="width:30px"  class="cajas border-blue respuestas4"><input                type="hidden" style="color:blue" class="solucion4"                value="17"></h3><br>        </center>'
  ],
  [
    '<img class="img-responsive" src="img/i5_p98_act4.jpg"><br>        <center>                <h3><input type="text" maxlength="2" size="1" style="width:30px"  class="cajas border-blue respuestas4"><input                type="hidden" style="color:blue" class="solucion4"                value="14"></h3><br>        </center>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p98_act4.jpg"><br>        <center>                <h3><input type="text" maxlength="2" size="1" style="width:30px"  class="cajas border-blue respuestas4"><input                type="hidden" style="color:blue" class="solucion4"                value="11"></h3><br>        </center>'
  ],
  [
    '<img class="img-responsive" src="img/i2_p98_act4.jpg"><br>        <center>                <h3><input type="text" maxlength="2" size="1" style="width:30px"  class="cajas border-blue respuestas4"><input                type="hidden" style="color:blue" class="solucion4"                value="20"></h3><br>        </center>'
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
function pregunta4() {
  var pre4a = document.getElementById("pre4a").value;
  tpre4 = pre4a;
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
function pregunta6() {
  var pre6a = document.getElementById("pre6a").value;
  tpre6 = pre6a;
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre4a = document.getElementById("pre4a").value;
  if (pre4a == "") {
    alert("Pregunta 4: Califiqué la pregunta");
  } else {
    var pre5a = document.getElementById("pre5a").value;
    if (pre5a == "") {
      alert("Pregunta 5: Califiqué la pregunta");
    } else {
      var pre6a = document.getElementById("pre6a").value;
      if (pre6a == "") {
        alert("Pregunta 6: Califiqué la pregunta");
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
      }
    }
  }
}
// #endregion
