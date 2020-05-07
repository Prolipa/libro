var titulos = "aplico";
$("#txtNota").html("0/10");
$("#n_pagina").html("143");

var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
ramdon1=[
'<tr><table class="table"><tr><td width="20%"><center><br>El niño chil<input type="text" maxlength="3" size="1" style="width:50px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden" style="color:blue" class="solucion1" value="eno"></center></td><td width="70%"><img src="img/i1_p143_act1.jpg"></td></tr></table></tr>',
'<tr><table class="table"><tr><td width="20%"><center><br>El joven españ<input type="text" maxlength="3" size="1" style="width:50px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden" style="color:blue" class="solucion1" value="ol"></center></td><td width="70%"><img src="img/i2_p143_act1.jpg"></td></tr></table></tr>',
'<tr><table class="table"><tr><td width="20%"><center><br>El turista gri<input type="text" maxlength="3" size="1" style="width:50px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden" style="color:blue" class="solucion1" value="ego"></center></td><td width="70%"><img src="img/i3_p143_act1.jpg"></td></tr></table></tr>',
'<tr><table class="table"><tr><td width="20%"><center><br>Mi primo yucat<input type="text" maxlength="3" size="1" style="width:50px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden" style="color:blue" class="solucion1" value="eco"></center></td><td width="70%"><img src="img/i4_p143_act1.jpg"></td></tr></table></tr>'
];
ramdon1.sort(f_randomico);
$('#tab1').html(ramdon1);

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
    tpre1 = nota / 2;
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
    tpre2 = nota / 2;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion