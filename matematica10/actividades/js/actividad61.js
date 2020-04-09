var titulos = "preparo";
numero_pagina(50);

function validarN(e) {
  tecla = document.all ? e.keyCode : e.which;
  if (tecla == 8) return true;
  patron = /[,qwertyuiopñlkjhgfdsazcvxbnmQWERTYUIOPÑLKJHGFDSAZCVBNM]/;
  te = String.fromCharCode(tecla);
  if (patron.test(te)) {
    alert("INGRESE SOLO LA LETRA X MAYÚSCULA");
    return false;
  }
}
function validar3(e) {
  tecla = document.all ? e.keyCode : e.which;
  if (tecla == 8) return true;
  patron = /[,qwertyuiopñlkjhgdsazcxbnmQWERTYUIOPÑLKJHGDSAZCBNM1230456789.]/;
  te = String.fromCharCode(tecla);
  if (patron.test(te)) {
    alert("INGRESE V(VERDADERO) O F(FALSO) ");
    return false;
  }
}
document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre8a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre8a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre8a"), 1);
});
document.getElementById("pre9a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre9a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre9a"), 1);
});

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
// #region Random1
var ejer = 1,
  itemsT = 8,
  cont = 0,
  tmp,
  cor = 0,
  inc = 0,
  calificacion = 1,
  claseAnimada = "animate bounceIn";
var resp = [],
  i;

var pal1 = [
  '<span class="bg_palabra c1">&nbsp;−√(4)&nbsp;</span>',
  '<span class="bg_palabra c3">&nbsp;π − 2&nbsp;</span>',
  '<span class="bg_palabra c3">&nbsp;[1+√(5)]/2&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;2,<label class="periodo">8</label>&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;-5/3&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;0,4&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;2,<label class="periodo">9</label>&nbsp;</span>',
  '<span class="bg_palabra c1">&nbsp;<sup>3</sup>√(8)&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">"ℤ"</div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2">"ℚ"</div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“ℚ<sup>∗</sup>”</div></td></tr>'
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
    for (i = 1; i < 9; i++) {
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
// #region Pregunta1
function pregunta1() {
  cont++;
  $(this).unbind("click");
  AgregaClase(".nota", claseAnimada);
  QuitaClase(".actividad", claseAnimada);
  temp = $(".imagen");
  for (i = 0; i < resp.length; i++) {
    if (resp.length == 8 && resp[i] == "ok") {
      cor++;
      f_ok(temp);
    } else {
      inc++;
      f_no(temp);
    }
  }
  //var calc = (calificacion / itemsT);
  var total = (cor / itemsT).toFixed(2);
  tpre1 = total;
  f_tiempo();
}
// #endregion

// #region Random2
var random2 = [
  [
    '<label>√(2)</label><input type="text" maxlength="1" style="width:30px" id="cj2a">' +
      '<sup>3</sup><label>√(5)</label><input type="text" maxlength="1" style="width:30px" id="cj2b">' +
      '<img src="img/i1_p50_act2.jpg">'
  ],
  [
    '<label>En la gráfica:</label><img class="img-responsive" src="img/i3_p50_act2.jpg">' +
      '<label>x</label><input type="text" maxlength="1" style="width:30px" id="cj2e"><label>8</label>'
  ],
  [
    '<label>2π</label><input type="text" maxlength="1" style="width:30px" id="cj2c">' +
      '<label>6,28</label><input type="text" maxlength="1" style="width:30px" id="cj2d">' +
      '<img src="img/i2_p50_act2.jpg">'
  ],
  [
    "<label>En el intervalo x ∈ [− 2; 15]</label><br>" +
      '<label>i)</label> <label>x</label><input type="text" maxlength="1" style="width:30px" id="cj2f"><label>-2</label><br>' +
      '<label>ii)</label><label>x</label><input type="text" maxlength="1" style="width:30px" id="cj2g"><label>15</label>'
  ]
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
function pregunta2() {
  var cor = 0;
  var inc = 0;

  var cj2a = document.getElementById("cj2a").value;
  var cj2b = document.getElementById("cj2b").value;
  var cj2c = document.getElementById("cj2c").value;
  var cj2d = document.getElementById("cj2d").value;
  var cj2e = document.getElementById("cj2e").value;
  var cj2f = document.getElementById("cj2f").value;
  var cj2g = document.getElementById("cj2g").value;

  if (cj2a == "<") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }

  if (cj2b == "<") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").addClass("incorrecto");
  }

  if (cj2c == ">") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").addClass("incorrecto");
  }

  if (cj2d == ">") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").addClass("incorrecto");
  }

  if (cj2e == ">") {
    cor = cor + 1;
    $("#cj2e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2e").addClass("incorrecto");
  }

  if (cj2f == "≥") {
    cor = cor + 1;
    $("#cj2f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2f").addClass("incorrecto");
  }

  if (cj2g == "≤") {
    cor = cor + 1;
    $("#cj2g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2g").addClass("incorrecto");
  }

  var total = ((cor - inc) * 1) / 7;
  if (total < 0) {
    total = 0;
    tpre2 = total.toFixed(2);
  } else {
    tpre2 = total.toFixed(2);
  }
}
// #endregion

// #region Random3
var random3 = [
  [
    '<span><img src="img/i5_p50_act3.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span><img src="img/i1_p50_act3.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span><img src="img/i2_p50_act3.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea   class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span><img src="img/i3_p50_act3.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea   class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span><img src="img/i4_p50_act3.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ]
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
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;
  
      tpre3 = pre3a;
  
}
// #endregion

// #region Random4
var testimg = [
  ["1", "img/i2_p50_act4.jpg"],
  ["2", "img/i3_p50_act4.jpg"],
  ["3", "img/i4_p50_act4.jpg"],
  ["4", "img/i5_p50_act4.jpg"]
];

finitimg();

function finitimg() {
  var cajasImg = document.getElementsByClassName("imagen4");

  testimg.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        testimg[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta4

$(".enc").click(function() {
  if ($(this).hasClass("seleccionCajai")) {
    $(this).removeClass("seleccionCajai");
  } else {
    $(this).addClass("seleccionCajai");
  }
});
var respr1 = 0;
var respr2 = 0;
var respr3 = 0;
var respr4 = 0;
var respri1 = 0;
var respri2 = 0;
var respri3 = 0;
var respri4 = 0;

function pregunta4() {
  var CorrectasP = [["1", "img/i5_p50_act4.jpg"]];
  var caja1 = $("div[id=rancuatro1]").find("img")[0].id;
  if ($("#rancuatro1").hasClass("seleccionCajai")) {
    if (caja1 == "img/i5_p50_act4.jpg") {
      respr1 = 1;
      $("#rancuatro1").addClass("correctoi");
    } else {
      respri1 = 1;
      $("#rancuatro1").addClass("incorrectoi");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=rancuatro2]").find("img")[0].id;
  if ($("#rancuatro2").hasClass("seleccionCajai")) {
    if (caja2 == "img/i5_p50_act4.jpg") {
      respr2 = 1;
      $("#rancuatro2").addClass("correctoi");
    } else {
      respri2 = 1;
      $("#rancuatro2").addClass("incorrectoi");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=rancuatro3]").find("img")[0].id;
  if ($("#rancuatro3").hasClass("seleccionCajai")) {
    if (caja3 == "img/i5_p50_act4.jpg") {
      respr3 = 1;
      $("#rancuatro3").addClass("correctoi");
    } else {
      respri3 = 1;
      $("#rancuatro3").addClass("incorrectoi");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=rancuatro4]").find("img")[0].id;
  if ($("#rancuatro4").hasClass("seleccionCajai")) {
    if (caja4 == "img/i5_p50_act4.jpg") {
      respr4 = 1;
      $("#rancuatro4").addClass("correctoi");
    } else {
      respri4 = 1;
      $("#rancuatro4").addClass("incorrectoi");
    }
  } else {
    respr4 = 0;
  }

  var suma =
    parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4);
  var sumai =
    parseInt(respri1) +
    parseInt(respri2) +
    parseInt(respri3) +
    parseInt(respri4);

  var totalR = (suma * 1) / 1;
  if (totalR < 0) {
    tpre4 = 0;
  } else {
    tpre4 = totalR;
  }
}

// #endregion

// #region Random3
var random5 = [
  [
    '<img src="img/i1_p50_act5.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:30px" id="cj5a"><label>*</label>' +
      '<input type="text" maxlength="1" size="1" style="width:30px" id="cj5b"><label>*</label>' +
      '<label>√(</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj5c"><label>)</label>'
  ],
  [
    '<img src="img/i3_p50_act5.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:30px" id="cj5g"><label>*</label>' +
      '<input type="text" maxlength="1" size="1" style="width:30px" id="cj5h"><label>*</label>' +
      '<sup><input type="text" maxlength="1" size="1" style="width:15px" id="cj5i"></sup>' +
      '<label>√(</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj5j"><label>)</label>'
  ],
  [
    '<img src="img/i4_p50_act5.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:30px" id="cj5k"><label>*</label>' +
      '<input type="text" maxlength="1" size="1" style="width:30px" id="cj5l"><label>*</label>' +
      '<sup><input type="text" maxlength="1" size="1" style="width:15px" id="cj5m"></sup>' +
      '<label>√(</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj5n"><label>)</label>'
  ],
  [
    '<img src="img/i2_p50_act5.jpg">' +
      '<input type="text" maxlength="1" size="1" style="width:30px" id="cj5d"><label>*</label>' +
      '<sup><input type="text" maxlength="1" size="1" style="width:15px" id="cj5e"></sup>' +
      '<label>√(</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj5f"><label>)</label>'
  ]
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
function pregunta5() {
  var cor = 0;
  var inc = 0;

  var cj5a = document.getElementById("cj5a").value;
  var cj5b = document.getElementById("cj5b").value;
  var cj5c = document.getElementById("cj5c").value;
  var cj5d = document.getElementById("cj5d").value;
  var cj5e = document.getElementById("cj5e").value;
  var cj5f = document.getElementById("cj5f").value;
  var cj5g = document.getElementById("cj5g").value;
  var cj5h = document.getElementById("cj5h").value;
  var cj5i = document.getElementById("cj5i").value;
  var cj5j = document.getElementById("cj5j").value;
  var cj5k = document.getElementById("cj5k").value;
  var cj5l = document.getElementById("cj5l").value;
  var cj5m = document.getElementById("cj5m").value;
  var cj5n = document.getElementById("cj5n").value;

  if (cj5a == "2") {
    cor = cor + 1;
    $("#cj5a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5a").addClass("incorrecto");
  }

  if (cj5b == "x") {
    cor = cor + 1;
    $("#cj5b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5b").addClass("incorrecto");
  }

  if (cj5c == "y") {
    cor = cor + 1;
    $("#cj5c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5c").addClass("incorrecto");
  }

  if (cj5d == "a") {
    cor = cor + 1;
    $("#cj5d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5d").addClass("incorrecto");
  }

  if (cj5e == "4") {
    cor = cor + 1;
    $("#cj5e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5e").addClass("incorrecto");
  }

  if (cj5f == "a") {
    cor = cor + 1;
    $("#cj5f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5f").addClass("incorrecto");
  }

  if (cj5g == "2") {
    cor = cor + 1;
    $("#cj5g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5g").addClass("incorrecto");
  }

  if (cj5h == "z") {
    cor = cor + 1;
    $("#cj5h").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5h").addClass("incorrecto");
  }

  if (cj5i == "5") {
    cor = cor + 1;
    $("#cj5i").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5i").addClass("incorrecto");
  }

  if (cj5j == "8") {
    cor = cor + 1;
    $("#cj5j").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5j").addClass("incorrecto");
  }

  if (cj5k == "x") {
    cor = cor + 1;
    $("#cj5k").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5k").addClass("incorrecto");
  }

  if (cj5l == "y") {
    cor = cor + 1;
    $("#cj5l").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5l").addClass("incorrecto");
  }

  if (cj5m == "3") {
    cor = cor + 1;
    $("#cj5m").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5m").addClass("incorrecto");
  }

  if (cj5n == "5") {
    cor = cor + 1;
    $("#cj5n").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5n").addClass("incorrecto");
  }

  var total = ((cor - inc) * 1) / 14;
  if (total < 0) {
    total = 0;
    tpre5 = total.toFixed(2);
  } else {
    tpre5 = total.toFixed(2);
  }
}
// #endregion

// #region Random6
var ranseis = [
  ["1", "img/i2_p50_act6.jpg"],
  ["2", "img/i3_p50_act6.jpg"],
  ["3", "img/i4_p50_act6.jpg"],
  ["4", "img/i5_p50_act6.jpg"],
  ["5", "img/i6_p50_act6.jpg"]
];

finitimg6();

function finitimg6() {
  var cajasImg = document.getElementsByClassName("imagen6");

  ranseis.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        ranseis[i][1] +
        ' class="img-responsive imgAcom" src="' +
        ranseis[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta6

$(".enc1").click(function() {
  if ($(this).hasClass("seleccionCajai")) {
    $(this).removeClass("seleccionCajai");
  } else {
    $(this).addClass("seleccionCajai");
  }
});
var respr1 = 0;
var respr2 = 0;
var respr3 = 0;
var respr4 = 0;
var respr5 = 0;
var respri1 = 0;
var respri2 = 0;
var respri3 = 0;
var respri4 = 0;
var respri5 = 0;

function pregunta6() {
  var CorrectasP = [["1", "img/i3_p50_act6.jpg"]];
  var caja1 = $("div[id=ranseis1]").find("img")[0].id;
  if ($("#ranseis1").hasClass("seleccionCajai")) {
    if (caja1 == "img/i3_p50_act6.jpg") {
      respr1 = 1;
      $("#ranseis1").addClass("correctoi");
    } else {
      respri1 = 1;
      $("#ranseis1").addClass("incorrectoi");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=ranseis2]").find("img")[0].id;
  if ($("#ranseis2").hasClass("seleccionCajai")) {
    if (caja2 == "img/i3_p50_act6.jpg") {
      respr2 = 1;
      $("#ranseis2").addClass("correctoi");
    } else {
      respri2 = 1;
      $("#ranseis2").addClass("incorrectoi");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=ranseis3]").find("img")[0].id;
  if ($("#ranseis3").hasClass("seleccionCajai")) {
    if (caja3 == "img/i3_p50_act6.jpg") {
      respr3 = 1;
      $("#ranseis3").addClass("correctoi");
    } else {
      respri3 = 1;
      $("#ranseis3").addClass("incorrectoi");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=ranseis4]").find("img")[0].id;
  if ($("#ranseis4").hasClass("seleccionCajai")) {
    if (caja4 == "img/i3_p50_act6.jpg") {
      respr4 = 1;
      $("#ranseis4").addClass("correctoi");
    } else {
      respri4 = 1;
      $("#ranseis4").addClass("incorrectoi");
    }
  } else {
    respr4 = 0;
  }
  var caja5 = $("div[id=ranseis5]").find("img")[0].id;
  if ($("#ranseis5").hasClass("seleccionCajai")) {
    if (caja5 == "img/i3_p50_act6.jpg") {
      respr5 = 1;
      $("#ranseis5").addClass("correctoi");
    } else {
      respri5 = 1;
      $("#ranseis5").addClass("incorrectoi");
    }
  } else {
    respr5 = 0;
  }

  var suma =
    parseInt(respr1) +
    parseInt(respr2) +
    parseInt(respr3) +
    parseInt(respr4) +
    parseInt(respr5);
  var sumai =
    parseInt(respri1) +
    parseInt(respri2) +
    parseInt(respri3) +
    parseInt(respri4) +
    parseInt(respri5);

  var totalR = (suma * 1) / 1;
  if (totalR < 0) {
    tpre6 = 0;
  } else {
    tpre6 = totalR;
  }
}

// #endregion

// #region Random7
var ransiete = [
  ["1", "img/i2_p50_act7.jpg"],
  ["2", "img/i3_p50_act7.jpg"],
  ["3", "img/i4_p50_act7.jpg"],
  ["4", "img/i5_p50_act7.jpg"],
  ["5", "img/i6_p50_act7.jpg"]
];

finitimg7();

function finitimg7() {
  var cajasImg = document.getElementsByClassName("imagen7");

  ransiete.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        ransiete[i][1] +
        ' class="img-responsive imgAcom" src="' +
        ransiete[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta7

$(".enc2").click(function() {
  if ($(this).hasClass("seleccionCajai")) {
    $(this).removeClass("seleccionCajai");
  } else {
    $(this).addClass("seleccionCajai");
  }
});
var respr1 = 0;
var respr2 = 0;
var respr3 = 0;
var respr4 = 0;
var respr5 = 0;
var respri1 = 0;
var respri2 = 0;
var respri3 = 0;
var respri4 = 0;
var respri5 = 0;

function pregunta7() {
  var CorrectasP = [["1", "img/i2_p50_act7.jpg"]];
  var caja1 = $("div[id=ransiete1]").find("img")[0].id;
  if ($("#ransiete1").hasClass("seleccionCajai")) {
    if (caja1 == "img/i2_p50_act7.jpg") {
      respr1 = 1;
      $("#ransiete1").addClass("correctoi");
    } else {
      respri1 = 1;
      $("#ransiete1").addClass("incorrectoi");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=ransiete2]").find("img")[0].id;
  if ($("#ransiete2").hasClass("seleccionCajai")) {
    if (caja2 == "img/i2_p50_act7.jpg") {
      respr2 = 1;
      $("#ransiete2").addClass("correctoi");
    } else {
      respri2 = 1;
      $("#ransiete2").addClass("incorrectoi");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=ransiete3]").find("img")[0].id;
  if ($("#ransiete3").hasClass("seleccionCajai")) {
    if (caja3 == "img/i2_p50_act7.jpg") {
      respr3 = 1;
      $("#ransiete3").addClass("correctoi");
    } else {
      respri3 = 1;
      $("#ransiete3").addClass("incorrectoi");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=ransiete4]").find("img")[0].id;
  if ($("#ransiete4").hasClass("seleccionCajai")) {
    if (caja4 == "img/i2_p50_act7.jpg") {
      respr4 = 1;
      $("#ransiete4").addClass("correctoi");
    } else {
      respri4 = 1;
      $("#ransiete4").addClass("incorrectoi");
    }
  } else {
    respr4 = 0;
  }
  var caja5 = $("div[id=ransiete5]").find("img")[0].id;
  if ($("#ransiete5").hasClass("seleccionCajai")) {
    if (caja5 == "img/i2_p50_act7.jpg") {
      respr5 = 1;
      $("#ransiete5").addClass("correctoi");
    } else {
      respri5 = 1;
      $("#ransiete5").addClass("incorrectoi");
    }
  } else {
    respr5 = 0;
  }

  var suma =
    parseInt(respr1) +
    parseInt(respr2) +
    parseInt(respr3) +
    parseInt(respr4) +
    parseInt(respr5);
  var sumai =
    parseInt(respri1) +
    parseInt(respri2) +
    parseInt(respri3) +
    parseInt(respri4) +
    parseInt(respri5);

  var totalR = (suma * 1) / 1;
  if (totalR < 0) {
    tpre7 = 0;
  } else {
    tpre7 = totalR;
  }
}

// #endregion

// #region Random8
var random8 = [
  [
    '<img src="img/i3_p50_act8.jpg"><br>' +
      '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="3"></textarea>'
  ],
  [
    '<img src="img/i2_p50_act8.jpg"><br>' +
      '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="3"></textarea>'
  ],
  [
    '<img src="img/i1_p50_act8.jpg"><br>' +
      '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="3"></textarea>'
  ]
];

var ranocho = document.getElementsByClassName("imagen8");
random8.sort(f_randomico);
for (i = 0; i < ranocho.length; i++) {
  $("#" + ranocho[i].id).html(
    '<span width="50px">' + random8[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta8
function pregunta8() {
  var pre8a = document.getElementById("pre8a").value;
  
      tpre8 = pre8a;
   
}
// #endregion

// #region Random9
var random9 = [
  [
    '<img src="img/i1_p50_act9.jpg"><br>'+
    '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="3"></textarea>'
  ],
  [
    '<img src="img/i2_p50_act9.jpg"><br>'+
    '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="3"></textarea>'
  ]
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
function pregunta9() {
  var pre9a = document.getElementById("pre9a").value;
  
      tpre9 = pre9a;
   
}
// #endregion

// #region Pregunta10
function pregunta10() {
  var pre10a = document.getElementById("pre10a").value;
  
      tpre10 = pre10a;
   
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre3a = document.getElementById("pre3a").value;
  var pre8a = document.getElementById("pre8a").value;
  var pre9a = document.getElementById("pre9a").value;
  var pre10a = document.getElementById("pre10a").value;
  if (pre3a == "" || pre8a == "" || pre9a=="" || pre10a=="") {
    alert("Califiqué todas las preguntas");
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
      parseFloat(tpre10) ;
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}

// #endregion
