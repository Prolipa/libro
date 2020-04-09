var titulos = "aplico";
numero_pagina(147);


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2);
});
document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 4);
});


// #region Pregunta1
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var p3vec2 = [
    '<li>El sistema  4x + 3y = 2 , 5x + y = -3  es consistente con solución única.<input maxlength="5" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="v"></li><br>',
    '<li>El sistema  8x + 2y = 10 , 4x + y = 5 es consistente con infinitas soluciones.<input maxlength="5" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="v"></li><br>'
];
p3vec2.sort(f_randomico);
$('#li2').html(p3vec2);
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
    tpre2 = ((nota * 4) / 10);
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
            pregunta1();
            pregunta2();
            pregunta3();
            var Nf =
                parseFloat(tpre1) +
                parseFloat(tpre2) +
                parseFloat(tpre3);
            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
            $("input").attr('disabled', 'disabled');
        }
    }
}
// #endregion