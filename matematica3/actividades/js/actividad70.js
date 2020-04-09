 var titulos = "aplico";
 f_titulos();
 $("#n_pagina").html('63');
 var ejer = 1,
     i, j,
     itemsT = 6,
     cont = 0,
     tmp, cor = 0,
     inc = 0,
     calificacion = 10,
     claseAnimada = 'animate bounceIn';
 var arras = ['<div class="arrastres recuadro c1">2<span class="t_c">C</span> <div class="espacio1"></div>4<span class="t_d">D</span> <div class="espacio1"></div>7<span class="t_u">U</span> </div>', '<div class="arrastres recuadro c2">3<span class="t_c">C</span> <div class="espacio1"></div>7<span class="t_d">D</span> <div class="espacio1"></div>5<span class="t_u">U</span> </div>', '<div class="arrastres recuadro c3">5<span class="t_c">C</span> <div class="espacio1"></div>3<span class="t_d">D</span> <div class="espacio1"></div>8<span class="t_u">U</span> </div>', '<div class="arrastres recuadro c4">4<span class="t_c">C</span> <div class="espacio1"></div>6<span class="t_d">D</span> <div class="espacio1"></div>6<span class="t_u">U</span> </div>', '<div class="arrastres recuadro c5">2<span class="t_c">C</span> <div class="espacio1"></div>7<span class="t_d">D</span> <div class="espacio1"></div>8<span class="t_u">U</span> </div>', '<div class="arrastres recuadro c6">3<span class="t_c">C</span> <div class="espacio1"></div>2<span class="t_d">D</span> <div class="espacio1"></div>9<span class="t_u">U</span> </div>'];
 var destin = ['<div class="respuestas"> <p class="semicirculo"></p> <div class="recuadro_t"> 247 </div> <div class="destinos recuadro_res c1"></div> </div>', '<div class="respuestas"> <p class="semicirculo"></p> <div class="recuadro_t"> 375 </div> <div class="destinos recuadro_res c2"></div> </div>', '<div class="respuestas"> <p class="semicirculo"></p> <div class="recuadro_t"> 538 </div> <div class="destinos recuadro_res c3"></div> </div>', '<div class="respuestas"> <p class="semicirculo"></p> <div class="recuadro_t"> 466 </div> <div class="destinos recuadro_res c4"></div> </div>', '<div class="respuestas"> <p class="semicirculo"></p> <div class="recuadro_t"> 278 </div> <div class="destinos recuadro_res c5"></div> </div>', '<div class="respuestas"> <p class="semicirculo"></p> <div class="recuadro_t"> 329 </div> <div class="destinos recuadro_res c6"></div> </div>'];
 var resp2 = [];

 f_iniciar();

 function f_iniciar() {
     arras.sort(f_randomico);
     destin.sort(f_randomico);
     $(".div_arrastres").append(arras);
     $(".div_destinos").append(destin);
     QuitaClase(".nota", claseAnimada);
     AgregaClase(".actividad", claseAnimada);
     $("#trace").hide();
     $("#n_cont").html(cont + 1);
     $("#n_ejer").html(ejer);
     $(".arrastres").draggable({ //elementos a arrastrar
         revert: "invalid",
         zIndex: 5,
         containment: ".actividad1",
         scroll: false,
     });
     $(".destinos").droppable({ //destinos
         classes: {
             "ui-droppable-active": "ui-state-active", //color azul al arrastrar el elemento
             "ui-droppable-hover": "ui-state-hover"
         },
         drop: function(e, ui) {
             for (i = 1; i <= $(".respuestas").length; i++) { //4 elementos
                 var nn = 'c' + i; //obtenemos la clase
                 if ($(ui.draggable).hasClass(nn)) { //comparamos la clase del arrastre
                     if ($(this).hasClass(nn)) { //con la clase del destino q tienen el mismo nombre
                         resp2.push('ok'); //guardamos ok si esta correcta
                     } else {
                         resp2.push('no');
                     }
                 }
             }
             ui.draggable.attr("style", "");
             $(this).append(ui.draggable);
             $(this).removeClass("recuadro_res"); //quitamos clase de background
             $(this).find(".arrastres").draggable({ disabled: true });
         }
     });

     $(".btnCalificar").bind("click", function() { //click en el boton iniciar
         cont++;
         $(this).unbind("click");
         temp = $(".destinos");
         for (i = 0; i < resp2.length; i++) {
             if (resp2.length == arras.length && resp2[i] == 'ok') { //cantidad de elementos arrastrados
                 cor++;
                 f_ok(temp);
             } else {
                 inc++;
                 f_no(temp);
             }
         }
         Calculo_nota();
     });
 }