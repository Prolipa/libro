
//Genera un pdf, del elemento html que le indiques
function mostrar_alerta(text){

}
function save_to_pdf(htmlElementId) {
    var element = document.getElementById(htmlElementId);
    // html2pdf(element);

    html2pdf(element, {
        margin: 0.5,
        filename: 'actividad.pdf',
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {dpi: 192, letterRendering: true},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
    });
}
//coloca el nombre del alumno en el div nombre_alumno
//genera pdf con la actividad
function save_open_activity_to_local(alumno) {
    //console.log($('#txtAlumno'));
    var nom = "#" + alumno;
    var A_guardar = "";
    $('#nombre_alumno').addClass("no-valid");
    if (valida_existe('txtAlumno')) {
        $('#nombre_alumno').removeClass('no-valid');
        $('#nombre_alumno').html('').append('Alumno: ' + $(nom).val() + "     Puntaje: " +  $("#txtNota").html() );
        $('#nombre_alumno').attr('hidden', false);
        $('#botonera').hide();
        ocultar_by_class('ocultable');
        mostrar_by_class('txtAlumno');
        save_to_pdf('activity');
        // demoFromHTML();
        //$('#nombre_alumno').attr('hidden', true);
        $(nom).val('');
        $('#myModal').modal('hide');
        ocultar_by_class('alert');
        ocultar_by_class('txtAlumno');
    }
    mostrar_by_class('ocultable');

}

//carga los selects marcados con la clase respuestas aleatoriamente con los valores indicados
function carga_selects(values) {
    // console.log(values);
    var elements = document.getElementsByClassName('respuestas');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("display-none");
        elements[i].classList.remove("valid");
        elements[i].classList.remove("no-valid");
        clear_elements(elements[i]);
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
    habilitar_by_class('respuestas');
}
function iniciar_act_calif_selects(values) {
    carga_selects(values);
    //$(".btn").tooltip('hide');
//    document.getElementsByClassName('btnRepetir').removeAttribute('disabled');
//    document.getElementByClassName('btnCalificar').removeAttribute('disabled');
//    document.getElementByClassName('btnIniciar').setAttribute('disabled', 'true');

    abled('btnRepetir');
    abled('btnCalificar');
    disabled('btnIniciar');
//    habilitar_by_class('btnRepetir');
//    habilitar_by_class('btnCalificar');
//    desabilitar_by_class('btnIniciar');
}

function restart_act_calif_selects(values) {
    carga_selects(values);
    habilitar_by_class('btnCalificar');
}


function abled(className) {
    var elems = document.getElementsByClassName(className);
    for (var i = 0; i < elems.length; i++) {
        elems[i].removeAttribute('disabled');
    }

}
function disabled(className) {
    var elems = document.getElementsByClassName(className);
    for (var i = 0; i < elems.length; i++) {
        elems[i].setAttribute('disabled', true);
    }

}

//function califica_seleccion(className, soluciones) {
//    var respuestas = document.getElementsByClassName(className);
//    var valor_preg = valor_pregunta(respuestas);
//    for (var i = 0; i < respuestas.length; i++) {
//        if (respuestas[i].value.toLowerCase() == soluciones[i].toLowerCase()) {
//            nota += valor_pregunta;
//        }
//    }
//}
//;






//function calificar(respuestas, soluciones, disabledClass) {
//    var valor_pregunta = 10 / respuestas.length;
//    var nota = 0;
//    var index = 0;
//    respuestas.forEach(function (elementId) {
//        var select = document.getElementById(elementId);
//        if (select.value.toLowerCase() == soluciones[index].toLowerCase()) {
//            nota += valor_pregunta;
//        }
//        ;
//        index++;
//    });
//    document.getElementById('txtNota').innerHTML = nota + ' / 10';
//    $('html,body').animate({
//        scrollTop: $("#nota").offset().top
//    }, 2000);
//    desabilitar_by_class(disabledClass);
//    desabilitar_by_class('btnCalificar');
//}

function restart_inputs(className) {
    clear_inputs_by_class(className);
    habilitar_by_class(className);
    habilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = ' / 10';
}


function verificar_contenido(answer, options) {
    result = false;
    respuesta = answer.trim();
    if (answer != '' && answer != '') {
        for (var i = 0; i < options.length; i++) {
            control = options[i].length - respuesta.length
            if (options[i].indexOf(respuesta) > -1 && control == 0) {
                result = true;
            }
        }
    }
    return result;
}

function comprobar_calificar_txt() {
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
    document.getElementById('txtNota').innerHTML = Math.round(nota) + ' / 10';
}
function comprobar_subrayar() {
    var respuestas = document.getElementsByClassName('respuestas');
    var soluciones = document.getElementsByClassName('solucion');
    var subrayar = document.getElementsByClassName('subrayar');
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (verificar_contenido(respuestas[i].value.toLowerCase(), soluciones[i].value.toLowerCase().split('*'))) {
            subrayar[i].classList.add('valid');
            subrayar[i].classList.remove('no-valid');
            nota += valor;
        } else {
            subrayar[i].classList.add('no-valid');
            subrayar[i].classList.remove('valid');
        }
        ;
    }
    desabilitar_by_class('respuestas');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota + ' / 10';
}

function valor_pregunta(respuestas) {
    var valor = 10 / respuestas.length;
    return valor;
}

function calc_valor_pregunta(respuestas, total) {
    var valor = total / respuestas.length;
    return valor;
}
function calificar_abierta() {
    console.log('calificar abiertas')
    var elList = document.getElementsByClassName('nota-abierta');
    var nt = 0.0;
    var vacio = 0;
    for (var i = 0; i < elList.length; i++) {
        if ($(elList[i]).val() == '' || $(elList[i]).val() == ' ') {
            $(elList[i]).removeClass('valid')
            $(elList[i]).addClass('no-valid')
            vacio++;
        } else {
            $(elList[i]).removeClass('no-valid')
            $(elList[i]).addClass('valid')
            nt += parseFloat($(elList[i]).val());
        }
    }

    if (parseFloat(nt) > 10) {
        $('.nota-abierta').removeClass('valid')

        alert('La nota no debe exceder los 10 puntos');
        $('.nota-abierta').val("");

        $('.nota-abierta').focus();
        //alert('La nota total no debe exeder de 10 puntos.')

    } else if (vacio > 0) {
        alert('todas las preguntas se deben evaluar');
        $(elList[i]).removeClass('no-valid')


    } else {
        $('#txtNota').html(nt.toFixed(2) + ' ');
        // desabilitar_by_class('nota-abierta');
        $(".respuesta").attr('disabled', true)
        $(".nota-abierta").attr('disabled', true)
        document.getElementById('bt_comprobar').disabled = true;
        $(".btnGuardar").removeClass('disabled')
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);

    }


}
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    return document.getElementById(data);


//    console.log(childs);
}
