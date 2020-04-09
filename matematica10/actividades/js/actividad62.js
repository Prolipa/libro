var titulos = "evaluacion";
numero_pagina(53);

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
document.getElementById("pre1a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1a"), 0.50);
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
var tpre12 = 0;

// #region Random1
var random1 = [
    [
      '<span>El número 5 pertenece a los números naturales, enteros, racionales y reales.<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<span>El número 3,14 es un número irracional.<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<span>El número √(12) es un número racional.<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
    ],
    [
      '<span>Los números irracionales se pueden transformar en racionales.<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea  class="form-control text-question no-redimensionar " cols="60" rows="2"></textarea>'
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
  var pre1a = document.getElementById("pre1a").value;
  
      tpre1 = pre1a;
  
}
// #endregion

// #region Random2
var testimg = [
    ["1", "img/i2_p52_act2.jpg"],
    ["2", "img/i3_p52_act2.jpg"],
    ["3", "img/i4_p52_act2.jpg"],
    ["4", "img/i5_p52_act2.jpg"]
  ];
  
  finitimg();
  
  function finitimg() {
    var cajasImg = document.getElementsByClassName("imagen2");
  
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

// #region Pregunta2

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
  var respri1 = 0;
  var respri2 = 0;
  var respri3 = 0;
  var respri4 = 0;
  
  function pregunta2() {
    var CorrectasP = [["1", "img/i4_p52_act2.jpg"]];
    var caja1 = $("div[id=randos1]").find("img")[0].id;
    if ($("#randos1").hasClass("seleccionCajai")) {
      if (caja1 == "img/i4_p52_act2.jpg"  || caja1 == "img/i2_p52_act2.jpg" ) {
        respr1 = 1;
        $("#randos1").addClass("correctoi");
      } else {
        respri1 = 1;
        $("#randos1").addClass("incorrectoi");
      }
    } else {
      respr1 = 0;
    }
  
    var caja2 = $("div[id=randos2]").find("img")[0].id;
    if ($("#randos2").hasClass("seleccionCajai")) {
      if (caja2 == "img/i4_p52_act2.jpg" || caja2 == "img/i2_p52_act2.jpg") {
        respr2 = 1;
        $("#randos2").addClass("correctoi");
      } else {
        respri2 = 1;
        $("#randos2").addClass("incorrectoi");
      }
    } else {
      respr2 = 0;
    }
  
    var caja3 = $("div[id=randos3]").find("img")[0].id;
    if ($("#randos3").hasClass("seleccionCajai")) {
      if (caja3 == "img/i4_p52_act2.jpg" || caja3 == "img/i2_p52_act2.jpg") {
        respr3 = 1;
        $("#randos3").addClass("correctoi");
      } else {
        respri3 = 1;
        $("#randos3").addClass("incorrectoi");
      }
    } else {
      respr3 = 0;
    }
    var caja4 = $("div[id=randos4]").find("img")[0].id;
    if ($("#randos4").hasClass("seleccionCajai")) {
      if (caja4 == "img/i4_p52_act2.jpg" || caja4 == "img/i2_p52_act2.jpg") {
        respr4 = 1;
        $("#randos4").addClass("correctoi");
      } else {
        respri4 = 1;
        $("#randos4").addClass("incorrectoi");
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
  
    var totalR = (suma * 0.50) / 1;
    if (totalR < 0) {
      tpre2 = 0;
    } else {
      tpre2 = totalR;
    }
  }
  
// #endregion

// #region Random3
var random3 = [
    [
      '<sup>3</sup><label>√(16)=</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3c">'+
      '<sup><input type="text" maxlength="1" size="1" style="width:15px" id="cj3d"></sup><label>√(</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3e"><label>)</label>'
    ],
    [
      '<sup>4</sup><label>√(x<sup>6</sup>)=</label></label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3f">'+
      '<label>√(</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3g"><label>)</label>'
    ],
    [
      '<label>√(32)=</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3a">'+
      '<label>√(</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3b"><label>)</label>'
    ],
    [
      '<label>1/2</label><label>√(12)=</label>'+
      '<label>√(</label><input type="text" maxlength="2" size="1" style="width:30px" id="cj3h"><label>)</label>'
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
    var cor = 0;
    var inc = 0;
  
    var cj3a = document.getElementById("cj3a").value;
    var cj3b = document.getElementById("cj3b").value;
    var cj3c = document.getElementById("cj3c").value;
    var cj3d = document.getElementById("cj3d").value;
    var cj3e = document.getElementById("cj3e").value;
    var cj3f = document.getElementById("cj3f").value;
    var cj3g = document.getElementById("cj3g").value;
    var cj3h = document.getElementById("cj3h").value;
  
    if (cj3a == "4") {
      cor = cor + 1;
      $("#cj3a").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3a").addClass("incorrecto");
    }
  
    if (cj3b == "2") {
      cor = cor + 1;
      $("#cj3b").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3b").addClass("incorrecto");
    }
  
    if (cj3c == "2") {
      cor = cor + 1;
      $("#cj3c").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3c").addClass("incorrecto");
    }
  
    if (cj3d == "3") {
      cor = cor + 1;
      $("#cj3d").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3d").addClass("incorrecto");
    }
  
    if (cj3e == "2") {
      cor = cor + 1;
      $("#cj3e").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3e").addClass("incorrecto");
    }
  
    if (cj3f == "x") {
      cor = cor + 1;
      $("#cj3f").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3f").addClass("incorrecto");
    }
  
    if (cj3g == "x") {
      cor = cor + 1;
      $("#cj3g").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3g").addClass("incorrecto");
    }
  
    if (cj3h == "3") {
      cor = cor + 1;
      $("#cj3h").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3h").addClass("incorrecto");
    }
  
    var total = ((cor - inc) * 1) / 8;
    if (total < 0) {
      total = 0;
      tpre3 = total.toFixed(2);
    } else {
      tpre3 = total.toFixed(2);
    }
  }
// #endregion

// #region Pregunta4
function pregunta4() {
  var cor = 0;
  var inc = 0;

  var cj4a = document.getElementById("cj4a").value;
  var cj4b = document.getElementById("cj4b").value;

  if (cj4a == "a") {
    cor = cor + 1;
    $("#cj4a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj4a").addClass("incorrecto");
  }

  if (cj4b == "ab") {
    cor = cor + 1;
    $("#cj4b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj4b").addClass("incorrecto");
  }

  var total = ((cor) * 1) / 2;
  if (total < 0) {
    total = 0;
    tpre4 = total.toFixed(2);
  } else {
    tpre4 = total.toFixed(2);
  }
}
// #endregion

// #region Pregunta5
function pregunta5() {
  var cor = 0;
  var inc = 0;

  var cj5a = document.getElementById("cj5a").value;
  var cj5b = document.getElementById("cj5b").value;

  if (cj5a == "1,6002") {
    cor = cor + 1;
    $("#cj5a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5a").addClass("incorrecto");
  }

  if (cj5b == "4") {
    cor = cor + 1;
    $("#cj5b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5b").addClass("incorrecto");
  }

  var total = ((cor) * 1) / 2;
  if (total < 0) {
    total = 0;
    tpre5 = total.toFixed(2);
  } else {
    tpre5 = total.toFixed(2);
  }
}
// #endregion

// #region Random6
var random6 = [
  [
    '<img src="img/i2_p52_act6.jpg">'+
    '<label>R=</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6d">'+
    '<label><</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6e">'+
    '<label><</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6f">'
  ],
  [
    '<img src="img/i1_p52_act6.jpg">'+
    '<label>R=</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6a">'+
    '<label><</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6b">'+
    '<label><</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6c">'
  ],
  [
    '<img src="img/i3_p52_act6.jpg">'+
    '<label>R=</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6g">'+
    '<label><</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6h">'+
    '<label><</label><input type="text" maxlength="1" size="1" style="width:30px" id="cj6i">'
  ]
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
function pregunta6() {
  var cor = 0;
  var inc = 0;

  var cj6a = document.getElementById("cj6a").value;
  var cj6b = document.getElementById("cj6b").value;
  var cj6c = document.getElementById("cj6c").value;
  var cj6d = document.getElementById("cj6d").value;
  var cj6e = document.getElementById("cj6e").value;
  var cj6f = document.getElementById("cj6f").value;
  var cj6g = document.getElementById("cj6g").value;
  var cj6h = document.getElementById("cj6h").value;
  var cj6i = document.getElementById("cj6i").value;

  if (cj6a == "3") {
    cor = cor + 1;
    $("#cj6a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6a").addClass("incorrecto");
  }

  if (cj6b == "1") {
    cor = cor + 1;
    $("#cj6b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6b").addClass("incorrecto");
  }
  if (cj6c == "2") {
    cor = cor + 1;
    $("#cj6c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6c").addClass("incorrecto");
  }
  if (cj6d == "2") {
    dor = cor + 1;
    $("#cj6d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6d").addClass("incorrecto");
  }
  if (cj6e == "1") {
    cor = cor + 1;
    $("#cj6e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6e").addClass("incorrecto");
  }
  if (cj6f == "3") {
    cor = cor + 1;
    $("#cj6f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6f").addClass("incorrecto");
  }
  if (cj6g == "3") {
    cor = cor + 1;
    $("#cj6g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6g").addClass("incorrecto");
  }
  if (cj6h == "2") {
    cor = cor + 1;
    $("#cj6h").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6h").addClass("incorrecto");
  }
  if (cj6i == "1") {
    cor = cor + 1;
    $("#cj6i").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6i").addClass("incorrecto");
  }

  var total = ((cor) * 1) / 9;
  if (total < 0) {
    total = 0;
    tpre6 = total.toFixed(2);
  } else {
    tpre6 = total.toFixed(2);
  }
}
// #endregion

// #region Random7
var testimg1 = [
  ["1", "img/i2_p52_act7.jpg"],
  ["2", "img/i3_p52_act7.jpg"],
  ["3", "img/i4_p52_act7.jpg"],
  ["4", "img/i5_p52_act7.jpg"],
  ["5", "img/i6_p52_act7.jpg"]
];

finitimg1();

function finitimg1() {
  var cajasImg = document.getElementsByClassName("imagen7");

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
  var CorrectasP = [["1", "img/i2_p52_act7.jpg"]];
  var caja1 = $("div[id=ransiete1]").find("img")[0].id;
  if ($("#ransiete1").hasClass("seleccionCajai")) {
    if (caja1 == "img/i2_p52_act7.jpg") {
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
    if (caja2 == "img/i2_p52_act7.jpg") {
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
    if (caja3 == "img/i2_p52_act7.jpg") {
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
    if (caja4 == "img/i2_p52_act7.jpg") {
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
    if (caja5 == "img/i2_p52_act7.jpg") {
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
    parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4)+ parseInt(respr5);
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
var testimg2 = [
  ["1", "img/i2_p52_act8.jpg"],
  ["2", "img/i3_p52_act8.jpg"],
  ["3", "img/i4_p52_act8.jpg"],
  ["4", "img/i5_p52_act8.jpg"],
  ["5", "img/i6_p52_act8.jpg"]
];

finitimg2();

function finitimg2() {
  var cajasImg = document.getElementsByClassName("imagen8");

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

// #region Pregunta8
$(".enc3").click(function() {
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

function pregunta8() {
  var CorrectasP = [["1", "img/i4_p52_act8.jpg"]];
  var caja1 = $("div[id=ranocho1]").find("img")[0].id;
  if ($("#ranocho1").hasClass("seleccionCajai")) {
    if (caja1 == "img/i4_p52_act8.jpg") {
      respr1 = 1;
      $("#ranocho1").addClass("correctoi");
    } else {
      respri1 = 1;
      $("#ranocho1").addClass("incorrectoi");
    }
  } else {
    respr1 = 0;
  }

  var caja2 = $("div[id=ranocho2]").find("img")[0].id;
  if ($("#ranocho2").hasClass("seleccionCajai")) {
    if (caja2 == "img/i4_p52_act8.jpg") {
      respr2 = 1;
      $("#ranocho2").addClass("correctoi");
    } else {
      respri2 = 1;
      $("#ranocho2").addClass("incorrectoi");
    }
  } else {
    respr2 = 0;
  }

  var caja3 = $("div[id=ranocho3]").find("img")[0].id;
  if ($("#ranocho3").hasClass("seleccionCajai")) {
    if (caja3 == "img/i4_p52_act8.jpg") {
      respr3 = 1;
      $("#ranocho3").addClass("correctoi");
    } else {
      respri3 = 1;
      $("#ranocho3").addClass("incorrectoi");
    }
  } else {
    respr3 = 0;
  }
  var caja4 = $("div[id=ranocho4]").find("img")[0].id;
  if ($("#ranocho4").hasClass("seleccionCajai")) {
    if (caja4 == "img/i4_p52_act8.jpg") {
      respr4 = 1;
      $("#ranocho4").addClass("correctoi");
    } else {
      respri4 = 1;
      $("#ranocho4").addClass("incorrectoi");
    }
  } else {
    respr4 = 0;
  }
  var caja5 = $("div[id=ranocho5]").find("img")[0].id;
  if ($("#ranocho5").hasClass("seleccionCajai")) {
    if (caja5 == "img/i4_p52_act8.jpg") {
      respr5 = 1;
      $("#ranocho5").addClass("correctoi");
    } else {
      respri5 = 1;
      $("#ranocho5").addClass("incorrectoi");
    }
  } else {
    respr5 = 0;
  }

  var suma =
    parseInt(respr1) + parseInt(respr2) + parseInt(respr3) + parseInt(respr4)+ parseInt(respr5);
  var sumai =
    parseInt(respri1) +
    parseInt(respri2) +
    parseInt(respri3) +
    parseInt(respri4) +
    parseInt(respri5); 

  var totalR = (suma * 1) / 1;
  if (totalR < 0) {
    tpre8 = 0;
  } else {
    tpre8 = totalR;
  }
}
// #endregion

// #region Random9
var random9 = [
  [
    '<img src="img/i2_p53_act9.jpg"><br><br>'+
    '<textarea class="form-control text-question no-redimensionar " cols="80" rows="3"></textarea>'
  ],
  [
    '<img src="img/i3_p53_act9.jpg"><br><br>'+
    '<textarea class="form-control text-question no-redimensionar " cols="80" rows="3"></textarea>'
  ],
  [
    '<img src="img/i1_p53_act9.jpg"><br><br>'+
    '<textarea class="form-control text-question no-redimensionar " cols="80" rows="3"></textarea>'
  ],
  [
    '<img src="img/i4_p53_act9.jpg"><br><br>'+
    '<textarea class="form-control text-question no-redimensionar " cols="80" rows="3"></textarea>'
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

// #region Random10
var ejer = 1,
  itemsT = 4,
  cont = 0,
  tmp,
  cor = 0,
  inc = 0,
  calificacion = 0.50,
  claseAnimada = "animate bounceIn";
var resp = [],
  i;

var pal1 = [
  '<span class="bg_palabra c3">&nbsp;Ortocentro&nbsp;</span>',
  '<span class="bg_palabra c4">&nbsp;Incentro&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;Circuncentro&nbsp;</span>',
  '<span class="bg_palabra c1">&nbsp;Baricentro&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">"Medianas"</div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2">"Mediatrices"</div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2">"Alturas"</div></td></tr>',
  '<tr><td><div class="cajas imagen c4" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“Bisectrices”</div></td></tr>'
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
  containment: ".actividad10",
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

// #region Pregunta10
function pregunta10() {
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
  tpre10 = total;
  f_tiempo();
}
// #endregion

// #region Random11
var random11 = [
  [
    '<span>La</span><input type="text" size="1" style="width:100px" id="cj11d"><span>es la recta perpendicular trazada en el punto medio del lado.</span>'
  ],
  [
    '<span>La clasificación de los triángulos según sus</span><input type="text" size="1" style="width:100px" id="cj11a">'+
    '<span>puede ser en</span><input type="text" size="1" style="width:100px" id="cj11b"><span>, isósceles y escalenos.</span>'
  ],
  [
    '<span>La</span><input type="text" size="1" style="width:100px" id="cj11e"><span>recta que une el punto medio de un lado con el vértice opuesto.</span>'
  ],
  [
    '<span>La clasificación de los triángulos según sus ángulos puede ser en</span><input type="text" size="1" style="width:100px" id="cj11c">'+
  '<span>, obtusángulos y acutángulos.</span>'
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

  if (cj11a == "lados") {
    cor = cor + 1;
    $("#cj11a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11a").addClass("incorrecto");
  }

  if (cj11b == "equiláteros") {
    cor = cor + 1;
    $("#cj11b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11b").addClass("incorrecto");
  }

  if (cj11c == "rectángulos") {
    cor = cor + 1;
    $("#cj11c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11c").addClass("incorrecto");
  }

  if (cj11d == "mediatriz") {
    cor = cor + 1;
    $("#cj11d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11d").addClass("incorrecto");
  }

  if (cj11e == "mediana") {
    cor = cor + 1;
    $("#cj11e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11e").addClass("incorrecto");
  }


  var total = ((cor - inc) * 1) / 5;
  if (total < 0) {
    total = 0;
    tpre3 = total.toFixed(2);
  } else {
    tpre3 = total.toFixed(2);
  }
}
// #endregion

// #region Pregunta12
function pregunta12() {
  var cor = 0;
  var inc = 0;

  var cj12a = document.getElementById("cj12a").value;
  var cj12b = document.getElementById("cj12b").value;

  if (cj12a == "12") {
    cor = cor + 1;
    $("#cj12a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj12a").addClass("incorrecto");
  }

  if (cj12b == "16") {
    cor = cor + 1;
    $("#cj12b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj12b").addClass("incorrecto");
  }

  var total = ((cor - inc) * 1) / 2;
  if (total < 0) {
    total = 0;
    tpre12 = total.toFixed(2);
  } else {
    tpre12 = total.toFixed(2);
  }
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  var pre9a = document.getElementById("pre9a").value;
  if (pre1a == "" || pre9a == "" ) {
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
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
  }
}

// #endregion
