$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
});
$(".panel-collapse").addClass('out');
$('.p_abierta').html('<span class="col-lg-1 col-md-2 col-sm-2 col-xs-3"><input type="number" placeholder="0" class="form-control calif"></span> ');
var totalC = 0,
    total = 0,
    totalFinal = 0; //variables de la calificacion
var ejer = 1,
    itemsT = 0,
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 8,
    claseAnimada = 'animate bounceIn';
var t_imagesp2 = [],
    r_imagesp2 = [],
    v_idsp2 = [],
    r_idsp2 = []; //variables de la pregunta 2
var i, j, n1, n2, t_nums_p3 = [],
    resp_p3 = [],
    img1_p3, img2_p3, y1_p3, y2_p3, decr_p3; //variables de la pregunta 3
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
var t_imagesp5 = [],
    r_imagesp5 = [],
    v_idsp5 = [],
    r_idsp5 = []; //variables de la pregunta 5
var resp_p6 = [],
    soluc_p6 = []; //variabel rpegunta 6
var n8A = 0,
    n8B = 0,
    n8C = 0,
    n8D = 0,
    imgs_p8 = [],
    txt_p8 = [],
    cont_p8 = [],
    nums_p8 = [],
    animales_p8 = ['piqueros de patas azules', 'iguanas', 'tortugas', 'pinguinos']; //variables preg 8
f_preg_1();
f_preg_2();
f_preg_3();
f_preg_4();
f_preg_5();
f_preg_6();
f_preg_7();
f_preg_8();

function f_preg_1() { //pregunta 1 respuestas abiertas
    //itemsT +=1; 
    $(".calif").prop('placeholder', '1 punto');
}

function f_preg_2() {
    itemsT += 3;
    for (i = 1; i < 8; i++) {
        t_imagesp2.push("<img src='img/i" + i + "_p48_act56.jpg' class='c_imagenes' id='r" + i + "'>");
    }
    $("#img_total").append(t_imagesp2);
    t_imagesp2.sort(f_randomico);
    for (i = 0; i < 3; i++) {
        r_imagesp2.push(t_imagesp2[i]); //agregamos 3 imagenes aleatorias
    }
    for (i = 0; i < 2; i++) {
        $("#img2").append(r_imagesp2);
    }
    $("#img2 img").each(function() { // run this for each image
        v_idsp2.push($(this).attr("id")); // push each image's id to the array
    });
    $("#img_total img").draggable({ //arrastramos
        revert: "invalid",
        zIndex: 5,
        containment: "#pregunta2",
        scroll: false,
    });
    $("#caja_res").droppable({
        drop: function(e, ui) {
            r_idsp2.push(ui.draggable.attr("id"));
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            $(this).find(".c_imagenes").draggable({ disabled: true });
        }
    });
}

