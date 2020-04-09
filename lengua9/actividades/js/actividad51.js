var titulos = "aplico";
numero_pagina(73);

var tpre1 = 0;
var tpre2 = 0;

// #region Random1
var random1 = [
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#9E75D5"><tr><td WIDTH="60%"><span class="enc1" id="7">Las vacaciones</span> <span class="enc1" id="8">que teníamos cuando éramos niños</span> <span class="enc1" id="9">son inolvidables</span>.</td><td WIDTH="20%"><select class="form-control" id="cbounoc"><option value="1">Seleccione</option><option value="2">Especificativa</option><option value="3">Explicativa</option></select></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#9E75D5"><tr><td WIDTH="60%"><span class="enc1" id="4">El sonido de las campanas</span> <span class="enc1" id="5">que tocan al amanecer</span> <span class="enc1" id="6">alegra la vida</span>.</td><td WIDTH="20%"><select class="form-control" id="cbounob"><option value="1">Seleccione</option><option value="2">Especificativa</option><option value="3">Explicativa</option></select></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#9E75D5"><tr><td WIDTH="60%"><span class="enc1" id="13">Los proyectos</span> <span class="enc1" id="14">que hicimos para la clase de Arte</span> <span class="enc1" id="15">resultaron magníficos</span>.</td><td WIDTH="20%"><select class="form-control" id="cbounoe"><option value="1">Seleccione</option><option value="2">Especificativa</option><option value="3">Explicativa</option></select></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#9E75D5"><tr><td WIDTH="60%"><span class="enc1" id="10">Los árboles</span>, <span class="enc1" id="11">seres que purifican el aire</span>,<span class="enc1" id="12">merecen protección</span>.</td><td WIDTH="20%"><select class="form-control" id="cbounod"><option value="1">Seleccione</option><option value="2">Especificativa</option><option value="3">Explicativa</option></select></td></tr></table>'
  ],
  [
    '<table class="table" style="text-align: center" border="1" bordercolor="#9E75D5"><tr><td WIDTH="60%"><span class="enc1" id="1">El pantalón</span>, <span class="enc1" id="2">que era de color café</span>, <span class="enc1" id="3">estaba muy deteriorado</span>.</td><td WIDTH="20%"><select class="form-control" id="cbounoa"><option value="1">Seleccione</option><option value="2">Especificativa</option><option value="3">Explicativa</option></select></td></tr></table>'
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
$(".enc1").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta1() {
  var cor = 0;
  var inc = 0;

  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  var cbounod = document.getElementById("cbounod").value;
  var cbounoe = document.getElementById("cbounoe").value;

  if (cbounoa == "3") {
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
  if (cbounoc == "2") {
    cor = cor + 1;
    $("#cbounoc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoc").removeClass("correcto");
    $("#cbounoc").addClass("incorrecto");
  }
  if (cbounod == "3") {
    cor = cor + 1;
    $("#cbounod").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounod").removeClass("correcto");
    $("#cbounod").addClass("incorrecto");
  }
  if (cbounoe == "2") {
    cor = cor + 1;
    $("#cbounoe").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoe").removeClass("correcto");
    $("#cbounoe").addClass("incorrecto");
  }

  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 15; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "que era de color café" ||
        caja == "que tocan al amanecer" ||
        caja == "que teníamos cuando éramos niños" ||
        caja == "seres que purifican el aire" ||
        caja == "que hicimos para la clase de Arte"
      ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }
  var totalsu = ((respr1 - respr2) * 1) / 1;
  if (totalsu < 0) {
    totalsu = 0;
  } else {
    totalsu = totalsu.toFixed(2);
  }
  var totalse = cor;
  var total = parseFloat(totalse) + parseFloat(totalsu);
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }
  tpre1 = tpre1 / 2;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
$(".enc").click(function() {
  if ($(this).hasClass("vacio")) {
    $(this).removeClass("vacio");
    $(this).addClass("subrayar");
  } else if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
    $(this).addClass("subrayar1");
  } else {
    $(this).removeClass("subrayar1");
    $(this).addClass("vacio");
  }
});

function pregunta2() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 16; i <= 36; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "que había sido adquirido recientemente" ||
        caja == "que era muy joven" ||
        caja == "que demostraba un absoluto descuido" ||
        caja == "que no salían de su asombro"
      ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  for (var i = 16; i <= 36; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar1")) {
      if (
        caja == "que estaba mojada" ||
        caja == "que la lluvia había generado" ||
        caja == "que vieron"
      ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  var total = ((respr1 - respr2) * 5) / 7;
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

function NotaFinal() {
  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  var cbounod = document.getElementById("cbounod").value;
  var cbounoe = document.getElementById("cbounoe").value;
  if (
    cbounoa === "1" &&
    cbounob === "1" &&
    cbounoc === "1" &&
    cbounod === "1" &&
    cbounoe === "1"
  ) {
    alert("Pregunta 1: Seleccione todas las opcines posibles");
  } else {
    if (
      $("#1").hasClass("subrayar") != true &&
      $("#2").hasClass("subrayar") != true &&
      $("#3").hasClass("subrayar") != true &&
      $("#4").hasClass("subrayar") != true &&
      $("#5").hasClass("subrayar") != true &&
      $("#6").hasClass("subrayar") != true &&
      $("#7").hasClass("subrayar") != true &&
      $("#8").hasClass("subrayar") != true &&
      $("#9").hasClass("subrayar") != true &&
      $("#10").hasClass("subrayar") != true &&
      $("#11").hasClass("subrayar") != true &&
      $("#12").hasClass("subrayar") != true &&
      $("#12").hasClass("subrayar") != true &&
      $("#14").hasClass("subrayar") != true &&
      $("#15").hasClass("subrayar") != true &&
      $("#16").hasClass("subrayar") != true
    ) {
      alert("Pregunta 1: Subraye al menos una respuesta");
    } else {
      if (
        $("#17").hasClass("subrayar") != true &&
        $("#18").hasClass("subrayar") != true &&
        $("#19").hasClass("subrayar") != true &&
        $("#20").hasClass("subrayar") != true &&
        $("#21").hasClass("subrayar") != true &&
        $("#22").hasClass("subrayar") != true &&
        $("#23").hasClass("subrayar") != true &&
        $("#24").hasClass("subrayar") != true &&
        $("#25").hasClass("subrayar") != true &&
        $("#26").hasClass("subrayar") != true &&
        $("#27").hasClass("subrayar") != true &&
        $("#28").hasClass("subrayar") != true &&
        $("#29").hasClass("subrayar") != true &&
        $("#30").hasClass("subrayar") != true &&
        $("#31").hasClass("subrayar") != true &&
        $("#32").hasClass("subrayar") != true &&
        $("#33").hasClass("subrayar") != true &&
        $("#34").hasClass("subrayar") != true &&
        $("#45").hasClass("subrayar") != true &&
        $("#36").hasClass("subrayar") != true
      ) {
        alert("Pregunta 2: Subraye al menos una respuesta");
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
}
