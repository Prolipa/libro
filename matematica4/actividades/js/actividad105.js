var titulos = "refuerzo";
f_titulos();
numero_pagina(126);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2.5);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2.5);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2.5);
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
        '<img class="img-responsive" src="img/i2_p126_act2.jpg"><br><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> m y <input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="15"> cm </h4>'
    ],
    [
        '<img class="img-responsive" src="img/i3_p126_act2.jpg"><br><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> m y <input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> cm </h4>'
    ],
    [
        '<img class="img-responsive" src="img/i1_p126_act2.jpg"><br><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> m y <input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10"> cm </h4>'
    ],
    [
        '<img class="img-responsive" src="img/i4_p126_act2.jpg"><br><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="100"> cm</h4>'
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
    tpre2 = nota / 4;
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

// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        var pre3a = document.getElementById("pre3a").value;
        if (pre3a == "") {
            alert("Pregunta 3: Califiqué la pregunta");
        } else {
            var pre4a = document.getElementById("pre4a").value;
            if (pre4a == "") {
                alert("Pregunta 4: Califiqué la pregunta");
            } else {
                pregunta1();
                pregunta2();
                pregunta3();
                pregunta4();
                var Nf =
                    parseFloat(tpre1) +
                    parseFloat(tpre2) +
                    parseFloat(tpre3) +
                    parseFloat(tpre4);

                var Vtotal = Nf.toFixed(2);
                $("#txtNota").html(Vtotal);
                document.getElementById("bt_comprobar").disabled = true;
            }
        }
    }
}

// #endregion