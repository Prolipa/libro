
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
      $(".panel-collapse").removeClass('in');


      function confirmar() {
 
        var nota1 = parseFloat($('#calificacion3').val());
        var nota2 = parseFloat($('#calificacion4').val());
        var nota3 = parseFloat($('#calificacion5').val());
        

        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if( $('#calificacion3').val() !='' && $('#calificacion4').val() !='' && $('#calificacion5').val() !='' ){
          confirmar();
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
          $('#calificacion5').css("background-color", "#05D576");
        }else{
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
          $('#calificacion5').focus();
          $('#calificacion5').css("background-color", "#D50545");
        }
        
      });

  });