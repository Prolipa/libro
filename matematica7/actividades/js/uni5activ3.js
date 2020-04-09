
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
	    var descubre = [
        '• Pelota de básquet: ( <input type="text" id="rDPC1" class="form-control respuestas input-sm" style="width: 100px; margin-bottom: 10px;" placeholder="Ej: 1,5; 2,5"> )<br>',
        '• Bicicleta: ( <input type="text" id="rDPC2" class="form-control respuestas input-sm" style="width: 100px; margin-bottom: 10px;" placeholder="Ej: 1,5; 2,5"> )<br>',
        '• Raqueta de tenis: ( <input type="text" id="rDPC3" class="form-control respuestas input-sm" style="width: 100px; margin-bottom: 10px;" placeholder="Ej: 1,5; 2,5"> )<br>',
        '• Tabla de surf: ( <input type="text" id="rDPC4" class="form-control respuestas input-sm" style="width: 100px; margin-bottom: 10px;" placeholder="Ej: 1,5; 2,5"> )<br>',
        '• Pelota de fútbol: ( <input type="text" id="rDPC5" class="form-control respuestas input-sm" style="width: 100px; margin-bottom: 10px;" placeholder="Ej: 1,5; 2,5"> )<br>',
        '• Gafas de piscina: ( <input type="text" id="rDPC6" class="form-control respuestas input-sm" style="width: 100px; margin-bottom: 10px;" placeholder="Ej: 1,5; 2,5"> )<br>',
        '• Zapatos deportivos: ( <input type="text" id="rDPC7" class="form-control respuestas input-sm" style="width: 100px; margin-bottom: 10px;" placeholder="Ej: 1,5; 2,5"> )<br>',
        '• Camiseta: ( <input type="text" id="rDPC8" class="form-control respuestas input-sm" style="width: 100px; margin-bottom: 10px;" placeholder="Ej: 1,5; 2,5"> )<br>',
      ];
      descubre.sort(f_randomico);
	    $('#descubre').append(descubre);
    }

    

///////////////////////////////////////////////////////////////////

	var notaFinalP1 = 0;
	function Resp1(){
    var resp = ['1.5;2.5', '4.5;1.5', '5.5;3', '1;0.5', '4;1.5', '0.5;2', '3.4;0', '1.5;1'];
      for( var i=1; i<9; i++ ){
        if( $('#rDPC'+i).val().replace(/ /gi, "").replace(/,/gi, "\.") == resp[i-1]){
            notaFinalP1++;
            $('#rDPC'+i).css("background-color", "#05D576");
          }else{
            $('#rDPC'+i).css("background-color", "#D50545");
          }
      }    
  }

  var notaFinalP2 = 0;
  function Resp2(){
        if( $('#rP').val() == 'Una choza y un puente de madera.'){
            notaFinalP2++;
            $('#rP').css("background-color", "#05D576");
          }else{
            $('#rP').css("background-color", "#D50545");
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

            var nota1 = (notaFinalP1*5)/8;
            var nota2 = (notaFinalP2*5);
            
            var notaFinal = (nota1+nota2).toFixed(2);

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





