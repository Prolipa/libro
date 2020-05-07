var titulos = "aplico";
$("#txtNota").html("0/10");
$("#n_pagina").html("217");
var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 4);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1
ramdon2 = [
    '<b>-</b><span id="13"  class="enc1">No desesperarse y mantener la calma.</span>',
    '<b>-</b><span id="14"  class="enc1">Agacharse, cubrirse, agarrarse y ubicarse debajo de las mesas o pupitres, o junto a ellos.</span>',
    '<b>-</b><span id="15"  class="enc1">Mantenerse lejos de ventanas u objetos que puedan caer.</span>',
    '<b>-</b><span id="16"  class="enc1">Si están en una zona abierta, agacharse o arrodillarse lejos de cables eléctricos, postes de luz, árboles, muros, edificios o cualquier estructura que pueda caerse.</span>',
    '<b>-</b><span id="17"  class="enc1">Dirigirse al punto de encuentro y sentarse en círculo en el área asignada.</span>',
    '<b>-</b><span id="18"  class="enc1">Si alguien queda atrapado, debe tratar de hacer ruido con objetos metálicos o con pitos, para que lo localicen; no gastar energías innecesarias.</span>'
];
ramdon2.sort(f_randomico);
for (var i = 1; i < 7; i++) {
    $('#pre2id' + [i] + '').html(ramdon2[i - 1]);
}

$(".enc1").click(function() {
    if ($(this).hasClass("vacio")) {
        $(this).removeClass("vacio");
        $(this).addClass("subrayar");
    } else if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
        $(this).addClass("subrayar1");
    } else {
        $(this).removeClass("subrayar1");
        $(this).addClass("vacio");
    }
});

function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2
var vec2 = [
    ["1", "img/i1_p217_act2.jpg"],
    ["2", "img/i2_p217_act2.jpg"],
    ["3", "img/i3_p217_act2.jpg"],
    ["4", "img/i4_p217_act2.jpg"]
]

var res1 = [
    ["img/i2_p217_act2.jpg"],
    ["img/i3_p217_act2.jpg"],
    ["img/i4_p217_act2.jpg"]
]
var random3 = document.getElementsByClassName('imagen2');

vec2.sort(f_randomico);
for (i = 0; i < random3.length; i++) {
    $('#' + random3[i].id).html('<img id=' + vec2[i][1] + ' style="mix-blend-mode: multiply;" class=" imgAcom" src="' + vec2[i][1] + '">');
}

$('.enc2').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});

function pregunta2() {
    var corr = 0;
    var inco = 0;
    for (var i = 1; i < 5; i++) {
        var acu = 0;
        if ($("#caja_img" + [i] + "").hasClass("seleccionCaja")) {
            var caja = $("div[id=caja_img" + [i] + "").find('img')[0].id;

            for (var j = 0; j < 3; j++) {
                if (caja == res1[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                corr++;
                $("#caja_img" + [i] + "").addClass('correctoi')
            } else {
                inco++;
                $("#caja_img" + [i] + "").removeClass('correctoi')
                $("#caja_img" + [i] + "").addClass('incorrectoi')
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 4) / 3;
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
            cor = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
            Calculo_nota();
        }
    }
}
// #endregion