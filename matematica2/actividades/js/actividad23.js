function mostrar(){
	document.getElementById('circle').style.display='';
	document.getElementById('circle1').style.display='none';
	document.getElementById('in1').value = 0;
	return false;
}

function mostrar1(){
	document.getElementById('circle1').style.display='';
	document.getElementById('circle').style.display='none';
	document.getElementById('in1').value = 1;
	document.getElementById('in1').style.color='#fff';
	return false;

}

function mostrar2(){
	document.getElementById('circle2').style.display='';
	document.getElementById('circle3').style.display='none';
	document.getElementById('in2').value = 1;
	document.getElementById('in2').style.color='#fff';
	return false;
}

function mostrar3(){
	document.getElementById('circle3').style.display='';
	document.getElementById('circle2').style.display='none';
	document.getElementById('in2').value = 0;
	return false;
}

function mostrar4(){
	document.getElementById('circle4').style.display='';
	document.getElementById('circle5').style.display='none';
	document.getElementById('in3').value = 0;
	return false;
}

function mostrar5(){
	document.getElementById('circle5').style.display='';
	document.getElementById('circle4').style.display='none';
	document.getElementById('in3').value = 1;
	document.getElementById('in3').style.color='#fff';
	return false;
}

function comprobar_calificar_txt1() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            respuestas[i].classList.add('valid');
            respuestas[i].classList.remove('no-valid');
            nota += valor;
        } else {
            respuestas[i].classList.add('no-valid');
            respuestas[i].classList.remove('valid');
        }
        ;
    }
    desabilitar_by_class('respuestas');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota.toFixed(2) + ' / 10';
}