function f_preg_3() {
    t_nums_p3 = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciseis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidos', 'veintitres', 'veinticuatro', 'veinticinco', 'veintiseis', 'veintisiete', 'veintiocho', 'veintinueve', 'treinta', 'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro', 'treinta y cinco', 'treinta y seis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve', 'cuarenta', 'cuarenta y uno', 'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 'cuarenta y seis', 'cuarenta y siete', 'cuarenta y ocho', 'cuarenta y nueve', 'cincuenta', 'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 'cincuenta y cinco', 'cincuenta y seis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve', 'sesenta', 'sesenta y uno', 'sesenta y dos', 'sesenta y tres', 'sesenta y cuatro', 'sesenta y cinco', 'sesenta y seis', 'sesenta y siete', 'sesenta y ocho', 'sesenta y nueve', 'setenta', 'setenta y uno', 'setenta y dos', 'setenta y tres', 'setenta y cuatro', 'setenta y cinco', 'setenta y seis', 'setenta y siete', 'setenta y ocho', 'setenta y nueve', 'ochenta', 'ochenta y uno', 'ochenta y dos', 'ochenta y tres', 'ochenta y cuatro', 'ochenta y cinco', 'ochenta y seis', 'ochenta y siete', 'ochenta y ocho', 'ochenta y nueve', 'noventa', 'noventa y uno', 'noventa y dos', 'noventa y tres', 'noventa y cuatro', 'noventa y cinco', 'noventa y seis', 'noventa y siete', 'noventa y ocho', 'noventa y nueve', 'cien'];
    itemsT += 16;
    img1_p3 = "", img2_p3 = "", y1_p3 = 110, y2_p3 = y1_p3, decr_p3 = 13;
    sinEspacios($(".sn_espacios"));
    $(".c_piezas").html('');
    resp_p3 = [];
    n1 = (Math.floor(Math.random() * 9) + 1);
    n2 = (Math.floor(Math.random() * 9) + 1);
    for (i = 0; i < n1; i++) {
        img1_p3 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y1_p3 + "px;left: 36px'>");
        y1_p3 -= decr_p3;
        $(".c_piezas1_p3").append(img1_p3);
    }
    for (i = 0; i < n2; i++) {
        img2_p3 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y2_p3 + "px;left: 77px'>");
        y2_p3 -= decr_p3;
        $(".c_piezas1_p3").append(img2_p3);
    }
    var a = String(n1) + String(n2);
    var b = t_nums_p3[parseInt(String(n1) + String(n2))];
    var c = n1 + 'D y ' + n2 + 'U';
    var d = (n1 * 10) + String('+' + n2);
    resp_p3.push(a, b, c, d);

    y1_p3 = 110, y2_p3 = y1_p3, decr_p3 = 13;
    n1 = (Math.floor(Math.random() * 9) + 1);
    n2 = (Math.floor(Math.random() * 9) + 1);
    for (i = 0; i < n1; i++) {
        img1_p3 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y1_p3 + "px;left: 36px'>");
        y1_p3 -= decr_p3;
        $(".c_piezas2_p3").append(img1_p3);
    }
    for (i = 0; i < n2; i++) {
        img2_p3 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y2_p3 + "px;left: 77px'>");
        y2_p3 -= decr_p3;
        $(".c_piezas2_p3").append(img2_p3);
    }
    var a = String(n1) + String(n2);
    var b = t_nums_p3[parseInt(String(n1) + String(n2))];
    var c = n1 + 'D y ' + n2 + 'U';
    var d = (n1 * 10) + String('+' + n2);
    resp_p3.push(a, b, c, d);

    y1_p3 = 110, y2_p3 = y1_p3, decr_p3 = 13;
    n1 = (Math.floor(Math.random() * 9) + 1);
    n2 = (Math.floor(Math.random() * 9) + 1);
    for (i = 0; i < n1; i++) {
        img1_p3 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y1_p3 + "px;left: 36px'>");
        y1_p3 -= decr_p3;
        $(".c_piezas3_p3").append(img1_p3);
    }
    for (i = 0; i < n2; i++) {
        img2_p3 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y2_p3 + "px;left: 77px'>");
        y2_p3 -= decr_p3;
        $(".c_piezas3_p3").append(img2_p3);
    }
    var a = String(n1) + String(n2);
    var b = t_nums_p3[parseInt(String(n1) + String(n2))];
    var c = n1 + 'D y ' + n2 + 'U';
    var d = (n1 * 10) + String('+' + n2);
    resp_p3.push(a, b, c, d);

    y1_p3 = 110, y2_p3 = y1_p3, decr_p3 = 13;
    n1 = (Math.floor(Math.random() * 9) + 1);
    n2 = (Math.floor(Math.random() * 9) + 1);
    for (i = 0; i < n1; i++) {
        img1_p3 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y1_p3 + "px;left: 36px'>");
        y1_p3 -= decr_p3;
        $(".c_piezas4_p3").append(img1_p3);
    }
    for (i = 0; i < n2; i++) {
        img2_p3 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y2_p3 + "px;left: 77px'>");
        y2_p3 -= decr_p3;
        $(".c_piezas4_p3").append(img2_p3);
    }
    var a = String(n1) + String(n2);
    var b = t_nums_p3[parseInt(String(n1) + String(n2))];
    var c = n1 + 'D y ' + n2 + 'U';
    var d = (n1 * 10) + String('+' + n2);
    resp_p3.push(a, b, c, d);
    console.log('preg3 ', resp_p3);
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
        $(str + " .i_valor").html(resp_p4);
        $(str + " .i_signo").html(signos_p4[0]);
        $(str + " .n1").each(function(index) {
            $(this).html(i_nums_p4[index]);
        });
        $(".t4").each(function(index) {
            $(this).val('');
            QuitaClase($(this), 'correcto incorrecto');
        });
        tmp_res_p4.push(nrA_p4, nrB_p4); //almacenamos las respuestas
    }
    //console.log(tmp_res_p4);
}

