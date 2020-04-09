
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Tiempo(){
        $('#div1').addClass('div1');
        $('#div2').addClass('div2');

    }


    function Preg3(){

        var palabras = [
        '<textarea id="rEO1" class="form-control respuestas escribe2" style="background-image: url(img/i1_p141_act3.jpg);"></textarea>',
        '<textarea id="rEO2" class="form-control respuestas escribe2" style="background-image: url(img/i1_p141_act3.jpg);"></textarea>',
        '<textarea id="rEO3" class="form-control respuestas escribe2" style="background-image: url(img/i1_p141_act3.jpg);"></textarea>',
        '<textarea id="rEO4" class="form-control respuestas escribe2" style="background-image: url(img/i1_p141_act3.jpg);"></textarea>',
        '<textarea id="rEO5" class="form-control respuestas escribe2" style="background-image: url(img/i1_p141_act3.jpg);"></textarea>',
        '<textarea id="rEC1" class="form-control respuestas escribe2" style="background-image: url(img/i2_p141_act3.jpg);"></textarea>',
        '<textarea id="rEC2" class="form-control respuestas escribe2" style="background-image: url(img/i2_p141_act3.jpg);"></textarea>',
        '<textarea id="rEC3" class="form-control respuestas escribe2" style="background-image: url(img/i2_p141_act3.jpg);"></textarea>',
        '<textarea id="rEC4" class="form-control respuestas escribe2" style="background-image: url(img/i2_p141_act3.jpg);"></textarea>',
        '<textarea id="rET1" class="form-control respuestas escribe2" style="background-image: url(img/i3_p141_act3.jpg);"></textarea>',
        '<textarea id="rET2" class="form-control respuestas escribe2" style="background-image: url(img/i3_p141_act3.jpg);"></textarea>',
        '<textarea id="rET3" class="form-control respuestas escribe2" style="background-image: url(img/i3_p141_act3.jpg);"></textarea>',
        ]; 

        palabras.sort(f_randomico);
        $("#palabras").append(palabras);
    }



    function Preg4(){

        var vocales = [
        '<div class="col-sm-3" align="center"> <img src="img/i1_p141_act4.jpg" class="img-responsive"><br> <select id="rOIE1" class="form-control respuestas"> <option></option> <option value="1">Vocales abiertas</option> <option>Vocales cerradas</option> </select> </div>',
        '<div class="col-sm-3" align="center"> <img src="img/i2_p141_act4.jpg" class="img-responsive"><br> <select id="rOIE2" class="form-control respuestas"> <option></option> <option>Vocales abiertas</option> <option value="1">Vocales cerradas</option> </select> </div>',
        '<div class="col-sm-3" align="center"> <img src="img/i3_p141_act4.jpg" class="img-responsive"><br> <select id="rOIE3" class="form-control respuestas"> <option></option> <option value="1">Vocales abiertas</option> <option>Vocales cerradas</option> </select> </div>',
        '<div class="col-sm-3" align="center"> <img src="img/i4_p141_act4.jpg" class="img-responsive"><br> <select id="rOIE4" class="form-control respuestas"> <option></option> <option>Vocales abiertas</option> <option value="1">Vocales cerradas</option> </select> </div>',
        ]; 

        vocales.sort(f_randomico);
        $("#vocales").append(vocales);
    }


    ///////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){
        var resp = ['b','u','e','n','o','p','o','e','t','a','z','o','i','l','a','r','a','d','i','o','c','e','j','a','s','c','u','t','i','s'];
            for( var i=1; i<31; i++ ){
                if($('#rSLP'+i ).val() == resp[i-1]){
                    notaFinalP1++;
                    $('#rSLP'+i).css("background-color", "#05D576");
                }else{
                    $('#rSLP'+i).css("background-color", "#D50545");
                }
            }
    }





    var notaFinalP2 = 0;
    function Resp2(){

        var resp = ['paila','huevo','diez','radio','cuatro','guitarra','cuaderno'];
        var i=0;
        var a=false;
        for( var k=1; k<8; k++ ){
            while(a==false && i<7){
                if( $('#rOGE'+k).val().toLowerCase().replace(/ /gi, "") == resp[i] ){
                    notaFinalP2++;
                    $('#rOGE'+k).css("background-color", "#05D576");
                    a=true;
                }else{
                    $('#rOGE'+k).css("background-color", "#D50545");
                }
                i++;
            }
            a=false;
            i=0;
        }
    }



    var notaFinalP3 = 0;
    function Resp3(){

        var resp1 = ['casa','lola','poma','pera','mano'];
        var resp2 = ['miel','rueda','paila','cuerda'];
        var resp3 = ['luz','mimí','viuda'];

        var i=0;
        var a=false;
        for( var k=1; k<6; k++ ){
            while(a==false && i<5){
                if( $('#rEO'+k).val().toLowerCase().replace(/ /gi, "") == resp1[i] ){
                    notaFinalP3++;
                    $('#rEO'+k).css("border-color", "#05D576");
                    a=true;
                }else{
                    $('#rEO'+k).css("border-color", "#D50545");
                }
                i++;
            }
            a=false;
            i=0;
        }



        var m=0;
        var a1=false;
        for( var k1=1; k1<5; k1++ ){
            while(a1==false && m<4){
                if( $('#rEC'+k1).val().toLowerCase().replace(/ /gi, "") == resp2[m] ){
                    notaFinalP3++;
                    $('#rEC'+k1).css("border-color", "#05D576");
                    a1=true;
                }else{
                    $('#rEC'+k1).css("border-color", "#D50545");
                }
                m++;
            }
            a1=false;
            m=0;
        }



        var m2=0;
        var a2=false;
        for( var k2=1; k2<4; k2++ ){
            while(a2==false && m2<3){
                if( $('#rET'+k2).val().toLowerCase().replace(/ /gi, "") == resp3[m2] ){
                    notaFinalP3++;
                    $('#rET'+k2).css("border-color", "#05D576");
                    a2=true;
                }else{
                    $('#rET'+k2).css("border-color", "#D50545");
                }
                m2++;
            }
            a2=false;
            m2=0;
        }
    }




    var notaFinalP4 = 0;
    function Resp4(){

            for( var i=1; i<5; i++ ){
                if($('#rOIE'+i ).val() == '1'){
                    notaFinalP4++;
                    $('#rOIE'+i).css("background-color", "#05D576");
                }else{
                    $('#rOIE'+i).css("background-color", "#D50545");
                }
            }
    }





    var notaFinalP5 = 0;
    function Resp5(){

        for( var i=1; i<11; i++ ){

            if($('#rLA'+i +'.pinta').text()){
                notaFinalP5++;
                $('#rLA'+i).css('color', '#05D576');
            }else{
                if($('#rLA'+i +'.tacha').text()){
                    notaFinalP5--;
                    $('#rLA'+i).css('color', '#D50545');
                }
            }
            

            if($('#rLT'+i +'.tacha').text()){
                notaFinalP5++;
                $('#rLT'+i).css('color', '#05D576');
            }else{
                if($('#rLT'+i +'.pinta').text()){
                    notaFinalP5--;
                    $('#rLT'+i).css('color', '#D50545');
                }
            }
           
        }
    }


    ///////////////////////////////////////////////
    $(document).ready(function() {
      Inicio();
      Preg3();
      Preg4();

      for( var i=1; i<11; i++ ){

        $('#rLA'+i).click(function(){
            if($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')
                $(this).addClass('tacha')  
            }else{
                $(this).removeClass('tacha')
                $(this).addClass('pinta')              
            }
        });

        $('#rLT'+i).click(function(){
            if($(this).hasClass('pinta')) {
                $(this).removeClass('pinta')
                $(this).addClass('tacha')  
            }else{
                $(this).removeClass('tacha')
                $(this).addClass('pinta')              
            }
        });

      }


      function confirmar() {
      	Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp5();

        var nota1 = (notaFinalP1*2)/30;
        var nota2 = (notaFinalP2*2)/7;
        var nota3 = (notaFinalP3*2)/12;
        var nota4 = (notaFinalP4*2)/4;

        var nota5;
        if( notaFinalP5<0 ){nota5=0}else{nota5 = (notaFinalP5*2)/20}
    

        var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
        confirmar();
        /*if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar();
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
        }*/

      });

  });