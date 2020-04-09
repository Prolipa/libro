
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

        var lee1 = [
        '<div class="caracteristica1" id="rLSP8">Provoca tristeza.</div><br>',
        '<div class="caracteristica2" id="rLSP7">Es largo.</div><br>',
        '<div class="caracteristica3" id="rLSP6">No es armonioso.</div><br>',
        '<div class="caracteristica4" id="rLSP1">Provoca alegría.</div><br>',        
        ]; 

        lee1.sort(f_randomico);
        $("#lee1").append(lee1);


        var lee2 = [
        '<div class="caracteristica5" id="rLSP2">Despierta la imaginación.</div><br>',
        '<div class="caracteristica4" id="rLSP3">Es melodioso.</div><br>',
        '<div class="caracteristica1" id="rLSP4">Provoca entusiasmo.</div><br>',
        '<div class="caracteristica3" id="rLSP5">Es corto.</div><br>',
        ]; 
        
        lee2.sort(f_randomico);
        $("#lee2").append(lee2);

    }


    //////////////////////////////////////////
    var notaFinalP2 = 0;
    function Resp2(){

        for(var i=1; i<9; i++){
            if( i<6 ){
                if($('#rLSP'+(i) +'.pinta').text()){
                  notaFinalP2++;
                  $('#rLSP'+i).css("background-color", "#5ED188");
                }/*else{
                  $('#sECP'+i).css("background-color", "#E3CB76");
                }*/
            }else{
                if($('#rLSP'+(i) +'.pinta').text()){
                  notaFinalP2--;
                  $('#rLSP'+i).css("background-color", "#EF87A7");
                }
            }
        }

    }


    $(document).ready(function() {
      Inicio();
      $(".panel-collapse").removeClass('in');
      Preg2();

        for(var i=1; i<9; i++){////Preg1

            $('#rLPP'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


      function confirmar() {

        Resp2();

        var nota1 = parseFloat($('#calificacion1').val());
        var nota2 = parseFloat($('#calificacion2').val());
        var nota3 = parseFloat($('#calificacion3').val());
        var nota4 = parseFloat($('#calificacion4').val());
        var nota5 = parseFloat($('#calificacion5').val());
        var nota6 = parseFloat($('#calificacion6').val());
       

        var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if( $('#calificacion1').val() !='' &&  $('#calificacion2').val() !='' &&  $('#calificacion3').val() !='' &&  $('#calificacion4').val() !='' &&  $('#calificacion5').val() !='' &&  $('#calificacion6').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
          $('#calificacion5').css("background-color", "#05D576");
          $('#calificacion6').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
          $('#calificacion5').focus();
          $('#calificacion5').css("background-color", "#D50545");
          $('#calificacion6').focus();
          $('#calificacion6').css("background-color", "#D50545");
        }
        
      });

  });