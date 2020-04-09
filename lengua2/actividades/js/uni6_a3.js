$("#n_pagina").html("236"); //impresion de pagina
var titulos = "exploro";
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;



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
    tpre2 = ((nota * 2) / 10);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}

function pregunta3() {
    var respuestas = document.getElementsByClassName("respuestas3");
    var soluciones = document.getElementsByClassName("solucion3");
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
    tpre3 = ((nota * 2) / 10);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});

function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}


var random2 = [
    ['<span class="enc2" id="1">tiburones</span>'],
    ['<span class="enc2" id="2">truchas</span>'],
    ['<span class="enc2" id="3">patos</span>'],
    ['<span class="enc2" id="4">colibríes</span>'],
    ['<span class="enc2" id="5">delfines</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
        '<span width="50px">' + random2[i][0] + "</span> "
    );
}
$(".enc2").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta5() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 5; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "truchas" || caja == "patos" || caja == "colibríes" || caja == "delfines") {
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

    var total = ((respr1 - respr2) * 2) / 4;
    if (total < 0) {
        total = 0;
        tpre5 = total;
    } else {
        tpre5 = total;
    }

    tpre5 = total.toFixed(2);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});

function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}

document.getElementById("pre7a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre7a"), 1);
});

function pregunta7() {
    var pre7a = document.getElementById("pre7a").value;
    tpre7 = pre7a;
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}


// #region Calculo Nota Final
function NotaFinal() {

    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
    } else {
        var pre6a = document.getElementById("pre6a").value;
        if (pre6a == "") {
            alert("Pregunta 6: Califiqué la pregunta");
        } else {
            var pre7a = document.getElementById("pre7a").value;
            if (pre7a == "") {
                alert("Pregunta 7: Califiqué la pregunta");
            } else {
                pregunta2();
                pregunta3();
                pregunta4();
                pregunta5();
                pregunta6();
                pregunta7();
                cor =
                    parseFloat(tpre1) +
                    parseFloat(tpre2) +
                    parseFloat(tpre3) +
                    parseFloat(tpre4) +
                    parseFloat(tpre5) +
                    parseFloat(tpre6) +
                    parseFloat(tpre7);
                Calculo_nota();
            }
        }
    }
}




// #endregion