
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


    var nCFC,nCFC1,val,val1,c=3;
    for(var i=1; i<17; i=i+4){
        val = Math.round(Math.random() * (5 - 2) + 2);
        val1 = Math.round(Math.random() * (5 - 2) + 2);
        nCFC = Math.round(Math.random() * (9 - 2) + 2);
        nCFC1 = Math.round(Math.random() * (9 - 2) + 2);
        $('#nCFC'+i).append(nCFC);
        $('#nCFC'+(i+1)).append(nCFC1);
        $('#nCFC'+c).append(nCFC*val);
        $('#nCFC'+(c+1)).append(nCFC1*val1);
        c=c+4;        
    }
      
  }




  function Preg2(){            
        
      var nRD,nRD1,val,val1,c=3;
      for(var i=1; i<17; i=i+4){
          val = Math.round(Math.random() * (5 - 2) + 2);
          val1 = Math.round(Math.random() * (5 - 2) + 2);
          nRD = Math.round(Math.random() * (9 - 2) + 2);
          nRD1 = Math.round(Math.random() * (9 - 2) + 2);
          $('#nRD'+i).append(nRD);
          $('#nRD'+(i+1)).append(nRD1);
          $('#nRD'+c).append(nRD*val);
          $('#nRD'+(c+1)).append(nRD1*val1);
          c=c+4;        
      }

    }


    function Preg3(){            
      
      var EFF = [
      '<div class="col-sm-1" style="display: inline-block;"></div> <div class="col-sm-5 form-group form-inline" style="display: inline-block; border-right: 1px solid; border-right-color: #F06F0F; border-right-style: dashed;"> <div class="eq-c"><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup" id="nEFF1">5</span> <span class="bar">/</span> <span class="fdn" id="nEFF2">11</span> </div> &nbsp;&nbsp;÷&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rEFF1" class="form-control respuestas" style="width: 70px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rEFF2" class="form-control respuestas" style="width: 70px;"></span> </div>&nbsp;&nbsp;&nbsp;&nbsp; <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp; <!---------------------------------> <div class="fraction np1"> <span class="fup" id="nEFF3">3</span> <span class="bar">/</span> <span class="fdn" id="nEFF4">11</span> </div><br><br></li> </div> </div>',
      '<div class="col-sm-1"></div> <div class="col-sm-5 form-group form-inline" style="display: inline-block; border-right: 1px solid; border-right-color: #F06F0F; border-right-style: dashed;"> <div class="eq-c"><li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="np1">3</span> <div class="fraction np1"> <span class="fup" id="nEFF5">1</span> <span class="bar">/</span> <span class="fdn" id="nEFF6">2</span> </div> &nbsp;&nbsp;÷&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rEFF3" class="form-control respuestas" style="width: 70px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rEFF4" class="form-control respuestas" style="width: 70px;"></span> </div> &nbsp;&nbsp;&nbsp;&nbsp; <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp; <!---------------------------------> <div class="fraction np1"> <span class="fup" id="nEFF7">7</span> <span class="bar">/</span> <span class="fdn" id="nEFF8">8</span> </div> <br><br></li> </div> </div>',
      '<div class="col-sm-1" style="display: inline-block;"></div> <div class="col-sm-5 form-group form-inline" style="display: inline-block; border-right: 1px solid; border-right-color: #F06F0F; border-right-style: dashed;"> <div class="eq-c"><li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup"><input type="number" id="rEFF5" class="form-control respuestas" style="width: 70px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rEFF6" class="form-control respuestas" style="width: 70px;"></span> </div> &nbsp;&nbsp;÷&nbsp;&nbsp; <div class="fraction np1"> <span class="fup" id="nEFF9">2</span> <span class="bar">/</span> <span class="fdn" id="nEFF10">5</span> </div> &nbsp;&nbsp;&nbsp;&nbsp; <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp; <!---------------------------------> <div class="fraction np1"> <span class="fup" id="nEFF11">7</span> <span class="bar">/</span> <span class="fdn" id="nEFF12">25</span> </div> <br><br></li> </div> </div>',
      '<div class="col-sm-1"></div> <div class="col-sm-5 form-group form-inline" style="display: inline-block; border-right: 1px solid; border-right-color: #F06F0F; border-right-style: dashed;" > <div class="eq-c"><li> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div class="fraction np1"> <span class="fup" id="nEFF13">1</span> <span class="bar">/</span> <span class="fdn" id="nEFF14">9</span> </div> &nbsp;&nbsp;÷&nbsp;&nbsp; <div class="fraction np1"> <span class="fup" id="nEFF15">3</span> <span class="bar">/</span> <span class="fdn" id="nEFF16">4</span> </div> &nbsp;&nbsp;&nbsp;&nbsp; <span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp; <!---------------------------------> <div class="fraction np1"> <span class="fup"><input type="number" id="rEFF7" class="form-control respuestas" style="width: 70px;"></span> <span class="bar">/</span> <span class="fdn"><input type="number" id="rEFF8" class="form-control respuestas" style="width: 70px;"></span> </div> <br><br></li> </div> </div>',
      ];

      EFF.sort(f_randomico);
      $.each( EFF, function( i, item ) {
      $( "#EFF" ).append( item );
      }); 

    }



    function Preg5(){            
        
      var nJDR1,nJDR2,nAPJN3,nAPJN4,nAPJN5;

          nJDR1 = Math.round(Math.random() * (9 - 2) + 2);
          $('#nJDR1').append(nJDR1);

          nJDR2 = Math.round(Math.random() * (9 - 2) + 2);
          $('#nJDR2').append(nJDR2);

          nAPJN3 = Math.round(Math.random() * (4 - 2) + 2);
          $('#nAPJN3').append(nAPJN3);

          nAPJN4 = Math.round(Math.random() * (9 - 5) + 5);
          $('#nAPJN4').append(nAPJN4);

          nAPJN5 = Math.round(Math.random() * (1800 - 1400) + 1400);
          $('#nAPJN5').append(nAPJN5);      
      
    }



