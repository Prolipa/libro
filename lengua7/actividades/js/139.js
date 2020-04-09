
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

      var notaFinalP1=0;
      function Resp1(){

          if( $('#rOI1').val() == '1' ){
            notaFinalP1++;
            $('#rOI1').css("background-color", "#05D576");
          }else{
            $('#rOI1').css("background-color", "#D50545");
          }

      }

      function confirmar() {
        Resp1();
        
        var nota1 = (notaFinalP1)*5;
        var nota2 = parseFloat($('#calificacion2').val());

        var notaFinal = (nota1+nota2).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if(  $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        }
        
      });

  });