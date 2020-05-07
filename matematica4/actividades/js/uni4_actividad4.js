var titulos = "aplico";
f_titulos();
numero_pagina(167);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});


// #region Pregunta1
var random1 = [
    ['En el frasco 1 es imposible sacar una canica <input type="text" size="1" style="width:100px;text-align: center;" class="border-blue respuestas1"><br><br><input type="hidden" style="color:blue" class="solucion1" value="azul">'],
    ['En el frasco 2 es seguro sacar una canica <input type="text" size="1" style="width:100px;text-align: center;" class="border-blue respuestas1"><br><br><input type="hidden" style="color:blue" class="solucion1" value="café">'],
    ['En el frasco 3 es menos posible sacar una canica naranja que una canica <input type="text" size="1" style="width:100px;text-align: center;" class="border-blue respuestas1"><br><br><input type="hidden" style="color:blue" class="solucion1" value="amarilla">'],
    ['En el frasco 1 hay mayor posibilidad de sacar una canica <input type="text" size="1" style="width:100px;text-align: center;" class="border-blue respuestas1"><br><br> <input type="hidden" style="color:blue" class="solucion1" value="roja">']
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
        '<span width="50px">' + random1[i][0] + "</span> "
    );
}

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
    tpre1 = ((nota * 4) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var random2 = [
    ['<span class="enc2" id="1">Seguro</span>'],
    ['<span class="enc2" id="2"> Posible</span>'],
    ['<span class="enc2" id="3"> Imposible</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
        '<span width="50px">' + random2[i][0] + "</span> "
    );
}

var random3 = [
    ['<span class="enc2" id="4"> Seguro</span>'],
    ['<span class="enc2" id="5">Posible</span>'],
    ['<span class="enc2" id="6"> Imposible</span>']
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
        '<span width="50px">' + random3[i][0] + "</span> "
    );
}

var random4 = [
    ['<span class="enc2" id="7"> Seguro</span>'],
    ['<span class="enc2" id="8"> Posible</span>'],
    ['<span class="enc2" id="9">Imposible</span>']
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
        '<span width="50px">' + random4[i][0] + "</span> "
    );
}
$(".enc2").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta2() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 9; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "Seguro" || caja == "Posible" || caja == "Imposible") {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("correcto");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("incorrecto");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 4) / 3;
    if (total < 0) {
        total = 0;
        tpre2 = total;
    } else {
        tpre2 = total;
    }

    tpre2 = total.toFixed(2);
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
// #endregion