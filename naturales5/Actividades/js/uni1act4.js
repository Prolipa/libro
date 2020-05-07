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
        var act1 = [];
        for( var i=1; i<6; i++ ){
          act1[i-1] = '<div style="width: 180px; display: inline-block; margin: 20px 20px 20px 20px;"> <input type="number" id="rA'+i+'" class="form-control respuestasA"> <img src="img/i'+i+'_p11_act1.jpg" class="img-responsive" style="display: inline-block;"> </div> ';
        }

        act1.sort(f_randomico);
        $('#act1').append(act1);
      }


      ////////////////////////////////////////////////////////////////


      var notaP1;
      var notaAP1=0;
      function Resp1(){
        var resp = [4,1,5,2,3];
          for(var i=1; i<6; i++){
              if($('#rA'+i).val() == resp[i-1] ){
                notaAP1++;
                $('#rA'+i).addClass('bien');
              }else{
                $('#rA'+i).addClass('mal');
              }
          }   
          notaP1 = (notaAP1)/5;
      }



      var notaP;
      var notaC=0;
      function Resp(){
        var respV = ['MUEREN', 'CICLO', 'CRECEN', 'NACEN'];
        var respH = ['REPRODUCEN'];

        var resV1 = ($('#rB3').val()+''+$('#rB5').val()+''+$('#rB8').val()+''+$('#rB17').val()+''+$('#rB20').val()+''+$('#rB23').val()).toUpperCase();
        var resV2 = ($('#rB1').val()+''+$('#rB2').val()+''+$('#rB4').val()+''+$('#rB6').val()+''+$('#rB11').val()).toUpperCase();
        var resV3 = ($('#rB14').val()+''+$('#rB18').val()+''+$('#rB21').val()+''+$('#rB24').val()+''+$('#rB26').val()+''+$('#rB28').val()).toUpperCase();
        var resV4 = ($('#rB16').val()+''+$('#rB19').val()+''+$('#rB22').val()+''+$('#rB25').val()+''+$('#rB27').val()).toUpperCase();
        
        var resH1 = ($('#rB7').val()+''+$('#rB8').val()+''+$('#rB9').val()+''+$('#rB10').val()+''+$('#rB11').val()+''+$('#rB12').val()+''+$('#rB13').val()+''+$('#rB14').val()+''+$('#rB15').val()+''+$('#rB16').val()).toUpperCase();

        if( resV1 == respV[0] ){
          notaC++;
          $('#rB3').addClass('bien');
          $('#rB5').addClass('bien');
          $('#rB8').addClass('bien');
          $('#rB17').addClass('bien');
          $('#rB20').addClass('bien');
          $('#rB23').addClass('bien');
        }else{
          $('#rB3').addClass('mal');
          $('#rB5').addClass('mal');
          $('#rB8').addClass('mal');
          $('#rB17').addClass('mal');
          $('#rB20').addClass('mal');
          $('#rB23').addClass('mal');
        }

        if( resV2 == respV[1] ){
          notaC++;
          $('#rB1').addClass('bien');
          $('#rB2').addClass('bien');
          $('#rB4').addClass('bien');
          $('#rB6').addClass('bien');
          $('#rB11').addClass('bien');
        }else{
          $('#rB1').addClass('mal');
          $('#rB2').addClass('mal');
          $('#rB4').addClass('mal');
          $('#rB6').addClass('mal');
          $('#rB11').addClass('mal');
        }

        if( resV3 == respV[2] ){
          notaC++;
          $('#rB4').addClass('bien');
          $('#rB18').addClass('bien');
          $('#rB21').addClass('bien');
          $('#rB24').addClass('bien');
          $('#rB26').addClass('bien');
          $('#rB28').addClass('bien');
        }else{
          $('#rB4').addClass('mal');
          $('#rB18').addClass('mal');
          $('#rB21').addClass('mal');
          $('#rB24').addClass('mal');
          $('#rB26').addClass('mal');
          $('#rB28').addClass('mal');
        }

        if( resV4 == respV[3] ){
          notaC++;
          $('#rB16').addClass('bien');
          $('#rB19').addClass('bien');
          $('#rB22').addClass('bien');
          $('#rB25').addClass('bien');
          $('#rB27').addClass('bien');
        }else{
          $('#rB16').addClass('mal');
          $('#rB19').addClass('mal');
          $('#rB22').addClass('mal');
          $('#rB25').addClass('mal');
          $('#rB27').addClass('mal');
        }

        ////////////////////////////////////////
        if( resH1 == respH[0] ){
          notaC++;
          $('#rB7').addClass('bien');
          $('#rB8').addClass('bien');
          $('#rB9').addClass('bien');
          $('#rB10').addClass('bien');
          $('#rB11').addClass('bien');
          $('#rB12').addClass('bien');
          $('#rB13').addClass('bien');
          $('#rB14').addClass('bien');
          $('#rB15').addClass('bien');
          $('#rB16').addClass('bien');
        }else{
          $('#rB7').addClass('mal');
          $('#rB8').addClass('mal');
          $('#rB9').addClass('mal');
          $('#rB10').addClass('mal');
          $('#rB11').addClass('mal');
          $('#rB12').addClass('mal');
          $('#rB13').addClass('mal');
          $('#rB14').addClass('mal');
          $('#rB15').addClass('mal');
          $('#rB16').addClass('mal');
        }

        notaP = ((notaC)/(respV.length+respH.length)).toFixed(2);
      }

      


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg1();


        function confirmar(puntajeAbiertas){
          Resp1();
          Resp();

            cor = (((parseFloat(notaP1) + parseFloat(notaP) + 
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
