
  function Inicio() {
     // $(".panel-collapse").removeClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Cargar() {   
      location.reload(true);
    }



    function Preg1(){
      var act1 = [
          '• Yo &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm resp1" id="rA1" style="width: 150px;">&nbsp;&nbsp; en la misma empresa desde hace 15 años. (<span style="color: #AA17E1;">trabajar</span>)<br>',
          '• Apenas Joaquina &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm resp1" id="rA2" style="width: 150px;">&nbsp;&nbsp; de casa, su padre llegó. (<span style="color: #AA17E1;">salir</span>)<br>',
          '• Cuando la fila por fin terminó, las entradas se &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm resp1" id="rA3" style="width: 150px;">&nbsp;&nbsp; (<span style="color: #AA17E1;">agotar</span>)<br>',
          '• Para cuando Cecilia llegue yo ya &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm resp1" id="rA4" style="width: 150px;">&nbsp;&nbsp; de cocinar. (<span style="color: #AA17E1;">terminar</span>)<br>',
          '• Alberto y Leticia &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm resp1" id="rA5" style="width: 150px;">&nbsp;&nbsp; novios desde el colegio y siguen enamorados. (<span style="color: #AA17E1;">ser</span>)<br>',
          '• Miguel &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm resp1" id="rA6" style="width: 150px;">&nbsp;&nbsp; horas y aún no llega al punto de encuentro. (<span style="color: #AA17E1;">caminar</span>) <br>                                ',
      ];

      act1.sort(f_randomico);
      $('#act1').append(act1);

    }


    var notaFinalP1=0;
    function Resp1(){
      var resp = ['hetrabajado','hubosalido','habíanagotado','habréterminado','hansido','hacaminado'];

      for( var i=1; i<7; i++ ){
          if( $('#rA'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
              notaFinalP1++;
              $('#rA'+i).css('background-color', '#05D576');
          }else{
              $('#rA'+i).css('background-color', '#D50545');
          }
      }

    }


    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar() {
          Resp1();
            var nota1 = (notaFinalP1*5)/6;
            var nota2 = parseFloat($('#calificacion1').val());

            var notaFinal = (nota1+nota2).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        if( $('#calificacion1').val() !='' ){
          if( $('#calificacion1').val()<=5 && $('#calificacion1').val()>=0 ){
            confirmar();
            $('#calificacion1').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
        }
      });    

});





