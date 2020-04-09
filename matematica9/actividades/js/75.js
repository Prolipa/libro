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
      var nVal = [];
      var nValE = [];

      for(var i=0; i<8; i++) {
        nVal[i] =  Math.round(Math.random() * (20 - (2)) + (2));
        nValE[i] =  Math.round(Math.random() * (20 - (7)) + (7));

        $("#vn"+i).append(nVal[0]);
        $("#ve"+i).append(nValE[0]);

        $("#vn0"+i).append(nVal[i]);
      }
     

      var contenidos = [
            ['<div class="col-sm-3"><li class="literal" id="rVal0" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR0" name="sR00" value="1">&nbsp;&nbsp;<span class="np1">'+nVal[0]+'<sup>'+(nValE[0]+1)+'</sup></span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np1">'+nVal[0]+'<sup>'+nValE[0]+'</sup></span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np1">'+nVal[0]+'<sup>'+(nValE[0]+nVal[0])+'</sup></span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np1">'+(nVal[0]*nVal[0])+'<sup>'+nValE[0]+'</sup></span></li></div>'],            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#valores0").append( item );
      });


      var contenidos1 = [
            ['<div class="col-sm-3"><li class="literal" id="rVal01" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR1" name="sR01" value="1">&nbsp;&nbsp;<span class="np1">'+(nVal[5]-nVal[6])+'</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp;<span class="np1">'+(nVal[5]+nVal[6])+'</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp;<span class="np1">'+(nVal[5]*nVal[6])+'</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp;<span class="np1">'+(nVal[5]+nVal[6]*nVal[5])+'</span></li></div>'],            
        ]
      contenidos1.sort(f_randomico);

      $.each( contenidos1, function( i, item ) {
        $("#valores01").append( item );
      });


       var contenidos2 = [
            ['<div class="col-sm-3"><li class="literal" id="rVal02" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR2" name="sR02" value="1">&nbsp;&nbsp;<span class="np1">4x <sup>–3n + 3</sup></span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp;<span class="np1">4x <sup>n + 3</sup></span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp;<span class="np1">4x <sup>n</sup></span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp;<span class="np1">4x <sup>3n + 1</sup></span></li></div>'],            
        ]
      contenidos2.sort(f_randomico);

      $.each( contenidos2, function( i, item ) {
        $("#valores02").append( item );
      });
    }

   

  var notaFinalP1 = 0;
  function Resp1(){

    if(document.getElementById('sR0').checked){
       notaFinalP1++     
       $('#rVal0').css("background-color", "#5ED188");
    }else{
       $('#rVal0').css("background-color", "#EF87A7");
    }



    ////2

    if(document.getElementById('sR1').checked){
       notaFinalP1++     
       $('#rVal01').css("background-color", "#5ED188");
    }else{
       $('#rVal01').css("background-color", "#EF87A7");
    }


    ////3

    if(document.getElementById('sR2').checked){
       notaFinalP1++     
       $('#rVal02').css("background-color", "#5ED188");
    }else{
       $('#rVal02').css("background-color", "#EF87A7");
    }

  }

      function Cargar() {   
          location.reload(true);
      }


    $(document).ready(function() {
      Inicio();
      Preg1();

      function confirmar() {
        Resp1();

        var nota1 = (notaFinalP1*10)/3;
            
        var notaFinal = (nota1);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
          confirmar();
         
      });

  });
