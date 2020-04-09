
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

  function Preg3(){

          var problema = [];

          var mcdP0 = Math.round(Math.random() * (5 - 2) + 2)*5;
          var mcdP1 = Math.round(Math.random() * (5 - 2) + 2)*5;
          var mcdP2 = Math.round(Math.random() * (10 - 5) + 5)*5;
          var mcdP3 = Math.round(Math.random() * (10 - 5) + 5)*5;       

          problema[0] = 'a) Andrés practica natación cada <span class="n0" id="numP2Mcd0"> '+mcdP0+
          '</span> días y fútbol cada <span class="n0" id="numP2Mcd1">'+mcdP1+'</span> días. Si hoy practica natación y fútbol, ' +
          '¿a los cuántos días volverá a practicar los dos deportes juntos?';

          problema[1] = 'b) Patricia tiene un almacén de productos de belleza y quiere enviar en cajas y a otra ciudad ' +
          '<span class="n0" id="numP3Mcd0">'+mcdP2+
          '</span> cremas de hombre y <span class="n0" id="numP3Mcd1">'+mcdP3+
          '</span> cremas de mujer. Cada caja debe tener el mismo número de cremas de hombre y de mujer. ' +
          '¿Cuál es el número de cajas que puede enviar? ¿Cuántas cremas de cada clase enviará en cada caja?';

          $("#problemaP3_1").append(problema[0]);
          $("#problemaP3_2").append(problema[1]);


          //Pregunta 2
          var p0 = Math.round(Math.random() * (50 - 10) + 10);
          var p1 = Math.round(Math.random() * (9 - 4) + 4);

          $("#nh0").append(p0); 
          $("#nh1").append(p1); 
          
  }


  function Preg4(){
    var radical0 = Math.round(Math.random() * (3 - 2) + 2);
    var radicando0 = Math.pow((Math.round(Math.random() * (20 - 5) + 5)),radical0);
    var radical1 = Math.round(Math.random() * (3 - 2) + 2);
    var radicando1 = Math.pow((Math.round(Math.random() * (20 - 5) + 5)),radical1);
    var radical2 = Math.round(Math.random() * (3 - 2) + 2);
    var radicando2 = Math.pow((Math.round(Math.random() * (20 - 5) + 5)),radical2);
    var radical3 = Math.round(Math.random() * (3 - 2) + 2);
    var radicando3 = Math.pow((Math.round(Math.random() * (20 - 5) + 5)),radical3);



    $("#radical0").append(radical0); 
    $("#radicando0").append(radicando0); 
    $("#radical1").append(radical1); 
    $("#radicando1").append(radicando1); 
    $("#radical2").append(radical2); 
    $("#radicando2").append(radicando2); 
    $("#radical3").append(radical3); 
    $("#radicando3").append(radicando3); 
  }

    function Preg5(){

        var rad0 = Math.floor(Math.random() * (4 - 2)) + 2;
        var p0 = Math.pow(Math.round(Math.random() * (100) + 5), rad0);
        var rad1 = Math.floor(Math.random() * (4 - 2)) + 2;
        var p1 = Math.pow(Math.round(Math.random() * (100) + 5), rad1);
        var rad2 = Math.floor(Math.random() * (4 - 2)) + 2;
        var p2 = Math.pow(Math.round(Math.random() * (100) + 5), rad2);
        var rad3 = Math.floor(Math.random() * (4 - 2)) + 2;
        var p3 = Math.pow(Math.round(Math.random() * (100) + 5), rad3);
        var rad4 = Math.floor(Math.random() * (4 - 2)) + 2;
        var p4 = Math.pow(Math.round(Math.random() * (100) + 5), rad4);
        var rad5 = Math.floor(Math.random() * (4 - 2)) + 2;
        var p5 = Math.pow(Math.round(Math.random() * (100) + 5), rad5);
          
      $("#rP10Num0").text(p0);
      $("#rP10Sup0").text(rad0);

      $("#rP10Num1").text(p1);
      $("#rP10Sup1").text(rad1);

      $("#rP10Num2").text(p2);
      $("#rP10Sup2").text(rad2);

      $("#rP10Num3").text(p3);
      $("#rP10Sup3").text(rad3);

      $("#rP10Num4").text(p4);
      $("#rP10Sup4").text(rad4);

      $("#rP10Num5").text(p5);
      $("#rP10Sup5").text(rad5);

    }


    function Preg6(){

      var p1 = Math.round(Math.random() * (200 - 20) + 20);
      var p2 = Math.round(Math.random() * (200 - 20) + 20);
      var p3 = Math.round(Math.random() * (200 - 20) + 20);
      var p4 = Math.round(Math.random() * (200 - 20) + 20);
            
          $("#in0").append(p1);
          $("#in1").append(p2);
          $("#in2").append(p3);
          $("#in3").append(p4);

          $("#in4").append(p1+p2+p3+p4);
    }


    function Preg7(){
       var p0 = Math.round(Math.random() * (12 - 1) + 1);
        var p1 = Math.round(Math.random() * (12 - 1) + 1);
         var p2 = Math.round(Math.random() * (12 - 1) + 1);
          var p3 = Math.round(Math.random() * (12 - 1) + 1);
           var p4 = Math.round(Math.random() * (12 - 1) + 1);
            var p5 = Math.round(Math.random() * (12 - 1) + 1);

      
              Highcharts.chart('container', {
                chart: {
                  type: 'column'
                },
                title: {
                  text: 'Gustos Musicales'
                },
                xAxis: {
                  categories: [
                    'Géneros Musicales'
                  ],
                  crosshair: true
                },
                yAxis: {
                  min: 0,
                  title: {
                    text: ''
                  }
                },
                tooltip: {
                  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                  footerFormat: '</table>',
                  shared: true,
                  useHTML: true
                },
                plotOptions: {
                  column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                  }
                },
                series: [{
                  name: 'Rock',
                  data: [p0]

                }, {
                  name: 'Cumbia',
                  data: [p1]

                }, {
                  name: 'Salsa',
                  data: [p2]

                }, {
                  name: 'Merengue',
                  data: [p3]

                }, {
                  name: 'Clásica',
                  data: [p4]

                }, {
                  name: 'Pop',
                  data: [p5]

                }]
              });
    }


    function Preg8(){

      var p0 = Math.round(Math.random() * (9 - 1) + 1);
      var p1 = Math.round(Math.random() * (9 - 1) + 1);
      var p2 = Math.round(Math.random() * (9 - 1) + 1);
      var p3 = Math.round(Math.random() * (9 - 1) + 1);
      var p4 = Math.round(Math.random() * (9 - 1) + 1);
      var p5 = Math.round(Math.random() * (9 - 1) + 1);

     
          $("#cal0").append(p0);
          $("#cal1").append(p1);
          $("#cal2").append(p2);
          $("#cal3").append(p0);
          $("#cal4").append(p4);
          $("#cal5").append(p5);
          $("#cal6").append(p0);
    }


    function Preg9(){

      var p0 = Math.round(Math.random() * (20 - 10) + 10);
      var p1 = Math.round(Math.random() * (20 - 10) + 10);
      var p2 = Math.round(Math.random() * (20 - 10) + 10);

          $("#nbic0").append(p0);
          $("#nbic1").append(p1);
          $("#nbic2").append(p2);
          
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

    var val = 3;
    var cant = parseInt($('#nh1').text());
    var nt = parseInt($('#nh0').text());
    var conjDatos = ($('#rNHab').val()).split(",");
    var incorrectos = 0;    

    for(var i=0; i<cant; i++) {
      if(conjDatos[i] == (nt*val)){
        $('#rNHab').css("background-color", "#5ED188");
      }else{
        incorrectos++;        
        $('#rNHab').css("background-color", "#EF87A7");
      }

      val=val*3;
    }

    notaFinalP2 = ((cant-incorrectos)/cant);
    if(incorrectos > 0){
      document.getElementById('rNHab').value += "  -  Hay " + incorrectos+" valores incorrectos   ";
      $('#rNHab').css("background-color", "#EF87A7");
    }

  }





  Math.gcd = function() {
    if (arguments.length == 2) {
        if (arguments[1] == 0)
            return arguments[0];
        else
            return Math.gcd(arguments[1], arguments[0] % arguments[1]);
    } else if (arguments.length > 2) {
        var result = Math.gcd(arguments[0], arguments[1]);
        for (var i = 2; i < arguments.length; i++)
            result = Math.gcd(result, arguments[i]);
        return result;
    }
  };

    var notaFinalP3 = 0;
    function Resp3(){
      var val0 = (parseFloat($('#numP3Mcd0').text()));
      var val1 = (parseFloat($('#numP3Mcd1').text()));      

      var resp = Math.gcd(val0, val1);

      if($('#rP3Mcd0').val() == resp){
         $('#rP3Mcd0').css("background-color", "#5ED188");
         notaFinalP3++;
          if(($('#rP3Mcd1').val()*resp)==val0){
            notaFinalP3++;
            $('#rP3Mcd1').css("background-color", "#5ED188");
          }else{
             $('#rP3Mcd1').css("background-color", "#EF87A7");
          }
          if(($('#rP3Mcd2').val()*resp)==val1){
            notaFinalP3++;
            $('#rP3Mcd2').css("background-color", "#5ED188");
          }else{
             $('#rP3Mcd2').css("background-color", "#EF87A7");
          }
      }else{
        $('#rP3Mcd0').css("background-color", "#EF87A7");
        $('#rP3Mcd1').css("background-color", "#EF87A7");
        $('#rP3Mcd2').css("background-color", "#EF87A7");
      }


      var valP20 = (parseFloat($('#numP2Mcd0').text()));
      var valP21 = (parseFloat($('#numP2Mcd1').text()));      

      var resP2 = Math.gcd(valP20, valP21);
      if($('#rMcd1').val() == resP2){
        notaFinalP3++;
            $('#rMcd1').css("background-color", "#5ED188");
      }else{
            $('#rMcd1').css("background-color", "#EF87A7");
      }

    }


    var notaFinalP4 = 0;
    function Resp4(){
      var resp = 0;

      for(var i=0; i<4; i++){        
        resp = Math.round(Math.pow(parseInt($('#radicando'+i).text()), (1/parseInt($('#radical'+i).text()))));
        if($('#rRaiz'+i).val() == resp){
          notaFinalP4++;
          $('#rRaiz'+i).css("background-color", "#5ED188");
        }else{
          $('#rRaiz'+i).css("background-color", "#EF87A7");
        }
      }

    }

    var notaFinalP5 = 0;
    function Resp5(){

    var resp = 0;

    for(var i=0; i<6; i++){
      resp = Math.pow((parseInt($('#rP10Num'+i).text())), (1/(parseInt($('#rP10Sup'+i).text()))));

      if (Math.round(resp) == ($('#rP10_'+i).val())){
          notaFinalP5++;
          $('#rP10_'+i).css("background-color", "#75D685");
        }else{
          $('#rP10_'+i).css("background-color", "#EF87A7");
        }
    }
  }



    var notaFinalP6 = 0;
    function Resp6(){

      for(var i=0; i<5; i++){
        if($('#rIn'+i).val() == $('#in'+i).text()){
           notaFinalP6++;
           $('#rIn'+i).css("background-color", "#75D685");
        }else{
           $('#rIn'+i).css("background-color", "#EF87A7");
        }
      }

    }

  var notaFinalP8 = 0;
  function Resp8(){
    var conjDatos0 = [];
   var conDatos0 = [];
   var cDatos = $('#cal0').text()+','+$('#cal1').text()+','+$('#cal2').text()+','+$('#cal3').text()+','+$('#cal4').text()+','+$('#cal5').text()+','+$('#cal6').text();

        conjDatos0 = ($('#conjDatosP4').val()).split("+");
        conjDatos = ($('#conjDatosP4').val()).split("+");
        conDatos0 = (cDatos.split(","));        

        conjDatos0.sort();
        conDatos0.sort();

        if(conjDatos0.toString() == conDatos0.toString()){          
          if(conjDatos == conDatos0.toString()) {
            notaFinalP8++;
          $('#conjDatosP4').css("background-color", "#5ED188");
          }else{
            $('#conjDatosP4').css("background-color", "#EF87A7");
           }          
        }else{
          $('#conjDatosP4').css("background-color", "#EF87A7");
        }


        if($('#denConjDatosP4').val() == conDatos0.length) {
          notaFinalP8++;
         $('#denConjDatosP4').css("background-color", "#5ED188");
        }else{
         $('#denConjDatosP4').css("background-color", "#EF87A7");
        }

        var sumaConj = 0;
        for(var j=0; j<conDatos0.length; j++){
          sumaConj = sumaConj + (parseInt(conDatos0[j]));
        }

        if($('#rNumConjP4').val() == sumaConj){
          notaFinalP8++;
         $('#rNumConjP4').css("background-color", "#5ED188");
        }else{
         $('#rNumConjP4').css("background-color", "#EF87A7");
        }


        if($('#rDenConjP4').val() == conDatos0.length) {
          notaFinalP8++;
         $('#rDenConjP4').css("background-color", "#5ED188");
        }else{
         $('#rDenConjP4').css("background-color", "#EF87A7");
        }


       if((sumaConj/conDatos0.length).toFixed(2) == $('#rMediaP4').val()){
        notaFinalP8++;
        $('#rMediaP4').css("background-color", "#5ED188");
       }else{
         $('#rMediaP4').css("background-color", "#EF87A7");
       }
  



        if($('#rMedianaP4').val() == conDatos0[3]){////
            notaFinalP8++;
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
            notaFinalP8++;
            $('#rModaP4').css("background-color", "#5ED188");
        }else{
            $('#rModaP4').css("background-color", "#EF87A7");
        }

        if($('#rRangoP4').val() == (conDatos0[6] - conDatos0[0])){
            notaFinalP8++;
            $('#rRangoP4').css("background-color", "#5ED188");
        }else{
            $('#rRangoP4').css("background-color", "#EF87A7");
        }


        var cont = 0;
        for(var k=0; k<7; k++){
          if(conDatos0[k] < 7){
            cont++;
          }
        }
        if($('#mM7').val() == cont){
            notaFinalP8++;
            $('#mM7').css("background-color", "#5ED188");
        }else{
            $('#mM7').css("background-color", "#EF87A7");
        } 

   }

   var notaFinalP9 = 0;
  function Resp9(){
    var sum = (parseInt($('#nbic0').text()) + parseInt($('#nbic1').text()) + parseInt($('#nbic2').text()));
    var cDatos = ($('#nbic0').text()+','+$('#nbic1').text()+','+$('#nbic2').text());
    var con = (cDatos.split(","));  
    var conj = ($('#cf').val().split(","));       

        con.sort();
        conj.sort();

    if(conj.toString() == con.toString()) {
        notaFinalP9++;
        $('#cf').css("background-color", "#5ED188");
      }else{
        $('#cf').css("background-color", "#EF87A7");
      } 

      if($('#tc').val() == sum){
        notaFinalP9++;
        $('#tc').css("background-color", "#5ED188");
      }else{
        $('#tc').css("background-color", "#EF87A7");
      }

      if($('#pcbNum').val() == ($('#nbic1').text())) {
        notaFinalP9++;
        $('#pcbNum').css("background-color", "#5ED188");
      }else{
        $('#pcbNum').css("background-color", "#EF87A7");
      } 

      if($('#pcbDen').val() == sum){
        notaFinalP9++;
        $('#pcbDen').css("background-color", "#5ED188");
      }else{
        $('#pcbDen').css("background-color", "#EF87A7");
      } 

      if($('#pcbNum1').val() == '0') {
        notaFinalP9++;
        $('#pcbNum1').css("background-color", "#5ED188");
      }else{
        $('#pcbNum1').css("background-color", "#EF87A7");
      } 

      if($('#pcbDen1').val() == sum){
        notaFinalP9++;
        $('#pcbDen1').css("background-color", "#5ED188");
      }else{
        $('#pcbDen1').css("background-color", "#EF87A7");
      } 
  }


  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio();
            Preg1();     
            Preg3();
            Preg4();
            Preg5();
            Preg6();
            Preg7();
            Preg8();
            Preg9();


           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4();
            Resp5();
            Resp6();
            Resp8();
            Resp9();

            var nota1 = (notaFinalP1)/6; 
            var nota2 = (notaFinalP2);
            var nota3 = (notaFinalP3)/2;//sobre2
            var nota4 = (notaFinalP4)/4;
            var nota5 = (notaFinalP5)/4;
            var nota6 = (notaFinalP6*0.25)/5;
            var nota6_1 = parseFloat($('#calificacion0').val());
            var nota7 = parseFloat($('#calificacion1').val());
            var nota8 = (notaFinalP8)/9;  
            var nota9 = (notaFinalP9)/6;  

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota6_1+nota7+nota8+nota9).toFixed(2);//10

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


