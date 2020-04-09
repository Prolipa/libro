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
            '<li><span class="np2">¿Cuántas personas llevaban solo reloj?</span><br>&nbsp;&nbsp;&nbsp;<input type="number" id="rPDV0" class="form-control respuestas" style="width: 70px;"> personas.<br><br></li>',
            '<li><span class="np2">¿Cuántas personas llevaban solo anillo?</span><br>&nbsp;&nbsp;&nbsp;<input type="number" id="rPDV1" class="form-control respuestas" style="width: 70px;"> personas.<br><br></li>',
            '<li><span class="np2">¿Cuántas llevaban solo anillo o solo reloj?</span><br>&nbsp;&nbsp;&nbsp;<input type="number" id="rPDV2" class="form-control respuestas" style="width: 70px;"> personas.<br><br></li>',
            '<li><span class="np2">¿Cuántas personas asistieron a la fiesta?</span><br>&nbsp;&nbsp;&nbsp;<input type="number" id="rPDV3" class="form-control respuestas" style="width: 70px;"> personas.<br><br></li>',
        ]
      contenidos.sort(f_randomico);


      $.each( contenidos, function( i, item ) {
        $("#conPDV0").append( item );
      });

    }






    var notaFinalP1 = 0;
    function Resp1(){

      var resp = 44;

      for(var i=0; i<4; i++) {
        if(i == 1){resp = 22;}
        if(i == 2){resp = 66;}
        if(i == 3){resp = 88;}

            if( parseInt($('#rPDV'+i).val()) == resp ){
                notaFinalP1++;
                $('#rPDV'+i).css("background-color", "#5ED188");
            }else{
                $('#rPDV'+i).css("background-color", "#EF87A7");
            }

      }
            


    }









      function Cargar() {   
          location.reload(true);
      }


    $(document).ready(function() {
      $(".panel-collapse").removeClass('in');
      Inicio();
      Preg1();

      function confirmar() {
        Resp1();

        var nota1 = ((notaFinalP1*5)/4);
        var nota2 = parseInt($('#calificacion0').val());
            
        var notaFinal = (nota1+nota2);

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
