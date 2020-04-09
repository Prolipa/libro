
  function Inicio() {
      $(".panel-collapse").removeClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


      var gust0 = 24;
      var gust1 = 25;
      var gust2 = 18;
      var gust3 = 33;

  function Preg1(){            
         var val0 = Math.round(Math.random() * (1000 - 100) + 100);
          var sig = Math.round(Math.random() * (4 - 1) + 1);
          var patron0 = Math.round(Math.random() * (20 - 10) + 10);
          var patron1 = Math.round(Math.random() * (20 - 10) + 10);     

          var contenidos = [];
          contenidos[0] = '<span>a) &nbsp;Patrón:&nbsp;&nbsp;' +
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
      var nMll0 = (Math.round(Math.random() * (30) + 10))*32;
      
      $("#nMll0").append(nMll0);

    }




  function Preg3(){

      var ra0 = (Math.round(Math.random() * (1000) + 10));
      var ra1 = (Math.round(Math.random() * (1000) + 10));
      var calcular = [];

      calcular[0] = ' a) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra0 +'   =   </span><span id="rcal0" style="display: none;">'+  (Math.pow(ra0, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal0" class="form-control respuestas" style="width: 100px;">';

      calcular[1] = ' b) <span class="num">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra1 +'   =   </span><span id="rcal1" style="display: none;">'+  (Math.pow(ra1, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal1" class="form-control respuestas" style="width: 100px;">';

      
      $("#calRaiz0").append(calcular[0]);
      $("#calRaiz1").append(calcular[1]);


  }




  function Preg4(){

      var exra0 = (Math.round(Math.random() * (7 - 2) + 2));
      var exra1 = (Math.round(Math.random() * (7 - 2) + 2));
      var exra2 = (Math.round(Math.random() * (7 - 2) + 2));
      var exra3 = (Math.round(Math.random() * (7 - 2) + 2));


        var ra0 = (Math.round(Math.random() * (15 - 5) + 5));
        var ra1 = (Math.round(Math.random() * (15 - 5) + 5));
        var ra2 = (Math.round(Math.random() * (15 - 5) + 5));
        var ra3 = (Math.round(Math.random() * (15 - 5) + 5));

        var calcular = [];

        calcular[0] = ' a) <span class="num1">&nbsp;&nbsp;'+ ra0 +'<sup id="rcalExPot0">'+exra0+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot0" style="display: none;">'+  (Math.pow(ra0, exra0)) +'</span>' +        
        '<sup><input type="number" id="excalPot0" class="form-control respuestas" style="width: 70px;"></sup>' +
        '<span class="np2">√</span><input type="number" id="calPot0" class="form-control respuestas" style="width: 130px;">';

        calcular[1] = ' b) <span class="num">&nbsp;&nbsp;'+ ra1 +'<sup id="rcalExPot1">'+exra1+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot1" style="display: none;">'+  (Math.pow(ra1, exra1)) +'</span>' +
        '<sup><input type="number" id="excalPot1" class="form-control respuestas" style="width: 70px;"></sup>'+
        '<span class="np2">√</span><input type="number" id="calPot1" class="form-control respuestas" style="width: 130px;">';

        calcular[2] = ' c) <span class="num">&nbsp;&nbsp;'+ ra2 +'<sup id="rcalExPot2">'+exra2+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot2" style="display: none;">'+  (Math.pow(ra2, exra2)) +'</span>' +
        '<sup><input type="number" id="excalPot2" class="form-control respuestas" style="width: 70px;"></sup>'+
        '<span class="np2">√</span><input type="number" id="calPot2" class="form-control respuestas" style="width: 130px;">';

        calcular[3] = ' d) <span class="num">&nbsp;&nbsp;'+ ra3 +'<sup id="rcalExPot3">'+exra3+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot3" style="display: none;">'+  (Math.pow(ra3, exra3)) +'</span>' +
        '<sup><input type="number" id="excalPot3" class="form-control respuestas" style="width: 70px;"></sup>'+
        '<span class="np2">√</span><input type="number" id="calPot3" class="form-control respuestas" style="width: 130px;">';

        
        $("#calPots0").append(calcular[0]);
        $("#calPots1").append(calcular[1]);
        $("#calPots2").append(calcular[2]);
        $("#calPots3").append(calcular[3]);


      //preg6
      var nEs0 = Math.pow((Math.round(Math.random() * (80 - 60) + 60)), 2);
      $("#nEs0").append(nEs0);


      //preg8
      var nJE0 = (Math.round(Math.random() * (300 - 200) + 200));
      $("#nJE0").append(nJE0);
      var nJE1 = (Math.round(Math.random() * (60 - 40) + 40));
      $("#nJE1").append(nJE1);
       var nJE2 = ((Math.random() * (90 - 60) + 60)).toFixed(1);
      $("#nJE2").append(nJE2);



      //preg9
      var nDL0 = Math.round((Math.random() * (5 - 2) + 2));
      $("#nDL0").append(nDL0);
      var nDL1 = Math.round((Math.random() * (9 - 2) + 2));
      $("#nDL1").append(nDL1);



      //preg10
      var nCU0 = Math.round(Math.random() * (9000 - 1000) + 1000);
      $('#nCU0').append(nCU0);
      var nCU1 = Math.round(Math.random() * (900 - 100) + 100);
      $('#nCU1').append(nCU1);
      var nCU2 = Math.round(Math.random() * (90 - 10) + 10);
      $('#nCU2').append(nCU2);
      var nCU3 = Math.round(Math.random() * (900 - 100) + 100);
      $('#nCU3').append(nCU3);

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
    }





    var notaFinalP2 = 0;
      function Resp2(){      
          if(parseFloat($('#rMll0').val()).toFixed() == (parseFloat($('#nMll0').text())/32).toFixed() ) {
          notaFinalP2++;
          $('#rMll0').css("background-color", "#5ED188");
          }else{
            $('#rMll0').css("background-color", "#EF87A7");
          }

      }


      var notaFinalP3 = 0;
      function Resp3(){

        for(var i=0; i<2; i++){
          if(parseFloat($('#cal'+i).val()).toFixed(2) == (parseFloat($('#rcal'+i).text())).toFixed(2) ) {
          notaFinalP3++;
          $('#cal'+i).css("background-color", "#5ED188");
          }else{
            $('#cal'+i).css("background-color", "#EF87A7");
          }
        }        

      }





      var notaFinalP4 = 0;
      function Resp4(){

        for(var i=0; i<4; i++){      
          if(parseInt($('#calPot'+i).val()) == (parseInt($('#rcalPot'+i).text())) && parseInt($('#excalPot'+i).val()) == (parseInt($('#rcalExPot'+i).text())) && parseInt($('#calPot'+i).val()) != '') {
          notaFinalP4++;
          $('#calPot'+i).css("background-color", "#5ED188");
          $('#excalPot'+i).css("background-color", "#5ED188");
          }else{
            $('#calPot'+i).css("background-color", "#EF87A7");
            $('#excalPot'+i).css("background-color", "#EF87A7");
          }
        } 
      }     




      var notaFinalP6 = 0;
      function Resp6(){

        if( (($('#rEs0').val())) == Math.round(Math.pow(($('#nEs0').text()), 1/2)) ) {
          notaFinalP6++;
            $('#rEs0').css("background-color", "#5ED188");
          }else{
            $('#rEs0').css("background-color", "#EF87A7");
          }

      }





      var notaFinalP8 = 0;
      function Resp8(){

          var res = ((parseInt($('#nJE0').text())) - (parseInt($('#nJE1').text())))/2;
          var resp = res+','+res+','+($('#nJE1').text());

          if( (($('#rJE0').val()).replace(/ |<|-/g, "")) == resp ) {
          notaFinalP8++;
            $('#rJE0').css("background-color", "#5ED188");
          }else{
            $('#rJE0').css("background-color", "#EF87A7");
          }


          var resp1 = ((parseFloat($('#nJE1').text())) * (parseFloat($('#nJE2').text())))/2;

          if( (parseFloat($('#rJE1').val())).toFixed() == resp1.toFixed() ) {
          notaFinalP8++;
            $('#rJE1').css("background-color", "#5ED188");
          }else{
            $('#rJE1').css("background-color", "#EF87A7");
          }

      }



      var notaFinalP9 = 0;
      function Resp9(){

        var res = (((parseFloat($('#nDL1').text()))*10000) / (parseFloat($('#nDL0').text())));

          if( (parseFloat($('#rDL0').val())).toFixed() == res.toFixed()) {
            notaFinalP9++;
            $('#rDL0').css("background-color", "#5ED188");
          }else{
            $('#rDL0').css("background-color", "#EF87A7");
          }

      }


      
    var notaFinalP10 = 0;
    function Resp10(){
        var resp;

        for(var i=0; i<4; i++) {
          if(i==0){resp = (parseFloat($('#nCU'+i).text()) / 100);}
          if(i==1){resp = (parseFloat($('#nCU'+i).text()) * 100);}
          if(i==2){resp = (parseFloat($('#nCU'+i).text()) / 100);}
          if(i==3){resp = (parseFloat($('#nCU'+i).text()) / 100);}
        
          if( $('#rCU'+i).val() == resp ){
            notaFinalP10++;
            $('#rCU'+i).css("background-color", "#5ED188");
          }else{
            $('#rCU'+i).css("background-color", "#EF87A7");
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
            Preg4();

           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4(); 
            Resp6();
            Resp8();
            Resp9();
            Resp10();


            var nota1 = (notaFinalP1)/6;
            var nota2 = (notaFinalP2);
            var nota3 = (notaFinalP3)/2;
            var nota4 = (notaFinalP4)/4;
            var nota5 = parseFloat($('#calificacion0').val());
            var nota6 = (notaFinalP6);
            var nota7 = parseFloat($('#calificacion1').val());
            var nota8 = (notaFinalP8)/2;
            var nota9 = (notaFinalP9);
            var nota10 = (notaFinalP10)/4;
            alert(nota1+'_'+nota2+'_'+nota3+'_'+nota4+'_'+nota5+'_'+nota6+'_'+nota7+'_'+nota8+'_'+nota9+'_'+nota10);
            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10).toFixed(2);

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





