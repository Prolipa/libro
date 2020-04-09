
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


    function Preg7() {   
      var oraciones = [
          '• El <span id="oG1" style="cursor: pointer;">bazo</span> <span id="oG5" style="cursor: pointer;">sufrió</span> una <span id="oG6" style="cursor: pointer;">infección</span> muy <span id="oG7" style="cursor: pointer;">grave</span>.<br>',
          '• El <span id="oG8" style="cursor: pointer;">sastre</span> <span id="oG2" style="cursor: pointer;">cosió</span> las <span id="oG9" style="cursor: pointer;">costuras</span> de la <span id="oG10" style="cursor: pointer;">falda</span>.<br>',
          '• El <span id="oG3" style="cursor: pointer;">vaso</span> de <span id="oG11" style="cursor: pointer;">vidrio</span> es el más <span id="oG12" style="cursor: pointer;">efectivo</span> para el <span id="oG13" style="cursor: pointer;">experimento</span>.<br>',
          '• <span id="oG14" style="cursor: pointer;">Mamá</span> <span id="oG4" style="cursor: pointer;">coció</span> los <span id="oG15" style="cursor: pointer;">alimentos</span> con <span id="oG16" style="cursor: pointer;">precaución</span>.<br>                            ',
      ];

      oraciones.sort(f_randomico);
      $('#oraciones').append(oraciones);
    }





    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;
    function Preg8(){
        var destinosKg = [
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;internet &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;arroba &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;emoticón &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg3"></div></div>',        
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i1_p198_act8.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i2_p198_act8.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i3_p198_act8.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'></div>");
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
                    rImgKg3++;
                }
            }
            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre el destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({disabled:true});//deshabilitar el arrastre, despues de soltar en el destino
        }
        });
    }

    ////////////////////////////////////////////////////////////

    var notaFinalP1=0;
    function Resp1(){
      var resp = ['amorfino', 'chigualo', 'copla'];
      for(var i=1; i<4; i++){
          if( $('#rA'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
            notaFinalP1++;
            $('#rA'+i).css("background-color", "#05D576");
          }else{
            $('#rA'+i).css("background-color", "#D50545");
          }
      }
    }


    var notaFinalP7=0;
    function Resp7(){
      for(var j=1; j<18; j++){
        if(j<5){
          if($('#oG'+j +'.pinta').text()){
            notaFinalP7++;
            $('#oG'+j).addClass('bien');
          }
        }else{
          if($('#oG'+j +'.pinta').text()){
            notaFinalP7--;
            $('#oG'+j).addClass('mal');
          }
        } 
      }
    }



    var notaFinalP8 = 0;
    function Resp8(){
        var cant = [rImgKg1,rImgKg2,rImgKg3];
        for(var i=1; i<4; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaFinalP8++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }
    }

    ///////////////////////////////////
    $(document).ready(function() {
        Inicio();
        Preg7();
        Preg8();

        for(var i=1; i<18; i++){
            $('#oG'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar() {
          Resp1();
          Resp7();
          Resp8();

          var nota1 = (notaFinalP1*1.5)/3;
          var nota2 = parseFloat($('#calificacion1').val());
          var nota3 = parseFloat($('#calificacion2').val());
          var nota4 = parseFloat($('#calificacion3').val());
          var nota5 = parseFloat($('#calificacion4').val());
          var nota6 = parseFloat($('#calificacion5').val());
          var nota7;
          if(notaFinalP7<0){nota7=0;}else{nota7=(notaFinalP7*1.5)/4;}
          var nota8 = (notaFinalP8)/3;
          var nota9 = parseFloat($('#calificacion6').val());

          var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[1,1,1,1,1,1];
        for( var i=1; i<7; i++ ){
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
        
        if( c==6 ){confirmar();}
        c=0;

      });
});





