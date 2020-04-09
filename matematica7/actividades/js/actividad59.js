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
 

    function Preg4(){            
          var problema = [];
          var raP0 = (Math.round(Math.random() * (10) + 1))*4;
          problema[0] = '<span>Una caja con forma de cubo tiene <span class="n0"> '+ raP0 +' </span> centímetros cúbicos de volumen. ¿Cuánto mide cada lado de la caja?</span>'+
                        '<br><br><textarea class="form-control" style="font-size: 17px; color: #6D1EB6;" id="prob0"></textarea>';

          $("#problema").append(problema[0]);
          document.getElementById("prob0").value = '√';
      }




      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg4();

    
           function confirmar() {

            var nota1 = parseFloat($('#calificacion0').val());
            var nota2 = parseFloat($('#calificacion1').val());

            var notaFinal = (nota1+nota2);

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
