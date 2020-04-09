var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Pregunta1
var vector1 = [];
for (i = 0; i < 6; i++) {
  var numero = parseInt(Math.random() * 8 + 1);
  if (i >= 0 && i < 3) {
    vector1.push(numero * 100);
  }
  if (i >= 3 && i < 6) {
    vector1.push(numero * 25);
  }
  $("#p7n" + [i] + "").text(numero);
}

function pregunta1() {
  var corr = 0;
  for (i = 0; i < 6; i++) {
    var resp = $("#p7i" + [i] + "").val();
    if (resp == vector1[i]) {
      corr++;
      f_ok($("#p7i" + [i] + ""));
    } else {
      corr;
      f_no($("#p7i" + [i] + ""));
    }
  }
  var res = (corr * 4) / 6;
  tpre1 = parseFloat(res);
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var pal1 = [
  '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p159_act4.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p159_act4.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c3" alt="3" src="img/i3_p159_act4.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c4" alt="4" src="img/i4_p159_act4.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal10 = [
  '<img class="img-responsive drag30 c1" alt="1" src="img/i5_p159_act4.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag30 c2" alt="2" src="img/i6_p159_act4.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag30 c3" alt="3" src="img/i7_p159_act4.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag30 c4" alt="4" src="img/i8_p159_act4.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal2 = [
  '<div><b>3 <img src="img/i4_p159_act1.jpg" class="img-responsive" style="display:inline-block"></b></div>',
  '<div><b>4 <img src="img/i4_p159_act1.jpg" class="img-responsive" style="display:inline-block"></b></div>',
  '<div><b>1 <img src="img/i4_p159_act1.jpg" class="img-responsive" style="display:inline-block"></b></div>',
  '<div><b>6 <img src="img/i4_p159_act1.jpg" class="img-responsive" style="display:inline-block"></b></div>'
];

var pal20 = [
  '<div><b>20 <img src="img/i5_p159_act1.jpg" class="img-responsive" style="display:inline-block"></b></div>',
  '<div><b>36 <img src="img/i5_p159_act1.jpg" class="img-responsive" style="display:inline-block"></b></div>',
  '<div><b>8 <img src="img/i5_p159_act1.jpg" class="img-responsive" style="display:inline-block"></b></div>',
  '<div><b>28 <img src="img/i5_p159_act1.jpg" class="img-responsive" style="display:inline-block"></b></div>'
];

pal1.sort(f_randomico);
pal10.sort(f_randomico);

var p2vec1 = ["4", "1", "2", "3"];
var p2vec10 = ["2", "4", "1", "3"];
var p2aux2 = [];
var p2aux20 = [];
$(".textos").append(pal1);
$(".textos1").append(pal10);
var myArray2 = ["0", "1", "2", "3"];
var myArray20 = ["0", "1", "2", "3"];
var i, j, k;
for (i = myArray2.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = myArray2[i - 1];
  myArray2[i - 1] = myArray2[j];
  myArray2[j] = k;
}
var i, j, k;
for (i = myArray20.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = myArray20[i - 1];
  myArray20[i - 1] = myArray20[j];
  myArray20[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 5; i++) {
  var c1 = myArray2[i - 1];
  $(".p2cim1" + i).html(pal2[c1]);
  p2aux2.push(p2vec1[c1]);
}
for (var i = 1; i <= 5; i++) {
  var c1 = myArray20[i - 1];
  $(".p2cim2" + i).html(pal20[c1]);
  p2aux20.push(p2vec10[c1]);
}
$(".drag3").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: "#actividad17",
  scroll: false
});
$(".drag30").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: "#actividad18",
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
  accept: ".drag30",
  drop: function(e, ui) {
    $(ui.draggable).removeClass("drag30");
    $(ui.draggable).removeClass("bg_palabra");
    ui.draggable.attr("style", "mix-blend-mode:multiply;");
    $(this).append(ui.draggable);
  }
});
function pregunta2() {
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
  if (p2im4 == p2aux2[3]) {
    p2cont1++;
    f_ok($(".p2im4"));
  } else {
    f_no($(".p2im4"));
  }
  var p2im5 = $(".p2im5 > img").attr("alt");
  if (p2im5 == p2aux20[0]) {
    p2cont1++;
    f_ok($(".p2im5"));
  } else {
    f_no($(".p2im5"));
  }
  var p2im6 = $(".p2im6 > img").attr("alt");
  if (p2im6 == p2aux20[1]) {
    p2cont1++;
    f_ok($(".p2im6"));
  } else {
    f_no($(".p2im6"));
  }
  var p2im7 = $(".p2im7 > img").attr("alt");
  if (p2im7 == p2aux20[2]) {
    p2cont1++;
    f_ok($(".p2im7"));
  } else {
    f_no($(".p2im7"));
  }
  var p2im8 = $(".p2im8 > img").attr("alt");
  if (p2im8 == p2aux20[3]) {
    p2cont1++;
    f_ok($(".p2im8"));
  } else {
    f_no($(".p2im8"));
  }

  var total = (p2cont1 * 4) / 8;
  tpre2 = total;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3


var random3 = [
  [
    '<span class="enc3" id="1">400 lb de arroz, 600 lb de azúcar, 500 lb de harina.</span>'
  ],
  [
    '<span class="enc3" id="2">400 lb de arroz, 600 lb de azúcar, 600 lb de harina.</span>'
  ],
  [
    '<span class="enc3" id="3">400 lb de arroz, 700 lb de azúcar, 500 lb de harina.</span>'
  ]
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
  $("#" + rantres[i].id).html(
    '<span width="50px">' + random3[i][0] + "</span> "
  );
}
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
  for (var i = 1; i <= 3; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "400 lb de arroz, 700 lb de azúcar, 500 lb de harina.") {
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
    tpre3 = total;
  } else {
    tpre3 = total;
  }

  tpre3 = total.toFixed(2);
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  pregunta3();
  var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
