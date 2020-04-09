
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
      var nume0 = Math.round(Math.random() * (3 - (2)) + (2));
      var nume1 = Math.round(Math.random() * (3 - (-2)) + (-2));
      var nume2 = -1;

      var val0 = Math.round(Math.random() * (5 - (2)) + (2));
      var val1 = Math.round(Math.random() * (5 - (2)) + (2));
      var val2 = Math.round(Math.random() * (5 - (2)) + (2));
      var val3 = Math.round(Math.random() * (5 - (2)) + (2));
      var val4 = Math.round(Math.random() * (5 - (2)) + (2));

      var deno0 = Math.round(Math.random() * (6 - (3)) + (3));
      var deno1 = 2;

        $("#nume0").append(nume0);
        $("#nume1").append(nume1);
        $("#nume2").append(nume2);
        $("#nume3").append(nume2);

        $("#deno0").append(deno0);
        $("#deno1").append(deno1);
        $("#deno2").append(deno1);

      var resp = (nume0+(nume1/deno0)+(nume2/deno1)+(nume2/deno1)).toFixed(2);
      var respNum = ((nume0+((nume2/deno1)+(nume2/deno1)))*deno0)+nume1;
       $("#respNume0").append(respNum);
       $("#respDeno0").append(deno0);

       var contenidos = [
            ['<div class="col-sm-2" id="rFr0" style="border-radius: 10px;"><input class="checkmark" type="radio" id="sR0" name="sR00" value="1"><span class="np1">'+respNum+'</span><span class="np1">/</span><span class="np1">'+deno0+'</span></div>'],
            ['<div class="col-sm-2" id="rFr1" style="border-radius: 10px;"><input class="checkmark" type="radio" name="sR00" value=""><span class="np1">'+val0+'</span><span class="np1">/</span><span class="np1">'+val1+'</span></div>'],
            ['<div class="col-sm-2" id="rFr2" style="border-radius: 10px;"><input class="checkmark" type="radio" name="sR00" value=""><span class="np1">'+val2+'</span><span class="np1">/</span><span class="np1">'+val3+'</span></div>'],            
            ['<div class="col-sm-2" id="rFr3" style="border-radius: 10px;"><input class="checkmark" type="radio" name="sR00" value=""><span class="np1">'+val1+'</span><span class="np1">/</span><span class="np1">'+val4+'</span></div>'],            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $("#opcionesFrac").append( item );
      });

    }



  function Preg2(){
              
      var contenidos = [
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="s0" ><span class="np1">Solo I</span></li></div>'],
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="s0"><span class="np1">Solo II</span></li></div>'],
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="s0"><span class="np1">Solo III</span></li></div>'], 
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="s0"><span class="np1" style="font-size: 21px;">Solo I y III</span><br><br></li></div>'],
            ['<div class="col-sm-2" id="sel4" style="border-radius: 10px;"><li><input class="checkmark" type="radio" name="s0" id="s4"><span class="np1" style="font-size: 20px;">Solo II y III</span></li></div>']            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $(".respuestas2").append( item );
      });

       var dec = Math.round(Math.random() * (8 - (2)) + (2));
      $("#nP2").append(dec);
      $("#nP2_0").append(dec);
      $("#nn").append(dec);

    }
  

    function Preg3(){

      var nIR0 = Math.round(Math.random() * (8 - (2)) + (2));
      var nIR1 = (Math.random() * (16 - (4)) + (4));
      var nIR2 = (((Math.random() * (16 - (4)) + (4)).toFixed(2))/4);

      $("#nIR0").append(nIR0);
      $("#nIR1").append(nIR2);
      $("#nIR2").append(nIR1.toFixed(1));


       var contenidos = [
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sr0" ><span class="np1">Solo I</span></li></div>'],
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sr0"><span class="np1">Solo II</span></li></div>'],
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sr0"><span class="np1">Solo III</span></li></div>'], 
            ['<div class="col-sm-2" id="selr4" style="border-radius: 10px;"><li><input class="checkmark" type="radio" name="sr0" id="sr4"><span class="np1" style="font-size: 21px;">Solo I y III</span></li></div>'],
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sr0"><span class="np1" style="font-size: 20px;">Solo I y II</span><br><br></li></div>']            
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $(".respuestas3").append( item );
      });

    }
 


    function Preg4(){

      var nPr0 = Math.round(Math.random() * (5 - 2) + 2);
      var nPr1 = Math.round(Math.random() * (8 - 2) + 2);

      $("#nPr0").append("1/"+nPr0);
      $("#nPr1").append("1/"+nPr1);

    }


    function Preg5(){

      var ae0 = Math.round(Math.random() * (3 - 2) + 2);
      var ae1 = Math.round(Math.random() * (3 - 2) + 2);
      var ae2 = Math.round(Math.random() * (3 - 2) + 2);
      var ae3 = Math.round(Math.random() * (3 - 2) + 2);
      var ae4 = Math.round(Math.random() * (3 - 2) + 2);
      var ar0 = Math.pow((Math.round(Math.random() * (-1 - (-9)) + (-9))), 3);
      var a0 = Math.round(Math.random() * (9 - (-9)) + (-9));
      var a1 = Math.round(Math.random() * (9 - (-9)) + (-9));
      var a2 = Math.round(Math.random() * (9 - (-9)) + (-9));
      var a3 = Math.round(Math.random() * (9 - (-9)) + (-9));
      var a4 = Math.round(Math.random() * (9 - (-9)) + (-9));
      var a5 = Math.round(Math.random() * (9 - (-9)) + (-9));

      var br0 = Math.pow((Math.round(Math.random() * (9 - (-9)) + (-9))), 2);
      var br1 = Math.pow((Math.round(Math.random() * (9 - (-9)) + (-9))), 2);
      var br2 = Math.pow((Math.round(Math.random() * (9 - (-9)) + (-9))), 3);
      var br3 = Math.pow((Math.round(Math.random() * (9 - (-9)) + (-9))), 3);

      $("#ae0").append(ae0);
      $("#ae1").append(ae1);
      $("#ae2").append(3);
      $("#ae3").append(ae3);
      $("#ar0").append(ar0);
      $("#a0").append(a0);
      $("#a1").append(a1);
      $("#a2").append(a2);
      $("#a3").append(a3);
      $("#a4").append(a4);



      $("#be0").append(3);
      $("#be1").append(2);
      $("#be2").append(ae2);
      $("#be3").append(2);
      $("#be4").append(3);
      $("#b0").append(a4);
      $("#br3").append(br3);
      $("#b2").append(a0);
      $("#br0").append(Math.abs(br0));
      var aa = Math.abs(br1);
      if(aa == 0){
        aa = 4;
      }
      $("#br1").append(aa);
      $("#br2").append(br2);


      var c0 = Math.round(Math.random() * (99 - (-99)) + (-99));
      var c1 = Math.round(Math.random() * (99 - (-99)) + (-99));
      if(c1==0){
        c1 = c1 + 50;
      }
      var cr0 = Math.pow((Math.round(Math.random() * (50 - (-50)) + (-50))), 2);
      var cr1 = Math.pow((Math.round(Math.random() * (50 - (-50)) + (-50))), 2);
      var cr2 = Math.pow((Math.round(Math.random() * (50 - (-50)) + (-50))), 2);
      var cr3 = Math.pow((Math.round(Math.random() * (50 - (-50)) + (-50))), 2);

      $("#ce0").append(3);
      $("#ce1").append(ae2);
      $("#ce3").append(ae3);
      $("#ce4").append(ae4);    
      $("#ce6").append(ae0);  
      $("#c0").append(c0);//num
      $("#c1").append(c1);//den
      $("#c2").append(a5);
      $("#cr0").append(cr0);
      $("#cr1").append(cr1);
      $("#cr2").append(cr2);
      $("#cr3").append(cr3);

    }


    function Preg6(){

      var a0 = (Math.round(Math.random() * (50 - (20)) + (20)))/10;
      var a2 = (Math.random() * (0.8 - (0.2)) + (0.2)).toFixed(1);
      var a3 = (Math.random() * (0.8 - (0.2)) + (0.2)).toFixed(1);
      var a5 = (Math.random() * (0.8 - (0.2)) + (0.2)).toFixed(1);
      var a6 = (Math.random() * (0.8 - (0.2)) + (0.2)).toFixed(1);

      $("#p6A0").append(a0);
      $("#p6A1").append(2);
      $("#p6A2").append(a2);
      $("#p6A3").append(a3);
      $("#p6A4").append(1);
      $("#p6A5").append(a5);
      $("#p6A6").append(a6);
      $("#p6Ad0").append(5);
      $("#p6Ad1").append(2);


      var b0 = (Math.round(Math.random() * (9 - (2)) + (2)));
      var b3 = (Math.random() * (0.8 - (0.2)) + (0.2)).toFixed(1);
      var b4 = (Math.random() * (0.8 - (0.2)) + (0.2)).toFixed(1);
      var b5 = (Math.round(Math.random() * (9 - (2)) + (2)));
      var b6 = (Math.random() * (0.8 - (0.2)) + (0.2)).toFixed(1);
      var b7 = (Math.random() * (0.8 - (0.2)) + (0.2)).toFixed(1);
      var bd2 = (Math.round(Math.random() * (9 - (2)) + (2)));

      $("#p6B0").append(b0);
      $("#p6B1").append(1);
      $("#p6B2").append(3);
      $("#p6B3").append(b3);
      $("#p6B4").append(b4);
      $("#p6B5").append(b5);
      $("#p6B6").append(b6);
      $("#p6B7").append(b7);
      $("#p6Bd0").append(2);
      $("#p6Bd1").append(2);
      $("#p6Bd2").append(bd2);

    }



    function Preg7(){

      var n0 = (Math.random() * (60 - (2)) + (2)).toFixed(2);
      var n1 = (Math.random() * (60 - (2)) + (2)).toFixed(2);
      var n2 = (Math.random() * (60 - (2)) + (2)).toFixed(3);
      var n3 = (Math.random() * (60 - (2)) + (2)).toFixed(2);

      nn0 = n0.split(".");
      nn1 = n1.split(".");
      nn2 = n2.split(".");
      nn3 = n3.split(".");
 
        
      $("#p7n0").append(nn0[0]);
      $("#p7n00").append(nn0[1]);
      $("#p7n000").append(n0);

      $("#p7n1").append(nn1[0]);
      $("#p7n11").append(nn1[1]);
      $("#p7n111").append(n1);

      $("#p7n2").append(nn2[0]);
      $("#p7n22").append(nn2[1]);
      $("#p7n222").append(n2);

      $("#p7n3").append(nn3[0]);
      $("#p7n33").append(nn3[1]);
      $("#p7n333").append(n3);

    }



    function Preg8(){

        var p0 = Math.round(Math.random() * (60 - (2)) + (2));
        var p1 = Math.round(Math.random() * (60 - (2)) + (2));
        var p2 = 'π';
        var p3 = (Math.random() * (60 - (2)) + (2)).toFixed(2);
        var p4 = Math.round(Math.random() * (-1 - (-60)) + (-60));

      var divisible = [];

      divisible = [
      ['<tr>' +
       '<td colspan="4"><span class="np3" id="val0">' + p0 + '</span></td>' +
       '<td colspan="2" id="ss0"><input class="checkmark" id="sn0" type="checkbox" ></td>' +
       '<td colspan="2" id="ss1"><input class="checkmark" id="sn1" type="checkbox" ></td>' +
       '<td colspan="2" id="ss2"><input class="checkmark" id="sn2" type="checkbox" ></td>' +
       '<td colspan="2" id="ss3"><input class="checkmark" id="sn3" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="4"><span class="np3" id="val1">' + p1 + '</span></td>' +
       '<td colspan="2" id="ss4"><input class="checkmark" id="sn4" type="checkbox" ></td>' +
       '<td colspan="2" id="ss5"><input class="checkmark" id="sn5" type="checkbox" ></td>' +
       '<td colspan="2" id="ss6"><input class="checkmark" id="sn6" type="checkbox" ></td>' +
       '<td colspan="2" id="ss7"><input class="checkmark" id="sn7" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="4"><span class="np3" id="val2">' + p2 + '</span></td>' +
       '<td colspan="2" id="ss8"><input class="checkmark" id="sn8" type="checkbox" ></td>' +
       '<td colspan="2" id="ss9"><input class="checkmark" id="sn9" type="checkbox" ></td>' +
       '<td colspan="2" id="ss10"><input class="checkmark" id="sn10" type="checkbox" ></td>' +
       '<td colspan="2" id="ss11"><input class="checkmark" id="sn11" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="4"><span class="np3" id="val3">' + p3 + '</span></td>' +
       '<td colspan="2" id="ss12"><input class="checkmark" id="sn12" type="checkbox" ></td>' +
       '<td colspan="2" id="ss13"><input class="checkmark" id="sn13" type="checkbox" ></td>' +
       '<td colspan="2" id="ss14"><input class="checkmark" id="sn14" type="checkbox" ></td>' +
       '<td colspan="2" id="ss15"><input class="checkmark" id="sn15" type="checkbox" ></td>' +
      '</tr> '],
      ['<tr>' +
       '<td colspan="4"><span class="np3" id="val4">' + p4 + '</span></td>' +
       '<td colspan="2" id="ss16"><input class="checkmark" id="sn16" type="checkbox" ></td>' +
       '<td colspan="2" id="ss17"><input class="checkmark" id="sn17" type="checkbox" ></td>' +
       '<td colspan="2" id="ss18"><input class="checkmark" id="sn18" type="checkbox" ></td>' +
       '<td colspan="2" id="ss19"><input class="checkmark" id="sn19" type="checkbox" ></td>' +
      '</tr></tbody>']
      ];          
      
      divisible.sort(f_randomico);

      $.each( divisible, function( i, item ) {
        $( "#tablaNumeros" ).append( item );
    });

  }




  function Preg9(){

   var divisible = [];

      divisible = [
      ['<div class="col-sm-6"><li><img src="img/i1_p57_act9.jpg" class="img-responsive"><input type="text" id="rConj0" class="form-control respuestas text-uppercase" style="width: 60%;"></li><br></div>'],
      ['<div class="col-sm-6"><li><img src="img/i2_p57_act9.jpg" class="img-responsive"><input type="text" id="rConj1" class="form-control respuestas text-uppercase" style="width: 60%;"></li><br></div>'],
      ['<div class="col-sm-6"><li><img src="img/i3_p57_act9.jpg" class="img-responsive"><input type="text" id="rConj2" class="form-control respuestas text-uppercase" style="width: 60%;"></li><br></div>'],
      ['<div class="col-sm-6"><li><br><br><br><span class="n4">R = {x|x∈ ℕ , x es negativo}<br><br></span><input type="text" id="rConj3" class="form-control respuestas text-uppercase" style="width: 60%;"></li><br></div>']
      ];          
      
      divisible.sort(f_randomico);

      $.each( divisible, function( i, item ) {
        $( "#conjuntos" ).append( item );
    });
  }



  function Preg12(){

      var contenidos = [
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sC0" ><span class="np4">Solo I</span></li></div>'],
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sC0"><span class="np4">Solo II</span></div>'],
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sC0"><span class="np4">Solo III</span></div>'], 
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sC0"><span class="np4" style="font-size: 21px;">Solo III y IV</span><br><br></li></div>'],
            ['<div class="col-sm-2"><li><input class="checkmark" type="radio" name="sC0"><span class="np4" style="font-size: 18px;">Solo I, II y III</span></li></div>'],
            ['<div class="col-sm-2" id="selC4" style="border-radius: 10px;"><li><input class="checkmark" type="radio" name="sC0" id="srC4"><span class="np4" style="font-size: 18px;">Solo I, III y IV</span></li></div>'],
        ]
      contenidos.sort(f_randomico);

      $.each( contenidos, function( i, item ) {
        $(".respuestas12").append( item );
      });

    }




  function Preg13(){

   var divisible = [];

      divisible = [
      ['<div class="col-sm-6"><li><br><img src="img/i1_p57_act13.jpg" width="300px;" class="img-responsive"><br><input type="text" id="rP13Conj0" class="form-control respuestas text-uppercase" style="width: 60%;" placeholder="X ∪ Y ∩ Z"></li><br></div>'],
      ['<div class="col-sm-6"><li><img src="img/i2_p57_act13.jpg" width="300px;" class="img-responsive"><input type="text" id="rP13Conj1" class="form-control respuestas text-uppercase" style="width: 60%;" placeholder="X ∪ Y ∩ Z"></li><br></div>'],
      ['<div class="col-sm-6"><li><img src="img/i3_p57_act13.jpg" width="300px;" class="img-responsive"><input type="text" id="rP13Conj2" class="form-control respuestas text-uppercase" style="width: 60%;" placeholder="X ∪ Y ∩ Z"></li><br></div>'],      
      ];          
      
      divisible.sort(f_randomico);

      $.each( divisible, function( i, item ) {
        $( "#conjuntosP13" ).append( item );
    });
  }



  var notaFinalP1 = 0;
  function Resp1(){
    var color = "";

      if(document.getElementById('sR0').checked){
       notaFinalP1++
       color = "#5ED188";       
       $('#rFr0').css("background-color", color);
    }else{
      color = "#EF87A7";
       $('#rFr0').css("background-color", color);
    }
  }    


  var notaFinalP2 = 0;
  function Resp2(){

    if(document.getElementById('s4').checked){
      $('#sel4').css("background-color", "#5ED188");
      notaFinalP2++;
    }else{
       $('#sel4').css("background-color", "#EF87A7");
    }
  }



  var notaFinalP3 = 0;
  function Resp3(){

    if(document.getElementById('sr4').checked){
      $('#selr4').css("background-color", "#5ED188");
      notaFinalP3++;
    }else{
       $('#selr4').css("background-color", "#EF87A7");
    }
  }


  var notaFinalP5 = 0;
  function Resp5(){

    /////  a)
    var a0 = Math.pow(parseInt($('#a0').text()), parseInt($('#ae0').text()));
    var a1 = parseInt($('#a1').text()) * parseInt($('#a2').text());
    var a2 = Math.pow(parseInt($('#a3').text()), parseInt($('#ae1').text()));

    var a3 = Math.round(Math.pow(Math.abs(parseInt($('#ar0').text())), (1/(parseInt($('#ae2').text())))));
    if(parseInt($('#ar0').text())<0) {
       a3 = a3*(-1);
    }

    var a4 = Math.pow(parseInt($('#a4').text()), parseInt($('#ae3').text()));

    var respA = a0 - a1 + a2 + a3 +a4;
    if($('#p5R0').val() == respA){
       $('#p5R0').css("background-color", "#5ED188");
      notaFinalP5++;
    }else{
       $('#p5R0').css("background-color", "#EF87A7");
    }


    ///b)
    var b0 = Math.round(Math.pow(Math.abs(parseInt($('#br3').text())), (1/(parseInt($('#be0').text())))));
    if(parseInt($('#br3').text()) < 0) {
       b0 = b0*(-1);
    }

    var b1 = Math.round(Math.pow(parseInt($('#br0').text()), (1/(parseInt($('#be1').text())))));
    var b2 = Math.round(Math.pow(parseInt($('#b2').text()), (parseInt($('#be2').text()))));
    var b3 = Math.round(Math.pow(parseInt($('#br1').text()), (1/(parseInt($('#be3').text())))));
    
    var b4 = Math.round(Math.pow(Math.abs(parseInt($('#br2').text())), (1/(parseInt($('#be4').text())))));
    if(parseInt($('#br2').text())<0) {
       b4 = b4*(-1);
    }


    var rb0 = b0 + (b1);
    var rb3 = parseInt($('#b0').text())*(rb0);
    var rb1 = b2 / (b3);
    var rb2 = rb1 * (b4);
    
    if($('#p5R1').val() == (rb3 - (rb2))) {
       $('#p5R1').css("background-color", "#5ED188");
      notaFinalP5++;
    }else{
       $('#p5R1').css("background-color", "#EF87A7");
    }

  }

  var notaFinalP6 = 0;
  function Resp6(){

    var respA = (parseFloat($('#p6A0').text())) - ((parseFloat($('#p6A1').text())/(parseFloat($('#p6Ad0').text()))) + (((parseFloat($('#p6A2').text())) - (parseFloat($('#p6A3').text())))) ) - ((parseFloat($('#p6A4').text())/(parseFloat($('#p6Ad1').text()))) - (parseFloat($('#p6A5').text())) + (parseFloat($('#p6A6').text())));
    var rA = ($('#p6Ra').val())/($('#p6Ra1').val());

      if(rA.toFixed(1) == respA.toFixed(1)){
        $('#p6Ra').css("background-color", "#5ED188");
        $('#p6Ra1').css("background-color", "#5ED188");
        notaFinalP6++;
      }else{
        $('#p6Ra').css("background-color", "#EF87A7");
        $('#p6Ra1').css("background-color", "#EF87A7");
      }


    var respB = (parseFloat($('#p6B0').text())) + ((parseFloat($('#p6B1').text()))/(parseFloat($('#p6Bd0').text()))) - ((parseFloat($('#p6B2').text())/(parseFloat($('#p6Bd1').text()))) - (((parseFloat($('#p6B3').text())) + (parseFloat($('#p6B4').text())))) ) - ((parseFloat($('#p6B5').text())/(parseFloat($('#p6Bd2').text()))) - (parseFloat($('#p6B6').text())) + (parseFloat($('#p6B7').text())));
    var rB = ($('#p6Rb').val())/($('#p6Rb1').val());
      if($('#p6Rb').val() == respB.toFixed(1)){
        $('#p6Rb').css("background-color", "#5ED188");
        $('#p6Rb1').css("background-color", "#5ED188");
        notaFinalP6++;
      }else{
        $('#p6Rb').css("background-color", "#EF87A7");
        $('#p6Rb1').css("background-color", "#EF87A7");
      }

  }

  var notaFinalP7 = 0;
  function Resp7(){    
    if((parseFloat($('#p7Ra').val())/parseFloat($('#p7Ra1').val())).toFixed(1) == parseFloat($('#p7n000').text()).toFixed(1)) {
        $('#p7Ra').css("background-color", "#5ED188");
        $('#p7Ra1').css("background-color", "#5ED188");
        notaFinalP7++;
    }else{
        $('#p7Ra').css("background-color", "#EF87A7");
        $('#p7Ra1').css("background-color", "#EF87A7");
    }

    if((parseFloat($('#p7Rb').val())/parseFloat($('#p7Rb1').val())).toFixed(1) == parseFloat($('#p7n111').text()).toFixed(1)){
        $('#p7Rb').css("background-color", "#5ED188");
        $('#p7Rb1').css("background-color", "#5ED188");
        notaFinalP7++;
    }else{
        $('#p7Rb').css("background-color", "#EF87A7");
        $('#p7Rb1').css("background-color", "#EF87A7");
    }

    if((parseFloat($('#p7Rc').val())/parseFloat($('#p7Rc1').val())).toFixed(1) == parseFloat($('#p7n222').text()).toFixed(1)){
        $('#p7Rc').css("background-color", "#5ED188");
        $('#p7Rc1').css("background-color", "#5ED188");
        notaFinalP7++;
    }else{
        $('#p7Rc').css("background-color", "#EF87A7");
        $('#p7Rc1').css("background-color", "#EF87A7");
    }

    if((parseFloat($('#p7Rd').val())/parseFloat($('#p7Rd1').val())).toFixed(1) == parseFloat($('#p7n333').text()).toFixed(1)){
        $('#p7Rd').css("background-color", "#5ED188");
        $('#p7Rd1').css("background-color", "#5ED188");
        notaFinalP7++;
    }else{
        $('#p7Rd').css("background-color", "#EF87A7");
        $('#p7Rd1').css("background-color", "#EF87A7");
    }

  }


  var notaFinalP8 = 0;
  function Resp8(){

    ///validar si es entero
        for(var i=0; i<7; i++){    
            if(i==3){
              i=4;
            }
            if(document.getElementById('sn'+i).checked) {
                notaFinalP8++;
                $('#ss'+i).css("background-color", "#5ED188");
            }else{
                notaFinalP8--;
                $('#ss'+i).css("background-color", "#EF87A7");
            }                            

        }

    ///validar si es π
            if(document.getElementById('sn11').checked) {
                notaFinalP8++;
                $('#ss11').css("background-color", "#5ED188");
            }else{
                notaFinalP8--;
                $('#ss11').css("background-color", "#EF87A7");
            } 

    ///validar si es decimal
            if(document.getElementById('sn14').checked) {
                notaFinalP8++;
                $('#ss14').css("background-color", "#5ED188");
            }else{
                notaFinalP8--;
                $('#ss14').css("background-color", "#EF87A7");
            } 

    ///validar si es -
          for(var j=17; j<19; j++){  
            if(document.getElementById('sn'+j).checked) {
                notaFinalP8++;
                $('#ss'+j).css("background-color", "#5ED188");
            }else{
                notaFinalP8--;
                $('#ss'+j).css("background-color", "#EF87A7");
            } 
          }
  }


  var notaFinalP9 = 0;
  function Resp9(){
    if((($('#rConj0').val()).toUpperCase()).replace(/ /g, "") == 'CONJUNTOUNIVERSAL'){
        notaFinalP9++;
        $('#rConj0').css("background-color", "#5ED188");
    }else{
        $('#rConj0').css("background-color", "#EF87A7");
    } 

    if((($('#rConj1').val()).toUpperCase()).replace(/ /g, "") == 'CONJUNTOFINITO'){
        notaFinalP9++;
        $('#rConj1').css("background-color", "#5ED188");
    }else{
        $('#rConj1').css("background-color", "#EF87A7");
    } 


    if((($('#rConj3').val()).toUpperCase()).replace(/ /g, "") == 'CONJUNTOVACIO' || (($('#rConj3').val()).toUpperCase()).replace(/ /g, "") == 'CONJUNTOVACÍO'){
        notaFinalP9++;
        $('#rConj3').css("background-color", "#5ED188");
    }else{
        $('#rConj3').css("background-color", "#EF87A7");
    }


    if((($('#rConj2').val()).toUpperCase()).replace(/ /g, "") == 'CONJUNTOUNITARIO'){
        notaFinalP9++;
        $('#rConj2').css("background-color", "#5ED188");
    }else{
        $('#rConj2').css("background-color", "#EF87A7");
    } 

    

  }


  var notaFinalP10 = 0;
  function Resp10(){


    if(($('#conA').val()).replace(/ /g, "") == '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15'){
        notaFinalP10++;
        $('#conA').css("background-color", "#5ED188");
    }else{
        $('#conA').css("background-color", "#EF87A7");
    } 

    if(($('#conB').val()).replace(/ /g, "") == '4,6,8,10,12'){
        notaFinalP10++;
        $('#conB').css("background-color", "#5ED188");
    }else{
        $('#conB').css("background-color", "#EF87A7");
    } 

    if(($('#conC').val()).replace(/ /g, "") == '2,3,5,7,11,13'){
        notaFinalP10++;
        $('#conC').css("background-color", "#5ED188");
    }else{
        $('#conC').css("background-color", "#EF87A7");
    } 
  }



  var notaFinalP12 = 0;
  function Resp12(){

    if(document.getElementById('srC4').checked){
      $('#selC4').css("background-color", "#5ED188");
      notaFinalP12++;
    }else{
       $('#selC4').css("background-color", "#EF87A7");
    }
  }


  var notaFinalP13 = 0;
  function Resp13(){

    if((($('#rP13Conj0').val()).toLowerCase()).replace(/ /g, "") == 'a∩b'){
        notaFinalP13++;
        $('#rP13Conj0').css("background-color", "#5ED188");
    }else{
        $('#rP13Conj0').css("background-color", "#EF87A7");
    } 

    if((($('#rP13Conj1').val()).toLowerCase()).replace(/ /g, "") == 'a∪b∪c'){
        notaFinalP13++;
        $('#rP13Conj1').css("background-color", "#5ED188");
    }else{
        $('#rP13Conj1').css("background-color", "#EF87A7");
    } 

    if((($('#rP13Conj2').val()).toLowerCase()).replace(/ /g, "") == 'a∩b∩c'){
        notaFinalP13++;
        $('#rP13Conj2').css("background-color", "#5ED188");
    }else{
        $('#rP13Conj2').css("background-color", "#EF87A7");
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
            Preg8();
            Preg9();
            Preg12();
            Preg13();


           function confirmar() {
            Resp1();
            Resp2();
            Resp3();
            Resp5();
            Resp6();
            Resp7();
            Resp8();
            Resp9();
            Resp10();
            Resp12();
            Resp13();

            var nota3_1 = parseFloat($('#calificacion0').val());//0.5
            var nota4 = parseFloat($('#calificacion1').val());//0.75
            var nota5_1 = parseFloat($('#calificacion2').val());//0.25
            var nota11 = parseFloat($('#calificacion3').val());//1

            var nota1 = (notaFinalP1*0.75);
            var nota2 = (notaFinalP2*0.75);
            var nota3 = (notaFinalP3*0.25);
            var nota5 = (notaFinalP5*0.5)/2;
            var nota6 = (notaFinalP6*0.75)/2;
            var nota7 = (notaFinalP7*0.75)/4;
            var nota8 = (notaFinalP8*0.75)/10;
            if(nota8 < 0){
              nota8 = 0;
            }
            var nota9 = (notaFinalP9*0.75)/4;
            var nota10 = (notaFinalP10*0.75)/3;
            var nota12 = (notaFinalP12*0.75);
            var nota13 = (notaFinalP13*0.75)/3;
            
            //alert(nota1+'+'+nota2+'+'+nota3+'+'+nota3_1+'+'+nota4+'+'+nota5+'+'+nota5_1+'+'+nota6+'+'+nota7+'+'+nota8+'+'+nota9+'+'+nota10+'+'+nota11+'+'+nota12+'+'+nota13);
            var notaFinal = (nota1+nota2+nota3+nota3_1+nota4+nota5+nota5_1+nota6+nota7+nota8+nota9+nota10+nota11+nota12+nota13).toFixed(2);//10

                      $("#txtNota").text(notaFinal);
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);                          
              return false
          }
      

      $("#Calificar").click(function() {

        if($('#calificacion0').val() !='' && $('#calificacion1').val() !='' && $('#calificacion2').val() !='' && $('#calificacion3').val() !=''){
          confirmar();
          $('#calificacion0').css("background-color", "#05D576");
          $('#calificacion1').css("background-color", "#05D576");
          $('#calificacion2').css("background-color", "#05D576");
          $('#calificacion3').css("background-color", "#05D576");
        }else{
          $('#calificacion0').focus();
          $('#calificacion0').css("background-color", "#D50545");
          $('#calificacion1').focus();
          $('#calificacion1').css("background-color", "#D50545");
          $('#calificacion2').focus();
          $('#calificacion2').css("background-color", "#D50545");
          $('#calificacion3').focus();
          $('#calificacion3').css("background-color", "#D50545");
        }
      });
    });


