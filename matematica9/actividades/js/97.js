var titulos="preparo";
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

        var tr = [];
        for(var i=0; i<6; i++){          
          
          var op = ['4.5 x 10<sup>3</sup>','1.34 x 10<sup>-2</sup>','5.6 x 10<sup>-4</sup>','2.3 x 10 <sup>5</sup>','6.95 x 10<sup>-3</sup>','3.5 x 10<sup>-1</sup>'];


          tr[i] = '<div class="col-sm-12"><br><li>'+
                  op[i]+'&nbsp;&nbsp;=&nbsp;&nbsp;<input type="number" class="form-control respuestas" id="rNCF'+i+'">'+
                  '</li><br></div>';  

        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#notacion_comun").append( item );
        });


    }






    function Preg2(){

        var tr = [];
        for(var i=0; i<4; i++){
          
          var op = ['(81)<sup>-1/2</sup>','<div class="eq-c">'+            
                                            '<div class="fraction">'+
                                                '<span class="fup">x<sup>-3/2</sup></span>'+
                                                '<span class="bar">/</span>'+
                                                '<span class="fdn">y<sup>-3/2</sup></span>'+
                                            '</div>'+
                                          '</div>','(x<sup>4</sup>)<sup>-1/2</sup>',
                                          '<div class="eq-c"><span style="font-size: 35px;">(</span>'+
                                            '<div class="fraction">'+
                                                '<span class="fup">27x<sup>3</sup></span>'+
                                                '<span class="bar">/</span>'+
                                                '<span class="fdn">64y<sup>6</sup></span>'+
                                            '</div><span style="font-size: 35px;">)</span><sup style="top: -20px;">-1/2</sup>'+
                                          '</div>'];

          tr[i] = '<div class="col-sm-6"><br><li>'+
                  '<span class="np2 col-sm-4">'+op[i]+'</span>'+
                  '<span class="col-sm-8"><input type="text" class="form-control respuestas" id="rREj'+i+'" placeholder="Ej: 5x^3 + y^2"></span>'+
                '</li><br></div>';         
        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#resolver0").append( item );
        });


    }




    function Preg3(){

        var tr = [];
        for(var i=0; i<4; i++){          
          
          var op = ['√5 / 4','(5 √5) / 4', '√5','5 √5'];


          tr[i] = '<div class="col-sm-3"><br><li id="rVal'+i+'" style="border-radius: 10px;">'+
                  '<input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR'+i+'" name="sR00" value="'+i+'">&nbsp;&nbsp;<span class="np1">'+op[i]+'</span>'+
                '</li><br></div>';  

        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#eliminarRad").append( item );
        });

    }




      function Preg4(){

        var tr = [];
        for(var i=0; i<4; i++){          
          
          var op = ['4','√3', '√2','16'];


          tr[i] = '<div class="col-sm-3"><br><li id="rSimp'+i+'" style="border-radius: 10px;">'+
                  '<input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sRSp'+i+'" name="sRSP00" value="'+i+'">&nbsp;&nbsp;<span class="np1">'+op[i]+'</span>'+
                '</li><br></div>';  

        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#Simplificar").append( item );
        });

    }





    function Preg5(){

        var tr = [];
        for(var i=0; i<4; i++){          
          
          var op = ['72√(2^3)','√3/52', '√2^3/72','√72 2^3'];


          tr[i] = '<div class="col-sm-3"><br><li id="rSimp1'+i+'" style="border-radius: 10px;">'+
                  '<input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sRSp1'+i+'" name="sRSP001" value="'+i+'">&nbsp;&nbsp;<span class="np1">'+op[i]+'</span>'+
                '</li><br></div>';  

        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#Simplificar1").append( item );
        });

    }




    function Preg6(){

      var nCNR = Math.round(Math.random() * (20 - (2)) + (2));

      for(var i=0; i<4; i++){

        nCNR = Math.round(Math.random() * (20 - (2)) + (2));

        $('#nCNR'+i).append(nCNR);
      }

    }


 /* function Preg7(){
    }*/
    var nVNE = [];
      for(var i=0; i<21; i++){
          nVNE[i] = Math.round(Math.random() * (9 - 2) + 2);
          $("#nVNE"+i).append(nVNE[i]);
      }





      function Preg8(){

        var tr = [];
        var tr1 = [];
        var select0 = '';
        var select1 = '';
        var select2 = '';

        for(var i=0; i<4; i++){
          select0 = '<select class="form-control respuestas" id="rACP'+i+'"> <option></option> <option>X</option> <option>√</option> </select>';
          select1 = '<select class="form-control respuestas" id="rACP1'+i+'"> <option></option> <option>X</option> <option>√</option> </select>';
          select2 = '<select class="form-control respuestas" id="rACP2'+i+'"> <option></option> <option>X</option> <option>√</option> </select>';

          var op = ['P(x)','Q(x)','R(x)','S(x)'];


          tr[i] = '<tr>'+
                  '<td>'+op[i]+'</td>'+
                  '<td>'+select0+'</td>'+
                  '<td>'+select1+'</td>'+
                '</tr>';     


          var op1 = ['P(x) y Q(x)','Q(x) y R(x)','R(x) y S(x)','P(x) y S(x)'];


          tr1[i] = '<tr>'+
                  '<td>'+op1[i]+'</td>'+
                  '<td>'+select2+'</td>'+
                '</tr>';     




        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#analizar").append( item );
        });



        var tablaCompletar1 = tr1;

        var contenidos2 = tablaCompletar1;
        contenidos2.sort(f_randomico);

        $.each( contenidos2, function( i, item ) {
          $("#analizar1").append( item );
        });


      }











    ////////////////////////////////////////



    var notaFinalP1 = 0;
    function Resp1(){

         var resp = [4500,0.0134,0.00056,230000,0.00695,0.35];

            for(var i=0; i<6; i++){
             // alert( (($('#rNCF'+i).val())).toLowerCase().replace(/ |,|(|) /g, "") +' == '+ resp[i] );
                if( parseFloat(($('#rNCF'+i).val())) == resp[i] ){
                    notaFinalP1++;
                    $('#rNCF'+i).css("background-color", "#5ED188");
                }else{
                    $('#rNCF'+i).css("background-color", "#EF87A7");
                }

            }
    }





    var notaFinalP2 = 0;
    function Resp2(){


         var resp = ['1/9','√y^3/√x^3','1/x^2','8y^3/3x√3x'];

            for(var i=0; i<4; i++){

                if( (($('#rREj'+i).val())).toLowerCase().replace(/ |,|(|) /g, "") == resp[i] ){
                    notaFinalP2++;
                    $('#rREj'+i).css("background-color", "#5ED188");
                }else{
                    $('#rREj'+i).css("background-color", "#EF87A7");
                }

            }
            
    }



    var notaFinalP3 = 0;
    function Resp3(){


       var resp = 0;
            if( (document.getElementById('sR0').checked) ){
                notaFinalP3++;
                $('#rVal0').css("background-color", "#5ED188");
            }else{
                $('#rVal0').css("background-color", "#EF87A7");
            }

            
    }



    var notaFinalP4 = 0;
    function Resp4(){

          var resp = 0;
            if( (document.getElementById('sRSp0').checked) ){
                notaFinalP4++;
                $('#rSimp0').css("background-color", "#5ED188");
            }else{
                $('#rSimp0').css("background-color", "#EF87A7");
            }

    }
  



    var notaFinalP5 = 0;
    function Resp5(){

          var resp = 0;
            if( (document.getElementById('sRSp10').checked) ){
                notaFinalP5++;
                $('#rSimp10').css("background-color", "#5ED188");
            }else{
                $('#rSimp10').css("background-color", "#EF87A7");
            }

    }




    var notaFinalP6 = 0;
    function Resp6(){

      var resp = Math.pow( (( Math.pow(parseFloat($('#nCNR0').text()),1/2) + Math.pow(parseFloat($('#nCNR1').text()),1/2) ) * ( Math.pow(parseFloat($('#nCNR2').text()),1/2) - Math.pow(parseFloat($('#nCNR3').text()),1/2) )),1/2 );
            
      //alert( parseFloat($('#rSRad0').val()).toFixed() +' == '+ resp.toFixed() );
            if( parseFloat($('#rSRad0').val()).toFixed() == resp.toFixed() ){
                notaFinalP6++;
                $('#rSRad0').css("background-color", "#5ED188");
            }else{
                $('#rSRad0').css("background-color", "#EF87A7");
            }
         
            

    }




     



    var notaFinalP7 = 0;
    function Resp7(){

      var respN = ((nVNE[0] * (1/3)) - (nVNE[1] * (1/2)) + (nVNE[2] * Math.pow((1/3),nVNE[3]))); 
      var respD = (nVNE[4] - (nVNE[5] * (1/3) * (1/2)));

     

         for(var i=0; i<6; i=i+2){

            if(i==2){
                respN = ((2 + 5) / (2 + nVNE[6])) + ( (nVNE[7] * 2 * -5) / (nVNE[8] * (2 - 5)));
                respD = 1;
            }

            if(i==4){
                respN = ( ( ( (nVNE[9] * (Math.pow((-1),nVNE[10]))) - (nVNE[11] * (Math.pow((-1),nVNE[12]))) - (nVNE[13] * (-1)) + nVNE[14] ) / ( (nVNE[15] * (Math.pow((-1),nVNE[16]))) - nVNE[17] )) + ( (nVNE[18] + 1) / (Math.pow(((-1) + nVNE[19]), nVNE[20])) ));
                respD = 1;
            } 

           //alert( (parseFloat($('#rVNE'+i).val()) / parseFloat($('#rVNE'+(i+1)).val())).toFixed() +' == '+ (respN +' / '+ respD) );

              if( (parseFloat($('#rVNE'+i).val()) / parseFloat($('#rVNE'+(i+1)).val())).toFixed() == (respN / respD).toFixed() ){
                  notaFinalP7++;
                  $('#rVNE'+i).css("background-color", "#5ED188");
                  $('#rVNE'+(i+1)).css("background-color", "#5ED188");
              }else{
                  $('#rVNE'+i).css("background-color", "#EF87A7");
                  $('#rVNE'+(i+1)).css("background-color", "#EF87A7");
              }

         }

    }






    var notaFinalP8 = 0;
    function Resp8(){

      var resp = ['√','√','X','√',];
      var resp1 = ['X','√','X','√',];
      var resp2 = ['X','X','X','√',];

         for(var i=0; i<4; i++){

              if( $('#rACP'+i).val() == resp[i]){
                  notaFinalP8++;
                  $('#rACP'+i).css("background-color", "#5ED188");
              }else{
                  $('#rACP'+i).css("background-color", "#EF87A7");
              }


              if( $('#rACP1'+i).val() == resp1[i]){
                  notaFinalP8++;
                  $('#rACP1'+i).css("background-color", "#5ED188");
              }else{
                  $('#rACP1'+i).css("background-color", "#EF87A7");
              }

              if( $('#rACP2'+i).val() == resp2[i]){
                  notaFinalP8++;
                  $('#rACP2'+i).css("background-color", "#5ED188");
              }else{
                  $('#rACP2'+i).css("background-color", "#EF87A7");
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
      Preg8();

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp5();
        Resp6();
        Resp7();
        Resp8();
        
        var nota1 = (notaFinalP1)/4;
        var nota2 = (notaFinalP2)/4;
        var nota3 = (notaFinalP3);
        var nota4 = (notaFinalP4);
        var nota5 = (notaFinalP5);
        var nota6 = (notaFinalP6);
        var nota7 = (notaFinalP7*2)/3;
        var nota8 = parseFloat($('#calificacion0').val());

        
        var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

      if( $('#calificacion0').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
        
      });

  });
