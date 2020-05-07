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
document.getElementById('nota1_5').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_5'), 3)
});
for (var i = 0; i < 12; i++) {
    $('.enc' + (i + 1)).click(function() {
        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')
        } else {
            $(this).addClass('encierra')
        }
    })
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 p4im1':
            $('.p4im1').addClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            $('.p4im5').removeClass('pintar');
            $('.p4im6').removeClass('pintar');
            break;
        case '1 p4im2':
            $('.p4im2').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            $('.p4im5').removeClass('pintar');
            $('.p4im6').removeClass('pintar');
            break;
        case '1 p4im3':
            $('.p4im3').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            $('.p4im5').removeClass('pintar');
            $('.p4im6').removeClass('pintar');
            break;
        case '1 p4im4':
            $('.p4im4').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im5').removeClass('pintar');
            $('.p4im6').removeClass('pintar');
            break;
        case '1 p4im5':
            $('.p4im5').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            $('.p4im6').removeClass('pintar');
            break;
        case '1 p4im6':
            $('.p4im6').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im5').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p41im1':
            $('.p41im1').addClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im2':
            $('.p41im2').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im3':
            $('.p41im3').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im4':
            $('.p41im4').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im5':
            $('.p41im5').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im6':
            $('.p41im6').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im7':
            $('.p41im7').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im8').removeClass('pintar');
            break;
        case '2 p41im8':
            $('.p41im8').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            $('.p41im6').removeClass('pintar');
            $('.p41im7').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 p42im1':
            $('.p42im1').addClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im2':
            $('.p42im2').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im3':
            $('.p42im3').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im4':
            $('.p42im4').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im5':
            $('.p42im5').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im6':
            $('.p42im6').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im7':
            $('.p42im7').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            $('.p42im8').removeClass('pintar');
            break;
        case '3 p42im8':
            $('.p42im8').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im5').removeClass('pintar');
            $('.p42im6').removeClass('pintar');
            $('.p42im7').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 p43im1':
            $('.p43im1').addClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            break;
        case '4 p43im2':
            $('.p43im2').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            break;
        case '4 p43im3':
            $('.p43im3').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            break;
        case '4 p43im4':
            $('.p43im4').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            break;
    }
});

function f_iniciar() {
    var p3vec1 = [
        '<div style="display: inline-block;" class="11 enc1">' +
        '<img src="img/i2_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="1">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc2">' +
        '<img src="img/i3_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="2">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc3">' +
        '<img src="img/i4_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="3">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc4">' +
        '<img src="img/i5_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="4">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc5">' +
        '<img src="img/i6_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="5">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc6">' +
        '<img src="img/i7_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="6">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc7">' +
        '<img src="img/i8_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="7">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc8">' +
        '<img src="img/i9_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="8">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc9">' +
        '<img src="img/i10_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="9">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc10">' +
        '<img src="img/i11_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="10">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc11">' +
        '<img src="img/i12_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="11">' +
        '</div>',
        '<div style="display: inline-block;" class="11 enc12">' +
        '<img src="img/i13_p204_u5a10.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="12">' +
        '</div>'
    ];
    p3vec1.sort(f_randomico);
    $('#p3im1').html(p3vec1);

    var p4vec1 = [
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i7_p204_u5a10.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim1">' +
        '<td>' +
        '<div class="1 p4im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="1">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="1 p4im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="2">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="1 p4im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="3">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="1 p4im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="4">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="1 p4im5" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="5">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i14_p204_u5a10.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim2">' +
        '<td>' +
        '<div class="2 p41im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="11">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="12">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="13">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="14">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im5" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="15">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im6" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="16">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="2 p41im7" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="17">' +
        '</div>' +
        '</td>' +

        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i6_p204_u5a10.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim3">' +
        '<td>' +
        '<div class="3 p42im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="21">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="22">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="23">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="24">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im5" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="25">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im6" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="26">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="3 p42im7" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="27">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-3" align="center">' +
        '<div style="display: inline-block;">' +
        '<img src="img/i15_p204_u5a10.jpg" class="img-responsive">' +
        '</div>' +
        '<div style="display: inline-block;" class="table-responsive">' +
        '<table>' +
        '<tr id="p4cim4">' +
        '<td>' +
        '<div class="4 p43im1" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="31">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im2" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="32">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im3" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="33">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im4" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="34">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>'
    ];
    p4vec1.sort(f_randomico);
    $('#p4im1').html(p4vec1);
    bt_comprobar.addEventListener("click", preg5);

    function preg5() {
        cor = 0;
        var nota1_5 = $('#nota1_5').val();
        if (!nota1_5) {
            alert('Ingrese la calificación en la pregunta 5.')
        } else {
            cor = cor + parseFloat(nota1_5);
            inc = inc + (3 - parseFloat(nota1_5));
            $('#nota1_5').val(parseFloat(nota1_5).toFixed(2));
            $('#nota1_5').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg5);
        var p3vec1 = ['2', '3', '5', '6', '7', '8', '10', '11', '12'];
        var p3cont1 = 0;
        var p3cont3 = 0;
        var p3cont4 = 0;
        if ($('.encierra').length == 0) {
            f_no($('.11'));
            p3cont1 = 0;
        } else {
            for (var i = 0; i < 12; i++) {
                if ($('.enc' + (i + 1)).hasClass('encierra')) {
                    var p3res1 = $('.enc' + (i + 1) + ' img').attr('alt');
                    var p3cont2 = 0;
                    for (var j = 0; j < p3vec1.length; j++) {
                        if (p3res1 == p3vec1[j]) {
                            p3cont2++;
                        }
                    }
                    if (p3cont2 == '1') {
                        p3cont3++;
                        f_ok($('.enc' + (i + 1)));
                    } else if (p3cont2 == '0') {
                        p3cont4++;
                        f_no($('.enc' + (i + 1)));
                    }
                }
            }
        }
        if (p3cont3 < p3cont4) {
            p3cont1 = 0;
        } else {
            p3cont1 = p3cont3 - p3cont4;
        }
        var result3 = (p3cont1 * 4) / 9;
        cor = cor + result3;
        inc = inc + (4 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');

        var p4cim1 = $('#p4cim1 .pintar').attr('id');
        var p4cim2 = $('#p4cim2 .pintar').attr('id');
        var p4cim3 = $('#p4cim3 .pintar').attr('id');
        var p4cim4 = $('#p4cim4 .pintar').attr('id');
        var p4cont1 = 0;
        if (!p4cim1) {
            p4cont1;
            f_no($('.1'));
        } else {
            if (p4cim1 == '1') {
                p4cont1++;
                $('#p4cim1 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim1 .pintar').addClass('no-valid');
            }
        }
        if (!p4cim2) {
            p4cont1;
            f_no($('.2'));
        } else {
            if (p4cim2 == '14') {
                p4cont1++;
                $('#p4cim2 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim2 .pintar').addClass('no-valid');
            }
        }
        if (!p4cim3) {
            p4cont1;
            f_no($('.3'));
        } else {
            if (p4cim3 == '24') {
                p4cont1++;
                $('#p4cim3 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim3 .pintar').addClass('no-valid');
            }
        }
        if (!p4cim4) {
            p4cont1;
            f_no($('.4'));
        } else {
            if (p4cim4 == '31') {
                p4cont1++;
                $('#p4cim4 .pintar').addClass('valid');
            } else {
                p4cont1;
                $('#p4cim4 .pintar').addClass('no-valid');
            }
        }
        var result4 = (p4cont1 * 3) / 4;
        cor = cor + result4;
        inc = inc + (3 - result4);
        $('#nota1_4').val(result4.toFixed(2));
        $('#nota1_4').css('display', '');
        Calculo_nota();
    }
}