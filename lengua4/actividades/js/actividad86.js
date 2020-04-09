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
$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});
document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 1)
});
document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 2)
});
document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 1)
});
document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 1)
});
document.getElementById('nota6').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota6'), 1)
});
document.getElementById('nota7').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota7'), 1.5)
});
function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
for (var i = 0; i < 31; i++) {
    $('#p5im' + (i + 1)).click(function() {

        if ($(this).hasClass('pintar1')) {
            $(this).removeClass('pintar1')


        } else {
            $(this).addClass('pintar1')

        }

    })
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('encierra2');
            $('.enc2').removeClass('encierra2');
            $('.enc3').removeClass('encierra2');
            break;
        case '1 enc2':
            $('.enc2').addClass('encierra2');
            $('.enc1').removeClass('encierra2');
            $('.enc3').removeClass('encierra2');
            break;
        case '1 enc3':
            $('.enc3').addClass('encierra2');
            $('.enc1').removeClass('encierra2');
            $('.enc2').removeClass('encierra2');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc4':
            $('.enc4').addClass('encierra2');
            $('.enc5').removeClass('encierra2');
            $('.enc6').removeClass('encierra2');
            break;
        case '2 enc5':
            $('.enc5').addClass('encierra2');
            $('.enc4').removeClass('encierra2');
            $('.enc6').removeClass('encierra2');
            break;
        case '2 enc6':
            $('.enc6').addClass('encierra2');
            $('.enc4').removeClass('encierra2');
            $('.enc5').removeClass('encierra2');
            break;
    }
});

function f_iniciar() {
    var p5vec1 = ['5', '7', '9'];
    var p5vec2 = ['agudas', 'graves', 'esdrújulas'];
    p5vec1.sort(f_randomico);
    p5vec2.sort(f_randomico);
    for (var i = 0; i < p5vec1.length; i++) {
        $('.enc' + (i + 1)).text(p5vec1[i]);
        $('.enc' + (i + 4)).text(p5vec2[i]);
    }
    bt_comprobar.addEventListener("click", f_preg1);

    function f_preg1() {
        var nota1 = $('#nota1').val();
        cor = 0;
        inc = 0;
        if (!nota1) {
            alert('Ingrese la calificación en la pregunta 1')
        } else {
            cor = cor + parseFloat(nota1);
            inc = inc + (1 - parseFloat(nota1));
            $('#nota1').val(parseFloat(nota1).toFixed(2));
            $('#nota1').attr('disabled', 'true');
            f_preg2();
        }
    }

    function f_preg2() {
        var nota2 = $('#nota2').val();
        if (!nota2) {
            alert('Ingrese la calificación en la pregunta 2')
        } else {
            cor = cor + parseFloat(nota2);
            inc = inc + (1 - parseFloat(nota2));
            $('#nota2').val(parseFloat(nota2).toFixed(2));
            $('#nota2').attr('disabled', 'true');
            f_preg3();
        }
    }

    function f_preg3() {
        var nota3 = $('#nota3').val();
        if (!nota3) {
            alert('Ingrese la calificación en la pregunta 3')
        } else {
            cor = cor + parseFloat(nota3);
            inc = inc + (1 - parseFloat(nota3));
            $('#nota3').val(parseFloat(nota3).toFixed(2));
            $('#nota3').attr('disabled', 'true');
            f_preg4();
        }
    }

    function f_preg4() {
        var nota4 = $('#nota4').val();
        if (!nota4) {
            alert('Ingrese la calificación en la pregunta 4')
        } else {
            cor = cor + parseFloat(nota4);
            inc = inc + (1 - parseFloat(nota4));
            $('#nota4').val(parseFloat(nota4).toFixed(2));
            $('#nota4').attr('disabled', 'true');
            f_preg6();
        }
    }
    function f_preg6() {
        var nota6 = $('#nota6').val();
        if (!nota6) {
            alert('Ingrese la calificación en la pregunta 6')
        } else {
            cor = cor + parseFloat(nota6);
            inc = inc + (1 - parseFloat(nota6));
            $('#nota6').val(parseFloat(nota6).toFixed(2));
            $('#nota6').attr('disabled', 'true');
            f_preg7();
        }
    }
    function f_preg7() {
        var nota7 = $('#nota7').val();
        if (!nota7) {
            alert('Ingrese la calificación en la pregunta 7')
        } else {
            cor = cor + parseFloat(nota7);
            inc = inc + (1.5 - parseFloat(nota7));
            $('#nota7').val(parseFloat(nota7).toFixed(2));
            $('#nota7').attr('disabled', 'true');
            f_preg8();
        }
    }
    function f_preg8() {
        var nota8 = $('#nota8').val();
        if (!nota8) {
            alert('Ingrese la calificación en la pregunta 8')
        } else {
            cor = cor + parseFloat(nota8);
            inc = inc + (1.5 - parseFloat(nota8));
            $('#nota8').val(parseFloat(nota8).toFixed(2));
            $('#nota8').attr('disabled', 'true');
            f_comprobar();
        }
    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg1);

        var p5dcon1 = [];
        var p5dcon2 = [];
        for (var i = 0; i < 31; i++) {
            if ($('#p5im' + (i + 1)).hasClass('pintar1')) {
                p5dcon1.push($('#p5im' + (i + 1)).text());
                p5dcon2.push((i + 1));
            }
        }
        var p5aux1 = ['puede', 'variados', 'deliciosos', 'agrio', 'aguacate', 'piedra', 'tradicional'];
        var p5cont2 = 0;
        if (p5dcon1.length <= 7 && p5dcon1.length > 0) {
            for (var i = 0; i < p5dcon1.length; i++) {
                var p5cont1 = 0;
                for (var j = 0; j < p5aux1.length; j++) {
                    if (p5dcon1[i] == p5aux1[j]) {
                        p5cont1++;
                    }
                }
                if (p5cont1 == '1') {
                    p5cont2++;
                    f_ok($('#p5im' + p5dcon2[i]));
                } else {
                    p5cont2;
                    f_no($('#p5im' + p5dcon2[i]));
                }
            }
        } else {
            p5cont2;
            for (var i = 0; i < 31; i++) {
                f_no($('#p5im' + (i + 1)));
            }
        }
        var p5en1 = $('#p5ens1 .encierra2').text();
        var p5en2 = $('#p5ens2 .encierra2').text();
        if (!p5en1) {
            p5cont2;
            f_no($('.enc1'));
            f_no($('.enc2'));
            f_no($('.enc3'));
        } else {
            if (p5en1 == '7') {
                p5cont2++;
                f_ok($('#p5ens1 .encierra2'))
            } else {
                p5cont2;
                f_no($('#p5ens1 .encierra2'));
            }
        }
        if (!p5en2) {
            p5cont2;
            f_no($('.enc4'));
            f_no($('.enc5'));
            f_no($('.enc6'));
        } else {
            if (p5en2 == 'graves') {
                p5cont2++;
                f_ok($('#p5ens2 .encierra2'))
            } else {
                p5cont2;
                f_no($('#p5ens2 .encierra2'));
            }
        }
        result5 = (p5cont2 * 1) / 9;
        $('#nota5').val(result5.toFixed(2));
        cor = cor + result5;
        inc = inc + (1 - result5);
        Calculo_nota();
    }
}