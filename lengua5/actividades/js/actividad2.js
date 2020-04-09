var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("11");

var testimg = [ 
["1",'img/i1_p11_act2.jpg'],
    ["2",'img/i2_p11_act2.jpg'], //respuesta correcta
    ["3",'img/i3_p11_act2.jpg'],
    ["4",'img/i4_p11_act2.jpg'],
    ["5",'img/i5_p11_act2.jpg'],
    ["6",'img/i6_p11_act2.jpg'],
]

finitimg();


function finitimg() {
	var cajasImg = document.getElementsByClassName('imagen');
	var imagen = ['img/i1_p11_act2','img/i2_p11_act2','img/i3_p11_act2','img/i4_p11_act2','img/i5_p11_act2','img/i6_p11_act2'];
    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        
		$('#'+cajasImg[i].id).html('<input placeholder="Ingresa un nùmero" type="number" name="" id="R' + testimg[i][0] +'" class="form-control"><img src="'+ testimg[i][1] +'" class="img-responsive" id="I'+ testimg[i][0] +'" alt="' + testimg[i][0] + '" width="400px" height="180px">');


    } 
}
  function calificarV() {
        var r1 = document.getElementById("R1").value;
        var i1 = $("#I1")[0].alt;
        var r2 = document.getElementById("R2").value;
        var i2 = $("#I2")[0].alt;
        var r3 = document.getElementById("R3").value;
        var i3 = $("#I3")[0].alt;
        var r4 = document.getElementById("R4").value;
        var i4 = $("#I4")[0].alt;
        var r5 = document.getElementById("R5").value;
        var i5 = $("#I5")[0].alt;
        var r6 = document.getElementById("R6").value;
        var i6 = $("#I6")[0].alt;
        var res1, res2, res3, res4, res5, res6;



        if (r1 == i1) {
             res1 = 10;
             document.getElementById("R1").style.backgroundColor = "#6DFF6F";
        }else{
            res1 = 0;
            document.getElementById("R1").style.backgroundColor = "#F95858";
        }

        if (r2 == i2) {
             res2 = 10;
             document.getElementById("R2").style.backgroundColor = "#6DFF6F";
        }else{
            res2 = 0;
            document.getElementById("R2").style.backgroundColor = "#F95858";
        }

        if (r3 == i3) {
             res3 = 10;
             document.getElementById("R3").style.backgroundColor = "#6DFF6F";
        }else{
            res3 = 0;
            document.getElementById("R3").style.backgroundColor = "#F95858";
        }

        if (r4 == i4) {
             res4 = 10;
             document.getElementById("R4").style.backgroundColor = "#6DFF6F";
        }else{
            res4 = 0;
            document.getElementById("R4").style.backgroundColor = "#F95858";
        }

        if (r5 == i5) {
             res5 = 10;
             document.getElementById("R5").style.backgroundColor = "#6DFF6F";

        }else{
            res5 = 0;
            document.getElementById("R5").style.backgroundColor = "#F95858";
        }

        if (r6 == i6) {
             res6 = 10;
             document.getElementById("R6").style.backgroundColor = "#6DFF6F";
        }else{
            res6 = 0;
            document.getElementById("R6").style.backgroundColor = "#F95858";
        }
        var result = parseInt(res1)+parseInt(res2)+parseInt(res3)+parseInt(res4)+parseInt(res5)+parseInt(res6);
        var total = result/6;
        $('#txtNota').html(total.toFixed(2)+' ');

        document.getElementById('R1').disabled = true;
        document.getElementById('R2').disabled = true;
        document.getElementById('R3').disabled = true;
        document.getElementById('R4').disabled = true;
        document.getElementById('R5').disabled = true;
        document.getElementById('R6').disabled = true;
        document.getElementById('bt_comprobar').disabled = true;
        
        
    }

  
