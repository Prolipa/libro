
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
        '<div class="col-sm-4" id="oA1"> <img src="img/i1_p183_act1.png" class="img-responsive" style="cursor: pointer;"><br><br> </div>',
        '<div class="col-sm-4" id="oA4"> <img src="img/i2_p183_act1.png" class="img-responsive" style="cursor: pointer;"><br><br> </div>',
        '<div class="col-sm-4" id="oA2"> <img src="img/i3_p183_act1.png" class="img-responsive" style="cursor: pointer;"><br><br> </div>',
        '<div class="col-sm-4" id="oA5"> <img src="img/i4_p183_act1.png" class="img-responsive" style="cursor: pointer;"><br><br> </div>',
        '<div class="col-sm-4" id="oA3"> <img src="img/i5_p183_act1.png" class="img-responsive" style="cursor: pointer;"><br><br> </div>',
        '<div class="col-sm-4" id="oA6"> <img src="img/i6_p183_act1.png" class="img-responsive" style="cursor: pointer;"><br><br> </div>',
      ];

      act1.sort(f_randomico);
      $('#act1').append(act1);

    }

    /////////////////////////////////////////////////
    var notaFinalP1=0;
    function Resp1(){
      for(var j=1; j<7; j++){
        if(j<4){
          if($('#oA'+j +'.marca').text()){
            notaFinalP1++;
            $('#oA'+j).removeClass('marca');
            $('#oA'+j).addClass('bien');
          }
        }else{
          if($('#oA'+j +'.marca').text()){
            notaFinalP1--;
            $('#oA'+j).removeClass('marca');
            $('#oA'+j).addClass('mal');
          }
        } 
      }
    }


    ////////////////////////////////
    $(document).ready(function() {
        Inicio();
        Preg1();

        for(var i=1; i<7; i++){
            $('#oA'+(i)).click(function(){
              if($(this).hasClass('marca')) {
                  $(this).removeClass('marca')
              }else{
                  $(this).addClass('marca')
              }
            });
        }


        function confirmar() {
          Resp1();

            var nota1;
            if(notaFinalP1<0){nota1=0;}else{nota1=notaFinalP1;}
            var nota2 = parseFloat($('#calificacion1').val());
            var nota3 = parseFloat($('#calificacion2').val());

            var notaFinal = (nota1+nota2+nota3);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[3,4];
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





