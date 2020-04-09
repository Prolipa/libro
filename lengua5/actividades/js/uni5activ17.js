
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $(".panel-collapse").addClass('in');

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });




///////////////////////////////////////////
    var notaFinalP2=0;
    function Resp2(){
      for(var j=1; j<10; j++){
            if( j<4 ){
                if($('#rB'+(j) +'.pinta').text()){
                  notaFinalP2++;
                  $('#rB'+j).addClass('bien');
                }
            }else{
                if($('#rB'+(j) +'.pinta').text()){
                  $('#rB'+j).addClass('mal');
                  notaFinalP2--;
                }
            }
        }
    }


    $(document).ready(function() {
        Inicio();
        
        for(var i=1; i<10; i++){
            $('#rB'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar() {
          Resp2();
            var nota1 = parseFloat($('#calificacion1').val());
            var nota2;
            if(notaFinalP2<0){nota2=0;}else{nota2 = (notaFinalP2*5)/3;}

            var notaFinal = (nota1+nota2).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[5];
        for( var i=1; i<2; i++ ){
          if( $('#calificacion'+i).val() !='' ){
            if( $('#calificacion'+i).val()<=punt[i-1] && $('#calificacion'+i).val()>=0 ){
              c++;
              $('#calificacion'+i).css("background-color", "#05D576");
            }else{
              alert('La calificación no es valida, verifique que el puntaje ingresado no exceda los '+punt[i-1]+' puntos.');
              $('#calificacion'+i).focus();
              $('#calificacion'+i).css("background-color", "#D50545");
            }
          }else{
              $('#calificacion'+i).focus();
              $('#calificacion'+i).css("background-color", "#D50545");
          }
        }
        if( c==1 ){confirmar();}
        c=0;
      });    

});





