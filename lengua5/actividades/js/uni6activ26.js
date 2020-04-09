
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


    function Preg4(){
      var act1 = [
          '<span id="rA3" style="padding: 10px; margin: 30px; border: 1px solid #A51FBD; border-radius: 10px; display: inline-block; cursor: pointer;">&nbsp;&nbsp;caretilla&nbsp;&nbsp;</span>',
          '<span id="rA1" style="padding: 10px; margin: 30px; border: 1px solid #A51FBD; border-radius: 10px; display: inline-block; cursor: pointer;">&nbsp;&nbsp;Carmen&nbsp;&nbsp;</span>',
          '<span id="rA4" style="padding: 10px; margin: 30px; border: 1px solid #A51FBD; border-radius: 10px; display: inline-block; cursor: pointer;">&nbsp;&nbsp;rrosa&nbsp;&nbsp;</span>',
          '<span id="rA2" style="padding: 10px; margin: 30px; border: 1px solid #A51FBD; border-radius: 10px; display: inline-block; cursor: pointer;">&nbsp;&nbsp;rodilla&nbsp;&nbsp;</span>',
      ];

      act1.sort(f_randomico);
      $('#act1').append(act1);
    }

    var notaP4;
    var notaFinalP4 = 0;
    function Resp4(){
        for(var i=1; i<5; i++){
              if( i<3 ){
                  if($('#rD'+(i) +'.pinta').text()){
                    notaFinalP4++;
                    $('#rD'+i).css("background-color", "#5ED188");
                  }
              }else{
                  if($('#rD'+(i) +'.pinta').text()){
                    $('#rD'+i).css("background-color", "#EF87A7");
                    notaFinalP4--;
                  }
              }
          }   

      if( notaFinalP4 < 0 ){
        notaP4=0;
      }else{
        notaP4 = (notaFinalP4*4)/2;
      }
    }

    $(document).ready(function() {
        Inicio();

        for(var i=1; i<5; i++){
            $('#rD'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar(puntajeAbiertas){

            cor = puntajeAbiertas+notaP1;
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
        punt=[6];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=2;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });





