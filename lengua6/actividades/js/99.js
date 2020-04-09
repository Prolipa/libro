
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

      var sinonimo1 = [
      '<div class="col-sm-12" style="padding: 40px;"> <div class="col-sm-5" style="border-bottom: 5px solid; border-bottom-color: #33FFB5;"> <span style="background: #33FFB5; border-radius: 10px; padding: 10px; left: -22px; position: relative;"> Triste </span> <select class="form-control respuestas" id="rESP1" style="display: inline-block; width: 200px;"> <option></option> <option>cansado</option> <option>distraido</option> <option value="1">apenado</option> </select> </div> <div class="col-sm-1"><br><br></div> <div class="col-sm-5" style="border-bottom: 5px solid; border-bottom-color: #AE5DF6;"> <span style="background: #AE5DF6; border-radius: 10px; padding: 10px; left: -22px; position: relative;"> Inteligente </span> <select class="form-control respuestas" id="rESP2" style="display: inline-block; width: 200px;"> <option></option> <option value="1">astuto</option> <option>enérgico</option> <option>ágil</option> </select> </div><br><br> <div class="col-sm-1"></div> </div>',
      '<div class="col-sm-12" style="padding: 40px;"> <div class="col-sm-5" style="border-bottom: 5px solid; border-bottom-color: #E6F65D;"> <span style="background: #E6F65D; border-radius: 10px; padding: 10px; left: -22px; position: relative;"> Cansado </span> <select class="form-control respuestas" id="rESP3" style="display: inline-block; width: 200px;"> <option></option> <option>distraido</option> <option value="1">agotado</option> <option>cabizbajo</option> </select> </div> <div class="col-sm-1"><br><br></div> <div class="col-sm-5" style="border-bottom: 5px solid; border-bottom-color: #5DF6ED;"> <span style="background: #5DF6ED; border-radius: 10px; padding: 10px; left: -22px; position: relative;"> Enorme </span> <select class="form-control respuestas" id="rESP4" style="display: inline-block; width: 200px;"> <option></option> <option value="1">grande</option> <option>máximo</option> <option>largo</option> </select> </div> <div class="col-sm-1"></div> </div>',
      ];

      sinonimo1.sort(f_randomico);
      $.each( sinonimo1, function( i, item ) {
      $( "#sinonimo1" ).append( item );
      });

    }   


    //////////////////////////////////////////


    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<5; i++){
              if( $('#rESP'+i ).val() == '1' ){
                  notaFinalP1++;
                  $('#rESP'+i).css("background-color", "#5ED188");
              }else{
                  $('#rESP'+i).css("background-color", "#EF87A7");
              }

        }

    }
    


    var notaFinalP2 = 0;
    function Resp2(){

        if( $('#rCOP1' ).val() == '1' ){
                  notaFinalP2++;
                  $('#rCOP1').css("background-color", "#5ED188");
              }else{
                  $('#rCOP1').css("background-color", "#EF87A7");
              }

    }





    $(document).ready(function() {
      Inicio();
      Preg1();


      function confirmar() {

        Resp1();
        Resp2();

        var nota1 = (notaFinalP1*6)/4;
        var nota2 = (notaFinalP2*4);


        var notaFinal = (nota1+nota2).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

      confirmar();
  
        
      });

  });