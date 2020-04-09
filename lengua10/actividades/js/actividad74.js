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
    validNumero(0, 6, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 6)
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
            alert('Ingrese la calificación en el tercer literal.')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (6 - parseFloat(nota1_1));
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
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        if (p1dcon1=='4') {
            cor++;
            cor++;
            f_ok($('#p1dcon1'));
        }else{
            inc++;
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2=='5') {
            cor++;
            cor++;
            f_ok($('#p1dcon2'));
        }else{
            inc++;
            inc++;
            f_no($('#p1dcon2'));
        }
        Calculo_nota();
    }
}