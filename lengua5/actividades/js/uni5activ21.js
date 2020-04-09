
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){
      var escribe = [
        '<div class="col-sm-4" align="center"> <p class="note" style="background-color: #B8DEF7;"> El amor es una <b>locura</b><br>que solo el cura lo <b>cura</b>,<br>y si el cura no lo <b>cura</b><br>sigue siendo <b>locura</b>.<br><br> <input type="text" id="rA1" class="form-control respuestas" style="width: 140px;"> </p> </div>',
        '<div class="col-sm-4" align="center"> <p class="note" style="background-color: #B8F7DB;"> Me dices que no me <b>quieres</b><br>porque soy de sangre <b>baja</b>.<br>Si quieres querer a <b>reyes</b>,<br>cuatro tiene la <b>baraja</b>.<br><br> <input type="text" id="rA2" class="form-control respuestas" style="width: 140px;"> </p> </div>',
        '<div class="col-sm-4" align="center"> <p class="note" style="background-color: #F7F1B8;"> Las velas de esperma<br> se van <b>derritiendo</b><br>y el niñito Dios<br>se va <b>despidiendo</b>.<br><br> <input type="text" id="rA3" class="form-control respuestas" style="width: 140px;"> </p> </div>',
      ];

      escribe.sort(f_randomico);
      $('#escribe').append(escribe);
    }

    var notaFinalP1=0;
    function Resp1(){
      for(var j=1; j<15; j++){
        if(j<4){
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
    }

    $(document).ready(function() {
        Inicio();
        
        for(var i=1; i<15; i++){
            $('#oA'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar() {
            Resp1();

            var nota1;
            if( notaFinalP1<0 ){nota1=0;}else{nota1=(notaFinalP1*10)/3;}
            var notaFinal = (nota1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        confirmar();/*
        if( $('#calificacion1').val() !='' ){
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





