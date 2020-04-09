var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

// #region Pregunta1
p1vec1 = [];
p1vec2 = [];
for (var i = 0; i < 6; i++) {
    var num1 = parseInt((Math.random() * 10) + 1);
    $('#p1num' + [i] + '').html(num1);
    p1vec1.push(num1);
}

p1vec2.push((p1vec1[0]) * (p1vec1[1]));
$('#p1res0').html(p1vec2[0]);
p1vec2.push((p1vec1[2]) * (p1vec1[3]));
$('#p1res1').html(p1vec2[1]);
p1vec2.push((p1vec1[4]) * (p1vec1[5]));
$('#p1res2').html(p1vec2[2]);

function pregunta1() {
    var cor = 0;
    for (var i = 0; i < 6; i++) {
        var num = $("#nm" + [i] + "").val();
        if (p1vec1[i] == num) {
            cor++;
            f_ok($("#nm" + [i] + ""));
        } else {
            f_no($("#nm" + [i] + ""));
        }
    }

    for (var i = 0; i < 3; i++) {
        var num = $("#nmres" + [i] + "").val();
        if (p1vec2[i] == num) {
            cor++;
            f_ok($("#nmres" + [i] + ""));
        } else {
            f_no($("#nmres" + [i] + ""));
        }
    }
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
    var respu = ((nota / 10));

    var res = ((cor * 1) / 9) + respu;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

function pregunta2() {
    var respuestas = document.getElementsByClassName("respuestas2");
    var soluciones = document.getElementsByClassName("solucion2");
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
    tpre2 = ((nota / 10) * 2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
p3vec1 = [];
p3vec2 = [];
p3vec3 = ['10', '100'];
p3vec3.sort(f_randomico);
for (var i = 0; i < 27; i++) {
    n1 = parseInt(Math.random() * 40 + 1);
    p3vec3.sort(f_randomico);
    n2 = p3vec3[0];
    p3vec1.push(n1);
    p3vec1.push(n2);
    $('#numa' + [i] + '').html(n1);
    $('#numb' + [i] + '').html(n2);
    if (i % 2 != 0) {
        p3vec2.push((p3vec1[i]) * (p3vec1[i - 1]));
    }
}

function pregunta3() {
    var cor = 0;
    for (var i = 0; i < 12; i++) {
        var num = $('#res' + [i] + '').val();
        if (p3vec2[i] == num) {
            f_ok($('#res' + [i] + ''));
            cor++;
        } else {
            f_no($('#res' + [i] + ''));
            cor;
        }
    }
    var result3 = (cor * 4) / 12;
    tpre3 = parseFloat(result3);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});

function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var r = [];
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 3) + 2);

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
        n1 = parseInt((Math.random() * 3) + 2);

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
        n1 = parseInt((Math.random() * 2) + 1);

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
        n1 = parseInt((Math.random() * 3) + 2);

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


// #region Calculo Nota Final
function NotaFinal() {
    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
    }
}