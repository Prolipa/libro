var titulos="aplico"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

      $.each( raiz1, function( i, item ) {
        $( ".lista1" ).append( item );
    });

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


      var ra0 = (Math.round(Math.random() * (1000) + 10));
      var ra1 = (Math.round(Math.random() * (1000) + 10));
      var ra2 = (Math.round(Math.random() * (1000) + 10));
      var ra3 = (Math.round(Math.random() * (1000) + 10));
      var ra4 = (Math.round(Math.random() * (1000) + 10));
      var ra5 = (Math.round(Math.random() * (1000) + 10));

      var raiz1 = [
          ['<li><span class="num">&nbsp;&nbsp;<sup>2</sup>&#8730; '+ ra0 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 100%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>3</sup>&#8730; '+ ra1 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 100%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>2</sup>&#8730; '+ ra2 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 100%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>3</sup>&#8730; '+ ra3 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 100%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>2</sup>&#8730; '+ ra4 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 100%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>3</sup>&#8730; '+ ra5 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 100%;"></span></li><br>'],          
      ]

      raiz1.sort(f_randomico);


    function Preg1(){
          var p0 = (Math.round(Math.random() * (1000) + 10));
          var p1 = (Math.round(Math.random() * (1000) + 10));
          var p2 = (Math.round(Math.random() * (1000) + 10));

      var raiz = [];

      raiz[0] = '<tr>' +
       '<td colspan="3" style="background-color: #76CBE2;" align="center"><span class="encabezados">Lenguaje verbal</span></td>' +
       '<td colspan="3" style="background-color: #76CBE2;" align="center"><span class="encabezados">Lenguaje matemático</span></td>' +
       '<td colspan="3" style="background-color: #76CBE2;" align="center"><span class="encabezados">Estimación</span></td>' +
       '<td colspan="3" style="background-color: #76CBE2;" align="center"><span class="encabezados">Comprobación</span></td>' +
      '</tr> ' +
      '<tr>' +
       '<td colspan="3" align="center">Raíz cúbica de <span id="val0"> ' + p0 + '</span></td>' +       
       '<td colspan="3" align="center"><sup><input type="number" id="sup0" class="form-control" style="width: 60px;"></sup>&#8730; <input type="number" id="num0" class="form-control"></td>' +
       '<td colspan="3" align="center"><input type="number" id="est0" class="form-control"></td>' +
       '<td colspan="3" align="center"><input type="number" id="comp0" class="form-control"><span id="r0" style="display: none;">'+ (Math.pow(p0, 1/3).toFixed(2)) +'</span></td>' +
      '</tr>' +
      '<tr>' +
       '<td colspan="3" align="center">Raíz cuadrada de <span id="val1"> ' + p1 + '</span></td>' +       
       '<td colspan="3" align="center"><sup><input type="number" id="sup1" class="form-control" style="width: 60px;"></sup>&#8730; <input type="number" id="num1" class="form-control"></td>' +
       '<td colspan="3" align="center"><input type="number" id="est1" class="form-control"></td>' +
       '<td colspan="3" align="center"><input type="number" id="comp1" class="form-control"><span id="r1" style="display: none;">'+ (Math.pow(p1, 1/2).toFixed(2)) +'</span></td>' +
      '</tr>' +
      '<tr>' +
       '<td colspan="3" align="center">Raíz cúbica de <span id="val2"> ' + p2 + '</span></td>' +       
       '<td colspan="3" align="center"><sup><input type="number" id="sup2" class="form-control" style="width: 60px;"></sup>&#8730; <input type="number" id="num2" class="form-control"></td>' +
       '<td colspan="3" align="center"><input type="number" id="est2" class="form-control"></td>' +
       '<td colspan="3" align="center"><input type="number" id="comp2" class="form-control"><span id="r2" style="display: none;">'+ (Math.pow(p2, 1/3).toFixed(2)) +'</span></td>' +
      '</tr>';          


          $("#tablaRaiz").append(raiz[0]);       

      }


    function Preg3(){
      var ra0 = (Math.round(Math.random() * (1000) + 10));
      var ra1 = (Math.round(Math.random() * (1000) + 10));
      var ra2 = (Math.round(Math.random() * (1000) + 10));
      var ra3 = (Math.round(Math.random() * (1000) + 10));
      var ra4 = (Math.round(Math.random() * (1000) + 10));
      var ra5 = (Math.round(Math.random() * (1000) + 10));

      var rRa0 = (parseInt(Math.pow(ra0, 1/2)));
      var rRa1 = (parseInt(Math.pow(ra1, 1/2)));
      var rRa2 = (parseInt(Math.pow(ra2, 1/3)));
      var rRa3 = (parseInt(Math.pow(ra3, 1/2)));
      var rRa4 = (parseInt(Math.pow(ra4, 1/3)));
      var rRa5 = (parseInt(Math.pow(ra5, 1/3)));

      var encerrar = [];

      encerrar[0] = ' a) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730; <span id="val0">'+ ra0 +'</span></span>&nbsp;&nbsp;= &nbsp;&nbsp;<input type="number" class="form-control"><br><br>' +
      '<input class="checkmark" type="radio" id="sR0" name="sR00" value="1"><span id="n0">'+rRa0+' y ' +((rRa0)+1) + '</span>' + 
      '<input class="checkmark" type="radio" name="sR00" value="">'+(rRa0-2)+' y ' +((rRa0)-1) +      
      '<input class="checkmark" type="radio" name="sR00" value="">'+((rRa0)+2)+' y ' +((rRa0)+3);

      encerrar[1] = ' b) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730; <span id="val1">'+ ra1 +'</span></span>&nbsp;&nbsp;= &nbsp;&nbsp;<input type="number" class="form-control"><br><br>' +
      '<input class="checkmark" type="radio" name="sR01" value="">'+(rRa1-2)+' y ' +((rRa1)-1) +
      '<input class="checkmark" type="radio" id="sR1" name="sR01" value="1"><span id="n1">'+rRa1+' y ' +((rRa1)+1) + '</span>' + 
      '<input class="checkmark" type="radio" name="sR01" value="">'+((rRa1)+2)+' y ' +((rRa1)+3);

      encerrar[2] = ' b) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730; <span id="val2">'+ ra2 +'</span></span>&nbsp;&nbsp;= &nbsp;&nbsp;<input type="number" class="form-control"><br><br>' +
      '<input class="checkmark" type="radio" id="sR2" name="sR02" value="1"><span id="n2">'+rRa2+' y ' +((rRa2)+1) + '</span>' + 
      '<input class="checkmark" type="radio" name="sR02" value="">'+(rRa2-2)+' y ' +((rRa2)-1) +      
      '<input class="checkmark" type="radio" name="sR02" value="">'+((rRa2)+2)+' y ' +((rRa2)+3);

      encerrar[3] = ' b) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730; <span id="val3">'+ ra3 +'</span></span>&nbsp;&nbsp;= &nbsp;&nbsp;<input type="number" class="form-control"><br><br>' +
      '<input class="checkmark" type="radio" name="sR03" value="">'+(rRa3-2)+' y ' +((rRa3)-1) +      
      '<input class="checkmark" type="radio" name="sR03" value="">'+((rRa3)+2)+' y ' +((rRa3)+3) +
      '<input class="checkmark" type="radio" id="sR3" name="sR03" value="1"><span id="n3">'+rRa3+' y ' +((rRa3)+1) + '</span>';

      encerrar[4] = ' b) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730; <span id="val4">'+ ra4 +'</span></span>&nbsp;&nbsp;= &nbsp;&nbsp;<input type="number" class="form-control"><br><br>' +
      '<input class="checkmark" type="radio" name="sR04" value="">'+(rRa4-2)+' y ' +((rRa4)-1) +
      '<input class="checkmark" type="radio" id="sR4" name="sR04" value="1"><span id="n4">'+rRa4+' y ' +((rRa4)+1) + '</span>' + 
      '<input class="checkmark" type="radio" name="sR04" value="">'+((rRa4)+2)+' y ' +((rRa4)+3);

      encerrar[5] = ' b) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730; <span id="val5">'+ ra5 +'</span></span>&nbsp;&nbsp;= &nbsp;&nbsp;<input type="number" class="form-control"><br><br>' +
      '<input class="checkmark" type="radio" name="sR05" value="">'+(rRa5-2)+' y ' +((rRa5)-1) +      
      '<input class="checkmark" type="radio" name="sR05" value="">'+((rRa5)+2)+' y ' +((rRa5)+3) +
      '<input class="checkmark" type="radio" id="sR5" name="sR05" value="1"><span id="n5">'+rRa5+' y ' +((rRa5)+1) + '</span>';    

      
      $("#encerrar0").append(encerrar[0]); 
      $("#encerrar1").append(encerrar[1]);  
      $("#encerrar2").append(encerrar[2]);  
      $("#encerrar3").append(encerrar[3]);  
      $("#encerrar4").append(encerrar[4]);  
      $("#encerrar5").append(encerrar[5]);      

    }
 

    function Preg4(){            
          var problema = [];
          problema[0] = '<span>Un espejo de forma cuadrada tiene 256 cm2 de superficie. ¿Cuánto mide el lado del espejo? <b>Expresa</b> tu ' +
                        ' respuesta en forma de radicación.</span>'+
                        '<br><br><textarea class="form-control" style="font-size: 17px; color: #6D1EB6;" id="prob0"></textarea>';

          $("#problema").append(problema[0]);
          document.getElementById("prob0").value = '√';
      }

var notaFinalP1 = 0;
    function Resp1(){      
      var s=0;
    for(var i=0; i<3; i++){
      if((parseFloat($('#r'+i).text()) == $('#est'+i).val()) ) {
        $('#est'+i).css("background-color", "#5ED188");
        notaFinalP1++;
      }else{
        $('#est'+i).css("background-color", "#EF87A7");
      }

      if((parseFloat($('#val'+i).text()) == $('#num'+i).val())) {
      $('#num'+i).css("background-color", "#5ED188");
      notaFinalP1++;
      }else{
       $('#num'+i).css("background-color", "#EF87A7");
      }
      
      if(i!=1){
        s=3;
      }else{
        s=2;
      }
      
      if($('#sup'+i).val() == s){
        $('#sup'+i).css("background-color", "#5ED188");
        notaFinalP1++;
      }else{
        $('#sup'+i).css("background-color", "#EF87A7");
      }
    }   
  }

  var notaFinalP3 = 0;
  function Resp3(){
    var color = "";

  for(var i=0; i<6; i++){
      if(document.getElementById('sR'+i).checked){
       notaFinalP3++
       color = "#5ED188";       
       $('#n'+i).css("background-color", color);
    }else{
      color = "#EF87A7";
       $('#n'+i).css("background-color", color);
    }
    }    

  }


      function Cargar() {   
          location.reload(true);
      }


      $(document).ready(function() {
            Inicio();
            Preg1();
            Preg3();
            Preg4();

    
           function confirmar() {
            Resp1();
            Resp3();

            var nota2 = parseFloat($('#calificacion0').val());
            var nota4 = parseFloat($('#calificacion1').val());
            var nota3 = ((notaFinalP3*2.5)/6);
            var nota1 = ((notaFinalP1*2.5)/9)

            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        if($('#calificacion0').val() !='' && $('#calificacion1').val()!=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').css("background-color", "#D50545");
        }          
      });
    });
