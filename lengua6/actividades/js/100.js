
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

    var notaFinalP = 0;
    function Resp(){

        for(var i=1; i<3; i++){
              if( $('#rRP'+i ).val() == '1' ){
                  notaFinalP++;
                  $('#rRP'+i).css("background-color", "#5ED188");
              }else{
                  $('#rRP'+i).css("background-color", "#EF87A7");
              }

        }

    }





    $(document).ready(function() {
      Inicio();


      function confirmar() {

        Resp();

        var nota = (notaFinalP*10)/2;

        var notaFinal = (nota).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

          confirmar();
        
      });

  });