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
    sopa = 0,
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
    validNumero(0, 4, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 4)
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '3 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '3 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '3 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '3 enc5':
            $('.enc5').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '3 enc6':
            $('.enc6').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 enc11':
            $('.enc11').addClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            break;
        case '4 enc12':
            $('.enc12').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            break;
        case '4 enc13':
            $('.enc13').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            break;
        case '4 enc14':
            $('.enc14').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            break;
        case '4 enc15':
            $('.enc15').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            break;
        case '4 enc16':
            $('.enc16').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            break;
    }
});
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 enc21':
            $('.enc21').addClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            $('.enc27').removeClass('encierra');
            $('.enc28').removeClass('encierra');
            break;
        case '5 enc22':
            $('.enc22').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            $('.enc27').removeClass('encierra');
            $('.enc28').removeClass('encierra');
            break;
        case '5 enc23':
            $('.enc23').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            $('.enc27').removeClass('encierra');
            $('.enc28').removeClass('encierra');
            break;
        case '5 enc24':
            $('.enc24').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            $('.enc27').removeClass('encierra');
            $('.enc28').removeClass('encierra');
            break;
        case '5 enc25':
            $('.enc25').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            $('.enc27').removeClass('encierra');
            $('.enc28').removeClass('encierra');
            break;
        case '5 enc26':
            $('.enc26').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc27').removeClass('encierra');
            $('.enc28').removeClass('encierra');
            break;
        case '5 enc27':
            $('.enc27').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            $('.enc28').removeClass('encierra');
            break;
        case '5 enc28':
            $('.enc28').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc27').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            break;
    }
});

function f_iniciar() {
    var pal1 = ['<span class="1 bg_palabra drag1">fútbol</span>',
        '<span class="2 bg_palabra drag1">col</span>',
        '<span class="2 bg_palabra drag1">papa</span>',
        '<span class="1 bg_palabra drag1">atletismo</span>',
        '<span class="1 bg_palabra drag1">vóley</span>',
        '<span class="2 bg_palabra drag1">brócoli</span>',
        '<span class="2 bg_palabra drag1">espárragos</span>',
        '<span class="2 bg_palabra drag1">lechuga</span>',
        '<span class="1 bg_palabra drag1">básquet</span>',
        '<span class="1 bg_palabra drag1">natación</span>',
        '<span class="2 bg_palabra drag1">zanahoria</span>',
        '<span class="2 bg_palabra drag1">tomate</span>',
        '<span class="1 bg_palabra drag1">tenis</span>',
        '<span class="1 bg_palabra drag1">ciclismo</span>'
    ];

    pal1.sort(f_randomico);

    $(".textos").append(pal1);
    var pal3 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p1cim11" ><h4>Campo semántico:<br>vegetales</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop1 p1im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p1cim12"><h4>Campo semántico:<br>deportes</h4></div>' +
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
        containment: "#p1act1",
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

    var p3vec1 = [
        '<span class="3 enc1" style="padding:10px;">casa</span>',
        '<span class="3 enc2" style="padding:10px;">departamento</span>',
        '<span class="3 enc3" style="padding:10px;">choza</span>',
        '<span class="3 enc4" style="padding:10px;">auto</span>',
        '<span class="3 enc5" style="padding:10px;">cabaña</span>',
        '<span class="3 enc6" style="padding:10px;">edificio</span>'
    ];
    p3vec1.sort(f_randomico);
    $('#p3im1').html(p3vec1);
    var p3vec2 = [
        '<span class="4 enc11" style="padding:10px;">jabón</span>',
        '<span class="4 enc12" style="padding:10px;">pasta</span>',
        '<span class="4 enc13" style="padding:10px;">dental</span>',
        '<span class="4 enc14" style="padding:10px;">cepillo de dientes</span>',
        '<span class="4 enc15" style="padding:10px;">detergente</span>',
        '<span class="4 enc16" style="padding:10px;">toalla</span>'
    ];
    p3vec2.sort(f_randomico);
    $('#p3im2').html(p3vec2);
    var p3vec3 = [
        '<span class="5 enc21" style="padding:10px;">lunes</span>',
        '<span class="5 enc22" style="padding:10px;">martes</span>',
        '<span class="5 enc23" style="padding:10px;">miércoles</span>',
        '<span class="5 enc24" style="padding:10px;">enero</span>',
        '<span class="5 enc25" style="padding:10px;">jueves</span>',
        '<span class="5 enc26" style="padding:10px;">viernes</span>',
        '<span class="5 enc27" style="padding:10px;">sábado</span>',
        '<span class="5 enc28" style="padding:10px;">domingo</span>'
    ];
    p3vec3.sort(f_randomico);
    $('#p3im3').html(p3vec3);
    bt_comprobar.addEventListener("click", preg2);

    function preg2() {
        cor = 0;
        var nota1_2 = $('#nota1_2').val();
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 2.')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (4 - parseFloat(nota1_2));
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
        var p1im1 = $('.p1im1 .2').length;
        var p1cont1 = 0;
        if ($('.p1im1 span').length == '7') {
            if (p1im1 == '7') {
                p1cont1++;
                f_ok($('.p1im1'));
            } else {
                p1cont1;
                f_no($('.p1im1'));
            }
        } else {
            p1cont1;
            f_no($('.p1im1'));
        }
        var p1im2 = $('.p1im2 .1').length;
        if ($('.p1im2 span').length == '7') {
            if (p1im2 == '7') {
                p1cont1++;
                f_ok($('.p1im2'));
            } else {
                p1cont1;
                f_no($('.p1im2'));
            }
        } else {
            p1cont1;
            f_no($('.p1im2'));
        }
        var result1 = (p1cont1 * 3) / 2;
        cor = cor + result1;
        inc = inc + (3 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p3im1 = $('#p3im1 .encierra').text();
        var p3im2 = $('#p3im2 .encierra').text();
        var p3im3 = $('#p3im3 .encierra').text();
        var p3cont1 = 0;
        if (!p3im1) {
            p3cont1;
            f_no($('.3'));
        } else {
            if (p3im1 == 'auto') {
                p3cont1++;
                f_ok($('#p3im1 .encierra'));
            }else{
                p3cont1;
                f_no($('#p3im1 .encierra'));
            }
        }
        if (!p3im2) {
            p3cont1;
            f_no($('.4'));
        } else {
            if (p3im2 == 'detergente') {
                p3cont1++;
                f_ok($('#p3im2 .encierra'));
            }else{
                p3cont1;
                f_no($('#p3im2 .encierra'));
            }
        }
        if (!p3im3) {
            p3cont1;
            f_no($('.5'));
        } else {
            if (p3im3 == 'enero') {
                p3cont1++;
                f_ok($('#p3im3 .encierra'));
            }else{
                p3cont1;
                f_no($('#p3im3 .encierra'));
            }
        }
        var result3 = (p3cont1 * 3) / 3;
        cor = cor + result3;
        inc = inc + (3 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');
        Calculo_nota();
    }
}