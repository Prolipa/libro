var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 5,
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

function f_iniciar() {
    var p1vec1 = [parseInt((Math.random() * 400) + 100), (parseInt((Math.random() * 8) + 2)+'0')];
    $('#p1im1').text(p1vec1[0]);
    $('#p1im2').text(p1vec1[1]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon3=$('#p1dcon3').val();
        var p1dcon4=$('#p1dcon4').val();
        if (p1dcon1==p1vec1[0] && p1dcon3==(p1vec1[0]*100)) {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon3'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon3'));
        }
        if (p1dcon4==(p1vec1[0]*100)) {
            cor++;
            f_ok($('#p1dcon4'));
        }else{
            inc++;
            f_no($('#p1dcon4'));
        }
        var p2dcon1=$('#p2dcon1').val();
        var p2dcon3=$('#p2dcon3').val();
        var p2dcon4=$('#p2dcon4').val();
        var p2dcon5=$('#p2dcon5').val();
        if (p2dcon1==p1vec1[1] && p2dcon3==(p1vec1[1]*500)) {
            cor++;
            f_ok($('#p2dcon1'));
            f_ok($('#p2dcon3'));
        }else{
            inc++;
            f_no($('#p2dcon1'));
            f_no($('#p2dcon3'));
        }
        if (p2dcon4==(p1vec1[1])) {
            cor++;
            f_ok($('#p2dcon4'));
        }else{
            inc++;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5==(parseInt(p1vec1[1])*500)) {
            cor++;
            f_ok($('#p2dcon5'));
        }else{
            inc++;
            f_no($('#p2dcon5'));
        }
        Calculo_nota();
    }
}




