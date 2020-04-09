
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


    function Preg1() {   
      var lee = [
          '<tr> <td>No tengo camello.</td> <td><input type="text" placeholder="Ej: infantil" class="form-control respuestas input-sm" id="rA1" style="width: 250px;"></td> </tr>',
          '<tr> <td>Te espero a las seis.</td> <td><input type="text" placeholder="Ej: infantil" class="form-control respuestas input-sm" id="rA2" style="width: 250px;"></td> </tr>',
          '<tr> <td>Degálame un chupete.</td> <td><input type="text" placeholder="Ej: infantil" class="form-control respuestas input-sm" id="rA3" style="width: 250px;"></td> </tr>',
          '<tr> <td>¿Me podría comunicar con Sofía?</td> <td><input type="text" placeholder="Ej: infantil" class="form-control respuestas input-sm" id="rA4" style="width: 250px;"></td> </tr>',
          '<tr> <td>Me voy de jama.</td> <td><input type="text" placeholder="Ej: infantil" class="form-control respuestas input-sm" id="rA5" style="width: 250px;"></td> </tr>',
          '<tr> <td>Quiero hacer pipí.</td> <td><input type="text" placeholder="Ej: infantil" class="form-control respuestas input-sm" id="rA6" style="width: 250px;"></td> </tr>',
      ];

      lee.sort(f_randomico);
      $('#lee').append(lee);
    }


    function Preg4() {   
      var lee2 = [
          '<tr> <td>Me fui soplado.</td> <td><input type="text" class="form-control respuestas input-sm" id="rD1" style="width: 250px;"></td> </tr>',
          '<tr> <td>Pedro se quedó ruco.</td> <td><input type="text" class="form-control respuestas input-sm" id="rD2" style="width: 250px;"></td> </tr>',
          '<tr> <td>Me duele la panza.</td> <td><input type="text" class="form-control respuestas input-sm" id="rD3" style="width: 250px;"></td> </tr>',
          '<tr> <td>Tengo chuzos nuevos.</td> <td><input type="text" class="form-control respuestas input-sm" id="rD4" style="width: 250px;"></td> </tr>',
          '<tr> <td>Te presento a mi pelada, Sofía.</td> <td><input type="text" class="form-control respuestas input-sm" id="rD5" style="width: 250px;"></td> </tr>',
      ];

      lee2.sort(f_randomico);
      $('#lee2').append(lee2);
    }


    ////////////////////////////////////////////////////////////

    var notaFinalP1=0;
    function Resp1(){
      var resp = ['adolescente','adulto','infantil','adulto','adolescente','infantil'];
      for(var i=1; i<7; i++){
          if( $('#rA'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
            notaFinalP1++;
            $('#rA'+i).css("background-color", "#05D576");
          }else{
            $('#rA'+i).css("background-color", "#D50545");
          }
      }
    }


    var notaFinalP4=0;
    function Resp4(){
      var resp = ['mefuirápido','pedroestádormido','medueleelestómago','tengozapatosnuevos','tepresentoaminovia,sofía'];
      for(var i=1; i<6; i++){
          if( $('#rD'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
            notaFinalP4++;
            $('#rD'+i).css("background-color", "#05D576");
          }else{
            $('#rD'+i).css("background-color", "#D50545");
          }
      }
    }



    $(document).ready(function() {
        Inicio();
        Preg1();
        Preg4();

        function confirmar() {
          Resp1();
          Resp4();

          var nota1 = (notaFinalP1*2.5)/6;
          var nota2 = parseFloat($('#calificacion1').val());
          var nota3 = parseFloat($('#calificacion2').val());
          var nota4 = (notaFinalP4*2.5)/5;

          var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[2.5,2.5];
        for( var i=1; i<3; i++ ){
          if( $('#calificacion'+i).val() !='' ){
            if( $('#calificacion'+i).val()<=punt[i-1] && $('#calificacion'+i).val()>=0 ){
              c++;
              $('#calificacion'+i).css("background-color", "#05D576");
            }else{
              alert('La calificación no es valida, verifique que el puntaje ingresado no exceda los '+punt[i-1]+' puntos.');
              $('#calificacion'+i).focus();
              $('#calificacion'+i).css("background-color", "#D50545");
            }
          }else{
              $('#calificacion'+i).focus();
              $('#calificacion'+i).css("background-color", "#D50545");
          }
        }
        
        if( c==2 ){confirmar();}
        c=0;

      });
});





