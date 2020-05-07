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

document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 2.5)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 2.5)
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
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            break;
        case '1 enc5':
            $('.enc5').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            break;
        case '1 enc6':
            $('.enc6').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            break;
        case '1 enc7':
            $('.enc7').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
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
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            $('.enc17').removeClass('encierra');
            break;
        case '2 enc12':
            $('.enc12').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            $('.enc17').removeClass('encierra');
            break;
        case '2 enc13':
            $('.enc13').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            $('.enc17').removeClass('encierra');
            break;
        case '2 enc14':
            $('.enc14').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            $('.enc17').removeClass('encierra');
            break;
        case '2 enc15':
            $('.enc15').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc16').removeClass('encierra');
            $('.enc17').removeClass('encierra');
            break;
        case '2 enc16':
            $('.enc16').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            $('.enc17').removeClass('encierra');
            break;
        case '2 enc17':
            $('.enc17').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            $('.enc16').removeClass('encierra');
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
            $('.enc24').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            break;
        case '3 enc22':
            $('.enc22').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            break;
        case '3 enc23':
            $('.enc23').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            break;
        case '3 enc24':
            $('.enc24').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            break;
        case '3 enc25':
            $('.enc25').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            $('.enc26').removeClass('encierra');
            break;
        case '3 enc26':
            $('.enc26').addClass('encierra');
            $('.enc21').removeClass('encierra');
            $('.enc23').removeClass('encierra');
            $('.enc24').removeClass('encierra');
            $('.enc25').removeClass('encierra');
            $('.enc22').removeClass('encierra');
            break;
    }
});
function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_preg3);

    function f_preg3() {
        var nota1_3 = $('#nota1_3').val();
        cor = 0;
        inc = 0;
        if (!nota1_3) {
            alert('Ingrese la calificación en la pregunta 3.')
        } else {
            cor = cor + parseFloat(nota1_3);
            inc = inc + (2.5 - parseFloat(nota1_3));
            $('#nota1_3').val(parseFloat(nota1_3).toFixed(2));
            $('#nota1_3').attr('disabled', 'true');
            f_preg4();
        }
    }
    function f_preg4() {
        var nota1_4 = $('#nota1_4').val();
        if (!nota1_4) {
            alert('Ingrese la calificación en la pregunta 4.')
        } else {
            cor = cor + parseFloat(nota1_4);
            inc = inc + (2.5 - parseFloat(nota1_4));
            $('#nota1_4').val(parseFloat(nota1_4).toFixed(2));
            $('#nota1_4').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg3);
        var p1dcon1 = $('#p1dcon1').val().toLowerCase();
        var p1dcon2 = $('#p1dcon2').val().toLowerCase();
        var p1dcon3 = $('#p1dcon3').val().toLowerCase();
        var p1dcon4 = $('#p1dcon4').val().toLowerCase();
        var p1cont1 = 0;
        if (p1dcon1 == 'además') {
            p1cont1++;
            f_ok($('#p1dcon1'));
        } else {
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == 'y') {
            p1cont1++;
            f_ok($('#p1dcon2'));
        } else {
            p1cont1;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3 == 'asimismo') {
            p1cont1++;
            f_ok($('#p1dcon3'));
        } else {
            p1cont1;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4 == 'sobre todo') {
            p1cont1++;
            f_ok($('#p1dcon4'));
        } else {
            p1cont1;
            f_no($('#p1dcon4'));
        }
        var result1 = (p1cont1 * 2.5) / 4;
        cor = cor + result1;
        inc = inc + (2.5 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p2im1 = $('#p2im1 .encierra').html();
        var p2im2 = $('#p2im2 .encierra').html();
        var p2im3 = $('#p2im3 .encierra').html();
        var p2cont1 = 0;
        if (!p2im1) {
            p2cont1;
            f_no('.1');
        } else {
            if (p2im1 == 'es más,') {
                p2cont1++;
                f_ok($('#p2im1 .encierra'));
            } else {
                p2cont1;
                f_no($('#p2im1 .encierra'));
            }
        }
        if (!p2im2) {
            p2cont1;
            f_no('.2');
        } else {
            if (p2im2 == 'encima,') {
                p2cont1++;
                f_ok($('#p2im2 .encierra'));
            } else {
                p2cont1;
                f_no($('#p2im2 .encierra'));
            }
        }
        if (!p2im3) {
            p2cont1;
            f_no('.3');
        } else {
            if (p2im3 == 'igualmente') {
                p2cont1++;
                f_ok($('#p2im3 .encierra'));
            } else {
                p2cont1;
                f_no($('#p2im3 .encierra'));
            }
        }
        var result2 = (p2cont1 * 2.5) / 3;
        cor = cor + result2;
        inc = inc + (2.5 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}