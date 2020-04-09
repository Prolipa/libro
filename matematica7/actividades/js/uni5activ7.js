
  function Inicio() {
      $(".panel-collapse").addClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });



    function Preg1(){
      var nCCR1 = (Math.random() * (90 - 10) + 10).toFixed(3);
      var nCCR2 = (Math.random() * (90 - 10) + 10).toFixed(2);
      var nCCR3 = (Math.random() * (90 - 10) + 10).toFixed(3);
      var nCCR4 = (Math.random() * (90 - 10) + 10).toFixed(1);
      var nCCR5 = (Math.random() * (90 - 10) + 10).toFixed(2);
      var nCCR6 = (Math.random() * (9 - 1) + 1).toFixed(2);
      var nCCR7 = (Math.random() * (90 - 10) + 10).toFixed(3);
      var nCCR8 = (Math.random() * (90 - 10) + 10).toFixed(1);  

      $('#nCCR1').append(nCCR1);
      $('#nCCR2').append(nCCR2);
      $('#nCCR3').append(nCCR3);
      $('#nCCR4').append(nCCR4);
      $('#nCCR5').append(nCCR5);
      $('#nCCR6').append(nCCR6);
      $('#nCCR7').append(nCCR7);
      $('#nCCR8').append(nCCR8);
    }


    function Preg3(){
      var nDER1,nDER2,nDER3,nDER4;
      var dDER1,dDER2,dDER3,dDER4;
      var rDER1,rDER2,rDER3,rDER4,rDER5,rDER6;
      var c=1;
        nDER1 = (Math.random() * (90 - 10) + 10).toFixed(3);
        nDER2 = (Math.random() * (90 - 10) + 10).toFixed(2);
        nDER3 = Math.round(Math.random() * (9000 - 1000) + 1000);
        nDER4 = (Math.random() * (9 - 1) + 1).toFixed(2);

        dDER1 = (Math.random() * (9 - 1) + 1).toFixed(1);
        dDER2 = (Math.random() * (9 - 1) + 1).toFixed(1);
        dDER3 = Math.round(Math.random() * (50 - 10) + 10);
        dDER4 = Math.round(Math.random() * (9 - 1) + 1);

        $('#nDER'+(c)).append(nDER1);
        $('#nDER'+(c+1)).append(nDER2);
        $('#nDER'+(c+2)).append(nDER3);
        $('#nDER'+(c+3)).append(nDER4);

        $('#dDER'+(c)).append(dDER1);
        $('#dDER'+(c+1)).append(dDER2);
        $('#dDER'+(c+2)).append(dDER3);
        $('#dDER'+(c+3)).append(dDER4);

        rDER1 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER2 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER3 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER4 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER5 = (Math.random() * (90 - 1) + 1).toFixed(2);
        rDER6 = (Math.random() * (90 - 1) + 1).toFixed(2);

        var respDivide = [
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER1">'+(nDER1/dDER1).toFixed(2)+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER2">'+(nDER2/dDER2).toFixed(2)+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER3">'+(nDER3/dDER3).toFixed(2)+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER4">'+(nDER4/dDER4).toFixed(2)+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER5">'+rDER1+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER6">'+rDER2+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER7">'+rDER3+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER8">'+rDER4+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER9">'+rDER5+'</span>',
            '<span class="n5" style="cursor: pointer; margin-right: 30px;" id="rDER10">'+rDER6+'</span>',
        ];
        respDivide.sort(f_randomico);
        $('#respDivide').append(respDivide);
    }


///////////////////////////////////////////////////////////////////

  var notaFinalP1 = 0;
  function Resp1(){
      var c=1;
      var op;
      for( var i=1; i<5; i++ ){
        switch(i) {
          case 1:
            op = (parseFloat($('#nCCR'+(c)).text()) + parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
          case 2:
            op = (parseFloat($('#nCCR'+(c)).text()) - parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
          case 3:
            op = (parseFloat($('#nCCR'+(c)).text()) * parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
          case 4:
            op = (parseFloat($('#nCCR'+(c)).text()) / parseFloat($('#nCCR'+(c+1)).text())).toFixed();
            break;
        }
        if( parseFloat($('#rCCR'+i).val()).toFixed() == op ){
            notaFinalP1++;
            $('#rCCR'+i).css("background-color", "#05D576");
          }else{
            $('#rCCR'+i).css("background-color", "#D50545");
          }
        c=c+2;
      } 
    }




  var notaFinalP2 = 0;
  function Resp2() {
      var c=0;
      var resp = [22.32,21.29,137.23,75.53,74.50,190.44,24.61,579.94,37.665,18.63,439.02];
      for( var i=1; i<12; i++ ){
        if( $('#rROC'+i).val() == resp[c] ){
            notaFinalP2++;
            $('#rROC'+i).css("background-color", "#05D576");
          }else{
            $('#rROC'+i).css("background-color", "#D50545");
          }
          c++;
      } 
  }



  var notaFinalP3 = 0;
  function Resp3() {
        if( parseFloat($('#rP1').val()) == 7.45 ){
            notaFinalP3++;
            $('#rP1').css("background-color", "#05D576");
        }else{
            $('#rP1').css("background-color", "#D50545");
        }
  }

///////////////////////////////////////////////////////////////////

    function Cargar() {   
      location.reload(true);
    }


    $(document).ready(function() {
        Inicio();
        Preg1();
        Preg3();

        for(var i=1; i<11; i++){
            $('#rDER'+(i)).click(function(){
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
          Resp3();
          
            var nota1 = (notaFinalP1);
            var nota2 = (notaFinalP2*4)/11;
            var nota3 = (notaFinalP3*2);
            

            var notaFinal = (nota1+nota2+nota3).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
confirmar();/*
        if( $('#calificacion2').val() !='' ){
          if( $('#calificacion2').val()<=1.5 && $('#calificacion2').val()>=0  ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
        }*/
      });    

});





