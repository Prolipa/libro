
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
    function Preg1(){

        var destinosKg = [
        '<div class="col-sm-2" align="center"><span class="num1"> momento </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div class="col-sm-2" align="center"><span class="num1"> colores </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div class="col-sm-2" align="center"><span class="num1"> instante </span><br> <div class="r_imgKg i_imgKg3"></div></div>',
        '<div class="col-sm-2" align="center"><span class="num1"> mantel </span><br> <div class="r_imgKg i_imgKg4"></div></div>',
        '<div class="col-sm-2" align="center"><span class="num1"> lazo </span><br> <div class="r_imgKg i_imgKg5"></div></div>',
        '<div class="col-sm-2" align="center"><span class="num1"> estrella </span><br> <div class="r_imgKg i_imgKg6"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p126_act1.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i2_p126_act1.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i3_p126_act1.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'>");
       
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


    

    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        var cant = [rImgKg1,rImgKg2,rImgKg3];
        for(var i=1; i<7; i++){//cantidad de destinos

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
        if( notaFinalP1<0 ){nota1=0}else{nota1 = (notaFinalP1*10)/3}

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
      });

  });