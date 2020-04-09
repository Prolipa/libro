var titulos="aplico";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    



    function Preg1(){


        var contenidos = [
                            '<tr>'+
                                '<td>La gran rebelión de los andes</td>'+
                                '<td><input type="text" id="rEN0" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>Tanto Tupak Amaru como Tupak Katari proponían la restitución del equilibrio anterior a la conquista.</td>'+
                                '<td><input type="text" id="rEN1" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>Los movimientos independentistas indígenas liderados por Tupak Amaru y Tupak Katari ocurrieron en el siglo XVII en Perú y Bolivia y movilizaron a miles de indígenas y mestizos.</td>'+
                                '<td><input type="text" id="rEN2" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>En 1780 Tupak Amaru enjuició al corregidor español Antonio Arriaga y lo condenó a la ejecución como parte del proceso independentista.</td>'+
                                '<td><input type="text" id="rEN3" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>La gran rebelión de los andes fue más que un enfrentamiento entre indígenas y españoles, pues significó la desarticulación del sistema colonial así como la ejecución de un plan adelantado de independencia de un territorio.</td>'+
                                '<td><input type="text" id="rEN4" class="form-control respuestas"></td>'+
                            '</tr>'
        ]
        contenidos.sort(f_randomico);

            $.each( contenidos, function( i, item ) {
                $("#estructura").append( item );
            });

    }



    var notaFinalP1 = 0;
    function Resp1(){

        var resp = ['título','desarrollo','desarrollo','introducción','conclusión']

          for(var i=0; i<5; i++){

                if( $('#rEN'+i).val().toLowerCase().replace(/ /g, "") == resp[i]){
                    notaFinalP1++;
                    $('#rEN'+i).css("background-color", "#5ED188");
                }else{
                    $('#rEN'+i).css("background-color", "#EF87A7");
                }               

          }

    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg1();

      function confirmar() {
    
        Resp1();

        var nota1 = parseInt($('#calificacion0').val());
        var notaFinal = ((notaFinalP1)+nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
        
      });

  });