
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


    function Preg2() {   
      var observa = [
          '<div class="col-sm-3" align="center"> <img src="img/i1_p185_act2.jpg" class="img-responsive"><br> <input type="text" id="rB1" class="form-control respuestas num3" style="width: 150px;"> </div>',
          '<div class="col-sm-3" align="center"> <img src="img/i2_p185_act2.jpg" class="img-responsive"><br> <input type="text" id="rB2" class="form-control respuestas num3" style="width: 150px;"> </div>',
          '<div class="col-sm-3" align="center"> <img src="img/i3_p185_act2.jpg" class="img-responsive"><br> <input type="text" id="rB3" class="form-control respuestas num3" style="width: 150px;"> </div>',
          '<div class="col-sm-3" align="center"> <img src="img/i4_p185_act2.jpg" class="img-responsive"><br> <input type="text" id="rB4" class="form-control respuestas num3" style="width: 150px;"> </div>',
      ];

      observa.sort(f_randomico);
      $('#observa').append(observa);
    }

/////////////////////////////////////////////////////////////////////////////

    var notaFinalP2=0;
    function Resp2(){
      var resp = ['coser','casa','cocer','caza'];
      for(var i=1; i<5; i++){
          if( $('#rB'+i).val().toLowerCase().replace(/ |\.| /gi, "") == resp[i-1] ){
            notaFinalP2++;
            $('#rB'+i).css("background-color", "#05D576");
          }else{
            $('#rB'+i).css("background-color", "#D50545");
          }
      }
    }




    var notaFinalP4=0;
    var notaFinalP_4=0;
    function Resp4(){
      var notaFinalP4_1=0;
      var encontradas1=[];
      var resp1, res1;
      var c=0, p=false, n=0;
      var repetidos1=0, rep1=false;
      var cant=0, cant1;
      var enc = 0;
      for(var m=1; m<3; m++){
        switch(m) {
          case 1:
            resp1 = ['abajo', 'estaba', 'calentaba', 'llegaban', 'caballos', 'bueyes'];
            cant = resp1.length;
            cant1 = resp1.length;
            break;
          default:
            resp1 = ['veía', 'vieron',  'ovejas', 'aves'];
            cant = cant + resp1.length;
            cant1 = resp1.length;
        }
        resp1.sort();

        res1 = $('#rD'+m).val().toLowerCase().replace(/ |-| /gi, "").split(",");
        res1.sort();

        for(var i=0; i<res1.length; i++){
          while(p==false && c<resp1.length){
            if( res1[i] == resp1[c] ){
              notaFinalP4_1++;
              encontradas1[n]=(res1[i]);
              p=true;
            }
            c++;
          }
          p=false;c=0;n++;
        }

        for(var k=0; k<encontradas1.length; k++){
            for(var l=(k+1); l<encontradas1.length; l++){
              if( encontradas1[k] == encontradas1[l] && encontradas1[k] != null){
                repetidos1++;
              }
            }
        }
        encontradas1=[];
        n=1;

        ////////////////////////////
        if( notaFinalP4_1 == cant ){
          $('#rD'+m).css("background-color", "#05D576");
        }else{
          $('#rD'+m).css("background-color", "#D50545");
        }
      }
      
        notaFinalP_4 = (((notaFinalP4_1 - repetidos1)*1.5)/(cant))

      ///////////////////////
      for(var j=1; j<11; j++){
          if($('#oD'+j +'.pinta').text()){
            notaFinalP4++;
            $('#oD'+j).addClass('bien');
          }else{
            $('#oD'+j).addClass('mal');
        } 
      }
    }



    $(document).ready(function() {
        Inicio();
        Preg2();

        for(var j=1; j<11; j++){
            $('#oD'+(j)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }

        function confirmar() {
          Resp2();
          Resp4();

          var nota1 = parseFloat($('#calificacion1').val());
          var nota2 = (notaFinalP2*2.5)/4;
          var nota3 = parseFloat($('#calificacion2').val());
          var nota4=0;
          if(notaFinalP4<0){nota4=0;}else{nota4=(notaFinalP4)/10;}
          var nota4_1 = (notaFinalP_4);//1.5

          var notaFinal = (nota1+nota2+nota3+nota4+nota4_1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
        }
      

      $("#Calificar").click(function() {
        var c=0;
        var punt=[2.5,2.5];
        for( var i=1; i<3; i++ ){
          if( $('#calificacion'+i).val() !='' ){
            if( $('#calificacion'+i).val()<=punt[i-1] && $('#calificacion'+i).val()>=0 ){
              c++;
              $('#calificacion'+i).css("background-color", "#05D576");
            }else{
              alert('La calificación no es valida, verifique que el puntaje ingresado no exceda los '+punt[i-1]+' puntos.');
              $('#calificacion'+i).focus();
              $('#calificacion'+i).css("background-color", "#D50545");
            }
          }else{
              $('#calificacion'+i).focus();
              $('#calificacion'+i).css("background-color", "#D50545");
          }
        }
        
        if( c==2 ){confirmar();}
        c=0;

      });
});





