
  function Inicio() {
      $(".panel-collapse").removeClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){

        var realiza1 = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (2x + 3) / 2 &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM1" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (7x + 6) / x &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM2" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (4x - 7) / (4x) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM3" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (4x<sup>2</sup> - 5x - 19) / (2x) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM4" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (6x<sup>3</sup> - 8x<sup>2</sup> + 6x - 9) / (3x) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM5" class="form-control respuestas" style="width: 200px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (4x +5) / x &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM6" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza1.sort(f_randomico);
        $('#realiza1').append(realiza1);

    }



    function Preg2(){

        var algoritmo = [
            '<div class="col-sm-6 eq-c n2"> <li>&nbsp;&nbsp; <div class="fraction"> <span class="fup">4x<sup>2</sup> - 10x + 4</span> <span class="bar">/</span> <span class="fdn">2x - 4</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rADP1" class="form-control respuestas" style="display: inline-block; width: 110px;"><br><br> </li> </div>',
            '<div class="col-sm-6 eq-c n2"> <li>&nbsp;&nbsp; <div class="fraction"> <span class="fup">3a<sup>2</sup> - 13a + 4</span> <span class="bar">/</span> <span class="fdn">a - 4</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rADP2" class="form-control respuestas" style="display: inline-block; width: 110px;"><br><br> </li> </div>',
            '<div class="col-sm-6 eq-c n2"> <li>&nbsp;&nbsp; <div class="fraction"> <span class="fup">12x<sup>2</sup> + 10x - 12</span> <span class="bar">/</span> <span class="fdn">6x - 4</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rADP3" class="form-control respuestas" style="display: inline-block; width: 110px;"><br><br> </li> </div>',
        ];

        algoritmo.sort(f_randomico);
        $('#algoritmo').append(algoritmo);

    }


    /////////////////////////////////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1() {
        
        var resp = ['x+3/2', '7+6/x', '1-7/4x', '2x-5/2-19/2x', '2x^2-8x/3+2-3/x', '4+5/x'];

        for( var i=1; i<7; i++){
            if( $('#rRSM'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rRSM'+i).css("background-color", "#05D576");
              notaFinalP1++;
            }else{
              $('#rRSM'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP2 = 0;
    function Resp2() {
                
        var resp = ['2x-1', '3a-1', '2x+3'];

        for( var i=1; i<4; i++){
            if( $('#rADP'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rADP'+i).css("background-color", "#05D576");
              notaFinalP2++;
            }else{
              $('#rADP'+i).css("background-color", "#D50545");
            }
        }
      
    }



    var notaFinalP4 = 0;
    function Resp4() {

            if( $('#rVDE1').val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == 'x^2-2x+2' ){
              $('#rVDE1').css("background-color", "#05D576");
              notaFinalP4++;
            }else{
              $('#rVDE1').css("background-color", "#D50545");
            }
      
      
    }


    function Cargar() {   
      location.reload(true);
    }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg2();

          var nota3;
          function confirmar1(){
            nota3 = parseFloat($('#calificacion3').val());
          }


          function confirmar() {
            Resp1();
            Resp2();
            Resp4();

            var nota1 = (notaFinalP1*2.5)/6;
            var nota2 = (notaFinalP2*2.5)/3;
            var nota4 = (notaFinalP4*2.5);

            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        if( $('#calificacion3').val() !='' ){
          confirmar1();
          if( nota3<=2.5 && nota3>=0 ){
            confirmar();
            $('#calificacion3').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion3').focus();
            $('#calificacion3').css("background-color", "#D50545");
        }
      });    

});





