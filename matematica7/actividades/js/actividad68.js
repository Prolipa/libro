var titulos="reflexiono"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }



function Preg2(){            
        
      var valoresA = [];
      var valoresB = [];
      var orden = [];
      var ordenado = [];
      var orden1 = [];
      var ordenado1 = [];

      var vf =  Math.round(Math.random() * (20 - 10) + 10);
      var conj = '';
      var vf1 =  Math.round(Math.random() * (5 - 1) + 1);
      var conj1 = '';

      for (var i = 0; i < 4; i++) {
              valoresA[i] = Math.round(Math.random() * (20 - 10) + 10);
              valoresB[i] = Math.round(Math.random() * (5 - 1) + 1);

              conj = conj + valoresA[i]+', ';
              conj1 = conj1 + valoresB[i]+', ';

              $("#np"+i).append(valoresA[i]);
              $("#dh"+i).append(valoresB[i]);
        } 

        $("#np4").append(vf);
        $("#dh4").append(vf1);
        $("#np5").append(vf);
        $("#dh5").append(vf1);
        $("#np6").append(vf);
        $("#dh6").append(vf1);

      orden = (conj+vf+', '+vf+', '+vf).split(", ");
      orden.sort();
      ordenado = orden[0]+', '+orden[1]+', '+orden[2]+', '+orden[3]+', '+orden[4]+', '+orden[5]+', '+orden[6];

      orden1 = (conj1+vf1+', '+vf1+', '+vf1).split(", ");
      orden1.sort();
      ordenado1 = orden1[0]+', '+orden1[1]+', '+orden1[2]+', '+orden1[3]+', '+orden1[4]+', '+orden1[5]+', '+orden1[6];

      $("#conjuntoOrden0").append(ordenado);
      $("#conjuntoOrden1").append(ordenado1);
      $("#conjuntoOrden2").append(ordenado);
      $("#conjuntoOrden3").append(ordenado1);

      }

  var notaFinalP1 = 0; 
  function Resp1(){
  var conDatos0 = [];
   for(var i=0; i<2; i++){
    conDatos = ($('#conjuntoOrden'+i).text()).split(", ");
        conDatos.sort();
      var sum = 0;
      for(var j=0; j<conDatos.length; j++){
          sum = sum + (parseInt(conDatos[j]));
      }

      if($('#media'+i).val() == (sum/7).toFixed(2)){
          notaFinalP1++;
         $('#media'+i).css("background-color", "#5ED188");
      }else{
         $('#media'+i).css("background-color", "#EF87A7");
      }

      if($('#rMediana'+i).val() == conDatos[3]) {
          notaFinalP1++;
         $('#rMediana'+i).css("background-color", "#5ED188");
      }else{
         $('#rMediana'+i).css("background-color", "#EF87A7");
      }


        var diccionario = {};
        for(var k = 0; k <conDatos.length; k++){
            var clan = conDatos[k].split(", ");
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

      if($('#rModa'+i).val() == valorMasAlto.key) {
          notaFinalP1++;
         $('#rModa'+i).css("background-color", "#5ED188");
      }else{
         $('#rModa'+i).css("background-color", "#EF87A7");
      }


   } 
   

  }

    function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {

            Inicio();
            Preg2();

           function confirmar() {
            Resp1();

              var nota1 = $('#calificacion0').val();
              var nota2 = (notaFinalP1*5)/6;

              var notaFinal = (parseInt(nota1)+parseFloat(nota2)).toFixed(2);
                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);
                            
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion0').val() != ''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }


          
      });

      });
