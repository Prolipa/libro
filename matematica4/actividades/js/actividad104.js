var titulos = "aplico";
f_titulos();
numero_pagina(120);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
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
    validMaxIngreso(document.getElementById("pre5a"), 2);
});

// #region Pregunta1

function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
    [
        '<h4>la longitud de una hormiga: <select id="cbodosb"><option value="1">Seleccione</option><option value="2">metro</option><option value="3">milímetro</option></select></h4>'
    ],
    [
        '<h4>el grosor de una moneda: <select id="cbodosc"><option value="1">Seleccione</option><option value="2">metro</option><option value="3">milímetro</option></select></h4>'
    ],
    [
        '<h4>la altura de un edificio: <select id="cbodosd"><option value="1">Seleccione</option><option value="2">metro</option><option value="3">milímetro</option></select></h4>'
    ],
    [
        '<h4>la estatura de una persona: <select id="cbodosa"><option value="1">Seleccione</option><option value="2">metro</option><option value="3">milímetro</option></select></h4>'
    ]
];

var rancuatro = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
        '<span width="50px">' + random2[i][0] + "</span> "
    );
}
// #endregion

// #region Pregunta2
function pregunta2() {
    var cor = 0;
    var inc = 0;

    var cbodosa = document.getElementById("cbodosa").value;
    var cbodosb = document.getElementById("cbodosb").value;
    var cbodosc = document.getElementById("cbodosc").value;
    var cbodosd = document.getElementById("cbodosd").value;

    if (cbodosa == "2") {
        cor = cor + 1;
        $("#cbodosa").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbodosa").removeClass("correcto");
        $("#cbodosa").addClass("incorrecto");
    }
    if (cbodosb == "3") {
        cor = cor + 1;
        $("#cbodosb").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbodosb").removeClass("correcto");
        $("#cbodosb").addClass("incorrecto");
    }
    if (cbodosc == "3") {
        cor = cor + 1;
        $("#cbodosc").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbodosc").removeClass("correcto");
        $("#cbodosc").addClass("incorrecto");
    }
    if (cbodosd == "2") {
        cor = cor + 1;
        $("#cbodosd").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbodosd").removeClass("correcto");
        $("#cbodosd").addClass("incorrecto");
    }

    var total = (cor * 2) / 4;
    if (total < 0) {
        total = 0;
        tpre2 = total.toFixed(2);
    } else {
        tpre2 = total.toFixed(2);
    }
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
function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Random6
var random6 = [
    [
        '<h4>¿Cuál es el camino más corto: A - B - C o A - D - H - C? El más corto es <input type="text" size="1"  style="width:100px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="A-B-C*ABC*A B C"> .</h4>'
    ],
    [
        '<h4>¿Cuántos metros de diferencia hay entre D - C - G y A - B - C - E - G? Hay <input type="text" size="1"  style="width:100px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="4600"> m de diferencia.</h4>'
    ],
    [
        '<h4>¿Cuántos metros de diferencia hay entre C - E y E - G - F? Hay <input type="text" size="1"  style="width:100px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="2000"> m de diferencia.</h4>'
    ],
    [
        '<h4>Desde la Playa de los Sueños hasta el Árbol de los Ahorcados hay <input type="text" size="1"  style="width:100px" class=" border-blue respuestas6"><input type="hidden" style="color:blue" class="solucion6" value="3000"> m. </h4>'
    ]
];

var ranseis = document.getElementsByClassName("imagen6");
random6.sort(f_randomico);
for (i = 0; i < ranseis.length; i++) {
    $("#" + ranseis[i].id).html(
        '<span width="50px">' + random6[i][0] + "</span> "
    );
}
// #endregion

// #region Pregunta6
function pregunta6() {
    var respuestas = document.getElementsByClassName("respuestas6");
    var soluciones = document.getElementsByClassName("solucion6");
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
    tpre6 = nota / 5;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        var cbodosa = document.getElementById("cbodosa").value;
        var cbodosb = document.getElementById("cbodosb").value;
        var cbodosc = document.getElementById("cbodosc").value;
        var cbodosd = document.getElementById("cbodosd").value;
        if (cbodosa == "1" || cbodosb == "1" || cbodosc == "1" || cbodosd == "1") {
            alert("Pregunta 2: Seleccione todas las respuestas posibles.");
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
                        pregunta1();
                        pregunta2();
                        pregunta3();
                        pregunta4();
                        pregunta5();
                        pregunta6();
                        var Nf =
                            parseFloat(tpre1) +
                            parseFloat(tpre2) +
                            parseFloat(tpre3) +
                            parseFloat(tpre4) +
                            parseFloat(tpre5) +
                            parseFloat(tpre6);

                        var Vtotal = Nf.toFixed(2);
                        $("#txtNota").html(Vtotal);
                        document.getElementById("bt_comprobar").disabled = true;
                    }
                }
            }
        }
    }
}
// #endregion