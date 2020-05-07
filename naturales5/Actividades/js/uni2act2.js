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
        var act1_1 = [];
        var act1_2 = [];
        var act1_3 = [];
        var c=6;
        var d=11;
        for( var i=1; i<6; i++ ){
          act1_1[i-1] = '<div style="width: 120px; display: inline-block; margin: 10px 10px 0px 10px"> <img src="img/i'+i+'_p16_act1.jpg" class="img-responsive"> <input type="text" id="rA'+i+'" class="form-control respuestasA" maxlength="1"><br> </div>';
     
          act1_2[i-1] = '<div style="width: 120px; display: inline-block; margin: 10px 10px 0px 10px"> <img src="img/i'+i+'_p16_act1.jpg" class="img-responsive"> <input type="text" id="rA'+(c++)+'" class="form-control respuestasA" maxlength="1"><br> </div>';
  
          act1_3[i-1] = '<div style="width: 120px; display: inline-block; margin: 10px 10px 0px 10px"> <img src="img/i'+i+'_p16_act1.jpg" class="img-responsive"> <input type="text" id="rA'+(d++)+'" class="form-control respuestasA" maxlength="1"><br> </div>';
        }

        act1_1.sort(f_randomico);
        $('#act1_1').append(act1_1);

        act1_2.sort(f_randomico);
        $('#act1_2').append(act1_2);

        act1_3.sort(f_randomico);
        $('#act1_3').append(act1_3);
      }



      ////////////////////////////////////////////////////////////////

      var notaP1;
      var notaAP1=0;
      function Resp1(){
        var act1 = ['X', 'X', 'X', '', 'X', '', '', '', 'X', ''
        , '', '', 'X', '', 'X'];
          for(var i=1; i<16; i++){
              if( $('#rA'+i).val().toUpperCase() == act1[i-1] && $('#rA'+i).val() != '' ){
                notaAP1++;
                $('#rA'+i).addClass('bien');
              }else{
                if( $('#rA'+i).val() != '' ){
                  notaAP1--;
                  $('#rA'+i).addClass('mal');
                }
              }   
          }

          if( notaAP1 < 0 ){
            notaP1 = 0;
          }else{
            notaP1 = (notaAP1)/7;
          }
      }

      


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar(puntajeAbiertas){
          Resp1();

            cor = (((parseFloat(puntajeAbiertas) + parseFloat(notaP1)))*10);
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
        punt=[];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=punt.length+1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          $('#bt_comprobar').attr('disabled', true);
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });
