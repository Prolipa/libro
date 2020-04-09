
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

        var completa = [
        '<tr> <td style="background-color: #FFF5DB;">¿Quién es el emisor del correo electrónico?</td> <td style="background-color: #F9DBFF;"> <select class="form-control respuestas" id="rCI1"> <option></option> <option>Su madre</option> <option>Su prima</option> <option>Tía Verito</option> <option value="1">Mayu</option> </select> </td> </tr>',
        '<tr> <td style="background-color: #FFF5DB;">¿Quién es el receptor?</td> <td style="background-color: #F9DBFF;"> <select class="form-control respuestas" id="rCI2"> <option></option> <option value="1">Tía Verito</option> <option>Mayu</option> <option>Su prima</option> <option>Su madre</option> </select> </td> </tr>',
        '<tr> <td style="background-color: #FFF5DB;">¿Cuál es la dirección de correo electrónico?</td> <td style="background-color: #F9DBFF;"> <select class="form-control respuestas" id="rCI3"> <option></option> <option value="1">primaverito@micorreo.ec</option> <option>prima@micorreo.ec</option> <option>tiaverito@micorreo.ec</option> <option>verito@gmail.ec</option> </select> </td> </tr>',
        '<tr> <td style="background-color: #FFF5DB;">¿Cuál es el asunto del correo electrónico?</td> <td style="background-color: #F9DBFF;"> <select class="form-control respuestas" id="rCI4"> <option></option> <option>Noticias desde la isla Santa Cruz</option> <option>Noticias desde la isla de los pájaros</option> <option value="1">Noticias desde las islas Galápagos</option> </select> </td> </tr>',
        '<tr> <td style="background-color: #FFF5DB;">¿Qué noticias contiene el mensaje?</td> <td style="background-color: #F9DBFF;"> <select class="form-control respuestas" id="rCI5"> <option></option> <option>El nacimiento de Wara, Visita de los primos</option> <option>El nacimiento de Wara, Visita de los tios</option> <option value="1">El nacimiento de Wara, Visita de los abuelitos</option> <option>El nacimiento de Wara, Visita de los padres</option> </select> </td> </tr>',
        ]; 
        completa.sort(f_randomico);
        $("#completa").append(completa);

    }



    function Preg2(){

        var sentim = [
        '<div class="col-sm-12"> <div class="col-sm-3"></div> <div class="col-sm-2 sentimientos sombra" id="sSMV1">amor</div> <div class="col-sm-2 sentimientos sombra" id="sSMV2">cariño</div> <div class="col-sm-2 sentimientos sombra" id="sSMV3">recuerdo</div> </div>',
        '<div class="col-sm-12"> <div class="col-sm-3"></div> <div class="col-sm-2 sentimientos sombra" id="sSMV4">amistad</div> <div class="col-sm-2 sentimientos sombra" id="sSMV5">respeto</div> <div class="col-sm-2 sentimientos sombra" id="sSMV6">tristeza</div> </div>',
        ];


        sentim.sort(f_randomico);
        $('#sentim').append(sentim);

    }



    function Preg3(){

        var critica = [
        '<li>¿Crees que esta carta es importante para la persona que la recibe? ¿Por qué?<br> <textarea class="form-control respuestas" style="border-color: #7E17B2;"></textarea><br><br></li>',
        '<li>¿Crees que la información de las cartas personales es real o falsa? ¿Por qué?<br> <textarea class="form-control respuestas" style="border-color: #7E17B2;"></textarea><br><br></li>',
        ];


        critica.sort(f_randomico);
        $('#critica').append(critica);

    }



/////////////////////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1(){

        for( var i=1; i<6; i++ ){
            if($('#rCI'+i).val() == '1' ){
                notaFinalP1++;
                $('#rCI'+i).css('background-color', '#05D576;');
            }else{
                $('#rCI'+i).css('background-color', '#C93131;');
            }
        }
    

    }



    var notaFinalP2 = 0;
    function Resp2(){

        for( var i=1; i<7; i++ ){
            if($('#sSMV'+i +'.pinta').text()){
                notaFinalP2++;
                $('#sSMV'+i).css('background-color', '#05D576;');
            }/*else{
                notaFinalP2--;
                $('#sSMV'+i).css('background-color', '#D50545;');
            }*/
        }
        

    }


    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();
      Preg3();


      for( var i=1; i<7; i++ ){

        $('#sSMV'+i).click(function(){
            if($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')
            }else{
                $(this).addClass('pinta')              
            }
        });

      }




      function confirmar() {
      	Resp1();
        Resp2();

        var nota1 = (notaFinalP1*3)/5;
        var nota2;
        if( notaFinalP2<0 ){nota2=0}else{nota2 = (notaFinalP2*2)/6}
        var nota2_1 = parseFloat($('#calificacion2').val());
        var nota3= parseFloat($('#calificacion3').val());
    

        var notaFinal = (nota1+nota2+nota2_1+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");

        }
      });

  });