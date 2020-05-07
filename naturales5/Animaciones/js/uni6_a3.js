var titulos = "reflexiono";
f_titulos();
$("#n_pagina").html('203');

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});
document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 2);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1

function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

var random2 = [
    ['<span class="enc2" id="1">volaba</span>'],
    ['<span class="enc2" id="2">comía</span>'],
    ['<span class="enc2" id="3">cantaba</span>'],
    ['<span class="enc2" id="4">dormía</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
        '<span width="50px">' + random2[i][0] + "</span> "
    );
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
            if (caja == "cantaba") {
                respr1 = respr1 + 1;

                f_ok($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar');
            } else {
                respr2 = respr2 + 1;
                f_no($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar');
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 2) / 1;
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
p3vec1=
[
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i1_p203_act3.jpg" style="width: 150px; height: 150px"><br>                        <input type="text" maxlength="1" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"><br><br></center>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i2_p203_act3.jpg" style="width: 150px; height: 150px"><br>                        <input type="text" maxlength="1" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="5"><br><br></center>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i3_p203_act3.jpg" style="width: 150px; height: 150px"><br>                        <input type="text" maxlength="1" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="1"><br><br></center>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i4_p203_act3.jpg" style="width: 150px; height: 150px"><br>                        <input type="text" maxlength="1" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="3"><br><br></center>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i5_p203_act3.jpg" style="width: 150px; height: 150px"><br>                        <input type="text" maxlength="1" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #57B2E4;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="4"><br><br></center>                    </div>'
];
p3vec1.sort(f_randomico);
$('#li3').html(p3vec1);

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
    tpre3 = ((nota * 2) / 10);
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


// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        var pre4a = document.getElementById("pre4a").value;
        if (pre4a == "") {
            alert("Pregunta 4: Califiqué Lectura inferencial");
        } else {
            var pre5a = document.getElementById("pre5a").value;
            if (pre5a == "") {
                alert("Pregunta 5: Califiqué crítico-valorativa");
            } else {
                pregunta1();
                pregunta2();
                pregunta3();
                pregunta4();
                pregunta5();

                cor =
                    parseFloat(tpre1) +
                    parseFloat(tpre2) +
                    parseFloat(tpre3) +
                    parseFloat(tpre4) +
                    parseFloat(tpre5);

                Calculo_nota();
            }
        }
    }
}



// #endregion