
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    function Preg1(){

        var ilustraciones = [
        '<div class="col-sm-4" align="center"> <img src="img/i1_p150_act1.jpg" class="img-responsive"><br> Tus llaves están &nbsp;&nbsp;<input type="text" id="rOI1" class="form-control respuestas" style="width: 120px;display: inline-block;"> </div>',
        '<div class="col-sm-4" align="center"> <img src="img/i2_p150_act1.jpg" class="img-responsive"><br> Mi primo llegó &nbsp;&nbsp;<input type="text" id="rOI2" class="form-control respuestas" style="width: 120px;display: inline-block;"> </div>',
        '<div class="col-sm-4" align="center"> <img src="img/i3_p150_act1.jpg" class="img-responsive"><br> La tortuga camina &nbsp;&nbsp;<input type="text" id="rOI3" class="form-control respuestas" style="width: 120px;display: inline-block;"> </div>',
        ];

        ilustraciones.sort(f_randomico);
        $('#ilustraciones').append(ilustraciones);

    }


    $(document).ready(function() {
      Inicio();
      Preg1();

      var notaFinalP1=0;
      function Resp1(){

        var resp = ['allá','hoy','lentamente'];
        for( var i=1; i<4; i++ ){

            if( $('#rOI'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
              notaFinalP1++;
              $('#rOI'+i).css("background-color", "#05D576");
            }else{
              $('#rOI'+i).css("background-color", "#D50545");
            }

        }          

      }

      function confirmar() {
        Resp1();
        
        var nota1 = (notaFinalP1*10)/3;

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if(  $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        }
        
      });

  });