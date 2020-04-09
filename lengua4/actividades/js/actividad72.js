var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 9,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
for (var i = 0; i < 10; i++) {
    $('#pa1a' + (i + 1)).click(function() {

        if ($(this).hasClass('pintar1')) {
            $(this).removeClass('pintar1')


        } else {
            $(this).addClass('pintar1')

        }

    })
}
for (var i = 0; i < 10; i++) {
    $('#pa2a' + (i + 1)).click(function() {

        if ($(this).hasClass('pintar1')) {
            $(this).removeClass('pintar1')


        } else {
            $(this).addClass('pintar1')

        }

    })
}
for (var i = 0; i < 9; i++) {
    $('#pa3a' + (i + 1)).click(function() {

        if ($(this).hasClass('pintar1')) {
            $(this).removeClass('pintar1')


        } else {
            $(this).addClass('pintar1')

        }

    })
}
for (var i = 0; i < 9; i++) {
    $('#pa4a' + (i + 1)).click(function() {

        if ($(this).hasClass('pintar1')) {
            $(this).removeClass('pintar1')


        } else {
            $(this).addClass('pintar1')

        }

    })
}

function f_iniciar() {
    var pal1 = ['<span class="bg_palabra drag1">sandía</span>',
        '<span class="bg_palabra drag1">desmayar</span>',
        '<span class="bg_palabra drag1">Pastocalle</span>',
        '<span class="bg_palabra drag1">Guayaquil</span>',
        '<span class="bg_palabra drag1">soltero</span>'
    ];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);

    var pal3 = ['<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop1 p6im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p6cim11" ><h3>calle</h3></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop1 p6im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p6cim12"><h3>sombrero</h3></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop1 p6im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p6cim13"><h3>mil</h3></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop1 p6im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p6cim13"><h3>desayunar</h3></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop1 p6im5"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p6cim13"><h3>picardía</h3></div>' +
        '</td>' +
        '</tr>'
    ];
    pal3.sort(f_randomico);
    $("#datos1").append(pal3);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad72",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            $(ui.draggable).addClass("img-responsive");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p6im1 = $('.p6im1 span').text();
        var p6im2 = $('.p6im2 span').text();
        var p6im3 = $('.p6im3 span').text();
        var p6im4 = $('.p6im4 span').text();
        var p6im5 = $('.p6im5 span').text();
        if (p6im1 == 'Pastocalle') {
            cor++;
            f_ok($('.p6im1'));
        } else {
            inc++;
            f_no($('.p6im1'));
        }
        if (p6im2 == 'soltero') {
            cor++;
            f_ok($('.p6im2'));
        } else {
            inc++;
            f_no($('.p6im2'));
        }
        if (p6im3 == 'Guayaquil') {
            cor++;
            f_ok($('.p6im3'));
        } else {
            inc++;
            f_no($('.p6im3'));
        }
        if (p6im4 == 'desmayar') {
            cor++;
            f_ok($('.p6im4'));
        } else {
            inc++;
            f_no($('.p6im4'));
        }
        if (p6im5 == 'sandía') {
            cor++;
            f_ok($('.p6im5'));
        } else {
            inc++;
            f_no($('.p6im5'));
        }


        var p1dcon1 = [];
        var p1dcon2 = [];
        for (var i = 0; i < 10; i++) {
            if ($('#pa1a' + (i + 1)).hasClass('pintar1')) {
                p1dcon1.push($('#pa1a' + (i + 1)).text());
                p1dcon2.push((i + 1));
            }
        }
        var p1aux1 = ['sandía', 'picardía'];
        if (p1dcon1.length == 2) {
            if (p1dcon1[0] == p1aux1[0] && p1dcon1[1] == p1aux1[1]) {
                cor++;
                //$('#pa1a' + p1dcon2[j]).addClass('valid');
                f_ok($('#pa1a' + p1dcon2[0]));
                f_ok($('#pa1a' + p1dcon2[1]));
            } else {
                inc++;
                //$('#pa1a' + p1dcon2[j]).addClass('no-valid');
                f_no($('#pa1a' + p1dcon2[0]));
                f_no($('#pa1a' + p1dcon2[1]));
            }
        } else {
            inc++;
            for (var i = 0; i < 10; i++) {
                f_no($('#pa1a' + (i + 1)));
            }
        }


        var p1dcon3 = [];
        var p1dcon4 = [];
        for (var i = 0; i < 10; i++) {
            if ($('#pa2a' + (i + 1)).hasClass('pintar1')) {
                p1dcon3.push($('#pa2a' + (i + 1)).text());
                p1dcon4.push((i + 1));
            }
        }
        var p1aux2 = ['Pastocalle', 'calle'];
        if (p1dcon3.length == 2) {
            if (p1dcon3[0] == p1aux2[0] && p1dcon3[1] == p1aux2[1]) {
                cor++;
                //$('#pa2a' + p1dcon4[j]).addClass('valid');
                f_ok($('#pa2a' + p1dcon4[0]));
                f_ok($('#pa2a' + p1dcon4[1]));
            } else {
                inc++;
                //$('#pa2a' + p1dcon4[j]).addClass('no-valid');
                f_no($('#pa2a' + p1dcon4[0]));
                f_no($('#pa2a' + p1dcon4[1]));
            }
        } else {
            inc++;
            for (var i = 0; i < 10; i++) {
                f_no($('#pa2a' + (i + 1)));
            }
        }


        var p1dcon5 = [];
        var p1dcon6 = [];
        for (var i = 0; i < 9; i++) {
            if ($('#pa3a' + (i + 1)).hasClass('pintar1')) {
                p1dcon5.push($('#pa3a' + (i + 1)).text());
                p1dcon6.push((i + 1));
            }
        }
        var p1aux3 = ['desmayar', 'desayunar'];
        if (p1dcon5.length == 2) {
            if (p1dcon5[0] == p1aux3[0] && p1dcon5[1] == p1aux3[1]) {
                cor++;
                //$('#pa3a' + p1dcon6[j]).addClass('valid');
                f_ok($('#pa3a' + p1dcon6[0]));
                f_ok($('#pa3a' + p1dcon6[1]));
            } else {
                inc++;
                //$('#pa3a' + p1dcon6[j]).addClass('no-valid');
                f_no($('#pa3a' + p1dcon6[0]));
                f_no($('#pa3a' + p1dcon6[1]));
            }
        } else {
            inc++;
            for (var i = 0; i < 9; i++) {
                f_no($('#pa3a' + (i + 1)));
            }
        }


        var p1dcon7 = [];
        var p1dcon8 = [];
        for (var i = 0; i < 9; i++) {
            if ($('#pa4a' + (i + 1)).hasClass('pintar1')) {
                p1dcon7.push($('#pa4a' + (i + 1)).text());
                p1dcon8.push((i + 1));
            }
        }
        var p1aux4 = ['Guayaquil', 'mil.'];
        if (p1dcon7.length == 2) {
            if (p1dcon7[0] == p1aux4[0] && p1dcon7[1] == p1aux4[1]) {
                cor++;
                //$('#pa4a' + p1dcon8[j]).addClass('valid');
                f_ok($('#pa4a' + p1dcon8[0]));
                f_ok($('#pa4a' + p1dcon8[1]));
            } else {
                inc++;
                //$('#pa4a' + p1dcon8[j]).addClass('no-valid');
                f_no($('#pa4a' + p1dcon8[0]));
                f_no($('#pa4a' + p1dcon8[1]));
            }
        } else {
            inc++;
            for (var i = 0; i < 9; i++) {
                f_no($('#pa4a' + (i + 1)));
            }
        }
        Calculo_nota();
    }
}