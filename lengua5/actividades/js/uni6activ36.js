
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $("#act").text('1');
      $("#n_ejer").text('8');//n_cont
  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });

    var pos = [2,3,4,5,6,7,8];
        pos.sort(f_randomico);
        pos[7]=9;
    function Actividades(){
        var actividades = [
           '<!--1--> <div class="panel-body setup-content" id="step1"> <div class="panel-body"> <b>Lee</b> el texto y <b>responde</b> las preguntas.  <br><br> <div align="center"><img src="img/i1_p238_act1.png" class="img-responsive"><br> ¿Para qué se va a construir un centro de simulación del ambiente de Marte? <br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca1"></ol> </div> </div> </div></div>',
           '<!--2--> <div class="panel-body setup-content" id="step'+pos[0]+'" style="display: none;"> <div class="panel-body"> <div align="center"><img src="img/i1_p238_act1.png" class="img-responsive"><br>¿Por qué a la cuenca de Qaidam se la conoce como “el lugar más marciano de la Tierra”?<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca2"></ol> </div> </div> </div></div>',
           '<!--3--> <div class="panel-body setup-content" id="step'+pos[1]+'" style="display: none;"> <div class="panel-body"> <div align="center"><img src="img/i1_p238_act1.png" class="img-responsive"><br>¿Dónde está ubicada la cuenca de Qaidam?<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca3"></ol> </div> </div> </div></div>',
           '<!--4--> <div class="panel-body setup-content" id="step'+pos[2]+'" style="display: none;"> <div class="panel-body"> <div align="center"><img src="img/i1_p238_act1.png" class="img-responsive"><br>¿Cuánto costará construir el simulador del ambiente marciano?<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca4"></ol> </div> </div> </div></div>',
           '<!--5--> <div class="panel-body setup-content" id="step'+pos[3]+'" style="display: none;"> <div class="panel-body"> <b>Completa</b> el párrafo con las palabras que creas más adecuadas.<br><br> <div align="center"><img src="img/i1_p238_act2.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca5"></ol> </div> </div> </div></div>',
           '<!--6--> <div class="panel-body setup-content" id="step'+pos[4]+'" style="display: none;"> <div class="panel-body"> <b>Relaciona</b> los conceptos de la izquierda con las definiciones de la derecha.<br><br> <div align="center"><img src="img/i1_p238_act3.png" class="img-responsive"><br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca6"></ol> </div> </div> </div></div>',
           '<!--7--> <div class="panel-body setup-content" id="step'+pos[5]+'" style="display: none;"> <div class="panel-body"> <b>Lee</b> las definiciones y <b>responde</b> las preguntas. <br><br> <div align="center"><img src="img/i1_p238_act4.png" class="img-responsive"><br>¿Cuál es la intención comunicativa de los textos?<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-12"> <ol type="a" id="marca7"></ol> </div> </div> </div></div>',
           '<!--8--> <div class="panel-body setup-content" id="step'+pos[6]+'" style="display: none;"> <div class="panel-body"> <b>Lee</b> las definiciones y <b>responde</b> las preguntas. <br><br> <div align="center"><img src="img/i1_p238_act4.png" class="img-responsive"><br>Este tipo de textos se pueden encontrar en…<br></div> <div align="center col-sm-12"> <div class="col-sm-3" style="background-color: #BFC4DF; color: #273DB7; border-top-right-radius: 15px; border-top-left-radius: 15px;  padding: 8px;"> <b>Opciones de respuesta</b> </div> </div> <div class="col-sm-12" style="border: 1px solid; border-color: #BFC4DF; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; border-top-right-radius: 10px;" align="justify"><br> <div class="col-sm-1"></div> <div class="col-sm-11"> <ol type="a" id="marca8"></ol> </div> </div> </div> <button onclick="nextPrev(8);" class="btn btn nextBtn pull-right" type="button" style="top: 5px; position: relative; background-color: #5C6CC5; color: white;">Siguiente</button></div>',           
        ];
        actividades.sort(f_randomico);
        $('#actividades').append(actividades);
    }

    function Preg1(){
        var marca1 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR1">Para entrenar astronautas y recibir turistas.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR11">Para conocer el lugar más marciano de la Tierra.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR12">Para realizar una investigación en las zonas deprimidas.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR13">Para recibir el respaldo de un comité de expertos.</span> </li><br> </div>',
        ];
        marca1.sort(f_randomico);
        $('#marca1').append(marca1);
    }


    function Preg2(){
        var marca2 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR2">Porque es desértico y tiene piedras rojizas como hay en Marte.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR14">Por ser el centro de entrenamiento para los astronautas de China.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR15">Porque allí se va a construir un centro turístico.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR16">Porque allí se va a investigar sobre Marte.</span> </li><br> </div>',
        ];
        marca2.sort(f_randomico);
        $('#marca2').append(marca2);
    }


    function Preg3(){
        var marca3 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR3">En la provincia occidental de Qinghai.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR17">En el complejo turístico de Marte.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR18">En la agencia oficial Xinhua.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR19">En un lugar de Marte.</span> </li><br> </div>',
        ];
        marca3.sort(f_randomico);
        $('#marca3').append(marca3);
    }


    function Preg4(){
        var marca4 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR4">400 millones de yuanes</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR20">300 millones de yuanes</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR21">50 millones de yuanes</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR22">60 millones de yuanes</span> </li><br> </div>',
        ];
        marca4.sort(f_randomico);
        $('#marca4').append(marca4);
    }

    function Preg5(){
        var marca5 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR5">Otis, Parecía, cogió, Sus</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR23">otis, parecía, Cogió, sus</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR24">Otis, parecía, cogió, Sus</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR25">Otís, Parecía, Cogió, sus</span> </li><br> </div>',
        ];
        marca5.sort(f_randomico);
        $('#marca5').append(marca5);
    }

    function Preg6(){
        var marca6 = [
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR6">1a, 2c</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR26">1a, 2d</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR27">1b, 2d</span> </li><br> </div>',
              '<div class="col-sm-3"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR28">1c, 2b</span> </li><br> </div>',
        ];
        marca6.sort(f_randomico);
        $('#marca6').append(marca6);
    }

    function Preg7(){
        var marca7 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR7">Explicar el significado de una palabra.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR29">Dar instrucciones sobre una actividad.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR30">Describir un objeto o cosa.</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR31">Exponer opiniones sobre un tema.</span> </li><br> </div>',
        ];
        marca7.sort(f_randomico);
        $('#marca7').append(marca7);
    }

    function Preg8(){
        var marca8 = [
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR8">Una enciclopedia o diccionario</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR32">Un manual o instructivo</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR9">Un periódico o semanario</span> </li><br> </div>',
              '<div class="col-sm-6"> <li style="cursor: pointer;">&nbsp;&nbsp; <span id="oMRR10">Una revista o libro</span> </li><br> </div>',
        ];
        marca8.sort(f_randomico);
        $('#marca8').append(marca8);
    }

  //////////////////////////////////////////////////////////////////////////////////////

  var notaFinalP = 0;
  var notaFinalM = 0;
  function Resp(){
      for(var i=1; i<33; i++){
            if( i<9 ){
                if($('#oMRR'+(i) +'.pinta').text()){
                  notaFinalP++;
                  $('#oMR'+i).css("background-color", "#5ED188");
                }
            }else{
                if($('#oMRR'+(i) +'.pinta').text()){
                  $('#oMR'+i).css("background-color", "#EF87A7");
                  notaFinalM++;
                }
            }
        }
  }



///////////////////////////////////////////////////////////////////
      var c=0;
      function nextPrev(n) {
          pos1 = [2,3,4,5,6,7,8];
          c = parseInt($('#tabs').text()) + 1;
          $('#tabs').text(c);
          $('#n_cont').text(c+1);
          //alert("step: "+pos[c-1]);
          if(c>=2 && c<8){
            document.getElementById("step"+pos1[c-2]).style.display = "none";
            document.getElementById("step"+pos1[c-1]).style.display = "block";
          }else{
            if(c<2){
              document.getElementById("step1").style.display = "none";
              document.getElementById("step"+pos1[c-1]).style.display = "block";
            }else{
              document.getElementById("step"+pos1[c-2]).style.display = "none";
              document.getElementById("step9").style.display = "block";
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
                      $('#Calificar').attr('disabled', true);
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





/////////////////////////////////////////////
        for(var i=1; i<33; i++){

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





