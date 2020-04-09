var titulos = "aplico";
f_titulos();
$("#n_pagina").html('61');
var ejer = 5,
    i,
    itemsT = 25,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var resul = [],
    rdn = 0,
    txt_num = '',
    cnt = '';


f_iniciar();

function f_iniciar() {
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    $(".tabla_cont1").html("");
    resul = [];
    for (i = 0; i < 5; i++) {
        txt_num = '';
        rdn = (Math.floor(Math.random() * 890) + 110);
        f_conversion(rdn);
        cnt = '<div class="row"> <div class="col-lg-3 col-md-3 col-sm-4 col-xs-4 n1">' + rdn + '</div> <div class="col-lg-9 col-md-9 col-sm-8 col-xs-8"> <input type="text" class="form-control t1 text-lowercase"> <input type="hidden" class="form-control r1" value="' + txt_num + '"> </div> </div><br>';
        $(".tabla_cont1").append(cnt);
        resul.push(txt_num); //almacenamos las respuestas
    }
    $(".t1").removeClass("correcto incorrecto")
    //console.log(resul); //respuestas
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        cont++;
        $(this).unbind("click");
        $(".t1").each(function(index) {
            tmp = $(this);
            if (tmp.val().toLowerCase().trim() == resul[index]) {
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        })
        Calculo_nota();
    });
}

function f_conversion(num) {
    if (num >= 900) {
        txt_num += "novescientos ";
        num -= 900;
    }
    if (num >= 800) {
        txt_num += "ochocientos ";
        num -= 800;
    }
    if (num >= 700) {
        txt_num += "setecientos ";
        num -= 700;
    }
    if (num >= 600) {
        txt_num += "seiscientos ";
        num -= 600;
    }
    if (num >= 500) {
        txt_num += "quinientos ";
        num -= 500;
    }
    if (num >= 400) {
        txt_num += "cuatrocientos ";
        num -= 400;
    }
    if (num >= 300) {
        txt_num += "trescientos ";
        num -= 300;
    }
    if (num >= 200) {
        txt_num += "doscientos ";
        num -= 200;
    }
    if (num >= 100) {
        txt_num += "ciento ";
        num -= 100;
    }
    if (num > 90) {
        txt_num += "noventa y ";
        num -= 90;
    }
    if (num == 90) {
        txt_num += "noventa";
        num -= 90;
    }
    if (num > 80) {
        txt_num += "ochenta y ";
        num -= 80;
    }
    if (num == 80) {
        txt_num += "ochenta";
        num -= 80;
    }
    if (num > 70) {
        txt_num += "setenta y ";
        num -= 70;
    }
    if (num == 70) {
        txt_num += "setenta";
        num -= 70;
    }
    if (num > 60) {
        txt_num += "sesenta y ";
        num -= 60;
    }
    if (num == 60) {
        txt_num += "sesenta";
        num -= 60;
    }
    if (num > 50) {
        txt_num += "cincuenta y ";
        num -= 50;
    }
    if (num == 50) {
        txt_num += "cincuenta";
        num -= 50;
    }
    if (num > 40) {
        txt_num += "cuarenta y ";
        num -= 40;
    }
    if (num == 40) {
        txt_num += "cuarenta";
        num -= 40;
    }
    if (num > 30) {
        txt_num += "treinta y ";
        num -= 30;
    }
    if (num == 30) {
        txt_num += "treinta";
        num -= 30;
    }
    if (num > 20) {
        txt_num += "veinti";
        num -= 20;
    }
    if (num == 20) {
        txt_num += "veinte";
        num -= 20;
    }
    if (num > 15) {
        txt_num += "dieci";
        num -= 10;
    }
    if (num == 15) {
        txt_num += "quince";
        num -= 15;
    }
    if (num == 14) {
        txt_num += "catorce";
        num -= 14;
    }
    if (num == 13) {
        txt_num += "trece";
        num -= 13;
    }
    if (num == 12) {
        txt_num += "doce";
        num -= 12;
    }
    if (num == 11) {
        txt_num += "once";
        num -= 11;
    }
    if (num == 10) {
        txt_num += "diez";
        num -= 10;
    }
    if (num == 9) {
        txt_num += "nueve";
        num -= 9;
    }
    if (num == 8) {
        txt_num += "ocho";
        num -= 8;
    }
    if (num == 7) {
        txt_num += "siete";
        num -= 7;
    }
    if (num == 6) {
        txt_num += "seis";
        num -= 6;
    }
    if (num == 5) {
        txt_num += "cinco";
        num -= 5;
    }
    if (num == 4) {
        txt_num += "cuatro";
        num -= 4;
    }
    if (num == 3) {
        txt_num += "tres";
        num -= 3;
    }
    if (num == 2) {
        txt_num += "dos";
        num -= 2;
    }
    if (num == 1) {
        txt_num += "uno";
        num -= 1;
    }
}