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
        var p0 = Math.round(Math.random() * (90 - (10)) + (10));
        var p1 = Math.round(Math.random() * (90 - (10)) + (10));
        var p2 = Math.round(Math.random() * (90 - (-30)) + (-30));
        var p3 = Math.round(Math.random() * (90 - (10)) + (10));
        var p4 = Math.round(Math.random() * (0 - (-10)) + (-10));
        var p5 = (Math.random() * (-1 - (-70)) + (-70)).toFixed(1);
        var p6 = Math.round(Math.random() * (90 - (10)) + (10));
        var p7 = (Math.random() * (7 - (-90)) + (-90)).toFixed(1);
        var p8 = Math.round(Math.random() * (90 - (60)) + (60));
        var p9 = (Math.random() * (90 - (60)) + (60)).toFixed(1);
        var p10 = Math.round(Math.random() * (7 - (-90)) + (-90));        


        $("#nSig0").append(p0);
        $("#nSig1").append(p1);
        $("#nSig2").append(p5);
        $("#nSig3").append(p6);
        $("#nSig4").append(p7);
        $("#nSig5").append(p8);
        $("#nSig6").append(p9);
        $("#nSig7").append(p10);
        $("#nSigp0").append(p2);
        $("#nSigp1").append(p3);
        $("#nSigp2").append(p4);


      }
     



  function Preg3(){


      var contenidos = [
            ['<div class="col-sm-6"><li class="literal"><span class="np2">&nbsp;&nbsp;&nbsp;&nbsp;Si a < b y c > 0, entonces ac < bc.</span>&nbsp;&nbsp;<br><input type="text" id="rPr0" class="form-control respuestas" style="width: 80%;"></li><br><br></div>'],
            ['<div class="col-sm-6"><li class="literal"><span class="np2">&nbsp;&nbsp;&nbsp;&nbsp;Si a < b y c < 0, entonces ac > bc.</span>&nbsp;&nbsp;<br><input type="text" id="rPr1" class="form-control respuestas" style="width: 80%;"></li><br><br></div>'],
            ['<div class="col-sm-6"><li class="literal"><span class="np2">&nbsp;&nbsp;&nbsp;&nbsp;Si a < 0 y b > 0, entonces ab < 0.</span>&nbsp;&nbsp;<br><input type="text" id="rPr2" class="form-control respuestas" style="width: 80%;"></li><br><br></div>'],
            ['<div class="col-sm-6"><li class="literal"><span class="np2">&nbsp;&nbsp;&nbsp;&nbsp;Si a < 0 y b < 0 entonces ab > 0.</span>&nbsp;&nbsp;<br><input type="text" id="rPr3" class="form-control respuestas" style="width: 80%;"></li><br><br></div>'],
            ['<div class="col-sm-6"><li class="literal"><span class="np2">&nbsp;&nbsp;&nbsp;&nbsp;Si a ≠ 0, entonces a2 > 0.</span>&nbsp;&nbsp;<br><input type="text" id="rPr3" class="form-control respuestas" style="width: 80%;"></li><br><br></div>'],
            ['<div class="col-sm-6"><li class="literal"><span class="np2">&nbsp;&nbsp;&nbsp;&nbsp;a > 0 si y solo si a/1 > 0.</span>&nbsp;&nbsp;<br><input type="text" id="rPr3" class="form-control respuestas" style="width: 80%;"></li><br><br></div>'],
            ['<div class="col-sm-6"><li class="literal"><span class="np2">&nbsp;&nbsp;&nbsp;&nbsp;a < 0 si y solo si a/1 < 0.</span>&nbsp;&nbsp;<br><input type="text" id="rPr3" class="form-control respuestas" style="width: 80%;"></li><br><br></div>'],            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#pro0").append( item );
      });


  }



  function Preg4(){


          var contenidos = [
            '<tr><td><input type="number" id="nm0" class="form-control respuestas" style="text-align: center;"></td><td class="np1">-1.5</td><td class="np1">-1/8</td><td><input type="number" id="nm3" class="form-control respuestas" style="text-align: center;"></td></tr>',
            '<tr><td class="np1">-1/5</td><td><input type="number" id="nm1" class="form-control respuestas" style="text-align: center;"></td><td class="np1">-7/5</td><td class="np1">2/3</td></tr>',
            '<tr><td class="np1">3/4</td><td class="np1">-2/3</td><td><input type="number" id="nm2" class="form-control respuestas" style="text-align: center;"></td><td class="np1">2/3</td></tr>',
            '<tr><td class="np1">2/3</td><td class="np1">-2</td><td class="np1">0.75</td><td class="np1">-1.25</td></tr>',
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#llegar0").append( item );
      });
                             
  }



  var notaFinalP1 = 0;
  function Resp1(){

          var j=0;
          for(var i=0; i<8; i=i+2){
               switch ($('#rNSig'+j).val()) {
                case '>':
                      if( (parseInt($('#nSig'+i).text())) > (parseInt($('#nSig'+(i+1)).text())) ) {
                        notaFinalP1++;
                        $('#rNSig'+j).css("background-color", "#5ED188");
                      }else{
                        $('#rNSig'+j).css("background-color", "#EF87A7");
                      }
                    break;
                case '<':
                      if( (parseInt($('#nSig'+i).text())) < (parseInt($('#nSig'+(i+1)).text())) ) {
                        notaFinalP1++;
                        $('#rNSig'+j).css("background-color", "#5ED188");
                      }else{
                        $('#rNSig'+j).css("background-color", "#EF87A7");
                      }
                    break;
                case '=':
                    if( (parseInt($('#nSig'+i).text())) == (parseInt($('#nSig'+(i+1)).text())) ) {
                        notaFinalP1++;
                        $('#rNSig'+j).css("background-color", "#5ED188");
                      }else{
                        $('#rNSig'+j).css("background-color", "#EF87A7");
                      }
                    break;
                 case '':
                        $('#rNSig'+j).css("background-color", "#EF87A7");
                }
                j++;
          }
          


          var respPi = (parseInt($("#nSigp0").text()) + Math.pow((parseInt($("#nSigp1").text())), 1/2)) / parseInt($("#nSigp2").text());
          var pi = 3.14159;
         if(respPi > pi && $('#rNSigp0').val() == '>'){
                notaFinalP1++;
                $('#rNSigp0').css("background-color", "#5ED188");
          }else{
            if(respPi < pi && $('#rNSigp0').val() == '<'){
              notaFinalP1++;
              $('#rNSigp0').css("background-color", "#5ED188");
          }else{
              $('#rNSigp0').css("background-color", "#EF87A7");
          }
                
          }
  }




    var notaFinalP4 = 0;
    function Resp4(){

        if( parseFloat($('#nm3').val()) > parseFloat($('#nm2').val()) && parseFloat($('#nm2').val()) > parseFloat($('#nm1').val()) && parseFloat($('#nm1').val()) > parseFloat($('#nm0').val()) ){
              notaFinalP4++;
              $('#nm3').css("background-color", "#5ED188");
              $('#nm2').css("background-color", "#5ED188");
              $('#nm1').css("background-color", "#5ED188");
              $('#nm0').css("background-color", "#5ED188");
        }else{
              $('#nm3').css("background-color", "#EF87A7");
              $('#nm2').css("background-color", "#EF87A7");
              $('#nm1').css("background-color", "#EF87A7");
              $('#nm0').css("background-color", "#EF87A7");
        }

        var rOrd = ((($('#ordllegar0').val())).replace(/ | |/g, ""));
        var ord = rOrd.split('<');

        if( ord[0] == $('#nm0').val() && ord[1] == $('#nm1').val() && ord[2] == $('#nm2').val() && ord[3] == $('#nm3').val()) {
          notaFinalP4++;
          $('#ordllegar0').css("background-color", "#5ED188");
        }else{
          $('#ordllegar0').css("background-color", "#EF87A7");
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
            Resp4();


            var nota1 = (notaFinalP1*2)/5;
            var nota2 = parseFloat($('#calificacion0').val());
            var nota3 = parseFloat($('#calificacion1').val());
            var nota4 = (notaFinalP4);
            
            var notaFinal = (nota1+nota2+nota3+nota4);

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
