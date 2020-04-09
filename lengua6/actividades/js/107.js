
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

      var c = 1;
      var d = 1;
      var tr = [];
      var conj = ['empiezas','vendía','pongo','decidiste','estoy','huelen'];

      for( var i=0; i<6; i++ ){

        tr[i] = '<tr>'+
                      '<td>'+conj[i]+'</td>'+
                      '<td><input type="text" id="rVC'+c+'" class="form-control respuestas" style="width: 150px;"></td>'+
                      '<td><input type="text" id="rVC'+(c+1)+'" class="form-control respuestas" style="width: 50px;"></td>'+
                      '<td id="ssVC'+(d)+'"><input type="checkbox" id="sVC'+(d)+'" class="checkmark"></td>'+
                      '<td id="ssVC'+(d+1)+'"><input type="checkbox" id="sVC'+(d+1)+'" class="checkmark"></td>'+
                      '<td id="ssVC'+(d+2)+'"><input type="checkbox" id="sVC'+(d+2)+'" class="checkmark"></td>'+
                  '</tr>';
        c=c+2;
        d=d+3;

      }


      tr.sort(f_randomico);
      $.each( tr, function( i, item ) {
      $( "#conjugados" ).append( item );
      });

    }   

 
 
 

    function Preg2(){                                            

      var escribe1 = [
      '<tr> <td>vencer</td> <td><input type="text" class="form-control respuestas" style="width: 150px;"></td> <td><input type="text" class="form-control respuestas" style="width: 500px;"></td> </tr>',
      '<tr> <td>venir</td> <td><input type="text" class="form-control respuestas" style="width: 150px;"></td> <td><input type="text" class="form-control respuestas" style="width: 500px;"></td> </tr>',
      '<tr> <td>agradecer</td> <td><input type="text" class="form-control respuestas" style="width: 150px;"></td> <td><input type="text" class="form-control respuestas" style="width: 500px;"></td> </tr>',
      '<tr> <td>incluir</td> <td><input type="text" class="form-control respuestas" style="width: 150px;"></td> <td><input type="text" class="form-control respuestas" style="width: 500px;"></td> </tr>',
      ];

      escribe1.sort(f_randomico);
      $.each( escribe1, function( i, item ) {
      $( "#escribe1" ).append( item );
      });

    }


    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

      var resp = ['empezar','ar','vender','er','poner','er','decidir','ir','estar','ar','oler','er'];

        for(var i=1; i<13; i++){
              if( $('#rVC'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
                  notaFinalP1++;
                 $('#rVC'+i).css("background-color", "#5ED188");
              }else{
                  $('#rVC'+i).css("background-color", "#EF87A7");
              }
        }


        val = [2,4,9,10,15,17];//id respuestas
        for( var j=1; j<19; j++){

            if( j == 2 || j == 4 || j == 9 || j == 10 || j == 15 || j == 17 ){
                if( (document.getElementById('sVC'+j).checked) ) {
                    notaFinalP1++;
                    $('#ssVC'+j).css("background-color", "#5ED188");
                }else{
                    $('#ssVC'+j).css("background-color", "#BDB653");
                }
            }else{
                if( (document.getElementById('sVC'+j).checked) ) {
                    notaFinalP1--;                    
                    $('#ssVC'+j).css("background-color", "#EF87A7");
                }                
            }

        }         

    }




    var notaFinalP3 = 0;
    var notaFinalP3_1 = 0;
    var notaFinalP3_2 = 0;
    function Resp3(){

      var resp = ['fue','aprendí','parecía','pude','estaba','corrió','reduje','terminó','encontramos','dije','emprendimos','firmaron'];

      var resp1 = ['ser', 'poder', 'estar', 'reducir', 'decir', 'parecer'];
      var res1 = $('#rELV1').val().toLowerCase().replace(/ /gi, "").split(',');

      var resp2 = ['aprender', 'correr', 'terminar', 'encontrar', 'emprender' , 'firmar'];
      var res2 = $('#rELV2').val().toLowerCase().replace(/ /gi, "").split(',');


        for(var i=1; i<13; i++){

              if( $('#rCSP'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
                  notaFinalP3++;
                  $('#rCSP'+i).css("background-color", "#5ED188");
              }else{
                  $('#rCSP'+i).css("background-color", "#EF87A7");
              }

        }



        for( var j=0; j<6; j++ ){

            for( var k=0; k<6; k++ ){

                if( resp1[j] == res1[k] ){
                    notaFinalP3_1++;
                }else{
                    $('#rELV1').css("background-color", "#EF87A7");
                }

              ////////////////////////////
                if( resp2[j] == res2[k] ){
                    notaFinalP3_2++;
                }else{
                    $('#rELV2').css("background-color", "#EF87A7");
                }
            }

        }


                  if(notaFinalP3_1 == 6){
                        $('#rELV1').css("background-color", "#5ED188");
                    }else{
                        $('#rELV1').css("background-color", "#EF87A7");
                        document.getElementById('rELV1').value += "FALTAN VERBOS";
                    }

                  if(notaFinalP3_2 == 6){
                        $('#rELV2').css("background-color", "#5ED188");
                    }else{
                        $('#rELV2').css("background-color", "#EF87A7");
                        document.getElementById('rELV2').value += "FALTAN VERBOS";
                    }

    }

    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();


      function confirmar() {

        Resp1();
        Resp3();


        var nota1;
        if(notaFinalP1<0){nota1=0;}else{nota1=(notaFinalP1*4)/18;}
        var nota2 = parseFloat($('#calificacion2').val());
        var nota3 = ((notaFinalP3+notaFinalP3_1+notaFinalP3_2)*4)/24;

        

        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
  

        if( $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        }
          
        
      });

  });