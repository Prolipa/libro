
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    function Preg1(){
      var encuentra = [
          '<div class="col-sm-3 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td></td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;8&nbsp;&nbsp;</td> </tr> <tr> <td>x</td> <td></td> <td></td> <td></td> <td>2</td> <td>,</td> <td>5</td> </tr> <tr style="border-top: 2px solid;"> <td></td> <td><input type="number" id="rENF2" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF3" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td><input type="number" id="rENF4" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF5" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF6" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
          '<div class="col-sm-3 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td></td> <td>&nbsp;&nbsp;7&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;8&nbsp;&nbsp;</td> </tr> <tr> <td>x</td> <td></td> <td></td> <td></td> <td>5</td> <td>,</td> <td>8</td> </tr> <tr style="border-top: 2px solid;"> <td><input type="number" id="rENF7" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF8" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF9" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td><input type="number" id="rENF10" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF11" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF12" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
          '<div class="col-sm-3 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td></td> <td>&nbsp;&nbsp;9&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> </tr> <tr> <td>x</td> <td></td> <td></td> <td></td> <td>7</td> <td>,</td> <td>3</td> </tr> <tr style="border-top: 2px solid;"> <td><input type="number" id="rENF13" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF14" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF15" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td><input type="number" id="rENF16" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF17" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF18" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
          '<div class="col-sm-3 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td></td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;5&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;8&nbsp;&nbsp;</td> </tr> <tr> <td>x</td> <td></td> <td></td> <td>3</td> <td>,</td> <td>2</td> <td>4</td> </tr> <tr style="border-top: 2px solid;"> <td><input type="number" id="rENF19" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF20" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF21" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td><input type="number" id="rENF22" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF23" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF24" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
      ];
      encuentra.sort(f_randomico);
      $('#encuentra').append(encuentra);
    }



    function Preg5(){
      var realiza = [
        '<div class="col-sm-3 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;9&nbsp;&nbsp;</td> </tr> <tr> <td></td> <td></td> <td>3</td> <td>8</td> <td>,</td> <td>0</td> <td>3</td> <td>9</td> </tr> <tr> <td>+</td> <td>1</td> <td>4</td> <td>4</td> <td>,</td> <td>7</td> <td></td> <td></td> </tr> <tr style="border-top: 2px solid;"> <td></td> <td><input type="number" id="rENF1" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF2" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF3" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td><input type="number" id="rENF4" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF5" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF6" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
        '<div class="col-sm-3 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;7&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> </tr> <tr> <td></td> <td>1</td> <td>0</td> <td>6</td> <td>,</td> <td>8</td> <td>9</td> <td>5</td> </tr> <tr> <td>+</td> <td></td> <td>4</td> <td>5</td> <td>,</td> <td>1</td> <td>3</td> <td></td> </tr> <tr style="border-top: 2px solid;"> <td></td> <td><input type="number" id="rENF7" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF8" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF9" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td><input type="number" id="rENF10" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF11" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF12" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
        '<div class="col-sm-3 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;9&nbsp;&nbsp;</td> </tr> <tr> <td>+</td> <td>2</td> <td>0</td> <td>5</td> <td>,</td> <td>7</td> <td><input type="number" id="rENF13" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF14" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> <tr style="border-top: 2px solid;"> <td></td> <td><input type="number" id="rENF15" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF16" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF17" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td><input type="number" id="rENF18" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF19" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF20" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
        '<div class="col-sm-3 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;7&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;5&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;8&nbsp;&nbsp;</td> <td><input type="number" id="rENF21" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF22" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> <tr> <td>-</td> <td></td> <td>4</td> <td>4</td> <td>,</td> <td>6</td> <td>9</td> <td>1</td> </tr> <tr style="border-top: 2px solid;"> <td></td> <td><input type="number" id="rENF23" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF24" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF25" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td><input type="number" id="rENF26" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF27" class="form-control respuestas input-sm" style="width: 30px;"></td> <td><input type="number" id="rENF28" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
      ];

      realiza.sort(f_randomico);
      $('#realiza').append(realiza);
    }



    function Preg7(){
      var valN,valD;
      var n1,n2;
      var c=1;
      for( var i=1; i<4; i++ ){
        n1 = Math.round(Math.random() * (2 - 1) + 1);
        n2 = Math.round(Math.random() * (2 - 1) + 1);
        valN =(Math.random() * (500 - 100) + 100).toFixed(n1);
        valD = (Math.random() * (20 - 1) + 1).toFixed(n2);
        $('#nUOV'+(c)).text(valN);
        $('#nUOV'+(c+1)).text(valD);
        c=c+2;
      }
    }



    function Preg8(){
      var valN,valD;
      var n1,n2;
      var c=1;
      for( var i=1; i<7; i++ ){
        n1 = Math.round(Math.random() * (2 - 1) + 1);
        n2 = Math.round(Math.random() * (2 - 1) + 1);
        valN =(Math.random() * (500 - 100) + 100).toFixed(n1);
        valD = (Math.random() * (20 - 1) + 1).toFixed(n2);
        $('#nCCR'+(c)).text(valN);
        $('#nCCR'+(c+1)).text(valD);
        c=c+2;
      }
    }

