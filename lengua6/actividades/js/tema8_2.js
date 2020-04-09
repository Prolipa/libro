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
                                '<td style="background-color: #CDC1EB;">Apellido del autor</td>'+
                                '<td><input type="text" id="rEN0" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td style="background-color: #CDC1EB;">Título del libro consultado</td>'+
                                '<td><input type="text" id="rEN1" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td style="background-color: #CDC1EB;">Año de publicación</td>'+
                                '<td><input type="text" id="rEN2" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td style="background-color: #CDC1EB;">Ciudad dónde se publicó el libro</td>'+
                                '<td><input type="text" id="rEN3" class="form-control respuestas"></td>'+
                            '</tr>',
                            '<tr>'+
                                '<td style="background-color: #CDC1EB;">Editorial que publicó el libro</td>'+
                                '<td><input type="text" id="rEN4" class="form-control respuestas"></td>'+
                            '</tr>'
        ]
        contenidos.sort(f_randomico);

            $.each( contenidos, function( i, item ) {
                $("#bibliografia").append( item );
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

        var r=false;
            var c=0;
            resp = ['palaciodecarondelet','laprimeraconstitucióndelecuador','noticiatomadadeldiariolagacetade1895'];
            resp1 = ['artículoacadémicolavidadeoctaviopaz','librosobrelahistoriadelaeconomía','undocumentalsobreelantiguoegipto'];
            for(var i=0; i<3; i++){

                while (r == false && c<3) {
                    //alert($('#rVPA'+i).val().toLowerCase().replace(/ /g, "")+' == '+ resp[c]);
                    if($('#rFPS'+i).val().toLowerCase().replace(/ |:|"| /g, "") == resp[c]){
                        notaFinalP1++;
                        r=true;
                        $('#rFPS'+i).css("background-color", "#5ED188");
                    }else{
                        $('#rFPS'+i).css("background-color", "#EF87A7");
                    }
                    c++;
                }   
                c=0;
                r=false;

            }


            for(var j=3; j<6; j++){

                while (r == false && c<3) {
                    //alert($('#rVPA'+i).val().toLowerCase().replace(/ /g, "")+' == '+ resp[c]);
                    if($('#rFPS'+j).val().toLowerCase().replace(/ |:|"| /g, "") == resp1[c]){
                        notaFinalP1++;
                        r=true;
                        $('#rFPS'+j).css("background-color", "#5ED188");
                    }else{
                        $('#rFPS'+j).css("background-color", "#EF87A7");
                    }
                    c++;
                }   
                c=0;
                r=false;

            }

    }



        var notaFinalP3 = 0;
        function Resp3(){

              if( $('#rNAPA').val().toLowerCase().replace(/ /g, "") == 'jaramillo.e.(1976).historiadelasdoctrinaseconómicas.quito:editorialuniversitaria.'){
                notaFinalP3++;              
                $('#rNAPA').css("background-color", "#5ED188");
              }else{
                $('#rNAPA').css("background-color", "#EF87A7");                      
              }

        }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg1();
      Preg3();

      function confirmar() {
    
        Resp1();
        Resp3();

        var nota1 = (notaFinalP1*3)/6;
        var nota2 = parseInt($('#calificacion0').val());
        var nota3 = (notaFinalP3*3);
        var nota4 = parseInt($('#calificacion1').val());

        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion0').val() !='' && $('#calificacion1').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }
        
      });

  });