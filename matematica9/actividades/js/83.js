var titulos="evaluacion";
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    function Preg2(){

        var contenidos = [
            '<li> <span class="np1"><span class="col-sm-4">A ∩ B </span>= {<input type="text" id="rComp0" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">B ∩ C </span>= {<input type="text" id="rComp1" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">A ∩  C </span>= {<input type="text" id="rComp2" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">A ∩ B ∩ C </span>= {<input type="text" id="rComp3" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">A ∪ B </span>= {<input type="text" id="rComp4" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">A ∪ C </span>= {<input type="text" id="rComp5" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">C ∪ B </span>= {<input type="text" id="rComp6" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">A ∪ B ∪ C </span>= {<input type="text" id="rComp7" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">A − B </span>= {<input type="text" id="rComp8" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">B − C </span>= {<input type="text" id="rComp9" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">A Δ B </span>= {<input type="text" id="rComp10" class="form-control respuestas">}<br></span></li>',
            '<li> <span class="np1"><span class="col-sm-4">B Δ C </span>= {<input type="text" id="rComp11" class="form-control respuestas">}<br></span></li>'
            
        ]
      contenidos.sort(f_randomico);


      $.each( contenidos, function( i, item ) {
        $("#conComp0").append( item );
      });

    }


    var notaFinalP2 = 0;
    function Resp2(){

        var resp = '40,50';

        for(var i=0; i<12; i++){
          if(i==1){resp='50,70'}
          if(i==2){resp='30,50'}
          if(i==3){resp='50'}
          if(i==4){resp='10,20,30,40,50,60,70'}
          if(i==5){resp='10,20,30,40,50,70,80,90'}
          if(i==6){resp='30,40,50,60,70,80,90'}
          if(i==7){resp='10,20,30,40,50,60,70,80,90'}
          if(i==8){resp='10,20,30'}
          if(i==9){resp='40,60'}
          if(i==10){resp='10,20,30,60,70'}
          if(i==11){resp='30,40,60,80,90'}


            if( (($('#rComp'+i).val()).replace(/ |√|<|-/g, "")) == resp ){
              notaFinalP2++;
                $('#rComp'+i).css("background-color", "#5ED188");
            }else{
                $('#rComp'+i).css("background-color", "#EF87A7");
            }

        }
        
    }



    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();
      Preg2();

      function confirmar() {
        Resp2();
                
        var nota1 = parseFloat($('#calificacion0').val());
        var nota2 = parseFloat(((notaFinalP2)/12).toFixed(2));
        
            
        var notaFinal = (nota1+nota2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion0').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
        
      });

  });
