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

      var rImgKg1 = 0, rImgKg2 = 0;
    function Preg1(){
        var destinosKg = [
        '<div align="center" style="display: inline-block; width: 400px;"><img src="img/i7_p5_act1.png"> <br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center" style="display: inline-block; width: 400px;"><img src="img/i8_p5_act1.png"> <br> <div class="r_imgKg i_imgKg2"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<align='center' style='display: inline-block;'><img src='img/i1_p5_act1.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block;'><img src='img/i2_p5_act1.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block;'><img src='img/i3_p5_act1.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block;'><img src='img/i4_p5_act1.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block;'><img src='img/i5_p5_act1.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block;'><img src='img/i6_p5_act1.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
        
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
                rImgKg2++;
            }
            ui.draggable.attr("style", ""); //vaciar estilos para ubicar la imagen sobre el destino
            $(this).append(ui.draggable); //añadir el contenido al destino
            $(this).find(ui.draggable).draggable({disabled:true});//deshabilitar el arrastre, despues de soltar en el destino
        }
        });
    }


    

      function Preg4(){
        var act4 = [];
        for( var i=1; i<9; i++ ){
          act4[i-1] = '<div style="cursor: pointer; width: 100px; display: inline-block; margin: 10px 10px 10px 10px" id="rD'+i+'"> <img src="img/i'+i+'_p6_act4.png" class="img-responsive" style="width: 100px;"> </div> ';
        }

        act4.sort(f_randomico);
        $('#act4').append(act4);
      }



      ////////////////////////////////////////////////////////////////

      var notaP1;
    var notaAP1 = 0;
    function Resp1(){
        var cant = [rImgKg1,rImgKg2];
        for(var i=1; i<3; i++){//cantidad de destinos
            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 3 ){ // 3 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaAP1++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }
        notaP1 = (notaAP1)/2;
    }

      var notaP4;
      var notaAP4=0;
      function Resp4(){
        for(var i=1; i<9; i++){
            if( i<7 ){
                if($('#rD'+(i) +'.pinta').text()){
                  notaAP4++;
                  $('#rD'+i).addClass('bien');
                }else{
                  if($('#rD'+(i) +'.pinta1').text()){
                    $('#rD'+i).addClass('mal');
                    notaAP4--;
                  }
                }
            }else{
                if($('#rD'+(i) +'.pinta1').text()){
                  $('#rD'+i).addClass('bien');
                  notaAP4++;
                }else{
                  if($('#rD'+(i) +'.pinta').text()){
                    $('#rD'+i).addClass('mal');
                    notaAP4--;
                  }
                }
            }
            }   

        if( notaAP4 < 0 ){
          notaP4=0;
        }else{
          notaP4 = (notaAP4)/6;
        }
      }



      var notaP2;
      var notaAP2=0;
      function Resp2(){
          for(var i=1; i<5; i++){
              if($('#rB'+i).val() == i ){
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
        for(var i=1; i<9; i++){
            if( i<5 ){
                if($('#rC'+(i)).val() != '' ){
                  notaAP3++;
                  $('#rC'+i).addClass('bien');
                }else{
                  $('#rC'+i).addClass('mal');
                  notaAP3--;
                }
            }else{
                if($('#rC'+(i)).val() == '' ){
                  $('#rC'+i).addClass('bien');
                  notaAP3++;
                }else{
                  $('#rC'+i).addClass('mal');
                  notaAP3--;
                }
            }
            }   

        if( notaAP3 < 0 ){
          notaP3=0;
        }else{
          notaP3 = (notaAP3)/8;
        }
      }


      


      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg1();
        Preg4();

        for(var i=1; i<9; i++){
            $('#rD'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        for(var i=1; i<9; i++){
            $('#rD'+(i)).dblclick(function(){
              if($(this).hasClass('pinta1')) {
                  $(this).removeClass('pinta1')
              }else{
                  $(this).addClass('pinta1')
              }
            });
        }

        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();
          Resp3();
          Resp4();

            cor = (((parseFloat(notaP1) + parseFloat(notaP2) + 
              parseFloat(notaP3) + parseFloat(notaP4)))*10)/4;
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
