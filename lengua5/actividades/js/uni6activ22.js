
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
          '<tr> <td>olor</td> <td><input type="text" class="form-control respuestas" id="rA1"></td> <td><input type="text" class="form-control respuestas" id="rA2"></td> </tr>',
          '<tr> <td>fama</td> <td><input type="text" class="form-control respuestas" id="rA3"></td> <td><input type="text" class="form-control respuestas" id="rA4"></td> </tr>',
          '<tr> <td>gracia</td> <td><input type="text" class="form-control respuestas" id="rA5"></td> <td><input type="text" class="form-control respuestas" id="rA6"></td> </tr>',
          '<tr> <td>amistad</td> <td><input type="text" class="form-control respuestas" id="rA7"></td> <td><input type="text" class="form-control respuestas" id="rA8"></td> </tr>',
      ];

      act1.sort(f_randomico);
      $('#act1').append(act1);
    }


    /////////////////////////////////////////////////

    var notaP1=0;
    function Resp1(){
      var resp=['oloroso','olorosa','famoso','famosa','gracioso','graciosa','amistoso','amistosa'];
      for( var i=1; i<9; i++ ){
        if( $('#rA'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
          notaP1++;
          $('#rA'+i).css('background-color', '#0AD874');
        }else{
          $('#rA'+i).css('background-color', '#D80A6B');
        }
      }
    }



    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar(puntajeAbiertas){
          Resp1();
            cor = ((notaP1*10)/8).toFixed(2);
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




