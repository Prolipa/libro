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

function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        var p1dcon3=$('#p1dcon3').val();
        var p1dcon4=$('#p1dcon4').val();
        var p1dcon5=$('#p1dcon5').val();
        var p1cont1=0;
        if (p1dcon1=='la manzana' || p1dcon1=='las manzanas' || p1dcon1=='manzana' || p1dcon1=='manzanas') {
            p1cont1++;
            f_ok($('#p1dcon1'));
        }else{
            p1cont1;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2=='la sandía' || p1dcon2=='sandía' || p1dcon2=='las sandías' || p1dcon2=='sandías') {
            p1cont1++;
            f_ok($('#p1dcon2'));
        }else{
            p1cont1;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3=='la naranja' || p1dcon3=='naranja' || p1dcon3=='las naranjas' || p1dcon3=='naranjas') {
            p1cont1++;
            f_ok($('#p1dcon3'));
        }else{
            p1cont1;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4=='3') {
            p1cont1++;
            f_ok($('#p1dcon4'));
        }else{
            p1cont1;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5=='22') {
            p1cont1++;
            f_ok($('#p1dcon5'));
        }else{
            p1cont1;
            f_no($('#p1dcon5'));
        }
        var result1 = (p1cont1 * 5) / 5;
        cor = cor + result1;
        inc = inc + (5 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2dcon1=$('#p2dcon1').val();
        var p2dcon2=$('#p2dcon2').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2dcon4=$('#p2dcon4').val();
        var p2dcon5=$('#p2dcon5').val();
        var p2dcon6=$('#p2dcon6').val();
        var p2dcon7=$('#p2dcon7').val();
        var p2dcon8=$('#p2dcon8').val();
        var p2cont1=0;
        if (p2dcon1=='llll') {
            p2cont1++;
            f_ok($('#p2dcon1'));
        }else{
            p2cont1;
            f_no($('#p2dcon1'));
        }
        if (p2dcon3=='lllllll') {
            p2cont1++;
            f_ok($('#p2dcon3'));
        }else{
            p2cont1;
            f_no($('#p2dcon3'));
        }
        if (p2dcon5=='ll') {
            p2cont1++;
            f_ok($('#p2dcon5'));
        }else{
            p2cont1;
            f_no($('#p2dcon5'));
        }
        if (p2dcon7=='lllll') {
            p2cont1++;
            f_ok($('#p2dcon7'));
        }else{
            p2cont1;
            f_no($('#p2dcon7'));
        }
        if (p2dcon2=='4') {
            p2cont1++;
            f_ok($('#p2dcon2'));
        }else{
            p2cont1;
            f_no($('#p2dcon2'));
        }
        if (p2dcon4=='7') {
            p2cont1++;
            f_ok($('#p2dcon4'));
        }else{
            p2cont1;
            f_no($('#p2dcon4'));
        }
        if (p2dcon6=='2') {
            p2cont1++;
            f_ok($('#p2dcon6'));
        }else{
            p2cont1;
            f_no($('#p2dcon6'));
        }
        if (p2dcon8=='5') {
            p2cont1++;
            f_ok($('#p2dcon8'));
        }else{
            p2cont1;
            f_no($('#p2dcon8'));
        }
        var result2 = (p2cont1 * 5) / 8;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}