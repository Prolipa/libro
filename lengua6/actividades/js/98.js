
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){

      var relee = [
      '<span id="sRP1" style="cursor: pointer;">• Información que se refiere a la idea más importante del párrafo.</span><br><br>',
      '<span id="sRP2" style="cursor: pointer;">• Información que puede ser eliminada del párrafo, porque repite ideas.</span><br><br>',
      '<span id="sRP3" style="cursor: pointer;">• Datos específicos sobre los sucesos que se narran.</span><br><br>',
      ];

      relee.sort(f_randomico);
      $.each( relee, function( i, item ) {
      $( "#relee" ).append( item );
      });

    }   


    //////////////////////////////////////////

    var notaFinalP2 = 0;
    function Resp2(){

        for(var i=1; i<13; i++){
            if( i<5 ){
                if($('#sSTA'+i +'.pinta').text()){
                  notaFinalP2++;
                  $('#sSTA'+i).css("background-color", "#5ED188");
                }else{
                  $('#sSTA'+i).addClass('mal');
                }
            }else{
                if($('#sSTA'+(i) +'.pinta').text()){
                  notaFinalP2--;
                  $('#sSTA'+i).css("background-color", "#EF87A7");
                }
            }
        }

    }



        var notaFinalP3 = 0;
        function Resp3(){
       
              if( $('#rTTT1').val() == '1'){
                  notaFinalP3++;
                  $('#rTTT1').css("background-color", "#5ED188");
              }else{
                  $('#rTTT1').css("background-color", "#EF87A7");
              }

          }


    $(document).ready(function() {
      Inicio();
      Preg1();

      for(var i=1; i<13; i++){////Preg2

            $('#sSTA'+i).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


      function confirmar() {

        Resp2();
        Resp3();

        var nota1 = parseFloat($('#calificacion1').val());
        var nota2 = parseFloat($('#calificacion2').val());
        var nota2_1;
        if(notaFinalP2<0){nota2_1 = 0;}else{nota2_1 = (notaFinalP2*2)/4;}
        var nota3 = notaFinalP3*3;


        

        var notaFinal = (nota1+nota2+nota2_1+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

  
         if( $('#calificacion1').val() !='' && $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        }
          
        
      });

  });