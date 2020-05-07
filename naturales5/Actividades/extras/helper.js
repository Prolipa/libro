//para tootltip de ayuda
$(document).ready(function () {
    var agrega_salir= "<li><button  class='btn button button_1 btnSalir' onclick='salir()' data-toggle='tooltip' data-placement='top' title='Cerrar Actividad'><span class='glyphicon glyphicon-remove-sign' aria-hidden='true'></span></button></li>"
                $( ".navbar-left" ).append( agrega_salir);
    // $('[data-toggle="tooltip"]').tooltip();
    
});

function f_titulos(){
    $('#activity').attr('class', '').addClass('panel border-'+titulos);
    $('.panel-heading ').attr('class', '').addClass('panel-heading bg-'+titulos);
    switch (titulos){
        case "reflexiono":
            $(".titulo").html("").append("<img src='img/icoR.png' alt='Reflexiono para avanzar'> Reflexiono para avanzar");
            break;
        case "aplico":
            $(".titulo").html("").append("<img src='img/icoA.png' alt='Aplico para aprender'> Aplico para Aprender");
            break;
        case "exploro":
            $(".titulo").html("").append("<img src='img/icoE.png' alt='Exploro para recordar'> Exploro para recordar");
            break;
        case "comprendo":
            $(".titulo").html("").append("<img src='img/icoC.png' alt='Comprendo para saber'> Comprendo para saber");
            break;
        case "refuerzo":
            $(".titulo").html("").append("<img src='img/icoD.png' alt='Refuerzo mis destrezas'> Refuerzo mis destrezas");
            break;
        case "preparo":
            $(".titulo").html("").append("<img src='img/icoTST.png' alt='Me preparo para mi evaluación'> Me preparo para mi evaluación");
            break;
        case "evaluacion":
            $(".titulo").html("").append("<img src='img/icoTST.png' alt='Evaluación sumativa'> Evaluación sumativa");
            break;
        case "prueba":
            $(".titulo").html("").append("<img src='img/icoTST.png' alt='Prueba Diagnóstica'> Prueba Diagnóstica");
            break;
        case "organizo":
            $(".titulo").html("").append("<img src='img/icoO.png' alt='Organizo mis ideas'> Organizo mis ideas");
            break;
        case "problemas":
            $(".titulo").html("").append("<img src='img/icoP.png' alt='Resolucion de problemas'> Resolución de Problemas");
            break;
    }
};

$(".btn").click(function (e) {
    if (!$(this).hasClass("disabled"))
    {
        //$(".disabled").removeClass("disabled").attr("rel", null);
        // $(this).addClass("disabled").attr("rel", "tooltip");

        $(this).mouseenter();
    }
});
//$(".btn").mouseout(function () {
//    $(".btn").tooltip('hide');
//})



function mostrar_ayuda() {


    $("#nota-informativa").show("blind", {direction: 'up'}, 500)
}

function cerrar_ayuda() {
    $("#nota-informativa").hide("blind", {direction: 'up'}, 500).delay(500);
}





//fullscreen

function full_screen_change() {
    if (document.getElementById('full_ico').className.indexOf('full') > -1) {
        screenfull.request();
        document.getElementById('full_ico').className = 'glyphicon glyphicon-resize-small';
    } else {
        screenfull.exit();
        document.getElementById('full_ico').className = 'glyphicon glyphicon-resize-full';
    }
    ;
}

//salir de la ventana
function salir() {
    window.history.go(-1);
    //window.open(location, '_self', '');
    //window.close();

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
    }
    ;
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

function demoFromHTML() {
    var pdf = new jsPDF('p', 'pt', 'letter')

            // source can be HTML-formatted string, or a reference
            // to an actual DOM element from which the text will be scraped.
            , source = $('#activity')[0]

            // we support special element handlers. Register them with jQuery-style 
            // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
            // There is no support for any other type of selectors 
            // (class, of compound) at this time.
            , specialElementHandlers = {
                // element with id of "bypass" - jQuery style selector
                '#bypassme': function (element, renderer) {
                    // true = "handled elsewhere, bypass text extraction"
                    return true
                }
            }

    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
            source // HTML string or DOM elem ref.
            , margins.left // x coord
            , margins.top // y coord
            , {
                'width': margins.width // max width of content on PDF
                , 'elementHandlers': specialElementHandlers
            },
            function (dispose) {
                // dispose: object with X, Y of the last line add to the PDF 
                //          this allow the insertion of new lines after html
                pdf.save('Test.pdf');
            },
            margins
            )
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

function getPdf(inline, url) {
    var page = new WebPage();
    var system = require("system");
// change the paper size to letter, add some borders
// add a footer callback showing page numbers
    page.paperSize = {
        format: "A4",
        orientation: "portrait",
        footer: {
            height: "0.9cm",
            contents: phantom.callback(function (pageNum, numPages) {
                return "<div style='text-align:center;'><small>" + pageNum +
                        " / " + numPages + "</small></div>";
            })
        }
    };
    page.zoomFactor = 1;
// assume the file is local, so we don't handle status errors
    page.open(system.args[1], function (status) {
        page.render(system.args[2]);
        phantom.exit();
    });
}


$('.help-ico').mouseover(function () {
    if ($(this).hasClass('bguardar')) {
        $('.btnGuardar').animate2('zoomIn');
    }
    if ($(this).hasClass('bcalificar')) {
        $('.btnCalificar').animate2('zoomIn');
    }
    if ($(this).hasClass('brepetir')) {
        $('.btnRepetir').animate2('zoomIn');
    }
    if ($(this).hasClass('biniciar')) {
        $('.btnIniciar').animate2('zoomIn');
    }
    if ($(this).hasClass('bcorreo')) {
        $('.btnEvniar').animate2('zoomIn');
    }
});
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

$('.nota-abierta').keypress(function (event) {
    return filterFloat(event, this);
})