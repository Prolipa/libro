var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

var vector1 = [];
for (i = 0; i < 3; i++) {
  var numero = parseInt(Math.random() * 8 + 1);
  if (i == 0) {
    vector1.push(numero * 100);
  }
  if (i == 1) {
    vector1.push(numero * 25);
  }
  if (i == 2) {
    vector1.push(numero * 4);
  }
  $("#p7n" + [i] + "").text(numero);
}

function pregunta1() {
  var corr = 0;
  for (i = 0; i < 3; i++) {
    var resp = $("#p7i" + [i] + "").val();
    if (resp == vector1[i]) {
      corr++;
      f_ok($("#p7i" + [i] + ""));
    } else {
      corr;
      f_no($("#p7i" + [i] + ""));
    }
  }
  var res = (corr * 2) / 3;
  tpre1 = parseFloat(res);
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var random2 = [
  ['<span class="enc2" id="1">$ 1</span>'],
  ['<span class="enc2" id="2">85 ¢</span>'],
  ['<span class="enc2" id="3">99 ¢</span>'],
  ['<span class="enc2" id="4">89 ¢</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}
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
      if (caja == "99 ¢") {
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

  var total = ((respr1 - respr2) * 2) / 1;
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
var sum_total1 = 0;
var sum_total2 = 0;
var sum_total3 = 0;
var sum_total4 = 0;
var sumat = [];

sum_total1 = 0;

$(".drag1").draggable({
  rever: "invalid",
  helper: "clone",
  containment: "#activ1",
  scroll: false
});
$(".drop1").droppable({
  accept: ".drag1",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply;width:150px");
    });
    $(this)
      .find(".drop1")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total1 += 1;
    } else if (str1 == "b2") {
      sum_total1 += 5;
    } else if (str1 == "b3") {
      sum_total1 += 10;
    } else if (str1 == "b4") {
      sum_total1 += 20;
    } else if (str1 == "b5") {
      sum_total1 += 50;
    }
  }
});

sum_total2 = 0;

$(".drop2").droppable({
  accept: ".drag1",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply;width:150px");
    });
    $(this)
      .find(".drop2")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total2 += 1;
    } else if (str1 == "b2") {
      sum_total2 += 5;
    } else if (str1 == "b3") {
      sum_total2 += 10;
    } else if (str1 == "b4") {
      sum_total2 += 20;
    } else if (str1 == "b5") {
      sum_total2 += 50;
    }
  }
});

sum_total3 = 0;

$(".drop3").droppable({
  accept: ".drag1",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply;width:150px");
    });
    $(this)
      .find(".drop3")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total3 += 1;
    } else if (str1 == "b2") {
      sum_total3 += 5;
    } else if (str1 == "b3") {
      sum_total3 += 10;
    } else if (str1 == "b4") {
      sum_total3 += 20;
    } else if (str1 == "b5") {
      sum_total3 += 50;
    }
  }
});

sum_total4 = 0;

$(".drop4").droppable({
  accept: ".drag1",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply;width:150px");
    });
    $(this)
      .find(".drop4")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total4 += 1;
    } else if (str1 == "b2") {
      sum_total4 += 5;
    } else if (str1 == "b3") {
      sum_total4 += 10;
    } else if (str1 == "b4") {
      sum_total4 += 20;
    } else if (str1 == "b5") {
      sum_total4 += 50;
    }
  }
});
p3v1 = parseInt(Math.random() * 200 + 25);

$("#p3v1").html(p3v1);

function pregunta3() {
  var cor = 0;
  if (sum_total1 == p3v1) {
    cor = cor + 1;
    f_ok($(".drop1"));
  } else {
    cor;
    f_no($(".drop1"));
  }
  if (sum_total2 == p3v1) {
    cor = cor + 1;
    f_ok($(".drop2"));
  } else {
    cor;
    f_no($(".drop2"));
  }
  if (sum_total3 == p3v1) {
    cor = cor + 1;
    f_ok($(".drop3"));
  } else {
    cor;
    f_no($(".drop3"));
  }
  if (sum_total4 == p3v1) {
    cor = cor + 1;
    f_ok($(".drop4"));
  } else {
    cor;
    f_no($(".drop4"));
  }
  var res = (cor * 2) / 4;
  tpre3 = parseFloat(res);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var random4 = [
  [
    'Media hora tiene <input type="text" size="1" maxlength="2" style="width:50px"  class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30"> minutos.'
  ],
  [
    'Un minuto tiene <input type="text" size="1" maxlength="2" style="width:50px"  class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="60"> segundos.'
  ],
  [
    '120 minutos <input type="text" size="1" maxlength="2" style="width:50px"  class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2"> horas.'
  ],
  [
    'Una hora tiene <input type="text" size="1" maxlength="2" style="width:50px"  class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="60"> minutos.'
  ]
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
  $("#" + rancuatro[i].id).html(
    '<span width="50px">' + random4[i][0] + "</span> "
  );
}

function pregunta4() {
  var respuestas = document.getElementsByClassName("respuestas4");
  var soluciones = document.getElementsByClassName("solucion4");
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
  tpre4 = nota / 5;
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5

var random5 = [
  [
    '¿Cuántos niños escogieron canto? <input type="text" size="1" style="width:150px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="12 niños*12">'],
  [
    '¿Qué actividad fue la menos escogida? <input type="text" size="1" style="width:150px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="patinaje">'],
  [
    '¿Cuántos niños fueron encuestados? <input type="text" size="1" style="width:150px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="60 niños*60">']
];

var rancinco = document.getElementsByClassName("imagen5");
random5.sort(f_randomico);
for (i = 0; i < rancinco.length; i++) {
  $("#" + rancinco[i].id).html(
    '<span width="50px">' + random5[i][0] + "</span> "
  );
}

function pregunta5() {
  var respuestas = document.getElementsByClassName("respuestas5");
  var soluciones = document.getElementsByClassName("solucion5");
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
  tpre5 = nota / 5;
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  pregunta3();
  pregunta4();
  pregunta5();
  var Nf =
    parseFloat(tpre1) +
    parseFloat(tpre2) +
    parseFloat(tpre3) +
    parseFloat(tpre4) +
    parseFloat(tpre5);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
