var titulos = "refuerzo";
numero_pagina(154);

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

// #region Pregunta1

function pregunta1() {
    var cor = 0;
    var p1vec1 = ['28,20', '48,20', '46,39', '74,20', '74,39', '74,68', '95,20', '95,39', '95,68', '95,85'];
    var p1res1 = [];
    for (var i = 0; i < 10; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() + ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 10; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 10; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] = 'a';
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

    var res = (cor * 1) / 10;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

function pregunta2() {
    var cor = 0;
    var p2vec1 = ['Ana', 'María', 'Estefy'];
    var p2vec2 = ['Paula', 'Luisa', 'Teresa'];
    var p2res1 = [];

    var p2res2 = [];
    var p2res3 = [];
    var p2res4 = [];
    for (var i = 0; i < 3; i++) {
        p2res1.push($('#p2aux' + (i)).val());
    }
    for (var i = 0; i < 3; i++) {
        p2res2.push($('#p2bux' + (i)).val());
    }

    for (var i = 0; i < 3; i++) {
        p2res3.push($('#p2cux' + (i)).val());
    }

    for (var i = 0; i < 3; i++) {
        p2res4.push($('#p2dux' + (i)).val());
    }

    for (var i = 0; i < 3; i++) {
        var p2cont1 = 0;
        for (var j = 0; j < 3; j++) {
            if (p2res1[i] == p2vec1[j]) {
                p2cont1++;
                p2vec1[j] == 'nnn';
            } else {
                p2cont1;
            }
        }
        if (p2cont1 == '1') {
            cor++;
            f_ok($('#p2aux' + (i)));
        } else {
            f_no($('#p2aux' + (i)));
        }
    }

    for (var i = 0; i < 3; i++) {
        var p2cont1 = 0;
        for (var j = 0; j < 3; j++) {
            if (p2res2[i] == p2vec2[j]) {
                p2cont1++;
                p2vec2[j] == 'nnn';
            } else {
                p2cont1;
            }
        }
        if (p2cont1 == '1') {
            cor++;
            f_ok($('#p2bux' + (i)));
        } else {
            f_no($('#p2bux' + (i)));
        }
    }

    for (var i = 0; i < 3; i++) {
        var p2cont1 = 0;
        for (var j = 0; j < 3; j++) {
            if (p2res3[i] == p2vec2[j]) {
                p2cont1++;
                p2vec2[j] == 'nnn';
            } else {
                p2cont1;
            }
        }
        if (p2cont1 == '1') {
            cor++;
            f_ok($('#p2cux' + (i)));
        } else {
            f_no($('#p2cux' + (i)));
        }
    }

    for (var i = 0; i < 3; i++) {
        var p2cont1 = 0;
        for (var j = 0; j < 3; j++) {
            if (p2res4[i] == p2vec2[j]) {
                p2cont1++;
                p2vec2[j] == 'nnn';
            } else {
                p2cont1;
            }
        }
        if (p2cont1 == '1') {
            cor++;
            f_ok($('#p2dux' + (i)));
        } else {
            f_no($('#p2dux' + (i)));
        }
    }


    var res = (cor * 1) / 12;
    tpre2 = parseFloat(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

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
    tpre3 = ((nota * 1) / 10);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
function pregunta4() {
    var corr = 0;
    var vector = [];
    for (i = 0; i < 6; i++) {
        var numero = ($("#v5res" + (i) + "").val());
        if (numero >= 10 && numero <= 45) {
            if (numero % 5 == 0) {
                f_ok($("#v5res" + (i) + ""));
                corr++;
            } else {
                f_no($("#v5res" + (i) + ""));
                cor;
            }

        } else {
            f_no($("#v5res" + (i) + ""));
        }
    }
    for (i = 6; i < 12; i++) {
        var numero = ($("#v5res" + (i) + "").val());
        if (numero >= 10 && numero <= 72) {
            if (numero % 9 == 0) {
                f_ok($("#v5res" + (i) + ""));
                corr++;
            } else {
                f_no($("#v5res" + (i) + ""));
                corr;
            }

        } else {
            f_no($("#v5res" + (i) + ""));
        }
    }
    var res = (corr * 2) / 12;
    tpre4 = parseFloat(res);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var r = [];
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 5) + 2);

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
        n1 = parseInt((Math.random() * 5) + 2);

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
        n1 = parseInt((Math.random() * 5) + 2);

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
        n1 = parseInt((Math.random() * 5) + 2);

        $("#p4dux" + [i] + "").val(parseInt(n1));
        $("#p4dux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r.push((n[4]) * (n[5]));
}

function pregunta5() {
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
    var res = (corr * 2) / 4;
    tpre5 = parseFloat(res);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
var random1 = [
    ['<span class="enc6" id="1">6000</span>'],
    ['<span class="enc6" id="2">600</span>']
];
var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
        '<span width="50px">' + random1[i][0] + "</span> "
    );
}

var random2 = [
    ['<span class="enc6" id="1">8000</span>'],
    ['<span class="enc6" id="2">800</span>']
];
var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
        '<span width="50px">' + random2[i][0] + "</span> "
    );
}

