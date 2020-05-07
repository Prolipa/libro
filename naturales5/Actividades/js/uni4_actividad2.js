var titulos = "reflexiono";
$("#txtNota").html("0/10");
$("#n_pagina").html("142");

var tpre1 = 0;

// #region Pregunta1
function pregunta1() {
    var corr = 0;
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;
    var val5 = 0;
    for (var i = 0; i < 5; i++) {
        var res = ($("#p1aux" + [i] + "").val());

        switch (res) {
            case "Quito":

                if (val1 == 0) {
                    val1++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            case "Colombia":

                if (val2 == 0) {
                    val2++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            case "Otavalo":

                if (val3 == 0) {
                    val3++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            case "Guayaquil":

                if (val4 == 0) {
                    val4++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            case "Esmeraldas":
                if (val5 == 0) {
                    val5++;
                    corr++;
                    f_ok($("#p1aux" + [i] + ""));
                } else {
                    f_no($("#p1aux" + [i] + ""));
                    corr;
                }

                break;
            default:
                f_no($("#p1aux" + [i] + ""));
                corr;;

        }
    }
    var res = (corr * 10) / 4;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    var Nf = parseFloat(tpre1);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion