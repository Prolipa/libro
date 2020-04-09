
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    

    var notaFinalP = 0;
    function Resp(){

      var resp = ['80','1','1','1'];
      for(var i=1; i<5; i++){

          if( $('#rCET'+i).val() == resp[i-1] ){
            notaFinalP++;
            $('#rCET'+i).css('background-color','#4BCD76');
          }else{
            $('#rCET'+i).css('background-color','#CD4B6B');
          }

      }        

    }





    $(document).ready(function() {
      Inicio();



      function confirmar() {

        Resp();

        var nota = (notaFinalP*7)/4;
        var nota4 = parseFloat($('#calificacion1').val());

        var notaFinal = (nota+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if( $('#calificacion1').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }
        
      });

  });