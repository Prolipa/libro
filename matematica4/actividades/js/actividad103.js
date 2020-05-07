var titulos = "refuerzo";
f_titulos();
numero_pagina(116);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 0.5);
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
    tpre2 = nota / 10;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
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
    tpre3 = nota / 5;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
    [
        '<img class="img-responsive" src="img/i2_p116_act4.jpg"><br><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="3"> x <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="5"> = 15</h4>'
    ],
    [
        '<img class="img-responsive" src="img/i3_p116_act4.jpg"><br><h4><input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4"> x <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="8"> = 32</h4>'
    ],
    [
        '<img class="img-responsive" src="img/i1_p116_act4.jpg"><br><h4> 2 x 5 = 10</h4>'
    ]
];

var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
        '<span width="50px">' + random4[i][0] + "</span> "
    );
}
// #endregion

// #region Pregunta4
function pregunta4() {
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
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
    tpre4 = nota / 20;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Random5
var random5 = [
    [
        '<h4> 5 x 6 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="30"></h4>'
    ],
    [
        '<h4> 8 x 3 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="24"></h4>'
    ],
    [
        '<h4> 7 x 2 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="14"></h4>'
    ],
    [
        '<h4> 2 x 11 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="22"></h4>'
    ],
    [
        '<h4> 4 x 8 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="32"></h4>'
    ],
    [
        '<h4> 3 x 2 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="6"></h4>'
    ],
    [
        '<h4> 5 x 5 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="25"></h4>'
    ],
    [
        '<h4> 6 x 5 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="30"></h4>'
    ],
    [
        '<h4> 10 x 2 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="20"></h4>'
    ],
    [
        '<h4> 3 x 7 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="21"></h4>'
    ],
    [
        '<h4> 2 x 5 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="10"></h4>'
    ],
    ['<h4> 2 x 15 = <input type="text" size="1" maxlength="2" style="width:30px" class=" border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="30"></h4>']
];

var rancinco = document.getElementsByClassName("imagen5");
random5.sort(f_randomico);
for (i = 0; i < rancinco.length; i++) {
    $("#" + rancinco[i].id).html(
        '<span width="50px">' + random5[i][0] + "</span> "
    );
}
// #endregion

// #region Pregunta5
function pregunta5() {
    var respuestas = document.getElementsByClassName("respuestas5");
    var soluciones = document.getElementsByClassName("solucion5");
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
    tpre5 = nota / 5;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Random6
var random6 = [
    [
        '<h4>5 x 2 =</h4><table class="cajas"><tr><td width="25%"><span class="enc6" id="9">6 </span></td><td width="25%"><span class="enc6" id="10">8 </span></td></tr><tr><td><span class="enc6" id="11">10</span></td><td><span class="enc6" id="12">12 </span></td></tr></table>'
    ],
    [
        '<h4>4 x 2 =</h4><table class="cajas"><tr><td width="25%"><span class="enc6" id="17">2</span></td><td width="25%"><span class="enc6" id="18">4</span></td></tr><tr><td><span class="enc6" id="19">6</span></td><td><span class="enc6" id="20">8</span></td></tr></table>'
    ],
    [
        '<h4>7 x 2 =</h4><table class="cajas"><tr><td width="25%"><span class="enc6" id="5">14</span></td><td width="25%"><span class="enc6" id="6">16 </span></td></tr><tr><td><span class="enc6" id="7">18 </span></td><td><span class="enc6" id="8">20 </span></td></tr></table>'
    ],
    [
        '<h4>9 x 2 =</h4><table class="cajas"><tr><td width="25%"><span class="enc6" id="1">12 </span></td><td width="25%"><span class="enc6" id="2">14 </span></td></tr><tr><td><span class="enc6" id="3">16 </span></td><td><span class="enc6" id="4">18</span></td></tr></table>'
    ],
    [
        '<h4>8 x 2 =</h4><table class="cajas"><tr><td width="25%"><span class="enc6" id="13">14 </span></td><td width="25%"><span class="enc6" id="14">16</span></td></tr><tr><td><span class="enc6" id="15">12 </span></td><td><span class="enc6" id="16">18 </span></td></tr></table>'
    ]
];

var ranseis = document.getElementsByClassName("imagen6");
random6.sort(f_randomico);
for (i = 0; i < ranseis.length; i++) {
    $("#" + ranseis[i].id).html(
        '<span width="50px">' + random6[i][0] + "</span> "
    );
}
// #endregion

// #region Pregunta6
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
    for (var i = 1; i <= 20; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "18" || caja == "14" || caja == "10" || caja == "16" || caja == "8") {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("correctoi");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("incorrectoi");
            }
        } else {}
    }

    var total = (((respr1 + respr2) - respr2) * 2) / 5;
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

// #region Random7
var random7 = [
    ['<span class="enc7" id="22">12</span>'],
    ['<span class="enc7" id="21">24</span>'],
    ['<span class="enc7" id="23">32</span>'],
    ['<span class="enc7" id="24">40</span>']
];

var ransiete = document.getElementsByClassName("imagen7");
random7.sort(f_randomico);
for (i = 0; i < ransiete.length; i++) {
    $("#" + ransiete[i].id).html(
        '<span width="50px">' + random7[i][0] + "</span> "
    );
}
// #endregion

// #region Random8
var random8 = [
    ['<span class="enc7" id="25">8</span>'],
    ['<span class="enc7" id="27">10</span>'],
    ['<span class="enc7" id="26">12</span>'],
    ['<span class="enc7" id="28">20</span>']
];

var ranocho = document.getElementsByClassName("imagen8");
random8.sort(f_randomico);
for (i = 0; i < ranocho.length; i++) {
    $("#" + ranocho[i].id).html(
        '<span width="50px">' + random8[i][0] + "</span> "
    );
}
// #endregion

// #region Pregunta7
$(".enc7").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta7() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 21; i <= 28; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "32" || caja == "10") {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("correctoi");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("incorrectoi");
            }
        } else {}
    }

    var total = ((respr1 + respr2) - respr2);
    if (total < 0) {
        total = 0;
        tpre7 = total;
    } else {
        tpre7 = total;
    }

    tpre7 = total.toFixed(2);
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        var Nf =
            parseFloat(tpre1) +
            parseFloat(tpre2) +
            parseFloat(tpre3) +
            parseFloat(tpre4) +
            parseFloat(tpre5) +
            parseFloat(tpre6) +
            parseFloat(tpre7);

        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
    }
}

// #endregion