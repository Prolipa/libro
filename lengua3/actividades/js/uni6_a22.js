var titulos = "aplico";
f_titulos();
$("#n_pagina").html('218');

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 3);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 3);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1
$(".enc1").click(function() {
    if ($(this).hasClass("vacio")) {
        $(this).removeClass("vacio");
        $(this).addClass("subrayar");
    } else if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
        $(this).addClass("subrayar1");
    } else {
        $(this).removeClass("subrayar1");
        $(this).addClass("vacio");
    }
});

function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

function pregunta3() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 4; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "Las revistas infantiles de ciencias" || caja == "Los textos de divulgación científica" ||
                caja == "Los científicos" || caja == "Los científicos") {
                respr1 = respr1 + 1;

                f_ok($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar');
            } else {
                respr2 = respr2 + 1;
                f_no($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar');
            }
        } else {}
    }

    for (var i = 5; i <= 8; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar1")) {
            if (caja == "ofrecen información interesante" || caja == "promueven la investigación" || caja == "realizan grandes descubrimientos" || caja == "aumenta nuestra curiosidad") {
                respr1 = respr1 + 1;

                f_ok($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar1');
            } else {
                respr2 = respr2 + 1;
                f_no($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar1');
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 4) / 8;
    if (total < 0) {
        total = 0;
        tpre3 = total;
    } else {
        tpre3 = total;
    }

    tpre3 = total.toFixed(2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        var pre2a = document.getElementById("pre2a").value;
        if (pre2a == "") {
            alert("Pregunta 2: Califiqué la pregunta");
        } else {
            pregunta1();
            pregunta2();
            pregunta3();
            cor =
                parseFloat(tpre1) +
                parseFloat(tpre2) +
                parseFloat(tpre3);
            Calculo_nota();
        }
    }
}

// #endregion