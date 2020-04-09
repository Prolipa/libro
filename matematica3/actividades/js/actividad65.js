var titulos = "aplico";
f_titulos();
$("#n_pagina").html('59');
var ejer = 1,
    i,
    itemsT = 14,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var rdn = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    con = '',
    bts = [];

f_iniciar();

function f_iniciar() {
    rdn.sort(f_randomico);
    for (i = 1; i <= rdn.length; i++) {
        con = '<div class="recuadro"> <div class="tren"> <input type="text" class="t1" id="r' + i + '" placeholder="0" maxlength="3"> </div> </div>';
        $(".tabla_cont1").append(con)
    }
    for (i = 1; i < 4; i++) {
        $("#r" + rdn[i]).prop("disabled", "disabled");
        $("#r" + rdn[i]).val(rdn[i] * 100);
    }
    for (i = rdn.length; i >= 1; i--) {
        con = '<div class="recuadro"> <div class="tren"> <input type="text" class="t1" id="q' + i + '" placeholder="0" maxlength="3"> </div> </div>';
        $(".tabla_cont2").append(con)
    }
    for (i = 1; i < 4; i++) {
        $("#r" + rdn[i]).prop("disabled", "disabled");
        $("#r" + rdn[i]).val(rdn[i] * 100);
    }
    for (i = 1; i < 4; i++) {
        $("#q" + rdn[i]).prop("disabled", "disabled");
        $("#q" + rdn[i]).val(rdn[i] * 100);
    }
    $(".n1").append(rdn[0]);
    $(".n2").append(rdn[1] + "00");
    for (i = 0; i < 4; i++) {
        if (i < 1) {
            bts.push('<div class="btn selectA si">' + rdn[i] + "00" + '</div>');
        } else {
            bts.push('<div class="btn selectA no">' + rdn[i] + "00" + '</div>');
        }
    }
    bts.sort(f_randomico);
    $(".cont_botones1").append(bts);
    bts = [];
    for (i = 0; i < 4; i++) {
        if (i == 1) {
            bts.push('<div class="btn selectB si">' + rdn[i] + '</div>');
        } else {
            bts.push('<div class="btn selectB no">' + rdn[i] + '</div>');
        }
    }
    bts.sort(f_randomico);
    $(".cont_botones2").append(bts);
    $(".selectA").bind("click", function() {
        $(".selectA").removeClass("selectClick"); //quitamos la clase select de todos los botones
        $(this).addClass("selectClick");
    })
    $(".selectB").bind("click", function() {
        $(".selectB").removeClass("selectClick"); //quitamos la clase select de todos los botones
        $(this).addClass("selectClick");
    })


    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        cont++;
        $(this).unbind("click");
        $(".selectA").unbind("click");
        $(".selectB").unbind("click");
        $(".t1:enabled").each(function(index) {
            tmp = $(this);
            var vval = $(this).prop("id").substr(1, 2);
            if (tmp.val() == vval * 100) { //comparamos las respuestas
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });
        $(".si").each(function(index) {
            tmp = $(this);
            if (tmp.hasClass("selectClick")) { //comparamos las respuestas
                tmp.removeClass("selectA selectB selectClick");
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