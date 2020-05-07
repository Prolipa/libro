// JavaScript Document
function MisPreguntas(preguntas){
	var inputs1;
	var i;
	var j;
	var correctos=0;
	var incorrectos=0;
	var Preguntas;
	var caja1;
	caja1 = document.getElementById("bg_final");
	caja1.style.display = "none";
	Preguntas = preguntas; //almacenamos en PREGUNTAS para utilizar en las demas funciones
	inputs1 = Formulario.getElementsByTagName("input");
			
	Preguntas.sort(f_randomico);			
	for(i=0; i<Preguntas.length;i++){
		var elem = document.getElementById("a"+i);
		//inputs1 = Formulario.getElementsByTagName("input");
		elem.innerHTML = Preguntas[i][0];	
		inputs1[i].input = "";
		inputs1[i].placeholder = "V - F";
		inputs1[i].maxLength = 1;
		//inputs1[i].style.boxShadow = "5px 5px 5px #006600"; //ponemos estilo
		//inputs1[i].className= "exito"; // llamamos a la clase cone stilo
	}
	contador_t.innerHTML = 1;
	ejercicios_t.innerHTML = 1;
	document.getElementById("comprobar").onclick = function(e){
		for(j=0; j<Preguntas.length;j++){
			var t1 = inputs1[j].value.toUpperCase(); //convertimos a mayuscula y almacenamos
			var t2 = Preguntas[j][1]; //almacenamos la respuesta
			if(t1 == t2){ //comparamos
				correctos++; //si es correcto pintamos de verde
				//inputs1[j].style.boxShadow = "5px 5px 5px #00FF66"; //ponemos estilo
				inputs1[j].style.color = "#009900"; //ponemos estilo
				inputs1[j].style.fontWeight = "800"; //ponemos estilo
			}else{
				incorrectos++; //si es incorrectos, pintamos de rojo
				//inputs1[j].style.boxShadow = "5px 5px 5px #ff0000"; //ponemos estilo
				inputs1[j].style.color = "#FF0000"; //ponemos estilo
				inputs1[j].style.fontWeight = "800";
			 }
		}
		Calculo_nota("mc_calificacion", Preguntas.length, correctos); 
		//calculo_nota(id del lugar de impresion, cantidad de items, correctos, incorrectos)
		e.target.disabled= true; //deshabilitamos el boton
		PantallaFinal(caja1);
	}
}