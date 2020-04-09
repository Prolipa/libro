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
    var p1n1=(Math.floor(Math.random() * 10) + 1);
    var p1vec1=[(Math.floor(Math.random() * 40) + 10)];
    for (var i = 0; i < 8; i++) {
        p1vec1.push(p1vec1[i]+p1n1);
    }
    $('#p1im1').text(p1vec1[0]);
    $('#p1im2').text(p1vec1[1]);
    var p1n2=(Math.floor(Math.random() * 10) + 1);
    var p1vec2=[(Math.floor(Math.random() * 40) + 10)];
    for (var i = 0; i < 8; i++) {
        p1vec2.push(p1vec2[i]+p1n2);
    }
    $('#p1im11').text(p1vec2[0]);
    $('#p1im12').text(p1vec2[1]);
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1pt1=$('#p1pt1').val();
        var p1pt2=$('#p1pt2').val();
        var p1cont1=0;
        if (p1pt1==p1n1) {
            p1cont1++;
            f_ok($('#p1pt1'));
        }else{
            p1cont1;
            f_no($('#p1pt1'));
        }
        if (p1pt2==p1n2) {
            p1cont1++;
            f_ok($('#p1pt2'));
        }else{
            p1cont1;
            f_no($('#p1pt2'));
        }
        for (var i = 2; i < p1vec1.length; i++) {
            var p1res1=$('#p1dcon'+(i-1)).val();
            if (p1res1==p1vec1[i]) {
                p1cont1++;
                f_ok($('#p1dcon'+(i-1)));
            }else{
                p1cont1;
                f_no($('#p1dcon'+(i-1)));
            }
        }
        for (var i = 2; i < p1vec2.length; i++) {
            var p1res2=$('#p1dcon1'+(i-1)).val();
            if (p1res2==p1vec2[i]) {
                p1cont1++;
                f_ok($('#p1dcon1'+(i-1)));
            }else{
                p1cont1;
                f_no($('#p1dcon1'+(i-1)));
            }
        }
        var result1 = (p1cont1 * 5) / 16;
        cor = cor + result1;
        inc = inc + (5 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2pt1=$('#p2pt1').val();
        var p2pt2=$('#p2pt2').val();
        var p2cont1=0;
        if (p2pt1=='2') {
            p2cont1++;
            f_ok($('#p2pt1'));
        }else{
            p2cont1;
            f_no($('#p2pt1'));
        }
        if (p2pt2=='3') {
            p2cont1++;
            f_ok($('#p2pt2'));
        }else{
            p2cont1;
            f_no($('#p2pt2'));
        }
        var p2vec1=[5,7,9,11,13,15,17,19,21,23];
        for (var i = 0; i < p2vec1.length; i++) {
            var p2res1=$('#p2dcon'+(i+1)).val();
            if (p2res1==p2vec1[i]) {
                p2cont1++;
                f_ok($('#p2dcon'+(i+1)));
            }else{
                p2cont1;
                f_no($('#p2dcon'+(i+1)));
            }
        }
        var p2vec2=[32,35,38,41,44,47,50];
        for (var i = 0; i < p2vec2.length; i++) {
            var p2res2=$('#p2dcon1'+(i+1)).val();
            if (p2res2==p2vec2[i]) {
                p2cont1++;
                f_ok($('#p2dcon1'+(i+1)));
            }else{
                p2cont1;
                f_no($('#p2dcon1'+(i+1)));
            }
        }
        var result2 = (p2cont1 * 5) / 19;
        cor = cor + result2;
        inc = inc + (5 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        Calculo_nota();
    }
}