var titulos="refuerzo";
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
      var nVal = [];

      for(var i=0; i<8; i++) {
        nVal[i] =  Math.round(Math.random() * (20 - (2)) + (2));

        $("#vn"+i).append(nVal[0]);
      }

      var opt = '<option></option><option value="rcon1">ℚ´: decimal infinito no periódico</option><option value="rcon2">ℚ´: irracional</option><option value="rcon5">ℚ : racional</option><option value="rcon4">ℚ´: fi es irracional</option><option value="rcon0">ℚ : decimal periódico</option><option value="rcon3">ℚ : decimal periódico. Toda fracción es siempre racional</option>'
      
      var contenidos = [
            ['<tr><td class="np1"><div class="eq-c"><div class="fraction"><span class="fup">7</span><span class="bar">/</span><span class="fdn">15</span></div></div></td><td><br><select class="form-control respuestas" id="rconN0">'+opt+'</select></td></tr>',
            '<tr><td class="np1">√5</td><td><select class="form-control respuestas" id="rconN1">'+opt+'</select></td></tr>',
            '<tr><td class="np1"><div class="eq-c"><div class="fraction"><span class="fup">3π</span><span class="bar">/</span><span class="fdn">4</span></div></div></td><td><br><select class="form-control respuestas" id="rconN2">'+opt+'</select></td></tr>',
            '<tr><td class="np1"><div class="eq-c"><div class="fraction"><span class="fup">2 , 02<span class="linea">5</span></span><span class="bar">/</span><span class="fdn">15</span></div></div></td><td><br><select class="form-control respuestas" id="rconN00">'+opt+'</select></td></tr>',            
            '<tr><td class="np1"><div class="eq-c"><div class="fraction"><span class="fup">21</span><span class="bar">/</span><span class="fdn">53</span></div></div></td><td><br><select class="form-control respuestas" id="rconN3">'+opt+'</select></td></tr>',
            '<tr><td class="np1">ϕ<sup>2</sup></td><td><select class="form-control respuestas" id="rconN4">'+opt+'</select></td></tr>'],
            '<tr><td class="np1">√16</td><td><select class="form-control respuestas" id="rconN5">'+opt+'</select></td></tr>',
        ]
      contenidos.sort(f_randomico);


      $.each( contenidos, function( i, item ) {
        $("#conN0").append( item );
      });


    }



    function Preg2(){

        var nCal = [];

        nCal[0] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[1] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[2] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[3] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[4] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[5] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[6] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[7] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[8] =  Math.round(Math.random() * (20 - (2)) + (2));
        nCal[9] =  Math.round(Math.random() * (20 - (2)) + (2));

       
        $("#nC0").append(nCal[0]);
        $("#nC1").append(nCal[1]);
        $("#nC2").append(nCal[1]);
        $("#nC3").append(nCal[1]);
        $("#nC4").append(nCal[1]);
        $("#nC5").append(nCal[2]);
        $("#nC6").append(nCal[3]);
        $("#nC7").append(nCal[4]);
        $("#nC8").append(nCal[5]);
        $("#nC9").append(nCal[6]);
        $("#nC10").append(nCal[7]);
        $("#nC11").append(nCal[8]);
        $("#nC12").append(nCal[9]);

    }




    function Preg3(){

        var nE0 =  Math.round(Math.random() * (20 - (2)) + (2));
       
        $("#nE0").append(nE0);
        $("#nE1").append((nE0)+1);

    }



    function Preg4(){

        var nEnt0 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt1 =  Math.round(Math.random() * (20 - (2)) + (2));
       
        $("#nEnt0").append(nEnt0);
        $("#nEnt1").append((nEnt0)+1);
        $("#nEnt2").append((nEnt0)+2);
        $("#nEnt3").append((nEnt0)+3);


        $("#nIr0").append(nEnt1);
        $("#nIr1").append((nEnt1)+1);
        $("#nIr2").append((nEnt1)+2);
        $("#nIr3").append((nEnt1)+3);

    }





    function Preg5(){

        var nEnt0 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt1 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt2 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt3 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt4 =  Math.round(Math.random() * (20 - (2)) + (2));
        var nEnt5 =  Math.round(Math.random() * (20 - (2)) + (2));
       
        $("#nEf0").append(nEnt0);
        $("#nEf1").append((nEnt0));
        $("#nEf2").append((nEnt1));
        $("#nEf3").append((nEnt2));
        $("#nEf4").append((nEnt3));
        $("#nEf5").append((nEnt2)); 
        $("#nEf6").append((nEnt4)); 
        $("#nEf7").append((nEnt5)); 
        $("#nEf8").append((nEnt4));        

    }



    function Preg6(){

        var n0 =  Math.round(Math.random() * (10 - (2)) + (2));
        var n1 =  (Math.random() * (40 - (20)) + (20)).toFixed(3);
       
        $("#nR0").append(n0);
        $("#nR1").append(n1);
    }



    function Preg7(){
        var n0 = Math.round(Math.random() * (10 - 2) + 2);
        var n1 = Math.round(Math.random() * (10 - 2) + 2);
        var n2 = Math.round(Math.random() * (10 - 2) + 2);

        var nDes0 =  Math.round(Math.pow((n0), 2));
        var nDes1 =  Math.round(Math.pow((n1), 2));
        var nDes2 =  Math.round(Math.pow((n2), 2));
       
        $("#nDes0").append(nDes0);
        $("#nDes1").append(nDes1);
        $("#nDes2").append(nDes2);

        //preg9
        $("#nRep0").append(n2);

        //preg11
        $("#nL0").append(n2);
    }




    function Preg8(){

      var opt = '<option></option><option value="rNom3">Elemento neutro de la suma</option> <option value="rNom2">Inverso multiplicativo</option><option value="rNom1">Distributiva de la multiplicación con respecto a la adición</option><option value="rNom4">Conmutativa de la suma</option><option value="rNom0">Asociativa y conmutativa</option>';

      var contenidos = [
            ['<tr><td style="background-color: #2CA3FF; color: white; font-size: 40px;" align="center"></td><td><span style="font-size: 21px;">(− 6)  +  [ (+7)  +  (− 10) ]  =  [ (− 10)  +  (− 6) ]  +  (+7)</span></td><td><select class="form-control respuestas" id="rN0">'+opt+'</select></td></tr>'],
              ['<tr><td style="background-color: #E8D72B; color: white; font-size: 40px;" align="center"></td>' +
              '<td><img src="img/i1_p82_act9.jpg" class="img-responsive"></td>' +
              '<td><select class="form-control respuestas" id="rN1">'+opt+'</select></td></tr>'],
              ['<tr>'+
                '<td style="background-color: #E82BAC; color: white; font-size: 40px;" align="center"></td>'+
                  '<td><img src="img/i2_p82_act9.jpg" class="img-responsive"></td>'+
                  '<td><select class="form-control respuestas" id="rN2">'+opt+
                  '</select>'+
                '</td>'+
             '</tr>'],
             ['<tr>'+
                '<td style="background-color: #2DC840; color: white; font-size: 40px;" align="center"></td>'+
                  '<td><img src="img/i3_p82_act9.jpg" class="img-responsive"></td>'+
                  '<td><select class="form-control respuestas" id="rN3">'+opt+
                  '</select>'+
                '</td>'+
            '</tr>'],
            ['<tr>'+
                '<td style="background-color: #EC4D34; color: white; font-size: 40px;" align="center"></td>'+
                '<td><img src="img/i4_p82_act9.jpg" class="img-responsive"></td>'+
                '<td><select class="form-control respuestas" id="rN4">'+opt+
                '</select>'+
              '</td>'+
            '</tr>']
        ]
      contenidos.sort(f_randomico);


      $.each( contenidos, function( i, item ) {
        $("#conNom0").append( item );
      });

    }



    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=0; i<6; i++){
            if( $('#rconN'+i).val() == 'rcon'+i) {
                notaFinalP1++     
                $('#rconN'+i).css("background-color", "#5ED188");
            }else{
                $('#rconN'+i).css("background-color", "#EF87A7");
            }

        }

            if( $('#rconN00').val() == 'rcon0') {
                notaFinalP1++     
                $('#rconN00').css("background-color", "#5ED188");
            }else{
                $('#rconN00').css("background-color", "#EF87A7");
            }

    }



    var notaFinalP2 = 0;
    function Resp2(){


      var res1 = ( (((parseInt($('#nC0').text())) * (Math.pow((parseInt($('#nC1').text())), 1/2))) -  ((parseInt($('#nC2').text())) * (Math.pow((parseInt($('#nC3').text())), 1/2)))) * (Math.pow((parseInt($('#nC4').text())), 1/2)) );

      //( 19 √10 ) 2 · ( 19 √10 ) −2 
      var res2 =  ((Math.pow(((parseInt($('#nC5').text())) * (Math.pow((parseInt($('#nC6').text())), 1/2))), 2 )) *  (Math.pow((((parseInt($('#nC7').text())) * (Math.pow((parseInt($('#nC8').text())), 1/2))) ), -2)) );

      ///( √12  − 14 ) 2 · ( √16  + 12 ) 2
      var res3 = ( (Math.pow(((Math.pow((parseInt($('#nC9').text())), 1/2)) - (parseInt($('#nC10').text())) ), 2 )) *  (Math.pow(((Math.pow((parseInt($('#nC11').text())), 1/2)) + (parseInt($('#nC12').text())) ), 2 )) );

        if( parseFloat($('#rC0').val()).toFixed() == res1.toFixed() ) {
            notaFinalP2++     
            $('#rC0').css("background-color", "#5ED188");
        }else{
            $('#rC0').css("background-color", "#EF87A7");
        }

        
        if( (parseFloat($('#rC1').val())/parseFloat($('#rC1_1').val()).toFixed()) == res2.toFixed() ) {
            notaFinalP2++     
            $('#rC1').css("background-color", "#5ED188");
            $('#rC1_1').css("background-color", "#5ED188");
        }else{
            $('#rC1').css("background-color", "#EF87A7");
            $('#rC1_1').css("background-color", "#EF87A7");
        }

        if( (parseFloat($('#rC2').val()).toFixed()) == res3.toFixed() ) {
            notaFinalP2++     
            $('#rC2').css("background-color", "#5ED188");            
        }else{
            $('#rC2').css("background-color", "#EF87A7");            
        }

    }




    var notaFinalP3 = 0;
    function Resp3(){
  
        for(var i=0; i<5; i++) {
            if( (Math.pow((parseFloat($('#rE'+i).val())), (1/(parseFloat($('#rEx'+i).val()))))).toFixed(2) >= Math.pow((parseFloat($('#nE0').text())), 1/2).toFixed(2) && (Math.pow((parseFloat($('#rE'+i).val())), (1/(parseFloat($('#rEx'+i).val()))))).toFixed(2) <= Math.pow((parseFloat($('#nE1').text())), 1/2).toFixed(2)) {
                notaFinalP3++     
                $('#rE'+i).css("background-color", "#5ED188");
                $('#rEx'+i).css("background-color", "#5ED188");
            }else{
                $('#rE'+i).css("background-color", "#EF87A7");
                $('#rEx'+i).css("background-color", "#EF87A7");
            }
        }        
 
    }



    var notaFinalP4 = 0;
    function Resp4(){
  
        for(var i=0; i<5; i++) {
            if( ((parseFloat($('#rEnt'+i).val()))/((parseFloat($('#rEnt0'+i).val())))).toFixed() >= ((parseFloat($('#nEnt0').text()))/((parseFloat($('#nEnt1').text())))).toFixed() &&  ((parseFloat($('#rEnt'+i).val()))/((parseFloat($('#rEnt0'+i).val())))).toFixed() <= ((parseFloat($('#nEnt2').text()))/((parseFloat($('#nEnt3').text())))).toFixed() ) {
                notaFinalP4++     
                $('#rEnt'+i).css("background-color", "#5ED188");
                $('#rEnt0'+i).css("background-color", "#5ED188");
            }else{
                $('#rEnt'+i).css("background-color", "#EF87A7");
                $('#rEnt0'+i).css("background-color", "#EF87A7");
            }
        }

        

            if( ((parseFloat($('#rIr0').val()))/((parseFloat($('#rIr1').val())))).toFixed() >= ((parseFloat($('#nIr0').text()))/((parseFloat($('#nIr1').text())))).toFixed() &&  ((parseFloat($('#rIr0').val()))/((parseFloat($('#rIr1').val())))).toFixed() <= ((parseFloat($('#nEnt2').text()))/((parseFloat($('#nEnt3').text())))).toFixed() ) {
                notaFinalP4++     
                $('#rIr0').css("background-color", "#5ED188");
                $('#rIr1').css("background-color", "#5ED188");
            }else{
                $('#rIr0').css("background-color", "#EF87A7");
                $('#rIr1').css("background-color", "#EF87A7");
            }
 
    }



    var notaFinalP7 = 0;
    function Resp7(){

      var val0 = 0;
      var sum0 = 0;
      var res0 = 0;


      for(var i=0; i<3; i++) {

          val0 = (($('#rDes'+i).val()).replace(/ |√|<|,|-/g, "")).split('+');
          sum0 = ( parseInt(val0[0]) + parseInt(val0[1]) );
          res0 = 0;

          if( sum0 == parseInt($('#nDes'+i).text()) ) {
              if( Number.isInteger(Math.pow(val0[0], 1/2)) && Number.isInteger(Math.pow(val0[1], 1/2)) ) {
                  notaFinalP7++     
                  $('#rDes'+i).css("background-color", "#5ED188");
              }else{
                  $('#rDes'+i).css("background-color", "#EF87A7");
              }
          }else{
              $('#rDes'+i).css("background-color", "#EF87A7");
          }
      }

    }




    var notaFinalP8 = 0;
    function Resp8(){

        for(var i=0; i<5; i++){
            if( $('#rN'+i).val() == 'rNom'+i) {
                notaFinalP8++     
                $('#rN'+i).css("background-color", "#5ED188");
            }else{
                $('#rN'+i).css("background-color", "#EF87A7");
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

      function confirmar() {

        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp7();
        Resp8();

        
        var nota1 = (notaFinalP1)/7;
        var nota2 = (notaFinalP2)/3;
        var nota3 = (notaFinalP3*0.5)/5;
        var nota4 = (notaFinalP4)/6;
        var nota5 = parseFloat($('#calificacion0').val());
        var nota6 = parseFloat($('#calificacion1').val());
        var nota7 = (notaFinalP7*0.5)/3;
        var nota8 = (notaFinalP8)/5;
        var nota9 = parseFloat($('#calificacion2').val());
        var nota10 = parseFloat($('#calificacion3').val());
        var nota11 = parseFloat($('#calificacion4').val());
            
        var notaFinal = (nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10+nota11);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

        if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' && $('#calificacion4').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
        }
          
      });

  });
