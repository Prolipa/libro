
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    var notaFinalP1 = 0;
    function Resp1(){

      var resp = ['ministro','ex','oficial','extra','carne','voro'];
      for( var i=1; i<7; i++ ){

            if( $('#rDP'+i).val().toLowerCase().replace(/ |-|_| /gi, "") == resp[i-1] ){
                notaFinalP1++;
                $('#rDP'+i).css("background-color", "#5ED188");
            }else{
                $('#rDP'+i).css("background-color", "#D50545");
            }

      }

    }





    $(document).ready(function() {
      Inicio();



      function confirmar() {
        Resp1();


        var nota1 = (notaFinalP1*5)/6;
        var nota2 = parseFloat($('#calificacion2').val());


        

        var notaFinal = (nota1+nota2).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        
       if( $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        } 
          
        
      });

  });