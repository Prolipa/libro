var titulos="aplico"
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
      var ra0 = (Math.round(Math.random() * (1000) + 10));
      var ra1 = (Math.round(Math.random() * (1000) + 10));
      var ra2 = (Math.round(Math.random() * (1000) + 10));
      var ra3 = (Math.round(Math.random() * (1000) + 10));
      var ra4 = (Math.round(Math.random() * (1000) + 10));
      var ra5 = (Math.round(Math.random() * (1000) + 10));
      var ra6 = (Math.round(Math.random() * (1000) + 10));
      var ra7 = (Math.round(Math.random() * (1000) + 10));
      var ra8 = (Math.round(Math.random() * (1000) + 10));
      var ra9 = (Math.round(Math.random() * (1000) + 10));
      var ra10 = (Math.round(Math.random() * (1000) + 10));
      var ra11 = (Math.round(Math.random() * (1000) + 10));

      var calcular = [];

      calcular[0] = ' a) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra0 +'   =   </span><span id="rcal0" style="display: none;">'+  (Math.pow(ra0, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal0" class="form-control respuestas" style="width: 100px;">';

      calcular[1] = ' b) <span class="num">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra1 +'   =   </span><span id="rcal1" style="display: none;">'+  (Math.pow(ra1, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal1" class="form-control respuestas" style="width: 100px;">';

      calcular[2] = ' c) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra2 +'   =   </span><span id="rcal2" style="display: none;">'+  (Math.pow(ra2, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal2" class="form-control respuestas" style="width: 100px;">';

      calcular[3] = ' d) <span class="num">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra3 +'   =   </span><span id="rcal3" style="display: none;">'+  (Math.pow(ra3, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal3" class="form-control respuestas" style="width: 100px;">';

      calcular[4] = ' e) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra4 +'   =   </span><span id="rcal4" style="display: none;">'+  (Math.pow(ra4, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal4" class="form-control respuestas" style="width: 100px;">';

      calcular[5] = ' f) <span class="num">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra5 +'   =   </span><span id="rcal5" style="display: none;">'+  (Math.pow(ra5, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal5" class="form-control respuestas" style="width: 100px;">';

      calcular[6] = ' g) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra6 +'   =   </span><span id="rcal6" style="display: none;">'+  (Math.pow(ra6, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal6" class="form-control respuestas" style="width: 100px;">';

      calcular[7] = ' h) <span class="num">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra7 +'   =   </span><span id="rcal7" style="display: none;">'+  (Math.pow(ra7, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal7" class="form-control respuestas" style="width: 100px;">';

      calcular[8] = ' i) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra8 +'   =   </span><span id="rcal8" style="display: none;">'+  (Math.pow(ra8, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal8" class="form-control respuestas" style="width: 100px;">';

      calcular[9] = ' j) <span class="num">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra9 +'   =   </span><span id="rcal9" style="display: none;">'+  (Math.pow(ra9, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal9" class="form-control respuestas" style="width: 100px;">'; 

      calcular[10] = ' k) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra10 +'   =   </span><span id="rcal10" style="display: none;">'+  (Math.pow(ra10, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal10" class="form-control respuestas" style="width: 100px;">'; 

      calcular[11] = ' l) <span class="num">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra11 +'   =   </span><span id="rcal11" style="display: none;">'+  (Math.pow(ra11, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal11" class="form-control respuestas" style="width: 100px;">';    

      
      $("#calRaiz0").append(calcular[0]);
      $("#calRaiz1").append(calcular[1]);
      $("#calRaiz2").append(calcular[2]);
      $("#calRaiz3").append(calcular[3]);
      $("#calRaiz4").append(calcular[4]);
      $("#calRaiz5").append(calcular[5]);
      $("#calRaiz6").append(calcular[6]);
      $("#calRaiz7").append(calcular[7]);
      $("#calRaiz8").append(calcular[8]);
      $("#calRaiz9").append(calcular[9]);
      $("#calRaiz10").append(calcular[10]);
      $("#calRaiz11").append(calcular[11]);
    }
 

    function Preg2(){

      var tabla = [];
      var sp0 = (Math.floor(Math.random() * (4 - 2)) + 2); 
      var sp1 = (Math.floor(Math.random() * (4 - 2)) + 2); 
      var sp2 = (Math.floor(Math.random() * (4 - 2)) + 2); 
      var sp3 = (Math.floor(Math.random() * (4 - 2)) + 2); 

      var ra0 = (Math.round(Math.random() * (1000) + 1));
      var ra1 = (Math.round(Math.random() * (1000) + 1));
      var ra2 = (Math.round(Math.random() * (1000) + 1));
      var ra3 = (Math.round(Math.random() * (1000) + 1));


      tabla[0] = '<tr>' +
       '<td colspan="8" style="background-color: #76CBE2;" align="center"><span class="encabezados">Forma Escrita</span></td>' +
       '<td colspan="2" style="background-color: #76CBE2;" align="center"><span class="encabezados">Radicación</span></td>' +
       '<td colspan="2" style="background-color: #76CBE2;" align="center"><span class="encabezados">Raíz</span></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="8" align="center"><input type="text" class="form-control" style="width: 100%;" placeholder="Ej: Raíz Cuadrada de quinientos cincuenta y cinco"></td>' +       
       '<td colspan="2" align="center"><sup><input type="number" id="sup0" value="'+ sp0 +'" class="form-control" style="width: 60px;"><input type="number" id="rSup0" value="'+ sp0 +'" class="form-control" style="display: none; width: 60px;"></sup>&#8730; <input type="number" id="num0" class="form-control"><input type="number" id="rNum0" value="'+ ra0 +'" class="form-control" style="display: none;"></td>' +       
       '<td colspan="2" align="center"><input type="number" id="est0" value="'+ (Math.pow(ra0, 1/sp0).toFixed(2)) +'" class="form-control"><input type="number" id="rEst0" value="'+ (Math.pow(ra0, 1/sp0).toFixed(2)) +'" style="display: none;"></td>' +
      '</tr>' +
      '<tr>' +
       '<td colspan="8" align="center"><input type="text" class="form-control" style="width: 100%;" placeholder="Ej: Raíz Cuadrada de quinientos cincuenta y cinco"></td>' +       
       '<td colspan="2" align="center"><sup><input type="number" id="sup1" class="form-control" style="width: 60px;"><input type="number" id="rSup1" value="'+ sp1 +'" class="form-control" style="display: none; width: 60px;"></sup>&#8730; <input type="number" id="num1" value="'+ ra1 +'" class="form-control"><input type="number" id="rNum1" value="'+ ra1 +'" class="form-control" style="display: none;"></td>' +       
       '<td colspan="2" align="center"><input type="number" id="est1" value="'+ (Math.pow(ra1, 1/sp1).toFixed(2)) +'" class="form-control"><input type="number" id="rEst1" value="'+ (Math.pow(ra1, 1/sp1).toFixed(2)) +'" style="display: none;"></td>' +
      '</tr>' +
      '<tr>' +
       '<td colspan="8" align="center"><input type="text" class="form-control" style="width: 100%;" placeholder="Ej: Raíz Cuadrada de quinientos cincuenta y cinco"></td>' +       
       '<td colspan="2" align="center"><sup><input type="number" id="sup2" value="'+ sp2 +'" class="form-control" style="width: 60px;"><input type="number" id="rSup2" value="'+ sp2 +'" class="form-control" style="display: none; width: 60px;"></sup>&#8730; <input type="number" id="num2" class="form-control"><input type="number" id="rNum2" value="'+ ra2 +'" class="form-control" style="display: none;"></td>' +       
       '<td colspan="2" align="center"><input type="number" id="est2" value="'+ (Math.pow(ra2, 1/sp2).toFixed(2)) +'" class="form-control"><input type="number" id="rEst2" value="'+ (Math.pow(ra2, 1/sp2).toFixed(2)) +'" style="display: none;"></td>' +
      '</tr>' +
      '<tr>' +
       '<td colspan="8" align="center"><input type="text" class="form-control" style="width: 100%;" placeholder="Ej: Raíz Cuadrada de quinientos cincuenta y cinco"></td>' +       
       '<td colspan="2" align="center"><sup><input type="number" id="sup3" value="'+ sp3 +'" class="form-control" style="width: 60px;"><input type="number" id="rSup3" value="'+ sp3 +'" class="form-control" style="display: none; width: 60px;"></sup>&#8730; <input type="number" id="num3" value="'+ ra3 +'" class="form-control"><input type="number" id="rNum3" value="'+ ra3 +'" class="form-control" style="display: none;"></td>' +       
       '<td colspan="2" align="center"><input type="number" id="est3" class="form-control"><input type="number" id="rEst3" value="'+ (Math.pow(ra3, 1/sp3).toFixed(2)) +'" style="display: none;"></td>' +
      '</tr>'; 

      $("#tablaRaiz").append(tabla[0]);

    }


    function Preg3(){            
          var problema = [];
          var raP0 = (Math.round(Math.random() * (10) + 1));
          var raP1 = (Math.round(Math.random() * (10) + 1));
          var raP2 = (Math.round(Math.random() * (10) + 1));
          var raP3 = (Math.round(Math.random() * (10) + 1));

          var rRaP0 = Math.pow(raP0, 2);
          var rRaP1 = Math.pow(raP1, 2);
          var rRaP2 = Math.pow(raP2, 3);
          var rRaP3 = Math.pow(raP3, 3);

          problema[0] = '<span>Juan y Pamela juegan a relacionar el volumen y el área de varios objetos con la medida de los lados. Los datos ' +
          'que tienen son los siguientes: volumen de una pecera cúbica: <span class="np2" id="rRP0">'+ (rRaP2/1000) +'</span> metros cúbicos; volumen de un ' +
          'cubo Rubik: <span class="n0" id="rRP1"> '+ (rRaP3/1000) +'</span> decímetro cúbico; área de un pañuelo de cuello: <span class="np0" id="rRP2">'+ (rRaP0/1000) +'</span> ' +
          'decímetros cuadrados y el área de ' +
          'un espejo: <span class="np1" id="rRP3">'+ (rRaP1/1000) +'</span> metros cuadrados. <b>Calcula</b> el lado de los objetos, en centímetros. <b>Usa</b> la calculadora. </span> ' +
          '<span style="font-size="5px;">Ej: 3√97 336 cm3 = 46 cm</span><br><br>';

          $("#problema").append(problema[0]);
      }



      var notaFinalP1 = 0;
      function Resp1(){

        for(var i=0; i<12; i++){
          if($('#cal'+i).val() == (parseFloat($('#rcal'+i).text()))) {
          notaFinalP1++;
          $('#cal'+i).css("background-color", "#5ED188");
        }else{
          $('#cal'+i).css("background-color", "#EF87A7");
        }
        }        
      }

  var notaFinalP2 = 0;
    function Resp2(){
      for(var i=0; i<4; i++){
        if($('#est'+i).val() == $('#rEst'+i).val()) {
          notaFinalP2++;
          $('#est'+i).css("background-color", "#5ED188");
        }else{
          notaFinalP2 = notaFinalP2-2;
          $('#est'+i).css("background-color", "#EF87A7");
        }

        if($('#sup'+i).val() == $('#rSup'+i).val()) {
          notaFinalP2++;
          $('#sup'+i).css("background-color", "#5ED188");
        }else{
          notaFinalP2 = notaFinalP2-2;
          $('#sup'+i).css("background-color", "#EF87A7");
        }

        if($('#num'+i).val() == $('#rNum'+i).val()) {
          notaFinalP2++;
          $('#num'+i).css("background-color", "#5ED188");
        }else{
          notaFinalP2 = notaFinalP2-2;
          $('#num'+i).css("background-color", "#EF87A7");
        }
    }

      }


