
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

      var completa1 = [
      '• Antes de que se inventaran el esferográfico y la pluma fuente, las personas (escribir) &nbsp; <input type="text" id="rCSO1" class="form-control respuestas" style="width: 120px; display: inline-block;">&nbsp; con plumas de ave y guardaban la tinta en pequeños contenedores de vidrio.<br><br>',
      '• Micaela y Miguel (viajar) &nbsp; <input type="text" id="rCSO2" class="form-control respuestas" style="width: 120px; display: inline-block;">&nbsp; a Loja la semana pasada.<br><br>',
      '• Mi abuela va a regresar al Ecuador para vivir con nuestra familia. Al fin la (conocer) &nbsp; <input type="text" id="rCSO3" class="form-control respuestas" style="width: 120px; display: inline-block;">&nbsp; en persona.<br><br>',
      '• Mis primos (aprender) &nbsp; <input type="text" id="rCSO4" class="form-control respuestas" style="width: 120px; display: inline-block;">&nbsp; danza afroecuatoriana con un profesor particular. Sus clases son todos los días. <br><br>',
      ];

      completa1.sort(f_randomico);
      $.each( completa1, function( i, item ) {
      $( "#completa1" ).append( item );
      });

    }   

 
 
 

    function Preg2(){

      var escribe1 = [
      '<tr> <td><br>Aplaudir (pasado perfecto, tercera persona del plural)</td> <td><textarea class="form-control respuestas" style="width: 90%;" rows="3"></textarea></td> </tr>',
      '<tr> <td><br>Entrenar (presente, segunda persona del singular)</td> <td><textarea class="form-control respuestas" style="width: 90%;" rows="3"></textarea></td> </tr>',
      '<tr> <td><br>Sorprender (futuro, primera persona del plural)</td> <td><textarea class="form-control respuestas" style="width: 90%;" rows="3"></textarea></td> </tr>',
      '<tr> <td><br>Caminar (pasado imperfecto, segunda persona del singular)</td> <td><textarea class="form-control respuestas" style="width: 90%;" rows="3"></textarea></td> </tr>',
      ];

      escribe1.sort(f_randomico);
      $.each( escribe1, function( i, item ) {
      $( "#escribe1" ).append( item );
      });

    }


    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

      var resp = ['escribían','viajaron','conoceré','aprenden'];

        for(var i=1; i<5; i++){
              if( $('#rCSO'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
                  notaFinalP1++;
                 $('#rCSO'+i).css("background-color", "#5ED188");
              }else{
                  $('#rCSO'+i).css("background-color", "#EF87A7");
              }
        }

    }





    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();


      function confirmar() {

        Resp1();


        var nota1 = (notaFinalP1*3)/4;
        var nota2 = parseFloat($('#calificacion2').val());
        var nota3 = parseFloat($('#calificacion3').val());
        var nota4 = parseFloat($('#calificacion4').val());

        

        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
  
  
        if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' && $('#calificacion4').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
        }
          
        
      });

  });