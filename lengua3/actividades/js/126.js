
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

        var tacha1 = [
        '<span class="numero sombra col-sm-1" id="rCTV3" style="background-color: #F7D0D0; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;21&nbsp;</span>',
        '<span class="numero sombra col-sm-1" id="rCTV2" style="background-color: #F7F3D0; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;10&nbsp;</span>',
        '<span class="numero sombra col-sm-1" id="rCTV1" style="background-color: #D2F7D0; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;16&nbsp;</span>',
        '<span class="numero sombra col-sm-1" id="rCTV4" style="background-color: #D0DCF7; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;28&nbsp;</span>',
        '<span class="numero sombra col-sm-1" id="rCTV5" style="background-color: #F7D0EF; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;12&nbsp;</span>',
        ];

        tacha1.sort(f_randomico);
        $('#tacha1').append(tacha1);

    }


    function Preg2(){

        var tacha2 = [
        '<span class="numero sombra col-sm-1" id="rCTP3" style="background-color: #F7D0D0; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;8&nbsp;</span>',
        '<span class="numero sombra col-sm-1" id="rCTP2" style="background-color: #F7F3D0; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;5&nbsp;</span>',
        '<span class="numero sombra col-sm-1" id="rCTP1" style="background-color: #D2F7D0; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;4&nbsp;</span>',
        '<span class="numero sombra col-sm-1" id="rCTP4" style="background-color: #D0DCF7; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;28&nbsp;</span>',
        '<span class="numero sombra col-sm-1" id="rCTP5" style="background-color: #F7D0EF; display: inline-block; text-align: center; margin-right: 20px;">&nbsp;16&nbsp;</span>',
        ];

        tacha2.sort(f_randomico);
        $('#tacha2').append(tacha2);

    }



    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<6; i++){
            if( i<2 ){
                if($('#rCTV'+(i) +'.pinta').text()){
                  notaFinalP1++;
                  $('#rCTV'+i).css("background-color", "#5ED188");
                }/*else{
                  $('#sECP'+i).css("background-color", "#E3CB76");
                }*/
            }else{
                if($('#rCTV'+(i) +'.pinta').text()){
                  notaFinalP1--;
                  $('#rCTV'+i).css("background-color", "#EF87A7");
                }
            }
        }
    }



    var notaFinalP2 = 0;
    function Resp2(){

        for(var i=1; i<6; i++){
            if( i<2 ){
                if($('#rCTP'+(i) +'.pinta').text()){
                  notaFinalP2++;
                  $('#rCTP'+i).css("background-color", "#5ED188");
                }/*else{
                  $('#sECP'+i).css("background-color", "#E3CB76");
                }*/
            }else{
                if($('#rCTP'+(i) +'.pinta').text()){
                  notaFinalP2--;
                  $('#rCTP'+i).css("background-color", "#EF87A7");
                }
            }
        }
    }
    




    $(document).ready(function() {
      Inicio();
      $(".panel-collapse").removeClass('in');
      Preg1();
      Preg2();

        for(var i=1; i<6; i++){////Preg1

            $('#rCTV'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });

            $('#rCTP'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });

        }       
  



      function confirmar() {
      	Resp1();
        Resp2();

        var nota1;
        if( notaFinalP1<0 ){nota1=0}else{nota1 = (notaFinalP1*2)}
        var nota2;
        if( notaFinalP2<0 ){nota2=0}else{nota2 = (notaFinalP2*2)}
        var nota3 = parseFloat($('#calificacion3').val());
        var nota4 = parseFloat($('#calificacion4').val());
       
        

        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

        if($('#calificacion3').val() !='' && $('#calificacion4').val() !='' ){
          confirmar();
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");

        }
      });

  });