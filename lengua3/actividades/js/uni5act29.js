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
    validNumero(0, 5, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 5)
});

function f_iniciar() {
    
    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        var nota1_1 = $('#nota1_1').val();
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 1.')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (5 - parseFloat(nota1_1));
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
        var p2im1=$('#p2im1').val();
        var p2im2=$('#p2im2').val();
        var p2im3=$('#p2im3').val();
        var p2im4=$('#p2im4').val();
        var p2cont1=0;
        if (p2im1=='singular') {
            p2cont1++;
            f_ok($('#p2im1'));
        }else{
            p2cont1;
            f_no($('#p2im1'));
        }
        if (p2im2=='plural') {
            p2cont1++;
            f_ok($('#p2im2'));
        }else{
            p2cont1;
            f_no($('#p2im2'));
        }
        if (p2im3=='singular') {
            p2cont1++;
            f_ok($('#p2im3'));
        }else{
            p2cont1;
            f_no($('#p2im3'));
        }
        if (p2im4=='plural') {
            p2cont1++;
            f_ok($('#p2im4'));
        }else{
            p2cont1;
            f_no($('#p2im4'));
        }
        var result2 = (p2cont1 * 5) / 4;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        Calculo_nota();
    }
}