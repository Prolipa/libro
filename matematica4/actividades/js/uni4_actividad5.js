var titulos = "refuerzo";
numero_pagina(168);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

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
    validMaxIngreso(document.getElementById("pre3a"), 2);
});


// #region Pregunta1

var vecp1 = [];

for (i = 0; i < 6; i++) {

    if (i == 0) {
        var numero = parseInt((Math.random() * 39) + 31);
        vecp1.push(numero * 100);
    }
    if (i == 1) {
        var numero = parseInt((Math.random() * 89) + 81);
        vecp1.push(numero * 10);
    }
    if (i == 2) {
        var numero = parseInt((Math.random() * 9) + 1);
        vecp1.push(numero * 1000);
    }
    if (i == 3) {
        var numero = parseInt((Math.random() * 39) + 31);
        vecp1.push(numero * 10);
    }
    if (i == 4) {
        var numero = parseInt((Math.random() * 9) + 1);
        vecp1.push(numero * 100);
    }
    if (i == 5) {
        var numero = parseInt((Math.random() * 450) + 400);
        vecp1.push(numero * 10);
    }
    $("#p1aux" + [i] + "").html(numero);
}

function pregunta1() {
    var corr = 0;
    for (i = 0; i < 6; i++) {
        var resp = $("#p1res" + [i] + "").val();
        if (resp == vecp1[i]) {
            corr++;
            f_ok($("#p1res" + [i] + ""));
        } else {
            corr;
            f_no($("#p1res" + [i] + ""));
        }
    }
    var res = (corr * 2) / 6;
    tpre1 = parseFloat(res);
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
var random4 = [
    ['$ 5 - 2.5 ctvs. = <input type="text" size="1" style="width:40px;text-align: center;"  class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4">ctvs'],
    ['$ 1 - 75 ctvs. = <input type="text" size="1" style="width:40px;text-align: center;"  class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="25">ctvs'],
    ['$ 10 - 6.75 ctvs. = <input type="text" size="1" style="width:40px;text-align: center;"  class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3,25">ctvs'],
    ['$ 20 - $ 15 = <input type="text" size="1" style="width:40px;text-align: center;"  class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5">$'],
    ['25 ¢ - 5 ctvs. = <input type="text" size="1" style="width:40px;text-align: center;"  class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="20">ctvs'],
    ['50 ctvs. - 10 ctvs. = <input type="text" size="1" style="width:40px;text-align: center;"  class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="40">ctvs']
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
        '<span width="50px">' + random4[i][0] + "</span> "
    );
}
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
    tpre4 = ((nota * 2) / 10);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5

function pregunta5() {
    var respuestas = document.getElementsByClassName("respuestas5");
    var soluciones = document.getElementsByClassName("solucion5");
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
    tpre5 = ((nota * 2) / 10);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
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
            pregunta1();
            pregunta2();
            pregunta3();
            pregunta4();
            pregunta5();
            var Nf =
                parseFloat(tpre1) +
                parseFloat(tpre2) +
                parseFloat(tpre3) +
                parseFloat(tpre4) +
                parseFloat(tpre5);

            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
            $("input").attr('disabled', 'disabled');
        }
    }
}
// #endregion