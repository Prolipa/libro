var n1, n2, res, i, img1, img2, img3, cor = 0,
    inc = 0,
    ejer = 5,
    itemsT = 6 * ejer,
    cont = 0,
    calificacion = 10,
    signos = [],
    inputs = [],
    cajas = [],
    resp = [];
var claseAnimada = 'animate bounceIn';
var titulos = "prueba";
f_titulos();
$("#txtNota").html("0");
$("#n_pagina").html("13");
f_iniciar();

function f_iniciar() {
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $("#trace").hide();
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    inputs = ['a0', 'a1', 'a2', 'a3', 'a4', 'a5'];
    cajas = ['caja1', 'caja2', 'caja3', 'caja4', 'caja5', 'caja6'];
    resp = [];
    $(inputs).each(function() {
        var temp = $("#" + this).val('');
        removerClase(temp);
    })
    $("#" + inputs[0]).focus();
    $(cajas).each(function() {
        $($(this)).empty();
    })
    signos = ['+', '-'];
    for (i = 0; i < cajas.length; i++) {
        signos.sort(f_randomico);
        f_numeros();
        $('#' + cajas[i]).html('<b style="font-size:25px; color:#000000">' + n1 + '</b>' + ' ' + '<b style="font-size:28px; color:#BA007C">' + signos[0] + '</b>' + ' ' + '<b style="font-size:25px; color:#000000">' + n2 + " =</b>");
    }

    function f_numeros() {
        n1 = Math.floor((Math.random() * 20) + 1);
        n2 = Math.floor((Math.random() * 20) + 1);
        if (signos[0] == '+') {
            res = parseInt(n1) + parseInt(n2);
        } else {
            res = parseInt(n1) - parseInt(n2);
        }
        if (res < 0) {
            f_numeros();
        } else {
            resp.push(res);
        }
    }
    //console.log('respuestas >> ' + resp);
    var bt_comprobar = document.getElementById('bt_comprobar');
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        this.removeEventListener("click", f_comprobar);
        for (i = 0; i < inputs.length; i++) {
            var temp = $("#" + inputs[i]);
            if (temp.val() == resp[i]) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        }
        cont++;
        Calculo_nota();
    };
}