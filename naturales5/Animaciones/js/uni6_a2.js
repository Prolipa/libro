var titulos = "reflexiono";
f_titulos();
$("#n_pagina").html('202');

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 10);
});

var tpre1 = 0;
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1

var random2 = [
    ['<span class="enc2" id="1">redondo</span>'],
    ['<span class="enc2" id="2">recto</span>'],
    ['<span class="enc2" id="3">curva</span>'],
    ['<span class="enc2" id="4">hilar</span>'],
    ['<span class="enc2" id="5">hilo</span>'],
    ['<span class="enc2" id="6">pila</span>']
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

function pregunta1() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 6; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "recto" || caja == "hilar" || caja == "hilo") {
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

    var total = ((respr1 - respr2) * 10) / 3;
    if (total < 0) {
        total = 0;
        tpre1 = total;
    } else {
        tpre1 = total;
    }

    tpre1 = total.toFixed(2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    cor =
        parseFloat(tpre1);
    Calculo_nota();
}



// #endregion