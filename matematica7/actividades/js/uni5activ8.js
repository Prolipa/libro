
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
      var n;
      var nRSO;
      for( var i=0; i<16; i++ ){
        n = Math.round(Math.random() * (3 - 1) + 1);
        nRSO = (Math.random() * (200 - 1) + 1).toFixed(n);
        $('#nRSO'+(i+1)).text(nRSO);
      }
    }


///////////////////////////////////////////////////////////////////

  var notaFinalP1 = 0;
  function Resp1(){
      var op;
      for( var i=1; i<5; i++ ){
        switch(i) {
          case 1:
            op = (parseFloat($('#nRSO1').text())-(parseFloat($('#nRSO2').text()) + parseFloat($('#nRSO3').text()))).toFixed();
            break;
          case 2:
            op = (parseFloat($('#nRSO4').text()) + (parseFloat($('#nRSO5').text())*parseFloat($('#nRSO6').text())) ).toFixed();
            break;
          case 3:
            op = ((parseFloat($('#nRSO7').text()) + parseFloat($('#nRSO8').text())) - (parseFloat($('#nRSO9').text())/parseFloat($('#nRSO10').text()))).toFixed();
            break;
          case 4:
            op = (parseFloat($('#nRSO1').text())*parseFloat($('#nRSO11').text())-parseFloat($('#nRSO12').text())+parseFloat($('#nRSO13').text())/parseFloat($('#nRSO14').text())).toFixed();
            break;
        }
        if( parseFloat($('#rRSO'+i).val()).toFixed() == op ){
            notaFinalP1++;
            $('#rRSO'+i).css("background-color", "#05D576");
          }else{
            $('#rRSO'+i).css("background-color", "#D50545");
          }
      } 
    }




  var notaFinalP3 = 0;
  function Resp3() {
      var c=0;
      var resp = [24, 684, 1971.32];
      for( var i=1; i<4; i++ ){
        if( $('#rP'+i).val() == resp[c] ){
            notaFinalP3++;
            $('#rP'+i).css("background-color", "#05D576");
          }else{
            $('#rP'+i).css("background-color", "#D50545");
          }
          c++;
      } 
  }

///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }


    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar() {
        	Resp1();
          Resp3();
          
            var nota1 = (notaFinalP1*5)/4;
            var nota2 = (notaFinalP3*5)/3;

            var notaFinal = (nota1+nota2).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
confirmar();/*
        if( $('#calificacion2').val() !='' ){
          if( $('#calificacion2').val()<=1.5 && $('#calificacion2').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }*/
      });    

});





