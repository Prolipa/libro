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
                                            '<tr>'+
                                                '<td>leer</td>'+
                                                '<td><input type="text" id="rVDS0" class="form-control respuestas" style="text-align: center;"></td>'+
                                                '<td>leyendo</td>'+
                                            '</tr>',
                                            '<tr>'+
                                                '<td><input type="text" id="rVDS1" class="form-control respuestas" style="text-align: center;"></td>'+
                                                '<td>asado</td>'+
                                                '<td>asando</td>'+
                                            '</tr>',
                                            '<tr>'+
                                                '<td>hervir</td>'+
                                                '<td><input type="text" id="rVDS2" class="form-control respuestas" style="text-align: center;"></td>'+
                                                '<td><input type="text" id="rVDS3" class="form-control respuestas" style="text-align: center;"></td>'+
                                            '</tr>',
                                            '<tr>'+
                                                '<td><input type="text" id="rVDS4" class="form-control respuestas" style="text-align: center;"></td>'+
                                                '<td>comprendido</td>'+
                                                '<td><input type="text" id="rVDS5" class="form-control respuestas" style="text-align: center;"></td>'+
                                            '</tr>',
        ]
        contenidos.sort(f_randomico);

            $.each( contenidos, function( i, item ) {
                $("#verboides").append( item );
            });

    }





    function Preg2(){


        var contenidos = [
                            '<span style="color: #0F58D8;">•</span> <input type="text" id="rCO0" class="form-control respuestas" style="width: 120px;"> ejercicios aeróbicos fortalece el corazón.<br><br>',
                            '<span style="color: #0F58D8;">•</span> Marcela aprendió a tejer únicamente <input type="text" id="rCO1" class="form-control respuestas" style="width: 120px;"> revistas.<br><br>',
                            '<span style="color: #0F58D8;">•</span> La regla es que cada golosina <input type="text" id="rCO2" class="form-control respuestas" style="width: 120px;"> será decomisada.<br><br>',
                            '<span style="color: #0F58D8;">•</span> No uses tu teléfono celular para <input type="text" id="rCO3" class="form-control respuestas" style="width: 120px;"> llamadas o mensajes durante la conferencia.<br><br>',
                            '<span style="color: #0F58D8;">•</span> Leonel atraviesa el continente <input type="text" id="rCO4" class="form-control respuestas" style="width: 120px;"> su bicicleta<br><br>',
                            '<span style="color: #0F58D8;">•</span> Miguel repetía constantemente el verso <input type="text" id="rCO5" class="form-control respuestas" style="width: 120px;"> en clases.<br><br>',
        ]
        contenidos.sort(f_randomico);

            $.each( contenidos, function( i, item ) {
                $("#oraciones").append( item );
            });

    }





    var notaFinalP1 = 0;
    function Resp1(){

         var resp = ['leído','asar','hervido','hirviendo','comprender','comprendiendo']

          for(var i=0; i<6; i++){

                if( $('#rVDS'+i).val().toLowerCase().replace(/ /g, "") == resp[i]){
                    notaFinalP1++;
                    $('#rVDS'+i).css("background-color", "#5ED188");
                }else{
                    $('#rVDS'+i).css("background-color", "#EF87A7");
                }               

          }


    }





    var notaFinalP2 = 0;
    function Resp2(){

        var resp = ['practicar','leyendo','encontrada','responder','pedaleando','escuchado']

          for(var i=0; i<6; i++){

                if( $('#rCO'+i).val().toLowerCase().replace(/ |:| /g, "") == resp[i]){
                    notaFinalP2++;
                    $('#rCO'+i).css("background-color", "#5ED188");
                }else{
                    $('#rCO'+i).css("background-color", "#EF87A7");
                }               

          }

    }




    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg1();
      Preg2();

      function confirmar() {
    
        Resp1();
        Resp2();
        var nota1 = (notaFinalP1*3)/6;
        var nota2 = (notaFinalP2*3)/6;
        var nota3 = parseFloat($('#calificacion0').val());
        var nota4 = parseFloat($('#calificacion1').val());

        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion0').val() !='' && $('#calificacion1').val() !=''){
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