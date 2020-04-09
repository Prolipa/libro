
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
      var responde = [
          '<li>¿Es posible hacer un análisis a partir de la observación de la gráfica?&nbsp;&nbsp; <select id="rASP1" class="form-control respuestas input-sm" style="width: 70px;"> <option></option> <option>Si</option> <option>No</option> </select></li><br>',
          '<li>¿Qué tema se trató en la encuesta?&nbsp;&nbsp; <select id="rASP2" class="form-control respuestas input-sm" style="width: 300px;"> <option></option> <option></option> <option>Los programas televisivos favoritos</option> <option></option> </select></li><br>',
          '<li>¿Cuántas personas fueron encuestadas?&nbsp;&nbsp; <input type="number" id="rASP3" class="form-control respuestas input-sm" style="width: 50px;">&nbsp; personas.</li><br>',
          '<li>¿Qué datos numéricos puedes extraer de la gráfica?&nbsp;&nbsp; <input type="text" id="rASP4" class="form-control respuestas input-sm" style="width: 200px;" placeholder="Ej: 1,2,3,4"></li><br>',
          '<li>¿Qué características están presentes en estos datos numéricos?&nbsp;&nbsp; <select id="rASP5" class="form-control respuestas input-sm" style="width: 200px;"> <option></option> <option></option> <option></option> <option>Son números enteros</option> </select></li><br>',
          '<li>¿Qué tipo de programa es el favorito?&nbsp;&nbsp; <select id="rASP6" class="form-control respuestas input-sm" style="width: 150px;"> <option></option> <option value="1">Las series</option> <option value="2">Las caricaturas</option> <option value="3">Los musicales</option> <option value="4">Los noticieros</option> </select></li><br>',
      ];

      responde.sort(f_randomico);
      $('#responde').append(responde);
    }

///////////////////////////////////////////////////////////////////
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  var notaFinalP = 0;
  function Resp(){
      var c=0;
      var resp=[6.2,6.2,4,6,'alto','heterogénea','Podríaprogramarclasesdenivelación','4,4,4,4,5,5,6,6,6,7,7,8,8,9,10'];
      for( var i=1; i<9; i++ ){
        if( $('#rP'+i).val().replace(/ /gi, "")== resp[c] ){
            notaFinalP++;
            $('#rP'+i).css("background-color", "#05D576");
          }else{
            $('#rP'+i).css("background-color", "#D50545");
          }
        c++;
      }

      for(var j=1; j<36; j++){
            if( j<16 ){
                if($('#pODR'+(j) +'.pinta').text()){
                  notaFinalP++;
                  $('#pODR'+j).addClass('bien');
                }
            }else{
                if($('#pODR'+(j) +'.pinta').text()){
                  $('#pODR'+j).addClass('mal');
                  notaFinalP--;
                }
            }
        }
     
    }


///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }

    var ser,car,mus,noti,totP;
    var dat=[];
    var dat1=[];
    $(document).ready(function() {
        Inicio();
        Preg1();

        for(var i=1; i<36; i++){
            $('#pODR'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


        function confirmar() {
        	Resp();
          
            var nota;
            if( notaFinalP<0 ){nota=0;}else{nota=(notaFinalP*10)/23;}
            

            var notaFinal = (nota).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        confirmar();/*
        if( $('#calificacion2').val() !='' && $('#calificacion4').val() !='' ){
          if( $('#calificacion2').val()<=1 && $('#calificacion2').val()>=0 && $('#calificacion4').val()<=1 && $('#calificacion4').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
            $('#calificacion4').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido. (1 punto)');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
            $('#calificacion4').focus();
            $('#calificacion4').css("background-color", "#D50545");
        }*/
      });    

});





