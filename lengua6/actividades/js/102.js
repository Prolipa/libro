
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

        var resp = ['jugamos','entrenábamos','decidió','anotó','practicaré'];

        for(var i=1; i<6; i++){
              if( $('#rCEB'+i ).val() == resp[i-1] ){
                  notaFinalP1++;
                  $('#rCEB'+i).css("background-color", "#5ED188");
              }else{
                  $('#rCEB'+i).css("background-color", "#EF87A7");
              }

        }

    }





    $(document).ready(function() {
      Inicio();


      function confirmar() {

        Resp1();

        var nota1 = (notaFinalP1*10)/5;

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

              confirmar();
        
      });

  });