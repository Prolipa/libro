$("#n_pagina").html("182"); //impresion de pagina
var titulos = "evaluacion";
f_titulos();

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 1);
});


document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 2);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});

// #region Pregunta1

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
    var pre3a = document.getElementById("pre3a").value;
    tpre3 = pre3a;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var correctas = {
    0: ['u', 'v', 'a'],
    1: ['e', 'l', 'e', 'r', 'o'],
    2: ['v', 'e', 's', 't', 'i', 'd'],
    3: ['v', 'n', 't', 'a', 'n', 'a'],
    4: ['v', 'c', 'a'],
    5: ['v', 'i', 'ó', 'n'],
    6: ['e', 'n', 'a', 'd', 'o'],
    7: ['z', 'p', 'a', 't', 'o'],
    8: ['q', 'u', 'e', 's'],
    9: ['v', 'i', 'o', 'l', 'í'],
    10: ['a', 's', 'o'],
    11: ['v', 'l', 'c', 'á', 'n'],
    12: ['u', 'e', 'v', 'e'],
};
var corr = 0;
var veclet = ['U', 'V', 'B', 'VE', 'VA', 'A', 'VEN', 'Z', 'Q', 'VI', 'VAS', 'VO', 'N'];
var limite = [2, 4, 5, 5, 2, 3, 4, 4, 3, 4, 2, 4, 3];

function pregunta4() {
    for (var i = 0; i <= veclet.length; i++) {
        for (var j = 0; j <= limite[i]; j++) {

            if ((correctas[i][j]) == ($('#' + veclet[i] + [j] + '').val())) {
                corr++;
                f_ok($('#' + veclet[i] + [j] + ''));
            } else {
                f_no($('#' + veclet[i] + [j] + ''));
                corr;
            }
        }
    }
    tpre4 = ((corr * 4) / 58).toFixed(2);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5

function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6

function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
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
            var pre3a = document.getElementById("pre3a").value;
            if (pre3a == "") {
                alert("Pregunta 3: Califiqué la pregunta");
            } else {
                var pre5a = document.getElementById("pre5a").value;
                if (pre5a == "") {
                    alert("Pregunta 5: Califiqué la pregunta");
                } else {
                    var pre6a = document.getElementById("pre6a").value;
                    if (pre6a == "") {
                        alert("Pregunta 6: Califiqué la pregunta");
                    } else {

                        pregunta1();
                        pregunta2();
                        pregunta3();
                        pregunta4();
                        pregunta5();
                        pregunta6();

                        var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5) + parseFloat(tpre6);
                        var Vtotal = Nf.toFixed(2);
                        $("#txtNota").html(Vtotal + "/10");
                        document.getElementById("bt_comprobar").disabled = true;
                    }
                }
            }
        }

    }
}
// #endregion