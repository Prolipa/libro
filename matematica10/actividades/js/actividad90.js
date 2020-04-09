var titulos = "prueba";
numero_pagina(100);

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

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre6a"), 1);
});

// #region Random1
var random1 = [
  [
    '<img class="img-responsive" src="img/i2_p100_act1.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj1c">'
  ],
  [
    '<img class="img-responsive" src="img/i3_p100_act1.jpg"><br><table><td><table><tr><td></td></tr><tr><td><label>x=</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:70px" id="cj1d"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:70px" id="cj1e"></td></tr></table></td></table>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p100_act1.jpg"><br><table><td><table><tr><td></td></tr><tr><td><label>x=</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" size="1" style="width:70px" id="cj1a"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:70px" id="cj1b"></td></tr></table></td></table>'
  ],
  [
    '<img class="img-responsive" src="img/i4_p100_act1.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj1f">'
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

  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj1d = document.getElementById("cj1d").value;
  var cj1e = document.getElementById("cj1e").value;
  var cj1f = document.getElementById("cj1f").value;

  if (cj1a == "20") {
    cor = cor + 1;
    $("#cj1a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1a").addClass("incorrecto");
  }

  if (cj1b == "3") {
    cor = cor + 1;
    $("#cj1b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1b").addClass("incorrecto");
  }

  if (cj1c == "2") {
    cor = cor + 1;
    $("#cj1c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1c").addClass("incorrecto");
  }

  if (cj1d == "5") {
    cor = cor + 1;
    $("#cj1d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1d").addClass("incorrecto");
  }

  if (cj1e == "4") {
    cor = cor + 1;
    $("#cj1e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1e").addClass("incorrecto");
  }

  if (cj1f == "11") {
    cor = cor + 1;
    $("#cj1f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj1f").addClass("incorrecto");
  }

  var total = (cor * 1) / 6;
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
  [
    '<table><td><img class="img-responsive" src="img/i2_p100_act2.jpg"></td><td><input type="text" size="1" style="width:70px" id="cj2c"></td></table>'
  ],
  [
    '<table><td><img class="img-responsive" src="img/i1_p100_act2.jpg"></td><td><table><tr><td><input type="text" size="1" style="width:70px" id="cj2a"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" style="width:70px" id="cj2b"></td></tr></table></td></table>'
  ],
  [
    '<table><td><img class="img-responsive" src="img/i3_p100_act2.jpg"></td><td><input type="text" size="1" style="width:70px" id="cj2d"></td></table>'
  ],
  [
    '<table><td><img class="img-responsive" src="img/i4_p100_act2.jpg"></td><td><label>|<input type="text" size="1" style="width:70px" id="cj2e">|</label></td></table>'
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

  if (cj2a == "1") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }

  if (cj2b == "x+3" || cj2b == "x + 3" || cj2b == "x+ 3" || cj2b == "x +3") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").addClass("incorrecto");
  }

  if (cj2c == "-1" || cj2c == "- 1") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").addClass("incorrecto");
  }

  if (cj2d == "1-w" || cj2d == "1 - w" || cj2d == "1 -w" || cj2d == "1- w") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").addClass("incorrecto");
  }

  if (
    cj2e == "1000-g" ||
    cj2e == "1000 - g" ||
    cj2e == "1000 -g" ||
    cj2e == "1000- g"
  ) {
    cor = cor + 1;
    $("#cj2e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2e").addClass("incorrecto");
  }

  var total = (cor * 1) / 5;
  if (total < 0) {
    total = 0;
    tpre2 = total.toFixed(2);
  } else {
    tpre2 = total.toFixed(2);
  }
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
  [
    '<img class="img-responsive" src="img/i4_p100_act3.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj3d">'
  ],
  [
    '<img class="img-responsive" src="img/i3_p100_act3.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj3c">'
  ],
  [
    '<img class="img-responsive" src="img/i1_p100_act3.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj3a">'
  ],
  [
    '<img class="img-responsive" src="img/i2_p100_act3.jpg"><br><label>x=</label><input type="text" size="1" style="width:70px" id="cj3b">'
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

  if (cj3a == "4") {
    cor = cor + 1;
    $("#cj3a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3a").addClass("incorrecto");
  }

  if (cj3b == "-2") {
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

  if (cj3d == "-5") {
    cor = cor + 1;
    $("#cj3d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj3d").addClass("incorrecto");
  }

  var total = (cor * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre3 = total.toFixed(2);
  } else {
    tpre3 = total.toFixed(2);
  }
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
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
  '<span class="bg_palabra c3">&nbsp;x = –1&nbsp;</span>',
  '<span class="bg_palabra c4">&nbsp;x = 2&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;x = –2&nbsp;</span>',
  '<span class="bg_palabra c1">&nbsp;x = 3&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">f ( x )= 4</div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2">f ( x )=−11</div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">f ( x )=−8</div></td></tr>',
  '<tr><td><div class="cajas imagen c4" id="caja_img4"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt4">f ( x )=1</div></td></tr>'
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

// #region Pregunta4
function pregunta4() {
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
  tpre4 = total;
  f_tiempo();
  $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Random5
var random5 = [
  [
    '<div class="text-question"><span>la semisuma de un número y su triple.</span> <input type="text" size="1" style="width:150px" id="cj5d"></div>'
  ],
  [
    '<div class="text-question"><span>lo que le falta a un número para llegar a ser setenta.</span> <input type="text" size="1" style="width:150px" id="cj5c"></div>'
  ],
  [
    '<div class="text-question"><span>el producto entre la mitad de un número y su consecutivo par.</span> <input type="text" size="1" style="width:150px" id="cj5f"></div>'
  ],
  [
    '<div class="text-question"><span>un número aumentado en cinco.</span> <input type="text" size="1" style="width:150px" id="cj5a"></div>'
  ],
  [
    ' <div class="text-question"><span>el cociente entre el cubo de un número y el doble del mismo número.</span><input type="text" size="1" style="width:150px" id="cj5g"></div>'
  ],
  [
    '<div class="text-question"><span>la semidiferencia entre el doble de un número y el tres.</span> <input type="text" size="1" style="width:150px" id="cj5e"></div>'
  ],
  [
    '<div class="text-question"><span>la suma de dos números diferentes y el veinte.</span> <input type="text" size="1" style="width:150px" id="cj5b"></div>'
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
  var pre5a = document.getElementById("pre5a").value;
  tpre5 = pre5a;
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}

// #region Pregunta6
function pregunta6() {
  var pre6a = document.getElementById("pre6a").value;
  tpre6 = pre6a;
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7
function pregunta7() {
  var cor = 0;
  var inc = 0;

  var cj7a = document.getElementById("cj7a").value;
  var cj7b = document.getElementById("cj7b").value;

  if (cj7a == "1"||cj7a == " 1"||cj7a == "  1") {
    cor = cor + 1;
    $("#cj7a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj7a").addClass("incorrecto");
  }

  if (cj7b == "4"||cj7b == " 4"||cj7b == "  4") {
    cor = cor + 1;
    $("#cj7b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj7b").addClass("incorrecto");
  }

  var total = (cor * 1) / 2;
  if (total < 0) {
    total = 0;
    tpre7 = total.toFixed(2);
  } else {
    tpre7 = total.toFixed(2);
  }
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Random8
var random8 = [
  [
    '<div class="text-question"><span>¿Los ángulos A, B y C pueden formar un triángulo?</span> <input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8c"></div><br>'
  ],
  [
    '<div class="text-question"><span>A + B + C = 161º 1’ 37’’</span> <input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8a"></div><br>'
  ],
  [
    '<div class="text-question"><span>Los ángulos B y C son ángulos agudos.</span> <input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8d"></div><br>'
  ],
  [
    '<div class="text-question"><span>B – C = 18º 50’ 23’’</span> <input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8b"></div><br>'
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
  var cor = 0;
  var inc = 0;

  var cj8a = document.getElementById("cj8a").value;
  var cj8b = document.getElementById("cj8b").value;
  var cj8c = document.getElementById("cj8c").value;
  var cj8d = document.getElementById("cj8d").value;

  if (cj8a == "F"||cj8a == "f") {
    cor = cor + 1;
    $("#cj8a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8a").addClass("incorrecto");
  }

  if (cj8b == "V"||cj8b == "v") {
    cor = cor + 1;
    $("#cj8b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8b").addClass("incorrecto");
  }

  if (cj8c == "F"||cj8c == "f") {
    cor = cor + 1;
    $("#cj8c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8c").addClass("incorrecto");
  }

  if (cj8d == "V"||cj8d == "v") {
    cor = cor + 1;
    $("#cj8d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8d").addClass("incorrecto");
  }

  var total = (cor * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre8 = total.toFixed(2);
  } else {
    tpre8 = total.toFixed(2);
  }
  $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Random9
var random9 = [
  [
    '<div class="text-question"><span>El triángulo rectángulo posee un/a (<span class="enc9" id="10">cateto</span>, <span class="enc9" id="11">hipotenusa</span>) y dos (<span class="enc9" id="12">catetos</span>, <span class="enc9" id="13">hipotenusas</span>).</span></div>'
  ],
  [
    '<div class="text-question"><span>El triángulo (<span class="enc9" id="1">equilátero</span>, <span class="enc9" id="2">rectángulo</span>, <span class="enc9" id="3">escaleno</span>) tiene un ángulo recto.</span></div>'
  ],
  [
    '<div class="text-question"><span>Los ángulos (<span class="enc9" id="4">rectos</span>, <span class="enc9" id="5">agudos</span>, <span class="enc9" id="6">obtusos</span>) son aquellos que miden más de 90°, pero menos de 180°.</span></div>'
  ],
  [
    '<div class="text-question"><span>El triángulo rectángulo isósceles posee (<span class="enc9" id="7">uno</span>,<span class="enc9" id="8">dos</span>, <span class="enc9" id="9">tres</span>) lados iguales.</span></div>'
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
  for (var i = 1; i <= 13; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "rectángulo"||caja == "obtusos"||caja == "dos"||caja == "hipotenusa"||caja == "catetos"
      ) {
        respr1 = respr1 + 1;

        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;

        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }

  var total = ((respr1 - respr2) * 1) / 5;
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

// #region Pregunta10
function pregunta10() {
  var cor = 0;
  var inc = 0;

  var cj10a = document.getElementById("cj10a").value;

  if (cj10a == "23"||cj10a == " 23"||cj10a == "  23") {
    cor = cor + 1;
    $("#cj10a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj10a").addClass("incorrecto");
  }

  var total = (cor * 1) / 1;
  if (total < 0) {
    total = 0;
    tpre10 = total.toFixed(2);
  } else {
    tpre10 = total.toFixed(2);
  }
  $("#pre10a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Pregunta11
function pregunta11() {
  var cor = 0;
  var inc = 0;

  var cj11a = document.getElementById("cj11a").value;
  var cj11b = document.getElementById("cj11b").value;

  if (cj11a == "1"||cj11a == " 1"||cj11a == "  1") {
    cor = cor + 1;
    $("#cj11a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11a").addClass("incorrecto");
  }

  if (cj11b == "2"||cj11b == " 2"||cj11b == "  2") {
    cor = cor + 1;
    $("#cj11b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj11b").addClass("incorrecto");
  }

  var total = (cor * 1) / 2;
  if (total < 0) {
    total = 0;
    tpre11 = total.toFixed(2);
  } else {
    tpre11 = total.toFixed(2);
  }
  $("#pre11a").val(parseFloat(tpre11).toFixed(2));
}
// #endregion

// #region Random12

// #endregion

// #region Pregunta12
function pregunta12() {
  var cor = 0;
  var inc = 0;

  var cj12a = document.getElementById("cj12a").value;
  var cj12b = document.getElementById("cj12b").value;
  var cj12c = document.getElementById("cj12c").value;

  if (cj12a == "5"||cj12a == " 5"||cj12a == "  5") {
    cor = cor + 1;
    $("#cj12a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj12a").addClass("incorrecto");
  }

  if (cj12b == "6,32"||cj12b == " 6,32"||cj12b == "  6,32") {
    cor = cor + 1;
    $("#cj12b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj12b").addClass("incorrecto");
  }

  if (cj12c == "6"||cj12c == " 6"||cj12c == "  6") {
    cor = cor + 1;
    $("#cj12c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj12c").addClass("incorrecto");
  }

  var total = (cor * 1) / 3;
  if (total < 0) {
    total = 0;
    tpre12 = total.toFixed(2);
  } else {
    tpre12 = total.toFixed(2);
  }
  $("#pre12a").val(parseFloat(tpre12).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre5a = document.getElementById("pre5a").value;
  if (pre5a == "") {
    alert("Pregunta 5: Califiqué la pregunta");
  } else {
    var pre6a = document.getElementById("pre6a").value;
    if (pre6a == "") {
      alert("Pregunta 6: Califiqué la pregunta");
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
        parseFloat(tpre12);

      var Vtotal = ((Nf*10)/12).toFixed(2);
      $("#txtNota").html(Vtotal);
      document.getElementById("bt_comprobar").disabled = true;
    }
  }
}
// #endregion
