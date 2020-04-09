var titulos="aplico"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

    function Preg1(){

      var p0 = 0;
      var p1 = 0;
      var p2 = 0;
      var p3 = 0;
      var p4 = 0;
      var p5 = 0;
      var p6 = 0;
      var p7 = 0;

          var patron0 = Math.round(Math.random() * (100000) + 100);
          var patron1 = Math.round(Math.random() * (100000) + 100);
          var patron2 = Math.round(Math.random() * (100000) + 100);
          var patron3 = Math.round(Math.random() * (100000) + 100);
          
          if((patron0 % 2) != 0){
            p0 = patron0 + 1; 
            p4 = patron0 * 3;
          }else{
            p0=patron0;
            p4 = (patron0+11) * 3;
          }
          
          if((patron1 % 2) != 0){
            p1 = patron1 + 1; 
            p5 = patron0 * 3;
          }else{
            p1=patron1;
            p5 = (patron1+11) * 3;
          }

          if((patron2 % 2) != 0){
            p2 = patron2 + 1;
            p6 = patron2 * 3; 
          }else{
            p2=patron2;
            p6 = (patron2+11) * 3;
          }

          if((patron3 % 2) != 0){
            p3 = patron3 + 1;
            p7 = patron3 * 3; 
          }else{
            p3=patron3;
            p7 = (patron3+11) * 3;
          }                  

          var div = [];
          var divisible = [];
          var divisible1 = [];

          divisible[0] = '<span> a) &nbsp;&nbsp;</span><label class="n1" id="patron0"> ' + p0 + ' </label>&nbsp;&nbsp;<span> es divisible por &nbsp;&nbsp;</span><input type="number" class="form-control" style="width: 85px;" id="div0">';
          divisible[1] = '<span> b) &nbsp;&nbsp;</span><label class="n1" id="patron1"> ' + p1 + ' &nbsp;&nbsp;</label><span> es divisible por &nbsp;&nbsp;</span><input type="number" class="form-control" style="width: 85px;" id="div1">';
          divisible[2] = '<span> c) &nbsp;&nbsp;</span><label class="n1" id="patron2"> ' + p2 + ' &nbsp;&nbsp;</label><span> es divisible por &nbsp;&nbsp;</span><input type="number" class="form-control" style="width: 85px;" id="div2">';
          divisible[3] = '<span> d) &nbsp;&nbsp;</span><label class="n1" id="patron3"> ' + p3 + ' &nbsp;&nbsp;</label><span> es divisible por &nbsp;&nbsp;</span><input type="number" class="form-control" style="width: 85px;" id="div3">';                  

          $("#divisible0").append(divisible[0]);
          $("#divisible1").append(divisible[1]);
          $("#divisible2").append(divisible[2]);
          $("#divisible3").append(divisible[3]);


          divisible1[0] = '<span> a) &nbsp;&nbsp;</span><label class="n2" id="patron4"> ' + p4 + ' </label>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" class="form-control" style="width: 85px;" id="div4">';
          divisible1[1] = '<span> b) &nbsp;&nbsp;</span><label class="n2" id="patron5"> ' + p5 + ' </label>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" class="form-control" style="width: 85px;" id="div5">';
          divisible1[2] = '<span> c) &nbsp;&nbsp;</span><label class="n2" id="patron6"> ' + p6 + ' </label>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" class="form-control" style="width: 85px;" id="div6">';
          divisible1[3] = '<span> d) &nbsp;&nbsp;</span><label class="n2" id="patron7"> ' + p7 + ' </label>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" class="form-control" style="width: 85px;" id="div7">';

          $("#divisible4").append(divisible1[0]);
          $("#divisible5").append(divisible1[1]);
          $("#divisible6").append(divisible1[2]);
          $("#divisible7").append(divisible1[3]);

      }


      function Preg2(){

          var patron0 = Math.round(Math.random() * (1000) + 1);
                
          var problema = [];

          problema[0] = '<span>Rosario tejió <span class="n1"> ' + patron0 + ' </span> bufandas y las guardó en varios paquetes para entregar ' +
                         ' a sus clientes. ¿Puede hacer paquetes de 2, 5 o 10 bufandas?</span> <br><span>Explica ' +
                         ' tu respuesta. </span><br><br><textarea class="form-control" id="prob0"></textarea>';

          $("#problema").append(problema[0]);


      }


      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg2();

           function confirmar() {

            var nota1 = 0;

            for(var i=0; i<5; i++){
            if((parseInt($('#patron'+i).text()) / $('#div'+i).val()) % 1 == 0) {
              $('#div'+i).css("background-color", "green");
              nota1 = nota1+2.5;
            }else{
              $('#div'+i).css("background-color", "red");
            }
            }

            for(var i=4; i<8; i++){
            if(($('#div'+i).val()) % 2 == 0 && ($('#div'+i).val()) % 5 == 0 && ($('#div'+i).val()) % 10 == 0 && ($('#div'+i).val())!=0 && ($('#div'+i).val())!="") {
              $('#div'+i).css("background-color", "green");
              nota1 = nota1+2.5;
            }else{
              $('#div'+i).css("background-color", "red");
            }
            }
           

              var notaFinal = (nota1+$('#calificacion').val())/3;
                      $("#txtNota").text(notaFinal.toFixed(2));
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion').val() != ''){
          confirmar();
          $('#calificacion').css("background-color", "green");
        }else{
          $('#calificacion').css("background-color", "red");
        }


          
      });

      });
