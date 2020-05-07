
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
    function Preg1(){
        var destinosKg = [
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;Facebook &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;Youtube &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;WhatsApp &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg3"></div></div>',
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;Twitter &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg4"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i1_p188_act2.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i2_p188_act2.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i3_p188_act2.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'></div>");
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i4_p188_act2.png' class='imgKg4' id='imgKg4' style='cursor: pointer;'></div>");
        imgKg.sort(f_randomico);
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
                    rImgKg4++;
                }
                }
            }

            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre el destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({disabled:true});//deshabilitar el arrastre, despues de soltar en el destino

        }
        });
    } 






///////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1(){
        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4];
        for(var i=1; i<5; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).addClass('b');
                    notaFinalP1++;
                }else{
                    $('.i_imgKg'+i).addClass('m');
                }
            });
        }
    }

    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar() {
          Resp1();
          var nota1 = (notaFinalP1*10)/4;

          var notaFinal = (nota1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        confirmar();/*
        var c=0;
        var punt=[5];
        for( var i=1; i<2; i++ ){
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
        if( c==1 ){confirmar();}
        c=0;*/
      });    

});





