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

$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc11':
            $('.enc11').addClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            break;
        case '2 enc12':
            $('.enc12').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            break;
        case '2 enc13':
            $('.enc13').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 enc21':
            $('.enc21').addClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            break;
        case '3 enc22':
            $('.enc22').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            break;
        case '3 enc23':
            $('.enc23').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 enc31':
            $('.enc31').addClass('encierra');
            $('.enc32').removeClass('encierra');
            $('.enc33').removeClass('encierra');
            break;
        case '4 enc32':
            $('.enc32').addClass('encierra');
            $('.enc31').removeClass('encierra');
            $('.enc33').removeClass('encierra');
            break;
        case '4 enc33':
            $('.enc33').addClass('encierra');
            $('.enc31').removeClass('encierra');
            $('.enc32').removeClass('encierra');
            break;
    }
});

function f_iniciar() {
    var pal1 = ['<img alt="1" class="drag" src="img/i5_p212_u5a13.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img alt="2" class="drag" src="img/i6_p212_u5a13.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img alt="3" class="drag" src="img/i7_p212_u5a13.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img alt="4" class="drag" src="img/i8_p212_u5a13.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img alt="5" class="drag" src="img/i9_p212_u5a13.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">',
        '<img alt="6" class="drag" src="img/i10_p212_u5a13.jpg" class="img-responsive" style="mix-blend-mode:multiply; display:inline-block;">'
    ];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var pal2 = [
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim11" ><h4>gelatina</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim12"><h4>gitana</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim13"><h4>genio</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim14"><h4>ángel</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im5"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim15"><h4>girasol</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im6"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim16"><h4>gema</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal2.sort(f_randomico);
    $("#datos").html(pal2);
    $(".drag").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p3act1",
        scroll: false,
    });

    $(".drop").droppable({
        accept: ".drag",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag");
            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);

        }
    });

    var p4vec1 = [
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i10_p212_u5a13.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p4dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p4dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p4dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p4dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p4dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p4dcon6">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i5_p212_u5a13.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p41dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p41dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p41dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p41dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p41dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p41dcon6">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p41dcon7">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i11_p212_u5a13.jpg" class="img-responsive">' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p42dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p42dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p42dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p42dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p42dcon5">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p42dcon6">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p42dcon7">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i8_p212_u5a13.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p43dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p43dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p43dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p43dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p43dcon5">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i9_p212_u5a13.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p44dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p44dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p44dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p44dcon4">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i7_p212_u5a13.jpg" class="img-responsive">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim1">' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p45dcon1">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p45dcon2">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p45dcon3">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p45dcon4">' +
        '</td>' +
        '<td>' +
        '<input style="width: 30px; height: 30px; border: 2px solid #009BDB; text-align:center;" type="text" maxlength="1" onkeyup="mayus(this)" id="p45dcon5">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>'
    ];
    p4vec1.sort(f_randomico);
    $('#p4im1').html(p4vec1);

    var p5vec1 = [
        ['<img src="img/i5_p212_u5a13.jpg" class="img-responsive">', 0],
        ['<img src="img/i6_p212_u5a13.jpg" class="img-responsive">', 1],
        ['<img src="img/i11_p212_u5a13.jpg" class="img-responsive">', 2],
        ['<img src="img/i8_p212_u5a13.jpg" class="img-responsive">', 3]
    ];
    var p5vec2 = [
        ['<div style="text-align: center; display:inline-block; padding: 10px;" class="1 enc1">gitano</div>',
            '<div style="text-align: center; display:inline-block; padding: 10px;" class="1 enc2">girasol</div>',
            '<div style="text-align: center; display:inline-block; padding: 10px;" class="1 enc3">giro</div>'
        ],
        ['<div style="text-align: center; display:inline-block; padding: 10px;" class="2 enc11">genio</div>',
            '<div style="text-align: center; display:inline-block; padding: 10px;" class="2 enc12">general</div>',
            '<div style="text-align: center; display:inline-block; padding: 10px;" class="2 enc13">gelatina</div>'
        ],
        ['<div style="text-align: center; display:inline-block; padding: 10px;" class="3 enc21">gentil</div>',
            '<div style="text-align: center; display:inline-block; padding: 10px;" class="3 enc22">gitano</div>',
            '<div style="text-align: center; display:inline-block; padding: 10px;" class="3 enc23">gemelos</div>'
        ],
        ['<div style="text-align: center; display:inline-block; padding: 10px;" class="4 enc31">gendarme</div>',
            '<div style="text-align: center; display:inline-block; padding: 10px;" class="4 enc32">ángel</div>',
            '<div style="text-align: center; display:inline-block; padding: 10px;" class="4 enc33">girasol</div>'
        ]
    ];
    p5vec1.sort(f_randomico);
    for (var i = 0; i < 4; i++) {
        $('#p5im' + (i + 1)).html(p5vec1[i][0]);
        p5vec2[i].sort(f_randomico);
    }
    for (var i = 0; i < 4; i++) {
        $('#p5cim' + (i + 1)).html(p5vec2[p5vec1[i][1]]);
    }

    var pal4 = ['<span class="bg_palabra drag1">Georgina</span>',
        '<span class="bg_palabra drag1">Geología.</span>',
        '<span class="bg_palabra drag1">y</span>',
        '<span class="bg_palabra drag1">estudian</span>',
        '<span class="bg_palabra drag1">Gerardo</span>'
    ];
    pal4.sort(f_randomico);
    $(".textos1").append(pal4);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p6act1",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "padding:5px;");
            $(this).append(ui.draggable);

        }
    });
    var pal5 = ['<span class="bg_palabra1 drag2">van</span>',
        '<span class="bg_palabra1 drag2">Germán</span>',
        '<span class="bg_palabra1 drag2">y</span>',
        '<span class="bg_palabra1 drag2">Virginia</span>',
        '<span class="bg_palabra1 drag2">gimnasio.</span>',
        '<span class="bg_palabra1 drag2">al</span>'
    ];
    pal5.sort(f_randomico);
    $(".textos2").append(pal5);
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p6act2",
        scroll: false,
    });

    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");
            $(ui.draggable).removeClass("bg_palabra1");
            ui.draggable.attr("style", "padding:5px;");
            $(this).append(ui.draggable);

        }
    });
    var pal6 = ['<span class="bg_palabra2 drag3">gemelos</span>',
        '<span class="bg_palabra2 drag3">Los</span>',
        '<span class="bg_palabra2 drag3">y</span>',
        '<span class="bg_palabra2 drag3">Eugenio</span>',
        '<span class="bg_palabra2 drag3">Ángel</span>',
        '<span class="bg_palabra2 drag3">gelatina.</span>',
        '<span class="bg_palabra2 drag3">quieren</span>'
    ];
    pal6.sort(f_randomico);
    $(".textos3").append(pal6);
    $(".drag3").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p6act3",
        scroll: false,
    });

    $(".drop3").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            $(ui.draggable).removeClass("bg_palabra2");
            ui.draggable.attr("style", "padding:5px;");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function preg11() {
        cor = 0;
        var nota1_11 = $('#nota1_11').val();
        if (!nota1_11) {
            alert('Ingrese la calificación en la pregunta 11.')
        } else {
            cor = cor + parseFloat(nota1_11);
            inc = inc + (4 - parseFloat(nota1_11));
            $('#nota1_11').val(parseFloat(nota1_11).toFixed(2));
            $('#nota1_11').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p31im1 = $('.p31im1 img').attr('alt');
        var p31im2 = $('.p31im2 img').attr('alt');
        var p31im3 = $('.p31im3 img').attr('alt');
        var p31im4 = $('.p31im4 img').attr('alt');
        var p31im5 = $('.p31im5 img').attr('alt');
        var p31im6 = $('.p31im6 img').attr('alt');
        var p3cont1 = 0;
        if (p31im1 == '2') {
            p3cont1++;
            f_ok($('.p31im1'));
        } else {
            p3cont1;
            f_no($('.p31im1'));
        }
        if (p31im2 == '6') {
            p3cont1++;
            f_ok($('.p31im2'));
        } else {
            p3cont1;
            f_no($('.p31im2'));
        }
        if ((p31im3 == '3')) {
            p3cont1++;
            f_ok($('.p31im3'));
        } else {
            p3cont1;
            f_no($('.p31im3'));
        }
        if ((p31im4 == '4')) {
            p3cont1++;
            f_ok($('.p31im4'));
        } else {
            p3cont1;
            f_no($('.p31im4'));
        }
        if (p31im5 == '1') {
            p3cont1++;
            f_ok($('.p31im5'));
        } else {
            p3cont1;
            f_no($('.p31im5'));
        }
        if (p31im6 == '5') {
            p3cont1++;
            f_ok($('.p31im6'));
        } else {
            p3cont1;
            f_no($('.p31im6'));
        }
        var result3 = (p3cont1 * 2) / 6;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');

        var p4dcon1 = $('#p4dcon1').val() + $('#p4dcon2').val() + $('#p4dcon3').val() + $('#p4dcon4').val() + $('#p4dcon5').val() + $('#p4dcon6').val();
        var p41dcon1 = $('#p41dcon1').val() + $('#p41dcon2').val() + $('#p41dcon3').val() + $('#p41dcon4').val() + $('#p41dcon5').val() + $('#p41dcon6').val() + $('#p41dcon7').val();
        var p42dcon1 = $('#p42dcon1').val() + $('#p42dcon2').val() + $('#p42dcon3').val() + $('#p42dcon4').val() + $('#p42dcon5').val() + $('#p42dcon6').val() + $('#p42dcon7').val();
        var p43dcon1 = $('#p43dcon1').val() + $('#p43dcon2').val() + $('#p43dcon3').val() + $('#p43dcon4').val() + $('#p43dcon5').val();
        var p44dcon1 = $('#p44dcon1').val() + $('#p44dcon2').val() + $('#p44dcon3').val() + $('#p44dcon4').val();
        var p45dcon1 = $('#p45dcon1').val() + $('#p45dcon2').val() + $('#p45dcon3').val() + $('#p45dcon4').val() + $('#p45dcon5').val();
        var p4cont1 = 0;
        if (p4dcon1 == 'gitana') {
            p4cont1++;
            f_ok($('#p4dcon1'));
            f_ok($('#p4dcon2'));
            f_ok($('#p4dcon3'));
            f_ok($('#p4dcon4'));
            f_ok($('#p4dcon5'));
            f_ok($('#p4dcon6'));
        } else {
            p4cont1;
            f_no($('#p4dcon1'));
            f_no($('#p4dcon2'));
            f_no($('#p4dcon3'));
            f_no($('#p4dcon4'));
            f_no($('#p4dcon5'));
            f_no($('#p4dcon6'));
        }
        if (p41dcon1 == 'girasol') {
            p4cont1++;
            f_ok($('#p41dcon1'));
            f_ok($('#p41dcon2'));
            f_ok($('#p41dcon3'));
            f_ok($('#p41dcon4'));
            f_ok($('#p41dcon5'));
            f_ok($('#p41dcon6'));
            f_ok($('#p41dcon7'));
        } else {
            p4cont1;
            f_no($('#p41dcon1'));
            f_no($('#p41dcon2'));
            f_no($('#p41dcon3'));
            f_no($('#p41dcon4'));
            f_no($('#p41dcon5'));
            f_no($('#p41dcon6'));
            f_no($('#p41dcon7'));
        }
        if (p42dcon1 == 'gemelos') {
            p4cont1++;
            f_ok($('#p42dcon1'));
            f_ok($('#p42dcon2'));
            f_ok($('#p42dcon3'));
            f_ok($('#p42dcon4'));
            f_ok($('#p42dcon5'));
            f_ok($('#p42dcon6'));
            f_ok($('#p42dcon7'));
        } else {
            p4cont1;
            f_no($('#p42dcon1'));
            f_no($('#p42dcon2'));
            f_no($('#p42dcon3'));
            f_no($('#p42dcon4'));
            f_no($('#p42dcon5'));
            f_no($('#p42dcon6'));
            f_no($('#p42dcon7'));
        }
        if (p43dcon1 == 'ángel') {
            p4cont1++;
            f_ok($('#p43dcon1'));
            f_ok($('#p43dcon2'));
            f_ok($('#p43dcon3'));
            f_ok($('#p43dcon4'));
            f_ok($('#p43dcon5'));
        } else {
            p4cont1;
            f_no($('#p43dcon1'));
            f_no($('#p43dcon2'));
            f_no($('#p43dcon3'));
            f_no($('#p43dcon4'));
            f_no($('#p43dcon5'));
        }
        if (p44dcon1 == 'gema') {
            p4cont1++;
            f_ok($('#p44dcon1'));
            f_ok($('#p44dcon2'));
            f_ok($('#p44dcon3'));
            f_ok($('#p44dcon4'));
        } else {
            p4cont1;
            f_no($('#p44dcon1'));
            f_no($('#p44dcon2'));
            f_no($('#p44dcon3'));
            f_no($('#p44dcon4'));
        }
        if (p45dcon1 == 'genio') {
            p4cont1++;
            f_ok($('#p45dcon1'));
            f_ok($('#p45dcon2'));
            f_ok($('#p45dcon3'));
            f_ok($('#p45dcon4'));
            f_ok($('#p45dcon5'));
        } else {
            p4cont1;
            f_no($('#p45dcon1'));
            f_no($('#p45dcon2'));
            f_no($('#p45dcon3'));
            f_no($('#p45dcon4'));
            f_no($('#p45dcon5'));
        }
        var result4 = (p4cont1 * 2) / 6;
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#nota1_4').val(result4.toFixed(2));
        $('#nota1_4').css('display', '');

        var p5cont1 = 0;
        var p5vec3 = ['girasol', 'gelatina', 'gemelos', 'ángel'];
        for (var i = 0; i < 4; i++) {
            var p5cim1 = $('#p5cim' + (i + 1) + ' .encierra').html();
            if (!p5cim1) {
                p5cont1;
                f_no($('.' + (p5vec1[i][1] + 1)));
            } else {
                if (p5cim1 == p5vec3[p5vec1[i][1]]) {
                    p5cont1++;
                    f_ok($('#p5cim' + (i + 1) + ' .encierra'));
                } else {
                    p5cont1;
                    f_no($('#p5cim' + (i + 1) + ' .encierra'));
                }
            }
        }
        var result5 = (p5cont1 * 2) / 4;
        cor = cor + result5;
        inc = inc + (2 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display', '');

        var p61im1=$('.p61im1 span').text();
        var p62im1=$('.p62im1 span').text();
        var p63im1=$('.p63im1 span').text();
        var p6cont1=0;
        if (p61im1=='GerardoyGeorginaestudianGeología.' || p61im1=='GeorginayGerardoestudianGeología.') {
            p6cont1++;
            f_ok($('.p61im1'));
        }else{
            p6cont1;
            f_no($('.p61im1'));
        }
        if (p62im1=='GermányVirginiavanalgimnasio.' || p62im1=='VirginiayGermánvanalgimnasio.') {
            p6cont1++;
            f_ok($('.p62im1'));
        }else{
            p6cont1;
            f_no($('.p62im1'));
        }
        if (p63im1=='LosgemelosEugenioyÁngelquierengelatina.' || p63im1=='LosgemelosÁngelyEugenioquierengelatina.') {
            p6cont1++;
            f_ok($('.p63im1'));
        }else{
            p6cont1;
            f_no($('.p63im1'));
        }
        var result6 = (p6cont1 * 4) / 3;
        cor = cor + result6;
        inc = inc + (4 - result6);
        $('#nota1_6').val(result6.toFixed(2));
        $('#nota1_6').css('display', '');
        Calculo_nota();
    }
}