$("#n_pagina").html("247"); //impresion de pagina
var titulos = "evaluacion";

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;
var tpre1 = 0;



// #region Pregunta1

function pregunta1() {
    var respuestas = document.getElementsByClassName("respuestas1");
    var soluciones = document.getElementsByClassName("solucion1");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre1 = (nota);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion




// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    cor =
        parseFloat(tpre1) +
        parseFloat(tpre2);
    Calculo_nota();
}

// #endregion