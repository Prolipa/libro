var titulos = "evaluacion";
f_titulos();
numero_pagina(172);

$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre8a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre8a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre8a"), 1);
});

document.getElementById("pre9a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre9a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre9a"), 1);
});

document.getElementById("pre10a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre10a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre10a"), 1);
});

// #region Pregunta1

function pregunta1() {
    var cor = 0;
    var p1vec1 = ['50,25', '60,30', '150,75', '200,100', '300,150'];
    var p1res1 = [];
    for (var i = 0; i < 5; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() + ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 5; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 5; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] = 'nnn';
            } else {
                p1cont1;
            }
        }
        if (p1cont1 == '1') {
            cor++;
            f_ok($('#p1dcon' + (i + 1)));
            f_ok($('#p1dco' + (i + 1)));
        } else {
            f_no($('#p1dcon' + (i + 1)));
            f_no($('#p1dco' + (i + 1)));
        }
    }

    var res = (cor * 1) / 5;
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
vecptres1 = ['2', '4', '6'];
vecptres2 = ['1', '3', '5'];
vecptres3 = [];
vecptres4 = [];
vecptres5 = [];

vecptres1.sort(f_randomico);
for (var i = 0; i < 3; i++) {
    $("#p3fil" + [i] + "").html(vecptres1[i]);
    vecptres3.push(vecptres1[i]);
}

vecptres2.sort(f_randomico);
for (var i = 0; i < 3; i++) {
    $("#p3col" + [i] + "").html(vecptres2[i]);
    vecptres4.push(vecptres2[i]);
}

