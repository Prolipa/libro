var titulos = "aplico";
numero_pagina(63);


var ejer = 1,
  itemsT = 8,
  cont = 0,
  tmp,
  cor = 0,
  inc = 0,
  calificacion = 10,
  claseAnimada = "animate bounceIn";
var resp = [],
  i;
f_iniciar();
function f_iniciar() {
  var pal1 = [
    '<span class="bg_palabra c4">&nbsp;a (x) = 2x − 5&nbsp;</span>',
    '<span class="bg_palabra c2">&nbsp;b (x) = 1/(2-x)&nbsp;</span>',
    '<span class="bg_palabra c8">&nbsp;c (x) = √(x-2)&nbsp;</span>',
    '<span class="bg_palabra c1">&nbsp;d (x) = x/(x+2)&nbsp;</span>',
    '<span class="bg_palabra c5">&nbsp;e (x) = 1/x<sup>2</sup>&nbsp;</span>',
    '<span class="bg_palabra c7">&nbsp;f (x) = √(4+x)&nbsp;</span>',
    '<span class="bg_palabra c3">&nbsp;g (x) = <sup>4</sup>√(6-2x)&nbsp;</span>',
    '<span class="bg_palabra c6">&nbsp;h (x) = 2/√(20-4x)&nbsp;</span>'
  ];
  var txt1 = [
    '<tr><td><div class="cajas imagen c1" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">"ℝ − ​{− 2}"</div></td></tr>',
    '<tr><td><div class="cajas imagen c2" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2">"ℝ − ​{2}"</div></td></tr>',
    '<tr><td><div class="cajas imagen c3" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“x ≤ 3”</div></td></tr>',
    '<tr><td><div class="cajas imagen c4" id="caja_img4"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt4">“ℝ"</div></td></tr>',
    '<tr><td><div class="cajas imagen c5" id="caja_img1"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt1">"ℝ − ​{0}"</div></td></tr>',
    '<tr><td><div class="cajas imagen c6" id="caja_img2"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt2">"x < 5"</div></td></tr>',
    '<tr><td><div class="cajas imagen c7" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“x ≥ − 4”</div></td></tr>',
    '<tr><td><div class="cajas imagen c8" id="caja_img3"></div></td><td><div class="col-lg-6 col-md-6 col-sm-6 col-xs-7 cajas texto" id="caja_txt3">“x ≥ 2”</div></td></tr>'
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
  $(".btnCalificar").bind("click", function() {
    //click en el boton iniciar

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
    var total = (cor * (calificacion / itemsT)).toFixed(2);
    //var total = suma.toFixed(2);
    $("#txtNota").html(total);
    f_tiempo();
  });
}
