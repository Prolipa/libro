
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

        var preguntas = [
            '<li> Observa la ilustración y contesta. ¿Qué tema están debatiendo estos estudiantes? <input type="text" class="form-control respuestas"><br> </li>',
            '<li> ¿Qué argumento da el joven para apoyar su punto de vista? <input type="text" class="form-control respuestas"><br> </li>',
            '<li> ¿Qué argumentos en contra da la joven? <input type="text" class="form-control respuestas"><br> </li>',
        ]; 
        preguntas.sort(f_randomico);
        $("#preguntas").append(preguntas);

    }






    $(document).ready(function() {
      Inicio();
      Preg1();


      function confirmar() {

        var nota1 = parseFloat($('#calificacion1').val());

        var notaFinal = (nota1).toFixed(2);

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