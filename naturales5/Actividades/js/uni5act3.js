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
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
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
            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;
    }
});

function f_iniciar() {
    var p2vec1 = [
        '<div style="display: inline-block; padding: 10px;" class="1 enc1"><img src="img/i1_p165_u5a3.jpg" style="mix-blend-mode: multiply;" class="img-responsive"><br><span>En el techo</span></div>',
        '<div style="display: inline-block; padding: 10px;" class="1 enc2"><img src="img/i2_p165_u5a3.jpg" style="mix-blend-mode: multiply;" class="img-responsive"><br><span>En la ventana</span></div>',
        '<div style="display: inline-block; padding: 10px;" class="1 enc3"><img src="img/i3_p165_u5a3.jpg" style="mix-blend-mode: multiply;" class="img-responsive"><br><span>En la cocina</span></div>',
        '<div style="display: inline-block; padding: 10px;" class="1 enc4"><img src="img/i4_p165_u5a3.jpg" style="mix-blend-mode: multiply;" class="img-responsive"><br><span>Detrás de las macetas</span></div>'
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);
    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        var nota1_1 = $('#nota1_1').val();
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 1.')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (2 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            preg3();
        }
    }
    function preg3() {
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
        bt_comprobar.removeEventListener("click", preg1);
        var p2a1 = $('.encierra span').text();
        var p2cont1 = 0;
        if (!p2a1) {
            p2cont1;
            f_no($('.1'));
        } else {
            if (p2a1 == 'Detrás de las macetas') {
                p2cont1++;
                f_ok($('.encierra'));
            } else {
                p2cont1;
                f_no($('.encierra'));
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