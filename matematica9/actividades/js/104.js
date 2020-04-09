
  function Inicio() {
      $(".panel-collapse").removeClass('in');
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });


    function Preg1(){

        var realiza1 = [
            '<div class="col-sm-12" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (4x<sup>3</sup> + 5 - 2x - 4x<sup>2</sup>) + (7 - 3x<sup>3</sup> + 4x + 5x<sup>2</sup>) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM1" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-12" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (5x<sup>2</sup> - 10x + 8) + (x<sup>4</sup> - x<sup>2</sup> + 2 - x) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM2" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-12" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (21x<sup>6</sup> + 7x<sup>5</sup> - 4x<sup>4</sup> + x<sup>3</sup> - 3x<sup>2</sup> + x - 5) + (-17x<sup>6</sup> - 4x<sup>5</sup> + 8x<sup>4</sup> - x<sup>3</sup> + 2x<sup>2</sup> - 2x - 10) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM3" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-12" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (x<sup>3</sup> + 4) + (x<sup>2</sup> - x) + (5 + x) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM4" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-12" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (x<sup>3</sup> + 4) + (x<sup>2</sup> + 5x + 2) - (4x<sup>3</sup> + 3x<sup>2</sup> + 2x + 1) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM5" class="form-control respuestas" style="width: 200px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-12" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (2x<sup>3</sup> + 6) + (3x<sup>2</sup> + 4x + 1) - (5x<sup>3</sup> + 2x<sup>2</sup> + 1x +3) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSM6" class="form-control respuestas" style="width: 230px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza1.sort(f_randomico);
        $('#realiza1').append(realiza1);

    }



    function Preg2(){

        var realiza2 = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (P + Q) - (R) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSO1" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; P + R - (Q - P) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSO2" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (P - R) + (Q - R) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSO3" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza2.sort(f_randomico);
        $('#realiza2').append(realiza2);

    }



    function Preg3(){

        var completa1 = [
            '<li>El término con &nbsp;&nbsp;<select class="form-control respuestas" id="rCLF1" style="display: inline-block; width: 200px;"><option></option><option value="1">mayor exponente</option><option>menor exponente</option><option>exponente igual</option></select>&nbsp;&nbsp; determina el grado del polinomio.<br><br></li>',
            '<li>Un polinomio de solo un término se conoce también como &nbsp;&nbsp;<select class="form-control respuestas" id="rCLF2" style="display: inline-block; width: 150px;"><option></option><option value="1">monomio</option><option>binomio</option><option>trinomio</option></select>.<br><br></li>',
            '<li>Al realizar operaciones algebraicas con polinomios, se suman o se restan los &nbsp;&nbsp;<select class="form-control respuestas" id="rCLF3" style="display: inline-block; width: 230px;"><option></option><option>términos mayores</option><option>términos diferentes</option><option value="1">términos semejantes</option></select>.<br><br></li>',
            '<li>Para realizar el &nbsp;&nbsp;<select class="form-control respuestas" id="rCLF4" style="display: inline-block; width: 150px;"><option></option><option>divisor</option><option value="1">cociente</option><option>dividendo</option></select>&nbsp;&nbsp; de polinomios hay que ordenar el &nbsp;&nbsp;<select class="form-control respuestas" id="rCLF5" style="display: inline-block; width: 150px;"><option></option><option>divisor</option><option>cociente</option><option value="1">dividendo</option></select>&nbsp;&nbsp; y el &nbsp;&nbsp;<select class="form-control respuestas" id="rCLF6" style="display: inline-block; width: 150px;"><option></option><option value="1">divisor</option><option>cociente</option><option>dividendo</option></select>&nbsp;&nbsp; en forma descendente.<br><br></li>',
        ];

        completa1.sort(f_randomico);
        $('#completa1').append(completa1);

    }



    function Preg4(){

        var calcula1 = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (2x<sup>3</sup> + 4x<sup>2</sup> - 3x + 1) . (-3) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSC1" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (7x<sup>4</sup> - 6x<sup>3</sup> + 2x - 5) . (4) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSC2" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (2x<sup>4</sup> + 4x<sup>3</sup> - 3x<sup>2</sup> + 2x - 11) . (3x<sup>2</sup>) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSC3" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (4x<sup>2</sup> + 3x + 1) . (x + 1) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSC4" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (2x<sup>3</sup> + 4x<sup>2</sup> - 3x + 1) . (x<sup>2</sup> + x + 1) &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSC5" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
        ];

        calcula1.sort(f_randomico);
        $('#calcula1').append(calcula1);

    }





    function Preg5(){
        var realiza3 = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (P . R) - Q &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSR1" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (Q . R) - P &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rRSR2" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
        ];

        realiza3.sort(f_randomico);
        $('#realiza3').append(realiza3);
    }




    function Preg6(){
        var expande = [
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (y + 2x)<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX1" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (3a + 5)<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX2" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (2x - 1)<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX3" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; (-y + 3x)<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX4" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; 25 - y<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX5" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; 4a<sup>2</sup> - 144 &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX6" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; 16a<sup>4</sup>b<sup>2</sup> - 25c<sup>8</sup>d<sup>12</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX7" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; [(x + y) + 5z]<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX8" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
            '<div class="col-sm-6" align="" style="display: inline-block;"><li>&nbsp;&nbsp;&nbsp;&nbsp; [(2x - 3y) + 4z]<sup>2</sup> &nbsp;&nbsp;=&nbsp;&nbsp;<input type="text" id="rREX9" class="form-control respuestas" style="width: 250px; display: inline-block;"><br><br></li> </div>',
        ];

        expande.sort(f_randomico);
        $('#expande').append(expande);
    }




    function Preg7(){
        var calcula2 = [
           '<div class="eq-c col-sm-6"> <li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup">4x<sup>3</sup> + 6x<sup>2</sup> - 2x + 10</span> <span class="bar">/</span> <span class="fdn">2</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSD1" class="form-control respuestas" style="display: inline-block; width: 200px;"> </li><br></div>',
           '<div class="eq-c col-sm-6"> <li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup">9x<sup>3</sup> - 6x<sup>2</sup> + 12x + 21</span> <span class="bar">/</span> <span class="fdn">3</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSD2" class="form-control respuestas" style="display: inline-block; width: 200px;"> </li><br></div>',
           '<div class="eq-c col-sm-6"> <li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup">7x<sup>2</sup> + 12x + 28</span> <span class="bar">/</span> <span class="fdn">4x</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSD3" class="form-control respuestas" style="display: inline-block; width: 200px;"> </li><br></div>',
           '<div class="eq-c col-sm-6"> <li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup">x<sup>3</sup> - 8x<sup>2</sup> + 10x + 22</span> <span class="bar">/</span> <span class="fdn">2x<sup>2</sup></span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSD4" class="form-control respuestas" style="display: inline-block; width: 200px;"> </li><br></div>',
        ];

        calcula2.sort(f_randomico);
        $('#calcula2').append(calcula2);
    }




    function Preg9(){
        var calcula3 = [
           '<div class="eq-c col-sm-6"><li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup"> 729 - 512x<sup>3</sup> </span><span class="bar">/</span>  <span class="fdn"> 9 - 8x </span></div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSCA1" class="form-control respuestas" style="display: inline-block; width: 250px;"> </li><br></div>',
           '<div class="eq-c col-sm-6"><li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup"> 64a<sup>6</sup> - 343b<sup>9</sup> </span><span class="bar">/</span>  <span class="fdn"> 4a<sup>2</sup> - 7b<sup>3</sup> </span></div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSCA2" class="form-control respuestas" style="display: inline-block; width: 250px;"> </li><br></div>',
           '<div class="eq-c col-sm-6"><li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup"> 8a<sup>3</sup> + b<sup>6</sup> </span><span class="bar">/</span> <span class="fdn"> 2a + b<sup>2</sup> </span></div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSCA3" class="form-control respuestas" style="display: inline-block; width: 250px;"> </li><br></div>',
           '<div class="eq-c col-sm-6"><li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup"> y<sup>4</sup> - 1 </span><span class="bar">/</span>  <span class="fdn"> 1 + y<sup>2</sup> </span></div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSCA4" class="form-control respuestas" style="display: inline-block; width: 250px;"> </li><br></div>',
           '<div class="eq-c col-sm-6"><li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup"> 32a<sup>5</sup> + 243b<sup>5</sup> </span><span class="bar">/</span>  <span class="fdn"> 2a + 3b </span></div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSCA5" class="form-control respuestas" style="display: inline-block; width: 250px;"> </li><br></div>',
           '<div class="eq-c col-sm-6"><li>&nbsp;&nbsp;&nbsp; <div class="fraction"> <span class="fup"> 1 + x<sup>11</sup> </span><span class="bar">/</span>  <span class="fdn"> x + 1 </span></div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rCSCA6" class="form-control respuestas" style="display: inline-block; width: 250px;"> </li><br></div>',
        ];

        calcula3.sort(f_randomico);
        $('#calcula3').append(calcula3);
    }


    /////////////////////////////////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1() {
        
        var resp = ['x^3+x^2+2x+12', 'x^4+4x^2-11x+10', '4x^6+3x^5+4x^4-x^2-x-15', 'x^3+x^2+9', '-3x^3-2x^2+3x+5', '-3x^2+x^2+3x+4'];

        for( var i=1; i<7; i++){
            if( $('#rRSM'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rRSM'+i).css("background-color", "#05D576");
              notaFinalP1++;
            }else{
              $('#rRSM'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP2 = 0;
    function Resp2() {
                
        var resp = ['2x^3-12x^2-26x+15', '16x^3-4x^2-4x+9', '-4x^4-2x^3-10x^2-31x+22'];

        for( var i=1; i<4; i++){
            if( $('#rRSO'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rRSO'+i).css("background-color", "#05D576");
              notaFinalP2++;
            }else{
              $('#rRSO'+i).css("background-color", "#D50545");
            }
        }
      
    }



    var notaFinalP3 = 0;
    function Resp3() {

        for( var i=1; i<7; i++){
            if( $('#rCLF'+i).val() == '1' ){
              $('#rCLF'+i).css("background-color", "#05D576");
              notaFinalP3++;
            }else{
              $('#rCLF'+i).css("background-color", "#D50545");
            }
        }
    }



    var notaFinalP4 = 0;
    function Resp4() {
      var resp = ['-6x^3-12x^2+9x-3', '28x^4-24x^3+8x-20', '6x^6+12x^5-9x^4+6x^3-33x^2', '4x^3+7x^2+4x+1', '2x^5+6x^4+3x^3+2x^2-2x+1']

        for( var i=1; i<6; i++){
            if( $('#rRSC'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rRSC'+i).css("background-color", "#05D576");
              notaFinalP4++;
            }else{
              $('#rRSC'+i).css("background-color", "#D50545");
            }
        } 
    }




    var notaFinalP5 = 0;
    function Resp5() {
      var resp = ['-61x^3+46x^2+120x-56', '5x^4-67x^3+46x^2+80x-8']

        for( var i=1; i<3; i++){
            if( $('#rRSR'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rRSR'+i).css("background-color", "#05D576");
              notaFinalP5++;
            }else{
              $('#rRSR'+i).css("background-color", "#D50545");
            }
        } 
    }



    var notaFinalP6 = 0;
    function Resp6() {
      var resp = ['y^2+4xy+4x^2', '9a^2+30a+25', '4x^2-4x+1', 'y^2-6xy+9x^2', '5-y5+y', '2a+122a-12', '4a^2b+5c^4d^64a^2b-5c^4c^6', 'x^2+y^2+25z^2+2xy+10zx+y','4x^2+9y^2+16z^2-12xy+8z2x-3y']

        for( var i=1; i<10; i++){
            if( $('#rREX'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rREX'+i).css("background-color", "#05D576");
              notaFinalP6++;
            }else{
              $('#rREX'+i).css("background-color", "#D50545");
            }
        } 
    }




    var notaFinalP7 = 0;
    function Resp7() {
      var resp = ['2x^3+3x^2-x+5', '3x^3-2x^2+4x+7', '7x/4+3+7/x', '1x/2-4+5/x+11/x^2']

        for( var i=1; i<5; i++){
            if( $('#rCSD'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rCSD'+i).css("background-color", "#05D576");
              notaFinalP7++;
            }else{
              $('#rCSD'+i).css("background-color", "#D50545");
            }
        } 
    }



    var notaFinalP8 = 0;
    function Resp8() {
      var resp = ['x^2+x-3', '2x^2-3bx+7b^2']

        for( var i=1; i<3; i++){
            if( $('#rCSA'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rCSA'+i).css("background-color", "#05D576");
              notaFinalP8++;
            }else{
              $('#rCSA'+i).css("background-color", "#D50545");
            }
        } 
    }




    var notaFinalP9 = 0;
    function Resp9() {
      var resp = ['81+72x+64x^2', '16a^2+28a^2b^3+49b^3', '4a^4-2ab^2+b^4', 'y^2-1', '16a^4-24a^3b+36a^2b^2-54ab^3+81b^4', '1-x+x^2-x^3+x^4-x^5+x^6-x^7+x^8-x^9+x^10']

        for( var i=1; i<7; i++){
            if( $('#rCSCA'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rCSCA'+i).css("background-color", "#05D576");
              notaFinalP9++;
            }else{
              $('#rCSCA'+i).css("background-color", "#D50545");
            }
        } 
    }



    var notaFinalP10 = 0;
    function Resp10() {
        if( $('#rEAF1').val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == 'x^+5/2x' ){
          $('#rEAF1').css("background-color", "#05D576");
          notaFinalP10++;
        }else{
          $('#rEAF1').css("background-color", "#D50545");
        }
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
            Preg5();
            Preg6();
            Preg7();
            Preg9();


          function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4();
            Resp5();
            Resp6();
            Resp7();
            Resp8();
            Resp9();
            Resp10();

            var nota1 = (notaFinalP1)/6;
            var nota2 = (notaFinalP2)/3;
            var nota3 = (notaFinalP3)/6;
            var nota4 = (notaFinalP4)/5;
            var nota5 = (notaFinalP5)/2;
            var nota6 = (notaFinalP6)/9;
            var nota7 = (notaFinalP7)/4;
            var nota8 = (notaFinalP8)/2;
            var nota9 = (notaFinalP9)/6;
            var nota10 = (notaFinalP10);

            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        confirmar();

        /*if( $('#calificacion3').val() !='' ){
          confirmar1();
          if( nota3<=2.5 && nota3>=0 ){
            confirmar();
            $('#calificacion3').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion3').focus();
            $('#calificacion3').css("background-color", "#D50545");
        }*/
      });    

});





