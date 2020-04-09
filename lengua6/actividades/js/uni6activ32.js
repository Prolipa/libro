
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Cargar() {   
      location.reload(true);
    }


    function Preg3(){
      var act3 = [
          '• <span id="rC1" style="cursor: pointer;">La importancia de los derechos de los niños</span>.<br><br>',
          '• <span id="rC2" style="cursor: pointer;">El partido de fútbol del fin de semana</span>.<br><br>',
          '• <span id="rC3" style="cursor: pointer;">La casa abierta de fin de año</span>.<br><br>',
          '• <span id="rC4" style="cursor: pointer;">La violencia en el país y qué hacer para prevenirla</span>.<br><br>',
      ];
      act3.sort(f_randomico);
      $('#act3').append(act3);
    }
    //////////////////////////////////////////////////////////////


    $(document).ready(function() {
        Inicio();
        Preg3();

        for(var i=1; i<5; i++){
            $('#rC'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


        function confirmar(puntajeAbiertas){
            cor = puntajeAbiertas;
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

      $("#Calificar").click(function() {
        punt=[1,1,1,1,1,1,1,1,1,1];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=11;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });





