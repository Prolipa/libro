var titulos = "reflexiono";
$("#txtNota").html("0/10");
$("#n_pagina").html("144");

var tpre1 = 0;
var tpre2 = 0;

function validar(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    return tecla != 32;
}

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 5);
});

// #region Pregunta1
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
$(".enc1").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta2() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 25; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "averigüéis" || caja == "apreciéis" || caja == "limpiáis" || caja == "ensuciáis") {
                respr1 = respr1 + 1;
                $("#" + [i] + "").removeClass("subrayar");
                $("#" + [i] + "").addClass("correcto");
            } else {
                respr2 = respr2 + 1;
                $("#" + [i] + "").removeClass("subrayar");
                $("#" + [i] + "").addClass("incorrecto");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 5) / 4;
    if (total < 0) {
        total = 0;
        tpre2 = total;
    } else {
        tpre2 = total;
    }

    tpre2 = total.toFixed(2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        var Nf = parseFloat(tpre1) + parseFloat(tpre2);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal + "/10");
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}

// #endregion