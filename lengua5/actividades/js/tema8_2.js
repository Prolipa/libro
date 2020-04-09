var titulos="aplico";
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
        '<div><span class="num1"> Conectores causales </span><br><br> <div class="r_imgKg i_imgKg1"></div> <br><br></div>',
        '<div><span class="num1"> Conectores de orden </span><br><br> <div class="r_imgKg i_imgKg2"></div> <br><br></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i1_p145_act1.png' class='imgKg1' id='imgKg1' width='220px;' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i2_p145_act1.png' class='imgKg1' id='imgKg1' width='220px;' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i3_p145_act1.png' class='imgKg1' id='imgKg1' width='220px;' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i4_p145_act1.png' class='imgKg2' id='imgKg2' width='220px;' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i5_p145_act1.png' class='imgKg2' id='imgKg2' width='220px;' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i6_p145_act1.png' class='imgKg2' id='imgKg2' width='220px;' style='cursor: pointer;'><br><br>");
       
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




    function Preg2(){


        var inventa = [
        '<span class="col-sm-2 n1">Primero</span><input type="text" class="form-control respuestas" style="width: 70%; display: inline-block;"><br><br>',
        '<span class="col-sm-2 n2">Después</span><input type="text" class="form-control respuestas" style="width: 70%; display: inline-block;"><br><br>',
        '<span class="col-sm-2 n3">Luego</span><input type="text" class="form-control respuestas" style="width: 70%; display: inline-block;"><br><br>',
        '<span class="col-sm-2 n4">Antes que</span><input type="text" class="form-control respuestas" style="width: 70%; display: inline-block;"><br><br>',
        '<span class="col-sm-2 n1">En cuanto</span><input type="text" class="form-control respuestas" style="width: 70%; display: inline-block;"><br><br>',
        ];

        inventa.sort(f_randomico);
        $.each( inventa, function( i, item ) {
        $( "#inventa" ).append( item );
        });

    }



    function Preg3(){


        var conectores = [
        '<li style="cursor: pointer;"> <span id="cEP6">El transporte</span> <span id="cEP7">es una necesidad del ser humano</span>, y <span id="cEP8">es parte esencial</span> <span id="cEP26">de su evolución tecnológica</span>; <span id="cEP1">es por esto que ha</span> <span id="cEP9">desarrollado diversos</span> tipos medios    <span id="cEP10">para movilizarse</span>.<br><br> </li>',
        '<li style="cursor: pointer;"> <span id="cEP11">Los osos polares</span>, <span id="cEP12">en los</span> <span id="cEP13">meses de primavera y verano</span>, <span id="cEP14">tienen que</span> <span id="cEP28">comer todo lo que puedan</span>, <span id="cEP2">ya que</span> <span id="cEP15">pasarán casi</span> <span id="cEP16">todo el invierno en ayunas</span>.<br><br> </li>',
        '<li style="cursor: pointer;"> <span id="cEP3">Finalmente</span>, <span id="cEP17">el suelo se</span> <span id="cEP18">protege con diversas estrategias comunitarias</span> <span id="cEP19">y en</span> beneficio <span id="cEP20">de la</span> Pachamama.<br><br> </li>',
        '<li style="cursor: pointer;"> <span id="cEP21">No están listos</span> <span id="cEP22">todavía</span>; <span id="cEP4">por consiguiente</span>, <span id="cEP23">hay que</span> esperar.<br><br> </li>',
        '<li style="cursor: pointer;"> <span id="cEP27">Y</span>, <span id="cEP5">por último</span>, <span id="cEP24">nos avisaron</span> <span id="cEP25">la fecha del examen</span>.<br><br> </li>',
        ];

        conectores.sort(f_randomico);
        $.each( conectores, function( i, item ) {
        $( "#conectores" ).append( item );
        });

    }



    function Preg4(){            

        var oraciones = [
        'Los animales están muriendo en grandes cantidades &nbsp;&nbsp;<input type="text" id="rCOC1" class="form-control respuestas" style="width: 170px; display: inline-block; text-align: center;">&nbsp;&nbsp;su hábitat está contaminado. <br><br>',
        'Se rompieron las tuberías de agua; &nbsp;&nbsp;<input type="text" id="rCOC2" class="form-control respuestas" style="width: 170px; display: inline-block; text-align: center;">&nbsp;&nbsp;, la gente debe moderar el consumo de agua hasta el viernes. <br><br>',
        'Siempre sobresale &nbsp;&nbsp;<input type="text" id="rCOC3" class="form-control respuestas" style="width: 120px; display: inline-block; text-align: center;">&nbsp;&nbsp; su inteligencia. El jefe lo llamó &nbsp;&nbsp;<input type="text" id="rCOC4" class="form-control respuestas" style="width: 170px; display: inline-block; text-align: center;">&nbsp;&nbsp; de su desempeño.<br><br>',
        ];

        oraciones.sort(f_randomico);
        $.each( oraciones, function( i, item ) {
        $( "#oraciones" ).append( item );
        });

    }



    var notaFinalP1 = 0;
    function Resp1(){

        var cant = [rImgKg1,rImgKg2];
        for(var i=1; i<3; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 3 ){ /// 3 = cantidad de imgs que debe contener cada destino
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

    for(var i=1; i<29; i++){
            if( i<6 ){
                if($('#cEP'+(i) +'.pinta').text()){
                  notaFinalP3++;
                  $('#cEP'+i).css("background-color", "#5ED188");
                }/*else{
                  $('#cEP'+i).css("background-color", "#EF87A7");
                }*/
            }else{
                if($('#cEP'+(i) +'.pinta').text()){
                  notaFinalP3--;
                  $('#cEP'+i).css("background-color", "#EF87A7");
                }
            }
        }
    }



    var notaFinalP4 = 0;
    function Resp4(){

      var resp = ['puestoque','porestarazón','por','conmotivo'];
        for(var i=1; i<5; i++){
                
              if( ($('#rCOC'+i).val()).toLowerCase().replace(/ /gi, "") == resp[i-1]){
                  notaFinalP4++;
                  $('#rCOC'+i).css("background-color", "#5ED188");      
              }else{
                  $('#rCOC'+i).css("background-color", "#EF87A7");
              }
        }
    }

    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg1();
      Preg2();
      Preg3();
      Preg4();


          for(var i=1; i<29; i++){////Preg3

              $('#cEP'+(i)).click(function(){
                  if($(this).hasClass('pinta')) {
                      $(this).removeClass('pinta')
                  }else{
                      $(this).addClass('pinta')
                  }

              });
          }

      function confirmar() {
    
        Resp1();
        Resp3();
        Resp4();

        var nota1;
        if(notaFinalP1<0){nota1=0;}else{nota1 = (notaFinalP1*3)/6}
        var nota2 = parseInt($('#calificacion2').val());
        var nota3;
         if(notaFinalP3<0){nota3=0;}else{nota3 = (notaFinalP3*3)/5}
        var nota4 = (notaFinalP4*2)/4;

        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);    

            $("#txtNota").text(notaFinal+'/10');
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
      
      if($('#calificacion2').val() !=''){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        }
        
      });

  });
