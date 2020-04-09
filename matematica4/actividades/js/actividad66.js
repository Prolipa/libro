
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
  for (var i = 0; i < 18; i++) {
          valoresA[i] = Math.round(Math.random() * (99 - 10) + 10);
    }        
  var conjunto = [];
       
        conjunto[0] = '<span class="n0" id="conDatos0">'+valoresA[0]+','+valoresA[1]+','+valoresA[2]+','+valoresA[3]+','+valoresA[4]+'</span>';
        conjunto[1] = '<span class="n0" id="conDatos1">'+valoresA[5]+','+valoresA[6]+','+valoresA[7]+','+valoresA[8]+','+valoresA[9]+','+valoresA[10]+'</span>';
        conjunto[2] = '<span class="n0" id="conDatos2">'+valoresA[11]+','+valoresA[12]+','+valoresA[13]+','+valoresA[14]+','+valoresA[15]+','+valoresA[16]+','+valoresA[17]+'</span>';

        $("#conjuntoDatos0").append(conjunto[0]);
        $("#conjuntoDatos1").append(conjunto[1]);
        $("#conjuntoDatos2").append(conjunto[2]);
          
      }


   function Preg2(){            
        
       var pregunta = [];          
          var val0 = Math.round(Math.random() * (9 - 2) + 2);
          var val1 = Math.round(Math.random() * (9 - 2) + 2);
          var val2 = Math.round(Math.random() * (9 - 2) + 2);
          var val3 = Math.round(Math.random() * (9 - 2) + 2);
          var val4 = Math.round(Math.random() * (9 - 2) + 2);
          var val5 = Math.round(Math.random() * (9 - 2) + 2);
          var val6 = Math.round(Math.random() * (9 - 2) + 2);

          $("#cantLun").append(val0);
          $("#cantMar").append(val1);
          $("#cantMie").append(val2);
          $("#cantJue").append(val3);
          $("#cantVie").append(val4);
          $("#cantSab").append(val5);
          $("#cantDom").append(val6);          

    }


    function Preg3(){            
        
       var pregunta = [];          
          var val0 = Math.round(Math.random() * (9 - 2) + 2);
          var val1 = Math.round(Math.random() * (9 - 2) + 2);
          var val2 = Math.round(Math.random() * (9 - 2) + 2);
          var val3 = Math.round(Math.random() * (9 - 2) + 2);

          $("#cantRosas").append(val0);
          $("#cantOrq").append(val1);
          $("#cantGer").append(val2);
          $("#cantGir").append(val1);
          $("#cantCla").append(val1);         

      }


  function Preg4(){            
        
       var pregunta = [];          
          var val0 = Math.round(Math.random() * (9 - 2) + 2);
          var val1 = Math.round(Math.random() * (9 - 2) + 2);
          var val2 = Math.round(Math.random() * (9 - 2) + 2);
          var val3 = Math.round(Math.random() * (9 - 2) + 2);

          $("#cantLuc").append(val1);
          $("#cantPac").append(val1);
          $("#cantGab").append(val2);
          $("#cantMon").append(val1);
          $("#cantWil").append(val3);         

      }




  var notaFinalP1 = 0;
    function Resp1(){

        var conjDatos0 = [];
        var conDatos0 = [];

      for(var i=0; i<3; i++) {
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



       if((sumaConj/conDatos0.length).toFixed(2) == $('#rMedia'+i).val()){
        notaFinalP1++;
        $('#rMedia'+i).css("background-color", "#5ED188");
       }else{
         $('#rMedia'+i).css("background-color", "#EF87A7");
       }
    }
      

  }


  var notaFinalP2 = 0;
    function Resp2(){

        var conjDatos0 = [];
        var conjDatos = [];
        var conDatos0 = [];
        var cDatos = $('#cantLun').text()+','+$('#cantMar').text()+','+$('#cantMie').text()+','+$('#cantJue').text()+','+$('#cantVie').text()+','+$('#cantSab').text()+','+$('#cantDom').text();


        conjDatos0 = ($('#rConjuntoP2').val()).split(",");
        conjDatos = ($('#rConjuntoP2').val()).split(",");
        conDatos0 = (cDatos.split(","));

        conjDatos0.sort();
        conDatos0.sort();

        if(conjDatos0.toString() == conDatos0.toString()) {
          if(conjDatos == conDatos0.toString()) {
            notaFinalP2++;
          $('#rConjuntoP2').css("background-color", "#5ED188");
          }else{
            $('#rConjuntoP2').css("background-color", "#EF87A7");
           }          
        }else{
          $('#rConjuntoP2').css("background-color", "#EF87A7");
        }

        if($('#rMedianaP2').val() == conDatos0[3]){
            notaFinalP2++;
            $('#rMedianaP2').css("background-color", "#5ED188");
        }else{
            $('#rMedianaP2').css("background-color", "#EF87A7");
        } 

  }



  var notaFinalP3 = 0;
    function Resp3(){

        var conjDatos0 = [];
        var conjDatos = [];
        var conDatos0 = [];
        var cDatos = $('#cantRosas').text()+','+$('#cantOrq').text()+','+$('#cantGer').text()+','+$('#cantGir').text()+','+$('#cantCla').text();


        conjDatos0 = ($('#rConjuntoP3').val()).split(",");
        conjDatos = ($('#rConjuntoP3').val()).split(",");
        conDatos0 = (cDatos.split(","));

        conjDatos0.sort();
        conDatos0.sort();

        
        if(conjDatos0.toString() == conDatos0.toString()) {
          if(conjDatos == conDatos0.toString()) {
            notaFinalP3++;
          $('#rConjuntoP3').css("background-color", "#5ED188");
          }else{
            $('#rConjuntoP3').css("background-color", "#EF87A7");
           }          
        }else{
          $('#rConjuntoP3').css("background-color", "#EF87A7");
        }

        if($('#rModaP3').val() == $('#cantCla').text()){
            notaFinalP3++;
            $('#rModaP3').css("background-color", "#5ED188");
        }else{
            $('#rModaP3').css("background-color", "#EF87A7");
        } 

  }



