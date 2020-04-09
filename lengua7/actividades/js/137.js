
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

        var afirmaciones = [
          '<div style="background-color: #F5F1CE; border-radius: 20px; padding: 15px;"> Martín Bustamante, director del Zoológico de Guayllabamba, afirma que, a pesar de los esfuerzos por su conservación, el oso de anteojos sigue en peligro de extinción. <br> <div align="center"> <select id="rLSA1" class="form-control respuestas" style="width: 50%;"> <option></option> <option>Datos</option> <option>De Hecho</option> <option value="1">De autoridad</option> </select> </div> </div> <br>',
          '<div style="background-color: #CEF5D8; border-radius: 20px; padding: 15px;"> Los osos de anteojos están en peligro de extinción porque cada vez hay menos áreas de bosque en las que puedan encontrar alimento. <br> <div align="center"> <select id="rLSA2" class="form-control respuestas" style="width: 50%;"> <option></option> <option>Datos</option> <option value="1">De Hecho</option> <option>De autoridad</option> </select> </div> </div> <br>',
          '<div style="background-color: #CEE7F5; border-radius: 20px; padding: 15px;"> Según investigaciones recientes, solamente quedan 2 018 osos de anteojos en el Ecuador. <br> <div align="center"> <select id="rLSA3" class="form-control respuestas" style="width: 50%;"> <option></option> <option value="1">Datos</option> <option>De Hecho</option> <option>De autoridad</option> </select> </div> </div> <br>',
        ]; 
        afirmaciones.sort(f_randomico);
        $("#afirmaciones").append(afirmaciones);

    }

////////////////////////////////////////////


    var notaFinalP1 = 0;
    function Resp1(){

        for( var i=1; i<4; i++ ){

            if( $('#rLSA'+i).val() == '1' ){
                notaFinalP1++;
                $('#rLSA'+i).css("background-color", "#05D576");
            }else{
                $('#rLSA'+i).css("background-color", "#D50545");
            }

        }

    }



    $(document).ready(function() {
      Inicio();
      Preg1();


      function confirmar() {
        Resp1();

        var nota1 = (notaFinalP1*4)/3;
        var nota2 = parseFloat($('#calificacion2').val());

        var notaFinal = (nota1+nota2).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

      if( $('#calificacion2').val() !='' ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }
        
      });

  });