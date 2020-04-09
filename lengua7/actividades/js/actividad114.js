var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("105");

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
  validMaxIngreso(document.getElementById("pre2a"), 3);
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

document.getElementById("pre7a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre7a"), 1);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre = 0;


// #region Random1
var random1 = [
    ['<h5><span class="enc1" id="3">Poético</span></h5><br>'],
    ['<h5><span class="enc1" id="2">De opinión</span></h5><br>'],
    ['<h5><span class="enc1" id="1">Informativo</h5><br>']
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
  $(".enc1").click(function() {
    if ($(this).hasClass("subrayar")) {
      $(this).removeClass("subrayar");
    } else {
      $(this).addClass("subrayar");
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

// #region Pregunta7
function pregunta7() {
  var pre7a = document.getElementById("pre7a").value;
  tpre7 = pre7a;
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
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
      var pre3a = document.getElementById("pre3a").value;
      if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
      } else {
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
              var pre7a = document.getElementById("pre7a").value;
              if (pre7a == "") {
                alert("Pregunta 7: Califiqué la pregunta");
              } else {
                pregunta1();
                pregunta2();
                pregunta3();
                pregunta4();
                pregunta5();
                pregunta6();
                pregunta7();
                var Nf =
                  parseFloat(tpre1) +
                  parseFloat(tpre2) +
                  parseFloat(tpre3) +
                  parseFloat(tpre4) +
                  parseFloat(tpre5) +
                  parseFloat(tpre6) +
                  parseFloat(tpre7);
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

// #endregion
