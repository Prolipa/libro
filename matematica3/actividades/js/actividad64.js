var titulos = "aplico";
f_titulos();
$("#n_pagina").html('59');
var ejer = 1,
    i,
    itemsT = 6,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var resul = [2, 20, 200, 5, 50, 500];

f_iniciar();

function f_iniciar() {

    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        cont++;
        $(this).unbind("click");
        $(".t1").each(function(index) {
            tmp = $(this);
            if (tmp.val() == resul[index]) { //comparamos las respuestas
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });

        Calculo_nota();
    });
}