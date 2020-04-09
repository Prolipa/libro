var titulos="aplico"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }

function Preg1(){

      var patron1 = Math.round(Math.random() * (50) + 1);

      var problema = [];

      problema[0] = '<font size="4px"><label>En una ferretería se venden </span><font size="5px;">' +
      '<span id="cant" style="color: #D4850B; "> '+ patron1 +' </span></font> <span> quintales de cemento.' +
      ' Si en cada una de las semanas siguientes se piensa' +
      'triplicar la venta de cemento, ¿cuántos quintales se venderán en la cuarta semana?</span></font>' +                   
      '<textarea id="resProblema" class="form-control"></textarea>';                  

      $("#problema").append(problema[0]);

  }


    function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {

            Inicio();
            Preg1();

           function confirmar() {

              var notaFinal = $('#calificacion').val();
                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);
                            
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion').val() != ''){
          confirmar();
          $('#calificacion').css("background-color", "green");
        }else{
          $('#calificacion').css("background-color", "red");
        }


          
      });

      });
