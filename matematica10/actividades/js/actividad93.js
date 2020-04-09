var titulos = "aplico";
numero_pagina(108);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;

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
  validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 1);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre6a"), 1);
});

document.getElementById("pre7a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre7a"), 1);
});

// #region Pregunta1
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
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

// #region Random3
var ejer = 1,
  itemsT = 4,
  cont = 0,
  tmp,
  cor = 0,
  inc = 0,
  calificacion = 1,
  claseAnimada = "animate bounceIn";
var resp = [],
  i;

var pal1 = [
  '<span class="bg_palabra c3">&nbsp;y = −3x − 5&nbsp;</span>',
  '<span class="bg_palabra c2 ">&nbsp;y = 3x + 3&nbsp;</span>',
  '<span class="bg_palabra c4 ">&nbsp;2y = 3x − 6&nbsp;</span>',
  '<span class="bg_palabra c1">&nbsp;3y − 3x − 5 = 0&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">1</div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">3</div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">-3</div></td></tr>',
  '<tr><td><div class="cajas imagen c4" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">3/2</div></td></tr>',
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

// #region Pregunta3
function pregunta3() 
{
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
  f_tiempo();
  tpre3=total;
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

// #region Random5
var random5 = [
  [
    '<label>(6, 1) y (3, −1)</label><table><td><table><tr><td></td></tr><tr><td><label>m=</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj5c"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" size="1" maxlength="1" style="width:70px" id="cj5d"></td></tr></table></td></table>'
  ],
  [
    '<label>(−1, −2) y (−5, −8)</label><table><td><table><tr><td></td></tr><tr><td><label>m=</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj5f"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj5g"></td></tr></table></td></table>'
  ],
  [
    '<label>(2, 1) y (4, 2)</label><table><td><table><tr><td></td></tr><tr><td><label>m=</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj5a"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj5b"></td></tr></table></td></table>'
  ],
  [
    '<label>(−2, 3) y ( 3, −4)</label><br><label>m=</label><input type="text" size="1" maxlength="1" style="width:70px" id="cj5e">'
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

  if (cj5a == "1") {
    cor = cor + 1;
    $("#cj5a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5a").addClass("incorrecto");
  }

  if (cj5b == "2") {
    cor = cor + 1;
    $("#cj5b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5b").addClass("incorrecto");
  }

  if (cj5c == "2") {
    cor = cor + 1;
    $("#cj5c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5c").addClass("incorrecto");
  }

  if (cj5d == "3") {
    cor = cor + 1;
    $("#cj5d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5d").addClass("incorrecto");
  }

  if (cj5e == "7") {
    cor = cor + 1;
    $("#cj5e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5e").addClass("incorrecto");
  }

  if (cj5f == "3") {
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

  var total = (cor * 1) / 7;
  if (total < 0) {
    total = 0;
    tpre5 = total.toFixed(2);
  } else {
    tpre5 = total.toFixed(2);
  }
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Random6
var random6 = [
  [
    '<img class="img-responsive" src="img/i2_p108_act6.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="60" rows="4" placeholder="Texto"></textarea>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p108_act6.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="60" rows="4" placeholder="Texto"></textarea>'
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
  var pre6a = document.getElementById("pre6a").value;
  tpre6 = pre6a;
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Random7
var random7 = [
  [
    '<label>(−2, −5) y ( −2, 10)</label><textarea class="form-control text-question no-redimensionar " cols="60" rows="4" placeholder="Texto"></textarea>'
  ],
  [
    '<label>(2, 3) y (4, 3)</label><textarea class="form-control text-question no-redimensionar " cols="60" rows="4" placeholder="Texto"></textarea>'
  ]
];
var ransiete = document.getElementsByClassName("imagen7");
random7.sort(f_randomico);
for (i = 0; i < ransiete.length; i++) {
  $("#" + ransiete[i].id).html(
    '<span width="50px">' + random7[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta7
function pregunta7() {
  var pre7a = document.getElementById("pre7a").value;
  tpre7 = pre7a;
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Random8
var random8 = [
  [
    '<span>Una recta horizontal tiene pendiente igual a cero.</span>&nbsp;<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8d">'
  ],
  [
    '<span>Una recta L1 es paralela a otra recta L2 si el producto de sus pendientes es – 1.</span>&nbsp; <input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8f">'
  ],
  [
    '<span>La pendiente no está definida en una recta vertical.</span>&nbsp;<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8b">'
  ],
  [
    '<span>Una recta L1 es perpendicular a otra recta L2 si sus pendientes son iguales.</span>&nbsp;<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8g">'
  ],
  [
    '<span>La recta que forma un ángulo de 30° con el eje de las abscisas posee una pendiente negativa.</span>&nbsp;<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8a">'
  ],
  [
    '<span>La recta tiene pendiente negativa si el ángulo es que forma con el eje de las x es agudo.</span>&nbsp;<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8c">'
  ],
  [
    '<span>Si la pendiente forma un ángulo de 180º con la horizontal, se puede afirmar que la recta es vertical.</span>&nbsp;<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)" id="cj8e">'
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
  var cj8e = document.getElementById("cj8e").value;
  var cj8f = document.getElementById("cj8f").value;
  var cj8g = document.getElementById("cj8g").value;

  if (cj8a == "F" || cj8a == "f") {
    cor = cor + 1;
    $("#cj8a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8a").addClass("incorrecto");
  }

  if (cj8b == "V" || cj8b == "v") {
    cor = cor + 1;
    $("#cj8b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8b").addClass("incorrecto");
  }

  if (cj8c == "F" || cj8c == "f") {
    cor = cor + 1;
    $("#cj8c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8c").addClass("incorrecto");
  }

  if (cj8d == "V" || cj8d == "v") {
    cor = cor + 1;
    $("#cj8d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8d").addClass("incorrecto");
  }

  if (cj8e == "F" || cj8e == "f") {
    cor = cor + 1;
    $("#cj8e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8e").addClass("incorrecto");
  }

  if (cj8f == "F" || cj8f == "f") {
    cor = cor + 1;
    $("#cj8f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8f").addClass("incorrecto");
  }

  if (cj8g == "F" || cj8g == "f") {
    cor = cor + 1;
    $("#cj8g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj8g").addClass("incorrecto");
  }
  var total = (cor * 2) / 7;
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
    ['<img class="img-responsive" src="img/i1_p108_act9.jpg"><br><table><td><table><tr><td></td></tr><tr><td><label>TMV =</label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj9a"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj9b"></td></tr></table></td></table>'
    ],
    ['<img class="img-responsive" src="img/i2_p108_act9.jpg"><br><label>TMV =</label><input type="text" maxlength="1" size="1" style="width:70px" id="cj9c">'
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
  var cor = 0;
  var inc = 0;

  var cj9a = document.getElementById("cj9a").value;
  var cj9b = document.getElementById("cj9b").value;
  var cj9c = document.getElementById("cj9c").value;

  if (cj9a == "4") {
    cor = cor + 1;
    $("#cj9a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj9a").addClass("incorrecto");
  }

  if (cj9b == "3") {
    cor = cor + 1;
    $("#cj9b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj9b").addClass("incorrecto");
  }

  if (cj9c == "1") {
    cor = cor + 1;
    $("#cj9c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj9c").addClass("incorrecto");
  }

  var total = (cor * 1) / 3;
  if (total < 0) {
    total = 0;
    tpre9 = total.toFixed(2);
  } else {
    tpre9 = total.toFixed(2);
  }
  $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
  } else {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
      alert("Pregunta 2: Califiqué la pregunta");
    } else {
      var pre4a = document.getElementById("pre4a").value;
      if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
      } else {
        var pre6a = document.getElementById("pre6a").value;
        if (pre6a == "") {
          alert("Pregunta 6: Califiqué la pregunta");
        } else {
          var pre7a = document.getElementById("pre7a").value;
          if (pre7a == "") {
            alert("Pregunta 7: Califiqué la pregunta");
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
            var Nf =
              parseFloat(tpre1) +
              parseFloat(tpre2) +
              parseFloat(tpre3) +
              parseFloat(tpre4) +
              parseFloat(tpre5) +
              parseFloat(tpre6) +
              parseFloat(tpre7) +
              parseFloat(tpre8) +
              parseFloat(tpre9);

            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
          }
        }
      }
    }
  }
}

// #endregion
