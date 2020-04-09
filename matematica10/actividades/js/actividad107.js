var titulos = "aplico";
numero_pagina(151);


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2);
});

// #region Pregunta1
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2
var pal1 = [
  '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p152_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
  '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p152_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
  '<img class="img-responsive drag3 c3" alt="3" src="img/i3_p152_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
  '<img class="img-responsive drag3 c4" alt="4" src="img/i4_p152_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;'
];

var pal2 = [
  "<div><img src='img/i5_p152_act1.jpg'></div>", 
  "<div><img src='img/i6_p152_act1.jpg'></div>",
  "<div><img src='img/i7_p152_act1.jpg'></div>",
  "<div><img src='img/i8_p152_act1.jpg'></div>"
];

pal1.sort(f_randomico);

var p2vec1 = ["2", "3", "4","1"];
var p2aux2 = [];
$(".textos").append(pal1);
var myArray2 = ["0", "1", "2", "3"];
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
  $(".p2cim1" + i).html(pal2[c1]);
  p2aux2.push(p2vec1[c1]);
}
$(".drag3").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: ".actividad17",
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

  var total = (p2cont1 * 4) / 4;
  tpre2 = total;
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Pregunta3
var p2vec1 = [
    '<span class="enc2 col-md-2" id="2">(−4,3)</span>',
    '<span class="enc2 col-md-2" id="1">(4,3)</span>',
    '<span class="enc2 col-md-2" id="3">(3,4)</span>',
    '<span class="enc2 col-md-2" id="4">(4,-3)</span>'
];
p2vec1.sort(f_randomico);
$('#p2aux1').html(p2vec1);

var p2vec2 = [
    '<span class="enc2 col-md-2" id="6">(3,-2)</span>',
    '<span class="enc2 col-md-2" id="8">(4,3)</span>',
    '<span class="enc2 col-md-2" id="7">(3,4)</span>',
    '<span class="enc2 col-md-2" id="5">(2,-3)</span>'
];
p2vec2.sort(f_randomico);
$('#p2aux2').html(p2vec2);

var p2vec3 = [
    '<span class="enc2 col-md-2" id="12">(-4,8)</span>',
    '<span class="enc2 col-md-2" id="11">(8,-4)</span>',
    '<span class="enc2 col-md-2" id="9">(8,4)</span>',
    '<span class="enc2 col-md-2" id="10">(4,8)</span>' ];
p2vec3.sort(f_randomico);
$('#p2aux3').html(p2vec3);

var p2vec4 = [
    '<span class="enc2 col-md-2" id="13"><div class="fraction"><span class="fup">7</span><span class="bar">/</span><span class="fdn">10</span></div>,<div class="fraction"><span class="fup">11</span><span class="bar">/</span><span class="fdn">25</span></div></span>',
    '<span class="enc2 col-md-2" id="16"><div class="fraction"><span class="fup">1</span><span class="bar">/</span><span class="fdn">5</span></div>,<div class="fraction"><span class="fup">1</span><span class="bar">/</span><span class="fdn">2</span></div></span>',
    '<span class="enc2 col-md-2" id="15">No existe</span>',
    '<span class="enc2 col-md-2" id="14">(2,5)</span>'];
p2vec4.sort(f_randomico);
$('#p2aux4').html(p2vec4);

$(".enc2").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});
function pregunta3() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 16; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "(4,3)" || caja == "(3,4)" || caja == '(-4,8)' || caja == "7/10,11/25") {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("subrayarc");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("subrayari");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 4) / 4;
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
    // var pre1a = document.getElementById("pre1a").value;
    // if (pre1a == "") {
    //     alert("Pregunta 1: Califiqué la pregunta");
    // } else {
            pregunta1();
            pregunta2();
            pregunta3();
            var Nf =
                parseFloat(tpre1) +
                parseFloat(tpre2) +
                parseFloat(tpre3);
            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
            $("input").attr('disabled', 'disabled');
        }
//     }
// #endregion