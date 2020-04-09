var titulos = "reflexiono";

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 2);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

// #region Random1
var random1 = [
  [
    '<table><tr><td>¿Cuál era la nacionalidad de Naismith?</td></tr><tr><td><br><select class="form-control"  id="cbounoa"><option value="1">Seleccione</option><option value="2">Canadiense</option><option value="3">Estadounidense</option><option value="4">Británico</option></select></td></tr></table>'
  ],
  [
    '<table><tr><td>¿A partir de qué ideó Naismith una actividad distinta para los estudiantes?</td></tr><tr><td><br><select class="form-control" id="cbounoc"><option value="1">Seleccione</option><option value="2">A partir de un programa de su infancia</option><option value="3">A partir de un juego de su infancia</option><option value="4">A partir de un pensamiento de su infancia</option></select></td></tr></table>'
  ],
  [
    '<table><tr><td>¿Qué situación climatológica influyó para el origen del básquetbol?</td></tr><tr><td><br><select class="form-control" id="cbounob"><option value="1">Seleccione</option><option value="2">Invierno</option><option value="3">Otoño</option><option value="4">Primavera</option><option value="5">Verano</option></select></td></tr></table>'
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

  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;

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
  if (cbounoc == "3") {
    cor = cor + 1;
    $("#cbounoc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoc").removeClass("correcto");
    $("#cbounoc").addClass("incorrecto");
  }

  var total = (cor * 4) / 3;
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }
  $("#pre1a").val(parseFloat(total).toFixed(2));
}
// #endregion

// #region Random2a
var Random2a = [
  ["1", "universitario"],
  ["2", "militar"],
  ["3", "parroquial"],
  ["4", "deportivo"]
];

var randosa = document.getElementsByClassName("imagen2a");

Random2a.sort(f_randomico);
for (i = 0; i < randosa.length; i++) {
  $("#" + randosa[i].id).html(
    '<span class="" id="' + Random2a[i][1] + '">' + Random2a[i][1] + "</span>"
  );
}

// #endregion

// #region Random2b
var Random2b = [
  ["1", "policía"],
  ["2", "inspector"],
  ["3", "cuidador"],
  ["4", "profesor"]
];

var randosb = document.getElementsByClassName("imagen2b");

Random2b.sort(f_randomico);
for (i = 0; i < randosb.length; i++) {
  $("#" + randosb[i].id).html(
    '<span class="" id="' + Random2b[i][1] + '">' + Random2b[i][1] + "</span>"
  );
}

// #endregion

// #region Pregunta2
$(".enc2a").click(function() {
  if ($(this).hasClass("seleccionCaja")) {
    $(this).removeClass("seleccionCaja");
  } else {
    $(this).addClass("seleccionCaja");
  }
});

$(".enc2b").click(function() {
  if ($(this).hasClass("seleccionCaja")) {
    $(this).removeClass("seleccionCaja");
  } else {
    $(this).addClass("seleccionCaja");
  }
});

