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
document.getElementById('pre1a').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('pre1a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre1a'), 4)
});
function f_iniciar() {
    var p2vec1=['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
    var myArray1=['0','1','2','3','4','5','6'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c = myArray1[i - 1];
        $('#p2dcon'+(parseInt(c)+1)).val(p2vec1[c]);
        $('#p2dcon'+(parseInt(c)+1)).attr('disabled','true');
    };
    bt_comprobar.addEventListener("click", preg1);
    function preg1() {
        cor = 0;
        var pre1a = $('#pre1a').val();
        if (!pre1a) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a);
            inc = inc + (4 - parseFloat(pre1a));
            $('#pre1a').val(parseFloat(pre1a).toFixed(2));
            $('#pre1a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p2cont1=0;
        for (var i = 0; i < 4; i++) {
            var p2res1=$('#p2dcon'+(parseInt(myArray1[i + 3])+1)).val();
            if (p2res1==p2vec1[myArray1[i + 3]]) {
                p2cont1++;
                f_ok($('#p2dcon'+(parseInt(myArray1[i + 3])+1)));
            }else{
                p2cont1;
                f_no($('#p2dcon'+(parseInt(myArray1[i + 3])+1)));
            }
        }
        var result2 = (p2cont1 * 3) / 4;
        cor = cor + result2;
        inc = inc + (3 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');

        var p3cont1=0;
        for (var i = 0; i < 5; i++) {
            var p3res1=$('#p3dcon'+(i+1)).val();
            if (p3res1==p2vec1[i]) {
                p3cont1++;
                f_ok($('#p3dcon'+(i+1)));
            }else{
                p3cont1;
                f_no($('#p3dcon'+(i+1)));
            }
        }
        var result3 = (p3cont1 * 3) / 5;
        cor = cor + result3;
        inc = inc + (3 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');
        Calculo_nota();
    }
}