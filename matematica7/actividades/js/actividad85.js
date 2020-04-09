
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
      var ra0 = (Math.round(Math.random() * (1000) + 10));
      var ra1 = (Math.round(Math.random() * (1000) + 10));
      var ra2 = (Math.round(Math.random() * (1000) + 10));

      var calcular = [];

      calcular[0] = ' a) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra0 +'   =   </span><span id="rcal0" style="display: none;">'+  (Math.pow(ra0, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal0" class="form-control respuestas" style="width: 100px;">';

      calcular[1] = ' b) <span class="num">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra1 +'   =   </span><span id="rcal1" style="display: none;">'+  (Math.pow(ra1, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal1" class="form-control respuestas" style="width: 100px;">';

      calcular[2] = ' c) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra2 +'   =   </span><span id="rcal2" style="display: none;">'+  (Math.pow(ra2, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal2" class="form-control respuestas" style="width: 100px;">';

      
      $("#calRaiz0").append(calcular[0]);
      $("#calRaiz1").append(calcular[1]);
      $("#calRaiz2").append(calcular[2]);

    }




  function Preg3(){

      var nExRad0 = (Math.round(Math.random() * (9 - 2) + 2));
      var nRad0 = (Math.round(Math.random() * (9 - 2) + 2));
      var nExRad1 = (Math.round(Math.random() * (9 - 2) + 2));
      var nRad1 = (Math.round(Math.random() * (9 - 2) + 2));
      var nExRad2 = (Math.round(Math.random() * (9 - 2) + 2));
      var nRad2 = (Math.round(Math.random() * (9 - 2) + 2));
      var nExRad3 = (Math.round(Math.random() * (9 - 2) + 2));
      var nRad3 = (Math.round(Math.random() * (9 - 2) + 2));

      
      $("#nExRad0").append(nExRad0);
      $("#nRad0").append(nRad0);
      $("#nExRad1").append(nExRad1);
      $("#nRad1").append(nRad1);
      $("#nExRad2").append(nExRad2);
      $("#nRad2").append(nRad2);
      $("#nExRad3").append(nExRad3);
      $("#nRad3").append(nRad3);

  }




  function Preg4(){

      var nJ0 = (Math.round(Math.random() * (30 - 10) + 10));
      var nJ1 = (Math.round(Math.random() * (30 - 10) + 10));

      $("#nJ0").append(nJ0);
      $("#nJ1").append(nJ1);

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
      for(var i=0; i<3; i++){
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

        var rPD;
        var nPD;
        var ac;
        var rRad;

        for(var i=0; i<4; i++){

            rPD = ((($('#rPD'+i).val()).replace(/ |√|<|-/g, "")).toLowerCase().split('x'));
            nPD = Math.pow((parseInt($('#nRad'+i).text())), (parseInt($('#nExRad'+i).text())));
            ac = 1;
            for(var j=0; j<rPD.length; j++){
                ac = ac * rPD[j];
            }

            if(nPD == ac && parseInt($('#resPD'+i).val()) == ac ){
              notaFinalP3++     
              $('#rPD'+i).css("background-color", "#5ED188");
              $('#resPD'+i).css("background-color", "#5ED188");
            }else{
              $('#rPD'+i).css("background-color", "#EF87A7");
              $('#resPD'+i).css("background-color", "#EF87A7");
            }


            rRad = Math.round(Math.pow(nPD, 1/(parseInt($('#nExRad'+i).text()))));
            if(parseInt($('#resRad'+i).val()) == rRad && parseInt($('#resPD'+i).val()) == ac ){
              notaFinalP3++
              $('#resRad'+i).css("background-color", "#5ED188");
              $('#rexRad'+i).css("background-color", "#5ED188");
              $('#rbasRad'+i).css("background-color", "#5ED188");
            }else{
              $('#resRad'+i).css("background-color", "#EF87A7");
              $('#rexRad'+i).css("background-color", "#EF87A7");
              $('#rbasRad'+i).css("background-color", "#EF87A7");
            }

        }        

      }





      var notaFinalP4 = 0;
      function Resp4(){
        var res = parseInt($('#nJ0').text()) * parseInt($('#nJ1').text());

          if(parseInt($('#rAr0').val()) == res ) {
          notaFinalP4++;
          $('#rAr0').css("background-color", "#5ED188");
          }else{
            $('#rAr0').css("background-color", "#EF87A7");
          }

          if(parseInt($('#rAc1').val()) == res ) {
          notaFinalP4++;
          $('#rAc1').css("background-color", "#5ED188");
          }else{
            $('#rAc1').css("background-color", "#EF87A7");
          }

          
          if(Math.round(parseFloat($('#rLj0').val())) == Math.round(Math.pow(res,(1/2))) ) {
          notaFinalP4++;
          $('#rLj0').css("background-color", "#5ED188");
          }else{
            $('#rLj0').css("background-color", "#EF87A7");
          }

          if(Math.round(parseFloat($('#rC0').val())) == Math.round(Math.pow(res,(1/2))) ) {
          notaFinalP4++;
          $('#rC0').css("background-color", "#5ED188");
          }else{
            $('#rC0').css("background-color", "#EF87A7");
          }

          if( parseFloat($('#rCl0').val()) == 7.5 ) {
          notaFinalP4++;
          $('#rCl0').css("background-color", "#5ED188");
          }else{
            $('#rCl0').css("background-color", "#EF87A7");
          }

          if( parseFloat($('#rCl1').val()) == 8.75 ) {
          notaFinalP4++;
          $('#rCl1').css("background-color", "#5ED188");
          }else{
            $('#rCl1').css("background-color", "#EF87A7");
          }

          if( parseFloat($('#rHs0').val()) == 4.8 ) {
          notaFinalP4++;
          $('#rHs0').css("background-color", "#5ED188");
          }else{
            $('#rHs0').css("background-color", "#EF87A7");
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


            var nota1 = (notaFinalP1)/6;
            var nota2 = (notaFinalP2)/3;
            var nota3 = (notaFinalP3*1.5)/8;
            var nota4 = (notaFinalP4)/7;
            var nota5 = parseFloat($('#calificacion0').val());
            var nota6 = parseFloat($('#calificacion1').val());
            var nota7 = parseFloat($('#calificacion2').val());

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7);//10

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

       
      var gust0 = Math.round(Math.random() * (40 - 5) + 5);
      var gust1 = Math.round(Math.random() * (40 - 5) + 5);
      var gust2 = Math.round(Math.random() * (40 - 5) + 5);
      var gust3 = Math.round(Math.random() * (40 - 5) + 5);
      var gust4 = Math.round(Math.random() * (40 - 5) + 5);
      var gust5 = Math.round(Math.random() * (40 - 5) + 5);
      var gust6 = Math.round(Math.random() * (40 - 5) + 5);


      Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Gustos musicales'
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
      name: 'Clásica',
      y: gust0,
    }, {
      name: 'Rock',
      y: gust1
    }, {
      name: 'Cumbia',
      y: gust2
    }, {
      name: 'Salsa',
      y: gust3
    }, {
      name: 'Merengue',
      y: gust4
    }, {
      name: 'Bolero',
      y: gust5
    }, {
      name: 'Pasillo',
      y: gust6
    }]
  }]
});



});





