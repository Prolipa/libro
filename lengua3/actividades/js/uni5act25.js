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
    sopa = 0,
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
    validNumero(0, 4, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 4)
});

function f_iniciar() {

    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        if ($('#1').val().toLowerCase() == 'realizó') {
            $('#1').addClass('correcto');
            cor = cor + 1;
        } else {
            $('#1').addClass('incorrecto');
        }
        if ($('#2').val().toLowerCase() == 'pintaron') {
            $('#2').addClass('correcto');
            cor = cor + 1;
        } else {
            $('#2').addClass('incorrecto');
        }
        if ($('#3').val().toLowerCase() == 'limpiaron') {
            $('#3').addClass('correcto');
            cor = cor + 1;
        } else {
            $('#3').addClass('incorrecto');
        }
        if ($('#4').val().toLowerCase() == 'empezó') {
            $('#4').addClass('correcto');
            cor = cor + 1;
        } else {
            $('#4').addClass('incorrecto');
        }
        if ($('#5').val().toLowerCase() == 'finalizó' || $('#5').val().toLowerCase() == 'terminó') {
            $('#5').addClass('correcto');
            cor = cor + 1;
        } else {
            $('#5').addClass('incorrecto');
        }
        if ($('#6').val().toLowerCase() == 'fue') {
            $('#6').addClass('correcto');
            cor = cor + 1;
        } else {
            $('#6').addClass('incorrecto');
        }
        var nota1 = ((cor / 6) * 4);
        $('#nota1_1').val(nota1);
        $('#nota1_1').addClass('correcto');
        $('#nota1_2').addClass('correcto');
        /*if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 1.')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (4 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            f_comprobar();
        }*/
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var result2 = (sopa * 6) / 6;
        cor = cor + result2;
        inc = inc + (6 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');

        Calculo_nota();

    }
}