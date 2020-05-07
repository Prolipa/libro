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
            '<div style="width: 30%; min-width: 175px; display: inline-block; margin: 10px 10px 10px 10px;"> <img src="img/i1_p38_act2.png" class="img-responsive"><br> <div style="background-color: #FFF7CC; border-radius: 40%;"> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB1" class="sombra"> </div> árbol<br> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB4" class="sombra"> </div> arbusto<br> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB5" class="sombra"> </div> hierba </div> </div>',
            '<div style="width: 30%; min-width: 175px; display: inline-block; margin: 10px 10px 10px 10px;"> <img src="img/i2_p38_act2.png" class="img-responsive"><br> <div style="background-color: #FFF7CC; border-radius: 40%;"> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB7" class="sombra"> </div> árbol<br> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB6" class="sombra"> </div> arbusto<br> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB2" class="sombra"> </div> hierba </div> </div>',
            '<div style="width: 30%; min-width: 175px; display: inline-block; margin: 10px 10px 10px 10px;"> <img src="img/i3_p38_act2.png" class="img-responsive"><br> <div style="background-color: #FFF7CC; border-radius: 40%;"> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB8" class="sombra"> </div> árbol<br> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB3" class="sombra"> </div> arbusto<br> <div style="border: 1px solid #947CD9; width: 30px; height: 20px; border-radius: 100%; display: inline-block; margin-right: 10px; vertical-align: bottom; cursor: pointer; background-color: white;" id="rB9" class="sombra"> </div> hierba </div> </div>',
        ];
        act2.sort(f_randomico);
        $('#act2').append(act2);
        
      }



      function Preg3(){
        var act3 = [
            '<tr> <td> <img src="img/i1_p38_act3.png" class="img-responsive"> </td> <td> <select id="rC1" class="form-control respuestasC"> <option></option> <option value="4">Fruto</option> <option value="2">Hojas</option> <option value="1">Tallo</option> <option value="3">Raíz</option> </select> </td> </tr>',
            '<tr> <td> <img src="img/i2_p38_act3.png" class="img-responsive"> </td> <td> <select id="rC2" class="form-control respuestasC"> <option></option> <option value="4">Fruto</option> <option value="2">Hojas</option> <option value="1">Tallo</option> <option value="3">Raíz</option> </select> </td> </tr>',
            '<tr> <td> <img src="img/i3_p38_act3.png" class="img-responsive"> </td> <td> <select id="rC3" class="form-control respuestasC"> <option></option> <option value="4">Fruto</option> <option value="2">Hojas</option> <option value="1">Tallo</option> <option value="3">Raíz</option> </select> </td> </tr>',
            '<tr> <td> <img src="img/i4_p38_act3.png" class="img-responsive"> </td> <td> <select id="rC4" class="form-control respuestasC"> <option></option> <option value="4">Fruto</option> <option value="2">Hojas</option> <option value="1">Tallo</option> <option value="3">Raíz</option> </select> </td> </tr>',
        ];
        act3.sort(f_randomico);
        $('#act3').append(act3);
        
      }


////////////////////////////////////////////////////////////////////////////// 

      var notaP1;
      var notaAP1=0;
      function Resp1(){
        var resp = [1,5,1,2,4];
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
      var notaAP2 = 0;
      function Resp2(){
        for(var i=1; i<10; i++) {
          if( i < 4 ){
            if( $('#rB'+i).hasClass('pinta') ){
                $('#rB'+i).addClass('bien1');
                notaAP2++;
            }
          }else{
            if( $('#rB'+i).hasClass('pinta') ){
                $('#rB'+i).addClass('mal1');
                notaAP2--;
            }
          }
        }

        if( notaAP2 < 0 ){
          notaP2 = 0;
        }else{
          notaP2 = (notaAP2)/3;
        }
      }


      var notaP3;
      var notaAP3 = 0;
      function Resp3(){
        for(var i=1; i<5; i++) {        
          if( $('#rC'+i).val() == i ){
            $('#rC'+i).addClass('bien1');
            notaAP3++;
          }else{
            $('#rC'+i).addClass('mal1')
          }
        }
        notaP3 = (notaAP3)/4;
      }

      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg2();
        Preg3();

        for(var i=1; i<10; i++){
            $('#rB'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();
          Resp3();

            cor = ((parseFloat(puntajeAbiertas) + parseFloat(notaP1) + 
            parseFloat(notaP2) + parseFloat(notaP3))*10)/3;
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