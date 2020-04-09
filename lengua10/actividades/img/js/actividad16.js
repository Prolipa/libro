var titulos = "reflexiono";

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
  validMaxIngreso(document.getElementById("pre2a"), 2);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 2);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 2);
});

function pregunta1() {
  var cor = 0;
  var inc = 0;

  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;

  if (cbounoa == "2") {
    cor = cor + 1;
    $("#cbounoa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoa").removeClass("correcto");
    $("#cbounoa").addClass("incorrecto");
  }
  if (cbounob == "2") {
    cor = cor + 1;
    $("#cbounob").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounob").removeClass("correcto");
    $("#cbounob").addClass("incorrecto");
  }

  var total = (cor * 2) / 2;
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }

  var pre1a = document.getElementById("pre1a").value;
  var pre2a = document.getElementById("pre2a").value;
  var pre3a = document.getElementById("pre3a").value;
  var pre4a = document.getElementById("pre4a").value;
  tpre2 = pre1a;
  tpre3 = pre2a;
  tpre4 = pre3a;
  tpre5 = pre4a;
}

function NotaFinal() {
  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  if (cbounoa == "1" || cbounob == "1") {
    alert("Lectura Literal: Seleccione todas las respuestas posibles");
  } else {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
      alert("Lectura inferencial: Califiqué la pregunta");
    } else {
      var pre2a = document.getElementById("pre2a").value;
      if (pre2a == "") {
        alert("Lectura Inferencial: Califiqué la pregunta");
      } else {
        var pre3a = document.getElementById("pre3a").value;
        if (pre3a == "") {
          alert("Lectura crítico-valorativa: Califiqué la pregunta");
        } else {
          var pre4a = document.getElementById("pre4a").value;
          if (pre4a == "") {
            alert("Lectura crítico-valorativa: Califiqué la pregunta");
          } else {
            pregunta1();
            var Vtotal =
              parseFloat(tpre1) +
              parseFloat(tpre2) +
              parseFloat(tpre3) +
              parseFloat(tpre4) +
              parseFloat(tpre5);

            $("#txtNota").html(Vtotal+"/10");
            document.getElementById("bt_comprobar").disabled = true;
          }
        }
      }
    }
  }
}
