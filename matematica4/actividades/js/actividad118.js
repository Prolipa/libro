var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 16,
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
    var p1vec1 = [parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2)];
    var p1vec2 = [];
    var p1vec3 = [];
    var p1vec4 = [];
    var p1vec5 = [];
    for (var i = 0; i < p1vec1[0]; i++) {
        p1vec2.push('<img src="img/i1_p149_act118.jpg" class="img-responsive" style="display: inline-block;">')
    }
    for (var i = 0; i < p1vec1[1]; i++) {
        p1vec3.push('<img src="img/i1_p149_act118.jpg" class="img-responsive" style="display: inline-block;">')
    }
    for (var i = 0; i < p1vec1[2]; i++) {
        p1vec4.push('<img src="img/i2_p149_act118.jpg" class="img-responsive" style="display: inline-block;">')
    }
    for (var i = 0; i < p1vec1[3]; i++) {
        p1vec5.push('<img src="img/i2_p149_act118.jpg" class="img-responsive" style="display: inline-block;">')
    }
    $('#p1im1').html(p1vec2);
    $('#p1im2').html(p1vec3);
    $('#p1im3').html(p1vec4);
    $('#p1im4').html(p1vec5);

    var p2vec1 = [parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2)];
    var p2vec2 = [];
    for (var i = 1; i <= 9; i++) {
        p2vec2.push(i+'0');
    }
    for (var i = 1; i <= 9; i++) {
        p2vec2.push(i+'00');
    }
    for (var i = 1; i <= 9; i++) {
        p2vec2.push(i+'000');
    }
    var myArray1 = [];
    for (var i = 0; i < p2vec2.length; i++) {
        myArray1.push(i);
    }
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    var p1aux1=[];
    //aleatorio literal 1
    for (var i = 1; i <= 12; i++) {
        var c = myArray1[i - 1];
        p1aux1.push(p2vec2[c]);
    };
    for (var i = 0; i < p1aux1.length; i++) {
        $('#p2im'+(i+1)).html(p2vec1[i]);
        $('#p21im'+(i+1)).html(p1aux1[i]);
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = $('#p1dcon1').val();
        var p1dcon2 = $('#p1dcon2').val();
        var p1dcon3 = $('#p1dcon3').val();
        if (p1dcon1 == p1vec1[0] && p1dcon2 == '100' && p1dcon3 == (p1vec1[0] * 100)) {
            cor++;
            f_ok($('#p1dcon1'));
            f_ok($('#p1dcon2'));
            f_ok($('#p1dcon3'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
            f_no($('#p1dcon2'));
            f_no($('#p1dcon3'));
        }
        var p1dcon4 = $('#p1dcon4').val();
        var p1dcon5 = $('#p1dcon5').val();
        var p1dcon6 = $('#p1dcon6').val();
        if (p1dcon4 == p1vec1[1] && p1dcon5 == '100' && p1dcon6 == (p1vec1[1] * 100)) {
            cor++;
            f_ok($('#p1dcon4'));
            f_ok($('#p1dcon5'));
            f_ok($('#p1dcon6'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
            f_no($('#p1dcon5'));
            f_no($('#p1dcon6'));
        }
        var p1dcon7 = $('#p1dcon7').val();
        var p1dcon8 = $('#p1dcon8').val();
        var p1dcon9 = $('#p1dcon9').val();
        if (p1dcon7 == p1vec1[2] && p1dcon8 == '1000' && p1dcon9 == (p1vec1[2] * 1000)) {
            cor++;
            f_ok($('#p1dcon7'));
            f_ok($('#p1dcon8'));
            f_ok($('#p1dcon9'));
        } else {
            inc++;
            f_no($('#p1dcon7'));
            f_no($('#p1dcon8'));
            f_no($('#p1dcon9'));
        }
        var p1dcon10 = $('#p1dcon10').val();
        var p1dcon11 = $('#p1dcon11').val();
        var p1dcon12 = $('#p1dcon12').val();
        if (p1dcon10 == p1vec1[3] && p1dcon11 == '1000' && p1dcon12 == (p1vec1[3] * 1000)) {
            cor++;
            f_ok($('#p1dcon10'));
            f_ok($('#p1dcon11'));
            f_ok($('#p1dcon12'));
        } else {
            inc++;
            f_no($('#p1dcon10'));
            f_no($('#p1dcon11'));
            f_no($('#p1dcon12'));
        }

        for (var i = 0; i < p1aux1.length; i++) {
            var p2d=$('#p2dcon'+(i+1)).val();
            if (p2d==(p1aux1[i]*p2vec1[i])) {
                cor++;
                f_ok($('#p2dcon'+(i+1)));
            }else{
                inc++;
                f_no($('#p2dcon'+(i+1)));
            }
        }
        Calculo_nota();
    }
}