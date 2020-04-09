$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
});
$(".panel-collapse").addClass('out');
$('.p_abierta').html('<span class="col-lg-1 col-md-2 col-sm-2 col-xs-3"><input type="number" placeholder="0" class="form-control calif"></span> ');
var totalC = 0,
    total = 0,
    totalFinal = 0; //variables de la calificacion
var i = 0,
    ejer = 1,
    itemsT = 0,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 8,
    claseAnimada = 'animate bounceIn';
var t_imagesp2 = [],
    resp2 = [];
var n3A = 0,
    n3B = 0,
    n3C = 0,
    n3D = 0,
    imgs_p3 = [],
    resp_p3 = [];
var n1_p4 = 0,
    n2_p4 = 0,
    n3_p4 = 0,
    n4_p4 = 0,
    nrA_p4 = 0,
    nrB_p4 = 0,
    resp_p4 = [],
    i_nums_p4 = [],
    tmp_res_p4 = [],
    signos_p4 = ['+', '-']; //var preg 4
var j, n1, n2, t_nums_p5 = [],
    resp_p5 = [],
    img1_p5, img2_p5, y1_p5, y2_p5, decr_p5; //variables de la pregunta 5
var t_imagesp6 = [],
    r_imagesp6 = [],
    v_idsp6 = [],
    r_idsp6 = []; //variables de la pregunta 6
var resp_p6 = []; //variales pregunta 7
var pp1 = 0;
tt1 = 0, ii1 = 0, ll1 = 0, ff1 = 0, nums_p8 = [], imgs_p8 = []; //variables pregunta 8
var t_nums = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidos', 'veintitres', 'veinticuatro', 'veinticinco', 'veintiseis', 'veintisiete', 'veintiocho', 'veintinueve', 'treinta', 'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro', 'treinta y cinco', 'treinta y seis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve', 'cuarenta', 'cuarenta y uno', 'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 'cuarenta y seis', 'cuarenta y siete', 'cuarenta y ocho', 'cuarenta y nueve', 'cincuenta', 'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 'cincuenta y cinco', 'cincuenta y seis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve', 'sesenta', 'sesenta y uno', 'sesenta y dos', 'sesenta y tres', 'sesenta y cuatro', 'sesenta y cinco', 'sesenta y seis', 'sesenta y siete', 'sesenta y ocho', 'sesenta y nueve', 'setenta', 'setenta y uno', 'setenta y dos', 'setenta y tres', 'setenta y cuatro', 'setenta y cinco', 'setenta y seis', 'setenta y siete', 'setenta y ocho', 'setenta y nueve', 'ochenta', 'ochenta y uno', 'ochenta y dos', 'ochenta y tres', 'ochenta y cuatro', 'ochenta y cinco', 'ochenta y seis', 'ochenta y siete', 'ochenta y ocho', 'ochenta y nueve', 'noventa', 'noventa y uno', 'noventa y dos', 'noventa y tres', 'noventa y cuatro', 'noventa y cinco', 'noventa y seis', 'noventa y siete', 'noventa y ocho', 'noventa y nueve', 'cien'];
f_preg_2();
f_preg_3();
f_preg_4();
f_preg_5();
f_preg_6();
f_preg_7();
f_preg_8();

function f_preg_2() {
    for (i = 2; i < 8; i++) {
        t_imagesp2.push("<img src='img/i" + i + "_p52_act57.jpg' class='c_imagenes' id='r" + i + "'>");
    }
    t_imagesp2.sort(f_randomico);
    $("#img2").append(t_imagesp2);
    $("#img2 img").draggable({ //arrastramos
        zIndex: 5,
        containment: "#pregunta2",
        revert: "invalid",
        helper: "clone"
    });
    $("#img_total_p2").droppable({
        classes: {
            "ui-droppable-active": "ui-state-active", //color azul al arrastrar el elemento
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function(event, ui) { ////CLONAR LOS ELEMENTOS A ARRASTRAR
            el = ui.helper.clone();
            ui.helper.clone().remove();
            el.attr("style", "");
            $(this).append(el)
        }
    });
}

function f_preg_3() {
    itemsT += 8;
    n3A = (Math.floor(Math.random() * 79) + 20);
    n3B = (Math.floor(Math.random() * 79) + 20);
    n3C = (Math.floor(Math.random() * 79) + 20);
    n3D = (Math.floor(Math.random() * 79) + 20);
    for (i = 0; i < parseInt(String(n3A)[0]); i++) {
        imgs_p3.push("<img src='img/i1_p19_act10.png' class='img img-responsive pull-left'>");
    }
    $(".pr3_1").append(imgs_p3);
    imgs_p3 = [];
    for (i = 0; i < parseInt(String(n3A)[1]); i++) {
        imgs_p3.push("<img src='img/i1_p29_act26.png' class='img-responsive'>");
    }
    $(".pr3_c1").append(imgs_p3);
    imgs_p3 = [];
    for (i = 0; i < parseInt(String(n3B)[0]); i++) {
        imgs_p3.push("<img src='img/i1_p19_act10.png' class='img img-responsive pull-left'>");
    }
    $(".pr3_2").append(imgs_p3);
    imgs_p3 = [];
    for (i = 0; i < parseInt(String(n3B)[1]); i++) {
        imgs_p3.push("<img src='img/i1_p29_act26.png' class='img-responsive'>");
    }
    $(".pr3_c2").append(imgs_p3);
    imgs_p3 = [];
    for (i = 0; i < parseInt(String(n3C)[0]); i++) {
        imgs_p3.push("<img src='img/i1_p19_act10.png' class='img img-responsive pull-left'>");
    }
    $(".pr3_3").append(imgs_p3);
    imgs_p3 = [];
    for (i = 0; i < parseInt(String(n3C)[1]); i++) {
        imgs_p3.push("<img src='img/i1_p29_act26.png' class='img-responsive'>");
    }
    $(".pr3_c3").append(imgs_p3);
    imgs_p3 = [];
    for (i = 0; i < parseInt(String(n3D)[0]); i++) {
        imgs_p3.push("<img src='img/i1_p19_act10.png' class='img img-responsive pull-left'>");
    }
    $(".pr3_4").append(imgs_p3);
    imgs_p3 = [];
    for (i = 0; i < parseInt(String(n3D)[1]); i++) {
        imgs_p3.push("<img src='img/i1_p29_act26.png' class='img-responsive'>");
    }
    $(".pr3_c4").append(imgs_p3);
    resp_p3.push(t_nums[n3A], n3A, t_nums[n3B], n3B, t_nums[n3C], n3C, t_nums[n3D], n3D);
    /* $(".t3").each(function(index){ //RESPUESTAS
         $(this).val(resp_p3[index]);
     });*/
}

function f_preg_4() {
    itemsT += 8;
    for (i = 1; i < 5; i++) {
        i_nums_p4 = [];
        signos_p4.sort(f_randomico);
        if (signos_p4[0] == '+') {
            f_suma();
        } else {
            f_resta();
        }
        var str = ".tab" + i;
        //$(str + " .i_valor").html(resp_p4);
        tmp_res_p4.push(nrA_p4, nrB_p4); //almacenamos las respuestas
        $(str + " .i_signo").html(signos_p4[0]);
        $(str + " .n1").each(function(index) {
            $(this).html(i_nums_p4[index]);
        });
        $(".t4").each(function(index) {
            $(this).val('');
            // $(this).val(tmp_res_p4[index]); //respuestas
            QuitaClase($(this), 'correcto incorrecto');
        });
    }
    // console.log(tmp_res_p4);
}

function f_preg_5() {
    itemsT += 20;
    img1_p5 = "", img2_p5 = "", y1_p5 = 110, y2_p5 = y1_p5, decr_p5 = 13;
    sinEspacios($(".sn_espacios"));
    $(".c_piezas1_p5").html('');
    resp_p5 = [];
    n1 = (Math.floor(Math.random() * 9) + 1);
    n2 = (Math.floor(Math.random() * 9) + 1);
    for (i = 0; i < n1; i++) {
        img1_p5 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y1_p5 + "px;left: 36px'>");
        y1_p5 -= decr_p5;
        $(".c_piezas1_p5").append(img1_p5);
    }
    for (i = 0; i < n2; i++) {
        img2_p5 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y2_p5 + "px;left: 77px'>");
        y2_p5 -= decr_p5;
        $(".c_piezas1_p5").append(img2_p5);
    }
    var a = String(n1) + String(n2);
    var b = t_nums[parseInt(String(n1) + String(n2))];
    var c = String(n1);
    var d = String(n2);
    var e = String(n1) + '0+' + String(n2);
    resp_p5.push(a, b, c, d, e);
    //console.log('preg5 ', resp_p5);

    y1_p5 = 110, y2_p5 = y1_p5, decr_p5 = 13;
    n1 = (Math.floor(Math.random() * 9) + 1);
    n2 = (Math.floor(Math.random() * 9) + 1);
    for (i = 0; i < n1; i++) {
        img1_p5 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y1_p5 + "px;left: 36px'>");
        y1_p5 -= decr_p5;
        $(".c_piezas2_p5").append(img1_p5);
    }
    for (i = 0; i < n2; i++) {
        img2_p5 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y2_p5 + "px;left: 77px'>");
        y2_p5 -= decr_p5;
        $(".c_piezas2_p5").append(img2_p5);
    }
    var a = String(n1) + String(n2);
    var b = t_nums[parseInt(String(n1) + String(n2))];
    var c = String(n1);
    var d = String(n2);
    var e = String(n1) + '0+' + String(n2);
    resp_p5.push(a, b, c, d, e);

    y1_p5 = 110, y2_p5 = y1_p5, decr_p5 = 13;
    n1 = (Math.floor(Math.random() * 9) + 1);
    n2 = (Math.floor(Math.random() * 9) + 1);
    for (i = 0; i < n1; i++) {
        img1_p5 = ("<img src='img/i1_p19_act10.png' class='img img-responsive pull-left barra_p5'>");
        $(".c_piezas3_p5").append(img1_p5);
    }
    for (i = 0; i < n2; i++) {
        img2_p5 = ("<img src='img/i1_p29_act26.png' class='img-responsive recuad_p5'>");
        $(".c_piezas3_p5").append(img2_p5);
    }

    var a = String(n1) + String(n2);
    var b = t_nums[parseInt(String(n1) + String(n2))];
    var c = String(n1);
    var d = String(n2);
    var e = String(n1) + '0+' + String(n2);
    resp_p5.push(a, b, c, d, e);

    y1_p5 = 110, y2_p5 = y1_p5, decr_p5 = 13;
    n1 = (Math.floor(Math.random() * 9) + 1);
    n2 = (Math.floor(Math.random() * 9) + 1);
    for (i = 0; i < n1; i++) {
        img1_p5 = ("<img src='img/i1_p19_act10.png' class='img img-responsive pull-left barra_p5'>");
        $(".c_piezas4_p5").append(img1_p5);
    }
    for (i = 0; i < n2; i++) {
        img2_p5 = ("<img src='img/i1_p29_act26.png' class='img-responsive recuad_p5'>");
        $(".c_piezas4_p5").append(img2_p5);
    }

    var a = String(n1) + String(n2);
    var b = t_nums[parseInt(String(n1) + String(n2))];
    var c = String(n1);
    var d = String(n2);
    var e = String(n1) + '0+' + String(n2);
    resp_p5.push(a, b, c, d, e);
    /*$(".t5").each(function(index){ //RESPUESTAS
        $(this).val(resp_p5[index]);
    });*/
}

function f_preg_6() {
    itemsT += 4;
    var cont_p6 = ['prisma', 'pirámide', 'cubo', 'cono'];
    var t_contep6 = [];
    for (i = 1; i < 5; i++) {
        t_imagesp6.push("<img src='img/i" + i + "_p53_act57.jpg' class='c_imagenes' id='ori" + i + "'>");
    }
    for (i = 1; i <= cont_p6.length; i++) {
        t_contep6.push('<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center"><label>' + cont_p6[i - 1] + '</label> <p class="borde_p6 arrast_p6" id="dest' + i + '"></p></div>');
    }
    t_imagesp6.sort(f_randomico);
    t_contep6.sort(f_randomico);
    $(".imag_p6").append(t_imagesp6);
    $(".contenido_p6").append(t_contep6);
    $(".imag_p6 img").draggable({ //arrastramos
        revert: "invalid",
        zIndex: 5,
        containment: "#pregunta6",
        scroll: false,
    });
    $(".arrast_p6").droppable({
        classes: {
            "ui-droppable-active": "ui-state-active", //color azul al arrastrar el elemento
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function(e, ui) {
            v_idsp6.push(ui.draggable.attr("id").substr(3)); //obtenemos el id del arrastre
            r_idsp6.push($(this).attr("id").substr(4)); //obtenemos el id del destino
            ui.draggable.attr("style", "");

            $(this).append(ui.draggable);
            $(this).find(".c_imagenes").draggable({ disabled: true });
            //console.log(v_idsp6, r_idsp5);
        }
    });
}

function f_preg_7() {
    itemsT += 4
    var div_p7 = ['<div class="col-xs-12 col-md-6 col-lg-6 col-sm-6">Un metro tiene <input type="text" class="form-control t7"><input type="hidden" class="rt7" value="100"> centímetros.<br><br></div>', '<div class="visible-xs"><br></div><div class="col-xs-12 col-md-6 col-lg-6 col-sm-6">Un decímetro tiene <input type="text" class="form-control t7"><input type="hidden" class="rt7" value="10"> centímetros.<br><br></div> ', '<div class="col-xs-12 col-md-6 col-lg-6 col-sm-6">Un metro tiene <input type="text" class="form-control t7"><input type="hidden" class="rt7" value="10"> decímetros.<br><br></div>', '<div class="visible-xs"><br></div><div class="col-xs-12 col-md-6 col-lg-6 col-sm-6">Un centímetro tiene <input type="text" class="form-control t7"><input type="hidden" class="rt7" value="10"> milímetros.</div>'];
    div_p7.sort(f_randomico);
    $(".cont_p7").append(div_p7);
}

function f_preg_8() {
    itemsT += 5;
    var arr_p8 = [
        ['piqueros de patas azules', '<input type="text" class="form-control cc_8 p1">'],
        ['tortugas', '<input type="text" class="form-control cc_8 t1">'],
        ['iguanas', '<input type="text" class="form-control cc_8 i1">'],
        ['lobos marinos', '<input type="text" class="form-control cc_8 l1">'],
        ['fragatas', '<input type="text" class="form-control cc_8 f1">']
    ]
    arr_p8.sort(f_randomico);
    $.each(arr_p8, function(key, value) {
        $(".txt_p8").append('<tr><td class="col1_p8">' + arr_p8[key][0] + '</td><td>' + arr_p8[key][1] + '</td></tr>');
    });
    sinEspacios($(".cc_8"));
    pp1 = (Math.floor(Math.random() * 7) + 2);
    tt1 = (Math.floor(Math.random() * 7) + 2);
    ii1 = (Math.floor(Math.random() * 7) + 2);
    ll1 = (Math.floor(Math.random() * 7) + 2);
    ff1 = (Math.floor(Math.random() * 7) + 2);
    nums_p8.push(pp1, tt1, ii1, ll1, ff1);
    // console.log(pp1,tt1,ii1,ll1,ff1)
    for (i = 0; i < pp1; i++) {
        imgs_p8.push('<img src="img/i12_p49_act56.jpg" class="img img-responsive imagen_p8">');
    }
    for (i = 0; i < tt1; i++) {
        imgs_p8.push('<img src="img/i14_p49_act56.jpg" class="img img-responsive imagen_p8">');
    }
    for (i = 0; i < ii1; i++) {
        imgs_p8.push('<img src="img/i13_p49_act56.jpg" class="img img-responsive imagen_p8">');
    }
    for (i = 0; i < ll1; i++) {
        imgs_p8.push('<img src="img/i6_p53_act57.jpg" class="img img-responsive imagen_p8">');
    }
    for (i = 0; i < ff1; i++) {
        imgs_p8.push('<img src="img/i5_p53_act57.jpg" class="img img-responsive imagen_p8">');
    }
    imgs_p8.sort(f_randomico);
    $(".t_imagenes_p8").append(imgs_p8);
}
$(".btnCalificar").bind("click", function() { //click en el boton iniciar
    cont++;
    $(this).unbind("click");
    AgregaClase(".nota", claseAnimada);
    QuitaClase(".actividad", claseAnimada);
    //calificacion pregunta 3
    $(".t3").each(function(index) {
        tmp = $(this);
        if (tmp.val().toLowerCase() == resp_p3[index]) {
            cor++;
            f_ok($(this));
        } else {
            inc++;
            f_no($(this));
        }
    })
    //calificacion pregunta 4
    $(".t4").each(function(index) {
        tmp = $(this);
        if (tmp.val() == tmp_res_p4[index]) {
            cor++
            f_ok(tmp);
        } else {
            inc++
            f_no(tmp);
        }
    });
    //calificacion 5
    $('.t5').each(function(i) {
        //var temp = $("#"+inputs[i]);                  
        temp = $(this);
        if (temp.val().toLowerCase() == resp_p5[i]) {
            cor++;
            f_ok(temp);
        } else {
            inc++;
            f_no(temp);
        }
    });
    //CALIFICACION  6
    $(".arrast_p6").each(function(index) {
        tmp = $(this);
        if ((v_idsp6.length == $(".arrast_p6").length) && v_idsp6[index] == r_idsp6[index]) {
            cor++;
            f_ok(tmp);
        } else {
            inc++;
            f_no(tmp);
        }
    });
    //calificacion 7
    //pregunta 6
    $(".rt7").each(function() {
        resp_p6.push($(this).val()); //almacenamos las respuestas
    });
    //console.log(resp_p6)
    $(".t7").each(function(index) {
        tmp = $(this);
        if (tmp.val() == resp_p6[index]) { //comparamos las respuestas
            cor++
            f_ok(tmp);
        } else {
            inc++
            f_no(tmp);
        }
    });
    /*calificacion 8*/
    tmp = ($(".p1"));
    if (tmp.val().length == pp1) {
        cor++;
        f_ok(tmp);
    } else {
        inc++;
        f_no(tmp);
    }
    tmp = ($(".t1"));
    if (tmp.val().length == tt1) {
        cor++;
        f_ok(tmp);
    } else {
        inc++;
        f_no(tmp);
    }
    tmp = ($(".i1"));
    if (tmp.val().length == ii1) {
        cor++;
        f_ok(tmp);
    } else {
        inc++;
        f_no(tmp);
    }
    tmp = ($(".l1"));
    if (tmp.val().length == ll1) {
        cor++;
        f_ok(tmp);
    } else {
        inc++;
        f_no(tmp);
    }
    tmp = ($(".f1"));
    if (tmp.val().length == ff1) {
        cor++;
        f_ok(tmp);
    } else {
        inc++;
        f_no(tmp);
    }

    //SUMA DE CALIFICACIONES
    totalC = (cor * (calificacion / itemsT)).toFixed(2); //suma de calificacion cerrada
    $('.calif').each(function() { //suma de puntajes en respuestas abiertas
        if ($(this).val() != '') {
            total += parseFloat($(this).val());
            f_ok($(this));
        } else {
            inc++;
            f_no($(this));
        }
    });
    totalFinal = (parseFloat(total) + parseFloat(totalC)).toFixed(2); //console.log(total,totalC,totalFinal);
    if (totalFinal > 10) {
        alert("Verifique su puntaje en las respuestas Abiertas, excede el limite de calificación");
    } else {
        $("#txtNota").html(totalFinal);
    }
});

function f_suma() {
    resp_p4 = [], i_nums_p4 = [];
    n1_p4 = (Math.floor(Math.random() * 9) + 1);
    n2_p4 = (Math.floor(Math.random() * 9) + 1);
    n3_p4 = (Math.floor(Math.random() * 9) + 1);
    n4_p4 = (Math.floor(Math.random() * 9) + 1);
    nrA_p4 = n1_p4 + n2_p4;
    nrB_p4 = n3_p4 + n4_p4;
    if (nrA_p4 < 10 && nrB_p4 < 10) {
        resp_p4.push(n1_p4, n3_p4, ' ', signos_p4[0], ' ', n2_p4, n4_p4);
        i_nums_p4.push(n1_p4, n3_p4, n2_p4, n4_p4); //impresion de numeros en tabla
    } else {
        f_suma();
    }
}

function f_resta() {
    resp_p4 = [];
    n1_p4 = (Math.floor(Math.random() * 9) + 1);
    n2_p4 = (Math.floor(Math.random() * 9) + 1);
    n3_p4 = (Math.floor(Math.random() * 9) + 1);
    n4_p4 = (Math.floor(Math.random() * 9) + 1);
    nrA_p4 = n1_p4 - n2_p4;
    nrB_p4 = n3_p4 - n4_p4;
    if (nrA_p4 > 0 && nrB_p4 > 0) {
        resp_p4.push(n1_p4, n3_p4, ' ', signos_p4[0], ' ', n2_p4, n4_p4);
        i_nums_p4.push(n1_p4, n3_p4, n2_p4, n4_p4); //impresion de numeros en tabla
    } else {
        f_resta();
    }
}