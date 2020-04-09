var titulos = "aplico";
f_titulos();
$("#n_pagina").html('65');
var ejer = 1,
    i,
    itemsT = 15,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var resul = [],
    cambio = false,
    n1, n2, str;

f_iniciar();

function f_iniciar() {
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    for (i = 0; i < 3; i++) {
        str = ".t" + (i + 1);
        n1 = (Math.floor(Math.random() * 700) + 200);
        n2 = (Math.floor(Math.random() * 5) + 1);
        console.log(n1, n2);
        $(str).each(function() {
            cambio = !cambio;
            cambio ? $(this).prop("disabled", true) : $(this).prop("disabled", false);
            $(this).prop("disabled") ? $(this).val(n1) : $(this).val('');
            $(this).prop("disabled") ? null : resul.push(n1);
            n1 += n2;
        });
        console.log(resul);
        cambio = false;
    }
    $(".t1")[1].focus();
    $(".btnCalificar").bind("click", function() {
        cont++;
        $(this).unbind("click");
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(".tt1:enabled").each(function(index) {
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