
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
          ['<li><span class="num">&nbsp;&nbsp;<sup>2</sup>&#8730; '+ ra0 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 80%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>3</sup>&#8730; '+ ra1 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 80%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>2</sup>&#8730; '+ ra2 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 80%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>3</sup>&#8730; '+ ra3 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 80%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>2</sup>&#8730; '+ ra4 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 80%;"></span></li><br>'],
          ['<li><span class="num">&nbsp;&nbsp;<sup>3</sup>&#8730; '+ ra5 +'</span> &nbsp;&nbsp;&nbsp;<span><input type="text" class="form-control respuestas" style="width: 80%;"></span></li><br>'],          
      ]

      raiz1.sort(f_randomico);




   function Preg2(){            
      var ra0 = Math.pow((Math.round(Math.random() * (20) + 5)),2);
      var ra1 = Math.pow((Math.round(Math.random() * (20) + 5)),2);
      var ra2 = Math.pow((Math.round(Math.random() * (20) + 5)),2);
      var ra3 = Math.pow((Math.round(Math.random() * (20) + 5)),3);
      var ra4 = Math.pow((Math.round(Math.random() * (20) + 5)),3);
      var ra5 = Math.pow((Math.round(Math.random() * (20) + 5)),3);

      var calcular = [];

      calcular[0] = ' a) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra0 +'   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcal0" style="display: none;">'+  (Math.pow(ra0, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal0" class="form-control respuestas" style="width: 100px;">' +
      '<sup><input type="number" id="excal0" class="form-control respuestas" style="width: 70px;"></sup>';

      calcular[1] = ' b) <span class="num">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra1 +'   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcal1" style="display: none;">'+  (Math.pow(ra1, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal1" class="form-control respuestas" style="width: 100px;">'+
      '<sup><input type="number" id="excal1" class="form-control respuestas" style="width: 70px;"></sup>';

      calcular[2] = ' c) <span class="num1">&nbsp;&nbsp;<sup>2</sup> &#8730;'+ ra2 +'   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcal2" style="display: none;">'+  (Math.pow(ra2, 1/2).toFixed(2)) +'</span>' +
      '<input type="number" id="cal2" class="form-control respuestas" style="width: 100px;">'+
      '<sup><input type="number" id="excal2" class="form-control respuestas" style="width: 70px;"></sup>';

      calcular[3] = ' d) <span class="num">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra3 +'   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcal3" style="display: none;">'+  (Math.pow(ra3, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal3" class="form-control respuestas" style="width: 100px;">'+
      '<sup><input type="number" id="excal3" class="form-control respuestas" style="width: 70px;"></sup>';

      calcular[4] = ' e) <span class="num1">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra4 +'   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcal4" style="display: none;">'+  (Math.pow(ra4, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal4" class="form-control respuestas" style="width: 100px;">'+
      '<sup><input type="number" id="excal4" class="form-control respuestas" style="width: 70px;"></sup>';

      calcular[5] = ' f) <span class="num">&nbsp;&nbsp;<sup>3</sup> &#8730;'+ ra5 +'   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcal5" style="display: none;">'+  (Math.pow(ra5, 1/3).toFixed(2)) +'</span>' +
      '<input type="number" id="cal5" class="form-control respuestas" style="width: 100px;">'+
      '<sup><input type="number" id="excal5" class="form-control respuestas" style="width: 70px;"></sup>';

      
      $("#calRaiz0").append(calcular[0]);
      $("#calRaiz1").append(calcular[1]);
      $("#calRaiz2").append(calcular[2]);
      $("#calRaiz3").append(calcular[3]);
      $("#calRaiz4").append(calcular[4]);
      $("#calRaiz5").append(calcular[5]);
      }



      function Preg3(){
        var exra0 = (Math.round(Math.random() * (9 - 2) + 2));
        var exra1 = (Math.round(Math.random() * (9 - 2) + 2));
        var exra2 = (Math.round(Math.random() * (9 - 2) + 2));
        var exra3 = (Math.round(Math.random() * (9 - 2) + 2));
        var exra4 = (Math.round(Math.random() * (9 - 2) + 2));
        var exra5 = (Math.round(Math.random() * (9 - 2) + 2));

        var ra0 = (Math.round(Math.random() * (18 - 5) + 5));
        var ra1 = (Math.round(Math.random() * (18 - 5) + 5));
        var ra2 = (Math.round(Math.random() * (18 - 5) + 5));
        var ra3 = (Math.round(Math.random() * (18 - 5) + 5));
        var ra4 = (Math.round(Math.random() * (18 - 5) + 5));
        var ra5 = (Math.round(Math.random() * (18 - 5) + 5));

        var calcular = [];

        calcular[0] = ' a) <span class="num1">&nbsp;&nbsp;'+ ra0 +'<sup id="rcalExPot0">'+exra0+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot0" style="display: none;">'+  (Math.pow(ra0, exra0)) +'</span>' +        
        '<sup><input type="number" id="excalPot0" class="form-control respuestas" style="width: 70px;"></sup>' +
        '<span class="np2">√</span><input type="number" id="calPot0" class="form-control respuestas" style="width: 130px;">';

        calcular[1] = ' b) <span class="num">&nbsp;&nbsp;'+ ra1 +'<sup id="rcalExPot1">'+exra1+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot1" style="display: none;">'+  (Math.pow(ra1, exra1)) +'</span>' +
        '<sup><input type="number" id="excalPot1" class="form-control respuestas" style="width: 70px;"></sup>'+
        '<span class="np2">√</span><input type="number" id="calPot1" class="form-control respuestas" style="width: 130px;">';

        calcular[2] = ' c) <span class="num1">&nbsp;&nbsp;'+ ra2 +'<sup id="rcalExPot2">'+exra2+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot2" style="display: none;">'+  (Math.pow(ra2, exra2)) +'</span>' +
        '<sup><input type="number" id="excalPot2" class="form-control respuestas" style="width: 70px;"></sup>'+
        '<span class="np2">√</span><input type="number" id="calPot2" class="form-control respuestas" style="width: 130px;">';

        calcular[3] = ' d) <span class="num">&nbsp;&nbsp;'+ ra3 +'<sup id="rcalExPot3">'+exra3+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot3" style="display: none;">'+  (Math.pow(ra3, exra3)) +'</span>' +
        '<sup><input type="number" id="excalPot3" class="form-control respuestas" style="width: 70px;"></sup>'+
        '<span class="np2">√</span><input type="number" id="calPot3" class="form-control respuestas" style="width: 130px;">';

        calcular[4] = ' e) <span class="num1">&nbsp;&nbsp;'+ ra4 +'<sup id="rcalExPot4">'+exra4+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot4" style="display: none;">'+  (Math.pow(ra4, exra4)) +'</span>' +
        '<sup><input type="number" id="excalPot4" class="form-control respuestas" style="width: 70px;"></sup>'+
        '<span class="np2">√</span><input type="number" id="calPot4" class="form-control respuestas" style="width: 130px;">';

        calcular[5] = ' f) <span class="num">&nbsp;&nbsp;'+ ra5 +'<sup id="rcalExPot5">'+exra5+'</sup>   =   </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="rcalPot5" style="display: none;">'+  (Math.pow(ra5, exra5)) +'</span>'+ 
        '<sup><input type="number" id="excalPot5" class="form-control respuestas" style="width: 70px;"></sup>' +
        '<span class="np2">√</span><input type="number" id="calPot5" class="form-control respuestas" style="width: 130px;">';

        
        $("#calPots0").append(calcular[0]);
        $("#calPots1").append(calcular[1]);
        $("#calPots2").append(calcular[2]);
        $("#calPots3").append(calcular[3]);
        $("#calPots4").append(calcular[4]);
        $("#calPots5").append(calcular[5]);


        ///act4

        var valMango = (Math.round(Math.random() * (800 - 200) + 200));
        $("#nPMan0").append(valMango);

      }


    var notaFinalP2 = 0;
      function Resp2(){
        var rexp = 2;
      for(var i=0; i<6; i++){
        if(i>2){rexp = 3;}        
          if(parseInt($('#cal'+i).val()) == (parseInt($('#rcal'+i).text())) && parseInt($('#excal'+i).val()) == rexp && parseInt($('#cal'+i).val()) != '') {
          notaFinalP2++;
          $('#cal'+i).css("background-color", "#5ED188");
          $('#excal'+i).css("background-color", "#5ED188");
          }else{
            $('#cal'+i).css("background-color", "#EF87A7");
            $('#excal'+i).css("background-color", "#EF87A7");
          }
        }

      }



      var notaFinalP3 = 0;
      function Resp3() {

      for(var i=0; i<6; i++){      
          if(parseInt($('#calPot'+i).val()) == (parseInt($('#rcalPot'+i).text())) && parseInt($('#excalPot'+i).val()) == (parseInt($('#rcalExPot'+i).text())) && parseInt($('#calPot'+i).val()) != '') {
          notaFinalP3++;
          $('#calPot'+i).css("background-color", "#5ED188");
          $('#excalPot'+i).css("background-color", "#5ED188");
          }else{
            $('#calPot'+i).css("background-color", "#EF87A7");
            $('#excalPot'+i).css("background-color", "#EF87A7");
          }
        }

      }




  function Cargar() {   
     location.reload(true);
     }


      $(document).ready(function() {
            Inicio();         
            Preg2();
            Preg3();


           function confirmar() {
            Resp2();
            Resp3();

            var nota1 = parseFloat($('#calificacion0').val());
            var nota2 = (notaFinalP2)/2;
            var nota3 = (notaFinalP3)/2;
            var nota4 = parseFloat($('#calificacion1').val());

            var notaFinal = (nota1+nota2+nota3+nota4).toFixed(2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
       if($('#calificacion0').val() !='' && $('#calificacion1').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
        }
      });
    });


