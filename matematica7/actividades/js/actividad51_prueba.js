var titulos="aplico"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

    function Preg1(){

          var patron0 = Math.round(Math.random() * (1000) + 1);
                
          var problema = [];

          problema[0] = '<span>Rosario tejió <span class="n1"> ' + patron0 + ' </span> bufandas y las guardó en varios paquetes para entregar ' +
                         ' a sus clientes. ¿Puede hacer paquetes de 2, 5 o 10 bufandas?</span> <br><span>Explica ' +
                         ' tu respuesta. </span><br><br><textarea class="form-control" id="prob0"></textarea>';

          $("#problema").append(problema[0]);


      }

      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg1();

           function confirmar() {
        
            var nota1 = $('#calificacion').val();

              var notaFinal = nota1;
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
