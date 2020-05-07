var titulos = "aplico";
f_titulos();
numero_pagina(157);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

function validar3(e) {
    tecla = document.all ? e.keyCode : e.which;
    if (tecla == 8) return true;
    patron = /[,qwertyuiopñlkjhgdsazcxbnmQWERTYUIOPÑLKJHGDSAZCBNM1230456789.]/;
    te = String.fromCharCode(tecla);
    if (patron.test(te)) {
        alert("INGRESE V(VERDADERO) O F(FALSO) ");
        return false;
    }
}

// #region Pregunta1
var vecp1 = [];

for (i = 0; i < 3; i++) {
    var numero = parseInt(Math.random() * 10 + 1);
    if (i == 0) {
        vecp1.push(numero * 10);
    }
    if (i == 1) {
        vecp1.push(numero * 100);
    }
    if (i == 2) {
        vecp1.push(numero * 1000);
    }
    $("#p1aux" + [i] + "").html(numero);
}

function pregunta1() {
    var corr = 0;
    for (i = 0; i < 3; i++) {
        var resp = $("#p1res" + [i] + "").val();
        if (resp == vecp1[i]) {
            corr++;
            f_ok($("#p1res" + [i] + ""));
        } else {
            corr;
            f_no($("#p1res" + [i] + ""));
        }
    }
    var res = (corr * 3) / 3;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

var vec1p2 = [];
var vec2p2 = [];
var vec3p2 = [];
var vec4p2 = [];
var vec5p2 = [];

for (i = 0; i < 4; i++) {
    var numero = parseInt(Math.random() * 9 + 1);
    if (i == 0) {
        vec1p2.push(numero * 100);
        vec2p2 = vec1p2[i].toString().split("");
        $("#p2auxtab" + [i] + "").html(numero);
    }
    if (i == 1) {
        vec1p2.push(numero * 10);
        vec2p3 = vec1p2[i].toString().split("");
        $("#p2auxtab" + [i] + "").html(numero);
    }
    if (i == 2) {
        vec1p2.push(numero * 100);
        vec2p4 = vec1p2[i].toString().split("");
        $("#p2auxtab" + [i] + "").html(numero);
    }
    if (i == 3) {
        vec1p2.push(numero * 10);
        vec2p5 = vec1p2[i].toString().split("");
    }
    $("#p2aux" + [i] + "").html(numero);
}

var t11 = $("#p2aux3").text();

function pregunta2() {
    var corr = 0;
    for (i = 0; i < 4; i++) {
        var resp = $("#p2res" + [i] + "").val();
        if (resp == vec1p2[i]) {
            corr++;
            f_ok($("#p2res" + [i] + ""));
        } else {
            corr;
            f_no($("#p2res" + [i] + ""));
        }
    }

    var t1 = $("#p2tab1").val();
    var t2 = $("#p2tab2").val();
    var t3 = $("#p2tab3").val();
    var t4 = $("#p2tab4").val();
    var t5 = $("#p2tab5").val();
    var t6 = $("#p2tab6").val();
    var t7 = $("#p2tab7").val();
    var t8 = $("#p2tab8").val();
    var t9 = $("#p2tab9").val();
    var t10 = $("#p2tab10").val();

    if (t1 == "0" && t2 == "0" && t3 == "") {
        f_ok($("#p2tab1"));
        f_ok($("#p2tab2"));
        corr++;
    } else {
        f_no($("#p2tab1"));
        f_no($("#p2tab2"));
        f_no($("#p2tab3"));
    }

    if (t4 == "0") {
        f_ok($("#p2tab4"));
        corr++;
    } else {
        f_no($("#p2tab4"));
    }

    if (t5 == "0" && t6 == "0") {
        f_ok($("#p2tab5"));
        f_ok($("#p2tab6"));
        corr++;
    } else {
        f_no($("#p2tab5"));
        f_no($("#p2tab6"));
    }

    if (t7 == t11 && t8 == "0" && t9 == "" && t10 == "") {
        f_ok($("#p2tab7"));
        f_ok($("#p2tab8"));
        corr++;
    } else {
        f_no($("#p2tab7"));
        f_no($("#p2tab8"));
        f_no($("#p2tab9"));
        f_no($("#p2tab10"));
    }

    var res = (corr * 3) / 8;
    tpre2 = parseFloat(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

var vecp3 = [];

for (i = 0; i < 6; i++) {
    var numero = parseInt(Math.random() * 50 + 1);
    if (i == 0) {
        vecp3.push(numero * 10);
    }
    if (i == 1) {
        vecp3.push(numero * 100);
    }
    if (i == 2) {
        vecp3.push(numero * 10);
    }
    if (i == 3) {
        vecp3.push(numero * 10);
    }
    if (i == 4) {
        vecp3.push(numero * 100);
    }
    if (i == 5) {
        vecp3.push(numero * 10);
    }
    $("#p3aux" + [i] + "").html(numero);
}

function pregunta3() {
    var corr = 0;
    for (i = 0; i < 6; i++) {
        var resp = $("#p3res" + [i] + "").val();
        if (resp == vecp3[i]) {
            corr++;
            f_ok($("#p3res" + [i] + ""));
        } else {
            corr;
            f_no($("#p3res" + [i] + ""));
        }
    }
    var res = (corr * 3) / 6;
    tpre3 = parseFloat(res);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var vecp4 = [];
var vec2p4 = [];
var p4n1 = parseInt(Math.random() * 199 + 101);
var p4n2 = parseInt(Math.random() * 5 + 4);
$("#p4n1").html(p4n1);
$("#p4n2").html(p4n2);

var res1 = [];
res1 = p4n1.toString().split("");
vecp4.push(p4n2 * 100);
vecp4.push(vecp4[0] - p4n1);

function pregunta4() {
    var corr = 0;

    var t1 = $("#p4aux1").val();
    var t2 = $("#p4aux2").val();
    var t3 = $("#p4aux3").val();
    var t4 = $("#p4aux4").val();
    var t5 = $("#p4aux5").val();
    var t6 = $("#p4aux6").val();
    var t7 = $("#p4aux7").val();
    var t8 = $("#p4aux8").val();
    var t9 = $("#p4aux9").val();
    var t10 = $("#p4aux10").val();
    var t11 = $("#p4aux11").val();

    if (t1 == p4n1) {
        f_ok($("#p4aux1"));
        corr++;
    } else {
        f_no($("#p4aux1"));
    }

    if (t2 == p4n2) {
        f_ok($("#p4aux2"));
        corr++;
    } else {
        f_no($("#p4aux2"));
    }

    if (t3 == p4n1) {
        f_ok($("#p4aux3"));
        corr++;
    } else {
        f_no($("#p4aux3"));
    }

    if (t4 == res1[0]) {
        f_ok($("#p4aux4"));
        corr++;
    } else {
        f_no($("#p4aux4"));
    }
    if (t5 == res1[1] + res1[2]) {
        f_ok($("#p4aux5"));
        corr++;
    } else {
        f_no($("#p4aux5"));
    }

    if (t6 == p4n2) {
        f_ok($("#p4aux6"));
        corr++;
    } else {
        f_no($("#p4aux6"));
    }
    if (t7 == vecp4[0]) {
        f_ok($("#p4aux7"));
        corr++;
    } else {
        f_no($("#p4aux7"));
    }

    if (t9 == p4n1) {
        f_ok($("#p4aux9"));
        corr++;
    } else {
        f_no($("#p4aux9"));
    }

    if (t8 == vecp4[0]) {
        f_ok($("#p4aux8"));
        corr++;
    } else {
        f_no($("#p4aux8"));
    }

    if (t10 == vecp4[1]) {
        f_ok($("#p4aux10"));
        corr++;
    } else {
        f_no($("#p4aux10"));
    }

    if (t11 == vecp4[1]) {
        f_ok($("#p4aux11"));
        corr++;
    } else {
        f_no($("#p4aux11"));
    }

    var res = (corr * 1) / 11;
    tpre4 = parseFloat(res);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
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

// #endregion