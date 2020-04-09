
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){

      var oraciones1 = [
      '<tr> <td><span id="oLSO13" style="cursor: pointer;">Todas</span> las <span id="oLSO4" style="cursor: pointer;">noches</span> <span id="oLSO1" style="cursor: pointer;">duermo</span> <span id="oLSO5" style="cursor: pointer;">temprano</span>.</td> <td><input type="text" id="rLSO1" class="form-control respuestas"></td> </tr>',
      '<tr> <td>Teresa <span id="oLSO2" style="cursor: pointer;">canta</span> <span id="oLSO6" style="cursor: pointer;">todas</span> la <span id="oLSO7" style="cursor: pointer;">noches</span> en el <span id="oLSO8" style="cursor: pointer;">supermercado</span>.</td> <td><input type="text" id="rLSO2" class="form-control respuestas"></td> </tr>',
      '<tr> <td>Mi <span id="oLSO9" style="cursor: pointer;">hermana</span> <span id="oLSO3" style="cursor: pointer;">puede</span> <span id="oLSO10" style="cursor: pointer;">manejar</span> <span id="oLSO11" style="cursor: pointer;">bicicleta</span> <span id="oLSO12" style="cursor: pointer;">muy bien</span>. </td> <td><input type="text" id="rLSO3" class="form-control respuestas"></td> </tr>',      
      ];

      oraciones1.sort(f_randomico);
      $.each( oraciones1, function( i, item ) {
      $( "#oraciones1" ).append( item );
      });

    }   


    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<14; i++){
            if( i<4 ){
                if($('#oLSO'+i +'.pinta').text()){
                  notaFinalP1++;
                  $('#oLSO'+i).addClass('bien');
                }else{
                  $('#oLSO'+i).addClass('mal');
                }
            }else{
                if($('#oLSO'+(i) +'.pinta').text()){
                  notaFinalP1--;
                  $('#oLSO'+i).addClass('mal');
                }
            }
        }


        var resp = ['dormir','cantar','poder'];
        for( var j=1; j<4; j++){
              if( $('#rLSO'+j).val().toLowerCase().replace(/ /gi, "") == resp[j-1] ){
                  notaFinalP1++;
                  $('#rLSO'+j).css("background-color", "#5ED188");
              }else{
                  $('#rLSO'+j).css("background-color", "#EF87A7");
              }
        }

    }





    $(document).ready(function() {
      Inicio();
      Preg1();

      for(var i=1; i<14; i++){////Preg1

            $('#oLSO'+i).click(function(){
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
        if(notaFinalP1<0){nota1 = 0;}else{nota1 = (notaFinalP1*10)/6;}


        

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
  
        /* if( $('#calificacion1').val() !='' && $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        } */
          
        
      });

  });