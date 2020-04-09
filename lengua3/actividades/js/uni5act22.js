var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
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
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});
$('.pint1').click(function() {
    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
    } else {
        $(this).addClass('pinta')
    }
})
$('.i1').click(function() {
    switch ($(this).attr('class')) {
        case 'i1 sub1':
            $('.sub1').addClass('subrayar');
            $('.sub2').removeClass('subrayar');
            $('.sub3').removeClass('subrayar');
            $('.sub4').removeClass('subrayar');
            break;
        case 'i1 sub2':
            $('.sub2').addClass('subrayar');
            $('.sub1').removeClass('subrayar');
            $('.sub3').removeClass('subrayar');
            $('.sub4').removeClass('subrayar');
            break;
        case 'i1 sub3':
            $('.sub3').addClass('subrayar');
            $('.sub1').removeClass('subrayar');
            $('.sub2').removeClass('subrayar');
            $('.sub4').removeClass('subrayar');
            break;
        case 'i1 sub4':
            $('.sub4').addClass('subrayar');
            $('.sub1').removeClass('subrayar');
            $('.sub2').removeClass('subrayar');
            $('.sub3').removeClass('subrayar');
            break;
    }
});
$('.i2').click(function() {
    switch ($(this).attr('class')) {
        case 'i2 sub11':
            $('.sub11').addClass('subrayar');
            $('.sub12').removeClass('subrayar');
            $('.sub13').removeClass('subrayar');
            $('.sub14').removeClass('subrayar');
            break;
        case 'i2 sub12':
            $('.sub12').addClass('subrayar');
            $('.sub11').removeClass('subrayar');
            $('.sub13').removeClass('subrayar');
            $('.sub14').removeClass('subrayar');
            break;
        case 'i2 sub13':
            $('.sub13').addClass('subrayar');
            $('.sub11').removeClass('subrayar');
            $('.sub12').removeClass('subrayar');
            $('.sub14').removeClass('subrayar');
            break;
        case 'i2 sub14':
            $('.sub14').addClass('subrayar');
            $('.sub11').removeClass('subrayar');
            $('.sub12').removeClass('subrayar');
            $('.sub13').removeClass('subrayar');
            break;
    }
});
$('.i3').click(function() {
    switch ($(this).attr('class')) {
        case 'i3 sub21':
            $('.sub21').addClass('subrayar');
            $('.sub22').removeClass('subrayar');
            $('.sub23').removeClass('subrayar');
            $('.sub24').removeClass('subrayar');
            break;
        case 'i3 sub22':
            $('.sub22').addClass('subrayar');
            $('.sub21').removeClass('subrayar');
            $('.sub23').removeClass('subrayar');
            $('.sub24').removeClass('subrayar');
            break;
        case 'i3 sub23':
            $('.sub23').addClass('subrayar');
            $('.sub21').removeClass('subrayar');
            $('.sub22').removeClass('subrayar');
            $('.sub24').removeClass('subrayar');
            break;
        case 'i3 sub24':
            $('.sub24').addClass('subrayar');
            $('.sub21').removeClass('subrayar');
            $('.sub22').removeClass('subrayar');
            $('.sub23').removeClass('subrayar');
            break;
    }
});
$('.i4').click(function() {
    switch ($(this).attr('class')) {
        case 'i4 sub31':
            $('.sub31').addClass('subrayar');
            $('.sub32').removeClass('subrayar');
            $('.sub33').removeClass('subrayar');
            break;
        case 'i4 sub32':
            $('.sub32').addClass('subrayar');
            $('.sub31').removeClass('subrayar');
            $('.sub33').removeClass('subrayar');
            break;
        case 'i4 sub33':
            $('.sub33').addClass('subrayar');
            $('.sub31').removeClass('subrayar');
            $('.sub32').removeClass('subrayar');
            break;
    }
});
$('.i5').click(function() {
    switch ($(this).attr('class')) {
        case 'i5 sub41':
            $('.sub41').addClass('subrayar');
            $('.sub42').removeClass('subrayar');
            $('.sub43').removeClass('subrayar');
            $('.sub44').removeClass('subrayar');
            $('.sub45').removeClass('subrayar');
            break;
        case 'i5 sub42':
            $('.sub42').addClass('subrayar');
            $('.sub41').removeClass('subrayar');
            $('.sub43').removeClass('subrayar');
            $('.sub44').removeClass('subrayar');
            $('.sub45').removeClass('subrayar');
            break;
        case 'i5 sub43':
            $('.sub43').addClass('subrayar');
            $('.sub41').removeClass('subrayar');
            $('.sub42').removeClass('subrayar');
            $('.sub44').removeClass('subrayar');
            $('.sub45').removeClass('subrayar');
            break;
        case 'i5 sub44':
            $('.sub44').addClass('subrayar');
            $('.sub41').removeClass('subrayar');
            $('.sub42').removeClass('subrayar');
            $('.sub43').removeClass('subrayar');
            $('.sub45').removeClass('subrayar');
            break;
        case 'i5 sub45':
            $('.sub45').addClass('subrayar');
            $('.sub41').removeClass('subrayar');
            $('.sub42').removeClass('subrayar');
            $('.sub43').removeClass('subrayar');
            $('.sub44').removeClass('subrayar');
            break;
    }
});
$('.i6').click(function() {
    switch ($(this).attr('class')) {
        case 'i6 sub51':
            $('.sub51').addClass('subrayar');
            $('.sub52').removeClass('subrayar');
            $('.sub53').removeClass('subrayar');
            $('.sub54').removeClass('subrayar');
            $('.sub55').removeClass('subrayar');
            break;
        case 'i6 sub52':
            $('.sub52').addClass('subrayar');
            $('.sub51').removeClass('subrayar');
            $('.sub53').removeClass('subrayar');
            $('.sub54').removeClass('subrayar');
            $('.sub55').removeClass('subrayar');
            break;
        case 'i6 sub53':
            $('.sub53').addClass('subrayar');
            $('.sub51').removeClass('subrayar');
            $('.sub52').removeClass('subrayar');
            $('.sub54').removeClass('subrayar');
            $('.sub55').removeClass('subrayar');
            break;
        case 'i6 sub54':
            $('.sub54').addClass('subrayar');
            $('.sub51').removeClass('subrayar');
            $('.sub52').removeClass('subrayar');
            $('.sub53').removeClass('subrayar');
            $('.sub55').removeClass('subrayar');
            break;
        case 'i6 sub55':
            $('.sub55').addClass('subrayar');
            $('.sub51').removeClass('subrayar');
            $('.sub52').removeClass('subrayar');
            $('.sub53').removeClass('subrayar');
            $('.sub54').removeClass('subrayar');
            break;
    }
});
$('.i7').click(function() {
    switch ($(this).attr('class')) {
        case 'i7 sub61':
            $('.sub61').addClass('subrayar');
            $('.sub62').removeClass('subrayar');
            $('.sub63').removeClass('subrayar');
            $('.sub64').removeClass('subrayar');
            break;
        case 'i7 sub62':
            $('.sub62').addClass('subrayar');
            $('.sub61').removeClass('subrayar');
            $('.sub63').removeClass('subrayar');
            $('.sub64').removeClass('subrayar');
            break;
        case 'i7 sub63':
            $('.sub63').addClass('subrayar');
            $('.sub61').removeClass('subrayar');
            $('.sub62').removeClass('subrayar');
            $('.sub64').removeClass('subrayar');
            break;
        case 'i7 sub64':
            $('.sub64').addClass('subrayar');
            $('.sub61').removeClass('subrayar');
            $('.sub62').removeClass('subrayar');
            $('.sub63').removeClass('subrayar');
            break;
    }
});
$('.i8').click(function() {
    switch ($(this).attr('class')) {
        case 'i8 sub71':
            $('.sub71').addClass('subrayar');
            $('.sub72').removeClass('subrayar');
            $('.sub73').removeClass('subrayar');
            $('.sub74').removeClass('subrayar');
            break;
        case 'i8 sub72':
            $('.sub72').addClass('subrayar');
            $('.sub71').removeClass('subrayar');
            $('.sub73').removeClass('subrayar');
            $('.sub74').removeClass('subrayar');
            break;
        case 'i8 sub73':
            $('.sub73').addClass('subrayar');
            $('.sub71').removeClass('subrayar');
            $('.sub72').removeClass('subrayar');
            $('.sub74').removeClass('subrayar');
            break;
        case 'i8 sub74':
            $('.sub74').addClass('subrayar');
            $('.sub71').removeClass('subrayar');
            $('.sub72').removeClass('subrayar');
            $('.sub73').removeClass('subrayar');
            break;
    }
});

function f_iniciar() {
    var p1vec1 = [
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #f4919c; border-radius: 10px;" class="1 pint1">cantar</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #fcaf17; border-radius: 10px;" class="2 pint1">gato</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #89c75a; border-radius: 10px;" class="3 pint1">grande</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #53a4da; border-radius: 10px;" class="4 pint1">reír</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #b08975; border-radius: 10px;" class="5 pint1">correr</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #907db9; border-radius: 10px;" class="6 pint1">amar</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #907db9; border-radius: 10px;" class="7 pint1">estar</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #89c75a; border-radius: 10px;" class="8 pint1">mesa</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #89c75a; border-radius: 10px;" class="9 pint1">hermoso</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #fcaf17; border-radius: 10px;" class="10 pint1">soñar</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #b08975; border-radius: 10px;" class="11 pint1">hablar</div></div>',
        '<div style="padding:10px; display:inline-block;"><div style="display: inline-block; padding: 10px; border: 2px solid #53a4da; border-radius: 10px;" class="12 pint1">una</div></div>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);

    var p3vec1 = [
        '<p align="justify">Los verbos <input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p3dcon1"> acciones.</p>',
        '<p align="justify">Los periodistas <input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p3dcon2"> noticias.</p>',
        '<p align="justify">El artista <input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p3dcon3"> un hermoso cuadro.</p>',
        '<p align="justify">El cóndor <input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p3dcon4"> muy alto.</p>',
        '<p align="justify">El carpintero <input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p3dcon5"> una puerta.</p>'
    ];
    p3vec1.sort(f_randomico);
    $('#p3im1').html(p3vec1);

    var pal1 = ['<span class="bg_palabra drag1">estudio</span>',
        '<span class="bg_palabra drag1">saludo</span>',
        '<span class="bg_palabra drag1">jugamos</span>',
        '<span class="bg_palabra drag1">dormiremos</span>'
    ];

    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal3 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p5im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p5cim11" ><h4>jugar</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p5im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p5cim12"><h4>estudiar</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p5im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p5cim13"><h4>dormir</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p5im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p5cim14"><h4>saludar</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal3.sort(f_randomico);
    $("#datos").html(pal3);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p5act1",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });

    var pal4 = ['<span class="bg_palabra drag2">vimos</span>',
        '<span class="bg_palabra drag2">oigo</span>',
        '<span class="bg_palabra drag2">estoy</span>',
        '<span class="bg_palabra drag2">comemos</span>'
    ];

    pal4.sort(f_randomico);

    $(".textos1").append(pal4);
    var pal5 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p51im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p51cim11" ><h4>oír</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p51im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p51cim12"><h4>comer</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p51im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p51cim13"><h4>ver</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop2 p51im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p51cim14"><h4>estar</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal5.sort(f_randomico);
    $("#datos1").html(pal5);
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p5act2",
        scroll: false,
    });

    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", preg2);

    function preg2() {
        cor = 0;
        var nota1_2 = $('#nota1_2').val();
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 2.')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (2 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg2);
        var p1cont1 = 0;
        var p1cont2 = 0;
        var p1cont3 = 0;
        if ($('.pinta').length == 0) {
            p1cont1;
            f_no($('.pint1'));
        } else {
            for (var i = 0; i < 12; i++) {
                if ($('.' + (i + 1)).hasClass('pinta')) {
                    var p1res1 = $('.' + (i + 1)).html();
                    if (p1res1 == 'cantar' || p1res1 == 'reír' || p1res1 == 'correr' || p1res1 == 'amar' || p1res1 == 'estar' || p1res1 == 'soñar' || p1res1 == 'hablar') {
                        p1cont2++;
                        f_ok($('.' + (i + 1)));
                    } else {
                        p1cont3++;
                        f_no($('.' + (i + 1)));
                    }
                }

            }
        }
        if (p1cont2 > p1cont3) {
            p1cont1 = p1cont2 - p1cont3;
        } else {
            p1cont1;
        }
        var result1 = (p1cont1 * 2) / 7;
        cor = cor + result1;
        inc = inc + (2 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p3dcon1 = $('#p3dcon1').val();
        var p3dcon2 = $('#p3dcon2').val();
        var p3dcon3 = $('#p3dcon3').val();
        var p3dcon4 = $('#p3dcon4').val();
        var p3dcon5 = $('#p3dcon5').val();
        var p3cont1 = 0;
        if (p3dcon1 == 'indican') {
            p3cont1++;
            f_ok($('#p3dcon1'));
        } else {
            p3cont1;
            f_no($('#p3dcon1'));
        }
        if (p3dcon2 == 'escriben') {
            p3cont1++;
            f_ok($('#p3dcon2'));
        } else {
            p3cont1;
            f_no($('#p3dcon2'));
        }
        if (p3dcon3 == 'pinta') {
            p3cont1++;
            f_ok($('#p3dcon3'));
        } else {
            p3cont1;
            f_no($('#p3dcon3'));
        }
        if (p3dcon4 == 'vuela') {
            p3cont1++;
            f_ok($('#p3dcon4'));
        } else {
            p3cont1;
            f_no($('#p3dcon4'));
        }
        if (p3dcon5 == 'construye') {
            p3cont1++;
            f_ok($('#p3dcon5'));
        } else {
            p3cont1;
            f_no($('#p3dcon5'));
        }
        var result3 = (p3cont1 * 2) / 5;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');

        var p4a1 = $('#p4im1 .subrayar').text();
        var p4a2 = $('#p4im2 .subrayar').text();
        var p4a3 = $('#p4im3 .subrayar').text();
        var p4a4 = $('#p4im4 .subrayar').text();
        var p4a5 = $('#p4im5 .subrayar').text();
        var p4a6 = $('#p4im6 .subrayar').text();
        var p4a7 = $('#p4im7 .subrayar').text();
        var p4a8 = $('#p4im8 .subrayar').text();
        var p4cont1 = 0;
        if (!p4a1) {
            p4cont1;
            f_no($('.i1'));
        } else {
            if (p4a1 == 'escribe') {
                p4cont1++;
                f_ok($('#p4im1 .subrayar'));
            } else {
                p4cont1;
                f_no($('#p4im1 .subrayar'));
            }
        }
        if (!p4a2) {
            p4cont1;
            f_no($('.i2'));
        } else {
            if (p4a2 == 'compró') {
                p4cont1++;
                f_ok($('#p4im2 .subrayar'));
            } else {
                p4cont1;
                f_no($('#p4im2 .subrayar'));
            }
        }
        if (!p4a3) {
            p4cont1;
            f_no($('.i3'));
        } else {
            if (p4a3 == 'respetemos') {
                p4cont1++;
                f_ok($('#p4im3 .subrayar'));
            } else {
                p4cont1;
                f_no($('#p4im3 .subrayar'));
            }
        }
        if (!p4a4) {
            p4cont1;
            f_no($('.i4'));
        } else {
            if (p4a4 == 'divertimos') {
                p4cont1++;
                f_ok($('#p4im4 .subrayar'));
            } else {
                p4cont1;
                f_no($('#p4im4 .subrayar'));
            }
        }
        if (!p4a5) {
            p4cont1;
            f_no($('.i5'));
        } else {
            if (p4a5 == 'trinan') {
                p4cont1++;
                f_ok($('#p4im5 .subrayar'));
            } else {
                p4cont1;
                f_no($('#p4im5 .subrayar'));
            }
        }
        if (!p4a6) {
            p4cont1;
            f_no($('.i6'));
        } else {
            if (p4a6 == 'leemos') {
                p4cont1++;
                f_ok($('#p4im6 .subrayar'));
            } else {
                p4cont1;
                f_no($('#p4im6 .subrayar'));
            }
        }
        if (!p4a7) {
            p4cont1;
            f_no($('.i7'));
        } else {
            if (p4a7 == 'investigo') {
                p4cont1++;
                f_ok($('#p4im7 .subrayar'));
            } else {
                p4cont1;
                f_no($('#p4im7 .subrayar'));
            }
        }
        if (!p4a8) {
            p4cont1;
            f_no($('.i8'));
        } else {
            if (p4a8 == 'ama') {
                p4cont1++;
                f_ok($('#p4im8 .subrayar'));
            } else {
                p4cont1;
                f_no($('#p4im8 .subrayar'));
            }
        }
        var result4 = (p4cont1 * 2) / 8;
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#nota1_4').val(result4.toFixed(2));
        $('#nota1_4').css('display', '');

        var p5vec1 = ['jugamos', 'estudio', 'dormiremos', 'saludo'];
        var p5vec2 = ['oigo', 'comemos', 'vimos', 'estoy'];
        var p5cont1 = 0;
        for (var i = 0; i < 4; i++) {
            var p5r1 = $('.p5im' + (i + 1) + ' span').text();
            if (p5r1 == p5vec1[i]) {
                p5cont1++;
                f_ok($('.p5im' + (i + 1)));
            } else {
                p5cont1;
                f_no($('.p5im' + (i + 1)));
            }
        }
        for (var i = 0; i < 4; i++) {
            var p5r1 = $('.p51im' + (i + 1) + ' span').text();
            if (p5r1 == p5vec2[i]) {
                p5cont1++;
                f_ok($('.p51im' + (i + 1)));
            } else {
                p5cont1;
                f_no($('.p51im' + (i + 1)));
            }
        }
        var result5 = (p5cont1 * 2) / 8;
        cor = cor + result5;
        inc = inc + (2 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display', '');
        Calculo_nota();
    }
}