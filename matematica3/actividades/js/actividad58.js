 var titulos = "aplico";
 f_titulos();
 $("#n_pagina").html('55');
 $(".btnCalificar").bind("click", function() {
     CalificacionAbierta();
 });
 var ejer = 1,
     itemsT = 4,
     cont = 0,
     tmp, cor = 0,
     inc = 0,
     calificacion = 10,
     claseAnimada = 'animate bounceIn';
 var btA, btB, btC, btD, resA = "",
     resB = "",
     resC = "",
     resD = "";
 f_iniciar();

 function f_iniciar() {
     var div_cont = ['<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c1 divsA"> <center><img src="img/i1_p55_act58.jpg" class="img img-responsive"></center> <p class="text-center color1"> Y &nbsp;&nbsp; <img src="img/i5_p55_act58.png" class="bordes img-responsive btn ok" id="a0"> <img src="img/i6_p55_act58.png" class="bordes img-responsive btn no" id="a1"> &nbsp;&nbsp;K </p> </div>', '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c2 divsA"> <center><img src="img/i2_p55_act58.jpg"></center> <p class="text-center color2"> O &nbsp;&nbsp; <img src="img/i6_p55_act58.png" class="bordes img-responsive btn no" id="a3"> &nbsp;&nbsp;<img src="img/i5_p55_act58.png" class="bordes img-responsive btn ok" id="a2"> R  </p> </div>', '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c3 divsA"> <center><img src="img/i3_p55_act58.jpg" class="img img-responsive"></center> <p class="text-center color3"> Z &nbsp;&nbsp; <img src="img/i5_p55_act58.png" class="bordes img-responsive btn no" id="a4"> <img src="img/i6_p55_act58.png" class="bordes img-responsive btn ok" id="a5"> &nbsp;&nbsp;X </p> </div>', '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 c4 divsA"> <center><img src="img/i4_p55_act58.jpg"></center> <p class="text-center color4"> B &nbsp;&nbsp; <img src="img/i5_p55_act58.png" class="bordes img-responsive btn no" id="a6"> <img src="img/i6_p55_act58.png" class="bordes img-responsive btn ok" id="a7"> &nbsp;&nbsp;H </p> </div>'];
     div_cont.sort(f_randomico);
     $(".p_contenido").append(div_cont);
     $(".c1 .btn").bind("click", function() {
         $(".c1 .btn").each(function() {
             $(this).removeClass("seleccion");
         })
         $(this).addClass("seleccion");
         if ($(this).hasClass("ok")) {
             resA = "ok";
         } else {
             resA = "no";
         }
         btA = $('img').prop('id');
         console.log(btA);
     })
     $(".c2 .btn").bind("click", function() {
         $(".c2 .btn").each(function() {
             $(this).removeClass("seleccion");
         })
         $(this).addClass("seleccion");
         if ($(this).hasClass("ok")) {
             resB = "ok";
         } else {
             resB = "no";
         }
         btB = $(this).prop('id');
     })
     $(".c3 .btn").bind("click", function() {
         $(".c3 .btn").each(function() {
             $(this).removeClass("seleccion");
         })
         $(this).addClass("seleccion");
         if ($(this).hasClass("ok")) {
             resC = "ok";
         } else {
             resC = "no";
         }
         btC = $(this).prop('id');
     })
     $(".c4 .btn").bind("click", function() {
         $(".c4 .btn").each(function() {
             $(this).removeClass("seleccion");
         })
         $(this).addClass("seleccion");
         if ($(this).hasClass("ok")) {
             resD = "ok";
         } else {
             resD = "no";
         }
         btD = $(this).prop('id');
     });
     $(".btnCalificar").bind("click", function() { //click en el boton iniciar
         cont++;
         $(this).unbind("click");
         tmp = $(".color1");
         if (resA == "ok") {
             cor++
             f_ok(tmp);
         } else {
             inc++
             f_no(tmp);
         }
         tmp = $(".color2");
         if (resB == "ok") {
             cor++
             f_ok(tmp);
         } else {
             inc++
             f_no(tmp);
         }
         tmp = $(".color3");
         if (resC == "ok") {
             cor++
             f_ok(tmp);
         } else {
             inc++
             f_no(tmp);
         }
         tmp = $(".color4");
         if (resD == "ok") {
             cor++
             f_ok(tmp);
         } else {
             inc++
             f_no(tmp);
         }
         Calculo_nota();
     });
 }