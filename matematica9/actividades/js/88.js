var titulos="aplico";
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

        var nRD0 = Math.round(Math.random() * (9 - 2) + 2);
        var nRD1 = Math.round(Math.random() * (9 - 2) + 2);
        var nRD2 = Math.round(Math.random() * (9 - 2) + 2);

        $('#nRD0').append(nRD0);
        $('#nRD1').append(nRD1);
        $('#nRD2').append(nRD2);

    }






    function Preg5(){

        var nREx0 = Math.round(Math.random() * (9 - 2) + 2);
        var nREx1 = Math.round(Math.random() * (9 - 2) + 2);
        var nREx2 = Math.round(Math.random() * (9 - 2) + 2);
        var nREx3 = Math.round(Math.random() * (9 - 2) + 2);
        var nREx4 = Math.round(Math.random() * (9 - 2) + 2);
        var nREx5 = Math.round(Math.random() * (9 - 2) + 2);
        var nREx6 = Math.round(Math.random() * (9 - 2) + 2);

        $('#nREx0').append(nREx0);
        $('#nREx1').append(nREx1);
        $('#nREx2').append(nREx2);
        $('#nREx3').append(nREx3);
        $('#nREx4').append(nREx4);
        $('#nREx5').append(nREx5);
        $('#nREx6').append(nREx6);

    }






    var notaFinalP4 = 0;
    function Resp4(){

         var resp = 'a2b3c4d1';

                if( (($('#rRCE0').val())).toLowerCase().replace(/ |,|- /g, "") == resp ){
                    notaFinalP4++;
                    $('#rRCE0').css("background-color", "#5ED188");
                }else{
                    $('#rRCE0').css("background-color", "#EF87A7");
                }

    }



  


    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();
      Preg1();
      Preg5();

      function confirmar() {
        Resp4();
        
        var nota1 = parseFloat($('#calificacion0').val());
        var nota2 = parseFloat($('#calificacion1').val());
        var nota3 = parseFloat($('#calificacion2').val());
        var nota4 = (notaFinalP4*2);
        var nota5 = parseFloat($('#calificacion3').val());

        
        var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
        }
        
      });

  });
