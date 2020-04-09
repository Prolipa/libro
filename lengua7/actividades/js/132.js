
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

        var significado = [
            '<tr> <td>Su ojo estaba irritado.</td> <td>La noche nos mira con su ojo plateado.</td> </tr> <tr> <td>Ojo significa:&nbsp;&nbsp;<input type="text" id="rEES1" class="form-control respuestas input-sm" style="width: 250px; display: inline-block;"></td> <td>Ojo significa:&nbsp;&nbsp;<input type="text" id="rEES2" class="form-control respuestas input-sm" style="width: 250px; display: inline-block;"></td> </tr>',
            '<tr> <td>El cielo está nublado.</td> <td>Eres mi cielo</td> </tr> <tr> <td>Cielo significa:&nbsp;&nbsp;<input type="text" id="rEES3" class="form-control respuestas input-sm" style="width: 250px; display: inline-block;"></td> <td>Cielo significa:&nbsp;&nbsp;<input type="text" id="rEES4" class="form-control respuestas input-sm" style="width: 250px; display: inline-block;"></td> </tr>',
            '<tr> <td>Tú corazón está sano.</td> <td>Se ganó su corazón.</td> </tr> <tr> <td>Corazón significa:&nbsp;&nbsp;<input type="text" id="rEES5" class="form-control respuestas input-sm" style="width: 250px; display: inline-block;"></td> <td>Corazón significa:&nbsp;&nbsp;<input type="text" id="rEES6" class="form-control respuestas input-sm" style="width: 250px; display: inline-block;"></td> </tr>',
        ]; 
        significado.sort(f_randomico);
        $("#significado").append(significado);

    }






    $(document).ready(function() {
      Inicio();
      Preg1();


      function confirmar() {

        var nota1 = parseFloat($('#calificacion1').val());
        var nota2 = parseFloat($('#calificacion2').val());

        var notaFinal = (nota1+nota2).toFixed(2);

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