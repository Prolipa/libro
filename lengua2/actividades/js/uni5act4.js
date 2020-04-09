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
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 2)
});
document.getElementById('nota1_5').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_5'), 2)
});
for (var i = 0; i < 8; i++) {
    $('.sub' + (i + 1)).click(function() {
        if ($(this).hasClass('subrayar')) {
            $(this).removeClass('subrayar')


        } else {
            $(this).addClass('subrayar')

        }
    })
}
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;
        case '2 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;
        case '2 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            break;
    }
});

function f_iniciar() {
    var p2vec1 = [
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub1">Loja</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub2">Pilahuín</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub3">Quito</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub4">Esmeraldas</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub5">Ambato</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub6">Guaranda</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub7">Cuenca</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 sub8">Guayaquil</div>' +
        '</div>'
    ];
    p2vec1.sort(f_randomico);
    $('#p2res1').html(p2vec1);

    var p3vec1 = [
        '<div style="padding: 10px; display: inline-block;" class="2 enc1"><img src="img/i1_p193_u5a4.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="1"></div>',
        '<div style="padding: 10px; display: inline-block;" class="2 enc2"><img src="img/i2_p193_u5a4.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="2"></div>',
        '<div style="padding: 10px; display: inline-block;" class="2 enc3"><img src="img/i3_p193_u5a4.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="3"></div>',
    ];
    p3vec1.sort(f_randomico);
    $('#p3res1').html(p3vec1);
    bt_comprobar.addEventListener("click", preg4);

    function preg4() {
        cor = 0;
        var nota1_4 = $('#nota1_4').val();
        if (!nota1_4) {
            alert('Ingrese la calificación en la pregunta 4.')
        } else {
            cor = cor + parseFloat(nota1_4);
            inc = inc + (2 - parseFloat(nota1_4));
            $('#nota1_4').val(parseFloat(nota1_4).toFixed(2));
            $('#nota1_4').attr('disabled', 'true');
            preg5();
        }

    }

    function preg5() {
        var nota1_5 = $('#nota1_5').val();
        if (!nota1_5) {
            alert('Ingrese la calificación en la pregunta 5.')
        } else {
            cor = cor + parseFloat(nota1_5);
            inc = inc + (2 - parseFloat(nota1_5));
            $('#nota1_5').val(parseFloat(nota1_5).toFixed(2));
            $('#nota1_5').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg4);
        var p1dcon1 = $('#p1dcon1').val().toLowerCase();
        var p1cont1 = 0;
        if (p1dcon1 == 'paseo de fin de semana') {
            p1cont1++;
            f_ok($('#p1dcon1'));
        } else {
            p1cont1;
            f_no($('#p1dcon1'));
        }
        var result1 = (p1cont1 * 2) / 1;
        cor = cor + result1;
        inc = inc + (2 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p2cont1 = 0,
            p2cont2 = 0,
            p2cont3 = 0;
        if ($('#p2res1 .subrayar').length == 0) {
            p2cont1;
            f_no($('.1'));
        } else {
            for (var i = 0; i < 8; i++) {
                if ($('.sub' + (i + 1)).hasClass('subrayar')) {
                    var p2res1 = $('.sub' + (i + 1)).html();
                    if (p2res1 == 'Pilahuín' || p2res1 == 'Ambato' || p2res1 == 'Guaranda') {
                        p2cont2++;
                        f_ok($('.sub' + (i + 1)));
                    } else {
                        p2cont3++;
                        f_no($('.sub' + (i + 1)));
                    }
                }

            }
        }
        if (p2cont2<=p2cont3) {
            p2cont1=0;
        }else{
            p2cont1=p2cont2-p2cont3;
        }
        var result2 = (p2cont1 * 2) / 3;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');

        var p3res1 = $('#p3res1 .encierra img').attr('alt');
        var p3cont1 = 0;
        if (!p3res1) {
            p3cont1;
            f_no($('.2'));
        } else {
            if (p3res1 == '3') {
                p3cont1++;
                f_ok($('#p3res1 .encierra'));
            } else {
                p3cont1;
                f_no($('#p3res1 .encierra'));
            }
        }
        var result3 = (p3cont1 * 2) / 1;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');
        Calculo_nota();
    }
}