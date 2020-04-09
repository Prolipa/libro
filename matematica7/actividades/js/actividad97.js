
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




    function Preg1(){       

        var nMPC1 = Math.round(Math.random() * (9 - 2) + 2);
        $('#nMPC1').append(nMPC1);
        var nMPC2 = Math.round(Math.random() * (3 - 1) + 1);
        $('#nMPC2').append(nMPC2);
        var nMPC3 = Math.round(Math.random() * (4 - 7) + 7);
        $('#nMPC3').append(nMPC3);

    }



    function Preg2(){            
        
        var nJTT1 = Math.round(Math.random() * (9 - 2) + 2);
        $('#nJTT1').append(nJTT1);
        var nJTT2 = Math.round(Math.random() * (3 - 1) + 1);
        $('#nJTT2').append(nJTT2);
        var nJTT3 = Math.round(Math.random() * (4 - 7) + 7);
        $('#nJTT3').append(nJTT3);

    }


    function Preg3(){            
        
        var nMFT1 = Math.round(Math.random() * (9 - 2) + 2);
        $('#nMFT1').append(nMFT1);
        $('#nMFT2').append(nMFT1);

    }




//////////////////////////////////////////////////////////


var notaFinalP1 = 0;
  function Resp1(){

        var resp1 = parseInt(((parseInt($('#nMPC1').text()) * parseInt($('#nMPC3').text())) + parseInt($('#nMPC2').text()))/0.25);
        
        var res1 = (parseInt($('#rMPC1').val()));

      
            if( resp1 == res1 ){
              notaFinalP1++;
              $('#rMPC1').css("background-color", "#5ED188");
            }else{
              $('#rMPC1').css("background-color", "#EF87A7");
            }
      
            
    }





    var notaFinalP2 = 0;
    function Resp2(){      
      
        var resp1 = parseInt(((parseInt($('#nJTT1').text()) * parseInt($('#nJTT3').text())) + parseInt($('#nJTT2').text()))/(1/6));
        
        var res1 = (parseInt($('#rJTT1').val()));

      
            if( resp1 == res1 ){
              notaFinalP2++;
              $('#rJTT1').css("background-color", "#5ED188");
            }else{
              $('#rJTT1').css("background-color", "#EF87A7");
            }
    }




      var notaFinalP3 = 0;
      function Resp3(){

        var resp1 = parseInt(parseInt($('#nMFT1').text()) / 0.25);
        var res1 = (parseInt($('#rMFT1').val()));

            if( resp1 == res1 ){
              notaFinalP3++;
              $('#rMFT1').css("background-color", "#5ED188");
            }else{
              $('#rMFT1').css("background-color", "#EF87A7");
            }



      
            if(  parseInt($('#rMFT2').val()) == 1 && parseInt($('#rMFT3').val()) == 4 ){
              notaFinalP3++;
              $('#rMFT2').css("background-color", "#5ED188");
              $('#rMFT3').css("background-color", "#5ED188");
            }else{
              $('#rMFT2').css("background-color", "#EF87A7");
              $('#rMFT3').css("background-color", "#EF87A7");
            }


      }




    function Cargar() {   
      location.reload(true);
    }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg2();
            Preg3();




           function confirmar() {
            Resp1();
            Resp2();
            Resp3();

            var nota1 = (notaFinalP1*3);
            var nota2 = (notaFinalP2*3);
            var nota3 = (notaFinalP3*4)/2;
            var notaFinal = (nota1+nota2+nota3).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
confirmar();
     /* if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }*/

      });

       

});





