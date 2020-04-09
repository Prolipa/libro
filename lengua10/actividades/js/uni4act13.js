var titulos = "evaluacion";


document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 3);
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
    validMaxIngreso(document.getElementById("pre5a"), 0.5);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 0.5);
});

document.getElementById("pre7a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre7a"), 0.5);
});

document.getElementById("pre8a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre8a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre8a"), 0.5);
});

document.getElementById("pre9a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre9a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre9a"), 1);
});

document.getElementById("pre10a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre10a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre10a"), 1.5);
});

document.getElementById("pre11a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre11a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre11a"), 0.5);
});

document.getElementById("pre12a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre12a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre12a"), 0.5);
});

var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;
var tpre11 = 0;
var tpre12 = 0;


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
function pregunta4() {
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
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
    tpre4 = nota / 20;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2))
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

// #region Pregunta7
function pregunta7() {
    var pre7a = document.getElementById("pre7a").value;
    tpre7 = pre7a;
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Pregunta8
function pregunta8() {
    var pre8a = document.getElementById("pre8a").value;
    tpre8 = pre8a;
    $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Pregunta9
function pregunta9() {
    var pre9a = document.getElementById("pre9a").value;
    tpre9 = pre9a;
    $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Pregunta10
function pregunta10() {
    var pre10a = document.getElementById("pre10a").value;
    tpre10 = pre10a;
    $("#pre10a").val(parseFloat(tpre10).toFixed(2));
}
// #endregion

// #region Pregunta11
function pregunta11() {
    var pre11a = document.getElementById("pre11a").value;
    tpre11 = pre11a;
    $("#pre11a").val(parseFloat(tpre11).toFixed(2));
}
// #endregion

// #region Pregunta12
function pregunta12() {
    var pre12a = document.getElementById("pre12a").value;
    tpre12 = pre12a;
    $("#pre12a").val(parseFloat(tpre12).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
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
                    var pre7a = document.getElementById("pre7a").value;
                    if (pre7a == "") {
                        alert("Pregunta 7: Califiqué la pregunta");
                    } else {
                        var pre8a = document.getElementById("pre8a").value;
                        if (pre8a == "") {
                            alert("Pregunta 8: Califiqué la pregunta");
                        } else {
                            var pre9a = document.getElementById("pre9a").value;
                            if (pre9a == "") {
                                alert("Pregunta 9: Califiqué la pregunta");
                            } else {
                                var pre10a = document.getElementById("pre10a").value;
                                if (pre10a == "") {
                                    alert("Pregunta 10: Califiqué la pregunta");
                                } else {
                                    var pre11a = document.getElementById("pre11a").value;
                                    if (pre11a == "") {
                                        alert("Pregunta 11: Califiqué la pregunta");
                                    } else {
                                        var pre12a = document.getElementById("pre12a").value;
                                        if (pre12a == "") {
                                            alert("Pregunta 12: Califiqué la pregunta");
                                        } else {
                                            pregunta2();
                                            pregunta3();
                                            pregunta4();
                                            pregunta5();
                                            pregunta6();
                                            pregunta7();
                                            pregunta8();
                                            pregunta9();
                                            pregunta10();
                                            pregunta11();
                                            pregunta12();

                                            var Nf = parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5) + parseFloat(tpre6) + parseFloat(tpre7) + parseFloat(tpre8) + parseFloat(tpre9) + parseFloat(tpre10) + parseFloat(tpre11) + parseFloat(tpre12);
                                            var Vtotal = Nf.toFixed(2);
                                            $("#txtNota").html(Vtotal + "/10");
                                            document.getElementById("bt_comprobar").disabled = true;
                                            $("input").attr('disabled', 'disabled');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
// #endregion