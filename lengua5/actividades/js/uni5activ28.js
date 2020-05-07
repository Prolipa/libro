
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $(".panel-collapse").addClass('in');

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });




    $(document).ready(function() {
        Inicio();

        function confirmar() {
          var nota1 = parseFloat($('#calificacion1').val());

          var notaFinal = (nota1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[10];
        for( var i=1; i<2; i++ ){
          if( $('#calificacion'+i).val() !='' ){
            if( $('#calificacion'+i).val()<=punt[i-1] && $('#calificacion'+i).val()>=0 ){
              c++;
              $('#calificacion'+i).addClass('b');
            }else{
              alert('La calificación no es valida, verifique que el puntaje ingresado no exceda los '+punt[i-1]+' puntos.');
              $('#calificacion'+i).focus();
              $('#calificacion'+i).addClass('m');
            }
          }else{
              $('#calificacion'+i).focus();
              $('#calificacion'+i).addClass('m');
          }
        }
        if( c==1 ){confirmar();}
        c=0;
      });    

});