var random3 = [
    ['<span class="enc6" id="1">630</span>'],
    ['<span class="enc6" id="2">6300</span>']
];
var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
        '<span width="50px">' + random3[i][0] + "</span> "
    );
}

var random4 = [
    ['<span class="enc6" id="1">420</span>'],
    ['<span class="enc6" id="2">4200</span>']
];
var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
        '<span width="50px">' + random4[i][0] + "</span> "
    );
}

var random5 = [
    ['<span class="enc6" id="1">45000</span>'],
    ['<span class="enc6" id="2">4500</span>']
];
var rancinco = document.getElementsByClassName("imagen5");
random5.sort(f_randomico);
for (i = 0; i < rancinco.length; i++) {
    $("#" + rancinco[i].id).html(
        '<span width="50px">' + random5[i][0] + "</span> "
    );
}

$(".enc6").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta6() {

    var respr1 = 0,
        respr2 = 0;
    var caja = $("#respuesta1 .subrayar").text();
    if (caja == "6000") {
        respr1++;

        f_ok($("#respuesta1 .subrayar"));
        $("#respuesta1 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta1 .subrayar"))
        $("#respuesta1 .subrayar").removeClass("subrayar");
    }

    var caja1 = $("#respuesta2 .subrayar").text();
    if (caja1 == "800") {
        respr1++;

        f_ok($("#respuesta2 .subrayar"));
        $("#respuesta2 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta2 .subrayar"));
        $("#respuesta2 .subrayar").removeClass("subrayar");
    }

    var caja2 = $("#respuesta3 .subrayar").text();
    if (caja2 == "630") {
        respr1++;

        f_ok($("#respuesta3 .subrayar"));
        $("#respuesta3 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta3 .subrayar"));
        $("#respuesta3 .subrayar").removeClass("subrayar");
    }

    var caja3 = $("#respuesta4 .subrayar").text();
    if (caja3 == "4200") {
        respr1++;

        f_ok($("#respuesta4 .subrayar"));
        $("#respuesta4 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta4 .subrayar"));
        $("#respuesta4 .subrayar").removeClass("subrayar");
    }

    var caja4 = $("#respuesta5 .subrayar").text();
    if (caja4 == "45000") {
        respr1++;

        f_ok($("#respuesta5 .subrayar"));
        $("#respuesta5 .subrayar").removeClass("subrayar");
    } else {
        respr2++;

        f_no($("#respuesta5 .subrayar"));
        $("#respuesta5 .subrayar").removeClass("subrayar");
    }

    var total = ((respr1) * 1) / 5;
    if (total < 0) {
        total = 0;
        tpre6 = total;
    } else {
        tpre6 = total;
    }

    tpre6 = total.toFixed(2);
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7
var vec7p1 = [];
for (i = 0; i < 8; i++) {
    if (i => 0 && i < 6) {
        n1 = parseInt((Math.random() * 20) + 2);
        $("#p7aux" + [i] + "").html(n1);
        vec7p1.push(n1);
    }
    if (i == 6) {
        var n2 = (vec7p1[0] * vec7p1[1] * vec7p1[2])
        $("#p7aux" + [i] + "").html(n2);
        vec7p1.push(n2);
    }
    if (i == 7) {
        var n2 = (vec7p1[3] * vec7p1[4] * vec7p1[5])
        $("#p7aux" + [i] + "").html(n2);
        vec7p1.push(n2);
    }
}



