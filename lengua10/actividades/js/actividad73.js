var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 2)
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {

    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        var nota1_1 = $('#nota1_1').val();
        if (!nota1_1) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (2 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            preg2();
        }

    }
    function preg2() {
        var nota1_2 = $('#nota1_2').val();
        if (!nota1_2) {
            alert('Ingrese la calificación en el literal.')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (2 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            preg3();
        }

    }
    function preg3() {
        var nota1_3 = $('#nota1_3').val();
        if (!nota1_3) {
            alert('Ingrese la calificación en el literal.')
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
        bt_comprobar.removeEventListener("click", preg1);
        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2dcon4=$('#p2dcon4').val();
        if (p2dcon1=='25') {
            cor++;
            f_ok($('#p2dcon1'));
        }else{
            inc++;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2=='60') {
            cor++;
            f_ok($('#p2dcon2'));
        }else{
            inc++;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3=='aretes') {
            cor++;
            f_ok($('#p2dcon3'));
        }else{
            inc++;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4=='2015') {
            cor++;
            f_ok($('#p2dcon4'));
        }else{
            inc++;
            f_no($('#p2dcon4'));
        }
        Calculo_nota();
    }
}