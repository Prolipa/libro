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


    function Preg1(){

        var tr = [];
        for(var i=0; i<4; i++){          
          
          var op = ['a2, b5, c1, d3, e4','a1, b2, c3, d4, e5','a1, b5, c2, d3, e4','a2, b4, c1, d3, e5'];


          tr[i] = '<div class="col-sm-3"><br><li id="rVal'+i+'" style="border-radius: 10px;">'+
                  '<input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR'+i+'" name="sR00" value="'+i+'">&nbsp;&nbsp;<span class="np1">'+op[i]+'</span>'+
                '</li><br></div>';  

        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#grados_abs").append( item );
        });


    }






    function Preg2(){

        var tr = [];
        for(var i=0; i<5; i++){
          
          var op = ['2/3 xy 2/3 x<sup>2</sup> y','−5mn y 10mn','2 x <sup>n + 1</sup> y − 1/2 x <sup>n + 1</sup>','√2/2 pq y -(√2/2) p','0,7rst<sup>3</sup> y 0,25rst<sup>3</sup>'];


          tr[i] = '<tr>'+
                  '<td><br>'+op[i]+'</td>'+
                  '<td><textarea class="form-control respuestas" rows="3"></textarea></td>'+
                '</tr>';         
        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#tablaCompletar").append( item );
        });


    }




    function Preg3(){

        var tr = [];
        for(var i=0; i<4; i++){
          
          var op = ['–8ax + 5ax − 9ax + 7ax','z<sup>3</sup> – 12az + 4z<sup>3</sup> – 6az + 6z<sup>3</sup>','1/2 xy − ​ 1/2 x<sup>2</sup>  + 2xy − ​ 1/4 x<sup>2</sup>  + 6xy','mp + 0,5mp + 3ap – 0,4mp + ap'];

          tr[i] = '<div class="col-sm-6"><br><li>'+
                  '<span class="np2">'+op[i]+'</span>'+
                  '<br><input type="text" class="form-control respuestas" id="rOPD'+i+'" style="width: 350px;" placeholder="Ej: 5x^3 + y^2">'+
                '</li><br></div>';         
        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#orden_polinomios").append( item );
        });

    }











    var notaFinalP1 = 0;
    function Resp1(){

         var resp = 0;
            if( (document.getElementById('sR0').checked) ){
                notaFinalP1++;
                $('#rVal0').css("background-color", "#5ED188");
            }else{
                $('#rVal0').css("background-color", "#EF87A7");
            }
    }





    var notaFinalP2 = 0;
    function Resp2(){


         var resp = ['Polinomio de tercer grado','Polinomio de sexto grado','Polinomio de quinto grado','Polinomio de tercer grado','Polinomio de cuarto grado','Polinomio de segundo grado'];

            for(var i=0; i<6; i++){

                if( (($('#rDGP'+i).val())) == resp[i] ){
                    notaFinalP2++;
                    $('#rDGP'+i).css("background-color", "#5ED188");
                }else{
                    $('#rDGP'+i).css("background-color", "#EF87A7");
                }

            }
            
    }



    var notaFinalP3 = 0;
    function Resp3(){


       var resp = ['-5ax','11z^3-18az','17/2xy-3/4x^2','1.1mp+4ap'];

            for(var i=0; i<4; i++){

                if( (($('#rOPD'+i).val())).toLowerCase().replace(/ |,|(|) /g, "") == resp[i] ){
                    notaFinalP3++;
                    $('#rOPD'+i).css("background-color", "#5ED188");
                }else{
                    $('#rOPD'+i).css("background-color", "#EF87A7");
                }

            }

            
    }



    var notaFinalP4 = 0;
    function Resp4(){

          var resp = ['3xy','12x','12xy','2x','15xy+14x','148'];

            for(var i=0; i<6; i++){

                if( (($('#rDA'+i).val())).toLowerCase().replace(/ |,|(|) /g, "") == resp[i] ){
                    notaFinalP4++;
                    $('#rDA'+i).css("background-color", "#5ED188");
                }else{
                    $('#rDA'+i).css("background-color", "#EF87A7");
                }

            }

    }
  


    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
    $(".panel-collapse").removeClass('in');
      Inicio();
      Preg1();
      Preg2();
      Preg3();

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        
        var nota1 = (notaFinalP1*2.5);
        var nota2 = parseFloat($('#calificacion0').val());
        var nota3 = (notaFinalP3*2.5)/4;
        var nota4 = (notaFinalP4*2.5)/6;

        
        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if( $('#calificacion0').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
        
      });

  });
