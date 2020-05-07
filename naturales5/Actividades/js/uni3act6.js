var titulos="aplico";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $(".panel-collapse").addClass('in');
  }

      function Cargar() {   
          location.reload(true);
      }


      var rImgKg1 = 0, rImgKg2 = 0, rImgKg3 = 0, rImgKg4 = 0, rImgKg5 = 0;
      function Preg3(){
        var destinosKg = [
            '<div class="r_imgKg i_imgKg1" style="border-color: #ECA9BB; display: inline-block;"> <img src="img/i6_p35_act1.png" class="img-responsive"> </div>',
            '<div class="r_imgKg i_imgKg2" style="border-color: #ECA9BB; display: inline-block;"> <img src="img/i7_p35_act1.png" class="img-responsive"> </div>',
            '<div class="r_imgKg i_imgKg3" style="border-color: #ECA9BB; display: inline-block;"> <img src="img/i8_p35_act1.png" class="img-responsive"> </div>',
            '<div class="r_imgKg i_imgKg4" style="border-color: #ECA9BB; display: inline-block;"> <img src="img/i9_p35_act1.png" class="img-responsive"> </div>',
            '<div class="r_imgKg i_imgKg5" style="border-color: #ECA9BB; display: inline-block;"> <img src="img/i10_p35_act1.png" class="img-responsive"> </div>',
        ]; 
        
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[
            "<img src='img/i1_p35_act1.png' class='img-responsive imgKg1' id='imgKg1' style='cursor: pointer; display: inline-block;'>",
            "<img src='img/i2_p35_act1.png' class='img-responsive imgKg2' id='imgKg2' style='cursor: pointer; display: inline-block;'>",
            "<img src='img/i3_p35_act1.png' class='img-responsive imgKg3' id='imgKg3' style='cursor: pointer; display: inline-block;'>",
            "<img src='img/i4_p35_act1.png' class='img-responsive imgKg4' id='imgKg4' style='cursor: pointer; display: inline-block;'>",
            "<img src='img/i5_p35_act1.png' class='img-responsive imgKg5' id='imgKg5' style='cursor: pointer; display: inline-block;'>",
        ];
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





      ////////////////////////////////////////////////////////////


      var notaP3;
      var notaAP3 = 0;
      function Resp3(){
        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4,rImgKg5];
        for(var i=1; i<6; i++){//cantidad de destinos
            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                  $('.i_imgKg'+i).css("background-color", "#1AE79C");
                  notaAP3++;
              }else{
                  $('.i_imgKg'+i).css("background-color", "#E71A4E");
              }
            });
        }
        notaP3 = notaAP3*2;
      }

      ////////////////////////////////////////////////////////////


      $(document).ready(function() {
        Inicio();
        Preg3();

        function confirmar(puntajeAbiertas){
          Resp3();

            cor = ((parseFloat(puntajeAbiertas) + parseFloat(notaP3)));
            calificacion=1;
            itemsT=1;
            cont=1;
            ejer=1;
            inc=0;
            Calculo_nota();

            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);
            return false
        }

      $("#bt_comprobar").click(function() {
        punt=[];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=punt.length+1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          $('#bt_comprobar').attr('disabled', true);
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });
