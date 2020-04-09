
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
        var pregunta = [];
          var pTermino = (Math.round(Math.random() * (10000) + 10));
          var patron = (Math.round(Math.random() * (100) + 10));
          var pTermino1 = (Math.round(Math.random() * (10) + 10));
          var patron1 = (Math.round(Math.random() * (10) + 2));         

          pregunta[0] = '<span>a) &nbsp;Primer término: <span class="n0" id="pTermino">'+pTermino+'</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          'Patrón: – <span class="np0" id="patronP0">'+patron+'</span></span><br><br>' +
          'Sucesión: <span class="n0">'+pTermino+'</span> – <span class="np0">'+patron+'</span> = <span class="np2">'+(pTermino-patron)+'</span>;&nbsp;' +
          '</span><input type="number" class="form-control" id="p0Suc0" value="'+(pTermino-patron)+'" style="display: none;">' +
          '<input type="number" class="form-control" id="p0Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc5" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc6" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc7" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc8" style="width: 90px;">;';

          pregunta[1] = '<span>b) &nbsp;Primer término: <span class="n0" id="pTermino">'+pTermino1+'</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          'Patrón: x <span class="np0" id="patronP1">'+patron1+'</span></span><br><br>' +
          'Sucesión: <span class="n0">'+pTermino1+', &nbsp;' +
          '</span><input type="number" class="form-control" id="p0Suc9" value="'+(pTermino1)+'" style="display: none;">' +
          '<input type="number" class="form-control" id="p0Suc10" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc11" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc12" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc13" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc14" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc15" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc16" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc17" style="width: 90px;">;';

          $("#pregunta0").append(pregunta[0]);
          $("#pregunta0_1").append(pregunta[1]);
  }



  function Preg2(){            
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




  function Preg3(){

        var exra0 = (Math.round(Math.random() * (9 - 2) + 2));
        var exra1 = (Math.round(Math.random() * (9 - 2) + 2));

        var ra0 = (Math.round(Math.random() * (18 - 5) + 5));
        var ra1 = (Math.round(Math.random() * (18 - 5) + 5));

        var calcular = [];

        calcular[0] = ' a) <span class="num1">&nbsp;&nbsp;'+ ra0 +'<sup id="rcalExPot0">'+exra0+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot0" style="display: none;">'+  (Math.pow(ra0, exra0)) +'</span>' +        
        '<sup><input type="number" id="excalPot0" class="form-control respuestas" style="width: 70px;"></sup>' +
        '<span class="np2">√</span><input type="number" id="calPot0" class="form-control respuestas" style="width: 130px;">';

        calcular[1] = ' b) <span class="num">&nbsp;&nbsp;'+ ra1 +'<sup id="rcalExPot1">'+exra1+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot1" style="display: none;">'+  (Math.pow(ra1, exra1)) +'</span>' +
        '<sup><input type="number" id="excalPot1" class="form-control respuestas" style="width: 70px;"></sup>'+
        '<span class="np2">√</span><input type="number" id="calPot1" class="form-control respuestas" style="width: 130px;">';

        
        $("#calPots0").append(calcular[0]);
        $("#calPots1").append(calcular[1]);


  }




  function Preg4(){

      var nPM0 = (Math.round(Math.random() * (900000 - 100000) + 100000));
      var nPM1 = (Math.round(Math.random() * (9000 - 1000) + 1000));

      $("#nPM0").append(nPM0);
      $("#nPM1").append(nPM1);


      //preg7
      var nFt0 = (Math.round(Math.random() * (900 - 100) + 100));
      $("#nFt0").append(nFt0);

      //preg8
      var nGP0 = (Math.round(Math.random() * (180 - 10) + 10));
      $("#nGP0").append(nGP0);
      $("#n_GP0").append(nGP0);
      var nGP1 = (Math.round(Math.random() * (180 - 10) + 10));
      $("#nGP1").append(nGP1);
      var nGP2 = (Math.round(Math.random() * (180 - 10) + 10));
      $("#nGP2").append(nGP2);
      var nGP3 = (Math.round(Math.random() * (180 - 10) + 10));
      $("#nGP3").append(nGP3);


      //preg9
      var nPCn0 = ((Math.random() * (100 - 50) + 50)).toFixed(1);
      $("#nPCn0").append(nPCn0);
      var nPCn1 = ((Math.random() * (100 - 50) + 50)).toFixed(1);
      $("#nPCn1").append(nPCn1);
      var nPCn2 = ((Math.random() * (100 - 50) + 50)).toFixed();
      $("#nPCn2").append(nPCn2);



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
  for(var i=0; i<9; i++){
        if((parseInt($('#p0Suc'+(i+1)).val())) + ((parseInt($('#patronP0').text()))) == $('#p0Suc'+i).val()) {
          notaFinalP1++;
          $('#p0Suc'+(i+1)).css("background-color", "#5ED188");
        }else{
          $('#p0Suc'+(i+1)).css("background-color", "#EF87A7");
        }
      }  

      for(var i=9; i<18; i++){       
        if((parseInt($('#p0Suc'+(i+1)).val())) / ((parseInt($('#patronP1').text()))) == $('#p0Suc'+i).val()) {
          notaFinalP1++;
          $('#p0Suc'+(i+1)).css("background-color", "#5ED188");
        }else{
          $('#p0Suc'+(i+1)).css("background-color", "#EF87A7");
        }
      }        
    }





    var notaFinalP2 = 0;
      function Resp2(){
      for(var i=0; i<2; i++){
          if(parseFloat($('#cal'+i).val()).toFixed(2) == (parseFloat($('#rcal'+i).text())).toFixed(2) ) {
          notaFinalP2++;
          $('#cal'+i).css("background-color", "#5ED188");
          }else{
            $('#cal'+i).css("background-color", "#EF87A7");
          }
        }     

      }


      var notaFinalP3 = 0;
      function Resp3(){

        for(var i=0; i<2; i++){      
          if(parseInt($('#calPot'+i).val()) == (parseInt($('#rcalPot'+i).text())) && parseInt($('#excalPot'+i).val()) == (parseInt($('#rcalExPot'+i).text())) && parseInt($('#calPot'+i).val()) != '') {
          notaFinalP3++;
          $('#calPot'+i).css("background-color", "#5ED188");
          $('#excalPot'+i).css("background-color", "#5ED188");
          }else{
            $('#calPot'+i).css("background-color", "#EF87A7");
            $('#excalPot'+i).css("background-color", "#EF87A7");
          }
        }       

      }





      var notaFinalP4 = 0;
      function Resp4(){

        var res0 = Math.round(Math.pow(parseInt($('#nPM0').text()), 1/3));
        var res1 = Math.round(Math.pow(parseInt($('#nPM1').text()), 1/2));

          if(parseInt($('#rPM0').val()) == res1 ) {
          notaFinalP4++;
          $('#rPM0').css("background-color", "#5ED188");
          }else{
            $('#rPM0').css("background-color", "#EF87A7");
          }

          if(parseInt($('#rPM1').val()) == res0 ) {
          notaFinalP4++;
          $('#rPM1').css("background-color", "#5ED188");
          }else{
            $('#rPM1').css("background-color", "#EF87A7");
          }

          if( res1 > res0 ) {
            if(($('#rPM2').val()) == 'si'){
              notaFinalP4++;
              $('#rPM2').css("background-color", "#5ED188");
            }else{
              $('#rPM2').css("background-color", "#EF87A7");
            }
          }else{
             if(($('#rPM2').val()) == 'no'){
              notaFinalP4++;
              $('#rPM2').css("background-color", "#5ED188");
            }else{
              $('#rPM2').css("background-color", "#EF87A7");
            }
          }
      }     




      var notaFinalP5 = 0;
      function Resp5(){

        var res = (parseInt($('#nBE0').text())/2)+','+(parseInt($('#nBE0').text())/6)+','+(parseInt($('#nBE0').text())/10)+','+(parseInt($('#nBE0').text())/20);
          if( (($('#rBE0').val()).replace(/ |<|-/g, "").replace(/ |y|-/g, ",")).toString() == res.toString() ) {
          notaFinalP5++;
            $('#rBE0').css("background-color", "#5ED188");
          }else{
            $('#rBE0').css("background-color", "#EF87A7");
          }

      } 





      var notaFinalP7 = 0;
      function Resp7(){

        var res;
        for(var i=0; i<5; i++){
          if(i==0){res = (parseInt($('#nFt0').text()) * (gust1/100));}
          if(i==1){res = (parseInt($('#nFt0').text()) * (gust2/100));}
          if(i==2){res = (parseInt($('#nFt0').text()) * (gust3/100));}
          if(i==3){res = (parseInt($('#nFt0').text()) * (gust1/100)) + (parseInt($('#nFt0').text()) * (gust2/100)) + (parseInt($('#nFt0').text()) * (gust3/100));}
          if(i==4){res = (parseInt($('#nFt0').text()) * (gust0/100));}

          //alert( (parseInt($('#nFt0').text()) * (gust1/100))+' +'+ (parseInt($('#nFt0').text()) * (gust2/100)) +' +'+ (parseInt($('#nFt0').text()) * (gust3/100)));

          if( parseFloat($('#rFt'+i).val()).toFixed() == res.toFixed() ) {
          notaFinalP7++;
            $('#rFt'+i).css("background-color", "#5ED188");
          }else{
            $('#rFt'+i).css("background-color", "#EF87A7");
          }

        }
      }




      var notaFinalP8 = 0;
      function Resp8(){

        var res;
        for(var i=0; i<4; i++){
          res = (parseInt($('#nGP'+i).text()) * 100)/360;
          if( parseFloat($('#rGP'+i).val()).toFixed() == res.toFixed() ) {
          notaFinalP8++;
            $('#rGP'+i).css("background-color", "#5ED188");
          }else{
            $('#rGP'+i).css("background-color", "#EF87A7");
          }

        }
      }



      var notaFinalP9 = 0;
      function Resp9(){

        var res;
          res = (parseFloat($('#nPCn0').text())) + (parseFloat($('#nPCn1').text())) + (parseFloat($('#nPCn2').text())) ;
          if( parseFloat($('#rPCn0').val()) == res) {
          notaFinalP9++;
            $('#rPCn0').css("background-color", "#5ED188");
          }else{
            $('#rPCn0').css("background-color", "#EF87A7");
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
            Resp5();
            Resp7();
            Resp8();
            Resp9();
            Resp10();


            var nota1 = (notaFinalP1)/16;
            var nota2 = (notaFinalP2)/2;
            var nota3 = (notaFinalP3)/2;
            var nota4 = (notaFinalP4)/3;
            var nota5 = (notaFinalP5);
            var nota6 = parseFloat($('#calificacion0').val());
            var nota7 = (notaFinalP7)/5;
            var nota8 = (notaFinalP8)/4;
            var nota9 = (notaFinalP9);
            var nota10 = (notaFinalP10)/4;
           // alert(nota1+'_'+nota2+'_'+nota3+'_'+nota4+'_'+nota5+'_'+nota6+'_'+nota7+'_'+nota8+'_'+nota9+'_'+nota10);
            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

     if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }

      });

       
      


      Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Lucía',
      y: gust0,
    }, {
      name: 'Prima',
      y: gust1
    }, {
      name: 'Amiga',
      y: gust2
    }, {
      name: 'Hermano',
      y: gust3
    }]
  }]
});



});





