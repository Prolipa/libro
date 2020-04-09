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

        var p0 = Math.round(Math.random() * (30 - (-30)) + (-30));
        var p1 = Math.round(Math.random() * (30 - (-30)) + (-30));
        var p1_1 = Math.round(Math.random() * (30 - (-30)) + (-30));
        var p21 = Math.round(Math.random() * (9 - (2)) + (2));
        var p2_11 = Math.round(Math.random() * (9 - (2)) + (2));
        var p2 = Math.pow(p21, 2);
        var p2_1 = Math.pow(p2_11, 2);
        var p3 = Math.round(Math.random() * (30 - (-30)) + (-30));
        var p5_1 = Math.round(Math.random() * (9 - (2)) + (2));
        var p5 = Math.pow(p5_1, 2);


        $("#nAbs0").append(p0);
        $("#nAbs1").append(p1);
        $("#nAbs1_1").append(p1_1);
        $("#nAbs2").append(p2);
        $("#nAbs2_1").append(p2_1);
        $("#nAbs3").append(p3);
        $("#nAbs4").append(p5);


      }
     



  /*function Preg2(){
  }*/
   var suc = [];
      for(var i=0; i<33; i++){
          suc[i] = Math.round(Math.random() * (9 - (-9)) + (-9));
          $("#nDesp"+i).append(suc[i]);
      }




  function Preg3(){

    var dist = [];
      for(var i=0; i<5; i++){
          dist[i] = Math.round(Math.random() * (9 - (-9)) + (-9));
          $("#d"+i).append(dist[i]);
      }

  }



  var notaFinalP4 = 0;
  function Preg4(){


        var contenidos = [
            ['<div class="col-sm-6"><br><li style="color: #3584F5;">&nbsp;&nbsp;&nbsp;&nbsp;<span class="np2 col-sm-5"> |a| = |− a| </span>&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rVfs0"><option></option><option>VERDADERO</option><option>FALSO</option></select></li><br></div>'],            
            ['<div class="col-sm-6"><br><li style="color: #3584F5;">&nbsp;&nbsp;&nbsp;&nbsp;<span class="np2 col-sm-5"> |a + b| = |a| + |b| </span>&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rVfs2"><option></option><option>VERDADERO</option><option>FALSO</option></select></li><br></div>'],            
            ['<div class="col-sm-6"><br><li style="color: #3584F5;">&nbsp;&nbsp;&nbsp;&nbsp;<span class="np2 col-sm-5"> |a + b| ≤ |a| + |b| </span>&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rVfs1"><option></option><option>VERDADERO</option><option>FALSO</option></select></li><br></div>'],            
            ['<div class="col-sm-6"><br><li style="color: #3584F5;">&nbsp;&nbsp;&nbsp;&nbsp;<span class="np2 col-sm-6"> |2a − 5b| = 2|a| − 5|b| </span>&nbsp;&nbsp;&nbsp;&nbsp;<select class="form-control respuestas" id="rVfs3"><option></option><option>VERDADERO</option><option>FALSO</option></select></li><br></div>'],            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#vfs").append( item );
      });

  }




  function Preg5(){

    var nEn = [];
      for(var i=0; i<5; i++){
          nEn[i] = (Math.round(Math.random() * (99 - (10)) + (10)));
          $("#nEn"+i).append(nEn[i]);
      }

  }



  function Preg6(){

    var nDis0 = (Math.round(Math.random() * (20 - (2)) + (2)));
    var nDis1 = ((Math.random() * (20 - (2)) + (2)).toFixed(1));
    var nDis2 = (Math.round(Math.random() * (90 - (20)) + (20)));
    var nDis3 = (Math.round(Math.random() * (20 - (2)) + (2)));
    var nDis4 = ((Math.random() * (20 - (2)) + (2)).toFixed(1));

      $("#nDis0").append(nDis0);
      $("#nDis1").append(nDis1);
      $("#nDis2").append(nDis2);
      $("#nDis3").append(nDis3);
      $("#nDis4").append(nDis4);
  }





  var notaFinalP1 = 0;
  function Resp1(){

    var rAbs0 = Math.abs(parseInt($('#nAbs0').text()));
    var rAbs1 = -1 * (Math.abs(parseInt($('#nAbs1').text()) + (parseInt($('#nAbs1_1').text()))));
    var rAbs2 = -1 * (Math.abs(Math.pow((parseInt($('#nAbs2').text())), 1/2) * Math.pow((parseInt($('#nAbs2_1').text())), 1/2)));
    var rAbs3 = Math.abs(((parseInt($('#nAbs3').text()))));
    var rAbs4 = Math.abs(Math.pow((parseInt($('#nAbs4').text())), 1/2));


          if($('#rNAbs0').val() == rAbs0) {
              notaFinalP1++;
              $('#rNAbs0').css("background-color", "#5ED188");
          }else{
              $('#rNAbs0').css("background-color", "#EF87A7");
          }

          if($('#rNAbs1').val() == rAbs1) {
              notaFinalP1++;
              $('#rNAbs1').css("background-color", "#5ED188");
          }else{
              $('#rNAbs1').css("background-color", "#EF87A7");
          }

          if($('#rNAbs2').val() == rAbs2) {
              notaFinalP1++;
              $('#rNAbs2').css("background-color", "#5ED188");
          }else{
              $('#rNAbs2').css("background-color", "#EF87A7");
          }

          if($('#rNAbs3').val() == rAbs3) {
              notaFinalP1++;
              $('#rNAbs3').css("background-color", "#5ED188");
          }else{
              $('#rNAbs3').css("background-color", "#EF87A7");
          }

          if($('#rNAbs4').val() == rAbs4) {
              notaFinalP1++;
              $('#rNAbs4').css("background-color", "#5ED188");
          }else{
              $('#rNAbs4').css("background-color", "#EF87A7");
          }

  }


    var notaFinalP2 = 0;
    function Resp2(){

        var respA = (Math.abs((suc[0]*suc[6]) - (suc[1]*suc[7]) + (suc[2]*suc[8]))) - ((suc[3])*(Math.abs((suc[4]*suc[6]) + (suc[5]*suc[7]))));
        var respB = (((Math.abs((suc[9]*suc[15]) + (suc[10]*suc[16]))) * (Math.abs((suc[11]*suc[15]) + (suc[12]*suc[16])))) / (4 * (Math.abs(suc[15] - suc[16])))) + (Math.abs((suc[13]*suc[15]) - suc[16]));
        

        var respC = ((suc[17]*(Math.abs(((suc[18]/suc[19])*suc[31]) - ((suc[20]/suc[21])*suc[32]))/(suc[22]*Math.abs((suc[23] * suc[31]) + (suc[24]*suc[32]))))) - (Math.abs(((suc[25]/suc[26])*suc[31]) - (suc[27]*suc[32]))/(suc[28] * Math.abs((suc[29]*suc[31]) + (suc[30]*suc[32])))));

        if(parseInt($('#rDesp0').val()) == respA){
              notaFinalP2++;
              $('#rDesp0').css("background-color", "#5ED188");
        }else{
              $('#rDesp0').css("background-color", "#EF87A7");
        }

        /*alert((((Math.abs((suc[9]*suc[15]) + (suc[10]*suc[16]))) * (Math.abs((suc[11]*suc[15]) + (suc[12]*suc[16])))) +' / '+ (4 * (Math.abs(suc[15] - suc[16])))) +' + '+ (Math.abs((suc[13]*suc[15]) - suc[16])));
        alert((((parseInt($('#rDesp1').val()))/(parseInt($('#rDesp2').val()))).toFixed(2) +'=='+ respB.toFixed(2)));*/

        if(((parseInt($('#rDesp1').val()))/(parseInt($('#rDesp2').val()))).toFixed(2) == respB.toFixed(2)){
              notaFinalP2++;
              $('#rDesp1').css("background-color", "#5ED188");
              $('#rDesp2').css("background-color", "#5ED188");
        }else{
              $('#rDesp1').css("background-color", "#EF87A7");
              $('#rDesp2').css("background-color", "#EF87A7");
        }

        /*alert(((suc[17]+'*'+(Math.abs(((suc[18]/suc[19])*suc[31]) - ((suc[20]/suc[21])*suc[32]))+' / '+(suc[22]*Math.abs((suc[23] * suc[31]) + (suc[24]*suc[32]))))) +' - '+ (Math.abs(((suc[25]/suc[26])*suc[31]) - (suc[27]*suc[32]))+' / '+(suc[28] * Math.abs((suc[29]*suc[31]) + (suc[30]*suc[32]))))));
        alert((((parseInt($('#rDesp3').val()))/(parseInt($('#rDesp4').val()))).toFixed(2) +'=='+ respB.toFixed(2)));*/
        if(((parseInt($('#rDesp3').val()))/(parseInt($('#rDesp4').val()))).toFixed(2) == respB.toFixed(2)){
              notaFinalP2++;
              $('#rDesp3').css("background-color", "#5ED188");
              $('#rDesp4').css("background-color", "#5ED188");
        }else{
              $('#rDesp3').css("background-color", "#EF87A7");
              $('#rDesp4').css("background-color", "#EF87A7");
        }

    }



    var notaFinalP3 = 0;
    function Resp3(){
        var conti = 1;
        var cont= -1;

        for(var i=0; i<5; i++){
            for(var j=conti; j<5; j++){
              cont++;
              //alert( ((parseInt($('#d'+i).text())) +' - '+ (parseInt($('#d'+j).text()))) +' == '+ ($('#rd'+cont).val()));
              if( Math.abs((parseInt($('#d'+i).text())) - (parseInt($('#d'+j).text()))) == ($('#rd'+cont).val())) {
                    notaFinalP3++;
                    $('#rd'+cont).css("background-color", "#5ED188");
              }else{
                    $('#rd'+cont).css("background-color", "#EF87A7");
              }
            }
            conti++;
        }

    }




    var notaFinalP4 = 0;
    function Resp4(){
      var resp = 'VERDADERO';

        for(var i=0; i<4; i++){
          if(i > 1){
            resp = 'FALSO';
          }
            if( ($('#rVfs'+i).val()) == resp ){
                notaFinalP4++;
                $('#rVfs'+i).css("background-color", "#5ED188");
            }else{
                $('#rVfs'+i).css("background-color", "#EF87A7");
            }
        }
    }



    var notaFinalP5 = 0;
    function Resp5(){
      var cont = 0;
      for(var i=0; i<9; i=i+2){                
        if( (Math.pow((parseInt($('#nEn'+cont).text())), 1/2) > (parseInt($('#rNEn'+i).val()))) && (Math.pow((parseInt($('#nEn'+cont).text())), 1/2) < (parseInt($('#rNEn'+(i+1)).val()))) || (Math.pow((parseInt($('#nEn'+cont).text())), 1/2) > (parseInt($('#rNEn'+(i+1)).val()))) && (Math.pow((parseInt($('#nEn'+cont).text())), 1/2) < (parseInt($('#rNEn'+(i)).val())))) {
              notaFinalP5++;
              $('#rNEn'+i).css("background-color", "#5ED188");
              $('#rNEn'+(i+1)).css("background-color", "#5ED188");
        }else{
              $('#rNEn'+i).css("background-color", "#EF87A7");
              $('#rNEn'+(i+1)).css("background-color", "#EF87A7");
        }
        cont++;
      }  
    }




    var notaFinalP6 = 0;
    function Resp6(){
      var cont = 0;
      for(var i=0; i<9; i=i+2){                
        if( (parseInt($('#nDis'+cont).text())) == (Math.abs(parseInt($('#rNDis'+i).val())) + Math.abs(parseInt($('#rNDis'+(i+1)).val()))) )  {
              notaFinalP6++;
              $('#rNDis'+i).css("background-color", "#5ED188");
              $('#rNDis'+(i+1)).css("background-color", "#5ED188");
        }else{
              $('#rNDis'+i).css("background-color", "#EF87A7");
              $('#rNDis'+(i+1)).css("background-color", "#EF87A7");
        }
        cont++;
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
            Preg5();
            Preg6();

           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp4();
            Resp5();
            Resp6();


            var nota1 = (notaFinalP1*1.5)/5;
            var nota2 = (notaFinalP2*2.5)/3;
            var nota3 = (notaFinalP3*1.5)/10;
            var nota4 = (notaFinalP4*1.5)/4;
            var nota5 = (notaFinalP5*1.5)/5;
            var nota6 = (notaFinalP6*1.5)/5;
            
            var notaFinal = (nota1+nota2+nota3+nota4+nota5+nota6);

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

    $("#Calificar").click(function() {
       confirmar();
    /*if($('#calificacion0').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
        }
          */
      });

  });
