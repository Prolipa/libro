var titulos = "aplico";
$("#txtNota").html("0/10");
$("#n_pagina").html("205");
var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2.5);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2.5);
});

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1
p1vec1 = [
    '<div class="col-sm-4 table-responsive">                        <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;border: solid 2px #00AEEF;font: 40;border-radius: 30px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1">                        <img src="img/i1_p205_act1.jpg" style="width: 100px;height: 90px">                    </div>',
    '<div class="col-sm-4 table-responsive">                        <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;border: solid 2px #00AEEF;font: 40;border-radius: 30px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6">                        <img src="img/i2_p205_act1.jpg" style="width: 100px;height: 90px">                    </div>',
    '<div class="col-sm-4 table-responsive">                        <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;border: solid 2px #00AEEF;font: 40;border-radius: 30px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4">                        <img src="img/i3_p205_act1.jpg" style="width: 100px;height: 90px">                    </div>',
    '<div class="col-sm-4 table-responsive">                        <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;border: solid 2px #00AEEF;font: 40;border-radius: 30px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7">                        <img src="img/i4_p205_act1.jpg" style="width: 100px;height: 90px">                    </div>',
    '<div class="col-sm-4 table-responsive">                        <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;border: solid 2px #00AEEF;font: 40;border-radius: 30px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="5">                        <img src="img/i5_p205_act1.jpg" style="width: 100px;height: 90px">                    </div>',
    '<div class="col-sm-4 table-responsive">                        <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;border: solid 2px #00AEEF;font: 40;border-radius: 30px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3">                        <img src="img/i6_p205_act1.jpg" style="width: 100px;height: 90px">                    </div>',
    '<div class="col-sm-4 table-responsive">                        <input type="text" size="1" maxlength="1" style="width:40px;text-align: center;border: solid 2px #00AEEF;font: 40;border-radius: 30px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2">                        <img src="img/i7_p205_act1.jpg" style="width: 100px;height: 90px">                    </div>'
];
p1vec1.sort(f_randomico);
$('#li1').html(p1vec1);

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
    tpre1 = ((nota / 10) * 2.5);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2

ramdon2 = [
    '<span id="1" style="border: 3px dotted #00AEEF;padding:10px;" class="enc2">La mosca hizo callar al gato.</span><br><br>',
    '<span id="2" style="border: 3px dotted #00AEEF;padding:10px;" class="enc2">La araña hizo callar a la rana.</span><br><br>',
    '<span id="3" style="border: 3px dotted #00AEEF;padding:10px;" class="enc2">El hombre hizo callar al perro.</span><br><br>',
    '<span id="4" style="border: 3px dotted #00AEEF;padding:10px;" class="enc2">La rana cantaba bajo el agua.</span><br><br>'
];
ramdon2.sort(f_randomico);
for (var i = 1; i < 7; i++) {
    $('#pre2id' + [i] + '').html(ramdon2[i - 1]);
}

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
    for (var i = 1; i <= 4; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "El hombre hizo callar al perro.") {
                respr1 = respr1 + 1;
                $("#" + [i] + "").removeClass("subrayar");
                $("#" + [i] + "").addClass("correcto");
            } else {
                respr2 = respr2 + 1;
                $("#" + [i] + "").removeClass("subrayar");
                $("#" + [i] + "").addClass("incorrecto");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 2.5) / 1;
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

// #region Calculo Nota Final
function NotaFinal() {
    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
    } else {
        var pre4a = document.getElementById("pre4a").value;
        if (pre4a == "") {
            alert("Pregunta 4: Califiqué la pregunta");
        } else {
            pregunta1();
            pregunta2();
            pregunta3();
            pregunta4();
            cor = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4);
            Calculo_nota();
        }
    }
}

// #endregion