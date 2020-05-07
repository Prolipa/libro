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




      var notaP1, notaAP1=0;
      function Resp1(){
        var resp = ['lagartija', '', '', '', 'vaca', 'conejo',
         'caballo', 'mariposa', 'gallina', '', '', ''];
        var repetidos = [], c = 1, d = 5, rep = 0, res;
        for(var i=1; i<4; i++){//cantidad de columnas
          for(var j=c; j<d; j++){//cantidad de filas
            for(var k=c; k<d; k++){
              res = $('#rA'+j).val().replace(/ |\.| /gi, "").toLowerCase();
              if( res == resp[k-1] && $('#rA'+j).val() != '' ){
                repetidos.push(res);
                for(var l=0; l<repetidos.length; l++){
                  if( res == repetidos[l] ){
                    rep++;
                  }
                }
                  if(rep == 1){
                    notaAP1++;
                    $('#rA'+j).css('background-color', '#05D576');
                    $('#rA'+j).css('color', 'blue');
                  }else{
                    if( res != '' ){
                      $('#rA'+j).css('background-color', 'orange');
                      $('#rA'+j).css('color', 'white');
                      $('#rA'+j).val($('#rA'+j).val() + ' - Repetido!');
                    }
                  } 
                rep=0;
                break;
              }else{
                if( res != '' ){
                  $('#rA'+j).css('background-color', '#D50545');
                  $('#rA'+j).css('color', 'white');
                }
              }
            }
          }
          c=c+4; d=d+4; repetidos=[]; res='';
        }
      notaP1 = (notaAP1)/(resp.length-6);//-6 por los campos vacios
      }



      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();

        function confirmar(puntajeAbiertas){
          Resp1();

            cor = ((parseFloat(puntajeAbiertas) + parseFloat(notaP1))*10)/3;
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
        punt=[1,1];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=punt.length+1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          $('#bt_comprobar').attr('disabled', true);
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });
