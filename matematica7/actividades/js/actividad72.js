
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
       var pregunta = [];
          var val0 = Math.round(Math.random() * (1000 - 100) + 100);
          var sig = Math.round(Math.random() * (4 - 1) + 1);
          var patron0 = Math.round(Math.random() * (20 - 10) + 10);
          var patron1 = Math.round(Math.random() * (20 - 10) + 10);     

          var contenidos = [];
          contenidos[0] = '<span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel0" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron0" class="form-control" style="width: 70px;">,&nbsp;&nbsp;&nbsp;&nbsp; ' +
          '<select class="form-control" id="selMul0" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0PatronMul0" class="form-control" style="width: 70px;"><br><br> ' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="p0T0">'+(val0+(patron0))+'</span>, &nbsp;&nbsp; ' +
          '<span class="n0" id="p0T0_0">'+(val0+(patron0*2))+'</span>, &nbsp;&nbsp; ' +
          '<span class="n0" id="p0T0_1">'+((val0+(patron0*2))*(patron1))+
          ', &nbsp;&nbsp;'+(((val0+(patron0*2))*(patron1))+(patron0))+
          ', &nbsp;&nbsp;'+((((val0+(patron0*2))*(patron1))+(patron0))*(patron1))+
          ', &nbsp;&nbsp;<span class="n0" id="p0T0_fin">'+(((((val0+(patron0*2))*(patron1))+(patron0))*(patron1))+(patron0))+'</span>, </span>' +
          '<input type="number" id="sucMulP1" class="form-control" style="width: 120px;">, ' +
          '<input type="number" id="sucSumP1" class="form-control" style="width: 120px;"><br>';         


          $('#sucesion0').append(contenidos[0]);

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



 

  var notaFinalP1 = 0;
  function Resp1(){
      var operacionSum = 0;
      var operacionMul = 0;

    for(var i=0; i<1; i++){

        operacionSum = (parseInt($('#p0T'+(i)+'_'+(i)).text())) - ((parseInt($('#p0T'+(i)).text())));//suma

        operacionMul = (parseInt($('#p0T'+(i)+'_1').text())) / ((parseInt($('#p0T'+(i)+'_'+(i)).text())));//multiplicacion
  

        if(operacionSum == $('#p0Patron'+i).val()) {
          notaFinalP1++;
          $('#p0Patron'+i).css("background-color", "#5ED188");
          if($('#sel'+i).val() == '+') {
            notaFinalP1++;
            $('#sel'+i).css("background-color", "#5ED188");
          }else{
            $('#sel'+i).css("background-color", "#EF87A7");
          }
        }else{
          $('#p0Patron'+i).css("background-color", "#EF87A7");
          $('#sel'+i).css("background-color", "#EF87A7");
        }

        if($('#sucSumP1').val() == (operacionSum + ($('#p0T0_fin').text() * operacionMul))) {
           notaFinalP1++;
          $('#sucSumP1').css("background-color", "#5ED188");
        }else{
            $('#sucSumP1').css("background-color", "#EF87A7");
        }

        if(operacionMul == $('#p0PatronMul'+i).val()) {
          notaFinalP1++;
          $('#p0PatronMul'+i).css("background-color", "#5ED188");
          if($('#selMul'+i).val() == 'x') {
            notaFinalP1++;
            $('#selMul'+i).css("background-color", "#5ED188");
          }else{
            $('#selMul'+i).css("background-color", "#EF87A7");
          }
        }else{
          $('#p0PatronMul'+i).css("background-color", "#EF87A7");
          $('#selMul'+i).css("background-color", "#EF87A7");
        }

        if($('#sucMulP1').val() == (operacionMul * ($('#p0T0_fin').text()))) {
           notaFinalP1++;
          $('#sucMulP1').css("background-color", "#5ED188");
        }else{
          $('#sucMulP1').css("background-color", "#EF87A7");
        }

      }   


    var d=0;
    var k=1;

    for (j=0;j<9;j++) { 
        while(k <= (parseInt($('#n'+j).text()))) {
          if ((parseInt($('#n'+j).text())) % k == 0){
              d++;  
          }                
          k++;
        }
        if(d==2){
        if($('#p5Sel'+j).val() == 1) {
        notaFinalP1++;
        $('#p5Sel'+j).css("background-color", "#75D685");
        }else{
        $('#p5Sel'+j).css("background-color", "#EF87A7");
        }
      }else{
        if($('#p5Sel'+j).val() == 0) {
        $('#p5Sel'+j).css("background-color", "#75D685");
        notaFinalP1++;
        }else{
        $('#p5Sel'+j).css("background-color", "#EF87A7");
        }
      }
      k=0;
      d=0;
    } 


    }


   var notaFinalP2 = 0;
   function Resp2(){
   var conDatos0 = [];

        conDatos0 = ($('#conDatosP2').text().split(", "));
        conDatos0.sort();

        var sumaConj = 0;
        for(var j=0; j<conDatos0.length; j++){
          sumaConj = sumaConj + (parseInt(conDatos0[j]));
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



  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio();         
            Preg1();
            Preg2();


           function confirmar() {
            Resp1();
            Resp2();

            var nota1 = parseFloat($('#calificacion0').val());
            var nota1_1 = (notaFinalP1)/4;
            var nota2 = parseFloat($('#calificacion1').val());
            var nota2_1 = (notaFinalP2)/2;
            
            var notaFinal = (nota1+nota2+nota1_1+nota2_1).toFixed(2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion0').val() !='' && $('#calificacion1').val() !=''){
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


