
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

        var excp0 = (Math.round(Math.random() * (3 - 2) + 2));
        var excp1 = (Math.round(Math.random() * (3 - 2) + 2));
        var excp2 = (Math.round(Math.random() * (3 - 2) + 2));
        var excp3 = (Math.round(Math.random() * (3 - 2) + 2));
        var excp4 = (Math.round(Math.random() * (3 - 2) + 2));
        var excp5 = (Math.round(Math.random() * (3 - 2) + 2));

        $("#exnCP0").append(excp0);
        $("#exnCP1").append(excp1);
        $("#exnCP2").append(excp2);
        $("#exnCP3").append(excp3);
        $("#exnCP4").append(excp4);
        $("#exnCP5").append(excp5);

        var ncp0 = (Math.round(Math.random() * (30 - 2) + 2));
        var ncp1 = (Math.round(Math.random() * (30 - 2) + 2));
        var ncp2 = (Math.round(Math.random() * (30 - 2) + 2));
        var ncp3 = (Math.round(Math.random() * (30 - 2) + 2));
        var ncp4 = (Math.round(Math.random() * (30 - 2) + 2));
        var ncp5 = (Math.round(Math.random() * (30 - 2) + 2));

        $("#nCP0").append(ncp0);
        $("#nCP1").append(ncp1);
        $("#nCP2").append(ncp2);
        $("#nCP3").append(ncp3);
        $("#nCP4").append(ncp4);
        $("#nCP5").append(ncp5);

      }



  function Preg3(){

          var p0 = Math.round(Math.random() * (50 - 10) + 10);

          $("#nCantP0").append(p0);
          $("#nCantP1").append(p0);
          $("#nCantP2").append(p0);
          
  }


  function Preg4(){
    var exnPEx0 = Math.round(Math.random() * (3 - 2) + 2);
    var nPEx0 = Math.round(Math.random() * (20 - 2) + 2);
    var exnPEx1 = Math.round(Math.random() * (3 - 2) + 2);
    var nPEx1 = Math.round(Math.random() * (20 - 2) + 2);
    var exnPEx2 = Math.round(Math.random() * (3 - 2) + 2);
    var nPEx2 = Math.round(Math.random() * (20 - 2) + 2);
    var exnPEx3 = Math.round(Math.random() * (3 - 2) + 2);
    var nPEx3 = Math.round(Math.random() * (20 - 2) + 2);



    $("#exnPEx0").append(exnPEx0); 
    $("#nPEx0").append(nPEx0);
    $("#exnPEx1").append(exnPEx1); 
    $("#nPEx1").append(nPEx1);
    $("#exnPEx2").append(exnPEx2); 
    $("#nPEx2").append(nPEx2);
    $("#exnPEx3").append(exnPEx3); 
    $("#nPEx3").append(nPEx3);


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

      var p1 = Math.pow((Math.round(Math.random() * (20 - 2) + 2)), 2);
      var p2 = Math.pow((Math.round(Math.random() * (20 - 2) + 2)), 2);
            
          $("#nPF0").append(p1);
          $("#nPF1").append(p2);
    }


    function Preg7(){

    }


    function Preg8(){

      var p0 = Math.round(Math.random() * (9 - 1) + 1);
      var p1 = Math.round(Math.random() * (50 - 10) + 10);
     
          $("#nPar0").append(p0);
          $("#nPar1").append(p1);
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

    var nCP = 0;
    var rCP = 0;
    var ac;
             
      for(var i=0; i<6; i++) {

          nCP = Math.pow((parseInt($('#nCP'+i).text())), (parseInt($('#exnCP'+i).text())));
          rCP = ((($('#rCP'+i).val()).replace(/ |√|<|-/g, "")).toLowerCase().split('x'));

          ac = 1;
          for(var j=0; j<rCP.length; j++){
              ac = ac * rCP[j];
          }

          if(nCP == ac){
              notaFinalP2++     
              $('#rCP'+i).css("background-color", "#5ED188");
          }else{
              $('#rCP'+i).css("background-color", "#EF87A7");
          }
      }


  }




    var notaFinalP3 = 0;
    function Resp3(){
      
      var resp = ($('#rPr0').val());
      var res = Math.pow(parseInt($('#nCantP0').text()), 3);

       if(resp == res){
          notaFinalP3++;
          $('#rPr0').css("background-color", "#5ED188");
        }else{
          $('#rPr0').css("background-color", "#EF87A7");
        }

    }









    var notaFinalP5 = 0;
    function Resp5(){

    var resp = 0;

    for(var i=0; i<7; i++){
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

      var resp = Math.pow(parseInt($('#nPF0').text()), 1/2);
      var resp1 = Math.pow(parseInt($('#nPF1').text()), 1/2);

        if( $('#rPF0').val() == resp && $('#rPF1').val() == resp ){
           notaFinalP6++;
           $('#rPF0').css("background-color", "#75D685");
           $('#rPF1').css("background-color", "#75D685");
        }else{
           $('#rPF0').css("background-color", "#EF87A7");
           $('#rPF1').css("background-color", "#EF87A7");
        }


        if( $('#rPF2').val() == resp1){
           notaFinalP6++;
           $('#rPF2').css("background-color", "#75D685");
        }else{
           $('#rPF2').css("background-color", "#EF87A7");
        }
    }




  var notaFinalP8 = 0;
  function Resp8(){
  
    var n0 = parseInt($('#nPar0').text());
    var n1 = parseInt($('#nPar1').text());
        if( $('#rNest0').val() == (n0*n1) ){
            notaFinalP8++;
            $('#rNest0').css("background-color", "#75D685");
        }else{
            $('#rNest0').css("background-color", "#EF87A7");
        }


   }





    var notaFinalP9 = 0;
    function Resp9(){
     
      var nCP = 0;
      var rCP = 0;
      var ac;
      var res = 'Triángulo';
      var resp = 12;
     for(var i=0; i<3; i++){
      if(i==1){res = 'Rectángulo';}
      if(i==2){res = 'Cuadrado';}

        if( $('#rFig'+i).val() == res ){
            notaFinalP9++;
            $('#rFig'+i).css("background-color", "#75D685");
        }else{
            $('#rFig'+i).css("background-color", "#EF87A7");
        }



        rCP = ((($('#rPer'+i).val()).replace(/ |,|cm|-/g, "")).toLowerCase().split('+'));

          ac = 1;
          for(var j=0; j<rCP.length; j++){
              ac = ac + rCP[j];
          }

          if(i==1){resp = 10;}
          if(i==2){resp = 12;}

          if(ac = resp && ($('#rPer'+i).val()) != '' ){
              notaFinalP9++     
              $('#rPer'+i).css("background-color", "#5ED188");
          }else{
              $('#rPer'+i).css("background-color", "#EF87A7");
          }


     }
        

    }


  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            $(".panel-collapse").removeClass('in');
            Inicio();
            Preg1();
            Preg2();     
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
            Resp5();
            Resp6();
            Resp8();
            Resp9();

            var nota1 = (notaFinalP1)/12;
            var nota2 = (notaFinalP2)/6;
            var nota3 = (notaFinalP3);
            var nota4 = parseFloat($('#calificacion0').val());
            var nota5 = (notaFinalP5)/6;
            var nota6 = (notaFinalP6)/3;
            var nota7 = parseFloat($('#calificacion1').val());
            var nota8 = (notaFinalP8);
            var nota9 = (notaFinalP9)/6;
            var nota10 = parseFloat($('#calificacion2').val());

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10).toFixed(2);//10

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
    });