function pregunta3() {
    var cor = 0;
    for (var i = 0; i < 18; i++) {
        var respuesta = $("#" + [i] + "").val();
        vecptres5.push(respuesta);
    }

    if (vecptres5[0] == vecptres3[0] &&
        vecptres5[1] == vecptres4[0]) {
        f_ok($("#0"));
        f_ok($("#1"));
        cor++;
    } else {
        f_no($("#0"));
        f_no($("#1"));
        cor;
    }

    if (vecptres5[2] == vecptres3[0] &&
        vecptres5[3] == vecptres4[1]) {
        f_ok($("#2"));
        f_ok($("#3"));
        cor++;
    } else {
        f_no($("#2"));
        f_no($("#3"));
        cor;
    }

    if (vecptres5[4] == vecptres3[0] &&
        vecptres5[5] == vecptres4[2]) {
        f_ok($("#4"));
        f_ok($("#5"));
        cor++;
    } else {
        f_no($("#4"));
        f_no($("#5"));
        cor;
    }

    if (vecptres5[6] == vecptres3[1] &&
        vecptres5[7] == vecptres4[0]) {
        f_ok($("#6"));
        f_ok($("#7"));
        cor++;
    } else {
        f_no($("#6"));
        f_no($("#7"));
        cor;
    }

    if (vecptres5[8] == vecptres3[1] &&
        vecptres5[9] == vecptres4[1]) {
        f_ok($("#8"));
        f_ok($("#9"));
        cor++;
    } else {
        f_no($("#8"));
        f_no($("#9"));
        cor;
    }

    if (vecptres5[10] == vecptres3[1] &&
        vecptres5[11] == vecptres4[2]) {
        f_ok($("#10"));
        f_ok($("#11"));
        cor++;
    } else {
        f_no($("#10"));
        f_no($("#11"));
        cor;
    }

    if (vecptres5[12] == vecptres3[2] &&
        vecptres5[13] == vecptres4[0]) {
        f_ok($("#12"));
        f_ok($("#13"));
        cor++;
    } else {
        f_no($("#12"));
        f_no($("#13"));
        cor;
    }
    if (vecptres5[14] == vecptres3[2] &&
        vecptres5[15] == vecptres4[1]) {
        f_ok($("#14"));
        f_ok($("#15"));
        cor++;
    } else {
        f_no($("#14"));
        f_no($("#15"));
        cor;
    }
    if (vecptres5[16] == vecptres3[2] &&
        vecptres5[17] == vecptres4[2]) {
        f_ok($("#16"));
        f_ok($("#17"));
        cor++;
    } else {
        f_no($("#16"));
        f_no($("#17"));
        cor;
    }
    var res = (cor * 1) / 9;
    tpre3 = parseFloat(res);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var r = [];
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 2);

        $("#p4aux" + [i] + "").val(parseInt(n1));
        $("#p4aux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 2);

        $("#p4bux" + [i] + "").val(parseInt(n1));
        $("#p4bux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 2);

        $("#p4cux" + [i] + "").val(parseInt(n1));
        $("#p4cux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 2);

        $("#p4dux" + [i] + "").val(parseInt(n1));
        $("#p4dux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r.push((n[4]) * (n[5]));
}

function pregunta4() {
    var corr = 0;
    var res1 = $("#p4aux5").val() + $("#p4aux6").val() + $("#p4aux7").val() + $("#p4aux8").val();

    if (r[0] == res1) {
        corr++;
        f_ok($("#p4aux5"));
        f_ok($("#p4aux6"));
        f_ok($("#p4aux7"));
        f_ok($("#p4aux8"));
    } else {
        f_no($("#p4aux5"));
        f_no($("#p4aux6"));
        f_no($("#p4aux7"));
        f_no($("#p4aux8"));
        corr;
    }

    var res2 = $("#p4bux5").val() + $("#p4bux6").val() + $("#p4bux7").val() + $("#p4bux8").val();

    if (r[1] == res2) {
        corr++;
        f_ok($("#p4bux5"));
        f_ok($("#p4bux6"));
        f_ok($("#p4bux7"));
        f_ok($("#p4bux8"));
    } else {
        f_no($("#p4bux5"));
        f_no($("#p4bux6"));
        f_no($("#p4bux7"));
        f_no($("#p4bux8"));
        corr;
    }

    var res3 = $("#p4cux5").val() + $("#p4cux6").val() + $("#p4cux7").val() + $("#p4cux8").val();

    if (r[2] == res3) {
        corr++;
        f_ok($("#p4cux5"));
        f_ok($("#p4cux6"));
        f_ok($("#p4cux7"));
        f_ok($("#p4cux8"));
    } else {
        f_no($("#p4cux5"));
        f_no($("#p4cux6"));
        f_no($("#p4cux7"));
        f_no($("#p4cux8"));
        corr;
    }

    var res4 = $("#p4dux5").val() + $("#p4dux6").val() + $("#p4dux7").val() + $("#p4dux8").val();

    if (r[3] == res4) {
        corr++;
        f_ok($("#p4dux5"));
        f_ok($("#p4dux6"));
        f_ok($("#p4dux7"));
        f_ok($("#p4dux8"));
    } else {
        f_no($("#p4dux5"));
        f_no($("#p4dux6"));
        f_no($("#p4dux7"));
        f_no($("#p4dux8"));
        corr;
    }
    var res = (corr * 1) / 4;
    tpre4 = parseFloat(res);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var random3 = [
    [
        '<span class="enc5" id="1">3000</span>'
    ],
    [
        '<span class="enc5" id="2">30000</span>'
    ],
    [
        '<span class="enc5" id="3">35000</span>'
    ]
];

var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
        '<span width="50px">' + random3[i][0] + "</span> "
    );
}

var random4 = [
    [
        '<span class="enc5" id="4">2100</span>'
    ],
    [
        '<span class="enc5" id="5">3100</span>'
    ],
    [
        '<span class="enc5" id="6">4100</span>'
    ]
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
        '<span width="50px">' + random4[i][0] + "</span> "
    );
}

$(".enc5").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta5() {

    var respr1 = 0,
        respr2 = 0;
    var caja = $("#respuesta1 .subrayar").text();
    if (caja == "30000") {
        respr1++;

        f_ok($("#respuesta1 .subrayar"));
        $("#respuesta1 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta1 .subrayar"))
        $("#respuesta1 .subrayar").removeClass("subrayar");
    }

    var caja1 = $("#respuesta2 .subrayar").text();
    if (caja1 == "3100") {
        respr1++;

        f_ok($("#respuesta2 .subrayar"));
        $("#respuesta2 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta2 .subrayar"));
        $("#respuesta2 .subrayar").removeClass("subrayar");
    }

    var total = ((respr1) * 1) / 2;
    if (total < 0) {
        total = 0;
        tpre5 = total;
    } else {
        tpre5 = total;
    }

    tpre5 = total.toFixed(2);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
var vecseis = [];
var nseis = [];

var vaecseis = [];
var naseis = [];

for (i = 0; i < 12; i++) {
    n1 = parseInt((Math.random() * 30) + 2);

    $("#p6aux" + [i] + "").html(parseInt(n1));
    nseis.push(n1);
}
vecseis.push(nseis[0] * nseis[1] * nseis[2]);
vecseis.push(nseis[3] * nseis[4] * nseis[5]);
vecseis.push(nseis[6] * nseis[7] * nseis[8]);
vecseis.push(nseis[9] * nseis[10] * nseis[11]);

for (i = 0; i < 6; i++) {
    n1 = parseInt((Math.random() * 30) + 2);

    $("#p6aaux" + [i] + "").html(parseInt(n1));
    naseis.push(n1);
}
vaecseis.push(naseis[0] * naseis[1]);
vaecseis.push(naseis[0] * naseis[1] * naseis[2]);
vaecseis.push(naseis[3] * naseis[4]);
vaecseis.push(naseis[3] * naseis[4] * naseis[5]);

function pregunta6() {
    var corr = 0;
    for (var i = 0; i < 4; i++) {
        var res6 = ($("#p6res" + [i] + "").val());

        if (vecseis[i] == res6) {
            corr++;
            f_ok($("#p6res" + [i] + ""));
        } else {
            f_no($("#p6res" + [i] + ""));
            corr;
        }
    }

    var n1 = ($("#p6resa1").val());
    var n2 = ($("#p6resa2").val());
    var n3 = ($("#p6resa3").val());
    var n4 = ($("#p6resa4").val());
    var n5 = ($("#p6resa5").val());
    var n6 = ($("#p6resa6").val());

    if (n1 == vaecseis[0]) {
        corr++;
        f_ok($("#p6resa1"));
    } else {
        f_no($("#p6resa1"));
        corr;
    }
    if (n2 == naseis[2]) {
        corr++;
        f_ok($("#p6resa2"));
    } else {
        f_no($("#p6resa2"));
        corr;
    }
    if (n3 == vaecseis[1]) {
        corr++;
        f_ok($("#p6resa3"));
    } else {
        f_no($("#p6resa3"));
        corr;
    }

    if (n4 == vaecseis[2]) {
        corr++;
        f_ok($("#p6resa4"));
    } else {
        f_no($("#p6resa4"));
        corr;
    }
    if (n5 == naseis[5]) {
        corr++;
        f_ok($("#p6resa5"));
    } else {
        f_no($("#p6resa5"));
        corr;
    }
    if (n6 == vaecseis[3]) {
        corr++;
        f_ok($("#p6resa6"));
    } else {
        f_no($("#p6resa6"));
        corr;
    }


    var res = (corr * 1) / 10;
    tpre6 = parseFloat(res);
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7

var vecp1 = [];

for (i = 0; i < 6; i++) {

    if (i == 0) {
        var numero = parseInt((Math.random() * 9) + 1);
        vecp1.push(numero * 10);
    }
    if (i == 1) {
        var numero = parseInt((Math.random() * 20) + 10);
        vecp1.push(numero * 100);
    }
    if (i == 2) {
        var numero = parseInt((Math.random() * 9) + 1);
        vecp1.push(numero * 1000);
    }
    if (i == 3) {
        var numero = parseInt((Math.random() * 20) + 10);
        vecp1.push(numero * 10);
    }
    if (i == 4) {
        var numero = parseInt((Math.random() * 15) + 30);
        vecp1.push(numero * 1000);
    }
    if (i == 5) {
        var numero = parseInt((Math.random() * 50) + 10);
        vecp1.push(numero * 100);
    }
    $("#p1aux" + [i] + "").html(numero);
}

function pregunta7() {
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
    var res = (corr * 1) / 6;
    tpre7 = parseFloat(res);
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Pregunta8
function pregunta8() {
    var pre8a = document.getElementById("pre8a").value;
    tpre8 = pre8a;
    $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Pregunta9
function pregunta9() {
    var pre9a = document.getElementById("pre9a").value;
    tpre9 = pre9a;
    $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Pregunta10
function pregunta10() {
    var pre10a = document.getElementById("pre10a").value;
    tpre10 = pre10a;
    $("#pre10a").val(parseFloat(tpre10).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
        alert("Pregunta 2: Califiqué la pregunta");
    } else {
        var pre8a = document.getElementById("pre8a").value;
        if (pre8a == "") {
            alert("Pregunta 8: Califiqué la pregunta");
        } else {
            var pre9a = document.getElementById("pre9a").value;
            if (pre9a == "") {
                alert("Pregunta 9: Califiqué la pregunta");
            } else {
                var pre10a = document.getElementById("pre10a").value;
                if (pre10a == "") {
                    alert("Pregunta 10: Califiqué la pregunta");
                } else {
                    pregunta1();
                    pregunta2();
                    pregunta3();
                    pregunta4();
                    pregunta5();
                    pregunta6();
                    pregunta7();
                    pregunta8();
                    pregunta9();
                    pregunta10();
                    var Nf =
                        parseFloat(tpre1) +
                        parseFloat(tpre2) +
                        parseFloat(tpre3) +
                        parseFloat(tpre4) +
                        parseFloat(tpre5) +
                        parseFloat(tpre6) +
                        parseFloat(tpre7) +
                        parseFloat(tpre8) +
                        parseFloat(tpre9) +
                        parseFloat(tpre10);

                    var Vtotal = Nf.toFixed(2);
                    $("#txtNota").html(Vtotal);
                    document.getElementById("bt_comprobar").disabled = true;
                    $("input").attr('disabled', 'disabled');
                }
            }
        }
    }
}
// #endregion