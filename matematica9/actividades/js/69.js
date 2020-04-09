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

        var p0 = Math.round(Math.random() * (60 - (2)) + (2));
        var p1 = Math.round(Math.random() * (60 - (2)) + (2));
        var p2 = 'π';
        var p3 = (Math.random() * (60 - (2)) + (2)).toFixed(2);
        var p4 = Math.round(Math.random() * (-1 - (-60)) + (-60));

      var divisible = [];

      divisible = [
      ['<tr>' +
       '<td colspan="4"><span class="np3">ℕ</span></td>' +
       '<td colspan="2" id="ss0"><input class="checkmark" id="sn0" type="checkbox" ></td>' +
       '<td colspan="2" id="ss1"><input class="checkmark" id="sn1" type="checkbox" ></td>' +
       '<td colspan="2" id="ss2"><input class="checkmark" id="sn2" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="4"><span class="np3">ℤ</span></td>' +
       '<td colspan="2" id="ss3"><input class="checkmark" id="sn3" type="checkbox" ></td>' +
       '<td colspan="2" id="ss4"><input class="checkmark" id="sn4" type="checkbox" ></td>' +
       '<td colspan="2" id="ss5"><input class="checkmark" id="sn5" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="4"><span class="np3">ℚ</span></td>' +
       '<td colspan="2" id="ss6"><input class="checkmark" id="sn6" type="checkbox" ></td>' +
       '<td colspan="2" id="ss7"><input class="checkmark" id="sn7" type="checkbox" ></td>' +
       '<td colspan="2" id="ss8"><input class="checkmark" id="sn8" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="4"><span class="np3">ℚ'+"'"+'</span></td>' +
       '<td colspan="2" id="ss9"><input class="checkmark" id="sn9" type="checkbox" ></td>' +
       '<td colspan="2" id="ss10"><input class="checkmark" id="sn10" type="checkbox" ></td>' +
       '<td colspan="2" id="ss11"><input class="checkmark" id="sn11" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="4"><span class="np3">ℝ</span></td>' +
       '<td colspan="2" id="ss12"><input class="checkmark" id="sn12" type="checkbox" ></td>' +
       '<td colspan="2" id="ss13"><input class="checkmark" id="sn13" type="checkbox" ></td>' +
       '<td colspan="2" id="ss14"><input class="checkmark" id="sn14" type="checkbox" ></td>' +
      '</tr> ']
      ];          
      
      divisible.sort(f_randomico);

      $.each( divisible, function( i, item ) {
        $( "#tablaNumeros" ).append( item );
    });


      }


  function Preg2(){

        var suc = [];
        for(var i=0; i<24; i++){
          suc[i] = Math.round(Math.random() * (70 - 20) + 20);
        }

        var contenidos = [
            ['<br><li style="color: #3584F5;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: black;">De la diferencia <span class="np1">ℝ − ℚ</span> , ¿qué conjunto se obtiene?</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="rPregs0" class="form-control respuestas" style="width: 80%;"></li>'], 
            ['<br><li style="color: #3584F5;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: black;"><b>Escribe</b> dos números irracionales cuyo producto sea un número entero.</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="rPregs1" class="form-control respuestas" style="width: 80%;"></li>'], 
            ['<br><li style="color: #3584F5;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: black;">Entre dos números racionales siempre existe otro racional. Por ello se dice que el conjunto de los racionales es denso.<br>&nbsp;&nbsp;&nbsp;&nbsp;¿El conjunto <span class="np1">ℤ</span> es denso? ¿El conjunto <span class="np1">ℕ</span> es denso?</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<textarea rows="3" id="rPregs2" class="form-control respuestas" style="width: 80%;"></textarea></li>'], 
            ['<br><li style="color: #3584F5;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: black;">¿Por qué decimos que el conjunto <span class="np1">ℕ</span> de los números naturales es el más restringido entre los conjuntos numéricos?</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<textarea id="rPregs3" rows="3" class="form-control respuestas" style="width: 80%;"></textarea></li>'], 
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#pregs0").append( item );
      });

  }




  


  var notaFinalP1 = 0;
  function Resp1(){
  
        for(var i=0; i<14; i++){    
            if(i==1){
              i=2;
            }
            if(i==4){
              i=5;
            }
            if(i==11){
              i=12;
            }
            if(document.getElementById('sn'+i).checked) {
                notaFinalP1++;
                $('#ss'+i).css("background-color", "#5ED188");
            }else{
                notaFinalP1--;
                $('#ss'+i).css("background-color", "#EF87A7");
            }
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


            var nota1 = (notaFinalP1*3)/11;
            if(nota1 < 0){
              nota1 = 0;
            }
            var nota2 = parseFloat($('#calificacion0').val());
            var nota3 = ((parseFloat($('#txtNota1').text()))*3)/12;


            //alert(nota1+','+nota2+','+nota3);
            var notaFinal = (nota1+nota2+nota3);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
 
    if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
          
      });

  });
