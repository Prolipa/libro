
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    function Preg1(){

      var costo = Math.round(Math.random() * (20 - 5) + 5);
      var val0 = Math.round(Math.random() * (10 - 5) + 5);
      var val1 = Math.round(Math.random() * (20 - 10) + 10);
      var val2 = Math.round(Math.random() * (30 - 20) + 20);
      var val3 = Math.round(Math.random() * (40 - 30) + 30);

      $('#costo').append(costo);
      $('#nTP0').append(val0);
      $('#nTP1').append(val1);
      $('#nTP2').append(val2);
      $('#nTP3').append(val3);
      $('#nNTP0').append(val0);
      $('#nNTP1').append(val1);
      $('#nNTP2').append(val2);
      $('#nNTP3').append(val3);

    }




    var notaFinalP1 = 0;
    function Resp1(){ 

      var val0;

      for(var i=0; i<4; i++){

        val0 = parseInt($('#nTP'+i).text()) * parseInt($('#costo').text());

        if( $('#rNTP'+i).val() == val0 ){
          notaFinalP1++;
          $('#rNTP'+i).css("background-color", "#5ED188");
        }else{
          $('#rNTP'+i).css("background-color", "#EF87A7");
        }

      }

      

    }




  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio();  
            Preg1(); 


           function confirmar() {
            Resp1();

            var nota1 = (notaFinalP1*10)/4;

            var notaFinal = (nota1);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
     
          confirmar();
         
      });
    });


