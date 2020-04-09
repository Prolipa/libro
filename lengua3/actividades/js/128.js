
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

        var observa = [
        '<div class="col-sm-4" align="center"> <img src="img/i1_p132_act1.jpg" class="img-responsive"><br> <select class="form-control respuestas" id="rOI1" style="width: 200px;"> <option></option> <option>Declamar</option> <option value="1">Leer</option> <option>Bailar</option> <option>Cantar</option> </select> </div>',
        '<div class="col-sm-4" align="center"> <img src="img/i2_p132_act1.jpg" class="img-responsive"><br> <select class="form-control respuestas" id="rOI2" style="width: 200px;"> <option></option> <option>Cantar</option> <option>Leer</option> <option>Bailar</option> <option value="1">Declamar</option> </select> </div>',
        '<div class="col-sm-4" align="center"> <img src="img/i3_p132_act1.jpg" class="img-responsive"><br> <select class="form-control respuestas" id="rOI3" style="width: 200px;"> <option></option> <option value="1">Cantar</option> <option>Declamar</option> <option>Leer</option> <option>Recitar</option> </select> </div>',
        ]; 
        
        observa.sort(f_randomico);
        $("#observa").append(observa);

    }


    //////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1(){

        for( var i=1; i<4; i++ ){
            if( $('#rOI'+i).val() == '1' ){
              notaFinalP1++;
              $('#rOI'+i).css("background-color", "#05D576");
            }else{
              $('#rOI'+i).css("background-color", "#D50545");
          }
        }
           

    }


    $(document).ready(function() {
      Inicio();
      Preg1();

      function confirmar() {

        Resp1();

        var nota1 = (notaFinalP1*5)/3;
        var nota2 = parseFloat($('#calificacion1').val());
       

        var notaFinal = (nota1+nota2).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion1').val() !=''){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }
        
      });

  });