var titulos = "evaluacion";
f_titulos();
$("#n_pagina").html("234");



document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});


document.getElementById("pre7a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre7a"), 1);
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
    validMaxIngreso(document.getElementById("pre9a"), 0.5);
});

document.getElementById("pre10a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre10a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre10a"), 2);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;

// #region Pregunta1

function pregunta1() {
    var respuestas = document.getElementsByClassName("respuestas1");
    var soluciones = document.getElementsByClassName("solucion1");
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
    tpre1 = ((nota * 1) / 10);
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
function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var random2 = [
    ['<span class="enc5" ">Cuento</span>'],
    ['<span class="enc5" ">trabalenguas</span>'],
    ['<span class="enc5" ">texto de divulgación científica</span>'],
    ['<span class="enc5" ">tarjeta de felicitación</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
        '<span width="50px">' + random2[i][0] + "</span> "
    );
}

$(".enc5").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
$(".enc6").click(function() {
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

function pregunta6() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 2; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "La biblioteca" || caja == "Los científicos") {
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

    for (var i = 3; i <= 4; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar1")) {
            if (caja == "tiene libros interesantes sobre ciencia." || caja == "descubren nuevos inventos.") {
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

    var total = ((respr1 - respr2) * 1) / 4;
    if (total < 0) {
        total = 0;
        tpre6 = total;
    } else {
        tpre6 = total;
    }

    tpre6 = total.toFixed(2);
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
            var pre4a = document.getElementById("pre4a").value;
            if (pre4a == "") {
                alert("Pregunta 4: Califiqué la pregunta");
            } else {
                var pre5a = document.getElementById("pre5a").value;
                if (pre5a == "") {
                    alert("Pregunta 5: Califiqué la pregunta");
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
                                    pregunta1();
                                    pregunta2();
                                    pregunta3();
                                    pregunta4();
                                    pregunta5();
                                    pregunta6();
                                    pregunta7();
                                    pregunta8();
                                    pregunta9();
                                    pregunta10();
                                    cor =
                                        parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5) + parseFloat(tpre6) + parseFloat(tpre7) + parseFloat(tpre8) + parseFloat(tpre9) + parseFloat(tpre10);
                                    Calculo_nota();
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