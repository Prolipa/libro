
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    function Preg1(){
      var analiza = [
          '<li>&nbsp;&nbsp;¿Cuál es el cantón más poblado?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n3">R.:&nbsp;&nbsp;</span> <select id="rLAS1" class="form-control respuestas input-sm" style="width: 200px;"> <option></option> <option>Latacunga</option> <option>Salcedo</option> <option>Pujilí</option> </select></li><br><br>',
          '<li>&nbsp;&nbsp;¿Qué lugar le corresponde a Pujilí según la densidad de población de los cantones?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n3">R.:&nbsp;&nbsp;</span> <select id="rLAS2" class="form-control respuestas input-sm" style="width: 200px;"> <option></option> <option>El primer lugar</option> <option>El segundo lugar</option> <option>El tercer lugar</option> </select></li><br><br>',
          '<li>&nbsp;&nbsp;¿Qué cantones tienen un número semejante de pobladores?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n3">R.:&nbsp;&nbsp;</span> <select id="rLAS3" class="form-control respuestas input-sm" style="width: 250px;"> <option></option> <option>Pangua, Saquisilí y Sigchos</option> <option>La Maná, Saquisilí y Salcedo</option> <option>La Maná, Saquisilí y Sigchos</option> </select></li><br><br>',
      ];

      analiza.sort(f_randomico);
      $('#analiza').append(analiza);
    }


    function Preg3(){
      var observa = [
          '<li>&nbsp;&nbsp;¿Quién ganó las elecciones?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n3">R.:&nbsp;&nbsp;</span> <select id="rOAS1" class="form-control respuestas input-sm" style="width: 100px;"> <option></option> <option>Esteban</option> <option>María</option> <option>Roberto</option> </select></li><br><br>',
          '<li>&nbsp;&nbsp;¿Quién obtuvo la menor votación?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n3">R.:&nbsp;&nbsp;</span> <select id="rOAS2" class="form-control respuestas input-sm" style="width: 100px;"> <option></option> <option>Lucía</option> <option>Roberto</option> <option>Julio</option> </select></li><br><br>',
          '<li>&nbsp;&nbsp;¿Cuál es la diferencia porcentual entre el primer y el segundo lugares?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n3">R.:&nbsp;&nbsp;</span> <select id="rOAS3" class="form-control respuestas input-sm" style="width: 100px;"> <option></option> <option>El 72%</option> <option>El 108%</option> <option>El 18%</option> </select></li><br><br>',
          '<li>&nbsp;&nbsp;El diagrama circular se usa para.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="n3">R.:&nbsp;&nbsp;</span> <select id="rOAS4" class="form-control respuestas input-sm" style="width: 320px;"> <option></option> <option>Relacionar los datos entre sí y con el todo</option> <option>Relacionar los datos entre sí.</option> <option>Relacionar los datos con todo</option> </select></li><br><br>',
      ];

      observa.sort(f_randomico);
      $('#observa').append(observa);
    }

    function Preg4(){
      var libros = [
          '<span style="background-color: #B9AAFA; border-radius: 5px; padding: 5px;">Poesía</span> <span class="glyphicon glyphicon-play" style=" margin-right: 20px; color: #B9AAFA;"></span> <input type="number" id="rTMD1" class="form-control respuestas input-sm" style="width: 70px;">%<br><br>',
          '<span style="background-color: #AAF8FA; border-radius: 5px; padding: 5px;">Ciencia ficción</span> <span class="glyphicon glyphicon-play" style=" margin-right: 20px; color: #AAF8FA;"></span> <input type="number" id="rTMD2" class="form-control respuestas input-sm" style="width: 70px;">%<br><br>',
          '<span style="background-color: #AAFAD2; border-radius: 5px; padding: 5px;">Novela</span> <span class="glyphicon glyphicon-play" style=" margin-right: 20px; color: #AAFAD2;"></span> <input type="number" id="rTMD3" class="form-control respuestas input-sm" style="width: 70px;">%<br><br>',
          '<span style="background-color: #FAD4AA; border-radius: 5px; padding: 5px;">Cuento</span> <span class="glyphicon glyphicon-play" style=" margin-right: 20px; color: #FAD4AA;"></span> <input type="number" id="rTMD4" class="form-control respuestas input-sm" style="width: 70px;">%<br><br>',
      ];
      libros.sort(f_randomico);
      $('#libros').append(libros);
    }

///////////////////////////////////////////////////////////////////

  var notaFinalP1 = 0;
  function Resp1(){
      var c=0;
      var resp=['Latacunga', 'El segundo lugar', 'Pangua, Saquisilí y Sigchos'];
      for( var i=1; i<4; i++ ){
        if( $('#rLAS'+i).val() == resp[c] ){
            notaFinalP1++;
            $('#rLAS'+i).css("background-color", "#05D576");
          }else{
            $('#rLAS'+i).css("background-color", "#D50545");
          }
        c++;
      } 
    }




  var notaFinalP2 = 0;
  function Resp2() {
      var c=0;
      var resp = [162,60,30,108,30,15,54,20,10,36,200,360, 'los automotores'];
      for( var i=1; i<14; i++ ){
        if( $('#rLIO'+i).val() == resp[c] ){
            notaFinalP2++;
            $('#rLIO'+i).css("background-color", "#05D576");
          }else{
            $('#rLIO'+i).css("background-color", "#D50545");
          }
          c++;
      } 
  }



  var notaFinalP3 = 0;
  function Resp3(){
      var c=0;
      var resp=['Esteban', 'Julio', 'El 18%', 'Relacionar los datos entre sí y con el todo'];
      for( var i=1; i<5; i++ ){
        if( $('#rOAS'+i).val() == resp[c] ){
            notaFinalP3++;
            $('#rOAS'+i).css("background-color", "#05D576");
          }else{
            $('#rOAS'+i).css("background-color", "#D50545");
          }
        c++;
      } 
    }



  var notaFinalP4 = 0;
  function Resp4(){
      var c=0;
      var resp=[17.54,35.08,21.05,26.31,57];
      for( var i=1; i<6; i++ ){
        if( $('#rTMD'+i).val() == resp[c] ){
            notaFinalP4++;
            $('#rTMD'+i).css("background-color", "#05D576");
          }else{
            $('#rTMD'+i).css("background-color", "#D50545");
          }
        c++;
      } 
    }

///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }


    $(document).ready(function() {
        Inicio();
        Preg1();
        Preg3();
        Preg4();

        function confirmar() {
        	Resp1();
          Resp2();
          Resp3();
          Resp4();
          
            var nota1 = (notaFinalP1*2.5)/3;
            var nota2 = (notaFinalP2*1.5)/13;
            var nota2_1 = parseFloat($('#calificacion2').val());
            var nota3 = (notaFinalP3*2.5)/4;
            var nota4 = (notaFinalP4*1.5)/5;
            var nota4_1 = parseFloat($('#calificacion4').val());
            

            var notaFinal = (nota1+nota2+nota2_1+nota3+nota4+nota4_1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        if( $('#calificacion2').val() !='' && $('#calificacion4').val() !='' ){
          if( $('#calificacion2').val()<=1 && $('#calificacion2').val()>=0 && $('#calificacion4').val()<=1 && $('#calificacion4').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
            $('#calificacion4').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido. (1 punto)');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
            $('#calificacion4').focus();
            $('#calificacion4').css("background-color", "#D50545");
        }
      });    

});





