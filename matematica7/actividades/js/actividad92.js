
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

        var sucesiones1 = [];
        var c = 1;
        var j = 1;
        for(var i=1; i<16; i=i+5){

          sucesiones1[c] = '<li>' +
            '<span class="num'+j+'">' +
            'Patrón: &nbsp;&nbsp;&nbsp;<span id="operacion'+c+'"></span><span id="pPTCS'+c+'"></span>' +
            '&nbsp;&nbsp;&nbsp;<span id="operacion'+(c+1)+'"></span><span id="pPTCS'+(c+1)+'"></span>' +
            '</span><br><br>' +
            'Sucesión: ' +
            '&nbsp;&nbsp;<span id="nPTCS'+c+'" style="display: inline-block;"></span>&nbsp;&nbsp; ' +
            '<input type="number" id="rPTCS'+(i)+'" class="form-control respuestas suc'+j+'" style="width: 90px; display: inline-block;">&nbsp;&nbsp;' +            
            '<input type="number" id="rPTCS'+(i+1)+'" class="form-control respuestas suc'+j+'" style="width: 90px; display: inline-block;">&nbsp;&nbsp;' +
            '<input type="number" id="rPTCS'+(i+2)+'" class="form-control respuestas suc'+j+'" style="width: 90px; display: inline-block;">&nbsp;&nbsp;' +
            '<input type="number" id="rPTCS'+(i+3)+'" class="form-control respuestas suc'+j+'" style="width: 90px; display: inline-block;">&nbsp;&nbsp;' +
            '<input type="number" id="rPTCS'+(i+4)+'" class="form-control respuestas suc'+j+'" style="width: 90px; display: inline-block;">&nbsp;&nbsp;<br><br>' +
            'Es una sucesión de patrón combinado de &nbsp;&nbsp;<select id="rSCD'+c+'" class="form-control respuestas" style="display: inline-block; width: 150px;">' +
            '<option></option>' +
            '<option value="+">Suma</option>' +
            '<option value="-">Resta</option>' +
            '<option value="x">Multiplicación</option>' +
            '<option value="÷">División</option>' +
            '</select>,&nbsp;&nbsp; y &nbsp;&nbsp;<select id="rSCD'+(c+1)+'" class="form-control respuestas" style="display: inline-block; width: 150px;">' +
            '<option></option>' +
            '<option value="+">Suma</option>' +
            '<option value="-">Resta</option>' +
            '<option value="x">Multiplicación</option>' +
            '<option value="÷">División</option>' +
            '</select>.<br><br><br><br>' +
            '</li>';

          c=c+2;
          j++;
        }

        $( "#sucesiones1" ).append(sucesiones1);






        /////////////////////////////
        var nPTCS,pPTCS,operacion;
        for(var i=1; i<7; i++){
            operacion = Math.round(Math.random() * (4 - 1) + 1);
            if(operacion == 4){//evitar que haya dos divisiones juntas
              if(i%2 == 0){
                operacion = Math.round(Math.random() * (3 - 1) + 1);
              }
            }            

            switch (operacion) {
                case 1:
                    $('#operacion'+i).append('+');
                    nPTCS = Math.round(Math.random() * (7000 - 4000) + 4000);
                    $('#nPTCS'+i).append(nPTCS);
                    pPTCS = Math.round(Math.random() * (999 - 500) + 500);
                    $('#pPTCS'+i).append(pPTCS);
                    break;

                case 2:
                    $('#operacion'+i).append('-');
                    nPTCS = Math.round(Math.random() * (7000 - 4000) + 4000);
                    $('#nPTCS'+i).append(nPTCS);
                    pPTCS = Math.round(Math.random() * (999 - 500) + 500);
                    $('#pPTCS'+i).append(pPTCS);

                    break;
                case 3:
                    $('#operacion'+i).append('x');
                    pPTCS = Math.round(Math.random() * (6 - 5) + 5);
                    $('#pPTCS'+i).append(pPTCS);
                    nPTCS = Math.round(Math.random() * (10 - 5) + 5);
                    $('#nPTCS'+i).append(nPTCS*pPTCS);

                    break;
                case 4:
                    $('#operacion'+i).append('÷');
                    pPTCS = Math.round(Math.random() * (6 - 5) + 5);
                    $('#pPTCS'+i).append(pPTCS);
                    nPTCS = Math.round(Math.random() * (6 - 2) + 2);
                    $('#nPTCS'+i).append( (Math.pow(pPTCS,4))*nPTCS );
            }
        }

  }



  var tOCP,pSCP;
  var respuestaP2 = [];
  function Preg2(){            
        
        var sucesiones2 = [];
        var l = 0;
        var m = 1;
        var s = 1;
        for(var i=1; i<13; i=i+6){

          sucesiones2[l] =
          '<li>' +
              'Sucesión: &nbsp;&nbsp;' +
              '<span class="np'+m+'">' +
                  '<span id="nSCP'+i+'"></span>,&nbsp;&nbsp;' +
                  '<span id="nSCP'+(i+1)+'"></span>,&nbsp;&nbsp;' +
                  '<span id="nSCP'+(i+2)+'"></span>,&nbsp;&nbsp;' +
                  '<span id="nSCP'+(i+3)+'"></span>,&nbsp;&nbsp;' +
                  '<span id="nSCP'+(i+4)+'"></span>,&nbsp;&nbsp;' +
                  '<span id="nSCP'+(i+5)+'"></span><br><br>' +
              '</span>' +
              'Patrón: &nbsp;&nbsp;' +
              '<select id="rOCP'+s+'" class="form-control respuestas" style="width: 70px; display: inline-block;">' +
                  '<option></option>' +
                  '<option value="1">+</option>' +
                  '<option value="2">-</option>' +
                  '<option value="3">x</option>' +
                  '<option value="4">÷</option>' +
              '</select>' +
              '<input type="number" id="rPCP'+s+'" class="form-control respuestas" style="width: 90px; display: inline-block;">; &nbsp;&nbsp;' +
              '<select id="rOCP'+(s+1)+'" class="form-control respuestas" style="width: 70px; display: inline-block;">' +
                  '<option></option>' +
                  '<option value="1">+</option>' +
                  '<option value="2">-</option>' +
                  '<option value="3">x</option>' +
                  '<option value="4">÷</option>' +
              '</select>' +
              '<input type="number" id="rPCP'+(s+1)+'" class="form-control respuestas" style="width: 90px; display: inline-block;">;<br><br><br>' +
          '</li>';

          l++;
          m++;
          s=s+2;
        }

        $( "#sucesiones2" ).append(sucesiones2);


      /////////////////////////////
        var nSCP;
        var op = [];
        var pat = [];
        var patM = [];
        var ac = 1;
        var resp;
        var mult;
        var q=1;
        var r=1;

        for(n=1; n<3; n++){

            nSCP = Math.round(Math.random() * (200 - 50) + 50);
            resp = nSCP;
            for(var i=1; i<7; i++){
                tOCP = Math.round(Math.random() * (4 - 1) + 1);
                pSCP = Math.round(Math.random() * (50 - 20) + 20);

                mult = Math.round(Math.random() * (15 - 2) + 2);

                if(i<3){
                  op[i] = tOCP;
                  pat[i] = pSCP;
                  patM[i] = mult;

                  respuestaP2[r] = tOCP;
                  respuestaP2[r+1] = pSCP;
                }

                switch (op[ac]) {
                    case 1:
                        pSCP = pat[ac];
                        resp = resp + pSCP;
                        resp = Math.round(resp * 100) / 100;
                        //alert('suma' + resp +' +'+ pSCP);
                        $('#nSCP'+q).append(resp);
                        break;

                    case 2:                    
                        pSCP = pat[ac];
                        resp = resp - pSCP;
                        resp =  Math.round(resp * 100) / 100;
                        //alert('resta' + resp +' - '+ pSCP);
                        $('#nSCP'+q).append(resp);
                        break;
                    case 3:
                        pSCP = pat[ac];
                        if(pSCP>15){
                          pSCP = patM[ac];
                        }

                        if(i<3){///reemplazo con el nuevo patron calculado si es > a 15
                          respuestaP2[r+1] = pSCP;
                        }

                        resp = resp * pSCP;
                        resp =  Math.round(resp * 100) / 100;
                        //alert('multiplicacion' + resp +' * '+ pSCP);
                        $('#nSCP'+q).append(resp);
                        break;
                    case 4:
                        pSCP = pat[ac];
                        if(i>1){//para que no inicie el valor inicial dividido
                          resp = resp / pSCP;
                        }
                        
                        resp =  Math.round(resp * 100) / 100;
                        //alert('division: ' + resp +' / '+ pSCP);
                        $('#nSCP'+q).append(resp);
                }
                ac++;
                q++;                
                if(ac==3){ ac=1; }
                 r=r+2;
                
            }

        }
        
    }




  function Preg3(){

      var nCPN1 = Math.round(Math.random() * (50 - 20) + 20);
      var nCPN2 = Math.round(Math.random() * (10 - 3) + 3);
      $('#nCPN1').append(nCPN1);
      $('#nCPN2').append(nCPN2);
      $('#nCPN3').append(nCPN2);

      var nOCR1 = Math.round(Math.random() * (10 - 5) + 5);
      var nOCR2 = Math.round(Math.random() * (10 - 3) + 3);
      $('#nOCR1').append(nOCR1);
      $('#nOCR2').append(nOCR1);
      $('#nOCR3').append(nOCR2);

  }




