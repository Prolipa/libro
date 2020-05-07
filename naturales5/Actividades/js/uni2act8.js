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

  
    function Preg3(){
      var act3 = [

      
      
      ];
      act3.sort(f_randomico);
      $('#act3').append(act3);
    }

    /////////////////////////////////////////////////////

      var notaP1;
      var notaAP1=0;
      function Resp1(){
        var resp = ['riñones', 'corazón', 'cerebro', 'estómago', 'huesos', 'pulmones', 'hígado', 'intestino',
        'uñasydedos', 'manos', 'ojos', 'nariz', 'pierna', 'brazo', 'labios', 'pelo', 'orejas', 'cabeza', 'pie'];
        var res = [];
        var c=0, d=8;
        for( var i=1; i<3; i++ ){
          res = $('#rA'+i).val().toLowerCase().replace(/ | |\.|de la boca|\n| /gi, "").split(',');
          for( var j=0; j<res.length; j++ ){
            for( var k=c; k<d; k++ ){
              if( res[j] == resp[k] ){
                notaAP1++;
                $('#rA'+i).css('background-color', '#2CDAA0');
              }else{
                $('#rA'+i).css('background-color', '#DA2C59');
              }
            }
          }
          res = [];
          c=8; d=19
        }
        notaP1 = (notaAP1)/19;
      }



    var notaP2;
    var notaAP2 = 0;
    function Resp2(){
        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4];
        for(var i=1; i<5; i++){//cantidad de destinos
            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ // 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaAP2++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }
        notaP2 = (notaAP2)/4;
    }




      var notaP3;
      var notaAP3=0;
      function Resp3(){
        for( var i=1; i<5; i++ ){              
          if( $('#rC'+i).val() == i ){
              notaAP3++;
              $('#rC'+i).css('background-color', '#2CDAA0');
          }else{
              $('#rC'+i).css('background-color', '#DA2C59');
          }
        }
        notaP3 = (notaAP3)/4;
      }
    

      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg2();
        Preg3();

        function confirmar(puntajeAbiertas){
            Resp1();
            Resp2();
            Resp3();

            cor = (((parseFloat(puntajeAbiertas) + parseFloat(notaP1) + 
              parseFloat(notaP2) + parseFloat(notaP3)))*10)/3;
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
