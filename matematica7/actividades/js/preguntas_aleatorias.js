var titulos="aplico"
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

      var raiz1 = [
          ['<li>Pregunta 1<br><ol type="a" class="lista2"></ol></li><br><br>'],
          ['<li>Pregunta 2<br><ol type="a" class="lista3"></ol></li><br><br>'],
          ['<li>Pregunta 3<br><ol type="a" class="lista4"></ol></li><br><br>'],          
      ]

      raiz1.sort(f_randomico);

      $.each( raiz1, function( i, item ) {
        $( ".lista1" ).append( item );
      });


      var raiz2 = [
          ['<li>P1 respuesta1<br></li>'],
          ['<li>P1 respuesta1 2<br></li>'],
          ['<li>P1 respuesta1 3<br></li>'],          
      ]

      raiz2.sort(f_randomico);

      $.each( raiz2, function( i, item ) {
        $( ".lista2" ).append( item );
      });


      var raiz3 = [
          ['<li>P2 respuesta 1<br></li>'],
          ['<li>P2respuesta 2<br></li>'],
          ['<li>P2 respuesta 3<br></li>'],          
      ]

      raiz3.sort(f_randomico);

      $.each( raiz3, function( i, item ) {
        $( ".lista3" ).append( item );
      });


      }



      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg1();

    
           function confirmar() {


    

                      $("#txtNota").text();
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        
          confirmar();
        
      });
    });
