
  function Inicio() {
      $(".panel-collapse").removeClass('in');
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

    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;
    var rImgKg4 = 0;
    function Preg8(){
        var destinosKg = [
        '<div align="center"><span class="dest"> &nbsp;&nbsp; pero &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center"><span class="dest"> &nbsp;&nbsp; y &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center"><span class="dest"> &nbsp;&nbsp; o &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg3"></div></div>',
        '<div align="center"><span class="dest"> &nbsp;&nbsp; ni &nbsp;&nbsp; </span><br> <div class="r_imgKg i_imgKg4"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<div align='center'><img src='img/i1_p194_act1.png' class='imgKg1 img-responsive' id='imgKg1' style='cursor: pointer;'><br><br></div>");
            imgKg.push("<div align='center'><img src='img/i3_p194_act1.png' class='imgKg2 img-responsive' id='imgKg2' style='cursor: pointer;'><br><br></div>");
            imgKg.push("<div align='center'><img src='img/i5_p194_act1.png' class='imgKg3 img-responsive' id='imgKg3' style='cursor: pointer;'><br><br></div>");
            imgKg.push("<div align='center'><img src='img/i7_p194_act1.png' class='imgKg4 img-responsive' id='imgKg4' style='cursor: pointer;'><br><br></div>");
        imgKg.sort(f_randomico);
        $(".imgKg").append(imgKg);
        $(".imgKg img").draggable({ //arrastramos
            revert: "invalid",
            zIndex:5,
            containment: "#activity",
            scroll: false,
        });

        var imgKg1=[];
            imgKg1.push("<div align='center'><img src='img/i2_p194_act1.png' class='imgKg1 img-responsive' id='imgKg1' style='cursor: pointer;'><br><br></div>");
            imgKg1.push("<div align='center'><img src='img/i4_p194_act1.png' class='imgKg2 img-responsive' id='imgKg2' style='cursor: pointer;'><br><br></div>");
            imgKg1.push("<div align='center'><img src='img/i6_p194_act1.png' class='imgKg3 img-responsive' id='imgKg3' style='cursor: pointer;'><br><br></div>");
            imgKg1.push("<div align='center'><img src='img/i8_p194_act1.png' class='imgKg4 img-responsive' id='imgKg4' style='cursor: pointer;'><br><br></div>");
        imgKg1.sort(f_randomico);
        $(".imgKg1").append(imgKg1);
        $(".imgKg1 img").draggable({ //arrastramos
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




    var notaFinalP8 = 0;
    function Resp8(){
        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4];
        for(var i=1; i<5; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 2 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#1AE79C");
                    notaFinalP8++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#E71A4E");
                }
            });
        }
    }

    $(document).ready(function() {
        Inicio();
        Preg8();
        $(".panel-collapse").addClass('in');

        function confirmar() {
          Resp8();
          var nota1 = (notaFinalP8*10)/9;

            var notaFinal = (nota1);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        confirmar();
        /*if( $('#calificacion1').val() !='' ){
          if( $('#calificacion1').val()<=10 && $('#calificacion1').val()>=0 ){
            
            $('#calificacion1').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
        }*/
      });    

});





