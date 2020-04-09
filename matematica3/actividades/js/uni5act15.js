var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 0,
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
    var p1vec1 = [(Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 8) + 2)];
    var p1t1 = [];
    for (var i = 0; i < p1vec1[0]; i++) {
        p1t1.push('<tr id="p1c'+i+'"></tr>');
    }
    $('#p1im1').html(p1t1);
    var p1v1=[];
    for (var i = 0; i < p1vec1[1]; i++) {
        p1v1.push('<td><img src="img/i1_p195_u5a15.jpg" alt=""/></td>');
    }
    for (var i = 0; i < p1vec1[0]; i++) {
        $('#p1c' + i).html(p1v1);
    }
    var p1ta1 = [];
    for (var i = 0; i < p1vec1[0]; i++) {
        if ((i + 1) == p1vec1[0]) {
            p1ta1.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p1dco'+i+'"> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dc1">');
        } else {
            p1ta1.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p1dco'+i+'"> + ');
        }

    }
    $('#p1cim1').html(p1ta1);
    

    var p1t2 = [];
    for (var i = 0; i < p1vec1[2]; i++) {
        p1t2.push('<tr id="p11c'+i+'"></tr>');
    }
    $('#p1im2').html(p1t2);
    var p1v2=[];
    for (var i = 0; i < p1vec1[3]; i++) {
        p1v2.push('<td><img src="img/i3_p195_u5a15.jpg" alt=""/></td>');
    }
    for (var i = 0; i < p1vec1[2]; i++) {
        $('#p11c' + i).html(p1v2);
    }
    var p1ta2 = [];
    for (var i = 0; i < p1vec1[2]; i++) {
        if ((i + 1) == p1vec1[2]) {
            p1ta2.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p11dco'+i+'"> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dc2">');
        } else {
            p1ta2.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p11dco'+i+'"> + ');
        }

    }
    $('#p1cim2').html(p1ta2);

    var p1t3 = [];
    for (var i = 0; i < p1vec1[4]; i++) {
        p1t3.push('<tr id="p12c'+i+'"></tr>');
    }
    $('#p1im3').html(p1t3);
    var p1v3=[];
    for (var i = 0; i < p1vec1[5]; i++) {
        p1v3.push('<td><img src="img/i2_p195_u5a15.jpg" alt=""/></td>');
    }
    for (var i = 0; i < p1vec1[4]; i++) {
        $('#p12c' + i).html(p1v3);
    }
    var p1ta3 = [];
    for (var i = 0; i < p1vec1[4]; i++) {
        if ((i + 1) == p1vec1[4]) {
            p1ta3.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p12dco'+i+'"> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dc3">');
        } else {
            p1ta3.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p12dco'+i+'"> + ');
        }

    }
    $('#p1cim3').html(p1ta3);

    var p1t4 = [];
    for (var i = 0; i < p1vec1[6]; i++) {
        p1t4.push('<tr id="p13c'+i+'"></tr>');
    }
    $('#p1im4').html(p1t4);
    var p1v4=[];
    for (var i = 0; i < p1vec1[7]; i++) {
        p1v4.push('<td><img src="img/i4_p195_u5a15.jpg" alt=""/></td>');
    }
    for (var i = 0; i < p1vec1[6]; i++) {
        $('#p13c' + i).html(p1v4);
    }
    var p1ta4 = [];
    for (var i = 0; i < p1vec1[6]; i++) {
        if ((i + 1) == p1vec1[6]) {
            p1ta4.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p13dco'+i+'"> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dc4">');
        } else {
            p1ta4.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p13dco'+i+'"> + ');
        }

    }
    $('#p1cim4').html(p1ta4);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        for (var i = 0; i < p1vec1[0]; i++) {
            var p1res1=$('#p1dco'+i).val();
            if (p1res1==p1vec1[1]) {
                cor++;
                f_ok($('#p1dco'+i));
            }else{
                inc++;
                f_no($('#p1dco'+i));
            }
        }
        var p1dc1=$('#p1dc1').val();
        if (p1dc1==(p1vec1[0]*p1vec1[1])) {
            cor++;
            f_ok($('#p1dc1'));
        }else{
            inc++;
            f_no($('#p1dc1'));
        }
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        var p1dcon3=$('#p1dcon3').val();
        var p1dcon4=$('#p1dcon4').val();
        var p1dcon5=$('#p1dcon5').val();
        var p1dcon6=$('#p1dcon6').val();
        if (p1dcon1==p1vec1[0]) {
            cor++;
            f_ok($('#p1dcon1'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2==p1vec1[1]) {
            cor++;
            f_ok($('#p1dcon2'));
        }else{
            inc++;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3==(p1vec1[0]*p1vec1[1])) {
            cor++;
            f_ok($('#p1dcon3'));
        }else{
            inc++;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4==p1vec1[0]) {
            cor++;
            f_ok($('#p1dcon4'));
        }else{
            inc++;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5==p1vec1[1]) {
            cor++;
            f_ok($('#p1dcon5'));
        }else{
            inc++;
            f_no($('#p1dcon5'));
        }
        if (p1dcon6==(p1vec1[0]*p1vec1[1])) {
            cor++;
            f_ok($('#p1dcon6'));
        }else{
            inc++;
            f_no($('#p1dcon6'));
        }

        for (var i = 0; i < p1vec1[2]; i++) {
            var p1res2=$('#p11dco'+i).val();
            if (p1res2==p1vec1[3]) {
                cor++;
                f_ok($('#p11dco'+i));
            }else{
                inc++;
                f_no($('#p11dco'+i));
            }
        }
        var p1dc2=$('#p1dc2').val();
        if (p1dc2==(p1vec1[2]*p1vec1[3])) {
            cor++;
            f_ok($('#p1dc2'));
        }else{
            inc++;
            f_no($('#p1dc2'));
        }
        var p1dcon11=$('#p1dcon11').val();
        var p1dcon12=$('#p1dcon12').val();
        var p1dcon13=$('#p1dcon13').val();
        var p1dcon14=$('#p1dcon14').val();
        var p1dcon15=$('#p1dcon15').val();
        var p1dcon16=$('#p1dcon16').val();
        if (p1dcon11==p1vec1[2]) {
            cor++;
            f_ok($('#p1dcon11'));
        }else{
            inc++;
            f_no($('#p1dcon11'));
        }
        if (p1dcon12==p1vec1[3]) {
            cor++;
            f_ok($('#p1dcon12'));
        }else{
            inc++;
            f_no($('#p1dcon12'));
        }
        if (p1dcon13==(p1vec1[2]*p1vec1[3])) {
            cor++;
            f_ok($('#p1dcon13'));
        }else{
            inc++;
            f_no($('#p1dcon13'));
        }
        if (p1dcon14==p1vec1[2]) {
            cor++;
            f_ok($('#p1dcon14'));
        }else{
            inc++;
            f_no($('#p1dcon14'));
        }
        if (p1dcon15==p1vec1[3]) {
            cor++;
            f_ok($('#p1dcon15'));
        }else{
            inc++;
            f_no($('#p1dcon15'));
        }
        if (p1dcon16==(p1vec1[2]*p1vec1[3])) {
            cor++;
            f_ok($('#p1dcon16'));
        }else{
            inc++;
            f_no($('#p1dcon16'));
        }

        for (var i = 0; i < p1vec1[4]; i++) {
            var p1res3=$('#p12dco'+i).val();
            if (p1res3==p1vec1[5]) {
                cor++;
                f_ok($('#p12dco'+i));
            }else{
                inc++;
                f_no($('#p12dco'+i));
            }
        }
        var p1dc3=$('#p1dc3').val();
        if (p1dc3==(p1vec1[4]*p1vec1[5])) {
            cor++;
            f_ok($('#p1dc3'));
        }else{
            inc++;
            f_no($('#p1dc3'));
        }
        var p1dcon21=$('#p1dcon21').val();
        var p1dcon22=$('#p1dcon22').val();
        var p1dcon23=$('#p1dcon23').val();
        var p1dcon24=$('#p1dcon24').val();
        var p1dcon25=$('#p1dcon25').val();
        var p1dcon26=$('#p1dcon26').val();
        if (p1dcon21==p1vec1[4]) {
            cor++;
            f_ok($('#p1dcon21'));
        }else{
            inc++;
            f_no($('#p1dcon21'));
        }
        if (p1dcon22==p1vec1[5]) {
            cor++;
            f_ok($('#p1dcon22'));
        }else{
            inc++;
            f_no($('#p1dcon22'));
        }
        if (p1dcon23==(p1vec1[4]*p1vec1[5])) {
            cor++;
            f_ok($('#p1dcon23'));
        }else{
            inc++;
            f_no($('#p1dcon23'));
        }
        if (p1dcon24==p1vec1[4]) {
            cor++;
            f_ok($('#p1dcon24'));
        }else{
            inc++;
            f_no($('#p1dcon24'));
        }
        if (p1dcon25==p1vec1[5]) {
            cor++;
            f_ok($('#p1dcon25'));
        }else{
            inc++;
            f_no($('#p1dcon25'));
        }
        if (p1dcon26==(p1vec1[4]*p1vec1[5])) {
            cor++;
            f_ok($('#p1dcon26'));
        }else{
            inc++;
            f_no($('#p1dcon26'));
        }

        for (var i = 0; i < p1vec1[6]; i++) {
            var p1res4=$('#p13dco'+i).val();
            if (p1res4==p1vec1[7]) {
                cor++;
                f_ok($('#p13dco'+i));
            }else{
                inc++;
                f_no($('#p13dco'+i));
            }
        }
        var p1dc4=$('#p1dc4').val();
        if (p1dc4==(p1vec1[6]*p1vec1[7])) {
            cor++;
            f_ok($('#p1dc4'));
        }else{
            inc++;
            f_no($('#p1dc4'));
        }
        var p1dcon31=$('#p1dcon31').val();
        var p1dcon32=$('#p1dcon32').val();
        var p1dcon33=$('#p1dcon33').val();
        var p1dcon34=$('#p1dcon34').val();
        var p1dcon35=$('#p1dcon35').val();
        var p1dcon36=$('#p1dcon36').val();
        if (p1dcon31==p1vec1[6]) {
            cor++;
            f_ok($('#p1dcon31'));
        }else{
            inc++;
            f_no($('#p1dcon31'));
        }
        if (p1dcon32==p1vec1[7]) {
            cor++;
            f_ok($('#p1dcon32'));
        }else{
            inc++;
            f_no($('#p1dcon32'));
        }
        if (p1dcon33==(p1vec1[6]*p1vec1[7])) {
            cor++;
            f_ok($('#p1dcon33'));
        }else{
            inc++;
            f_no($('#p1dcon33'));
        }
        if (p1dcon34==p1vec1[6]) {
            cor++;
            f_ok($('#p1dcon34'));
        }else{
            inc++;
            f_no($('#p1dcon34'));
        }
        if (p1dcon35==p1vec1[7]) {
            cor++;
            f_ok($('#p1dcon35'));
        }else{
            inc++;
            f_no($('#p1dcon35'));
        }
        if (p1dcon36==(p1vec1[6]*p1vec1[7])) {
            cor++;
            f_ok($('#p1dcon36'));
        }else{
            inc++;
            f_no($('#p1dcon36'));
        }
        itemsT=p1vec1[0]+p1vec1[2]+p1vec1[4]+p1vec1[6]+4+24;
        Calculo_nota();
    }
}