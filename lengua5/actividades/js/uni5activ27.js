
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


    function Preg4() {   
      var escribe = [
          '<div class="col-sm-2" style="display: inline-block;"> <span class="num1" style="background-color: #E7D5F3;">&nbsp;&nbsp;dólar&nbsp;&nbsp;</span><br> <textarea class="form-control respuestas num2" id="rD1" style="width: 150px; border-color: #A01FF0;"></textarea> </div>',
          '<div class="col-sm-2" style="display: inline-block;"> <span class="num1" style="background-color: #E7D5F3;">&nbsp;&nbsp;arroba&nbsp;&nbsp;</span><br> <textarea class="form-control respuestas num2" id="rD2" style="width: 150px; border-color: #A01FF0;"></textarea> </div>',
          '<div class="col-sm-2" style="display: inline-block;"> <span class="num1" style="background-color: #E7D5F3;">&nbsp;&nbsp;mayor que&nbsp;&nbsp;</span><br> <textarea class="form-control respuestas num2" id="rD3" style="width: 150px; border-color: #A01FF0;"></textarea> </div>',
          '<div class="col-sm-2" style="display: inline-block;"> <span class="num1" style="background-color: #E7D5F3;">&nbsp;&nbsp;menor que&nbsp;</span><br> <textarea class="form-control respuestas num2" id="rD4" style="width: 150px; border-color: #A01FF0;"></textarea> </div>',
          '<div class="col-sm-2" style="display: inline-block;"> <span class="num1" style="background-color: #E7D5F3;">kilómetro</span><br> <textarea class="form-control respuestas num2" id="rD5" style="width: 150px; border-color: #A01FF0;"></textarea> </div>',
      ];

      escribe.sort(f_randomico);
      $('#escribe').append(escribe);
    }





    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;
    function Preg5(){
        var destinosKg = [
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;Ministerio de Educación &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;Ministerio de Salud &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center" style="display: inline-block;" class="col-sm-3"><span class="dest"> &nbsp;&nbsp;Correos del Ecuador &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg3"></div></div>',        
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i1_p189_act5.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i2_p189_act5.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
            imgKg.push("<div class='col-sm-3' align='center' style='display: inline-block;'><img src='img/i3_p189_act5.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'></div>");
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

    var notaFinalP4=0;
    function Resp4(){
      var resp = ['$', '@', '>', '<', 'km'];
      for(var i=1; i<6; i++){
          if( $('#rD'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
            notaFinalP4++;
            $('#rD'+i).css("background-color", "#05D576");
          }else{
            $('#rD'+i).css("background-color", "#D50545");
          }
      }
    }


    var notaFinalP5 = 0;
    function Resp5(){
        var cant = [rImgKg1,rImgKg2,rImgKg3];
        for(var i=1; i<4; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaFinalP5++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }
    }


    $(document).ready(function() {
        Inicio();
        Preg4();
        Preg5();

        function confirmar() {
          Resp4();
          Resp5();

          var nota1 = parseFloat($('#calificacion1').val());
          var nota2 = parseFloat($('#calificacion2').val());
          var nota3 = parseFloat($('#calificacion3').val());
          var nota4 = (notaFinalP4*2)/5;
          var nota5 = (notaFinalP5*2)/3;

          var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[2,2,2];
        for( var i=1; i<4; i++ ){
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
        
        if( c==3 ){confirmar();}
        c=0;

      });
});





