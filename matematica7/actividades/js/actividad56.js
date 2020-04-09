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

          var p0 = (Math.round(Math.random() * (20) + 5));
          var p1 = (Math.round(Math.random() * (20) + 5));
          var p2 = (Math.round(Math.random() * (20) + 5));
          
          var primos = [];

          primos[0] = 'a) &nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n0">' + 6 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp;{<input type="text" class="form-control r1" placeholder="1, 2, 3, 6" readonly>} </label>&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;es&nbsp;&nbsp;' +
          '<select class="form-control" id="sel0"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[1] = 'b) &nbsp;&nbsp;&nbsp;<span class="n2">&nbsp;D<sub id="n1">' + p0 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp;{<input type="text" class="form-control r1">} </label>&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;es&nbsp;&nbsp;' +
          '<select class="form-control" id="sel1"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[2] = 'c) &nbsp;&nbsp;&nbsp;<span class="n2">&nbsp;D<sub id="n2">' + p1 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp;{<input type="text" class="form-control r1">} </label>&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;es&nbsp;&nbsp;' +
          '<select class="form-control" id="sel2"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[3] = 'd) &nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n3">' + p2 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp;{<input type="text" class="form-control r1">} </label>&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;es&nbsp;&nbsp;' +
          '<select class="form-control" id="sel3"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';

          $("#primos0").append(primos[0]);
          $("#primos1").append(primos[1]);  
          $("#primos2").append(primos[2]);  
          $("#primos3").append(primos[3]);          

      }



  function Preg2(){

          var p0 = (Math.round(Math.random() * (1000) + 10));
          var p1 = (Math.round(Math.random() * (1000) + 10));
          var p2 = (Math.round(Math.random() * (1000) + 10));
          var p3 = (Math.round(Math.random() * (1000) + 10));
          var p4 = (Math.round(Math.random() * (1000) + 10));
          var p5 = (Math.round(Math.random() * (1000) + 10));
          
          var divisiones = [];

          divisiones[0] = '<label>a)</label>&nbsp;&nbsp;' +
          '<label id="divisor0">' + p0 + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo0"> ' + 2 + ' = </label>&nbsp;&nbsp;' +
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

          divisiones[1] = '<label>b)</label>&nbsp;&nbsp;' +
          '<label id="divisor1">' + p1 + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo1"> ' + 2 + ' = </label>&nbsp;&nbsp;' +
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

          divisiones[2] = '<label>c)</label>&nbsp;&nbsp;' +
          '<label id="divisor2">' + p2 + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo2"> ' + 2 + ' = </label>&nbsp;&nbsp;' +
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

          divisiones[3] = '<label>d)</label>&nbsp;&nbsp;' +
          '<label id="divisor3">' + p3 + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo3"> ' + 2 + ' = </label>&nbsp;&nbsp;' +
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

          divisiones[4] = '<label>e)</label>&nbsp;&nbsp;' +
          '<label id="divisor4">' + p4 + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo4"> ' + 2 + ' = </label>&nbsp;&nbsp;' +
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';

          divisiones[5] = '<label>f)</label>&nbsp;&nbsp;' +
          '<label id="divisor5">' + p5 + ' / </label>&nbsp;&nbsp;' +          
          '<label id="dividendo5"> ' + 2 + ' = </label>&nbsp;&nbsp;' +
          '<textarea class="form-control" rows="5" id="procesodiv"></textarea>';


          $("#division0").append(divisiones[0]);
          $("#division1").append(divisiones[1]);  
          $("#division2").append(divisiones[2]);  
          $("#division3").append(divisiones[3]); 
          $("#division4").append(divisiones[4]); 
          $("#division5").append(divisiones[5]);          

    }


  var notaFinalP1 = 0;
  function Resp1(){

    var d=0;
    var k=1;
    var d1=0;
    var k1=1;
    var d2=0;
    var k2=1;
    var d3=0;
    var k3=1;

      while(k <= (parseInt($('#n0').text()))) {
          if ((parseInt($('#n0').text())) % k == 0){
              d++;  
          }                
          k++;
        } 
      if(d==2){
        if($('#sel0').val() == 1) {
        notaFinalP1++;
        $('#sel0').css("background-color", "#75D685");
        }else{
        $('#sel0').css("background-color", "#EF87A7");
        }
      }else{
        if($('#sel0').val() == 0) {
        $('#sel0').css("background-color", "#75D685");
        notaFinalP1++;
        }else{
        $('#sel0').css("background-color", "#EF87A7");
        }
      }


////////////////////
      while(k1 <= (parseInt($('#n1').text()))) {
          if ((parseInt($('#n1').text())) % k1 == 0){
              d1++;  
          }                
          k1++;
        } 
      if(d1==2){
        if($('#sel1').val() == 1) {
        notaFinalP1++;
        $('#sel1').css("background-color", "#75D685");
        }else{
        $('#sel1').css("background-color", "#EF87A7");
        }
      }else{
        if($('#sel1').val() == 0) {
        $('#sel1').css("background-color", "#75D685");
        notaFinalP1++;
        }else{
        $('#sel1').css("background-color", "#EF87A7");
        }
      }


      ////////////////////
      while(k2 <= (parseInt($('#n2').text()))) {
          if ((parseInt($('#n2').text())) % k2 == 0){
              d2++;  
          }                
          k2++;
        } 
      if(d2==2){
        if($('#sel2').val() == 1) {
        notaFinalP1++;
        $('#sel2').css("background-color", "#75D685");
        }else{
        $('#sel2').css("background-color", "#EF87A7");
        }
      }else{
        if($('#sel2').val() == 0) {
        $('#sel2').css("background-color", "#75D685");
        notaFinalP1++;
        }else{
        $('#sel2').css("background-color", "#EF87A7");
        }
      }


      ////////////////////
      while(k3 <= (parseInt($('#n3').text()))) {
          if ((parseInt($('#n3').text())) % k3 == 0){
              d3++;  
          }                
          k3++;
        } 
      if(d3==2){
        if($('#sel3').val() == 1) {
        notaFinalP1++;
        $('#sel3').css("background-color", "#75D685");
        }else{
        $('#sel3').css("background-color", "#EF87A7");
        }
      }else{
        if($('#sel3').val() == 0) {
        $('#sel3').css("background-color", "#75D685");
        notaFinalP1++;
        }else{
        $('#sel3').css("background-color", "#EF87A7");
        }
      }

  }

    function Preg4(){            
          var problema = [];
          var p0 = (Math.round(Math.random() * (10) + 2));
          var p1 = (Math.round(Math.random() * (100) + 10));

          problema[0] = '<span>Carlos le dice a Pamela que la suma de los números primos mayores ' +
            'que <span class="num0">'+p0+'</span> y menores que <span class="num1">'+p1+'</span> da como resultado otro número primo.<br> ¿Es ' +
            'correcto lo que dice Carlos? Demuestra tu respuesta. </span>'+
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

            var nota0 = parseFloat($('#calificacion0').val());
            var nota1 = parseFloat($('#calificacion1').val());

            var notaFinal = (notaFinalP1+nota0+nota1);

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