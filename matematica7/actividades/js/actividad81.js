
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });





    function Preg3(){

      var nCient0 = Math.round(Math.random() * (40 - 20) + 20);
      var nCient1 = Math.round(Math.random() * (20 - 10) + 10);
      var nDias0 = Math.round(Math.random() * (90 - 50) + 50);  


      $('#nCient0').append(nCient0);
      $('#nCient1').append(nCient1);
      $('#nDias0').append(nDias0);

    }

    var notaFinalP2 = 0;
    function Resp2(){ 

      var val0;
      var val1;
      var val2;

      for(var i=0; i<4; i++){
        val0 = parseInt($('#cantJug').text()) / parseInt($('#nAm'+i).text());

        if( $('#rNA'+i).val() == val0 ){
          notaFinalP2++;
          $('#rNA'+i).css("background-color", "#5ED188");
        }else{
          $('#rNA'+i).css("background-color", "#EF87A7");
        }


        val1 = (parseInt($('#cantMes').text()) * 30) / parseInt($('#nOb'+i).text());

        if( $('#rNO'+i).val() == val1 ){
          notaFinalP2++;
          $('#rNO'+i).css("background-color", "#5ED188");
        }else{
          $('#rNO'+i).css("background-color", "#EF87A7");
        }


        val2 = (parseInt($('#cantDias').text()) * 6) / parseInt($('#nCar'+i).text());

        if( $('#rNC'+i).val() == val2 ){
          notaFinalP2++;
          $('#rNC'+i).css("background-color", "#5ED188");
        }else{
          $('#rNC'+i).css("background-color", "#EF87A7");
        }

      }

      

      if( $('#rNV0').val() == 75 ){
          notaFinalP2++;
          $('#rNV0').css("background-color", "#5ED188");
        }else{
          $('#rNV0').css("background-color", "#EF87A7");
        }

    }




    var notaFinalP3 = 0;
    function Resp3(){

       var val = (parseInt($('#nCient0').text()) * parseInt($('#nDias0').text())) / (parseInt($('#nCient0').text()) + parseInt($('#nCient1').text()));

        if( parseInt($('#rPBarco').val()) == parseInt(val) ){
          notaFinalP3++;
          $('#rPBarco').css("background-color", "#5ED188");
        }else{
          $('#rPBarco').css("background-color", "#EF87A7");
        }


    }



  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio(); 
            Preg3();

           function confirmar() {
            Resp2();
            Resp3();

            var nota1 = parseFloat($('#calificacion0').val());
            var nota2 = (notaFinalP2*5)/13;
            var nota3 = notaFinalP3*2;

            var notaFinal = (nota1+nota2+nota3).toFixed(2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

     if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }

      });
    });


