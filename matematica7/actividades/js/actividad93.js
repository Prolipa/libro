
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

      var nCPN1 = Math.round(Math.random() * (50 - 20) + 20);
      var nCPN2 = Math.round(Math.random() * (10 - 3) + 3);
      $('#nCPN1').append(nCPN1);
      $('#nCPN2').append(nCPN2);
      $('#nCPN3').append(nCPN2);

      var nOCR1 = Math.round(Math.random() * (10 - 5) + 5);
      var nOCR2 = Math.round(Math.random() * (10 - 3) + 3);
      $('#nOCR1').append(nOCR1);
      $('#nOCR2').append(nOCR1);
      $('#nOCR3').append(nOCR2);

  }




    function Cargar() {   
      location.reload(true);
    }


      $(document).ready(function() {
            Inicio(); 
            Preg1();

           function confirmar() {


            var nota1 = $('#calificacion0').val();
           
            var notaFinal = (nota1);

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





