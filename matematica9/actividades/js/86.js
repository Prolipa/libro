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

      var nERr0;
      var nERx0;
      var nER0;  
      var fracciones;

      for(var i=1; i<31; i=i+3){

        fracciones = '<div class="col-sm-6">'+
                      '<span class="col-sm-1 np2" ><li></li></span>'+
                      '<span class="col-sm-2">'+
                      '<span class="radical np0" style="font-size: 35px;"><span class="n-root" id="nER'+(i+2)+'"></span>√</span><span class="radicand3"><span style="font-size: 23px;" id="nER'+(i)+'"></span><sup id="nER'+(i+1)+'"></sup></span>'+
                      '</span>'+
                      '<span class="col-sm-9">'+
                      '= &nbsp;&nbsp;'+
                      '<input type="text" id="rER'+(i)+'" class="form-control respuestas" style="width: 60px;">'+
                      '<sup>'+
                      '<input type="text" id="rER'+(i+1)+'" class="form-control respuestas input_xs" style="width: 40px;"> <span style="font-size: 20px;">/</span>'+
                      '<input type="text" id="rER'+(i+2)+'" class="form-control respuestas input_xs" style="width: 40px;">'+
                      '</sup>'+
                      '</span>'+
                      '<br><br><br></div>';

        $('#fracciones').append(fracciones);

        nERr0 = Math.round(Math.random() * (9 - 2) + 2);
        nERx0 = Math.round(Math.random() * (9 - 1) + 2);
        nER0 = Math.round(Math.random() * (9 - 1) + 2);

        if(nERr0>7){nERr0='m';}
        if(nERx0>7){nERx0='n';}
        if(nER0>7){nER0='π';}

        $('#nER'+i).append(nER0);
        $('#nER'+(i+1)).append(nERr0);
        $('#nER'+(i+2)).append(nERx0);
      }

    }






    function Preg4(){

      var nEFRr0;
      var nEFRx0;
      var nEFR0;  
      var raices;

      for(var i=1; i<25; i=i+3){

        raices = '<div class="col-sm-6">'+
                  '<span class="col-sm-1 np2" ><li></li></span>'+
                  '<span class="nr0" id="nEFR'+(i+1)+'"></span>'+
                  '<sup class="expoR">'+
                  '<span id="nEFR'+(i+2)+'"></span> <span>/</span> <span id="nEFR'+(i)+'"></span>'+
                  '</sup> &nbsp;&nbsp; = &nbsp;&nbsp;'+
                  '<sup><input type="text" id="rEFR'+(i)+'" class="form-control respuestas input_xs" style="width: 35px;">'+
                  '</sup><span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                  '<input type="text" id="rEFR'+(i+1)+'" class="form-control respuestas" style="width: 50px; top: 2px; position: relative;">'+
                  '<sup><input type="text" id="rEFR'+(i+2)+'" class="form-control respuestas input_xs" style="width: 35px;"></sup></span>'+
                  '<br><br></div>';

        $('#raices').append(raices);

        nEFRr0 = Math.round(Math.random() * (9 - 2) + 2);
        nEFRx0 = Math.round(Math.random() * (9 - 2) + 2);
        nEFR0 = Math.round(Math.random() * (9 - 2) + 2);

        if(nEFRr0>7){nEFRr0='a';}
        if(nEFRx0>7){nEFRx0='q';}
        if(nEFR0>7){nEFR0='p';}

        $('#nEFR'+i).append(nEFR0);
        $('#nEFR'+(i+1)).append(nEFRr0);
        $('#nEFR'+(i+2)).append(nEFRx0);
      }

    }




    function Preg5(){

      var operaciones = [];
      var color = 'FBD4D5';

      for(var i=1; i<7; i++){
        if(i%2!=0){
          color = 'FCE8E9';
        }else{
          color = 'FBD4D5';
        }
        operaciones[i] ='<br><br><div class="col-sm-6" style="background-color: #'+color+'; border-radius: 10px;">'+
                        '<span class="col-sm-1 np2"><li></li></span><div class="col-sm-6">'+
                        '<img src="img/i'+i+'_p105_act5.jpg" class="img-responsive">'+
                        '</div>'+
                        '<div class="col-sm-5"><br>'+
                        '<select class="form-control respuestas" id="rAVF'+i+'">'+
                        '<option></option>'+
                        '<option>Verdadero</option>'+
                        '<option>Falso</option>'+
                        '</select>'+
                        '</div>'+
                        '</div><br><br>';
      }

      var contenidos1 = operaciones;

      contenidos1.sort(f_randomico);

      $.each( contenidos1, function( i, item ) {
        $("#operaciones").append( item );
      });



    }


    var notaFinalP1 = 0;
    function Resp1(){

        var resp = 20;

        for(var i=0; i<2; i++){
            if( (($('#rSE'+i).val())) == resp ){
                notaFinalP1++;
                $('#rSE'+i).css("background-color", "#5ED188");
            }else{
                $('#rSE'+i).css("background-color", "#EF87A7");
            }

        }

    }




    var notaFinalP2 = 0;
    function Resp2(){

        var resp;
        for(var i=1; i<31; i++){
          resp = $('#nER'+i).text();
         // alert(( (($('#rER'+i).val())).toLowerCase().replace(/ /g, "") +'=='+ resp ));

            if( (($('#rER'+i).val())).toLowerCase().replace(/ /g, "") == resp ){
                notaFinalP2++;
                $('#rER'+i).css("background-color", "#5ED188");
            }else{
                $('#rER'+i).css("background-color", "#EF87A7");
            }
        }

    }






    var notaFinalP4 = 0;
    function Resp4(){

        var resp;
        for(var i=1; i<25; i++){
          resp = $('#nEFR'+i).text();          

            if( (($('#rEFR'+i).val())).toLowerCase().replace(/ /g, "") == resp ){
                notaFinalP4++;
                $('#rEFR'+i).css("background-color", "#5ED188");
            }else{
                $('#rEFR'+i).css("background-color", "#EF87A7");
            }
        }

    }



    var notaFinalP5 = 0;
    function Resp5(){

          var resp = ['Falso','Verdadero','Falso','Falso','Verdadero','Verdadero'];

          for(var i=1; i<7; i++){
                if( (($('#rAVF'+i).val())) == resp[i-1] ){
                    notaFinalP5++;
                    $('#rAVF'+i).css("background-color", "#5ED188");
                }else{
                    $('#rAVF'+i).css("background-color", "#EF87A7");
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
      Preg4();
      Preg5();

      function confirmar() {
        Resp1();
        Resp2();
        Resp4();
        Resp5();
        

        var nota1 = (notaFinalP1);
        var nota2 = (notaFinalP2*2)/30;
        var nota3 = parseFloat($('#calificacion0').val());
        var nota4 = (notaFinalP4*2)/24;
        var nota5 = (notaFinalP5*2)/6;

        
        var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

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