//////////////////////////////////////////////////////////


var notaFinalP1 = 0;
  function Resp1(){

        var resp1 = ((parseInt($('#nCFC1').text())/parseInt($('#nCFC2').text())) * (parseInt($('#nCFC3').text())/parseInt($('#nCFC4').text()))).toFixed();
        var resp2 = ((parseInt($('#nCFC5').text())/parseInt($('#nCFC6').text())) * (parseInt($('#nCFC7').text())/parseInt($('#nCFC8').text()))).toFixed();
        var resp3 = ((parseInt($('#nCFC9').text())/parseInt($('#nCFC10').text())) * (parseInt($('#nCFC11').text())/parseInt($('#nCFC12').text()))).toFixed();
        var resp4 = ((parseInt($('#nCFC13').text())/parseInt($('#nCFC14').text())) * (parseInt($('#nCFC15').text())/parseInt($('#nCFC16').text()))).toFixed();

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
      
        var resp1 = ((parseInt($('#nRD1').text())/parseInt($('#nRD2').text())) / (parseInt($('#nRD3').text())/parseInt($('#nRD4').text()))).toFixed();
        var resp2 = ((parseInt($('#nRD5').text())/parseInt($('#nRD6').text())) / (parseInt($('#nRD7').text())/parseInt($('#nRD8').text()))).toFixed();
        var resp3 = ((parseInt($('#nRD9').text())/parseInt($('#nRD10').text())) / (parseInt($('#nRD11').text())/parseInt($('#nRD12').text()))).toFixed();
        var resp4 = ((parseInt($('#nRD13').text())/parseInt($('#nRD14').text())) / (parseInt($('#nRD15').text())/parseInt($('#nRD16').text()))).toFixed();

        var res1 = (parseFloat($('#rRD1').val())/parseFloat($('#rRD2').val())).toFixed();
        var res2 = (parseFloat($('#rRD3').val())/parseFloat($('#rRD4').val())).toFixed();
        var res3 = (parseFloat($('#rRD5').val())/parseFloat($('#rRD6').val())).toFixed();
        var res4 = (parseFloat($('#rRD7').val())/parseFloat($('#rRD8').val())).toFixed();

        var r1 = [resp1,resp2,resp3,resp4];
        var r2 = [res1,res2,res3,res4];

        var c=0;
        for(var i=1; i<9; i=i+2){
            if( r1[c] == r2[c] &&  $('#rRD'+i).val() != '' &&  $('#rRD'+(i+1)).val() != ''){
              notaFinalP2++;
              $('#rRD'+i).css("background-color", "#5ED188");
              $('#rRD'+(i+1)).css("background-color", "#5ED188");
            }else{
              $('#rRD'+i).css("background-color", "#EF87A7");
              $('#rRD'+(i+1)).css("background-color", "#EF87A7");
            }
            c++;
        }

    }


      var notaFinalP3 = 0;
      function Resp3(){


          var resp= [3,5,1,4,7,10,4,27];
          for(var j=1; j<9; j++){
                if( parseInt($('#rEFF'+j).val()) == resp[j-1] ) {
                    notaFinalP3++;
                    $('#rEFF'+j).css("background-color", "#5ED188");
                }else{
                    $('#rEFF'+j).css("background-color", "#EF87A7");
                }
          }

      }


      var notaFinalP4 = 0;
      function Resp4(){

          for(var i=1; i<11; i++){

              if( i==3 || i==5 || i==8 ){
                  if($('#rCL'+(i) +'.colorea').text()){
                    notaFinalP4++;
                    $('#rCL'+i).css("background-color", "#5ED188");
                  }else{
                    $('#rCL'+i).css("background-color", "#EF87A7");
                  }
              }else{
                  if($('#rCL'+(i) +'.colorea').text()){
                    notaFinalP4--;
                    $('#rCL'+i).css("background-color", "#EF87A7");
                  }
              }
          }


          var resp= [1,4,1,3];
          for(var j=1; j<5; j++){
                if( parseInt($('#rCLR'+j).val()) == resp[j-1] ) {
                    notaFinalP4++;
                    $('#rCLR'+j).css("background-color", "#5ED188");
                }else{
                    $('#rCLR'+j).css("background-color", "#EF87A7");
                }
          }
    }





    var notaFinalP5 = 0;
    function Resp5(){      
      
        var resp1 = (parseInt($('#nJDR1').text())/parseInt($('#nJDR2').text())).toFixed();
        var resp2 = ((parseInt($('#nAPJN3').text())/parseInt($('#nAPJN4').text()))*parseInt($('#nAPJN5').text())).toFixed();        

        var res1 = (parseFloat($('#rJDR1').val())/parseFloat($('#rJDR2').val())).toFixed();
        var res2 = (parseFloat($('#rAPJN1').val()));


            if( resp1 == res1 &&  $('#rJDR1').val() != '' &&  $('#rJDR2').val() != ''){
              notaFinalP5++;
              $('#rJDR1').css("background-color", "#5ED188");
              $('#rJDR2').css("background-color", "#5ED188");
            }else{
              $('#rJDR1').css("background-color", "#EF87A7");
              $('#rJDR2').css("background-color", "#EF87A7");
            }


            if( resp2 == res2 &&  $('#rAPJN1').val() != ''){
              notaFinalP5++;
              $('#rAPJN1').css("background-color", "#5ED188");
            }else{
              $('#rAPJN1').css("background-color", "#EF87A7");
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
            Preg5();


            for(var i=1; i<11; i++){////Preg4

                $('#rCL'+(i)).click(function(){
                    if($(this).hasClass('colorea')) {
                        $(this).removeClass('colorea')
                    }else{
                        $(this).addClass('colorea')
                    }

                });
            }


           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4();
            Resp5();

            var nota1 = (notaFinalP1*2)/4;
            var nota2 = (notaFinalP2*2)/4;
            var nota3 = (notaFinalP3*2)/8;
            var nota4 = (notaFinalP4*2)/7;
            var nota5 = (notaFinalP5);
            var notaFinal = (nota1+nota2+nota3+nota4+nota5).toFixed(2);

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





