
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

        var vocales = [
        '<div class="col-sm-1" align="center" style="display: inline-block; width: 80px;"> Piano<br> <input type="text" class="form-control respuestas" id="rEV1"> </div>',
        '<div class="col-sm-1" align="center" style="display: inline-block; width: 80px;"> jaula <br> <input type="text" class="form-control respuestas" id="rEV2"> </div>',
        '<div class="col-sm-1" align="center" style="display: inline-block; width: 80px;"> deuda <br> <input type="text" class="form-control respuestas" id="rEV3"> </div>',
        '<div class="col-sm-1" align="center" style="display: inline-block; width: 80px;"> Guayas <br> <input type="text" class="form-control respuestas" id="rEV4"> </div>',
        '<div class="col-sm-1" align="center" style="display: inline-block; width: 80px;"> ciudad <br> <input type="text" class="form-control respuestas" id="rEV5"> </div>',
        '<div class="col-sm-1" align="center" style="display: inline-block; width: 80px;"> fuimos <br> <input type="text" class="form-control respuestas" id="rEV6"> </div>',
        '<div class="col-sm-1" align="center" style="display: inline-block; width: 80px;"> Paulina<br> <input type="text" class="form-control respuestas" id="rEV7"> </div>',
        ];

        vocales.sort(f_randomico);
        $('#vocales').append(vocales);
    }

///////////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1(){

      var resp = ['ia','au','eu','ua','iu','ui','au'];

      for( var i=1; i<8; i++ ){

          if( $('#rEV'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
              notaFinalP1++;
              $('#rEV'+i).css("background-color", "#05D576");
          }else{
              $('#rEV'+i).css("background-color", "#D50545");
          }

      }
    }

  

    $(document).ready(function() {
      Inicio();
      Preg1();


      function confirmar() {
        Resp1();
        var nota1 = (notaFinalP1*10)/7;
        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
           /* if($('#calificacion1').val() !=''){
              confirmar();
              $('#calificacion1').css("background-color", "#05D576");
            }else{
              $('#calificacion1').focus();
              $('#calificacion1').css("background-color", "#D50545");
            }*/
            
      });

  });