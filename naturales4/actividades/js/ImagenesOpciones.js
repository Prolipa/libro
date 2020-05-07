// JavaScript Document
function f_iniciar(preguntas, anchoA, altoA, IdPregunta, IdRepetir, IdImprimir, IdFinal, TituloLibro){
	var contador_t = document.getElementById("t_contador");
	var ejercicios_t = document.getElementById("t_ejercicios");
	preguntas.sort(f_randomico);
	var PreguntA = document.getElementById(IdPregunta);
	var bt_repe = document.getElementById(IdRepetir); //boton repetir
	var bt_impr = document.getElementById(IdImprimir);			
	var pant_final= document.getElementById(IdFinal);		
	pant_final.style.display = "none";
	var sw=0;
	var contador=0;
	var correctos=0;
	var incorrectos=0;
	var botones;
	var creados = true; //control de creacion de options
	CargaPregunta(preguntas);
	function CargaPregunta(vectorPreguntas){
		//traces.innerHTML = vectorPreguntas[contador];
		var i;				
		var j;				
		var respuestas=[];
		PreguntA.innerHTML = '';
		var elem = document.createElement("img");
		elem.setAttribute("src", vectorPreguntas[contador][0]);
		elem.setAttribute("name", "b"+i);
		elem.setAttribute("width", anchoA);
		elem.setAttribute("height", altoA);				
		elem.setAttribute("alt", "imagenes" + i);
		PreguntA.appendChild(elem);
		//OBTENER CANTIDAD DE BOTONES PARA RESPUESTAS
		for(j=0;j<vectorPreguntas[contador].length;j++){
			//traces.innerHTML = j;
			botones=j;
		}
		for(i=0; i<botones;i++){
			if(contenido[contador][i+1]== undefined){ //controlar si hay la misma cantidad  de botones y respuestas
				respuestas.push("FALTAN RESPUESTAS " + i);
			}
			respuestas.push(contenido[contador][i+1]);			
		}
		respuestas.sort(f_randomico);
		for(i=0; i<botones;i++){	
			var x = document.createElement("div"); //creamos el div				
			document.getElementById("Contenedor_Botones"+sw).appendChild(x); //agregamos los divs al contenedor
			var x1 = document.createElement("button"); //creamos botones
			document.getElementById("Contenedor_Botones"+sw).appendChild(x1); //agregamos los botones al contenedor
			sw >0 ? sw--: sw++; //intercambio de columnas para insertar los divs y botones intercalados en columnas	
			var t = document.createTextNode(respuestas[i]); //almacenamos el contenido a mostrar en cada boton		
			x1.classList.add("BtDefault"); //aplicamos clase CORRECTOS
			x1.appendChild(t); //agregamos los textos al boton				
			x1.name = "bt"+i; //asignamos un nombre al boton
			x1.value = respuestas[i]; //asignamos la respuesta como valor, para comparacion de respuestas
			x1.disabled = false;					
		}				
		creados = false;
		//var divs = document.querySelectorAll('button'), i;				
		var divs = document.querySelectorAll('#mc_botones button'), i;	 //seleccionamos los botones de un contenedor pirnicpal
		for (i = 0; i < divs.length; ++i) {
		  //divs[i].style.color = "red";
			divs[i].addEventListener("click", function (e) {
				if(this.value == contenido[contador][1]){
					correctos++;
					//this.setAttribute("style", "background-color:#00cc99; border-radius:5px; border:1px #cccccc solid; padding:5px; margin:5px; width:80%;height:80px;");
					this.classList.add("BtCorrecto"); //aplicamos clase CORRECTOS
				}else{
					incorrectos++;
					//this.setAttribute("style", "background-color:#ff6699; border-radius:5px; border:1px #cccccc solid; padding:5px; margin:5px; width:80%;height:80px;");
					this.classList.add("BtIncorrecto");//aplicamos clase INCORRECTOS
				}
				Deshabilitar();
				//traces.innerHTML = this.name;
				Calculo_nota("txtNota", contenido.length, correctos,incorrectos);
				contador++;	
				//traces.innerHTML = "fin " + contador;
				TimerListener();
			});

		}
	}
	function Deshabilitar(){
		var divs = document.querySelectorAll('#mc_botones button'), i;	
		for (i = 0; i < divs.length; ++i) {
			divs[i].disabled = true;
		}
	}
	//pausa para volver a ejecutar
	function TimerListener(){			
		setTimeout(function(e){
			ComprobacionFinal()},3000); // 3000ms = 3s
	}
	function ComprobacionFinal(){
		if(contador < ejercicios){
			Eliminar_Contenido("#Contenedor_Botones0");
			Eliminar_Contenido("#Contenedor_Botones1");
			CargaPregunta(contenido);
		}else{
			//PantallaFinal(pant_final);
			PantallaFinal(pant_final);
		}
	}
}