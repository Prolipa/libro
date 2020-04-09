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
document.getElementById('nota1_12').addEventListener('keypress', () => {
    validNumero(0, 10, 1);
});
document.getElementById('nota1_12').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_12'), 10)
});

function f_iniciar() {
    
    bt_comprobar.addEventListener("click", preg12);
    function preg12() {
        cor = 0;
        var nota1_12 = $('#nota1_12').val();
        if (!nota1_12) {
            alert('Ingrese la calificación en la pregunta 12.')
        } else {
            cor = cor + parseFloat(nota1_12);
            inc = inc + (10 - parseFloat(nota1_12));
            $('#nota1_12').val(parseFloat(nota1_12).toFixed(2));
            $('#nota1_12').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg12);
        
        Calculo_nota();
    }
}