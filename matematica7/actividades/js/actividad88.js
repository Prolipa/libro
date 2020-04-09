
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






    function Preg6(){


      var contenidos1 = [

            '<li>En un colegio se destinan <span class="np2">1,8</span> hectáreas para parques y canchas. El <span class="np2">40</span>% de esa extensión corresponde a caminos y corredores, en los que se colocan baldosas cuadradas de <span class="np2">20</span> centímetros de lado. ¿Cuántas baldosas se necesitan?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; Se necesitan &nbsp;&nbsp;<input type="number" id="rAT0" class="form-control respuestas" style="width: 120px;">&nbsp;&nbsp;baldosas.'+
                                    '</div>'+
                                    '<br><br></li>',
            '<li>Vanesa siembra trigo en <span class="np2">0,575</span> hectáreas, avena en <span class="np2">32,5</span> decámetros cuadrados y papas en <span class="np2">6300</span> centiáreas. ¿Cuántas hectáreas sembró Vanesa?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; Vanesa sembró &nbsp;&nbsp;<input type="number" id="rAT1" class="form-control respuestas" style="width: 120px;">&nbsp;&nbsp; hectáreas.'+
                                    '</div>'+
                                    '<br><br></li>',
        ]
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#problemasCol0").append( item );
        });




        var contenidos2 = [
                            '<li>Si la suma de los lados de un triángulo equilátero da <span class="np2">18,54</span> centímetros y la altura es de <span class="np2">5,35</span> centímetros, ¿cuál es su área?<br> <b>Aproxima la respuesta a centésimos</b>.'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="justify">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; El área del triángulo es de &nbsp;&nbsp;<input type="number" id="rAT2" class="form-control respuestas" style="width: 100px;">&nbsp;&nbsp; centímetros cuadrados.'+
                                    '</div>'+
                                    '<br><br></li>',
                            '<li>En la lotización Rancho Hermoso, se trabaja en tres etapas. En la primera se lotizan <span class="np2">2/5</span> ; en la segunda, <span class="np2">1/3</span> ; y en la tercera, <span class="np2">14/5</span> de <span class="np2">1,28</span> hectáreas. ¿Cuántos metros cuadrados se lotizan en cada etapa?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="justify">'+
                                       '<span class="np0">R. </span>&nbsp;&nbsp; En la primera etapa se lotizan <input type="number" id="rAT3" class="form-control respuestas" style="width: 100px;"> metros cuadrados; en la segunda,'+
                                       '&nbsp;&nbsp; <input type="number" id="rAT4" class="form-control respuestas" style="width: 100px;"> metros cuadrados;<br>y en tercera'+
                                       '&nbsp;&nbsp; <input type="number" id="rAT5" class="form-control respuestas" style="width: 100px;"> metros cuadrados.'+
                                    '</div>'+
                                    '<br><br></li>',
        ]
        contenidos2.sort(f_randomico);

        $.each( contenidos2, function( i, item ) {
          $("#problemasCol1").append( item );
        });


          var nPH0 = Math.round(Math.random() * (40 - 10) + 10);  
          var nPH1 = Math.round(Math.random() * (10 - 2) + 2);  
          $('#nPH0').append(nPH0);
          $('#nPH1').append(nPH1);

          var nAG0 = Math.round(Math.random() * (10 - 2) + 2);  
          var nAG1 = Math.round(Math.random() * (40 - 10) + 10);
          var nAG2 = Math.round(Math.random() * (10 - 2) + 2);

          $('#nAG0').append(nAG0);
          $('#nAG1').append(nAG1);
          $('#nAG2').append(nAG2);



        
    }




    var notaFinalP1 = 0;
    function Resp1(){
var nCP = 0;
      var rCP = 0;
      var ac;
      var res = 'Equilátero';
      var resp = 24;
     for(var i=0; i<3; i++){
      if(i==1){res = 'Isósceles';}
      if(i==2){res = 'Escaleno';}

        if( $('#rFig'+i).val() == res ){
            notaFinalP1++;
            $('#rFig'+i).css("background-color", "#75D685");
        }else{
            $('#rFig'+i).css("background-color", "#EF87A7");
        }



        rCP = ((($('#rPer'+i).val()).replace(/ |,|cm|-/g, "")).toLowerCase().split('+'));

          ac = 1;
          for(var j=0; j<rCP.length; j++){
              ac = ac + rCP[j];
          }

          if(i==1){resp = 25;}
          if(i==2){resp = 9;}

          if(ac == resp && ($('#rPer'+i).val()) != '' ){
              notaFinalP1++     
              $('#rPer'+i).css("background-color", "#5ED188");
          }else{
              $('#rPer'+i).css("background-color", "#EF87A7");
          }

     }
    
    }



   
  var notaFinalP2 = 0;
  function Resp2(){

    var resp=6;
    for(var i=0; i<2; i++){

          if(i==1){resp = 12.5;}

          if(($('#rAr'+i).val()) == resp ){
              notaFinalP2++     
              $('#rAr'+i).css("background-color", "#5ED188");
          }else{
              $('#rAr'+i).css("background-color", "#EF87A7");
          }
    }
  }





  var notaFinalP6 = 0;
  function Resp6(){


    var res2 = 180000;
      for( var i=0; i<6; i++){

          if(i==1){res2=1.53;}
          if(i==2){res2=16.53;}
          if(i==3){res2=5120;}
          if(i==4){res2=4266.67;}
          if(i==5){res2=3413.33;}

          if( parseFloat($('#rAT'+i).val()) == res2 ) {
              notaFinalP6++     
              $('#rAT'+i).css("background-color", "#5ED188");
          }else{
              $('#rAT'+i).css("background-color", "#EF87A7");
          }
      }
        


  }




  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio(); 
            Preg6();

           function confirmar() {
            Resp1();
            Resp2();
            Resp6();

            var nota1 = (notaFinalP1*2.5)/6;
            var nota2 = (notaFinalP2*2.5)/2;
            var nota6 = (notaFinalP6*5)/6;     

            var notaFinal = (nota1+nota2+nota6).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
         confirmar();         
      });
    });


