
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
          '<tr> <td>Por la cantidad de estrofas</td> <td>estrófico</td> <td>Por la cantidad de estrofas</td> <td><input type="text" class="form-control respuestas"></td> </tr>',
          '<tr> <td>Número de estrofas</td> <td>tres</td> <td>Número de estrofas</td> <td><input type="text" class="form-control respuestas"></td> </tr>',
          '<tr> <td>Estrofas simétricas o asimétricas</td> <td>asimétricas</td> <td>Estrofas simétricas o asimétricas</td> <td><input type="text" class="form-control respuestas"></td> </tr>',
          '<tr> <td>Estrofas isométricas o heterométricas</td> <td>heterométricas</td> <td>Estrofas isométricas o heterométricas</td> <td><input type="text" class="form-control respuestas"></td> </tr>',
      ];

      act1.sort(f_randomico);
      $('#act1').append(act1);

    }


    function Preg2(){

      var act2 = [
        '<tr> <td>Número de estrofas</td> <td><input type="text" class="form-control respuestas"></td> </tr>',
        '<tr> <td>Estrofas simétricas o asimétricas</td> <td><input type="text" class="form-control respuestas"></td> </tr>',
        '<tr> <td>Estrofa isométrica o heterométrica</td> <td><input type="text" class="form-control respuestas"></td> </tr>',
      ];

      act2.sort(f_randomico);
      $('#act2').append(act2);

    }


    $(document).ready(function() {
        Inicio();


        var nota1;
        function confirmar() {
            nota1 = parseFloat($('#calificacion1').val());

            var notaFinal = (nota1);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        if( $('#calificacion1').val() !='' ){
          if( $('#calificacion1').val()<=10 && $('#calificacion1').val()>=0 ){
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





