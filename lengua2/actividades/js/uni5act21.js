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
document.getElementById('nota1_2').addEventListener('keypress', () => {
        validNumero(0, 2, 1);
    });
    document.getElementById('nota1_2').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('nota1_2'), 2)
    });
document.getElementById('nota1_4').addEventListener('keypress', () => {
        validNumero(0, 3, 1);
    });
    document.getElementById('nota1_4').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('nota1_4'), 3)
    });
document.getElementById('nota1_5').addEventListener('keypress', () => {
        validNumero(0, 3, 1);
    });
    document.getElementById('nota1_5').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('nota1_5'), 3)
    });
document.getElementById('nota1_6').addEventListener('keypress', () => {
        validNumero(0, 2, 1);
    });
    document.getElementById('nota1_6').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('nota1_6'), 2)
    });
$('.pint1').click(function() {
        if ($(this).hasClass('pintar')) {
            $(this).removeClass('pintar')
        } else {
            $(this).addClass('pintar')
        }
    })
function f_iniciar() {
    
    bt_comprobar.addEventListener("click", preg1);
    function preg1() {
        cor = 0;
        var nota1_2 = $('#nota1_2').val();
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 2.')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (2 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            preg2();
        }
    }
    function preg2() {
        var nota1_4 = $('#nota1_4').val();
        if (!nota1_4) {
            alert('Ingrese la calificación en la pregunta 4.')
        } else {
            cor = cor + parseFloat(nota1_4);
            inc = inc + (3 - parseFloat(nota1_4));
            $('#nota1_4').val(parseFloat(nota1_4).toFixed(2));
            $('#nota1_4').attr('disabled', 'true');
            preg3();
        }
    }
    function preg3() {
        var nota1_5 = $('#nota1_5').val();
        if (!nota1_5) {
            alert('Ingrese la calificación en la pregunta 5.')
        } else {
            cor = cor + parseFloat(nota1_5);
            inc = inc + (3 - parseFloat(nota1_5));
            $('#nota1_5').val(parseFloat(nota1_5).toFixed(2));
            $('#nota1_5').attr('disabled', 'true');
            preg4();
        }
    }
    function preg4() {
        var nota1_6 = $('#nota1_6').val();
        if (!nota1_6) {
            alert('Ingrese la calificación en la pregunta 6.')
        } else {
            cor = cor + parseFloat(nota1_6);
            inc = inc + (2 - parseFloat(nota1_6));
            $('#nota1_6').val(parseFloat(nota1_6).toFixed(2));
            $('#nota1_6').attr('disabled', 'true');
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