var notaFinalP4 = 0;
  function Resp4(){

   var conjDatos0 = [];
   var conDatos0 = [];
   var cDatos = $('#cantLuc').text()+','+$('#cantPac').text()+','+$('#cantGab').text()+','+$('#cantMon').text()+','+$('#cantWil').text();

        conjDatos0 = ($('#conjDatosP4').val()).split("+");
        conjDatos = ($('#conjDatosP4').val()).split("+");
        conDatos0 = (cDatos.split(","));

        conjDatos0.sort();
        conDatos0.sort();

        if(conjDatos0.toString() == conDatos0.toString()){          
          if(conjDatos == conDatos0.toString()) {
            notaFinalP4++;
          $('#conjDatosP4').css("background-color", "#5ED188");
          }else{
            $('#conjDatosP4').css("background-color", "#EF87A7");
           }          
        }else{
          $('#conjDatosP4').css("background-color", "#EF87A7");
        }


        if($('#denConjDatosP4').val() == conDatos0.length) {
          notaFinalP4++;
         $('#denConjDatosP4').css("background-color", "#5ED188");
        }else{
         $('#denConjDatosP4').css("background-color", "#EF87A7");
        }

        var sumaConj = 0;
        for(var j=0; j<conDatos0.length; j++){
          sumaConj = sumaConj + (parseInt(conDatos0[j]));
        }

        if($('#rNumConjP4').val() == sumaConj){
          notaFinalP4++;
         $('#rNumConjP4').css("background-color", "#5ED188");
        }else{
         $('#rNumConjP4').css("background-color", "#EF87A7");
        }


        if($('#rDenConjP4').val() == conDatos0.length) {
          notaFinalP4++;
         $('#rDenConjP4').css("background-color", "#5ED188");
        }else{
         $('#rDenConjP4').css("background-color", "#EF87A7");
        }


       if((sumaConj/conDatos0.length) == $('#rMediaP4').val()){
        notaFinalP4++;
        $('#rMediaP4').css("background-color", "#5ED188");
       }else{
         $('#rMediaP4').css("background-color", "#EF87A7");
       }
  



        if($('#rMedianaP4').val() == conDatos0[2]){////
            notaFinalP4++;
            $('#rMedianaP4').css("background-color", "#5ED188");
        }else{
            $('#rMedianaP4').css("background-color", "#EF87A7");
        } 


        if($('#rModaP4').val() == $('#cantLuc').text()){
            notaFinalP4++;
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
            Preg2();
            Preg3();
            Preg4();


           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4();

            var nota1 = (notaFinalP1*3)/15;
            var nota2 = (notaFinalP2);
            var nota3 = (notaFinalP3);
            var nota4 = (notaFinalP4*3)/7;
            
            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        confirmar();        
      });
    });


