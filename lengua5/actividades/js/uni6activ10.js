
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



    function Preg2(){

      var act2 = [
        '<span style="padding: 5px; border: 2px solid #EEAE06; border-radius: 15px; cursor: pointer; display: inline-block; margin: 15px;" id="rB1">&nbsp;&nbsp;¿Quién o qué es?&nbsp;&nbsp;</span>',
        '<span style="padding: 5px; border: 2px solid #6506EE; border-radius: 15px; cursor: pointer; display: inline-block; margin: 15px;" id="rB2">&nbsp;&nbsp;¿Para qué sirve?&nbsp;&nbsp;</span>',
        '<span style="padding: 5px; border: 2px solid #1ED087; border-radius: 15px; cursor: pointer; display: inline-block; margin: 15px;" id="rB3">&nbsp;&nbsp;¿Dónde está ubicado?&nbsp;&nbsp;</span>',
        '<span style="padding: 5px; border: 2px solid #EEAE06; border-radius: 15px; cursor: pointer; display: inline-block; margin: 15px;" id="rB4">&nbsp;&nbsp;¿Cómo es?&nbsp;&nbsp;</span>',
        '<span style="padding: 5px; border: 2px solid #6506EE; border-radius: 15px; cursor: pointer; display: inline-block; margin: 15px;" id="rB5">&nbsp;&nbsp;¿Qué lugares importantes tiene?&nbsp;&nbsp;</span>',
        '<span style="padding: 5px; border: 2px solid #1ED087; border-radius: 15px; cursor: pointer; display: inline-block; margin: 15px;" id="rB6">&nbsp;&nbsp;¿Qué hace?&nbsp;&nbsp;</span>',
        '<span style="padding: 5px; border: 2px solid #EEAE06; border-radius: 15px; cursor: pointer; display: inline-block; margin: 15px;" id="rB7">&nbsp;&nbsp;¿Por qué es importante?&nbsp;&nbsp;</span>',
        '<span style="padding: 5px; border: 2px solid #6506EE; border-radius: 15px; cursor: pointer; display: inline-block; margin: 15px;" id="rB8">&nbsp;&nbsp;¿Qué tiene?&nbsp;&nbsp;</span>',
      ];

      act2.sort(f_randomico);
      $('#act2').append(act2);

    }



    $(document).ready(function() {
        Inicio();
        Preg2();

        for(var i=1; i<9; i++){

            $('#rB'+(i)).click(function(){
              setTimeout(function(){ nextPrev(1); }, 500);
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
        punt=[4,3,3];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=4;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });





