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

          var patron0 = (Math.round(Math.random() * (10000) + 100)) * 3;
          var patron1 = (Math.round(Math.random() * (10000) + 100)) * 3;
          var patron2 = (Math.round(Math.random() * (10000) + 100)) * 3;
          var patron3 = (Math.round(Math.random() * (10000) + 100)) * 7;
          var patron4 = (Math.round(Math.random() * (10000) + 100)) * 7;
          var patron5 = (Math.round(Math.random() * (10000) + 100)) * 7;
          var patron6 = (Math.round(Math.random() * (1000) + 100)) * 11;
          var patron7 = (Math.round(Math.random() * (1000) + 100)) * 11;
          var patron8 = (Math.round(Math.random() * (1000) + 100)) * 11;
          
          var divisible = [];

          divisible[0] = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="num" id="patron0"> ' + patron0 + ' </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<span class="num1" id="patron1"> ' + patron1 + ' </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<span class="num2" id="patron2"> ' + patron2 + ' </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<span class="num" id="patron3"> ' + patron3 + ' </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<span class="num1" id="patron4"> ' + patron4 + ' </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<span class="num2" id="patron5"> ' + patron5 + ' </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<span class="num" id="patron6"> ' + patron6 + ' </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
          '<span class="num1" id="patron7"> ' + patron7 + ' </span>';

          $("#divisible0").append(divisible[0]);          

      }

  var notaFinalP1_1 = 0;
  function Resp1(){

  /////////////divisibles para 3
      var divisibles3 = [];
      var divs3 = [];
      var c = 0;
      var notaDivs3 = 0;
      var ingDivs = [];//numeros ingresados correctos      
      var k=0;

      divs3 = $('#divs3').val().split("\n");//llenar array con los valores divisbles para 3 ingresados

      for(var i=0; i<8; i++){ //llenar array con los valores divisbles para 3 generados
        if((parseInt($('#patron'+i).text())) % 3 == 0) {
          divisibles3[i] = (parseInt($('#patron'+i).text()));    
           c++;      
        }
      }
      var ds3=  divisibles3.sort(function(a, b){return a-b});
      ds3.splice((c), ds3.length);//eliminar espacios en blanco

  if(divs3 != ''){      
      for(var i=0;i<ds3.length;i++){
        for(var j=0;j<ds3.length;j++){
          if(ds3[i] == divs3[j] && ds3[i] != null && divs3[j] != null){
              ingDivs[j] = divs3[j];
              k++;
          }
        }        
      }      
      ingDivs.sort(function(a, b){return a-b});
      ingDivs.splice((k), ingDivs.length);//eliminamos espacios en blanco
      document.getElementById('divs3').value += "\n" + "Correctos: " + ingDivs;

      var cantAcertados = Math.abs(ingDivs.length - ds3.length);
      document.getElementById('divs3').value += "\n" + "FALTARON " + cantAcertados + " NÚMEROS.";

      notaDivs3 = ((((ingDivs.length*10)/ds3.length)).toFixed(2));      
      if(cantAcertados == 0){
        if(ds3.length < divs3.length){
          notaDivs3 = notaDivs3 - 1;
          $('#divs3').css("background-color", "#EF87A7");
        }else{          
           $('#divs3').css("background-color", "#6FDD83");
        }       
      }else{
        $('#divs3').css("background-color", "#EF87A7");
      }      
  }else{
        document.getElementById('divs3').value = " ";
        $('#divs3').css("background-color", "#EF87A7");
        notaDivs3 = 0;
    }  



//////////////divisibles para 7
      var divisibles7 = [];
      var divs7 = [];
      var c7 = 0;
      var notaDivs7 = 0;
      var ingDivs7 = [];//numeros ingresados correctos      
      var k7=0;

      divs7 = $('#divs7').val().split("\n");//llenar array con los valores divisbles para 7 ingresados

      for(var i=0; i<8; i++){ //llenar array con los valores divisbles para 7 generados
        if((parseInt($('#patron'+i).text())) % 7 == 0) {
          divisibles7[i] = (parseInt($('#patron'+i).text()));    
           c7++;      
        }
      }
      var ds7=  divisibles7.sort(function(a, b){return a-b});
      ds7.splice((c7), ds7.length);//eliminar espacios en blanco

  if(divs7 != ''){      
      for(var i=0;i<ds7.length;i++){
        for(var j=0;j<ds7.length;j++){
          if(ds7[i] == divs7[j] && ds7[i] != null && divs7[j] != null){
              ingDivs7[j] = divs7[j];
              k7++;
          }
        }        
      }      
      ingDivs7.sort(function(a, b){return a-b});
      ingDivs7.splice((k7), ingDivs7.length);//eliminamos espacios en blanco
      document.getElementById('divs7').value += "\n" + "Correctos: " + ingDivs7;

      var cantAcertados7 = Math.abs(ingDivs7.length - ds7.length);
      document.getElementById('divs7').value += "\n" + "FALTARON " + cantAcertados7 + " NÚMEROS.";

      notaDivs7 = ((((ingDivs7.length*10)/ds7.length)).toFixed(2));      
      if(cantAcertados7 == 0){
        if(ds7.length < divs7.length){
          notaDivs7 = notaDivs7 - 1;
          $('#divs7').css("background-color", "#EF87A7");
        }else{          
           $('#divs7').css("background-color", "#6FDD83");
        }       
      }else{
        $('#divs7').css("background-color", "#EF87A7");
      }      
  }else{
        document.getElementById('divs7').value = " ";
        $('#divs7').css("background-color", "#EF87A7");
        notaDivs7 = 0;
    }  



//////////////////divisibles para 11
      var divisibles11 = [];
      var divs11 = [];
      var c11 = 0;
      var notaDivs11 = 0;
      var ingDivs11 = [];//numeros ingresados correctos      
      var k11=0;

      divs11 = $('#divs11').val().split("\n");//llenar array con los valores divisbles para 11 ingresados

      for(var i=0; i<8; i++){ //llenar array con los valores divisbles para 11 generados
        if((parseInt($('#patron'+i).text())) % 11 == 0) {
          divisibles11[i] = (parseInt($('#patron'+i).text()));    
           c11++;      
        }
      }
      var ds11=  divisibles11.sort(function(a, b){return a-b});
      ds11.splice((c11), ds11.length);//eliminar espacios en blanco

  if(divs11 != ''){      
      for(var i=0;i<ds11.length;i++){
        for(var j=0;j<ds11.length;j++){
          if(ds11[i] == divs11[j] && ds11[i] != null && divs11[j] != null){
              ingDivs11[j] = divs11[j];
              k11++;
          }
        }        
      }      
      ingDivs11.sort(function(a, b){return a-b});
      ingDivs11.splice((k11), ingDivs11.length);//eliminamos espacios en blanco
      document.getElementById('divs11').value += "\n" + "Correctos: " + ingDivs11;

      var cantAcertados11 = Math.abs(ingDivs11.length - ds11.length);
      document.getElementById('divs11').value += "\n" + "FALTARON " + cantAcertados11 + " NÚMEROS.";

      notaDivs11 = ((((ingDivs11.length*10)/ds11.length)).toFixed(2));      
      if(cantAcertados11 == 0){
        if(ds11.length < divs11.length){
          notaDivs11 = notaDivs11 - 1;
          $('#divs11').css("background-color", "#EF87A7");
        }else{          
           $('#divs11').css("background-color", "#6FDD83");
        }       
      }else{
        $('#divs11').css("background-color", "#EF87A7");
      }      
  }else{
        document.getElementById('divs11').value = " ";
        $('#divs11').css("background-color", "#EF87A7");
        notaDivs11 = 0;
    }


     var notaFinalP1 = ((((notaDivs3+notaDivs7+notaDivs11)/3).toFixed(2))*2.5)/10; //sobre2.5
     notaFinalP1_1 = notaFinalP1;
  }


  function Preg2(){
          var p0 = (Math.round(Math.random() * (10000) + 100)) * 3;
          var p1 = (Math.round(Math.random() * (10000) + 100)) * 3;
          var p2 = (Math.round(Math.random() * (10000) + 100)) * 3;
          var p3 = (Math.round(Math.random() * (10000) + 100)) * 7;
          var p4 = (Math.round(Math.random() * (10000) + 100)) * 7;
          var p5 = (Math.round(Math.random() * (10000) + 100)) * 7;
          var p6 = (Math.round(Math.random() * (1000) + 100)) * 11;
          var p7 = (Math.round(Math.random() * (1000) + 100)) * 11;

      var divisible = [];

      divisible[0] = '<tr>' +
       '<td colspan="6" style="background-color: #FF0051;" align="center"><span class="encabezados">Número</span></td>' +
       '<td colspan="2" style="background-color: #A851CD;" align="center"><span class="encabezados">3</span></td>' +
       '<td colspan="2" style="background-color: #5ED178;" align="center"><span class="encabezados">7</span></td>' +
       '<td colspan="2" style="background-color: #5ED1CE;" align="center"><span class="encabezados">11</span></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="6"><span class="n1" id="val0">' + p0 + '</span></td>' +
       '<td colspan="2"><select id="s1" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s2" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s3" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="6"><span class="n1" id="val1">' + p1 + '</span></td>' +
       '<td colspan="2"><select id="s4" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s5" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s6" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="6"><span class="n1" id="val2">' + p3 + '</span></td>' +
       '<td colspan="2"><select id="s7" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s8" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s9" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="6"><span class="n1" id="val3">' + p6 + '</span></td>' +
       '<td colspan="2"><select id="s10" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s11" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s12" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> '+
      '<tr>' +
       '<td colspan="6"><span class="n1" id="val4">' + p7 + '</span></td>' +
       '<td colspan="2"><select id="s13" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s14" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="2"><select id="s15" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ';          



      divisible[1] = '<tr>' +
       '<td colspan="1" style="background-color: #FF0051;" align="center"><span class="encabezados" id="div0">Número</span></td>' +
       '<td colspan="11" style="background-color: #A851CD;" align="center"><span class="encabezados" id="div0">Criterio</span></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div1">' + p0 + '</span></td>' +
       '<td colspan="11"><textarea class="form-control" style="font-size: 15px; color: #6D1EB6;"></textarea></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div2">' + p4 + '</span></td>' +
       '<td colspan="11"><textarea class="form-control" style="font-size: 15px; color: #6D1EB6;"></textarea></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div3">' + p5 + '</span></td>' +
       '<td colspan="11"><textarea class="form-control" style="font-size: 15px; color: #6D1EB6;"></textarea></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div4">' + p6 + '</span></td>' +
       '<td colspan="11"><textarea class="form-control" style="font-size: 15px; color: #6D1EB6;"></textarea></td>' +
      '</tr> ';          

          $("#tablaDivisibles").append(divisible[0]);
          $("#tablaCriterios").append(divisible[1]);          
      }


