var titulos="aplico";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $(".panel-collapse").addClass('in');
  }

      function Cargar() {   
          location.reload(true);
      }
    

      ////////////////////////////////////////////////////////////////


      var notaP2;
      var notaAP2=0;
      function Resp2(){
          for(var i=1; i<3; i++){
              if(  $('#rC'+i).val() == i ){
                notaAP2++;
                $('#rC'+i).addClass('bien');
              }else{
                $('#rC'+i).addClass('mal');
              }
          }   

          notaP2 = (notaAP2)/2;
      }


      function mostrar1(file, img){
        var archivo = document.getElementById("file"+file).files[0];
        var reader = new FileReader();
        if ($(this)) {
          reader.readAsDataURL(archivo );
          reader.onloadend = function () {
            document.getElementById("img"+img).src = reader.result;
          }
        }
      }


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();

        function confirmar(puntajeAbiertas){
          Resp2();

          var notaS;
          if( parseFloat($('#txtNota1').text()) ){
            notaS = ((parseFloat($('#txtNota1').text())))/13;
          }else{
            notaS = 0;
          }

            cor = (((parseFloat(puntajeAbiertas) + parseFloat(notaP2) + 
              parseFloat(notaS)))*10)/7;
            calificacion=1;
            itemsT=1;
            cont=1;
            ejer=1;
            inc=0;
            Calculo_nota();

            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);
            return false
        }

      $("#bt_comprobar").click(function() {
        punt=[3, 1, 1];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=punt.length+1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          $('#bt_comprobar').attr('disabled', true);
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });
