var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("99");

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 2.5);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 2.5);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 2.5);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

// #region Random1
var random1 = [
    ['<h4><span class="enc1" id="3">Un vendedor quiere explicar los beneficios de un nuevo producto.</span></h4><br>'],
    ['<h4><span class="enc1" id="2">Hay mucha radiación solar durante el recreo y nadie usa bloqueador solar.</span></h4><br>'],
    ['<h4><span class="enc1" id="1">Tu curso desea organizar una fiesta de cumpleaños para la profesora.</h4><br>']
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
    var respr1 = 0,
      respr2 = 0;
    for (var i = 1; i <= 3; i++) {
      var caja = $("span[id=" + [i] + "]").text();
      if ($("#" + [i] + "").hasClass("subrayar")) {
        if (caja == "Hay mucha radiación solar durante el recreo y nadie usa bloqueador solar.") {
          respr1 = respr1 + 1;
          $("#" + [i] + "").removeClass("subrayar");
          $("#" + [i] + "").addClass("correcto");
        } else {
          respr2 = respr2 + 1;
          $("#" + [i] + "").removeClass("subrayar");
          $("#" + [i] + "").addClass("incorrecto");
        }
      } else {
      }
    }
  
    var total = ((respr1 - respr2) * 2.5) / 1;
    if (total < 0) {
      total = 0;
      tpre1 = total;
    } else {
      tpre1 = total;
    }
  
    tpre1 = total.toFixed(2);
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
      var pre4a = document.getElementById("pre4a").value;
      if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
      } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3)+parseFloat(tpre4);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}

// #endregion
