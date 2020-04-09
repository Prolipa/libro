
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
      var val1;
      var val2;
      var valS;
      var sig;
      var d=1;//15
      var c=1;//2
      for( var i=1; i<7; i++ ){
        val1 = (Math.random() * (90 - 10) + 10).toFixed(3);
        val2 = (Math.random() * (90 - 1) + 1).toFixed(2);
        valS = Math.round((Math.random() * (2 - 1) + 1));
        if( valS == 1 ){
          sig = '+';
        }else{
          sig = '-';
        }
        $('#ordena1').append('<div class="col-sm-4 table-responsive" align="center"> <li> <span class="num1" style="background-color: #6CE5D2;"> <span class="" id="nOFV'+(c)+'">'+val1+'</span> &nbsp;&nbsp;<span class="" id="sOFV'+(i)+'">'+sig+'</span>&nbsp;&nbsp; <span class="" id="nOFV'+(c+1)+'">'+val2+'</span> </span><br><br> <table> <tbody align="center"> <tr> <td><input type="number" id="rO'+(d)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+1)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td>,</td> <td><input type="number" id="rO'+(d+2)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+3)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+4)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> </tr> <tr> <td><input type="number" id="rO'+(d+5)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+6)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td>,</td> <td><input type="number" id="rO'+(d+7)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+8)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+9)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> </tr> <tr style="border-top: 2px solid;"> <td><input type="number" id="rO'+(d+10)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+11)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td>,</td> <td><input type="number" id="rO'+(d+12)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+13)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> <td><input type="number" id="rO'+(d+14)+'" class="form-control respuestas input-sm" style="width: 45px;"></td> </tr> </tbody> </table> </li><br><br></div>');
        
        d=d+15;
        c=c+2;
      }
    }


    function Preg2(){
      var encuentra = [
          '<div class="col-sm-4 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;5&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;5&nbsp;&nbsp;</td> <td><input type="number" id="rENF1" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> <tr> <td></td> <td></td> <td>1</td> <td><input type="number" id="rENF2" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td>3</td> <td>0</td> </tr> <tr> <td>+</td> <td>3</td> <td>0</td> <td>9</td> <td>,</td> <td><input type="number" id="rENF3" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>3</td> </tr> <tr style="border-top: 2px solid;"> <td></td> <td><input type="number" id="rENF4" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>5</td> <td>2</td> <td>,</td> <td>8</td> <td>9</td> </tr> </tbody> </table> </li> </div>',
          '<div class="col-sm-4 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;7&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td><input type="number" id="rENF5" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>&nbsp;&nbsp;5&nbsp;&nbsp;</td> </tr> <tr> <td></td> <td>2</td> <td><input type="number" id="rENF6" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>,</td> <td>0</td> <td>0</td> <td>9</td> </tr> <tr> <td>+</td> <td></td> <td>4</td> <td>,</td> <td><input type="number" id="rENF7" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>7</td> <td>0</td> </tr> <tr style="border-top: 2px solid;"> <td></td> <td>6</td> <td>6</td> <td>,</td> <td>8</td> <td>9</td> <td><input type="number" id="rENF8" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> </tbody> </table> </li> </div>',
          '<div class="col-sm-4 table-responsive" align="center"> <li> <br><table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>,</td> <td><input type="number" id="rENF9" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>&nbsp;&nbsp;7&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> </tr> <tr> <td>-</td> <td></td> <td>4</td> <td>,</td> <td>3</td> <td>0</td> <td>0</td> <td><input type="number" id="rENF10" class="form-control respuestas input-sm" style="width: 30px;"></td> </tr> <tr style="border-top: 2px solid;"> <td></td> <td>2</td> <td><input type="number" id="rENF11" class="form-control respuestas input-sm" style="width: 30px;"></td> <td>3</td> <td>6</td> <td>,</td> <td>9</td> <td>5</td> </tr> </tbody> </table> </li> </div>',
      ];
      encuentra.sort(f_randomico);
      $('#encuentra').append(encuentra);
    }


    function Preg3(){
      var completa = [
          '<div class="col-sm-4" align="center"> <li> 6,465 + 30,7 &nbsp;&nbsp;=&nbsp;&nbsp; <input type="number" id="rCLI1" class="form-control respuestas input-sm" style="width: 90px;"><br><br> </li> <li> 73,18 + &nbsp;&nbsp;<input type="number" id="rCLI2" class="form-control respuestas input-sm" style="width: 90px;"> &nbsp;&nbsp;=&nbsp;&nbsp; 111,61<br><br> </li> </div>',
          '<div class="col-sm-4" align="center"> <li> <input type="number" id="rCLI3" class="form-control respuestas input-sm" style="width: 90px;">&nbsp;&nbsp; - 8,3 &nbsp;&nbsp;=&nbsp;&nbsp; 4,424<br><br> </li> <li> 65,701 + &nbsp;&nbsp;<input type="number" id="rCLI4" class="form-control respuestas input-sm" style="width: 90px;"> &nbsp;&nbsp;=&nbsp;&nbsp; 83,794<br><br> </li> </div>',
          '<div class="col-sm-4" align="center"> <li> <input type="number" id="rCLI5" class="form-control respuestas input-sm" style="width: 90px;">&nbsp;&nbsp; - 7,809 &nbsp;&nbsp;=&nbsp;&nbsp; 373,441<br><br> </li> <li> 856,72 + 54,89 &nbsp;&nbsp;=&nbsp;&nbsp;<input type="number" id="rCLI6" class="form-control respuestas input-sm" style="width: 90px;"><br><br> </li> </div>',
      ];
      completa.sort(f_randomico);
      $('#completa').append(completa);
    }
///////////////////////////////////////////////////////////////////

	var notaFinalP1 = 0;
	function Resp1() {
      var c=1;//+2
      var d=1;//+15
      var rN1;
      var rN2;
      for( var i=1; i<7; i++ ){
        rN1 = parseFloat($('#rO'+(d)).val()+''+$('#rO'+(d+1)).val()+'.'+$('#rO'+(d+2)).val()+''+$('#rO'+(d+3)).val()+''+$('#rO'+(d+4)).val());
        rN2 = parseFloat($('#rO'+(d+5)).val()+''+$('#rO'+(d+6)).val()+'.'+$('#rO'+(d+7)).val()+''+$('#rO'+(d+8)).val()+''+$('#rO'+(d+9)).val());
        rN3 = parseFloat($('#rO'+(d+10)).val()+''+$('#rO'+(d+11)).val()+'.'+$('#rO'+(d+12)).val()+''+$('#rO'+(d+13)).val()+''+$('#rO'+(d+14)).val());
        //alert( parseFloat($('#nOFV'+(c)).text()) +' == '+ rN1 );

          if( parseFloat($('#nOFV'+(c)).text()) == rN1 ){
            notaFinalP1++;
            $('#rO'+(d)).css("background-color", "#05D576");
            $('#rO'+(d+1)).css("background-color", "#05D576");
            $('#rO'+(d+2)).css("background-color", "#05D576");
            $('#rO'+(d+3)).css("background-color", "#05D576");
            $('#rO'+(d+4)).css("background-color", "#05D576");
          }else{
            $('#rO'+(d)).css("background-color", "#D50545");
            $('#rO'+(d+1)).css("background-color", "#D50545");
            $('#rO'+(d+2)).css("background-color", "#D50545");
            $('#rO'+(d+3)).css("background-color", "#D50545");
            $('#rO'+(d+4)).css("background-color", "#D50545");
          }

          if( parseFloat($('#nOFV'+(c+1)).text()) == rN2 ){
            notaFinalP1++;
            $('#rO'+(d+5)).css("background-color", "#05D576");
            $('#rO'+(d+6)).css("background-color", "#05D576");
            $('#rO'+(d+7)).css("background-color", "#05D576");
            $('#rO'+(d+8)).css("background-color", "#05D576");
            $('#rO'+(d+9)).css("background-color", "#05D576");
          }else{
            $('#rO'+(d+5)).css("background-color", "#D50545");
            $('#rO'+(d+6)).css("background-color", "#D50545");
            $('#rO'+(d+7)).css("background-color", "#D50545");
            $('#rO'+(d+8)).css("background-color", "#D50545");
            $('#rO'+(d+9)).css("background-color", "#D50545");
          }

          if( $('#sOFV'+(i)).text() == '+' ){
              if( (parseFloat($('#nOFV'+(c)).text()) + parseFloat($('#nOFV'+(c+1)).text())) == rN3 ){
                notaFinalP1++;
                $('#rO'+(d+10)).css("background-color", "#05D576");
                $('#rO'+(d+11)).css("background-color", "#05D576");
                $('#rO'+(d+12)).css("background-color", "#05D576");
                $('#rO'+(d+13)).css("background-color", "#05D576");
                $('#rO'+(d+14)).css("background-color", "#05D576");
              }else{
                $('#rO'+(d+10)).css("background-color", "#D50545");
                $('#rO'+(d+11)).css("background-color", "#D50545");
                $('#rO'+(d+12)).css("background-color", "#D50545");
                $('#rO'+(d+13)).css("background-color", "#D50545");
                $('#rO'+(d+14)).css("background-color", "#D50545");
              }
          }else{
              if( (parseFloat($('#nOFV'+(c)).text()) - parseFloat($('#nOFV'+(c+1)).text())) == rN3 ){
                notaFinalP1++;
                $('#rO'+(d+10)).css("background-color", "#05D576");
                $('#rO'+(d+11)).css("background-color", "#05D576");
                $('#rO'+(d+12)).css("background-color", "#05D576");
                $('#rO'+(d+13)).css("background-color", "#05D576");
                $('#rO'+(d+14)).css("background-color", "#05D576");
              }else{
                $('#rO'+(d+10)).css("background-color", "#D50545");
                $('#rO'+(d+11)).css("background-color", "#D50545");
                $('#rO'+(d+12)).css("background-color", "#D50545");
                $('#rO'+(d+13)).css("background-color", "#D50545");
                $('#rO'+(d+14)).css("background-color", "#D50545");
              }
          }
          d=d+15;
          c=c+2;
      }  
	}


  var notaFinalP2 = 0;
  function Resp2(){

      var resp = ['6', '8', '0', '4', '1', '5', '6', '4', '6', '5', '8'];
      for( var i=1; i<12; i++ ){
        if( $('#rENF'+i).val() == resp[i-1]){
            notaFinalP2++;
            $('#rENF'+i).css("background-color", "#05D576");
          }else{
            $('#rENF'+i).css("background-color", "#D50545");
          }
      } 
    }

  var notaFinalP3 = 0;
  function Resp3(){

      var resp = [37.165,38.43,12.724,18.093,381.25,911.61];
      for( var i=1; i<7; i++ ){
        if( parseFloat($('#rCLI'+i).val()) == resp[i-1]){
            notaFinalP3++;
            $('#rCLI'+i).css("background-color", "#05D576");
          }else{
            $('#rCLI'+i).css("background-color", "#D50545");
          }
      } 
    }


  var notaFinalP4 = 0;
  function Resp4(){

      var resp = [7.08,239.91];
      for( var i=1; i<3; i++ ){
        if( parseFloat($('#rP'+i).val()) == resp[i-1]){
            notaFinalP4++;
            $('#rP'+i).css("background-color", "#05D576");
          }else{
            $('#rP'+i).css("background-color", "#D50545");
          }
      } 
    }


///////////////////////////////////////////////////////////////////

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
          Resp4();
          
            var nota1 = (notaFinalP1*2.5)/18;
            var nota2 = (notaFinalP2*2.5)/11;
            var nota3 = (notaFinalP3*2.5)/6;
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





