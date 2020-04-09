var titulos = "refuerzo";
numero_pagina(38);

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
  itemsT = 5,
  cont = 0,
  tmp,
  cor = 0,
  inc = 0,
  calificacion = 10,
  claseAnimada = "animate bounceIn";
var resp = [],
  i;

var pal1 = [
  '<span class="bg_palabra c1">&nbsp;-0,25&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;3,14&nbsp;</span>',
  '<span class="bg_palabra c3">&nbsp;π&nbsp;</span>',
  '<span class="bg_palabra c4">&nbsp;2,<label class="periodo">66</label>&nbsp;</span>',
  '<span class="bg_palabra c5">&nbsp;-5&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">"- (1/4)"</div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2"><img src="img/i1_p38_act1.jpg"></div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“3,141592654…”</div></td></tr>',
  '<tr><td><div class="cajas imagen c4" id="caja_img4"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt4"><img src="img/i2_p38_act1.jpg"></div></td></tr>',
  ,
  '<tr><td><div class="cajas imagen c5" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“-(5/1)”</div></td></tr>'
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
    for (i = 1; i < 6; i++) {
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
    if (resp.length == 5 && resp[i] == "ok") {
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
    "<td ><label>log(5)</label></td>" +
      '<td ><input type="text" maxlength="1"  style="width:40px" id=cj1a onkeypress="return validarN(event)"></td>' +
      '<td ><input type="text" maxlength="1" style="width:40px" id=cj1b onkeypress="return validarN(event)"></td>' +
      '<td ><input type="text" maxlength="1" style="width:40px" id=cj1c onkeypress="return validarN(event)"></td>'
  ],
  [
    "<td><label><sup>3</sup>√(4)</label> </td>" +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj2a onkeypress="return validarN(event)"></td>' +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj2b onkeypress="return validarN(event)" onkeypress="return validarN(event)"></td>' +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj2c onkeypress="return validarN(event)"></td>'
  ],
  [
    "<td><label>0,111…</label></td>" +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj3a onkeypress="return validarN(event)"></td>' +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj3b onkeypress="return validarN(event)"> </td>' +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj3c onkeypress="return validarN(event)"></td>'
  ],
  [
    "    <td><label>log(1)</label></td>" +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj4a onkeypress="return validarN(event)"></td>' +
      '<td><input type="text"  maxlength="1" style="width:40px" id=cj4b onkeypress="return validarN(event)"></td>' +
      '<td><input type="text"  maxlength="1" style="width:40px" id=cj4c onkeypress="return validarN(event)"></td>'
  ],
  [
    "  <td><label>e</label></td>" +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj5a onkeypress="return validarN(event)"></td>' +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj5b onkeypress="return validarN(event)"></td>' +
      '<td><input type="text" maxlength="1"  style="width:40px" id=cj5c onkeypress="return validarN(event)"></td>'
  ]
];

var sumaNum = document.getElementsByClassName("imagent");
random2.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {
  $("#" + sumaNum[i].id).html(
    '<span width="50px">' + random2[i][0] + "</span> "
  );
}
// #endregion
// #region Pregunta2

function pregunta2() {
  var cor = 0;
  var inc = 0;
  var cj1a = document.getElementById("cj1a").value;
  var cj1b = document.getElementById("cj1b").value;
  var cj1c = document.getElementById("cj1c").value;
  var cj2a = document.getElementById("cj2a").value;
  var cj2b = document.getElementById("cj2b").value;
  var cj2c = document.getElementById("cj2c").value;
  var cj3a = document.getElementById("cj3a").value;
  var cj3b = document.getElementById("cj3b").value;
  var cj3c = document.getElementById("cj3c").value;
  var cj4a = document.getElementById("cj4a").value;
  var cj4b = document.getElementById("cj4b").value;
  var cj4c = document.getElementById("cj4c").value;
  var cj5a = document.getElementById("cj5a").value;
  var cj5b = document.getElementById("cj5b").value;
  var cj5c = document.getElementById("cj5c").value;

  if (cj1a == "X" && cj1b == "X" && cj1c == "X") {
    inc = inc + 1;
    $("#cj1a").addClass("incorrecto");
    $("#cj1b").addClass("incorrecto");
    $("#cj1c").addClass("incorrecto");
  } else {
    if (cj1a == "X" && cj1b == "X") {
      inc = inc + 1;
      $("#cj1a").addClass("incorrecto");
      $("#cj1b").addClass("incorrecto");
    } else {
      if (cj1b == "X" && cj1c == "X") {
        inc = inc + 1;
        $("#cj1b").addClass("incorrecto");
        $("#cj1c").addClass("incorrecto");
      } else {
        if (cj1a == "X" && cj1c == "X") {
          inc = inc + 1;
          $("#cj1a").addClass("incorrecto");
          $("#cj1c").addClass("incorrecto");
        } else {
          if (cj1a != "") {
            inc = inc + 1;
            $("#cj1a").addClass("incorrecto");
          } else {
            if (cj1b == "X") {
              cor = cor + 1;
              $("#cj1b").addClass("correcto");
            } else {
              if (cj1c != "") {
                inc = inc + 1;
                $("#cj1c").addClass("incorrecto");
              } else {
              }
            }
          }
        }
      }
    }
  }

  if (cj2a == "X" && cj2b == "X" && cj2c == "X") {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
    $("#cj2b").addClass("incorrecto");
    $("#cj2c").addClass("incorrecto");
  } else {
    if (cj2b == "X" && cj2c == "X") {
      inc = inc + 1;
      $("#cj2b").addClass("incorrecto");
      $("#cj2c").addClass("incorrecto");
    } else {
      if (cj2a == "X" && cj2c == "X") {
        inc = inc + 1;
        $("#cj2a").addClass("incorrecto");
        $("#cj2c").addClass("incorrecto");
      } else {
        if (cj2a == "X" && cj2b == "X") {
          inc = inc + 1;
          $("#cj2a").addClass("incorrecto");
          $("#cj2b").addClass("incorrecto");
        } else {
          if (cj2a != "") {
            inc = inc + 1;
            $("#cj2a").addClass("incorrecto");
          } else {
            if (cj2b != "") {
              inc = inc + 1;
              $("#cj2b").addClass("incorrecto");
            } else {
              if (cj2c == "X") {
                cor = cor + 1;
                $("#cj2c").addClass("correcto");
              } else {
              }
            }
          }
        }
      }
    }
  }
  if (cj3a == "X" && cj3b == "X" && cj3c == "X") {
    inc = inc + 1;
    $("#cj3a").addClass("incorrecto");
    $("#cj3b").addClass("incorrecto");
    $("#cj3c").addClass("incorrecto");
  } else {
    if (cj3b == "X" && cj3c == "X") {
      inc = inc + 1;
      $("#cj3b").addClass("incorrecto");
      $("#cj3c").addClass("incorrecto");
    } else {
      if (cj3a == "X" && cj3c == "X") {
        inc = inc + 1;
        $("#cj3a").addClass("incorrecto");
        $("#cj3c").addClass("incorrecto");
      } else {
        if (cj3a == "X" && cj3b == "X") {
          inc = inc + 1;
          $("#cj3a").addClass("incorrecto");
          $("#cj3b").addClass("incorrecto");
        } else {
          if (cj3a == "X") {
            cor = cor + 1;
            $("#cj3a").addClass("correcto");
          } else {
            if (cj3b != "") {
              inc = inc + 1;
              $("#cj3b").addClass("incorrecto");
            } else {
              if (cj3c != "") {
                inc = inc + 1;
                $("#cj3c").addClass("incorrecto");
              } else {
              }
            }
          }
        }
      }
    }
  }
  if (cj4a == "X" && cj4b == "X" && cj4c == "X") {
    inc = inc + 1;
    $("#cj4a").addClass("incorrecto");
    $("#cj4b").addClass("incorrecto");
    $("#cj4c").addClass("incorrecto");
  } else {
    if (cj4b == "X" && cj4c == "X") {
      inc = inc + 1;
      $("#cj4b").addClass("incorrecto");
      $("#cj4c").addClass("incorrecto");
    } else {
      if (cj4a == "X" && cj4c == "X") {
        inc = inc + 1;
        $("#cj4a").addClass("incorrecto");
        $("#cj4c").addClass("incorrecto");
      } else {
        if (cj4a == "X" && cj4b == "X") {
          inc = inc + 1;
          $("#cj4a").addClass("incorrecto");
          $("#cj4b").addClass("incorrecto");
        } else {
          if (cj4a == "X") {
            cor = cor + 1;
            $("#cj4a").addClass("correcto");
          } else {
            if (cj4b != "") {
              inc = inc + 1;
              $("#cj4b").addClass("incorrecto");
            } else {
              if (cj4c != "") {
                inc = inc + 1;
                $("#cj4c").addClass("incorrecto");
              } else {
              }
            }
          }
        }
      }
    }
  }
  if (cj5a == "X" && cj5b == "X" && cj5c == "X") {
    inc = inc + 1;
    $("#cj5a").addClass("incorrecto");
    $("#cj5b").addClass("incorrecto");
    $("#cj5c").addClass("incorrecto");
  } else {
    if (cj5b == "X" && cj5c == "X") {
      inc = inc + 1;
      $("#cj5b").addClass("incorrecto");
      $("#cj5c").addClass("incorrecto");
    } else {
      if (cj5a == "X" && cj5c == "X") {
        inc = inc + 1;
        $("#cj5a").addClass("incorrecto");
        $("#cj5c").addClass("incorrecto");
      } else {
        if (cj5a == "X" && cj5b == "X") {
          inc = inc + 1;
          $("#cj5a").addClass("incorrecto");
          $("#cj5b").addClass("incorrecto");
        } else {
          if (cj5a != "") {
            inc = inc + 1;
            $("#cj5a").addClass("incorrecto");
          } else {
            if (cj5b == "X") {
              cor = cor + 1;
              $("#cj5b").addClass("correcto");
            } else {
              if (cj5c != "") {
                inc = inc + 1;
                $("#cj5c").addClass("incorrecto");
              } else {
              }
            }
          }
        }
      }
    }
  }

  var NotaF = cor / 5;
  tpre2 = NotaF;
}
// #endregion
// #region Random3
var random3 = [
  [
    "<span><label>Los números irracionales trascendentales se obtienen de funciones trascendentales.</label>" +
      '<input type="text" maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
  ],
  [
    '<span><label>Los números racionales se dividen en trascendentales y algebraicos.</label><input type="text"' +
      'maxlength="1" size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
  ],
  [
    '<span><label>Toda expresión radical es un número irracional.</label><input type="text" maxlength="1" size="1"' +
      'style="width:50px" onkeypress="return validar3(event)"></span><textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
  ],
  [
    '<span><label>Dos ejemplos de números irracionales algebraicos son √3 y √2 .</label><input type="text" maxlength="1"' +
      'size="1" style="width:50px" onkeypress="return validar3(event)"></span><textarea class="form-control text-question no-redimensionar " cols="60" rows="1"></textarea>'
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
  if (pre3a == "") {
    tpre3 = 0;  
  } else {
    if (pre3a > 1) {
        tpre3 = 0;  
    } else {
      tpre3 = pre3a;
    }
  }
}
// #endregion
// #region Random4
var random4 = [
  [
    "<label><span>El número irracional 3,1459 tiene un valor aproximado por redondeo a enteros de </span><span" +
      'style="color:rgb(0, 81, 255)" class="enc1" id="10">3</span>,<span>a décimas de </span><span style="color:rgb(0, 81, 255)" class="enc1" id="11">3,1</span>, a centésimas' +
      'de <span style="color:rgb(0, 81, 255)" class="enc1" id="12">3,14</span><span>' +
      'y a milésimas de </span><span style="color:rgb(0, 81, 255)" class="enc1" id="13">3,142</span>.</label>'
  ],
  [
    '<label><span>El número 4,145 aproximado por truncamiento a centésimas es (</span><span style="color:rgb(0, 81, 255)"' +
      'class="enc1" id="1">4,15</span>/ <span style="color:rgb(0, 81, 255)" class="enc1" id="2">4,14</span>/<span style="color:rgb(0, 81, 255)"' +
      'class="enc1" id="3">4,13</span><span>) y difiere en ( </span><span style="color:rgb(0, 81, 255)" class="enc1"' +
      'id="4">0,01</span>/<span style="color:rgb(0, 81, 255)" class="enc1" id="5">0,1</span> /<span style="color:rgb(0, 81, 255)"' +
      'class="enc1" id="6">0,02</span><span>) de la aproximación a centésimas por redondeo que es ( </span><span style="color:rgb(0, 81, 255)" class="enc1"' +
      'id="7">4,15</span>/<span style="color:rgb(0, 81, 255)" class="enc1" id="8"> 4,14</span> / <span style="color:rgb(0, 81, 255)"' +
      'class="enc1" id="9">4,13</span>).</label>'
  ],
  [
    '<label><span>c) La aproximación a centésimas por truncamiento del número e (1) es (</span><span style="color:rgb(0, 81, 255)"' +
      'class="enc1" id="14">mayor</span> / <span style="color:rgb(0, 81, 255)" class="enc1" id="15">menor</span>' +
      '/<span style="color:rgb(0, 81, 255)" class="enc1" id="16"> igual</span><span>) que la aproximación por' +
      'redondeo a centésimas; mientras que la aproximación a milésimas es (</span><span style="color:rgb(0, 81, 255)"' +
      'class="enc1" id="17">mayor</span>/ <span style="color:rgb(0, 81, 255)" class="enc1" id="18"> menor</span> / <span style="color:rgb(0, 81, 255)"' +
      'class="enc" id="19">igual</span>).</label>'
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
$(".enc1").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});

function pregunta4() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 19; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "4,14" ||
        caja == "0,01" ||
        caja == "4,15" ||
        caja == "3" ||
        caja == "3,1" ||
        caja == "3,14" ||
        caja == "3,142" ||
        caja == "menor" ||
        caja == "igual"
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

  var total = ((respr1 - respr2) * 1) / 9;
  if (total < 0) {
    total = 0;
    tpre4 = total;
  } else {
    tpre4 = total;
  }

  tpre4 = total.toFixed(2);
}
// #endregion
// #region Random5
var random5 = [
  [
    '<label> 1= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect1"><label>   |</label>&nbsp;'
  ],
  [
    '<label> 2= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect2"><label>   |</label>&nbsp;'
  ],
  [
    '<label> 8= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect8"><label>   |</label>&nbsp;'
  ],
  [
    '<label> 7= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect7"><label>   |</label>&nbsp;'
  ],
  [
    '<label> 4= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect4"><label>   |</label>&nbsp;'
  ],
  [
    '<label> 5= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect5"><label>   |</label>&nbsp;'
  ],
  [
    '<label> 9= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect9"><label>   |</label>&nbsp;'
  ],
  [
    '<label> 3= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect3"><label>   |</label>&nbsp;'
  ],
  [
    '<label> 6= </label><input type="text" maxlength="1" size="1" style="width:50px" id="rect6"><label>   |</label>&nbsp;'
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

  var rect1 = document.getElementById("rect1").value;
  var rect2 = document.getElementById("rect2").value;
  var rect3 = document.getElementById("rect3").value;
  var rect4 = document.getElementById("rect4").value;
  var rect5 = document.getElementById("rect5").value;
  var rect6 = document.getElementById("rect6").value;
  var rect7 = document.getElementById("rect7").value;
  var rect8 = document.getElementById("rect8").value;
  var rect9 = document.getElementById("rect9").value;

  if (rect1 == "d" || rect1 == "D") {
    cor = cor + 1;
    $("#rect1").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect1").addClass("incorrecto");
  }

  if (rect2 == "f" || rect2 == "F") {
    cor = cor + 1;
    $("#rect2").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect2").addClass("incorrecto");
  }

  if (rect3 == "i" || rect3 == "I") {
    cor = cor + 1;
    $("#rect3").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect3").addClass("incorrecto");
  }

  if (
    rect4 == "c" ||
    rect4 == "C" ||
    rect4 == "e" ||
    rect4 == "E" ||
    rect4 == "G" ||
    rect4 == "g"
  ) {
    cor = cor + 1;
    $("#rect4").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect4").addClass("incorrecto");
  }
  if (
    rect5 == "c" ||
    rect5 == "C" ||
    rect5 == "e" ||
    rect5 == "E" ||
    rect5 == "G" ||
    rect5 == "g"
  ) {
    cor = cor + 1;
    $("#rect5").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect5").addClass("incorrecto");
  }
  if (
    rect6 == "c" ||
    rect6 == "C" ||
    rect6 == "e" ||
    rect6 == "E" ||
    rect6 == "G" ||
    rect6 == "g"
  ) {
    cor = cor + 1;
    $("#rect6").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect6").addClass("incorrecto");
  }

  if (rect7 == "A" || rect7 == "a") {
    cor = cor + 1;
    $("#rect7").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect7").addClass("incorrecto");
  }

  if (rect8 == "h" || rect8 == "H") {
    cor = cor + 1;
    $("#rect8").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect8").addClass("incorrecto");
  }

  if (rect9 == "B" || rect9 == "b") {
    cor = cor + 1;
    $("#rect9").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#rect9").addClass("incorrecto");
  }
  var total = ((cor - inc) * 1) / 9;
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
    '<span>El punto E es ( </span><span style="color:rgb(0, 81, 255)" class="enc" id="33">></span> , <span style="color:rgb(0, 81, 255)" class="enc" id="34"><</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="35">=</span><span> ) que los puntos C y G.</span>'
  ],
  [
    '<span>La distancia entre los puntos E y D es ( </span><span style="color:rgb(0, 81, 255)" class="enc" id="46">1-√(7)</span> ; <span style="color:rgb(0, 81, 255)" class="enc" id="47">1+√(7)</span> ; <span style="color:rgb(0, 81, 255)" class="enc" id="48">2√(7)</span><span> ).</span>'
  ],
  [
    '<span>La distancia entre los puntos A y ( </span><span style="color:rgb(0, 81, 255)" class="enc" id="36">B </span> , <span style="color:rgb(0, 81, 255)" class="enc" id="37">C</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="38">D</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="39">E</span><span> ) es 2 √(7) .</span>'
  ],
  [
    '<span>La distancia entre los puntos B y C es ( </span><span style="color:rgb(0, 81, 255)" class="enc" id="40">2</span> ; <span style="color:rgb(0, 81, 255)" class="enc" id="41">4</span> ; <span style="color:rgb(0, 81, 255)" class="enc" id="42">3</span><span> ) unidades, y es ( </span><span style="color:rgb(0, 81, 255)" class="enc" id="43">></span> , <span style="color:rgb(0, 81, 255)" class="enc" id="44"><</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="45">=</span><span> ) a la distancia entre los puntos F y G.</span>'
  ],
  [
    '<span>El punto ( </span><span style="color:rgb(0, 81, 255)" class="enc" id="23">A</span>,<span style="color:rgb(0, 81, 255)" class="enc" id="24">B </span> , <span style="color:rgb(0, 81, 255)" class="enc" id="25">C</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="26">D</span> <span> ) es el ( </span><span style="color:rgb(0, 81, 255)" class="enc" id="27">mayor</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="28">menor</span><span> ) de todos, mientras que el punto ( </span><span style="color:rgb(0, 81, 255)" class="enc" id="29">A</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="30">B</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="31">C</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="32">D </span><span> ) es el mayor.</span>'
  ],
  [
    '<span>El punto G es ( </span><span style="color:rgb(0, 81, 255)" style="color:rgb(0, 81, 255)" class="enc" id="20">></span> , <span style="color:rgb(0, 81, 255)" class="enc" id="21"><</span> , <span style="color:rgb(0, 81, 255)" class="enc" id="22">=</span> <span> ) que el punto C.</span>'
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
$(".enc").click(function() {
  if ($(this).hasClass("subrayar")) {
    $(this).removeClass("subrayar");
  } else {
    $(this).addClass("subrayar");
  }
});
function pregunta6() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 20; i <= 48; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (
        caja == "=" ||
        caja == "D" ||
        caja == "menor" ||
        caja == "B" ||
        caja == "3" ||
        caja == "1+√(7)"
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

  var total = ((respr1 - respr2) * 1) / 9;
  if (total < 0) {
    total = 0;
    tpre6 = total;
  } else {
    tpre6 = total;
  }

  tpre6 = total.toFixed(2);
}
// #endregion
// #region Random7
var random7 = [
  [
    '<img src="img/i2_p39_act7.jpg">' +
      '<label>=</label><input type="text" maxlength="1" style="width:30px" id="csiete3" >' +
      '<label>x10</label><sup><input type="text" maxlength="1" style="width:15px" id="csiete4" ></sup>'
  ],
  [
    '<img src="img/i1_p39_act7.jpg">' +
      '<label>=</label><input type="text" maxlength="1" style="width:30px" id="csiete1" >' +
      '<label>x10</label><sup><input type="text" maxlength="1" style="width:15px" id="csiete2" ></sup>'
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
  var cor = 0;
  var inc = 0;

  var csiete1 = document.getElementById("csiete1").value;
  var csiete2 = document.getElementById("csiete2").value;
  var csiete3 = document.getElementById("csiete3").value;
  var csiete4 = document.getElementById("csiete4").value;

  if (csiete1 == "2") {
    cor = cor + 1;
    $("#csiete1").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#csiete1").addClass("incorrecto");
  }

  if (csiete2 == "3") {
    cor = cor + 1;
    $("#csiete2").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#csiete2").addClass("incorrecto");
  }
  if (csiete3 == "2") {
    cor = cor + 1;
    $("#csiete3").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#csiete3").addClass("incorrecto");
  }

  if (csiete4 == "3") {
    cor = cor + 1;
    $("#csiete4").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#csiete4").addClass("incorrecto");
  }

  var total = ((cor - inc) * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre7 = total.toFixed(2);
  } else {
    tpre7 = total.toFixed(2);
  }
}
// #endregion
// #region Pregunta8
function pregunta8() {
  var cor = 0;
  var inc = 0;

  var cocho1 = document.getElementById("cocho1").value;
  var cocho2 = document.getElementById("cocho2").value;
  var cocho3 = document.getElementById("cocho3").value;
  var cocho4 = document.getElementById("cocho4").value;

  if (cocho1 == "2a") {
    cor = cor + 1;
    $("#cocho1").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cocho1").addClass("incorrecto");
  }

  if (cocho2 == "+") {
    cor = cor + 1;
    $("#cocho2").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cocho2").addClass("incorrecto");
  }
  if (cocho3 == "3") {
    cor = cor + 1;
    $("#cocho3").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cocho3").addClass("incorrecto");
  }

  if (cocho4 == "a") {
    cor = cor + 1;
    $("#cocho4").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cocho4").addClass("incorrecto");
  }

  var total = ((cor - inc) * 1) / 4;
  if (total < 0) {
    total = 0;
    tpre8 = total.toFixed(2);
  } else {
    tpre8 = total.toFixed(2);
  }
}
// #endregion
// #region Pregunta9
function pregunta9() {
  var cor = 0;
  var inc = 0;

  var cnueve1 = document.getElementById("cnueve1").value;
  var cnueve2 = document.getElementById("cnueve2").value;

  if (cnueve1 == "10") {
    cor = cor + 1;
    $("#cnueve1").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cnueve1").addClass("incorrecto");
  }

  if (cnueve2 == "27") {
    cor = cor + 1;
    $("#cnueve2").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cnueve2").addClass("incorrecto");
  }

  var total = ((cor - inc) * 1) / 2;
  if (total < 0) {
    total = 0;
    tpre9 = total.toFixed(2);
  } else {
    tpre9 = total.toFixed(2);
  }
}

// #endregion
// #region Pregunta10
function pregunta10() 
{
    var cor = 0;
    var inc = 0;
  
    var cdiez1 = document.getElementById("cdiez1").value;
    var cdiez2 = document.getElementById("cdiez2").value;
  
    if (cdiez1 == "3") {
      cor = cor + 1;
      $("#cdiez1").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cdiez1").addClass("incorrecto");
    }
  
    if (cdiez2 == "2") {
      cor = cor + 1;
      $("#cdiez2").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cdiez2").addClass("incorrecto");
    }
  
    var total = ((cor - inc) * 1) / 2;
    if (total < 0) {
      total = 0;
      tpre10 = total.toFixed(2);
    } else {
      tpre10 = total.toFixed(2);
    }
}

// #endregion
// #region Random11
var random11 = [
    ['<img src="img/i4_p39_act11.jpg">'+
    '<label>=</label><sup><input type="text" maxlength="2" style="width:15px" id="conce7"></sup>'+
    '<label>​√(</label><input type="text" maxlength="2" style="width:25px" id="conce8">'+
    '<sup><input type="text" maxlength="2" style="width:15px" id="conce9"></sup><label>)</label>'
    ],
    ['<img src="img/i2_p39_act11.jpg">'+
    '<label>=</label><sup><input type="text" maxlength="2" style="width:15px" id="conce3"></sup>'+
    '<label>​√(</label><input type="text" maxlength="2" style="width:25px" id="conce4"><label>)</label>'
    ],
    ['<img src="img/i5_p39_act11.jpg">'+
    '<label>=</label><input type="text" maxlength="2" style="width:25px" id="conce10">'
    ],
    ['<img src="img/i3_p39_act11.jpg">'+
    '<label>=</label><sup><input type="text" maxlength="2" style="width:15px" id="conce5"></sup>'+
    '<label>​√(</label><input type="text" maxlength="2" style="width:25px" id="conce6"><label>)</label>'
    ],
    ['<img src="img/i1_p39_act11.jpg">'+
    '<label>=</label><sup><input type="text" maxlength="2" style="width:15px" id="conce1"></sup>'+
    '<label>​√(</label><input type="text" maxlength="2" style="width:25px" id="conce2"><label>)</label>'
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
function pregunta11() 
{
    var cor = 0;
    var inc = 0;
  
    var conce1 = document.getElementById("conce1").value;
    var conce2 = document.getElementById("conce2").value;
    var conce3 = document.getElementById("conce3").value;
    var conce4 = document.getElementById("conce4").value;
    var conce5 = document.getElementById("conce5").value;
    var conce6 = document.getElementById("conce6").value;
    var conce7 = document.getElementById("conce7").value;
    var conce8 = document.getElementById("conce8").value;
    var conce9 = document.getElementById("conce9").value;
    var conce10 = document.getElementById("conce10").value;
  
    if (conce1 == "6") {
      cor = cor + 1;
      $("#conce1").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#conce1").addClass("incorrecto");
    }
  
    if (conce2 == "x" ||conce2 == "X") {
      cor = cor + 1;
      $("#conce2").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#conce2").addClass("incorrecto");
    }

    if (conce3 == "9") {
        cor = cor + 1;
        $("#conce3").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#conce3").addClass("incorrecto");
      }
      if (conce4 == "A" || conce4 == "a") {
        cor = cor + 1;
        $("#conce4").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#conce4").addClass("incorrecto");
      }
      if (conce5 == "12") {
        cor = cor + 1;
        $("#conce5").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#conce5").addClass("incorrecto");
      }

      if (conce6 == "x" || conce6 == "X") {
        cor = cor + 1;
        $("#conce6").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#conce6").addClass("incorrecto");
      }
      if (conce7 == "12") {
        cor = cor + 1;
        $("#conce7").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#conce7").addClass("incorrecto");
      }
      if (conce8 == "X" || conce8 == "x") {
        cor = cor + 1;
        $("#conce8").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#conce8").addClass("incorrecto");
      }
      if (conce9 == "5") {
        cor = cor + 1;
        $("#conce9").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#conce9").addClass("incorrecto");
      }
      if (conce10 == "1") {
        cor = cor + 1;
        $("#conce10").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#conce10").addClass("incorrecto");
      }
  
    var total = ((cor - inc) * 1) / 10;
    if (total < 0) {
      total = 0;
      tpre11 = total.toFixed(2);
    } else {
      tpre11 = total.toFixed(2);
    }
}
// #endregion
// #region Calculo Nota Final
function NotaFinal() {

  var pre3a = document.getElementById("pre3a").value;
  if(pre3a=="")
  {
    alert("Califiqué todas las preguntas");
  }
  else
  {   
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
    parseFloat(tpre10)+
    parseFloat(tpre11);
  var Vtotal=((Nf*10)/11).toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
}

// #endregion
