
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


    function Preg3(){
      var act3 = [
          'pera / perra &nbsp;&nbsp;&nbsp;&nbsp;La &nbsp;&nbsp;<input type="text" class="form-control respuestas" id="rC1" style="border: none; border-bottom: 1px solid #00B2FF; border-bottom-style: dashed; width: 100px;">&nbsp;&nbsp; es una fruta con muchas vitaminas.<br>',
          'carreta / careta &nbsp;&nbsp;&nbsp;&nbsp;Iba mucha gente encima de la &nbsp;&nbsp;<input type="text" class="form-control respuestas" id="rC2" style="border: none; border-bottom: 1px solid #00B2FF; border-bottom-style: dashed; width: 100px;">&nbsp;&nbsp;.<br>',
          'pero / perro &nbsp;&nbsp;&nbsp;&nbsp;Estoy cansada, &nbsp;&nbsp;<input type="text" class="form-control respuestas" id="rC3" style="border: none; border-bottom: 1px solid #00B2FF; border-bottom-style: dashed; width: 100px;">&nbsp;&nbsp; voy al entrenamiento.<br>',
      ];

      act3.sort(f_randomico);
      $('#act3').append(act3);
    }



    //////////////////////////////////////
    var notaP1;
    var notafinalP1=0;
    function Resp1(){
      var resp=['carretilla','enredo','israel','rama','rosa','torre'];

      for( var i=0; i<6; i++ ){
        if( (($('#rA1').val()+','+$('#rA2').val()).toLowerCase().replace(/ |\.| /gi, "").split(',').sort())[i] == resp[i] ){
          notafinalP1++;
          $('#rA1').css("background-color", "#1AE79C");
          $('#rA2').css("background-color", "#1AE79C");
        }else{
          $('#rA1').css("background-color", "#E71A4E");
          $('#rA2').css("background-color", "#E71A4E");
        }
      }
      notaP1 = (notafinalP1*2)/6;
    }


    var notaP2;
    var notafinalP2=0;
    function Resp2(){
      var resp=['pera','careta'];
      for( var i=1; i<3; i++ ){
        if( $('#rB'+i).val().toLowerCase().replace(/ /gi, '') == resp[i-1] ){
          notafinalP2++;
          $('#rB'+i).css("background-color", "#1AE79C");
        }else{
          $('#rB'+i).css("background-color", "#E71A4E");
        }
      }
      notaP2 = (notafinalP2*1)/2;
    }



    var notaP3;
    var notafinalP3=0;
    function Resp3(){
      var resp=['pera','carreta','pero'];
      for( var i=1; i<4; i++ ){
        if( $('#rC'+i).val().toLowerCase().replace(/ /gi, '') == resp[i-1] ){
          notafinalP3++;
          $('#rC'+i).css("background-color", "#1AE79C");
        }else{
          $('#rC'+i).css("background-color", "#E71A4E");
        }
      }
      notaP3 = (notafinalP3*2)/3;
    }



    ///////////////////////////////////////////

    $(document).ready(function() {
        Inicio();
        Preg3();

        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();
          Resp3();
            cor = puntajeAbiertas+notaP1+notaP2+notaP3;
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
        punt=[2,2,2];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=4;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });





