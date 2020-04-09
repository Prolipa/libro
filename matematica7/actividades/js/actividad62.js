
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

    $( "#domino5_6A" ).draggable();
    $( "#domino5_6B" ).draggable();
    $( "#domino1_3A" ).draggable();
    $( "#domino1_3B" ).draggable();
    $( "#domino1_6A" ).draggable();
    $( "#domino1_6B" ).draggable();
    $( "#domino3_3A" ).draggable();
    $( "#domino3_3B" ).draggable();

  }
  
    $('.btn_mostrar').on('click', function(){ //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
    });

    function Rotar56A(){
     document.getElementById("domino5_6A").style.display="none";
     document.getElementById("domino5_6B").style.display="";
    }
    function Rotar56B(){
     document.getElementById("domino5_6B").style.display="none";
     document.getElementById("domino5_6A").style.display="";
    }


    function Rotar13A(){
     document.getElementById("domino1_3A").style.display="none";
     document.getElementById("domino1_3B").style.display="";
    }
    function Rotar13B(){
     document.getElementById("domino1_3B").style.display="none";
     document.getElementById("domino1_3A").style.display="";
    }


    function Rotar16A(){
     document.getElementById("domino1_6A").style.display="none";
     document.getElementById("domino1_6B").style.display="";
    }
    function Rotar16B(){
     document.getElementById("domino1_6B").style.display="none";
     document.getElementById("domino1_6A").style.display="";
    }


    function Rotar33A(){
     document.getElementById("domino3_3A").style.display="none";
     document.getElementById("domino3_3B").style.display="";
    }
    function Rotar33B(){
     document.getElementById("domino3_3B").style.display="none";
     document.getElementById("domino3_3A").style.display="";
    }



var board = [
       ,5, , , ,2,3,8,
      , ,1, , , ,4, , ,5
      , ,2, , ,5, , , ,
      ,5, ,7,8, , ,2,1,
      ,4,6, ,2,3,7, ,5,8
      , ,9,8, , ,5,4, ,7
      , , , , ,6, , ,4,
      ,1, , ,9, , , ,6,
      , ,7,3,4, , , ,9,undefined
    ]

    var mySudokuJS = $("#sudoku").sudokuJS({
      board: board
    });

    $(".js-solve-step-btn").on("click", mySudokuJS.solveStep);
    $(".js-solve-all-btn").on("click", mySudokuJS.solveAll);



    function Preg1(){            
          var pregunta = [];
          var pTermino = (Math.round(Math.random() * (10000) + 10));
          var patron = (Math.round(Math.random() * (100) + 10));
          var pTermino1 = (Math.round(Math.random() * (10) + 10));
          var patron1 = (Math.round(Math.random() * (10) + 2));         

          pregunta[0] = '<span>a) &nbsp;Primer término: <span class="n0" id="pTermino">'+pTermino+'</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          'Patrón: – <span class="np0" id="patronP0">'+patron+'</span></span><br><br>' +
          'Sucesión: <span class="n0">'+pTermino+'</span> – <span class="np0">'+patron+'</span> = <span class="np2">'+(pTermino-patron)+'</span>;&nbsp;' +
          '</span><input type="number" class="form-control" id="p0Suc0" value="'+(pTermino-patron)+'" style="display: none;">' +
          '<input type="number" class="form-control" id="p0Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc5" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc6" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc7" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc8" style="width: 90px;">;';

          pregunta[1] = '<span>b) &nbsp;Primer término: <span class="n0" id="pTermino">'+pTermino1+'</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
          'Patrón: x <span class="np0" id="patronP1">'+patron1+'</span></span><br><br>' +
          'Sucesión: <span class="n0">'+pTermino1+', &nbsp;' +
          '</span><input type="number" class="form-control" id="p0Suc9" value="'+(pTermino1)+'" style="display: none;">' +
          '<input type="number" class="form-control" id="p0Suc10" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc11" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc12" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc13" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc14" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc15" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc16" style="width: 90px;">, &nbsp;' +
          '<input type="number" class="form-control" id="p0Suc17" style="width: 90px;">;';

          $("#pregunta0").append(pregunta[0]);
          $("#pregunta0_1").append(pregunta[1]);
      }


   function Preg2(){            
          var pregunta = [];          
          var val = (Math.round(Math.random() * (10) + 10));
          var patron = (Math.round(Math.random() * (10) + 2));
          var val0 = ((((((val*patron)*patron)*patron)*patron)*patron)*patron)*patron;      
          var val1 = (val0/patron);      
          var val2 = (val1/patron);      
          pregunta[0] = '<span>a) &nbsp;<span class="n0" id="val0">'+val0+'</span>; &nbsp;&nbsp; <span class="np0" id="val1">'+val1+'</span>; &nbsp;&nbsp;' +
          '<span class="np0" id="val2">'+val2+'</span>;</span>&nbsp;&nbsp;' +
          '<input type="number" class="form-control" id="p1Patron" value="'+patron+'" style="display: none;">' +
          '<input type="number" class="form-control" id="p1Suc0" value="'+val2+'" style="display: none;">' +
          '<input type="number" class="form-control" id="p1Suc1" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1Suc2" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1Suc3" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1Suc4" style="width: 90px;">; &nbsp;' +
          '<input type="number" class="form-control" id="p1Suc5" style="width: 90px;">; &nbsp;&nbsp;&nbsp;&nbsp;' +
          'Patron =  &nbsp;<input type="number" class="form-control" id="p1Pat0" style="width: 90px;">';

          $("#pregunta1").append(pregunta[0]);
      }


  var notaFinalP1 = 0;
    function Resp1(){
      for(var i=0; i<9; i++){
        if((parseInt($('#p0Suc'+(i+1)).val())) + ((parseInt($('#patronP0').text()))) == $('#p0Suc'+i).val()) {
          notaFinalP1++;
          $('#p0Suc'+(i+1)).css("background-color", "#5ED188");
        }else{
          $('#p0Suc'+(i+1)).css("background-color", "#EF87A7");
        }
      }  

      for(var i=9; i<18; i++){       
        if((parseInt($('#p0Suc'+(i+1)).val())) / ((parseInt($('#patronP1').text()))) == $('#p0Suc'+i).val()) {
          notaFinalP1++;
          $('#p0Suc'+(i+1)).css("background-color", "#5ED188");
        }else{
          $('#p0Suc'+(i+1)).css("background-color", "#EF87A7");
        }
      }         
    }


  var notaFinalP2 = 0;
    function Resp2(){
      for(var i=0; i<6; i++){        
          if(((parseInt($('#p1Suc'+(i+1)).val())) * $('#p1Patron').val()) == $('#p1Suc'+i).val()) {
          notaFinalP2 = notaFinalP2 + 0.25;
          $('#p1Suc'+(i+1)).css("background-color", "#5ED188");
        }else{
          $('#p1Suc'+(i+1)).css("background-color", "#EF87A7");
        }
      } 

       if($('#p1Pat0').val() == $('#p1Patron').val()){
         notaFinalP2 = notaFinalP2 + 0.75;
         $('#p1Pat0').css("background-color", "#5ED188");
        }else{
         $('#p1Pat0').css("background-color", "#EF87A7");
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

            var nota1 = (notaFinalP1*2.5)/16;
            var nota2 = notaFinalP2;
            var nota3 = parseFloat($('#calificacion0').val());
            var nota4 = parseFloat($('#calificacion1').val());
            
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


