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
        case '1 p4im1':
            $('.p4im1').addClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            break;
        case '1 p4im2':
            $('.p4im2').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            break;
        case '1 p4im3':
            $('.p4im3').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im4').removeClass('pintar');
            break;
        case '1 p4im4':
            $('.p4im4').addClass('pintar');
            $('.p4im1').removeClass('pintar');
            $('.p4im2').removeClass('pintar');
            $('.p4im3').removeClass('pintar');
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
            break;
        case '2 p41im2':
            $('.p41im2').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            break;
        case '2 p41im3':
            $('.p41im3').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im4').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            break;
        case '2 p41im4':
            $('.p41im4').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
            $('.p41im5').removeClass('pintar');
            break;
        case '2 p41im5':
            $('.p41im5').addClass('pintar');
            $('.p41im1').removeClass('pintar');
            $('.p41im2').removeClass('pintar');
            $('.p41im3').removeClass('pintar');
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
            break;
        case '3 p42im2':
            $('.p42im2').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            break;
        case '3 p42im3':
            $('.p42im3').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im4').removeClass('pintar');
            break;
        case '3 p42im4':
            $('.p42im4').addClass('pintar');
            $('.p42im1').removeClass('pintar');
            $('.p42im2').removeClass('pintar');
            $('.p42im3').removeClass('pintar');
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
            $('.p43im5').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im2':
            $('.p43im2').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im3':
            $('.p43im3').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im4':
            $('.p43im4').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im5':
            $('.p43im5').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            $('.p43im6').removeClass('pintar');
            break;
        case '4 p43im6':
            $('.p43im6').addClass('pintar');
            $('.p43im1').removeClass('pintar');
            $('.p43im2').removeClass('pintar');
            $('.p43im3').removeClass('pintar');
            $('.p43im4').removeClass('pintar');
            $('.p43im5').removeClass('pintar');
            break;
    }
});

