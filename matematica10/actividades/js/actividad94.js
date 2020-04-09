var titulos = "aplico";
numero_pagina(111);

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

document.getElementById("pre6a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre6a"), 1);
});

// #region Pregunta1
function pregunta1() {
  var pre1a = document.getElementById("pre1a").value;
  tpre1 = pre1a;
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
  [
    '<label>–2x – 4y = 6</label><table><td><table><tr><td></td></tr><tr><td><label>m= <label><input type="text" maxlength="1" size="1" style="width:15px" id="cj2c"></label></label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj2d"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj2e"></td></tr></table></td></table>'
  ],
  [
    '<label>–2x – y = 8</label><br><label>m=</label><input type="text" size="1" style="width:70px" id="cj2b">'
  ],
  [
    '<label>1,5x + 0,6y = 1,8</label><table><td><table><tr><td></td></tr><tr><td><label>m= <label><input type="text" maxlength="1" size="1" style="width:15px" id="cj2j"></label></label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj2k"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj2l"></td></tr></table></td></table>'
  ],
  [
    '<label>x - 1/3y = -6</label><br><label>m=</label><input type="text" size="1" style="width:70px" id="cj2i">'
  ],
  [
    '<label>–3x – 7y = 0</label><table><td><table><tr><td></td></tr><tr><td><label>m= <label><input type="text" maxlength="1" size="1" style="width:15px" id="cj2f"></label></label></td></tr><tr><td></td></tr></table></td><td><table><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj2g"></td></tr><tr><td class="numerador"></td></tr><tr><td><input type="text" maxlength="1" size="1" style="width:70px" id="cj2h"></td></tr></table></td></table>'
  ],
  [
    '<label>2x + y = 3</label><br><label>m=</label><input type="text" size="1" style="width:70px" id="cj2a">'
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
  var cj2h = document.getElementById("cj2h").value;
  var cj2i = document.getElementById("cj2i").value;
  var cj2j = document.getElementById("cj2j").value;
  var cj2k = document.getElementById("cj2k").value;
  var cj2l = document.getElementById("cj2l").value;

  if (cj2a == "-2") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }

  if (cj2b == "-2") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").addClass("incorrecto");
  }

  if (cj2c == "-") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").addClass("incorrecto");
  }

  if (cj2d == "1") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").addClass("incorrecto");
  }

  if (cj2e == "2") {
    cor = cor + 1;
    $("#cj2e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2e").addClass("incorrecto");
  }

  if (cj2f == "-") {
    cor = cor + 1;
    $("#cj2f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2f").addClass("incorrecto");
  }

  if (cj2g == "3") {
    cor = cor + 1;
    $("#cj2g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2g").addClass("incorrecto");
  }

  if (cj2h == "7") {
    cor = cor + 1;
    $("#cj2h").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2h").addClass("incorrecto");
  }

  if (cj2i == "3") {
    cor = cor + 1;
    $("#cj2i").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2i").addClass("incorrecto");
  }

  if (cj2j == "-") {
    cor = cor + 1;
    $("#cj2j").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2j").addClass("incorrecto");
  }

  if (cj2k == "5") {
    cor = cor + 1;
    $("#cj2k").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2k").addClass("incorrecto");
  }

  if (cj2l == "2") {
    cor = cor + 1;
    $("#cj2l").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2l").addClass("incorrecto");
  }
  var total = (cor * 1) / 12;
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
var ejer = 1,
  itemsT = 6,
  cont = 0,
  tmp,
  cor = 0,
  inc = 0,
  calificacion = 1,
  claseAnimada = "animate bounceIn";
var resp = [],
  i;

var pal1 = [
  '<span class="bg_palabra c5">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i7_p112_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c6 ">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i8_p112_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c1 ">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i9_p112_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c3">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i10_p112_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c2 ">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i11_p112_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c4">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i12_p112_act3.jpg">&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img class="img-responsive" src="img/i1_p112_act3.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img class="img-responsive" src="img/i2_p112_act3.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img class="img-responsive" src="img/i3_p112_act3.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c4" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img class="img-responsive" src="img/i4_p112_act3.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c5" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img class="img-responsive" src="img/i5_p112_act3.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c6" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img class="img-responsive" src="img/i6_p112_act3.jpg"></div></td></tr>'
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
    for (i = 1; i < 7; i++) {
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
function pregunta3() {
  cont++;
  $(this).unbind("click");
  AgregaClase(".nota", claseAnimada);
  QuitaClase(".actividad", claseAnimada);
  temp = $(".imagen");
  for (i = 0; i < resp.length; i++) {
    if (resp.length == 6 && resp[i] == "ok") {
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
  tpre3 = total;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
  [
    '<img class="img-responsive" src="img/i3_p112_act4.jpg"><br><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="x"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="+"><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2y"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="+"><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="10"><label>)=</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="0">'
  ],
  [
    '<img class="img-responsive" src="img/i2_p112_act4.jpg"><br><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="3x"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="-"><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="y"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="+"><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="6"><label>)=</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="0">'
  ],
  [
    '<img class="img-responsive" src="img/i4_p112_act4.jpg"><br><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="2x"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="+"><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="4y"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="-"><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="72"><label>)=</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="0">'
  ],
  [
    '<img class="img-responsive" src="img/i1_p112_act4.jpg"><br><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="4x"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="+"><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="y"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="-"><label>(</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="6"><label>)=</label><input type="text"  size="1" style="width:30px" class=" border-blue respuestas"><input type="hidden" style="color:blue" class="solucion" value="0">'
  ]
];
var rancinco = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancinco.length; i++) {
  $("#" + rancinco[i].id).html(
    '<span width="50px">' + random4[i][0] + "</span> "
  );
}
// #endregion

// #region Pregunta4
function pregunta4() {
  var respuestas = document.getElementsByClassName("respuestas");
  var soluciones = document.getElementsByClassName("solucion");
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

// #region Random5
var random5 = [
  [
    '<label>(–2, 3) y (0, −1)</label><br> <label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2x"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="+"><label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="y"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="+"><label>(</label><input  type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"><label>)=</label><input  type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">'
  ],
  [
    '<label>(–1, –1) y (–2, –2)</label><br> <label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="x"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-"><label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="y"><label>)=</label> <input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">'
  ],
  [
    '<label>(1, 2) y (4, 4)</label><br> <label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2x"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-"><label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3y"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="+"><label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"><label>)=</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">'
  ],
  [
    '<label>(1, 2) y (–3, 2)</label><br><label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="y"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="-"><label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input  type="hidden" style="color:blue" class="solucion1" value="2"><label>)=</label> <input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">'
  ],
  [
    '<label>(–3, 3) y (–3, 5)</label><br><label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input  type="hidden" style="color:blue" class="solucion1" value="x"><label>)</label><input type="text" maxlength="1" size="1" style="width:15px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="+"><label>(</label><input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"><label>)=</label> <input type="text" size="1" style="width:30px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0">'
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
  tpre5 = nota / 10;
  $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
function pregunta6() {
  var pre6a = document.getElementById("pre6a").value;
  tpre6 = pre6a;
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7
function pregunta7() {
  var pre7a = document.getElementById("pre7a").value;
  tpre7 = pre7a;
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre1a = document.getElementById("pre1a").value;
  if (pre1a == "") {
    alert("Pregunta 1: Califiqué la pregunta");
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
        var Nf =
          parseFloat(tpre1) +
          parseFloat(tpre2) +
          parseFloat(tpre3) +
          parseFloat(tpre4) +
          parseFloat(tpre5) +
          parseFloat(tpre6) +
          parseFloat(tpre7);

        var Vtotal = ((Nf*10)/7).toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}
// #endregion
