
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $("#act").text('1');
      $("#n_ejer").text('10');//n_cont
  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });

    var pos = [2,3,4,5,6,7,8,9,10];
        pos.sort(f_randomico);
        pos[9]=11;
    function Actividades(){
        var actividades = [
           '<!--1--> <div class="panel-body setup-content" id="step1"> <div class="panel-body"> <b>Selecciona</b> las afirmaciones correctas. <br><br> <div align="center"><img src="img/i1_p122_act1.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca1"></ol> </div> </div> </div></div>',
           '<!--2--> <div class="panel-body setup-content" id="step'+pos[0]+'" style="display: none;"> <div class="panel-body"> <b>Observa</b> con atención y <b>responde</b> las preguntas. <br><br> <div align="center"><img src="img/i1_p122_act2.png" class="img-responsive"><br>¿Qué tipo de texto es esta imagen?<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca2"></ol> </div> </div> </div></div>',
           '<!--3--> <div class="panel-body setup-content" id="step'+pos[1]+'" style="display: none;"> <div class="panel-body"> <b>Observa</b> con atención y <b>responde</b> las preguntas.<br><br> <div align="center"><img src="img/i1_p122_act2.png" class="img-responsive"><br>¿Qué tema trata?<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca3"></ol> </div> </div> </div></div>',
           '<!--4--> <div class="panel-body setup-content" id="step'+pos[2]+'" style="display: none;"> <div class="panel-body"> ¿Qué elementos visuales utiliza?<br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca4"></ol> </div> </div> </div></div>',
           '<!--5--> <div class="panel-body setup-content" id="step'+pos[3]+'" style="display: none;"> <div class="panel-body"> ¿Cuánto del plato debe contener vegetales?<br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca5"></ol> </div> </div> </div></div>',
           '<!--6--> <div class="panel-body setup-content" id="step'+pos[4]+'" style="display: none;"> <div class="panel-body"> ¿Cuál es la idea principal del texto? <br><br> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca6"></ol> </div> </div> </div></div>',
           '<!--7--> <div class="panel-body setup-content" id="step'+pos[5]+'" style="display: none;"> <div class="panel-body"> Relaciona los tiempos verbales de la izquierda con los verbos conjugados de la derecha. <br><br> <div align="center"><img src="img/i1_p122_act7.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-12"> <ol type="a" id="marca7"></ol> </div> </div> </div></div>',
           '<!--8--> <div class="panel-body setup-content" id="step'+pos[6]+'" style="display: none;"> <div class="panel-body"> Completa el texto con las palabras que creas más convenientes. <br><br> <div align="center"><img src="img/i1_p122_act8.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca8"></ol> </div> </div> </div> <button onclick="nextPrev(8);" class="btn btn nextBtn pull-right" type="button" style="top: 5px; position: relative; background-color: #5C6CC5; color: white;">Siguiente</button></div>',
           '<!--9--> <div class="panel-body setup-content" id="step'+pos[7]+'" style="display: none;"> <div class="panel-body"> Selecciona las afirmaciones correctas sobre la lengua escrita. <br><br> <div align="center"><img src="img/i1_p122_act9.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;">  <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca9"></ol> </div> </div> </div></div>',
           '<!--10--> <div class="panel-body setup-content" id="step'+pos[8]+'" style="display: none;"> <div class="panel-body"> Ordena las oraciones para organizar un texto coherente.<br><br> <div align="center"><img src="img/i1_p122_act10.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca10"></ol> </div> </div> </div> </div>',
        ];
        actividades.sort(f_randomico);
        $('#actividades').append(actividades);
    }

    function Preg1(){
        var marca1 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR1">1, 3, 4</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR11">1, 3, 6</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR12">2, 4, 5</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR13">2, 5, 6</span> </li><br> </div>',
        ];
        marca1.sort(f_randomico);
        $('#marca1').append(marca1);
    }


    function Preg2(){
        var marca2 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR2">Infografía</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR14">Afiche</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR15">Periódico</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR16">Revista</span> </li><br> </div>',
        ];
        marca2.sort(f_randomico);
        $('#marca2').append(marca2);
    }


    function Preg3(){
        var marca3 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR3">Alimentación saludable</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR17">Modales en la mesa</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR18">Tipos de alimentos</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR19">Recetas de cocina</span> </li><br> </div>',
        ];
        marca3.sort(f_randomico);
        $('#marca3').append(marca3);
    }


    function Preg4(){
        var marca4 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR4">Fotografías, dibujos y viñetas</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR20">Ensalada, arroz y carne frita</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR21">Dibujos, ilustraciones de alimentos y fotos</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR22">Barras, dibujos, colores e imágenes</span> </li><br> </div>',
        ];
        marca4.sort(f_randomico);
        $('#marca4').append(marca4);
    }

    function Preg5(){
        var marca5 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR5">Medio plato</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR23">Todo el plato</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR24">Un cuarto del plato</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR25">Solo un tercio</span> </li><br> </div>',
        ];
        marca5.sort(f_randomico);
        $('#marca5').append(marca5);
    }

    function Preg6(){
        var marca6 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR6">Una comida saludable debería contener un medio plato de verduras, un cuarto de cereales y otro de proteínas.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR26">Todos los días se debe comer arroz y carne.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR27">Todos los días se debe comer arroz, carne de res y lechugas.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR28">Una comida saludable no debería contener un medio plato de verduras, un cuarto de cereales y otro de proteínas.</span> </li><br> </div>',
        ];
        marca6.sort(f_randomico);
        $('#marca6').append(marca6);
    }

    function Preg7(){
        var marca7 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR7">1df, 2ae, 3bc</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR29">1ae, 2df, 3bc</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR30">1bc, 2ae, 3df</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR31">1bf, 2cd, 3ae</span> </li><br> </div>',
        ];
        marca7.sort(f_randomico);
        $('#marca7').append(marca7);
    }

    function Preg8(){
        var marca8 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR8">linda, finos, noble, magnífica</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR32">linda, gruesos, vagamente, magnífica</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR33">perezosa, elegantes, vieja, viajar</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR34">rubia, interesantes, triste, elegante</span> </li><br> </div>',
        ];
        marca8.sort(f_randomico);
        $('#marca8').append(marca8);
    }

    function Preg9(){
        var marca9 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR9">1, 2, 4</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR35">1, 2, 3</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR36">1, 2, 6</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR37">3, 5, 6</span> </li><br> </div>',
        ];
        marca9.sort(f_randomico);
        $('#marca9').append(marca9);
    }

    function Preg10(){
        var marca10 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR10">2, 4, 3, 5, 1</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR38">1, 5, 3, 2, 4</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR39">3, 5, 2, 1, 4</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR40">5, 1, 4, 2, 3</span> </li><br> </div>',
        ];
        marca10.sort(f_randomico);
        $('#marca10').append(marca10);
    }


  //////////////////////////////////////////////////////////////////////////////////////

  var notaFinalP = 0;
  var notaFinalM = 0;
  function Resp(){
      for(var i=1; i<41; i++){
            if( i<11 ){
                if($('#oMRR'+(i) +'.pinta').text()){
                  notaFinalP++;
                  $('#oMR'+i).addClass('b');
                }
            }else{
                if($('#oMRR'+(i) +'.pinta').text()){
                  $('#oMR'+i).addClass('m');
                  notaFinalM++;
                }
            }
        }
  }



///////////////////////////////////////////////////////////////////
      var c=0;
      function nextPrev(n) {
          pos1 = [2,3,4,5,6,7,8,9,10];
          c = parseInt($('#tabs').text()) + 1;
          $('#tabs').text(c);
          $('#n_cont').text(c+1);
          //alert("step: "+pos[c-1]);
          if(c>=2 && c<10){
            document.getElementById("step"+pos1[c-2]).style.display = "none";
            document.getElementById("step"+pos1[c-1]).style.display = "block";
          }else{
            if(c<2){
              document.getElementById("step1").style.display = "none";
              document.getElementById("step"+pos1[c-1]).style.display = "block";
            }else{
              document.getElementById("step"+pos1[c-2]).style.display = "none";
              document.getElementById("step11").style.display = "block";
              confirmar();
            }
          }
      }


      function confirmar() {
            Resp();
            var nota = (notaFinalP);
            var notaFinal = (nota).toFixed(2);
            $("#nAC").text(notaFinalP);
            $("#nER").text(notaFinalM);
                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', false);
                      $('#Refrescar').attr('disabled', false);                          
              return false
      }


    $(document).ready(function() {
        Inicio();
        Actividades();
        Preg1();
        Preg2();
        Preg3();
        Preg4();
        Preg5();
        Preg6();
        Preg7();
        Preg8();
        Preg9();
        Preg10();





/////////////////////////////////////////////
        for(var i=1; i<41; i++){

            $('#oMRR'+(i)).click(function(){
              setTimeout(function(){ nextPrev(1); }, 500);
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });

        }
////////////////////////////////////////////////

      $("#Calificar").click(function() {
        confirmar();
      });    

});





