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
            '<div style="width: 150px; display: inline-block; margin: 10px 10px 10px 10px;"> <input type="text" id="rA1" class="form-control respuestasA" maxlength="1" style="float: left; position: relative; bottom: -30px; left: -5px;"> <img src="img/i1_p40_act1.png" class="img-responsive"> </div>',
            '<div style="width: 150px; display: inline-block; margin: 10px 10px 10px 10px;"> <input type="text" id="rA2" class="form-control respuestasA" maxlength="1" style="float: left; position: relative; bottom: -24px; left: -2px;"> <img src="img/i2_p40_act1.png" class="img-responsive"> </div>',
            '<div style="width: 150px; display: inline-block; margin: 10px 10px 10px 10px;"> <input type="text" id="rA3" class="form-control respuestasA" maxlength="1" style="float: left; position: relative; bottom: -25px; left: 1px;"> <img src="img/i3_p40_act1.png" class="img-responsive"> </div>',
            '<div style="width: 150px; display: inline-block; margin: 10px 10px 10px 10px;"> <img src="img/i4_p40_act1.png" class="img-responsive"> <input type="text" id="rA4" class="form-control respuestasA" maxlength="1" style="float: left; position: relative; top: -25px; left: -8px;"> </div>',
            '<div style="width: 150px; display: inline-block; margin: 10px 10px 10px 10px;"> <img src="img/i5_p40_act1.png" class="img-responsive"> <input type="text" id="rA5" class="form-control respuestasA" maxlength="1" style="float: left; position: relative; top: -22px; left: -2px;"> </div>',
            '<div style="width: 150px; display: inline-block; margin: 10px 10px 10px 10px;"> <img src="img/i6_p40_act1.png" class="img-responsive"> <input type="text" id="rA6" class="form-control respuestasA" maxlength="1" style="float: left; position: relative; top: -22px; left: -2px;"> </div>',
        ];
        act1.sort(f_randomico);
        $('#act1').append(act1);
        
      }


////////////////////////////////////////////////////////////////////////////// 

      var notaP1;
      var notaAP1=0;
      function Resp1(){
        var resp = [6,4,2,3,1,5];
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