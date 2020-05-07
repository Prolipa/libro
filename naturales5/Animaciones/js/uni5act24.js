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
$('.enc1').click(function() {
    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
    } else {
        $(this).addClass('encierra')
    }
})
$('.pint1').click(function() {
    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')
    } else {
        $(this).addClass('pinta')
    }
})
$('.sub1').click(function() {
    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
})

function f_iniciar() {
    var p1vec1 = [
        '<div style="display: inline-block; padding: 10px;" class="1 enc1">escribo</div>',
        '<div style="display: inline-block; padding: 10px;" class="2 enc1">pinté</div>',
        '<div style="display: inline-block; padding: 10px;" class="3 enc1">jugaré</div>',
        '<div style="display: inline-block; padding: 10px;" class="4 enc1">leo</div>',
        '<div style="display: inline-block; padding: 10px;" class="5 enc1">conversé</div>',
        '<div style="display: inline-block; padding: 10px;" class="6 enc1">comeré</div>',
        '<div style="display: inline-block; padding: 10px;" class="7 enc1">saludé</div>',
        '<div style="display: inline-block; padding: 10px;" class="8 enc1">caminaré</div>',
        '<div style="display: inline-block; padding: 10px;" class="9 enc1">escucho</div>',
        '<div style="display: inline-block; padding: 10px;" class="10 enc1">hablo</div>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);
    var p2vec1 = [
        '<div style="display: inline-block; padding: 10px;" class="i1 pint1">escribo</div>',
        '<div style="display: inline-block; padding: 10px;" class="i2 pint1">pinté</div>',
        '<div style="display: inline-block; padding: 10px;" class="i3 pint1">jugaré</div>',
        '<div style="display: inline-block; padding: 10px;" class="i4 pint1">leo</div>',
        '<div style="display: inline-block; padding: 10px;" class="i5 pint1">conversé</div>',
        '<div style="display: inline-block; padding: 10px;" class="i6 pint1">comeré</div>',
        '<div style="display: inline-block; padding: 10px;" class="i7 pint1">saludé</div>',
        '<div style="display: inline-block; padding: 10px;" class="i8 pint1">caminaré</div>',
        '<div style="display: inline-block; padding: 10px;" class="i9 pint1">escucho</div>',
        '<div style="display: inline-block; padding: 10px;" class="i10 pint1">hablo</div>'
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);
    var p3vec1 = [
        '<div style="display: inline-block; padding: 10px;" class="a1 sub1">escribo</div>',
        '<div style="display: inline-block; padding: 10px;" class="a2 sub1">pinté</div>',
        '<div style="display: inline-block; padding: 10px;" class="a3 sub1">jugaré</div>',
        '<div style="display: inline-block; padding: 10px;" class="a4 sub1">leo</div>',
        '<div style="display: inline-block; padding: 10px;" class="a5 sub1">conversé</div>',
        '<div style="display: inline-block; padding: 10px;" class="a6 sub1">comeré</div>',
        '<div style="display: inline-block; padding: 10px;" class="a7 sub1">saludé</div>',
        '<div style="display: inline-block; padding: 10px;" class="a8 sub1">caminaré</div>',
        '<div style="display: inline-block; padding: 10px;" class="a9 sub1">escucho</div>',
        '<div style="display: inline-block; padding: 10px;" class="a10 sub1">hablo</div>'
    ];
    p3vec1.sort(f_randomico);
    $('#p3im1').html(p3vec1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cont1 = 0;
        var p1cont2 = 0;
        var p1cont3 = 0;
        if ($('.encierra').length == 0) {
            p1cont1;
            f_no($('.enc1'));
        } else {
            for (var i = 0; i < 10; i++) {
                if ($('.' + (i + 1)).hasClass('encierra')) {
                    var p1res1 = $('.' + (i + 1)).html();
                    if (p1res1 == 'escribo' || p1res1 == 'leo' || p1res1 == 'escucho' || p1res1 == 'hablo') {
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
        var result1 = (p1cont1 * 3.5) / 4;
        cor = cor + result1;
        inc = inc + (3.5 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');
        var p2cont1 = 0;
        var p2cont2 = 0;
        var p2cont3 = 0;
        if ($('.pinta').length == 0) {
            p2cont1;
            f_no($('.pint1'));
        } else {
            for (var i = 0; i < 10; i++) {
                if ($('.i' + (i + 1)).hasClass('pinta')) {
                    var p2res1 = $('.i' + (i + 1)).html();
                    if (p2res1 == 'pinté' || p2res1 == 'saludé' || p2res1 == 'conversé') {
                        p2cont2++;
                        f_ok($('.i' + (i + 1)));
                        $('.i' + (i + 1)).removeClass('pinta');
                    } else {
                        p2cont3++;
                        f_no($('.i' + (i + 1)));
                        $('.i' + (i + 1)).removeClass('pinta');
                    }
                }

            }
        }
        if (p2cont2 > p2cont3) {
            p2cont1 = p2cont2 - p2cont3;
        } else {
            p2cont1;
        }
        var result2 = (p2cont1 * 3.5) / 3;
        cor = cor + result2;
        inc = inc + (3.5 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        var p3cont1 = 0;
        var p3cont2 = 0;
        var p3cont3 = 0;
        if ($('.subrayar').length == 0) {
            p3cont1;
            f_no($('.sub1'));
        } else {
            for (var i = 0; i < 10; i++) {
                if ($('.a' + (i + 1)).hasClass('subrayar')) {
                    var p3res1 = $('.a' + (i + 1)).html();
                    if (p3res1 == 'comeré' || p3res1 == 'jugaré' || p3res1 == 'caminaré') {
                        p3cont2++;
                        f_ok($('.a' + (i + 1)));
                    } else {
                        p3cont3++;
                        f_no($('.a' + (i + 1)));
                    }
                }

            }
        }
        if (p3cont2 > p3cont3) {
            p3cont1 = p3cont2 - p3cont3;
        } else {
            p3cont1;
        }
        var result3 = (p3cont1 * 3) / 3;
        cor = cor + result3;
        inc = inc + (3 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');
        Calculo_nota();
    }
}