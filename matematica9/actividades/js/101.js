
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
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (2x + 5)<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM1" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (x - 2)<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM2" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (3x - 2)<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM3" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza1.sort(f_randomico);
        $('#realiza1').append(realiza1);
    }


    function Preg2(){
        var realiza2 = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; x<sup>2</sup> + 12x + 36 &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rCP21" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; 16x<sup>2</sup> + 16x 4 &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rCP22" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; a<sup>2</sup> - 6a + 9 &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rCP23" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza2.sort(f_randomico);
        $('#realiza2').append(realiza2);
    }


    function Preg3(){
        var realiza3 = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (3x + 2) . (3x - 2) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rCP31" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (6x + 2y) . (6x - 2y) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rCP32" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza3.sort(f_randomico);
        $('#realiza3').append(realiza3);
    }

    function Preg4(){
        var realiza4 = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (x + 4)<sup>2</sup> + (x + 3)<sup>2</sup> + (x - 5)<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rCP41" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; -(2x + 3)<sup>2</sup> + (x + 3)(x - 3) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rCP42" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza4.sort(f_randomico);
        $('#realiza4').append(realiza4);
    }

    /////////////////////////////////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1() {
        
        var resp = ['4x^2+20x+25', 'x^2-4x+4', '9x^2-12x+4'];

        for( var i=1; i<4; i++){
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
        
        var resp = ['x+6^2', '4x+2^2', 'a-3^2'];

        for( var i=1; i<4; i++){
            if( $('#rCP2'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rCP2'+i).css("background-color", "#05D576");
              notaFinalP2++;
            }else{
              $('#rCP2'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP3 = 0;
    function Resp3() {
        
        var resp = ['9x^2-4', '36x^2-4y^2'];

        for( var i=1; i<3; i++){
            if( $('#rCP3'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rCP3'+i).css("background-color", "#05D576");
              notaFinalP3++;
            }else{
              $('#rCP3'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP4 = 0;
    function Resp4() {
        
        var resp = ['3x^2+4x+50', '-3x^2-12x-18'];

        for( var i=1; i<3; i++){
            if( $('#rCP4'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rCP4'+i).css("background-color", "#05D576");
              notaFinalP4++;
            }else{
              $('#rCP4'+i).css("background-color", "#D50545");
            }
        }
    }



    function Cargar() {   
      location.reload(true);
    }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg2();
            Preg3();
            Preg4();

          function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4();

            var nota1 = (notaFinalP1*2.5)/3;
            var nota2 = (notaFinalP2*2.5)/3;
            var nota3 = (notaFinalP3*2.5)/2;
            var nota4 = (notaFinalP4*2.5)/2;

            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        confirmar();
       /* if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar1();
          if( nota2<=2.5 && nota2>=0 && nota3<=2.5 && nota3>=0 ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
            $('#calificacion3').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
            $('#calificacion3').focus();
            $('#calificacion3').css("background-color", "#D50545");
        }*/
      });    

});





