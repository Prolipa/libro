
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
          
          for (var i = 0; i < 4; i++) {
              valoresA[i] = Math.round(Math.random() * (30 - 10) + 10);

              $("#np"+i).append(valoresA[i]);
        } 
    }

  function Preg2(){
      var valoresA = [];  
      var vf =  Math.round(Math.random() * (20 - 10) + 10);
      var cant = 7;
      var conj = '';
      for (var i = 0; i < cant; i++) {
              valoresA[i] = Math.round(Math.random() * (20 - 10) + 10);
              conj = conj + valoresA[i]+', ';
        }  
        
      var conjunto = [];
           
            conjunto[0] = '<span style="font-size: 23px;" id="conDatos0">'+ conj+vf+', '+vf+', '+vf+'</span>';

            $("#conDatosP2").append(conjunto[0]);          
  }


  function Preg3(){
      var pregunta = [];          
          var val0 = Math.round(Math.random() * (9 - 2) + 2);
          var val1 = Math.round(Math.random() * (9 - 2) + 2);
          var val2 = Math.round(Math.random() * (9 - 2) + 2);
          var val3 = Math.round(Math.random() * (9 - 2) + 2);
          var val4 = Math.round(Math.random() * (9 - 2) + 2);
          var val5 = Math.round(Math.random() * (9 - 2) + 2);
          var val6 = Math.round(Math.random() * (9 - 2) + 2);

          $("#cantLun").append(val6);
          $("#cantMar").append(val6);
          $("#cantMie").append(val2);
          $("#cantJue").append(val3);
          $("#cantVie").append(val4);
          $("#cantSab").append(val6);
          $("#cantDom").append(val6);          
          
  }


 

  var notaFinalP1 = 0;
  function Resp1(){
      var signo = '';
      var operacion = 0;

    for(var i=0; i<4; i++){
      switch (i) {
        case 0:
            signo = '+';
            operacion = (parseInt($('#p0T'+(i)+'_'+(i)).text())) - ((parseInt($('#p0T'+(i)).text())));//suma
            break;
        case 1:
            signo = '-';
            operacion = (parseInt($('#p0T'+(i)).text())) - ((parseInt($('#p0T'+(i)+'_'+(i)).text())));//resta
            break;
        case 2:
            signo = 'x';
            operacion = (parseInt($('#p0T'+(i)+'_'+(i)).text())) / ((parseInt($('#p0T'+(i)).text())));//multiplicacion
            break;
        case 3:
            signo = '÷';            
            operacion = (parseInt($('#p0T'+(i)).text())) / ((parseInt($('#p0T'+(i)+'_'+(i)).text())));//division
      }      

        if(operacion == $('#p0Patron'+i).val()) {
          notaFinalP1++;
          $('#p0Patron'+i).css("background-color", "#5ED188");
          if($('#sel'+i).val() == signo) {
            notaFinalP1++;
            $('#sel'+i).css("background-color", "#5ED188");
          }else{
            $('#sel'+i).css("background-color", "#EF87A7");
          }
        }else{
          $('#p0Patron'+i).css("background-color", "#EF87A7");
          $('#sel'+i).css("background-color", "#EF87A7");
        }
      }         
    }


   var notaFinalP2 = 0;
   function Resp2(){

   var conjDatos0 = [];
   var conDatos0 = [];


        conDatos0 = ($('#conDatosP2').text().split(", "));
        conjDatos0 = ($('#conjDatosP4').val()).split("+");
        conjDatos = ($('#conjDatosP4').val()).split("+");

        conjDatos0.sort();
        conDatos0.sort();

        if(conjDatos0.toString() == conDatos0.toString()){          
          if(conjDatos == conDatos0.toString()) {
            notaFinalP2++;            
          $('#conjDatosP4').css("background-color", "#5ED188");
          }else{
            $('#conjDatosP4').css("background-color", "#EF87A7");
           }          
        }else{
          $('#conjDatosP4').css("background-color", "#EF87A7");
        }


        if($('#denConjDatosP4').val() == conDatos0.length) {
          notaFinalP2++;
         $('#denConjDatosP4').css("background-color", "#5ED188");
        }else{
         $('#denConjDatosP4').css("background-color", "#EF87A7");
        }

        var sumaConj = 0;
        for(var j=0; j<conDatos0.length; j++){
          sumaConj = sumaConj + (parseInt(conDatos0[j]));
        }

        if($('#rNumConjP4').val() == sumaConj){
          notaFinalP2++;
         $('#rNumConjP4').css("background-color", "#5ED188");
        }else{
         $('#rNumConjP4').css("background-color", "#EF87A7");
        }


        if($('#rDenConjP4').val() == conDatos0.length) {
          notaFinalP2++;
         $('#rDenConjP4').css("background-color", "#5ED188");
        }else{
         $('#rDenConjP4').css("background-color", "#EF87A7");
        }

       if((sumaConj/conDatos0.length) == $('#rMediaP4').val()){
        notaFinalP2++;
        $('#rMediaP4').css("background-color", "#5ED188");
       }else{
         $('#rMediaP4').css("background-color", "#EF87A7");
       }

        if($('#rMedianaP4').val() == ((parseInt(conDatos0[5])+parseInt(conDatos0[4]))/2)) {
            notaFinalP2++;
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
            notaFinalP2++;
            $('#rModaP4').css("background-color", "#5ED188");
        }else{
            $('#rModaP4').css("background-color", "#EF87A7");
        }

        if($('#rRangoP4').val() == (conDatos0[conDatos0.length-1] - conDatos0[0])){
            notaFinalP2++;
            $('#rRangoP4').css("background-color", "#5ED188");
        }else{
            $('#rRangoP4').css("background-color", "#EF87A7");
        } 

    }

    var notaFinalP3 = 0;
    function Resp3(){

        var conjDatos0 = [];
        var conjDatos = [];
        var conDatos0 = [];
        var cDatos = $('#cantLun').text()+','+$('#cantMar').text()+','+$('#cantMie').text()+','+$('#cantJue').text()+','+$('#cantVie').text()+','+$('#cantSab').text()+','+$('#cantDom').text();


        conjDatos0 = ($('#conjDatosP3').val()).split("+");
        conjDatos = ($('#conjDatosP3').val()).split("+");
        conDatos0 = (cDatos.split(","));

        conjDatos0.sort();
        conDatos0.sort();


        if(conjDatos0.toString() == conDatos0.toString()){          
          if(conjDatos == conDatos0.toString()) {
            notaFinalP3++;            
          $('#conjDatosP3').css("background-color", "#5ED188");
          }else{
            $('#conjDatosP3').css("background-color", "#EF87A7");
           }          
        }else{
          $('#conjDatosP3').css("background-color", "#EF87A7");
        }


        if($('#denConjDatosP3').val() == conDatos0.length) {
          notaFinalP3++;
         $('#denConjDatosP3').css("background-color", "#5ED188");
        }else{
         $('#denConjDatosP3').css("background-color", "#EF87A7");
        }

        var sumaConj = 0;
        for(var j=0; j<conDatos0.length; j++){
          sumaConj = sumaConj + (parseInt(conDatos0[j]));
        }

        if($('#rNumConjP3').val() == sumaConj){
          notaFinalP3++;
         $('#rNumConjP3').css("background-color", "#5ED188");
        }else{
         $('#rNumConjP3').css("background-color", "#EF87A7");
        }


        if($('#rDenConjP3').val() == conDatos0.length) {
          notaFinalP3++;
         $('#rDenConjP3').css("background-color", "#5ED188");
        }else{
         $('#rDenConjP3').css("background-color", "#EF87A7");
        }

        var med = (sumaConj/conDatos0.length);
        var rMed;
        if(med % 2 != 0){
          rMed = med.toFixed(2)
        }else{
          rMed = med;
        }  

       if(rMed == $('#rMediaP3').val()){
        notaFinalP3++;
        $('#rMediaP3').css("background-color", "#5ED188");
       }else{
         $('#rMediaP3').css("background-color", "#EF87A7");
       }

        if($('#rMedianaP3').val() == (parseInt(conDatos0[3]))) {
            notaFinalP3++;
            $('#rMedianaP3').css("background-color", "#5ED188");
        }else{
            $('#rMedianaP3').css("background-color", "#EF87A7");
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

        if($('#rModaP3').val() == valorMasAlto.key){
            notaFinalP3++;
            $('#rModaP3').css("background-color", "#5ED188");
        }else{
            $('#rModaP3').css("background-color", "#EF87A7");
        }

        if($('#rRangoP3').val() == (conDatos0[conDatos0.length-1] - conDatos0[0])){
            notaFinalP3++;
            $('#rRangoP3').css("background-color", "#5ED188");
        }else{
            $('#rRangoP3').css("background-color", "#EF87A7");
        } 
        
    }

    var notaFinalP4 = 0;
    function Resp4(){

      if($('#cf').val() == '5,7' || $('#cf').val() == '7,5'){
        notaFinalP4++;
        $('#cf').css("background-color", "#5ED188");
      }else{
        $('#cf').css("background-color", "#EF87A7");
      } 

      if($('#tc').val() == 12){
        notaFinalP4++;
        $('#tc').css("background-color", "#5ED188");
      }else{
        $('#tc').css("background-color", "#EF87A7");
      }

      if($('#pcbNum').val() == 5){
        notaFinalP4++;
        $('#pcbNum').css("background-color", "#5ED188");
      }else{
        $('#pcbNum').css("background-color", "#EF87A7");
      } 

      if($('#pcbDen').val() == 12){
        notaFinalP4++;
        $('#pcbDen').css("background-color", "#5ED188");
      }else{
        $('#pcbDen').css("background-color", "#EF87A7");
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
            Resp4();

            var nota1 = parseFloat($('#calificacion0').val());
            var nota2 = (notaFinalP2*2.5)/8;   
            var nota3 = (notaFinalP3)/8;
            var nota3_1 = parseFloat($('#calificacion1').val());         
            var nota4 = (notaFinalP4*1.5)/4;
            var nota4_1 = parseFloat($('#calificacion2').val());
            
            var notaFinal = (nota1+nota2+nota3+nota3_1+nota4+nota4_1).toFixed(2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        }         
      });
    });