///////////////////////////////////////////////////////////////////

  var notaFinalP1 = 0;
  function Resp1(){
      var c=0;
      var resp = ['108', '36', '12', '4', '164', 'dividir por tres (÷ 3)', '4', '164'];
      for( var i=1; i<9; i++ ){
        if( $('#rRPR'+i).val() == resp[c]){
            notaFinalP1++;
            $('#rRPR'+i).css("background-color", "#05D576");
          }else{
            $('#rRPR'+i).css("background-color", "#D50545");
          }
          c++;
      } 
    }




  var notaFinalP3 = 0;
  function Resp3(){
      var resp = '17,030<17,3<25,678<45,786<45,876<67,009<67,090';
          if( $('#rONM1').val().replace(/ /gi, "").replace(/\./gi, ",") == resp ){
            notaFinalP3++;
            $('#rONM1').css("background-color", "#05D576");
          }else{
            $('#rONM1').css("background-color", "#D50545");
          }
    }



  var notaFinalP4 = 0;
  function Resp4() {
        for(var i=1; i<36; i++){
            if( i<4 ){
                if($('#uSML'+(i) +'.pinta').text()){
                  notaFinalP4++;
                  $('#uSML'+i).addClass('bien');
                }
            }else{
                if($('#uSML'+(i) +'.pinta').text()){
                  $('#uSML'+i).addClass('mal');
                  notaFinalP4--;
                }
            }
        }
  }



  var notaFinalP5 = 0;
  function Resp5(){
      var c=0;
      var resp = [4,3,6,9,5,8,5,1,9,0,2,9,0,0,4,2,8,5,0,9,0,0,7,0,9,1,0,9];
      for( var i=1; i<29; i++ ){
        if( $('#rENF'+i).val() == resp[c] && $('#rENF'+i).val() != '' ){
            notaFinalP5++;
            $('#rENF'+i).css("background-color", "#05D576");
          }else{
            $('#rENF'+i).css("background-color", "#D50545");
          }
          c++;
      } 
    }



  var notaFinalP6 = 0;
  function Resp6(){
        if( $('#rPJC1').val() == 9 ){
            notaFinalP6++;
            $('#rPJC1').css("background-color", "#05D576");
          }else{
            $('#rPJC1').css("background-color", "#D50545");
          }
    }



    var notaFinalP7 = 0;
    function Resp7(){
      var c=1;
      var resp;
      for( var i=1; i<4; i++ ){
        resp = (parseFloat($('#nUOV'+(c)).text()) / parseFloat($('#nUOV'+(c+1)).text())).toFixed();
        if( parseFloat($('#rUOV'+i).val()).toFixed() == resp ){
            notaFinalP7++;
            $('#rUOV'+i).css("background-color", "#05D576");
          }else{
            $('#rUOV'+i).css("background-color", "#D50545");
          }
          c=c+2;
      } 
    }



    var notaFinalP8 = 0;
    function Resp8(){
      var c=1;
      var resp;
      for( var i=1; i<7; i++ ){
        switch(i) {
          case 1:
            resp = (parseFloat($('#nCCR'+(c)).text()) - parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
          case 2:
            resp = (parseFloat($('#nCCR'+(c)).text()) + parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
          case 3:
            resp = (parseFloat($('#nCCR'+(c)).text()) + parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
          case 4:
            resp = (parseFloat($('#nCCR'+(c)).text()) * parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
          case 5:
            resp = (parseFloat($('#nCCR'+(c)).text()) / parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
          case 6:
            resp = (parseFloat($('#nCCR'+(c)).text()) / parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
        }
        
        if( parseFloat($('#rCCR'+i).val()).toFixed() == resp ){
            notaFinalP8++;
            $('#rCCR'+i).css("background-color", "#05D576");
          }else{
            $('#rCCR'+i).css("background-color", "#D50545");
          }
          c=c+2;
      } 
    }



    var notaFinalP9 = 0;
    function Resp9(){
      var c=0;
      var resp = [78.69, 616.91];
      for( var i=1; i<3; i++ ){
        if( $('#rP'+i).val() == resp[c] ){
            notaFinalP9++;
            $('#rP'+i).css("background-color", "#05D576");
          }else{
            $('#rP'+i).css("background-color", "#D50545");
          }
          c++;
      } 
    }

///////////////////////////////////////////////////////////////////

    $(document).ready(function() {
        Inicio();
        Preg1();
        Preg5();
        Preg7();
        Preg8();

        for(var i=1; i<36; i++){
            $('#uSML'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar() {
        	Resp1();
          Resp3();
          Resp4();
          Resp5();
          Resp6();
          Resp7();
          Resp8();
          Resp9();
          
            var nota1 = (notaFinalP1*1.125)/8;
            var nota2 = parseInt($('#calificacion2').val());
            var nota3 = (notaFinalP3*1.125);
            var nota4;
            if( notaFinalP4<0 ){nota4=0;}else{nota4=(notaFinalP4*1.125)/3;}
            var nota5 = (notaFinalP5*1.125)/28;
            var nota6 = (notaFinalP6*1.125);
            var nota7 = (notaFinalP7*1.125)/3;
            var nota8 = (notaFinalP8*1.125)/6;
            var nota9 = (notaFinalP9*1.125)/2;
            

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {

        if( $('#calificacion2').val() !='' ){
          if( $('#calificacion2').val()<=1 && $('#calificacion2').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que el puntaje ingresado no exceda lo permitido (1 punto).');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }
      });    

});





