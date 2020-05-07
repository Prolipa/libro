
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

          var notaFinal = (nota1+nota2).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[5,5];
        for( var i=1; i<3; i++ ){
          if( $('#calificacion'+i).val() !='' ){
            if( $('#calificacion'+i).val()<=punt[i-1] && $('#calificacion'+i).val()>=0 ){
              c++;
              $('#calificacion'+i).addClass('b');
            }else{
              
              $('#calificacion'+i).focus();
              $('#calificacion'+i).addClass('m');
            }
          }else{
              $('#calificacion'+i).focus();
              $('#calificacion'+i).addClass('m');
          }
        }
        
        if( c==2 ){confirmar();}
        c=0;

      });
});





