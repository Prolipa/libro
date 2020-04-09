
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
      var escribe = [
          '<tr> <td> <span id="oA5">Las orquídeas</span>, <span id="oA6">hermosas</span> <span id="oA1">como</span> <span id="oA7">perlas</span>, <span id="oA8">adornaban</span> <span id="oA9">el jardín</span>. </td> <td> <select id="rA1" class="form-control respuestas" style="width: 150px;"> <option></option> <option>Adición</option> <option>Comparación</option> </select> </td> </tr>',
          '<tr> <td> <span id="oA10">La cascada</span> <span id="oA11">de Mindo</span> <span id="oA2">y</span> <span id="oA12">la</span> <span id="oA22">de San Rafael</span> <span id="oA13">son las</span> <span id="oA23">más altas</span>. </td> <td> <select id="rA2" class="form-control respuestas" style="width: 150px;"> <option></option> <option>Adición</option> <option>Comparación</option> </select> </td> </tr>',
          '<tr> <td> <span id="oA14">El Pangui</span> <span id="oA15">tiene</span> <span id="oA16">un río</span> <span id="oA17">que es</span> <span id="oA3">igual que</span> <span id="oA18">una boa</span>. </td> <td> <select id="rA3" class="form-control respuestas" style="width: 150px;"> <option></option> <option>Adición</option> <option>Comparación</option> </select> </td> </tr>',
          '<tr> <td> <span id="oA19">Las aves</span> <span id="oA20">cantoras son</span> <span id="oA4">más hermosas que</span> <span id="oA21">los colibríes</span>. </td> <td> <select id="rA4" class="form-control respuestas" style="width: 150px;"> <option></option> <option>Adición</option> <option>Comparación</option> </select> </td> </tr>',
      ];

      escribe.sort(f_randomico);
      $('#escribe').append(escribe);
    }


    var notaFinalP1=0;
    function Resp1(){
      for(var j=1; j<22; j++){
        if(j<5){
          if($('#oA'+j +'.pinta').text()){
            notaFinalP1++;
            $('#oA'+j).addClass('bien');
          }
        }else{
          if($('#oA'+j +'.pinta').text()){
            notaFinalP1--;
            $('#oA'+j).addClass('mal');
          }
        } 
      }

      var resp = ['Comparación','Adición','Comparación','Comparación'];
      for(var i=1; i<5; i++){
          if( $('#rA'+i).val() == resp[i-1] ){
            notaFinalP1++;
            $('#rA'+i).css("background-color", "#05D576");
          }else{
            $('#rA'+i).css("background-color", "#D50545");
          }
      }
    }


    var notaFinalP3=0;
    function Resp3(){
     for(var j=1; j<8; j++){
          if($('#oC'+j +'.pinta').text()){
            notaFinalP3++;
            $('#oC'+j).addClass('bien');
          }else{
            $('#oC'+j).addClass('mal');
          }
        }
    }


    var notaFinalP4=0;
    function Resp4(){
      var resp = ['porotraparte', 'otroaspecto', 'delmismomodo'];
      for(var i=1; i<4; i++){
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

        for(var j=1; j<22; j++){
            $('#oA'+(j)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        for(var i=1; i<8; i++){
            $('#oC'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar() {
          Resp1();
          Resp3();
          Resp4();

          var nota1;
          if(notaFinalP1<0){nota1=0;}else{nota1=(notaFinalP1*2)/8;}
          var nota2 = parseFloat($('#calificacion1').val());
          var nota3 = (notaFinalP3*2)/7;
          var nota4 = (notaFinalP4*2)/3;
          var nota5 = parseFloat($('#calificacion2').val());

          var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[2,2];
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





