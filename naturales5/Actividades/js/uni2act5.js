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

      function Preg1(){
        var act1 = [
            '<li>¿Qué le permite correr a los atletas? &nbsp;&nbsp; <select class="form-control respuestasA" id="rA1" style="width: 250px;"> <option></option> <option value="2">En todo el cuerpo</option> <option value="3">Realizando ejercicios de estiramiento, planchas, abdominales, corriendo.</option> <option value="1">Los músculos y los huesos</option> </select><br></li>',
            '<li>¿En qué partes del cuerpo hay músculos? &nbsp;&nbsp; <select class="form-control respuestasA" id="rA2" style="width: 250px;"> <option></option> <option value="2">En todo el cuerpo</option> <option value="3">Realizando ejercicios de estiramiento, planchas, abdominales, corriendo.</option> <option value="1">Los músculos y los huesos</option> </select><br></li>',
            '<li>¿Cómo crees que se prepara un atleta antes de la maratón? &nbsp;&nbsp; <select class="form-control respuestasA" id="rA3" style="width: 250px;"> <option></option> <option value="2">En todo el cuerpo</option> <option value="3">Realizando ejercicios de estiramiento, planchas, abdominales, corriendo.</option> <option value="1">Los músculos y los huesos</option> </select><br></li>',
            '<li>¿Crees que participar en una maratón es beneficioso? <b>Argumenta</b> oralmente tus razones. <input type="number" id="calificacion1" class="form-control calificacion-aplico" placeholder="Puntaje/1"> <br></li>',
        ];

        act1.sort(f_randomico);
        $('#act1').append(act1);
      }



      ////////////////////////////////////////////////////////////////

      var notaP1;
      var notaAP1=0;
      function Resp1(){
          for(var i=1; i<4; i++){
              if( $('#rA'+i).val() == i ){
                notaAP1++;
                $('#rA'+i).addClass('bien');
              }else{
                  $('#rA'+i).addClass('mal');
              }   
          }
          notaP1 = (notaAP1)/3;
      }


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg1();
        
        function confirmar(puntajeAbiertas){
          Resp1();

            cor = (((parseFloat(puntajeAbiertas) + parseFloat(notaP1)))*10)/4;
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
        punt=[1,1,1];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=punt.length+1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          $('#bt_comprobar').attr('disabled', true);
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });
