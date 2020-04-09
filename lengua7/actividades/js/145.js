
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

        var adverbios = [
          '<div class="col-sm-4" align="center"> <img src="img/i1_p151_act1.jpg" class="img-responsive"><br> <textarea class="form-control respuestas" id="rAA1" rows="2"></textarea> </div>',
          '<div class="col-sm-4" align="center"> <img src="img/i2_p151_act1.jpg" class="img-responsive"><br> <textarea class="form-control respuestas" id="rAA2" rows="2"></textarea> </div>',
          '<div class="col-sm-4" align="center"> <img src="img/i3_p151_act1.jpg" class="img-responsive"><br> <textarea class="form-control respuestas" id="rAA3" rows="2"></textarea> </div>',
        ];

        adverbios.sort(f_randomico);
        $("#adverbios").append(adverbios);

    }



    function Preg2(){ 

        var adverbios1 = [
          '<li>La cabaña está <b style="color: #28B1F1;">cerca</b>.</li>',
          '<li>Me miraba <b style="color: #28B1F1;">dulcemente</b>.</li>',
          '<li>El niño tosía <b style="color: #28B1F1;">frecuentemente</b></li>',
          '<li>La mujer comía <b style="color: #28B1F1;">poco</b>.</li>',
          '<li><b style="color: #28B1F1;">Nunca</b> metía un gol.</li>',
          '<li>Su oficina estaba <b style="color: #28B1F1;">lejos</b>.</li>',
        ];

        adverbios1.sort(f_randomico);
        $("#adverbios1").append(adverbios1);




        var clasifica = [
          '<tr> <td style="background-color: #7118B6; color: white;">De lugar</td> <td style="background-color: #B69C18; color: white;">De tiempo</td> </tr> <tr> <td> <input type="text" id="rCSA1" class="form-control respuestas"> <input type="text" id="rCSA4" class="form-control respuestas"> </td> <td> <input type="text" id="rCSA3" class="form-control respuestas"> <input type="text" id="rCSA5" class="form-control respuestas"> </td> </tr>',
          '<tr> <td style="background-color: #18B675; color: white;">De modo</td> <td style="background-color: #B61865; color: white;">De cantidad</td> </tr> <tr> <td> <input type="text" id="rCSA2" class="form-control respuestas"> </td> <td> <input type="text" id="rCSA6" class="form-control respuestas"> </td> </tr>',
        ];

        clasifica.sort(f_randomico);
        $("#clasifica").append(clasifica);

    }






    function Preg3(){ 

        var crea = [
          '<tr> <td>maravilloso</td> <td><input type="text" id="rCAT1" class="form-control respuestas"></td> <td>juguetón</td> <td><input type="text" id="rCAT2" class="form-control respuestas"></td> </tr>',
          '<tr> <td>limpio</td> <td><input type="text" id="rCAT3" class="form-control respuestas"></td> <td>vivaz</td> <td><input type="text" id="rCAT4" class="form-control respuestas"></td> </tr>',
          '<tr> <td>rápido</td> <td><input type="text" id="rCAT5" class="form-control respuestas"></td> <td>frío</td> <td><input type="text" id="rCAT6" class="form-control respuestas"></td> </tr>',
          '<tr> <td>gracioso</td> <td><input type="text" id="rCAT7" class="form-control respuestas"></td> <td>veloz</td> <td><input type="text" id="rCAT8" class="form-control respuestas"></td> </tr>',
          '<tr> <td>hábil</td> <td><input type="text" id="rCAT9" class="form-control respuestas"></td> <td>enorme</td> <td><input type="text" id="rCAT10" class="form-control respuestas"></td> </tr>',
          '<tr> <td>torpe</td> <td><input type="text" id="rCAT11" class="form-control respuestas"></td> <td>feliz</td> <td><input type="text" id="rCAT12" class="form-control respuestas"></td> </tr>',
        ];

        crea.sort(f_randomico);
        $("#crea").append(crea);

    }






      function Preg5(){ 

        var reescribe = [
          '<li> En esta playa se pasa bien. &nbsp;&nbsp; <input type="text" id="rRSO1" class="form-control respuestas" style="width: 40%; display: inline-block;"><br><br> </li>',
          '<li> Ernesto llegó tarde. &nbsp;&nbsp; <input type="text" id="rRSO2" class="form-control respuestas" style="width: 40%; display: inline-block;"><br><br> </li>',
          '<li> El invierno empezó antes. &nbsp;&nbsp; <input type="text" id="rRSO3" class="form-control respuestas" style="width: 40%; display: inline-block;"><br><br> </li>',
          '<li> Juan parece más feliz. &nbsp;&nbsp; <input type="text" id="rRSO4" class="form-control respuestas" style="width: 40%; display: inline-block;"><br><br> </li>',
          '<li> Ese cachorro juega mucho. &nbsp;&nbsp; <input type="text" id="rRSO5" class="form-control respuestas" style="width: 40%; display: inline-block;"><br><br> </li>',
        ];

        reescribe.sort(f_randomico);
        $("#reescribe").append(reescribe);

    }




////////////////////////////////////////////


    var notaFinalP2 = 0;
    function Resp2(){

        var resp = ['cerca','lejos','frecuentemente','nunca','dulcemente','poco'];
        var res = [];
        var val = '';

        for( var i=0; i<6; i++ ){
          val = $('#rCSA'+(i+1)).val().toLowerCase().replace(/ /gi, "");

          if( val == '' && i==0 ){ val = 'c'; }
          if( val == '' && i==1 ){ val = 'd'; }
          if( val == '' && i==2 ){ val = 'f'; }
          if( val == '' && i==3 ){ val = 'l'; }
          if( val == '' && i==4 ){ val = 'n'; }
          if( val == '' && i==5 ){ val = 'p'; }

          res[i] = val;
        }

        resp.sort();
        res.sort();
        for( var i=0; i<6; i++ ){
            if( resp[i] == res[i] ){
                notaFinalP2++;
                $('#rCSA'+(i+1)).css("background-color", "#05D576");
            }else{
                $('#rCSA'+(i+1)).css("background-color", "#D50545");
            }

        }

    }




    var notaFinalP3 = 0;
    function Resp3(){

        var resp = ['maravillosamente','juguetonamente','limpiamente','vivazmente','rápidamente','fríamente','graciosamente','velozmente','hábilmente','enormemente','torpemente','felizmente'];

        for( var i=1; i<13; i++ ){
            if( $('#rCAT'+i).val().toLowerCase().replace(/ |-| /gi, "") == resp[i-1] ){
                notaFinalP3++;
                $('#rCAT'+i).css("background-color", "#05D576");
            }else{
                $('#rCAT'+i).css("background-color", "#D50545");
            }

        }

    }





    var notaFinalP5 = 0;
    function Resp5(){

        var resp = ['enestaplayasepasamal','ernestollegótemprano','elinviernoempezódespués','juanparecemenosfeliz','esecachorrojuegapoco'];

        for( var i=1; i<6; i++ ){
            if( $('#rRSO'+i).val().toLowerCase().replace(/ |-|\.| /gi, "") == resp[i-1] ){
                notaFinalP5++;
                $('#rRSO'+i).css("background-color", "#05D576");
            }else{
                $('#rRSO'+i).css("background-color", "#D50545");
            }

        }

    }




    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();
      Preg3();
      Preg5();


      function confirmar() {
        Resp2();
        Resp3();
        Resp5();

        var nota1 = parseFloat($('#calificacion1').val());
        var nota2 = (notaFinalP2*2)/6;
        var nota3 = (notaFinalP3*2)/12;
        var nota4 = parseFloat($('#calificacion4').val());
        var nota5 = (notaFinalP5*2)/5;

        var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

      if( $('#calificacion1').val() !='' && $('#calificacion4').val() !='' ){
            confirmar();
            $('#calificacion1').css("background-color", "#05D576");
            $('#calificacion4').css("background-color", "#05D576");
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').css("background-color", "#D50545");
            $('#calificacion4').focus();
            $('#calificacion4').css("background-color", "#D50545");
        }
        
      });

  });
