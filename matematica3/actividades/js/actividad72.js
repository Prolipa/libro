var titulos = "aplico";
f_titulos();
$("#n_pagina").html('65');
var ejer = 1,
    i,
    itemsT = 11,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var resul = [];

f_iniciar();

function f_iniciar() {
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    $(".btnCalificar").bind("click", function() {
        cont++;
        $(this).unbind("click");
        $(".solucion").each(function() {
            resul.push($(this).val());
        })
        $(".respuesta").each(function(index) {
            tmp = $(this);
            if (tmp.val().trim() == resul[index]) {
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        })
        Calculo_nota();
    });
}