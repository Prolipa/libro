
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
      var valoresA = [];
      var orden = [];
      var ordenado = [];

      var vf =  Math.round(Math.random() * (30 - 10) + 10);
      var conj = '';

      for (var i = 0; i < 3; i++) {
              valoresA[i] = Math.round(Math.random() * (30 - 10) + 10);

              conj = conj + valoresA[i]+', ';

              $("#np"+i).append(valoresA[i]);
        } 

        $("#np3").append(vf);
        $("#np4").append(vf);


      orden = (conj+vf+', '+vf).split(", ");
      orden.sort();
      ordenado = orden[0]+', '+orden[1]+', '+orden[2]+', '+orden[3]+', '+orden[4];


      //$("#conjuntoOrden0").append(ordenado);

      }


   



  var notaFinalP1 = 0;
    function Resp1(){
  var conDatos0 = [];
   var cDatos = $('#np0').text()+','+$('#np1').text()+','+$('#np2').text()+','+$('#np3').text()+','+$('#np4').text();

        conDatos0 = (cDatos.split(","));
        conDatos0.sort();

       var sumaConj = 0;
        for(var j=0; j<conDatos0.length; j++){
          sumaConj = sumaConj + (parseInt(conDatos0[j]));
        }
         
       if((sumaConj/conDatos0.length) == $('#rMediaP4').val()){
        notaFinalP1++;
        $('#rMediaP4').css("background-color", "#5ED188");
       }else{
         $('#rMediaP4').css("background-color", "#EF87A7");
       }

        if($('#rMedianaP4').val() == conDatos0[2]){
            notaFinalP1++;
            $('#rMedianaP4').css("background-color", "#5ED188");
        }else{
            $('#rMedianaP4').css("background-color", "#EF87A7");
        } 


        var diccionario = {};
        for(var k = 0; k <conDatos0.length; k++){
            var clan = conDatos0[k].split(", ");
           if(diccionario[clan[0]] != undefined){
             diccionario[clan[0]] = diccionario[clan[0]] + 1;
           }
          else{
            diccionario[clan[0]] = 1;
          }
        }

        var valorMasAlto = {conincidencias: 0};
        for(var property in diccionario){            
            if(valorMasAlto.conincidencias < diccionario[property]){
                valorMasAlto.key = property;
                valorMasAlto.conincidencias = diccionario[property];
            }
        }

        if($('#rModaP4').val() == valorMasAlto.key){
            notaFinalP1++;
            $('#rModaP4').css("background-color", "#5ED188");
        }else{
            $('#rModaP4').css("background-color", "#EF87A7");
        } 

  }


      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();         
            Preg1();

           function confirmar() {
            Resp1();

            var nota1 = notaFinalP1*2;
            var nota1_1 = parseInt($('#calificacion0').val());
            
            var notaFinal = (nota1+nota1_1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        if($('#calificacion0').val()){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
         $('#calificacion0').focus();
         $('#calificacion0').css("background-color", "#D50545");
         $('#calificacion1').focus();
         $('#calificacion1').css("background-color", "#D50545");
        }        
      });
    });


