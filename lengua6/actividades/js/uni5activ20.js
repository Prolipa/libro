
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


    function Cargar() {   
      location.reload(true);
    }


    function Preg1(){

      var lee = [
        '<span class="num1" style="border-color: #E1CF17;">&nbsp;&nbsp; <br>He escrito artículo<br> &nbsp;&nbsp;</span> <input type="number" id="rA1" class="form-control respuestas input-sm" style="width: 40px; border: 1px solid #E1CF17; vertical-align: middle; margin-right: 50px;"> <input type="number" id="rA2" class="form-control respuestas input-sm" style="width: 40px; border: 1px solid #17BAE1; vertical-align: middle;"> <span class="num1" style="border-color: #17BAE1;">&nbsp;&nbsp; He investigado sobre los <br>incendios forestales.<br> &nbsp;&nbsp;</span><br><br>',
        '<span class="num1" style="border-color: #17E192;">&nbsp;&nbsp; Los bomberos llegaron a la<br>zona del Atacazo<br> &nbsp;&nbsp;</span> <input type="number" id="rA3" class="form-control respuestas input-sm" style="width: 40px; border: 1px solid #17E192; vertical-align: middle; margin-right: 50px;"> <input type="number" id="rA4" class="form-control respuestas input-sm" style="width: 40px; border: 1px solid #174FE1; vertical-align: middle;"> <span class="num1" style="border-color: #174FE1;">&nbsp;&nbsp; Habían organizado grupos<br>para cortar la maleza para evitar<br>que el fuego se propague &nbsp;&nbsp;</span><br><br>',
      ];

      lee.sort(f_randomico);
      $('#lee').append(lee);

    }
    var notaFinalP1=0;
    function Resp1(){
      var resp = [4,3,2,1];

      for( var i=1; i<5; i++ ){
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
        $(".panel-collapse").addClass('in');

        function confirmar() {
          Resp1();
          var nota1 = (notaFinalP1*10)/4

          var notaFinal = (nota1);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        confirmar();
        /*if( $('#calificacion1').val() !='' ){
          if( $('#calificacion1').val()<=10 && $('#calificacion1').val()>=0 ){
            confirmar();
            $('#calificacion1').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
        }*/
      });    

});





