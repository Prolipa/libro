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
    
    bt_comprobar.addEventListener("click", preg3);
    function preg3() {
        cor = 0;
        var pre3a = $('#pre3a').val();
        if (!pre3a) {
            alert('Ingrese la calificación en la Pregunta 3.')
        } else {
            cor = cor + parseFloat(pre3a);
            inc = inc + (2 - parseFloat(pre3a));
            $('#pre3a').val(parseFloat(pre3a).toFixed(2));
            $('#pre3a').attr('disabled', 'true');
            preg6();
        }

    }
    function preg6() {
        var pre6a = $('#pre6a').val();
        if (!pre6a) {
            alert('Ingrese la calificación en la Pregunta 6.')
        } else {
            cor = cor + parseFloat(pre6a);
            inc = inc + (2 - parseFloat(pre6a));
            $('#pre6a').val(parseFloat(pre6a).toFixed(2));
            $('#pre6a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg3);
        var p4dcon1=$('#p4dcon1').val();
        var p4dcon2=$('#p4dcon2').val();
        var p4dcon3=$('#p4dcon3').val();
        var p4dcon4=$('#p4dcon4').val();
        var p4dcon5=$('#p4dcon5').val();
        var p4dcon6=$('#p4dcon6').val();
        var p4cont1=0;
        if (p4dcon1=='enero') {
            p4cont1++;
            f_ok($('#p4dcon1'));
        }else{
            p4cont1;
            f_no($('#p4dcon1'));
        }
        if (p4dcon2=='diciembre') {
            p4cont1++;
            f_ok($('#p4dcon2'));
        }else{
            p4cont1;
            f_no($('#p4dcon2'));
        }
        if (p4dcon3=='abril') {
            p4cont1++;
            f_ok($('#p4dcon3'));
        }else{
            p4cont1;
            f_no($('#p4dcon3'));
        }
        if (p4dcon4=='mayo') {
            p4cont1++;
            f_ok($('#p4dcon4'));
        }else{
            p4cont1;
            f_no($('#p4dcon4'));
        }
        if (p4dcon5=='12') {
            p4cont1++;
            f_ok($('#p4dcon5'));
        }else{
            p4cont1;
            f_no($('#p4dcon5'));
        }
        if (p4dcon6=='24') {
            p4cont1++;
            f_ok($('#p4dcon6'));
        }else{
            p4cont1;
            f_no($('#p4dcon6'));
        }
        var p4vec1=['enero','marzo','mayo','julio','agosto','octubre','diciembre'];
        for (var i = 0; i < 7; i++) {
            var p4res1=$('#p4dcon'+(i+7)).val();
            var p4cont2=0;
            for (var j = 0; j < 7; j++) {
                if (p4res1==p4vec1[j]) {
                    p4cont2++;
                }
            }
            if (p4cont2=='1') {
                p4cont1++;
                f_ok($('#p4dcon'+(i+7)));
            }else{
                p4cont1;
                f_no($('#p4dcon'+(i+7)));
            }
        }
        var result4 = (p4cont1 * 2) / 13;
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#pre4a').val(result4.toFixed(2));
        $('#pre4a').css('display', '');

        var p5vec1=['liviano','pesado','pesado','liviano','liviano','pesado'];
        var p5cont1=0;
        for (var i = 0; i < p5vec1.length; i++) {
            var p5res1=$('#p5dcon'+(i+1)).val();
            if (p5res1==p5vec1[i]) {
                p5cont1++;
                f_ok($('#p5dcon'+(i+1)));
            }else{
                p5cont1;
                f_no($('#p5dcon'+(i+1)));
            }
        }
        var result5 = (p5cont1 * 2) / 6;
        cor = cor + result5;
        inc = inc + (2 - result5);
        $('#pre5a').val(result5.toFixed(2));
        $('#pre5a').css('display', '');

        var p7dcon1=$('#p7dcon1').val();
        var p7dcon2=$('#p7dcon2').val();
        var p7cont1=0;
        if (p7dcon1=='7') {
            p7cont1++;
            f_ok($('#p7dcon1'));
        }else{
            p7cont1;
            f_no($('#p7dcon1'));
        }
        if (p7dcon2=='4') {
            p7cont1++;
            f_ok($('#p7dcon2'));
        }else{
            p7cont1;
            f_no($('#p7dcon2'));
        }
        var result7 = (p7cont1 * 2) / 2;
        cor = cor + result7;
        inc = inc + (2 - result7);
        $('#pre7a').val(result7.toFixed(2));
        $('#pre7a').css('display', '');
        Calculo_nota();
    }
}