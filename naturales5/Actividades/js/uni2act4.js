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

      function Preg2(){
        var act2 = [
            '¿A qué parte del cuerpo dan forma las falanges? &nbsp;&nbsp; <select id="rB1" class="form-control respuestasB" style="width: 175px;"> <option></option> <option value="2">Al cerebro</option> <option value="1">A los dedos</option> <option value="4">Los pulmones y el corazón</option> <option value="3">Los maxilares</option> </select><br>',
            '¿A qué órgano protege el cráneo? &nbsp;&nbsp; <select id="rB2" class="form-control respuestasB" style="width: 175px;"> <option></option> <option value="2">Al cerebro</option> <option value="1">A los dedos</option> <option value="4">Los pulmones y el corazón</option> <option value="3">Los maxilares</option> </select><br>',
            '¿Qué huesos de la cabeza permiten masticar los alimentos? &nbsp;&nbsp; <select id="rB3" class="form-control respuestasB" style="width: 175px;"> <option></option> <option value="2">Al cerebro</option> <option value="1">A los dedos</option> <option value="4">Los pulmones y el corazón</option> <option value="3">Los maxilares</option> </select><br>',
            '¿Qué órganos protegen las costillas? &nbsp;&nbsp; <select id="rB4" class="form-control respuestasB" style="width: 175px;"> <option></option> <option value="2">Al cerebro</option> <option value="1">A los dedos</option> <option value="4">Los pulmones y el corazón</option> <option value="3">Los maxilares</option> </select><br>',
        ];

        act2.sort(f_randomico);
        $('#act2').append(act2);
      }



      ////////////////////////////////////////////////////////////////

      var notaP1;
      var notaAP1=0;
      function Resp1(){
          for(var i=1; i<5; i++){
              if( $('#rA'+i).val() == i ){
                notaAP1++;
                $('#rA'+i).addClass('bien');
              }else{
                  $('#rA'+i).addClass('mal');
              }   
          }
          notaP1 = (notaAP1)/4;
      }



      var notaP2;
      var notaAP2=0;
      function Resp2(){
          for(var i=1; i<5; i++){
              if( $('#rB'+i).val() == i ){
                notaAP2++;
                $('#rB'+i).addClass('bien');
              }else{
                  $('#rB'+i).addClass('mal');
              }   
          }
          notaP2 = (notaAP2)/4;
      }

      


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg2();

        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();

            cor = (((parseFloat(notaP1) + parseFloat(notaP2)))*10)/2;
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
