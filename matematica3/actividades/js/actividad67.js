var titulos = "aplico";
f_titulos();
$("#n_pagina").html('61');
var n1, n2, n3, t1, t_nums1 = [],
    t_nums2 = [],
    cajas = [],
    img1, y1, y2, y3, decr, str = "";
var ejer = 5,
    i, j,
    itemsT = 20,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';

f_iniciar();

function f_iniciar() {

    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $("#trace").hide();
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $(".t1, .r1").removeClass("correcto incorrecto").val('');
    t_nums1 = [], t_nums2 = [];
    $(".abaco").each(function(index) {
        img1 = "", y1 = 112, y2 = y1, y3 = y1, decr = 13, incre = 10;
        n1 = (Math.floor(Math.random() * 8) + 1);
        n2 = (Math.floor(Math.random() * 8) + 1);
        n3 = (Math.floor(Math.random() * 8) + 1);
        str = ".c_piezas" + index;
        $(str).html('');
        for (i = 0; i < n1; i++) {
            img1 = ("<img src='img/i1_p61_act67.png' style='position:absolute;top:" + y1 + "px;left: 43px'>");
            y1 -= decr;
            $(str).append(img1);
        }
        for (i = 0; i < n2; i++) {
            img1 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y2 + "px;left: 81px'>");
            y2 -= decr;
            $(str).append(img1);
        }
        for (i = 0; i < n3; i++) {
            img1 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y3 + "px;left: 118px'>");
            y3 -= decr;
            $(str).append(img1);
        }
        t_nums1.push((parseInt(String(n1) + String(n2) + String(n3))));
    })
    $(".cientos").each(function(index) {
        img1 = "";
        n1 = (Math.floor(Math.random() * 8) + 1);
        n2 = (Math.floor(Math.random() * 8) + 1);
        n3 = (Math.floor(Math.random() * 8) + 1);
        str = ".recuadro" + index;
        $(str).html('');
        for (i = 0; i < n1; i++) {
            img1 = ("<img src='img/i3_p61_act67.png'>");
            incre += 20;
            $(str).append(img1);
        }
        str = ".barras" + index;
        for (i = 0; i < n2; i++) {
            img1 = ("<img src='img/i4_p61_act67.png'>");
            $(str).append(img1);
        }
        str = ".cuadros" + index;
        for (i = 0; i < n3; i++) {
            img1 = ("<img src='img/i1_p29_act26.png'>");
            $(str).append(img1);
        }
        t_nums2.push((parseInt(String(n1) + String(n2) + String(n3))));
    })
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        cont++;
        $(this).unbind("click");
        $(".r1").each(function(index) {
            tmp = $(this);
            if (tmp.val().trim() == t_nums1[index]) {
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        })
        $(".t1").each(function(index) {
            tmp = $(this);
            if (tmp.val().trim() == t_nums2[index]) {
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });
        Calculo_nota();
    });
}