
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

        var pregunta = [];          
          var val0 = (Math.round(Math.random() * (100) + 10));
          var val1 = (Math.round(Math.random() * (100) + 10));
          var val2 = (Math.round(Math.random() * (100) + 10));
          var val3 = (Math.round(Math.random() * (100) + 10));
   
          pregunta[0] = '<span>a) &nbsp;Patron:  &nbsp;<select class="form-control" id="p1Sel0" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" class="form-control" id="p1Pat0" style="width: 90px;"> &nbsp;&nbsp; ' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="val0">'+val0+'</span>; &nbsp;&nbsp; ' +
          '<input type="number" id="p1_0_Suc0" value="'+val0+'" style="display:none;">' +
          '<input type="number" class="form-control" id="p1_0_Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_0_Suc5" style="width: 90px;">; <br><br>';

          pregunta[1] = '<span>b) &nbsp;Patron:  &nbsp;<select class="form-control" id="p1Sel1" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" class="form-control" id="p1Pat1" style="width: 90px;"> &nbsp;&nbsp;' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="val1">'+val1+'</span>; &nbsp;&nbsp; ' +
          '<input type="number" id="p1_1_Suc0" value="'+val1+'" style="display:none;">' +
          '<input type="number" class="form-control" id="p1_1_Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_1_Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_1_Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_1_Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_1_Suc5" style="width: 90px;">; <br><br>';

          pregunta[2] = '<span>c) &nbsp;Patron:  &nbsp;<select class="form-control" id="p1Sel2" style="font-size: 17px;"><option></option><option>+</option><option>-</option><option>x</option><option>÷</option></select>' +
          '<input type="number" class="form-control" id="p1Pat2" style="width: 90px;"> &nbsp;&nbsp; ' +
          'Sucesión: &nbsp;&nbsp;<span class="n0" id="val2">'+val2+'</span>; &nbsp;&nbsp; ' +
          '<input type="number" id="p1_2_Suc0" value="'+val2+'" style="display:none;">' +
          '<input type="number" class="form-control" id="p1_2_Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_2_Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_2_Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_2_Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1_2_Suc5" style="width: 90px;">; <br><br>';

          $("#pregunta1_0").append(pregunta[0]);
          $("#pregunta1_1").append(pregunta[1]);
          $("#pregunta1_2").append(pregunta[2]);
          $("#pregunta1_3").append(pregunta[3]);
          
      }


   function Preg2(){            
          var pregunta = [];
          var patron = (Math.round(Math.random() * (1000 - 100) + 100));
          var patron1 = (Math.round(Math.random() * (1000 - 100) + 100));
          var val0 = (Math.round(Math.random() * (80000 - 50000) + 50000));
          var val1 = val0 - patron;
          var val2 = val1 - patron1;
          var val3 = val2 - patron;
          var val4 = val3 - patron1;
          var val5 = val4 - patron;

          var contenidos = [
            '<span id="nSucec0">'+val0+'</span>, ', '<span id="nSucec1">'+val1+'</span>, ', '<span id="nSucec2">'+val2+'</span>, ', 
            '<span id="nSucec3">'+val3+'</span>, ', '<span id="nSucec4">'+val4+'</span>, ', '<span id="nSucec5">'+val5+'</span>, ',
          
          ]

          contenidos.sort(f_randomico);
          $.each( contenidos, function( i, item ) {
        $( "#nums" ).append( item );
          });
      }

      var notaFinalP1 = 0;
      function Resp1(){
            var operacion = 0;
      var signo = '';
      
    for(var i=0; i<4; i++){
      signo = $('#p1Sel'+i).val();
      if(signo != ''){
        if(signo == '+'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) + (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP1++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == '-'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) - (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP1++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == 'x'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) * (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP1++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }

        if(signo == '÷'){
        for(var j=0; j<6; j++){
              operacion = ((parseInt($('#p1_'+i+'_Suc'+j).val())) / (parseInt($('#p1Pat'+i).val())));
              if(operacion == $('#p1_'+i+'_Suc'+(j+1)).val()) {
                notaFinalP1++;
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#5ED188");
              }else{
                $('#p1_'+i+'_Suc'+(j+1)).css("background-color", "#EF87A7");
              }              
          }
        }
      }else{
        for(var j=0; j<12; j++){             
          $('#p1_'+i+'_Suc'+j).css("background-color", "#EF87A7");           
        }

      }  
      }
        }

    var notaFinalP2 = 0;
      function Resp2(){

        if( $('#sig0').val() == '-') {
              notaFinalP2++;
              $('#sig0').css("background-color", "#5ED188");
        }else{
              $('#sig0').css("background-color", "#EF87A7");
        } 


        if( $('#sig1').val() == '-') {
              notaFinalP2++;
              $('#sig1').css("background-color", "#5ED188");
        }else{
              $('#sig1').css("background-color", "#EF87A7");
        } 



        if( $('#rpat0').val() == ( (parseInt($('#nSucec0').text())) - (parseInt($('#nSucec1').text())) ) ) {
              notaFinalP2++;
              $('#rpat0').css("background-color", "#5ED188");
        }else{
              $('#rpat0').css("background-color", "#EF87A7");
        }  


        if( $('#rpat1').val() == ( (parseInt($('#nSucec1').text())) - (parseInt($('#nSucec2').text())) ) ) {
              notaFinalP2++;
              $('#rpat1').css("background-color", "#5ED188");
        }else{
              $('#rpat1').css("background-color", "#EF87A7");
        }    

        var nums = (($('#nSucec0').text()))+','+(($('#nSucec1').text()))+','+(($('#nSucec2').text()))+','+(($('#nSucec3').text()))+','+(($('#nSucec4').text()))+','+(($('#nSucec5').text()));
          
        if( (($('#rNums').val()).replace(/ |<|>|-/g, "")) == nums ){
            notaFinalP2++;
            $('#rNums').css("background-color", "#5ED188");
        }else{
            $('#rNums').css("background-color", "#EF87A7");
        }    

      }



      var notaFinalP3 = 0;
      function Resp3() {

        if( $('#rProb0').val() == 'Cuarto' ) {
              notaFinalP3++;
              $('#rProb0').css("background-color", "#5ED188");
        }else{
              $('#rProb0').css("background-color", "#EF87A7");
        }  

      }




  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio();         
            Preg1();
            Preg2();


           function confirmar() {
            Resp1();
            Resp2();
            Resp3();

            var nota1 = (notaFinalP1*3)/15;
            var nota2 = (notaFinalP2*4)/5;
            var nota3 = (notaFinalP3)*3;
            
            var notaFinal = (nota1+nota2+nota3).toFixed(2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
confirmar();
       /* if($('#calificacion0').val() !='' && $('#calificacion1').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }    */     
      });
    });


