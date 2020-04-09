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

         var resp = [20,65,115,150,165,175,75.28,84.5,94.64,81,97.1];

            for(var i=0; i<11; i++){             
                if( (($('#rTDT'+i).val())) == resp[i] ){
                    notaFinalP1++;
                    $('#rTDT'+i).css("background-color", "#5ED188");
                }else{
                    $('#rTDT'+i).css("background-color", "#EF87A7");
                }

            }
    }




  


    function Cargar() {   
        location.reload(true);
    }


    $(document).ready(function() {
      Inicio();

      function confirmar() {
        Resp1();

        
        var nota1 = (notaFinalP1);

        
        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
confirmar();
      /* if( $('#calificacion0').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }*/
        
      });

  });
