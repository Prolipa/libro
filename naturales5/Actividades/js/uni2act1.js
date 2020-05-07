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
        var act1 = [];
        for( var i=1; i<5; i++ ){
          act1[i-1] = '<div style="width: 180px; display: inline-block; margin: 10px 10px 0px 10px"> <img src="img/i'+i+'_p15_act1.jpg" class="img-responsive"> <input type="text" id="rA'+i+'" class="form-control respuestasA" maxlength="1"><br> </div>';
        }
        act1.sort(f_randomico);
        $('#act1').append(act1);
      }



      ////////////////////////////////////////////////////////////////

      var notaP1;
      var notaAP1=0;
      function Resp1(){
        var act1 = ['X', '', '', ''];
          for(var i=1; i<5; i++){
            if(i<2){
              if($('#rA'+i).val().toUpperCase() != '' ){
                notaAP1++;
                $('#rA'+i).addClass('bien');
              }
            }else{
              if($('#rA'+i).val() != '' ){
                notaAP1--;
                $('#rA'+i).addClass('mal');
              }
            }   
          }

          if($('#rA5').val() == 1 ){
            notaAP1++;
            $('#rA5').addClass('bien');
          }else{
            $('#rA5').addClass('mal');
          }

          if( notaAP1 < 0 ){
            notaP1 = 0;
          }else{
            notaP1 = (notaAP1)/2;
          }
      }

      


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar(puntajeAbiertas){
          Resp1();

            cor = (((parseFloat(puntajeAbiertas) + parseFloat(notaP1)))*10)/2;
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
        punt=[1];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=punt.length+1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          $('#bt_comprobar').attr('disabled', true);
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });
