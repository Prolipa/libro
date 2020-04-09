var titulos = "evaluacion";
numero_pagina(90);

var tpre1 = 0;
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

var loadTxt = [
  '<h3><b><font color="#F79C55">Relato corto de ciencia ficción</font></b></h3><br>Hace días, largas semanas, que vagamos por el espacio sin saber exactamente dónde llegaremos.<br> Aún nos quedan provisiones de sobra para algunas semanas más, pero la tripulación empieza a agobiarse al no encontrar nada similar a un planeta, aparte de un par de meteoritos que pasan cerca de la nave de vez en cuando… y hasta eso ya ha perdido su emoción.<br> Está llegando a ser todo tan aburrido… ya no hay nada que hacer, nada de qué hablar… no sabemos la vida y pormenores de unos y otros. Y desde la cabina de mando no se ve nada de nada.<br> ― Si no encontramos pronto algo de interés voy a volverme loco, comandante.<br> ― ¿Más paciencia? Ya no soy yo solo, señor, el resto de la tripulación lo comenta. Quizá sea una misión fallida, como tantas otras.<br> ― Repito, tengamos paciencia, amigo, tengamos paciencia.<br>'
];

document.getElementById("tar1").innerHTML = loadTxt[0];

enviarEventosListener("tar1");

function validNum() {
  var regex = new RegExp("^[0-9]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
}
function separarTexto(cadena, id) {
  var separador = " ";
  var splitCadena = [];
  splitCadena = cadena.split(separador);
  addTag(splitCadena, id);
}
function addTag(arregloCadena, id) {
  for (j = 0; j < arregloCadena.length; j++) {
    var test = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML =
      test + "<span>" + " " + arregloCadena[j] + "</span>";
  }
}
function underlinetext(id) {
  var txt = "";
  if (window.getSelection) {
    txt = window.getSelection();
  } else if (document.getSelection) {
    txt = document.getSelection();
  } else if (document.selection) {
    txt = document.selection.createRange().text;
  }
  var str = document.getElementById(id).innerHTML;
  var res = str.replace(
    txt.toString(),
    '<span class="underline">' + txt.toString() + "</span>"
  );
  document.getElementById(id).innerHTML = res;
}
function enviarEventosListener(id) {
  document.getElementById(id).addEventListener("mouseup", function() {
    underlinetext(id);
  });
}

document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 0.5);
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
  validMaxIngreso(document.getElementById("pre4a"), 0.75);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1.50);
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
  validMaxIngreso(document.getElementById("pre8a"), 0.75);
});

document.getElementById("pre9a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre9a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre9a"), 0.25);
});

document.getElementById("pre10a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre10a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre10a"), 0.25);
});

document.getElementById("pre11a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre11a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre11a"), 0.50);
});

// #region Pregunta1
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2  1
var randoma2 = [
  ['<span><span class="enc2" id="1">Épico</span>'],
  ['<span><span class="enc2" id="2">Jurídico</span>'],
  ['<span><span class="enc2" id="3">Teatral</span>'],
  ['<span><span class="enc2" id="4">Narrativo</span>']
];

var randosa = document.getElementsByClassName("imagena2");
randoma2.sort(f_randomico);
for (i = 0; i < randosa.length; i++) {
  $("#" + randosa[i].id).html(
    '<span width="50px">' + randoma2[i][0] + "</span> "
  );
}
// #endregion

// #region Random2  2
var randomb2 = [
  ['<span><span class="enc2" id="5">grande o pequeño</span>'],
  ['<span><span class="enc2" id="6">real o irreal</span>'],
  ['<span><span class="enc2" id="7">circular o cuadrado</span>'],
  ['<span><span class="enc2" id="8">interno o externo</span>']
];

var randosb = document.getElementsByClassName("imagenb2");
randomb2.sort(f_randomico);
for (i = 0; i < randosb.length; i++) {
  $("#" + randosb[i].id).html(
    '<span width="50px">' + randomb2[i][0] + "</span> "
  );
}
// #endregion

// #region Random2  3
var randomc2 = [
  ['<span><span class="enc2" id="9">datos científicos</span>'],
  ['<span><span class="enc2" id="10">el juego de palabras</span>'],
  ['<span><span class="enc2" id="11">la sensibilidad y el amor</span>'],
  ['<span><span class="enc2" id="12">solo recursos literarios</span>']
];

var randosc = document.getElementsByClassName("imagenc2");
randomc2.sort(f_randomico);
for (i = 0; i < randosc.length; i++) {
  $("#" + randosc[i].id).html(
    '<span width="50px">' + randomc2[i][0] + "</span> "
  );
}
// #endregion

// #region Random2  4
var randomd2 = [
  ['<span><span class="enc2" id="13">importantes y secundarios</span>'],
  ['<span><span class="enc2" id="14">secundarios y complementarios</span>'],
  ['<span><span class="enc2" id="15">protagonistas y secundarios</span>'],
  ['<span><span class="enc2" id="16">protagonistas y antagonistas</span>']
];

var randosd = document.getElementsByClassName("imagend2");
randomd2.sort(f_randomico);
for (i = 0; i < randosd.length; i++) {
  $("#" + randosd[i].id).html(
    '<span width="50px">' + randomd2[i][0] + "</span> "
  );
}
// #endregion

// #region Random2  5
var randome2 = [
  ['<span><span class="enc2" id="17">inicio, problema y solución</span>'],
  [
    '<span><span class="enc2" id="18">introducción, personajes y solución</span>'
  ],
  ['<span><span class="enc2" id="19">introducción, nudo y desenlace</span>'],
  ['<span><span class="enc2" id="20">inicio, problema y nudo</span>']
];

var randose = document.getElementsByClassName("imagene2");
randome2.sort(f_randomico);
for (i = 0; i < randose.length; i++) {
  $("#" + randose[i].id).html(
    '<span width="50px">' + randome2[i][0] + "</span> "
  );
}
// #endregion

// #region Random2  6
var randomf2 = [
  ['<span><span class="enc2" id="21">personaje</span>'],
  ['<span><span class="enc2" id="22">no presente</span>'],
  ['<span><span class="enc2" id="23">todos los anteriores</span>'],
  ['<span><span class="enc2" id="24">atemporal</span>']
];

var randosf = document.getElementsByClassName("imagenf2");
randomf2.sort(f_randomico);
for (i = 0; i < randosf.length; i++) {
  $("#" + randosf[i].id).html(
    '<span width="50px">' + randomf2[i][0] + "</span> "
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
  for (var i = 1; i <= 24; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "Narrativo" ||
        caja == "real o irreal" ||
        caja == "datos científicos" ||
        caja == "protagonistas y antagonistas" ||
        caja == "introducción, nudo y desenlace" ||
        caja == "personaje"
      ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").addClass("incorrecto");
      }
    }
  }

  var total = ((respr1 - respr2) * 1.5) / 6;
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

// #region Random6
var ejer = 1,
  itemsT = 4,
  cont = 0,
  tmp,
  cor = 0,
  inc = 0,
  calificacion = 10,
  claseAnimada = "animate bounceIn";
var resp = [],
  i;

var pal1 = [
  '<span class="bg_palabra c3">&nbsp;<img src="img/i1_p90_act6.jpg">&nbsp;</span>',
  '<span class="bg_palabra c1">&nbsp;<img src="img/i2_p90_act6.jpg">&nbsp;</span>',
  '<span class="bg_palabra c4">&nbsp;<img src="img/i3_p90_act6.jpg">&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;<img src="img/i4_p90_act6.jpg">&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img src="img/i5_p90_act6.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2"><img src="img/i6_p90_act6.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3"><img src="img/i7_p90_act6.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c4" id="caja_img4"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt4"><img src="img/i8_p90_act6.jpg"></div></td></tr>'
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
  containment: ".actividad7",
  scroll: false
});
$(".imagen").droppable({
  drop: function(e, ui) {
    //v_idsp5.push(ui.draggable.attr("id").substr(3));//obtenemos el id del arrastre
    //r_idsp5.push($(this).attr("id").substr(4)); //obtenemos el id del destino
    for (i = 1; i < 5; i++) {
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
// #region Pregunta6
function pregunta6() {
  cont++;
  $(this).unbind("click");
  AgregaClase(".nota", claseAnimada);
  QuitaClase(".actividad", claseAnimada);
  temp = $(".imagen");
  for (i = 0; i < resp.length; i++) {
    if (resp.length == 4 && resp[i] == "ok") {
      cor++;
      f_ok(temp);
    } else {
      inc++;
      f_no(temp);
    }
  }
  //var calc = (calificacion / itemsT);
  var total = (cor / itemsT).toFixed(2);
  tpre6 = total;
  f_tiempo();
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

// #region Pregunta9
function pregunta9() {
  var pre9a = document.getElementById("pre9a").value;
  tpre9 = pre9a;
  $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Pregunta10
function pregunta10() {
  var pre10a = document.getElementById("pre10a").value;
  tpre10 = pre10a;
  $("#pre10a").val(parseFloat(tpre10).toFixed(2));
}
// #endregion

// #region Pregunta11
function pregunta11() {
  var pre11a = document.getElementById("pre11a").value;
  tpre11 = pre11a;
  $("#pre11a").val(parseFloat(tpre11).toFixed(2));
}
// #endregion

function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    if (
      $("#1").hasClass("subrayar") != true &&
      $("#2").hasClass("subrayar") != true &&
      $("#3").hasClass("subrayar") != true &&
      $("#4").hasClass("subrayar") != true &&
      $("#1").hasClass("subrayar") != true &&
      $("#2").hasClass("subrayar") != true &&
      $("#3").hasClass("subrayar") != true &&
      $("#4").hasClass("subrayar") != true &&
      $("#1").hasClass("subrayar") != true &&
      $("#2").hasClass("subrayar") != true &&
      $("#3").hasClass("subrayar") != true &&
      $("#4").hasClass("subrayar") != true &&
      $("#1").hasClass("subrayar") != true &&
      $("#2").hasClass("subrayar") != true &&
      $("#3").hasClass("subrayar") != true &&
      $("#4").hasClass("subrayar") != true &&
      $("#1").hasClass("subrayar") != true &&
      $("#2").hasClass("subrayar") != true &&
      $("#3").hasClass("subrayar") != true &&
      $("#4").hasClass("subrayar") != true &&
      $("#1").hasClass("subrayar") != true &&
      $("#2").hasClass("subrayar") != true &&
      $("#3").hasClass("subrayar") != true &&
      $("#4").hasClass("subrayar") != true
    ) {
      alert("Pregunta 2: Subraye al menos una respuesta");
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
            var pre7a = document.getElementById("pre7a").value;
            if (pre7a == "") {
              alert("Pregunta 7: Califiqué la pregunta");
            } else {
              var pre8a = document.getElementById("pre8a").value;
              if (pre8a == "") {
                alert("Pregunta 8: Califiqué la pregunta");
              } else {
                var pre9a = document.getElementById("pre9a").value;
                if (pre9a == "") {
                  alert("Pregunta 9: Califiqué la pregunta");
                } else {
                  var pre10a = document.getElementById("pre10a").value;
                  if (pre10a == "") {
                    alert("Pregunta 10: Califiqué la pregunta");
                  } else {
                    var pre11a = document.getElementById("pre11a").value;
                    if (pre11a == "") {
                      alert("Pregunta 11: Califiqué la pregunta");
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
}
