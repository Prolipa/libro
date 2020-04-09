$('.enc').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
});
var respr1 = 0, respr2 = 0;
function Letras() {
    for (var i = 1; i <= 23; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if ($('#' + [i] + '').hasClass("subrayar")) {

        	if ((caja == "expresidente del Ecuador") || (caja == "mi mejor amiga") || (caja == "Chota") || (caja == "el de los zapatos verdes") || (caja == "Tungurahua")) {
                respr1 = respr1 + 1;

                $('#' + [i] + '').addClass('correcto')
            } else {
                respr2 = respr2 + 1;

                $('#' + [i] + '').removeClass('correcto')
                $('#' + [i] + '').addClass('incorrecto')
            }
        } else {

        }
    }
      var buenas = (1 * 10) / 5;
    var resbuenas = buenas * respr1;
    var malas = (1 * 10) / 18;
    var resmalas = malas * respr2;
    var total = resbuenas - resmalas;
   

    var txt1 = document.getElementById('txt1').value;    
    var txt2 = document.getElementById('txt2').value;
    var txt3 = document.getElementById('txt3').value;
    var txt4 = document.getElementById('txt4').value;
    var txt5 = document.getElementById('txt5').value;
    var restxt1 = 0, restxt2 = 0,restxt3 = 0,restxt4 = 0,restxt5 = 0;

    if ((txt1 == "")||(txt2=="")||(txt3 == "")||(txt4 == "")||(txt5 =="")) {
    	alert("Hay campos vacios");
    	window.location.reload();
    }else{
    	if (txt1 == "explicativa") {
    		restxt1 = 1;
    		document.getElementById("txt1").style.backgroundColor = "#6DFF6F";

    	}else{
    		 document.getElementById("txt1").style.backgroundColor = "#F95858";

    	}
    	if (txt2 == "explicativa") {
    		restxt2 = 1;
    		document.getElementById("txt2").style.backgroundColor = "#6DFF6F";

    	}else{
    		 document.getElementById("txt2").style.backgroundColor = "#F95858";
    	}
    	if (txt3 == "especificativa") {
    		restxt3 = 1;
    		document.getElementById("txt3").style.backgroundColor = "#6DFF6F";

    	}else{
    		 document.getElementById("txt3").style.backgroundColor = "#F95858";
    	}
    	if (txt4 == "explicativa") {
    		restxt4 = 1;
    		document.getElementById("txt4").style.backgroundColor = "#6DFF6F";

    	}else{
    		 document.getElementById("txt4").style.backgroundColor = "#F95858";
    		
    	}
    	if (txt5 == "especificativa") {
    		restxt5 = 1;
    		document.getElementById("txt5").style.backgroundColor = "#6DFF6F";

    	}else{
    		 document.getElementById("txt5").style.backgroundColor = "#F95858";
    	}

    	var subtotal2 = parseInt(restxt1)+parseInt(restxt2)+parseInt(restxt3)+parseInt(restxt4)+parseInt(restxt5);
    	var total2 = (subtotal2*10)/5;
    	var totales =(total + total2)/2;

    	 if (totales < 0) {
    	var totales2 = 0;
    	 $('#txtNota').html(totales2.toFixed(2) + ' ');
    	 document.getElementById('bt_comprobar').disabled = true;
    	 $("input").prop('disabled', true);
    	 $("span").prop('disabled', true);
    }else{
    	 $('#txtNota').html(totales.toFixed(2) + ' ');
    	 document.getElementById('bt_comprobar').disabled = true;
    	 $("input").prop('disabled', true);
    	 $("span").prop('disabled', true);
    }

    }
}