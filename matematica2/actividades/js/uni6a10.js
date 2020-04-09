var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;


p1vec1=
[
'<li>¿Cuántos días hay en 4 semanas? Hay <input type="text" size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="28"> días.</li>',
'<li>¿Cuántas semanas completas hay en los meses de enero y febrero? Hay <input type="text" size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"> semanas.</li>',
'<li>¿En dos años cuantos días hay? Hay <input type="text" size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="730"> días.</li>',
'<li>¿Cuántos días hay en los 3 últimos meses del año? Hay <input type="text" size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="92"> días.</li>'
];
p1vec1.sort(f_randomico);
$('#li1').html(p1vec1);

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
    tpre1 = ((nota * 4) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

p2vec1=
[
'<li>¿Cuántas horas hay en dos días completos?<br> Hay <input type="text" maxlength="3"  size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="48"> horas.<br><br></li>',
'<li>¿Cuántos minutos hay en tres horas? Hay <input type="text" maxlength="3"  size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="180"> minutos.<br><br></li>',
'<li>Si son las 03:30 hasta las 06:00, ¿cuántos minutos han transcurrido? Han transcurrido <input type="text" maxlength="3"  size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="150"> minutos o <input type="text" maxlength="3"  size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"> horas y media.<br><br></li>',
'<li>Si es la 01:35 minutos hasta las 07:35, ¿cuántas horas han transcurrido? Han transcurrido <input type="text" maxlength="3"  size="1" style="width:70px;border: solid 1px #2E86C1;text-align: center;" class="respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"> horas.<br><br></li>'
];
p2vec1.sort(f_randomico);
$('#li2').html(p2vec1);

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
    tpre2 = ((nota * 4) / 10);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2))
}
// #endregion

// #region Random3

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
    tpre3 = (nota / 5);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    pregunta3();
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}