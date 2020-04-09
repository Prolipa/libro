var titulos = "aplico";
numero_pagina(153);


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 3);
});
document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 3);
});


// #region Pregunta1
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
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
var p2vec1 = [
    '<span class="enc2 col-md-2" id="2">(3,2)</span>',
    '<span class="enc2 col-md-2" id="1">(-1,0)</span>',
    '<span class="enc2 col-md-2" id="3">(1,2)</span>',
    '<span class="enc2 col-md-2" id="4">(2,1)</span>'
];
p2vec1.sort(f_randomico);
$('#p2aux1').html(p2vec1);

var p2vec2 = [
    '<span class="enc2 col-md-2" id="6">(13,0)</span>',
    '<span class="enc2 col-md-2" id="8">(5,1)</span>',
    '<span class="enc2 col-md-2" id="7">(1,8)</span>',
    '<span class="enc2 col-md-2" id="5">(0,2)</span>'
];
p2vec2.sort(f_randomico);
$('#p2aux2').html(p2vec2);

var p2vec3 = [
    '<span class="enc2 col-md-2" id="11">(3,2)</span>',
    '<span class="enc2 col-md-2" id="12">(0,0)</span>',
    '<span class="enc2 col-md-2" id="9">(-2,0)</span>',
    '<span class="enc2 col-md-2" id="10">(2,3)</span>'
];
p2vec3.sort(f_randomico);
$('#p2aux3').html(p2vec3);

var p2vec4 = [
    '<span class="enc2 col-md-2" id="16">(0,-<div class="fraction"><span class="fup">1</span><span class="bar">/</span><span class="fdn">2</span></div>)</span>',
    '<span class="enc2 col-md-2" id="13">(2,-<div class="fraction"><span class="fup">1</span><span class="bar">/</span><span class="fdn">2</span></div>)</span>',
    '<span class="enc2 col-md-2" id="15">(<div class="fraction"><span class="fup">2</span><span class="bar">/</span><span class="fdn">7</span></div>,-<div class="fraction"><span class="fup">3</span><span class="bar">/</span><span class="fdn">2</span></div>)</span>',
    '<span class="enc2 col-md-2" id="14">(<div class="fraction"><span class="fup">2</span><span class="bar">/</span><span class="fdn">7</span></div>,<div class="fraction"><span class="fup">3</span><span class="bar">/</span><span class="fdn">2</span></div>)</span>'
];
p2vec4.sort(f_randomico);
$('#p2aux4').html(p2vec4);

var p2vec5 = [
    '<span class="enc2 col-md-2" id="20">(0,<div class="fraction"><span class="fup">7</span><span class="bar">/</span><span class="fdn">6</span></div>)</span>',
    '<span class="enc2 col-md-2" id="19">(<div class="fraction"><span class="fup">1</span><span class="bar">/</span><span class="fdn">2</span></div>,<div class="fraction"><span class="fup">1</span><span class="bar">/</span><span class="fdn">3</span></div>)</span>',
    '<span class="enc2 col-md-2" id="17">(2,3)</span>',
    '<span class="enc2 col-md-2" id="18">(0,-1)</span>'
];
p2vec5.sort(f_randomico);
$('#p2aux5').html(p2vec5);

$(".enc2").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta3() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 20; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "(2,1)" || caja == "(1,8)" || caja == '(3,2)' || caja == "(2/7,-3/2)" || caja == '(1/2,1/3)') {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("subrayarc");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("subrayari");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 4) / 5;
    if (total < 0) {
        total = 0;
        tpre3 = total;
    } else {
        tpre3 = total;
    }

    tpre3 = total.toFixed(2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        var pre2a = document.getElementById("pre2a").value;
        if (pre2a == "") {
            alert("Pregunta 2: Califiqué la pregunta");
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