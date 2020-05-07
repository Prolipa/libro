var titulos = "aplico";
$("#txtNota").html("0/10");
$("#n_pagina").html("203");
var tpre1 = 0;
var tpre2 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 5);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1
function pregunta1() {
    var corr = 0;
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;
    var val5 = 0;
    var val6 = 0;
    for (var i = 0; i < 6; i++) {
        var res = ($("#p1aux" + [i] + "").val());

        switch (res) {
            case "campo":

                if (val1 == 0) {
                    val1++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            case "rama":

                if (val2 == 0) {
                    val2++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            case "bosque":

                if (val3 == 0) {
                    val3++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            case "nido":

                if (val4 == 0) {
                    val4++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            case "pino":
                if (val5 == 0) {
                    val5++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;

            case "pajarillo":
                if (val6 == 0) {
                    val6++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            default:
                f_no($("#p1aux" + [i] + ""));
                corr;;

        }
    }
    var res = (corr * 5) / 6;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2
function pregunta2() {
    var respuestas = document.getElementsByClassName("respuestas2");
    var soluciones = document.getElementsByClassName("solucion2");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre2 = nota / 2;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    cor = parseFloat(tpre1) + parseFloat(tpre2);
    Calculo_nota();
}

// #endregion