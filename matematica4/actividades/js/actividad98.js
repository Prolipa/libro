var titulos = "aplico";
numero_pagina(103);

var tpre1 = 0;
var tpre2 = 0;

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 5);
});

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 5);
});
// #region Random1
var random1 = [
  [
    '<h4> 4 filas de 3 columnas = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="12"></h4> <h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="4"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="3"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="12"></h4> <br> <table> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr></table>'
  ],
  [
    '<h4> 3 filas de 6 columnas = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="18"></h4> <h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="3"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="6"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="18"></h4> <br> <table> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr><tr><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td><td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></table>'
  ],
  [
    '<h4> 5 filas de 2 columnas = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="10"></h4> <h4><input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="5"> x <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="2"> = <input type="text" size="1" maxlength="3" style="width:50px" class=" border-blue respuestas1 cajas"><input type="hidden" style="color:blue" class="solucion1" value="10"></h4> <br> <table> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td>  <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> </tr> <tr> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td> <td><input type="text" style="width:25px;height:25px;" class="enc" readonly></td></tr> </table>'
  ]
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

$(".enc").click(function() {
  if ($(this).hasClass("pintar")) {
    $(this).removeClass("pintar");
  } else {
    $(this).addClass("pintar");
  }
});

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
      var Nf = parseFloat(tpre1) + parseFloat(tpre2);

      var Vtotal = Nf.toFixed(2);
      $("#txtNota").html(Vtotal);
      document.getElementById("bt_comprobar").disabled = true;
    }
  }
}

// #endregion
