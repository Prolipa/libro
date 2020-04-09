
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

      var nCU0 = Math.round(Math.random() * (9000 - 1000) + 1000);
      $('#nCU0').append(nCU0);
      var nCU1 = Math.round(Math.random() * (900 - 100) + 100);
      $('#nCU1').append(nCU1);
      var nCU2 = Math.round(Math.random() * (90 - 10) + 10);
      $('#nCU2').append(nCU2);
      var nCU3 = Math.round(Math.random() * (900 - 100) + 100);
      $('#nCU3').append(nCU3);
      var nCU4 = Math.round(Math.random() * (900 - 100) + 100);
      $('#nCU4').append(nCU4);
      var nCU5 = (Math.random() * (0.99 - 0.20) + 0.20).toFixed(2);
      $('#nCU5').append(nCU5);
      var nCU6 = Math.round(Math.random() * (9000 - 1000) + 1000);
      $('#nCU6').append(nCU6);
      var nCU7 = (Math.random() * (90 - 10) + 10).toFixed(2);
      $('#nCU7').append(nCU7);
      var nCU8 = Math.round(Math.random() * (9 - 2) + 2);
      $('#nCU8').append(nCU8);
      var nCU9 = (Math.random() * (900 - 100) + 100).toFixed(2);
      $('#nCU9').append(nCU9);
      var nCU10 = (Math.random() * (0.99 - 0.20) + 0.20).toFixed(2);
      $('#nCU10').append(nCU10);
      var nCU11 = (Math.random() * (0.99 - 0.20) + 0.20).toFixed(2);
      $('#nCU11').append(nCU11);
      var nCU12 = Math.round(Math.random() * (9000 - 1000) + 1000);
      $('#nCU12').append(nCU12);
      var nCU13 = Math.round(Math.random() * (90000 - 10000) + 10000);
      $('#nCU13').append(nCU13);
      var nCU14 = (Math.random() * (900 - 100) + 100).toFixed(3);
      $('#nCU14').append(nCU14);
      var nCU15 = (Math.random() * (900 - 100) + 100).toFixed(3);
      $('#nCU15').append(nCU15);
      var nCU16 = Math.round(Math.random() * (90000 - 10000) + 10000);
      $('#nCU16').append(nCU16);
      var nCU17 = (Math.random() * (0.99 - 0.20) + 0.20).toFixed(2);
      $('#nCU17').append(nCU17);
    }




   function Preg2(){

        var nVal0 =  Math.round(Math.random() * (900 - 50) + 50);
        var nVal1 =  Math.round(Math.random() * (900 - 50) + 50);
        var nVal2 =  Math.round(Math.random() * (900 - 50) + 50);
        var nVal3 =  Math.round(Math.random() * (900 - 50) + 50);
        var nVal4 =  Math.round(Math.random() * (900 - 50) + 50);
        var nVal5 =  Math.round(Math.random() * (900 - 50) + 50);

        $('#nEq0').append(nVal0);
        $('#nEq1').append(nVal1);
        $('#nEq2').append(nVal2);
        $('#nEq3').append(nVal3);
        $('#nEq4').append(nVal4);
        $('#nEq5').append(nVal5);


      var contenidos = [
            ['<div class="col-sm-4"><p class="literal" id="rVal0" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR0" name="sR00" value="1">&nbsp;&nbsp;<span class="np1">'+(nVal0*10000)+' m<sup>2</sup></p></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np1">'+(nVal0*1000)+' m<sup>2</sup></span></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np1">'+(nVal0*100)+' m<sup>2</sup></span></span></div>']            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#valores0").append( item );
      });

      var contenidos = [
            ['<div class="col-sm-4"><p class="literal" id="rVal1" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR1" name="sR01" value="1">&nbsp;&nbsp;<span class="np1">'+(nVal1/10000)+' ha</p></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp;<span class="np1">'+(nVal1/1000)+' ha</span></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp;<span class="np1">'+(nVal1/100)+' ha</span></span></div>']            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#valores1").append( item );
      });

      var contenidos = [
            ['<div class="col-sm-4"><p class="literal" id="rVal2" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR2" name="sR02" value="1">&nbsp;&nbsp;<span class="np1">'+(nVal2*100)+' m<sup>2</sup></p></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp;<span class="np1">'+(nVal2*1000)+' m<sup>2</sup></span></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp;<span class="np1">'+(nVal2*10000)+' m<sup>2</sup></span></span></div>']            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#valores2").append( item );
      });


      var contenidos = [
            ['<div class="col-sm-4"><p class="literal" id="rVal3" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR3" name="sR03" value="1">&nbsp;&nbsp;<span class="np1">'+(nVal3/100)+' a</p></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR03" value="">&nbsp;&nbsp;<span class="np1">'+(nVal3/1000)+' a</span></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR03" value="">&nbsp;&nbsp;<span class="np1">'+(nVal3/10000)+' a</span></span></div>']            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#valores3").append( item );
      });


      var contenidos = [
            ['<div class="col-sm-4"><p class="literal" id="rVal4" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR4" name="sR04" value="1">&nbsp;&nbsp;<span class="np1">'+(nVal4)+' m<sup>2</sup></p></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR04" value="">&nbsp;&nbsp;<span class="np1">'+(nVal4*10)+' a</span></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR04" value="">&nbsp;&nbsp;<span class="np1">'+(nVal4*100)+' hm</span></span></div>']            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#valores4").append( item );
      });


      var contenidos = [
            ['<div class="col-sm-4"><p class="literal" id="rVal5" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR5" name="sR05" value="1">&nbsp;&nbsp;<span class="np1">'+(nVal5)+' ha</p></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR05" value="">&nbsp;&nbsp;<span class="np1">'+(nVal5*1000)+' ha</span></span></div>'],            
            ['<div class="col-sm-4"><span class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR05" value="">&nbsp;&nbsp;<span class="np1">'+(nVal5*100)+' m<sup>2</sup></span></span></div>']            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#valores5").append( item );
      });


    }



    function Preg3(){

        var nMt = [];

        for(var i=0; i<3; i++) {            
            for(var j=0; j<3; j++) {
              nMt[j] = (Math.round(Math.random() * (9000 - 1) + 1));
              if(i==0){
                if(j==0){nMt[j]=((Math.random() * (9000 - 1) + 1).toFixed(1));}    
                if(j==1){nMt[j]=(Math.round(Math.random() * (9000 - 1) + 1));}
              }
              if(i==1){
                if(j==0){nMt[j]=((Math.random() * (9000 - 1) + 1).toFixed(2));}
                if(j==1){nMt[j]=((Math.random() * (9000 - 1) + 1).toFixed(2));}                
              }
              if(i==1){
                if(j==3){nMt[j]=(Math.round(Math.random() * (9000 - 1) + 1));}
              }


                
                $('#nMt'+i+''+j).append(nMt[j]);
                $('#nM'+i+''+j).append(nMt[j]);
            }
        }
        
    }




    function Preg4(){

        var nEH = [];
        for(var i=0; i<8; i++) {            

            nEH[i] = ((Math.random() * (9000 - 1) + 1).toFixed(2));
                
            $('#nEH'+i).append(nEH[i]);
        }
        
    }



    function Preg5(){



        var contenidos = [
            '<li> <span class="np1">&nbsp;&nbsp;3/4</span> ha<br><br></li>',
            '<li> <span class="np1">&nbsp;&nbsp;1200</span> m<sup>2</sup><br><br></li>',
            '<li> <span class="np1">&nbsp;&nbsp;10</span> ha<br><br></li>',
            '<li> <span class="np1">&nbsp;&nbsp;1000</span> dam<sup>2</sup><br><br></li>',
            '<li> <span class="np1">&nbsp;&nbsp;1/2</span> ha<br><br></li>',
        ]
        contenidos.sort(f_randomico);

        $.each( contenidos, function( i, item ) {
          $("#columA").append( item );
        });


        var contenidos1 = [
            '<li> <span class="np1">&nbsp;&nbsp;100000</span> m<sup>2</sup><br><br></li>',
            '<li> <span class="np1">&nbsp;&nbsp;5000</span> m<sup>2</sup><br><br></li>',
            '<li> <span class="np1">&nbsp;&nbsp;1200</span> ca<br><br></li>',
            '<li> <span class="np1">&nbsp;&nbsp;7500</span> m<sup>2</sup><br><br></li>',
            '<li> <span class="np1">&nbsp;&nbsp;10</span> ha<br><br></li>',
        ]
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#columB").append( item );
        });

    }



    function Preg6(){


      var contenidos1 = [
            '<li>Elisa analiza un bosque que tiene una extensión de <span class="np2" id="nPH0"></span> hectáreas y calcula que cada <span class="np2" id="nPH1"></span> metros cuadrados hay un árbol. ¿Cuántos árboles hay en total?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span> Hay &nbsp;&nbsp;<input type="number" id="rPH0" class="form-control respuestas" style="width: 120px;">&nbsp;&nbsp; árboles en total.'+
                                    '</div>'+
                                    '<br><br></li>',
            '<li>La Asociación de Agricultores del Guayas tiene a su cargo tres cultivos: <span class="np2" id="nAG0"></span> hectómetros cuadrados de plátano, <span class="np2" id="nAG1"></span> decámetros cuadrados de mango y <span class="np2" id="nAG2"></span> hectáreas de naranja. ¿Cuántas centiáreas tiene, en total, a su cargo?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; A cargo de la Asociación hay &nbsp;&nbsp;<input type="number" id="rAG0" class="form-control respuestas" style="width: 120px;">&nbsp;&nbsp; centiáreas.'+
                                    '</div>'+
                                    '<br><br></li>',
            '<li>Se lotiza un terreno de <span class="np2" id="nLT0">72.5</span> hectáreas para la construcción de un parque industrial. Se destina el <span class="np2" id="nLT1">52</span>% para áreas comunales, lugares de descarga y parqueaderos. El resto se divide en <span class="np2" id="nLT2">72</span> lotes. Si el precio es de $ <span class="np2" id="nLT03">12.5</span> por metro cuadrado, ¿cuánto cuesta cada lote?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; Cada lote cuesta &nbsp;&nbsp;<input type="number" id="rAT0" class="form-control respuestas" style="width: 120px;">&nbsp;&nbsp;.'+
                                    '</div>'+
                                    '<br><br></li>',
            '<li>¿Cuántos árboles se pueden plantar en un terreno de <span class="np2" id="nAT0">1.305</span> hectáreas, si cada árbol necesita <span class="np2" id="nAT1">3</span> metros cuadrados para tener un óptimo desarrollo?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; Se pueden plantar &nbsp;&nbsp;<input type="number" id="rAT1" class="form-control respuestas" style="width: 120px;">&nbsp;&nbsp; árboles.'+
                                    '</div>'+
                                    '<br><br></li>',
            '<li>Se desea lotizar un terreno de forma rectangular que mide <span class="np2" id="nTR0">2.8</span> hectómetros por <span class="np2" id="nTR1">25</span> decámetros, en lotes de <span class="np2" id="nTR0">0.25</span> de hectárea cada uno. Si el precio por hectárea es de $ <span class="np2" id="nTR0">145300</span>, ¿cuántos lotes se obtienen y cuál es el precio de cada uno?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; Se obtienen &nbsp;&nbsp;<input type="number" id="rAT2" class="form-control respuestas" style="width: 70px;">&nbsp;&nbsp; lotes y cada uno cuesta &nbsp;&nbsp;<input type="number" id="rAT3" class="form-control respuestas" style="width: 100px;">.'+
                                    '</div>'+
                                    '<br><br></li>',
        ]
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#problemasCol0").append( item );
        });




        var contenidos2 = [
                            '<li>En una provincia de la Sierra ecuatoriana se han destruido <span class="np2" id="nSE0">138</span> hectáreas de bosques por incendios. ¿Cuántos metros cuadrados se han quemado?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; Se han quemado &nbsp;&nbsp;<input type="number" id="rAT4" class="form-control respuestas" style="width: 100px;">&nbsp;&nbsp; m<sup>2</sup>.'+
                                    '</div>'+
                                    '<br><br></li>',
                            '<li>Tres amigos compraron terrenos junto al río. Juan compró <span class="np2" id="nTJR0">0.5</span> hectáreas; Luis, <span class="np2" id="nTJR1">67,28</span> decámetros cuadrados; y Susana, <span class="np2" id="nTJR2">5348</span> metros cuadrados. ¿Quién compró el terreno más grande y quién el más pequeño? <b>Expresa</b> las respuestas en centiáreas.'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. </span>&nbsp;&nbsp; Juan <input type="number" id="rAT5" class="form-control respuestas" style="width: 80px;"> ca;'+
                                       '&nbsp;&nbsp; Luis <input type="number" id="rAT6" class="form-control respuestas" style="width: 80px;"> ca;'+
                                       '&nbsp;&nbsp; Susana <input type="number" id="rAT7" class="form-control respuestas" style="width: 80px;"> ca;'+
                                    '</div>'+
                                    '<br><br></li>',
                            '<li>Xavier tiene una finca de <span class="np2" id="nFH0">35</span> hectáreas. Siembra <span class="np2" id="nFH1">180000</span> metros cuadrados de mandarinas, <span class="np2" id="nFH2">96000</span> metros cuadrados de piña y en el resto siembra cacao. ¿Cuántos metros cuadrados quedaron para el cacao?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; A Xavier le quedan &nbsp;&nbsp;<input type="number" id="rAT8" class="form-control respuestas" style="width: 100px;">&nbsp;&nbsp; m<sup>2</sup> para sembrar cacao.'+
                                    '</div>'+
                                    '<br><br></li>',
                            '<li>Camila recibe como herencia de sus padres una finca que tiene una superficie de <span class="np2" id="nCH0">12</span> hectáreas. Si decide vender el <span class="np2" id="nCH1">30</span>% para incrementar la producción ganadera, ¿con cuántos metros cuadrados se queda?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; Camila se queda con &nbsp;&nbsp;<input type="number" id="rAT9" class="form-control respuestas" style="width: 100px;">&nbsp;&nbsp; m<sup>2</sup>.'+
                                    '</div>'+
                                    '<br><br></li>',
                            '<li>Si en un metro cuadrado se siembran <span class="np2" id="nCA0">4</span> tallos de caña de azúcar, ¿cuántos se sembrarán en <span class="np2" id="nCA1">25</span> hectáreas?'+
                                    '<br><br>'+
                                    '<div class="form-inline form-group" align="center">'+
                                       '<span class="np0">R. &nbsp;&nbsp;</span>&nbsp;&nbsp; Se sembrará &nbsp;&nbsp;<input type="number" id="rAT10" class="form-control respuestas" style="width: 100px;">&nbsp;&nbsp; de tallos.'+
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

      var resp;

      for(var i=0; i<18; i++) {
        if(i==0){resp = (parseFloat($('#nCU'+i).text()) / 100);}
        if(i==1){resp = (parseFloat($('#nCU'+i).text()) * 100);}
        if(i==2){resp = (parseFloat($('#nCU'+i).text()) / 100);}
        if(i==3){resp = (parseFloat($('#nCU'+i).text()) / 100);}
        if(i==4){resp = (parseFloat($('#nCU'+i).text()));}
        if(i==5){resp = (parseFloat($('#nCU'+i).text()) * 10000);}

        if(i==6){resp = (parseFloat($('#nCU'+i).text())/10000);}
        if(i==7){resp = (parseFloat($('#nCU'+i).text()) * 100);}
        if(i==8){resp = (parseFloat($('#nCU'+i).text()));}
        if(i==9){resp = (parseFloat($('#nCU'+i).text()) / 100);}
        if(i==10){resp = (parseFloat($('#nCU'+i).text()));}
        if(i==11){resp = Math.round(parseFloat($('#nCU'+i).text()) * 33);}//revisar

        if(i==12){resp = (parseFloat($('#nCU'+i).text()) / 100);}
        if(i==13){resp = (parseFloat($('#nCU'+i).text()) / 10000);}
        if(i==14){resp = (parseFloat($('#nCU'+i).text()) * 100);}
        if(i==15){resp = (parseFloat($('#nCU'+i).text()) * 100);}
        if(i==16){resp = (parseFloat($('#nCU'+i).text()) / 100);}
        if(i==17){resp = Math.round(parseFloat($('#nCU'+i).text()) * 666);}
      
        if( $('#rCU'+i).val() == resp ){
          notaFinalP1++;
          $('#rCU'+i).css("background-color", "#5ED188");
        }else{
          $('#rCU'+i).css("background-color", "#EF87A7");
        } 
      } 
    
    }



   
  var notaFinalP2 = 0;
  function Resp2(){

    for(var i=0; i<6; i++) {
        if(document.getElementById('sR'+i).checked){
           notaFinalP2++     
           $('#rVal'+i).css("background-color", "#5ED188");
        }else{
           $('#rVal'+i).css("background-color", "#EF87A7");
        }
    }
    

  }





  var notaFinalP3 = 0;
  function Resp3(){

    if( ($('#rSV00').val()) == 243126 ) {
        notaFinalP3++     
        $('#rSV00').css("background-color", "#5ED188");
    }else{
        $('#rSV00').css("background-color", "#EF87A7");
    }


    var mul = 10000;
    var acum = 0;
      for(var i=0; i<3; i++) {


          for(var j=0; j<3; j++) {

              if(j==2){mul=1;}

              if(i==1){
                if(j==1){mul=100;}
                if(j==2){mul=10000;}
              }

              if(i==2){
                if(j==0){mul=1;}
                if(j==1){mul=10000;}
                if(j==2){mul=100;}
              }


              acum = acum + ( parseFloat($('#nMt'+i+''+j).text()) *  mul );             
              if( ($('#rMt'+i+''+j).val()) == ( parseFloat($('#nMt'+i+''+j).text()) *  mul ) ) {
                  notaFinalP3++     
                  $('#rMt'+i+''+j).css("background-color", "#5ED188");
              }else{
                  $('#rMt'+i+''+j).css("background-color", "#EF87A7");
              }
          }

        if( ($('#rSV'+i).val()) == acum ) {
            notaFinalP3++     
            $('#rSV'+i).css("background-color", "#5ED188");
        }else{
            $('#rSV'+i).css("background-color", "#EF87A7");
        }

        acum = 0;
      }
    

  }





  var notaFinalP4 = 0;
  function Resp4(){


    var res;
      for(var i=0; i<7; i=i+2) {

        if(i==0){
          res=( (parseFloat($('#nEH'+i).text())/100) + (parseFloat($('#nEH'+(i+1)).text())/10000) );
        }
        if(i==2){
          res=( (parseFloat($('#nEH'+i).text())/1000000) + (parseFloat($('#nEH'+(i+1)).text())/100) );
        }
        if(i==4){
          res=( (parseFloat($('#nEH'+i).text())/10000) + (parseFloat($('#nEH'+(i+1)).text())/100) );
        }
        if(i==6){
          res=( (parseFloat($('#nEH'+i).text())/1000000) + (parseFloat($('#nEH'+(i+1)).text())*100) );
        }
        
        if( parseFloat($('#rEH'+i).val()).toFixed() == res.toFixed() ) {
            notaFinalP4++     
            $('#rEH'+i).css("background-color", "#5ED188");
        }else{
            $('#rEH'+i).css("background-color", "#EF87A7");
        }

      }
    

  }



  var notaFinalP6 = 0;
  function Resp6(){

    var res;
        res=( (parseFloat($('#nPH0').text())*10000) / (parseFloat($('#nPH1').text())) );
        if( parseFloat($('#rPH0').val()).toFixed() == res.toFixed() ) {
            notaFinalP6++     
            $('#rPH0').css("background-color", "#5ED188");
        }else{
            $('#rPH0').css("background-color", "#EF87A7");
        }

    var res1;
        res1=( (parseFloat($('#nAG0').text())*10000) + (parseFloat($('#nAG1').text())*100) + (parseFloat($('#nAG2').text())*10000) );
        if( parseFloat($('#rAG0').val()) == res1 ) {
            notaFinalP6++     
            $('#rAG0').css("background-color", "#5ED188");
        }else{
            $('#rAG0').css("background-color", "#EF87A7");
        }



    var res2 = 76315.79;
      for( var i=0; i<11; i++){

          if(i==1){res2=43501;}
          if(i==2){res2=28;}
          if(i==3){res2=36325;}
          if(i==4){res2=1380000;}
          if(i==5){res2=5000;}
          if(i==6){res2=6728;}
          if(i==7){res2=5348;}
          if(i==8){res2=74000;}
          if(i==9){res2=84000;}
          if(i==10){res2=1000000;}


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
            Preg1();
            Preg2();
            Preg3();
            Preg4();
            Preg5();
            Preg6();

           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4();
            Resp6();

            var nota1 = (notaFinalP1)/18;
            var nota2 = (notaFinalP2)/6;
            var nota3 = (notaFinalP3)/13;
            var nota4 = (notaFinalP4)/4;
            var nota5 = parseFloat($('#calificacion0').val());
            var nota6 = (notaFinalP6*5)/13;         

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


