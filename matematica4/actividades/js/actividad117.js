var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 8,
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
    var p1vec1 = parseInt((Math.random() * 200) + 100);
    var p1vec2 = [parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2)];
    $('#p1im1').text(p1vec1);
    $('#p1im2').text(p1vec2[0]);
    $('#p2im1').text(p1vec2[1]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=[$('#p1dcon1').val(),$('#p1dcon2').val(),$('#p1dcon3').val()];
        p1dcon1=p1dcon1.join('');
        var p1dcon2=$('#p1dcon6').val();
        var p1dcon3=[$('#p1dcon7').val(),$('#p1dcon8').val(),$('#p1dcon9').val(),$('#p1dcon10').val()];
        p1dcon3=p1dcon3.join('');
        var p1dcon4=$('#p1dcon11').val();
        if (p1dcon1==p1vec1) {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon2'));
            f_ok($('#p1dcon3'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon2'));
            f_no($('#p1dcon3'));
        }
        if (p1dcon2==p1vec2[0]) {
            cor++;
            f_ok($('#p1dcon6'));
        }else{
            inc++;
            f_no($('#p1dcon6'));
        }
        if (p1dcon3==(p1vec1*p1vec2[0])) {
            cor++;
            f_ok($('#p1dcon7'));
            f_ok($('#p1dcon8'));
            f_ok($('#p1dcon9'));
            f_ok($('#p1dcon10'));
        }else{
            inc++;
            f_no($('#p1dcon7'));
            f_no($('#p1dcon8'));
            f_no($('#p1dcon9'));
            f_no($('#p1dcon10'));
        }
        if (p1dcon4==(p1vec1*p1vec2[0])) {
            cor++;
            f_ok($('#p1dcon11'));
        }else{
            inc++;
            f_no($('#p1dcon11'));
        }

        var p1dcon5=[$('#p2dcon1').val(),$('#p2dcon2').val()];
        p1dcon5=p1dcon5.join('');
        var p1dcon6=$('#p2dcon4').val();
        var p1dcon7=[$('#p2dcon5').val(),$('#p2dcon6').val(),$('#p2dcon7').val()];
        p1dcon7=p1dcon7.join('');
        var p1dcon8=$('#p2dcon8').val();
        if (p1dcon5=='12') {
            cor++;
            f_ok($('#p2dcon1'));
            f_ok($('#p2dcon2'));
        }else{
            inc++;
            f_no($('#p2dcon1'));
            f_no($('#p2dcon2'));
        }
        if (p1dcon6==p1vec2[1]) {
            cor++;
            f_ok($('#p2dcon4'));
        }else{
            inc++;
            f_no($('#p2dcon4'));
        }
        if (p1dcon7==(12*p1vec2[1])) {
            cor++;
            f_ok($('#p2dcon5'));
            f_ok($('#p2dcon6'));
            f_ok($('#p2dcon7'));
        }else{
            inc++;
            f_no($('#p2dcon5'));
            f_no($('#p2dcon6'));
            f_no($('#p2dcon7'));
        }
        if (p1dcon8==(12*p1vec2[1])) {
            cor++;
            f_ok($('#p2dcon8'));
        }else{
            inc++;
            f_no($('#p2dcon8'));
        }
        Calculo_nota();
    }
}