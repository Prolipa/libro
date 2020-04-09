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

      var opt = '<option></option><option value="rA0">∈</option><option value="rA1">∉</option>';


        var contenidos = [
            '<div class="col-sm-6"><li><span class="n2">&nbsp;&nbsp;&nbsp;&nbsp;-3&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rAn0">'+opt+'</select>&nbsp;&nbsp;&nbsp;&nbsp;A</span></li><br></div>',
            '<div class="col-sm-6"><li><span class="n2">&nbsp;&nbsp;&nbsp;&nbsp;pulgar&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rAn1">'+opt+'</select>&nbsp;&nbsp;&nbsp;&nbsp;B</span></li><br></div>',
            '<div class="col-sm-6"><li><span class="n2">&nbsp;&nbsp;&nbsp;&nbsp;medio&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rAn2">'+opt+'</select>&nbsp;&nbsp;&nbsp;&nbsp;B</span></li><br></div>',            
            '<div class="col-sm-6"><li><span class="n2">&nbsp;&nbsp;&nbsp;&nbsp;índice&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rAn3">'+opt+'</select>&nbsp;&nbsp;&nbsp;&nbsp;B</span></li><br></div>',
             '<div class="col-sm-6"><li><span class="n2">&nbsp;&nbsp;&nbsp;&nbsp;meñique&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rAn4">'+opt+'</select>&nbsp;&nbsp;&nbsp;&nbsp;A</span></li><br></div>',
             '<div class="col-sm-6"><li><span class="n2">&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rAn5">'+opt+'</select>&nbsp;&nbsp;&nbsp;&nbsp;B</span></li><br></div>',             
             '<div class="col-sm-6"><li><span class="n2">&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rAn6">'+opt+'</select>&nbsp;&nbsp;&nbsp;&nbsp;A</span></li><br></div>',
             '<div class="col-sm-6"><li><span class="n2">&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rAn7">'+opt+'</select>&nbsp;&nbsp;&nbsp;&nbsp;B</span></li><br></div>',                       
        ]
      contenidos.sort(f_randomico);


      $.each( contenidos, function( i, item ) {
        $("#aE0").append( item );
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





    var notaFinalP2 = 0;
    function Resp2(){

      var resp = 'rA0';
      for(var i=0; i<8; i++) {
        if(i > 3){
          resp = 'rA1';
        }
        if( $('#rAn'+i).val() == resp ){
          notaFinalP2++;
            $('#rAn'+i).css("background-color", "#5ED188");
        }else{
            $('#rAn'+i).css("background-color", "#EF87A7");
        }

      }

    }



    var notaFinalP3 = 0;
    function Resp3(){

      var resp = 'rcA0';
      for(var i=0; i<6; i++) {
          if(i == 2){
            resp = 'rcA1';
          }
          if(i == 4){
            resp = 'rcA2';
          }
          if(i == 5){
            resp = 'rcA3';
          }


          if( $('#raC'+i).val() == resp ){
            notaFinalP3++;            
              $('#raC'+i).css("background-color", "#5ED188");
          }else{
              $('#raC'+i).css("background-color", "#EF87A7");
          }

      }

    }


    var notaFinalP5 = 0;
    function Resp5(){

        var resA = [];
        var res = '1,2,3,4,5,6,9,10';
        for(var i=0; i<3; i++) {
          if(i==1){
            res = '2,3,5';
          }
          if(i==2){
            res = '1,2,3,11';
          }
           resA = (($('#rEf'+i).val()).replace(/ |√|<|-/g, "")).split(',');
            if( (resA) == res){
                notaFinalP5++;
                $('#rEf'+i).css("background-color", "#5ED188");
            }else{
                $('#rEf'+i).css("background-color", "#EF87A7");
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
        Resp2();
        Resp3();
        Resp5();

        var nota1 = parseFloat($('#calificacion0').val());
        var nota2 = ((notaFinalP2*2)/8);
        var nota3 = (notaFinalP3/3);
        var nota4 = parseFloat($('#calificacion1').val());
        var nota5 = ((notaFinalP5*2)/3);
            
        var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

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
