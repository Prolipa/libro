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
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});
for (var i =0; i < 6; i++) {
    $('.pint'+(i+1)).click(function(){

            if ($(this).hasClass('pintar1')) {
                $(this).removeClass('pintar1')
                

            }else{
                $(this).addClass('pintar1')
                
            }

        })    
}
function f_iniciar() {
    bt_comprobar.addEventListener("click", f_preg1);
    function f_preg1() {
        var nota1_1 = $('#nota1_1').val();
        cor=0;
        inc=0;
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 3')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (2 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            f_ok($('#nota1_1'));
            f_preg2();
        }
    }
    function f_preg2() {
        var nota1_2 = $('#nota1_2').val();
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 5')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (2 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            f_ok($('#nota1_2'));
            f_comprobar();
        }
    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg1);
        var p4vec1=['pensar','estrellas','soñar','ellas','limón','chichón'];
        for (var i = 0; i < p4vec1.length; i++) {
            resp1=$('#p4dcon'+(i+1)).val();
            if (resp1==p4vec1[i]) {
                cor++;
                f_ok($('#p4dcon'+(i+1)));
            }else{
                inc++;
                f_no($('#p4dcon'+(i+1)));
            }
        }
        Calculo_nota();
    }
}