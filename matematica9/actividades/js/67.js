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

          var d0 = Math.round(Math.random() * (20 - 3) + 3);
          var d1 = Math.round(Math.random() * (20 - 3) + 3);
          var d2 = Math.round(Math.random() * (20 - 2) + 2);
          var d3 = Math.round(Math.random() * (20 - 2) + 2);

          var rad0 = Math.round(Math.random() * (3 - 2) + 2);
          var rad1 = Math.round(Math.random() * (3 - 2) + 2);
          var rad2 = Math.round(Math.random() * (3 - 2) + 2);
          var rad3 = Math.round(Math.random() * (3 - 2) + 2);
          
          $("#exD0").append(d0);  
          $("#exD1").append(d2); 
          $("#exD2").append(d1); 
          $("#exD3").append(d3);  

          $("#rad0").append(rad0);  
          $("#rad1").append(rad1);  
          $("#rad2").append(rad2);  
          $("#rad3").append(rad3);          

      }


  function Preg2(){
        var n0 = Math.round(Math.random() * (20 - 2) + 2);
        var n1 = Math.round(Math.pow((Math.random() * (10 - 2) + 2), 2));
        var n2 = Math.round(Math.random() * (10 - 2) + 2);
        var n3 = Math.round(Math.random() * (10 - 2) + 2);
        var n4 = Math.round(Math.random() * (10 - 2) + 2);
        var n5 = Math.round(Math.random() * (10 - 2) + 2);
        var n6 = (Math.random() * (10 - 2) + 2).toFixed(2);
        var n7 = Math.round(Math.random() * (10 - 2) + 2);
        var n8 = Math.round(Math.random() * (10 - 2) + 2);
        var n9 = (Math.random() * (10 - 2) + 2).toFixed(2);

        var contenidos = [
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3">'+n0+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR0" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3"> √'+n1+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR1" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3">'+(n2*n3)+' / '+n3+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR2" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3">'+n6+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR3" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3"> -'+n9+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR4" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3">'+n4+' / √'+n5+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR5" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],            
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3" style="font-size: 19px;">'+n0+'+ √'+n7+' / '+n8+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR6" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],            
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3">e<sup class="np0" style="font-size: 17px;">2</sup></span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR7" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-3">√'+n2+' / √'+n0+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<input id="rRR8" type="text" class="form-control text-uppercase respuestas"><br><br></li></div>'],
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#irRa").append( item );
      });

      }




    function Preg4(){

      var divisible = [];

      divisible = [
      ['<div class="col-sm-5"><img src="img/i1_p59_act4.jpg" class="img-responsive"><br></div>'],
      ['<div class="col-sm-4"><img src="img/i2_p59_act4.jpg" class="img-responsive"><br></div>'],
      ['<div class="col-sm-3"><img src="img/i3_p59_act4.jpg" class="img-responsive"><br></div>'],      
      ];          
      
      divisible.sort(f_randomico);

      $.each( divisible, function( i, item ) {
        $( "#diag" ).append( item );
    });
      }





    function Preg5(){
        var n0 = Math.round(Math.random() * (20 - 5) + 5);
        var n1 = Math.round(Math.random() * (40 - 10) + 10);
        var n2 = Math.round(Math.random() * (10 - 7) + 7);
        var n3 = Math.round(Math.random() * (40 - 30) + 30);
        var n4 = Math.round(Math.random() * (120 - 100) + 100);
        var n5 = Math.round(Math.random() * (30 - 9) + 9);
        var n6 = Math.round(Math.random() * (5 - 2) + 2);
        var n7 = Math.round(Math.random() * (15 - 6) + 6);
        var n8 = Math.round(Math.random() * (20 - 7) + 7);
        var n9 = Math.round(Math.random() * (40 - 2) + 2);
        //var n2 = Math.round(Math.pow((Math.random() * (10 - 2) + 2), 2));


        var contenidos = [
            ['<div><li><span class="np0 col-sm-4">'+n0+' es mayor que √'+n1+'</span><span id="rM0" style="display:none;">'+n0+'</span><span id="rM1" style="display:none;">'+(Math.sqrt(n1))+'</span><select id="rVf0" type="text" class="form-control text-uppercase respuestas"><option></option><option>VERDADERO</option><option>FALSO</option></select><br><br></li></div>'],
            ['<div><li><span class="np0 col-sm-4">'+n2+' está entre √'+n3+' y √'+n4+' </span><select id="rVf1" type="text" class="form-control text-uppercase respuestas"><option></option><option>VERDADERO</option><option>FALSO</option></select><br><br></li></div>'],
            ['<div><li><span class="np0 col-sm-4">√'+n5+' está entre '+n6+' y '+n7+' </span><select id="rVf2" type="text" class="form-control text-uppercase respuestas"><option></option><option>VERDADERO</option><option>FALSO</option></select><br><br></li></div>'],
            ['<div><li><span class="np0 col-sm-4">'+n8+' es mayor que √'+n9+' </span><select id="rVf3" type="text" class="form-control text-uppercase respuestas"><option></option><option>VERDADERO</option><option>FALSO</option></select><br><br></li></div>'],           
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#voF").append( item );
      });

    }




    function Preg6(){
        var n0 = Math.round(Math.random() * (10 - 2) + 2);
        var n1 = Math.round(Math.random() * (10 - 2) + 2);
        var n2 = Math.round(Math.random() * (10 - 2) + 2);
        var n3 = Math.round(Math.random() * (10 - 2) + 2);
        var n4 = Math.round(Math.random() * (10 - 2) + 2);
        var n5 = Math.round(Math.random() * (10 - 2) + 2);
        var n6 = Math.round(Math.random() * (10 - 2) + 2);
        var n7 = Math.round(Math.random() * (10 - 2) + 2);


        var r0 = (Math.sqrt(n0)) + (Math.sqrt(n1));
        var r1 = 4.75962;
        var r2 = (n3 * (Math.sqrt(n4))) - 2.71828;
        var r3 = (n5 / (Math.sqrt(n6))) + n7;

        var contenidos = [
            ['<div class="col-sm-6"><li><span class="np0 col-sm-4"> √'+n0+' + √'+n1+'</span><span id="rOb0" style="display:none;">'+r0+'</span><input id="rROb0" type="number" class="form-control respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-4"> π + φ </span><span id="rOb1" style="display:none;">'+r1+'</span><input id="rROb1" type="number" class="form-control respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-4">'+n3+' √'+n4+' −e </span><span id="rOb2" style="display:none;">'+r2+'</span><input id="rROb2" type="number" class="form-control respuestas"><br><br></li></div>'],
            ['<div class="col-sm-6"><li><span class="np0 col-sm-4">('+n5+' / √'+n6+') + '+n7+'</span><span id="rOb3" style="display:none;">'+r3+'</span><input id="rROb3" type="number" class="form-control respuestas"><br><br></li></div>'],
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#irROb").append( item );
      });

      }



  var notaFinalP1 = 0;
  function Resp1(){

      var resp = 0;
      var a = '';

      for(var i=0; i<4; i++){
          resp = Math.pow((parseInt($('#exD'+i).text())), 1/parseInt($('#rad'+i).text()));
          if(parseFloat($('#rexDMay'+i).val()).toFixed(4) == resp.toFixed(4)) {
              $('#rexDMay'+i).css("background-color", "#5ED188");
              notaFinalP1++;
          }else{
              $('#rexDMay'+i).css("background-color", "#EF87A7");
          } 

          a = resp.toString().substr(0, 6)
          if($('#rexDMen'+i).val() == a) {
              $('#rexDMen'+i).css("background-color", "#5ED188");
              notaFinalP1++;
          }else{
              $('#rexDMen'+i).css("background-color", "#EF87A7");
          } 
      }

  }




      
  var notaFinalP2 = 0;
  function Resp2(){
   
       for(var i=0; i<5; i++){
          if((($('#rRR'+i).val()).toUpperCase()).replace(/ /g, "") == 'RACIONAL'){
              notaFinalP2++;
              $('#rRR'+i).css("background-color", "#5ED188");
          }else{
              $('#rRR'+i).css("background-color", "#EF87A7");
          } 
       }


       for(var j=5; j<9; j++){
          if((($('#rRR'+j).val()).toUpperCase()).replace(/ /g, "") == 'IRRACIONAL'){
              notaFinalP2++;
              $('#rRR'+j).css("background-color", "#5ED188");
          }else{
              $('#rRR'+j).css("background-color", "#EF87A7");
          } 
       }

  }



  var notaFinalP4 = 0;
  function Resp4(){

          if((($('#rDiag').val()).toUpperCase()).replace(/ /g, "") == 'NÚMEROSIRRACIONALES' || (($('#rDiag').val()).toUpperCase()).replace(/ /g, "") == 'NUMEROSIRRACIONALES'){
              notaFinalP4++;
              $('#rDiag').css("background-color", "#5ED188");
          }else{
              $('#rDiag').css("background-color", "#EF87A7");
          } 

  }



  var notaFinalP5 = 0;
  function Resp5(){

    if(parseFloat($('#rM0').text()) > parseFloat($('#rM1').text())) {
        if((($('#rVf'+0).val())) == 'VERDADERO'){
              notaFinalP5++;
              $('#rVf'+0).css("background-color", "#5ED188");
          }else{
              $('#rVf'+0).css("background-color", "#EF87A7");
          }
    }else{
      if((($('#rVf'+0).val())) == 'FALSO'){
              notaFinalP5++;
              $('#rVf'+0).css("background-color", "#5ED188");
          }else{
              $('#rVf'+0).css("background-color", "#EF87A7");
          }
    }


      for(var i=1; i<4; i++){
          if((($('#rVf'+i).val())) == 'VERDADERO'){
              notaFinalP5++;
              $('#rVf'+i).css("background-color", "#5ED188");
          }else{
              $('#rVf'+i).css("background-color", "#EF87A7");
          }
      } 

  }




  var notaFinalP6 = 0;
  function Resp6(){

      for(var i=0; i<4; i++){        
          if((parseFloat($('#rROb'+i).val())).toString().substr(0, 4) == (parseFloat($('#rOb'+i).text())).toString().substr(0, 4)) {
              notaFinalP6++;
              $('#rROb'+i).css("background-color", "#5ED188");
          }else{
              $('#rROb'+i).css("background-color", "#EF87A7");
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
            Preg4();
            Preg5();
            Preg6();

           function confirmar() {
            Resp1();
            Resp2();
            Resp4();
            Resp5();
            Resp6();


            var nota1 = (notaFinalP1*2)/8;
            var nota2 = (notaFinalP2*2)/9;
            var nota3 = parseFloat($('#calificacion0').val());
            var nota4 = notaFinalP4;
            var nota5 = notaFinalP5/4;
            var nota6 = (notaFinalP6*2)/4;


            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6).toFixed(2);

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
