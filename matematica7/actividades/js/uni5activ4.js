
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
	     var compara1 = [
          '<li> 74,295 &nbsp;&nbsp;<select id="rCNE1" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 74,285 <br><br> </li>',
          '<li> 0,082 &nbsp;&nbsp;<select id="rCNE2" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 0,088 <br><br> </li>',
          '<li> 121,002 &nbsp;&nbsp;<select id="rCNE3" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 121,012 <br><br> </li>',
       ];
       compara1.sort(f_randomico);
	     $('#compara1').append(compara1);

       var compara2 = [
          '<li> 932,5 &nbsp;&nbsp;<select id="rCNE4" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 932,49  <br><br> </li>',
          '<li> 59,7 &nbsp;&nbsp;<select id="rCNE5" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 59,7 <br><br> </li>',
          '<li> 799,5 &nbsp;&nbsp;<select id="rCNE6" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 798,6 <br><br> </li>',
       ];
       compara2.sort(f_randomico);
       $('#compara2').append(compara2);

       var compara3 = [
          '<li> 0,29 &nbsp;&nbsp;<select id="rCNE7" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 0,39 <br><br> </li>',
          '<li> 15,283 &nbsp;&nbsp;<select id="rCNE8" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 15,279 <br><br> </li>',
          '<li> 7,040 &nbsp;&nbsp;<select id="rCNE9" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 7,04 <br><br> </li>',
       ];
       compara3.sort(f_randomico);
       $('#compara3').append(compara3);

       var compara4 = [
          '<li> 74,095 &nbsp;&nbsp;<select id="rCNE10" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 74,096 <br><br> </li>',
          '<li> 909,32 &nbsp;&nbsp;<select id="rCNE11" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 990,32 <br><br> </li>',
          '<li> 671,304 &nbsp;&nbsp;<select id="rCNE12" class="form-control respuestas input-sm" style="width: 55px;"> <option></option> <option>></option> <option><</option> <option>=</option> </select>&nbsp;&nbsp; 671,034 <br><br> </li>',
       ];
       compara4.sort(f_randomico);
       $('#compara4').append(compara4);

    }


///////////////////////////////////////////////////////////////////

	var notaFinalP1 = 0;
	function Resp1() {
      var resp = ['>', '<', '<', '>', '=', '>', '<', '>', '=', '<', '<', '>'];
      for( var i=1; i<13; i++ ){
        if( $('#rCNE'+i).val() == resp[i-1]){
            notaFinalP1++;
            $('#rCNE'+i).css("background-color", "#05D576");
          }else{
            $('#rCNE'+i).css("background-color", "#D50545");
          }
      }  
	}


  var notaFinalP2 = 0;
  function Resp2(){

      var resp = ['0,20<0,39<0,65<0,8<0,95', '128,2<128,4<128,6<128,9'];
      for( var i=1; i<3; i++ ){
        if( $('#rUSN'+i).val().replace(/ /gi, "").replace(/\./gi, ",") == resp[i-1]){
            notaFinalP2++;
            $('#rUSN'+i).css("background-color", "#05D576");
          }else{
            $('#rUSN'+i).css("background-color", "#D50545");
          }
      } 
    }

  var notaFinalP3 = 0;
  function Resp3(){

      var resp = ['6,14>6,09>4,25>3,12>2,49', 'Eldíamartes', 'Eldíajueves'];
      for( var i=1; i<4; i++ ){
        if( $('#rP'+i).val().replace(/ /gi, "").replace(/\./gi, ",") == resp[i-1]){
            notaFinalP3++;
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

        function confirmar() {
        	Resp1();
          Resp2();
          Resp3();
          
            var nota1 = (notaFinalP1*4)/12;
            var nota2 = (notaFinalP2*3)/2;
            var nota3 = (notaFinalP3*3)/3;
            

            var notaFinal = (nota1+nota2+nota3).toFixed(2);

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





