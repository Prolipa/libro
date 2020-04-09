var n1=0,n2=0,i,j, cor=0, inc=0, ejer=4, itemsT= 5*ejer, cont=0,calificacion=10,v_imagenes=[],inputs=[],cajas=[],resp=[];
var claseAnimada='animate bounceIn';
$("#txtNota").html("0"); //impresion de nota
$("#n_pagina").html("13"); //impresion de pagina
inputs = ['r1','r2','r3','r4','r5'];
cajas=['imgs'];
f_iniciar();
function f_iniciar() {
	QuitaClase(".nota",claseAnimada);
	AgregaClase(".actividad",claseAnimada);
	$("#trace").hide();//resultados
	$("#n_cont").html(cont+1);//contador de ejercicios
	$("#n_ejer").html(ejer);//total de ejercicios
	resp=[];
	v_imagenes=[];
	n2=0;
	$(inputs).each(function(){
		var temp = $("#"+this).val('');			
		removerClase(temp);
	})
	for(i=0;i<4;i++){
		n1 = Math.floor((Math.random() * 4) + 4);
		n2 = n2 + n1;
		resp.push(n1);
	}
	n2 = (30-n2);
	$("#r1").focus();
	//console.log(n2);
	resp.push(n2);//cantidad de numeros para importar imagenes
	for(i=0;i<resp.length;i++){
		for(j=1;j<=resp[i];j++){
			v_imagenes.push("<img src='img/i"+(i+1)+"_p13_act1.jpg' class='c_imagenes'>");
		}
	}
	v_imagenes.sort(f_randomico);
	$("#imgs").html('');
	$("#imgs").append(v_imagenes);
	console.log('respuestas >> ' + resp);
	var bt_comprobar = document.getElementById('bt_comprobar');//boton comprobar
	bt_comprobar.addEventListener("click", f_comprobar);
	function f_comprobar(){
		AgregaClase(".nota",claseAnimada);
		QuitaClase(".actividad",claseAnimada);
		this.removeEventListener("click", f_comprobar);
		for(i=0;i<inputs.length;i++){
			var temp = $("#"+inputs[i]);
			if(temp.val() == resp[i]){
				cor++;
				f_ok(temp);
			}else{
				inc++;
				f_no(temp);
			}
		}
		Calculo_nota();
		cont++;
	};
}