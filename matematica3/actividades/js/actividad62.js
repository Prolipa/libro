var titulos = "aplico";
f_titulos();
$("#n_pagina").html('57');
var ejer = 5,
    i,
    itemsT = 0,
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
    $(".tabla_activ").html("");
    for (i = 1; i < 101; i++) {
        ctrl++;
        if (ctrl < 10) {
            ctn = '<div class="nn1">' + i + '</div>';
        } else {
            ctrl = 0;
            ctn = '<div class="nn1">' + i + '</div><br>';
        }
        $(".tabla_activ").append(ctn);
    };
    rdn = (Math.floor(Math.random() * 50) + 2);
    sec = (Math.floor(Math.random() * 9) + 2);
    for (i = rdn; i <= 100; i++) {
        resul.push(i); //respuestas
        i += (sec - 1);
    }
    itemsT = resul.length * 5;
    //console.log("items " + itemsT);
    $(".num1").html(rdn);
    $(".suces").html(sec);
    $(".nn1").css('cursor', 'crosshair');
    $(".nn1").bind("click", function() {
        if ($(this).hasClass("select1")) {
            $(this).removeClass("select1");
        } else {
            $(this).addClass("select1");
        }
        //clicks.push(eval($(this).text()));
    });

    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        cont++;
        $(this).unbind("click");
        $(".select1").each(function(index) {
            $(this).removeClass("select1");
            tmp = $(this);
            if (tmp.text() == resul[index]) { //comparamos las respuestas
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });
        var cc1 = parseFloat(cor * (calificacion / itemsT)).toFixed(2);
        total = parseFloat(total) + parseFloat(cc1);
        $("#txtNota").html(total);
        sum_cor += cor;
        sum_inc += inc;
        cor = 0, inc = 0;
        setTimeout(function() {
            if (cont < ejer) {
                f_iniciar();
            } else {
                $('#bt_comprobar').attr('disabled', true);
                $("#trace").show(500);
                $("#trace").html("Respuestas Correctas: <b>" + sum_cor + "</b><br> Respuestas incorrectos: <b>" + sum_inc + "</b>");
            }
        }, 3000);
    });
}