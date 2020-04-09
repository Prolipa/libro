
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
          '<input type="number" id="p0Patron0" class="form-control"><br><br>' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="p0T0">'+(val0+(patron0))+'</span>, &nbsp;&nbsp;<span class="n0" id="p0T0_0">'+(val0+(patron0*2))+'</span>, &nbsp;&nbsp;<span class="n0">'+(val0+(patron0*3))+', &nbsp;&nbsp;'+(val0+(patron0*4))+', &nbsp;&nbsp;'+(val0+(patron0*5))+', &nbsp;&nbsp;'+(val0+(patron0*6))+'</span></li><br><br></div>'],
           
            ['<div class="col-sm-6"><li><span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel1" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron1" class="form-control"><br><br>' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="p0T1">'+(val1-(patron1))+'</span>, &nbsp;&nbsp;<span class="n0" id="p0T1_1">'+(val1-(patron1*2))+'</span>, &nbsp;&nbsp;<span class="n0">'+(val1-(patron1*3))+', &nbsp;&nbsp;'+(val1-(patron1*4))+', &nbsp;&nbsp;'+(val1-(patron1*5))+', &nbsp;&nbsp;'+(val1-(patron1*6))+'</span></li><br><br></div>'],
            
            ['<div class="col-sm-6"><li><span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel2" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron2" class="form-control"><br><br>' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="p0T2">'+(val2*(patron2))+'</span>, &nbsp;&nbsp;<span class="n0" id="p0T2_2">'+(val2*((Math.pow(patron2, 2))))+'</span>, &nbsp;&nbsp;<span class="n0">'+(val2*((Math.pow(patron2, 3))))+', &nbsp;&nbsp;'+(val2*((Math.pow(patron2, 4))))+', &nbsp;&nbsp;'+(val2*((Math.pow(patron2, 5))))+', &nbsp;&nbsp;'+(val2*((Math.pow(patron2, 6))))+'</span></li><br><br></div>'],  

            ['<div class="col-sm-6"><li><span>&nbsp;Patrón:&nbsp;&nbsp;' +
          '<select class="form-control" id="sel3" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" id="p0Patron3" class="form-control"><br><br>' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="p0T3">'+((val3)/(patron3))+'</span>, &nbsp;&nbsp;<span class="n0" id="p0T3_3">'+((val3)/(Math.pow(patron3, 2)))+'</span>, &nbsp;&nbsp;<span class="n0">'+((val3)/(Math.pow(patron3, 3)))+', &nbsp;&nbsp;'+((val3)/(Math.pow(patron3, 4)))+', &nbsp;&nbsp;'+((val3)/(Math.pow(patron3, 5)))+', &nbsp;&nbsp;'+((val3)/(Math.pow(patron3, 6)))+'</span></li><br><br></div>'],  
          
          ]

          contenidos.sort(f_randomico);
          $.each( contenidos, function( i, item ) {
        $( ".lista1" ).append( item );
          });
          
      }


   function Preg2(){            
          var pregunta = [];          
          var val0 = (Math.round(Math.random() * (100) + 10));
          var val1 = (Math.round(Math.random() * (100) + 10));
          var val2 = (Math.round(Math.random() * (100) + 10));
          var val3 = (Math.round(Math.random() * (100) + 10));
   
          pregunta[0] = '<span>a) &nbsp;Patron:  &nbsp;<select class="form-control" id="p1Sel0" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" class="form-control" id="p1Pat0" style="width: 90px;"> &nbsp;&nbsp; ' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="val0">'+val0+'</span>; &nbsp;&nbsp; ' +
          '<input type="number" id="p1_0_Suc0" value="'+val0+'" style="display:none;">' +
          '<input type="number" class="form-control" id="p1_0_Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc5" style="width: 90px;">; <br><br>';

          pregunta[1] = '<span>b) &nbsp;Patron:  &nbsp;<select class="form-control" id="p1Sel1" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" class="form-control" id="p1Pat1" style="width: 90px;"> &nbsp;&nbsp;' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="val1">'+val1+'</span>; &nbsp;&nbsp; ' +
          '<input type="number" id="p1_1_Suc0" value="'+val1+'" style="display:none;">' +
          '<input type="number" class="form-control" id="p1_1_Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_1_Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_1_Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_1_Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_1_Suc5" style="width: 90px;">; <br><br>';

          pregunta[2] = '<span>c) &nbsp;Patron:  &nbsp;<select class="form-control" id="p1Sel2" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" class="form-control" id="p1Pat2" style="width: 90px;"> &nbsp;&nbsp; ' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="val2">'+val2+'</span>; &nbsp;&nbsp; ' +
          '<input type="number" id="p1_2_Suc0" value="'+val2+'" style="display:none;">' +
          '<input type="number" class="form-control" id="p1_2_Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_2_Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_2_Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_2_Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_2_Suc5" style="width: 90px;">; <br><br>';

          pregunta[3] = '<span>d) &nbsp;Patron:  &nbsp;<select class="form-control" id="p1Sel3" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" class="form-control" id="p1Pat3" style="width: 90px;"> &nbsp;&nbsp; ' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="val3">'+val3+'</span>; &nbsp;&nbsp; ' +
          '<input type="number" id="p1_3_Suc0" value="'+val3+'" style="display:none;">' +
          '<input type="number" class="form-control" id="p1_3_Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_3_Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_3_Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_3_Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_3_Suc5" style="width: 90px;">; <br><br>';

          $("#pregunta1_0").append(pregunta[0]);
          $("#pregunta1_1").append(pregunta[1]);
          $("#pregunta1_2").append(pregunta[2])
          $("#pregunta1_3").append(pregunta[3])
      }


  function Preg3(){
         
    var val0 = (Math.round(Math.random() * (10000) + 10));
    var val1 = (Math.round(Math.random() * (10000) + 10))*11;
    var val2 = (Math.round(Math.random() * (10000) + 10))*25;
    var val3 = (Math.round(Math.random() * (10000) + 10))*100;
    var val4 = (Math.round(Math.random() * (10000) + 10))*7;
    var val5 = (Math.round(Math.random() * (10000) + 10))*4;
    var val6 = (Math.round(Math.random() * (10000) + 10))*5;
    var val7 = (Math.round(Math.random() * (10000) + 10))*3;


    var contenidos = [            
            ['<tr><td class="textTab1" align="center">'+val0+'0'+' </td><td><span class="textTab">Es divisible por 10 porque </span><input type="text" class="form-control"></td></tr>'],
            ['<tr><td class="textTab1" align="center">'+val1+' </td><td><span class="textTab">Es divisible por 11 porque </span><input type="text" class="form-control"></td></tr>'],
            ['<tr><td class="textTab1" align="center">'+val2+' </td><td><span class="textTab">Es divisible por 25 porque </span><input type="text" class="form-control"></td></tr>'],
            ['<tr><td class="textTab1" align="center">'+val3+' </td><td><span class="textTab">Es divisible por 100 porque </span><input type="text" class="form-control"></td></tr>'],
            ['<tr><td class="textTab1" align="center">'+val4+' </td><td><span class="textTab">Es divisible por 7 porque </span><input type="text" class="form-control"></td></tr>'],
            ['<tr><td class="textTab1" align="center">'+val5+' </td><td><span class="textTab">Es divisible por 4 porque </span><input type="text" class="form-control"></td></tr>'],
            ['<tr><td class="textTab1" align="center">'+val6+' </td><td><span class="textTab">Es divisible por 5 porque </span><input type="text" class="form-control"></td></tr>'],
            ['<tr><td class="textTab1" align="center">'+val7+' </td><td><span class="textTab">Es divisible por 3 porque </span><input type="text" class="form-control"></td></tr>'],
          ]

          contenidos.sort(f_randomico);

    $.each( contenidos, function( i, item ) {
      $( "#tabDivs" ).append( item );
    });


     $("#textTab0").append('Es divisible por 2 porque termina en número par');
  }



function Preg4(){


          var p0 = (Math.round(Math.random() * (10000) + 100)) * 4;
          var p1 = (Math.round(Math.random() * (10000) + 100)) * 7;
          var p2 = (Math.round(Math.random() * (10000) + 100)) * 25;
          var p3 = (Math.round(Math.random() * (10000) + 100)) * 11;
          var p4 = (Math.round(Math.random() * (10000) + 100)) * 100;
          var p5 = (Math.round(Math.random() * (10000) + 100)) * 3;

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
  }


function Preg5(){

          var p0 = (Math.round(Math.random() * (1000) + 5));
          var p1 = (Math.round(Math.random() * (1000) + 5));
          var p2 = (Math.round(Math.random() * (1000) + 5));
          var p3 = (Math.round(Math.random() * (1000) + 5));
          var p4 = (Math.round(Math.random() * (1000) + 5));
          var p5 = (Math.round(Math.random() * (1000) + 5));
          var p6 = (Math.round(Math.random() * (1000) + 5));
          var p7 = (Math.round(Math.random() * (1000) + 5));
          var p8 = (Math.round(Math.random() * (1000) + 5));
          
          var primos = [];

          primos[0] = 'a) &nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n0">' + p8 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel0"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[1] = 'b) &nbsp;&nbsp;&nbsp;<span class="n2">&nbsp;D<sub id="n1">' + p0 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel1"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[2] = 'c) &nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n2">' + p1 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel2"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[3] = 'd) &nbsp;&nbsp;&nbsp;<span class="n2">&nbsp;D<sub id="n3">' + p2 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel3"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[4] = 'e) &nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n4">' + p3 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel4"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[5] = 'f) &nbsp;&nbsp;&nbsp;<span class="n2">&nbsp;D<sub id="n5">' + p4 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel5"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[6] = 'g) &nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n6">' + p5 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel6"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[7] = 'h) &nbsp;&nbsp;&nbsp;<span class="n2">&nbsp;D<sub id="n7">' + p6 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel7"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';
          primos[8] = 'i) &nbsp;&nbsp;&nbsp;<span class="n1">&nbsp;D<sub id="n8">' + p7 + '</sub>&nbsp;</span><label>&nbsp; = &nbsp; ' +
          '<select class="form-control" id="p5Sel8"><option value="v"></option><option value="0">compuesto</option> <option value="1">primo</option></select>';


          $("#primos0").append(primos[0]);
          $("#primos1").append(primos[1]);  
          $("#primos2").append(primos[2]);  
          $("#primos3").append(primos[3]);          
          $("#primos4").append(primos[4]); 
          $("#primos5").append(primos[5]); 
          $("#primos6").append(primos[6]); 
          $("#primos7").append(primos[7]); 
          $("#primos8").append(primos[8]); 

      }



  function Preg6(){
        var p0 = (Math.round(Math.random() * (1000) + 5));
        var p1 = (Math.round(Math.random() * (1000) + 5));
        var p2 = (Math.round(Math.random() * (1000) + 5));
        var p3 = (Math.round(Math.random() * (1000) + 5));
          
      $("#txtDesc0").text(p0+'                      ');
      $("#txtDesc1").text(p1+'                      ');
      $("#txtDesc2").text(p2+'                      ');
      $("#txtDesc3").text(p3+'                      ');
  }


  function Preg7(){
        var p0 = Math.pow(Math.round(Math.random() * (100) + 5), 2);
        var p1 = Math.pow(Math.round(Math.random() * (10) + 5), 3);
          
      $("#txtDescRaiz0").text('√'+p0+'                  ');
      $("#txtDescRaiz1").text('3√'+p1+'                 ');
  }


  function Preg8(){        
        var rad = 2;
        var p0 = Math.pow(Math.round(Math.random() * (100) + 5), rad);
          
      $("#p8Num0").text(p0);
      $("#p8Rad0").text(rad);
  }





function Preg9(){

    var contenidos = [            
            ['<br><li><span class="fondo_preg">Raíz cuadrada de cuatro mil doscientos veinticinco</span> &nbsp;&nbsp;&nbsp;'+
            '<div class="form-inline form-group" align="center"> '+
               '<sup><input type="number" id="rP9Sup0" class="form-control respuestas" style="width: 60px;"></sup> '+
               ' √<input type="number" id="rP9Num0" class="form-control respuestas" style="width: 120px;">'+              
             '</div></li><br>'],

            ['<br><li><span class="fondo_preg">Raíz cúbica de nueve mil doscientos sesenta y uno</span> &nbsp;&nbsp;&nbsp;'+
            '<div class="form-inline form-group" align="center"> '+
               '<sup><input type="number" id="rP9Sup1" class="form-control respuestas" style="width: 60px;"></sup> '+
               ' √<input type="number" id="rP9Num1" class="form-control respuestas" style="width: 120px;">'+              
             '</div></li><br>'],

            ['<br><li><span class="fondo_preg">Raíz cúbica de seis mil ochocientos cincuenta y nueve</span> &nbsp;&nbsp;&nbsp;'+
            '<div class="form-inline form-group" align="center"> '+
               '<sup><input type="number" id="rP9Sup2" class="form-control respuestas" style="width: 60px;"></sup> '+
               ' √<input type="number" id="rP9Num2" class="form-control respuestas" style="width: 120px;">'+              
             '</div></li><br>'],

            ['<br><li><span class="fondo_preg">Raíz cuadrada de nueve mil ochocientos uno</span> &nbsp;&nbsp;&nbsp;'+
            '<div class="form-inline form-group" align="center"> '+
               '<sup><input type="number" id="rP9Sup3" class="form-control respuestas" style="width: 60px;"></sup> '+
               ' √<input type="number" id="rP9Num3" class="form-control respuestas" style="width: 120px;">'+              
             '</div></li><br>'],

            ['<br><li><span class="fondo_preg">Raíz cúbica de veintinueve mil setecientos noventa y uno</span> &nbsp;&nbsp;&nbsp;'+
            '<div class="form-inline form-group" align="center"> '+
               '<sup><input type="number" id="rP9Sup4" class="form-control respuestas" style="width: 60px;"></sup> '+
               ' √<input type="number" id="rP9Num4" class="form-control respuestas" style="width: 120px;">'+              
             '</div></li><br>'],
      ]

          contenidos.sort(f_randomico);

    $.each( contenidos, function( i, item ) {
      $( ".listaP9" ).append( item );
    });
  }


function Preg10(){        
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


 function Preg11(){        
        var rad0 = 3;
        var p0 = Math.pow(Math.round(Math.random() * (100) + 5), rad0);
          
      $("#p11Num0").text(p0);
      $("#p11Rad0").text(rad0);
  }


function Preg12(){        
        var rad0 = Math.floor(Math.random() * (10 - 2)) + 2;
        var p0 = Math.pow(Math.round(Math.random() * (10) + 5), rad0);
          
      $("#p12Num0").text(p0);
      $("#p12Rad0").text(rad0);
  }


  var notaFinalP1 = 0;
  function Resp1(){
      var signo = '';
      var operacion = 0;

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
      }         
    }


  var notaFinalP2 = 0;
    function Resp2(){
      var operacion = 0;
      var signo = '';
      
    for(var i=0; i<4; i++){
      signo = $('#p1Sel'+i).val();
      if(signo != ''){
        if(signo == '+'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) + (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP2++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == '-'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) - (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP2++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == 'x'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) * (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP2++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == '÷'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) / (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP2++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }
      }else{
        for(var j=0; j<12; j++){             
          $('#p1_'+i+'_Suc'+j).css("background-color", "#EF87A7");           
        }

      }  
      }
    }

  var notaFinalP4 = 0;
  function Resp4(){

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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=37){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=38){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=39){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=40){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=41){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=42){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=43){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=44){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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
                notaFinalP4++;
                $('#s'+a).css("background-color", "#5ED188");
                }else{
              //  notaFinalP2--;                            
                $('#s'+a).css("background-color", "#EF87A7");
                }                            
            }else{
              if(a<=45){
              if($('#s'+a).val() == '1') {
                 $('#s'+a).css("background-color", "#5ED188");
                 notaFinalP4++;              
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

    var resp = Math.pow((parseInt($('#p8Num0').text())), (1/(parseInt($('#p8Rad0').text()))));
    var res = Math.pow(($('#rP8Num0').val()), (1/(($('#rP8Sup0').val()))));

        if (Math.round(res) == ($('#rP8').val()) && Math.round(res) == Math.round(resp)){
          notaFinalP8=notaFinalP8+1;
          $('#rP8').css("background-color", "#75D685");
          $('#rP8Num0').css("background-color", "#75D685");
          $('#rP8Sup0').css("background-color", "#75D685");
        }else{
          $('#rP8').css("background-color", "#EF87A7");
          $('#rP8Num0').css("background-color", "#EF87A7");
          $('#rP8Sup0').css("background-color", "#EF87A7");
        }
  }



var notaFinalP9 = 0;
  function Resp9(){

      if(($('#rP9Num0').val()) == 4225 && ($('#rP9Sup0').val()) == 2 ) {
          notaFinalP9++;
          $('#rP9Num0').css("background-color", "#75D685");
          $('#rP9Sup0').css("background-color", "#75D685");
      }else{
         $('#rP9Num0').css("background-color", "#EF87A7");
         $('#rP9Sup0').css("background-color", "#EF87A7");
      } 

      if(($('#rP9Num1').val()) == 9261 && ($('#rP9Sup1').val()) == 3 ) {
          notaFinalP9++;
          $('#rP9Num1').css("background-color", "#75D685");
          $('#rP9Sup1').css("background-color", "#75D685");
      }else{
         $('#rP9Num1').css("background-color", "#EF87A7");
         $('#rP9Sup1').css("background-color", "#EF87A7");
      } 

      if(($('#rP9Num2').val()) == 6859 && ($('#rP9Sup2').val()) == 3 ) {
          notaFinalP9++;
          $('#rP9Num2').css("background-color", "#75D685");
          $('#rP9Sup2').css("background-color", "#75D685");
      }else{
         $('#rP9Num2').css("background-color", "#EF87A7");
         $('#rP9Sup2').css("background-color", "#EF87A7");
      } 

      if(($('#rP9Num3').val()) == 9801 && ($('#rP9Sup3').val()) == 2 ) {
          notaFinalP9++;
          $('#rP9Num3').css("background-color", "#75D685");
          $('#rP9Sup3').css("background-color", "#75D685");
      }else{
         $('#rP9Num3').css("background-color", "#EF87A7");
         $('#rP9Sup3').css("background-color", "#EF87A7");
      } 

      if(($('#rP9Num4').val()) == 29791 && ($('#rP9Sup4').val()) == 3 ) {
          notaFinalP9++;
          $('#rP9Num4').css("background-color", "#75D685");
          $('#rP9Sup4').css("background-color", "#75D685");
      }else{
         $('#rP9Num4').css("background-color", "#EF87A7");
         $('#rP9Sup4').css("background-color", "#EF87A7");
      } 

  }


var notaFinalP10 = 0;
  function Resp10(){

    var resp = 0;

    for(var i=0; i<6; i++){
      resp = Math.pow((parseInt($('#rP10Num'+i).text())), (1/(parseInt($('#rP10Sup'+i).text()))));

      if (Math.round(resp) == ($('#rP10_'+i).val())){
          notaFinalP10++;
          $('#rP10_'+i).css("background-color", "#75D685");
        }else{
          $('#rP10_'+i).css("background-color", "#EF87A7");
        }
    }
        
  }


var notaFinalP11 = 0;
  function Resp11(){

    var resp = Math.pow((parseInt($('#p11Num0').text())), (1/(parseInt($('#p11Rad0').text()))));
    var res = Math.pow(($('#rP11Num0').val()), (1/(($('#rP11Sup0').val()))));

        if (Math.round(res) == ($('#rP11').val()) && Math.round(res) == Math.round(resp)){
          notaFinalP11=notaFinalP11+0.5;
          $('#rP11').css("background-color", "#75D685");
          $('#rP11Num0').css("background-color", "#75D685");
          $('#rP11Sup0').css("background-color", "#75D685");
        }else{
          $('#rP11').css("background-color", "#EF87A7");
          $('#rP11Num0').css("background-color", "#EF87A7");
          $('#rP11Sup0').css("background-color", "#EF87A7");
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
            Preg9();
            Preg10();
            Preg11();
            Preg12();


           function confirmar() {
            Resp1();
            Resp2();
            Resp4();
            Resp5();
            Resp8();
            Resp9();
            Resp10();
            Resp11();

            var nota1 = (notaFinalP1*0.75)/8;
            var nota2 = (notaFinalP2*1)/20;
            var nota3 = parseFloat($('#calificacion0').val());
            var nota4 = (notaFinalP4*1)/45;
            var nota5 = (notaFinalP5*0.75)/9;
            var nota6 = parseFloat($('#calificacion1').val());
            var nota7 = parseFloat($('#calificacion2').val());
            var nota8 = notaFinalP8;//1
            var nota9 = (notaFinalP9*1)/5;
            var nota10 = (notaFinalP10*0.75)/6;
            var nota11 = notaFinalP11;//0.5
            var nota12 = parseFloat($('#calificacion3').val());
            
            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10+nota11+nota12).toFixed(2);//10

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


