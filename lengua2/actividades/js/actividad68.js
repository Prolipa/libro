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
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        case '1 enc5':
            $('.enc5').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
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
    var p2vec1 = ['<div class="1 enc1" style="display: inline-block; padding:10px;">' +
        '<img src="img/i2_p143_act68.jpg" class="img-responsive" style="mix-blend-mode: multiply" alt="1" >' +
        '</div>',
        '<div class="1 enc2" style="display: inline-block; padding:10px;">' +
        '<img src="img/i3_p143_act68.jpg" class="img-responsive" style="mix-blend-mode: multiply" alt="2" >' +
        '</div>',
        '<div class = "1 enc3" style = "display: inline-block; padding:10px;" >' +
        '<img src="img/i4_p143_act68.jpg" class="img-responsive" style="mix-blend-mode: multiply" alt=3 >    ' +
        '</div>',
        '<div class="1 enc4" style="display: inline-block; padding:10px;">' +
        '<img src="img/i5_p143_act68.jpg" class="img-responsive" style="mix-blend-mode: multiply" alt="4" >' +
        '</div>',
        '<div class="1 enc5" style="display: inline-block; padding:10px;">' +
        '<img src="img/i6_p143_act68.jpg" class="img-responsive" style="mix-blend-mode: multiply" alt="5" >' +
        '</div>'
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);
    var p2vec2 = ['<span class="bg_palabra drag1">lomo</span>', '<span class="bg_palabra drag1">rato</span>', '<span class="bg_palabra drag1">poner</span>'];
    p2vec2.sort(f_randomico);
    $('.textos').html(p2vec2);
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad681",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            $(ui.draggable).addClass("img-responsive");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });

    var p3vec1 = ['<img src="img/i9_p143_act68.jpg" class="img-responsive drag2" style="display:inline-block; mix-blend-mode: multiply" alt="1">', '<img src="img/i10_p143_act68.jpg" class="img-responsive drag2" style="mix-blend-mode: multiply; display:inline-block;" alt="2">', '<img src="img/i11_p143_act68.jpg" class="img-responsive drag2" style="mix-blend-mode: multiply; display:inline-block;" alt="3">'];
    p3vec1.sort(f_randomico);
    $('.textos1').html(p3vec1);
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad682",
        scroll: false,
    });

    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "mix-blend-mode: multiply");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", f_preg1);

    function f_preg1() {
        var nota1_1 = $('#nota1_1').val();
        cor = 0;
        inc = 0;
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 1')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (3 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            f_comprobar();
        }
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg1);
        var p2en1 = $('.encierra img').attr('alt');
        if (!p2en1) {
            inc = inc + 3;
            f_no($('.enc1'));
            f_no($('.enc2'));
            f_no($('.enc3'));
            f_no($('.enc4'));
            f_no($('.enc5'));
        } else {
            if (p2en1 == '4') {
                cor = cor + 3;
                f_ok($('.encierra'));
            } else {
                inc = inc + 3;
                f_no($('.encierra'));
            }
        }
        var p2en2 = $('.p1im1 span').text();
        if (!p2en2) {
            inc = inc + 2;
            f_no($('.p1im1'));
        } else {
            if (p2en2 == 'rato') {
                cor = cor + 2;
                f_ok($('.p1im1'));
            } else {
                inc = inc + 2;
                f_no($('.p1im1'));
            }
        }
        var p2en3 = $('.p1im2 img').attr('alt');
        if (!p2en3) {
            inc = inc + 2;
            f_no($('.p1im2'));
        } else {
            if (p2en3 == '1') {
                cor = cor + 2;
                f_ok($('.p1im2'));
            } else {
                inc = inc + 2;
                f_no($('.p1im2'));
            }
        }
        Calculo_nota();
    }
}