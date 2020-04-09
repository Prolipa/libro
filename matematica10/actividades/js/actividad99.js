var titulos = "aplico";
numero_pagina(127);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;


// #region Pregunta1
function pregunta1() 
{
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
  tpre1 = nota / 4;
  
  $("#pre1a").val(parseFloat(tpre1).toFixed(2));
 
}
// #endregion

// #region Pregunta2
function pregunta2() 
{
    var respuestas = document.getElementsByClassName("respuestas2");
    var soluciones = document.getElementsByClassName("solucion2");
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
    tpre2 = nota / 4;
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
  '<span class="bg_palabra c3">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i1_p127_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c1">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i2_p127_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i3_p127_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c2">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i4_p127_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c3">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i5_p127_act3.jpg">&nbsp;</span>',
  '<span class="bg_palabra c1">&nbsp;<img style="mix-blend-mode: multiply;" class="img-responsive" src="img/i6_p127_act3.jpg">&nbsp;</span>'
];
var txt1 = [
  '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">60°</div></td></tr>',
  '<tr><td><div class="cajas imagen c2" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">30°</div></td></tr>',
  '<tr><td><div class="cajas imagen c3" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">45°</div></td></tr>'
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
  var total = ((cor / itemsT)*2.50).toFixed(2);
  f_tiempo();
  tpre3 = total;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
  [
    '<h4>A = 90°; tan B = 1; c = 4 <br><br> B =<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="45">° ; C =<input type="text"size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="45">° ; b =<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> ; a =<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4">√(<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2">)</h4>'
  ],
  [
    '<h4> A = 90°; B = 60°; a = 10<br><br> C = <input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30">° ; c = <input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> ; b = <input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input  type="hidden" style="color:blue" class="solucion4" value="5">√(<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3">)</h4>'
  ],
  [
    '<h4>A = 90°; b = 6; tan C = √(3)<br><br> B = <input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="60">° ; c =<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="6">√(<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3">) ; a =<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="12"> ; B =<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30">°</h4>'
  ],
  [
    '<h4>A = 90°; B = 45°; a = 8<br><br> C = <input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="45">° ; b = <input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> ; a = <input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8">√(<input type="text" size="1" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="2">)</h4>'
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
function pregunta4() 
{
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
    tpre4 = nota / 4;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
  pregunta1();
  pregunta2();
  pregunta3();
  pregunta4();
  var Nf =
    parseFloat(tpre1) +
    parseFloat(tpre2) +
    parseFloat(tpre3) +
    parseFloat(tpre4);

  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}

// #endregion