var vec7arre1 = [];
vec7arre1.push((vec7p1[0].toString()) + (vec7p1[1].toString()) + (vec7p1[2].toString()) + (vec7p1[7].toString()));
vec7arre1.push((vec7p1[0].toString()) + (vec7p1[2].toString()) + (vec7p1[1].toString()) + (vec7p1[7].toString()));
vec7arre1.push((vec7p1[1].toString()) + (vec7p1[0].toString()) + (vec7p1[2].toString()) + (vec7p1[7].toString()));
vec7arre1.push((vec7p1[1].toString()) + (vec7p1[2].toString()) + (vec7p1[0].toString()) + (vec7p1[7].toString()));
vec7arre1.push((vec7p1[2].toString()) + (vec7p1[1].toString()) + (vec7p1[0].toString()) + (vec7p1[7].toString()));
vec7arre1.push((vec7p1[2].toString()) + (vec7p1[0].toString()) + (vec7p1[1].toString()) + (vec7p1[7].toString()));

var vec7arre2 = [];
vec7arre2.push((vec7p1[3].toString()) + (vec7p1[4].toString()) + (vec7p1[5].toString()) + (vec7p1[9].toString()));
vec7arre2.push((vec7p1[3].toString()) + (vec7p1[5].toString()) + (vec7p1[4].toString()) + (vec7p1[9].toString()));
vec7arre2.push((vec7p1[4].toString()) + (vec7p1[3].toString()) + (vec7p1[5].toString()) + (vec7p1[9].toString()));
vec7arre2.push((vec7p1[4].toString()) + (vec7p1[5].toString()) + (vec7p1[3].toString()) + (vec7p1[9].toString()));
vec7arre2.push((vec7p1[5].toString()) + (vec7p1[4].toString()) + (vec7p1[3].toString()) + (vec7p1[9].toString()));
vec7arre2.push((vec7p1[5].toString()) + (vec7p1[3].toString()) + (vec7p1[4].toString()) + (vec7p1[9].toString()));

