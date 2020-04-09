
  function Inicio() {
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

        for(var i=1; i<13; i++){
            if( i<7 ){
                if($('#sPC'+(i) +'.pinta').text()){
                  notaFinalP1++;
                  $('#sPC'+i).css("background-color", "#5ED188");
                }else{
                  $('#sPC'+i).addClass('mal');
                }
            }else{
                if($('#sPC'+(i) +'.pinta').text()){
                  notaFinalP1--;
                  $('#sPC'+i).css("background-color", "#EF87A7");
                }
            }
        }

    }





    $(document).ready(function() {
      Inicio();

        for(var i=1; i<13; i++){////Preg1

            $('#sPC'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


      function confirmar() {

        Resp1();

        var nota1;
        if(notaFinalP1<0){nota1 = 0;}else{nota1 = (notaFinalP1*10)/6;}

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

  
          confirmar();
          
        
      });

  });