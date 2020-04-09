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
        case '1 pint1':
            $('.pint1').addClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            break;
        case '1 pint2':
            $('.pint2').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            break;
        case '1 pint3':
            $('.pint3').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint2').removeClass('pintar');
            break;

    }
});

function f_iniciar() {
    var p2vec1 = [
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;" class="1 pint1">' +
        '<img class="img-responsive" src="img/i2_p199_u5a7.jpg" alt="1" style="mix-blend-mode:multiply;">' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;" class="1 pint2">' +
        '<img class="img-responsive" src="img/i3_p199_u5a7.jpg" alt="2" style="mix-blend-mode:multiply;">' +
        '</div>',
        '<div style="padding: 0px 25px 0px 25px; display: inline-block;" class="1 pint3">' +
        '<img class="img-responsive" src="img/i4_p199_u5a7.jpg" alt="3" style="mix-blend-mode:multiply;">' +
        '</div>'
    ];
    p2vec1.sort(f_randomico);
    $('#p2res1').html(p2vec1);
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
        var p2res1 = $('#p2res1 .pintar > img').attr('alt');
        var p2cont1 = 0;
        if (!p2res1) {
            p2cont1;
            f_no($('.1'));
        } else {
            if (p2res1 == '2') {
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