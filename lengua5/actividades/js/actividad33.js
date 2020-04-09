var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("27");

var testimg = [ 
["1","B","El coche rojo ganó la carrera."],
    ["2","U","¡Silencio, por favor!."], //respuesta correcta
    ["3","U","Hace calor."],
    ["4","B","La camiseta blanca es de Juan."],
   
]
finitimg();
function finitimg() {
	var cajasImg = document.getElementsByClassName('imagen');
	var imagen = ['El coche rojo ganó la carrera.','¡Silencio, por favor!.','Hace calor.','La camiseta blanca es de Juan.'];
    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
      $('#'+cajasImg[i].id).html('<div class="table-responsive"><table class="table"><thead><tr><th><input type="" alt="' + testimg[i][1] + '" value="'+ testimg[i][2] +'" id="I'+ testimg[i][0] +'" name="" class="form-control cajas2" disabled></th><th><input type="text" id="R' + testimg[i][0] +'" class="form-control mayuscula cajas1"></th></tr></thead></table></div>');


        

    } 
}

  function calificarN34() {
        var r1 = document.getElementById("R1").value.toUpperCase();
        var i1 = $("#I1")[0].alt;
        var r2 = document.getElementById("R2").value.toUpperCase();
        var i2 = $("#I2")[0].alt;
        var r3 = document.getElementById("R3").value.toUpperCase();
        var i3 = $("#I3")[0].alt;
        var r4 = document.getElementById("R4").value.toUpperCase();
        var i4 = $("#I4")[0].alt;
      
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

        var result = parseInt(res1)+parseInt(res2)+parseInt(res3)+parseInt(res4);
        var total = result/4;
        $('#txtNota').html(total.toFixed(2)+' ');
         document.getElementById('R1').disabled = true;
         document.getElementById('R2').disabled = true;
         document.getElementById('R3').disabled = true;
         document.getElementById('R4').disabled = R
         document.getElementById('bt_comprobar').disabled = true;
        
        
    }

  