function f_preg_5() {
    itemsT += 4;
    var cont_p5 = ['Linea curva cerrada', 'Linea recta abierta', 'Línea curva abierta', 'Línea recta cerrada'];
    var t_contep5 = [];
    for (i = 1; i < 5; i++) {
        t_imagesp5.push("<img src='img/i" + i + "_p49_act56.jpg' class='c_imagenes' id='ori" + i + "'>");
    }
    for (i = 1; i <= cont_p5.length; i++) {
        t_contep5.push('<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center"><label>' + cont_p5[i - 1] + '</label> <p class="borde_p5 arrast_p5" id="dest' + i + '"></p></div>');
    }
    t_imagesp5.sort(f_randomico);
    t_contep5.sort(f_randomico);
    $(".imag_p5").append(t_imagesp5);
    $(".contenido_p5").append(t_contep5);
    $(".imag_p5 img").draggable({ //arrastramos
        revert: "invalid",
        zIndex: 5,
        containment: "#pregunta5",
        scroll: false,
    });
    $(".arrast_p5").droppable({
        drop: function(e, ui) {
            v_idsp5.push(ui.draggable.attr("id").substr(3)); //obtenemos el id del arrastre
            r_idsp5.push($(this).attr("id").substr(4)); //obtenemos el id del destino
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            $(this).find(".c_imagenes").draggable({ disabled: true });
            //console.log(v_idsp5, r_idsp5);
        }
    });
}

function f_preg_6() {
    itemsT += 6;
    var divs_p6 = [];
    divs_p6 = ['<div class="col-lg-4 col-md-4 com-sm-6 col-xs-6 imagenes_p6"><img class="img img-responsive center-block" src="img/i5_p49_act56.jpg" alt=""><input type="text" class="form-control respuesta_p6"><input type="hidden" class="form-control solucion_p6" value="pirámide"></div>', '<div class="col-lg-4 col-md-4 com-sm-6 col-xs-6 imagenes_p6"><img class="img img-responsive center-block" src="img/i6_p49_act56.jpg" alt=""><input type="text" class="form-control respuesta_p6"><input type="hidden" class="form-control solucion_p6" value="cono"></div>', '<div class="col-lg-4 col-md-4 com-sm-6 col-xs-6 imagenes_p6"><img class="img img-responsive center-block" src="img/i7_p49_act56.jpg" alt=""><input type="text" class="form-control respuesta_p6"><input type="hidden" class="form-control solucion_p6" value="prisma"></div>', '<div class="col-lg-4 col-md-4 com-sm-6 col-xs-6 imagenes_p6"><img class="img img-responsive center-block" src="img/i8_p49_act56.jpg" alt=""><input type="text" class="form-control respuesta_p6"><input type="hidden" class="form-control solucion_p6" value="esfera"></div>', '<div class="col-lg-4 col-md-4 com-sm-6 col-xs-6 imagenes_p6"><img class="img img-responsive center-block" src="img/i9_p49_act56.jpg" alt=""><input type="text" class="form-control respuesta_p6"><input type="hidden" class="form-control solucion_p6" value="cubo"></div>', '<div class="col-lg-4 col-md-4 com-sm-6 col-xs-6 imagenes_p6"><img class="img img-responsive center-block" src="img/i10_p49_act56.jpg" alt=""><input type="text" class="form-control respuesta_p6"><input type="hidden" class="form-control solucion_p6" value="cilindro"></div>', ];
    divs_p6.sort(f_randomico);
    $(".contenido_p6").append(divs_p6);
}

function f_preg_7() { //pregunta 7 respuestas abiertas
    $(".calif").prop('placeholder', '1 punto');
}

