var titulos = "aplico";
f_titulos();
$("#n_pagina").html('206');



document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
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

p1vec1 = [
    '<div class="col-sm-12" >                        Don Pepito, el verdulero, compra y vende un                        <input type="text"  size="10" style="width:100px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="sombrero"><br><br>                    </div>',
    '<div class="col-sm-12">                        el sombrero es de paja, lo guarda en una                        <input type="text"  size="10" style="width:100px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="caja"><br><br>                    </div>',
    '<div class="col-sm-12">                        la caja es de cartón, la pone en un                        <input type="text"  size="10" style="width:100px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="cajón"><br><br>                    </div>',
    '<div class="col-sm-12">                        el cajón es de pino del bosque de                        <input type="text"  size="10" style="width:100px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="Abelino"><br><br>                    </div>',
    '<div class="col-sm-12">                       Abelino es el cochero de Pepito el                        <input type="text"  size="10" style="width:100px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="verdulero"><br><br>                    </div>'
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
    tpre1 = ((nota * 2) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
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
    for (var i = 1; i <= 88; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "guitarra" || caja == "violín" || caja == "trombón") {
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

    var total = ((respr1 - respr2) * 2) / 9;
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
    var res = 0;
    p3vec1 = ['trombón', 'violín', 'guitarra']
    for (var i = 0; i <= p3vec1.length; i++) {
        var pal = $('#p3aux' + [i] + '').val();
        var cont = 0;
        for (var j = 0; j < p3vec1.length; j++) {
            if (pal == p3vec1[j]) {
                cont++;
                p3vec1[j] = '0';
            }

        }
        if (cont == 1) {
            res++;
            f_ok($("#p3aux" + [i] + ""));
            cont = 0;
        } else {
            f_no($("#p3aux" + [i] + ""));
            cont = 0;
            res;
        }
    }
    tpre3 = ((res / 3) * 2).toFixed(2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}

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
    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
    } else {
        var pre5a = document.getElementById("pre5a").value;
        if (pre5a == "") {
            alert("Pregunta 5: Califiqué la pregunta");
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
// #endregion