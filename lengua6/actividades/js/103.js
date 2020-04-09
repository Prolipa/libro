
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

      var subraya = [
      '<div class="col-sm-4" align="center" id="eTC4" style="cursor: pointer; display: inline-block;"><br> el género de quien realiza la acción<br><br> </div>',
      '<div class="col-sm-4" align="center" id="eTC1" style="cursor: pointer; display: inline-block;"><br> el número (singular – plural)<br><br> </div>',
      '<div class="col-sm-4" align="center" id="eTC5" style="cursor: pointer; display: inline-block;"><br> el adjetivo<br><br> </div>',
      '<div class="col-sm-4" align="center" id="eTC2" style="cursor: pointer; display: inline-block;"><br> la persona gramatical<br><br> </div>',
      '<div class="col-sm-4" align="center" id="eTC3" style="cursor: pointer; display: inline-block;"><br> el tiempo en que ocurrió la acción<br><br> </div>',
      '<div class="col-sm-4" align="center" id="eTC6" style="cursor: pointer; display: inline-block;"><br> el artículo<br><br> </div>',
      ];

      subraya.sort(f_randomico);
      $.each( subraya, function( i, item ) {
      $( "#subraya" ).append( item );
      });

    }   


    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<7; i++){
            if( i<4 ){
                if($('#eTC'+i +'.pinta').text()){
                  notaFinalP1++;
                  $('#eTC'+i).addClass('bien');
                }else{
                  $('#eTC'+i).addClass('mal');
                }
            }else{
                if($('#eTC'+(i) +'.pinta').text()){
                  notaFinalP1--;
                  $('#eTC'+i).addClass('mal');
                }
            }
        }

    }





    $(document).ready(function() {
      Inicio();
      Preg1();

      for(var i=1; i<7; i++){////Preg1

            $('#eTC'+i).click(function(){
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
        if(notaFinalP1<0){nota1 = 0;}else{nota1 = (notaFinalP1*10)/3;}


        

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
  
        /* if( $('#calificacion1').val() !='' && $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        } */
          
        
      });

  });