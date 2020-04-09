
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
  function Preg2(){
         var p0 = (Math.round(Math.random() * (10000) + 100)) * 4;
          var p1 = (Math.round(Math.random() * (10000) + 100)) * 7;
          var p2 = (Math.round(Math.random() * (10000) + 100)) * 25;
          var p3 = (Math.round(Math.random() * (10000) + 100)) * 11;
          var p4 = (Math.round(Math.random() * (10000) + 100)) * 100;
          var p5 = (Math.round(Math.random() * (10000) + 100)) * 3;


          var n0 = (Math.round(Math.random() * (10) + 10)) * 7;
          var n1 = (Math.round(Math.random() * (9) + 1));

      var divisible = [];
      divisible[0] = '<tr>' +
       '<td colspan="3" style="background-color: #FF0051;"><span class="encabezados">Divisible por</span></td>' +
       '<td colspan="1" style="background-color: #EBA8DC;"><span class="encabezados">2</span></td>' +
       '<td colspan="1" style="background-color: #5ED1CE;"><span class="encabezados">3</span></td>' +
       '<td colspan="1" style="background-color: #EBA8DC;"><span class="encabezados">4</span></td>' +
       '<td colspan="1" style="background-color: #5ED1CE;"><span class="encabezados">5</span></td>' +
       '<td colspan="1" style="background-color: #EBA8DC;"><span class="encabezados">7</span></td>' +
       '<td colspan="1" style="background-color: #5ED1CE;"><span class="encabezados">10</span></td>' +
       '<td colspan="1" style="background-color: #EBA8DC;"><span class="encabezados">11</span></td>' +
       '<td colspan="1" style="background-color: #5ED1CE;"><span class="encabezados">25</span></td>' +
       '<td colspan="1" style="background-color: #EBA8DC;"><span class="encabezados">100</span></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="3"><span class="textTab1" id="valP40">' + p0 + '</span></td>' +
       '<td colspan="1"><select id="s1" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s2" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s3" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s4" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s5" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s6" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s7" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s8" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s9" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="3"><span class="textTab1" id="valP41">' + p1 + '</span></td>' +
       '<td colspan="1"><select id="s10" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s11" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s12" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s13" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s14" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s15" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s16" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s17" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s18" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="3"><span class="textTab1" id="valP42">' + p2 + '</span></td>' +
       '<td colspan="1"><select id="s19" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s20" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s21" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s22" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s23" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s24" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s25" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s26" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s27" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="3"><span class="textTab1" id="valP43">' + p3 + '</span></td>' +
       '<td colspan="1"><select id="s28" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s29" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s30" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s31" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s32" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s33" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s34" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s35" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s36" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="3"><span class="textTab1" id="valP44">' + p4 + '</span></td>' +
       '<td colspan="1"><select id="s37" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s38" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s39" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s40" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s41" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s42" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s43" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s44" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
       '<td colspan="1"><select id="s45" class="form-control" style="font-size: 18px; color: #6D1EB6;"><option value=""></option><option value="0">si</option><option value="1">no</option></td>' +
      '</tr> ';          



          $("#tablaDivisibles").append(divisible[0]);   

          $("#n0").append(n0+'05'+n1);//para actividad 4
  }


  function Preg3(){
      var pregunta = [];          
          var val0 = Math.round(Math.random() * (9 - 2) + 2);
          var val1 = Math.round(Math.random() * (9 - 2) + 2);
          var val2 = Math.round(Math.random() * (9 - 2) + 2);
          var val3 = Math.round(Math.random() * (9 - 2) + 2);
          var val4 = Math.round(Math.random() * (9 - 2) + 2);
          var val5 = Math.round(Math.random() * (9 - 2) + 2);
          var val6 = Math.round(Math.random() * (9 - 2) + 2);

          $("#cantLun").append(val6);
          $("#cantMar").append(val6);
          $("#cantMie").append(val2);
          $("#cantJue").append(val3);
          $("#cantVie").append(val4);
          $("#cantSab").append(val6);
          $("#cantDom").append(val6);          
          
  }


    function Preg5(){

      var p0 = (Math.round(Math.random() * (1000) + 5));
      var p1 = (Math.round(Math.random() * (1000) + 5));
      var p2 = (Math.round(Math.random() * (1000) + 5));
      var p3 = (Math.round(Math.random() * (1000) + 5));

      var primos = [];

          primos[0] = '&nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n0">' + p0 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel0"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[1] = '&nbsp;&nbsp;&nbsp;<span class="n2">&nbsp;D<sub id="n1">' + p1 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel1"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[2] = '&nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n2">' + p2 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel2"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[3] = '&nbsp;&nbsp;&nbsp;<span class="n2">&nbsp;D<sub id="n3">' + p3 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel3"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';

          $("#primos0").append(primos[0]);
          $("#primos1").append(primos[1]);
          $("#primos2").append(primos[2]);
          $("#primos3").append(primos[3]);
    }


    function Preg6(){

      var p0 = Math.pow((Math.round(Math.random() * (1000) + 5)),2);
      var p1 = Math.pow((Math.round(Math.random() * (1000) + 5)),3);
      var p2 = Math.pow((Math.round(Math.random() * (1000) + 5)),2);

     
          $("#raizP5_0").append(p0);
          $("#raizP5_1").append(p1);
          $("#raizP5_2").append(p2);
    }


    function Preg7(){

      var p0 = Math.round(Math.random() * (5 - 1) + 1);
      var p1 = Math.round(Math.random() * (5 - 1) + 1);
      var p2 = Math.round(Math.random() * (5 - 1) + 1);
      var p3 = Math.round(Math.random() * (5 - 1) + 1);
      var p4 = Math.round(Math.random() * (5 - 1) + 1);

     
          $("#in0").append(p0);
          $("#in1").append(p1);
          $("#in2").append(p2);
          $("#in3").append(p3);
          $("#in4").append(p4);
    }


    function Preg8(){

      var p0 = Math.round(Math.random() * (20 - 10) + 10);
      var p1 = Math.round(Math.random() * (20 - 10) + 10);
      var p2 = Math.round(Math.random() * (20 - 10) + 10);
      var p3 = Math.round(Math.random() * (20 - 10) + 10);

     
          $("#edn0").append(p3);
          $("#edn1").append(p1);
          $("#edn2").append(p2);
          $("#edn3").append(p3);
          $("#edn4").append(p3);
    }


    function Preg9(){

      var p0 = Math.round(Math.random() * (9 - 2) + 2);
      var p1 = Math.round(Math.random() * (9 - 2) + 2);

          $("#ncab0").append(p0);
          $("#ncab1").append(p1);
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


///validar si es divisible para 2        
           var a=0;
          for(var l=1; l<6; l++){//numero de filas 
            if(l == 1){
              a=1;
            }else{
              a=a+9;
            }
            if((parseInt($('#valP4'+(l-1)).text()) % 2 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=37){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          }


      ///validar si es divisible para 3       
          a=0;
          for(var l=2; l<7; l++){//numero de filas 
            if(l == 2){
              a=2;
            }else{
              a=a+9;
            }           
            if((parseInt($('#valP4'+(l-2)).text()) % 3 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=38){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          }


///validar si es divisible para 4    
          a=0;
          for(var l=3; l<8; l++){//numero de filas 
            if(l == 3){
              a=3;
            }else{
              a=a+9;
            }           
            if((parseInt($('#valP4'+(l-3)).text()) % 4 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=39){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          }  


///validar si es divisible para 5  
          a=0;
          for(var l=4; l<9; l++){//numero de filas 
            if(l == 4){
              a=4;
            }else{
              a=a+9;
            }           
            if((parseInt($('#valP4'+(l-4)).text()) % 5 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=40){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          } 



///validar si es divisible para 7 
          a=0;
          for(var l=5; l<10; l++){//numero de filas 
            if(l == 5){
              a=5;
            }else{
              a=a+9;
            }           
            if((parseInt($('#valP4'+(l-5)).text()) % 7 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=41){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          }


///validar si es divisible para 10
          a=0;
          for(var l=6; l<11; l++){//numero de filas 
            if(l == 6){
              a=6;
            }else{
              a=a+9;
            }           
            if((parseInt($('#valP4'+(l-6)).text()) % 10 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=42){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          }  



///validar si es divisible para 11
          a=0;
          for(var l=7; l<12; l++){//numero de filas 
            if(l == 7){
              a=7;
            }else{
              a=a+9;
            }           
            if((parseInt($('#valP4'+(l-7)).text()) % 11 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=43){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          }  




///validar si es divisible para 25
          a=0;
          for(var l=8; l<13; l++){//numero de filas 
            if(l == 8){
              a=8;
            }else{
              a=a+9;
            }           
            if((parseInt($('#valP4'+(l-8)).text()) % 25 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=44){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          }  



///validar si es divisible para 100
          a=0;
          for(var l=9; l<14; l++){//numero de filas 
            if(l == 9){
              a=9;
            }else{
              a=a+9;
            }           
            if((parseInt($('#valP4'+(l-9)).text()) % 100 == 0 )){
                if($('#s'+a).val() == '0') {
                notaFinalP2++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=45){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP2++;              
              }else{
               // notaFinalP2--;            
                $('#s'+a).css("background-color", "#EF87A7");
              }
              }              
            }
          } 

    }

var notaFinalP5 = 0;
    function Resp5(){

          var d=0;
    var k=1;

    for (j=0;j<9;j++) { 
        while(k <= (parseInt($('#n'+j).text()))) {
          if ((parseInt($('#n'+j).text())) % k == 0){
              d++;  
          }                
          k++;
        }
        if(d==2){
        if($('#p5Sel'+j).val() == 1) {
        notaFinalP5++;
        $('#p5Sel'+j).css("background-color", "#75D685");
        }else{
        $('#p5Sel'+j).css("background-color", "#EF87A7");
        }
      }else{
        if($('#p5Sel'+j).val() == 0) {
        $('#p5Sel'+j).css("background-color", "#75D685");
        notaFinalP5++;
        }else{
        $('#p5Sel'+j).css("background-color", "#EF87A7");
        }
      }
      k=0;
      d=0;
    } 

  }

  var notaFinalP8 = 0;
  function Resp8(){
    var conjDatos0 = [];
   var conDatos0 = [];
   var cDatos = $('#edn0').text()+','+$('#edn1').text()+','+$('#edn2').text()+','+$('#edn3').text()+','+$('#edn4').text();

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


       if((sumaConj/conDatos0.length) == $('#rMediaP4').val()){
        notaFinalP8++;
        $('#rMediaP4').css("background-color", "#5ED188");
       }else{
         $('#rMediaP4').css("background-color", "#EF87A7");
       }
  



        if($('#rMedianaP4').val() == conDatos0[2]){////
            notaFinalP8++;
            $('#rMedianaP4').css("background-color", "#5ED188");
        }else{
            $('#rMedianaP4').css("background-color", "#EF87A7");
        } 


        if($('#rModaP4').val() == $('#edn4').text()){
            notaFinalP8++;
            $('#rModaP4').css("background-color", "#5ED188");
        }else{
            $('#rModaP4').css("background-color", "#EF87A7");
        }

        if($('#rRangoP4').val() == (conDatos0[4] - conDatos0[0])){
            notaFinalP8++;
            $('#rRangoP4').css("background-color", "#5ED188");
        }else{
            $('#rRangoP4').css("background-color", "#EF87A7");
        } 
   }

   var notaFinalP9 = 0;
  function Resp9(){
    var sum = (parseInt($('#ncab0').text()) + parseInt($('#ncab1').text()));

    if($('#cf').val() == ($('#ncab0').text()+','+$('#ncab1').text()) || $('#cf').val() == ($('#ncab1').text()+','+$('#ncab0').text())){
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

      if($('#pcbNum').val() == ($('#ncab0').text())) {
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
  }


  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio();         
            Preg1();
            Preg2();
            Preg3();
            Preg5();
            Preg6();
            Preg7();
            Preg8();
            Preg9();


           function confirmar() {
            Resp1();
            Resp2();
            Resp5();
            Resp8();
            Resp9();

            var nota1 = (notaFinalP1)/6; 
            var nota2 = parseFloat($('#calificacion0').val());
            var nota3 = (notaFinalP2*2)/45;
            var nota4 = parseFloat($('#calificacion1').val());
            var nota5 = (notaFinalP5)/4;
            var nota6 = parseFloat($('#calificacion2').val());
            var nota7 = parseFloat($('#calificacion3').val());
            var nota8 = (notaFinalP8)/8;  
            var nota9 = (notaFinalP9)/4;  

            
            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9).toFixed(2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
        }      
      });
    });


