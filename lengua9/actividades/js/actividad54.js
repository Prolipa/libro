var titulos = "aplico";
numero_pagina(75);

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 2);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Random1
var random1 = [
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#1AAADF"><tr><td WIDTH="50%"><div class="text-question"><span>Apreciamos <span class="subrayar4">a Sonia</span> por su generosidad.</span></div></td><td WIDTH="50%"><span> <div class="text-question"><span><input type="text" style="width:50px" id="cj1e"> apreciamos por su generosidad.</span></div></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#1AAADF"><tr><td WIDTH="50%"><div class="text-question"><span>¿Guardaste <span class="subrayar">alguna cosa</span> en la refrigeradora?</span></div></td><td WIDTH="50%"><span> <div class="text-question"><span>¿Guardaste <input type="text" style="width:50px" id="cj1f"> en la refrigeradora?</span></div></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#1AAADF"><tr><td WIDTH="50%"><div class="text-question"><span><span class="subrayar">Su vehículo</span> es muy rápido.</span></div></td><td WIDTH="50%"><span> <div class="text-question"><span>El <input type="text" style="width:50px" id="cj1d"> es muy rápido.</span></div></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#1AAADF"><tr><td WIDTH="50%"><div class="text-question"><span>Compraron varios regalos <span class="subrayar2">a sus padres</span>.</span></div></td><td WIDTH="50%"><span> <div class="text-question"><span><input type="text" style="width:50px" id="cj1b"> compraron varios regalos.</span></div></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#1AAADF"><tr><td WIDTH="50%"><div class="text-question"><span>¿Por qué <span class="subrayar2">motivo</span> no has estudiado?</span></div></td><td WIDTH="50%"><span> <div class="text-question"><span>¿ <input type="text" style="width:100px" id="cj1g"> no has estudiado? </span></div></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#1AAADF"><tr><td WIDTH="50%"><div class="text-question"><span>Ya terminaron de pintar <span class="subrayar3">las paredes</span> del aula.</span></div></td><td WIDTH="50%"><span> <div class="text-question"><span>Ya terminaron de pintar <input type="text" style="width:50px" id="cj1c"></span></div></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#1AAADF"><tr><td WIDTH="50%"><div class="text-question"><span><span class="subrayar1">Diego y Jaime</span> son muy buenos amigos.</span></div></td><td WIDTH="50%"><span> <div class="text-question"><span><input type="text" style="width:50px" id="cj1a"> son muy buenos amigos.</span></div></td></tr></table>'
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
function pregunta1() {
  var cor = 0;
  var inc = 0;

  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj1d = document.getElementById("cj1d").value;
  var cj1e = document.getElementById("cj1e").value;
  var cj1f = document.getElementById("cj1f").value;
  var cj1g = document.getElementById("cj1g").value;

  if (cj1a == "Ellos") {
    cor = cor + 1;
    $("#cj1a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1a").addClass("incorrecto");
  }
  if (cj1b == "Les") {
    cor = cor + 1;
    $("#cj1b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1b").addClass("incorrecto");
  }
  if (cj1c == "las") {
    cor = cor + 1;
    $("#cj1c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1c").addClass("incorrecto");
  }
  if (cj1d == "suyo") {
    cor = cor + 1;
    $("#cj1d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1d").addClass("incorrecto");
  }
  if (cj1e == "La") {
    cor = cor + 1;
    $("#cj1e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1e").addClass("incorrecto");
  }
  if (cj1f == "algo") {
    cor = cor + 1;
    $("#cj1f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1f").addClass("incorrecto");
  }
  if (cj1g == "Por qué" || cj1g == "Por  qué" || cj1g == "Por   qué") {
    cor = cor + 1;
    $("#cj1g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1g").addClass("incorrecto");
  }
  var total = (cor * 4) / 7;
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
$(".enc2").click(function() {
  if ($(this).hasClass("subrayar0")) {
    $(this).removeClass("subrayar0");
  } else {
    $(this).addClass("subrayar0");
  }
});

function pregunta2() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 53; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar0")) {
      if (
        caja == "Ella" ||
        caja == "lo" ||
        caja == "las cuales" ||
        caja == "le" ||
        caja == "eso"
      ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  var total = ((respr1 - respr2) * 4) / 6;
  if (total < 0) {
    total = 0;
    tpre2 = total;
  } else {
    tpre2 = total;
  }

  tpre2 = total.toFixed(2);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;
  tpre3 = pre3a;
  $("#pre3a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

function NotaFinal() {
  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj1d = document.getElementById("cj1d").value;
  var cj1e = document.getElementById("cj1e").value;
  var cj1f = document.getElementById("cj1f").value;
  var cj1g = document.getElementById("cj1g").value;
  if (
    cj1a == "" ||
    cj1b == "" ||
    cj1c == "" ||
    cj1d == "" ||
    cj1e == "" ||
    cj1f == "" ||
    cj1g == ""
  ) {
    alert("Pregunta 1: Debe responder a todas las preguntas.");
  } else {
    if (
      $("#1").hasClass("subrayar0") != true &&
      $("#2").hasClass("subrayar0") != true &&
      $("#3").hasClass("subrayar0") != true &&
      $("#4").hasClass("subrayar0") != true &&
      $("#5").hasClass("subrayar0") != true &&
      $("#6").hasClass("subrayar0") != true &&
      $("#7").hasClass("subrayar0") != true &&
      $("#8").hasClass("subrayar0") != true &&
      $("#9").hasClass("subrayar0") != true &&
      $("#10").hasClass("subrayar0") != true &&
      $("#11").hasClass("subrayar0") != true &&
      $("#12").hasClass("subrayar0") != true &&
      $("#12").hasClass("subrayar0") != true &&
      $("#14").hasClass("subrayar0") != true &&
      $("#15").hasClass("subrayar0") != true &&
      $("#16").hasClass("subrayar0") != true &&
      $("#17").hasClass("subrayar0") != true &&
      $("#18").hasClass("subrayar0") != true &&
      $("#19").hasClass("subrayar0") != true &&
      $("#20").hasClass("subrayar0") != true &&
      $("#21").hasClass("subrayar0") != true &&
      $("#22").hasClass("subrayar0") != true &&
      $("#23").hasClass("subrayar0") != true &&
      $("#24").hasClass("subrayar0") != true &&
      $("#25").hasClass("subrayar0") != true &&
      $("#26").hasClass("subrayar0") != true &&
      $("#27").hasClass("subrayar0") != true &&
      $("#28").hasClass("subrayar0") != true &&
      $("#29").hasClass("subrayar0") != true &&
      $("#30").hasClass("subrayar0") != true &&
      $("#31").hasClass("subrayar0") != true &&
      $("#32").hasClass("subrayar0") != true &&
      $("#33").hasClass("subrayar0") != true &&
      $("#34").hasClass("subrayar0") != true &&
      $("#35").hasClass("subrayar0") != true &&
      $("#36").hasClass("subrayar0") != true &&
      $("#37").hasClass("subrayar0") != true &&
      $("#38").hasClass("subrayar0") != true &&
      $("#39").hasClass("subrayar0") != true &&
      $("#40").hasClass("subrayar0") != true &&
      $("#41").hasClass("subrayar0") != true &&
      $("#42").hasClass("subrayar0") != true &&
      $("#43").hasClass("subrayar0") != true &&
      $("#44").hasClass("subrayar0") != true &&
      $("#45").hasClass("subrayar0") != true &&
      $("#46").hasClass("subrayar0") != true &&
      $("#47").hasClass("subrayar0") != true &&
      $("#48").hasClass("subrayar0") != true &&
      $("#49").hasClass("subrayar0") != true &&
      $("#50").hasClass("subrayar0") != true &&
      $("#51").hasClass("subrayar0") != true &&
      $("#52").hasClass("subrayar0") != true &&
      $("#53").hasClass("subrayar0") != true
    ) {
      alert("Pregunta 2: Subraye al menos una respuesta");
    } else {
      var pre3a = document.getElementById("pre3a").value;
      if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
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
  }
}
