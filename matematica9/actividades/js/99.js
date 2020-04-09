
  function Inicio() {
      $(".panel-collapse").removeClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    var notaFinalP1 = 0;
    function Resp1() {
        
        var resp = ['-10x^2-2x', '0', '5'];

        for( var i=1; i<4; i++){
            if( $('#rETF'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
              $('#rETF'+i).css("background-color", "#05D576");
              notaFinalP1++;
            }else{
              $('#rETF'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP4 = 0;
    function Resp4() {
        
        var resp = ['2x+14', 'x', '5', '2+x', 'x', '2', '5-x', '2x+14', '5', '2', 'x', 'x', '7x', '6x+20', 'x', '2x', 'x', '20', '2x', 'trapecio', 'rectángulo', '20', '20', 'x', '', 'x', 'x', '20+x', '2', 'x+20x'];

        for( var i=1; i<31; i++){
            if( $('#rCDR'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rCDR'+i).css("background-color", "#05D576");
              notaFinalP4++;
            }else{
              $('#rCDR'+i).css("background-color", "#D50545");
            }
        }
    }


    function Cargar() {   
      location.reload(true);
    }


      $(document).ready(function() {
            Inicio();

            var nota2;
            var nota3;
           function confirmar1() {
            nota2 = parseFloat($('#calificacion2').val());
            nota3 = parseFloat($('#calificacion3').val());
          }

          function confirmar() {
            Resp1();
            Resp4();

            var nota1 = (notaFinalP1*1.5)/3;
            var nota4 = (notaFinalP4*3.5)/30;

            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

        if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar1();
          if( nota2<=2.5 && nota2>=0 && nota3<=2.5 && nota3>=0 ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
            $('#calificacion3').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
            $('#calificacion3').focus();
            $('#calificacion3').css("background-color", "#D50545");
        }
      });     

});





