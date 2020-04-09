var titulos = "evaluacion";
numero_pagina(175);

$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 1);
});
document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});
document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});
document.getElementById("pre7a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre7a"), 1);
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
    validMaxIngreso(document.getElementById("pre10a"), 2);
});


var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;
var tpre10 = 0;


// #region Pregunta2
var p2vec1 = [
    '<li ><span class="enc2" id="1">el estado de un hospital.</span></li>',
    '<li ><span class="enc2" id="2">la muerte de una chica.</span></li>',
    '<li ><span class="enc2" id="3">la situación del doctor.</span></li>',
    '<li ><span class="enc2" id="4">la ubicación del hospital.</span></li>'
];
p2vec1.sort(f_randomico);
$('#li1').html(p2vec1);

var p2vec2 = [
    '<li ><span class="enc2" id="5">un buen físico.</span></li>',
    '<li ><span class="enc2" id="6">inteligencia para deducir.</span></li>',
    '<li ><span class="enc2" id="7">buena ropa y accesorios.</span></li>',
    '<li ><span class="enc2" id="8">relaciones y contactos.</span></li>'
];
p2vec2.sort(f_randomico);
$('#li2').html(p2vec2);

var p2vec3 = [
    '<li ><span class="enc2" id="9">teatral.</span></li>',
    '<li ><span class="enc2" id="10">poético.</span></li>',
    '<li ><span class="enc2" id="11">narrativo.</span></li>',
    '<li ><span class="enc2" id="12">informativo.</span></li>'
];
p2vec3.sort(f_randomico);
$('#li3').html(p2vec3);

var p2vec4 = [
    '<li ><span class="enc2" id="13">omnisciente.</span></li>',
    '<li ><span class="enc2" id="14">testigo.</span></li>',
    '<li ><span class="enc2" id="15">protagonista.</span></li>',
    '<li ><span class="enc2" id="16">todos.</span></li>'
];
p2vec4.sort(f_randomico);
$('#li4').html(p2vec4);

var p2vec5 = [
    '<li ><span class="enc2" id="17">que sabe de los hechos.</span></li>',
    '<li ><span class="enc2" id="18">que presume los hechos.</span></li>',
    '<li ><span class="enc2" id="19">que juzgue los hechos.</span></li>',
    '<li ><span class="enc2" id="20">que deduzca los hechos.</span></li>'
];
p2vec5.sort(f_randomico);
$('#li5').html(p2vec5);

var p2vec6 = [
    '<li ><span class="enc2" id="21">hablar de hechos de un tiempo futuro.</span></li>',
    '<li ><span class="enc2" id="22">insertar hechos de un tiempo pasado.</span></li>',
    '<li ><span class="enc2" id="23">narrar en tiempo presente.</span></li>',
    '<li ><span class="enc2" id="24">escribir en otro idioma.</span></li>'
];
p2vec6.sort(f_randomico);
$('#li6').html(p2vec6);

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
    for (var i = 1; i <= 24; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "la muerte de una chica." ||
                caja == "inteligencia para deducir." ||
                caja == "narrativo." ||
                caja == "todos." ||
                caja == "que deduzca los hechos." ||
                caja == "hablar de hechos de un tiempo futuro.") {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("subrayarc");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("subrayari");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 1) / 6;
    if (total < 0) {
        total = 0;
    } else {
        total;
    }



    tpre2 = (total);
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
function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion


// #region Pregunta5
function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7
function pregunta7() {
    var pre7a = document.getElementById("pre7a").value;
    tpre7 = pre7a;
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

// #region Pregunta5
function pregunta10() {
    var pre10a = document.getElementById("pre10a").value;
    tpre10 = pre10a;
    $("#pre10a").val(parseFloat(tpre10).toFixed(2));
}
// #endregion

function NotaFinal() {

    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
    } else {
        var pre4a = document.getElementById("pre4a").value;
        if (pre4a == "") {
            alert("Pregunta 4: Califiqué la pregunta");
        } else {
            var pre5a = document.getElementById("pre5a").value;
            if (pre5a == "") {
                alert("Pregunta 5: Califiqué la pregunta");
            } else {
                var pre6a = document.getElementById("pre6a").value;
                if (pre6a == "") {
                    alert("Pregunta 6: Califiqué la pregunta");
                } else {
                    var pre7a = document.getElementById("pre7a").value;
                    if (pre7a == "") {
                        alert("Pregunta 7: Califiqué la pregunta");
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

                                    pregunta2();
                                    pregunta3();
                                    pregunta4();
                                    pregunta5();
                                    pregunta6();
                                    pregunta7();
                                    pregunta8();
                                    pregunta9();
                                    pregunta10();
                                    var Nf = parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5) + parseFloat(tpre6) + parseFloat(tpre7) + parseFloat(tpre8) + parseFloat(tpre9) + parseFloat(tpre10);
                                    var Vtotal = Nf.toFixed(2);
                                    $("#txtNota").html(Vtotal);
                                    document.getElementById("bt_comprobar").disabled = true;
                                    $("input").attr('disabled', 'disabled');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}