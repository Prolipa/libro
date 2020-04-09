var titulos="reflexiono"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }




    function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {

            Inicio();

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
