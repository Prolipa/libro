var titulos = "prueba";
numero_pagina(140);


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
var tpre11 = 0;
var tpre12 = 0;

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});

document.getElementById("pre7a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre7a"), 1);
});

document.getElementById("pre10a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre10a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre10a"), 1);
});

$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});

// #region Random1
var random1 = [
    '<li>                                            2x−5=−1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x =<input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="2"><br><br>                                        </li>',
    '<li>                                            5y−5=0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; y =<input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="1"><br><br>                                        </li>',
    '<li>                                            4+2x =14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x =<input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="5"><br><br>                                        </li>',
    '<li>                                            5−x =1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x =<input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="4"> <br><br>                                        </li>',
    '<li>                                            3−2z =−3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; z =<input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="3"><br><br>                                        </li>',
    '<li>                                            2−4y =10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  y =<input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="-2"> <br><br>                                        </li>',
    '<li>                                            7x−7=14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  x =<input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="3"> <br><br>                                        </li>'
];
random1.sort(f_randomico);
$('#li1').html(random1);

// #endregion

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
    tpre1 = nota / 10;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var p2vec1 = [
    '<span class="enc2 col-md-1" id="2">(−2,9)</span>',
    '<span class="enc2 col-md-1" id="1">(3,1)</span>',
    '<span class="enc2 col-md-1" id="3">(5,0)</span>',
    '<span class="enc2 col-md-1" id="5">(1,3)</span>',
    '<span class="enc2 col-md-1" id="4">(0,5)</span>'
];
p2vec1.sort(f_randomico);
$('#p2aux1').html(p2vec1);

var p2vec2 = [
    '<span class="enc2 col-md-1" id="6">(0,8)</span>',
    '<span class="enc2 col-md-1" id="8">(−1,−3)</span>',
    '<span class="enc2 col-md-1" id="7">(14,2)</span>',
    '<span class="enc2 col-md-1" id="10">(8,0)</span>',
    '<span class="enc2 col-md-1" id="9">(4,5)</span>'
];
p2vec2.sort(f_randomico);
$('#p2aux2').html(p2vec2);

var p2vec3 = [
    '<span class="enc2 col-md-1" id="11">(0,−2)</span>',
    '<span class="enc2 col-md-1" id="13">(0,2)</span>',
    '<span class="enc2 col-md-1" id="12">(5,7)</span>',
    '<span class="enc2 col-md-1" id="15"><div class="fraction"><span class="fup">10</span><span class="bar">/</span><span class="fdn">3</span></div>,0</span>',
    '<span class="enc2 col-md-1" id="14">1,<div class="fraction"><span class="fup">7</span><span class="bar">/</span><span class="fdn">5</span></div></span>'
];
p2vec3.sort(f_randomico);
$('#p2aux3').html(p2vec3);

// #endregion

// #region Pregunta2
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
    for (var i = 1; i <= 15; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "(−2,9)" || caja == "(0,5)" || caja == "(1,3)" || caja == "(−1,−3)" || caja == "(14,2)" ||
                caja == "(8,0)" || caja == "(0,2)" ||
                caja == '10/3,0' ||
                caja == '1,7/5') {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("correcto");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("incorrecto");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 1) / 9;
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

// #region Random3
var p3vec1 = [
    '<li>x+3y = 4&nbsp;&nbsp;&nbsp;&nbsp;Para x = 1, y = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="1"><br><br></li>',
    '<li>3x−y =6&nbsp;&nbsp;&nbsp;&nbsp;Para x = 2, y = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="0"><br><br></li>',
    '<li>2y−x =−5&nbsp;&nbsp;&nbsp;&nbsp;Para x = 5, y = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="0"><br><br></li>',
    '<li>2x−5y =−9&nbsp;&nbsp;&nbsp;&nbsp;Para x = -3, y =                                            <div class="fraction">                                                <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="3"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="5"></span>                                            </div>                                        <br><br></li>',
    '<li>2x+y =5&nbsp;&nbsp;&nbsp;&nbsp;Para x = 3, y = <input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="-1"><br><br></li>',
];
p3vec1.sort(f_randomico);
$('#p3aux1').html(p3vec1);
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
    tpre3 = nota / 10;
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

