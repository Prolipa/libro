var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 4,
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
        case '1 p1pint1':
            $('.p1pint1').addClass('pintar');
            $('.p1pint2').removeClass('pintar');
            $('.p1pint3').removeClass('pintar');
            $('.p1pint4').removeClass('pintar');
            break;
        case '1 p1pint2':
            $('.p1pint2').addClass('pintar');
            $('.p1pint1').removeClass('pintar');
            $('.p1pint3').removeClass('pintar');
            $('.p1pint4').removeClass('pintar');
            break;
        case '1 p1pint3':
            $('.p1pint3').addClass('pintar');
            $('.p1pint1').removeClass('pintar');
            $('.p1pint2').removeClass('pintar');
            $('.p1pint4').removeClass('pintar');
            break;
        case '1 p1pint4':
            $('.p1pint4').addClass('pintar');
            $('.p1pint1').removeClass('pintar');
            $('.p1pint2').removeClass('pintar');
            $('.p1pint3').removeClass('pintar');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p2pint1':
            $('.p2pint1').addClass('pintar');
            $('.p2pint2').removeClass('pintar');
            $('.p2pint3').removeClass('pintar');
            $('.p2pint4').removeClass('pintar');
            break;
        case '2 p2pint2':
            $('.p2pint2').addClass('pintar');
            $('.p2pint1').removeClass('pintar');
            $('.p2pint3').removeClass('pintar');
            $('.p2pint4').removeClass('pintar');
            break;
        case '2 p2pint3':
            $('.p2pint3').addClass('pintar');
            $('.p2pint1').removeClass('pintar');
            $('.p2pint2').removeClass('pintar');
            $('.p2pint4').removeClass('pintar');
            break;
        case '2 p2pint4':
            $('.p2pint4').addClass('pintar');
            $('.p2pint1').removeClass('pintar');
            $('.p2pint2').removeClass('pintar');
            $('.p2pint3').removeClass('pintar');
            break;
    }
});
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 3)
});

function f_iniciar() {

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cb1 = $('#p1cb1 .radio:checked').val();
        if (!p1cb1) {
            inc++;
            $('#p1cx1').addClass('no-valid');
            $('#p1cx2').addClass('no-valid');
        } else {
            if (p1cb1 == '1') {
                cor++;
                $('#p1cb1 .radio:checked').addClass('valid');
            } else {
                inc++;
                $('#p1cb1 .radio:checked').addClass('no-valid');
            }
        }

        var p1cb2 = $('#p1cb2 .radio:checked').val();
        if (!p1cb2) {
            inc++;
            $('#p2cx1').addClass('no-valid');
            $('#p2cx2').addClass('no-valid');
        } else {
            if (p1cb2 == '2') {
                cor++;
                $('#p1cb2 .radio:checked').addClass('valid');
            } else {
                inc++;
                $('#p1cb2 .radio:checked').addClass('no-valid');
            }
        }

        var p1cb3 = $('#p1cb3 .radio:checked').val();
        if (!p1cb3) {
            inc++;
            $('#p3cx1').addClass('no-valid');
            $('#p3cx2').addClass('no-valid');
        } else {
            if (p1cb3 == '1') {
                cor++;
                $('#p1cb3 .radio:checked').addClass('valid');
            } else {
                inc++;
                $('#p1cb3 .radio:checked').addClass('no-valid');
            }
        }

        var p1cb4 = $('#p1cb4 .radio:checked').val();
        if (!p1cb4) {
            inc++;
            $('#p4cx1').addClass('no-valid');
            $('#p4cx2').addClass('no-valid');
        } else {
            if (p1cb4 == '1') {
                cor++;
                $('#p1cb4 .radio:checked').addClass('valid');
            } else {
                inc++;
                $('#p1cb4 .radio:checked').addClass('no-valid');
            }
        }
        Calculo_nota();
    }
}