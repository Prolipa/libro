
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $(".panel-collapse").addClass('in');

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;
    var rImgKg4 = 0;
    var rImgKg5 = 0;
    function Preg4(){
        var destinosKg = [
        '<div align="center"><span class="dest"> &nbsp;&nbsp;Lugar.&nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center"><span class="dest"> &nbsp;&nbsp;Abundante. </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center"><span class="dest"> &nbsp;&nbsp;Navegación por los rápidos de un río.&nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg3"></div></div>',
        '<div align="center"><span class="dest"> &nbsp;&nbsp;Turismo en armonía con la naturaleza.&nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg4"></div></div>',
        '<div align="center"><span class="dest"> &nbsp;&nbsp;Dar a conocer.&nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg5"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p176_act4.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'><br>");
            imgKg.push("<img src='img/i2_p176_act4.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'><br>");
            imgKg.push("<img src='img/i3_p176_act4.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'><br>");
            imgKg.push("<img src='img/i4_p176_act4.png' class='imgKg4' id='imgKg4' style='cursor: pointer;'><br>");
            imgKg.push("<img src='img/i5_p176_act4.png' class='imgKg5' id='imgKg5' style='cursor: pointer;'><br>");
        //imgKg.sort(f_randomico);
        $(".imgKg").append(imgKg);
        $(".imgKg img").draggable({ //arrastramos
            revert: "invalid",
            zIndex:5,
            containment: "#activity",
            scroll: false,
        });


        $(".r_imgKg").droppable({
        drop: function(e, ui) {
            if(ui.draggable.hasClass("imgKg1")){
                rImgKg1++;
            }else {
                if(ui.draggable.hasClass("imgKg2")){
                    rImgKg2++;
                }else {
                    if(ui.draggable.hasClass("imgKg3")){
                    rImgKg3++;
                }else {
                    if(ui.draggable.hasClass("imgKg4")){
                    rImgKg4++;
                }else {
                    rImgKg5++;
                }
                }
                }
            }

            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre el destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({disabled:true});//deshabilitar el arrastre, despues de soltar en el destino

        }
        });
    }



    function Preg5(){
      var identifica = [
          '<span class="num2" style="border-color: #D22449;" id="rD3">formativo</span>',
          '<span class="num2" style="border-color: #2434D2;" id="rD1">descriptivo</span>',
          '<span class="num2" style="border-color: #24D26E;" id="rD2">informativo</span>',
          '<span class="num2" style="border-color: #D29324;" id="rD4">recreativo</span>',                    
      ];
      identifica.sort(f_randomico);
      $('#identifica').append(identifica);
    }
///////////////////////////////////////////

    var notaFinalP2 = 0;
    function Resp4(){
        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4,rImgKg5];
        for(var i=1; i<6; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaFinalP2++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }

      for(var j=1; j<5; j++){
            if( j<3 ){
                if($('#rD'+(j) +'.pinta').text()){
                  notaFinalP2++;
                  $('#rD'+j).addClass('bien');
                }
            }else{
                if($('#rD'+(j) +'.pinta').text()){
                  $('#rD'+j).addClass('mal');
                  notaFinalP2--;
                }
            }
        }
    }


    $(document).ready(function() {
        Inicio();
        Preg4();
        Preg5();

        for(var i=1; i<5; i++){
            $('#rD'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }
        

        function confirmar() {
          Resp4();

            var nota1 = parseFloat($('#calificacion1').val());
            var nota2;
            if(notaFinalP2<0){nota2=0}else{nota2 = (notaFinalP2*4)/7;}
            var nota4 = parseFloat($('#calificacion2').val());

            var notaFinal = (nota1+nota2+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[2.5,3.5];
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





