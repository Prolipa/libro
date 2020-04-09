
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){

        var encierra1 = [
        '<span id="rERC3" style="cursor: pointer;">Se pone la fecha del día y el lugar desde donde se está escribiendo.</span><br><br>',
        '<span id="rERC1" style="cursor: pointer;">Es una frase atenta o afectiva, dependiendo de a quién se dirige la carta.</span><br><br>',
        '<span id="rERC4" style="cursor: pointer;">Es el mensaje de la carta.</span><br><br>',
        ]; 
        encierra1.sort(f_randomico);
        $("#encierra1").append(encierra1);


        var encierra2 = [
        '<span id="rERC5" style="cursor: pointer;">Es una frase atenta o afectiva dependiendo de a quién va dirigida la carta.</span><br><br>',
        '<span id="rERC2" style="cursor: pointer;">Es el mensaje de la carta.</span><br><br>',
        '<span id="rERC6" style="cursor: pointer;">Es una frase de cortesía o de afecto.</span><br><br>',
        ]; 
        encierra2.sort(f_randomico);
        $("#encierra2").append(encierra2);


    }



    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;
    var rImgKg4 = 0;
    var rImgKg5 = 0;
    function Preg2(){

        var destinosKg = [
        '<div align="center"><span class="num1"> Fecha y lugar </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center"><span class="num1"> Saludo </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center"><span class="num1"> Cuerpo </span><br> <div class="r_imgKg i_imgKg3"></div></div>',
        '<div align="center"><span class="num1"> Despedida </span><br> <div class="r_imgKg i_imgKg4"></div></div>',
        '<div align="center"><span class="num1"> Firma </span><br> <div class="r_imgKg i_imgKg5"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p139_act2.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i2_p139_act2.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i3_p139_act2.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i4_p139_act2.png' class='imgKg4' id='imgKg4' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i5_p139_act2.png' class='imgKg5' id='imgKg5' style='cursor: pointer;'>");
       
        //imgKg.sort(f_randomico);
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
                    }else{
                        if(ui.draggable.hasClass("imgKg4")){
                            rImgKg4++;
                        }else{
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


    ///////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        for( var i=1; i<7; i++ ){
            if( i < 3 ){
                if($('#rERC'+i +'.pinta').text()){
                  notaFinalP1++;
                  $('#rERC'+i).addClass('bien');
                }
            }else{
                if($('#rERC'+i +'.pinta').text()){
                  notaFinalP1--;
                  $('#rERC'+i).addClass('mal');
                }
            }
        }
    }





    var notaFinalP2 = 0;
    function Resp2(){

        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4,rImgKg5];
        for(var i=1; i<6; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#5ED188");
                    notaFinalP2++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#EF87A7");
                }
            });

        }
    }



    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();

      for( var i=1; i<7; i++ ){

        $('#rERC'+i).click(function(){
            if($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')
            }else{
                $(this).addClass('pinta')              
            }
        });

      }




      function confirmar() {
      	Resp1();
        Resp2();

        var nota1;
        if( notaFinalP1<0 ){nota1=0}else{nota1 = (notaFinalP1*5)/2;}

        var nota2;
        if( notaFinalP2<0 ){nota2=0}else{nota2 = (notaFinalP2)}
    

        var notaFinal = (nota1+nota2).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
        /*if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
        }*/

      });

  });