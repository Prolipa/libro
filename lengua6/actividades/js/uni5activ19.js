
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

      var lee = [
        '<img src="img/i1_p191_act1.png" class="img-responsive" style="display: inline-block;">&nbsp;&nbsp;&nbsp;&nbsp; <select class="form-control respuestas" id="rA1" style="display: inline-block; width: 200px; border-radius: 15px; border: 2px solid #BDCEE8; border-style: dashed;"> <option></option> <option>Ambiente</option> <option>Cultura-Arte</option> <option>Tecnología</option> </select><br><br>',
        '<img src="img/i2_p191_act1.png" class="img-responsive" style="display: inline-block;">&nbsp;&nbsp;&nbsp;&nbsp; <select class="form-control respuestas" id="rA2" style="display: inline-block; width: 200px; border-radius: 15px; border: 2px solid #D2C0EA; border-style: dashed;"> <option></option> <option>Ambiente</option> <option>Cultura-Arte</option> <option>Tecnología</option> </select><br><br>',
        '<img src="img/i3_p191_act1.png" class="img-responsive" style="display: inline-block;">&nbsp;&nbsp;&nbsp;&nbsp; <select class="form-control respuestas" id="rA3" style="display: inline-block; width: 200px; border-radius: 15px; border: 2px solid #FADD8B; border-style: dashed;"> <option></option> <option>Ambiente</option> <option>Cultura-Arte</option> <option>Tecnología</option> </select><br><br>',
      ];

      lee.sort(f_randomico);
      $('#lee').append(lee);

    }



    var notaFinalP1=0;
    function Resp1(){
      var resp = ['Tecnología', 'Ambiente', 'Cultura-Arte'];

      for( var i=1; i<4; i++ ){
          if( $('#rA'+i).val() == resp[i-1] ){
              notaFinalP1++;
              $('#rA'+i).addClass('biene');
          }else{
              $('#rA'+i).addClass('male');
          }
      }
    }

    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar() {
          Resp1();

          var nota1 = (notaFinalP1*5)/3;
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
            $('#calificacion1').addClass('biene');
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').addClass('male');
        }
      });    

});





