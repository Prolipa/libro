var tpre2 = 0;
var tpre3 = 0;

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 5);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 5);
});

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
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre2a = document.getElementById("pre2a").value;
  if (pre2a == "") {
    alert("Pregunta 2: Califiqué la pregunta");
  } else {
    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
      alert("Pregunta 3: Califiqué la pregunta");
    } else {
      pregunta2();
      pregunta3();
      var Nf = parseFloat(tpre2) + parseFloat(tpre3);
      var Vtotal = Nf.toFixed(2);
      $("#txtNota").html(Vtotal + "/10");
      document.getElementById("bt_comprobar").disabled = true;
    }
  }
}
// #endregion
