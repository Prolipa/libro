var titulos="prueba"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }

              $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
                $(".panel-collapse").removeClass('in');
                $(".panel-collapse").addClass('in');
            });

  function Preg1() {
      var valoresA = [];
      var contenido1 = [];
      var patron = Math.round(Math.random() * (10 - 1) + 1);
      var patron1 = Math.round(Math.random() * (10 - 1) + 1);
      var patron2 = Math.round(Math.random() * (10 - 1) + 1);
      var suc = [];
      var suc1 = [];
      var suc2 = [];
      for (var i = 0; i <= 10; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }
      valoresA = jQuery.unique(valoresA);
      contenido1[0] = '<label>a) Patrón</label><input type="number" placeholder=0 id="patron1" class="patron">';
      contenido1[1] = '<label>b) Patrón</label><input type|||number" placeholder=0 id="patron2" class="patron">';
      contenido1[2] = '<label>c) Patrón</label><input type="number" placeholder=0 id="patron3" class="patron">';
      suc[0] = valoresA[0];
      suc[1] = suc[0] + (2 * patron);
      suc[2] = suc[1] + patron;
      suc1[0] = valoresA[0];
      suc1[1] = suc1[0] + patron1;
      suc1[2] = suc1[1] + (2 * patron1);
      suc2[0] = valoresA[0];
      suc2[1] = suc2[0] + patron2;
      suc2[2] = suc2[1] + (2 * patron2);

      var sucesion = [];
      sucesion[0] = '<label>Sucesión</label>&nbsp;&nbsp;' +
          '<label>' + suc[0] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sA1" class="rS">&nbsp;&nbsp;' +
          '<label id="iniA">' + suc[1] + '</label>&nbsp;&nbsp;' +
          '<label id="finA">' + suc[2] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sA2" class="rS">&nbsp;&nbsp;' +
          '<input type="number" id="sA3" class="rS">';

      sucesion[1] = '<label>Sucesión</label>&nbsp;&nbsp;' +
          '<label id="iniB">' + suc1[0] + '</label>&nbsp;&nbsp;' +
          '<label id="finB">' + suc1[1] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sB1" class="rS">&nbsp;&nbsp;' +
          '<label>' + suc1[2] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sB2" class="rS">&nbsp;&nbsp;' +
          '<input type="number" id="sB3" class="rS">';

      sucesion[2] = '<label>Sucesión</label>&nbsp;&nbsp;' +
          '<label id="iniC">' + suc2[0] + '</label>&nbsp;&nbsp;' +
          '<label id="finC">' + suc2[1] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sB1" class="rS">&nbsp;&nbsp;' +
          '<label>' + suc1[2] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sC2" class="rS">&nbsp;&nbsp;' +
          '<input type="number" id="sC3" class="rS">';

      $("#sucesion1A").append(sucesion[0]);
      $("#contenidolA").append(contenido1[0]);
      $("#sucesion1B").append(sucesion[1]);
      $("#contenido1B").append(contenido1[1]);
      $("#sucesion1C").append(sucesion[2]);
      $("#contenido1C").append(contenido1[2]);
  };

  function Resp1() {

      var nota1 = 0;
      var patron1 = parseInt($('#finA').text()) - parseInt($('#iniA').text());
      var patron2 = parseInt($('#finB').text()) - parseInt($('#iniB').text());
      var patron3 = parseInt($('#finC').text()) - parseInt($('#iniC').text());

      if ($('#patron1').val() == patron1) {
          nota1 = nota1 + 1;
          $('#patron1').css("background-color", "green");
      } else {
          $('#patron1').css("background-color", "red");
      }
      if ($('#patron2').val() == patron2) {
          nota1 = nota1 + 1;
          $('#patron2').css("background-color", "green");
      } else {
          $('#patron2').css("background-color", "red");
      }
      if ($('#patron3').val() == patron3) {
          nota1 = nota1 + 1;
          $('#patron3').css("background-color", "green");
      } else {
          $('#patron3').css("background-color", "red");
      }

      if ($('#sA1').val() == parseInt($('#iniA').text()) - patron1) {
          nota1 = nota1 + 1;
          $('#sA1').css("background-color", "green");
      } else {
          $('#sA1').css("background-color", "red");
      }
      if ($('#sA2').val() == parseInt($('#finA').text()) + patron1) {
          nota1 = nota1 + 1;
          $('#sA2').css("background-color", "green");
      } else {
          $('#sA2').css("background-color", "red");
      }
      if ($('#sA3').val() == parseInt($('#finA').text()) + (2 * patron1)) {
          nota1 = nota1 + 1;
          $('#sA3').css("background-color", "green");
      } else {
          $('#sA3').css("background-color", "red");
      }

      if ($('#sB1').val() == parseInt($('#finB').text()) + patron2) {
          nota1 = nota1 + 1;
          $('#sB1').css("background-color", "green");
      } else {
          $('#sB1').css("background-color", "red");
      }
      if ($('#sB2').val() == parseInt($('#finB').text()) + (3 * patron2)) {
          nota1 = nota1 + 1;
          $('#sB2').css("background-color", "green");
      } else {
          $('#sB2').css("background-color", "red");
      }
      if ($('#sB3').val() == parseInt($('#finB').text()) + (4 * patron2)) {
          nota1 = nota1 + 1;
          $('#sB3').css("background-color", "green");
      } else {
          $('#sB3').css("background-color", "red");
      }

      if ($('#sC1').val() == parseInt($('#finC').text()) + patron3) {
          nota1 = nota1 + 1;
          $('#sC1').css("background-color", "green");
      } else {
          $('#sC1').css("background-color", "red");
      }
      if ($('#sC2').val() == parseInt($('#finC').text()) + (5 * patron3)) {
          nota1 = nota1 + 1;
          $('#sC2').css("background-color", "green");
      } else {
          $('#sC2').css("background-color", "red");
      }
      if ($('#sC3').val() == parseInt($('#finC').text()) + (6 * patron3)) {
          nota1 = nota1 + 1;
          $('#sC3').css("background-color", "green");
      } else {
          $('#sC3').css("background-color", "red");
      }
      var notaf1 = 0;
      notaf1 = (nota1 * 1) / 8;
      notaf1 = notaf1.toFixed(2)
      $("#nota1").text(notaf1);
  }

  function Preg2(){
    var contenido2 = [];
    var valoresA = [];
    var div = [];
    var div1 = [];
    var div2 = [];
    var div3 = [];
    var div4 = [];
    var div5 = [];
    var patron = Math.round(Math.random() * (10 - 1) + 1);
    var patron1 = Math.round(Math.random() * (10 - 1) + 1);
    var patron2 = Math.round(Math.random() * (10 - 1) + 1);
    var patron3 = Math.round(Math.random() * (10 - 1) + 1);
    var patron4 = Math.round(Math.random() * (10 - 1) + 1);
    var patron5 = Math.round(Math.random() * (10 - 1) + 1);

      for (var i = 0; i <= 10; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }

      valoresA = jQuery.unique(valoresA);     

      div[0] = valoresA[0];
      div[1] = div[0] + (2 * patron);

      div1[0] = valoresA[0] + (2 * patron1);
      div1[1] = div1[0] + (2 * patron1);

      div2[0] = valoresA[0] + (2 * patron2);
      div2[1] = div2[0] + (2 * patron2);

      div3[0] = valoresA[0] + (2 * patron3);
      div3[1] = div3[0] + (2 * patron3);

      div4[0] = valoresA[0] + (2 * patron4);
      div4[1] = div4[0] + (2 * patron4);

      div5[0] = valoresA[0] + (2 * patron5);
      div5[1] = div5[0] + (2 * patron5);
     
      var division = [];

      division[0] = '<label>a)</label>&nbsp;&nbsp;' +
          '<label id="divisor1">' + div[1] + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo1"> ' + div[0] + ' = </label>&nbsp;&nbsp;' +
          '<input type="number" id="resd1" class="rS">'+
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';


      division[1] = '<label>a)</label>&nbsp;&nbsp;' +
          '<label id="divisor2">' + div1[1] + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo2"> ' + div1[0] + ' = </label>&nbsp;&nbsp;' +
          '<input type="number" id="resd2" class="rS">'+
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

      division[2] = '<label>a)</label>&nbsp;&nbsp;' +
          '<label id="divisor3">' + div2[1] + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo3"> ' + div2[0] + ' = </label>&nbsp;&nbsp;' +
          '<input type="number" id="resd3" class="rS">'+
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

      division[3] = '<label>a)</label>&nbsp;&nbsp;' +
          '<label id="divisor4">' + div3[1] + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo4"> ' + div3[0] + ' = </label>&nbsp;&nbsp;' +
          '<input type="number" id="resd4" class="rS">'+
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

      division[4] = '<label>a)</label>&nbsp;&nbsp;' +
          '<label id="divisor5">' + div4[1] + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo5"> ' + div4[0] + ' = </label>&nbsp;&nbsp;' +
          '<input type="number" id="resd5" class="rS">'+
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

      division[5] = '<label>a)</label>&nbsp;&nbsp;' +
          '<label id="divisor6">' + div5[1] + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo6"> ' + div5[0] + ' = </label>&nbsp;&nbsp;' +
          '<input type="number" id="resd6" class="rS">'+
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';


      $("#division1").append(division[0]);
      $("#division2").append(division[1]);
      $("#division3").append(division[2]);
      $("#division4").append(division[3]);
      $("#division5").append(division[4]);
      $("#division6").append(division[5]);
  }

  function Resp2(){
    var nota1 = 0;
      var rdiv1 = parseInt($('#divisor1').text()) / parseInt($('#dividendo1').text());
      if ($('#resd1').val() == rdiv1.toFixed(2)) {
          nota1 = nota1 + 1;
          $('#resd1').css("background-color", "green");
      } else {
          $('#resd1').css("background-color", "red");
      }

       var rdiv2 = parseInt($('#divisor2').text()) / parseInt($('#dividendo2').text());
      if ($('#resd2').val() == rdiv2.toFixed(2)) {
          nota1 = nota1 + 1;
          $('#resd2').css("background-color", "green");
      } else {
          $('#resd2').css("background-color", "red");
      }

       var rdiv3 = parseInt($('#divisor3').text()) / parseInt($('#dividendo3').text());
      if ($('#resd3').val() == rdiv3.toFixed(2)) {
          nota1 = nota1 + 1;
          $('#resd3').css("background-color", "green");
      } else {
          $('#resd3').css("background-color", "red");
      }

       var rdiv4 = parseInt($('#divisor4').text()) / parseInt($('#dividendo4').text());
      if ($('#resd4').val() == rdiv4.toFixed(2)) {
          nota1 = nota1 + 1;
          $('#resd4').css("background-color", "green");
      } else {
          $('#resd4').css("background-color", "red");
      }

       var rdiv5 = parseInt($('#divisor5').text()) / parseInt($('#dividendo5').text());
      if ($('#resd5').val() == rdiv5.toFixed(2)) {
          nota1 = nota1 + 1;
          $('#resd5').css("background-color", "green");
      } else {
          $('#resd5').css("background-color", "red");
      }

      var rdiv6 = parseInt($('#divisor6').text()) / parseInt($('#dividendo6').text());
      if ($('#resd6').val() == rdiv6.toFixed(2)) {
          nota1 = nota1 + 1;
          $('#resd6').css("background-color", "green");
      } else {
          $('#resd6').css("background-color", "red");
      }


      var notaf1 = 0;
      notaf1 = (nota1) / 6;
      notaf1 = notaf1.toFixed(2)
      $("#nota2").text(notaf1);
  }

  function Preg3(){

    var division = [];

      division[0] = '<label>Carolina debe pagar cada mes: </label>&nbsp;&nbsp;' +         
          '<input type="number" id="resP" class="rS">'+
          '<textarea class="form-control" rows="2"></textarea>';

          $('#problema').append(division[0]);

  }

  function Resp3(){
     var nota1 = 0;
      
      if ($('#resP').val() == 41) {
          nota1 = nota1 + 1;
          $("#nota3").text('1');
          $('#resP').css("background-color", "green");
      } else {
          $("#nota3").text('0.00');
          $('#resP').css("background-color", "red");
      }
  }


  function Preg4(){
    var valoresA = [];
    var pot = [];

    var repeticiones = Math.floor(Math.random() * 9) + 2;  // returns a random integer from 1 to 10
    

    var patron = Math.floor(Math.random() * 10);
    var patron1 = Math.floor(Math.random() * 10);
    var patron2 = Math.floor(Math.random() * 10);
    var patron3 = Math.floor(Math.random() * 10);
    var patron4 = Math.floor(Math.random() * 10);
    var patron5 = Math.floor(Math.random() * 10);

      for (var i = 0; i <= 10; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }

      valoresA = jQuery.unique(valoresA);     

      pot[0] = valoresA[0];
      pot[1] = pot[0] + (2 * patron);
      pot[2] = pot[1] + (2 * patron1);
      pot[3] = pot[2] + (2 * patron2);
      pot[4] = pot[3] + (2 * patron3);
      pot[5] = pot[4] + (2 * patron4);

    var potencia = [];

      potencia[0] = '<label>a) </label>&nbsp;&nbsp;<label><h3><span class="label label-primary">'+
      '<label id="pot1">' + pot[0] + '</label>&nbsp;' +
      '<label> x ' + pot[0] + ' x </label>&nbsp;' +
      '<label>' + pot[0] + ' x </label>&nbsp;' +
      '<label>' + pot[0] + ' x </label>&nbsp;' +
      '<label>' + pot[0] + ' </label>&nbsp;' +
      '</span>&nbsp;=&nbsp;</h3> </label>' +         
      '<input type="number" id="base1" class="base">' +
      '<sup><input type="number" class="exp" id="exp1"></sup>';

      potencia[1] = '<label>b) </label>&nbsp;<label><h3><span class="label label-primary">'+
      '<label id="pot2">' + pot[1] + '</label>&nbsp;' +
      '<label> x ' + pot[1] + ' x </label>&nbsp;' +
      '<label>' + pot[1] + '</label>&nbsp;' +
      '</span>&nbsp;=&nbsp;</h3> </label>' +         
      '<input type="number" id="base2" class="base">' +
      '<sup><input type="number" class="exp" id="exp2"></sup>';

      potencia[2] = '<label>c) </label>&nbsp;<label><h3><span class="label label-primary">'+
      '<label id="pot3">' + pot[2] + '</label>&nbsp;' +
      '<label> x ' + pot[2] + ' x </label>&nbsp;' +
      '<label>' + pot[2] + ' x </label>&nbsp;' +
      '<label>' + pot[2] + '</label>&nbsp;' +
      '</span>&nbsp;=&nbsp;</h3> </label>' +         
      '<input type="number" id="base3" class="base">' +
      '<sup><input type="number" class="exp" id="exp3"></sup>';

      potencia[3] = '<label>d) </label>&nbsp;<label><h3><span class="label label-primary">'+
      '<label id="pot4">' + pot[3] + '</label>&nbsp;' +
      '<label> x ' + pot[3] + ' x </label>&nbsp;' +
      '<label>' + pot[3] + ' x </label>&nbsp;' +
      '<label>' + pot[3] + ' x </label>&nbsp;' +
      '<label>' + pot[3] + ' x </label>&nbsp;' +
      '<label>' + pot[3] + ' x </label>&nbsp;' +
      '<label>' + pot[3] + ' </label>&nbsp;' +
      '</span>&nbsp;=&nbsp;</h3> </label>' +         
      '<input type="number" id="base4" class="base">' +
      '<sup><input type="number" class="exp" id="exp4"></sup>';

      potencia[4] = '<label>e) </label>&nbsp;<label><h3><span class="label label-primary">'+
      '<label id="pot5">' + pot[4] + '</label>&nbsp;' +
      '<label> x ' + pot[4] + ' x </label>&nbsp;' +
      '<label>' + pot[4] + ' x </label>&nbsp;' +
      '<label>' + pot[4] + ' x </label>&nbsp;' +
      '<label>' + pot[4] + ' </label>&nbsp;' +
      '</span>&nbsp;=&nbsp;</h3> </label>' +         
      '<input type="number" id="base5" class="base">' +
      '<sup><input type="number" class="exp" id="exp5"></sup>';

      potencia[5] = '<label>f) </label>&nbsp;<label><h3><span class="label label-primary">'+
      '<label id="pot6">' + pot[5] + '</label>&nbsp;' +
      '<label> x ' + pot[5] + ' x </label>&nbsp;' +
      '<label>' + pot[5] + ' x </label>&nbsp;' +
      '<label>' + pot[5] + ' x </label>&nbsp;' +
      '<label>' + pot[5] + ' </label>&nbsp;' +
      '</span>&nbsp;=&nbsp;&nbsp;</h3> </label>' +         
      '<input type="number" id="base6" class="base">' +
      '<sup><input type="number" class="exp" id="exp6"></sup>';

          $('#potencia0').append(potencia[0]);
          $('#potencia1').append(potencia[1]);
          $('#potencia2').append(potencia[2]);
          $('#potencia3').append(potencia[3]);
          $('#potencia4').append(potencia[4]);
          $('#potencia5').append(potencia[5]);

  }

  function Resp4(){
   var nota1 = 0;
   var pot = 0;
   var nexp = 0;

  for(var i=1; i<=6; i++){
    var e=('#exp'+i);
    var b=('#base'+i);

    pot = parseInt($('#pot'+i).text());

    if(i==1){
      nexp=5;
    }
    if(i==2){
     nexp=3; 
    }
    if(i==3){
      nexp=4;
    }
    if(i==4){
      nexp=7;
    }
    if(i==5){
      nexp=5;
    }
    if(i==6){
      nexp=5;
    }

      if ($(b).val() == pot && $(e).val() == nexp) {
          nota1 = nota1 + 1;  
          $(b).css("background-color", "green");
          $(e).css("background-color", "green");
      } else {
        if($(b).val() == pot){
          nota1 = nota1 + 0.5;
          $(b).css("background-color", "green");
           $(e).css("background-color", "red");
          }else{
            if($(e).val() == nexp){
               nota1 = nota1 + 0.5;
               $(e).css("background-color", "green");
               $(b).css("background-color", "red");
            }else{
               nota1 = nota1 + 0;
              $(b).css("background-color", "red");
              $(e).css("background-color", "red");
            }          
          }          
      }
  }

      var notaf1 = 0;
      notaf1 = (nota1) / 6;
      notaf1 = notaf1.toFixed(2)
      $("#nota4").text(notaf1);

  }


  function Preg5(){
  var valoresA = [];
    var pot = [];

    var repeticiones = Math.floor(Math.random() * 5) + 2; 

    var patron = Math.floor(Math.random() * (5) + 2);
    var patron1 = Math.floor(Math.random() * (5) + 2);
    var patron2 = Math.floor(Math.random() * (5) + 2);
    var patron3 = Math.floor(Math.random() * (5) + 2);
    var patron4 = Math.floor(Math.random() * (5) + 2);
    var patron5 = Math.floor(Math.random() * (5) + 2);

      for (var i = 0; i <= 9; i++) {
          valoresA[i] = Math.round(Math.random() * (5) + 2);
      }

      valoresA = jQuery.unique(valoresA);     

      pot[0] = valoresA[0];
      pot[1] = pot[0] + (patron);
      pot[2] = pot[1] + (patron1);
      pot[3] = pot[2] + (patron2);
      pot[4] = pot[3] + (patron3);
      pot[5] = pot[4] + (patron4);

     var expot = [];

      expot[0] = '<label id="exBase0">'+pot[0]+'</label><label id="exExp0"><sup>'+patron+'</sup></label>&nbsp;&nbsp; = &nbsp;&nbsp;' +         
          '<input type="text" id="resExP0" class="resExP">&nbsp;&nbsp; = &nbsp;&nbsp;'+ 
          '<input type="numer" id="rExP0" class="rS">';
      expot[1] = '<label id="exBase1">'+pot[1]+'</label><label id="exExp1"><sup>'+patron1+'</sup></label>&nbsp;&nbsp; = &nbsp;&nbsp;' +         
          '<input type="text" id="resExP1" class="resExP">&nbsp;&nbsp; = &nbsp;&nbsp;'+ 
          '<input type="numer" id="rExP1" class="rS">';
      expot[2] = '<label id="exBase2">'+pot[2]+'</label><label id="exExp2"><sup>'+patron2+'</sup></label>&nbsp;&nbsp; = &nbsp;&nbsp;' +         
          '<input type="text" id="resExP2" class="resExP">&nbsp;&nbsp; = &nbsp;&nbsp;'+ 
          '<input type="numer" id="rExP2" class="rS">';
      expot[3] = '<label id="exBase3">'+pot[3]+'</label><label id="exExp3"><sup>'+patron3+'</sup></label>&nbsp;&nbsp; = &nbsp;&nbsp;' +         
          '<input type="text" id="resExP3" class="resExP">&nbsp;&nbsp; = &nbsp;&nbsp;'+ 
          '<input type="numer" id="rExP3" class="rS">';
      expot[4] = '<label id="exBase4">'+pot[4]+'</label><label id="exExp4"><sup>'+patron4+'</sup></label>&nbsp;&nbsp; = &nbsp;&nbsp;' +         
          '<input type="text" id="resExP4" class="resExP">&nbsp;&nbsp; = &nbsp;&nbsp;'+ 
          '<input type="numer" id="rExP4" class="rS">';
      expot[5] = '<label id="exBase5">'+pot[5]+'</label><label id="exExp5"><sup>'+patron5+'</sup></label>&nbsp;&nbsp; = &nbsp;&nbsp;' +         
          '<input type="text" id="resExP5" class="resExP">&nbsp;&nbsp; = &nbsp;&nbsp;'+ 
          '<input type="numer" id="rExP5" class="rS">';


          $('#expot0').append(expot[0]);
          $('#expot1').append(expot[1]);
          $('#expot2').append(expot[2]);
          $('#expot3').append(expot[3]);
          $('#expot4').append(expot[4]);
          $('#expot5').append(expot[5]);


  }


  function Resp5(){
    var nota1 = 0;
    var rexPot = 0;

    for(var i=0; i<=6; i++){
         
  rexPot = Math.pow(parseInt($('#exBase'+i).text()), parseInt($('#exExp'+i).text()));

      if ($('#rExP'+i).val() == rexPot) {
            nota1 = nota1 + 1;
            $('#rExP'+i).css("background-color", "green");
        } else {
            $('#rExP'+i).css("background-color", "red");
        }
    }       

      var notaf1 = 0;
      notaf1 = (nota1) / 6;
      notaf1 = notaf1.toFixed(2)
      $("#nota5").text(notaf1);
  }

    function Preg6(){

    var problema = [];
      problema[0] = '<textarea class="form-control" rows="2"></textarea>';
          $('#textoProblema').append(problema[0]);
    }


    function Preg7(){

    var valEstad = [];
    var cuadroEstad = [];   

      valEstad[0] = Math.floor(Math.random() * 100) + 1;
      valEstad[1] = Math.floor(Math.random() * 100) + 1;
      valEstad[2] = Math.floor(Math.random() * 100) + 1;
      valEstad[3] = Math.floor(Math.random() * 100) + 1;
      valEstad[4] = Math.floor(Math.random() * 100) + 1;     

      cuadroEstad[0] = 'En el bar de la escuela se registraron los alimentos ' +
                  'que más se consumieron en el día. Estos fueron <span class="n0" id="estN0">' + valEstad[0] +
                  '</span> sánduches, <span class="n1" id="estN1">'+ valEstad[1] +
                  '</span> refrescos, <span class="n2" id="estN2">'+ valEstad[2] +
                  '</span> porciones de fruta, <span class="n3" id="estN3">' + valEstad[3] + 
                  '</span> paquetitos de galletas y <span class="n4" id="estN4">'+ valEstad[4] +'</span> fundas de papas fritas.';

      $("#cuadroEstad").append(cuadroEstad[0]);
      
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
      Preg5();
      Preg6();
      Preg7();

      function datos(i) {   


        if($("#nota2").val()==""){
         alertify.prompt("Introducir nota para la pregunta 2 sobre 1:", function (e, str) {
          if (e){
              alertify.success("Has introducido la nota: " + str);
              $("#nota2").val(str);
              $("#nota2").text(str);
              datos(1);             
            }else{
              alertify.error("No has ingresado la nota");
              datos(1);
            }
          });
         return false;
       } 

         if($("#nota6").val()==""){
         alertify.prompt("Introducir nota para la pregunta 6 sobre 1:", function (e, str) {
          if (e){
              alertify.success("Has introducido la nota: " + str);
              $("#nota6").val(str);
              $("#nota6").text(str);
              datos(1);             
            }else{
              alertify.error("No has ingresado la nota");
              datos(1);
            }
          });
         return false;
       } 

       if($("#nota7").val()==""){
         alertify.prompt("Introducir nota para la pregunta 7 sobre 1:", function (e, str) {
          if (e){
              alertify.success("Has introducido la nota: " + str);
              $("#nota7").val(str);
              $("#nota7").text(str);
              datos(1);             
            }else{
              alertify.error("No has ingresado la nota");
              datos(1);
            }
          });
         return false;
       } 

       if($("#nota8").val()==""){
         alertify.prompt("Introducir nota para la pregunta 8 sobre 1:", function (e, str) {
          if (e){
              alertify.success("Has introducido la nota: " + str);
              $("#nota8").val(str);
              $("#nota8").text(str);
              datos(1);             
            }else{
              alertify.error("No has ingresado la nota");
              datos(1);
            }
          });
         return false;
       }               
         confirmar();          
      }

     function confirmar() {
      if($("#nota2").val()=="" || $("#nota6").val()=="" || $("#nota7").val()=="" || $("#nota8").val()==""){
          datos(1);
      }
      else{
              alertify.confirm("<h3>Desea calificar la evaluación?</h3>", function(e) {
                  if (e) {
                      Resp1();
                      Resp3();
                      Resp4();
                      Resp5();

                      debugger;
                      var notaFinal = 0;

                      var nota1 = parseFloat($("#nota1").text());
                      var nota2 = parseFloat($("#nota2").text());
                      var nota3 = parseFloat($("#nota3").text());
                      var nota4 = parseFloat($("#nota4").text());
                      var nota5 = parseFloat($("#nota5").text());
                      var nota6 = parseFloat($("#nota6").text());
                      var nota7 = parseFloat($("#nota7").text());
                      var nota8 = parseFloat($("#nota8").text());

                      notaFinal = nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8;

                      notaFinal = ((notaFinal*10)/8).toFixed(2);

                      $("#txtNota").text(notaFinal + "/10");
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);
                      alertify.success("La evaluacion ha sido calificada:'" + notaFinal + "'");
                  } else {
                      alertify.error("Has pulsado '" + +"'");
                  }
              });
              return false
          }
      }

      $("#Calificar").click(function() {
          datos(1)          
      });

 var valTemp = [];
      valTemp[0] = Math.floor(Math.random() * 50) + 1;
      valTemp[1] = Math.floor(Math.random() * 50) + 1;
      valTemp[2] = Math.floor(Math.random() * 50) + 1;
      valTemp[3] = Math.floor(Math.random() * 50) + 1;
      valTemp[4] = Math.floor(Math.random() * 50) + 1;  
      valTemp[5] = Math.floor(Math.random() * 50) + 1;  
      valTemp[6] = Math.floor(Math.random() * 50) + 1;  


      Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Temperatura promedio de la semana pasada'
    },
     yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    xAxis: {
        categories: [
            'Temperatura°'
        ],
        crosshair: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
    {
        name: 'Lunes',
        data: [valTemp[0]]

    },
    {
        name: 'Martes',
        data: [valTemp[1]]

    },{
        name: 'Miércoles',
        data: [valTemp[2]]

    },{
        name: 'Jueves',
        data: [valTemp[3]]

    },{
        name: 'Viernes',
        data: [valTemp[4]]

    },{
        name: 'Sábado',
        data: [valTemp[5]]

    },{
        name: 'Domingo',
        data: [valTemp[6]]

    }]
});
  });




