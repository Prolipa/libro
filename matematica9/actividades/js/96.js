var titulos="refuerzo";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });






    var notaFinalP2 = 0;
    function Resp2(){

         var resp = [4.85,23.5225,47.045,2.85,8.1225,48.735,1.85,3.4225,41.07,0.15,0.0225,0.1125,1.12,1.3225,2.645,5.15,26.5225,132.6125,10.15,103.0225,206.045,34,478.255,15.15,8.2,54.55];

            for(var i=0; i<26; i++){             
                if( (($('#rDE'+i).val())) == resp[i] ){
                    notaFinalP2++;
                    $('#rDE'+i).css("background-color", "#5ED188");
                }else{
                    $('#rDE'+i).css("background-color", "#EF87A7");
                }

            }
    }




  


    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
      $(".panel-collapse").removeClass('in');
      Inicio();

      function confirmar() {
        Resp2();

        
        var nota1 = parseFloat($('#calificacion0').val());
        var nota2 = (notaFinalP2*6)/25;
        var nota3 = parseFloat($('#calificacion1').val());

        
        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if( $('#calificacion0').val() !='' && $('#calificacion1').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }
        
      });

  });
