var titulos = "aplico";
f_titulos();
$("#n_pagina").html('57');
var ejer = 3,
    i,
    itemsT = 18 * ejer,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var ctrl = 0,
    ctn = '',
    rdn = 0,
    sec = 0,
    resul = [],
    total = 0,
    sum_cor = 0,
    sum_inc = 0;
f_iniciar();

function f_iniciar() {
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    resul = [], clicks = [];
    rdn = (Math.floor(Math.random() * 15) + 2);
    sec = (Math.floor(Math.random() * 7) + 2);
    $(".txt_td").val('');
    $(".txt_td")[1].focus();
    $(".txt_td").removeClass("correcto incorrecto");
    $(".num1").html(rdn);
    $(".suces").html(sec);
    // $(".sucesion").val(sec); //respuestas
    $(".t1").each(function() {
        //$(this).val(rdn); //respuestas
        resul.push(rdn); //respuestas
        rdn += sec;
    })
    console.log(resul);
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
        $(".sucesion").each(function(index) {
            tmp = $(this);
            if (tmp.val() == sec) { //comparamos las respuestas
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });
        tmp = $(".t2");
        if (tmp.val() == resul.pop()) { //comparamos las respuestas
            cor++
            f_ok(tmp);
        } else {
            inc++
            f_no(tmp);
        }
        Calculo_nota();
    });
}