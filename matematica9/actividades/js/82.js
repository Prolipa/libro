var titulos="preparo";
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

        var contenidos = [
              ['<div class="col-sm-3"><li class="literal" id="rVal0" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR0" name="sR00" value="1">&nbsp;&nbsp;<span class="np2">a&nbsp;&nbsp;<sup>9</sup><span style="font-size: 34px;">√</span><span class="radicand1">a<sup>4</sup>b<sup>4</sup></span></span></li></div>'],            
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np2">&nbsp;&nbsp;<sup>18</sup><span style="font-size: 34px;">√</span><span class="radicand1">a<sup>12</sup>b<sup>30</sup></span></span></li></div>'],            
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np2">a<sup>2 </sup> b<sup>2 </sup>&nbsp;&nbsp;<sup>9</sup><span style="font-size: 34px;">√</span><span class="radicand1">a<sup>3</sup>b<sup>3</sup></span></span></li></div>'],            
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR00" value="">&nbsp;&nbsp;<span class="np2">a&nbsp;&nbsp;<sup>3</sup><span style="font-size: 34px;">√</span><span class="radicand1">a<sup>2</sup>b<sup>2</sup></span></span></li></div>'],            
          ]
        contenidos.sort(f_randomico);

        $.each( contenidos, function( i, item ) {
          $("#simp0").append( item );
        });

    }





    function Preg2(){

        var contenidos = [
              ['<div class="col-sm-3"><li class="literal" id="rVal1" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR1" name="sR01" value="1">&nbsp;&nbsp;<span class="np2">1 + 2x + 2x<sup style="font-size: 17px;">2</sup></span></li></div>'],            
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp; <span class="np2"><span style="font-size: 35px;">√</span><span class="radicand1">(1 + x)</span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp; <span class="np2"><sup style="font-size: 17px;">4</sup><span style="font-size: 35px;">√</span><span class="radicand1">(1 + x)</span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp; <span class="np2">(1 + x)<sup style="font-size: 17px;">4</sup><span style="font-size: 35px;">√</span><span class="radicand1">(1 + x)</span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR01" value="">&nbsp;&nbsp; <span class="np2">(1 + x)<sup style="font-size: 17px;">3</sup></span></li></div>'],
          ]
        contenidos.sort(f_randomico);

        $.each( contenidos, function( i, item ) {
          $("#simp1").append( item );
        });

    }



    function Preg3(){

        var contenidos = [
              ['<div class="col-sm-3"><li class="literal" id="rVal2" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR2" name="sR02" value="1">&nbsp;&nbsp; <span class="np2">a<sup style="font-size: 17px;">4</sup>b<sup style="font-size: 17px;">4</sup>&nbsp;&nbsp;<sup style="font-size: 17px;">m</sup><span style="font-size: 35px;">√</span><span class="radicand1">a<sup style="font-size: 17px;">2n</sup>b<sup style="font-size: 17px;">2n</sup></span></span></li></div>'],            
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp; <span class="np2">ab &nbsp;<sup style="font-size: 17px;">m</sup><span style="font-size: 35px;">√</span><span class="radicand1">a<sup style="font-size: 17px;">2n</sup>b<sup style="font-size: 17px;">2n</sup></span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp; <span class="np2">a<sup style="font-size: 17px;">2</sup> b<sup style="font-size: 17px;">2</sup> &nbsp;<sup style="font-size: 17px;">m</sup><span style="font-size: 35px;">√</span><span class="radicand1">a<sup style="font-size: 17px;">n</sup>b<sup style="font-size: 17px;">n</sup></span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp; <span class="np2">a<sup style="font-size: 17px;">4</sup> b<sup style="font-size: 17px;">4</sup> &nbsp;<sup style="font-size: 17px;">n</sup><span style="font-size: 35px;">√</span><span class="radicand1">a<sup style="font-size: 17px;">2m</sup>b<sup style="font-size: 17px;">2m</sup></span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR02" value="">&nbsp;&nbsp; <span class="np2">a<sup style="font-size: 17px;">m</sup> b<sup style="font-size: 17px;">n</sup> &nbsp;<sup style="font-size: 17px;">4</sup><span style="font-size: 35px;">√</span><span class="radicand1">a<sup style="font-size: 17px;">2n</sup>b<sup style="font-size: 17px;">2n</sup></span></span></li></div>'],
          ]
        contenidos.sort(f_randomico);

        $.each( contenidos, function( i, item ) {
          $("#simp2").append( item );
        });

    }




    function Preg4(){

        var contenidos = [
              ['<div class="col-sm-3"><li class="literal" id="rVal3" style="border-radius: 10px;"><input class="checkmark" style="top: 5px; position: relative;" type="radio" id="sR3" name="sR03" value="1">&nbsp;&nbsp; <span class="np2">ab&nbsp;&nbsp;<sup style="font-size: 17px;">12</sup><span style="font-size: 35px;">√</span><span class="radicand1">a<sup style="font-size: 17px;">5</sup> b<sup style="font-size: 17px;">11</sup></span></span></li></div>'],            
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR03" value="">&nbsp;&nbsp; <span class="np2">a<sup style="font-size: 17px;">4</sup> b<sup style="font-size: 17px;">4</sup>&nbsp;&nbsp;<sup style="font-size: 17px;">6</sup><span style="font-size: 35px;">√</span><span class="radicand1">ab</span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR03" value="">&nbsp;&nbsp; <span class="np2">a<sup style="font-size: 17px;">5</sup> b<sup style="font-size: 17px;">11</sup>&nbsp;&nbsp;<sup style="font-size: 17px;">12</sup><span style="font-size: 35px;">√</span><span class="radicand1">ab</span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR03" value="">&nbsp;&nbsp; <span class="np2">a<sup style="font-size: 17px;">4</sup> b<sup style="font-size: 17px;">4</sup>&nbsp;&nbsp;<sup style="font-size: 17px;">6</sup><span style="font-size: 35px;">√</span><span class="radicand1">a<sup style="font-size: 17px;">5</sup> b<sup style="font-size: 17px;">5</sup></span></span></li></div>'],
              ['<div class="col-sm-3"><li class="literal"><input class="checkmark" style="top: 5px; position: relative;" type="radio" name="sR03" value="">&nbsp;&nbsp; <span class="np2">ab&nbsp;&nbsp;<sup style="font-size: 17px;">12</sup><span style="font-size: 35px;">√</span><span class="radicand1">a<sup style="font-size: 17px;">11</sup> b<sup style="font-size: 17px;">5</sup></span></span></li></div>'],
          ]
        contenidos.sort(f_randomico);

        $.each( contenidos, function( i, item ) {
          $("#simp3").append( item );
        });

    }




    function Preg9(){

         var p0 = Math.round(Math.random() * (60 - (2)) + (2));
        var p1 = Math.round(Math.random() * (60 - (2)) + (2));
        var p2 = 'π';
        var p3 = (Math.random() * (60 - (2)) + (2)).toFixed(3);
        var p4 = Math.round(Math.random() * (-1 - (-60)) + (-60));
        var p5 = Math.round(Math.random() * (60 - (2)) + (2));

      var divisible = [];

      divisible = [
      ['<tr>' +
       '<td colspan="2"><span class="np3" id="val0">' + p0 + '</span></td>' +
       '<td colspan="2" id="ss0"><input class="checkmark" id="sn0" type="checkbox" ></td>' +
       '<td colspan="2" id="ss1"><input class="checkmark" id="sn1" type="checkbox" ></td>' +
       '<td colspan="2" id="ss2"><input class="checkmark" id="sn2" type="checkbox" ></td>' +
       '<td colspan="2" id="ss3"><input class="checkmark" id="sn3" type="checkbox" ></td>' +
       '<td colspan="2" id="ss4"><input class="checkmark" id="sn4" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="2"><span class="np3" id="val1">' + p1 + '</span></td>' +
       '<td colspan="2" id="ss5"><input class="checkmark" id="sn5" type="checkbox" ></td>' +
       '<td colspan="2" id="ss6"><input class="checkmark" id="sn6" type="checkbox" ></td>' +
       '<td colspan="2" id="ss7"><input class="checkmark" id="sn7" type="checkbox" ></td>' +
       '<td colspan="2" id="ss8"><input class="checkmark" id="sn8" type="checkbox" ></td>' +
       '<td colspan="2" id="ss9"><input class="checkmark" id="sn9" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="2"><span class="np3" id="val2">' + p2 + '</span></td>' +
       '<td colspan="2" id="ss10"><input class="checkmark" id="sn10" type="checkbox" ></td>' +
       '<td colspan="2" id="ss11"><input class="checkmark" id="sn11" type="checkbox" ></td>' +
       '<td colspan="2" id="ss12"><input class="checkmark" id="sn12" type="checkbox" ></td>' +
       '<td colspan="2" id="ss13"><input class="checkmark" id="sn13" type="checkbox" ></td>' +
       '<td colspan="2" id="ss14"><input class="checkmark" id="sn14" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="2"><span class="np3" id="val3">' + p3 + '</span></td>' +
       '<td colspan="2" id="ss15"><input class="checkmark" id="sn15" type="checkbox" ></td>' +
       '<td colspan="2" id="ss16"><input class="checkmark" id="sn16" type="checkbox" ></td>' +
       '<td colspan="2" id="ss17"><input class="checkmark" id="sn17" type="checkbox" ></td>' +
       '<td colspan="2" id="ss18"><input class="checkmark" id="sn18" type="checkbox" ></td>' +
       '<td colspan="2" id="ss19"><input class="checkmark" id="sn19" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="2"><span class="np3" id="val4">' + p4 + '</span></td>' +
       '<td colspan="2" id="ss20"><input class="checkmark" id="sn20" type="checkbox" ></td>' +
       '<td colspan="2" id="ss21"><input class="checkmark" id="sn21" type="checkbox" ></td>' +
       '<td colspan="2" id="ss22"><input class="checkmark" id="sn22" type="checkbox" ></td>' +
       '<td colspan="2" id="ss23"><input class="checkmark" id="sn23" type="checkbox" ></td>' +
       '<td colspan="2" id="ss24"><input class="checkmark" id="sn24" type="checkbox" ></td>' +
      '</tr></tbody>'],
      ['<tr>' +
       '<td colspan="2"><span class="np3" id="val5"> -√' + p5 + '</span></td>' +
       '<td colspan="2" id="ss25"><input class="checkmark" id="sn25" type="checkbox" ></td>' +
       '<td colspan="2" id="ss26"><input class="checkmark" id="sn26" type="checkbox" ></td>' +
       '<td colspan="2" id="ss27"><input class="checkmark" id="sn27" type="checkbox" ></td>' +
       '<td colspan="2" id="ss28"><input class="checkmark" id="sn28" type="checkbox" ></td>' +
       '<td colspan="2" id="ss29"><input class="checkmark" id="sn29" type="checkbox" ></td>' +
      '</tr></tbody>']
      ];          
      
      divisible.sort(f_randomico);

      $.each( divisible, function( i, item ) {
        $( "#tablaNumeros" ).append( item );
    });

    }



      var notaFinalP1 = 0;
      function Resp1(){

        if(document.getElementById('sR0').checked){
           notaFinalP1++     
           $('#rVal0').css("background-color", "#5ED188");
        }else{
           $('#rVal0').css("background-color", "#EF87A7");
        }

      }



      var notaFinalP2 = 0;
      function Resp2(){

        if(document.getElementById('sR1').checked){
           notaFinalP2++     
           $('#rVal1').css("background-color", "#5ED188");
        }else{
           $('#rVal1').css("background-color", "#EF87A7");
        }

      }




      var notaFinalP3 = 0;
      function Resp3(){

        if(document.getElementById('sR2').checked){
           notaFinalP3++     
           $('#rVal2').css("background-color", "#5ED188");
        }else{
           $('#rVal2').css("background-color", "#EF87A7");
        }

      }



      var notaFinalP4 = 0;
      function Resp4(){

        if(document.getElementById('sR3').checked){
           notaFinalP4++     
           $('#rVal3').css("background-color", "#5ED188");
        }else{
           $('#rVal3').css("background-color", "#EF87A7");
        }

      }




      var notaFinalP9 = 0;
  function Resp9(){

    ///validar si es entero
        for(var i=0; i<8; i++){    
            if(i==3){
              i=5;
            }
            if(document.getElementById('sn'+i).checked) {
                notaFinalP9++;
                $('#ss'+i).css("background-color", "#5ED188");
            }else{
                notaFinalP9--;
                $('#ss'+i).css("background-color", "#EF87A7");
            }                            

        }

    ///validar si es π
            if(document.getElementById('sn13').checked) {
                notaFinalP9++;
                $('#ss13').css("background-color", "#5ED188");
            }else{
                notaFinalP9--;
                $('#ss13').css("background-color", "#EF87A7");
            } 

    ///validar si es decimal
            if(document.getElementById('sn17').checked) {
                notaFinalP9++;
                $('#ss17').css("background-color", "#5ED188");
            }else{
                notaFinalP9--;
                $('#ss17').css("background-color", "#EF87A7");
            } 

    ///validar si es -
          for(var j=21; j<23; j++){  
            if(document.getElementById('sn'+j).checked) {
                notaFinalP9++;
                $('#ss'+j).css("background-color", "#5ED188");
            }else{
                notaFinalP9--;
                $('#ss'+j).css("background-color", "#EF87A7");
            } 
          }

    ///validar si es R
          for(var j=4; j<25; j=j+5){
            if(document.getElementById('sn'+j).checked) {
                notaFinalP9++;
                $('#ss'+j).css("background-color", "#5ED188");
            }else{
                notaFinalP9--;
                $('#ss'+j).css("background-color", "#EF87A7");
            } 
          }


     ///validar si es IR
          for(var j=25; j<30; j++){
            if(document.getElementById('sn'+j).checked) {
                notaFinalP9--;
                $('#ss'+j).css("background-color", "#EF87A7");
            }else{
                notaFinalP9++;
                $('#ss'+j).css("background-color", "#5ED188");
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
      Preg4();
      Preg9();

      function confirmar() {
        Resp1();
        Resp2();
        Resp3();
        Resp4();
        Resp9();
        

        var nota1 = (notaFinalP1);
        var nota2 = (notaFinalP2);
        var nota3 = (notaFinalP3);
        var nota4 = (notaFinalP4);
        var nota5 = parseFloat($('#calificacion0').val());
        var nota6 = parseFloat($('#calificacion1').val());
        var nota7 = parseFloat($('#calificacion2').val());
        var nota8 = parseFloat($('#calificacion3').val());        
        var nota9 = ((notaFinalP9)/20);
        if(nota9 < 0){ nota9 = 0; }
        var nota10 = parseFloat($('#calificacion4').val());
        
            
        var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10);

            $("#txtNota").text(notaFinal);
            $('#Calificar').attr('disabled', true);
            $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {

       if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !='' && $('#calificacion4').val() !='' ){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
          $('#calificacion4').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion4').css("background-color", "#D50545");
        }
        
      });

  });
