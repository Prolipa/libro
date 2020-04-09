var n1,n2,n3,i,img1,img2,img3, cor=0, inc=0, ejer=5, itemsT= 3*ejer, cont=0,calificacion=10;
var claseAnimada='animate bounceIn';
$("#txtNota").html("0");
$("#n_pagina").html("12");
f_iniciar();
function f_iniciar() {
	QuitaClase(".nota",claseAnimada);
	AgregaClase(".actividad",claseAnimada);
	$( "#a0" ).focus();
	$("#trace").hide();
	$("#n_cont").html(cont+1);
	$("#n_ejer").html(ejer);
	$(".cajas").html('');
	n1 = Math.floor(Math.random()*20 )+ 10;
	n2 = Math.floor(Math.random()*20 )+ 10;
	n3 = Math.floor(Math.random()*20 )+ 10;
	img1 = "img/i1_p12_act1.jpg";
	img2 = "img/i2_p12_act1.jpg";
	img3 = "img/i3_p12_act1.jpg";
	for (i = 0; i < n1; i++) {
	    $('#caja1').append('<img src="' + img1 + '" />'); 
	}
	for (i = 0; i < n2; i++) {
	    $('#caja2').append('<img src="' + img2 + '" />'); 
	}
	for (i = 0; i < n3; i++) {
	    $('#caja3').append('<img src="' + img3 + '" />'); 
	}
	removerClase(a0);
	removerClase(a1);
	removerClase(a2);
	console.log(n1,n2,n3);
	var bt_comprobar = document.getElementById('bt_comprobar');
	bt_comprobar.addEventListener("click", f_comprobar);
	function f_comprobar(){
		AgregaClase(".nota",claseAnimada);
		QuitaClase(".actividad",claseAnimada);
		this.removeEventListener("click", f_comprobar);
		var r0,r1,r2;
		r0= document.getElementById("a0").value;
		r1= document.getElementById("a1").value;
		r2= document.getElementById("a2").value;
		if(r0 == n1){
			cor++;
			f_ok(a0);
		}else{
			inc++;
			f_no(a0);
		}
		if(r1 == n2){
			cor++;
			f_ok(a1);
		}else{
			inc++;
			f_no(a1);
		}
		if(r2 == n3){
			cor++;
			f_ok(a2);
		}else{
			inc++;
			f_no(a2);
		}
		Calculo_nota();
		cont++;
	};
	
}