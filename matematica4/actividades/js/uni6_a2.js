var titulos = "aplico";
f_titulos();
numero_pagina(223);

var tpre1 = 0;
var tpre2 = 0;



// #region Pregunta1
function pregunta1() {
    var cor = 0;
    var p2vec1 = ['20,60', '20,120', '20,150', '20,310', '80,60', '80,120', '80,150', '80,310', '110,60', '110,120', '110,150', '110,310', '270,60', '270,120', '270,150', '270,310'];
    var p2res1 = [];
    for (var i = 0; i < 16; i++) {
        p2res1.push($('#p2dcon' + (i + 1)).val() + ',' + $('#p2dco' + (i + 1)).val());
    }
    for (var i = 0; i < 16; i++) {
        var p2cont1 = 0;
        for (var j = 0; j < 16; j++) {
            if (p2res1[i] == p2vec1[j]) {
                p2cont1++;
                p2vec1[j] = 'nnn';
            } else {
                p2cont1;
            }
        }
        if (p2cont1 == '1') {
            cor++;
            f_ok($('#p2dcon' + (i + 1)));
            f_ok($('#p2dco' + (i + 1)));
        } else {
            f_no($('#p2dcon' + (i + 1)));
            f_no($('#p2dco' + (i + 1)));
        }
    }

    var p3vec1 = ['20,60', '80,120', '110,150', '270,310'];
    var p3res1 = [];
    for (var i = 0; i < 4; i++) {
        p3res1.push($('#p3dcon' + (i + 1)).val() + ',' + $('#p3dco' + (i + 1)).val());
    }
    for (var i = 0; i < 4; i++) {
        var p3cont1 = 0;
        for (var j = 0; j < 4; j++) {
            if (p3res1[i] == p3vec1[j]) {
                p3cont1++;
                p3vec1[j] = 'nnn';
            } else {
                p3cont1;
            }
        }
        if (p3cont1 == '1') {
            cor++;
            f_ok($('#p3dcon' + (i + 1)));
            f_ok($('#p3dco' + (i + 1)));
        } else {
            f_no($('#p3dcon' + (i + 1)));
            f_no($('#p3dco' + (i + 1)));
        }
    }

    var res = (cor * 5) / 20;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() {
    var cor = 0;
    var p1vec1 = ['El Oro,Machala', 'Guayas,Guayaquil', 'Cotopaxi,Latacunga', 'Pichincha,Quito', 'Napo,Tena', 'Pastaza,Puyo'];
    var p1res1 = [];
    for (var i = 0; i < 6; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() + ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 6; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 6; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] = 'nnn';
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

    var res = (cor * 5) / 6;
    tpre2 = parseFloat(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion