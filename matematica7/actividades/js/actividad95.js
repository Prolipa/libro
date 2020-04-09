
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


    var nCFC;
    for(var i=1; i<23; i++){
        nCFC = Math.round(Math.random() * (15 - 2) + 2);
        $('#nCFC'+i).append(nCFC);
    }
      
  }




  function Preg2(){            
        
      var tabla1 = [
      '<tr> <td style="background-color: #D1F0F1;"> <div class="eq-c"> <div class="fraction np1"> <span class="fup">3</span> <span class="bar">/</span> <span class="fdn">5</span> </div>&nbsp;&nbsp;y&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">4</span> </div> </div> </td> <td><br>5&nbsp;&nbsp;y&nbsp;&nbsp;4&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;<input type="number" id="rCTFR1" class="form-control respuestas" style="width: 50px; display: inline-block;"></td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">3</span> <span class="bar">/</span> <span class="fdn">5</span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">12</span> <span class="bar">/</span> <span class="fdn">20</span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">4</span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR2" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR3" class="form-control respuestas" style="width: 50px;"></span> </div> </div> </td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">3</span> <span class="bar">/</span> <span class="fdn">5</span> </div>&nbsp;&nbsp;+&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">12</span> <span class="bar">/</span> <span class="fdn">20</span> </div>;&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR4" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR5" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;+&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR6" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR7" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR8" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR9" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <input type="number" id="rCTFR10" class="form-control respuestas" style="width: 50px; display: inline-block;"> <div class="fraction np1" style="display: inline-block;"> <span class="fup"><input type="number" id="rCTFR11" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR12" class="form-control respuestas" style="width: 50px;"></span> </div> </div> </td> </tr>',
      '<tr> <td style="background-color: #D1F0F1;"> <div class="eq-c"> <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">6</span> </div>&nbsp;&nbsp;;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">2</span> <span class="bar">/</span> <span class="fdn">3</span> </div>&nbsp;&nbsp;y&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">3</span> <span class="bar">/</span> <span class="fdn">4</span> </div> </div> </td> <td><br>6,&nbsp;&nbsp;3&nbsp;&nbsp;y&nbsp;&nbsp;4 <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp; <input type="number" id="rCTFR13" class="form-control respuestas" style="width: 50px; display: inline-block;"></td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">6</span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">10</span> <span class="bar">/</span> <span class="fdn">12</span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR14" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR15" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR16" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR17" class="form-control respuestas" style="width: 50px;"></span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR18" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR19" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR20" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR21" class="form-control respuestas" style="width: 50px;"></span> </div> </div> </td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">6</span> </div>&nbsp;&nbsp;+&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">2</span> <span class="bar">/</span> <span class="fdn">3</span> </div>&nbsp;&nbsp;-&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">4</span> <span class="bar">/</span> <span class="fdn">3</span> </div>;&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">10</span> <span class="bar">/</span> <span class="fdn">12</span> </div>&nbsp;&nbsp;+&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR22" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR23" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;-&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR24" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR25" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR26" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR27" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1" style="display: inline-block;"> <span class="fup"><input type="number" id="rCTFR28" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR29" class="form-control respuestas" style="width: 50px;"></span> </div> </div> </td> </tr>',
      '<tr> <td style="background-color: #D1F0F1;"> <div class="eq-c"> <div class="fraction np1"> <span class="fup">2</span> <span class="bar">/</span> <span class="fdn">3</span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">6</span> </div>&nbsp;&nbsp;y&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">12</span> </div> </div> </td> <td><br>3,&nbsp;&nbsp;6&nbsp;&nbsp;y&nbsp;&nbsp;12 <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp; <input type="number" id="rCTFR30" class="form-control respuestas" style="width: 50px; display: inline-block;"></td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">3</span> <span class="bar">/</span> <span class="fdn">2</span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR31" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR32" class="form-control respuestas" style="width: 50px;"></span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR33" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR34" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR35" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR36" class="form-control respuestas" style="width: 50px;"></span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR37" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR38" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR39" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR40" class="form-control respuestas" style="width: 50px;"></span> </div> </div> </td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">2</span> <span class="bar">/</span> <span class="fdn">3</span> </div>&nbsp;&nbsp;+&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">6</span> </div>&nbsp;&nbsp;-&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">5</span> <span class="bar">/</span> <span class="fdn">12</span> </div>;&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR41" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR42" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <input type="number" id="rCTFR43" class="form-control respuestas" style="width: 50px;"> <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR44" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR45" class="form-control respuestas" style="width: 50px;"></span> </div> </div> </td> </tr>',
      '<tr> <td style="background-color: #D1F0F1;"> <div class="eq-c"> <div class="fraction np1"> <span class="fup">7</span> <span class="bar">/</span> <span class="fdn">9</span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">8</span> <span class="bar">/</span> <span class="fdn">15</span> </div>&nbsp;&nbsp;y&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">16</span> <span class="bar">/</span> <span class="fdn">25</span> </div> </div> </td> <td><br>9,&nbsp;&nbsp;15&nbsp;&nbsp;y&nbsp;&nbsp;25 <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp; <input type="number" id="rCTFR46" class="form-control respuestas" style="width: 50px; display: inline-block;"></td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">7</span> <span class="bar">/</span> <span class="fdn">9</span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR47" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR48" class="form-control respuestas" style="width: 50px;"></span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR49" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR50" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR51" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR52" class="form-control respuestas" style="width: 50px;"></span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR53" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR54" class="form-control respuestas" style="width: 50px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR55" class="form-control respuestas" style="width: 50px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR56" class="form-control respuestas" style="width: 50px;"></span> </div> </div> </td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">7</span> <span class="bar">/</span> <span class="fdn">9</span> </div>&nbsp;&nbsp;-&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">8</span> <span class="bar">/</span> <span class="fdn">15</span> </div>&nbsp;&nbsp;+&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">16</span> <span class="bar">/</span> <span class="fdn">25</span> </div>;&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR57" class="form-control respuestas" style="width: 60px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR58" class="form-control respuestas" style="width: 60px;"></span> </div> </div> </td> </tr>',
      '<tr> <td style="background-color: #D1F0F1;"> <div class="eq-c"> <div class="fraction np1"> <span class="fup">123</span> <span class="bar">/</span> <span class="fdn">200</span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">215</span> <span class="bar">/</span> <span class="fdn">300</span> </div>&nbsp;&nbsp;y&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">141</span> <span class="bar">/</span> <span class="fdn">400</span> </div> </div> </td> <td><br>200,&nbsp;&nbsp;300&nbsp;&nbsp;y&nbsp;&nbsp;400 <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp; <input type="number" id="rCTFR59" class="form-control respuestas" style="width: 70px; display: inline-block;"></td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">123</span> <span class="bar">/</span> <span class="fdn">200</span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR60" class="form-control respuestas" style="width: 60px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR61" class="form-control respuestas" style="width: 60px;"></span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR62" class="form-control respuestas" style="width: 60px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR63" class="form-control respuestas" style="width: 60px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR64" class="form-control respuestas" style="width: 60px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR65" class="form-control respuestas" style="width: 60px;"></span> </div>;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR66" class="form-control respuestas" style="width: 60px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR67" class="form-control respuestas" style="width: 60px;"></span> </div>&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR68" class="form-control respuestas" style="width: 60px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR69" class="form-control respuestas" style="width: 60px;"></span> </div> </div> </td> <td> <div class="eq-c"> <div class="fraction np1"> <span class="fup">123</span> <span class="bar">/</span> <span class="fdn">200</span> </div>&nbsp;&nbsp;+&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">215</span> <span class="bar">/</span> <span class="fdn">300</span> </div>&nbsp;&nbsp;-&nbsp;&nbsp; <div class="fraction np1"> <span class="fup">141</span> <span class="bar">/</span> <span class="fdn">400</span> </div>;&nbsp;&nbsp;=&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rCTFR70" class="form-control respuestas" style="width: 60px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rCTFR71" class="form-control respuestas" style="width: 60px;"></span> </div> </div> </td> </tr>',
      ];

      tabla1.sort(f_randomico);
      $.each( tabla1, function( i, item ) {
      $( "#tabla1" ).append( item );
      });

    }




  function Preg3(){
    var nTCP;
    for(var i=1; i<7; i++){
        nTCP = Math.round(Math.random() * (20 - 2) + 2);
        $('#nTCP'+i).append(nTCP);
    }

  }




//////////////////////////////////////////////////////////


var notaFinalP1 = 0;
  function Resp1(){

        var resp1 = ((parseInt($('#nCFC1').text())/parseInt($('#nCFC2').text())) - (parseInt($('#nCFC3').text())/parseInt($('#nCFC4').text()))).toFixed();
        var resp2 = ((parseInt($('#nCFC5').text())/parseInt($('#nCFC6').text())) - (parseInt($('#nCFC7').text())/parseInt($('#nCFC8').text())) - (parseInt($('#nCFC9').text())/parseInt($('#nCFC10').text()))).toFixed();
        var resp3 = ((parseInt($('#nCFC11').text())/parseInt($('#nCFC12').text())) + (parseInt($('#nCFC13').text())/parseInt($('#nCFC14').text())) - (parseInt($('#nCFC15').text())/parseInt($('#nCFC16').text()))).toFixed();
        var resp4 = ((parseInt($('#nCFC17').text())/parseInt($('#nCFC18').text())) + (parseInt($('#nCFC19').text())/parseInt($('#nCFC20').text())) - (parseInt($('#nCFC21').text())/parseInt($('#nCFC22').text()))).toFixed();

        var res1 = (parseFloat($('#rCFC1').val())/parseFloat($('#rCFC2').val())).toFixed();
        var res2 = (parseFloat($('#rCFC3').val())/parseFloat($('#rCFC4').val())).toFixed();
        var res3 = (parseFloat($('#rCFC5').val())/parseFloat($('#rCFC6').val())).toFixed();
        var res4 = (parseFloat($('#rCFC7').val())/parseFloat($('#rCFC8').val())).toFixed();

        var r1 = [resp1,resp2,resp3,resp4];
        var r2 = [res1,res2,res3,res4];

        var c=0;
        for(var i=1; i<9; i=i+2){
          //alert(r1[c] +'=='+ r2[c]);
            if( r1[c] == r2[c] &&  $('#rCFC'+i).val() != '' &&  $('#rCFC'+(i+1)).val() != ''){
              notaFinalP1++;
              $('#rCFC'+i).css("background-color", "#5ED188");
              $('#rCFC'+(i+1)).css("background-color", "#5ED188");
            }else{
              $('#rCFC'+i).css("background-color", "#EF87A7");
              $('#rCFC'+(i+1)).css("background-color", "#EF87A7");
            }
            c++;
        }
            
    }





    var notaFinalP2 = 0;
    function Resp2(){      
      
      var resp= [20,25,20,12,20,25,20,37,20,1,17,20,12,2,3,8,12,3,4,9,12,8,12,9,12,9,12,3,4,12,6,4,5,6,10,12,5,12,10,24,13,12,1,1,12,225,14,18,8,15,16,30,16,25,32,50,199,225,1200,246,400,215,300,430,600,141,400,282,800,47,48];
      
      for(var j=1; j<72; j++){
        //alert(parseInt($('#rCTFR'+j).val()) +' == '+resp[j-1]);
            if( parseInt($('#rCTFR'+j).val()) == resp[j-1] ) {
                notaFinalP2++;
                $('#rCTFR'+j).css("background-color", "#5ED188");
            }else{
                $('#rCTFR'+j).css("background-color", "#EF87A7");
            }
      }


    }


      var notaFinalP3 = 0;
      function Resp3(){


          var resp= [5,5,12];
          for(var j=1; j<4; j++){
                if( parseInt($('#rMCAZ'+j).val()) == resp[j-1] ) {
                    notaFinalP3++;
                    $('#rMCAZ'+j).css("background-color", "#5ED188");
                }else{
                    $('#rMCAZ'+j).css("background-color", "#EF87A7");
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
            Preg3();



           function confirmar() {
            Resp1();
            Resp2();
            Resp3();

            var nota1 = (notaFinalP1*3)/4;
            var nota2 = (notaFinalP2*5)/71;
            var nota3 = (notaFinalP3*2)/3;
            var notaFinal = (nota1+nota2+nota3).toFixed(2);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {
confirmar();
     /* if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }*/

      });

       

});





