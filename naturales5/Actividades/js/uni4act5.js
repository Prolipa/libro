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
            
        ];
        act1.sort(f_randomico);
        $('#act1').append(act1);
        
      }


////////////////////////////////////////////////////////////////////////////// 

      var notaP1;
      var notaAP1 = 0;
      function Resp1(){
        for(var i=1; i<10; i++) {
          if( i < 4 ){
            if( $('#rA'+i).hasClass('pinta') ){
                $('#rA'+i).addClass('bien1');
                notaAP1++;
            }
          }else{
            if( $('#rA'+i).hasClass('pinta') ){
                $('#rA'+i).addClass('mal1');
                notaAP1--;
            }
          }
        }

        if( notaAP1 < 0 ){
          notaP1 = 0;
        }else{
          notaP1 = (notaAP1)/3;
        }
      }



      var notaP2;
      var notaAP2=0;
      function Resp2(){
        var resp = ['ciclo', 'vivos', 'crecen', 'mueren', 'aves', 'flor', 'polinización'];
          for(var i=1; i<=resp.length; i++){
              if($('#rB'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
                notaAP2++;
                $('#rB'+i).addClass('bien');
              }else{
                $('#rB'+i).addClass('mal');
              }
          }
          notaP2 = (notaAP2)/resp.length;
      }


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg1();

        for(var i=1; i<5; i++){
            $('#rA'+(i)).click(function(){
              if($(this).hasClass('glyphicon-remove')) {
                  $(this).removeClass('glyphicon-remove')
              }else{
                  $(this).addClass('glyphicon-remove')
              }
            });
        }

        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();

            cor = ((parseFloat(puntajeAbiertas) + parseFloat(notaP1) + 
            parseFloat(notaP2))*10)/3;
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