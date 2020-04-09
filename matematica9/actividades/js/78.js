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

    




    function Preg3(){

      var opt = '<option></option><option value="rcA0">conjunto finito</option><option value="rcA1">conjunto infinito</option><option value="rcA2">conjunto unitario</option><option value="rcA3">conjunto vacío</option>';


        var contenidos = [
            '<div class="col-sm-6"><li class="n0"> = {x|x es un presidente de Ecuador]</li><br><select class="form-control respuestas" id="raC0" style="width: 62%;">'+opt+'</select><br><br><br></div>',
            '<div class="col-sm-6"><li class="n0"> = { x | x ∈ ℤ, − 5 ≤ x ≤ − 1}</li><br><select class="form-control respuestas" id="raC1" style="width: 62%;">'+opt+'</select><br><br><br></div>',
            '<div class="col-sm-6"><li class="n0"> = {x|x es un número múltiplo de 5}</li><br><select class="form-control respuestas" id="raC2" style="width: 62%;">'+opt+'</select><br><br><br></div>',
            '<div class="col-sm-6"><li class="n0"> = { x | x es un número primo}</li><br><select class="form-control respuestas" id="raC3" style="width: 62%;">'+opt+'</select><br><br><br></div>',            
            '<div class="col-sm-6"><li class="n0"> = {x|x es un número primo par}</li><br><select class="form-control respuestas" id="raC4" style="width: 62%;">'+opt+'</select><br><br><br></div>',
            '<div class="col-sm-6"><li class="n0"> = { x | x ∈ ℕ, 4 < x < 5}</li><br><select class="form-control respuestas" id="raC5" style="width: 62%;">'+opt+'</select><br><br><br></div>'
        ]
      contenidos.sort(f_randomico);


      $.each( contenidos, function( i, item ) {
        $("#cA0").append( item );
      });

    }




    var notaFinalP1 = 0;
    function Resp1(){

      var resp = (((($('#rAn0').val()).replace(/ |y|´|-/g, "")).toLowerCase()).split(',')).sort();

            if( resp.toString() == 'ana,andres,carlos,marco,susana' || resp.toString() == 'ana,andrés,carlos,marco,susana' ){
                notaFinalP1++;
                $('#rAn0').css("background-color", "#5ED188");
            }else{
                $('#rAn0').css("background-color", "#EF87A7");
            }


      var resp1 = (((($('#rAn1').val()).replace(/ |y|´|-/g, "")).toLowerCase()).split(',')).sort();

            if( resp1.toString() == 'carlos,esteban,ricardo,susana' ){
                notaFinalP1++;
                $('#rAn1').css("background-color", "#5ED188");
            }else{
                $('#rAn1').css("background-color", "#EF87A7");
            }

      var resp2 = (((($('#rAn2').val()).replace(/ |y|´|-/g, "")).toLowerCase()).split(',')).sort();

            if( resp2.toString() == 'ana,andrés,marco' || resp2.toString() == 'ana,andres,marco' ){
                notaFinalP1++;
                $('#rAn2').css("background-color", "#5ED188");
            }else{
                $('#rAn2').css("background-color", "#EF87A7");
            }

      var resp3 = (((($('#rAn3').val()).replace(/ |´|-/g, "")).replace(/y/g, ",").toLowerCase()).split(',')).sort();
            if( resp3.toString() == 'ana,andres,marco' || resp3.toString() == 'ana,andrés,marco' ){
                notaFinalP1++;
                $('#rAn3').css("background-color", "#5ED188");
            }else{
                $('#rAn3').css("background-color", "#EF87A7");
            }


    }



    var notaFinalP2 = 0;
    function Resp2(){

        var resp = '4,5';

        for(var i=0; i<12; i++){
          if(i==1){resp='5,7'}
          if(i==2){resp='3,5'}
          if(i==3){resp='5'}
          if(i==4){resp='1,2,3,4,5,6,7'}
          if(i==5){resp='1,2,3,4,5,7,8,9'}
          if(i==6){resp='3,4,5,6,7,8,9'}
          if(i==7){resp='1,2,3,4,5,6,7,8,9'}
          if(i==8){resp='1,2,3'}
          if(i==9){resp='4,6'}
          if(i==10){resp='1,2,3,6,7'}
          if(i==11){resp='3,4,6,8,9'}


            if( (($('#rComp'+i).val()).replace(/ |√|<|-/g, "")) == resp ){
              notaFinalP2++;
                $('#rComp'+i).css("background-color", "#5ED188");
            }else{
                $('#rComp'+i).css("background-color", "#EF87A7");
            }

        }
        
    }





    var notaFinalP3 = 0;
    function Resp3(){

      var res = '1,2,3,4,5,6,7'; 

        for(var i=0; i<5; i++) {

          if(i==1){res = '4,5,6,7,8,9';}
          if(i==2){res = '6,7,8,9,10,11';}
          if(i==3){res = '1,2,3,4,5,6,7,8,9';}
          if(i==4){res = '6,7,8,9';}

             var resp = (((($('#rDc'+i).val()).replace(/ |y|´|-/g, ""))).split(',')).sort();

            if( resp.toString() == res ){
                notaFinalP3++;
                $('#rDc'+i).css("background-color", "#5ED188");
            }else{
                $('#rDc'+i).css("background-color", "#EF87A7");
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
      Preg3();

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();

        var nota1 = ((notaFinalP1*2)/4);
        var nota2 = ((notaFinalP2*3)/12);
        var nota3 = ((notaFinalP3)*3/5);
        var nota4 = parseFloat($('#calificacion1').val());
            
        var notaFinal = (nota1+nota2+nota3+nota4);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

        if($('#calificacion1').val() !=''){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }
          
      });

  });
