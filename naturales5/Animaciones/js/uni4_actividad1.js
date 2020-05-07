var titulos = "aplico";
$("#txtNota").html("0/10");
$("#n_pagina").html("141");

var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;


document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 4);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 3);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 3);
});



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
                pregunta2();
                pregunta3();
                pregunta4();

                var Nf = parseFloat(tpre2)+parseFloat(tpre3)+parseFloat(tpre4);
                var Vtotal = Nf.toFixed(2);
                $("#txtNota").html(Vtotal + "/10");
                document.getElementById("bt_comprobar").disabled = true;
                $("input").attr('disabled', 'disabled');
            }
        }
    }
}


// #endregion