
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });




    function Preg3(){  

        var lectura1 = [
            '<div> <li> <div class="col-sm-3" align="center"> las emociones fuertes </div> <div class="col-sm-5" align="center"> <img src="img/i1_p146_act3.jpg" class="img-responsive"> </div> <div class="col-sm-4" align="center"> <span id="rLI3" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
            '<div> <li> <div class="col-sm-3" align="center"> tener muchos amigos </div> <div class="col-sm-5" align="center"> <img src="img/i1_p146_act3.jpg" class="img-responsive"> </div> <div class="col-sm-4" align="center"> <span id="rLI2" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
            '<div> <li> <div class="col-sm-3" align="center"> la rutina y la discreción </div> <div class="col-sm-5" align="center"> <img src="img/i1_p146_act3.jpg" class="img-responsive"> </div> <div class="col-sm-4" align="center"> <span id="rLI1" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
        ]; 
        lectura1.sort(f_randomico);
        $("#lectura1").append(lectura1);

    }



    //////////////////////////////////////////

    var notaFinalP3 = 0;
    function Resp3(){

        for(var i=1; i<4; i++){
            if( i<2 ){
                if($('#rLI'+(i) +'.pinta').text()){
                  notaFinalP3++;
                  $('#rLI'+i).addClass('bien');
                }else{
                  $('#rLI'+i).addClass('pinta');
                }
            }else{
                if($('#rLI'+(i) +'.pinta').text()){
                  notaFinalP3--;
                  $('#rLI'+i).addClass('mal');
                }
            }
        }

    }
    



    $(document).ready(function() {
      Inicio();
      Preg3();

      for(var i=1; i<4; i++){////Preg1

            $('#rLI'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

      function confirmar() {
      	Resp3();

        var nota1 = parseFloat($('#calificacion2').val());
        var nota2_1 = parseFloat($('#calificacion3').val());
        var nota2;
        if( notaFinalP3<0 ){nota2=0}else{nota2 = (notaFinalP3*2)}
        var nota3 = parseFloat($('#calificacion4').val());

        var notaFinal = (nota1+nota2+nota2_1+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
       if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' && $('#calificacion4').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
        }
        
      });

  });