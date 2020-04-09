
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

      var descomponer = [];

      descomponer[0] = ' a) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra0 +'</span><br>' +
      '<textarea class="form-control respuestas" rows="7"></textarea>';

      descomponer[1] = ' a) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra1 +'</span><br>' +
      '<textarea class="form-control respuestas" rows="7"></textarea>';

      descomponer[2] = ' a) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra2 +'</span><br>' +
      '<textarea class="form-control respuestas" rows="7"></textarea>';

      
      $("#desRaiz0").append(descomponer[0]); 
      $("#desRaiz1").append(descomponer[1]);  
      $("#desRaiz2").append(descomponer[2]);    
          
      }


   function Preg2(){            
      var ra0 = (Math.round(Math.random() * (1000) + 10));
      var ra1 = (Math.round(Math.random() * (1000) + 10));
      var ra2 = (Math.round(Math.random() * (1000) + 10));
      var ra3 = (Math.round(Math.random() * (1000) + 10));
      var ra4 = (Math.round(Math.random() * (1000) + 10));
      var ra5 = (Math.round(Math.random() * (1000) + 10));

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

      
      $("#calRaiz0").append(calcular[0]);
      $("#calRaiz1").append(calcular[1]);
      $("#calRaiz2").append(calcular[2]);
      $("#calRaiz3").append(calcular[3]);
      $("#calRaiz4").append(calcular[4]);
      $("#calRaiz5").append(calcular[5]);
      }



      function Preg3(){

      var ra0 = Math.pow((Math.round(Math.random() * (15) + 5)), 3);
      var ra1 = Math.pow((Math.round(Math.random() * (25) + 10)), 2);

      
      $("#nPN0").append(ra0); 
      $("#nPV0").append(ra1); 


      }


    var notaFinalP2 = 0;
      function Resp2(){
      for(var i=0; i<6; i++){
          if(parseFloat($('#cal'+i).val()).toFixed(2) == (parseFloat($('#rcal'+i).text())).toFixed(2) ) {
          notaFinalP2++;
          $('#cal'+i).css("background-color", "#5ED188");
          }else{
            $('#cal'+i).css("background-color", "#EF87A7");
          }
        }     

      }



      var notaFinalP3 = 0;
      function Resp3() {

        if(($('#rPN0').val()) == Math.round(Math.pow((parseInt($('#nPN0').text())), 1/3)) ) {
          notaFinalP3++;
          $('#rPN0').css("background-color", "#5ED188");
        }else{
          $('#rPN0').css("background-color", "#EF87A7");
        }

        if(($('#rPV0').val()) == Math.pow((parseInt($('#nPV0').text())), 1/2) ) {
          notaFinalP3++;
          $('#rPV0').css("background-color", "#5ED188");
        }else{
          $('#rPV0').css("background-color", "#EF87A7");
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
            Resp2();
            Resp3();

            var nota1 = parseFloat($('#calificacion0').val());
            var nota2 = (notaFinalP2*3)/6;
            var nota3 = (notaFinalP3*3)/2;
            var notaFinal = (nota1+nota2+nota3).toFixed(2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
       if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
      });
    });


