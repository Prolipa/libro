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

        var resp = ['desarrollo','conclusión','título','introducción']

          for(var i=0; i<4; i++){

                if( $('#rEN'+i).val().toLowerCase().replace(/ /g, "") == resp[i]){
                    notaFinalP1++;
                    $('#rEN'+i).css("background-color", "#5ED188");
                }else{
                    $('#rEN'+i).css("background-color", "#EF87A7");
                }               

          }

    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg1();

      function confirmar() {
    
        Resp1();

        var notaFinal = ((notaFinalP1*10)/4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
confirmar();
       /*if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        }*/
        
      });

  });