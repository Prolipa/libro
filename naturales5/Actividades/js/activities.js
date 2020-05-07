$("#activity .panel-collapse").addClass("in");
//Genera un pdf, del elemento html que le indiques

function f_titulos(){
    $(".bg_cabecera").html("").append("<img src='img/ico_libro.svg' alt='Joyas Literarias'>  &nbsp; ");
    $(".titulo").html("").append(cabecera);
    derecha != '' ? $(".bg_derecha").html("").append(derecha) :$(".bg_derecha").removeClass('bg_derecha');
};


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
    };
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
    abled('btnIniciar');
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
        };
    }
    desabilitar_by_class('respuestas');
    desabilitar_by_class('btnCalificar');
    document.getElementById('txtNota').innerHTML = nota + ' / 10';
}

function valor_pregunta(respuestas) {
    var valor = 10 / respuestas.length;
    return valor;
}

function ocultar_by_id(htmlElementId) {
    var element = document.getElementById(htmlElementId);
    element.classList.add('display-none');
}

function mostrar_by_id(htmlElementId) {
    var element = document.getElementById(htmlElementId);
    element.classList.remove('display-none');
}

function habilitar_by_id(htmlElementId) {
    var element = document.getElementById(htmlElementId);
    element.classList.remove('disabled');
}

function desabilitar_by_id(htmlElementId) {
    var element = document.getElementById(htmlElementId);
    element.classList.add('disabled');
}

function habilitar_by_class(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        // elements[i].classList.remove('disabled');
        elements[i].removeAttribute('disabled');
        elements[i].classList.remove('no-valid');
        elements[i].classList.remove('valid');
        // elements[i].classList.remove("disabled");
        //rojos[i].classList.add("verde");
    }
}

function desabilitar_by_class(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('disabled', true);
    }
}


//valida si existe algun valor ingresado
function valida_existe(htmlElementId) {
    var element = document.getElementById(htmlElementId);
    var alert = document.getElementById(htmlElementId + 'Alert');
    if (element.value == '') {
        element.classList.add('no-valid');
        alert.classList.remove('display-none');
        return false;
    } else {
        element.classList.remove('no-valid');
        alert.classList.add('display-none');
        return true;
    }
}

//oculta elementos de la misma clase
function ocultar_by_class(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("display-none");
        //rojos[i].classList.add("verde");
    }
}

function mostrar_by_class(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("display-none");
        //rojos[i].classList.add("verde");
    }
}

//genera aleatorios entre min y max
function aleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + parseInt(min));
}

function vector_randomico(lenght) {
    var result = [];
    while (result.length < lenght) {
        var num = aleatorio(0, lenght - 1);
        if (result.indexOf(num) == -1) {
            result.push(num);
        }
    };
    return result;
}

//reordenar randomicamente un vector fijo
function reorder_array(array) {
    result = [];
    indexs = vector_randomico(array.length);
    for (var i = 0; i < array.length; i++) {
        result.push(array[indexs[i]]);
    }
    return result;
}

function clear_inputs_by_class(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = '';
    }
}

//borrar select
function clear_elements(element) {
    var length = element.options.length;
    for (i = 0; i < length; i++) {
        element.innerHTML = '';
    }
}

function filterFloat(evt, input) {
    // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
    var key = window.Event ? evt.which : evt.keyCode;
    var chark = String.fromCharCode(key);
    var tempValue = input.value + chark;
    if (key >= 48 && key <= 57) {
        if (filter(tempValue) === false) {
            return false;
        } else {
            return true;
        }
    } else {
        if (key == 8 || key == 13 || key == 0) {
            return true;
        } else if (key == 46) {
            if (filter(tempValue) === false) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}

function filter(__val__) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/;
    if (preg.test(__val__) === true) {
        return true;
    } else {
        return false;
    }

}

$('.nota-abierta').keypress(function(event) {
    return filterFloat(event, this);
})


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
             nt += parseInt($(elList[i]).val());
         }
     }

     if (parseInt(nt) > 10) {
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


function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");

function validarN(inputs) {

    $(inputs).on('keypress', function(e) {
        tecla = document.all ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /[,qwertyuiopñlkvjhfgdsazcxbnmQWERTYFVUIOPÑLKJHGDSAZCBNM<>.;-_""]/;
        te = String.fromCharCode(tecla);
        if (patron.test(te)) {
            //alert("INGRESE V(VERDADERO) O F(FALSO) ");
            return false;
        }

    });
}

validarN(".soloNumeros");
