
  function Inicio() {
     // $(".panel-collapse").removeClass('in');
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




    $(document).ready(function() {
        Inicio();

        function confirmar() {
          var nota1 = parseFloat($('#calificacion1').val());
          var nota2 = parseFloat($('#calificacion2').val());
          var nota3 = parseFloat($('#calificacion3').val());
          var nota4 = parseFloat($('#calificacion4').val());
          var nota5 = parseFloat($('#calificacion5').val());
          var nota6 = parseFloat($('#calificacion6').val());

          var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[2,2,1.5,1.5,1.5,1.5];
        for( var i=1; i<7; i++ ){
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
        
        if( c==6 ){confirmar();}
        c=0;

      });
});





