
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<3; i++){
              if( $('#rLPI'+i ).val() == '1' ){
                  notaFinalP1++;
                  $('#rLPI'+i).css("background-color", "#5ED188");
              }else{
                  $('#rLPI'+i).css("background-color", "#EF87A7");
              }

        }

    }





    $(document).ready(function() {
      Inicio();


      function confirmar() {

        Resp1();

        var nota1 = (notaFinalP1*5)/2;
        var nota2 = parseFloat($('#calificacion2').val());

        var notaFinal = (nota1+nota2).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

          if( $('#calificacion2').val() !='' && parseFloat($('#calificacion2').val()) <= 5 ){
              confirmar();
              $('#calificacion2').css("background-color", "#05D576");
          }else{
              $('#calificacion2').focus();
              $('#calificacion2').css("background-color", "#D50545");
        }
        
      });

  });