
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


    function Cargar() {   
      location.reload(true);
    }

    var notaFinalP1=0;
    function Resp1(){

      var resp = ['os', 'da', 'da', 'os', 'os', 'os', 'os', 'os', 'da', 'da'];
      var res,tam,re;

      for( var i=1; i<11; i++ ){
        res = $('#rB'+i).val().toLowerCase().replace(/ |\.| /gi, "").split('');
        tam = res.length;
        re = res[tam-2]+''+res[tam-1];
        
        if( re == resp[i-1] ){
          notaFinalP1++;
          $('#rB'+i).css('background-color', '#32DE93');
        }else{
          $('#rB'+i).css('background-color', '#DE3266');
        }
      }

      for(var j=1; j<37; j++){
            if( j<11 ){
                if($('#rA'+(j) +'.pinta').text()){
                  notaFinalP1++;
                  $('#rA'+j).addClass('bien');
                }
            }else{
                if($('#rA'+(j) +'.pinta').text()){
                  $('#rA'+j).addClass('mal');
                  notaFinalP1--;
                }
            }
        }
    }

    $(document).ready(function() {
        Inicio();
        $(".panel-collapse").addClass('in');

        for(var i=1; i<37; i++){
            $('#rA'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        var nota1;
        var nota2;
        function confirmar() {
            Resp1();
            nota1 = parseFloat($('#calificacion1').val());
            nota2 = (notaFinalP1)/4;
            var notaFinal = (nota1+nota2).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        if( $('#calificacion1').val() !='' ){
          if( $('#calificacion1').val()<=5 && $('#calificacion1').val()>=0 ){
            confirmar();
            $('#calificacion1').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
        }
      });    

});





