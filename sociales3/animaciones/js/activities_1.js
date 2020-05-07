

//coloca el nombre del alumno en el div nombre_alumno
//genera pdf con la actividad
function save_open_activity_to_local(alumno) {
    //console.log($('#txtAlumno'));
    var nom = "#" + alumno;
    $('#nombre_alumno').addClass("no-valid");
    if (valida_existe('txtAlumno')) {
        $('#nombre_alumno').removeClass('no-valid');
        $('#nombre_alumno').append('' + $(nom).val());
        $('#nombre_alumno').attr('hidden', false);
        $('#botonera').hide();
        ocultar_by_class('ocultable');
        save_to_pdf('activity');
        // demoFromHTML();
        $('#nombre_alumno').attr('hidden', true);
        $(nom).val('');
        $('#myModal').modal('hide');
        ocultar_by_class('alert');
    }
    mostrar_by_class('ocultable');

}

function carga_selects(className, values, btnCalificar) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("display-none");
        clear_select(elements[i]);
        vals = reorder_array(values);
        var option = document.createElement("option");
        option.text = 'Seleccione...';
        option.value = 'Seleccione';
        elements[i].add(option);
        for (var j = 0; j < vals.length; j++) {
            option = document.createElement("option");
            option.text = vals[j];
            option.value = vals[j];
            elements[i].add(option);
        }
    }
    ;
    document.getElementById('txtNota').innerHTML = ' / 10';
    habilitar_by_class(className);
}
function iniciar_act_calif_selects(className, values) {
    carga_selects(className, values);
    habilitar_by_class('btnReiniciar');
    habilitar_by_class('btnCalificar');
    desabilitar_by_class('btnIniciar');
}

function restart_act_calif_selects(className, values) {
    carga_selects(className, values);
    habilitar_by_class('btnCalificar');
}

function calificar(respuestas, soluciones, disabledClass) {
    var valor_pregunta = 10 / respuestas.length;
    var nota = 0;
    var index = 0;
    respuestas.forEach(function (elementId) {
        var select = document.getElementById(elementId);
        if (select.value.toLowerCase() == soluciones[index].toLowerCase()) {
            nota += valor_pregunta;
        }
        ;
        index++;
    });
    document.getElementById('txtNota').innerHTML = nota + ' / 10';
    $('html,body').animate({
        scrollTop: $("#nota").offset().top
    }, 2000);
    desabilitar_by_class(disabledClass);
    desabilitar_by_class('btnCalificar');
}

function restart_inputs(className) {
    clear_inputs_by_class(className);
    habilitar_by_class(className);
    document.getElementById('txtNota').innerHTML = ' / 10';

}


function verificar_contenido(answer, options) {
    result = false;
    //console.log(answer);
	respuesta = answer.trim();
	if(answer!=""&&answer!=" "){
	   for (var i = 0; i < options.length; i++) {
        // if (answer.indexOf(options[i]) > -1) {
        if (options[i].indexOf(answer) > -1) {
            result = true;
        }
    }
 }
    return result;
}




function comprobar_calificar_txt() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
	console.log(respuestas);
	console.log(soluciones);
	valor_preg=valor_pregunta(respuestas);
	var nota =0;
	for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            respuestas[i].classList.add('valid');
            respuestas[i].classList.remove('no-valid');
			nota+= valor_preg;
        } else {
            respuestas[i].classList.add('no-valid');
            respuestas[i].classList.remove('valid');
        }
     }
	document.getElementById('txtNota').innerHTML=Math.round(nota)+' / 10';
    desabilitar_by_class('respuestas');
	
}

function valor_pregunta(respuestas){
	var valor = 10 /respuestas.length;
	return valor; 
}