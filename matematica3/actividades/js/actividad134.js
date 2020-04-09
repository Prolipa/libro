var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 14,
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
    var n=[];
    for (i = 0; i < 7; i++) {

        var numero = parseInt(Math.random() * 200 + 2);
        if (numero % 2 == 0) {
            n.push(numero);
            $("#p1im" + (i+1) + "").html(n[i]);
        } else {
            i--;
        }
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        for (var i = 0; i < 5; i++) {
            var resp = $('#p1dcon' + (i + 1)).val();
            if (resp == (n[i]*2)) {
                cor++;
                f_ok($('#p1dcon' + (i + 1)));
            } else {
                inc++;
                f_no($('#p1dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < 2; i++) {
            var resp1 = $('#p1dcon' + (i + 6)).val();
            if (resp1 == (n[(i+5)]/2)) {
                cor++;
                f_ok($('#p1dcon' + (i + 6)));
            } else {
                inc++;
                f_no($('#p1dcon' + (i + 6)));
            }
        }
        var p1dco1=$('#p1dco1').val();
        var p1dco2=$('#p1dco2').val();
        var p1dco3=$('#p1dco3').val();
        if (p1dco1==(n[0]) && p1dco2==(n[0]) && p1dco3==(n[0]*2)) {
            cor++;
            f_ok($('#p1dco1'));
            f_ok($('#p1dco2'));
            f_ok($('#p1dco3'));
        }else{
            inc++;
            f_no($('#p1dco1'));
            f_no($('#p1dco2'));
            f_no($('#p1dco3'));
        }
        var p1dco11=$('#p1dco11').val();
        var p1dco12=$('#p1dco12').val();
        var p1dco13=$('#p1dco13').val();
        if (p1dco11==(n[1]) && p1dco12==(n[1]) && p1dco13==(n[1]*2)) {
            cor++;
            f_ok($('#p1dco11'));
            f_ok($('#p1dco12'));
            f_ok($('#p1dco13'));
        }else{
            inc++;
            f_no($('#p1dco11'));
            f_no($('#p1dco12'));
            f_no($('#p1dco13'));
        }
        var p1dco21=$('#p1dco21').val();
        var p1dco22=$('#p1dco22').val();
        var p1dco23=$('#p1dco23').val();
        if (p1dco21==(n[2]) && p1dco22==(n[2]) && p1dco23==(n[2]*2)) {
            cor++;
            f_ok($('#p1dco21'));
            f_ok($('#p1dco22'));
            f_ok($('#p1dco23'));
        }else{
            inc++;
            f_no($('#p1dco21'));
            f_no($('#p1dco22'));
            f_no($('#p1dco23'));
        }
        var p1dco31=$('#p1dco31').val();
        var p1dco32=$('#p1dco32').val();
        var p1dco33=$('#p1dco33').val();
        if (p1dco31==(n[3]) && p1dco32==(n[3]) && p1dco33==(n[3]*2)) {
            cor++;
            f_ok($('#p1dco31'));
            f_ok($('#p1dco32'));
            f_ok($('#p1dco33'));
        }else{
            inc++;
            f_no($('#p1dco31'));
            f_no($('#p1dco32'));
            f_no($('#p1dco33'));
        }
        var p1dco41=$('#p1dco41').val();
        var p1dco42=$('#p1dco42').val();
        var p1dco43=$('#p1dco43').val();
        if (p1dco41==(n[4]) && p1dco42==(n[4]) && p1dco43==(n[4]*2)) {
            cor++;
            f_ok($('#p1dco41'));
            f_ok($('#p1dco42'));
            f_ok($('#p1dco43'));
        }else{
            inc++;
            f_no($('#p1dco41'));
            f_no($('#p1dco42'));
            f_no($('#p1dco43'));
        }
        var p1dco51=$('#p1dco51').val();
        var p1dco52=$('#p1dco52').val();
        var p1dco53=$('#p1dco53').val();
        if (p1dco51==(n[5]/2) && p1dco52==(n[5]/2) && p1dco53==(n[5])) {
            cor++;
            f_ok($('#p1dco51'));
            f_ok($('#p1dco52'));
            f_ok($('#p1dco53'));
        }else{
            inc++;
            f_no($('#p1dco51'));
            f_no($('#p1dco52'));
            f_no($('#p1dco53'));
        }
        var p1dco61=$('#p1dco61').val();
        var p1dco62=$('#p1dco62').val();
        var p1dco63=$('#p1dco63').val();
        if (p1dco61==(n[6]/2) && p1dco62==(n[6]/2) && p1dco63==(n[6])) {
            cor++;
            f_ok($('#p1dco61'));
            f_ok($('#p1dco62'));
            f_ok($('#p1dco63'));
        }else{
            inc++;
            f_no($('#p1dco61'));
            f_no($('#p1dco62'));
            f_no($('#p1dco63'));
        }
        Calculo_nota();
    }
}