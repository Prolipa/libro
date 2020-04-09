
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){
      var escribe = [
          '<div class="col-sm-3" align="center"> <img src="img/i1_p188_act1.jpg" class="img-responsive"><br> <input type="text" class="form-control respuestas resp1" style="width: 150px;" id="rA1"> </div>',
          '<div class="col-sm-3" align="center"> <img src="img/i2_p188_act1.jpg" class="img-responsive"><br> <input type="text" class="form-control respuestas resp1" style="width: 150px;" id="rA2"> </div>',
          '<div class="col-sm-3" align="center"> <img src="img/i3_p188_act1.jpg" class="img-responsive"><br> <input type="text" class="form-control respuestas resp1" style="width: 150px;" id="rA3"> </div>',
          '<div class="col-sm-3" align="center"> <img src="img/i4_p188_act1.jpg" class="img-responsive"><br> <input type="text" class="form-control respuestas resp1" style="width: 150px;" id="rA4"> </div>',
      ];

      escribe.sort(f_randomico);
      $('#escribe').append(escribe);
    }

    //////////////////////////////////

    var notaFinalP1=0;
    function Resp1(){
     var resp = ['elnacional', 'barcelona', 'liga', 'emelec'];
     for( var i=1; i<5; i++ ){
        if( $('#rA'+i).val().toLowerCase().replace(/ |\.| /gi, "").replace(/dequito|deportivauniversitaria|sc|cs|cd|ldu/gi, "") == resp[i-1] ){
          notaFinalP1++;
          $('#rA'+i).css("background-color", "#05D576");
        }else{
          $('#rA'+i).css("background-color", "#D50545");
        }
      }
    }


    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar() {
            Resp1();

            var nota1 = (notaFinalP1*10)/4;
            var notaFinal = (nota1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        confirmar();/*
        if( $('#calificacion1').val() !='' ){
          if( $('#calificacion1').val()<=10 && $('#calificacion1').val()>=0 ){
            confirmar();
            $('#calificacion1').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
        }*/
      });    

});





