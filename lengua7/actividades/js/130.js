
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

        var relaciona = [
            '<div class="col-sm-6" align="center"> <img src="img/i1_p136_act1.jpg" class="img-responsive"><br> <select id="rRCT1" class="form-control respuestas"> <option></option> <option>Texto 1</option> <option value="1">Texto 2</option> </select><br> </div>',
            '<div class="col-sm-6" align="center"> <img src="img/i2_p136_act1.jpg" class="img-responsive"><br> <select id="rRCT2" class="form-control respuestas"> <option></option> <option value="1">Texto 1</option> <option>Texto 2</option> </select><br> </div>',
        ];

        relaciona.sort(f_randomico);
        $("#relaciona1").append(relaciona);

    } 



    function Preg2(){ 

        var selecciona = [
            '<tr> <td align="justify">higuera (sust. fem.). Árbol de mediana altura, tronco grisáceo y hojas grandes, ásperas y lobuladas, cuyos frutos son la breva y el higo. </td> <td><input type="text" class="form-control respuestas" style="width: 180px;"></td> <td><input type="text" class="form-control respuestas" style="width: 180px;"></td> </tr>',
            '<tr> <td align="justify">Como la higuera joven / de los barrancos eras. / Y cuando yo pasaba / sonabas en la sierra.</td> <td><input type="text" class="form-control respuestas" style="width: 180px;"></td> <td><input type="text" class="form-control respuestas" style="width: 180px;"></td> </tr>',
            '<tr> <td align="justify">Las higueras crecen en terrenos donde pocas plantas encuentran oportunidad.</td> <td><input type="text" class="form-control respuestas" style="width: 180px;"></td> <td><input type="text" class="form-control respuestas" style="width: 180px;"></td> </tr>',
        ]; 
        selecciona.sort(f_randomico);
        $("#selecciona1").append(selecciona);

    }




    function Preg3(){ 

        var selecciona = [
           '<tr> <td align="justify">El día está frío. La temperatura es de 10 °C</td> <td id="sSTP3"><input type="checkbox" class="checkmark" id="STP3"></td> </tr>',
           '<tr> <td align="justify">Tus palabras eran de hielo. Igual de frío estaba el cielo.</td> <td id="sSTP1"><input type="checkbox" class="checkmark" id="STP1"></td> </tr>',
           '<tr> <td align="justify">Hoy no me alegran. los cerezos del huerto. Son tu recuerdo.</td> <td id="sSTP2"><input type="checkbox" class="checkmark" id="STP2"></td> </tr>',
           '<tr> <td align="justify">Los cerezos necesitan abono. Están más feos que la higuera.</td> <td id="sSTP4"><input type="checkbox" class="checkmark" id="STP4"></td> </tr>',
        ]; 
        selecciona.sort(f_randomico);
        $("#selecciona2").append(selecciona);

    }



    //////////////////////////////////////////


    var notaFinalP1 = 0;
    function Resp1(){

        for(var j=1; j<3; j++){
             if( $('#rRCT'+j).val() == '1' ) {
                  notaFinalP1++;
                  $('#rRCT'+j).css("background-color", "#5ED188");
              }else{
                  $('#rRCT'+j).css("background-color", "#D86C8A");
              }
        }

    }





    var notaFinalP3 = 0;
    function Resp3(){

        for(var j=1; j<5; j++){

            if( j < 3 ){
                if( (document.getElementById('STP'+j).checked) ) {
                    notaFinalP3++;
                    $('#sSTP'+j).css("background-color", "#5ED188");
                }else{
                    $('#sSTP'+j).css("background-color", "#BDB653");
                }
            }else{
                if( (document.getElementById('STP'+j).checked) ) {
                    notaFinalP3--;
                    $('#sSTP'+j).css("background-color", "#D86C8A");
                }
            }

        }
    }


    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();
      Preg3();


      function confirmar() {
      	Resp1();
        Resp3();

        var nota1 = (notaFinalP1*3)/2;
        var nota2 = parseFloat($('#calificacion2').val());
        var nota3;
        if( notaFinalP3<0 ){nota3=0}else{nota3 = (notaFinalP3*4)/2}

        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

      if( $('#calificacion2').val() !='' ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }
        
      });

  });