// #region Random5
p5vec1 = [
    '<li>La recta x+2y =0 pasa por el origen                                            de coordenadas. <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas5"> <input type="hidden" style="color:blue;" class="solucion5" value="V"><br><br></li>',
    '<li>El valor de la pendiente de la recta                                            y =3x−5 es 5. <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas5"> <input type="hidden" style="color:blue;" class="solucion5" value="F"><br><br></li>',
    '<li>La recta y =−3x+2 corta al eje                                            Y en el punto (2, 0). <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas5"> <input type="hidden" style="color:blue;" class="solucion5" value="F"><br><br></li>',
    '<li>La recta 6x+3y =0 tiene pendiente                                            igual a – 2.  <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas5"> <input type="hidden" style="color:blue;" class="solucion5" value="V"><br><br></li>',
    '<li>La pendiente de la recta x+y =0 es 1.  <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas5"> <input type="hidden" style="color:blue;" class="solucion5" value="F"><br><br></li>'
];
p5vec1.sort(f_randomico);
$('#li5').html(p5vec1);

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
    tpre5 = nota / 10;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Random6
p6vec1 = [
    '<li class="text-question">                                            <div class="fraction">                                                <span class="fup">5x-3</span>                                                <span class="bar">/</span>                                                <span class="fdn">2</span>                                            </div>=4x-1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="-"><div class="fraction">                                                <span class="fup"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="1"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="3"></span>                                            </div>                                        <br><br></li>',
    '<li class="text-question">                                            3x-1 =                                             <div class="fraction">                                                <span class="fup">x + 4</span>                                                <span class="bar">/</span>                                                <span class="fdn">3</span>                                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = <div class="fraction">                                                <span class="fup"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="7"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="8"></span>                                            </div>                                        <br><br></li>',
    '<li class="text-question">                                            <div class="fraction">                                                <span class="fup">2x + 1</span>                                                <span class="bar">/</span>                                                <span class="fdn">3</span>                                            </div> =                                             <div class="fraction">                                                <span class="fup">x - 5</span>                                                <span class="bar">/</span>                                                <span class="fdn">6</span>                                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x =<input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="-"> <div class="fraction">                                                <span class="fup"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="7"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="3"></span>                                            </div>                                        <br><br></li>',
    '<li class="text-question">    <div class="fraction">                                                <span class="fup">x + 3</span>                                                <span class="bar">/</span>                                                <span class="fdn">2</span>                                            </div> =                                             <div class="fraction">                                                <span class="fup">2x + 1</span>                                                <span class="bar">/</span>                                                <span class="fdn">4</span>                                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x =<input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="-"> <div class="fraction">                                                <span class="fup"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="7"></span>                                                <span class="bar">/</span>                                                <span class="fdn"><input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="4"></span>                                            </div>                                        <br><br></li>'
];
p6vec1.sort(f_randomico);
$('#li6').html(p6vec1);
// #endregion

// #region Pregunta6

function pregunta6() {
    var respuestas = document.getElementsByClassName("respuestas6");
    var soluciones = document.getElementsByClassName("solucion6");
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
    tpre6 = nota / 10;
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
    var respuestas = document.getElementsByClassName("respuestas8");
    var soluciones = document.getElementsByClassName("solucion8");
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
    tpre8 = nota / 10;
    $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Pregunta9

function pregunta9() {
    var respuestas = document.getElementsByClassName("respuestas9");
    var soluciones = document.getElementsByClassName("solucion9");
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
    tpre9 = nota / 10;
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

// #region Pregunta11
function pregunta11() {
    var respuestas = document.getElementsByClassName("respuestas11");
    var soluciones = document.getElementsByClassName("solucion11");
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
    tpre11 = nota / 10;
    $("#pre11a").val(parseFloat(tpre11).toFixed(2));
}
// #endregion

// #region Pregunta12
function pregunta12() {
    var respuestas = document.getElementsByClassName("respuestas12");
    var soluciones = document.getElementsByClassName("solucion12");
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
    tpre12 = nota / 10;
    $("#pre12a").val(parseFloat(tpre12).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
    } else {
        var pre7a = document.getElementById("pre7a").value;
        if (pre7a == "") {
            alert("Pregunta 7: Califiqué la pregunta");
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
                pregunta11();
                pregunta12();
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
                    parseFloat(tpre10) +
                    parseFloat(tpre11) +
                    parseFloat(tpre12);
                var Vtotal = ((Nf*10)/12).toFixed(2);
                $("#txtNota").html(Vtotal);
                document.getElementById("bt_comprobar").disabled = true;
                $("input").attr('disabled', 'disabled');
            }
        }
    }
}
// #endregion