function pregunta2() {
  var respra1 = 0;
  var respra2 = 0;
  var respra3 = 0;
  var respra4 = 0;

  var resprb1 = 0;
  var resprb2 = 0;
  var resprb3 = 0;
  var resprb4 = 0;

  var caja1 = $("div[id=randosa1]").find("span")[0].id;
  if ($("#randosa1").hasClass("seleccionCaja")) {
    if (caja1 == "militar") {
      respra1 = 1;
      $("#randosa1").addClass("correctoi");
    } else {
      respra1 = -1;
      $("#randosa1").addClass("incorrectoi");
    }
  } else {
    respra1 = 0;
  }

  var caja2 = $("div[id=randosa2]").find("span")[0].id;
  if ($("#randosa2").hasClass("seleccionCaja")) {
    if (caja2 == "militar") {
      respra2 = 1;
      $("#randosa2").addClass("correctoi");
    } else {
      respra2 = -1;
      $("#randosa2").addClass("incorrectoi");
    }
  } else {
    respra2 = 0;
  }
  var caja3 = $("div[id=randosa3]").find("span")[0].id;
  if ($("#randosa3").hasClass("seleccionCaja")) {
    if (caja3 == "militar") {
      respra3 = 1;
      $("#randosa3").addClass("correctoi");
    } else {
      respra3 = -1;
      $("#randosa3").addClass("incorrectoi");
    }
  } else {
    respra3 = 0;
  }
  var caja4 = $("div[id=randosa4]").find("span")[0].id;
  if ($("#randosa4").hasClass("seleccionCaja")) {
    if (caja4 == "militar") {
      respra4 = 1;
      $("#randosa4").addClass("correctoi");
    } else {
      respra4 = -1;
      $("#randosa4").addClass("incorrectoi");
    }
  } else {
    respra4 = 0;
  }

  var cajb1 = $("div[id=randosb1]").find("span")[0].id;
  if ($("#randosb1").hasClass("seleccionCaja")) {
    if (cajb1 == "cuidador") {
      resprb1 = 1;
      $("#randosb1").addClass("correctoi");
    } else {
      resprb1 = -1;
      $("#randosb1").addClass("incorrectoi");
    }
  } else {
    resprb1 = 0;
  }

  var cajb2 = $("div[id=randosb2]").find("span")[0].id;
  if ($("#randosb2").hasClass("seleccionCaja")) {
    if (cajb2 == "cuidador") {
      resprb2 = 1;
      $("#randosb2").addClass("correctoi");
    } else {
      resprb2 = -1;
      $("#randosb2").addClass("incorrectoi");
    }
  } else {
    resprb2 = 0;
  }
  var cajb3 = $("div[id=randosb3]").find("span")[0].id;
  if ($("#randosb3").hasClass("seleccionCaja")) {
    if (cajb3 == "cuidador") {
      resprb3 = 1;
      $("#randosb3").addClass("correctoi");
    } else {
      resprb3 = -1;
      $("#randosb3").addClass("incorrectoi");
    }
  } else {
    resprb3 = 0;
  }
  var cajb4 = $("div[id=randosb4]").find("span")[0].id;
  if ($("#randosb4").hasClass("seleccionCaja")) {
    if (cajb4 == "cuidador") {
      resprb4 = 1;
      $("#randosb4").addClass("correctoi");
    } else {
      resprb4 = -1;
      $("#randosb4").addClass("incorrectoi");
    }
  } else {
    resprb4 = 0;
  }

  var sumaa =  parseInt(respra1) + parseInt(respra2) + parseInt(respra3) + parseInt(respra4);
  var sumab =  parseInt(resprb1) + parseInt(resprb2) + parseInt(resprb3) + parseInt(resprb4);
  
  if(sumaa<0)
  {
    sumaa=0;
  }
  else
  {
    var totala=sumaa;
  }

  if(sumab<0)
  {
    sumab=0;
  }
  else
  {
    var totalb=sumab;
  }
  var totalR = ((sumaa+sumab)*4)/ 2;
    tpre2=totalR;
  
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
  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  if (cbounoa == "1" || cbounob == "1" || cbounoc == "1") {
    alert("Lectura Literal: Seleccione todas las respuestas posibles");
  } else {
    if (
      $("#randosa1").hasClass("seleccionCaja") != true &&
      $("#randosa2").hasClass("seleccionCaja") != true &&
      $("#randosa3").hasClass("seleccionCaja") != true &&
      $("#randosa4").hasClass("seleccionCaja") != true
    ) {
      alert("Lectura inferencial (a): Seleccione la palabra");
    } else {
      if (
        $("#randosb1").hasClass("seleccionCaja") != true &&
        $("#randosb2").hasClass("seleccionCaja") != true &&
        $("#randosb3").hasClass("seleccionCaja") != true &&
        $("#randosb4").hasClass("seleccionCaja") != true
      ) {
        alert("Lectura inferencial (b): Seleccione la palabra");
      } else {
        var pre3a = document.getElementById("pre3a").value;
        if (pre3a == "") {
          alert("Lectura crítico-valorativa: Califiqué la pregunta");
        } else {
          pregunta1();
          pregunta2();
          pregunta3()
          var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
          var Vtotal = Nf.toFixed(2);
          $("#txtNota").html(Vtotal+"/10");
          document.getElementById("bt_comprobar").disabled = true;
        }
      }
    }
  }
}

// #endregion
