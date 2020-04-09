
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


        for(var i=1; i<5; i++){
            $('#rB'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


        for(var i=1; i<5; i++){
            $('#rC'+(i)).click(function(){
              if($(this).hasClass('pinta1')) {
                  $(this).removeClass('pinta1')
              }else{
                  $(this).addClass('pinta1')
              }
            });
        }

        function confirmar(puntajeAbiertas){
            cor = puntajeAbiertas;
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
        punt=[10];//si no hay preguntas abiertas dejar vacío []
        cantPuntaje=2;//si no hay preguntas abiertas poner 1
        comprobarPuntajes();
        if(comprobarPuntajes()[0]==true){
          confirmar(comprobarPuntajes()[1]);
        }
      });
    });






