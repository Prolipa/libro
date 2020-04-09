var titulos = "prueba";
numero_pagina(56);

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
document.getElementById("pre12a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre12a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre12a"), 1);
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
var tpre12 = 0;

// #region Random1
var testimg = [
  ["1", "img/i1_p56_act1.jpg"],
  ["2", "img/i2_p56_act1.jpg"],
  ["3", "img/i3_p56_act1.jpg"],
  ["4", "img/i4_p56_act1.jpg"]
];

finitimg();

function finitimg() {
  var cajasImg = document.getElementsByClassName("imagen1");

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

// #region Pregunta1

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

function pregunta1() {
  var CorrectasP = [["1", "img/i4_p56_act1.jpg"]];
  var caja1 = $("div[id=ranuno1]").find("img")[0].id;
  if ($("#ranuno1").hasClass("seleccionCajai")) {
    if (caja1 == "img/i4_p56_act1.jpg"  ) {
      respr1 = 1;
      $("#ranuno1").addClass("correctoi");
    } else {
      respri1 = 1;
      $("#ranuno1").addClass("incorrectoi");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=ranuno2]").find("img")[0].id;
  if ($("#ranuno2").hasClass("seleccionCajai")) {
    if (caja2 == "img/i4_p56_act1.jpg" ) {
      respr2 = 1;
      $("#ranuno2").addClass("correctoi");
    } else {
      respri2 = 1;
      $("#ranuno2").addClass("incorrectoi");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=ranuno3]").find("img")[0].id;
  if ($("#ranuno3").hasClass("seleccionCajai")) {
    if (caja3 == "img/i4_p56_act1.jpg" ) {
      respr3 = 1;
      $("#ranuno3").addClass("correctoi");
    } else {
      respri3 = 1;
      $("#ranuno3").addClass("incorrectoi");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=ranuno4]").find("img")[0].id;
  if ($("#ranuno4").hasClass("seleccionCajai")) {
    if (caja4 == "img/i4_p56_act1.jpg" ) {
      respr4 = 1;
      $("#ranuno4").addClass("correctoi");
    } else {
      respri4 = 1;
      $("#ranuno4").addClass("incorrectoi");
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

  var totalR = ((suma-sumai) * 1) / 1;
  if (totalR < 0) {
    tpre1 = 0;
  } else {
    tpre1 = totalR;
  }
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

  if (cj2a == "12") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }

  if (cj2b == "x") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").addClass("incorrecto");
  }

  if (cj2c == "2") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").addClass("incorrecto");
  }

  if (cj2d == "7") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").addClass("incorrecto");
  }

  if (cj2e == "x") {
    cor = cor + 1;
    $("#cj2e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2e").addClass("incorrecto");
  }
  
  if (cj2f == "12") {
    cor = cor + 1;
    $("#cj2f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2f").addClass("incorrecto");
  }


  var total = ((cor - inc) * 1) / 6;
  if (total < 0) {
    total = 0;
    tpre2 = total.toFixed(2);
  } else {
    tpre2 = total.toFixed(2);
  }
}
// #endregion

// #region Pregunta3
function pregunta3() {
  var cor = 0;
  var inc = 0;

  var cj3a = document.getElementById("cj3a").value;
  var cj3b = document.getElementById("cj3b").value;
  var cj3c = document.getElementById("cj3c").value;

  if (cj3a == "3x") {
    cor = cor + 1;
    $("#cj3a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3a").addClass("incorrecto");
  }

  if (cj3b == "-") {
    cor = cor + 1;
    $("#cj3b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3b").addClass("incorrecto");
  }

  if (cj3c == "1") {
    cor = cor + 1;
    $("#cj3c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3c").addClass("incorrecto");
  }



  var total = ((cor - inc) * 1) / 3;
  if (total < 0) {
    total = 0;
    tpre3 = total.toFixed(2);
  } else {
    tpre3 = total.toFixed(2);
  }
}
// #endregion

// #region Random4
var testimg1 = [
  ["1", "img/i1_p56_act4.jpg"],
  ["2", "img/i2_p56_act4.jpg"],
  ["3", "img/i3_p56_act4.jpg"],
  ["4", "img/i4_p56_act4.jpg"]
];

finitimg1();

function finitimg1() {
  var cajasImg = document.getElementsByClassName("imagen4");

  testimg1.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        testimg1[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg1[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta4

$(".enc1").click(function() {
  if ($(this).hasClass("seleccionCajao")) {
    $(this).removeClass("seleccionCajao");
  } else {
    $(this).addClass("seleccionCajao");
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
  var CorrectasP = [["1", "img/i3_p56_act4.jpg"]];
  var caja1 = $("div[id=rancuatro1]").find("img")[0].id;
  if ($("#rancuatro1").hasClass("seleccionCajao")) {
    if (caja1 == "img/i3_p56_act4.jpg"  ) {
      respr1 = 1;
      $("#rancuatro1").addClass("correctoo");
    } else {
      respri1 = 1;
      $("#rancuatro1").addClass("incorrectoo");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=rancuatro2]").find("img")[0].id;
  if ($("#rancuatro2").hasClass("seleccionCajao")) {
    if (caja2 == "img/i3_p56_act4.jpg" ) {
      respr2 = 1;
      $("#rancuatro2").addClass("correctoo");
    } else {
      respri2 = 1;
      $("#rancuatro2").addClass("incorrectoo");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=rancuatro3]").find("img")[0].id;
  if ($("#rancuatro3").hasClass("seleccionCajao")) {
    if (caja3 == "img/i3_p56_act4.jpg" ) {
      respr3 = 1;
      $("#rancuatro3").addClass("correctoo");
    } else {
      respri3 = 1;
      $("#rancuatro3").addClass("incorrectoo");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=rancuatro4]").find("img")[0].id;
  if ($("#rancuatro4").hasClass("seleccionCajao")) {
    if (caja4 == "img/i3_p56_act4.jpg" ) {
      respr4 = 1;
      $("#rancuatro4").addClass("correctoo");
    } else {
      respri4 = 1;
      $("#rancuatro4").addClass("incorrectoo");
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

  var totalR = ((suma-sumai) * 1) / 1;
  if (totalR < 0) {
    tpre4 = 0;
  } else {
    tpre4 = totalR;
  }
}
// #endregion

// #region Random5
var testimg2 = [
  ["1", "img/i1_p56_act5.jpg"],
  ["2", "img/i2_p56_act5.jpg"],
  ["3", "img/i3_p56_act5.jpg"],
  ["4", "img/i4_p56_act5.jpg"]
];

finitimg2();

function finitimg2() {
  var cajasImg = document.getElementsByClassName("imagen5");

  testimg2.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        testimg2[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg2[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta5
$(".enc2").click(function() {
  if ($(this).hasClass("seleccionCajao")) {
    $(this).removeClass("seleccionCajao");
  } else {
    $(this).addClass("seleccionCajao");
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

function pregunta5() {
  var CorrectasP = [["1", "img/i1_p56_act5.jpg"]];
  var caja1 = $("div[id=rancinco1]").find("img")[0].id;
  if ($("#rancinco1").hasClass("seleccionCajao")) {
    if (caja1 == "img/i1_p56_act5.jpg"  ) {
      respr1 = 1;
      $("#rancinco1").addClass("correctoo");
    } else {
      respri1 = 1;
      $("#rancinco1").addClass("incorrectoo");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=rancinco2]").find("img")[0].id;
  if ($("#rancinco2").hasClass("seleccionCajao")) {
    if (caja2 == "img/i1_p56_act5.jpg" ) {
      respr2 = 1;
      $("#rancinco2").addClass("correctoo");
    } else {
      respri2 = 1;
      $("#rancinco2").addClass("incorrectoo");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=rancinco3]").find("img")[0].id;
  if ($("#rancinco3").hasClass("seleccionCajao")) {
    if (caja3 == "img/i1_p56_act5.jpg" ) {
      respr3 = 1;
      $("#rancinco3").addClass("correctoo");
    } else {
      respri3 = 1;
      $("#rancinco3").addClass("incorrectoo");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=rancinco4]").find("img")[0].id;
  if ($("#rancinco4").hasClass("seleccionCajao")) {
    if (caja4 == "img/i1_p56_act5.jpg" ) {
      respr4 = 1;
      $("#rancinco4").addClass("correctoo");
    } else {
      respri4 = 1;
      $("#rancinco4").addClass("incorrectoo");
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

  var totalR = ((suma-sumai) * 1) / 1;
  if (totalR < 0) {
    tpre5 = 0;
  } else {
    tpre5 = totalR;
  }
}
// #endregion

// #region Random6
var testimg3 = [
  ["1", "img/i2_p56_act6.jpg"],
  ["2", "img/i3_p56_act6.jpg"],
  ["3", "img/i4_p56_act6.jpg"],
  ["4", "img/i5_p56_act6.jpg"]
];

finitimg3();

function finitimg3() {
  var cajasImg = document.getElementsByClassName("imagen6");

  testimg3.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        testimg3[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg3[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta6
$(".enc3").click(function() {
  if ($(this).hasClass("seleccionCajao")) {
    $(this).removeClass("seleccionCajao");
  } else {
    $(this).addClass("seleccionCajao");
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

function pregunta6() {
  var CorrectasP = [["1", "img/i4_p56_act6.jpg"]];
  var caja1 = $("div[id=ranseis1]").find("img")[0].id;
  if ($("#ranseis1").hasClass("seleccionCajao")) {
    if (caja1 == "img/i4_p56_act6.jpg"  ) {
      respr1 = 1;
      $("#ranseis1").addClass("correctoo");
    } else {
      respri1 = 1;
      $("#ranseis1").addClass("incorrectoo");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=ranseis2]").find("img")[0].id;
  if ($("#ranseis2").hasClass("seleccionCajao")) {
    if (caja2 == "img/i4_p56_act6.jpg" ) {
      respr2 = 1;
      $("#ranseis2").addClass("correctoo");
    } else {
      respri2 = 1;
      $("#ranseis2").addClass("incorrectoo");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=ranseis3]").find("img")[0].id;
  if ($("#ranseis3").hasClass("seleccionCajao")) {
    if (caja3 == "img/i4_p56_act6.jpg" ) {
      respr3 = 1;
      $("#ranseis3").addClass("correctoo");
    } else {
      respri3 = 1;
      $("#ranseis3").addClass("incorrectoo");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=ranseis4]").find("img")[0].id;
  if ($("#ranseis4").hasClass("seleccionCajao")) {
    if (caja4 == "img/i4_p56_act6.jpg" ) {
      respr4 = 1;
      $("#ranseis4").addClass("correctoo");
    } else {
      respri4 = 1;
      $("#ranseis4").addClass("incorrectoo");
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

  var totalR = ((suma-sumai) * 1) / 1;
  if (totalR < 0) {
    tpre6 = 0;
  } else {
    tpre6 = totalR;
  }
}
// #endregion

// #region Random7
var testimg7 = [
  ["1", "img/i2_p56_act7.jpg"],
  ["2", "img/i3_p56_act7.jpg"],
  ["3", "img/i4_p56_act7.jpg"],
  ["4", "img/i5_p56_act7.jpg"]
];

finitimg7();

function finitimg7() {
  var cajasImg = document.getElementsByClassName("imagen7");

  testimg7.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        testimg7[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg7[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta7
$(".enc4").click(function() {
  if ($(this).hasClass("seleccionCajao")) {
    $(this).removeClass("seleccionCajao");
  } else {
    $(this).addClass("seleccionCajao");
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

function pregunta7() {
  var CorrectasP = [["1", "img/i5_p56_act7.jpg"]];
  var caja1 = $("div[id=ransiete1]").find("img")[0].id;
  if ($("#ransiete1").hasClass("seleccionCajao")) {
    if (caja1 == "img/i5_p56_act7.jpg"  ) {
      respr1 = 1;
      $("#ransiete1").addClass("correctoo");
    } else {
      respri1 = 1;
      $("#ransiete1").addClass("incorrectoo");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=ransiete2]").find("img")[0].id;
  if ($("#ransiete2").hasClass("seleccionCajao")) {
    if (caja2 == "img/i5_p56_act7.jpg" ) {
      respr2 = 1;
      $("#ransiete2").addClass("correctoo");
    } else {
      respri2 = 1;
      $("#ransiete2").addClass("incorrectoo");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=ransiete3]").find("img")[0].id;
  if ($("#ransiete3").hasClass("seleccionCajao")) {
    if (caja3 == "img/i5_p56_act7.jpg" ) {
      respr3 = 1;
      $("#ransiete3").addClass("correctoo");
    } else {
      respri3 = 1;
      $("#ransiete3").addClass("incorrectoo");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=ransiete4]").find("img")[0].id;
  if ($("#ransiete4").hasClass("seleccionCajao")) {
    if (caja4 == "img/i5_p56_act7.jpg" ) {
      respr4 = 1;
      $("#ransiete4").addClass("correctoo");
    } else {
      respri4 = 1;
      $("#ransiete4").addClass("incorrectoo");
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

  var totalR = ((suma-sumai) * 1) / 1;
  if (totalR < 0) {
    tpre7 = 0;
  } else {
    tpre7 = totalR;
  }
}
// #endregion

// #region Random8
var testimg8 = [
  ["1", "img/i2_p56_act8.jpg"],
  ["2", "img/i3_p56_act8.jpg"],
  ["3", "img/i4_p56_act8.jpg"],
  ["4", "img/i5_p56_act8.jpg"]
];

finitimg8();

function finitimg8() {
  var cajasImg = document.getElementsByClassName("imagen8");

  testimg8.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        testimg8[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg8[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta8
$(".enc8").click(function() {
  if ($(this).hasClass("seleccionCajao")) {
    $(this).removeClass("seleccionCajao");
  } else {
    $(this).addClass("seleccionCajao");
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

function pregunta8() {
  var CorrectasP = [["1", "img/i2_p56_act8.jpg"]];
  var caja1 = $("div[id=ranocho1]").find("img")[0].id;
  if ($("#ranocho1").hasClass("seleccionCajao")) {
    if (caja1 == "img/i2_p56_act8.jpg"  ) {
      respr1 = 1;
      $("#ranocho1").addClass("correctoo");
    } else {
      respri1 = 1;
      $("#ranocho1").addClass("incorrectoo");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=ranocho2]").find("img")[0].id;
  if ($("#ranocho2").hasClass("seleccionCajao")) {
    if (caja2 == "img/i2_p56_act8.jpg" ) {
      respr2 = 1;
      $("#ranocho2").addClass("correctoo");
    } else {
      respri2 = 1;
      $("#ranocho2").addClass("incorrectoo");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=ranocho3]").find("img")[0].id;
  if ($("#ranocho3").hasClass("seleccionCajao")) {
    if (caja3 == "img/i2_p56_act8.jpg" ) {
      respr3 = 1;
      $("#ranocho3").addClass("correctoo");
    } else {
      respri3 = 1;
      $("#ranocho3").addClass("incorrectoo");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=ranocho4]").find("img")[0].id;
  if ($("#ranocho4").hasClass("seleccionCajao")) {
    if (caja4 == "img/i2_p56_act8.jpg" ) {
      respr4 = 1;
      $("#ranocho4").addClass("correctoo");
    } else {
      respri4 = 1;
      $("#ranocho4").addClass("incorrectoo");
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

  var totalR = ((suma-sumai) * 1) / 1;
  if (totalR < 0) {
    tpre8 = 0;
  } else {
    tpre8 = totalR;
  }
}
// #endregion

// #region Random9
var testimg9 = [
  ["1", "img/i1_p56_act9.jpg"],
  ["2", "img/i2_p56_act9.jpg"],
  ["3", "img/i3_p56_act9.jpg"],
  ["4", "img/i4_p56_act9.jpg"]
];

finitimg9();

function finitimg9() {
  var cajasImg = document.getElementsByClassName("imagen9");

  testimg9.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        testimg9[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg9[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta9
$(".enc9").click(function() {
  if ($(this).hasClass("seleccionCajao")) {
    $(this).removeClass("seleccionCajao");
  } else {
    $(this).addClass("seleccionCajao");
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

function pregunta9() {
  var CorrectasP = [["1", "img/i3_p56_act9.jpg"]];
  var caja1 = $("div[id=rannueve1]").find("img")[0].id;
  if ($("#rannueve1").hasClass("seleccionCajao")) {
    if (caja1 == "img/i3_p56_act9.jpg"  ) {
      respr1 = 1;
      $("#rannueve1").addClass("correctoo");
    } else {
      respri1 = 1;
      $("#rannueve1").addClass("incorrectoo");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=rannueve2]").find("img")[0].id;
  if ($("#rannueve2").hasClass("seleccionCajao")) {
    if (caja2 == "img/i3_p56_act9.jpg" ) {
      respr2 = 1;
      $("#rannueve2").addClass("correctoo");
    } else {
      respri2 = 1;
      $("#rannueve2").addClass("incorrectoo");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=rannueve3]").find("img")[0].id;
  if ($("#rannueve3").hasClass("seleccionCajao")) {
    if (caja3 == "img/i3_p56_act9.jpg" ) {
      respr3 = 1;
      $("#rannueve3").addClass("correctoo");
    } else {
      respri3 = 1;
      $("#rannueve3").addClass("incorrectoo");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=rannueve4]").find("img")[0].id;
  if ($("#rannueve4").hasClass("seleccionCajao")) {
    if (caja4 == "img/i3_p56_act9.jpg" ) {
      respr4 = 1;
      $("#rannueve4").addClass("correctoo");
    } else {
      respri4 = 1;
      $("#rannueve4").addClass("incorrectoo");
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

  var totalR = ((suma-sumai) * 1) / 1;
  if (totalR < 0) {
    tpre9 = 0;
  } else {
    tpre9 = totalR;
  }
}
// #endregion

// #region Random10
var testimg10 = [
  ["1", "img/i1_p56_act10.jpg"],
  ["2", "img/i2_p56_act10.jpg"],
  ["3", "img/i3_p56_act10.jpg"],
  ["4", "img/i4_p56_act10.jpg"]
];

finitimg10();

function finitimg10() {
  var cajasImg = document.getElementsByClassName("imagen10");

  testimg10.sort(f_randomico);
  for (i = 0; i < cajasImg.length; i++) {
    $("#" + cajasImg[i].id).html(
      "<img id=" +
        testimg10[i][1] +
        ' class="img-responsive imgAcom" src="' +
        testimg10[i][1] +
        '">'
    );
  }
}
// #endregion

// #region Pregunta10
$(".enc10").click(function() {
  if ($(this).hasClass("seleccionCajao")) {
    $(this).removeClass("seleccionCajao");
  } else {
    $(this).addClass("seleccionCajao");
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

function pregunta10() {
  var CorrectasP = [["1", "img/i4_p56_act10.jpg"]];
  var caja1 = $("div[id=randiez1]").find("img")[0].id;
  if ($("#randiez1").hasClass("seleccionCajao")) {
    if (caja1 == "img/i4_p56_act10.jpg"  ) {
      respr1 = 1;
      $("#randiez1").addClass("correctoo");
    } else {
      respri1 = 1;
      $("#randiez1").addClass("incorrectoo");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=randiez2]").find("img")[0].id;
  if ($("#randiez2").hasClass("seleccionCajao")) {
    if (caja2 == "img/i4_p56_act10.jpg" ) {
      respr2 = 1;
      $("#randiez2").addClass("correctoo");
    } else {
      respri2 = 1;
      $("#randiez2").addClass("incorrectoo");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=randiez3]").find("img")[0].id;
  if ($("#randiez3").hasClass("seleccionCajao")) {
    if (caja3 == "img/i4_p56_act10.jpg" ) {
      respr3 = 1;
      $("#randiez3").addClass("correctoo");
    } else {
      respri3 = 1;
      $("#randiez3").addClass("incorrectoo");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=randiez4]").find("img")[0].id;
  if ($("#randiez4").hasClass("seleccionCajao")) {
    if (caja4 == "img/i4_p56_act10.jpg" ) {
      respr4 = 1;
      $("#randiez4").addClass("correctoo");
    } else {
      respri4 = 1;
      $("#randiez4").addClass("incorrectoo");
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

  var totalR = ((suma-sumai) * 1) / 1;
  if (totalR < 0) {
    tpre10 = 0;
  } else {
    tpre10 = totalR;
  }
}
// #endregion

// #region Random11
var random11 = [
  [
    '<label>∡B ∧ ∡G son ángulos correspondientes ( <input type="text" size="1" style="width:20px" maxlength="1" onkeypress="return validar3(event)" id="cj11d"> )</label>'
  ],
  [
    '<label>∡A ≅ ∡B ( <input type="text" size="1" style="width:20px" maxlength="1" onkeypress="return validar3(event)"  id="cj11a"> )</label>'
  ],
  [
    '<label>∡A ≅ ∡D ≅ ∡E ≅ ∡H ( <input type="text" size="1" style="width:20px" maxlength="1" onkeypress="return validar3(event)" id="cj11c"> )</label>'
  ],
  [
    '<label>∡A ≅ ∡E ( <input type="text" size="1" style="width:20px" maxlength="1" onkeypress="return validar3(event)" id="cj11e"> )</label>'
  ],
  [
    '<label>∡E ≅ ∡H ( <input type="text" size="1" style="width:20px" maxlength="1" onkeypress="return validar3(event)" id="cj11f"> )</label>'
  ],
  [
    '<label>∡E ≅ ∡H ( <input type="text" size="1" style="width:20px" maxlength="1" onkeypress="return validar3(event)" id="cj11b"> )</label>'
  ]
];

var ranonce = document.getElementsByClassName("imagen11");
random11.sort(f_randomico);
for (i = 0; i < ranonce.length; i++) {
  $("#" + ranonce[i].id).html(
    '<span width="50px">' + random11[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta11
function pregunta11() {
  var cor = 0;
  var inc = 0;

  var cj11a = document.getElementById("cj11a").value;
  var cj11b = document.getElementById("cj11b").value;
  var cj11c = document.getElementById("cj11c").value;
  var cj11d = document.getElementById("cj11d").value;
  var cj11e = document.getElementById("cj11e").value;
  var cj11f = document.getElementById("cj11f").value;

  if (cj11a == "F" || cj11a == "f" ) {
    cor = cor + 1;
    $("#cj11a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11a").addClass("incorrecto");
  }

  if (cj11b == "V"  || cj11b == "v") {
    cor = cor + 1;
    $("#cj11b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11b").addClass("incorrecto");
  }

  if (cj11c == "V" || cj11c == "v") {
    cor = cor + 1;
    $("#cj11c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11c").addClass("incorrecto");
  }

  if (cj11d == "F" ||cj11d == "f") {
    cor = cor + 1;
    $("#cj11d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11d").addClass("incorrecto");
  }

  if (cj11e == "V" || cj11e == "v") {
    cor = cor + 1;
    $("#cj11e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11e").addClass("incorrecto");
  }

  if (cj11f == "V" || cj11f == "v") {
    cor = cor + 1;
    $("#cj11f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11f").addClass("incorrecto");
  }


  var total = ((cor - inc) * 1) / 6;
  if (total < 0) {
    total = 0;
    tpre11 = total.toFixed(2);
  } else {
    tpre11 = total.toFixed(2);
  }
}
// #endregion

// #region Random12
var random12 = [
  [
    '<span>El △ DEC , según sus lados, se clasifica dentro de los triángulos.</span><br>'+
    '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span>¿Crees que △ ABC ≈ △ DEC ? <b>Argumenta</b> tu respuesta.</span><br>'+
    '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span>¿Cuál es la medida de ∡CED ?</span><br>'+
    '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span>El △ ABC , según sus lados, se clasifica dentro de los triángulos.</span><br>'+
    '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span><b>Traza</b> la altura en y <b>analiza</b> los triángulos que se obtienen. <b>Determina</b> cuáles de ellos son semejantes.</span><br>'+
    '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ],
  [
    '<span>¿Cuál es la medida de ∡CAB ?</span><br>'+
    '<textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
  ]
];

var randoce = document.getElementsByClassName("imagen12");
random12.sort(f_randomico);
for (i = 0; i < randoce.length; i++) {
  $("#" + randoce[i].id).html(
    '<span width="50px">' + random12[i][0] + "</span> "
  );
}
// #endregion

function pregunta12() {
  var pre12a = document.getElementById("pre12a").value;
  
      tpre12 = pre12a;
  
}

// #region Calculo Nota Final
function NotaFinal() {
 
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
    pregunta12();
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
      parseFloat(tpre11) +
      parseFloat(tpre12) ;
    var total =((Nf*10)/12)
    var Vtotal = total.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}

// #endregion

