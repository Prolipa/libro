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




  function Preg6(){

      var nConj0 = Math.round(Math.random() * (-2 - (-9)) + (-9));
      $("#nConj0").append(nConj0);

      var nConj1 = Math.round(Math.random() * (-2 - (-9)) + (-9));
      $("#nConj1").append(nConj1);

      var nConj2 = Math.round(Math.random() * (9 - (2)) + (2));
      $("#nConj2").append(nConj2);

      var contenidos = [
            ['<div class="col-sm-3"><li class="literal" id="rConj0" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR0" name="sR00" value="1">&nbsp;&nbsp;<span class="np1">]− ∞ ,   '+nConj0+']</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np1">[0 , '+Math.abs(nConj0)+']</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np1">]− ∞ ,   '+nConj0+'[</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np1">]'+nConj0+' , '+nConj0+']</span></li></div>'],            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#conj0").append( item );
      });


        var contenidos = [
            ['<div class="col-sm-3"><li class="literal" id="rConj1" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR1" name="sR01" value="1">&nbsp;&nbsp;<span class="np1">]'+nConj1+' , '+nConj2+'[</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp;<span class="np1">['+nConj1+' , '+nConj2+']</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp;<span class="np1">]'+nConj1+' , '+nConj2+']</span></li></div>'],            
            ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp;<span class="np1">['+nConj1+' , '+nConj2+'[</span></li></div>'],            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#conj1").append( item );
      });

  }


  var notaFinalP6 = 0;
  function Resp6(){

    if(document.getElementById('sR0').checked){
       notaFinalP6++     
       $('#rConj0').css("background-color", "#5ED188");
    }else{
       $('#rConj0').css("background-color", "#EF87A7");
    }


    if(document.getElementById('sR1').checked){
       notaFinalP6++     
       $('#rConj1').css("background-color", "#5ED188");
    }else{
       $('#rConj1').css("background-color", "#EF87A7");
    }


  }    

   

      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg6();       
            
           function confirmar() {
            Resp6();

            var nota1 = parseFloat($('#calificacion0').val());
            var nota2 = parseFloat($('#calificacion1').val());
            var nota3 = parseFloat($('#calificacion2').val());
            var nota4 = parseFloat($('#calificacion3').val());
            var nota5 = parseFloat($('#calificacion4').val());
            var nota6 = notaFinalP6;
            
            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

    if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' && $('#calificacion4').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
        }
          
      });

  });
