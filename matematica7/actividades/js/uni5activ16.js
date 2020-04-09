
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



  var notaFinalP1 = 0;
  function Resp1(){
      var c=0;
      var resp = [22,61.1,38.9,220,140];
      for( var i=1; i<6; i++ ){
        if( $('#rA'+i).val() == resp[c]){
            notaFinalP1++;
            $('#rA'+i).css("background-color", "#05D576");
          }else{
            $('#rA'+i).css("background-color", "#D50545");
          }
          c++;
      } 
    }


  var notaFinalP2 = 0;
  function Resp2(){
      var c=0;
      var resp = ['relacionar los datos entre sí y con el todo'];
      for( var i=1; i<2; i++ ){
        if( $('#rB'+i).val() == resp[c]){
            notaFinalP2++;
            $('#rB'+i).css("background-color", "#05D576");
          }else{
            $('#rB'+i).css("background-color", "#D50545");
          }
          c++;
      } 
    }


  var notaFinalP3 = 0;
  function Resp3(){
      var c=0;
      var resp = ['Es mayor la probabilidad de que vaya de paseo', '8/25', '0'];
      for( var i=1; i<4; i++ ){
        if( $('#rC'+i).val() == resp[c]){
            notaFinalP3++;
            $('#rC'+i).css("background-color", "#05D576");
          }else{
            $('#rC'+i).css("background-color", "#D50545");
          }
          c++;
      } 
    }


///////////////////////////////////////////////////////////////////

    $(document).ready(function() {
        Inicio();

        function confirmar() {
        	Resp1();
          Resp2();
          Resp3();
          
            var nota1 = (notaFinalP1*2)/5;
            var nota1_1 = parseFloat($('#calificacion2').val());
            var nota2 = (notaFinalP2*3);
            var nota3 = (notaFinalP3);
            

            var notaFinal = (nota1+nota1_1+nota2+nota3).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        if( $('#calificacion2').val() !='' ){
          if( $('#calificacion2').val()<=2 && $('#calificacion2').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que el puntaje ingresado no exceda lo permitido (2 puntos).');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }
      });    

});





