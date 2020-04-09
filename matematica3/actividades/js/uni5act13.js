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
    var p1vec1 = [(Math.floor(Math.random() * 5) + 2), (Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 5) + 2), (Math.floor(Math.random() * 6) + 2), (Math.floor(Math.random() * 5) + 2), (Math.floor(Math.random() * 6) + 2)];
    var p1ta1 = [];
    var p1in1 = [];
    for (var i = 0; i < p1vec1[0]; i++) {
        if ((i + 1) == p1vec1[0]) {
            p1ta1.push('<td><div id="p1cim' + i + '" style="border-radius: 10px 0px 10px 0px; border: 2px solid #9A999E; padding: 2px;"></div></td><td></td><td></td>');
            p1in1.push('<td><input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p1dcon' + i + '"></td><td>=</td><td><input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dc1"></td>');
        } else {
            p1ta1.push('<td><div id="p1cim' + i + '" style="border-radius: 10px 0px 10px 0px; border: 2px solid #9A999E; padding: 2px;"></div></td><td></td>');
            p1in1.push('<td><input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p1dcon' + i + '"></td><td>+</td>');
        }

    }
    $('#p1im1').html(p1ta1);
    $('#p1im2').html(p1in1);
    var p1i1 = [];
    for (var i = 0; i < p1vec1[1]; i++) {
        p1i1.push('<img src="img/i1_p193_u5a13.jpg">')
    }
    for (var i = 0; i < p1vec1[0]; i++) {
        $('#p1cim' + i).html(p1i1);
    }

    var p1ta2 = [];
    var p1in2 = [];
    for (var i = 0; i < p1vec1[2]; i++) {
        if ((i + 1) == p1vec1[2]) {
            p1ta2.push('<td><div id="p11cim' + i + '" style="border-radius: 10px 0px 10px 0px; border: 2px solid #9A999E; padding: 2px;"></div></td><td></td><td></td>');
            p1in2.push('<td><input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p11dcon' + i + '"></td><td>=</td><td><input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dc2"></td>');
        } else {
            p1ta2.push('<td><div id="p11cim' + i + '" style="border-radius: 10px 0px 10px 0px; border: 2px solid #9A999E; padding: 2px;"></div></td><td></td>');
            p1in2.push('<td><input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p11dcon' + i + '"></td><td>+</td>');
        }

    }
    $('#p1im3').html(p1ta2);
    $('#p1im4').html(p1in2);
    var p1i2 = [];
    for (var i = 0; i < p1vec1[3]; i++) {
        p1i2.push('<img src="img/i2_p193_u5a13.jpg">')
    }
    for (var i = 0; i < p1vec1[2]; i++) {
        $('#p11cim' + i).html(p1i2);
    }

    var p1ta3 = [];
    var p1in3 = [];
    for (var i = 0; i < p1vec1[4]; i++) {
        if ((i + 1) == p1vec1[4]) {
            p1ta3.push('<td><div id="p12cim' + i + '" style="border-radius: 10px 0px 10px 0px; border: 2px solid #9A999E; padding: 2px;"></div></td><td></td><td></td>');
            p1in3.push('<td><input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p12dcon' + i + '"></td><td>=</td><td><input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p1dc3"></td>');
        } else {
            p1ta3.push('<td><div id="p12cim' + i + '" style="border-radius: 10px 0px 10px 0px; border: 2px solid #9A999E; padding: 2px;"></div></td><td></td>');
            p1in3.push('<td><input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p12dcon' + i + '"></td><td>+</td>');
        }

    }
    $('#p1im5').html(p1ta3);
    $('#p1im6').html(p1in3);
    var p1i3 = [];
    for (var i = 0; i < p1vec1[5]; i++) {
        p1i3.push('<img src="img/i3_p193_u5a13.jpg">')
    }
    for (var i = 0; i < p1vec1[4]; i++) {
        $('#p12cim' + i).html(p1i3);
    }
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        for (var i = 0; i < p1vec1[0]; i++) {
            var p1res1 = $('#p1dcon' + i).val();
            if (p1res1 == (p1vec1[1])) {
                cor++;
                f_ok($('#p1dcon' + i));
            } else {
                inc++;
                f_no($('#p1dcon' + i));
            }
        }
        var p1res2 = $('#p1dc1').val();
        if (p1res2 == (p1vec1[0] * p1vec1[1])) {
            cor++;
            f_ok($('#p1dc1'));
        } else {
            inc++;
            f_no($('#p1dc1'));
        }
        for (var i = 0; i < p1vec1[2]; i++) {
            var p1res3 = $('#p11dcon' + i).val();
            if (p1res3 == (p1vec1[3])) {
                cor++;
                f_ok($('#p11dcon' + i));
            } else {
                inc++;
                f_no($('#p11dcon' + i));
            }
        }
        var p1res4 = $('#p1dc2').val();
        if (p1res4 == (p1vec1[2] * p1vec1[3])) {
            cor++;
            f_ok($('#p1dc2'));
        } else {
            inc++;
            f_no($('#p1dc2'));
        }
        for (var i = 0; i < p1vec1[4]; i++) {
            var p1res5 = $('#p12dcon' + i).val();
            if (p1res5 == (p1vec1[5])) {
                cor++;
                f_ok($('#p12dcon' + i));
            } else {
                inc++;
                f_no($('#p12dcon' + i));
            }
        }
        var p1res6 = $('#p1dc3').val();
        if (p1res6 == (p1vec1[4] * p1vec1[5])) {
            cor++;
            f_ok($('#p1dc3'));
        } else {
            inc++;
            f_no($('#p1dc3'));
        }
        var p1dco1=$('#p1dco1').val();
        var p1dco2=$('#p1dco2').val();
        var p1dco3=$('#p1dco3').val();
        if (p1dco1 == (p1vec1[0])) {
            cor++;
            f_ok($('#p1dco1'));
        } else {
            inc++;
            f_no($('#p1dco1'));
        }
        if (p1dco2 == (p1vec1[1])) {
            cor++;
            f_ok($('#p1dco2'));
        } else {
            inc++;
            f_no($('#p1dco2'));
        }
        if (p1dco3 == (p1vec1[0]*p1vec1[1])) {
            cor++;
            f_ok($('#p1dco3'));
        } else {
            inc++;
            f_no($('#p1dco3'));
        }
        var p1dco11=$('#p1dco11').val();
        var p1dco12=$('#p1dco12').val();
        var p1dco13=$('#p1dco13').val();
        if (p1dco11 == (p1vec1[2])) {
            cor++;
            f_ok($('#p1dco11'));
        } else {
            inc++;
            f_no($('#p1dco11'));
        }
        if (p1dco12 == (p1vec1[3])) {
            cor++;
            f_ok($('#p1dco12'));
        } else {
            inc++;
            f_no($('#p1dco12'));
        }
        if (p1dco13 == (p1vec1[2]*p1vec1[3])) {
            cor++;
            f_ok($('#p1dco13'));
        } else {
            inc++;
            f_no($('#p1dco13'));
        }
        var p1dco21=$('#p1dco21').val();
        var p1dco22=$('#p1dco22').val();
        var p1dco23=$('#p1dco23').val();
        if (p1dco21 == (p1vec1[4])) {
            cor++;
            f_ok($('#p1dco21'));
        } else {
            inc++;
            f_no($('#p1dco21'));
        }
        if (p1dco22 == (p1vec1[5])) {
            cor++;
            f_ok($('#p1dco22'));
        } else {
            inc++;
            f_no($('#p1dco22'));
        }
        if (p1dco23 == (p1vec1[4]*p1vec1[5])) {
            cor++;
            f_ok($('#p1dco23'));
        } else {
            inc++;
            f_no($('#p1dco23'));
        }
        var p1dco31=$('#p1dco31').val();
        var p1dco32=$('#p1dco32').val();
        var p1dco33=$('#p1dco33').val();
        if (p1dco31 == (p1vec1[0])) {
            cor++;
            f_ok($('#p1dco31'));
        } else {
            inc++;
            f_no($('#p1dco31'));
        }
        if (p1dco32 == (p1vec1[1])) {
            cor++;
            f_ok($('#p1dco32'));
        } else {
            inc++;
            f_no($('#p1dco32'));
        }
        if (p1dco33 == (p1vec1[0]*p1vec1[1])) {
            cor++;
            f_ok($('#p1dco33'));
        } else {
            inc++;
            f_no($('#p1dco33'));
        }
        var p1dco41=$('#p1dco41').val();
        var p1dco42=$('#p1dco42').val();
        var p1dco43=$('#p1dco43').val();
        if (p1dco41 == (p1vec1[2])) {
            cor++;
            f_ok($('#p1dco41'));
        } else {
            inc++;
            f_no($('#p1dco41'));
        }
        if (p1dco42 == (p1vec1[3])) {
            cor++;
            f_ok($('#p1dco42'));
        } else {
            inc++;
            f_no($('#p1dco42'));
        }
        if (p1dco43 == (p1vec1[2]*p1vec1[3])) {
            cor++;
            f_ok($('#p1dco43'));
        } else {
            inc++;
            f_no($('#p1dco43'));
        }
        var p1dco51=$('#p1dco51').val();
        var p1dco52=$('#p1dco52').val();
        var p1dco53=$('#p1dco53').val();
        if (p1dco51 == (p1vec1[4])) {
            cor++;
            f_ok($('#p1dco51'));
        } else {
            inc++;
            f_no($('#p1dco51'));
        }
        if (p1dco52 == (p1vec1[5])) {
            cor++;
            f_ok($('#p1dco52'));
        } else {
            inc++;
            f_no($('#p1dco52'));
        }
        if (p1dco53 == (p1vec1[4]*p1vec1[5])) {
            cor++;
            f_ok($('#p1dco53'));
        } else {
            inc++;
            f_no($('#p1dco53'));
        }
        itemsT=p1vec1[0]+p1vec1[2]+p1vec1[4]+3+18;
        Calculo_nota();
    }
}