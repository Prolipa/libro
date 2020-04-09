var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 9,
    cor = 0,
    inc = 0,
    str = '',
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
    var p1vec1 = ['<img src="img/i1_p142_act122.jpg" class="img-responsive" style="display: inline-block; mix-blend-mode: multiply;" alt="1">',
        '<img src="img/i2_p142_act122.jpg" class="img-responsive" style="display: inline-block; mix-blend-mode: multiply;" alt="2">',
        '<img src="img/i3_p142_act122.jpg" class="img-responsive" style="display: inline-block; mix-blend-mode: multiply;" alt="3">',
        '<img src="img/i4_p142_act122.jpg" class="img-responsive" style="display: inline-block; mix-blend-mode: multiply;" alt="4">'
    ];
    var myArray1 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c = myArray1[i - 1];
        $("#p1im" + i).html(p1vec1[c]);

    };
    var p2num1 = parseInt((Math.random() * 99) + 400);
    var p2num2 = parseInt((Math.random() * 200) + 100);
    $("#p2im1").html(p2num1);
    $("#p2im2").html(p2num2);
    $("#p2im3").html('$ ' + p2num1);
    $("#p2im4").html('$ ' + p2num2);
    var p3num1 = parseInt((Math.random() * 300) + 100);
    var p3num2 = parseInt((Math.random() * 300) + 100);
    $("#p3im1").html(p3num1);
    $("#p3im2").html(p3num2);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1res1 = $('.encierra img').attr('alt');
        if (!p1res1) {
            inc++;
            f_no($('.enc1'));
            f_no($('.enc2'));
            f_no($('.enc3'));
            f_no($('.enc4'));
        } else {
            if (p1res1 == '3') {
                cor++;
                f_ok($('.encierra'));
            } else {
                inc++;
                f_no($('.encierra'));
            }
        }

        var p2dcon1 = [$('#p2dcon1').val(), $('#p2dcon2').val(), $('#p2dcon3').val()];
        p2dcon1 = p2dcon1.join('');
        var p2dcon2 = [$('#p2dcon4').val(), $('#p2dcon5').val(), $('#p2dcon6').val()];
        p2dcon2 = p2dcon2.join('');
        var p2dcon3 = [$('#p2dcon7').val(), $('#p2dcon8').val(), $('#p2dcon9').val()];
        p2dcon3 = p2dcon3.join('');
        var p2dcon10 = $('#p2dcon10').val();
        if (p2dcon1 == p2num1) {
            cor++;
            f_ok($('#p2dcon1'));
            f_ok($('#p2dcon2'));
            f_ok($('#p2dcon3'));
        } else {
            inc++;
            f_no($('#p2dcon1'));
            f_no($('#p2dcon2'));
            f_no($('#p2dcon3'));
        }
        if (p2dcon2 == p2num2) {
            cor++;
            f_ok($('#p2dcon4'));
            f_ok($('#p2dcon5'));
            f_ok($('#p2dcon6'));
        } else {
            inc++;
            f_no($('#p2dcon4'));
            f_no($('#p2dcon5'));
            f_no($('#p2dcon6'));
        }
        if (p2dcon3 == (p2num1 + p2num2)) {
            cor++;
            f_ok($('#p2dcon7'));
            f_ok($('#p2dcon8'));
            f_ok($('#p2dcon9'));
        } else {
            inc++;
            f_no($('#p2dcon7'));
            f_no($('#p2dcon8'));
            f_no($('#p2dcon9'));
        }
        if (p2dcon10 == (p2num1 + p2num2)) {
            cor++;
            f_ok($('#p2dcon10'));
        } else {
            inc++;
            f_no($('#p2dcon10'));
        }

        var p3dcon1 = [$('#p3dcon1').val(), $('#p3dcon2').val(), $('#p3dcon3').val()];
        p3dcon1 = p3dcon1.join('');
        var p3dcon2 = [$('#p3dcon4').val(), $('#p3dcon5').val(), $('#p3dcon6').val()];
        p3dcon2 = p3dcon2.join('');
        var p3dcon3 = [$('#p3dcon7').val(), $('#p3dcon8').val(), $('#p3dcon9').val()];
        p3dcon3 = p3dcon3.join('');
        var p3dcon10 = $('#p3dcon10').val();
        if (p3dcon1 == p3num1) {
            cor++;
            f_ok($('#p3dcon1'));
            f_ok($('#p3dcon2'));
            f_ok($('#p3dcon3'));
        } else {
            inc++;
            f_no($('#p3dcon1'));
            f_no($('#p3dcon2'));
            f_no($('#p3dcon3'));
        }
        if (p3dcon2 == p3num2) {
            cor++;
            f_ok($('#p3dcon4'));
            f_ok($('#p3dcon5'));
            f_ok($('#p3dcon6'));
        } else {
            inc++;
            f_no($('#p3dcon4'));
            f_no($('#p3dcon5'));
            f_no($('#p3dcon6'));
        }
        if (p3dcon3 == (p3num1 + p3num2)) {
            cor++;
            f_ok($('#p3dcon7'));
            f_ok($('#p3dcon8'));
            f_ok($('#p3dcon9'));
        } else {
            inc++;
            f_no($('#p3dcon7'));
            f_no($('#p3dcon8'));
            f_no($('#p3dcon9'));
        }
        if (p3dcon10 == (p3num1 + p3num2)) {
            cor++;
            f_ok($('#p3dcon10'));
        } else {
            inc++;
            f_no($('#p3dcon10'));
        }
        Calculo_nota();
    }
}