function pregunta7() {
    var vec7resp1 = [];
    var vec7resp2 = [];
    var vec7resp3 = [];
    var vec7resp4 = [];
    var corr = 0;

    for (var i = 0; i < 4; i++) {
        var res1 = $("#cj" + [i] + "").val();
        vec7resp1.push(res1);
    }

    for (var i = 0; i < 4; i++) {
        var res1 = $("#ck" + [i] + "").val();
        vec7resp2.push(res1);
    }

    for (var i = 0; i < 4; i++) {
        var res1 = $("#cl" + [i] + "").val();
        vec7resp3.push(res1);
    }

    for (var i = 0; i < 4; i++) {
        var res1 = $("#cm" + [i] + "").val();
        vec7resp4.push(res1);
    }

    var cj = (vec7resp1[0].toString()) + (vec7resp1[1].toString()) + (vec7resp1[2].toString()) + (vec7resp1[3].toString());
    var ck = (vec7resp2[0].toString()) + (vec7resp2[1].toString()) + (vec7resp2[2].toString()) + (vec7resp2[3].toString());
    var cl = (vec7resp3[0].toString()) + (vec7resp3[1].toString()) + (vec7resp3[2].toString()) + (vec7resp3[3].toString());
    var cm = (vec7resp4[0].toString()) + (vec7resp4[1].toString()) + (vec7resp4[2].toString()) + (vec7resp4[3].toString());

    var ace1 = 0;
    var ace2 = 0;
    var ace3 = 0;
    var ace4 = 0;


var lec=['a','b'];
    for (var i = 0; i < 6; i++) {
        if (cj == vec7arre1[i]) {
            ace1 = 1;
        } else {
            ace1;
        }
    }
    if (ace1 == 1) {
        corr++;
        f_ok($("#cj0"));
        f_ok($("#cj1"));
        f_ok($("#cj2"));
        f_ok($("#cj3"));
    } else {
        corr;
        f_no($("#cj0"));
        f_no($("#cj1"));
        f_no($("#cj2"));
        f_no($("#cj3"));
    }

    for (var i = 0; i < 6; i++) {
        if (cj !=ck) {
            if (ck == vec7arre1[i]) {
            ace2 = 1;
        } else {
            ace2;
        }
        } else {
            ace2;
        }
    }
    if (ace2 == 1) {
        corr++;
        f_ok($("#ck0"));
        f_ok($("#ck1"));
        f_ok($("#ck2"));
        f_ok($("#ck3"));
    } else {
        corr;
        f_no($("#ck0"));
        f_no($("#ck1"));
        f_no($("#ck2"));
        f_no($("#ck3"));
    }

    for (var i = 0; i < 6; i++) {
        if (cl == vec7arre2[i]) {
            ace3 = 1;
        } else {
            ace3;
        }
    }
    if (ace3 == 1) {
        corr++;
        f_ok($("#cl0"));
        f_ok($("#cl1"));
        f_ok($("#cl2"));
        f_ok($("#cl3"));
    } else {
        corr;
        f_no($("#cl0"));
        f_no($("#cl1"));
        f_no($("#cl2"));
        f_no($("#cl3"));
    }

    for (var i = 0; i < 6; i++) {
        if (cl !=cm) {
            if (cm == vec7arre2[i]) {
            ace4 = 1;
        } else {
            ace4;
        }
        } else {
            ace4;
        }
    }
    if (ace4 == 1) {
        corr++;
        f_ok($("#cm0"));
        f_ok($("#cm1"));
        f_ok($("#cm2"));
        f_ok($("#cm3"));
    } else {
        corr;
        f_no($("#cm0"));
        f_no($("#cm1"));
        f_no($("#cm2"));
        f_no($("#cm3"));
    }

    var res = (corr * 1) / 4;
    tpre7 = parseFloat(res);
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));

}
// #endregion

// #region Pregunta8
var vec8res = [];
for (i = 0; i < 6; i++) {
    n1 = parseInt((Math.random() * 10) + 2);

    $("#nran" + [i] + "").html(n1);
    vec8res.push(n1);
}
vec8res.push(vec8res[0] * vec8res[1] * vec8res[2]);
vec8res.push(vec8res[3] * vec8res[4] * vec8res[5]);

function pregunta8() {
    var corr = 0;
    var n1 = $("#p8aux0").val();
    var n2 = $("#p8aux1").val();
    if (n1 == vec8res[6]) {
        corr++;
        f_ok($("#p8aux0"));
    } else {
        f_no($("#p8aux0"));
        corr;
    }

    if (n2 == vec8res[7]) {
        corr++;
        f_ok($("#p8aux1"));
    } else {
        f_no($("#p8aux1"));
        corr;
    }
    var res = (corr * 1) / 2;
    tpre8 = parseFloat(res);
    $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();;
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4) +
        parseFloat(tpre5) +
        parseFloat(tpre6) +
        parseFloat(tpre7) +
        parseFloat(tpre8);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}
// #endregion