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

      var rImgKg1 = 0, rImgKg2 = 0, rImgKg3 = 0;
    function Preg1(){
        var destinosKg = [
        '<div align="center" style="display: inline-block; width: 200px;"><img src="img/i1_p9_act1.png"> <br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center" style="display: inline-block; width: 200px;"><img src="img/i2_p9_act1.png"> <br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center" style="display: inline-block; width: 200px;"><img src="img/i3_p9_act1.png"> <br> <div class="r_imgKg i_imgKg3"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<align='center' style='display: inline-block; margin: 20px 20px 20px 20px;'><img src='img/i4_p9_act1.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block; margin: 20px 20px 20px 20px;'><img src='img/i5_p9_act1.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block; margin: 20px 20px 20px 20px;'><img src='img/i6_p9_act1.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'></div>");
        
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


    

      function Preg2(){
        var act2 = [];
        for( var i=1; i<5; i++ ){
          act2[i-1] = '<div style="width: 220px; display: inline-block; margin: 20px 20px 20px 20px;"> <input type="number" id="rB'+i+'" class="form-control respuestasB"> <img src="img/i'+i+'_p10_act2.jpg" class="img-responsive" style="display: inline-block;"> </div>';
        }

        act2.sort(f_randomico);
        $('#act2').append(act2);
      }




      function Preg3(){
        var act3 = [];
        for( var i=1; i<5; i++ ){
          act3[i-1] = '<div style="width: 220px; display: inline-block; margin: 20px 20px 20px 20px;"> <img src="img/i'+i+'_p10_act3.jpg" class="img-responsive"> <input type="number" id="rC'+i+'" class="form-control respuestasC"> </div>';
        }

        act3.sort(f_randomico);
        $('#act3').append(act3);
      }



      ////////////////////////////////////////////////////////////////

    var notaP1;
    var notaAP1 = 0;
    function Resp1(){
        var cant = [rImgKg1,rImgKg2,rImgKg3];
        for(var i=1; i<4; i++){//cantidad de destinos
            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ // 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaAP1++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }
        notaP1 = (notaAP1)/3;
    }


      var notaP2;
      var notaAP2=0;
      function Resp2(){
        var resp = [3,4,2,1];
          for(var i=1; i<5; i++){
              if($('#rB'+i).val() == resp[i-1] ){
                notaAP2++;
                $('#rB'+i).addClass('bien');
              }else{
                $('#rB'+i).addClass('mal');
              }
          }   
          notaP2 = (notaAP2)/4;
      }



      var notaP3;
      var notaAP3=0;
      function Resp3(){
          for(var i=1; i<5; i++){
              if( $('#rC'+i).val() == i ){
                notaAP3++;
                $('#rC'+i).addClass('bien');
              }else{
                $('#rC'+i).addClass('mal');
              }
          }   
          notaP3 = (notaAP3)/4;
      }


      


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg1();
        Preg2();
        Preg3();


        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();
          Resp3();

            cor = (((parseFloat(notaP1) + parseFloat(notaP2) + 
              parseFloat(notaP3) + parseFloat(puntajeAbiertas)))*10)/4;
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
        punt=[1];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=punt.length+1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          $('#bt_comprobar').attr('disabled', true);
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });
