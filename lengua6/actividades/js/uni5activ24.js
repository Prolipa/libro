
  function Inicio() {
     // $(".panel-collapse").removeClass('in');
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
        '<span class="num1" style="border-color: #2AC85F; margin-right: 50px;"> &nbsp;&nbsp;Los jóvenes fueron al campo.&nbsp;&nbsp; </span> <span class="num1" style="border-color: #2AC85F; margin-right: 50px;"> &nbsp;&nbsp;Los niños a la laguna.&nbsp;&nbsp; </span><br><br> <input type="text" class="form-control respuestas input-sm resp1" placeholder="Escribe tu respuesta..." id="rA1" style="width: 70%;"><br><br>',
        '<span class="num1" style="border-color: #2A57C8; margin-right: 50px;"> &nbsp;&nbsp;¿Quieres café?&nbsp;&nbsp; </span> <span class="num1" style="border-color: #2A57C8; margin-right: 50px;"> &nbsp;&nbsp;¿Quieres leche con chocolate?&nbsp;&nbsp; </span><br><br> <input type="text" class="form-control respuestas input-sm resp1" placeholder="Escribe tu respuesta..." id="rA2" style="width: 70%;"><br><br>',
        '<span class="num1" style="border-color: #E3641C; margin-right: 50px;"> &nbsp;&nbsp;No me gusta el verde.&nbsp;&nbsp; </span> <span class="num1" style="border-color: #E3641C; margin-right: 50px;"> &nbsp;&nbsp;No me gusta el rojo.&nbsp;&nbsp; </span><br><br> <input type="text" class="form-control respuestas input-sm resp1" placeholder="Escribe tu respuesta..." id="rA3" style="width: 70%;"><br><br>',
        '<span class="num1" style="border-color: #E3D11C; margin-right: 50px;"> &nbsp;&nbsp;Quiero ir contigo.&nbsp;&nbsp; </span> <span class="num1" style="border-color: #E3D11C; margin-right: 50px;"> &nbsp;&nbsp;Tengo que estudiar.&nbsp;&nbsp; </span><br><br> <input type="text" class="form-control respuestas input-sm resp1" placeholder="Escribe tu respuesta..." id="rA4" style="width: 70%;"><br><br>',
        '<span class="num1" style="border-color: #E31CDA; margin-right: 50px;"> &nbsp;&nbsp;No quiero pastel.&nbsp;&nbsp; </span> <span class="num1" style="border-color: #E31CDA; margin-right: 50px;"> &nbsp;&nbsp;Quiero helado de vainilla.&nbsp;&nbsp; </span><br><br> <input type="text" class="form-control respuestas input-sm resp1" placeholder="Escribe tu respuesta..." id="rA5" style="width: 70%;"><br><br>',
      ];

      act1.sort(f_randomico);
      $('#act1').append(act1);

    }


    var notaFinalP1=0;
    function Resp1(){
      var resp = ['losjóvenesfueronalcampoylosniñosalalaguna','¿quierescaféoquiereslecheconchocolate?','nomegustanelverdenielrojo',
      'quieroircontigoperotengoqueestudiar','noquieropastelsinoheladodevainilla'];
      for( var i=1; i<6; i++ ){
        if( $('#rA'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
          notaFinalP1++;
          $('#rA'+i).addClass('biene');
        }else{
          $('#rA'+i).addClass('male');
        }
      }
    }


    var notaFinalP2=0;
    function Resp2(){
      var resp = ['y','y/o','y','pero','ni'];
      for( var i=1; i<6; i++ ){
        if( $('#rB'+i).val() == resp[i-1] ){
          notaFinalP2++;
          $('#rB'+i).addClass('biene');
        }else{
          $('#rB'+i).addClass('male');
        }
      }
    }


    $(document).ready(function() {
        Inicio();
        Preg1();

        function confirmar() {
          Resp1();
          Resp2();

            var nota1 = (notaFinalP1*3)/5;
            var nota2 = (notaFinalP2*3)/5;
            var nota3 = parseFloat($('#calificacion1').val());

            var notaFinal = (nota1+nota2+nota3).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        if( $('#calificacion1').val() !='' ){
          if( $('#calificacion1').val()<=4 && $('#calificacion1').val()>=0 ){
            confirmar();
            $('#calificacion1').addClass('biene');
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion1').focus();
            $('#calificacion1').addClass('male');
        }
      });    

});





