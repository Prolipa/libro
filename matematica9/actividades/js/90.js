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

        var select;

        var tr = [];
        for(var i=0; i<7; i++){
          select = '<select class="form-control respuestas" id="rEVA'+i+'"> <option></option> <option>Primer grado</option> <option>Segundo grado</option> <option>Tercero grado</option> <option>Cuarto grado</option> <option>Quinto grado</option> <option>Sexto grado</option> <option>Séptimo grado</option> <option>Octavo grado</option> <option>Noveno grado</option> <option>Grado Cero</option> </select>';
          
          var op = ['− 3xy','5/3 a<sup>3</sup> b<sup>2</sup> c<sup>4</sup>','7','3 m<sup>3</sup> n<sup>2</sup>','-7/2 z','√6 xyz<sup>2</sup>','0,2 p q<sup>5</sup>'];


          tr[i] = '<tr>'+
                  '<td>'+op[i]+'</td>'+
                  '<td>'+select+'</td>'+
                '</tr>';         
        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#tablaCompletar").append( item );
        });


    }






    function Preg2(){

        var select;

        var tr = [];
        for(var i=0; i<6; i++){
          select = '<select class="form-control respuestas" id="rDGP'+i+'"> <option></option> <option>Polinomio de tercer grado</option> <option>Polinomio de sexto grado</option> <option>Polinomio de quinto grado</option> <option>Polinomio de tercer grado</option> <option>Polinomio de cuarto grado</option> <option>Polinomio de segundo grado</option></select>';
          
          var op = ['4x³ – 1 + 3x ²','1/2 x <sup>5</sup>  + ​x <sup>6</sup>   − ​ 3/2 x','− x <sup>5</sup>   + ​ 3/2 x³ − ​2/3 x²','− ((x - 4) / 3) + ((4 - x + x³) / 2)','−3 x <sup>4</sup> y + 5 x <sup>3</sup> y <sup>2</sup> + 10','2 x <sup>2</sup> y − 5xy + 5'];


          tr[i] = '<div class="col-sm-6"><br><li>'+
                  '<span class="np0">'+op[i]+'</span>'+
                  '<br>'+select+''+
                '</li><br></div>';         
        } 

        var tablaCompletar = tr;

        var contenidos1 = tablaCompletar;
        contenidos1.sort(f_randomico);

        $.each( contenidos1, function( i, item ) {
          $("#grados").append( item );
        });

    }




    function Preg4(){

        var tr = [];
        for(var i=0; i<4; i++){
          
          var op = ['–4x + 5 + 3x<sup>2</sup> + 4x<sup>3</sup>','3x – 4x<sup>3</sup> + 8 + 9x<sup>2</sup>','4x<sup>3</sup>y<sup>2</sup> – 5x + 6x<sup>2</sup>y + 3x<sup>4</sup>y<sup>3</sup>','4xy + 2x<sup>2</sup>y + 8'];

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


         var resp = ['Segundo grado','Noveno grado','Grado Cero','Quinto grado','Primer grado','Cuarto grado','Sexto grado'];

            for(var i=0; i<7; i++){

                if( (($('#rEVA'+i).val())) == resp[i] ){
                    notaFinalP1++;
                    $('#rEVA'+i).css("background-color", "#5ED188");
                }else{
                    $('#rEVA'+i).css("background-color", "#EF87A7");
                }

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


         var resp = ['Monomios','Binomios','Trinomios','Polinomios'];

            for(var i=0; i<4; i++){

                if( (($('#rCOG'+i).val())) == resp[i] ){
                    notaFinalP3++;
                    $('#rCOG'+i).css("background-color", "#5ED188");
                }else{
                    $('#rCOG'+i).css("background-color", "#EF87A7");
                }

            }
            
    }




    var notaFinalP4 = 0;
    function Resp4(){

          var resp = ['4x^3+3x^2–4x+5','−4x^3+9x^2+3x+8','3x^4y^3+4x^3y^2+6x^2y–5x','2x^2y+4xy+8'];

            for(var i=0; i<4; i++){

                if( (($('#rOPD'+i).val())).toLowerCase().replace(/ |,|(|) /g, "") == resp[i] ){
                    notaFinalP4++;
                    $('#rOPD'+i).css("background-color", "#5ED188");
                }else{
                    $('#rOPD'+i).css("background-color", "#EF87A7");
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
      Preg4();

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        
        var nota1 = (notaFinalP1*2)/7;
        var nota2 = (notaFinalP2*3)/6;
        var nota3 = (notaFinalP3*2)/4;
        var nota4 = (notaFinalP4*3)/4;

        
        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
 confirmar();
       /*if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
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
        }*/
        
      });

  });
