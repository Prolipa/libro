var tpre1 = 0;

// #region Pregunta1

function pregunta1() {
    var cor = 0;
    var p1vec1 = ['Sombrero,Pañuelo', 'Sombrero,Gafas', 'Gorra,Pañuelo', 'Gorra,Gafas'];
    var p1res1 = [];
    for (var i = 0; i < 4; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() + ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 4; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 4; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] == 'a';
            } else {
                p1cont1;
            }
        }
        if (p1cont1 == '1') {
            cor++;
            f_ok($('#p1dcon' + (i + 1)));
            f_ok($('#p1dco' + (i + 1)));
        } else {
            f_no($('#p1dcon' + (i + 1)));
            f_no($('#p1dco' + (i + 1)));
        }
    }

    var res = (cor * 10) / 4;
    tpre1 = parseFloat(res);
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