
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

    var notaFinalP1 = 0;
    function Resp1(){

        for(var j=1; j<5; j++){          
            if( $('#rLTR'+j).val() == '1' && $('#rLTR'+j).val() != '' ){
                notaFinalP1++;
                $('#rLTR'+j).css("background-color", "#5ED188");
            }else{
                $('#rLTR'+j).css("background-color", "#EF87A7");
            }
        }


        for(var i=1; i<4; i++){
            if( i==1 ){
                if($('#sRP'+i +'.pinta').text()){
                  notaFinalP1++;
                  $('#sRP'+i).css("background-color", "#5ED188");
                }else{
                  $('#sRP'+i).addClass('mal');
                }
            }else{
                if($('#sRP'+(i) +'.pinta').text()){
                  notaFinalP1--;
                  $('#sRP'+i).css("background-color", "#EF87A7");
                }
            }
        }

    }





    $(document).ready(function() {
      Inicio();
      Preg1();

      for(var i=1; i<4; i++){////Preg1

            $('#sRP'+i).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


      function confirmar() {

        Resp1();

        var nota1;
        var nota2 = parseFloat($('#calificacion1').val());

        if(notaFinalP1<0){nota1 = 0;}else{nota1 = (notaFinalP1*7)/5;}

        var notaFinal = (nota1+nota2).toFixed(2);

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