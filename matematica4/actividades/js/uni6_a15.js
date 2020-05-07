var titulos = "refuerzo";
f_titulos();
numero_pagina(254);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;


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
    tpre1 = ((nota * 2.5) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 2.5);
});

function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

p3vec1 = [
    '<li>¿Cuántos decilitros hay en 86 litros?                            <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="86"> x <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="10"> = <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="860"> decilitros<br><br>                        </li>',
    '<li>¿Cuántos centilitros hay en 12 litros?                            <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="12"> x <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="100"> = <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="1200"> cl<br><br>                        </li>',
    '<li>¿Cuántos mililitros hay en 5 litros?                            <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="5"> x <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="1000"> = <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="5000"> ml<br><br>                        </li>'
];
p3vec1.sort(f_randomico);
$('#li3').html(p3vec1);

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
    tpre3 = ((nota * 2.5) / 10);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2.5);
});

function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
        alert("Pregunta 2: Califiqué la pregunta");
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
            $("input").attr('disabled', 'disabled');
        }
    }
}
// #endregion