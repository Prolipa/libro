
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Cargar() {   
      location.reload(true);
    } 


    
    function Preg3(){
      var act3 = [
            '<div class="col-sm-2" align="center" style="margin: 20px; padding: 5px; border: 1px solid #FB3799; border-radius: 10px; border-left: 6px solid #FB3799; border-right: 6px solid #FB3799;"> Engare golpeó el<br>techo. El techo se<br>abrió y Engare, que<br>era un hombre alto,<br>subió a la tierra. <br> <div align="center"> <select id="rC1" class="form-control respuestas" style="width: 60px; border: 1px solid #FB3799;"> <option></option> <option>A</option> <option>B</option> <option>C</option> <option>D</option> </select> </div> </div>',
            '<div class="col-sm-2" align="center" style="margin: 20px; padding: 5px; border: 1px solid #5E29EC; border-radius: 10px; border-left: 6px solid #5E29EC; border-right: 6px solid #5E29EC;"> Hizo una iglesia<br>grande. Luego se<br>preguntó: “¿Qué<br>haremos para<br>multiplicarnos?” <br> <div align="center"> <select id="rC2" class="form-control respuestas" style="width: 60px; border: 1px solid #5E29EC;"> <option></option> <option>A</option> <option>B</option> <option>C</option> <option>D</option> </select> </div> </div>',
            '<div class="col-sm-2" align="center" style="margin: 20px; padding: 5px; border: 1px solid #2979EC; border-radius: 10px; border-left: 6px solid #2979EC; border-right: 6px solid #2979EC;"> Dentro de la tierra<br>había dos dioses:<br>Engare era uno y<br>Andang era el<br>padre muerto. <br> <div align="center"> <select id="rC3" class="form-control respuestas" style="width: 60px; border: 1px solid #2979EC;"> <option></option> <option>A</option> <option>B</option> <option>C</option> <option>D</option> </select> </div> </div>',
            '<div class="col-sm-2" align="center" style="margin: 20px; padding: 5px; border: 1px solid #0DCD93; border-radius: 10px; border-left: 6px solid #0DCD93; border-right: 6px solid #0DCD93;"> Adang, que estaba<br>abajo, golpeó hacia<br>arriba y se cruzaron<br>los bastones. Salió por <br>debajo de un árbol. <br> <div align="center"> <select id="rC4" class="form-control respuestas" style="width: 60px; border: 1px solid #0DCD93;"> <option></option> <option>A</option> <option>B</option> <option>C</option> <option>D</option> </select> </div> </div>',
      ];
      act3.sort(f_randomico);
      $('#act3').append(act3);
    }


    function Preg4(){
      var act4 = [
            '<span id="rD1" style="cursor: pointer;">Es un relato de hechos maravillosos que se ha transmitido de generación en generación. </span><br><br>',
            '<span id="rD4" style="cursor: pointer;">Es una narración casi siempre de origen oral, basada en algún hecho histórico, que contienen elementos de la cultura popular.</span><br><br>',
            '<span id="rD2" style="cursor: pointer;">Narra el origen de algo o algún fenómeno desde las creencias y la identidad de comunidades, tribus y naciones.</span><br><br>',
            '<span id="rD3" style="cursor: pointer;">Sus personajes son siempre sobrenaturales, extraordinarios.</span><br><br>',
      ];
      act4.sort(f_randomico);
      $('#act4').append(act4);
    }



     function Preg7(){
      var act7 = [
            '<span style="cursor: pointer;" id="rG3">El corazón es el órgano principal del sistema circulatorio.</span><br><br>',
            '<span style="cursor: pointer;" id="rG1">Tiene dos aurículas y dos ventrículos.</span><br><br>',
            '<span style="cursor: pointer;" id="rG2">Propulsa la sangre a todo el cuerpo.</span><br><br>',
      ];
      act7.sort(f_randomico);
      $('#act7').append(act7);
    }


   
    function Preg9(){
      var act9 = [
          '<div class="col-sm-3" align="center"> <span class="num1" style="border-color: #DC198F;">&nbsp;&nbsp;caretilla&nbsp;&nbsp;</span><br><br> <input type="text" id="rI1" class="form-control respuestas num1" style="border-color: #DC198F; width: 150px;"><br> </div>',
          '<div class="col-sm-3" align="center"> <span class="num1" style="border-color: #DC198F;">&nbsp;&nbsp;rrosa&nbsp;&nbsp;</span><br><br> <input type="text" id="rI2" class="form-control respuestas num1" style="border-color: #DC198F; width: 150px;"><br> </div>',
          '<div class="col-sm-3" align="center"> <span class="num1" style="border-color: #DC198F;">&nbsp;&nbsp;rita&nbsp;&nbsp;</span><br><br> <input type="text" id="rI3" class="form-control respuestas num1" style="border-color: #DC198F; width: 150px;"><br> </div>',
          '<div class="col-sm-3" align="center"> <span class="num1" style="border-color: #DC198F;">&nbsp;&nbsp;tiera&nbsp;&nbsp;</span><br><br> <input type="text" id="rI4" class="form-control respuestas num1" style="border-color: #DC198F; width: 150px;"><br> </div>',
      ];
      act9.sort(f_randomico);
      $('#act9').append(act9);
    }

    ///////////////////////////////////////////////////////////////////////////

    var notaP2;
    var notaFinalP2 = 0;
    function Resp2(){
      var resp = ['Porque era el dios vivo', 'Porque era el padre muerto'];
        for(var i=1; i<3; i++){
          if( $('#rB'+i).val() == resp[i-1] ){
            notaFinalP2++;
            $('#rB'+i).css('background-color', '#21D583');
          }else{
            $('#rB'+i).css('background-color', '#D52162');
          }
        }
        notaP2 = (notaFinalP2)/2;
    }



    var notaP3;
    var notaFinalP3 = 0;
    function Resp3(){
      var resp = ['b','d','a','c'];
        for(var i=1; i<5; i++){
          if( $('#rC'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
            notaFinalP3++;
            $('#rC'+i).css('background-color', '#21D583');
          }else{
            $('#rC'+i).css('background-color', '#D52162');
          }
        }
        notaP3 = (notaFinalP3)/4;
    }


    var notaP4;
    var notaFinalP4 = 0;
    function Resp4(){
        for(var i=1; i<5; i++){
              if( i<4 ){
                  if($('#rD'+(i) +'.pinta').text()){
                    notaFinalP4++;
                    $('#rD'+i).addClass('bien');
                  }
              }else{
                  if($('#rD'+(i) +'.pinta').text()){
                    $('#rD'+i).addClass('mal');
                    notaFinalP4--;
                  }
              }
          }   

      if( notaFinalP4 < 0 ){
        notaP4=0;
      }else{
        notaP4 = (notaFinalP4)/3;
      }
    }



    var notaP7;
    var notaFinalP7 = 0;
    function Resp7(){
        for(var i=1; i<4; i++){
              if( i<3 ){
                  if($('#rG'+(i) +'.pinta').text()){
                    notaFinalP7++;
                    $('#rG'+i).addClass('bien');
                  }
              }else{
                  if($('#rG'+(i) +'.pinta').text()){
                    $('#rG'+i).addClass('mal');
                    notaFinalP7--;
                  }
              }
          }   

      if( notaFinalP7 < 0 ){
        notaP7=0;
      }else{
        notaP7 = (notaFinalP7)/2;
      }
    }





    var notaP8;
    var notaFinalP8 = 0;
    function Resp8(){
      var resp = ['bellísimo','antiquísimas','animadísimas','malísimo','fortísimas'];
        for(var i=1; i<6; i++){
          if( $('#rH'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
            notaFinalP8++;
            $('#rH'+i).css('background-color', '#21D583');
          }else{
            $('#rH'+i).css('background-color', '#D52162');
          }
        }
        notaP8 = (notaFinalP8)/5;
    }





    var notaP9;
    var notaFinalP9 = 0;
    function Resp9(){
      var resp = ['carretilla','rosa','Rita','tierra'];
        for(var i=1; i<5; i++){
          if( $('#rI'+i).val().replace(/ /gi, "") == resp[i-1] ){
            notaFinalP9++;
            $('#rI'+i).css('background-color', '#21D583');
          }else{
            $('#rI'+i).css('background-color', '#D52162');
          }
        }
        notaP9 = (notaFinalP9)/4;
    }

    //////////////////////////////////////
    $(document).ready(function() {
        Inicio();
        Preg3();
        Preg4();
        Preg7();
        Preg9();

        for(var i=1; i<5; i++){
            $('#rD'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


        for(var i=1; i<4; i++){
            $('#rG'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar(puntajeAbiertas){
          Resp2();
          Resp3();
          Resp4();
          Resp7();
          Resp8();
          Resp9();
            cor = (puntajeAbiertas+notaP2+notaP3+notaP4+notaP7+notaP8+notaP9).toFixed(2);
            calificacion=1;
            itemsT=1;
            cont=1;
            ejer=1;
            inc=0;
            Calculo_nota();

            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);
            return false
        }

      $("#Calificar").click(function() {
        punt=[1,1,1,1];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=5;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });





