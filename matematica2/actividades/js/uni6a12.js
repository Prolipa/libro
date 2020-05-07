var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});

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
    tpre1 = nota / 5;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


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
    tpre2 = nota / 5;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));

}
// #endregion

// #region Random3

// #endregion

// #region Pregunta3
function pregunta3() {
    var pre3a = document.getElementById("pre3a").value;
    tpre3 = pre3a;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
p4vec2 = [
    '<li>¿Cuántas horas hay en 4 noches? <input type="text" maxlength="3" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="48"> horas.<br><br></li>',
    '<li>¿Cuántos días hay en 5 semanas? <input type="text" maxlength="3" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="35"> días.<br><br></li>',
    '<li>¿Cuántos minutos hay en 3 horas? <input type="text" maxlength="3" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="180"> minutos.<br><br></li>',
    '<li>¿Cuántos meses hay en 3 años? <input type="text" maxlength="3" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="36"> meses.<br><br></li>',
    '<li>¿Cuántos segundos hay en 2 minutos? <input type="text" maxlength="3" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="120"> segundos.<br><br></li>',
    '<li>¿Cuántas horas hay en 2 días completos? <input type="text" maxlength="3" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="48"> horas.<br><br></li>'
];

p4vec2.sort(f_randomico);
$('#li4').html(p4vec2);
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
    tpre4 = nota / 5;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

var vec1 = [
    ["1", "img/i1_p236_act5.jpg"],
    ["2", "img/i2_p236_act5.jpg"],
    ["3", "img/i3_p236_act5.jpg"],
    ["4", "img/i4_p236_act5.jpg"],
    ["5", "img/i5_p236_act5.jpg"]
]

var res1 = [
    ["img/i2_p236_act5.jpg"]
]
var random3 = document.getElementsByClassName('imagen');

vec1.sort(f_randomico);
for (i = 0; i < random3.length; i++) {
    $('#' + random3[i].id).html('<img id=' + vec1[i][1] + ' style="mix-blend-mode: multiply;" class=" imgAcom" src="' + vec1[i][1] + '">');
}

$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});


// #region Pregunta5
function pregunta5() {
    var corr = 0;
    var inco = 0;
    for (var i = 1; i < 6; i++) {
        var acu = 0;
        if ($("#caja_img" + [i] + "").hasClass("seleccionCaja")) {
            var caja = $("div[id=caja_img" + [i] + "").find('img')[0].id;

            for (var j = 0; j < 1; j++) {
                if (caja == res1[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                corr++;
                $("#caja_img" + [i] + "").addClass('correctoi')
            } else {
                inco++;
                $("#caja_img" + [i] + "").removeClass('correctoi')
                $("#caja_img" + [i] + "").addClass('incorrectoi')
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 1) / 1;
    }
    tpre5 = total.toFixed(2);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
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

// #region Calculo Nota Final
function NotaFinal() {
    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
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
        
    }
}