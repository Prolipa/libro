var titulos = "aplico";
f_titulos();
numero_pagina(235);

var tpre1 = 0;


// #region Pregunta1
p1vec2 = [];
for (var i = 0; i < 12; i++) {
    n1 = parseInt(Math.random() * 150 + 1);
    n2 = parseInt(Math.random() * 10 + 1);

    $('#num' + [i] + '').html(n1);
    $('#numa' + [i] + '').html(n2);

    p1vec2.push(n1 * n2);
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
    var result1 = (cor * 10) / 12;
    tpre1 = parseFloat(result1);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    var Nf =
        parseFloat(tpre1);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion