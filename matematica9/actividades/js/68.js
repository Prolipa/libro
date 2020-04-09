var titulos="aplico";
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

          var n0 = Math.round(Math.random() * (6 - 3) + 3);
          var n1 = Math.round(Math.random() * (6 - 3) + 3);
          var n2 = Math.round(Math.random() * ((-3) - (-6)) + (-6));
          var n3 = Math.round(Math.random() * ((-3) - (-6)) + (-6));


          if(n0==n1){
            n1++;
          }
          if(n2==n3){
            n3++;
          }
          
          var nmm = n0;
          var nmmm = n1;
          var nmm1 = n2;
          var nmmm1 = n3;
          if(n0 > n1){
            nmm = n1;
            nmmm = n0;
          }
          if(n2 > n3){
            nmm1 = n3;
            nmmm1 = n2;
          }

          $("#nIrr0").append(nmm);  
          $("#nIrr1").append(nmmm); 
          $("#nIrr2").append(nmm1); 
          $("#nIrr3").append(nmmm1); 

          

          $("#nF0").append(Math.pow(nmm, 2)); 
          $("#nF1").append((Math.pow(nmm, 2))+1); 
          $("#nF2").append((Math.pow(nmm1, 2))); 
          $("#nF3").append(((Math.pow(nmm1, 2)))-1); 

      }


  function Preg2(){

        var suc = [];
        for(var i=0; i<24; i++){
          suc[i] = Math.round(Math.random() * (70 - 20) + 20);
        }

        var contenidos = [
            ['<span>√'+(suc[5])+'</span>, &nbsp;&nbsp; <span style="display: none;" id="nO0">'+(suc[0])+','+(suc[1])+','+(suc[2])+','+(suc[3])+','+(suc[4])+','+(suc[5])+'</span>'],
            ['<span>√'+(suc[0])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[1])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[2])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[3])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[4])+'</span>, &nbsp;&nbsp;'],           
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#onR0").append( item );
      });


      var contenidos1 = [
            ['<span>-√'+(suc[6])+'</span>, &nbsp;&nbsp; <span style="display: none;" id="nO1">'+(-1*suc[6])+','+(1*suc[7])+','+(-1*suc[8])+','+(-1*suc[9])+','+(1*suc[10])+','+(-1*suc[11])+'</span>'],
            ['<span>√'+(suc[7])+'</span>, &nbsp;&nbsp;'],
            ['<span>-√'+(suc[8])+'</span>, &nbsp;&nbsp;'],
            ['<span>-√'+(suc[9])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[10])+'</span>, &nbsp;&nbsp;'],
            ['<span>-√'+(suc[11])+'</span>, &nbsp;&nbsp;'],           
        ]
      contenidos1.sort(f_randomico);

      $.each( contenidos1, function( i, item ) {
        $("#onR1").append( item );
      });



       var contenidos2 = [
            ['<span>√'+(suc[12])+'</span>, &nbsp;&nbsp; <span style="display: none;" id="nO2">'+(1*suc[12])+','+(1*suc[13])+','+(1*suc[14])+','+(1*suc[15])+','+(1*suc[16])+','+(1*suc[17])+'</span>'],
            ['<span>√'+(suc[13])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[14])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[15])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[16])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[17])+'</span>, &nbsp;&nbsp;'],           
        ]
      contenidos2.sort(f_randomico);

      $.each( contenidos2, function( i, item ) {
        $("#onR2").append( item );
      });


       var contenidos3 = [
            ['<span>√'+(suc[18])+'</span>, &nbsp;&nbsp; <span style="display: none;" id="nO3">'+(1*suc[18])+','+(1*suc[19])+','+(-1*suc[20])+','+(-1*suc[21])+','+(1*suc[22])+','+(-1*suc[23])+'</span>'],
            ['<span>√'+(suc[19])+'</span>, &nbsp;&nbsp;'],
            ['<span>-√'+(suc[20])+'</span>, &nbsp;&nbsp;'],
            ['<span>-√'+(suc[21])+'</span>, &nbsp;&nbsp;'],
            ['<span>√'+(suc[22])+'</span>, &nbsp;&nbsp;'],
            ['<span>-√'+(suc[23])+'</span>, &nbsp;&nbsp;'],           
        ]
      contenidos3.sort(f_randomico);

      $.each( contenidos3, function( i, item ) {
        $("#onR3").append( item );
      });


  }




    function Preg4(){

      var contenido = [];

      contenido = [
      ['<div class="row"><br><br><div class="col-sm-1"></div><li><div class="col-sm-5"><img src="img/i1_p62_act4.jpg" class="img-responsive" width="350px;"></div></li><div class="col-sm-6"><br><br><span class="n1">R. √</span><input type="number" id="rG0" class="form-control respuestas" style="width: 80px;"></div><br><br></div>'], 
      ['<div class="row"><br><br><div class="col-sm-1"></div><li><div class="col-sm-5"><img src="img/i2_p62_act4.jpg" class="img-responsive" width="350px;"></div></li><div class="col-sm-6"><br><br><span class="n1">R. √</span><input type="number" id="rG1" class="form-control respuestas" style="width: 80px;"></div><br><br></div>'], 
      ['<div class="row"><br><br><div class="col-sm-1"></div><li><div class="col-sm-5"><img src="img/i3_p62_act4.jpg" class="img-responsive" width="350px;"></div></li><div class="col-sm-6"><br><br><span class="n1">R. √</span><input type="number" id="rG2" class="form-control respuestas" style="width: 80px;"></div><br><br></div>'],
      ['<div class="row"><br><br><div class="col-sm-1"></div><li><div class="col-sm-5"><img src="img/i4_p62_act4.jpg" class="img-responsive" width="350px;"></div></li><div class="col-sm-6"><br><br><span class="n1">R. √</span><input type="number" id="rG3" class="form-control respuestas" style="width: 80px;"></div><br><br></div>']
      ];          
      
      contenido.sort(f_randomico);

      $.each( contenido, function( i, item ) {
        $( "#nRep0" ).append( item );
    });
      }





    function Preg5(){
        var n0 = Math.round(Math.random() * (9 - 2) + 2);
        var n1 = Math.round(Math.random() * (9 - 2) + 2);
        var n2 = Math.round(Math.random() * (20 - 10) + 10);
        var n3 = Math.round(Math.random() * (9 - 2) + 2);
        var n4 = Math.round(Math.random() * (9 - 2) + 2);
        var n5 = Math.round(Math.random() * (9 - 2) + 2);
        var n6 = Math.round(Math.random() * (9 - 2) + 2);

        $( "#cat0" ).append(n0);
        $( "#cat1" ).append(n1);
        $( "#cat2" ).append(n2);
        $( "#cat3" ).append(n3);
        $( "#cat4" ).append(n4);
        $( "#cat5" ).append(n5);
        $( "#cat6" ).append(n6);
        $( "#cat7" ).append(n1);
    }




  var notaFinalP1 = 0;
  function Resp1(){
  
  var cant = 0;
  var cant1 = 0;
  var acum = '';
  var acum1 = '';

    for(var i=0; i<4; i++){
      if(parseInt($('#nR'+i).val()) == (Math.pow((parseInt($('#nIrr'+i).text())), 2))) {
            $('#nR'+i).css("background-color", "#5ED188");
            notaFinalP1++;
      }else{
            $('#nR'+i).css("background-color", "#EF87A7");
      } 

    }


      cant = ((Math.pow((parseInt($('#nIrr1').text())), 2)) - (Math.pow((parseInt($('#nIrr0').text())), 2)));
      cant1 = ((Math.pow((parseInt($('#nIrr2').text())), 2)) - (Math.pow((parseInt($('#nIrr3').text())), 2)));

      for(var j=2; j<=cant; j++) {
        acum = acum + ((Math.pow((parseInt($('#nIrr0').text())), 2))+j);
      }

      for(var k=2; k<=cant1; k++) {
        acum1 = acum1 + ((Math.pow((parseInt($('#nIrr2').text())), 2))-k);
      }

      if(((($('#rPs2_0').val())).replace(/ |√|<|,|-/g, "")) == acum) {
          notaFinalP1++;
          $('#rPs2_0').css("background-color", "#5ED188");
      }else{
          $('#rPs2_0').css("background-color", "#EF87A7");
      } 

      if(((($('#rPs2_1').val())).replace(/ |√|<|,|-/g, "")) == acum1) {
          notaFinalP1++;
          $('#rPs2_1').css("background-color", "#5ED188");
      }else{
          $('#rPs2_1').css("background-color", "#EF87A7");
      } 

  }




      
  var notaFinalP2 = 0;
  function Resp2(){
    var ord = [];

    for(var i=0; i<4; i++){

        ord = ($('#nO'+i).text()).split(",");
        ord.sort(function deMenorAMayor(elem1, elem2) {return elem1-elem2;});

        if((((($('#ronR'+i).val())).replace(/ |√|<|,|/g, ""))) == (ord.join().replace(/ |,|/g, ""))) {
            notaFinalP2++;
            $('#ronR'+i).css("background-color", "#5ED188");
        }else{
            $('#ronR'+i).css("background-color", "#EF87A7");
        } 

    }
  }



  var notaFinalP4 = 0;
  function Resp4(){

          if(($('#rG0').val()) == 13) {
              notaFinalP4++;
              $('#rG0').css("background-color", "#5ED188");
          }else{
              $('#rG0').css("background-color", "#EF87A7");
          }

          if(($('#rG1').val()) == 17) {
              notaFinalP4++;
              $('#rG1').css("background-color", "#5ED188");
          }else{
              $('#rG1').css("background-color", "#EF87A7");
          }

          if(($('#rG2').val()) == 13) {
              notaFinalP4++;
              $('#rG2').css("background-color", "#5ED188");
          }else{
              $('#rG2').css("background-color", "#EF87A7");
          } 

          if(($('#rG3').val()) == 26) {
              notaFinalP4++;
              $('#rG3').css("background-color", "#5ED188");
          }else{
              $('#rG3').css("background-color", "#EF87A7");
          } 

  }



  var notaFinalP5 = 0;
  function Resp5(){

    var rHip0 = (Math.pow((parseInt($('#cat0').text())), 2)) + (Math.pow((parseInt($('#cat1').text())), 2));
    var rHip1 = (parseInt($('#cat2').text())) + (Math.pow((parseInt($('#cat3').text())), 2));
    var rHip2 = (((parseInt($('#cat4').text())) * (parseInt($('#cat5').text()))) + ((parseInt($('#cat4').text())) * (parseInt($('#cat6').text())))) * (parseInt($('#cat4').text()));
    var rHip3 = (Math.pow(((Math.pow((parseInt($('#cat5').text())), 2)) + (Math.pow((parseInt($('#cat6').text())), 2))), 1/2)) * (parseInt($('#cat7').text()));

        if(($('#rHip0').val()) == rHip0) {
            notaFinalP5++;
            $('#rHip0').css("background-color", "#5ED188");
        }else{
            $('#rHip0').css("background-color", "#EF87A7");
        }

        if(($('#rHip1').val()) == rHip1) {
            notaFinalP5++;
            $('#rHip1').css("background-color", "#5ED188");
        }else{
            $('#rHip1').css("background-color", "#EF87A7");
        }

        if(($('#rHip2').val()) == rHip2) {
            notaFinalP5++;
            $('#rHip2').css("background-color", "#5ED188");
        }else{
            $('#rHip2').css("background-color", "#EF87A7");
        }

        if(($('#rHip3').val()) == Math.round(rHip3)) {
            notaFinalP5++;
            $('#rHip3').css("background-color", "#5ED188");
        }else{
            $('#rHip3').css("background-color", "#EF87A7");
        }

  }





      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg2();
            Preg4();
            Preg5();

           function confirmar() {
            Resp1();
            Resp2();
            Resp4();
            Resp5();


            var nota1 = (notaFinalP1*2)/6;
            var nota2 = (notaFinalP2*2)/4;
            var nota3 = parseFloat($('#calificacion0').val());
            var nota4 = notaFinalP4/4;//1
            var nota5 = notaFinalP5/4;//1
            var nota6 = parseFloat($('#calificacion1').val());


            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6).toFixed(2);

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
