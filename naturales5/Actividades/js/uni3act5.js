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
      function Preg3(){
        var destinosKg = [
            '<div class="r_imgKg i_imgKg2" style="border-color: #ECA9BB;">Brazos<br></div>',
            '<div class="r_imgKg i_imgKg1" style="border-color: #ECDFA9;">Cabeza<br></div>',
            '<div class="r_imgKg i_imgKg3" style="border-color: #C3A9EC;">Tronco<br></div>',
            '<div class="r_imgKg i_imgKg4" style="border-color: #A5AE9E;">Piernas<br></div>',
        ]; 
        
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[
          "<img src='img/i1_p33_act3.png' class='img-responsive imgKg1' id='imgKg1' style='cursor: pointer;'>",
          "<img src='img/i2_p33_act3.png' class='img-responsive imgKg2' id='imgKg2' style='cursor: pointer;'>",
          "<img src='img/i3_p33_act3.png' class='img-responsive imgKg3' id='imgKg3' style='cursor: pointer; top: -43px; position: relative;'>",
          "<img src='img/i4_p33_act3.png' class='img-responsive imgKg4' id='imgKg4' style='cursor: pointer;; top: -43px; position: relative;'>",
        ];        
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




      function Preg5(){
        var act5 = [];
        for( var i=1; i<7; i++ ){
          act5.push('<div style="width: 15%; min-width: 70px; display: inline-block; margin: 5px 5px 5px 5px; padding: 10px 10px 10px 10px; cursor: pointer;" id="rE'+i+'"> <img src="img/i'+i+'_p34_act5.png" class="img-responsive"> </div> ');
        }
        act5.sort(f_randomico);
        $('#act5').append(act5);
      }




      function Preg6(){
        var act6 = [];
        for( var i=1; i<6; i++ ){
          act6.push('<div style="width: 15%; min-width: 70px; display: inline-block; margin: 5px 5px 5px 5px; padding: 10px 10px 10px 10px; cursor: pointer;"> <img src="img/i'+i+'_p34_act6.jpg" class="img-responsive"> <div class="glyphicon" id="rF'+i+'" style="top: -10px; position: relative; width: 20px; height: 20px; border: 2px solid orange; background-color: white;"> </div> </div>');
        }
        act6.sort(f_randomico);
        $('#act6').append(act6);
      }



      function Preg7(){
        var act7 = [
            '<div style="padding: 5px 15px 5px 15px; margin: 5px 0px 5px 5px; background-color: #DFDDEA; display: inline-block;"> Un animal que tenga plumas: </div> <select id="rG1" class="form-control respuestasG" style="border-color: #DFDDEA;"> <option></option> <option value="1">gallina</option> <option value="2">serpiente</option> <option value="3">caballo</option> </select><br>',
            '<div style="padding: 5px 15px 5px 15px; margin: 5px 0px 5px 5px; background-color: #FBF1DC; display: inline-block;"> Un animal que se arrastra por el suelo: </div> <select id="rG2" class="form-control respuestasG" style="border-color: #FBF1DC;"> <option></option> <option value="1">gallina</option> <option value="2">serpiente</option> <option value="3">caballo</option> </select><br>',
            '<div style="padding: 5px 15px 5px 15px; margin: 5px 0px 5px 5px; background-color: #E7DDEA; display: inline-block;"> Un animal con cuatro patas: </div> <select id="rG3" class="form-control respuestasG" style="border-color: #E7DDEA;"> <option></option> <option value="1">gallina</option> <option value="2">serpiente</option> <option value="3">caballo</option> </select><br>',
        ];
        
        act7.sort(f_randomico);
        $('#act7').append(act7);
      }



      function Preg9(){
        var act9 = [
            '<tr> <td>De la zanahoria me como la raíz.</td> <td align="center"> <select id="rI1" class="form-control respuestasI"> <option></option> <option value="1">V</option> <option value="2">F</option> </select> </td> </tr>',
            '<tr> <td>Las rosas se utilizan en la alimentación de los seres humanos.</td> <td align="center"> <select id="rI2" class="form-control respuestasI"> <option></option> <option value="1">V</option> <option value="2">F</option> </select> </td> </tr>',
            '<tr> <td>Con la manzanilla se pueden preparar aguas aromáticas.</td> <td align="center"> <select id="rI3" class="form-control respuestasI"> <option></option> <option value="1">V</option> <option value="2">F</option> </select> </td> </tr>',
        ];
        
        act9.sort(f_randomico);
        $('#act9').append(act9);
      }



      function Preg10(){
        var act10 = [
            '<div style="width: 30%; min-width: 100px; display: inline-block; margin: 5px 5px 5px 5px;"> <img src="img/i1_p34_act10.jpg" class="img-responsive"> <input type="text" id="rJ1" class="form-control respuestasJ"> </div>',
            '<div style="width: 30%; min-width: 100px; display: inline-block; margin: 5px 5px 5px 5px;"> <img src="img/i2_p34_act10.jpg" class="img-responsive"> <input type="text" id="rJ2" class="form-control respuestasJ"> </div>',
            '<div style="width: 30%; min-width: 100px; display: inline-block; margin: 5px 5px 5px 5px;"> <img src="img/i3_p34_act10.jpg" class="img-responsive"> <input type="text" id="rJ3" class="form-control respuestasJ"> </div>',
        ];
        
        act10.sort(f_randomico);
        $('#act10').append(act10);
      }


      ////////////////////////////////////////////////////////////

      var notaP2;
      var notaAP2=0;
      function Resp2(){
        var resp = ['crece', 'muere'];
        for(var i=1; i<3; i++){
          if( $('#rD'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
            notaAP2++;
            $('#rB'+i).addClass('bien2');
          }else{
            $('#rB'+i).addClass('mal2');
          }
        }
        notaP2 = (notaAP2)/2;
      }



      var notaP3;
      var notaAP3 = 0;
      function Resp3(){
        var cant = [rImgKg1,rImgKg2,rImgKg3,rImgKg4];
        for(var i=1; i<5; i++){//cantidad de destinos
            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                  $('.i_imgKg'+i).css("background-color", "#1AE79C");
                  notaAP3++;
              }else{
                  $('.i_imgKg'+i).css("background-color", "#E71A4E");
              }
            });
        }
        notaP3 = notaAP3/4;
      }



      var notaP4;
      var notaAP4=0;
      function Resp4(){
        var resp = ['ver', 'oler', 'saborear', 'escuchar'];
        for(var i=1; i<5; i++){
          if( $('#rD'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
            notaAP4++;
            $('#rD'+i).addClass('bien2');
          }else{
            $('#rD'+i).addClass('mal2');
          }
        }
        notaP4 = (notaAP4)/4;
      }



      var notaP5;
      var notaAP5 = 0;
      function Resp5(){
          for(var i=1; i<7; i++){
                if( i<4 ){
                    if($('#rE'+(i) +'.pinta').text()){
                      notaAP5++;
                      $('#rE'+i).addClass('bien');
                    }
                }else{
                    if($('#rE'+(i) +'.pinta').text()){
                      $('#rE'+i).addClass('mal');
                      notaAP5--;
                    }
                }
            }   

        if( notaAP5 < 0 ){
          notaP5=0;
        }else{
          notaP5 = (notaAP5)/3;
        }
      }





      var notaP6;
      var notaAP6=0;
      function Resp6(){
        for(var i=1; i<6; i++){
            if( i < 3){
                if($('#rF'+(i) +'.glyphicon-remove').text()){
                  notaAP6++;
                  $('#rF'+i).addClass('bien1');
                }
            }else{
                if($('#rF'+(i) +'.glyphicon-remove').text()){
                  $('#rF'+i).addClass('mal1');
                  notaAP6--;
                }
            }
            }   

        if( notaAP6 < 0 ){
          notaP6=0;
        }else{
          notaP6 = (notaAP6)/2;
        }
      }




      var notaP7;
      var notaAP7=0;
      function Resp7(){
        for(var i=1; i<4; i++){
          if( $('#rG'+i).val() == i ){
            notaAP7++;
            $('#rG'+i).addClass('bien2');
          }else{
            $('#rG'+i).addClass('mal2');
          }
        }
        notaP7 = (notaAP7)/3;
      }


      var notaP8;
      var notaAP8=0;
      function Resp8(){
        for(var i=1; i<6; i++){
          if( $('#rH'+i).val() == i ){
            notaAP8++;
            $('#rH'+i).addClass('bien2');
          }else{
            $('#rH'+i).addClass('mal2');
          }
        }
        notaP8 = (notaAP8)/5;
      }



      var notaP9;
      var notaAP9=0;
      function Resp9(){
        var resp = [1,2,1];
        for(var i=1; i<4; i++){
          if( $('#rI'+i).val() == resp[i-1] ){
            notaAP9++;
            $('#rI'+i).addClass('bien2');
          }else{
            $('#rI'+i).addClass('mal2');
          }
        }
        notaP9 = (notaAP9)/3;
      }




      var notaP10;
      var notaAP10=0;
      function Resp10(){
        var resp = ['líquido', 'sólido', 'gaseoso'];
        for(var i=1; i<4; i++){
          if( $('#rJ'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
            notaAP10++;
            $('#rJ'+i).addClass('bien2');
          }else{
            $('#rJ'+i).addClass('mal2');
          }
        }
        notaP10 = (notaAP10)/3;
      }



      ////////////////////////////////////////////////////////////


      $(document).ready(function() {
        Inicio();
        Preg3();
        Preg5();
        Preg6();
        Preg7();
        Preg9();
        Preg10();

        for(var i=1; i<7; i++){
            $('#rE'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


        for(var i=1; i<6; i++){
            $('#rF'+(i)).click(function(){
              if($(this).hasClass('glyphicon-remove')) {
                  $(this).removeClass('glyphicon-remove')
              }else{
                  $(this).addClass('glyphicon-remove')
              }
            });
        }


        function confirmar(puntajeAbiertas){
          Resp2();
          Resp3();
          Resp4();
          Resp5();
          Resp6();
          Resp7();
          Resp8();
          Resp9();
          Resp10();

            cor = ((parseFloat(puntajeAbiertas) + parseFloat(notaP2) + 
             parseFloat(notaP3) + parseFloat(notaP4) +
             parseFloat(notaP5) + parseFloat(notaP6) + 
             parseFloat(notaP7) + parseFloat(notaP8) + 
             parseFloat(notaP9) + parseFloat(notaP10)));
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
