var titulos = "aplico";
f_titulos();
numero_pagina(239);

var tpre1 = 0;
var tpre2 = 0;

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
    tpre1 = (nota / 2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2

var random3 = [
    [
        '<span class="enc5" id="1">1200</span>'
    ],
    [
        '<span class="enc5" id="2">600</span>'
    ],
    [
        '<span class="enc5" id="3">1500</span>'
    ],
    [
        '<span class="enc5" id="4">1700</span>'
    ]
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
        '<span width="50px">' + random3[i][0] + "</span> "
    );
}
$(".enc5").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta2() {

    var respr1 = 0,
        respr2 = 0;
    var caja = $("#respuesta1 .subrayar").text();
    if (caja == "1500") {
        respr1++;

        f_ok($("#respuesta1 .subrayar"));
        $("#respuesta1 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta1 .subrayar"))
        $("#respuesta1 .subrayar").removeClass("subrayar");
    }

    var total = ((respr1) * 5) / 1;
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


// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();

    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion