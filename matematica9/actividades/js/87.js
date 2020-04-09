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

      var nsCRb;
      var nCRb;
      var nCRx;
      var nER0;  
      var calcular_raiz;

      for(var i=1; i<11; i++){

        calcular_raiz = '<div class="col-sm-4">'+
                        '<span class="col-sm-1"><li></li></span>'+
                        '<div class="col-sm-10"><span class="np0" style="font-size: 25px;">'+
                        '<span class="n-root" id="nCRx'+i+'"></span>√</span>'+
                        '<span class="radicand3" id="nCRb'+i+'"></span> &nbsp;&nbsp; = &nbsp;&nbsp; '+
                        '<input type="number" id="rCRb'+i+'" class="form-control respuestas" style="width: 70px;">'+
                        '<br><br></div></div>';

        $('#calcular_raiz').append(calcular_raiz);

        nsCRb = Math.round(Math.random() * (8 - 1) + 1);
        nCRx = Math.round(Math.random() * (6 - 2) + 2);
        nCRb = Math.pow(nsCRb, nCRx);

        $('#nCRx'+i).append(nCRx);
        $('#nCRb'+i).append(nCRb);
      }

    }






    function Preg4(){

        var cuadrado_magico = [];
        
          cuadrado_magico = ['<tr>'+
                                '<td>'+
                                    '<span class="np0"><sup class="eR">3</sup>√</span><span class="radicand3" style="top: 2px; position: relative;">512</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0"><sup class="eR">3</sup>√</span><span class="radicand3" style="top: 2px; position: relative;">1</span>'+
                                '</td>'+
                                '<td>'+
                                    '<sup><input type="text" id="rCM0" class="form-control respuestas input_xs" style="width: 35px;">'+
                                    '</sup><span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCM1" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>'+
                                    '<sup><input type="text" id="rCM2" class="form-control respuestas input_xs" style="width: 35px;">'+
                                    '</sup><span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCM3" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                                '<td>'+
                                    '<sup><input type="text" id="rCM4" class="form-control respuestas input_xs" style="width: 35px;">'+
                                    '</sup><span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCM5" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0"><sup class="eR">3</sup>√</span><span class="radicand3" style="top: 2px; position: relative;">343</span>'+
                                '</td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>'+
                                    '<sup><input type="text" id="rCM6" class="form-control respuestas input_xs" style="width: 35px;">'+
                                    '</sup><span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCM7" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0"><sup class="eR">3</sup>√</span><span class="radicand3" style="top: 2px; position: relative;">729</span>'+
                                '</td>'+
                                '<td>'+                                 
                                    '<sup><input type="text" id="rCM8" class="form-control respuestas input_xs" style="width: 35px;">'+
                                    '</sup><span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCM9" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                            '</tr>',
                        ];
        

        var contenidos1 = cuadrado_magico;

        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#cuadrado_magico").append( item );
        });


    }





    function Preg5(){

      var cuadrado_magico = [];
        
          cuadrado_magico = ['<tr>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">256</span>'+
                                '</td>'+                                
                                '<td>'+
                                    '<span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCMr0" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCMr1" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">169</span>'+
                                '</td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>'+
                                    '<span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCMr2" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCMr3" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">100</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">64</span>'+
                                '</td>'+
                            '</tr>',
                            '<tr>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">81</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">49</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">36</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">144</span>'+
                                '</td>'+
                            '</tr>',
                            '<tr>'+
                               '<td>'+
                                    '<span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCMr4" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">196</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="np0">√</span><span class="radicand3" style="top: 2px; position: relative;">225</span>'+
                                '</td>'+
                                '<td>'+
                                    '<span class="radical np0" style="font-size: 35px;">√</span><span class="radicand3">'+
                                    '<input type="text" id="rCMr5" class="form-control respuestas" style="width: 60px; top: 2px; position: relative;">'+
                                    '</span>'+
                                '</td>'+
                            '</tr>',
                        ];
        

        var contenidos1 = cuadrado_magico;

        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#cuadrado_magico1").append( item );
        });


    }






    var notaFinalP2 = 0;
    function Resp2(){

        var resp;
        for(var i=1; i<11; i++){
            resp = Math.round(Math.pow((parseInt($('#nCRb'+i).text())), 1/(parseInt($('#nCRx'+i).text()))));
            //alert( (($('#rCRb'+i).val()))+' =='+ resp );

            if( (($('#rCRb'+i).val())) == resp ){
                notaFinalP2++;
                $('#rCRb'+i).css("background-color", "#5ED188");
            }else{
                $('#rCRb'+i).css("background-color", "#EF87A7");
            }
        }

    }






    var notaFinalP4 = 0;
    function Resp4(){

         var resp = [3,216,3,27,3,125,3,64,3,8];

          for(var i=0; i<10; i++){
                if( (($('#rCM'+i).val())) == resp[i] ){
                    notaFinalP4++;
                    $('#rCM'+i).css("background-color", "#5ED188");
                }else{
                    $('#rCM'+i).css("background-color", "#EF87A7");
                }

          }

    }



    var notaFinalP5 = 0;
    function Resp5(){

          var resp = [4,9,25,121,16,1];

          for(var i=0; i<6; i++){
                if( (($('#rCMr'+i).val())) == resp[i] ){
                    notaFinalP5++;
                    $('#rCMr'+i).css("background-color", "#5ED188");
                }else{
                    $('#rCMr'+i).css("background-color", "#EF87A7");
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
        Resp2();
        Resp4();
        Resp5();
        

        var nota1 = parseFloat($('#calificacion0').val());
        var nota2 = (notaFinalP2*2)/10;
        var nota3 = parseFloat($('#calificacion1').val());
        var nota4 = (notaFinalP4*2)/10;
        var nota5 = (notaFinalP5*2)/6;
        var nota6 = parseFloat($('#calificacion2').val());
        var nota7 = parseFloat($('#calificacion3').val());

        
        var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
        }
        
      });

  });