var notaFinalP3 = 0;
    function Resp3(){
      var e=3;
      for(var i=0; i<4; i++){
        if(i>1){
          e=2;
        }

        if($('#supProb'+i).val() == e) {
          notaFinalP3++;
          $('#supProb'+i).css("background-color", "#5ED188");
        }else{
          $('#supProb'+i).css("background-color", "#EF87A7");
        }

        if($('#numProb'+i).val() == ((parseFloat($('#rRP'+i).text()))*1000)) {
          notaFinalP3++;
          $('#numProb'+i).css("background-color", "#5ED188");
        }else{
          $('#numProb'+i).css("background-color", "#EF87A7");
        }

        if($('#supCmProb'+i).val() == e) {
          notaFinalP3++;
          $('#supCmProb'+i).css("background-color", "#5ED188");
        }else{
          $('#supCmProb'+i).css("background-color", "#EF87A7");
        }

        if(($('#rNumProb'+i).val()) == (Math.pow(((parseFloat($('#rRP'+i).text()))*1000), 1/e)).toFixed(0)) {
          notaFinalP3++;
          $('#rNumProb'+i).css("background-color", "#5ED188");
        }else{
          $('#rNumProb'+i).css("background-color", "#EF87A7");
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
            Preg3();

    
           function confirmar() {

            Resp1();
            Resp2();
            Resp3();

            var nota1 = (notaFinalP1/4);            
            var nota2 = (notaFinalP2/6);
            var nota3 = parseFloat($('#calificacion0').val());
            var nota4 = (notaFinalP3/16)*3;

            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        if($('#calificacion0').val() !='' && $('#calificacion1').val()!=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').css("background-color", "#D50545");
        }          
      });
    });
