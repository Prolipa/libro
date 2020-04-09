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
  ['<span class="enc1" id="2">21</span>'],
  ['<span class="enc1" id="3">10</span>'],
  ['<span class="enc1" id="1">26</span>'],
  ['<span class="enc1" id="5">28</span>'],
  ['<span class="enc1" id="4">7</span>']
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
  for (var i = 1; i <= 5; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "28") {
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

// #region Random2
var random2 = [
  ['<span class="enc2" id="6">21</span>'],
  ['<span class="enc2" id="7">10</span>'],
  ['<span class="enc2" id="10">26</span>'],
  ['<span class="enc2" id="8">28</span>'],
  ['<span class="enc2" id="9">7</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta2
$(".enc2").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta2() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 6; i <= 10; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "7") {
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
    tpre2 = total;
  } else {
    tpre2 = total;
  }

  tpre2 = total.toFixed(2);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
  ['<span class="enc3" id="11">Tiempo evocado</span>'],
  ['<span class="enc3" id="9">Tiempo creciente</span>'],
  ['<span class="enc3" id="12">Tiempo interior</span>'],
  ['<span class="enc3" id="10">Tiempo cronológico</span>']
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
$(".enc3").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta3() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 11; i <= 22; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "Estaba el señor don Gato" ||
      caja == "en silla de oro sentado," ||
      caja == "cuando vino la noticia" ||
      caja == "que tiene que ser casado" ||
      caja == "con una gatita blanca," ||
      caja == "hija del gatito pardo." ||
      caja == "Y se puso tan contento" ||
      caja == "que se cayó desmayado." ||
      caja == "Llamaron a siete médicos" ||
      caja == "y otros siete cirujanos;" ||
      caja == "dijeron que estaba muerto" ||
      caja == "y por muerto lo dejaron." ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 / respr1) * 2.5) / 1;
  if (total < 0) {
    total = 0;
    tpre3 = total;
  } else {
    tpre3 = total;
  }

  tpre3 = total.toFixed(2);
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
  if (
    $("#1").hasClass("subrayar") != true &&
    $("#2").hasClass("subrayar") != true &&
    $("#3").hasClass("subrayar") != true &&
    $("#4").hasClass("subrayar") != true &&
    $("#5").hasClass("subrayar") != true
  ) {
    alert("Pregunta 1: Subraye al menos una respuesta");
  } else {
    if (
      $("#6").hasClass("subrayar") != true &&
      $("#7").hasClass("subrayar") != true &&
      $("#8").hasClass("subrayar") != true &&
      $("#9").hasClass("subrayar") != true &&
      $("#10").hasClass("subrayar") != true
    ) {
      alert("Pregunta 2: Subraye al menos una respuesta");
    } else {
      var pre4a = document.getElementById("pre4a").value;
      if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
      } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        var Nf =
          parseFloat(tpre1) +
          parseFloat(tpre2) +
          parseFloat(tpre3) +
          parseFloat(tpre4);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal + "/10");
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}

// #endregion
