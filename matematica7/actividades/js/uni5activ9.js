
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


///////////////////////////////////////////////////////////////////




  var notaFinalP3 = 0;
  function Resp3() {
      var c=0;
      var resp = [69,10,1,30,0.13];
      for( var i=1; i<6; i++ ){
        if( $('#rRSE'+i).val() == resp[c] ){
            notaFinalP3++;
            $('#rRSE'+i).css("background-color", "#05D576");
          }else{
            $('#rRSE'+i).css("background-color", "#D50545");
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

        function confirmar() {
          Resp3();
            var nota1 = (notaFinalP3*10)/5;

            var notaFinal = (nota1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
confirmar();/*
        if( $('#calificacion2').val() !='' ){
          if( $('#calificacion2').val()<=1.5 && $('#calificacion2').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }*/
      });    

});





