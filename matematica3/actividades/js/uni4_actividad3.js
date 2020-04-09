var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

// #region Pregunta1
var random1 = [
  [
    '<h3><img src="img/i2_p162_act1.jpg" class="img-responsive" style="display:inline-block"> = <input type="text" size="1" style="width:80px" class=" border-blue respuestas1"><input          type="hidden" style="color:blue" class="solucion1" value="170"> $</h3>'
  ],
  [
    '<h3><img src="img/i3_p162_act1.jpg" class="img-responsive" style="display:inline-block"> = <input type="text" size="1" style="width:80px" class=" border-blue respuestas1"><input          type="hidden" style="color:blue" class="solucion1" value="88"> ¢</h3>'
  ],
  [
    '<h3><img src="img/i1_p162_act1.jpg" class="img-responsive" style="display:inline-block"> = <input type="text" size="1" style="width:80px" class=" border-blue respuestas1"><input            type="hidden" style="color:blue" class="solucion1" value="75"> $</h3>'
  ],
  [
    '<h3><img src="img/i4_p162_act1.jpg" class="img-responsive" style="display:inline-block"> = <input type="text" size="1" style="width:80px" class=" border-blue respuestas1"><input  type="hidden" style="color:blue" class="solucion1" value="71"> ¢</h3>'
  ]
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
  $("#" + ranuno[i].id).html(
    '<span width="50px">' + random1[i][0] + "</span> "
  );
}

function pregunta1() {
  var respuestas = document.getElementsByClassName("respuestas1");
  var soluciones = document.getElementsByClassName("solucion1");
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
  tpre1 = (nota * 3) / 10;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
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
      $(this).attr("style", "mix-blend-mode:multiply");
    });
    $(this)
      .find(".drop1")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total1 += 25;
    }
  }
});

sum_total2 = 0;
$(".drag2").draggable({
  rever: "invalid",
  helper: "clone",
  containment: "#activ2",
  scroll: false
});
$(".drop2").droppable({
  accept: ".drag2",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply");
    });
    $(this)
      .find(".drop2")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total2 += 50;
    }
  }
});

sum_total3 = 0;
$(".drag3").draggable({
  rever: "invalid",
  helper: "clone",
  containment: "#activ3",
  scroll: false
});
$(".drop3").droppable({
  accept: ".drag3",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply");
    });
    $(this)
      .find(".drop3")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total3 += 10;
    } else if (str1 == "b2") {
      sum_total3 += 25;
    } else if (str1 == "b3") {
      sum_total3 += 5;
    }
  }
});

sum_total4 = 0;
$(".drag4").draggable({
  rever: "invalid",
  helper: "clone",
  containment: "#activ4",
  scroll: false
});
$(".drop4").droppable({
  accept: ".drag4",
  drop: function(e, ui) {
    ui.helper.clone().appendTo(this);
    $.each($(this).children(), function(index, value) {
      $(this).attr("style", "mix-blend-mode:multiply");
    });
    $(this)
      .find(".drop4")
      .draggable({ disabled: true });
    str1 = ui.draggable.attr("id"); //capturamos los IDS
    if (str1 == "b1") {
      sum_total4 += 1;
    } else if (str1 == "b2") {
      sum_total4 += 50;
    } else if (str1 == "b3") {
      sum_total4 += 25;
    } else if (str1 == "b4") {
      sum_total4 += 10;
    } else if (str1 == "b5") {
      sum_total4 += 5;
    }
  }
});

var random2 = [
  [
    '<div class="col-sm-12" id="activ3">    <div class="col-sm-6">        <table class="table">            <tr align="center">                <td><img class="drag3" class="img-responsive" src="img/i3_p162_act2.jpg" id="b1" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>                <td><img class="drag3" class="img-responsive" src="img/i4_p162_act2.jpg" id="b2" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>                <td><img class="drag3" class="img-responsive" src="img/i5_p162_act2.jpg" id="b3" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>            </tr>        </table>    </div>    <div class="col-sm-6">        <div class="c_destino drop3" style="border-bottom-color: #005DA8"></div><br>    </div></div>'
  ],
  [
    '<div class="col-sm-12" id="activ1">    <div class="col-sm-6">        <table class="table">            <tr align="center">                <td><img class="drag1" class="img-responsive" src="img/i1_p162_act2.jpg" id="b1" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>            </tr>        </table>    </div>    <div class="col-sm-6">        <div class="c_destino drop1" style="border-bottom-color: #005DA8"></div><br>    </div></div>'
  ],
  [
    '<div class="col-sm-12" id="activ4">    <div class="col-sm-6">        <table class="table">            <tr align="center">                <td><img class="drag4" class="img-responsive" src="img/i6_p162_act2.jpg" id="b1" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>                <td><img class="drag4" class="img-responsive" src="img/i2_p162_act2.jpg" id="b2" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>                <td><img class="drag4" class="img-responsive" src="img/i4_p162_act2.jpg" id="b3" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>                <td><img class="drag4" class="img-responsive" src="img/i3_p162_act2.jpg" id="b4" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>                <td><img class="drag4" class="img-responsive" src="img/i5_p162_act2.jpg" id="b5" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>            </tr>        </table>    </div>    <div class="col-sm-6">        <div class="c_destino drop4" style="border-bottom-color: #005DA8"></div><br>    </div></div>'
  ],
  [
    '<div class="col-sm-12" id="activ2">    <div class="col-sm-6">        <table class="table">            <tr align="center">                <td><img class="drag2" class="img-responsive" src="img/i2_p162_act2.jpg" id="b1" style="mix-blend-mode: multiply; display: inline-block;"                        alt="1"></td>            </tr>        </table>    </div>    <div class="col-sm-6">        <div class="c_destino drop2" style="border-bottom-color: #005DA8"></div><br>    </div></div>'
  ]
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}

function pregunta2() {
  var cor = 0;
  if (sum_total1 == 100) {
    cor = cor + 1;
    f_ok($(".drop1"));
  } else {
    cor;
    f_no($(".drop1"));
  }
  if (sum_total2 == 100) {
    cor = cor + 1;
    f_ok($(".drop2"));
  } else {
    cor;
    f_no($(".drop2"));
  }
  if (sum_total3 == 100) {
    cor = cor + 1;
    f_ok($(".drop3"));
  } else {
    cor;
    f_no($(".drop3"));
  }
  if (sum_total4 == 100) {
    cor = cor + 1;
    f_ok($(".drop4"));
  } else {
    cor;
    f_no($(".drop4"));
  }
  var res = (cor * 3) / 4;
  tpre2 = parseFloat(res);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

var random3 = [
  [
    '<span class="enc3" id="1">36 $</span>'
  ],
  [
    '<span class="enc3" id="2">46 $</span>'
  ],
  [
    '<span class="enc3" id="3">26 $</span>'
  ],
  [
    '<span class="enc3" id="4">56 $</span>'
  ]
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
  $("#" + rantres[i].id).html(
    '<span width="50px">' + random3[i][0] + "</span> "
  );
}

var random4 = [
  [
    '<span class="enc3" id="5">72 $</span>'
  ],
  [
    '<span class="enc3" id="6">82 $</span>'
  ],
  [
    '<span class="enc3" id="7">62 $</span>'
  ],
  [
    '<span class="enc3" id="8">42 $</span>'
  ]
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
  $("#" + rancuatro[i].id).html(
    '<span width="50px">' + random4[i][0] + "</span> "
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
  for (var i = 1; i <= 4; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "36 $") {
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

  for (var i = 5; i <= 8; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "82 $") {
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
  var total = ((respr1 - respr2) * 3) / 2;
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
  pregunta1();
  pregunta2();
  pregunta3();
  pregunta4();
  var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3)+ parseFloat(tpre4);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
