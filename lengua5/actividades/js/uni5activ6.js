
  function Inicio() {
     // $(".panel-collapse").removeClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Cargar() {   
      location.reload(true);
    }



    function Preg1(){

      var pinta1 = [
          '<span style="border-radius: 15px; border: 2px solid #AD9115; padding: 8px; margin: 15px; cursor: pointer;" id="rA1">africanos</span>',
          '<span style="border-radius: 15px; border: 2px solid #15AD5A; padding: 8px; margin: 15px; cursor: pointer;" id="rA3">redondos</span>',
          '<span style="border-radius: 15px; border: 2px solid #1541AD; padding: 8px; margin: 15px; cursor: pointer;" id="rA4">vagabundos</span>',
          '<span style="border-radius: 15px; border: 2px solid #6115AD; padding: 8px; margin: 15px; cursor: pointer;" id="rA5">juguetones</span>',
          '<span style="border-radius: 15px; border: 2px solid #AD1591; padding: 8px; margin: 15px; cursor: pointer;" id="rA6">enfermos</span>',
          '<span style="border-radius: 15px; border: 2px solid #AD152C; padding: 8px; margin: 15px; cursor: pointer;" id="rA2">serios</span>',
      ];

      pinta1.sort(f_randomico);
      $('#pinta1').append(pinta1);

    }


    function Preg2(){
      var completa = [
        '<div class="col-sm-3" align="center"> africanos<br> <input type="text" id="rB1" class="form-control respuestas input-sm resp1" style="width: 150px;"> </div>',
        '<div class="col-sm-3" align="center"> tienda<br> <input type="text" id="rB2" class="form-control respuestas input-sm resp1" style="width: 150px;"> </div>',
        '<div class="col-sm-3" align="center"> gitanos<br> <input type="text" id="rB3" class="form-control respuestas input-sm resp1" style="width: 150px;"> </div>',
        '<div class="col-sm-3" align="center"> serios<br> <input type="text" id="rB4" class="form-control respuestas input-sm resp1" style="width: 150px;"> </div>',
      ];

      completa.sort(f_randomico);
      $('#completa').append(completa);

    }


    var notaFinalP1=0;
    function Resp1(){

      for(var j=1; j<7; j++){
            if( j<3 ){
                if($('#rA'+(j) +'.pinta').text()){
                  notaFinalP1++;
                  $('#rA'+j).addClass('bien');
                }
            }else{
                if($('#rA'+(j) +'.pinta').text()){
                  $('#rA'+j).addClass('mal');
                  notaFinalP1--;
                }
            }
        }
    }



    var notaFinalP2=0;
    function Resp2(){

      var resp = ['os', 'da', 'os', 'os'];
      var res,tam,re;

      for( var i=1; i<5; i++ ){
        res = $('#rB'+i).val().toLowerCase().replace(/ |\.| /gi, "").split('');
        tam = res.length;
        re = res[tam-2]+''+res[tam-1];
        
        if( re == resp[i-1] ){
          notaFinalP2++;
          $('#rB'+i).addClass('bien');
        }else{
          $('#rB'+i).addClass('mal');
        }
      }
    }




    var notaFinalP4=0;
    function Resp4(){

      for(var j=1; j<35; j++){
            if( j<9 ){
                if($('#rD'+(j) +'.pinta1').text()){
                  notaFinalP4++;
                  $('#rD'+j).addClass('bien1');
                }
            }else{
                if($('#rD'+(j) +'.pinta1').text()){
                  $('#rD'+j).addClass('mal1');
                  notaFinalP4--;
                }
            }
        }
    }


    $(document).ready(function() {
        Inicio();
        Preg1();
        Preg2();

        for(var j=1; j<35; j++){
            $('#rD'+(j)).click(function(){
              if($(this).hasClass('pinta1')) {
                  $(this).removeClass('pinta1')
              }else{
                  $(this).addClass('pinta1')
              }
            });
        }

        for(var i=1; i<7; i++){
            $('#rA'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


        


        function confirmar() {
          Resp1();
          Resp2();
          Resp4();

          var nota1;
          if(notaFinalP1<0){nota1=0;}else{nota1=(notaFinalP1*2.5)/2;}
          var nota2 = (notaFinalP2*2.5)/4;
          var nota3 = parseFloat($('#calificacion3').val());
          var nota4;
          if(notaFinalP4<0){nota4=0;}else{nota4=(notaFinalP4*2.5)/8;}

          var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        if( $('#calificacion3').val() !='' ){
          if( $('#calificacion3').val()<=2.5 && $('#calificacion3').val()>=0 ){
            confirmar();
            $('#calificacion3').addClass('b');
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion3').focus();
            $('#calificacion3').addClass('m');
        }
      });    

});





