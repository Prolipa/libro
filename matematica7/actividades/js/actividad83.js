
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





    function Preg2(){

      var nCom0 = Math.round(Math.random() * (100 - 10) + 10);
      var nCom1 = Math.round(Math.random() * (100 - 10) + 10);
      var nCom2 = Math.round(Math.random() * (100 - 10) + 10);
      var nCom3 = Math.round(Math.random() * (100 - 10) + 10);
      var nCom4 = Math.round(Math.random() * (100 - 10) + 10);
      var nCom5 = Math.round(Math.random() * (100 - 10) + 10);

      $('#nCom0').append(nCom0+'%');
      $('#nCom1').append(nCom1+'%');
      $('#nCom2').append(nCom2+'%');
      $('#nCom3').append(nCom3+'%');
      $('#nCom4').append(nCom4+'%');
      $('#nCom5').append(nCom5+'%');

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

