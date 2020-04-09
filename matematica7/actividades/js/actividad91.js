
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
          var val0 = (Math.round(Math.random() * (1000) + 10));
          var patron0 = (Math.round(Math.random() * (10) + 2));
          var val1 = (Math.round(Math.random() * (1000) + 10));
          var patron1 = (Math.round(Math.random() * (10) + 2));
          var val2 = (Math.round(Math.random() * (100) + 10));
          var patron2 = (Math.round(Math.random() * (10) + 2));           
          var patron3 = (Math.round(Math.random() * (10) + 2)); 
          var val3 = (Math.round(Math.random() * (100) + 10))*(Math.pow(patron3, 6));       

          var contenidos = [
            ['<div class="col-sm-6"><li><span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel0" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron0" class="form-control" style="width: 90px;">' +
          '<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tipo:&nbsp;&nbsp;' +
          '<select class="form-control" id="selC0" style="font-size: 17px;"><option></option><option>creciente</option><option>decreciente</option></select><br><br>' +
          'Sucesión: &nbsp;&nbsp;<span class="np0" id="p0T0">'+(val0+(patron0))+'</span>, &nbsp;&nbsp;<span class="np0" id="p0T0_0">'+(val0+(patron0*2))+'</span>, &nbsp;&nbsp;<span class="np0">'+(val0+(patron0*3))+', &nbsp;&nbsp;'+(val0+(patron0*4))+', &nbsp;&nbsp;'+(val0+(patron0*5))+', &nbsp;&nbsp;'+(val0+(patron0*6))+'</span></li><br><br></div>'],
           
            ['<div class="col-sm-6"><li><span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel1" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron1" class="form-control" style="width: 90px;">' +
          '<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tipo:&nbsp;&nbsp;' +
          '<select class="form-control" id="selC1" style="font-size: 17px;"><option></option><option>creciente</option><option>decreciente</option></select><br><br>' +
          'Sucesión: &nbsp;&nbsp;<span class="np0" id="p0T1">'+(val1-(patron1))+'</span>, &nbsp;&nbsp;<span class="np0" id="p0T1_1">'+(val1-(patron1*2))+'</span>, &nbsp;&nbsp;<span class="np0">'+(val1-(patron1*3))+', &nbsp;&nbsp;'+(val1-(patron1*4))+', &nbsp;&nbsp;'+(val1-(patron1*5))+', &nbsp;&nbsp;'+(val1-(patron1*6))+'</span></li><br><br></div>'],
            
            ['<div class="col-sm-6"><li><span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel2" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron2" class="form-control" style="width: 90px;">' +
          '<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tipo:&nbsp;&nbsp;' +
          '<select class="form-control" id="selC2" style="font-size: 17px;"><option></option><option>creciente</option><option>decreciente</option></select><br><br>' +
          'Sucesión: &nbsp;&nbsp;<span class="np0" id="p0T2">'+(val2*(patron2))+'</span>, &nbsp;&nbsp;<span class="np0" id="p0T2_2">'+(val2*((Math.pow(patron2, 2))))+'</span>, &nbsp;&nbsp;<span class="np0">'+(val2*((Math.pow(patron2, 3))))+', &nbsp;&nbsp;'+(val2*((Math.pow(patron2, 4))))+', &nbsp;&nbsp;'+(val2*((Math.pow(patron2, 5))))+', &nbsp;&nbsp;'+(val2*((Math.pow(patron2, 6))))+'</span></li><br><br></div>'],  

            ['<div class="col-sm-6"><li><span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel3" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron3" class="form-control" style="width: 90px;">' +
          '<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tipo:&nbsp;&nbsp;' +
          '<select class="form-control" id="selC3" style="font-size: 17px;"><option></option><option>creciente</option><option>decreciente</option></select><br><br>' +
          'Sucesión: &nbsp;&nbsp;<span class="np0" id="p0T3">'+((val3)/(patron3))+'</span>, &nbsp;&nbsp;<span class="np0" id="p0T3_3">'+((val3)/(Math.pow(patron3, 2)))+'</span>, &nbsp;&nbsp;<span class="np0">'+((val3)/(Math.pow(patron3, 3)))+', &nbsp;&nbsp;'+((val3)/(Math.pow(patron3, 4)))+', &nbsp;&nbsp;'+((val3)/(Math.pow(patron3, 5)))+', &nbsp;&nbsp;'+((val3)/(Math.pow(patron3, 6)))+'</span></li><br><br></div>'],  
          
          ]

          contenidos.sort(f_randomico);
          $.each( contenidos, function( i, item ) {
        $( ".lista1" ).append( item );
          });
  }



  function Preg2(){            
       var val0 = Math.round(Math.random() * (1000 - 100) + 100);
          var sig = Math.round(Math.random() * (4 - 1) + 1);
          var patron0 = Math.round(Math.random() * (20 - 10) + 10);
          var patron1 = Math.round(Math.random() * (20 - 10) + 10);     

          var contenidos = [];
          contenidos[0] = '<span>a) &nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel00" style="font-size: 17px;" display: inline-block;><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p00Patron0" class="form-control" style="width: 70px; display: inline-block;">,&nbsp;&nbsp;&nbsp;&nbsp; ' +
          '<select class="form-control" id="selMul00" style="font-size: 17px; display: inline-block;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p00PatronMul0" class="form-control" style="width: 70px; display: inline-block;"><br><br> ' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="p00T0">'+(val0+(patron0))+'</span>, &nbsp;&nbsp; ' +
          '<span class="n0" id="p00T0_0">'+(val0+(patron0*2))+'</span>, &nbsp;&nbsp; ' +
          '<span class="n0" id="p00T0_1">'+((val0+(patron0*2))*(patron1))+
          ', &nbsp;&nbsp;'+(((val0+(patron0*2))*(patron1))+(patron0))+
          ', &nbsp;&nbsp;'+((((val0+(patron0*2))*(patron1))+(patron0))*(patron1))+
          ', &nbsp;&nbsp;<span class="n0" id="p00T0_fin">'+(((((val0+(patron0*2))*(patron1))+(patron0))*(patron1))+(patron0))+'</span>, </span>' +
          '<input type="number" id="suc0MulP1" class="form-control" style="width: 120px; display: inline-block;">, ' +
          '<input type="number" id="suc0SumP1" class="form-control" style="width: 120px; display: inline-block;"><br>';         


          $('#sucesion0').append(contenidos[0]);
    }




  function Preg3(){

      var nCSN1 = (Math.round(Math.random() * (999999) + 100000));
      var nCSN2 = (Math.round(Math.random() * (999999) + 100000));
      var div;
      var c=0;

      for(var i=1; i<13; i=i+2){

          div = '<div class="col-sm-4"> <span class="num'+c+' col-sm-4" id="nCSN'+i+'" style="display: inline-block;"></span> <span class="col-sm-4" style="display: inline-block;"> <select class="form-control respuestas" id="rCSN'+i+'"> <option></option> <option><</option> <option>></option> <option>=</option> </select> </span> <span class="num'+c+' col-sm-4" id="nCSN'+(i+1)+'" style="display: inline-block;"></span><br><br><br> </div>';

          $("#comparacion0").append(div);


        nCSN1 = (Math.round(Math.random() * (999999) + 100000));
        nCSN2 = (Math.round(Math.random() * (999999) + 100000));
        $("#nCSN"+(i)).append(nCSN1);
        $("#nCSN"+(i+1)).append(nCSN2);
        c++;
        if(c==3){c=0;}
      }      


  }




    function Preg4(){

      var nRPP1,nRPP2,nRPP3,nRPP4,nRPP5,nRPP6,nRPP7,nRPP8;

        for(var i=1; i<26; i=i+8){  
          nRPP1 = (Math.round(Math.random() * (30) + 2));
          nRPP2 = (Math.round(Math.random() * (30) + 2));
          nRPP3 = (Math.round(Math.random() * (30) + 2));
          nRPP4 = (Math.round(Math.random() * (30) + 2));
          nRPP5 = (Math.round(Math.random() * (30) + 2));
          nRPP6 = (Math.round(Math.random() * (30) + 2));
          nRPP7 = (Math.round(Math.random() * (30) + 2));
          nRPP8 = (Math.round(Math.random() * (30) + 2));

          $('#nRPP'+(i)).append(nRPP1);
          $('#nRPP'+(i+1)).append(nRPP2);
          $('#nRPP'+(i+2)).append(nRPP3);
          $('#nRPP'+(i+3)).append(nRPP4);
          $('#nRPP'+(i+4)).append(nRPP5);
            $('#nRPP'+(i+5)).append(nRPP6);
            $('#nRPP'+(i+6)).append(nRPP7);
            $('#nRPP'+(i+7)).append(nRPP8);
          
          
        }

    }




    function Preg5(){

      var nRPP;
        for(var i=0; i<12; i++){  
          nRPP = Math.round(Math.random() * (5 - 0) + 0);
          $('#nPLC'+(i)).append(nRPP);
        }

    }

  

    function Preg6(){

      var nROR=[];

          nROR[0] = Math.round(Math.random() * (50 - 30) + 30);
          $('#nROR0').append(nROR[0]);
          nROR[1] = Math.round(Math.random() * (6 - 2) + 2);
          $('#nROR1').append(nROR[1]);
          nROR[2] = Math.round(Math.random() * (6 - 2) + 2);
          $('#nROR2').append(nROR[2]);
          nROR[3] = Math.round(Math.random() * (25 - 2) + 2);
          $('#nROR3').append(nROR[3]);
          nROR[4] = Math.round(Math.random() * (5 - 2) + 2);
          $('#nROR4').append(nROR[4]);
        

        var resp = (nROR[0] - (nROR[1] * nROR[2]) + (nROR[3] / nROR[4])).toFixed(2);
        var respM = (Math.random() * (50 - 20) + 20).toFixed(2);

        var op = Math.round(Math.random() * (1 - 0) + 0);
        var opp;
        if(op == 0){
          opp=1;
          $('#rP6').append('Luisa tiene la razón.');
        }else{
          opp=0;
          $('#rP6').append('Eduardo tiene la razón.');
        }

        $('#oROR'+op).append(resp);
        $('#oROR'+opp).append(respM);

    }






    function Preg7(){


      var div = [];
      var c=1;
      var colores = ['#83DFAA','#83DFD6','#DFD283','#839CDF','#D283DF','#DF83A6','#D89C73'];
      colores.sort(f_randomico);

      for(var i=1; i<13; i=i+2){

        div[i] = '<div class="col-sm-6" align="center">'+
                                '<div align="justify" style="border-top-left-radius: 20px; border-bottom-right-radius: 20px; border: 2px solid; border-color: '+colores[c-1]+';"><br>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;Nombre: &nbsp;&nbsp;'+
                                    '<select id="rIDP'+i+'" class="form-control respuestas" style="display: inline-block; width: 80%;">'+
                                        '<option></option>'+
                                        '<option>Rectángulo</option>'+
                                        '<option>Trapecio isósceles</option>'+
                                        '<option>Cuadrado</option>'+
                                        '<option>Romboide</option>'+
                                        '<option>Rombo</option>'+
                                        '<option>Trapecio rectangular</option>'+
                                    '</select><br><br>'+
                                    '&nbsp;&nbsp;&nbsp;&nbsp;Propiedades: &nbsp;&nbsp;'+
                                    '<select id="rIDP'+(i+1)+'" class="form-control respuestas" style="display: inline-block; width: 74%;">'+
                                        '<option></option>'+
                                        '<option value="Trapecio isósceles">Lados no paralelos que miden igual</option>'+
                                        '<option value="Trapecio rectangular">4 lados diferentes, 2 de ellos paralelos; 2 ángulos rectos</option>'+
                                        '<option value="Rombo">4 lados iguales; 2 ángulos agudos y 2 ángulos obtusos (iguales de 2 en 2)</option>'+
                                        '<option value="Cuadrado">4 lados iguales; 4 ángulos iguales de 90°; lados opuestos paralelos</option>'+
                                        '<option value="Rectángulo">4 lados (iguales de 2 en 2); 4 ángulos rectos (90°)</option>'+
                                        '<option value="Romboide">Pares de lados opuestos paralelos; pares de ángulos opuestos iguales</option>'+
                                    '</select><br><br>'+
                                    '<div align="center">'+
                                        '<img src="img/i'+c+'_p134_act7.jpg" class="img-responsive"><br>'+
                                    '</div>'+
                                '</div><br><br>'+
                            '</div>';
            c++;
      }


      div.sort(f_randomico);
      $.each( div, function( i, item ) {
      $( "#figuras" ).append( item );
      });


    }





    function Preg8(){

      var nCP;
        for(var i=1; i<8; i++){  
          nCP = (Math.round(Math.random() * (90 - 20) + 20));
          $('#nCP'+i).append(nCP);
        }

    }




//////////////////////////////////////////////////////////


var notaFinalP1 = 0;
  function Resp1(){
  var signo = '';
      var operacion = 0;
      var crec = 'creciente';

    for(var i=0; i<4; i++){
      switch (i) {
        case 0:
            signo = '+';
            operacion = (parseInt($('#p0T'+(i)+'_'+(i)).text())) - ((parseInt($('#p0T'+(i)).text())));//suma
            break;
        case 1:
            signo = '-';
            operacion = (parseInt($('#p0T'+(i)).text())) - ((parseInt($('#p0T'+(i)+'_'+(i)).text())));//resta
            break;
        case 2:
            signo = 'x';
            operacion = (parseInt($('#p0T'+(i)+'_'+(i)).text())) / ((parseInt($('#p0T'+(i)).text())));//multiplicacion
            break;
        case 3:
            signo = '÷';            
            operacion = (parseInt($('#p0T'+(i)).text())) / ((parseInt($('#p0T'+(i)+'_'+(i)).text())));//division
      }      

        if(operacion == $('#p0Patron'+i).val()) {
          notaFinalP1++;
          $('#p0Patron'+i).css("background-color", "#5ED188");
          if($('#sel'+i).val() == signo) {
            notaFinalP1++;
            $('#sel'+i).css("background-color", "#5ED188");
          }else{
            $('#sel'+i).css("background-color", "#EF87A7");
          }
        }else{
          $('#p0Patron'+i).css("background-color", "#EF87A7");
          $('#sel'+i).css("background-color", "#EF87A7");
        }

        if(i==1){crec = 'decreciente'; }
        if(i==2){crec = 'creciente'; }
        if(i==3){crec = 'decreciente'; }

        if($('#selC'+i).val() == crec) {
            notaFinalP1++;
            $('#selC'+i).css("background-color", "#5ED188");
          }else{
            $('#selC'+i).css("background-color", "#EF87A7");
          }
      }    
    }





    var notaFinalP2 = 0;
      function Resp2(){      
          var operacionSum = 0;
      var operacionMul = 0;

    for(var i=0; i<1; i++){

        operacionSum = (parseInt($('#p00T'+(i)+'_'+(i)).text())) - ((parseInt($('#p00T'+(i)).text())));//suma

        operacionMul = (parseInt($('#p00T'+(i)+'_1').text())) / ((parseInt($('#p00T'+(i)+'_'+(i)).text())));//multiplicacion
  

        if(operacionSum == $('#p00Patron'+i).val()) {
          notaFinalP2++;
          $('#p00Patron'+i).css("background-color", "#5ED188");
          if($('#sel0'+i).val() == '+') {
            notaFinalP2++;
            $('#sel0'+i).css("background-color", "#5ED188");
          }else{
            $('#sel0'+i).css("background-color", "#EF87A7");
          }
        }else{
          $('#p00Patron'+i).css("background-color", "#EF87A7");
          $('#sel0'+i).css("background-color", "#EF87A7");
        }

        if($('#suc0SumP1').val() == (operacionSum + ($('#p00T0_fin').text() * operacionMul))) {
           notaFinalP2++;
          $('#suc0SumP1').css("background-color", "#5ED188");
        }else{
            $('#suc0SumP1').css("background-color", "#EF87A7");
        }

        if(operacionMul == $('#p00PatronMul'+i).val()) {
          notaFinalP2++;
          $('#p00PatronMul'+i).css("background-color", "#5ED188");
          if($('#selMul0'+i).val() == 'x') {
            notaFinalP2++;
            $('#selMul0'+i).css("background-color", "#5ED188");
          }else{
            $('#selMul0'+i).css("background-color", "#EF87A7");
          }
        }else{
          $('#p00PatronMul'+i).css("background-color", "#EF87A7");
          $('#selMul0'+i).css("background-color", "#EF87A7");
        }

        if($('#suc0MulP1').val() == (operacionMul * ($('#p00T0_fin').text()))) {
           notaFinalP2++;
          $('#suc0MulP1').css("background-color", "#5ED188");
        }else{
          $('#suc0MulP1').css("background-color", "#EF87A7");
        }

      }

      }


      var notaFinalP3 = 0;
      function Resp3(){

        for(var i=1; i<13; i=i+2){

            if( ($('#rCSN'+i).val()) == '<' ) {
              if( parseInt($('#nCSN'+i).text()) < parseInt($('#nCSN'+(i+1)).text()) ){
                  notaFinalP3++;
                  $('#rCSN'+i).css("background-color", "#5ED188");
              }else{
                  $('#rCSN'+i).css("background-color", "#EF87A7");
              }
            }

            if( ($('#rCSN'+i).val()) == '>' ) {
              if( parseInt($('#nCSN'+i).text()) > parseInt($('#nCSN'+(i+1)).text()) ){
                  notaFinalP3++;
                  $('#rCSN'+i).css("background-color", "#5ED188");
              }else{
                  $('#rCSN'+i).css("background-color", "#EF87A7");
              }
            }

            if( ($('#rCSN'+i).val()) == '=' ) {
              if( parseInt($('#nCSN'+i).text()) == parseInt($('#nCSN'+(i+1)).text()) ){
                  notaFinalP3++;
                  $('#rCSN'+i).css("background-color", "#5ED188");
              }else{
                  $('#rCSN'+i).css("background-color", "#EF87A7");
              }
            }

            if( ($('#rCSN'+i).val()) == '' ) {
                  $('#rCSN'+i).css("background-color", "#EF87A7");
            }

        }        

      }





      var notaFinalP4 = 0;
      function Resp4(){

        var resp;

        for(var i=1; i<26; i=i+8){  
          
          resp = ( parseInt($('#nRPP'+(i)).text()) + parseInt($('#nRPP'+(i+1)).text()) - (parseInt($('#nRPP'+(i+2)).text())*parseInt($('#nRPP'+(i+3)).text())) + (parseInt($('#nRPP'+(i+4)).text()) / parseInt($('#nRPP'+(i+5)).text())) );
          if(i==9){
            resp = ( (parseInt($('#nRPP'+(i)).text()) / parseInt($('#nRPP'+(i+1)).text())) + (parseInt($('#nRPP'+(i+2)).text()) - parseInt($('#nRPP'+(i+3)).text())) - parseInt($('#nRPP'+(i+4)).text()) + Math.pow(parseInt($('#nRPP'+(i+5)).text()),3) );
          }
          if(i==17){
            resp = ( (parseInt($('#nRPP'+(i)).text()) * parseInt($('#nRPP'+(i+1)).text())) - parseInt($('#nRPP'+(i+2)).text()) - (parseInt($('#nRPP'+(i+3)).text()) / parseInt($('#nRPP'+(i+4)).text())) + (parseInt($('#nRPP'+(i+5)).text()) * (parseInt($('#nRPP'+(i+6)).text()) - parseInt($('#nRPP'+(i+7)).text())) )  );
          }
          if(i==25){
           resp = ( Math.pow(parseInt($('#nRPP'+(i)).text()),2) + Math.pow(parseInt($('#nRPP'+(i+3)).text()), 1/3) - parseInt($('#nRPP'+(i+4)).text()) + (parseInt($('#nRPP'+(i+5)).text()) / parseInt($('#nRPP'+(i+6)).text())) );
          }

          if( parseInt($('#rRPP'+(i+1)).val()) == resp.toFixed() ) {
            notaFinalP4++;
            $('#rRPP'+i).css("background-color", "#5ED188");
            $('#rRPP'+(i+1)).css("background-color", "#5ED188");
          }else{
            $('#rRPP'+i).css("background-color", "#EF87A7");
            $('#rRPP'+(i+1)).css("background-color", "#EF87A7");
          }
        } 
      }     




      var notaFinalP6 = 0;
      function Resp6(){ 
          if( (($('#rROR0').val())) == $('#rP6').text() ) {
            notaFinalP6++;
            $('#rROR0').css("background-color", "#5ED188");
          }else{
            $('#rROR0').css("background-color", "#EF87A7");
          }

      }






      var notaFinalP7 = 0;
      function Resp7(){ 

        var resp =['Rectángulo','Rectángulo','Trapecio isósceles','Trapecio isósceles','Cuadrado','Cuadrado','Romboide','Romboide','Rombo','Rombo','Trapecio rectangular','Trapecio rectangular'];

        for(var i=1; i<13; i++){

            if( (($('#rIDP'+i).val())) == resp[i-1] ) {
              notaFinalP7++;
              $('#rIDP'+i).css("background-color", "#5ED188");
            }else{
              $('#rIDP'+i).css("background-color", "#EF87A7");
            }

        }

      }





      var notaFinalP8 = 0;
      function Resp8(){
          var p1 = (parseInt($('#nCP1').text()) + parseInt($('#nCP2').text())) * 2;
          var p2 = (parseInt($('#nCP3').text()) + parseInt($('#nCP4').text())) * 2;
          var p3 = (2 * parseInt($('#nCP5').text())) + parseInt($('#nCP6').text()) + parseInt($('#nCP7').text());

          var resp =['2(l1 + l2)',p1,'2(l1 + l2)',p2,'2 × l + B + b',p3];

          for(var i=1; i<7; i++){

            if( (($('#rCP'+i).val())) == resp[i-1] ) {
              notaFinalP8++;
              $('#rCP'+i).css("background-color", "#5ED188");
            }else{
              $('#rCP'+i).css("background-color", "#EF87A7");
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
            Preg7();
            Preg8();

           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4(); 
            Resp6();
            Resp7();
            Resp8();

            var nota1 = (notaFinalP1*1.25)/12;
            var nota2 = (notaFinalP2*1.25)/6;
            var nota3 = (notaFinalP3*1.25)/6;
            var nota4 = (notaFinalP4*1.5)/4;
            var nota5 = parseFloat($('#calificacion0').val());
            var nota6 = (notaFinalP6*1.25);
            var nota7 = (notaFinalP7*1.25)/12;
            var nota8 = (notaFinalP8*1.25)/6;

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8).toFixed(2);

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





