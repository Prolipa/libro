
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

        var selecciona = [
            '<tr> <td align="justify">La higuera es pequeña.</td> <td id="sSTA7"><input type="checkbox" class="checkmark" id="STA7"></td> <td id="sSTA1"><input type="checkbox" class="checkmark" id="STA1"></td> </tr>',
            '<tr> <td align="justify">La higuera es áspera y fea.</td> <td id="sSTA2"><input type="checkbox" class="checkmark" id="STA2"></td> <td id="sSTA8"><input type="checkbox" class="checkmark" id="STA8"></td> </tr>',
            '<tr> <td align="justify">Su corteza es lisa y gris.</td> <td id="sSTA9"><input type="checkbox" class="checkmark" id="STA9"></td> <td id="sSTA3"><input type="checkbox" class="checkmark" id="STA3"></td> </tr>',
            '<tr> <td align="justify">No florece en primavera.</td> <td id="sSTA4"><input type="checkbox" class="checkmark" id="STA4"></td> <td id="sSTA10"><input type="checkbox" class="checkmark" id="STA10"></td> </tr>',
            '<tr> <td align="justify">Parece triste por no tener capullos.</td> <td id="sSTA5"><input type="checkbox" class="checkmark" id="STA5"></td> <td id="sSTA11"><input type="checkbox" class="checkmark" id="STA11"></td> </tr>',
            '<tr> <td align="justify">Produce un látex irritante.</td> <td id="sSTA12"><input type="checkbox" class="checkmark" id="STA12"></td> <td id="sSTA6"><input type="checkbox" class="checkmark" id="STA6"></td> </tr>',
        ]; 
        selecciona.sort(f_randomico);
        $("#selecciona1").append(selecciona);

    }



    //////////////////////////////////////////

    var notaFinalP2 = 0;
    function Resp2(){

        for(var j=1; j<13; j++){//cantidad de destinos

            if( j < 7 ){
                if( (document.getElementById('STA'+j).checked) ) {
                    notaFinalP2++;
                    $('#sSTA'+j).css("background-color", "#5ED188");
                }else{
                    $('#sSTA'+j).css("background-color", "#BDB653");
                }
            }else{
                if( (document.getElementById('STA'+j).checked) ) {
                    notaFinalP2--;
                    $('#sSTA'+j).css("background-color", "#D86C8A");
                }
            }

        }
    }
    



    $(document).ready(function() {
      Inicio();
      Preg2();


      function confirmar() {
      	Resp2();

        var nota1 = parseFloat($('#calificacion1').val());
        var nota2;
        if( notaFinalP2<0 ){nota2=0}else{nota2 = (notaFinalP2*2)/6}
        var nota3 = parseFloat($('#calificacion3').val());
        var nota4 = parseFloat($('#calificacion4').val());

        var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if( $('#calificacion1').val() !='' && $('#calificacion3').val() !='' && $('#calificacion4').val() !='' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion4').focus();
          $('#calificacion4').css("background-color", "#D50545");
        }
        
      });

  });