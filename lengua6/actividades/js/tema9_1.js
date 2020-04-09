var titulos="aplico";
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


        var contenidos = [
                            '<tr>'+
                                '<td>Joaquín y Julieta, ayuden a su hermano con las tareas.</td>'+
                                '<td><input type="text" id="rEN0" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>Todos comieron pastel en mi fiesta.</td>'+
                                '<td><input type="text" id="rEN1" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>Ojalá que vayamos de viaje el próximo año.</td>'+
                                '<td><input type="text" id="rEN2" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>Marcela y Sofía van juntas a la escuela todas las mañanas.</td>'+
                                '<td><input type="text" id="rEN3" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>Hagan silencio en la biblioteca.</td>'+
                                '<td><input type="text" id="rEN4" class="form-control respuestas"></td>'+
                            '</tr>',
        ]
        contenidos.sort(f_randomico);

            $.each( contenidos, function( i, item ) {
                $("#estructura").append( item );
            });

    }





    function Preg2(){


        var contenidos = [
                            '<span style="color: #0F58D8;">•</span> Quiero que mis papás me <input type="text" id="rCO0" class="form-control respuestas" style="width: 120px;"> unos patines para mi cumpleaños. (comprar / modo subjuntivo)<br><br>',
                            '<span style="color: #0F58D8;">•</span> Timoteo, apaga la televisión y <input type="text" id="rCO1" class="form-control respuestas" style="width: 120px;"> a dormir ahora. (subir / modo imperativo)<br><br>',
                            '<span style="color: #0F58D8;">•</span> Las inscripciones se <input type="text" id="rCO2" class="form-control respuestas" style="width: 120px;"> esta mañana. (cerrar / modo indicativo)<br><br>',
                            '<span style="color: #0F58D8;">•</span> <input type="text" id="rCO3" class="form-control respuestas" style="width: 120px;"> su examen en el tiempo estimado, de lo contario perderán puntos. (resolver /modo imperativo)<br><br>',
                            '<span style="color: #0F58D8;">•</span> Espero que <input type="text" id="rCO4" class="form-control respuestas" style="width: 120px;"> mi libro pronto. (publicar / modo subjuntivo)<br><br>',
        ]
        contenidos.sort(f_randomico);

            $.each( contenidos, function( i, item ) {
                $("#oraciones").append( item );
            });

    }




    function Preg3(){
 
   
  
                var num = ['<td class="np1">'+
                            '<p class="np1" id="rNEP0" style="border-radius: 15px;">Archivo de documentos públicos<input type="checkbox" class="checkmark" id="nNEP0" value="avión" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                            '<td class="np1">'+
                            '<p class="np1" id="rNEP1" style="border-radius: 15px;">museos<input type="checkbox" class="checkmark" id="nNEP1" value="cocina" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                            '<td class="np1">'+
                            '<p class="np1" id="rNEP2" style="border-radius: 15px;">documentales<input type="checkbox" class="checkmark" id="nNEP2" value="trébol" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                            '<td class="np1">'+
                            '<p class="np1" id="rNEP3" style="border-radius: 15px;">centros comerciales<input type="checkbox" class="checkmark" id="nNEP3" value="manos" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                            '<td class="np1">'+
                            '<p class="np1" id="rNEP4" style="border-radius: 15px;">juegos infantiles<input type="checkbox" class="checkmark" id="nNEP4" value="volumen" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                        ];


                var contenidos2 = num;

                contenidos2.sort(f_randomico);

                $.each( contenidos2, function( i, item ) {
                  $("#numeros0").append( item );
                });



                 var num1 = [
                            '<td class="np1">'+
                            '<p class="np1" id="rNEP5" style="border-radius: 15px;">El árbol de navidad<input type="checkbox" class="checkmark" id="nNEP5" value="orgánico" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                            '<td class="np1">'+
                            '<p class="np1" id="rNEP6" style="border-radius: 15px;">El ferrocarril<input type="checkbox" class="checkmark" id="nNEP6" value="orgánico" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                            '<td class="np1">'+
                            '<p class="np1" id="rNEP7" style="border-radius: 15px;">periódicos de la época<input type="checkbox" class="checkmark" id="nNEP7" value="orgánico" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                            '<td class="np1">'+
                            '<p class="np1" id="rNEP8" style="border-radius: 15px;">parque<input type="checkbox" class="checkmark" id="nNEP8" value="orgánico" style="top: 4px; position: relative;"></p>'+
                            '</td>',
                        ];


                var contenidos3 = num1;

                contenidos3.sort(f_randomico);

                $.each( contenidos3, function( i, item ) {
                  $("#numeros1").append( item );
                });
        }



    var notaFinalP1 = 0;
    function Resp1(){

        var resp = ['modoimperativo','modoindicativo','modosubjuntivo','modoindicativo','modoimperativo']

          for(var i=0; i<5; i++){

                if( $('#rEN'+i).val().toLowerCase().replace(/ /g, "") == resp[i]){
                    notaFinalP1++;
                    $('#rEN'+i).css("background-color", "#5ED188");
                }else{
                    $('#rEN'+i).css("background-color", "#EF87A7");
                }               

          }

    }





    var notaFinalP2 = 0;
    function Resp2(){

        var resp = ['compren','sube','cerraron','resuelvan','publique']

          for(var i=0; i<5; i++){

                if( $('#rCO'+i).val().toLowerCase().replace(/ /g, "") == resp[i]){
                    notaFinalP2++;
                    $('#rCO'+i).css("background-color", "#5ED188");
                }else{
                    $('#rCO'+i).css("background-color", "#EF87A7");
                }               

          }

    }




        var notaFinalP3 = 0;
        function Resp3(){

            var resp = ['hubiera','tenían','dejen','es']

            for(var i=0; i<4; i++){
              if( $('#rHT'+i).val().toLowerCase().replace(/ |!|¡|: /g, "") == resp[i]){
                notaFinalP3++;              
                $('#rHT'+i).css("background-color", "#5ED188");
              }else{
                $('#rHT'+i).css("background-color", "#EF87A7");                      
              }
            }

        }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg1();
      Preg2();
      Preg3();

      function confirmar() {
    
        Resp1();
        Resp2();
        Resp3();

        var nota1 = (notaFinalP1*3)/5;
        var nota2 = (notaFinalP2*3)/5;
        var nota3 = (notaFinalP3*4)/4;

        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
confirmar();
       /*if($('#calificacion0').val() !='' && $('#calificacion1').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }*/
        
      });

  });