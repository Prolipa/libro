var titulos = "reflexiono";
numero_pagina(74);

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 10);
});

var tpre2 = 0;


// #region Pregunta2
function pregunta2() {
  var pre2a = document.getElementById("pre2a").value;
  tpre2 = pre2a;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

function NotaFinal() {
  var pre2a = document.getElementById("pre2a").value;
  if (pre2a == "") {
    alert("Pregunta 3: Califiqué la pregunta");
  } else {
    pregunta2();
    var Nf = parseFloat(tpre2);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}
