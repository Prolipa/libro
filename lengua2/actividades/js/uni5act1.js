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
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 2)
});
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
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '1 enc5':
            $('.enc5').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            break;
        case '1 enc6':
            $('.enc6').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 pint1':
            $('.pint1').addClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            $('.pint4').removeClass('pintar');
            $('.pint5').removeClass('pintar');
            $('.pint6').removeClass('pintar');
            $('.pint7').removeClass('pintar');
            break;
        case '2 pint2':
            $('.pint2').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            $('.pint4').removeClass('pintar');
            $('.pint5').removeClass('pintar');
            $('.pint6').removeClass('pintar');
            $('.pint7').removeClass('pintar');
            break;
        case '2 pint3':
            $('.pint3').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint4').removeClass('pintar');
            $('.pint5').removeClass('pintar');
            $('.pint6').removeClass('pintar');
            $('.pint7').removeClass('pintar');
            break;
        case '2 pint4':
            $('.pint4').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            $('.pint5').removeClass('pintar');
            $('.pint6').removeClass('pintar');
            $('.pint7').removeClass('pintar');
            break;
        case '2 pint5':
            $('.pint5').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            $('.pint4').removeClass('pintar');
            $('.pint6').removeClass('pintar');
            $('.pint7').removeClass('pintar');
            break;
        case '2 pint6':
            $('.pint6').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            $('.pint4').removeClass('pintar');
            $('.pint5').removeClass('pintar');
            $('.pint7').removeClass('pintar');
            break;
        case '2 pint7':
            $('.pint7').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            $('.pint4').removeClass('pintar');
            $('.pint5').removeClass('pintar');
            $('.pint6').removeClass('pintar');
            break;
    }
});

function f_iniciar() {
    var p1vec1 = [
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 enc1">Mito</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 enc2">Fito</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 enc3">Lito</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 enc4">Pito</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 enc5">Jito</div>' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;">' +
        '<div class="1 enc6">Pato</div>' +
        '</div>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1res1').html(p1vec1);

    var p2vec1 = [
        '<div style="padding: 10px; display: inline-block;" class="2 pint1"><img src="img/i1_p189_u5a1.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="1"></div>',
        '<div style="padding: 10px; display: inline-block;" class="2 pint2"><img src="img/i2_p189_u5a1.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="2"></div>',
        '<div style="padding: 10px; display: inline-block;" class="2 pint3"><img src="img/i3_p189_u5a1.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="3"></div>',
        '<div style="padding: 10px; display: inline-block;" class="2 pint4"><img src="img/i4_p189_u5a1.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="4"></div>',
        '<div style="padding: 10px; display: inline-block;" class="2 pint5"><img src="img/i5_p189_u5a1.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="5"></div>',
        '<div style="padding: 10px; display: inline-block;" class="2 pint6"><img src="img/i6_p189_u5a1.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="6"></div>',
        '<div style="padding: 10px; display: inline-block;" class="2 pint7"><img src="img/i7_p189_u5a1.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="7"></div>',
    ];
    p2vec1.sort(f_randomico);
    $('#p2res1').html(p2vec1);
    bt_comprobar.addEventListener("click", preg3);

    function preg3() {
        cor = 0;
        var nota1_3 = $('#nota1_3').val();
        if (!nota1_3) {
            alert('Ingrese la calificación en la pregunta 3.')
        } else {
            cor = cor + parseFloat(nota1_3);
            inc = inc + (2 - parseFloat(nota1_3));
            $('#nota1_3').val(parseFloat(nota1_3).toFixed(2));
            $('#nota1_3').attr('disabled', 'true');
            preg4();
        }

    }
    function preg4() {
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
        bt_comprobar.removeEventListener("click", preg3);
        var p1res1 = $('#p1res1 .encierra ').html();
        var p1cont1 = 0;
        if (!p1res1) {
            p1cont1;
            f_no($('.1'));
        } else {
            if (p1res1 == 'Pito') {
                p1cont1++;
                f_ok($('#p1res1 .encierra'));
            } else {
                p1cont1;
                f_no($('#p1res1 .encierra'));
            }
        }
        var result1 = (p1cont1 * 2) / 1;
        cor = cor + result1;
        inc = inc + (2 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');
        var p2res1 = $('#p2res1 .pintar img').attr('alt');
        var p2cont1 = 0;
        if (!p2res1) {
            p2cont1;
            f_no($('.2'));
        } else {
            if (p2res1 == '3') {
                p2cont1++;
                f_ok($('#p2res1 .pintar'));
                $('#p2res1 .pintar').removeClass('pintar');
            } else {
                p2cont1;
                f_no($('#p2res1 .pintar'));
                $('#p2res1 .pintar').removeClass('pintar');
            }
        }
        var result2 = (p2cont1 * 2) / 1;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}