
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
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
        
            if($('#calificacion1').val() !=''){
              confirmar();
              $('#calificacion1').css("background-color", "#05D576");
            }else{
              $('#calificacion1').focus();
              $('#calificacion1').css("background-color", "#D50545");
            }
            
      });

  });