
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

        var halla = [
            '<div class="col-sm-6"> <li> <div class="eq-c n1">&nbsp;&nbsp; <div class="fraction"> <span class="fup">a<sup>3</sup>x<sup>3</sup> + b<sup>3</sup></span> <span class="bar">/</span> <span class="fdn">ax + b</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rRM1" class="form-control respuestas" style="display: inline-block; width: 60%;"> </div> </li> </div>',
            '<div class="col-sm-6"> <li> <div class="eq-c n1">&nbsp;&nbsp; <div class="fraction"> <span class="fup">(x + y)<sup>2</sup> - z<sup>2</sup></span> <span class="bar">/</span> <span class="fdn">(x + y) - z</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rRM2" class="form-control respuestas" style="display: inline-block; width: 60%;"> </div> </li> </div>',
            '<div class="col-sm-6"> <li> <div class="eq-c n1">&nbsp;&nbsp; <div class="fraction"> <span class="fup">x<sup>4</sup> - y<sup>4</sup></span> <span class="bar">/</span> <span class="fdn">x - y</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rRM3" class="form-control respuestas" style="display: inline-block; width: 60%;"> </div> </li> </div>',
            '<div class="col-sm-6"> <li> <div class="eq-c n1">&nbsp;&nbsp; <div class="fraction"> <span class="fup">z<sup>5</sup> - w<sup>5</sup></span> <span class="bar">/</span> <span class="fdn">z - w</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rRM4" class="form-control respuestas" style="display: inline-block; width: 65%;"> </div> </li> </div>',
            '<div class="col-sm-6"> <li> <div class="eq-c n1">&nbsp;&nbsp; <div class="fraction"> <span class="fup">a<sup>6</sup> - b<sup>6</sup></span> <span class="bar">/</span> <span class="fdn">a<sup>2</sup> - b<sup>2</sup></span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rRM5" class="form-control respuestas" style="display: inline-block; width: 60%;"> </div> </li> </div>',
            '<div class="col-sm-6"> <li> <div class="eq-c n1">&nbsp;&nbsp; <div class="fraction"> <span class="fup">a<sup>9</sup> + 8b<sup>9</sup></span> <span class="bar">/</span> <span class="fdn">a<sup>3</sup> + 2b<sup>3</sup></span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rRM6" class="form-control respuestas" style="display: inline-block; width: 60%;"> </div> </li> </div>',
            '<div class="col-sm-6"> <li> <div class="eq-c n1">&nbsp;&nbsp; <div class="fraction"> <span class="fup">1 - y<sup>12</sup></span> <span class="bar">/</span> <span class="fdn">1 - y<sup>4</sup></span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rRM7" class="form-control respuestas" style="display: inline-block; width: 60%;"> </div> </li> </div>',
            '<div class="col-sm-6"> <li> <div class="eq-c n1">&nbsp;&nbsp; <div class="fraction"> <span class="fup">x<sup>8</sup> - y<sup>8</sup></span> <span class="bar">/</span> <span class="fdn">x + y</span> </div> &nbsp;&nbsp;=&nbsp;&nbsp; <input type="text" id="rRM8" class="form-control respuestas" style="display: inline-block; width: 60%;"> </div> </li> </div>',
        ];

        halla.sort(f_randomico);
        $('#halla').append(halla);

    }

    /////////////////////////////////////////////////////////////////////
    var notaFinalP1 = 0;
    function Resp1() {
        
        var resp = ['a^2x^2-axb+b^2', 'x+y+z', 'x^3+x^2y+xy^2+y^3', 'z^4+z^3w+z^2w^2+zw^3+w^4', 'a^4+a^2b^2+b^4', 'a^6-2a^3b^3+b^6', '1+y^4+y^8', 'x^7-x^6y+x^5y^2-x^4y^3+x^3y^4-x^2y^5+xy^6-y^7'];
        for( var i=1; i<9; i++){
            if( $('#rRM'+i).val().toLowerCase().replace(/ |\(|\)|\. | |/gi, "") == resp[i-1] ){
              $('#rRM'+i).css("background-color", "#05D576");
              notaFinalP1++;
            }else{
              $('#rRM'+i).css("background-color", "#D50545");
            }
        }
    }





    function Cargar() {   
      location.reload(true);
    }


      $(document).ready(function() {
            Inicio();
            $(".panel-collapse").addClass('in');
            Preg1();

          function confirmar() {
            Resp1();

            var nota1 = (notaFinalP1*10)/8;

            var notaFinal = (nota1).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
        confirmar();
       /* if( $('#calificacion2').val() !='' && $('#calificacion3').val() !='' ){
          confirmar1();
          if( nota2<=2.5 && nota2>=0 && nota3<=2.5 && nota3>=0 ){
            confirmar();
            $('#calificacion2').css("background-color", "#05D576");
            $('#calificacion3').css("background-color", "#05D576");
          }else{
            alert('La calificación no es valida, verifique que los puntajes ingresados no excedan lo permitido.');
          }
        }else{
            $('#calificacion2').focus();
            $('#calificacion2').css("background-color", "#D50545");
            $('#calificacion3').focus();
            $('#calificacion3').css("background-color", "#D50545");
        }*/
      });    

});