//////////////////////////////////////////////////////////


var notaFinalP1 = 0;
  function Resp1(){

      var resp;
      var c=1;
      var j=1;
      for(var k=1; k<6; k=k+2){
          resp = (parseInt($('#nPTCS'+k).text()));

          for(var i=1; i<6; i++){
              switch ($('#operacion'+j).text()) {
                  case '+':
                      //alert( resp +' + '+ (parseInt($('#pPTCS'+j).text())) );
                      resp = resp + (parseInt($('#pPTCS'+j).text()));
                      if( parseInt($('#rPTCS'+c).val()) == parseInt(resp) ){
                        notaFinalP1++;
                        $('#rPTCS'+c).css("background-color", "#5ED188");
                      }else{
                        $('#rPTCS'+c).css("background-color", "#EF87A7");
                      }
                      
                      break;
                  case '-':
                      //alert( resp +' - '+ (parseInt($('#pPTCS'+j).text())) );
                      resp = resp - (parseInt($('#pPTCS'+j).text()));
                      if( parseInt($('#rPTCS'+c).val()) == parseInt(resp) ){
                        notaFinalP1++;
                        $('#rPTCS'+c).css("background-color", "#5ED188");
                      }else{
                        $('#rPTCS'+c).css("background-color", "#EF87A7");
                      }

                      break;
                  case 'x':
                      //alert( resp +' * '+ (parseInt($('#pPTCS'+j).text())) );
                      resp = resp * (parseInt($('#pPTCS'+j).text()));
                      if( parseInt($('#rPTCS'+c).val()) == parseInt(resp) ){
                        notaFinalP1++;
                        $('#rPTCS'+c).css("background-color", "#5ED188");
                      }else{
                        $('#rPTCS'+c).css("background-color", "#EF87A7");
                      }
                      
                      break;
                  case '÷':
                      //alert( resp +' / '+ (parseInt($('#pPTCS'+j).text())) );
                      resp = resp / (parseInt($('#pPTCS'+j).text()));
                      if( parseInt($('#rPTCS'+c).val()) == parseInt(resp) ){
                        notaFinalP1++;
                        $('#rPTCS'+c).css("background-color", "#5ED188");
                      }else{
                        $('#rPTCS'+c).css("background-color", "#EF87A7");
                      }          
                }

                ///////////////////
                if( $('#rSCD'+j).val() == $('#operacion'+j).text() ){
                    notaFinalP1++;
                    $('#rSCD'+j).css("background-color", "#5ED188");
                }else{
                    $('#rSCD'+j).css("background-color", "#EF87A7");
                } 


                c++;
                j++;

                if(c<6 && j==3){ j=1; }//primera fila

                if(c==6 || j==5){ j=3; }//segunda filla

                if(c==11 || j==7){ j=5; }//tercera fila

          } 

      }
         
    }





    var notaFinalP2 = 0;
    function Resp2(){      
      
      var c=1;
        for(var i=1; i<5; i=i+2){
            
            //alert( parseInt($('#rOCP'+i).val()) +'=='+ respuestaP2[c] +' && '+ parseInt($('#rPCP'+i).val()) +'=='+ respuestaP2[c+1]  +' || '+  parseInt($('#rOCP'+(i+1)).val()) +'=='+ respuestaP2[c+2] +'&&'+ parseInt($('#rPCP'+(i+1)).val()) +'=='+ respuestaP2[c+3] +'  __  '+ respuestaP2 );

            if( parseInt($('#rOCP'+i).val()) == respuestaP2[c] && parseInt($('#rPCP'+i).val()) == respuestaP2[c+1] || parseInt($('#rOCP'+i).val()) == respuestaP2[c+2] && parseInt($('#rPCP'+i).val()) == respuestaP2[c+3] ){
                notaFinalP2++;
                $('#rOCP'+i).css("background-color", "#5ED188");
                $('#rPCP'+i).css("background-color", "#5ED188");
            }else{
                $('#rOCP'+i).css("background-color", "#EF87A7");
                $('#rPCP'+i).css("background-color", "#EF87A7");
            }

            
            if( parseInt($('#rOCP'+(i+1)).val()) == respuestaP2[c] && parseInt($('#rPCP'+(i+1)).val()) == respuestaP2[c+1] || parseInt($('#rOCP'+(i+1)).val()) == respuestaP2[c+2] && parseInt($('#rPCP'+(i+1)).val()) == respuestaP2[c+3] ){
                notaFinalP2++;
                $('#rOCP'+(i+1)).css("background-color", "#5ED188");
                $('#rPCP'+(i+1)).css("background-color", "#5ED188");
            }else{
                $('#rOCP'+(i+1)).css("background-color", "#EF87A7");
                $('#rPCP'+(i+1)).css("background-color", "#EF87A7");
            }

            c=c+12;//intervalo de respuetsaP2

        }
           


    }


      var notaFinalP3 = 0;
      function Resp3(){


            if( parseInt($('#rCPN1').val()) == Math.round(Math.pow(2, parseInt($('#nCPN2').text())) * parseInt($('#nCPN1').text())) ){
                notaFinalP3++;
                $('#rCPN1').css("background-color", "#5ED188");
            }else{
                $('#rCPN1').css("background-color", "#EF87A7");
            }


            if( parseInt($('#rOCR1').val()) == Math.round(Math.pow(parseInt($('#nOCR2').text()), parseInt($('#nOCR3').text()))) ){
                notaFinalP3++;
                $('#rOCR1').css("background-color", "#5ED188");
            }else{
                $('#rOCR1').css("background-color", "#EF87A7");
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

           function confirmar() {
            Resp1();
            Resp2();
            Resp3();

            var nota1 = (notaFinalP1*4)/30;
            var nota2 = (notaFinalP2*3)/4;
            var nota3 = (notaFinalP3*3)/2;
            var notaFinal = (nota1+nota2+nota3).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
confirmar();
     /* if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }*/

      });

       

});





