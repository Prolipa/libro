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

      var rImgKg1 = 0, rImgKg2 = 0, rImgKg3 = 0, rImgKg4 = 0;
      function Preg2(){
        var destinosKg = [
        '<div align="center" style="display: inline-block; width: 200px;"><img src="img/i1_p22_act2.png" style="width: 200px;"> <br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center" style="display: inline-block; width: 200px;"><img src="img/i2_p22_act2.png" style="width: 200px;"> <br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center" style="display: inline-block; width: 200px;"><img src="img/i3_p22_act2.png" style="width: 200px;"> <br> <div class="r_imgKg i_imgKg3"></div></div>',
        '<div align="center" style="display: inline-block; width: 200px;"><img src="img/i4_p22_act2.png" style="width: 200px;"> <br> <div class="r_imgKg i_imgKg4"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<align='center' style='display: inline-block; margin: 20px 20px 20px 20px;'><img src='img/i5_p22_act2.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block; margin: 20px 20px 20px 20px;'><img src='img/i6_p22_act2.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block; margin: 20px 20px 20px 20px;'><img src='img/i7_p22_act2.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'></div>");
            imgKg.push("<align='center' style='display: inline-block; margin: 20px 20px 20px 20px;'><img src='img/i8_p22_act2.png' class='imgKg4' id='imgKg4' style='cursor: pointer;'></div>");
        
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



    function Preg3(){
      var act3 = [
          '<div style="background-color: #EAEAEA; min-width: 450px; width: 50%; display: inline-block; border-radius: 15px; padding: 5px 15px 5px 15px"><b style="color: #5F4DCD;">•</b> Impulsa a la sangre para que recorra todo el cuerpo.</div> <select id="rC1" class="form-control respuestasC"> <option></option> <option value="">Cerebro</option> <option value="">Pulmones</option> <option value="1">Corazón</option> <option value="">Estómago</option> </select>',
          '<div style="background-color: #F7E2D5; min-width: 450px; width: 50%; display: inline-block; border-radius: 15px; padding: 5px 15px 5px 15px"><b style="color: #5F4DCD;">•</b> Transforma la comida en nutrientes.</div> <select id="rC2" class="form-control respuestasC"> <option></option> <option value="">Cerebro</option> <option value="">Pulmones</option> <option value="2">Estómago</option> <option value="">Corazón</option> <option value="">Corazón</option> </select>',
          '<div style="background-color: #9EE5B4; min-width: 450px; width: 50%; display: inline-block; border-radius: 15px; padding: 5px 15px 5px 15px"><b style="color: #5F4DCD;">•</b> Allí es donde el oxígeno pasa a la sangre.</div> <select id="rC3" class="form-control respuestasC"> <option></option> <option value="">Cerebro</option> <option value="3">Pulmones</option> <option value="">Corazón</option> <option value="">Estómago</option> </select>',
          '<div style="background-color: #EAEAEA; min-width: 450px; width: 50%; display: inline-block; border-radius: 15px; padding: 5px 15px 5px 15px"><b style="color: #5F4DCD;">•</b> Dirige todo lo que piensas, haces y sientes aun cuando estás dormido.</div> <select id="rC4" class="form-control respuestasC"> <option></option> <option value="4">Cerebro</option> <option value="">Pulmones</option> <option value="">Estómago</option> <option value="">Corazón</option> </select>',
      ];
      act3.sort(f_randomico);
      $('#act3').append(act3);
    }

    /////////////////////////////////////////////////////

      var notaP1;
      var notaAP1=0;
      function Resp1(){
        var resp = ['riñones', 'corazón', 'cerebro', 'estómago', 'huesos', 'pulmones', 'hígado', 'intestino',
        'uñasydedos', 'manos', 'ojos', 'nariz', 'pierna', 'brazo', 'labios', 'pelo', 'orejas', 'cabeza', 'pie'];
        var res = [];
        var c=0, d=8;
        for( var i=1; i<3; i++ ){
          res = $('#rA'+i).val().toLowerCase().replace(/ | |\.|de la boca|\n| /gi, "").split(',');
          for( var j=0; j<res.length; j++ ){
            for( var k=c; k<d; k++ ){
              if( res[j] == resp[k] ){
                notaAP1++;
                $('#rA'+i).css('background-color', '#2CDAA0');
              }else{
                $('#rA'+i).css('background-color', '#DA2C59');
              }
            }
          }
          res = [];
          c=8; d=19
        }
        notaP1 = (notaAP1)/19;
      }



    var notaP2;
    var notaAP2 = 0;
    function Resp2(){
        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4];
        for(var i=1; i<5; i++){//cantidad de destinos
            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ // 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaAP2++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }
        notaP2 = (notaAP2)/4;
    }




      var notaP3;
      var notaAP3=0;
      function Resp3(){
        for( var i=1; i<5; i++ ){              
          if( $('#rC'+i).val() == i ){
              notaAP3++;
              $('#rC'+i).css('background-color', '#2CDAA0');
          }else{
              $('#rC'+i).css('background-color', '#DA2C59');
          }
        }
        notaP3 = (notaAP3)/4;
      }
    

      ////////////////////////////////////////////////////////////
      $(document).ready(function() {
        Inicio();
        Preg2();
        Preg3();

        function confirmar(puntajeAbiertas){
            Resp1();
            Resp2();
            Resp3();

            cor = (((parseFloat(puntajeAbiertas) + parseFloat(notaP1) + 
              parseFloat(notaP2) + parseFloat(notaP3)))*10)/3;
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
