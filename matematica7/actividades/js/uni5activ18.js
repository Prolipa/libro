
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
      var n, val0;
        for( var i=1; i<9; i++ ){
            n = Math.round(Math.random() * (3 - 0) + 0);
            val0 = (Math.random() * (1000 - 1) + 1).toFixed(n);
            $('#nD'+i).text(val0);
        }

    }

   

    function Preg6(){
      var n, val0;
        for( var i=1; i<7; i++ ){
            val0 = Math.round(Math.random() * (400 - 100) + 100);
            $('#nF'+i).text(val0);
        }

    }

///////////////////////////////////////////////////////////////////

	var notaFinalP1 = 0;
  function Resp1(){
    var resp = [0.032, 'Una sucesión creciente'];
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
    var resp = [1,0.5,2.5,1.5,1.5,2.5,3.5,2.5];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rB'+i).val() == resp[i-1]){
            notaFinalP2++;
            $('#rB'+i).css("background-color", "#05D576");
          }else{
            $('#rB'+i).css("background-color", "#D50545");
          }
      }    
  }



	var notaFinalP4 = 0;
	function Resp4(){
    var resp;
    var c=1;
      for( var i=1; i<5; i++ ){

        switch(i) {
          case 1:
            resp = (parseFloat($('#nD'+(c)).text()) + parseFloat($('#nD'+(c+1)).text())).toFixed()
            break;
          case 2:
            resp = (parseFloat($('#nD'+(c)).text()) - parseFloat($('#nD'+(c+1)).text())).toFixed()
            break;
          case 3:
            resp = (parseFloat($('#nD'+(c)).text()) * parseFloat($('#nD'+(c+1)).text())).toFixed()
            break;
          default:
            resp = (parseFloat($('#nD'+(c)).text()) / parseFloat($('#nD'+(c+1)).text())).toFixed()
        }
        if( parseFloat($('#rD'+i).val()).toFixed() == resp ){
            notaFinalP4++;
            $('#rD'+i).css("background-color", "#05D576");
          }else{
            $('#rD'+i).css("background-color", "#D50545");
          }
          c=c+2;
      }    
  }



  var notaFinalP5 = 0;
  function Resp5(){
      var resp = [6,30,108,10,50,180,4,20,72,20,100,360];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rE'+i).val() == resp[i-1] ){
            notaFinalP5++;
            $('#rE'+i).css("background-color", "#05D576");
          }else{
            $('#rE'+i).css("background-color", "#D50545");
          }
      } 
  }



  var notaFinalP6 = 0;
  function Resp6(){
    var tot = parseInt($('#nF1').text())+parseInt($('#nF2').text())+parseInt($('#nF3').text())+parseInt($('#nF4').text())+parseInt($('#nF5').text())+parseInt($('#nF6').text());
    var ord = [parseInt($('#nF1').text()),parseInt($('#nF2').text()),parseInt($('#nF3').text()),parseInt($('#nF4').text()),parseInt($('#nF5').text()),parseInt($('#nF6').text())];
    ord.sort();
    var rang = ord[5] - ord[0];

    var resp = [tot, ord, rang, 'Lamuestraesheterogénea;estoquieredecirqueJohnahorramuchounosmesesypocootros.'];

      for( var i=1; i<=resp.length; i++ ){
        if( $('#rF'+i).val().replace(/ /gi, "") == resp[i-1] ){
            notaFinalP6++;
            $('#rF'+i).css("background-color", "#05D576");
          }else{
            $('#rF'+i).css("background-color", "#D50545");
          }
      }    
  }


  var notaFinalP7 = 0;
  function Resp7(){
    var resp = ['Que salga algún número del 1 al 6. Por ejemplo, el 4. P = 1/6', 'Que salga un número mayor a 6. Por ejemplo, el 10. P = 0', 'Que salga cualquier número del 1 al 6'];
      for( var i=1; i<=resp.length; i++ ){
        if( $('#rG'+i).val() == resp[i-1] ){
            notaFinalP7++;
            $('#rG'+i).css("background-color", "#05D576");
          }else{
            $('#rG'+i).css("background-color", "#D50545");
          }
      }    
  }



///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }


    $(document).ready(function() {
        Inicio();
        Preg4();
        Preg6();

        function confirmar() {
        	Resp1();
          Resp2();
        	Resp4();
          Resp5();
          Resp6();
          Resp7();

          
            var nota1 = (notaFinalP1*1.3333)/2;
            var nota2 = (notaFinalP2*1.3333)/8;
            var nota3 = parseFloat($('#calificacion3').val());
            var nota4 = (notaFinalP4*1.3333)/4;
            var nota5 = (notaFinalP5*1.3333)/12;
            var nota5_1 = parseFloat($('#calificacion5').val());
            var nota6 = (notaFinalP6*1.3333)/4;
            var nota7 = (notaFinalP7*1.3333)/3;
            

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota5_1+nota6+nota7).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        if( $('#calificacion3').val() !='' && $('#calificacion5').val() !=''){
          if( $('#calificacion3').val()<=1 && $('#calificacion3').val()>=0 && $('#calificacion5').val()<=1 && $('#calificacion5').val()>=0 ){
            confirmar();
            $('#calificacion3').css("background-color", "#05D576");
            $('#calificacion5').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido. (1 punto)');
          }
        }else{
            $('#calificacion3').focus();
            $('#calificacion3').css("background-color", "#D50545");
            $('#calificacion5').focus();
            $('#calificacion5').css("background-color", "#D50545");
        }
      });  

});





