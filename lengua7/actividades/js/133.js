
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });




    function Preg3(){ 

        var equipos = [
           '<tr> <td align="justify">Su piel parece…</td> <td><input type="text" class="form-control respuestas"></td></tr>',
           '<tr> <td align="justify">Sus orejas son como…</td><td><input type="text" class="form-control respuestas"></td></tr>',
           '<tr> <td align="justify">Sus ojos son cual…</td><td><input type="text" class="form-control respuestas"></td></tr>',
           '<tr> <td align="justify">Su...</td> <td><input type="text" class="form-control respuestas"></td></tr>',
        ]; 
        equipos.sort(f_randomico);
        $("#equipos").append(equipos);

    }





    $(document).ready(function() {
      Inicio();
      Preg3();


      function confirmar() {

        var nota1 = parseFloat($('#calificacion1').val());
        var nota2 = parseFloat($('#calificacion2').val());
        var nota3 = parseFloat($('#calificacion3').val());
        var nota4 = parseFloat($('#calificacion4').val());

        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

      if( $('#calificacion1').val() !='' && $('#calificacion2').val() !=''  && $('#calificacion3').val() !='' && $('#calificacion4').val() !='' ){
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