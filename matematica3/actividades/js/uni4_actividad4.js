var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 3);
});

var pal1 = [
  '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p165_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p165_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c3" alt="3" src="img/i3_p165_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal10 = [
  '<img class="img-responsive drag4 c1" alt="1" src="img/i4_p165_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag4 c2" alt="2" src="img/i5_p165_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag4 c3" alt="3" src="img/i6_p165_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal2 = [
  "<br><div><b>30 minutos</b></div>",
  "<br><div><b>5 minutos</b></div>",
  "<div><b>1 hora</b></div>"
];

pal1.sort(f_randomico);
pal10.sort(f_randomico);

var p2vec1 = ["2", "1", "3"];
var p2vec10 = ["3", "1", "2"];
var p2aux2 = [];
var p2aux20 = [];
$(".textos").append(pal1);
$(".textos1").append(pal10);
var myArray2 = ["0", "1", "2"];
var i, j, k;
for (i = myArray2.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = myArray2[i - 1];
  myArray2[i - 1] = myArray2[j];
  myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 3; i++) {
  var c1 = myArray2[i - 1];
  $(".p2cim1" + i).html(pal2[c1]);
  p2aux2.push(p2vec1[c1]);
  p2aux20.push(p2vec10[c1]);
}
$(".drag3").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: ".actividad1",
  scroll: false
});
$(".drag4").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: ".actividad2",
  scroll: false
});

$(".drop3").droppable({
  accept: ".drag3",
  drop: function(e, ui) {
    $(ui.draggable).removeClass("drag3");
    $(ui.draggable).removeClass("bg_palabra");
    ui.draggable.attr("style", "mix-blend-mode:multiply;");
    $(this).append(ui.draggable);
  }
});
$(".drop4").droppable({
  accept: ".drag4",
  drop: function(e, ui) {
    $(ui.draggable).removeClass("drag4");
    $(ui.draggable).removeClass("bg_palabra");
    ui.draggable.attr("style", "mix-blend-mode:multiply;");
    $(this).append(ui.draggable);
  }
});
function pregunta1() {
  var p2im1 = $(".p2im1 > img").attr("alt");
  var p2cont1 = 0;
  if (p2im1 == p2aux2[0]) {
    p2cont1++;
    f_ok($(".p2im1"));
  } else {
    f_no($(".p2im1"));
  }
  var p2im2 = $(".p2im2 > img").attr("alt");
  if (p2im2 == p2aux2[1]) {
    p2cont1++;
    f_ok($(".p2im2"));
  } else {
    f_no($(".p2im2"));
  }
  var p2im3 = $(".p2im3 > img").attr("alt");
  if (p2im3 == p2aux2[2]) {
    p2cont1++;
    f_ok($(".p2im3"));
  } else {
    f_no($(".p2im3"));
  }
  var p2im4 = $(".p2im4 > img").attr("alt");
  if (p2im4 == p2aux20[0]) {
    p2cont1++;
    f_ok($(".p2im4"));
  } else {
    f_no($(".p2im4"));
  }
  var p2im5 = $(".p2im5 > img").attr("alt");
  if (p2im5 == p2aux20[1]) {
    p2cont1++;
    f_ok($(".p2im5"));
  } else {
    f_no($(".p2im5"));
  }
  var p2im6 = $(".p2im6 > img").attr("alt");
  if (p2im6 == p2aux20[2]) {
    p2cont1++;
    f_ok($(".p2im6"));
  } else {
    f_no($(".p2im6"));
  }

  var total = (p2cont1 * 3) / 6;
  tpre1 = total;
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

var palsiete1 = [
  '<img class="img-responsive drag1 c1" src="img/i1_p165_act3.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag1 c2" alt="2" src="img/i2_p165_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag1 c3" alt="3" src="img/i3_p165_act3.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];
var palsiete2 = [
  "<div><b>60 minutos</b></div>",
  "<div><b>2 años</b></div>",
  "<div><b>48 horas</b></div>"
];

palsiete1.sort(f_randomico);
var p7vec1 = ["3", "2", "1"];
var p7aux2 = [];
$(".textos3").append(palsiete1);
var myArray2 = ["0", "1", "2"];
var i, j, k;
for (i = myArray2.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = myArray2[i - 1];
  myArray2[i - 1] = myArray2[j];
  myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 5; i++) {
  var c1 = myArray2[i - 1];
  $(".p7cim1" + i).html(palsiete2[c1]);
  p7aux2.push(p7vec1[c1]);
}
$(".drag1").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: ".actividad17",
  scroll: false
});

$(".drop1").droppable({
  accept: ".drag1",
  drop: function(e, ui) {
    $(ui.draggable).removeClass("drag1");
    $(ui.draggable).removeClass("bg_palabra");
    ui.draggable.attr("style", "mix-blend-mode:multiply;");
    $(this).append(ui.draggable);
  }
});
function pregunta3() {
  var p7im1 = $(".p7im1 > img").attr("alt");
  var p7cont1 = 0;
  if (p7im1 == p7aux2[0]) {
    p7cont1++;
    f_ok($(".p7im1"));
  } else {
    f_no($(".p7im1"));
  }
  var p7im2 = $(".p7im2 > img").attr("alt");
  if (p7im2 == p7aux2[1]) {
    p7cont1++;
    f_ok($(".p7im2"));
  } else {
    f_no($(".p7im2"));
  }
  var p7im3 = $(".p7im3 > img").attr("alt");
  if (p7im3 == p7aux2[2]) {
    p7cont1++;
    f_ok($(".p7im3"));
  } else {
    f_no($(".p7im3"));
  }

  var total = (p7cont1 * 3) / 3;
  tpre3 = total;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
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
  tpre4 = nota / 10;
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre2a = document.getElementById("pre2a").value;
  if (pre2a == "") {
    alert("Pregunta 2: Califiqué la pregunta");
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
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}
