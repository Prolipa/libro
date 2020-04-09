
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

        var realiza1 = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp;10 . (x + 4) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM1" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"> <li>&nbsp;&nbsp;&nbsp;&nbsp;3x<sup>3</sup> . (x<sup>2</sup> + 4) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM2" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"> <li>&nbsp;&nbsp;&nbsp;&nbsp;(x<sup>3</sup> - 3x<sup>2</sup> +4) . (2x -1) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM3" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza1.sort(f_randomico);
        $('#realiza1').append(realiza1);

    }

    /////////////////////////////////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1() {
        
        var resp = ['10x+40', '3x^5+12x^3', '2x^4-7x^3+3x^2+8x-4'];

        for( var i=1; i<4; i++){
            if( $('#rRSM'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rRSM'+i).css("background-color", "#05D576");
              notaFinalP1++;
            }else{
              $('#rRSM'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP2 = 0;
    function Resp2() {
                
        if( $('#rEEA1').val().toLowerCase().replace(/ |\(|\)|\.|\[|\]| |/gi, "") == 'xx+3+xx+3+xx+3+xx+3' ){
            $('#rEEA1').css("background-color", "#05D576");
            notaFinalP2++;
        }else{
            $('#rEEA1').css("background-color", "#D50545");
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
            Resp2();

            var nota1 = (notaFinalP1*5)/3;
            var nota2 = (notaFinalP2*5);

            var notaFinal = (nota1+nota2).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        confirmar();
       /* if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar1();
          if( nota2<=2.5 && nota2>=0 && nota3<=2.5 && nota3>=0 ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
            $('#calificacion3').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
            $('#calificacion3').focus();
            $('#calificacion3').css("background-color", "#D50545");
        }*/
      });    

});





