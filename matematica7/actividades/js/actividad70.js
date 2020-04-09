
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

      var casillero =  Math.round(Math.random() * (6 - 1) + 1);
      $("#casillero").append(casillero);
      $("#casillero0").append(casillero);
    }

  var notaFinalP1 = 0;
    function Resp1(){

    var np = 1;

    for(var i=0; i<5; i++){
      np++;
      if(i>1){np = 1;}
      if($('#np'+i).val() == np) {
         notaFinalP1++;
            $('#np'+i).css("background-color", "#5ED188");
      }else{
            $('#np'+i).css("background-color", "#EF87A7");
      }

      if($('#df'+i).val() == 8) {
         notaFinalP1++;
            $('#df'+i).css("background-color", "#5ED188");
      }else{
            $('#df'+i).css("background-color", "#EF87A7");
      }

      if($('#ps'+i).val() == np) {
         notaFinalP1++;
            $('#ps'+i).css("background-color", "#5ED188");
      }else{
            $('#ps'+i).css("background-color", "#EF87A7");
      }

      if($('#ps_'+i).val() == 8) {
         notaFinalP1++;
            $('#ps_'+i).css("background-color", "#5ED188");
      }else{
            $('#ps_'+i).css("background-color", "#EF87A7");
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

            var nota1 = (notaFinalP1*4)/20;
            var nota1_1 = parseInt($('#calificacion0').val());
            var nota2 = parseInt($('#calificacion1').val());
            
            var notaFinal = (nota1+nota1_1+nota2).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        if($('#calificacion0').val() != '' && $('#calificacion1').val() != ''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
         $('#calificacion0').focus();
         $('#calificacion0').css("background-color", "#D50545");
         $('#calificacion1').focus();
         $('#calificacion1').css("background-color", "#D50545");
        }        
      });
    });


