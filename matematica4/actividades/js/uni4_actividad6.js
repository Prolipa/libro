var titulos = "preparo";
f_titulos();
numero_pagina(170);


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

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 1);
});

// #region Pregunta1

function pregunta1() {
    var cor = 0;
    var p1vec1 = ['100,50', '100,60', '100,70', '100,80', '200,50', '200,60', '200,70', '200,80', '300,50', '300,60', '300,70', '300,80'];
    var p1res1 = [];
    for (var i = 0; i < 12; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() + ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 12; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 12; j++) {
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

    var res = (cor * 1) / 12;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var random2 = [
    ['<img src="img/i4_p170_act2.jpg" class="img-responsive" style>=( <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;"  class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"> ; <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;"  class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> )<br><br>'],
    ['<img src="img/i5_p170_act2.jpg" class="img-responsive" style>=( <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;"  class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"> ; <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;"  class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> )<br><br>'],
    ['<img src="img/i2_p170_act2.jpg" class="img-responsive" style>=( <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;"  class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"> ; <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;"  class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"> )<br><br>'],
    ['<img src="img/i3_p170_act2.jpg" class="img-responsive" style>=( <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;"  class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"> ; <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;"  class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> )<br><br>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
        '<span width="50px">' + random2[i][0] + "</span> "
    );
}

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
    tpre2 = ((nota * 1) / 10);
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
    tpre4 = ((nota * 3) / 10);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
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
    tpre5 = ((nota * 2) / 10);
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

// #region Calculo Nota Final
function NotaFinal() {
    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
    } else {
        var pre6a = document.getElementById("pre6a").value;
        if (pre6a == "") {
            alert("Pregunta 6: Califiqué la pregunta");
        } else {
            pregunta1();
            pregunta2();
            pregunta3();
            pregunta4();
            pregunta5();
            pregunta6();
            var Nf =
                parseFloat(tpre1) +
                parseFloat(tpre2) +
                parseFloat(tpre3) +
                parseFloat(tpre4) +
                parseFloat(tpre5) +
                parseFloat(tpre6);

            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
            $("input").attr('disabled', 'disabled');
        }
    }
}
// #endregion