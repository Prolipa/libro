$("#n_pagina").html("263"); //impresion de pagina
var titulos = "exploro";
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


var tpre4 = 0;


function pregunta4() {
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
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
    tpre4 = (nota);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}



// #region Calculo Nota Final
function NotaFinal() {

    pregunta4();
    cor =
        parseFloat(tpre4);
    Calculo_nota();
}




// #endregion