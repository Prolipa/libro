
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });





    function Preg2(){

      var nOb = Math.round(Math.random() * (40 - 20) + 20);
      var nDias0 = Math.round(Math.random() * (50 - 10) + 10);
      var nDias1 = Math.round(Math.random() * (70 - 40) + 40);  


      $('#nOb').append(nOb);
      $('#nDias0').append(nDias0);
      $('#nDias1').append(nDias1);

    }







  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio(); 
            Preg2();

           function confirmar() {


            var nota1 = parseFloat($('#calificacion0').val());
            var nota2 = parseFloat($('#calificacion1').val());

            var notaFinal = (nota1+nota2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

     if($('#calificacion0').val() !='' && $('#calificacion1').val() !=''){
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


