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
document.getElementById('pre5a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre5a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre5a'), 2)
});
function f_iniciar() {
    
    bt_comprobar.addEventListener("click", pregE);
    function pregE() {
        cor = 0;
        var pre5a = $('#pre5a').val();
        if (!pre5a) {
            alert('Ingrese la calificación en el literal e.')
        } else {
            cor = cor + parseFloat(pre5a);
            inc = inc + (2 - parseFloat(pre5a));
            $('#pre5a').val(parseFloat(pre5a).toFixed(2));
            $('#pre5a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", pregE);
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        var p1dcon3=$('#p1dcon3').val();
        var p1dcon4=$('#p1dcon4').val();
        var p1dcon5=$('#p1dcon5').val();
        if (p1dcon1=='martes') {
            cor=cor+2;
            $('#pre1a').val('2.00');
            f_ok($('#p1dcon1'));
        }else{
            inc=inc+2;
            $('#pre1a').val('0.00');
            f_no($('#p1dcon1'));
        }
        if (p1dcon2=='jueves') {
            cor=cor+2;
            $('#pre2a').val('2.00');
            f_ok($('#p1dcon2'));
        }else{
            inc=inc+2;
            $('#pre2a').val('0.00');
            f_no($('#p1dcon2'));
        }
        if (p1dcon3=='viernes') {
            cor=cor+2;
            $('#pre3a').val('2.00');
            f_ok($('#p1dcon3'));
        }else{
            inc=inc+2;
            $('#pre3a').val('0.00');
            f_no($('#p1dcon3'));
        }
        var p1v1=0;
        if (p1dcon4=='7') {
            p1v1++;
            f_ok($('#p1dcon4'));
        }else{
            p1v1;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5=='14') {
            p1v1++;
            f_ok($('#p1dcon5'));
        }else{
            p1v1;
            f_no($('#p1dcon5'));
        }
        cor=cor+p1v1;
        inc=inc+(2-p1v1);
        $('#pre4a').val(p1v1.toFixed(2));
        Calculo_nota();
    }
}