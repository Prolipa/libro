
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Cargar() {   
      location.reload(true);
    }



    function Preg1(){
      var act1 = [
          '<div align="center" class="col-sm-3" style="display: inline-block;"> <img src="img/i1_p222_act1.png" class="img-responsive"><br> <input type="text" class="form-control respuestas" style="width: 250px;" id="rA1"><br> </div>',
          '<div align="center" class="col-sm-3" style="display: inline-block;"> <img src="img/i2_p222_act1.png" class="img-responsive"><br> <input type="text" class="form-control respuestas" style="width: 250px;" id="rA2"><br> </div>',
          '<div align="center" class="col-sm-3" style="display: inline-block;"> <img src="img/i3_p222_act1.png" class="img-responsive"><br> <input type="text" class="form-control respuestas" style="width: 250px;" id="rA3"><br> </div>',
          '<div align="center" class="col-sm-3" style="display: inline-block;"> <img src="img/i4_p222_act1.png" class="img-responsive"><br> <input type="text" class="form-control respuestas" style="width: 250px;" id="rA4"><br> </div>',
      ];

      act1.sort(f_randomico);
      $('#act1').append(act1);
    }



    //////////////////////////////////////
    var notaP1;
    var notafinalP1=0;
    function Resp1(){
      var resp=['carreta','torre','rosa','flor'];

      for( var i=1; i<5; i++ ){
        if( $('#rA'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
          notafinalP1++;
          $('#rA'+i).css("background-color", "#1AE79C");
        }else{
          $('#rA'+i).css("background-color", "#E71A4E");
        }
      }
      notaP1 = (notafinalP1*10)/4;
    }

///////////////////////////////////////

    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar(puntajeAbiertas){
            Resp1();
            cor = notaP1;
            calificacion=1;
            itemsT=1;
            cont=1;
            ejer=1;
            inc=0;
            Calculo_nota();

            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);
            return false
        }

      $("#Calificar").click(function() {
        punt=[];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=1;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });




