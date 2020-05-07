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

document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2.5)
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('subrayar');
            $('.enc2').removeClass('subrayar');
            break;
        case '1 enc2':
            $('.enc2').addClass('subrayar');
            $('.enc1').removeClass('subrayar');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc3':
            $('.enc3').addClass('subrayar');
            $('.enc4').removeClass('subrayar');
            break;
        case '2 enc4':
            $('.enc4').addClass('subrayar');
            $('.enc3').removeClass('subrayar');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 enc5':
            $('.enc5').addClass('subrayar');
            $('.enc6').removeClass('subrayar');
            break;
        case '3 enc6':
            $('.enc6').addClass('subrayar');
            $('.enc5').removeClass('subrayar');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 enc7':
            $('.enc7').addClass('subrayar');
            $('.enc8').removeClass('subrayar');
            break;
        case '4 enc8':
            $('.enc8').addClass('subrayar');
            $('.enc7').removeClass('subrayar');
            break;
    }
});

function f_iniciar() {
    var p1vec1 = [
        '<p id="p1im1"><span class="1 enc1">El gato travieso</span> <span class="1 enc2">rompe el florero</span>.</p>',
        '<p id="p1im2"><span class="2 enc3">Gira a toda velocidad</span> <span class="2 enc4">el trompo</span>.</p>',
        '<p id="p1im3"><span class="3 enc5">El río</span> <span class="3 enc6">crece con el invierno</span>.</p>',
        '<p id="p1im4"><span class="4 enc7">Alumbran la montaña</span> <span class="4 enc8">las estrellas</span>.</p>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1cim1').html(p1vec1);
    var p1vec2 = [
        '<p>¿Quién rompe el florero?</p>' +
        '<input type="text" class="form-control" id="p1dcon1" onkeyup="mayus(this)">',
        '<p>¿Qué gira a toda velocidad?</p>' +
        '<input type="text" class="form-control" id="p1dcon2" onkeyup="mayus(this)">',
        '<p>¿Qué crece con el invierno?</p>' +
        '<input type="text" class="form-control" id="p1dcon3" onkeyup="mayus(this)">',
        '<p>¿Qué alumbra la montaña?</p>' +
        '<input type="text" class="form-control" id="p1dcon4" onkeyup="mayus(this)">'
    ];
    p1vec2.sort(f_randomico);
    $('#p1cim2').html(p1vec2);

    var p3vec1 = [
        '<p>La <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; width: 90px; text-align: center;" id="p3dcon1"> es la serpiente más grande del mundo.</p>',
        '<p>El <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; width: 90px; text-align: center;" id="p3dcon2"> emite un zumbido con sus alas.</p>',
        '<p>El <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; width: 90px; text-align: center;" id="p3dcon3"> respira a través de la piel.</p>',
    ];
    p3vec1.sort(f_randomico);
    $('#p3im1').html(p3vec1);

    var p4vec1 = [
        '<p>Las pirañas <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; width: 90px; text-align: center;" id="p4dcon1"> un apetito voraz.</p>',
        '<p>Las abejas <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; width: 90px; text-align: center;" id="p4dcon2"> en grupos muy organizados.</p>',
        '<p>Las boas <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; width: 90px; text-align: center;" id="p4dcon3"> a la familia de las serpientes no venenosas.</p>',
    ];
    p4vec1.sort(f_randomico);
    $('#p4im1').html(p4vec1);
    bt_comprobar.addEventListener("click", f_preg2);

    function f_preg2() {
        var nota1_2 = $('#nota1_2').val();
        cor = 0;
        inc = 0;
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 2')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (2.5 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg2);
        var p1im1 = $('#p1im1 .subrayar').text();
        var p1im2 = $('#p1im2 .subrayar').text();
        var p1im3 = $('#p1im3 .subrayar').text();
        var p1im4 = $('#p1im4 .subrayar').text();
        var p1cont1 = 0;
        if (!p1im1) {
            p1cont1;
            f_no('.1');
        } else {
            if (p1im1 == 'El gato travieso') {
                p1cont1++;
                f_ok($('#p1im1 .subrayar'));
            } else {
                p1cont1;
                f_no($('#p1im1 .subrayar'));
            }
        }
        if (!p1im2) {
            p1cont1;
            f_no('.2');
        } else {
            if (p1im2 == 'el trompo') {
                p1cont1++;
                f_ok($('#p1im2 .subrayar'));
            } else {
                p1cont1;
                f_no($('#p1im2 .subrayar'));
            }
        }
        if (!p1im3) {
            p1cont1;
            f_no('.3');
        } else {
            if (p1im3 == 'El río') {
                p1cont1++;
                f_ok($('#p1im3 .subrayar'));
            } else {
                p1cont1;
                f_no($('#p1im3 .subrayar'));
            }
        }
        if (!p1im4) {
            p1cont1;
            f_no('.4');
        } else {
            if (p1im4 == 'las estrellas') {
                p1cont1++;
                f_ok($('#p1im4 .subrayar'));
            } else {
                p1cont1;
                f_no($('#p1im4 .subrayar'));
            }
        }
        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        var p1dcon3 = $('#p1dcon3').val();
        var p1dcon4 = $('#p1dcon4').val();
        if (p1dcon1 == 'el gato travieso' || p1dcon1 == 'el gato') {
            p1cont1++;
            f_ok($('#p1dcon1'));
        } else {
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == 'el trompo') {
            p1cont1++;
            f_ok($('#p1dcon2'));
        } else {
            p1cont1;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3 == 'el río') {
            p1cont1++;
            f_ok($('#p1dcon3'));
        } else {
            p1cont1;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4 == 'las estrellas') {
            p1cont1++;
            f_ok($('#p1dcon4'));
        } else {
            p1cont1;
            f_no($('#p1dcon4'));
        }
        var result1 = (p1cont1 * 2.5) / 8;
        cor = cor + result1;
        inc = inc + (2.5 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p3dcon1 = $('#p3dcon1').val();
        var p3dcon2 = $('#p3dcon2').val();
        var p3dcon3 = $('#p3dcon3').val();
        var p3cont1 = 0;
        if (p3dcon1 == 'anaconda') {
            p3cont1++;
            f_ok($('#p3dcon1'));
        } else {
            p3cont1;
            f_no($('#p3dcon1'));
        }
        if (p3dcon2 == 'colibrí') {
            p3cont1++;
            f_ok($('#p3dcon2'));
        } else {
            p3cont1;
            f_no($('#p3dcon2'));
        }
        if (p3dcon3 == 'sapo') {
            p3cont1++;
            f_ok($('#p3dcon3'));
        } else {
            p3cont1;
            f_no($('#p3dcon3'));
        }
        var result3 = (p3cont1 * 2.5) / 3;
        cor = cor + result3;
        inc = inc + (2.5 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');

        var p4dcon1 = $('#p4dcon1').val();
        var p4dcon2 = $('#p4dcon2').val();
        var p4dcon3 = $('#p4dcon3').val();
        var p4cont1 = 0;
        if (p4dcon1 == 'tienen') {
            p4cont1++;
            f_ok($('#p4dcon1'));
        } else {
            p4cont1;
            f_no($('#p4dcon1'));
        }
        if (p4dcon2 == 'viven') {
            p4cont1++;
            f_ok($('#p4dcon2'));
        } else {
            p4cont1;
            f_no($('#p4dcon2'));
        }
        if (p4dcon3 == 'pertenecen') {
            p4cont1++;
            f_ok($('#p4dcon3'));
        } else {
            p4cont1;
            f_no($('#p4dcon3'));
        }
        var result3 = (p4cont1 * 2.5) / 3;
        cor = cor + result3;
        inc = inc + (2.5 - result3);
        $('#nota1_4').val(result3.toFixed(2));
        $('#nota1_4').css('display', '');
        Calculo_nota();
    }
}