var titulos="prueba";
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




    var notaFinalP1 = 0;
    function Resp1(){

            if($('#rEA0').val() == 2){
                notaFinalP1++;
                $('#rEA0').css("background-color", "#5ED188");
            }else{
                $('#rEA0').css("background-color", "#EF87A7");
            }

    }




    var notaFinalP2 = 0;
    function Resp2(){

        var resp = 1;

        for(var i=0; i<8; i++){
          if(i==1){resp=8}
          if(i==2){resp=16}
          if(i==3){resp=2}
          if(i==4){resp=-14}
          if(i==5){resp=1}
          if(i==6){resp=2}
          if(i==7){resp=2}

            if( (($('#rCEx'+i).val())) == resp ){
              notaFinalP2++;
                $('#rCEx'+i).css("background-color", "#5ED188");
            }else{
                $('#rCEx'+i).css("background-color", "#EF87A7");
            }

        }
        
    }




    var notaFinalP3 = 0;
    function Resp3(){

        var resp = 79;

        for(var i=0; i<7; i++){
          if(i==1){resp=60}
          if(i==2){resp=1877}
          if(i==3){resp=9}
          if(i==4){resp=9}
          if(i==5){resp=2}
          if(i==6){resp=7}

            if( (($('#rSm'+i).val())) == resp ){
              notaFinalP3++;
                $('#rSm'+i).css("background-color", "#5ED188");
            }else{
                $('#rSm'+i).css("background-color", "#EF87A7");
            }

        }
        
    }





    var notaFinalP4 = 0;
    function Resp4(){

            if($('#rCA0').val() == 9.90){
                notaFinalP4++;
                $('#rCA0').css("background-color", "#5ED188");
            }else{
                $('#rCA0').css("background-color", "#EF87A7");
            }

    }



    var notaFinalP5 = 0;
    function Resp5(){

            if($('#rDAC0').val() == 16){
                notaFinalP5++;
                $('#rDAC0').css("background-color", "#5ED188");
            }else{
                $('#rDAC0').css("background-color", "#EF87A7");
            }

            if($('#rDAC1').val() == 2){
                notaFinalP5++;
                $('#rDAC1').css("background-color", "#5ED188");
            }else{
                $('#rDAC1').css("background-color", "#EF87A7");
            }

    }





    var notaFinalP6 = 0;
    function Resp6(){

        var resp = '0';

        for(var i=0; i<58; i++){
          if(i==1){resp='9'}
          if(i==2){resp='9/30'}
          if(i==3){resp='9'}
          if(i==4){resp='9/30'}
          if(i==5){resp='1'}
          if(i==6){resp='10'}
          if(i==7){resp='10/30'}
          if(i==8){resp='19'}
          if(i==9){resp='19/30'}
          if(i==10){resp='2'}
          if(i==11){resp='6'}
          if(i==12){resp='6/30'}
          if(i==13){resp='25'}
          if(i==14){resp='25/30'}
          if(i==15){resp='3'}
          if(i==16){resp='3'}
          if(i==17){resp='3/30'}
          if(i==18){resp='28'}
          if(i==19){resp='28/30'}
          if(i==20){resp='4'}
          if(i==21){resp='1'}
          if(i==22){resp='1/30'}
          if(i==23){resp='29'}
          if(i==24){resp='29/30'}
          if(i==25){resp='30'}
          if(i==26){resp='1'}
          if(i==27){resp=''}
          if(i==28){resp=''}

          if(i==29){resp='9'}
          if(i==30){resp='1'}
          if(i==31){resp='1/12'}
          if(i==32){resp='1'}
          if(i==33){resp='1/12'}
          if(i==34){resp='10'}
          if(i==35){resp='2'}
          if(i==36){resp='2/12'}
          if(i==37){resp='3'}
          if(i==38){resp='3/12'}
          if(i==39){resp='11'}
          if(i==40){resp='3'}
          if(i==41){resp='3/12'}
          if(i==42){resp='6'}
          if(i==43){resp='6/12'}
          if(i==44){resp='12'}
          if(i==45){resp='3'}
          if(i==46){resp='3/12'}
          if(i==47){resp='9'}
          if(i==48){resp='9/12'}
          if(i==49){resp='13'}
          if(i==50){resp='3'}
          if(i==51){resp='3/12'}
          if(i==52){resp='12'}
          if(i==53){resp='12/12'}
          if(i==54){resp='12'}
          if(i==55){resp='1'}
          if(i==56){resp=''}
          if(i==57){resp=''}


            if( (($('#rBT'+i).val())).replace(/ |,|-/g, "") == resp ){
              notaFinalP6++;
                $('#rBT'+i).css("background-color", "#5ED188");
            }else{
                $('#rBT'+i).css("background-color", "#EF87A7");
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
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp5();
        Resp6();
                
        var nota1 = (notaFinalP1);
        var nota2 = (notaFinalP2*1.5)/8;
        var nota3 = (notaFinalP3*1.5)/7;
        var nota4 = (notaFinalP4);
        var nota5 = (notaFinalP5)/2;
        var nota6 = (notaFinalP6*3)/58;
        var nota7 = parseFloat($('#calificacion0').val());

        
            
        var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7).toFixed(2);

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
