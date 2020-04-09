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
    validNumero(0, 4, 1);
});
document.getElementById('nota1_5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_5'), 4)
});

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
            $('.enc8').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            break;
        case '1 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc8').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc8').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            break;
        case '1 enc4':
            $('.enc4').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc8').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            break;
        case '1 enc5':
            $('.enc5').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc8').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            break;
        case '1 enc6':
            $('.enc6').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc8').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            break;
        case '1 enc7':
            $('.enc7').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc8').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            break;
        case '1 enc8':
            $('.enc8').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            break;
        case '1 enc9':
            $('.enc9').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc8').removeClass('encierra');
            break;
    }
});

function f_iniciar() {
    
    var p4vec1 = [
        '<div style="padding: 10px; display: inline-block;" class="1 enc1"><img src="img/i4_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="1"></div>',
        '<div style="padding: 10px; display: inline-block;" class="1 enc2"><img src="img/i5_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="2"></div>',
        '<div style="padding: 10px; display: inline-block;" class="1 enc3"><img src="img/i6_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="3"></div>',
        '<div style="padding: 10px; display: inline-block;" class="1 enc4"><img src="img/i7_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="4"></div>',
        '<div style="padding: 10px; display: inline-block;" class="1 enc5"><img src="img/i8_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="5"></div>',
        '<div style="padding: 10px; display: inline-block;" class="1 enc6"><img src="img/i9_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="6"></div>',
        '<div style="padding: 10px; display: inline-block;" class="1 enc7"><img src="img/i10_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="7"></div>',
        '<div style="padding: 10px; display: inline-block;" class="1 enc8"><img src="img/i11_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="8"></div>',
        '<div style="padding: 10px; display: inline-block;" class="1 enc9"><img src="img/i12_p190_u5a2.jpg" class="img-responsive" style="mix-blend-mode: multiply;" alt="9"></div>',
    ];
    p4vec1.sort(f_randomico);
    $('#p4res1').html(p4vec1).addClass(claseAnimada);
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
            inc = inc + (4 - parseFloat(nota1_5));
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
        
        Calculo_nota();
    }
}