var titulos = "refuerzo";
numero_pagina(154);


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
    validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

document.getElementById("pre7a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre7a"), 1);
});



$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
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

// #region Random3
p3vec1 = [
    '<li class="col-sm-6">y = -7x -5 <br>                                            y = kx + 3<br>                                            k = <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="-7"></li><br>',
    '<li class="col-sm-6">x + 5y = -8 <br>                                            kx + 15y = 3<br>                                            k = <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="3"></li><br>',
    '<li class="col-sm-6">3x - 2y = 6 <br>                                            6x - ky = -1<br>                                            k = <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="4"></li><br>',
    '<li class="col-sm-6">-<div class="fraction">                                                <span class="fup">1</span>                                                <span class="bar">/</span>                                                <span class="fdn">4</span>                                            </div>x + 3y = 4 <br>                                            2x + ky = 3<br>                                            k = <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="-24"></li><br>'
];
p3vec1.sort(f_randomico);
$('#li31').html(p3vec1);
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

// #region Random4
p4vec1 = [
    '<li class="col-sm-6">y = 2x + 4<br>                                            -y = <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas4"> <input type="hidden" style="color:blue;" class="solucion4" value="-2">x - 4</li>',
    '<li class="col-sm-6">-3x - 8y = 5<br>                                            <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas4"> <input type="hidden" style="color:blue;" class="solucion4" value="-6">x - 16y = <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas4"> <input type="hidden" style="color:blue;" class="solucion4" value="10"></li>',
    '<li class="col-sm-6">x + 5y = 1<br>                                            <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas4"> <input type="hidden" style="color:blue;" class="solucion4" value="4">x + 20y = 4</li>',
    '<li class="col-sm-6">7x + 3y = -5<br>                                            <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas4"> <input type="hidden" style="color:blue;" class="solucion4" value="14">x - <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas4"> <input type="hidden" style="color:blue;" class="solucion4" value="6">y = -10</li>'
];
p4vec1.sort(f_randomico);
$('#li4').html(p4vec1);
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
    tpre4 = nota / 10;
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
p6vec1 = [
    '<li>y = 4x - 10<br>                                        5x - 3y = 16<br><br>                                        R. ( <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="2"> , <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="-2"> )                                                        </li><br><br>',
    '<li>9x + 7y = 5<br>                                        -3x + 11y = 25<br><br>                                        R. ( <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="-1"> , <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="2"> )                                                         </li><br><br>',
    '<li>y = -15x + 10<br>                                        y = 12x - 17<br><br>                                        R. ( <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="1"> , <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas6"> <input type="hidden" style="color:blue;" class="solucion6" value="-5"> )                                                         </li><br><br>'
];
p6vec1.sort(f_randomico);
$('#li6').html(p6vec1);

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

// #region Pregunta6

function pregunta7() {
    var pre7a = document.getElementById("pre7a").value;
    tpre7 = pre7a;
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
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
            var pre5a = document.getElementById("pre5a").value;
            if (pre5a == "") {
                alert("Pregunta 5: Califiqué la pregunta");
            } else {
                var pre7a = document.getElementById("pre7a").value;
                if (pre7a == "") {
                    alert("Pregunta 7: Califiqué la pregunta");
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
                    var Vtotal = ((Nf * 10) / 7).toFixed(2);
                    $("#txtNota").html(Vtotal);
                    document.getElementById("bt_comprobar").disabled = true;
                    $("input").attr('disabled', 'disabled');
                }
            }
        }
    }
}
// #endregion