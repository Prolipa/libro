var titulos = "evaluacion";
numero_pagina(136);


var tpre1a = 0;
var tpre1b = 0;
var tpre1c = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;
var tpre11 = 0;

// #region Random1
var random1 = [
  [
    '<div class="col-lg-4"><img class="img-responsive" src="img/i3_p136_act1.jpg"><select id="cbounoc" class="form-control"><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">decreciente</option><option value="4">constante</option></select></div>'
  ],
  [
    '<div class="col-lg-4"><img class="img-responsive" src="img/i1_p136_act1.jpg"><select id="cbounoa" class="form-control"><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">decreciente</option><option value="4">constante</option></select></div>'
  ],
  [
    '<div class="col-lg-4"><img class="img-responsive" src="img/i2_p136_act1.jpg"><select id="cbounob" class="form-control"><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">decreciente</option><option value="4">constante</option></select></div>'
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
  if (cbounob == "3") {
    cor = cor + 1;
    $("#cbounob").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounob").removeClass("correcto");
    $("#cbounob").addClass("incorrecto");
  }
  if (cbounoc == "4") {
    cor = cor + 1;
    $("#cbounoc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbounoc").removeClass("correcto");
    $("#cbounoc").addClass("incorrecto");
  }

  var total = (cor * 1) / 3;
  if (total < 0) {
    total = 0;
    tpre1 = total.toFixed(2);
  } else {
    tpre1 = total.toFixed(2);
  }
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  ['<span class="enc2" id="2">(0, −4)</span>'],
  ['<span class="enc2" id="1">(1, −1)</span>'],
  ['<span class="enc2" id="3">(2, 10)</span>'],
  ['<span class="enc2" id="4">(3, −5)</span>']
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
  for (var i = 1; i <= 4; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "(3, −5)") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 1;
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
  ['<span class="enc3" id="5">Son paralelas.</span>'],
  ['<span class="enc3" id="7">Son perpendiculares.</span>'],
  ['<span class="enc3" id="6">Son secantes.</span>']
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
  for (var i = 5; i <= 7; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "Son perpendiculares.") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 1;
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

// #region Random4
var random4 = [
  ['<span class="enc4" id="8">y=3x-2/7</span>'],
  ['<span class="enc4" id="10">y=2/7x-3</span>'],
  ['<span class="enc4" id="9">y=-2/7x+3</span>'],
  ['<span class="enc4" id="11">y=-2/7-3</span>']
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
  $("#" + rancuatro[i].id).html(
    '<span width="50px">' + random4[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta4
$(".enc4").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta4() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 8; i <= 11; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "y=-2/7x+3") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 0.5) / 1;
  if (total < 0) {
    total = 0;
    tpre4 = total;
  } else {
    tpre4 = total;
  }

  tpre4 = total.toFixed(2);
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Random5
var random5 = [
  ['<span class="enc5" id="12">4x − 3y − 9 = 0</span>'],
  ['<span class="enc5" id="14">3x − 4y − 9 = 0</span>'],
  ['<span class="enc5" id="13">y = - 3/4x + 9/4</span>'],
  ['<span class="enc5" id="15">y=-3/4 - 9</span>']
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
  for (var i = 12; i <= 15; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "3x − 4y − 9 = 0") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
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

// #region Random6
var random6 = [
  ['<span class="enc6" id="16">m = 1/2</span>'],
  ['<span class="enc6" id="18">m = 2</span>'],
  ['<span class="enc6" id="17">m = -1/2</span>'],
  ['<span class="enc6" id="19">m = -3</span>']
];

var ranseis = document.getElementsByClassName("imagen6");
random6.sort(f_randomico);
for (i = 0; i < ranseis.length; i++) {
  $("#" + ranseis[i].id).html(
    '<span width="50px">' + random6[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta6
$(".enc6").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta6() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 16; i <= 19; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "m = 1/2") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 1;
  if (total < 0) {
    total = 0;
    tpre6 = total;
  } else {
    tpre6 = total;
  }

  tpre6 = total.toFixed(2);
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Random7
var random7 = [
  ['<span class="enc7" id="20">4x − y − 6 = 0</span>'],
  ['<span class="enc7" id="22">4x − y + 6 = 0</span>'],
  ['<span class="enc7" id="21">y = −4x + 6</span>'],
  ['<span class="enc7" id="23">y = 6x − 4</span>']
];

var ransiete = document.getElementsByClassName("imagen7");
random7.sort(f_randomico);
for (i = 0; i < ransiete.length; i++) {
  $("#" + ransiete[i].id).html(
    '<span width="50px">' + random7[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta7
$(".enc7").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta7() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 20; i <= 23; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "4x − y + 6 = 0") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 1;
  if (total < 0) {
    total = 0;
    tpre7 = total;
  } else {
    tpre7 = total;
  }

  tpre7 = total.toFixed(2);
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Random8
var ejer = 1,
  itemsT = 3,
  cont = 0,
  tmp,
  cor = 0,
  inc = 0,
  calificacion = 1,
  claseAnimada = "animate bounceIn";
var resp = [],
  i;

var pal1 = [
  '<span class="bg_palabra c3">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i1_p136_act8.jpg">&nbsp;</span>',
  '<span class="bg_palabra c1">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i2_p136_act8.jpg">&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i3_p136_act8.jpg">&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">Seno</div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">Coseno</div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">Tangente</div></td></tr>'
];
pal1.sort(f_randomico);
txt1.sort(f_randomico);
$(".textos").append(pal1);
$(".contenidos").append(txt1);
$(".bg_palabra").css("cursor", "move");
$(".bg_palabra").draggable({
  //arrastramos
  revert: "invalid",
  zIndex: 5,
  containment: ".actividad1",
  scroll: false
});
$(".imagen").droppable({
  drop: function(e, ui) {
    //v_idsp5.push(ui.draggable.attr("id").substr(3));//obtenemos el id del arrastre
    //r_idsp5.push($(this).attr("id").substr(4)); //obtenemos el id del destino
    for (i = 1; i < 4; i++) {
      //4 elementos
      var nn = "c" + i; //obtenemos la clase
      if ($(ui.draggable).hasClass(nn)) {
        //comparamos la clase del arrastre
        if ($(this).hasClass(nn)) {
          //con la clase del destino q tienen en mismo nombre
          resp.push("ok");
        } else {
          resp.push("no");
        }
      }
    }
    $(ui.draggable).removeClass("bg_palabra"); //quitamos clase de background
    //console.log(resp); //respuestas
    ui.draggable.attr("style", "");
    $(this).append(ui.draggable);
  }
});
// #endregion

// #region Pregunta8
function pregunta8() {
  cont++;
  $(this).unbind("click");
  AgregaClase(".nota", claseAnimada);
  QuitaClase(".actividad", claseAnimada);
  temp = $(".imagen");
  for (i = 0; i < resp.length; i++) {
    if (resp.length == 3 && resp[i] == "ok") {
      cor++;
      f_ok(temp);
    } else {
      inc++;
      f_no(temp);
    }
  }
  //var calc = (calificacion / itemsT);
  var total = ((cor / itemsT) * 0.5).toFixed(2);
  f_tiempo();
  tpre8 = total;
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Random9
var random9 = [
  ['<span class="enc9" id="24">60°</span>'],
  ['<span class="enc9" id="26">45°</span>'],
  ['<span class="enc9" id="25">90°</span>'],
  ['<span class="enc9" id="27">30°</span>']
];

var rannueve = document.getElementsByClassName("imagen9");
random9.sort(f_randomico);
for (i = 0; i < rannueve.length; i++) {
  $("#" + rannueve[i].id).html(
    '<span width="50px">' + random9[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta9
$(".enc9").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta9() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 24; i <= 27; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "30°") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 1;
  if (total < 0) {
    total = 0;
    tpre9 = total;
  } else {
    tpre9 = total;
  }

  tpre9 = total.toFixed(2);
  $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Random10
var random10 = [
  ['<span class="enc10" id="28">A = 36,9°; x = 15 m</span>'],
  ['<span class="enc10" id="30">A = 36,9°; x = 20 m</span>'],
  ['<span class="enc10" id="29">A = 53,1°; x = 20 m</span>'],
  ['<span class="enc10" id="31">A = 30°; x = 15 m</span>']
];

var randiez = document.getElementsByClassName("imagen10");
random10.sort(f_randomico);
for (i = 0; i < randiez.length; i++) {
  $("#" + randiez[i].id).html(
    '<span width="50px">' + random10[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta10
$(".enc10").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta10() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 28; i <= 31; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "A = 36,9°; x = 20 m") {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 1;
  if (total < 0) {
    total = 0;
    tpre10 = total;
  } else {
    tpre10 = total;
  }

  tpre10 = total.toFixed(2);
  $("#pre10a").val(parseFloat(tpre10).toFixed(2));
}
// #endregion

// #region Pregunta11
function pregunta11() {
  var respuestas = document.getElementsByClassName("respuestas11");
  var soluciones = document.getElementsByClassName("solucion11");
  var valor = valor_pregunta(respuestas);
  var nota = 0;
  for (var i = 0; i < respuestas.length; i++) {
    if (
      verificar_contenido(
        respuestas[i].value.toLowerCase(),
        soluciones[i].value.toLowerCase().split("*")
      )
    ) {
      respuestas[i].classList.add("valid");
      respuestas[i].classList.remove("no-valid");
      nota += valor;
    } else {
      respuestas[i].classList.add("no-valid");
      respuestas[i].classList.remove("valid");
    }
  }
  tpre11 = nota / 10;
  $("#pre11a").val(parseFloat(tpre11).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var cbounoa = document.getElementById("cbounoa").value;
  var cbounob = document.getElementById("cbounob").value;
  var cbounoc = document.getElementById("cbounoc").value;
  if (cbounoa == "1" || cbounob == "1" || cbounoc == "1") {
    alert("Pregunta 1: Seleccione todas las las respuestas posibles.");
  } else {
    if (
      $("#1").hasClass("subrayar") != true &&
      $("#2").hasClass("subrayar") != true &&
      $("#3").hasClass("subrayar") != true &&
      $("#4").hasClass("subrayar") != true
    ) {
      alert("Pregunta 2: Subraye al menos una respuesta");
    } else {
      if (
        $("#5").hasClass("subrayar") != true &&
        $("#6").hasClass("subrayar") != true &&
        $("#7").hasClass("subrayar") != true
      ) {
        alert("Pregunta 3: Subraye al menos una respuesta");
      } else {
        if (
          $("#8").hasClass("subrayar") != true &&
          $("#9").hasClass("subrayar") != true &&
          $("#10").hasClass("subrayar") != true &&
          $("#11").hasClass("subrayar") != true
        ) {
          alert("Pregunta 4: Subraye al menos una respuesta");
        } else {
          if (
            $("#12").hasClass("subrayar") != true &&
            $("#13").hasClass("subrayar") != true &&
            $("#14").hasClass("subrayar") != true &&
            $("#15").hasClass("subrayar") != true
          ) {
            alert("Pregunta 5: Subraye al menos una respuesta");
          } else {
            if (
              $("#16").hasClass("subrayar") != true &&
              $("#17").hasClass("subrayar") != true &&
              $("#18").hasClass("subrayar") != true &&
              $("#19").hasClass("subrayar") != true
            ) {
              alert("Pregunta 6: Subraye al menos una respuesta");
            } else {
              if (
                $("#20").hasClass("subrayar") != true &&
                $("#21").hasClass("subrayar") != true &&
                $("#22").hasClass("subrayar") != true &&
                $("#23").hasClass("subrayar") != true
              ) {
                alert("Pregunta 7: Subraye al menos una respuesta");
              } else {
                if (
                  $("#24").hasClass("subrayar") != true &&
                  $("#25").hasClass("subrayar") != true &&
                  $("#26").hasClass("subrayar") != true &&
                  $("#27").hasClass("subrayar") != true
                ) {
                  alert("Pregunta 9: Subraye al menos una respuesta");
                } else {
                  if (
                    $("#28").hasClass("subrayar") != true &&
                    $("#29").hasClass("subrayar") != true &&
                    $("#30").hasClass("subrayar") != true &&
                    $("#31").hasClass("subrayar") != true
                  ) {
                    alert("Pregunta 10: Subraye al menos una respuesta");
                  } else {
                    pregunta1();
                    pregunta2();
                    pregunta3();
                    pregunta4();
                    pregunta5();
                    pregunta6();
                    pregunta7();
                    pregunta8();
                    pregunta9();
                    pregunta10();
                    pregunta11();
                    var Nf =
                      parseFloat(tpre1) +
                      parseFloat(tpre2) +
                      parseFloat(tpre3) +
                      parseFloat(tpre4) +
                      parseFloat(tpre5) +
                      parseFloat(tpre6) +
                      parseFloat(tpre7) +
                      parseFloat(tpre8) +
                      parseFloat(tpre9) +
                      parseFloat(tpre10) +
                      parseFloat(tpre11);
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
}
// #endregion
