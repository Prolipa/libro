// JavaScript Document
//codigo para tooltip
$(document).ready(function() {
    $("#ayudas").html('').append("Para repetir el ejercicio pulsa sobre <span class='glyphicon glyphicon-refresh' aria-hidden='true'></span><br>" +
        "Para guardar la actividad, pulsa sobre <span class='glyphicon glyphicon-floppy-save' aria-hidden='true'></span>");

    /*FIN BOTON SALIR*/
    $('[data-toggle="tooltip"]').tooltip();

    // $(".navbar-left > li").mouseover(function() {
    //     $(this).addClass("animate bounceIn");
    // });
    // $(".navbar-left > li").mouseout(function() {
    //     $(this).removeClass("animate bounceIn");
    // });

    //para animaciones
    $('.anim').hide(); //ocultamos todos los elemntos a animar
    var long = $('.anim').length; //obtenemos el total de elementos a animar
    var prox = 0; //contador de animaciones
    $(".btnIniciar").bind("click", function() { //click en el boton iniciar
        f_animar_txts($(this));
    });

    function f_animar_txts(btn) {
        if (prox < long) { //si el contador es menor a la longitud
            var elm = ($(".anim")[prox]); //obtenemos el elemento a animar
            $(elm).show('slow'); //mostrar el elemento
            prox++; //incrementa el contador
            //$(function() { //mover la pagina hasta el elemento que se anima.
            $('html,body').animate({
                scrollTop: $(elm).offset().top - 100
            }, 500);
            //})
        } else {
            $(btn).attr('disabled', 'disabled'); //deshabilitar el boton al finalizar los contenidos
        }
    }
    $("body").keyup(function(event) {
        if (event.which == 13) {
            f_animar_txts($(".btnIniciar"));
        }
    });
});

/* USO EN ACTIVIDADES*/
function AgregaClase(obj, clase) {
    $(obj).addClass(clase); //resultados           
}

function QuitaClase(obj, clase) {
    $(obj).removeClass(clase); //resultados

}

function Calculo_nota() {
    //var calc = (calificacion / itemsT);
    var total = (cor * (calificacion / itemsT)).toFixed(2);
    //var total = suma.toFixed(2);
    $("#txtNota").html(total);
    f_tiempo();
}

function Calculo_notaCI() {
    //var calc = (calificacion / itemsT);
    var total = (cor * (calificacion / (itemsT + inc))).toFixed(2);
    //var total = suma.toFixed(2);
    $("#txtNota").html(total);
    f_tiempo();
}

function f_tiempo() {
    setTimeout(function() {
        ComprobacionFinal();
    }, 3000);
}

function ComprobacionFinal() {
    if (cont < ejer) {
        f_iniciar(); //ejecutamos la funcion
    } else {
        $('#bt_comprobar').attr('disabled', true);
        $("#trace").show(500);
        $("#trace").html("Respuestas Correctas: <b>" + parseInt(cor) + "</b><br> Respuestas incorrectos: <b>" + parseInt(inc) + "</b>");
    }
}

function Eliminar_Contenido(contenedor) {
    for (var i = 0; i < contenedor.length; i++) {
        var tt = "#" + contenedor[i];
        $(tt).html('');
    }
}

function f_ok(obj) {
    $(obj).addClass("correcto");
}

function f_no(obj) {
    $(obj).addClass("incorrecto");
}

function removerClase(obj) {
    $(obj).removeClass("correcto incorrecto");
    $(obj).val('');
}

function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}

function CalificacionAbierta() { //califiacion para respuestas abiertas
    var calificacion = 10,
        cor = 0,
        total = 0,
        itemsT = 0;
    itemsT = $('.calif').length;
    QuitaClase(".calif", "correcto incorrecto");
    $('.calif').each(function() {
        if ($(this).val() != '') {
            total += parseFloat($(this).val());
            //var total = suma.toFixed(2);
            $("#txtNota").html(total.toFixed(2));
            f_ok($(this));
        } else {
            f_no($(this));
        }
    });
    if (total > calificacion) {
        $("#trace").show(500);
        $("#trace").html("Verifique su puntaje, excede el limite");
    }
}
/* FIN USO EN ACTIVIDADES */

function ImprimirActividad(Elemento, Titulo) { //enviamos como parametro el ID que debe imprimir
    var ficha = document.getElementById(Elemento);
    var ventimp = window.open('', 'popimpr');
    ventimp.document.write(ficha.innerHTML);
    ventimp.document.title = Titulo;
    ventimp.document.close();
    ventimp.print();
    ventimp.close();
}

function AlReducir(resul) {
    var w = window.innerWidth;
    var h = window.outerHeight;
    var txt = "Ancho: " + w;
    var d = "Cel (Extra Small)";
    if (w > 1200) { d = "Large desktop (Large)"; } else {
        if (w > 992) { d = "Desktop (Medium)"; } else {
            if (w > 768) { d = "Tablets (Small)"; }
        }
    }
    txt += "<br>" + d;
    document.getElementById(resul).innerHTML = txt;
}

function randomico(elemento, vector1) { //elemento aleatorio de un vector
    var recibe = vector1;
    var rnd = Math.floor(Math.random() * recibe.length);
    var aleatorio = recibe[rnd];
    var tmp = document.getElementById(elemento);
    tmp.innerHTML = (aleatorio);
}

function f_randomico(a, b) {
    if (Math.random() < 0.5) return -1;
    else return 1;
}

//animacion de BUEN TRABAJO
function PantallaFinal(pantalla) {
    pantalla.style.display = "inherit";
}


function muestra_oculta(Boton, id1, id2) {
    var elem1 = document.getElementById(id1); //se define la variable "elem1" igual a nuestro div
    var elem2 = document.getElementById(id2); //se define la variable "elem2" igual a nuestro div
    elem1.style.display == 'none';

    Boton.addEventListener("click", function(e) {
        if (document.getElementById) { //se obtiene el id           
            elem1.style.display = (elem1.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
            elem2.style.display = (elem2.style.display == 'block') ? 'none' : 'block';
        }
    });
}