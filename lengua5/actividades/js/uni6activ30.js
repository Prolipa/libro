
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

    function Preg1(){
      var act1 = [
          '<div class="col-sm-4" align="center"  style="border: 1px solid #1A17D7;"> <br>Yo soy el tigre pintado<br>de las pintas menuditas.<br>Yo soy el que se enamora<br>de toda muchacha bonita.<br><br> <input type="text" id="rA1" class="form-control respuestas input-sm"><br><br> </div>',
          '<div class="col-sm-4" align="center"  style="border: 1px solid #1A17D7;"> <br>Para mí todo es bonito.<br>Para mí todo es igual.<br>Soy un hombre afortunado<br>que canta siempre al despertar.<br><br> <input type="text" id="rA2" class="form-control respuestas input-sm"><br><br> </div>',
          '<div class="col-sm-4" align="center"  style="border: 1px solid #1A17D7;"> <br>En el principio, había seis cielos sobre<br>la tierra, y seis mundos debajo de ella.<br>En los cielos superiores vivía Kamui,<br>el dios creador, con sus sirvientes…<br><br> <input type="text" id="rA3" class="form-control respuestas input-sm"><br><br> </div>',
      ];
      act1.sort(f_randomico);
      $('#act1').append(act1);
    }


    var notaP1;
    var notaFinalP1=0;
    function Resp1(){
      var resp = ['amorfino', 'copla', 'mito'];
      for( var i=1; i<4; i++ ){
        if( $('#rA'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
          $('#rA'+i).css('background-color', '#17D791');
          notaFinalP1++;
        }else{
          $('#rA'+i).css('background-color', '#D71748');
        }
      }
      notaP1 = ((notaFinalP1*10)/3).toFixed(2);
    }


    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar(puntajeAbiertas){
            Resp1();
            cor = notaP1;
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
        punt=[];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });





