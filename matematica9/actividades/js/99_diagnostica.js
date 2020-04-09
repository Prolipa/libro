
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



    function Preg1(){

        var calcula1 = [
        '<tr><td><li>6 × (4 + 2) = </li></td> <td><input type="text" class="form-control respuestas"></td> <td><input type="text" class="form-control respuestas"></td> </tr>',
        '<tr><td><li>2 x (3 - 4 + 2) = </li></td> <td><input type="text" class="form-control respuestas"></td> <td><input type="text" class="form-control respuestas"></td> </tr>',
        '<tr><td><li>3 x 2 - 3 x 4 + 3 x 5 = </li></td> <td><input type="text" class="form-control respuestas"></td> <td><input type="text" class="form-control respuestas"></td> </tr>',
        '<tr><td><li>10 x 2 + 10 x 4 = </li></td> <td><input type="text" class="form-control respuestas"></td> <td><input type="text" class="form-control respuestas"></td> </tr>',
        ];

        calcula1.sort(f_randomico);
        $('#calcula1').append(calcula1);
    }


    function Preg2(){

        var suprime = [
        '<div class="col-sm-6" style="display: inline-block"><li>&nbsp;&nbsp;&nbsp;&nbsp; 10 - (2 + 6) &nbsp;&nbsp;=&nbsp;&nbsp; <input type="number" id="rSPC1" class="form-control respuestas" style="width: 80px; display: inline-block;"></li><br></div>',
        '<div class="col-sm-6" style="display: inline-block"><li>&nbsp;&nbsp;&nbsp;&nbsp; 6 - (3 - 6) + (6 - 8) &nbsp;&nbsp;=&nbsp;&nbsp; <input type="number" id="rSPC2" class="form-control respuestas" style="width: 80px; display: inline-block;"></li><br></div>',
        '<div class="col-sm-6" style="display: inline-block"><li>&nbsp;&nbsp;&nbsp;&nbsp; 12 - (7 - 4 + 5) &nbsp;&nbsp;=&nbsp;&nbsp; <input type="number" id="rSPC3" class="form-control respuestas" style="width: 80px; display: inline-block;"></li><br></div>',
        '<div class="col-sm-6" style="display: inline-block"><li>&nbsp;&nbsp;&nbsp;&nbsp; -2 + (-4 + 3) - (6 - 3) &nbsp;&nbsp;=&nbsp;&nbsp; <input type="number" id="rSPC4" class="form-control respuestas" style="width: 80px; display: inline-block;"></li><br></div>',
        ];

        suprime.sort(f_randomico);
        $('#suprime').append(suprime);
    }




    function Preg4(){

        var escribe1 = [
        '<li>Un múltiplo cualquiera de 10.&nbsp;&nbsp;<input type="text" id="rELA1" class="form-control respuestas" style="width: 150px; display: inline-block;"></li><br>',
        '<li>El triple de un número menos cinco.&nbsp;&nbsp;<input type="text" id="rELA1" class="form-control respuestas" style="width: 150px; display: inline-block;"></li><br>',
        '<li>Un número par.&nbsp;&nbsp;<input type="text" id="rELA1" class="form-control respuestas" style="width: 150px; display: inline-block;"></li><br>',
        '<li>Un número impar.&nbsp;&nbsp;<input type="text" id="rELA1" class="form-control respuestas" style="width: 150px; display: inline-block;"></li><br>',
        '<li>Cualquier número que, al dividirlo por cinco, deje residuo de seis.&nbsp;&nbsp;<input type="text" id="rELA1" class="form-control respuestas" style="width: 150px; display: inline-block;"></li><br>',
        '<li>Perímetro de un hexágono regular de lado x.&nbsp;&nbsp;<input type="text" id="rELA1" class="form-control respuestas" style="width: 150px; display: inline-block;"></li><br>',
        ];

        escribe1.sort(f_randomico);
        $('#escribe1').append(escribe1);
    }



    function Preg5(){

        var reduce = [
        '<div class="col-sm-6"><li>&nbsp;&nbsp; 5x + 3x + x &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE1" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        '<div class="col-sm-6"><li>&nbsp;&nbsp; 6x<sup>2</sup> + 4x<sup>2</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE2" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        '<div class="col-sm-6"><li>&nbsp;&nbsp; 7x - 9 + 6x + 4 &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE3" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        '<div class="col-sm-6"><li>&nbsp;&nbsp; x<sup>2</sup> + x + x + x<sup>2</sup> + x &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE4" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        '<div class="col-sm-6"><li>&nbsp;&nbsp; 5x<sup>2</sup> - 3x<sup>2</sup> + 8 - 10 &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE5" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        '<div class="col-sm-6"><li>&nbsp;&nbsp; 5x + x<sup>2</sup> - 2x - x<sup>2</sup> + 5 &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE6" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        '<div class="col-sm-6"><li>&nbsp;&nbsp; (x - 1) - (x - 4) &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE7" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        '<div class="col-sm-6"><li>&nbsp;&nbsp; (5x - 6) + (5x + 6) &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE8" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        '<div class="col-sm-6"><li>&nbsp;&nbsp; (3 - 6x) - (4 - 8x) &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rRSE9" class="form-control respuestas" style="width: 230px; display: inline-block"></li><br></div>',
        
        ];

        reduce.sort(f_randomico);
        $('#reduce').append(reduce);
    }




    function Preg6(){

        var calcula2 = [
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2<sup>0</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC1" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2<sup>1</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC2" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2<sup>2</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC3" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2<sup>3</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC4" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2<sup>4</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC5" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2<sup>5</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC6" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2<sup>6</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC7" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 3<sup>2</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC8" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 5<sup>3</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC9" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 1<sup>1</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC10" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 3<sup>5</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC11" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; (-1)<sup>6</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC12" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; (-1)<sup>9</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC13" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; -(5)<sup>2</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC14" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; (-10)<sup>3</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC15" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; (-10)<sup>4</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC16" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; (-6)<sup>-4</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC17" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; (-5)<sup>2</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC18" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2<sup>-2</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC19" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 1/(2<sup>-2</sup>) &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC20" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; (2<sup>-2</sup>)/(2<sup>-2</sup>) &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC21" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        '<div class="col-sm-4"><li>&nbsp;&nbsp; 2 . 2<sup>3</sup> &nbsp;&nbsp; = &nbsp;&nbsp; <input type="text" id="rC22" class="form-control respuestas" style="width: 150px; display: inline-block"></li><br></div>',
        ];

        calcula2.sort(f_randomico);
        $('#calcula2').append(calcula2);
    }






    var rImgKg1 = 0;
    var rImgKg2 = 0;
    var rImgKg3 = 0;
    function Preg8(){

        var destinosKg = [
        '<div><span class="num1"> menor de 90º </span><br> <div class="r_imgKg i_imgKg1"></div> <br></div>',
        '<div><span class="num1"> mayor de 90º </span><br> <div class="r_imgKg i_imgKg2"></div> <br></div>',
        '<div><span class="num1"> igual a 90º </span><br> <div class="r_imgKg i_imgKg3"></div> <br></div>',
        ]; 
        destinosKg.sort(f_randomico);
        $("#destinosKg").append(destinosKg);


        var imgKg=[];
            imgKg.push("<img src='img/i2_p146_act8.png' class='imgKg1' id='imgKg1' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i3_p146_act8.png' class='imgKg2' id='imgKg2' style='cursor: pointer;'><br><br>");
            imgKg.push("<img src='img/i1_p146_act8.png' class='imgKg3' id='imgKg3' style='cursor: pointer;'><br><br>");
       
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



////////////////////////////////////////////////////////////
    var notaFinalP2 = 0;
    function Resp2() {
        
        var resp = [2, 7, 4, -6];

        for( var i=1; i<5; i++){
            if( parseFloat($('#rSPC'+i).val()) == resp[i-1] ){
              $('#rSPC'+i).css("background-color", "#05D576");
              notaFinalP2++;
            }else{
              $('#rSPC'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP5 = 0;
    function Resp5() {
        
        var resp = ['9x', '10x^2', '13x-5', '2x^2+3x', '2x^2-2', '3x+5', 'x-1-x+4=+3', '5x-6+5x+6=10x', '3-6x-4+8x=-1+2x'];

        for( var i=1; i<10; i++){
            if( $('#rRSE'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rRSE'+i).css("background-color", "#05D576");
              notaFinalP5++;
            }else{
              $('#rRSE'+i).css("background-color", "#D50545");
            }
        }
    }




    var notaFinalP6 = 0;
    function Resp6() {
        
        var resp = ['1', '2', '4', '8', '16', '32', '64', '9', '125', '1', '243', '1', '-1', '-25', '-1000', '10000', '-1/296', '25', '1/4', '4', '1', '16'];

        for( var i=1; i<23; i++){
            if( $('#rC'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rC'+i).css("background-color", "#05D576");
              notaFinalP6++;
            }else{
              $('#rC'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP8 = 0;
    function Resp8(){

        var cant = [rImgKg1,rImgKg2,rImgKg3];
        for(var i=1; i<4; i++){//cantidad de destinos

            $(".i_imgKg"+i+" img").each(function(){
              if( $(this).hasClass("imgKg"+i) &&  cant[i-1] == 1 ){ /// 1 = cantidad de imgs que debe contener cada destino
                    $('.i_imgKg'+i).css("background-color", "#5ED188");
                    notaFinalP8++;
                }else{
                    $('.i_imgKg'+i).css("background-color", "#EF87A7");
                }
            });

        }
    }




    var notaFinalP9 = 0;
    function Resp9() {
        

        for( var i=1; i<3; i++){
            if( $('#rITT'+i).val() == '1' ){
              $('#rITT'+i).css("background-color", "#05D576");
              notaFinalP9++;
            }else{
              $('#rITT'+i).css("background-color", "#D50545");
            }
        }
    }


    function Cargar() {   
      location.reload(true);
    }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg2();
            Preg4();
            Preg5();
            Preg6();
            Preg8();


            var nota1;
            var nota3;
            var nota4;
            var nota7;
            var nota10;
           function confirmar1() {
            nota1 = parseFloat($('#calificacion1').val());
            nota3 = parseFloat($('#calificacion3').val());
            nota4 = parseFloat($('#calificacion4').val());
            nota7 = parseFloat($('#calificacion7').val());
            nota10 = parseFloat($('#calificacion10').val());
          }

          function confirmar() {
            Resp2();
            Resp5();
            Resp6();
            Resp8();
            Resp9();

            var nota2 = (notaFinalP2)/4;
            var nota5 = (notaFinalP5)/9;
            var nota6 = (notaFinalP6)/22;
            var nota8 = (notaFinalP8)/3;
            var nota9 = (notaFinalP9)/2;

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

        if( $('#calificacion1').val() !='' && $('#calificacion3').val() !=''  && $('#calificacion4').val() !='' && $('#calificacion7').val() !='' && $('#calificacion10').val() !='' ){
          confirmar1();
          if( nota1<=1 && nota1>=0 && nota3<=1 && nota3>=0 && nota4<=1 && nota4>=0 && nota7<=1 && nota7>=0 && nota10<=1 && nota10>=0 ){
            confirmar();
            $('#calificacion1').css("background-color", "#05D576");
            $('#calificacion3').css("background-color", "#05D576");
            $('#calificacion4').css("background-color", "#05D576");
            $('#calificacion7').css("background-color", "#05D576");
            $('#calificacion10').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
            $('#calificacion3').focus();
            $('#calificacion3').css("background-color", "#D50545");
            $('#calificacion4').focus();
            $('#calificacion4').css("background-color", "#D50545");
            $('#calificacion7').focus();
            $('#calificacion7').css("background-color", "#D50545");
            $('#calificacion10').focus();
            $('#calificacion10').css("background-color", "#D50545");
        }
      });     

});





