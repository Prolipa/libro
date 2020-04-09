var titulos="aplico"
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

      var p0 = 0;
      var p1 = 0;
      var p2 = 0;
      var p3 = 0;
      var p4 = 0;
      var p5 = 0;
      var p6 = 0;
      var p7 = 0;

          var patron0 = Math.round(Math.random() * (10000) + 1);
          var patron1 = Math.round(Math.random() * (1000000) + 100);
          var patron2 = Math.round(Math.random() * (1000000) + 100);
          var patron3 = Math.round(Math.random() * (10000) + 1);
          var patron4 = Math.round(Math.random() * (100000) + 100);
          var patron5 = Math.round(Math.random() * (10000) + 1);
          
          if((patron0 % 25) != 0){
            p0 = patron0 * 25; 
          }else{
            p0=patron0;
          }
          
          if((patron1 % 2) != 0){
            p1 = patron1 + 1; 
          }else{
            p1=patron1;
          }

          if((patron2 % 2) != 0){
            p2 = patron2 + 1;
          }else{
            p2=patron2;
          }

          if((patron3 % 25) != 0){
            p3 = patron3 * 25;
          }else{
            p3=patron3;
          }  

          if((patron4 % 4) != 0){
            p4 = patron4 * 4;
          }else{
            p4=patron4;
          } 

          if((patron5 % 25) != 0){
            p5 = patron5 * 25;
          }else{
            p5=patron5;
          }                  

          var divisible = [];

          divisible[0] = '<span> a) &nbsp;&nbsp;</span><label class="n1" id="patron0"> ' + p0 + ' </label>&nbsp;&nbsp;<span> es divisible por &nbsp;&nbsp;</span><input type="text" class="form-control" style="width: 150px;" placeholder="Ej: 4,100" id="p0Div0">';
          divisible[1] = '<span> b) &nbsp;&nbsp;</span><label class="n1" id="patron1"> ' + p1 + ' &nbsp;&nbsp;</label><span> es divisible por &nbsp;&nbsp;</span><input type="text" class="form-control" style="width: 150px;" id="p0Div1">';
          divisible[2] = '<span> c) &nbsp;&nbsp;</span><label class="n1" id="patron2"> ' + p2 + ' &nbsp;&nbsp;</label><span> es divisible por &nbsp;&nbsp;</span><input type="text" class="form-control" style="width: 150px;" id="p0Div2">';
          divisible[3] = '<span> d) &nbsp;&nbsp;</span><label class="n1" id="patron3"> ' + p3 + ' &nbsp;&nbsp;</label><span> es divisible por &nbsp;&nbsp;</span><input type="text" class="form-control" style="width: 150px;" id="p0Div3">';
          divisible[4] = '<span> d) &nbsp;&nbsp;</span><label class="n1" id="patron4"> ' + p4 + ' &nbsp;&nbsp;</label><span> es divisible por &nbsp;&nbsp;</span><input type="text" class="form-control" style="width: 150px;" id="p0Div4">';                  
          divisible[5] = '<span> d) &nbsp;&nbsp;</span><label class="n1" id="patron5"> ' + p5 + ' &nbsp;&nbsp;</label><span> es divisible por &nbsp;&nbsp;</span><input type="text" class="form-control" style="width: 150px;" id="p0Div5">';

          $("#divisible0").append(divisible[0]);
          $("#divisible1").append(divisible[1]);
          $("#divisible2").append(divisible[2]);
          $("#divisible3").append(divisible[3]);
          $("#divisible4").append(divisible[4]);
          $("#divisible5").append(divisible[5]);

      }


      function Preg2(){

      var p0 = 0;
      var p1 = 0;
      var p2 = 0;
      var p3 = 0;
      var p4 = 0;
      var p5 = 0;

          var patron0 = Math.round(Math.random() * (10000) + 1);
          var patron1 = Math.round(Math.random() * (1000000) + 100);
          var patron2 = Math.round(Math.random() * (1000000) + 100);
          var patron3 = Math.round(Math.random() * (10000) + 1);
          var patron4 = Math.round(Math.random() * (100000) + 100);
          var patron5 = Math.round(Math.random() * (10000) + 1);
          
          if((patron0 % 25) != 0){
            p0 = patron0 * 25; 
          }else{
            p0=patron0;
          }
          
          if((patron1 % 4) != 0){
            p1 = patron1 + 4; 
          }else{
            p1=patron1;
          }

          if((patron2 % 4) != 0){
            p2 = patron2 + 4;
          }else{
            p2=patron2;
          }

          if((patron3 % 25) != 0){
            p3 = patron3 * 25;
          }else{
            p3=patron3;
          }  

          if((patron4 % 4) != 0){
            p4 = patron4 * 4;
          }else{
            p4=patron4;
          } 

          if((patron5 % 25) != 0){
            p5 = patron5 * 25;
          }else{
            p5=patron5;
          }                  

      var divisible = [];

      divisible[0] = '<tr>' +
       '<td colspan="1"><span class="n1" id="div0">434620</span></td>' +
       '<td colspan="11"><input type="text" class="form-control" value="Es divisible por 4 porque las dos últimas cifras del número son múltiplos de 4." disabled style="font-size: 17px; color: #6D1EB6;"></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div1">' + p1 + '</span></td>' +
       '<td colspan="11"><input type="text" class="form-control" style="font-size: 17px; color: #6D1EB6;"></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div2">' + p2 + '</span></td>' +
       '<td colspan="11"><input type="text" class="form-control" style="font-size: 17px; color: #6D1EB6;"></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div3">' + p3 + '</span></td>' +
       '<td colspan="11"><input type="text" class="form-control" style="font-size: 17px; color: #6D1EB6;"></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div4">' + p4 + '</span></td>' +
       '<td colspan="11"><input type="text" class="form-control" style="font-size: 17px; color: #6D1EB6;"></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="1"><span class="n1" id="div5">' + p5 + '</span></td>' +
       '<td colspan="11"><input type="text" class="form-control" style="font-size: 17px; color: #6D1EB6;"></td>' +
      '</tr> ';          


          $("#tablaDivisibles").append(divisible[0]);

      }


   function Preg3(){
    var p0 = 0;
    var p1 = 0;
    var p2 = 0;

          var patron0 = Math.round(Math.random() * (10000) + 1);
          var patron1 = Math.round(Math.random() * (1000000) + 100);
          var patron2 = Math.round(Math.random() * (1000000) + 100);
          
          if((patron0 % 25) != 0){
            p0 = patron0 * 25; 
          }else{
            p0=patron0;
          }
          
          if((patron1 % 4) != 0){
            p1 = patron1 * 4; 
          }else{
            p1=patron1;
          }

          if((patron2 % 4) != 0){
            p2 = patron2 * 4;
          }else{
            p2=patron2;
          }

    var contenidos = [
      ['<li><span>&nbsp;&nbsp;</span> <span class="n1" id="val0">' + p0 + '</span> &nbsp;&nbsp;<span>es divisible por1:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n1">4 </span><input class="checkmark" id="s1" type="checkbox" > &nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n2">25</span><input class="checkmark" id="s2" type="checkbox" > &nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n3">100</span><input class="checkmark" id="s3" type="checkbox" ></li><br>'], 
      ['<li><span>&nbsp;&nbsp;</span> <span class="n1" id="val1">' + p1 + '</span> &nbsp;&nbsp;<span>es divisible por2:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n4">4 </span><input class="checkmark" id="s4" type="checkbox" > &nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n5">25</span><input class="checkmark" id="s5" type="checkbox" > &nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n6">100</span><input class="checkmark" id="s6" type="checkbox" ></li><br>'],
      ['<li><span>&nbsp;&nbsp;</span> <span class="n1" id="val2">' + p2 + '</span> &nbsp;&nbsp;<span>es divisible por3:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n7">4 </span><input class="checkmark" id="s7" type="checkbox" > &nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n8">25</span><input class="checkmark" id="s8" type="checkbox" > &nbsp;&nbsp;&nbsp;&nbsp; <span class="n2" id="n9">100</span><input class="checkmark" id="s9" type="checkbox" ></li><br>'],          
      ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $( ".lista1" ).append( item );
    });
  }


var notaFinal1 = 0;
var notaFinalP1 = 0;
  function Resp1(){
    var str = '';
    var res = [];
    var cantDiv=0;
    for(var i=0; i<6; i++){
      if(((parseInt($('#patron'+i).text()))) % 4 == 0) {
        cantDiv++;
      }
      if(((parseInt($('#patron'+i).text()))) % 25 == 0) {
        cantDiv++;
      }
      if(((parseInt($('#patron'+i).text()))) % 100 == 0) {
        cantDiv++;
      }

      str = $('#p0Div'+i).val();
      res = str.split(",");
      if(((parseInt($('#patron'+i).text()))) % res[2] == 0){
        notaFinal1++;
         $('#p0Div'+i).css("background-color", "#5ED188");
      }else{         
         $('#p0Div'+i).css("background-color", "#EF87A7");
      }
      if(((parseInt($('#patron'+i).text()))) % res[1] == 0){
        notaFinal1++;
         $('#p0Div'+i).css("background-color", "#5ED188");
      }else{         
         $('#p0Div'+i).css("background-color", "#EF87A7");
      }
      if(((parseInt($('#patron'+i).text()))) % res[0] == 0){
        notaFinal1++;
         $('#p0Div'+i).css("background-color", "#5ED188");
      }else{         
         $('#p0Div'+i).css("background-color", "#EF87A7");
      }

      notaFinalP1=(notaFinal1*2.5)/cantDiv;
    }    
  }

var nota3 = 0;
      function Resp3(){         

          ///validar si es divisible para 100          
          var j=3;
          for(var i=0; i<10; i++){            
            if(i==0){
              j=3;
            }else{              
              j=j+3;
            }
            if((parseInt($('#val'+i).text()) % 100 == 0 )){
                if(document.getElementById('s'+j).checked) {
                  nota3++;
                $('#n'+j).css("background-color", "#57F737");
                }else{
                  nota3--;
                  $('#n'+j).css("background-color", "#EF87A7");
                }                            
            }else{
              if(j<=9){
                if(document.getElementById('s'+j).checked) {
                nota3--;
                $('#n'+j).css("background-color", "#EF87A7");
                }else{
                nota3++;  
                }
              }
              
            }
          }

          ///validar si es divisible para 4          
          var k=0;
          for(var l=1; l<8; l++){                     
            if(l == 1){
              k=1;
            }else{
              k=k+3;
            }
            if((parseInt($('#val'+(l-1)).text()) % 4 == 0 )){
                if(document.getElementById('s'+k).checked) {
                nota3++;
                $('#n'+k).css("background-color", "#57F737");
                }else{
                nota3--;
                $('#n'+k).css("background-color", "#EF87A7");
                }                            
            }else{
              if(k<=7){
                if(document.getElementById('s'+k).checked) {
                nota3--;
                $('#n'+k).css("background-color", "#EF87A7");
                }else{
                nota3++;  
                }
              }
              
            }
          }


      ///validar si es divisible para 25          
          var h=0;
          for(var m=2; m<9; m++){                     
            if(m == 2){
              h=2;
            }else{
              h=h+3;
            }
            if((parseInt($('#val'+(m-2)).text()) % 25 == 0 )){
                if(document.getElementById('s'+h).checked) {
                nota3++;
                $('#n'+h).css("background-color", "#57F737");
                }else{
                nota3--;
                  $('#n'+h).css("background-color", "#EF87A7");
                }                            
            }else{
              if(h<=8){
                if(document.getElementById('s'+h).checked) {
                nota3--;
                $('#n'+h).css("background-color", "#EF87A7");
                }else{
                nota3++;
                }  
              }
            }
          }
      }

    function Preg4(){

          var valProblema = (Math.round(Math.random() * (100) + 1))*25;                
          var problema = [];
          problema[0] = '<span>En una localidad rural, <span class="n1"> ' + valProblema + ' </span>personas forman grupos para realizar un' +
                        'trabajo comunitario. ¿Pueden dividirse en grupos de 4, de 25 o de' +
                        '100 personas? <b>Justifica</b> tu respuesta. </span>'+
                        '<br><br><textarea class="form-control" style="font-size: 17px; color: #6D1EB6;" id="prob0"></textarea>';

          $("#problema").append(problema[0]);
      }

      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg2();
            Preg3();
            Preg4();

           function confirmar() {
            Resp1();
            Resp3();

            var nota0 = notaFinalP1;
            var nota1 = parseFloat($('#calificacion1').val());
            var nota2 = parseFloat($('#calificacion2').val());

            var notaFinal3=0;  
            if(nota3<0){
              notaFinal3=0;
            }else{
              var c = () => Array.from(document.getElementsByTagName("INPUT")).filter(cur => cur.type === 'checkbox' && cur.checked).length > 0;              
               if(!c()) { // Si NO hay ningun checkbox chequeado.
                notaFinal3=0;                
               } else {
                notaFinal3 = (nota3/9)*2.5;
               }                        
            }

            var notaFinal = (nota0+nota1+nota2+notaFinal3).toFixed(2);
                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion1').val() != '' && $('#calificacion2').val() != '' ){
          confirmar();
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
        }else{
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').css("background-color", "#D50545");
        }


          
      });

      });
