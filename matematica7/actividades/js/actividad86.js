
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

      var nTS0 = Math.round(Math.random() * (10 - 2) + 2);
      var nTS1 = Math.round(Math.random() * (10 - 2) + 2);
      var nTS2 = Math.round(Math.random() * (10 - 2) + 2);
      var nTS3 = Math.round(Math.random() * (10 - 2) + 2);
      var nTS4 = Math.round(Math.random() * (10 - 2) + 2);
      var nTS5 = Math.round(Math.random() * (10 - 2) + 2);

      $('#nTS0').append(nTS0);
      $('#nTS1').append(nTS1);
      $('#nTS2').append(nTS2);
      $('#nTS3').append(nTS3);
      $('#nTS4').append(nTS4);
      $('#nTS5').append(nTS5);

    }


    function Preg2(){

      var nTE0 = Math.round(Math.random() * (10 - 2) + 2);
      var nTE1 = (Math.random() * (10 - 2) + 2).toFixed(1);
      var nTE2 = Math.round(Math.random() * (10 - 2) + 2);
      var nTE3 = (Math.random() * (10 - 2) + 2).toFixed(1);

      $('#nTE0').append(nTE0);
      $('#nTE1').append(nTE1);
      $('#nTE2').append(nTE2);
      $('#nTE3').append(nTE3);

    }


    function Preg3(){

      var nTE0 = Math.round(Math.random() * (30 - 20) + 20);
      var nTE1 = (Math.random() * (20 - 15) + 15).toFixed(1);

      $('#nAT0').append(nTE0);
      $('#nAT1').append(nTE1);

    }




    var notaFinalP1 = 0;
    function Resp1(){

      var res1 = parseInt($('#nTS0').text()) + parseInt($('#nTS1').text()) + parseInt($('#nTS2').text()); 

      if( $('#rTI0').val() == res1 ){
        notaFinalP1++;
        $('#rTI0').css("background-color", "#5ED188");
      }else{
        $('#rTI0').css("background-color", "#EF87A7");
      } 

      var res2 = parseInt($('#nTS3').text()) + parseInt($('#nTS4').text()) + parseInt($('#nTS5').text()); 

      if( $('#rTI1').val() == res2 ){
        notaFinalP1++;
        $('#rTI1').css("background-color", "#5ED188");
      }else{
        $('#rTI1').css("background-color", "#EF87A7");
      } 

    }


    var notaFinalP2 = 0;
    function Resp2(){

      var res1 = (parseInt($('#nTE0').text()) * parseFloat($('#nTE1').text())) / 2;
      if( Math.round($('#rTE0').val()) == Math.round(res1) ){
        notaFinalP2++;
        $('#rTE0').css("background-color", "#5ED188");
      }else{
        $('#rTE0').css("background-color", "#EF87A7");
      } 

      var res2 = (parseInt($('#nTE2').text()) * parseFloat($('#nTE3').text())) / 2;
      if( Math.round($('#rTE1').val()) == Math.round(res2) ){
        notaFinalP2++;
        $('#rTE1').css("background-color", "#5ED188");
      }else{
        $('#rTE1').css("background-color", "#EF87A7");
      } 

    }



    var notaFinalP3 = 0;
    function Resp3(){

      var res1 = (((parseInt($('#nAT0').text()))/3) * parseFloat($('#nAT1').text())) / 2;
      if( Math.round($('#rAT0').val()) == Math.round(res1) ){
        notaFinalP3++;
        $('#rAT0').css("background-color", "#5ED188");
      }else{
        $('#rAT0').css("background-color", "#EF87A7");
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

            var nota1 = notaFinalP1*2;
            var nota2 = notaFinalP2*2;
            var nota3 = notaFinalP3*2;

            var notaFinal = (nota1+nota2+nota3);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
          confirmar();
      });
    });


