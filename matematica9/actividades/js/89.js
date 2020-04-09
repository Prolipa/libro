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




   /* function Preg1(){
    }*/
    var suc = [];
      for(var i=1; i<8; i++){
          suc[i] = Math.round(Math.random() * (9 - 2) + 2);
          $("#nVN"+i).append(suc[i]);
      }


      var nVN0 = Math.round(Math.random() * (4 - 2) + 2);
      $("#nVN0").append(nVN0);
      var nVNA = Math.round(Math.random() * (4 - 2) + 2);
      var nVNB = Math.round(Math.random() * (9 - 2) + 2);
      $("#nVN8").append(nVNA);
      $("#nVN9").append(nVNB);




      /* function Preg3(){
    }*/
    var nVNE = [];
      for(var i=0; i<21; i++){
          nVNE[i] = Math.round(Math.random() * (9 - 2) + 2);
          $("#nVNE"+i).append(nVNE[i]);
      }


    


      function Preg2(){

        var tablaCompletar = [
                  '<tr><td> <div class="eq-c np2"> <div class="fraction"> <span class="fup">-1</span> <span class="bar">/</span> <span class="fdn">2</span> </div> xy<sup>2</sup> </div> </td> <td><br><input type="text" id="rCT0" class="form-control respuestas"></td> <td><br><input type="text" id="rCT1" class="form-control respuestas"></td> <td><br><input type="text" id="rCT2" class="form-control respuestas"></td> </tr>', 
                  '<tr><td class="np2"> <br> 7abc<sup>3</sup> <br> </td> <td><br><input type="text" id="rCT3" class="form-control respuestas"><br></td> <td><br><input type="text" id="rCT4" class="form-control respuestas"><br></td> <td><br><input type="text" id="rCT5" class="form-control respuestas"><br></td> </tr>',
                  '<tr><td> <div class="eq-c np2"> <div class="fraction"> <span class="fup">3</span> <span class="bar">/</span> <span class="fdn">5</span> </div> yz </div> </td> <td><br><input type="text" id="rCT6" class="form-control respuestas"></td> <td><br><input type="text" id="rCT7" class="form-control respuestas"></td> <td><br><input type="text" id="rCT8" class="form-control respuestas"></td></tr>',
                  '<tr><td> <div class="eq-c np2"> <div class="fraction"> <span class="fup">-ab</span> <span class="bar">/</span> <span class="fdn">cd</span> </div> </div> </td> <td><br><input type="text" id="rCT9" class="form-control respuestas"></td> <td><br><input type="text" id="rCT10" class="form-control respuestas"></td> <td><br><input type="text" id="rCT11" class="form-control respuestas"></td> </tr>',
        ]

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#tablaCompletar").append( item );
        });

      }








    var notaFinalP1 = 0;
    function Resp1(){
      var respN = ((Math.pow(nVNA,parseInt($('#nVN0').text()))) - (suc[1] * nVNA) + (suc[2] * nVNB));
      var respD = ((suc[3] * Math.pow(nVNA,suc[4])) - (suc[5] * nVNB) + suc[6]) / ((nVNA * nVNB) + suc[7]);


      
      //alert(( (parseFloat($('#rVN0').val()) / parseFloat($('#rVN1').val())).toFixed() +' == '+ (respN + respD).toFixed() ));
        if( (parseFloat($('#rVN0').val()) / parseFloat($('#rVN1').val())).toFixed() == (respN + respD).toFixed() && parseFloat($('#rVN0').val()) !='' && parseFloat($('#rVN1').val()) != '' ){
            notaFinalP1++;
            $('#rVN0').css("background-color", "#5ED188");
            $('#rVN1').css("background-color", "#5ED188");
        }else{
            $('#rVN0').css("background-color", "#EF87A7");
            $('#rVN1').css("background-color", "#EF87A7");
        }    

    }





    var notaFinalP2 = 0;
    function Resp2(){

      var resp = ['-1/2','-','xy^2','7','+','abc^3','3/5','+','yz','1','-','ab/cd'];

      for(var i=0; i<12; i++){
        //alert( $('#rCT'+i).val().toLowerCase().replace(/ |,| /g, "") +' == '+ resp[i]);
          if( $('#rCT'+i).val().toLowerCase().replace(/ |,| /g, "") == resp[i]){
                notaFinalP2++;
                $('#rCT'+i).css("background-color", "#5ED188");
          }else{
                $('#rCT'+i).css("background-color", "#EF87A7");
          }

      }

    }







    var notaFinalP3 = 0;
    function Resp3(){

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
                  notaFinalP3++;
                  $('#rVNE'+i).css("background-color", "#5ED188");
                  $('#rVNE'+(i+1)).css("background-color", "#5ED188");
              }else{
                  $('#rVNE'+i).css("background-color", "#EF87A7");
                  $('#rVNE'+(i+1)).css("background-color", "#EF87A7");
              }

         }

    }








    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();
      Preg2();

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        var nota1 = (notaFinalP1*3);
        var nota2 = (notaFinalP2*3)/12;
        var nota3 = (notaFinalP3*4)/3;
          alert((nota1+''+nota2+''+nota3));
        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
 confirmar();
     /*  if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
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
        }*/
        
      });

  });
