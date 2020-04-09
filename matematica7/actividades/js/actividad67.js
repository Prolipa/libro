
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
  var vf =  Math.round(Math.random() * (50 - 10) + 10);
  var cant = Math.round(Math.random() * (16 - 10) + 10);
  var conj = '';
  for (var i = 0; i < cant; i++) {
          valoresA[i] = Math.round(Math.random() * (50 - 10) + 10);
          conj = conj + valoresA[i]+',';
    }  
    
  var conjunto = [];
       
        conjunto[0] = '<span class="np2 id="conDatos0">'+ conj +vf+'</span>';

        $("#conDatos0").append(conjunto[0]);
          
      }


   function Preg2(){            
        
      var valoresA = [];  
      var valoresB = [];
      var valoresC = [];
      var valoresD = [];
      var valoresE = [];

      var vf =  Math.round(Math.random() * (9 - 2) + 2);
      var vf1 =  Math.round(Math.random() * (9 - 2) + 2);
      var vf2 =  Math.round(Math.random() * (9 - 2) + 2);
      var vf3 =  Math.round(Math.random() * (9 - 2) + 2);
      var vf4 =  Math.round(Math.random() * (9 - 2) + 2);

      var cant = Math.round(Math.random() * (14 - 10) + 10);

      var conj = '';
      var conj1 = '';
      var conj2 = '';
      var conj3 = '';
      var conj4 = '';

      for (var i = 0; i < cant; i++) {
              valoresA[i] = Math.round(Math.random() * (9 - 2) + 2);
              conj = conj + valoresA[i]+',';

              valoresB[i] = Math.round(Math.random() * (9 - 2) + 2);
              conj1 = conj1 + valoresB[i]+',';

              valoresC[i] = Math.round(Math.random() * (9 - 2) + 2);
              conj2 = conj2 + valoresC[i]+',';

              valoresD[i] = Math.round(Math.random() * (9 - 2) + 2);
              conj3 = conj3 + valoresD[i]+',';

              valoresE[i] = Math.round(Math.random() * (9 - 2) + 2);
        }  
        
            $("#cantDiasCam0").append(cant+1);
            $("#cantDiasPat0").append(cant+1);
            $("#conjuntoP20").append(conj +vf);
            $("#conjuntoP21").append(conj1 +vf1);   

            $("#conjuntoP22").append(conj2 +vf2);//atletas
            $("#conjuntoP23").append(conj3 +vf3); 

            $("#conjuntoP24").append(valoresE[0]+','+valoresE[1]+','+valoresE[2]+','+valoresE[3]+','+valoresE[4]);//familias
            $("#conjuntoFamilias0").append(valoresE[0]);
            $("#conjuntoFamilias1").append(valoresE[1]);
            $("#conjuntoFamilias2").append(valoresE[2]);
            $("#conjuntoFamilias3").append(valoresE[3]);
            $("#conjuntoFamilias4").append(valoresE[4]);

      }


  function Preg3(){            
      var valoresA = [];  
      var vf =  Math.round(Math.random() * (39 - 30) + 30);
      var cant = Math.round(Math.random() * (14 - 10) + 10);
      var conj = '';

      for (var i = 0; i < cant; i++) {
              valoresA[i] = Math.round(Math.random() * (39 - 24) + 24);
              conj = conj + valoresA[i]+',';
        }  

       $("#conjuntoP30").append(conj +vf);
       $("#conjuntoP31").append(conj +(vf-20));

      }




  var notaFinalP1 = 0;
    function Resp1(){

      var conjDatos0 = [];
      var conDatos0 = [];

      for(var i=0; i<1; i++) {
        conjDatos0 = ($('#conjDatos'+i).val()).split("+");
        conjDatos = ($('#conjDatos'+i).val()).split("+");
        conDatos0 = ($('#conDatos'+i).text()).split(",");

        conjDatos0.sort();
        conDatos0.sort();

        if(conjDatos0.toString() == conDatos0.toString()){
          if(conjDatos == conDatos0.toString()) {
            notaFinalP1++;
          $('#conjDatos'+i).css("background-color", "#5ED188");
          }else{
            $('#conjDatos'+i).css("background-color", "#EF87A7");
           }          
        }else{
          $('#conjDatos'+i).css("background-color", "#EF87A7");
        }


        if($('#denConjDatos'+i).val() == conDatos0.length) {
          notaFinalP1++;
         $('#denConjDatos'+i).css("background-color", "#5ED188");
        }else{
         $('#denConjDatos'+i).css("background-color", "#EF87A7");
        }

        var sumaConj = 0;
        for(var j=0; j<conDatos0.length; j++){
          sumaConj = sumaConj + (parseInt(conDatos0[j]));
        }

        if($('#rNumConj'+i).val() == sumaConj){
          notaFinalP1++;
         $('#rNumConj'+i).css("background-color", "#5ED188");
        }else{
         $('#rNumConj'+i).css("background-color", "#EF87A7");
        }

        if($('#rDenConj'+i).val() == conDatos0.length) {
          notaFinalP1++;
         $('#rDenConj'+i).css("background-color", "#5ED188");
        }else{
         $('#rDenConj'+i).css("background-color", "#EF87A7");
        }

        ///a)
        if($('#cantPerson'+i).val() == conDatos0.length) {
          notaFinalP1++;
         $('#cantPerson'+i).css("background-color", "#5ED188");
        }else{
         $('#cantPerson'+i).css("background-color", "#EF87A7");
        }

       if(parseInt(sumaConj/conDatos0.length) == $('#rMedia'+i).val()){
        notaFinalP1++;
        $('#rMedia'+i).css("background-color", "#5ED188");
       }else{
         $('#rMedia'+i).css("background-color", "#EF87A7");
       }

       if($('#rangoP1'+i).val() == (conDatos0[conDatos0.length-1] - conDatos0[0]) ){
        notaFinalP1++;
        $('#rangoP1'+i).css("background-color", "#5ED188");
       }else{
         $('#rangoP1'+i).css("background-color", "#EF87A7");
       }
    }
      

  }


  var notaFinalP2 = 0;
    function Resp2(){

        var conjAhorros = [];   

      for(var i=0; i<5; i++){
        conjAhorros = ($('#conjuntoP2'+i).text()).split(",");
        conjAhorros.sort();

        if((conjAhorros[conjAhorros.length-1] - conjAhorros[0]) ==  $('#rangoConjuntoP2'+i).val()) {
          notaFinalP2++;
          $('#rangoConjuntoP2'+i).css("background-color", "#5ED188");
        }else{
          $('#rangoConjuntoP2'+i).css("background-color", "#EF87A7");
        }

        if((conjAhorros[conjAhorros.length-1] - conjAhorros[0]) >= 5 ) {
          if($('#tipoMuestraConjuntoP2'+i).val() == 'heterogénea'){
            notaFinalP2++;
            $('#tipoMuestraConjuntoP2'+i).css("background-color", "#5ED188");
          }else{
            $('#tipoMuestraConjuntoP2'+i).css("background-color", "#EF87A7");
          }          
        }else{
          if($('#tipoMuestraConjuntoP2'+i).val() == 'homogénea'){
            notaFinalP2++;
            $('#tipoMuestraConjuntoP2'+i).css("background-color", "#5ED188");
          }else{
            $('#tipoMuestraConjuntoP2'+i).css("background-color", "#EF87A7");
          }   
        }


      }

  }



  var notaFinalP3 = 0;
    function Resp3(){

        var conDatos0 = [];

    for(var i=0; i<2; i++){
        conDatos0 = ($('#conjuntoP3'+i).text()).split(",");

        conDatos0.sort();

        if((conDatos0[conDatos0.length-1] - conDatos0[0]) ==  $('#rangoP3'+i).val()) {
          notaFinalP3++;
          $('#rangoP3'+i).css("background-color", "#5ED188");
        }else{
          $('#rangoP3'+i).css("background-color", "#EF87A7");
        }

        if((conDatos0[conDatos0.length-1] - conDatos0[0]) >= 20 ) {
          if($('#tipoMuestraConjuntoP3'+i).val() == 'heterogénea'){
            notaFinalP3++;
            $('#tipoMuestraConjuntoP3'+i).css("background-color", "#5ED188");
          }else{
            $('#tipoMuestraConjuntoP3'+i).css("background-color", "#EF87A7");
          }          
        }else{
          if($('#tipoMuestraConjuntoP3'+i).val() == 'homogénea'){
            notaFinalP3++;
            $('#tipoMuestraConjuntoP3'+i).css("background-color", "#5ED188");
          }else{
            $('#tipoMuestraConjuntoP3'+i).css("background-color", "#EF87A7");
          }   
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

            var nota1 = (notaFinalP1*2)/7;
            var nota1_1 = parseInt($('#calificacion0').val());
            var nota2 = (notaFinalP2*4)/10;
            var nota2_1 = parseInt($('#calificacion1').val());
            var nota3 = (notaFinalP3*2)/4;
            
            var notaFinal = (nota1+nota1_1+nota2+nota2_1+nota3).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        if($('#calificacion0').val() != '' && $('#calificacion1').val() != ''){
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


