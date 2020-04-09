var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 12,
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
    bt_comprobar.addEventListener("click", f_comprobar);
    var p1num1 = [2, 3, 4, 5, 6, 7, 8, 9];
    var p1num2 = [];
    var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 2; i++) {
        var c = myArray1[i - 1];
        p1num2.push(p1num1[c])
    };
    $('#p1im1').text(p1num2[0]);
    $('#p1im2').text(p1num2[1]);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        for (var i = 0; i < 6; i++) {

            var p1res1 = parseInt($('#p1dcon' + (i + 1)).val());
            if (p1res1==0) {
                p1res1=1;
            }else{
                p1res1;
            }
            if (p1res1 % p1num2[0] == 0) {
                cor++;
                f_ok($('#p1dcon' + (i + 1)));
            } else {
                inc++;
                f_no($('#p1dcon' + (i + 1)));
            }
        }

        for (var i = 0; i < 6; i++) {
            var p1res2 = parseInt($('#p1dcon1' + (i + 1)).val());

            if (p1res2 % p1num2[1] == 0) {
                cor++;
                f_ok($('#p1dcon1' + (i + 1)));
            } else {
                inc++;
                f_no($('#p1dcon1' + (i + 1)));
            }
        }
        Calculo_nota();
    }
}