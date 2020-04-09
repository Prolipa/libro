
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
    function Preg1(){

        var destinosKg = [
        '<div><span class="num1"> Que ha dejado de dirigir un ministerio.  </span><br> <div class="r_imgKg i_imgKg1"></div> <br></div>',
        '<div><span class="num1"> Parte de la construcción que está debajo del suelo.  </span><br> <div class="r_imgKg i_imgKg2"></div> <br></div>',
        '<div><span class="num1"> Que come carne.  </span><br> <div class="r_imgKg i_imgKg3"></div> <br></div>',
        '<div><span class="num1"> Trámite o conversación que no tiene carácter oficial o reglamentario. </span><br> <div class="r_imgKg i_imgKg4"></div> <br></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p156_act1.jpg' class='imgKg1' id='imgKg1' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i2_p156_act1.jpg' class='imgKg2' id='imgKg2' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i3_p156_act1.jpg' class='imgKg3' id='imgKg3' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i4_p156_act1.jpg' class='imgKg4' id='imgKg4' style='cursor: pointer;'><br><br>");
       
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



    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4];
        for(var i=1; i<5; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 3 = cantidad de imgs que debe contener cada destino
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
        if(notaFinalP1<0){nota1 = 0;}else{nota1 = (notaFinalP1*10)/4;}


        

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
  
        /* if( $('#calificacion1').val() !='' && $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        } */
          
        
      });

  });