var notaFinalP2 = 0;
  function Resp2(){
     ///validar si es divisible para 3          
           var k=0;
          for(var l=1; l<8; l++){                     
            if(l == 1){
              k=1;
            }else{
              k=k+3;
            }
            if((parseInt($('#val'+(l-1)).text()) % 3 == 0 )){
                if($('#s'+k).val() == '0') {
                notaFinalP2++;
                $('#s'+k).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+k).css("background-color", "#EF87A7");
                }                            
            }else{
              if(k<=13){
              if($('#s'+k).val() == '1') {
                 $('#s'+k).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+k).css("background-color", "#EF87A7");
              }
              }              
            }
          }


    ///validar si es divisible para 7
    var h=0;
          for(var m=2; m<15; m++){                     
            if(m == 2){
              h=2;
            }else{
              h=h+3;
            }
            if((parseInt($('#val'+(m-2)).text()) % 7 == 0 )){
                if($('#s'+h).val() == '0') {
                notaFinalP2++;
                $('#s'+h).css("background-color", "#5ED188");
                }else{
                //notaFinalP2--;
                $('#s'+h).css("background-color", "#EF87A7");
                }                            
            }else{
              if(h<=14){
               if($('#s'+h).val() == '1') {
                 $('#s'+h).css("background-color", "#5ED188");
                 notaFinalP2++;
              }else{
               // notaFinalP2--;
                $('#s'+h).css("background-color", "#EF87A7");
              }   
             }   
            }
          }

    ///validar si es divisible para 11          
          var j=3;
          for(var i=0; i<16; i++){            
            if(i==0){
              j=3;
            }else{              
              j=j+3;
            }
            if((parseInt($('#val'+i).text()) % 11 == 0 )){
                if($('#s'+j).val() == '0') {
                  notaFinalP2++;
                $('#s'+j).css("background-color", "#5ED188");
                }else{
                 // notaFinalP2--;
                  $('#s'+j).css("background-color", "#EF87A7");
                }                            
            }else{
              if(j<=15){
               if($('#s'+j).val() == '1') {
                 $('#s'+j).css("background-color", "#5ED188");
                 notaFinalP2++;
              }else{
                //notaFinalP2--;
                $('#s'+j).css("background-color", "#EF87A7");
              } 
             }
            }
          }
  }

    function Preg4(){

          var valProblema = (Math.round(Math.random() * (100) + 1))*7;                
          var problema = [];
          problema[0] = '<span>Santiago dice que el número <span class="n1"> ' + valProblema + ' </span>es divisible por 3, 7 y 11. <br>' +
                        'Catalina manifiesta que lo que dice su compañero de clase no es del todo cierto. ' +
                        'Sostiene que hay un error. ¿Cuál es el error? <br> Demuestra tu respuesta. </span>'+
                        '<br><br><textarea class="form-control" style="font-size: 17px; color: #6D1EB6;" id="prob0"></textarea>';




          $("#problema").append(problema[0]);
      }




      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg2();
            Preg4();

           function confirmar() {
            Resp1();
            Resp2();

            var nota0 = parseFloat($('#calificacion0').val());
            var nota1 = parseFloat($('#calificacion0').val());

            var notaFinal = (nota0+nota1+notaFinalP1_1+((notaFinalP2/15)*2.5)).toFixed(2);

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
