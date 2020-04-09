var titulos="aplico";
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


        var contenidos = [
                            '<tr style="background-color: #F1E7BD;">'+
                                '<td>Describe los antecedentes del árbol de navidad y cómo fue adoptado por el cristianismo.</td>'+
                                '<td><input type="text" id="rEN0" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr style="background-color: #D7BDF1;">'+
                                '<td>Resume la idea más importante del relato histórico y cierra el tema.</td>'+
                                '<td><input type="text" id="rEN1" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr style="background-color: #F1E7BD;">'+
                                '<td>Nos anticipa el tema del relato histórico antes de leerlo.</td>'+
                                '<td><input type="text" id="rEN2" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr style="background-color: #D7BDF1;">'+
                                '<td>Presenta el tema e informa dónde y cuándo ocurrieron los hechos que serán relatados.</td>'+
                                '<td><input type="text" id="rEN3" class="form-control respuestas"></td>'+
                            '</tr>',
        ]
        contenidos.sort(f_randomico);

            $.each( contenidos, function( i, item ) {
                $("#estructura").append( item );
            });

    }



    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<6; i++){
            if( i<3 ){
                if($('#pEXP'+(i) +'.pinta').text()){
                  notaFinalP1++;
                  $('#pEXP'+i).css("background-color", "#5ED188");
                }else{
                  $('#pEXP'+i).css("background-color", "#EF87A7");
                }
            }else{
                if($('#pEXP'+(i) +'.pinta').text()){
                  notaFinalP1--;
                  $('#pEXP'+i).css("background-color", "#EF87A7");
                }
            }
        }

    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg1();


          for(var i=1; i<6; i++){////Preg1

              $('#pEXP'+(i)).click(function(){
                  if($(this).hasClass('pinta')) {
                      $(this).removeClass('pinta')
                  }else{
                      $(this).addClass('pinta')
                  }

              });
          }

      function confirmar() {
    
        Resp1();

        var notaFinal = parseInt($('#calificacion1').val())+parseInt($('#calificacion2').val())+parseInt($('#calificacion3').val())+parseInt($('#calificacion4').val())+parseInt($('#calificacion5').val());    

            $("#txtNota").text(notaFinal+'/10');
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !=''  && $('#calificacion4').val() !='' && $('#calificacion5').val() !=''){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
          $('#calificacion5').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
          $('#calificacion5').focus();
          $('#calificacion5').css("background-color", "#D50545");
        }
        
      });

  });
