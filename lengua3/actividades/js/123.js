
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
        '<div align="center"><span class="num1"> Un pato </span><br> <div class="r_imgKg i_imgKg1"></div></div>',
        '<div align="center"><span class="num1"> Doce ratoncitos blancos </span><br> <div class="r_imgKg i_imgKg2"></div></div>',
        '<div align="center"><span class="num1"> Una cadena </span><br> <div class="r_imgKg i_imgKg3"></div></div>',
        '<div align="center"><span class="num1"> No más grande que un zapato </span><br> <div class="r_imgKg i_imgKg4"></div></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p127_act1.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i2_p127_act1.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i3_p127_act1.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'>");
            imgKg.push("<img src='img/i4_p127_act1.png' class='imgKg4' id='imgKg4' style='cursor: pointer;'>");
       
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
                    }else{
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


    function Preg2(){

        var critica = [
        '<li>¿Te pareció melodioso el poema El barco de los ratones?<br> <textarea class="form-control respuestas" style="border-color: #7E17B2;"></textarea><br><br></li>',
        '<li>¿Qué sentimientos o emociones te provocó el poema El barco de los ratones? ¿Por qué?<br> <textarea class="form-control respuestas" style="border-color: #7E17B2;"></textarea><br><br></li>',
        '<li>¿Qué es lo que más te agradó del poema?<br> <textarea class="form-control respuestas" style="border-color: #7E17B2;"></textarea><br><br></li>',
        ];


        critica.sort(f_randomico);
        $('#critica').append(critica);

    }

    
    function Preg3(){ 

        var barco = [
        '<div class="col-sm-4"> <div id="barco1" class="fondo1"><span style="display: none;">barco1</span></div> </div>',
        '<div class="col-sm-4"> <div id="barco2" class="fondo2"><span style="display: none;">barco2</span></div> </div>',
        '<div class="col-sm-4"> <div id="barco3" class="fondo3"><span style="display: none;">barco3</span></div> </div>',
        ];

        barco.sort(f_randomico);
        $('#barco').append(barco);

    }
    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4];
        for(var i=1; i<5; i++){//cantidad de destinos

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
    


    var notaFinalP3 = 0;
    function Resp3(){
        if($('#barco1' +'.marca1').text()){
            notaFinalP3--;
            $('#barco1').addClass('mal1');
        }

        if($('#barco2' +'.marca2').text()){
            notaFinalP3--;
            $('#barco2').addClass('mal2');
        }

        if($('#barco3' +'.marca3').text()){
            notaFinalP3++;
            $('#barco3').addClass('bien');
        }

    }


    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();
      Preg3();

        $('#barco1').click(function(){
            if($(this).hasClass('marca1')) {
                $(this).removeClass('marca1')
                $(this).addClass('fondo1')
            }else{
                $(this).removeClass('fondo1')
                $(this).addClass('marca1')                
            }
        });

        $('#barco2').click(function(){
            if($(this).hasClass('marca2')) {
                $(this).removeClass('marca2')
                $(this).addClass('fondo2')
            }else{
                $(this).removeClass('fondo2')
                $(this).addClass('marca2')                
            }
        });

        $('#barco3').click(function(){
            if($(this).hasClass('marca3')) {
                $(this).removeClass('marca3')
                $(this).addClass('fondo3')
            }else{
                $(this).removeClass('fondo3')
                $(this).addClass('marca3')                
            }
        });        
  



      function confirmar() {
      	Resp1();
        Resp3();

        var nota1 = parseFloat($('#calificacion1').val());
        var nota2;
        if( notaFinalP1<0 ){nota2=0}else{nota2 = (notaFinalP1*2)/4}
        var nota2_1 = parseFloat($('#calificacion2').val());
        var nota3;
        if( notaFinalP3<0 ){nota3=0}else{nota3 = (notaFinalP3*2)}
        var nota4 = parseFloat($('#calificacion3').val());

        var notaFinal = (nota1+nota2+nota2_1+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        if($('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");

        }
      });

  });