
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Cargar() {   
      location.reload(true);
    }


    function Preg1(){
      var act1 = [
          '<div style="margin-right: 40px; margin-bottom: 20px; display: inline-block;">alejad &nbsp;<input type="text" id="rA1" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 40px; margin-bottom: 20px; display: inline-block;">bell &nbsp;<input type="text" id="rA2" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 40px; margin-bottom: 20px; display: inline-block;">car &nbsp;<input type="text" id="rA3" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 40px; margin-bottom: 20px; display: inline-block;">sever &nbsp;<input type="text" id="rA4" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 40px; margin-bottom: 20px; display: inline-block;">riqu &nbsp;<input type="text" id="rA5" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 40px; margin-bottom: 20px; display: inline-block;">gord &nbsp;<input type="text" id="rA6" class="form-control respuestas input-sm" style="width: 80px;"></div>',              
      ];

      act1.sort(f_randomico);
      $('#act1').append(act1);
    }


    function Preg2(){
      var act2 = [
          'El paisaje &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm" style="width: 250px; border: none; border-bottom: 1px solid #1D29E6; border-bottom-style: dashed;" id="rB1">&nbsp;&nbsp;  del Ecuador es admirado por los turistas. <br>',
          'Los niños  &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm" style="width: 250px; border: none; border-bottom: 1px solid #1D29E6; border-bottom-style: dashed;" id="rB2">&nbsp;&nbsp; salieron muy temprano. <br>',
          'La película de estreno resultó &nbsp;&nbsp;<input type="text" class="form-control respuestas input-sm" style="width: 250px; border: none; border-bottom: 1px solid #1D29E6; border-bottom-style: dashed;" id="rB3">. <br>',
      ];

      act2.sort(f_randomico);
      $('#act2').append(act2);
    }


    function Preg4(){
      var act4 = [
          '<div style="margin-right: 120px; margin-bottom: 20px; display: inline-block;">riquísimo &nbsp;<input type="text" id="rD1" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 120px; margin-bottom: 20px; display: inline-block;">bajísimo &nbsp;<input type="text" id="rD2" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 120px; margin-bottom: 20px; display: inline-block;">loquísimo &nbsp;<input type="text" id="rD3" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 120px; margin-bottom: 20px; display: inline-block;">rapidísima &nbsp;<input type="text" id="rD4" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 120px; margin-bottom: 20px; display: inline-block;">lentísima &nbsp;<input type="text" id="rD5" class="form-control respuestas input-sm" style="width: 80px;"></div>',
          '<div style="margin-right: 120px; margin-bottom: 20px; display: inline-block;">carísimo &nbsp;<input type="text" id="rD6" class="form-control respuestas input-sm" style="width: 80px;"></div>',
      ];

      act4.sort(f_randomico);
      $('#act4').append(act4);
    }


    var rImgKg1 = 0;
    var rImgKg2 = 0;
    function Preg5(){
        var destinosKg = [
        '<div align="center"><span class="dest"> &nbsp;&nbsp;género masculino&nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center"><span class="dest"> &nbsp;&nbsp;género femenino&nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg2"></div></div>',        
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<div align='center'><img src='img/i1_p221_act5.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<div align='center'><img src='img/i2_p221_act5.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'></div>");
            imgKg.push("<div align='center'><img src='img/i3_p221_act5.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
            imgKg.push("<div align='center'><img src='img/i4_p221_act5.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'></div>");
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


    //////////////////////////////////////
    var notaP1;
    var notafinalP1=0;
    function Resp1(){
      var resp=['ísimo','ísima','ísimo','ísima','ísimo','ísimo'];

      for( var i=1; i<7; i++ ){
        if( $('#rA'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
          notafinalP1++;
          $('#rA'+i).css("background-color", "#1AE79C");
        }else{
          $('#rA'+i).css("background-color", "#E71A4E");
        }
      }
      notaP1 = (notafinalP1*2)/6;
    }


    var notaP2;
    var notafinalP2=0;
    function Resp2(){
      var resp=['bellísimo','inquietísimos','buenísima'];
      
      for( var i=1; i<4; i++ ){
        if( $('#rB'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
          notafinalP2++;
          $('#rB'+i).css("background-color", "#1AE79C");
        }else{
          $('#rB'+i).css("background-color", "#E71A4E");
        }
      }
      notaP2 = (notafinalP2*2)/3;
    }


    var notaP4;
    var notafinalP4=0;
    function Resp4(){
      var resp=['rico','bajo','loco','rápida','lenta','caro'];
      
      for( var i=1; i<7; i++ ){
        if( $('#rD'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
          notafinalP4++;
          $('#rD'+i).css("background-color", "#1AE79C");
        }else{
          $('#rD'+i).css("background-color", "#E71A4E");
        }
      }
      notaP4 = (notafinalP4*2)/6;
    }

    var notaP5;
    var notaFinalP5 = 0;
    function Resp5(){
        var cant = [rImgKg1,rImgKg2];
        for(var i=1; i<3; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 2 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaFinalP5++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }
        notaP5 = (notaFinalP5*2)/4;
    }

    ///////////////////////////////////////////

    $(document).ready(function() {
        Inicio();
        Preg1();
        Preg2();
        Preg4();
        Preg5();

        function confirmar(puntajeAbiertas){
          Resp1();
          Resp2();
          Resp4();
          Resp5();
            cor = puntajeAbiertas+notaP1+notaP2+notaP4+notaP5;
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

      $("#Calificar").click(function() {
        punt=[2];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=2;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });





