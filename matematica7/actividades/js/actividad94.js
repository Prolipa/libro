
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

      var nCFC1 = Math.round(Math.random() * (10 - 2) + 2);
      var nCFC2 = Math.round(Math.random() * (10 - 2) + 2);
      var nCFC3 = Math.round(Math.random() * (10 - 2) + 2);
      var nCFC4 = Math.round(Math.random() * (10 - 2) + 2);
      $('#nCFC1').append(nCFC1);
      $('#nCFC2').append(nCFC2);
      $('#nCFC3').append(nCFC3);
      $('#nCFC4').append(nCFC4);

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
    var nTCP;
    for(var i=1; i<7; i++){
        nTCP = Math.round(Math.random() * (20 - 2) + 2);
        $('#nTCP'+i).append(nTCP);
    }

  }




//////////////////////////////////////////////////////////


var notaFinalP1 = 0;
  function Resp1(){

        var resp,res,mm=[];
        var c = 0;

      for(var i=1; i<5; i=i+2){

          resp = (parseInt($('#nCFC'+i).text()) / parseInt($('#nCFC'+(i+1)).text()));
          res = (parseInt($('#rCFC'+i).val()) / parseInt($('#rCFC'+(i+1)).val()));

            if( resp == res){
                notaFinalP1++;
                $('#rCFC'+i).css("background-color", "#5ED188");
                $('#rCFC'+(i+1)).css("background-color", "#5ED188");
            }else{
                $('#rCFC'+i).css("background-color", "#EF87A7");
                $('#rCFC'+(i+1)).css("background-color", "#EF87A7");
            }


            mm[c] = resp;
            c++;
      } 

            if( mm[0] > mm[1] ){
                if( $('#rCFMN1').val().toString() == '>'){
                    notaFinalP1++;
                    $('#rCFMN1').css("background-color", "#5ED188");
                }else{
                    $('#rCFMN1').css("background-color", "#EF87A7");
                }
            }

            if( mm[0] < mm[1] ){
                if( ($('#rCFMN1').val()).toString() == '<'){
                    notaFinalP1++;
                    $('#rCFMN1').css("background-color", "#5ED188");
                }else{
                    $('#rCFMN1').css("background-color", "#EF87A7");
                }
            }

            if( mm[0] == mm[1] ){
                if($('#rCFMN1').val() == '='){
                    notaFinalP1++;
                    $('#rCFMN1').css("background-color", "#5ED188");
                }else{
                    $('#rCFMN1').css("background-color", "#EF87A7");
                }
            }
         

    }





    var notaFinalP2 = 0;
    function Resp2(){      
      
      for(var i=1; i<31; i++){

          if( i==9 || i==16 || i==30 ){
              if($('#rUSN'+(i) +'.pintaRecta').text()){
                notaFinalP2++;
                $('#rUSN'+i).css("border-right-color", "#5ED188");
              }else{
                $('#rUSN'+i).css("border-right-color", "#EF87A7");
              }
          }else{
              if($('#rUSN'+(i) +'.pintaRecta').text()){
                notaFinalP2--;
                $('#rUSN'+i).css("border-right-color", "#EF87A7");
              }
          }

      }
           

      var resp= [27,12,8,12,15,12];
      for(var j=1; j<7; j++){
            if( parseInt($('#rCFH'+j).val()) == resp[j-1] ) {
                notaFinalP2++;
                $('#rCFH'+j).css("background-color", "#5ED188");
            }else{
                $('#rCFH'+j).css("background-color", "#EF87A7");
            }
      }


      
        if( ($('#rCFHMN1').val()) == '>' ) {
            notaFinalP2++;
            $('#rCFHMN1').css("background-color", "#5ED188");
        }else{
            $('#rCFHMN1').css("background-color", "#EF87A7");
        }
        if( ($('#rCFHMN2').val()) == '<' ) {
            notaFinalP2++;
            $('#rCFHMN2').css("background-color", "#5ED188");
        }else{
            $('#rCFHMN2').css("background-color", "#EF87A7");
        }
    }


      var notaFinalP3 = 0;
      function Resp3(){


            for(var i=1; i<12; i++){

                if( i==5 || i==6 || i==8 || i==9 || i==11 ){
                    if($('#rRMN'+(i) +'.pintaRecta').text()){
                      notaFinalP3++;
                      $('#rRMN'+i).css("border-right-color", "#5ED188");
                    }else{
                      $('#rRMN'+i).css("border-right-color", "#EF87A7");
                    }
                }else{
                    if($('#rRMN'+(i) +'.pintaRecta').text()){
                        notaFinalP3--;
                        $('#rRMN'+i).css("border-right-color", "#EF87A7");
                    }
                }
          }



          var resp= [4,3,5,3,7,3,8,3,10,3];
          for(var j=1; j<11; j++){
                if( parseInt($('#rOMN'+j).val()) == resp[j-1] ) {
                    notaFinalP3++;
                    $('#rOMN'+j).css("background-color", "#5ED188");
                }else{
                    $('#rOMN'+j).css("background-color", "#EF87A7");
                }
          }

      }






      var notaFinalP4 = 0;
      function Resp4(){

        var resp = [(parseInt($('#nTCP1').text())/parseInt($('#nTCP2').text())), (parseInt($('#nTCP3').text())/parseInt($('#nTCP4').text())), (parseInt($('#nTCP5').text())/parseInt($('#nTCP6').text()))];
            
        var respM = Math.max.apply(null, resp);

        for(var i=0; i<3; i++){

          if(resp[i] == respM){
              if( $('#rTCP1').val() == i  &&  $('#rTCP1').val() != '' ) {
                  notaFinalP4++;
                  $('#rTCP1').css("background-color", "#5ED188");
              }else{
                  $('#rTCP1').css("background-color", "#EF87A7");
              }
          }

        }

      }





    function Cargar() {   
      location.reload(true);
    }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg3();



            for(var i=1; i<31; i++){////Preg2

                $('#rUSN'+(i)).click(function(){
                    if($(this).hasClass('pintaRecta')) {
                        $(this).removeClass('pintaRecta')
                    }else{
                        $(this).addClass('pintaRecta')
                    }

                });
            }


            for(var k=1; k<12; k++){////Preg3

                $('#rRMN'+(k)).click(function(){
                    if($(this).hasClass('pintaRecta')) {
                        $(this).removeClass('pintaRecta')
                    }else{
                        $(this).addClass('pintaRecta')
                    }

                });
            }


           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4();

            var nota1 = (notaFinalP1*2)/3;
            var nota2;
            if(notaFinalP2>0){nota2 = (notaFinalP2*3)/11;}else{nota2=0;}
            var nota3; 
            if(notaFinalP3>0){nota3 = (notaFinalP3*3)/15;}else{nota3=0;}
            var nota4 = (notaFinalP4*2);
            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

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





