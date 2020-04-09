var titulos = "aplico";
$("#txtNota").html("0");
$("#n_pagina").html("13");
var testimg= [
["1","El gusano de la manzana",'img/i1_p13_act8.png'],
["2","La poesía",'img/i2_p13_act8.png'],
]

finitimg();


function finitimg() {
	var cajasImg = document.getElementsByClassName('imagen');
	var imagen = ['img/i1_p13_act8.png','img/i2_p13_act8.png'];
    testimg.sort(f_randomico);
    for (i = 0; i < cajasImg.length; i++) {
        
		$('#'+cajasImg[i].id).html('<img src="'+ testimg[i][2] +'" class="img-responsive" id="I'+ testimg[i][0] +'" alt="' + testimg[i][1] + '" > <input placeholder="Escribe tu respuesta" type="text" name="" id="R' + testimg[i][0] +'" class="form-control cajas">');


    } 

}

function calificarK() {
	var inpt1 = document.getElementById("R1").value;
	var img1 = $("#I1")[0].alt;
	var inpt2 = document.getElementById("R2").value;
	var img2 = $("#I2")[0].alt;

	var res1, res2;

	if (inpt1 == img1) {
		res1 = 10;
		document.getElementById("R1").style.backgroundColor = "#6DFF6F";
	}else{
		 document.getElementById("R1").style.backgroundColor = "#F95858";
		 res1 =0;
	}
	if (inpt2 == img2) {
		res2 = 10;
		document.getElementById("R2").style.backgroundColor = "#6DFF6F";
	}else{
		res2 = 0;
		document.getElementById("R2").style.backgroundColor = "#F95858";
	}
	var result = parseInt(res1)+parseInt(res2);
    var total = result/2;
    $('#txtNota').html(total.toFixed(2)+' ');

    document.getElementById('R1').disabled = true;

    document.getElementById('R2').disabled = true;

    document.getElementById('bt_comprobar').disabled = true;
        
        
}