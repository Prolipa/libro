var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 4,
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
    var p1vec1 = [10, 11, 12, 13, 14, 15, 16, 17, 18];
    var p1vec2 = parseInt((Math.random() * 4) + 2);
    var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    $('#p1im1').text(p1vec2);
    $('#p1im2').text(p1vec1[myArray1[2]]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1res1=[$('#p1dcon1').val(),$('#p1dcon2').val()];
        p1res1=p1res1.join('');
        if (p1res1==p1vec1[myArray1[2]]) {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon2'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon2'));
        }
        var p1res2=$('#p1dcon3').val();
        if (p1res2==p1vec2) {
            cor++;
            f_ok($('#p1dcon3'));
        }else{
            inc++;
            f_no($('#p1dcon3'));
        }
        var p1res3=[$('#p1dcon4').val(),$('#p1dcon5').val()];
        p1res3=p1res3.join('');
        if (p1res3==(p1vec1[myArray1[2]]*p1vec2)) {
            cor++;
            f_ok($('#p1dcon4'));
            f_ok($('#p1dcon5'));
        }else{
            inc++;
            f_no($('#p1dcon4'));
            f_no($('#p1dcon5'));
        }
        var p1res4=$('#p1dcon6').val();
        if (p1res4==(p1vec1[myArray1[2]]*p1vec2)) {
            cor++;
            f_ok($('#p1dcon6'));
        }else{
            inc++;
            f_no($('#p1dcon6'));
        }
        Calculo_nota();
    }
}