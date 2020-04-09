var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Pregunta1
p1vec1 = [];
p1vec2 = [];
for (var i = 0; i < 30; i++) {
    n1 = parseInt(Math.random() * 9 + 1);
    p1vec1.push(n1);
    $('#num' + [i] + '').html(n1);
    if (i % 2 != 0) {
        p1vec2.push((p1vec1[i]) * (p1vec1[i - 1]));
    }
}

function pregunta1() {
    var cor = 0;
    for (var i = 0; i < p1vec2.length; i++) {
        var num = $('#res' + [i] + '').val();
        if (p1vec2[i] == num) {
            f_ok($('#res' + [i] + ''));
            cor++;
        } else {
            f_no($('#res' + [i] + ''));
            cor;
        }
    }
    var result1 = (cor * 4) / 15;
    tpre1 = parseFloat(result1);
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
    tpre2 = ((nota / 10) * 4);
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
    tpre3 = ((nota / 10) * 2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}