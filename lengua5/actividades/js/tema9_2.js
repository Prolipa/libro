
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    



    function Preg3(){

      var n = Math.round(Math.random() * (5 - 0) + 0);

        var contenidos = [
            'M3 t2s4r4 2s 2l 2c51d4r',
            '2c51d4r 2s 5n p13s h2rm4s4',
            '2c51d4r 4rg5ll4 d2 l1t3n41m2r3c1',
            'P13s pl5r32tn3c4 y pl5r3c5lt5r1l',
            '2c51d4r t32rr1 d2 g2nt2 bu2n1',
            '2c51d4r 1m1 l1 v3d1',
        ]
        
        $("#lengua").append( contenidos[n] );

    }



     function Preg5(){

      var n0 = Math.round(Math.random() * (2 - 0) + 0);
      var n1 = Math.round(Math.random() * (4 - 3) + 3);
      var n2 = Math.round(Math.random() * (6 - 5) + 5);


        var contenidos = [
            '<span class="num2" id="sigla1">PUCE</span>&nbsp;&nbsp;&nbsp;<input type="text" id="rAES1" class="form-control respuestas" style="display: inline-block; width: 500px;"><br><br>',
            '<span class="num2" id="sigla1">IECE</span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="rAES1" class="form-control respuestas" style="display: inline-block; width: 500px;"><br><br>',
            '<span class="num2" id="sigla1">SRI</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="rAES1" class="form-control respuestas" style="display: inline-block; width: 500px;"><br><br>',
            '<span class="num3" id="sigla2">IESS</span>&nbsp;&nbsp;&nbsp;<input type="text" id="rAES2" class="form-control respuestas" style="display: inline-block; width: 500px;"><br><br>',
            '<span class="num3" id="sigla2">MSP</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="rAES2" class="form-control respuestas" style="display: inline-block; width: 500px;"><br><br>',
            '<span class="num4" id="sigla3">ONU</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="rAES3" class="form-control respuestas" style="display: inline-block; width: 500px;"><br><br>',
            '<span class="num4" id="sigla3">OEA</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="rAES3" class="form-control respuestas" style="display: inline-block; width: 500px;"><br><br>',
        ]

        $("#averigua").append( contenidos[n0] );
        $("#averigua").append( contenidos[n1] );
        $("#averigua").append( contenidos[n2] );
    }



    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<15; i++){
                if($('#sPM'+(i) +'.pinta').text()){
                  notaFinalP1++;
                  $('#sPM'+i).css("background-color", "#5ED188");
                }else{
                  $('#sPM'+i).addClass('pintaMal');
                }
        }


        for(var j=1; j<5; j++){
                if( parseInt($('#rPM'+j).val()) == j ){
                  notaFinalP1++;
                  $('#rPM'+j).css("background-color", "#5ED188");
                }else{
                  $('#rPM'+j).css("background-color", "#F76880");
                }
        }

    }




    var notaFinalP3 = 0;
    function Resp3(){


      var lengua = $('#lengua').text().toLowerCase().replace(/ /gi, "").replace(/ |1| /gi, "a").replace(/ |2| /gi, "e").replace(/ |3| /gi, "i").replace(/ |4| /gi, "o").replace(/ |5| /gi, "u");

                //alert( $('#rlengua').val().toLowerCase().replace(/ /gi, "") +'=='+ lengua );
                if( $('#rlengua').val().toLowerCase().replace(/ /gi, "") == lengua ){
                  notaFinalP3++;
                  $('#rlengua').css("background-color", "#5ED188");
                }else{
                  $('#rlengua').css("background-color", "#F76880");
                }
    }



    var notaFinalP5 = 0;
    function Resp5(){

          var day;
          for( var i=1; i<4; i++){            
            
              switch ( $('#sigla'+i).text() ) {
                  case 'PUCE':                    
                      if( $('#rAES'+i).val().toLowerCase().replace(/ /gi, "") == 'pontificiauniversidadcatólicadelecuador' ){
                          notaFinalP5++;
                          $('#rAES'+i).css("background-color", "#5ED188");
                      }else{
                          $('#rAES'+i).css("background-color", "#F76880");
                      }
                      break;

                  case 'IECE':
                      if( $('#rAES'+i).val().toLowerCase().replace(/ /gi, "") == 'institutoecuatorianodecréditoeducativo' ){
                          notaFinalP5++;
                          $('#rAES'+i).css("background-color", "#5ED188");
                      }else{
                          $('#rAES'+i).css("background-color", "#F76880");
                      }
                      break;

                  case 'SRI':
                      if( $('#rAES'+i).val().toLowerCase().replace(/ /gi, "") == 'servicioderentasinternas' ){
                          notaFinalP5++;
                          $('#rAES'+i).css("background-color", "#5ED188");
                      }else{
                          $('#rAES'+i).css("background-color", "#F76880");
                      }
                      break;

                  case 'IESS':
                      if( $('#rAES'+i).val().toLowerCase().replace(/ /gi, "") == 'institutoecuatorianodeseguridadsocial' ){
                          notaFinalP5++;
                          $('#rAES'+i).css("background-color", "#5ED188");
                      }else{
                          $('#rAES'+i).css("background-color", "#F76880");
                      }
                      break;

                  case 'MSP':
                      if( $('#rAES'+i).val().toLowerCase().replace(/ /gi, "") == 'ministeriodesaludpública' ){
                          notaFinalP5++;
                          $('#rAES'+i).css("background-color", "#5ED188");
                      }else{
                          $('#rAES'+i).css("background-color", "#F76880");
                      }
                      break;

                  case 'ONU':
                      if( $('#rAES'+i).val().toLowerCase().replace(/ /gi, "") == 'organizacióndenacionesunidas' ){
                          notaFinalP5++;
                          $('#rAES'+i).css("background-color", "#5ED188");
                      }else{
                          $('#rAES'+i).css("background-color", "#F76880");
                      }
                      break;

                  case 'OEA':
                      if( $('#rAES'+i).val().toLowerCase().replace(/ /gi, "") == 'organizacióndeestadosamericanos' ){
                          notaFinalP5++;
                          $('#rAES'+i).css("background-color", "#5ED188");
                      }else{
                          $('#rAES'+i).css("background-color", "#F76880");
                      }

              }

          }

    }



    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();

      Preg3();
      Preg5();


          for(var i=1; i<15; i++){////Preg1

              $('#sPM'+(i)).click(function(){
                  if($(this).hasClass('pinta')) {
                      $(this).removeClass('pinta')
                  }else{
                      $(this).addClass('pinta')
                  }

              });
          }

      function confirmar() {
    
        Resp1();
        Resp3();
        Resp5();

        var notaFinal;

        var nota1;
        if( notaFinalP1 < 0 ){ nota1 = 0}else{ nota1 = ((notaFinalP1*2)/14)}
        var nota2 = parseFloat($('#calificacion2').val());
        var nota3 = (notaFinalP3)*2;
        var nota4 = parseFloat($('#calificacion4').val());;
        var nota5 = (notaFinalP5*2)/3;
        
        notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

            $("#txtNota").text(notaFinal+'/10');
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion2').val() !='' && $('#calificacion4').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
        }
        
      });

  });