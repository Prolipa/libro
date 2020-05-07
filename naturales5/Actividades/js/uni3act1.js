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
            '<div> •<div style="display: inline-block; margin: 10px 20px 10px 10px; padding: 5px 10px 5px 10px; background-color: #F6DCBF;"> Animal con plumas en su cuerpo. </div> <div style="display: inline-block; min-width: 140px;"> <input type="text" id="rA4" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i1_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"> </div> <div style="display: inline-block; min-width: 140px;"> <input type="text" id="rA1" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i2_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"> </div> <div style="display: inline-block; min-width: 140px;"> <input type="text" id="rA5" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i3_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"><br> </div> </div>',
            '<div> •<div style="display: inline-block; margin: 10px 20px 10px 10px; padding: 5px 10px 5px 10px; background-color: #D4BFF6;"> Animal con escamas en su cuerpo. </div> <div  style="display: inline-block; min-width: 140px;"> <input type="text" id="rA6" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i4_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"> </div> <div  style="display: inline-block; min-width: 140px;"> <input type="text" id="rA7" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i5_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"> </div> <div  style="display: inline-block; min-width: 140px;"> <input type="text" id="rA2" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i6_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"><br> </div> </div>',
            '<div> •<div style="display: inline-block; margin: 10px 20px 10px 10px; padding: 5px 10px 5px 10px; background-color: #C2EAD2;"> Animal con pelos en su cuerpo. </div> <div style="display: inline-block; min-width: 140px;"> <input type="text" id="rA3" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i7_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"> </div> <div style="display: inline-block; min-width: 140px;"> <input type="text" id="rA8" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i8_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"> </div> <div style="display: inline-block; min-width: 140px;"> <input type="text" id="rA9" class="form-control respuestasA sombra" maxlength="1"> <img src="img/i9_p25_act1.png" class="img-responsive" style="display: inline-block; position: relative; left: -10px; margin: 10px 10px 10px 0px;"><br> </div> </div>',
        ];
        act1.sort(f_randomico);
        $('#act1').append(act1);
        
      }



      function Preg2(){
        var act2 = [
            '<input type="text" id="rB1" maxlength="2" class="form-control respuestasB"> Amarrada a la estaca estaba una <input type="text" id="rB2" class="form-control respuestasB1" maxlength="15"><br><br>',
            '<input type="text" id="rB3" maxlength="2" class="form-control respuestasB"> Cada <input type="text" id="rB4" class="form-control respuestasB1" maxlength="15"> <br>con su pareja.<br><br>',
            '<input type="text" id="rB5" maxlength="2" class="form-control respuestasB"> Vive en el rancho un gordo <input type="text" id="rB6" class="form-control respuestasB1" maxlength="15"> <br><br>',
            '<input type="text" id="rB7" maxlength="2" class="form-control respuestasB"> Murió viejo el pobre <input type="text" id="rB8" class="form-control respuestasB1" maxlength="15"><br><br>',
            '<input type="text" id="rB9" maxlength="2" class="form-control respuestasB"> Son como rastrillo las uñas del <input type="text" id="rB10" class="form-control respuestasB1" maxlength="15"><br><br>',
        ];
        act2.sort(f_randomico);
        $('#act2').append(act2);


        var act2_1 = [
            '<input type="text" id="rB11" maxlength="2" class="form-control respuestasB"> Le despertaba un gallo a mi <input type="text" id="rB12" class="form-control respuestasB1" maxlength="15"><br><br>',
            '<input type="text" id="rB13" maxlength="2" class="form-control respuestasB"> Baja del cerro el amo y su <input type="text" id="rB14" class="form-control respuestasB1" maxlength="15"> <br><br>',
            '<input type="text" id="rB15" maxlength="2" class="form-control respuestasB"> Del bosque no me gusta salir dijo el humilde <input type="text" id="rB16" class="form-control respuestasB1" maxlength="15"> <br><br>',
        ];
        act2_1.sort(f_randomico);
        $('#act2_1').append(act2_1);
        
      }



//////////////////////////////////////////////////////////////////////////////      
      var notaP1;
      var notaAP1=0;
      function Resp1(){
          for(var i=1; i<10; i++){
            if( i<4 ){
              if($('#rA'+i).val() != '' ){
                notaAP1++;
                $('#rA'+i).addClass('bien');
              }
            }else{
              if($('#rA'+i).val() != '' ){
                notaAP1--;
                $('#rA'+i).addClass('mal');
              }
            }

            if( notaAP1 < 0 ){
              notaP1 = 0;
            }else{
              notaP1 = (notaAP1)/3;
            }
          }
      }





      var notaP2;
      var notaAP2=0;
      function Resp2(){
        var resp = ['1', 'vaca', '8', 'oveja', '5', 'chancho', '4', 'conejo', '10', 'armadillo',
         '2', 'caballo', '7', 'perro', '11', 'tapir'];
          for(var i=1; i<=resp.length; i++){
              if($('#rB'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
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
        Preg2();

        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();

            cor = ((parseFloat(puntajeAbiertas) + parseFloat(notaP1) +
            parseFloat(notaP2))*10)/2;
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
