
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

        var selecciona1 = [
            '<div> <li> <div class="col-sm-5" style="display: inline-block;"> Partes del cuerpo </div> <div class="col-sm-3" align="center" style="display: inline-block;"> <img src="img/i1_p148_act1.jpg" class="img-responsive"> </div> <div style="display: inline-block;" class="col-sm-4" align="center"> <span id="rLI1" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
            '<div> <li> <div class="col-sm-5" style="display: inline-block;"> Edad </div> <div class="col-sm-3" align="center" style="display: inline-block;"> <img src="img/i1_p148_act1.jpg" class="img-responsive"> </div> <div class="col-sm-4" align="center"style="display: inline-block;"> <span id="rLI5" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
            '<div> <li> <div class="col-sm-5" style="display: inline-block;"> Manera de vestir </div> <div class="col-sm-3" align="center" style="display: inline-block;"> <img src="img/i1_p148_act1.jpg" class="img-responsive"> </div> <div style="display: inline-block;" class="col-sm-4" align="center"> <span id="rLI6" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
            '<div> <li> <div class="col-sm-5" style="display: inline-block;"> Hábitos </div> <div class="col-sm-3" align="center" style="display: inline-block;"> <img src="img/i1_p148_act1.jpg" class="img-responsive"> </div> <div style="display: inline-block;" class="col-sm-4" align="center"> <span id="rLI2" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
        ]; 
        selecciona1.sort(f_randomico);
        $("#selecciona1").append(selecciona1);


        var selecciona2 = [
            '<div> <li> <div class="col-sm-5" style="display: inline-block;"> Sentimientos </div> <div class="col-sm-3" align="center" style="display: inline-block;"> <img src="img/i1_p148_act1.jpg" class="img-responsive"> </div> <div style="display: inline-block;" class="col-sm-4" align="center"> <span id="rLI7" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
            '<div> <li> <div class="col-sm-5" style="display: inline-block;"> Origen </div> <div class="col-sm-3" align="center" style="display: inline-block;"> <img src="img/i1_p148_act1.jpg" class="img-responsive"> </div> <div class="col-sm-4" align="center"style="display: inline-block;"> <span id="rLI8" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
            '<div> <li> <div class="col-sm-5" style="display: inline-block;"> Ocupación </div> <div class="col-sm-3" align="center" style="display: inline-block;"> <img src="img/i1_p148_act1.jpg" class="img-responsive"> </div> <div style="display: inline-block;" class="col-sm-4" align="center"> <span id="rLI3" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
            '<div> <li> <div class="col-sm-5" style="display: inline-block;"> Gustos </div> <div class="col-sm-3" align="center" style="display: inline-block;"> <img src="img/i1_p148_act1.jpg" class="img-responsive"> </div> <div style="display: inline-block;" class="col-sm-4" align="center"> <span id="rLI4" style="border-radius: 100px; border: 3px solid; border-color: #E77E89; padding: 5px; cursor: pointer;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> </div><br><br> </li> </div>',
        ]; 
        selecciona2.sort(f_randomico);
        $("#selecciona2").append(selecciona2);

    }




    function Preg4(){  

        var identifica = [
            '<div class="col-sm-12" style="margin-bottom: 20px; position: relative;"> <div class="col-sm-6" align="justify" style="background-color: #FBC2CE; padding: 7px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"> Ya es malo que haya padres que traten a los niños normales como postillas y juanetes, pero es mucho peor cuando el niño en cuestión es extraordinario, y con esto me refiero a cuando es sensible y brillante. Matilda era ambas cosas, pero, sobre todo, brillante. Tenía una mente tan aguda y aprendía con tanta rapidez, que su talento hubiera resultado claro para padres medianamente inteligentes […] Al cumplir los tres años, Matilda ya había aprendido a leer sola, valiéndose de los periódicos y revistas que había en su casa. A los cuatro, leía de corrido y empezó, de forma natural, a desear tener libros. <br><br><div align="right" style="font-size: 15px;">Roald, Dahl. (2011). Matilda. [Fragmento] Quito: Santillana, p. 12.</div><br> <div align="center"> <select class="form-control respuestas" id="rITD1"> <option></option> <option value="1">Etopeya</option> <option>Prosopografía</option> <option>Topografía</option> </select> </div> </div> <div align="center" class="col-sm-6" style="background-color: #FBC2CE; padding: 16px; border-top-right-radius: 15px; border-bottom-right-radius: 15px;"> <img src="img/i1_p148_act4.jpg" class="img-responsive"> </div> </div>',
            '<div class="col-sm-12" style="margin-bottom: 20px; position: relative;"> <div class="col-sm-6" align="center" style="background-color: #C2ECFB; padding: 7px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"> Es la tierra de Soria árida y fría.<br> Por las colinas y las sierras calvas,<br> verdes pradillos, cerros cenicientos,<br> la primavera pasa<br> dejando entre las hierbas olorosas<br> sus diminutas margaritas blancas.<br> La tierra no revive, el campo sueña.<br> Al empezar abril está nevada<br> la espalda del Moncayo;<br> el caminante lleva en su bufanda<br> envueltos cuello y boca, y los pastores<br> pasan cubiertos con sus luengas capas.<br><br> <span style="text-align: right; font-size: 15px;"> Machado, Antonio (s/f ). “Campos de Soria” [Fragmento]. Poemas del<br> alma. Recuperado de https://goo.gl/X7UXA6<br><br> </span> <div align="center"> <select class="form-control respuestas" id="rITD2"> <option></option> <option>Etopeya</option> <option value="1">Topografía</option> <option>Prosopografía</option> </select> </div> </div> <div align="center" class="col-sm-6" style="background-color: #C2ECFB; padding: 44px; border-top-right-radius: 15px; border-bottom-right-radius: 15px;"><br> <img src="img/i2_p148_act4.jpg" class="img-responsive"><br> </div> </div>',
            '<div class="col-sm-12" style="margin-bottom: 20px; position: relative;"> <div class="col-sm-6" align="justify" style="background-color: #FBECC2; padding: 2px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"><br> El aspecto externo de Momo ciertamente era un tanto desusado y acaso podía asustar algo a la gente que da mucha importancia al aseo y al orden. Era pequeña y bastante flaca, de modo que ni con la mejor voluntad se podía decir si tenía ocho años solo o ya tenía doce. Tenía el pelo muy ensortijado, negro como la pez, y con todo el aspecto de no haberse enfrentado jamás a un peine o unas tijeras. Tenía unos ojos muy grandes, muy hermosos y también negros como la pez y unos pies del mismo color, pues casi siempre iba descalza. Solo en invierno llevaba zapatos de vez en cuando, pero solían ser diferentes, descabalados, y además le quedaban demasiado grandes. <div align="right"  style="font-size: 15px;"> Ende, Michael (s/f ). Momo [Fragmento]. <br>Latejapride. Recuperado de https://goo.gl/GBNTSy<br><br> </div> <div align="center"> <select class="form-control respuestas" id="rITD3"> <option></option> <option>Topografía</option> <option>Etopeya</option> <option value="1">Prosopografía</option> </select><br> </div> </div> <div align="center" class="col-sm-6" style="background-color: #FBECC2; padding: 20px; border-top-right-radius: 15px; border-bottom-right-radius: 15px;"> <img src="img/i3_p148_act4.jpg" class="img-responsive"> </div> </div>',
        ]; 
        identifica.sort(f_randomico);
        $("#identifica").append(identifica);

    }



    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<9; i++){
            if( i<5 ){
                if($('#rLI'+(i) +'.pinta').text()){
                  notaFinalP1++;
                  $('#rLI'+i).addClass('bien');
                }/*else{
                  $('#rLI'+i).addClass('pinta');
                }*/
            }else{
                if($('#rLI'+(i) +'.pinta').text()){
                  notaFinalP1--;
                  $('#rLI'+i).addClass('mal');
                }
            }
        }

    }
    



    var notaFinalP4 = 0;
    function Resp4(){

      for( var i=1; i<4; i++){

        if( $('#rITD'+i).val() == '1' ){
          notaFinalP4++;
          $('#rITD'+i).css("background-color", "#05D576");
        }else{
          $('#rITD'+i).css("background-color", "#D50545");
        }

      }

    }



    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg4();

      for(var i=1; i<9; i++){////Preg1

            $('#rLI'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

      function confirmar() {
      	Resp1();
        Resp4();

        var nota1;
        if( notaFinalP1<0 ){nota1=0}else{nota1 = (notaFinalP1*3)/4}

        var nota2 = parseFloat($('#calificacion2').val());
        var nota3 = parseFloat($('#calificacion3').val());;
        var nota4 = (notaFinalP4);

        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
       if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
        }
        
      });

  });