$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 p5enc1':
            $('.p5enc1').addClass('pintar');
            $('.p5enc2').removeClass('pintar');
            $('.p5enc3').removeClass('pintar');
            $('.p5enc4').removeClass('pintar');
            $('.p5enc5').removeClass('pintar');
            break;
        case '5 p5enc2':
            $('.p5enc2').addClass('pintar');
            $('.p5enc1').removeClass('pintar');
            $('.p5enc3').removeClass('pintar');
            $('.p5enc4').removeClass('pintar');
            $('.p5enc5').removeClass('pintar');
            break;
        case '5 p5enc3':
            $('.p5enc3').addClass('pintar');
            $('.p5enc1').removeClass('pintar');
            $('.p5enc2').removeClass('pintar');
            $('.p5enc4').removeClass('pintar');
            $('.p5enc5').removeClass('pintar');
            break;
        case '5 p5enc4':
            $('.p5enc4').addClass('pintar');
            $('.p5enc1').removeClass('pintar');
            $('.p5enc2').removeClass('pintar');
            $('.p5enc3').removeClass('pintar');
            $('.p5enc5').removeClass('pintar');
            break;
        case '5 p5enc5':
            $('.p5enc5').addClass('pintar');
            $('.p5enc1').removeClass('pintar');
            $('.p5enc2').removeClass('pintar');
            $('.p5enc3').removeClass('pintar');
            $('.p5enc4').removeClass('pintar');
            break;
    }
});
$('.6').click(function() {
    switch ($(this).attr('class')) {
        case '6 p51enc1':
            $('.p51enc1').addClass('pintar');
            $('.p51enc2').removeClass('pintar');
            $('.p51enc3').removeClass('pintar');
            $('.p51enc4').removeClass('pintar');
            $('.p51enc5').removeClass('pintar');
            break;
        case '6 p51enc2':
            $('.p51enc2').addClass('pintar');
            $('.p51enc1').removeClass('pintar');
            $('.p51enc3').removeClass('pintar');
            $('.p51enc4').removeClass('pintar');
            $('.p51enc5').removeClass('pintar');
            break;
        case '6 p51enc3':
            $('.p51enc3').addClass('pintar');
            $('.p51enc1').removeClass('pintar');
            $('.p51enc2').removeClass('pintar');
            $('.p51enc4').removeClass('pintar');
            $('.p51enc5').removeClass('pintar');
            break;
        case '6 p51enc4':
            $('.p51enc4').addClass('pintar');
            $('.p51enc1').removeClass('pintar');
            $('.p51enc2').removeClass('pintar');
            $('.p51enc3').removeClass('pintar');
            $('.p51enc5').removeClass('pintar');
            break;
        case '6 p51enc5':
            $('.p51enc5').addClass('pintar');
            $('.p51enc1').removeClass('pintar');
            $('.p51enc2').removeClass('pintar');
            $('.p51enc3').removeClass('pintar');
            $('.p51enc4').removeClass('pintar');
            break;
    }
});
function f_iniciar() {
    var p4vec1 = [
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i4_p214_u5a14.jpg" class="img-responsive">' +
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
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i5_p214_u5a14.jpg" class="img-responsive">' +
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
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i6_p214_u5a14.jpg" class="img-responsive">' +
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
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>',
        '<div style="display: inline-block; padding:10px;">' +
        '<img src="img/i7_p214_u5a14.jpg" class="img-responsive">' +
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
        '<td>' +
        '<div class="4 p43im5" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="35">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div class="4 p43im6" style="width: 40px; height: 40px; border: 2px solid #009BDB; padding: 30%;" align="center" id="36">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</div>'
    ];
    p4vec1.sort(f_randomico);
    $('#p4im1').html(p4vec1);

    var p5vec1=[
    '<div class="5 p5enc1" style="display:inline-block;"><img src="img/i8_p214_u5a14.jpg" alt="1" class="img-responsive" style="mix-blend-mode:multiply;"></div>',
    '<div class="5 p5enc2" style="display:inline-block;"><img src="img/i9_p214_u5a14.jpg" alt="2" class="img-responsive" style="mix-blend-mode:multiply;"></div>',
    '<div class="5 p5enc3" style="display:inline-block;"><img src="img/i10_p214_u5a14.jpg" alt="3" class="img-responsive" style="mix-blend-mode:multiply;"></div>',
    '<div class="5 p5enc4" style="display:inline-block;"><img src="img/i11_p214_u5a14.jpg" alt="4" class="img-responsive" style="mix-blend-mode:multiply;"></div>',
    '<div class="5 p5enc5" style="display:inline-block;"><img src="img/i12_p214_u5a14.jpg" alt="5" class="img-responsive" style="mix-blend-mode:multiply;"></div>'
    ];
    p5vec1.sort(f_randomico);
    $('#p5im1').html(p5vec1);
    var p5vec2=[
    '<div class="6 p51enc1" style="display:inline-block;"><img src="img/i13_p214_u5a14.jpg" alt="1" class="img-responsive" style="mix-blend-mode:multiply;"></div>',
    '<div class="6 p51enc2" style="display:inline-block;"><img src="img/i14_p214_u5a14.jpg" alt="2" class="img-responsive" style="mix-blend-mode:multiply;"></div>',
    '<div class="6 p51enc3" style="display:inline-block;"><img src="img/i11_p214_u5a14.jpg" alt="3" class="img-responsive" style="mix-blend-mode:multiply;"></div>',
    '<div class="6 p51enc4" style="display:inline-block;"><img src="img/i15_p214_u5a14.jpg" alt="4" class="img-responsive" style="mix-blend-mode:multiply;"></div>',
    '<div class="6 p51enc5" style="display:inline-block;"><img src="img/i16_p214_u5a14.jpg" alt="5" class="img-responsive" style="mix-blend-mode:multiply;"></div>'
    ];
    p5vec2.sort(f_randomico);
    $('#p5im2').html(p5vec2);
    bt_comprobar.addEventListener("click", preg3);
    function preg3() {
        cor = 0;
        var nota1_3 = $('#nota1_3').val();
        if (!nota1_3) {
            alert('Ingrese la calificación en la pregunta 3.')
        } else {
            cor = cor + parseFloat(nota1_3);
            inc = inc + (4 - parseFloat(nota1_3));
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
            if (p4cim2 == '11') {
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
            if (p4cim3 == '23') {
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
            if (p4cim4 == '35') {
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

        var p5im1 = $('#p5im1 .pintar img').attr('alt');
        var p5im2 = $('#p5im2 .pintar img').attr('alt');
        var p5cont1=0;
        if (!p5im1) {
            p5cont1;
            f_no($('.5'));
        } else {
            if (p5im1 == '4') {
                p5cont1++;
                $('#p5im1 .pintar').addClass('valid');
                $('#p5im1 .pintar').removeClass('pintar');
            } else {
                p5cont1;
                $('#p5im1 .pintar').addClass('no-valid');
                $('#p5im1 .pintar').removeClass('pintar');
            }
        }
        if (!p5im2) {
            p5cont1;
            f_no($('.6'));
        } else {
            if (p5im2 == '2') {
                p5cont1++;
                $('#p5im2 .pintar').addClass('valid');
                $('#p5im2 .pintar').removeClass('pintar');
            } else {
                p5cont1;
                $('#p5im2 .pintar').addClass('no-valid');
                $('#p5im2 .pintar').removeClass('pintar');
            }
        }
        var result5 = (p5cont1 * 3) / 2;
        cor = cor + result5;
        inc = inc + (3 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display', '');
        Calculo_nota();
    }
}