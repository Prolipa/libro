	 var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-31682384-1']);
	  _gaq.push(['_trackPageview']);

	  /*(function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();*/

 	var reproducirsonidos=false;



	var lienzo;
	//ancho del visor, en porcentaje sobre el ancho pantalla
	//Controla si es la primera vez que se recalcula el tamaño de canvas
	var anchoinicial;;
	var altoinicial;
	//array que almacenara los colores de fondo de la tabla
	var coloresdefondo
	//almacena el color de fondo activo
	var colordefondo="blue"
	//grosor del pincel
	var grosor=5;
	//grosor del borrador
	var grosorborrador=10;
	//tipo de pincel 1 cuadrado 2 redondo
	var tipopincel=1;
	//accion a realizar 1 pintar, 2 borrar, 3 pintar cuadrado, 4 pintar circulo
	var accion=1;
	function cambiacolordefondo(cual) {
		colordefondo=cual.dataset.color;
		alert(cual.dataset.color);
		for (var x=0; x<coloresdefondo.length; x++) {
			coloresdefondo[x].style.borderColor="";
		}
		cual.style.borderColor="gray";

	}
	window.onresize=function() {

	}

	window.onload=function() {
		//las celdas de la tabla de colores de fondo la cargamos en un array y le asignamos de color de fondo el id
		coloresdefondo=contenedoropciones.getElementsByClassName("celdascoloresdefondo");
		for (var x=0; x<coloresdefondo.length; x++) {
			coloresdefondo[x].style.backgroundColor=coloresdefondo[x].dataset.color
			coloresdefondo[x].onclick=function() {cambiacolordefondo(this)};
		}
		// le pongo el borde negro al color blanco
		coloresdefondo[12].style.borderColor="gray";




		//le damos a canvas el ancho inicial de altura (la mitad del ancho) luego se recalculará automáticamente, gracias al css.
		//las almacenamos para poder calcular su desviación en función de posibles cambios en el ancho del navetador
		anchoinicial=window.innerWidth*100/100;
		prueba.width=window.innerWidth*100/100;
		altoinicial=prueba.height=prueba.width/4;
		//iniciamos el entorno de dibujo 2d
		lienzo= prueba.getContext("2d");
		// pintar almacena si el cursor está apretado se activa onmousedown y se desactiva con onmouseup
		pintar=false;
		// mostramos la pagina cambiando la opacidad a body y cambiamos el tañaño del fondo a pantalla completa. Esto lo hago porque si no da un pantallazo de entrada
		document.getElementsByTagName("body")[0].style.opacity="1"

		//activamos pintar cuando baja el raton
		prueba.onmousedown=function() {pintar=true};
		//desactivamos pintar cuando baja el raton
		prueba.onmouseup=function() {pintar=false}
		//controlamos el movimiento del cursos en pc y movemos el visor
		//al ser evento move estamos en pc, enviamos como tercer parametro el scroll vertical de la pantalla
		prueba.onmousemove=function(event) {
			pinta(event.clientX,event.clientY,window.pageYOffset);
		};

		//controlamos el movimiento del cursos en tactil y movemos el visor
		if ("ontouchstart" in document.documentElement) {

			   prueba.addEventListener("touchmove", function(event) {
				   event.preventDefault();
				   var auxpintar=pintar;
				   //simulamos que el boton del raton esta pulsado
			   		pintar=true;
					for (var i = 0; i < event.touches.length; i++) {
						var touch = event.touches[i];
						//al ser evento move estamos en móvil, enviamos como tercer parametro 0 como scroll vertical de la pantalla
						pinta(touch.pageX,touch.pageY,0)
					}
					pintar=auxpintar;
			   }, false);
		}
	}

	function pinta(x,y,scrollsuperior) {
		//comprobamos si esta pulsado el boton del ratón
		if (pintar) {
			//calculamos la posible desviacion de las cordenadas como consecuencia del posible scroll y cambio del tamaño del navegador
			x=x-prueba.offsetLeft;
			y=y-prueba.offsetTop+scrollsuperior;
			var diferenciax=prueba.offsetWidth-anchoinicial
			var porcentajeposicionx=x*100/prueba.offsetWidth;
			x=x-(diferenciax*porcentajeposicionx/100)
			var diferenciay=prueba.offsetHeight-altoinicial
			var porcentajeposiciony=y*100/prueba.offsetHeight;
			y=y-(diferenciay*porcentajeposiciony/100);
			if (accion===1) {
				//está activado pintar
				lienzo.fillStyle = colordefondo;
				if (tipopincel===1) {
					//está activado pincel cuadrado
					lienzo.fillRect (x-grosor/2, y-grosor/2, grosor, grosor);
				} else {
					//está activado pincel redondo
					lienzo.beginPath();
					lienzo.arc(x,y,grosor/2,0,2*Math.PI);
					lienzo.fill();
				}
			}
			if (accion===2) {
				//está activado borrar
				lienzo.clearRect(x-grosorborrador/2, y-grosorborrador/2, grosorborrador, grosorborrador);

			}
		}
	}

	function cambiacolordefondo(cual) {
		//ha hecho click en un color, lo selecciono como color de fondo, quito el borde a todos los colores, se lo pondo al que le han hecho click
		colordefondo=cual.dataset.color;
		for (var x=0; x<coloresdefondo.length; x++) {
			coloresdefondo[x].style.borderColor="";
		}
		cual.style.borderColor="gray";

	}

	function cambiagrosor(x) {
		//cambio el grosor del pincel
		grosor=x.value*1;
	}
	function cambiagrosorborrador(x) {
		//cambio el grosor del borrador
		grosorborrador=x.value*1;
	}
	function cambiapincel(x) {
		//cambio de tipo de pincel, almaceno el tipopincel, cambio los colores de las celdas
		x.style.borderColor="gray";
		x.style.backgroundColor="white";
		if (x.id==="celdapincelcuadrado") {
			tipopincel=1;
			celdapincelredondo.style.borderColor="transparent";
			celdapincelredondo.style.backgroundColor="transparent";
		} else {
			tipopincel=2;
			celdapincelcuadrado.style.backgroundColor="transparent";
			celdapincelcuadrado.style.borderColor="transparent";
		}
	}

	function cambiaaccion(cual) {
		//cambio la accion de pintar a borrar y cambio los colores de las celdas. lo he dejado preparado por si añado mas acciones, he hay el loop
		var acciones=opcionesdedibujo.getElementsByClassName("celdaaccion");
		for (var x=0; x<acciones.length; x++) {
			if (acciones[x]===cual) {
				acciones[x].style.borderColor="gray";
				acciones[x].style.backgroundColor="white";
			} else {
				acciones[x].style.borderColor="transparent";
				acciones[x].style.backgroundColor="transparent";
			}
		}
		if (cual.id==="xpintar") {
			accion=1;
		}
		if (cual.id==="xborrar") {
			accion=2;
		}
	}

	function borrartodo() {
		lienzo.clearRect(0,0,4000, 4000);
	}
