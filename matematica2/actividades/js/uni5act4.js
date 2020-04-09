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
$('.pint1').click(function() {
    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('subrayar1')
    } else if ($(this).hasClass('subrayar1')) {
        $(this).removeClass('subrayar1')
        $(this).addClass('subrayar')
    } else {
        $(this).removeClass('subrayar')
        $(this).addClass('vacio')
    }

});
function f_iniciar() {

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cont1=0;
        for (var i = 1; i < 50; i=i+2) {
            if ($('#p1im'+(i)).hasClass('subrayar')) {
                p1cont1++;
                f_ok($('#p1im'+(i)));
                $('#p1im'+(i)).removeClass('subrayar');
            }else{
                p1cont1;
                f_no($('#p1im'+(i)));
                $('#p1im'+(i)).removeClass('subrayar');
                $('#p1im'+(i)).removeClass('vacio');
                $('#p1im'+(i)).removeClass('subrayar1');
            }
        }
        for (var i = 2; i <= 50; i=i+2) {
            if ($('#p1im'+(i)).hasClass('subrayar1')) {
                p1cont1++;
                f_ok($('#p1im'+(i)));
                $('#p1im'+(i)).removeClass('subrayar1');
            }else{
                p1cont1;
                f_no($('#p1im'+(i)));
                $('#p1im'+(i)).removeClass('subrayar1');
                $('#p1im'+(i)).removeClass('subrayar');
                $('#p1im'+(i)).removeClass('vacio');
            }
        }
        var result1 = (p1cont1 * 5) / 50;
        cor = cor + result1;
        inc = inc + (5 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2vec1=['29','35','27','53','83','41'];
        var p2cont2=0;
        for (var i = 0; i < p2vec1.length; i++) {
            var p2res1=$('#p2dcon'+(i+1)).val();
            var p2cont1=0;
            for (var j = 0; j < p2vec1.length; j++) {
                if (p2res1==p2vec1[j]) {
                    p2cont1++;
                    p2vec1[j]=5;
                }else{
                    p2cont1;
                }
            }
            if (p2cont1=='1') {
                p2cont2++;
                f_ok($('#p2dcon'+(i+1)));
            }else{
                p2cont2;
                f_no($('#p2dcon'+(i+1)));
            }
        }
        var result2 = (p2cont2 * 5) / 6;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}