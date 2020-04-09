
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


    function Preg4(){
	    var realiza = [
          '<div class="col-sm-6 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;9&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;8&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> </tr> <tr style="border-bottom: 2px solid;"> <td>+</td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;8&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> </tr> <tr> <td></td> <td><input type="number" id="rD1" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD2" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD3" class="form-control respuestas input-sm" style="width: 35px;"></td> <td>,</td> <td><input type="number" id="rD4" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD5" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD6" class="form-control respuestas input-sm" style="width: 35px;"></td> </tr> </tbody> </table> </li><br><br> </div>',
          '<div class="col-sm-6 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td>&nbsp;&nbsp;8&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> </tr> <tr style="border-bottom: 2px solid;"> <td>-</td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;7&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;5&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> </tr> <tr> <td></td> <td><input type="number" id="rD7" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD8" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD9" class="form-control respuestas input-sm" style="width: 35px;"></td> <td>,</td> <td><input type="number" id="rD10" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD11" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD12" class="form-control respuestas input-sm" style="width: 35px;"></td> </tr> </tbody> </table> </li><br><br> </div>',
          '<div class="col-sm-6 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td></td> <td></td> <td></td> <td></td> <td>&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;1&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;0&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;5&nbsp;&nbsp;</td> </tr> <tr style="border-bottom: 2px solid;"> <td>x</td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td>&nbsp;&nbsp;7&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;3&nbsp;&nbsp;</td> </tr> <tr> <td></td> <td><input type="number" id="rD13" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD14" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD15" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD16" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD17" class="form-control respuestas input-sm" style="width: 35px;"></td> <td>,</td> <td><input type="number" id="rD18" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD19" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD20" class="form-control respuestas input-sm" style="width: 35px;"></td> <td><input type="number" id="rD21" class="form-control respuestas input-sm" style="width: 35px;"></td> </tr> </tbody> </table> </li><br><br> </div>',
          '<div class="col-sm-6 table-responsive" align="center"> <li> <table> <tbody align="center"> <tr> <td>&nbsp;&nbsp;6&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> <td>&nbsp;&nbsp;4&nbsp;&nbsp;</td> <td>,</td> <td>&nbsp;&nbsp;5&nbsp;&nbsp;</td> <td style="border-left: 2px solid; border-bottom: 2px solid;">&nbsp;&nbsp;2&nbsp;&nbsp;</td> <td style="border-bottom: 2px solid;">,</td> <td style="border-bottom: 2px solid;">&nbsp;&nbsp;3&nbsp;&nbsp;</td> </tr> <tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td style="border-top: 2px solid;"><input type="number" id="rD22" class="form-control respuestas input-sm" style="width: 35px;"></td> <td style="border-top: 2px solid;"><input type="number" id="rD23" class="form-control respuestas input-sm" style="width: 35px;"></td> <td style="border-top: 2px solid;"><input type="number" id="rD24" class="form-control respuestas input-sm" style="width: 35px;"></td> <td style="border-top: 2px solid;">,</td> <td style="border-top: 2px solid;"><input type="number" id="rD25" class="form-control respuestas input-sm" style="width: 35px;"></td> </tr> </tbody> </table> </li><br><br> </div>                 ',
      ];

      realiza.sort(f_randomico);
	    $('#realiza').append(realiza);

    }

   

    function Preg5(){
        var n, val0;
        for( var i=1; i<13; i++ ){
            n = Math.round(Math.random() * (3 - 0) + 0);
            val0 = (Math.random() * (150 - 1) + 1).toFixed(n);
            $('#nE'+i).text(val0);
        }
    }

///////////////////////////////////////////////////////////////////

	var notaFinalP1 = 0;
  function Resp1(){
    var resp = ['decreciente', 'división', '÷', '2', 4000, 2000, 1000, 500, 250, 125, 1, 2, 3, 4, 5, 125];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rA'+i).val() == resp[i-1]){
            notaFinalP1++;
            $('#rA'+i).css("background-color", "#05D576");
          }else{
            $('#rA'+i).css("background-color", "#D50545");
          }
      }    
  }


  var notaFinalP2 = 0;
  function Resp2(){
    var resp = [];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rOCC'+i).val() == resp[i-1]){
            notaFinalP2++;
            $('#rOCC'+i).css("background-color", "#05D576");
          }else{
            $('#rOCC'+i).css("background-color", "#D50545");
          }
      }    
  }


  var notaFinalP3 = 0;
  function Resp3(){
    var resp = [0.082, '<', 0.29, '<', 25.285, '<', 59.7, '<', 71.295, '<', 799.3];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rC'+i).val() == resp[i-1]){
            notaFinalP3++;
            $('#rC'+i).css("background-color", "#05D576");
          }else{
            $('#rC'+i).css("background-color", "#D50545");
          }
      }    
  }


	var notaFinalP4 = 0;
	function Resp4(){
    var resp = [4,9,7,4,4,6,5,5,4,5,9,1,1,9,9,1,4,6,8,1,5,2,8,0,2];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rD'+i).val() == resp[i-1]  && $('#rD'+i).val()!='' ){
            notaFinalP4++;
            $('#rD'+i).css("background-color", "#05D576");
          }else{
            $('#rD'+i).css("background-color", "#D50545");
          }
      }    
  }



  var notaFinalP5 = 0;
  function Resp5(){
      var resp1 = (parseFloat($('#nE1').text()) + parseFloat($('#nE2').text()) * parseFloat($('#nE3').text()) - parseFloat($('#nE4').text()) / parseFloat($('#nE5').text()) + parseFloat($('#nE6').text())).toFixed();
        if( parseFloat($('#rE1').val()).toFixed() == resp1 ){
            notaFinalP5++;
            $('#rE1').css("background-color", "#05D576");
          }else{
            $('#rE1').css("background-color", "#D50545");
          } 

      var resp2 = ((parseFloat($('#nE7').text())/parseFloat($('#nE8').text())) - (parseFloat($('#nE9').text())*parseFloat($('#nE10').text())) + (parseFloat($('#nE11').text())-parseFloat($('#nE12').text()))).toFixed();
        if( parseFloat($('#rE2').val()).toFixed() == resp2 ){
            notaFinalP5++;
            $('#rE2').css("background-color", "#05D576");
          }else{
            $('#rE2').css("background-color", "#D50545");
          } 
  }



  var notaFinalP6 = 0;
  function Resp6(){
    var resp = [24.52, 49.04, 294.24];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rF'+i).val() == resp[i-1] ){
            notaFinalP6++;
            $('#rF'+i).css("background-color", "#05D576");
          }else{
            $('#rF'+i).css("background-color", "#D50545");
          }
      }    
  }


  var notaFinalP7 = 0;
  function Resp7(){
    var resp = ['Fútbol', 'Ciclismo', '72 personas'];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rG'+i).val() == resp[i-1] ){
            notaFinalP7++;
            $('#rG'+i).css("background-color", "#05D576");
          }else{
            $('#rG'+i).css("background-color", "#D50545");
          }
      }    
  }



  var notaFinalP8 = 0;
  function Resp8(){
        if( $('#rH1').val().replace(/ /gi, "").replace(/\./gi, ",") == '18,20,23,24,25,27,27,27,28,30' ){
            notaFinalP8++;
            $('#rH1').css("background-color", "#05D576");
          }else{
            $('#rH1').css("background-color", "#D50545");
          }

        if( $('#rH2').val() == 12 ){
            notaFinalP8++;
            $('#rH2').css("background-color", "#05D576");
          }else{
            $('#rH2').css("background-color", "#D50545");
          }
  }
///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }


    $(document).ready(function() {
        Inicio();
        Preg4();
        Preg5();

        function confirmar() {
        	Resp1();
          Resp3();
        	Resp4();
          Resp5();
          Resp6();
          Resp7();
          Resp8();

          
            var nota1 = (notaFinalP1)/16;
            var nota2 = parseFloat($('#calificacion2').val());
            var nota3 = (notaFinalP3)/11;
            var nota4 = (notaFinalP4)/25;
            var nota5 = (notaFinalP5)/2;
            var nota6 = (notaFinalP6)/3;
            var nota7 = (notaFinalP7)/3;
            var nota7_1 = parseFloat($('#calificacion7').val());
            var nota8 = (notaFinalP8)/2;
            var nota9 = parseFloat($('#calificacion9').val());
            

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota7_1+nota8+nota9).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {

        if( $('#calificacion2').val() !='' && $('#calificacion7').val() !='' &&  $('#calificacion9').val() !=''){
          if( $('#calificacion2').val()<=1 && $('#calificacion2').val()>=0 && $('#calificacion7').val()<=1 && $('#calificacion7').val()>=0  && $('#calificacion9').val()<=1 && $('#calificacion9').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
            $('#calificacion7').css("background-color", "#05D576");
            $('#calificacion9').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido. (1 punto)');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
            $('#calificacion7').focus();
            $('#calificacion7').css("background-color", "#D50545");
            $('#calificacion9').focus();
            $('#calificacion9').css("background-color", "#D50545");
        }
      });    

});





