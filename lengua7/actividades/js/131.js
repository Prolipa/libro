
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


        var selecciona1 = [
        '<div align="center" class="col-sm-3" id="sECP3" style="padding: 5px; margin-right: 40px; border: 2px solid; border-radius: 10px; border-style: dotted; border-color: #242FB2; cursor: pointer; display: inline-block;">Título</div>',
        '<div align="center" class="col-sm-3" id="sECP1" style="padding: 5px; margin-right: 40px; border: 2px solid; border-radius: 10px; border-style: dotted; border-color: #B22424; cursor: pointer; display: inline-block;">Versos</div>',
        '<div align="center" class="col-sm-3" id="sECP4" style="padding: 5px; margin-right: 40px; border: 2px solid; border-radius: 10px; border-style: dotted; border-color: #24B274; cursor: pointer; display: inline-block;">Conclusión</div>',
        ]; 

        selecciona1.sort(f_randomico);
        $("#selecciona1").append(selecciona1);



        var selecciona2 = [
        '<div align="center" class="col-sm-3" id="sECP5" style="padding: 5px; margin-right: 40px; border: 2px solid; border-radius: 10px; border-style: dotted; border-color: #242FB2; cursor: pointer; display: inline-block;">Cotidianas</div>',
        '<div align="center" class="col-sm-3" id="sECP6" style="padding: 5px; margin-right: 40px; border: 2px solid; border-radius: 10px; border-style: dotted; border-color: #B22424; cursor: pointer; display: inline-block;">Precisas</div>',
        '<div align="center" class="col-sm-3" id="sECP2" style="padding: 5px; margin-right: 40px; border: 2px solid; border-radius: 10px; border-style: dotted; border-color: #24B274; cursor: pointer; display: inline-block;">Originales</div>',
        ]; 
        
        selecciona2.sort(f_randomico);
        $("#selecciona2").append(selecciona2);

    }



    //////////////////////////////////////////

    var notaFinalP1 = 0;
    function Resp1(){

        for(var i=1; i<7; i++){
            if( i<3 ){
                if($('#sECP'+(i) +'.pinta').text()){
                  notaFinalP1++;
                  $('#sECP'+i).css("background-color", "#5ED188");
                }/*else{
                  $('#sECP'+i).css("background-color", "#E3CB76");
                }*/
            }else{
                if($('#sECP'+(i) +'.pinta').text()){
                  notaFinalP1--;
                  $('#sECP'+i).css("background-color", "#EF87A7");
                }
            }
        }

    }
    



    $(document).ready(function() {
      Inicio();
      Preg1();

      for(var i=1; i<7; i++){////Preg1

            $('#sECP'+(i)).click(function(){
              if($(this).hasClass('pinta')) {
                  $(this).removeClass('pinta')
              }else{
                  $(this).addClass('pinta')
              }
            });
        }


      function confirmar() {
      	Resp1();

        var nota1;
        if( notaFinalP1<0 ){nota1=0}else{nota1 = (notaFinalP1*10)/2}

        var notaFinal = (nota1).toFixed(2);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
confirmar();
       /*if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }*/
        
      });

  });