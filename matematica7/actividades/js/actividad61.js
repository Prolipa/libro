//var titulos="aplico"
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
          var problema = [];
          var mcdP0 = (Math.round(Math.random() * (10) + 1))*5;
          var mcdP1 = (Math.round(Math.random() * (10) + 5))*5;
          var mcdP2 = (Math.round(Math.random() * (100) + 1))*5;          

          problema[0] = '<span>1. Verónica tiene tres retazos cuadrados de tela con las siguientes medidas: de <span class="n0" id="numMcd0"> '+mcdP0+' </span> centímetros cuadrados, ' +
          '<span class="np0" id="numMcd1"> '+mcdP1+' </span> centímetros cuadrados y <span class="np2" id="numMcd2">'+mcdP2+' </span> centímetros cuadrados , respectivamente. Con ellos quiere confeccionar servilletas de igual tamaño. ' +
          '¿Cuál es la máxima medida que debe tener cada servilleta para que no sobre tela?</span>';

          $("#problema").append(problema[0]);
      }

    function Preg2(){
          var problema1 = [];
          var mcdP0 = (Math.round(Math.random() * (10) + 1))*5;
          var mcdP1 = (Math.round(Math.random() * (50) + 5))*5;
          var mcdP2 = ((Math.round(Math.random() * (100) + 5))*5);          

          problema1[0] = '<span>2. A una estación de trenes llegan 3 trenes de distintas rutas. Si el tren A llega cada <span class="n0" id="numP2Mcd0">'+mcdP0+'</span> minutos, ' +
          'el tren B cada <span class="np0" id="numP2Mcd1">'+mcdP1+'</span> minutos y el tren C cada <span class="np2" id="numP2Mcd2">'+mcdP2+'</span> minutos, ¿cuándo volverán a coincidir los 3 trenes en la misma estación?' +          
          '<b>Expresa</b> tu respuesta en horas.</span>';

          $("#problema1").append(problema1[0]);
    }


    function Preg3(){
          var problema2 = [];
          var mcdP0 = (Math.round(Math.random() * (10) + 1))*5;
          var mcdP1 = (Math.round(Math.random() * (10) + 5))*5;
          var mcdP2 = ((Math.round(Math.random() * (100) + 5))*5);          

          problema2[0] = '<span>3. En un campamento vacacional tienen <span class="n0" id="numP3Mcd0">'+mcdP1+'</span> ' +
          'panes y <span class="np0" id="numP3Mcd1">'+mcdP2+'</span> jugos. Si se los empaca en cajas con igual número de panes' + 
          'y de jugos, ¿cuántas cajas se necesitan? ¿Qué cantidad de panes y de jugos habrá en cada caja?</span>';

          $("#problema2").append(problema2[0]);
    }


  Math.gcd = function() {
    if (arguments.length == 2) {
        if (arguments[1] == 0)
            return arguments[0];
        else
            return Math.gcd(arguments[1], arguments[0] % arguments[1]);
    } else if (arguments.length > 2) {
        var result = Math.gcd(arguments[0], arguments[1]);
        for (var i = 2; i < arguments.length; i++)
            result = Math.gcd(result, arguments[i]);
        return result;
    }
  };

  var notaFinalP1 = 0;
    function Resp1(){
  
      var val0 = (parseFloat($('#numMcd0').text()));
      var val1 = (parseFloat($('#numMcd1').text()));
      var val2 = (parseFloat($('#numMcd2').text()));

      var resp = Math.gcd(val0, val1, val2);

      if($('#rMcd0').val() == resp){
         $('#rMcd0').css("background-color", "#5ED188");
         notaFinalP1 = notaFinalP1 + 2.5;
      }else{
        $('#rMcd0').css("background-color", "#EF87A7");
      }
    }


  var notaFinalP2 = 0;
    function Resp2(){
  
      var val0 = (parseFloat($('#numP2Mcd0').text()));
      var val1 = (parseFloat($('#numP2Mcd1').text()));
      var val2 = (parseFloat($('#numP2Mcd2').text()));

      var resp = Math.gcd(val0, val1, val2);

      if($('#rMcd1').val() == resp){
         $('#rMcd1').css("background-color", "#5ED188");
         notaFinalP2 = notaFinalP2 + 2.5;
      }else{
        $('#rMcd1').css("background-color", "#EF87A7");
      }
    }


    var notaFinalP3 = 0;
    function Resp3(){
  
      var val0 = (parseFloat($('#numP3Mcd0').text()));
      var val1 = (parseFloat($('#numP3Mcd1').text()));      

      var resp = Math.gcd(val0, val1);

      if($('#rP3Mcd0').val() == resp){
         $('#rP3Mcd0').css("background-color", "#5ED188");
         notaFinalP3 = notaFinalP3 + 1.5;
         if($('#rP3Mcd1').val() < $('#rP3Mcd2').val()){
          if(($('#rP3Mcd1').val()*resp)==val0){
            notaFinalP3 = notaFinalP3 + 0.5;
            $('#rP3Mcd1').css("background-color", "#5ED188");
          }else{
             $('#rP3Mcd1').css("background-color", "#EF87A7");
          }

          if(($('#rP3Mcd2').val()*resp)==val1){
            notaFinalP3 = notaFinalP3 + 0.5;
            $('#rP3Mcd2').css("background-color", "#5ED188");
          }else{
             $('#rP3Mcd2').css("background-color", "#EF87A7");
          }

         }else{
          $('#rP3Mcd1').css("background-color", "#EF87A7");
          $('#rP3Mcd2').css("background-color", "#EF87A7");
         }          
      }else{
        $('#rP3Mcd0').css("background-color", "#EF87A7");
        $('#rP3Mcd1').css("background-color", "#EF87A7");
        $('#rP3Mcd2').css("background-color", "#EF87A7");
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

            var nota1 = notaFinalP1;
            var nota2 = notaFinalP2;
            var nota3 = notaFinalP3;
            var nota4 = parseFloat($('#calificacion0').val());
            
            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

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
          $('#calificacion0').css("background-color", "#D50545");
        }          
      });
    });
