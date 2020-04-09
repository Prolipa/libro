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
    validNumero(0, 5, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 5)
});
$('.sub1').click(function() {
    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
})

function f_iniciar() {
    var p2vec1 = [
        '<div style="display: inline-block; padding: 10px;" class="1 sub1">Tiene información imaginaria.</div>',
        '<div style="display: inline-block; padding: 10px;" class="2 sub1">Es de actualidad.</div>',
        '<div style="display: inline-block; padding: 10px;" class="3 sub1">Es de utilidad para los lectores.</div>',
        '<div style="display: inline-block; padding: 10px;" class="4 sub1">Solo habla de deportes.</div>',
        '<div style="display: inline-block; padding: 10px;" class="5 sub1">Es de interés de los lectores.</div>',
        '<div style="display: inline-block; padding: 10px;" class="6 sub1">Tiene información real.</div>',
        '<div style="display: inline-block; padding: 10px;" class="7 sub1">No tiene utilidad.</div>',
        '<div style="display: inline-block; padding: 10px;" class="8 sub1">A veces es de utilidad.</div>',
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
            inc = inc + (5 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p2cont1 = 0;
        var p2cont2 = 0;
        var p2cont3 = 0;
        if ($('.subrayar').length == 0) {
            p2cont1;
            f_no($('.sub1'));
        } else {
            for (var i = 0; i < 8; i++) {
                if ($('.' + (i + 1)).hasClass('subrayar')) {
                    var p2res1 = $('.' + (i + 1)).html();
                    if (p2res1 == 'Es de actualidad.' || p2res1 == 'Es de utilidad para los lectores.' || p2res1 == 'Es de interés de los lectores.' || p2res1 == 'Tiene información real.') {
                        p2cont2++;
                        f_ok($('.' + (i + 1)));
                    } else {
                        p2cont3++;
                        f_no($('.' + (i + 1)));
                    }
                }

            }
        }
        if (p2cont2 > p2cont3) {
            p2cont1 = p2cont2 - p2cont3;
        } else {
            p2cont1;
        }
        var result2 = (p2cont1 * 5) / 4;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}