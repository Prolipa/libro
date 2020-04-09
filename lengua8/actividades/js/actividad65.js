var titulos = "aplico";
numero_pagina(69);

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
document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 1);
});
document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 1);
});
document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
  });
  document.getElementById("pre7a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre7a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre7a"), 2);
  });
  document.getElementById("pre8a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre8a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre8a"), 1);
  });



var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;

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
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;
  tpre3 = pre3a;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
function pregunta4() {
  var pre4a = document.getElementById("pre4a").value;
  tpre4 = pre4a;
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Random5

  var random5 =[
    ['<span><span class="enc5" id="1">El compromiso de las instituciones educativas con la preservación del ambiente genera mayor conciencia social.</span>'],
    ['<span><span class="enc5" id="2">El problema ambiental nos incumbe a todos los seres humanos.</span>'],
    ['<span><span class="enc5" id="3">La recolección de botellas es la mejor iniciativa para cuidar al ambiente de la contaminación.</span>']
  ];
  
  var rancinco = document.getElementsByClassName("imagen5");
  random5.sort(f_randomico);
  for (i = 0; i < rancinco.length; i++) {
    $("#" + rancinco[i].id).html(
      '<span width="50px">' + random5[i][0] + "</span> "
    );
  }
  // #endregion

// #region Pregunta5
$(".enc5").click(function() {
    if ($(this).hasClass("subrayar")) {
      $(this).removeClass("subrayar");
    } else {
      $(this).addClass("subrayar");
    }
  });
  
  function pregunta5() {
    var respr1 = 0,
      respr2 = 0;
    for (var i = 1; i <= 3; i++) {
      var caja = $("span[id=" + [i] + "]").text();
      if ($("#" + [i] + "").hasClass("subrayar")) {
        if (caja == "El compromiso de las instituciones educativas con la preservación del ambiente genera mayor conciencia social.") {
          respr1 = respr1 + 1;
  
          $("#" + [i] + "").addClass("correcto");
        } else {
          respr2 = respr2 + 1;
          $("#" + [i] + "").addClass("incorrecto");
        }
      }
    }
  
    var total = ((respr1 - respr2) * 1) / 1;
    if (total < 0) {
      total = 0;
      tpre5 = total;
    } else {
      tpre5 = total;
    }
  
    tpre5 = total.toFixed(2);
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

// #region Pregunta7
function pregunta7() {
  var pre7a = document.getElementById("pre7a").value;
  tpre7 = pre7a;
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Pregunta8
function pregunta8() {
  var pre8a = document.getElementById("pre8a").value;
  tpre8 = pre8a;
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
      alert("Pregunta 2: Califiqué la pregunta");
    } else {
      var pre3a = document.getElementById("pre3a").value;
      if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
      } else {
        var pre4a = document.getElementById("pre4a").value;
        if (pre4a == "") {
          alert("Pregunta 4: Califiqué la pregunta");
        } else {
          if (
            $("#1").hasClass("subrayar") != true &&
            $("#2").hasClass("subrayar") != true &&
            $("#3").hasClass("subrayar") != true
          ) {
            alert("Pregunta 5: Subraye al menos una respuesta");
          } else {
            var pre6a = document.getElementById("pre6a").value;
            if (pre6a == "") {
              alert("Pregunta 6: Califiqué la pregunta");
            } else {
              var pre7a = document.getElementById("pre7a").value;
              if (pre7a == "") {
                alert("Pregunta 7: Califiqué la pregunta");
              } else {
                var pre8a = document.getElementById("pre8a").value;
                if (pre8a == "") {
                  alert("Pregunta 8: Califiqué la pregunta");
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
          }
        }
      }
    }
  }
}
