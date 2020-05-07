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
            '• En la <input type="text" class="form-control respuestasB" id="rB1" maxlength="15"> se disminuye la fuerza física pero se tiene una gran <input type="text" class="form-control respuestasB" id="rB2" maxlength="15"> de la vida.<br><br>',
            '• En la <input type="text" class="form-control respuestasB" id="rB3" maxlength="15"> se aprende a hablar, a caminar y se <input type="text" class="form-control respuestasB" id="rB4" maxlength="15"> mucho.<br><br>',
            '• En la <input type="text" class="form-control respuestasB" id="rB5" maxlength="15"> se mudan los <input type="text" class="form-control respuestasB" id="rB6" maxlength="15"> de leche por los definitivos.<br><br>',
            '• La etapa donde ocurren varios <input type="text" class="form-control respuestasB" id="rB7" maxlength="15"> físicos es en la <input type="text" class="form-control respuestasB" id="rB8" maxlength="15">.<br><br>',
            '• La <input type="text" class="form-control respuestasB" id="rB9" maxlength="15"> donde el cuerpo está totalmente desarrollado es en la <input type="text" class="form-control respuestasB" id="rB10" maxlength="15">.<br><br>',
        ];

        act2.sort(f_randomico);
        $('#act2').append(act2);
      }




      function Preg3(){
        var act3 = [];
        for( var i=1; i<5; i++ ){
          act3[i-1] = '<div style="width: 220px; display: inline-block; margin: 20px 20px 20px 20px;"> <img src="img/i'+i+'_p10_act3.jpg" class="img-responsive"> <input type="number" id="rC'+i+'" class="form-control respuestasC"> </div>';
        }

        act3.sort(f_randomico);
        $('#act3').append(act3);
      }


      function mostrar1(file, img){
        var archivo = document.getElementById("file"+file).files[0];
        var reader = new FileReader();
        if ($(this)) {
          reader.readAsDataURL(archivo );
          reader.onloadend = function () {
            document.getElementById("img"+img).src = reader.result;
          }
        }
      }

      ////////////////////////////////////////////////////////////////

      var notaP1;
      var notaAP1=0;
      function Resp1(){
        var resp = ['Adultez', 'Vejez', 'Niñez', 'Adolescencia', 'Vejez', 'Adultez', 'Infancia'];
          for(var i=1; i<=resp.length; i++){
              if($('#rA'+i).val() == resp[i-1] ){
                notaAP1++;
                $('#rA'+i).addClass('bien');
              }else{
                $('#rA'+i).addClass('mal');
              }
          }   
          notaP1 = (notaAP1)/resp.length;
      }



      var notaP2;
      var notaAP2=0;
      function Resp2(){
        var resp = ['vejez', 'experiencia', 'infancia', 'juega', 
        'niñez', 'dientes', 'cambios', 'adolescencia', 'etapa', 'adultez'];
          for(var i=1; i<=resp.length; i++){
              if($('#rB'+i).val().replace(/ /gi, "").toLowerCase() == resp[i-1] ){
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
        Preg2();


        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();

            cor = (((parseFloat(notaP1) + parseFloat(notaP2) + 
              parseFloat(puntajeAbiertas)))*10)/3;
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
