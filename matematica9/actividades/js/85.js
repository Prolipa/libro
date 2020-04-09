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





    function Preg4(){
      var contenidos = [
            '<span>6 952 000 kg</span>&nbsp;&nbsp; = &nbsp;&nbsp;<input type="text" id="rNCN0" class="form-control respuestas" style="width: 180px;">'+
            '<sup><input type="number" id="rNCN1" class="form-control respuestas" style="width: 75px;"></sup><br><br>',
            '<span>2 029 000 kg</span>&nbsp;&nbsp; = &nbsp;&nbsp;<input type="text" id="rNCN2" class="form-control respuestas" style="width: 180px;">'+
            '<sup><input type="number" id="rNCN3" class="form-control respuestas" style="width: 75px;"></sup><br><br>',
            '<span>2 310 000 kg</span>&nbsp;&nbsp; = &nbsp;&nbsp;<input type="text" id="rNCN4" class="form-control respuestas" style="width: 180px;">'+
            '<sup><input type="number" id="rNCN5" class="form-control respuestas" style="width: 75px;"></sup><br><br>',
            '<span>10 767 323 kg</span>&nbsp;&nbsp; = &nbsp;&nbsp;<input type="text" id="rNCN6" class="form-control respuestas" style="width: 180px;">'+
            '<sup><input type="number" id="rNCN7" class="form-control respuestas" style="width: 75px;"></sup><br><br>',
        ]
      contenidos.sort(f_randomico);


      $.each( contenidos, function( i, item ) {
        $("#desechos").append( item );
      });
    }


    var notaFinalP1 = 0;
    function Resp1(){

        var resp = 10;

        for(var i=0; i<16; i++){
          if(i==8){resp=24}
          if(i==9){resp=21}
          if(i==10){resp=15}
          if(i==11){resp=9}
          if(i==12){resp=-6}
          if(i==13){resp=-9}
          if(i==14){resp=-15}
          if(i==15){resp=-21}

            if( (($('#rENC'+i).val())) == resp ){
                notaFinalP1++;
                $('#rENC'+i).css("background-color", "#5ED188");
            }else{
                $('#rENC'+i).css("background-color", "#EF87A7");
            }

        }

    }




    var notaFinalP2 = 0;
    function Resp2(){

        var resp = 0.0000005;
        for(var i=0; i<18; i++){
          if(i==1){resp=0.000004}
          if(i==2){resp=0.000001}
          if(i==3){resp=0.000005}
          if(i==4){resp=0.000000001}
          if(i==5){resp=0.000000075}
          if(i==6){resp='5x10'}
          if(i==7){resp=-7}
          if(i==8){resp='4x10'}
          if(i==9){resp=-6}
          if(i==10){resp='10'}
          if(i==11){resp=-6}
          if(i==12){resp='5x10'}
          if(i==13){resp=-6}
          if(i==14){resp='10'}
          if(i==15){resp=-9}
          if(i==16){resp='7.5x10'}
          if(i==17){resp=-7}

            if( (($('#rTNC'+i).val())).toLowerCase().replace(/ /g, "").replace(/ |,| /g, ".") == resp ){
              notaFinalP2++;
                $('#rTNC'+i).css("background-color", "#5ED188");
            }else{
                $('#rTNC'+i).css("background-color", "#EF87A7");
            }

        }
        
    }




    var notaFinalP3 = 0;
    function Resp3(){

        var resp = '7.6x10';

        for(var i=0; i<4; i++){
          if(i==1){resp=-8;}
          if(i==2){resp='5.2x10';}
          if(i==3){resp=-13;}
            if( (($('#rNCs'+i).val())).toLowerCase().replace(/ /g, "").replace(/ |,| /g, ".") == resp ){
                notaFinalP3++;
                $('#rNCs'+i).css("background-color", "#5ED188");
            }else{
                $('#rNCs'+i).css("background-color", "#EF87A7");
            }

        }
        
    }





    var notaFinalP4 = 0;
    function Resp4(){

        var resp = '6.952x10';

        for(var i=0; i<8; i++){
          if(i==1){resp=6}
          if(i==2){resp='2.029x10'}
          if(i==3){resp=6}
          if(i==4){resp='2.31x10'}
          if(i==5){resp=6}
          if(i==6){resp='1.0767323x10'}
          if(i==7){resp=7}            
            if( (($('#rNCN'+i).val())).toLowerCase().replace(/ /g, "").replace(/ |,| /g, ".") == resp ){
                notaFinalP4++;
                $('#rNCN'+i).css("background-color", "#5ED188");
            }else{
                $('#rNCN'+i).css("background-color", "#EF87A7");
            }

        }

    }



    var notaFinalP5 = 0;
    function Resp5(){

          var resp = ['4.8x10',3,'1.152x10',5,'4.1472x10',7,'3.6x10',6,'2.6x10',6,'10',6];

          for(var i=0; i<12; i++){
             
                if( (($('#rFC'+i).val())).toLowerCase().replace(/ /g, "").replace(/ |,| /g, ".") == resp[i] ){
                    notaFinalP5++;
                    $('#rFC'+i).css("background-color", "#5ED188");
                }else{
                    $('#rFC'+i).css("background-color", "#EF87A7");
                }

          }

    }





  


    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();
      Preg4();

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp5();
                
        var nota1 = (notaFinalP1*2)/16;
        var nota2 = (notaFinalP2*2)/18;
        var nota3 = (notaFinalP3*2)/4;
        var nota4 = (notaFinalP4*2)/8;
        var nota5 = (notaFinalP5*2)/12;

        
            
        var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
       /*if($('#calificacion0').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }*/
        
      });

  });
