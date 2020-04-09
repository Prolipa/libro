var titulos = "aplico";
f_titulos();
$("#n_pagina").html('67');
var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 17,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var a75vec1 = ['<span style="color: #449FD6;">275</span> cromos son de <input id="p2dcon1" type="text" style="width: 120px; text-align: center; border:2px solid #449FD6; border-radius: 10px;">',
        '<span style="color: #60AE29;">286</span> cromos son de <input id="p2dcon2" type="text" style="width: 120px; text-align: center; border:2px solid #60AE29; border-radius: 10px;">',
        '<span style="color: #DC005E;">206</span> cromos son de <input id="p2dcon3" type="text" style="width: 120px; text-align: center; border:2px solid #DC005E; border-radius: 10px;">',
        '<span style="color: #F7B400;">196</span> cromos son de <input id="p2dcon4" type="text" style="width: 120px; text-align: center; border:2px solid #F7B400; border-radius: 10px;">',
        '<span style="color: #5A1281;">186</span> cromos son de <input id="p2dcon5" type="text" style="width: 120px; text-align: center; border:2px solid #5A1281; border-radius: 10px;">'
    ];
    var myArray1 = ['0', '1', '2', '3', '4'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c = myArray1[i - 1];
        $("#a75im" + i).html(a75vec1[c]);

    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a75dcon1 = $('#a75dcon1').val();
        var a75dcon2 = $('#a75dcon2').val();
        var a75dcon3 = $('#a75dcon3').val();
        var a75dcon4 = $('#a75dcon4').val();
        var a75dcon5 = $('#a75dcon5').val();
        var a75dcon6 = $('#a75dcon6').val();
        var a75dcon7 = $('#a75dcon7').val();
        var a75dcon8 = $('#a75dcon8').val();
        if (a75dcon1 == '2') {
            cor++;
            f_ok($('#a75dcon1'));
        } else {
            inc++;
            f_no($('#a75dcon1'));
        }
        if (a75dcon3 == '5') {
            cor++;
            f_ok($('#a75dcon3'));
        } else {
            inc++;
            f_no($('#a75dcon3'));
        }
        if (a75dcon5 == '9') {
            cor++;
            f_ok($('#a75dcon5'));
        } else {
            inc++;
            f_no($('#a75dcon5'));
        }
        if (a75dcon2 == '2') {
            cor++;
            f_ok($('#a75dcon2'));
        } else {
            inc++;
            f_no($('#a75dcon2'));
        }
        if (a75dcon4 == '5') {
            cor++;
            f_ok($('#a75dcon4'));
        } else {
            inc++;
            f_no($('#a75dcon4'));
        }
        if (a75dcon6 == '3') {
            cor++;
            f_ok($('#a75dcon6'));
        } else {
            inc++;
            f_no($('#a75dcon6'));
        }
        if (a75dcon7 == '259') {
            cor++;
            f_ok($('#a75dcon7'));
        } else {
            inc++;
            f_no($('#a75dcon7'));
        }
        if (a75dcon8 == '253') {
            cor++;
            f_ok($('#a75dcon8'));
        } else {
            inc++;
            f_no($('#a75dcon8'));
        }
        var a75sel1 = $('#a75sel1').val();
        var a75sel2 = $('#a75sel2').val();
        var a75sel3 = $('#a75sel3').val();
        var a75sel4 = $('#a75sel4').val();
        if (a75sel1 == '=') {
            cor++;
            f_ok($('#a75sel1'));
        } else {
            inc++;
            f_no($('#a75sel1'));
        }
        if (a75sel2 == '=') {
            cor++;
            f_ok($('#a75sel2'));
        } else {
            inc++;
            f_no($('#a75sel2'));
        }
        if (a75sel3 == '>') {
            cor++;
            f_ok($('#a75sel3'));
        } else {
            inc++;
            f_no($('#a75sel3'));
        }
        if (a75sel4 == '>') {
            cor++;
            f_ok($('#a75sel4'));
        } else {
            inc++;
            f_no($('#a75sel4'));
        }

        var p2dcon1 = $('#p2dcon1').val().toLowerCase();
        var p2dcon2 = $('#p2dcon2').val().toLowerCase();
        var p2dcon3 = $('#p2dcon3').val().toLowerCase();
        var p2dcon4 = $('#p2dcon4').val().toLowerCase();
        var p2dcon5 = $('#p2dcon5').val().toLowerCase();
        if (p2dcon1 == 'pamela') {
            cor++;
            f_ok($('#p2dcon1'));
        } else {
            inc++;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2 == 'josé luis') {
            cor++;
            f_ok($('#p2dcon2'));
        } else {
            inc++;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3 == 'cristian') {
            cor++;
            f_ok($('#p2dcon3'));
        } else {
            inc++;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4 == 'tania') {
            cor++;
            f_ok($('#p2dcon4'));
        } else {
            inc++;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5 == 'andrea') {
            cor++;
            f_ok($('#p2dcon5'));
        } else {
            inc++;
            f_no($('#p2dcon5'));
        }
        Calculo_nota();
    }
}