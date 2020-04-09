
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

        var escribir1 = [
          '¿Sobre qué acontecimiento escribirás?&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 520px; display: inline-block;"><br><br>',
          '¿Para qué vas a escribir esa noticia?&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 530px; display: inline-block;"><br><br>',
          '¿A qué público irá dirigida?&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 600px; display: inline-block;"><br><br>',
          '¿Qué aspecto del acontecimiento te llama más la atención?&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 400px; display: inline-block;"><br><br>',
          '¿Qué información adicional puede ser útil?&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 520px; display: inline-block;"><br><br>',          
        ];

        escribir1.sort(f_randomico);
        $.each( escribir1, function( i, item ) {
            $( "#escribir1" ).append( item );
        });
    }




    function Preg2(){
                                    
      var escribir2 = [
          '¿Qué ocurrió?&nbsp;&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 650px; display: inline-block;"><br><br>',
          '¿Cuándo?&nbsp;&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 700px; display: inline-block;"><br><br>',
          '¿Dónde?&nbsp;&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 700px; display: inline-block;"><br><br>',
          '¿Cómo?&nbsp;&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 700px; display: inline-block;"><br><br>',
          '¿Quiénes intervinieron?&nbsp;&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 550px; display: inline-block;"><br><br>',
          '¿Por qué?&nbsp;&nbsp;&nbsp;<input type="text" class="form-control respuestas" style="width: 700px; display: inline-block;"><br><br>',
        ];

        escribir2.sort(f_randomico);
        $.each( escribir2, function( i, item ) {
            $( "#escribir2" ).append( item );
        });

    }






    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg1();
      Preg2();



          for(var i=1; i<15; i++){////Preg1

              $('#sPM'+(i)).click(function(){
                  if($(this).hasClass('pinta')) {
                      $(this).removeClass('pinta')
                  }else{
                      $(this).addClass('pinta')
                  }

              });
          }

      function confirmar() {

        var notaFinal;


        var nota1 = parseFloat($('#calificacion1').val());
        var nota2 = parseFloat($('#calificacion2').val());
        var nota3 = parseFloat($('#calificacion3').val());
        var nota4 = parseFloat($('#calificacion4').val());
        
        notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal+'/10');
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if( $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' && $('#calificacion4').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
        }
        
      });

  });