function f_preg_8() {
    itemsT += 8;
    n8A = Math.floor((Math.random() * 5) + 3);
    n8B = Math.floor((Math.random() * 5) + 3);
    n8C = Math.floor((Math.random() * 5) + 3);
    n8D = Math.floor((Math.random() * 5) + 3);
    nums_p8.push(n8A, n8B, n8C, n8D); //guardamos los numeros aleatorios para comprobacion
    for (i = 0; i < n8A; i++) {
        imgs_p8.push('<img src="img/i12_p49_act56.jpg" class="img img-responsive imagen_p8">');
    }
    for (i = 0; i < n8B; i++) {
        imgs_p8.push('<img src="img/i13_p49_act56.jpg" class="img img-responsive imagen_p8">');
    }
    for (i = 0; i < n8C; i++) {
        imgs_p8.push('<img src="img/i14_p49_act56.jpg" class="img img-responsive imagen_p8">');
    }
    for (i = 0; i < n8D; i++) {
        imgs_p8.push('<img src="img/i15_p49_act56.jpg" class="img img-responsive imagen_p8">');
    }
    //console.log(n8A,n8B,n8C,n8D);
    //console.log(animales_p8);
    imgs_p8.sort(f_randomico);
    $(".t_imagenes_p8").append(imgs_p8);
    sinEspacios($(".t8"));
}
//CALIFICACION DE LA EVALUACION, 
$(".btnCalificar").bind("click", function() { //click en el boton iniciar
    //CalificacionAbierta();
    cont++;
    $(this).unbind("click");
    AgregaClase(".nota", claseAnimada);
    QuitaClase(".actividad", claseAnimada);
    temp = $("#caja_res");
    //CALIFICACION PREGUNTA 2
    for (i = 0; i < r_imagesp2.length; i++) {
        if (v_idsp2[i] == r_idsp2[i]) {
            cor++;
            f_ok(temp);
        } else {
            inc++;
            f_no(temp);
        }
    }
    //calificacion pregunta 3
    $('.t3').each(function(i) {
        //var temp = $("#"+inputs[i]);                  
        temp = $(this);
        if (temp.val() == resp_p3[i]) {
            cor++;
            f_ok(temp);
        } else {
            inc++;
            f_no(temp);
        }
    });
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
    //CALIFICACION PREGUNTA 5
    $(".arrast_p5").each(function(index) {
        tmp = $(this);
        if ((v_idsp5.length == $(".arrast_p5").length) && v_idsp5[index] == r_idsp5[index]) {
            cor++;
            f_ok(tmp);
        } else {
            inc++;
            f_no(tmp);
        }
    });
    //pregunta 6
    $(".solucion_p6").each(function() {
        resp_p6.push($(this).val()); //almacenamos las respuestas
    });
    //console.log(resp_p6)
    $(".respuesta_p6").each(function(index) {
        tmp = $(this);
        if (tmp.val().toLowerCase() == resp_p6[index]) { //comparamos las respuestas
            cor++
            f_ok(tmp);
        } else {
            inc++
            f_no(tmp);
        }
    });
    //pregunta 8
    /*$(".pt8").each(function(){
        txt_p8.push($(this).val());
    });*/
    $(".t8").each(function() {
        cont_p8.push($(this).val());
    });
    //console.log('longitud ',cont_p8[0].length);
    console.log(txt_p8);
    $(".pt8").each(function(index) {
        //var str8 = ($.inArray($(this).val(), animales_p8));
        tmp = $(this);
        //console.log(nums_p8[str8] , cont_p8[index].length);
        if ($.inArray($(this).val().toLowerCase(), animales_p8) >= 0) { //buscamos el contenido del input en el array
            cor++;
            f_ok(tmp);
        } else {
            inc++;
            f_no(tmp);
        }
        var str8 = ($.inArray($(this).val(), animales_p8));
        var tmmp = $(".t8")[index];
        if (cont_p8[index].length == nums_p8[str8]) { //comparamos q la longitud de caracteres del input, sea igual a la cantidad de imagenes cargadas
            cor++;
            f_ok(tmmp);
        } else {
            inc++;
            f_no(tmmp);
        }
    });
    //console.log(txt_p8, cont_p8);
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
    totalFinal = (parseFloat(total) + parseFloat(totalC)).toFixed(2);
    // console.log(total,totalC,totalFinal);
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