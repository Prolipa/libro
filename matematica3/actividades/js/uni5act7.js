var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 6,
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
    var p1vec1 = [(Math.floor(Math.random() * 40) + 10), (Math.floor(Math.random() * 40) + 10)];
    p1vec1.push(p1vec1[0]+p1vec1[1]);
    for (var i = 0; i < 4; i++) {
        $('#p1im'+(i+1)).text(p1vec1[0]);
    }
    for (var i = 0; i < 4; i++) {
        $('#p1im1'+(i+1)).text(p1vec1[1]);
    }
    for (var i = 0; i < 4; i++) {
        $('#p1im2'+(i+1)).text(p1vec1[2]);
    }
    var p2vec1 = [(Math.floor(Math.random() * 40) + 10), (Math.floor(Math.random() * 40) + 10)];
    p2vec1.push(p2vec1[0]+p2vec1[1]);
    for (var i = 0; i < 4; i++) {
        $('#p2im'+(i+1)).text(p2vec1[0]);
    }
    for (var i = 0; i < 4; i++) {
        $('#p2im1'+(i+1)).text(p2vec1[1]);
    }
    for (var i = 0; i < 4; i++) {
        $('#p2im2'+(i+1)).text(p2vec1[2]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        
        for (var i = 0; i < 3; i++) {
            var p1cont1=0;
            for (var j = 0; j < p1vec1.length; j++) {
                var p1res1=$('#p1dcon'+(i+1)).val();
                if (p1res1==p1vec1[j]) {
                    p1cont1++;
                    p1vec1[j]='aa';
                }
            }
            if (p1cont1=='1') {
                cor++;
                f_ok($('#p1dcon'+(i+1)));
            }else{
                inc++;
                f_no($('#p1dcon'+(i+1)));
            }
        }
        for (var i = 0; i < 3; i++) {
            var p1cont2=0;
            for (var j = 0; j < p2vec1.length; j++) {
                var p1res2=$('#p1dcon'+(i+4)).val();
                if (p1res2==p2vec1[j]) {
                    p1cont2++;
                    p2vec1[j]='aa';
                }
            }
            if (p1cont2=='1') {
                cor++;
                f_ok($('#p1dcon'+(i+4)));
            }else{
                inc++;
                f_no($('#p1dcon'+(i+4)));
            }
        }
        Calculo_nota();
    }
}