
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
        var valoresA = [];

        for (var i = 0; i < 24; i++) {
          valoresA[i] = Math.round(Math.random() * (13 - 11) + 11);
        }

          var contenidos = [
            ['<div class="col-sm-2"><span class="n0" id="v0">'+valoresA[0]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v1">'+valoresA[1]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v2">'+valoresA[2]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v3">'+valoresA[3]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v4">'+valoresA[4]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v5">'+valoresA[5]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v6">'+valoresA[6]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v7">'+valoresA[7]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v8">'+valoresA[8]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v9">'+valoresA[9]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v10">'+valoresA[10]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v11">'+valoresA[11]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v12">'+valoresA[12]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v13">'+valoresA[13]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v14">'+valoresA[14]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v15">'+valoresA[15]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v16">'+valoresA[16]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v17">'+valoresA[17]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v18">'+valoresA[18]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v19">'+valoresA[19]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v20">'+valoresA[20]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v21">'+valoresA[21]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v22">'+valoresA[22]+'</span></div>'],
            ['<div class="col-sm-2"><span class="n0" id="v23">'+valoresA[23]+'</span></div>'],

          ]

          contenidos.sort(f_randomico);
          $.each( contenidos, function( i, item ) {
        $( ".lista1" ).append( item );
          });
          
      }


   function Preg2(){            
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
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    }
  },
    title: {
    text: 'Cantones de Cotopaxi'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Cantones',
    data: [
      ['Pangua', valTemp[0]],
      ['Pujilí', valTemp[1]],
      ['Salcedo', valTemp[2]],
      ['La Maná', valTemp[3]],
      ['Sigchos', valTemp[4]],
      ['Saquisilí', valTemp[5]],
      ['Latacunga', valTemp[6]]
    ]
  }]
});
      }


  var notaFinalP1 = 0;
    function Resp1(){

       var edades = [];
       var edad0 = 0;
       var edad1 = 0;
       var edad2 = 0;
       var totalConteo = 0;

      for(var i=0; i<24; i++){  
        edades[i]=(parseInt($('#v'+i).text()));    
        if((parseInt($('#v'+i).text())) == 11){
          edad0++;
        }

        if((parseInt($('#v'+i).text())) == 12){
          edad1++;
        }

        if((parseInt($('#v'+i).text())) == 13){
          edad2++;
        }  
      }  

    totalConteo = parseInt(edad0+edad1+edad2);

      if($('#conteoEdad0').val() == edad0){
        $('#conteoEdad0').css("background-color", "#5ED188");
        notaFinalP1++;
      }else{
        $('#conteoEdad0').css("background-color", "#EF87A7");
      }


      if($('#conteoEdad1').val() == edad1){
        $('#conteoEdad1').css("background-color", "#5ED188");
        notaFinalP1++;
      }else{
        $('#conteoEdad1').css("background-color", "#EF87A7");
      }


      if($('#conteoEdad2').val() == edad2){
        $('#conteoEdad2').css("background-color", "#5ED188");
        notaFinalP1++;
      }else{
        $('#conteoEdad2').css("background-color", "#EF87A7");
      }

      if($('#totalConteo').val() == totalConteo){
        $('#totalConteo').css("background-color", "#5ED188");
        notaFinalP1 = notaFinalP1 + 2;
      }else{
        $('#totalConteo').css("background-color", "#EF87A7");
      }
    }


  var notaFinalP2 = 0;
    function Resp2(){
      for(var i=0; i<6; i++){        
          if(((parseInt($('#p1Suc'+(i+1)).val())) * $('#p1Patron').val()) == $('#p1Suc'+i).val()) {
          notaFinalP2 = notaFinalP2 + 0.25;
          $('#p1Suc'+(i+1)).css("background-color", "#5ED188");
        }else{
          $('#p1Suc'+(i+1)).css("background-color", "#EF87A7");
        }
      } 

       if($('#p1Pat0').val() == $('#p1Patron').val()){
         notaFinalP2 = notaFinalP2 + 0.75;
         $('#p1Pat0').css("background-color", "#5ED188");
        }else{
         $('#p1Pat0').css("background-color", "#EF87A7");
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

            var nota1 = notaFinalP1;
            var nota2 = parseFloat($('#calificacion0').val());
            
            var notaFinal = (nota1+nota2).toFixed(2);

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
    });


