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
    validNumero(0, 4, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 4)
});
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('subrayar');
            $('.enc2').removeClass('subrayar');
            $('.enc3').removeClass('subrayar');
            $('.enc4').removeClass('subrayar');
            $('.enc5').removeClass('subrayar');
            break;
        case '1 enc2':
            $('.enc2').addClass('subrayar');
            $('.enc1').removeClass('subrayar');
            $('.enc3').removeClass('subrayar');
            $('.enc4').removeClass('subrayar');
            $('.enc5').removeClass('subrayar');
            break;
        case '1 enc3':
            $('.enc3').addClass('subrayar');
            $('.enc1').removeClass('subrayar');
            $('.enc2').removeClass('subrayar');
            $('.enc4').removeClass('subrayar');
            $('.enc5').removeClass('subrayar');
            break;
        case '1 enc4':
            $('.enc4').addClass('subrayar');
            $('.enc1').removeClass('subrayar');
            $('.enc2').removeClass('subrayar');
            $('.enc3').removeClass('subrayar');
            $('.enc5').removeClass('subrayar');
            break;
        case '1 enc5':
            $('.enc5').addClass('subrayar');
            $('.enc1').removeClass('subrayar');
            $('.enc2').removeClass('subrayar');
            $('.enc3').removeClass('subrayar');
            $('.enc4').removeClass('subrayar');
            break;
    }
});

function f_iniciar() {
    
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
            f_comprobar();
        }
    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg3);
        var p1dcon1=$('#p1dcon1').val();
        var p1cont1=0;
        if (p1dcon1=='caballos' || p1dcon1=='los caballos') {
            p1cont1++;
            f_ok($('#p1dcon1'));
        }else{
            p1cont1;
            f_no($('#p1dcon1'));
        }
        var result1 = (p1cont1 * 3) / 1;
        cor = cor + result1;
        inc = inc + (3 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p2a1 = $('.subrayar').html();
        var p2cont1 = 0;
        if (!p2a1) {
            p2cont1;
            f_no($('.1'));
        } else {
            if (p2a1 == 'campo') {
                p2cont1++;
                f_ok($('.subrayar'));
            } else {
                p2cont1;
                f_no($('.subrayar'));
            }
        }

        var result2 = (p2cont1 * 3) / 1;
        cor = cor + result2;
        inc = inc + (3 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}