var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str2 = '',
    str3 = '',
    str4 = '',
    calificacion = 10;

var t1 = 0;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('pre3a').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('pre3a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre3a'), 3)
});
function f_iniciar() {
    
    bt_comprobar.addEventListener("click", preg3);
    function preg3() {
        cor = 0;
        var pre3a = $('#pre3a').val();
        if (!pre3a) {
            alert('Ingrese la calificación en la Pregunta 3.')
        } else {
            cor = cor + parseFloat(pre3a);
            inc = inc + (3 - parseFloat(pre3a));
            $('#pre3a').val(parseFloat(pre3a).toFixed(2));
            $('#pre3a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg3);
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        var p1cont1=0;
        if (p1dcon1=='12') {
            p1cont1++;
            f_ok($('#p1dcon1'));
        }else{
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2=='20') {
            p1cont1++;
            f_ok($('#p1dcon2'));
        }else{
            p1cont1;
            f_no($('#p1dcon2'));
        }
        var result1 = (p1cont1 * 3) / 2;
        cor = cor + result1;
        inc = inc + (3 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');
        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2cont1=0;
        if (p2dcon1=='3') {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2=='4') {
            p2cont1++;
            f_ok($('#p2dcon2'));
        }else{
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3=='12') {
            p2cont1++;
            f_ok($('#p2dcon3'));
        }else{
            p2cont1;
            f_no($('#p2dcon3'));
        }
        var p2dcon4=$('#p2dcon4').val();
        var p2dcon5=$('#p2dcon5').val();
        var p2dcon6=$('#p2dcon6').val();
        if (p2dcon4=='6') {
            p2cont1++;
            f_ok($('#p2dcon4'));
        }else{
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5=='3') {
            p2cont1++;
            f_ok($('#p2dcon5'));
        }else{
            p2cont1;
            f_no($('#p2dcon5'));
        }
        if (p2dcon6=='18') {
            p2cont1++;
            f_ok($('#p2dcon6'));
        }else{
            p2cont1;
            f_no($('#p2dcon6'));
        }
        var result2 = (p2cont1 * 4) / 6;
        cor = cor + result2;
        inc = inc + (4 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}