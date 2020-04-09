
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

      var anade = [
      '<tr> <td align="center"><input type="text" id="rAPS1" class="form-control respuestas input-sm" style="width: 70px; display: inline-block;">&nbsp;termia</td> <td>Disminución de la temperatura por debajo de lo normal </td> </tr>',
      '<tr> <td align="center">rin&nbsp;<input type="text" id="rAPS2" class="form-control respuestas input-sm" style="width: 70px; display: inline-block;"></td> <td>Inflamación del revestimiento mucoso de la nariz</td> </tr>',
      '<tr> <td align="center"><input type="text" id="rAPS3" class="form-control respuestas input-sm" style="width: 70px; display: inline-block;">&nbsp;familiar</td> <td>Construcción con varios pisos y departamentos. Cada uno de los departamen-<br>tos está destinado a ser ocupado por una familia.</td> </tr>',
      '<tr> <td align="center">andr&nbsp;<input type="text" id="rAPS4" class="form-control respuestas input-sm" style="width: 70px; display: inline-block;"></td> <td>Robot que tiene apariencia casi humana, que además imita.</td> </tr>',
      '<tr> <td align="center"><input type="text" id="rAPS5" class="form-control respuestas input-sm" style="width: 70px; display: inline-block;">&nbsp;congestionar</td> <td>Disminuir o quietar la congestión o aglomeración.</td> </tr>',
      ];

      anade.sort(f_randomico);
      $.each( anade, function( i, item ) {
      $( "#anade" ).append( item );
      });

    }


    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

      var rELPEx,rELPIn,rELPDor,rELPDora,rELPArio;

        for( var j=1; j<4; j++ ){
              
              rELPEx = $('#rELPEx'+j).val().toLowerCase().replace(/ |extra| /gi, "-extra").split("-");
              if( rELPEx.length >= 2 ){
                  notaFinalP1++;
                  $('#rELPEx'+j).css("background-color", "#5ED188");
              }else{
                  $('#rELPEx'+j).css("background-color", "#EF87A7");
              }


              rELPIn = $('#rELPIn'+j).val().toLowerCase().replace(/ |in| /gi, "-in").split("-");

              if( rELPIn.length >= 2 ){
                  notaFinalP1++;
                  $('#rELPIn'+j).css("background-color", "#5ED188");
              }else{
                  $('#rELPIn'+j).css("background-color", "#EF87A7");
              }


              rELPDor = $('#rELPDor'+j).val().toLowerCase().replace(/ |dor| /gi, "-dor").split("-");
              rELPDora = $('#rELPDor'+j).val().toLowerCase().replace(/ |dora| /gi, "-dora").split("-");

              if( rELPDor.length >= 2  || rELPDora.length >= 2 ){
                  notaFinalP1++;
                  $('#rELPDor'+j).css("background-color", "#5ED188");
              }else{
                  $('#rELPDor'+j).css("background-color", "#EF87A7");
              }



              rELPArio = $('#rELPArio'+j).val().toLowerCase().replace(/ |ario| /gi, "-ario").split("-");

              if( rELPArio.length >= 2 ){
                  notaFinalP1++;
                  $('#rELPArio'+j).css("background-color", "#5ED188");
              }else{
                  $('#rELPArio'+j).css("background-color", "#EF87A7");
              }
        }      

    }




    var notaFinalP2 = 0;
    function Resp2(){

        var resp = ['hipo','itis','multi','oide','des'];

        for( var i=1; i<6; i++ ){
              if( $('#rAPS'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
                  notaFinalP2++;
                  $('#rAPS'+i).css("background-color", "#5ED188");
              }else{
                  $('#rAPS'+i).css("background-color", "#EF87A7");
              }
        }

    }



    var notaFinalP3 = 0;
    function Resp3(){

        var resp = ['hiperactividad','educadoras','incapacidad','extraescolares','multitareas'];

        for( var i=1; i<6; i++ ){
              if( $('#rCSP'+i).val().toLowerCase().replace(/ /gi, "") == resp[i-1] ){
                  notaFinalP3++;
                  $('#rCSP'+i).css("background-color", "#5ED188");
              }else{
                  $('#rCSP'+i).css("background-color", "#EF87A7");
              }
        }

    }


///////////////////////////////////////////////////////

    $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();


      function confirmar() {

        Resp1();
        Resp2();
        Resp3();


        var nota1 = ((notaFinalP1)*4)/12;;
        var nota2 = ((notaFinalP2)*3)/5;
        var nota3 = ((notaFinalP3)*3)/5;

        

        var notaFinal = (nota1+nota2+nota3).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
  
 confirmar();
        /*if( $('#calificacion2').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
        }*/
          
        
      });

  });