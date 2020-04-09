
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
      var encuesta = [
          '<li>¿Qué medio de comunicación es el preferido por el público?<br> <span class="n3">R.:&nbsp;&nbsp;</span> <select id="rLSB1" class="form-control respuestas input-sm" style="width: 120px;"> <option></option> <option>La TV</option> <option>Periódicos</option> <option>Otros</option> </select><br><br></li>',
          '<li>¿Qué medios de comunicación obtuvieron igual cantidad de votos?<br> <span class="n3">R.:&nbsp;&nbsp;</span> <select id="rLSB2" class="form-control respuestas input-sm" style="width: 170px;"> <option></option> <option>La TV - Periódicos</option> <option>La TV - Radio</option> <option>Ninguno</option> </select><br><br></li>',
          '<li>La gente prefiere comprar periódicos o escuchar la radio?<br> <span class="n3">R.:&nbsp;&nbsp;</span> <select id="rLSB3" class="form-control respuestas input-sm" style="width: 170px;"> <option></option> <option>Escuchar la radio</option> <option>Ver TV</option> <option>Leer Periódicos</option> </select><br><br></li>',
      ];

      encuesta.sort(f_randomico);
      $('#encuesta').append(encuesta);
    }


    function Preg2(){
      var playas = [
          '<li>¿Qué playa es la más visitada?<br> <span class="n3">R.:&nbsp;&nbsp;</span> <select id="rLSB4" class="form-control respuestas input-sm" style="width: 120px;"> <option></option> <option>Atacames</option> <option>Tonsupa</option> <option>Muisne</option> </select><br><br></li>',
          '<li>¿Cuáles son las dos playas menos visitadas por los turistas.?<br> <span class="n3">R.:&nbsp;&nbsp;</span> <select id="rLSB5" class="form-control respuestas input-sm" style="width: 190px;"> <option></option> <option>Pedernales y Same</option> <option>Pedernales y Tonsupa</option> <option>Pedernales y Muisne</option> </select><br><br></li>                              ',
      ];

      playas.sort(f_randomico);
      $('#playas').append(playas);
    }

///////////////////////////////////////////////////////////////////

  var notaFinalP = 0;
  function Resp(){
      var c=0;
      var resp=['La TV', 'Ninguno', 'Escuchar la radio', 'Atacames', 'Pedernales y Muisne'];
      for( var i=1; i<6; i++ ){
        if( $('#rLSB'+i).val() == resp[c] ){
            notaFinalP++;
            $('#rLSB'+i).css("background-color", "#05D576");
          }else{
            $('#rLSB'+i).css("background-color", "#D50545");
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
        Preg2();

        function confirmar() {
        	Resp();
          
            var nota = (notaFinalP*2);
            

            var notaFinal = (nota).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        confirmar();/*
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
        }*/
      });    

});





