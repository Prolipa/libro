var titulos = "evaluacion";
numero_pagina(97);

document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre4a"), 2);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre5a"), 1.5);
});
var tpre1a = 0;
var tpre1b = 0;
var tpre1c = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;



// #region Random1
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
  '<span class="bg_palabra c3">&nbsp;Rf: [ 0, 3]&nbsp;</span>',
  '<span class="bg_palabra c1 ">&nbsp;Df: ℝ&nbsp;</span>',
  '<span class="bg_palabra c2 ">&nbsp;Df: ℝ&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;Rf: ℝ&nbsp;</span>',
  '<span class="bg_palabra c3">&nbsp;Df: [ − 3, 3]&nbsp;</span>', 
  '<span class="bg_palabra c1">&nbsp;Rf: (− ∞, 3]&nbsp;</span>', 
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img src="img/i1_p96_act1.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img src="img/i2_p96_act1.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1"><img src="img/i3_p96_act1.jpg"></div></td></tr>',
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

// #region Pregunta1
function pregunta1() {
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
  tpre1 = total*2;

  $("#pre1a").val(parseFloat(tpre1).toFixed(2));

  f_tiempo();
}
// #endregion

// #region Random2
var random2 = [
  [
    '<span>Una función es constante cuando el valor de f(x) </span><select  id="cbodosc"><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">decreciente</option><option value="4">no cambia</option></select><span>mientras el valor de x aumenta.</span>'
  ],
  [
    '<span>Una función </span><select  id="cbodosa"><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">decreciente</option><option value="4">no cambia</option></select><span> aumenta su valor de f(x) conforme aumenta x.</span>'
  ],
  [
    '<span>Una función estrictamente </span><select  id="cbodosb"><option value="1">Seleccione</option><option value="2">creciente</option><option value="3">decreciente</option><option value="4">no cambia</option></select><span>disminuye su valor de f(x) conforme aumenta su valor de x, en todo su dominio.</span>'
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

  var cbodosa = document.getElementById("cbodosa").value;
  var cbodosb = document.getElementById("cbodosb").value;
  var cbodosc = document.getElementById("cbodosc").value;

  if (cbodosa == "2") {
    cor = cor + 1;
    $("#cbodosa").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosa").removeClass("correcto");
    $("#cbodosa").addClass("incorrecto");
  }
  if (cbodosb == "3") {
    cor = cor + 1;
    $("#cbodosb").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosb").removeClass("correcto");
    $("#cbodosb").addClass("incorrecto");
  }
  if (cbodosc == "4") {
    cor = cor + 1;
    $("#cbodosc").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cbodosc").removeClass("correcto");
    $("#cbodosc").addClass("incorrecto");
  }

  var total = (cor * 1) / 3;
  if (total < 0) {
    total = 0;
    tpre2 = total.toFixed(2);
  } else {
    tpre2 = total.toFixed(2);
  }
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;
  tpre3 = pre3a;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
  [
    '<label>El intervalo de crecimiento es: </label><input type="text" size="1" style="width:100px">'
  ],
  [
    '<label>El intervalo donde la función es constante es: </label><input type="text" size="1" style="width:100px">'
  ],
  [
    '<label>El dominio de la función es: </label><input type="text" size="1" style="width:100px">'
  ],
  [
    '<label>El intervalo de decrecimiento es: </label><input type="text" size="1" style="width:100px">'
  ],
  [
    '<label>El recorrido es: </label><input type="text" size="1" style="width:100px">'
  ]
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
  $("#" + rancuatro[i].id).html(
    '<span width="50px">' + random4[i][0] + "</span> "
  );
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
    '<img class="img-responsive" src="img/i2_p97_act5.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="100" rows="3"></textarea>'
  ],
  [
    '<img class="img-responsive" src="img/i1_p97_act5.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="100" rows="3"></textarea>'
  ],
  [
    '<img class="img-responsive" src="img/i3_p97_act5.jpg"><br><textarea class="form-control text-question no-redimensionar " cols="100" rows="3"></textarea>'
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
// #endregion

// #region Pregunta6
function pregunta6() {
  var cor = 0;
  var inc = 0;

  var cj6a = document.getElementById("cj6a").value;

  if (cj6a == "16" ) {
    cor = cor + 1;
    $("#cj6a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj6a").addClass("incorrecto");
  }

  var total = (cor * 1.5) / 1;
  if (total < 0) {
    total = 0;
    tpre6 = total.toFixed(2);
  } else {
    tpre6 = total.toFixed(2);
  }
  $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7
function pregunta7() {
  var cor = 0;
  var inc = 0;

  var cj7a = document.getElementById("cj7a").value;

  if (cj7a == "5,63" ) {
    cor = cor + 1;
    $("#cj7a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj7a").addClass("incorrecto");
  }

  var total = (cor * 1) / 1;
  if (total < 0) {
    total = 0;
    tpre7 = total.toFixed(2);
  } else {
    tpre7 = total.toFixed(2);
  }
  $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Pregunta8

// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var cbodosa = document.getElementById("cbodosa").value;
  var cbodosb = document.getElementById("cbodosb").value;
  var cbodosc = document.getElementById("cbodosc").value;
  if (cbodosa == "1" || cbodosb == "1" || cbodosc == "1") {
    alert("Pregunta 2: Seleccione todas las respuestas posibles");
  } else {
    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
      alert("Pregunta 3: Califiqué la pregunta");
    } else {
      var pre4a = document.getElementById("pre4a").value;
      if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
      } else {
        var pre5a = document.getElementById("pre5a").value;
      if (pre5a == "") {
        alert("Pregunta 5: Califiqué la pregunta");
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
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
}
 }

// #endregion
