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
            '<img src="img/i1_p31_act1.jpg" class="img-responsive" style="display: inline-block; margin: 10px 10px 10px 10px; min-width: 70px; vertical-align: top;"> <div align="center" style="width: 80%; display: inline-block;"><br> <div align="justify"> Antes de nacer, ¿dónde se desarrollan las crías de la rana?<br> <div style="width: 45%; min-width: 175px; display: inline-block; background-color: #E6DEEF; padding: 5px 15px 5px 15px; margin: 5px 5px 5px 5px;"> <input type="text" id="rA1" class="form-control respuestasA" maxlength="1"> En el interior de un huevo </div> <div style="width: 45%; min-width: 175px; display: inline-block; background-color: #FAD7E6; padding: 5px 15px 5px 15px; margin: 5px 5px 5px 5px;"> <input type="text" id="rA6" class="form-control respuestasA" maxlength="1"> En el vientre de la madre </div><br><br> </div> </div>',
            '<img src="img/i2_p31_act1.jpg" class="img-responsive" style="display: inline-block; margin: 10px 10px 10px 10px; min-width: 70px; vertical-align: top;"> <div align="center" style="width: 80%; display: inline-block;"><br> <div align="justify"> Antes de nacer, ¿dónde se desarrollan las crías del mono?<br> <div style="width: 45%; min-width: 175px; display: inline-block; background-color: #D7F1FA; padding: 5px 15px 5px 15px; margin: 5px 5px 5px 5px;"> <input type="text" id="rA4" class="form-control respuestasA" maxlength="1"> En el interior de un huevo </div> <div style="width: 45%; min-width: 175px; display: inline-block; background-color: #FAECD7; padding: 5px 15px 5px 15px; margin: 5px 5px 5px 5px;"> <input type="text" id="rA2" class="form-control respuestasA" maxlength="1"> En el vientre de la madre </div><br><br> </div> </div>',
        ];

        act1.sort(f_randomico);
        $('#act1').append(act1);
      }



      function Preg4(){
        var act4 = [];
        var colores = ['#7EE2FA', '#8A7EFA', '#BAF7E9', '#8AE3CF', '#ECB2F3', '#FDD1AF', '#FDB0AF'];
        var tam = [100,130,130,150,150,120,175];
        for( var i=1; i<8; i++ ){
          act4.push('<div style="width: 22%; min-width: '+tam[i-1]+'px; display: inline-block; margin: 10px 0px 10px 0px;"> <input type="text" id="rD'+i+'" class="form-control respuestasD" style="border-color: '+colores[i-1]+';" maxlength="12"> <img src="img/i'+i+'_p32_act4.jpg" class="img-responsive"> </div> '); 
        }
        act4.sort(f_randomico);
        $('#act4').append(act4);
      }


      ////////////////////////////////////////////////////////////

      var notaP1;
      var notaAP1=0;
      function Resp1(){
          for(var i=1; i<7; i++){
            if( i < 4 ){
              if( $('#rA'+i).val() != '' ){
                notaAP1++;
                $('#rA'+i).addClass('bien');
              }
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
            notaP1 = ((notaAP1)/3)*2;    
          }  
      }



      var notaP4;
      var notaAP4=0;
      function Resp4(){
        var resp = ['ovíparo', 'vivíparo', 'vivíparo', 'ovovivíparo',
         'ovíparo', 'ovíparo', 'vivíparo'];
          for(var i=1; i<=resp.length; i++){
              if( $('#rD'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
                notaAP4++;
                $('#rD'+i).addClass('bien');
              }else{
                $('#rD'+i).addClass('mal');
            }
          }   
          notaP4 = (notaAP4)/resp.length;    
      }


      ////////////////////////////////////////////////////////////


      $(document).ready(function() {
        Inicio();
        Preg1();
        Preg4();

        function confirmar(puntajeAbiertas){
          Resp1();
          Resp4();

            cor = ((parseFloat(puntajeAbiertas) + parseFloat(notaP1) + 
            parseFloat(notaP4))*10)/4;
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
