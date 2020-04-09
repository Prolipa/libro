
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
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
    function Preg1(){

        var destinosKg = [
        '<div><span class="num1"> Explica las reglas de uso de la Lengua. </span><br> <div class="r_imgKg i_imgKg1"></div> <br></div>',
        '<div><span class="num1"> Da información sobre los sentimientos o emociones del emisor. </span><br> <div class="r_imgKg i_imgKg2"></div> <br></div>',
        '<div><span class="num1"> Busca influir en el comportamiento del receptor. </span><br> <div class="r_imgKg i_imgKg3"></div> <br></div>',
        '<div><span class="num1"> Transmite información sobre el entorno en el que están el emisor y el receptor. </span><br> <div class="r_imgKg i_imgKg4"></div> <br></div>',
        '<div><span class="num1"> Pone énfasis en la forma en la que se expresa el mensaje, embelleciendo el lenguaje. </span><br> <div class="r_imgKg i_imgKg5"></div> <br></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p134_act1.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i2_p134_act1.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i3_p134_act1.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i4_p134_act1.png' class='imgKg4' id='imgKg4' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i5_p134_act1.png' class='imgKg5' id='imgKg5' style='cursor: pointer;'><br><br>");
       
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



    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4,rImgKg5];
        for(var i=1; i<6; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#5ED188");
                    notaFinalP1++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#EF87A7");
                }
            });

        }
    }
    



    $(document).ready(function() {
      Inicio();
      Preg1();


      function confirmar() {
      	Resp1();

        var nota1;
        if( notaFinalP1<0 ){nota1=0}else{nota1 = (notaFinalP1*10)/5}

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
        
      });

  });