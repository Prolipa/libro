
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


    function Preg3(){
      var nDER1,nDER2,nDER3,nDER4;
      var dDER1,dDER2,dDER3,dDER4;
      var rDER1,rDER2,rDER3,rDER4,rDER5,rDER6;
      var c=1;
        nDER1 = (Math.random() * (90 - 10) + 10).toFixed(3);
        nDER2 = (Math.random() * (90 - 10) + 10).toFixed(2);
        nDER3 = Math.round(Math.random() * (9000 - 1000) + 1000);
        nDER4 = (Math.random() * (9 - 1) + 1).toFixed(2);

        dDER1 = (Math.random() * (9 - 1) + 1).toFixed(1);
        dDER2 = (Math.random() * (9 - 1) + 1).toFixed(1);
        dDER3 = Math.round(Math.random() * (50 - 10) + 10);
        dDER4 = Math.round(Math.random() * (9 - 1) + 1);

        $('#nDER'+(c)).append(nDER1);
        $('#nDER'+(c+1)).append(nDER2);
        $('#nDER'+(c+2)).append(nDER3);
        $('#nDER'+(c+3)).append(nDER4);

        $('#dDER'+(c)).append(dDER1);
        $('#dDER'+(c+1)).append(dDER2);
        $('#dDER'+(c+2)).append(dDER3);
        $('#dDER'+(c+3)).append(dDER4);

        rDER1 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER2 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER3 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER4 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER5 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER6 = (Math.random() * (90 - 1) + 1).toFixed(2);

        var respDivide = [
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER1">'+(nDER1/dDER1).toFixed(2)+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER2">'+(nDER2/dDER2).toFixed(2)+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER3">'+(nDER3/dDER3).toFixed(2)+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER4">'+(nDER4/dDER4).toFixed(2)+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER5">'+rDER1+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER6">'+rDER2+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER7">'+rDER3+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER8">'+rDER4+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER9">'+rDER5+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER10">'+rDER6+'</span>',
        ];
        respDivide.sort(f_randomico);
        $('#respDivide').append(respDivide);
    }


///////////////////////////////////////////////////////////////////

  var notaFinalP1 = 0;
  function Resp1(){
      var c=0;
      var resp = [7,8,2,0,0,4,3,0,2,4,4,6,7,6,2,7,2,5,3,7,1,9,2];
      for( var i=2; i<25; i++ ){
        if( $('#rENF'+i).val() == resp[c] && $('#rENF'+i).val() != '' ){
            notaFinalP1++;
            $('#rENF'+i).css("background-color", "#05D576");
          }else{
            $('#rENF'+i).css("background-color", "#D50545");
          }
          c++;
      } 
    }




  var notaFinalP2 = 0;
  function Resp2() {
      var c=0;
      var resp = [1.2075,0.35,3.45,48.7025,12.65,3.85];
      for( var i=1; i<7; i++ ){
        if( $('#rENP'+i).val() == resp[c] ){
            notaFinalP2++;
            $('#rENP'+i).css("background-color", "#05D576");
          }else{
            $('#rENP'+i).css("background-color", "#D50545");
          }
          c++;
      } 
  }



  var notaFinalP3 = 0;
  function Resp3(){
      for(var i=1; i<11; i++){
            if( i<5 ){
                if($('#rDER'+(i) +'.pinta').text()){
                  notaFinalP3++;
                  $('#rDER'+i).addClass('bien');
                }
            }else{
                if($('#rDER'+(i) +'.pinta').text()){
                  $('#rDER'+i).addClass('mal');
                  notaFinalP3--;
                }
            }
        }
    }



  var notaFinalP4 = 0;
  function Resp4() {
      var c=0;
      var resp = [65.5, 475.20];
      for( var i=1; i<3; i++ ){
        if( $('#rP'+i).val() == resp[c] ){
            notaFinalP4++;
            $('#rP'+i).css("background-color", "#05D576");
          }else{
            $('#rP'+i).css("background-color", "#D50545");
          }
          c++;
      } 
  }

///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }


    $(document).ready(function() {
        Inicio();
        Preg1();
        Preg3();

        for(var i=1; i<11; i++){
            $('#rDER'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar() {
        	Resp1();
          Resp2();
          Resp3();
          Resp4();
          
            var nota1 = (notaFinalP1*2.5)/23;
            var nota2 = (notaFinalP2*2.5)/6;
            var nota3;
            if( notaFinalP3<0 ){nota3=0;}else{nota3=(notaFinalP3*2.5)/4;}
            var nota4 = (notaFinalP4*2.5)/2;
            

            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
confirmar();/*
        if( $('#calificacion2').val() !='' ){
          if( $('#calificacion2').val()<=1.5 && $('#calificacion2').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }*/
      });    

});





