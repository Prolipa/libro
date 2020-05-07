var titulos = "aplico";
f_titulos();
numero_pagina(253);

var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1

function pregunta1() {
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
    tpre1 = (nota / 2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2


function pregunta2() {
    var cor = 0;
    var p1vec1 = ['Romina,Rafaela', 'Romina,Marina', 'Romina,Martina', 'Isabela,Rafaela', 'Isabela,Marina', 'Isabela,Martina', 'Camila,Rafaela', 'Camila,Marina', 'Camila,Martina'];
    var p1res1 = [];
    for (var i = 0; i < 9; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() +
            ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 9; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 9; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] == 'a';
            } else { p1cont1; }
        }
        if (p1cont1 == '1') {
            cor++;
            f_ok($('#p1dcon' + (i + 1)));
            f_ok($('#p1dco' + (i + 1)));
        } else {
            f_no($('#p1dcon' + (i + 1)));
            f_no($('#p1dco' +
                (i + 1)));
        }
    }
    var res = ((cor * 5) / 9);
    tpre2 =
        parseFloat(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();

    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}


// #endregion