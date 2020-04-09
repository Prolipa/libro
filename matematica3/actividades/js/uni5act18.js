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
document.getElementById('pre4a').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('pre4a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre4a'), 1)
});
function f_iniciar() {
    var p1n1 = (Math.floor(Math.random() * 400) + 100);
    var p1n2 = (Math.floor(Math.random() * 400) + 100);
    var p1n3 = (Math.floor(Math.random() * 400) + 100);
    var p1n4 = (Math.floor(Math.random() * 400) + 100);
    var p1n5=(Math.floor(Math.random() * 600) + 100);
    var p1n6=(Math.floor(Math.random() * 600) + 100);
    if (p1n5>p1n6) {
        p1n5;
        p1n6;
    }else{
        var p1c1=p1n5;
        var p1c2=p1n6;
        p1n5=p1c2;
        p1n6=p1c1;
    }
    var p1n7=(Math.floor(Math.random() * 600) + 100);
    var p1n8=(Math.floor(Math.random() * 600) + 100);
    if (p1n7>p1n8) {
        p1n7;
        p1n8;
    }else{
        var p1c3=p1n7;
        var p1c4=p1n8;
        p1n7=p1c4;
        p1n8=p1c3;
    }
    var p1sp1=p1n1.toString().split('');
    $('#nlrd0').val(p1sp1[0]);
    $('#nlrd0').attr('disabled','true');
    $('#nlrd1').val(p1sp1[1]);
    $('#nlrd1').attr('disabled','true');
    $('#nlrd2').val(p1sp1[2]);
    $('#nlrd2').attr('disabled','true');
    var p1sp2=p1n2.toString().split('');
    $('#nlrd3').val(p1sp2[0]);
    $('#nlrd3').attr('disabled','true');
    $('#nlrd4').val(p1sp2[1]);
    $('#nlrd4').attr('disabled','true');
    $('#nlrd5').val(p1sp2[2]);
    $('#nlrd5').attr('disabled','true');
    var p1sp3=p1n3.toString().split('');
    $('#nlrd20').val(p1sp3[0]);
    $('#nlrd20').attr('disabled','true');
    $('#nlrd21').val(p1sp3[1]);
    $('#nlrd21').attr('disabled','true');
    $('#nlrd22').val(p1sp3[2]);
    $('#nlrd22').attr('disabled','true');
    var p1sp4=p1n4.toString().split('');
    $('#nlrd23').val(p1sp4[0]);
    $('#nlrd23').attr('disabled','true');
    $('#nlrd24').val(p1sp4[1]);
    $('#nlrd24').attr('disabled','true');
    $('#nlrd25').val(p1sp4[2]);
    $('#nlrd25').attr('disabled','true');
    var p1sp1=p1n5.toString().split('');
    $('#nlrd10').val(p1sp1[0]);
    $('#nlrd10').attr('disabled','true');
    $('#nlrd11').val(p1sp1[1]);
    $('#nlrd11').attr('disabled','true');
    $('#nlrd12').val(p1sp1[2]);
    $('#nlrd12').attr('disabled','true');
    var p1sp6=p1n6.toString().split('');
    $('#nlrd13').val(p1sp6[0]);
    $('#nlrd13').attr('disabled','true');
    $('#nlrd14').val(p1sp6[1]);
    $('#nlrd14').attr('disabled','true');
    $('#nlrd15').val(p1sp6[2]);
    $('#nlrd15').attr('disabled','true');
    var p1sp7=p1n7.toString().split('');
    $('#nlrd30').val(p1sp7[0]);
    $('#nlrd30').attr('disabled','true');
    $('#nlrd31').val(p1sp7[1]);
    $('#nlrd31').attr('disabled','true');
    $('#nlrd32').val(p1sp7[2]);
    $('#nlrd32').attr('disabled','true');
    var p1sp8=p1n8.toString().split('');
    $('#nlrd33').val(p1sp8[0]);
    $('#nlrd33').attr('disabled','true');
    $('#nlrd34').val(p1sp8[1]);
    $('#nlrd34').attr('disabled','true');
    $('#nlrd35').val(p1sp8[2]);
    $('#nlrd35').attr('disabled','true');


    var p3vec1 = [(Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100)];
    var p3s1 = p3vec1[0].toString().split('');
    $('#nlrd40').val(p3s1[0]);
    $('#nlrd40').attr('disabled', 'true');
    $('#nlrd41').val(p3s1[1]);
    $('#nlrd41').attr('disabled', 'true');
    $('#nlrd42').val(p3s1[2]);
    $('#nlrd42').attr('disabled', 'true');
    var p3s2 = p3vec1[1].toString().split('');
    $('#nlrd43').val(p3s2[0]);
    $('#nlrd43').attr('disabled', 'true');
    $('#nlrd44').val(p3s2[1]);
    $('#nlrd44').attr('disabled', 'true');
    $('#nlrd45').val(p3s2[2]);
    $('#nlrd45').attr('disabled', 'true');
    $('#nlrd53').val(p3s2[0]);
    $('#nlrd53').attr('disabled', 'true');
    $('#nlrd54').val(p3s2[1]);
    $('#nlrd54').attr('disabled', 'true');
    $('#nlrd55').val(p3s2[2]);
    $('#nlrd55').attr('disabled', 'true');
    var p3n7=(Math.floor(Math.random() * 600) + 100);
    var p3n8=(Math.floor(Math.random() * 600) + 100);
    if (p3n7>p3n8) {
        p3n7;
        p3n8;
    }else{
        var p3c3=p3n7;
        var p3c4=p3n8;
        p3n7=p3c4;
        p3n8=p3c3;
    }
    var p3s3 = p3n7.toString().split('');
    $('#nlrd60').val(p3s3[0]);
    $('#nlrd60').attr('disabled', 'true');
    $('#nlrd61').val(p3s3[1]);
    $('#nlrd61').attr('disabled', 'true');
    $('#nlrd62').val(p3s3[2]);
    $('#nlrd62').attr('disabled', 'true');
    var p3s4 = p3n8.toString().split('');
    $('#nlrd63').val(p3s4[0]);
    $('#nlrd63').attr('disabled', 'true');
    $('#nlrd64').val(p3s4[1]);
    $('#nlrd64').attr('disabled', 'true');
    $('#nlrd65').val(p3s4[2]);
    $('#nlrd65').attr('disabled', 'true');
    $('#nlrd73').val(p3s4[0]);
    $('#nlrd73').attr('disabled', 'true');
    $('#nlrd74').val(p3s4[1]);
    $('#nlrd74').attr('disabled', 'true');
    $('#nlrd75').val(p3s4[2]);
    $('#nlrd75').attr('disabled', 'true');

    var p4vec1=[(Math.floor(Math.random() * 400) + 100),(Math.floor(Math.random() * 400) + 100)];
    p4vec1.push(p4vec1[0]+p4vec1[1])
    $('#p4im1').html(p4vec1[0]);
    $('#p4im2').html(p4vec1[2]);
    $('#p4im3').html(p4vec1[1]);

    var p5vec1 = [];
    for (var i = 20; i < 90; i++) {
        if (i%10==0) {
            p5vec1;
        }else{
            p5vec1.push(i);
        }
    }
    p5vec1.sort(f_randomico);
    var p5vec2=[p5vec1[0],p5vec1[1],p5vec1[2],p5vec1[3]];
    var p5vec3=[Math.round(p5vec2[0]/10.0) * 10, Math.round(p5vec2[1]/10.0) * 10, Math.round(p5vec2[2]/10.0) * 10,Math.round(p5vec2[3]/10.0) * 10];
    $('#p5im1').html(p5vec2[0]);
    $('#p5im2').html(p5vec2[1]);
    $('#p5im3').html(p5vec2[2]);
    $('#p5im4').html(p5vec2[3]);

    var p6vec1=[(Math.floor(Math.random() * 99) + 2),(Math.floor(Math.random() * 99) + 2),(Math.floor(Math.random() * 99) + 2),(Math.floor(Math.random() * 99) + 2)];
    for (var i = 0; i < p6vec1.length; i++) {
        $('#p6im'+(i+1)).html(p6vec1[i]);
    }

    var p7vec1 = [(Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2)];
    var p7ta1 = [];
    for (var i = 0; i < p7vec1[0]; i++) {
        if ((i + 1) == p7vec1[0]) {
            p7ta1.push('<input type="text" disabled="true" value="'+p7vec1[1]+'" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2">');
        } else {
            p7ta1.push('<input type="text" disabled="true" value="'+p7vec1[1]+'" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2"> + ');
        }
    }
    $('#p7im1').html(p7ta1);

    $('#p7dcon11').val(p7vec1[2]);
    $('#p7dcon12').val(p7vec1[3]);
    var p7ta2 = [];
    for (var i = 0; i < p7vec1[2]; i++) {
        if ((i + 1) == p7vec1[2]) {
            p7ta2.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p7dco'+i+'">');
        } else {
            p7ta2.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p7dco'+i+'"> + ');
        }
    }
    $('#p7im2').html(p7ta2);

    var p7ta3 = [];
    for (var i = 0; i < p7vec1[4]; i++) {
        if ((i + 1) == p7vec1[4]) {
            p7ta3.push('<input type="text" disabled="true" value="'+p7vec1[5]+'" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2">');
        } else {
            p7ta3.push('<input type="text" disabled="true" value="'+p7vec1[5]+'" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2"> + ');
        }
    }
    $('#p7im3').html(p7ta3);

    $('#p7dcon31').val(p7vec1[6]);
    $('#p7dcon32').val(p7vec1[7]);
    var p7ta4 = [];
    for (var i = 0; i < p7vec1[6]; i++) {
        if ((i + 1) == p7vec1[6]) {
            p7ta4.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p71dco'+i+'">');
        } else {
            p7ta4.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p71dco'+i+'"> + ');
        }
    }
    $('#p7im4').html(p7ta4);

    var p8vec1 = [(Math.floor(Math.random() * 7) + 2), (Math.floor(Math.random() * 7) + 2)];
    var p8vc1=[];
    var p8c1=2;
    for (var i = 0; i < p8vec1[0]; i++) {
        if (p8c1>'4') {
            p8c1=2;
            i--;
        }else{
            p8vc1.push('<img src="img/i'+p8c1+'_p200_u5a18.jpg" style="display: inline-block; width:100px;" alt="" >');
            p8c1++;
        }
    }
    $('#p1cim1').html(p8vc1);
    $('#p8im1').text(p8vec1[0]);
    var p8ta1 = [];
    for (var i = 0; i < p8vec1[0]; i++) {
        if ((i + 1) == p8vec1[0]) {
            p8ta1.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p8dco'+i+'">');
        } else {
            p8ta1.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p8dco'+i+'"> + ');
        }
    }
    $('#p8c1').html(p8ta1);

    var p8vc2=[];
    for (var i = 0; i < p8vec1[1]; i++) {
        p8vc2.push('<img src="img/i5_p200_u5a18.jpg" style="display: inline-block; width:150px;" alt="">');
        p8c2++;
    }
    $('#p1cim2').html(p8vc2);
    $('#p8im2').text(p8vec1[1]);
    var p8ta2 = [];
    for (var i = 0; i < p8vec1[1]; i++) {
        if ((i + 1) == p8vec1[1]) {
            p8ta2.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p81dco'+i+'">');
        } else {
            p8ta2.push('<input type="text" style="border-radius: 10px; width: 30px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p81dco'+i+'"> + ');
        }
    }
    $('#p8c2').html(p8ta2);

    var p9vec1 = [(Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2)];
    var p9t1 = [];
    for (var i = 0; i < p9vec1[0]; i++) {
        p9t1.push('<tr id="p9c'+i+'"></tr>');
    }
    $('#p9im1').html(p9t1);
    var p9v1=[];
    for (var i = 0; i < p9vec1[1]; i++) {
        p9v1.push('<td><img src="img/i6_p200_u5a18.jpg" class="img-responsive" alt=""/></td>');
    }
    for (var i = 0; i < p9vec1[0]; i++) {
        $('#p9c' + i).html(p9v1);
    }

    var p9t2 = [];
    for (var i = 0; i < p9vec1[2]; i++) {
        p9t2.push('<tr id="p91c'+i+'"></tr>');
    }
    $('#p9im2').html(p9t2);
    var p9v2=[];
    for (var i = 0; i < p9vec1[3]; i++) {
        p9v2.push('<td><img src="img/i7_p200_u5a18.jpg" class="img-responsive" alt=""/></td>');
    }
    for (var i = 0; i < p9vec1[2]; i++) {
        $('#p91c' + i).html(p9v2);
    }

    var p9t3 = [];
    for (var i = 0; i < p9vec1[4]; i++) {
        p9t3.push('<tr id="p92c'+i+'"></tr>');
    }
    $('#p9im3').html(p9t3);
    var p9v3=[];
    for (var i = 0; i < p9vec1[5]; i++) {
        p9v3.push('<td><img src="img/i8_p200_u5a18.jpg" class="img-responsive" alt=""/></td>');
    }
    for (var i = 0; i < p9vec1[4]; i++) {
        $('#p92c' + i).html(p9v3);
    }
    bt_comprobar.addEventListener("click", preg4);
    function preg4() {
        cor = 0;
        var pre4a = $('#pre4a').val();
        if (!pre4a) {
            alert('Ingrese la calificación en la Pregunta 4.')
        } else {
            cor = cor + parseFloat(pre4a);
            inc = inc + (2 - parseFloat(pre4a));
            $('#pre4a').val(parseFloat(pre4a).toFixed(2));
            $('#pre4a').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg4);
        var p1vec1=['ricardo', 'josé', 'daniel', 'ramón', 'maría', 'ruth', 'sonia', 'dalia'];
        var p1cont1=0;
        
        for (var i = 0; i < 8; i++) {
            var p1cont2=0;
            for (var j = 0; j < p1vec1.length; j++) {
                var p1res1=$('#p1dcon'+(i+1)).val().toLowerCase();
                if (p1res1==p1vec1[j]) {
                    p1cont2++;
                    p1vec1[j]=000;
                }
            }
            if (p1cont2=='1') {
                p1cont1++;
                f_ok($('#p1dcon'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1dcon'+(i+1)));
            }
        }
        var p1vec2=[200, 300, 400, 500, 600, 700];
        
        for (var i = 0; i < 6; i++) {
            var p1cont3=0;
            for (var j = 0; j < p1vec2.length; j++) {
                var p1res2=$('#p1dcon1'+(i+1)).val().toLowerCase();
                if (p1res2==p1vec2[j]) {
                    p1cont3++;
                    p1vec2[j]=000;
                }
            }
            if (p1cont3=='1') {
                p1cont1++;
                f_ok($('#p1dcon1'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1dcon1'+(i+1)));
            }
        }
        var result1 = (p1cont1 * 1) / 14;
        cor = cor + result1;
        inc = inc + (1 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var num1 = p1n1;
        var num2 = p1n2;
        var num3 = p1n3;
        var num4 = p1n4;
        var num5 = p1n5;
        var num6 = p1n6;
        var num7 = p1n7;
        var num8 = p1n8;
        var p2cont1=0;
        var dif = parseInt(num1) + parseInt(num2);
        var res =
            $("#nlrd" + [6] + "").val() +
            $("#nlrd" + [7] + "").val() +
            $("#nlrd" + [8] + "").val();

        if (dif == res) {
            p2cont1++;
            f_ok($("#nlrd6"));
            f_ok($("#nlrd7"));
            f_ok($("#nlrd8"));
        } else {
            p2cont1;
            f_no($("#nlrd6"));
            f_no($("#nlrd7"));
            f_no($("#nlrd8"));
        }
        var dif1 = parseInt(num3) + parseInt(num4);
        var res1 =
            $("#nlrd2" + [6] + "").val() +
            $("#nlrd2" + [7] + "").val() +
            $("#nlrd2" + [8] + "").val();

        if (dif1 == res1) {
            p2cont1++;
            f_ok($("#nlrd26"));
            f_ok($("#nlrd27"));
            f_ok($("#nlrd28"));
        } else {
            p2cont1;
            f_no($("#nlrd26"));
            f_no($("#nlrd27"));
            f_no($("#nlrd28"));
        }
        var dif2 = parseInt(num5) - parseInt(num6);
        var res2 =
            $("#nlrd1" + [6] + "").val() +
            $("#nlrd1" + [7] + "").val() +
            $("#nlrd1" + [8] + "").val();

        if (dif2 == res2) {
            p2cont1++;
            f_ok($("#nlrd16"));
            f_ok($("#nlrd17"));
            f_ok($("#nlrd18"));
        } else {
            p2cont1;
            f_no($("#nlrd16"));
            f_no($("#nlrd17"));
            f_no($("#nlrd18"));
        }
        var dif3 = parseInt(num7) - parseInt(num8);
        var res3 =
            $("#nlrd3" + [6] + "").val() +
            $("#nlrd3" + [7] + "").val() +
            $("#nlrd3" + [8] + "").val();

        if (dif3 == res3) {
            p2cont1++;
            f_ok($("#nlrd36"));
            f_ok($("#nlrd37"));
            f_ok($("#nlrd38"));
        } else {
            p2cont1;
            f_no($("#nlrd36"));
            f_no($("#nlrd37"));
            f_no($("#nlrd38"));
        }
        var result2 = (p2cont1 * 1) / 4;
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        var nlrd1 = $('#nlrd46').val() + $('#nlrd47').val() + $('#nlrd48').val();
        var nlrd2 = $('#nlrd50').val() + $('#nlrd51').val() + $('#nlrd52').val();
        var nlrd3 = $('#nlrd56').val() + $('#nlrd57').val() + $('#nlrd58').val();
        var nlrd4 = $('#nlrd66').val() + $('#nlrd67').val() + $('#nlrd68').val();
        var nlrd5 = $('#nlrd70').val() + $('#nlrd71').val() + $('#nlrd72').val();
        var nlrd6 = $('#nlrd76').val() + $('#nlrd77').val() + $('#nlrd78').val();
        var p3cont1 = 0;
        if (nlrd1 == (p3vec1[1] + p3vec1[0])) {
            p3cont1++;
            f_ok($('#nlrd46'));
            f_ok($('#nlrd47'));
            f_ok($('#nlrd48'));
        } else {
            p3cont1;
            f_no($('#nlrd46'));
            f_no($('#nlrd47'));
            f_no($('#nlrd48'));
        }
        if (nlrd2 == (p3vec1[1] + p3vec1[0])) {
            p3cont1++;
            f_ok($('#nlrd50'));
            f_ok($('#nlrd51'));
            f_ok($('#nlrd52'));
        } else {
            p3cont1;
            f_no($('#nlrd50'));
            f_no($('#nlrd51'));
            f_no($('#nlrd52'));
        }
        if (nlrd3 == (p3vec1[0])) {
            p3cont1++;
            f_ok($('#nlrd56'));
            f_ok($('#nlrd57'));
            f_ok($('#nlrd58'));
        } else {
            p3cont1;
            f_no($('#nlrd56'));
            f_no($('#nlrd57'));
            f_no($('#nlrd58'));
        }
        if (nlrd4 == (p3n7 - p3n8)) {
            p3cont1++;
            f_ok($('#nlrd66'));
            f_ok($('#nlrd67'));
            f_ok($('#nlrd68'));
        } else {
            p3cont1;
            f_no($('#nlrd66'));
            f_no($('#nlrd67'));
            f_no($('#nlrd68'));
        }
        if (nlrd5 == (p3n7 - p3n8)) {
            p3cont1++;
            f_ok($('#nlrd70'));
            f_ok($('#nlrd71'));
            f_ok($('#nlrd72'));
        } else {
            p3cont1;
            f_no($('#nlrd70'));
            f_no($('#nlrd71'));
            f_no($('#nlrd72'));
        }
        if (nlrd6 == (p3n7)) {
            p3cont1++;
            f_ok($('#nlrd76'));
            f_ok($('#nlrd77'));
            f_ok($('#nlrd78'));
        } else {
            p3cont1;
            f_no($('#nlrd76'));
            f_no($('#nlrd77'));
            f_no($('#nlrd78'));
        }
        var result3 = (p3cont1 * 1) / 6;
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');

        var p5cont1=0;
        for (var i = 0; i < p5vec3.length; i++) {
            var p5res1=$('#p5dcon'+(i+1)).val();
            if (p5res1==p5vec3[i]) {
                p5cont1++;
                f_ok($('#p5dcon'+(i+1)));
            }else{
                p5cont1;
                f_no($('#p5dcon'+(i+1)));
            }
        }
        var result5 = (p5cont1 * 1) / 4;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#pre5a').val(result5.toFixed(2));
        $('#pre5a').css('display', '');

        var p6dcon1=$('#p6dcon1').val();
        var p6dcon2=$('#p6dcon2').val();
        var p6dcon3=$('#p6dcon3').val();
        var p6dcon4=$('#p6dcon4').val();
        var p6dcon5=$('#p6dcon5').val();
        var p6dcon6=$('#p6dcon6').val();
        var p6dcon7=$('#p6dcon7').val();
        var p6cont1=0;
        if (p6dcon1==p6vec1[0]) {
            p6cont1++;
            f_ok($('#p6dcon1'));
        }else{
            p6cont1;
            f_no($('#p6dcon1'));
        }
        if (p6dcon2==p6vec1[0]) {
            p6cont1++;
            f_ok($('#p6dcon2'));
        }else{
            p6cont1;
            f_no($('#p6dcon2'));
        }
        if (p6dcon3==(p6vec1[0]*2)) {
            p6cont1++;
            f_ok($('#p6dcon3'));
        }else{
            p6cont1;
            f_no($('#p6dcon3'));
        }
        if (p6dcon4==p6vec1[0]) {
            p6cont1++;
            f_ok($('#p6dcon4'));
        }else{
            p6cont1;
            f_no($('#p6dcon4'));
        }
        if (p6dcon5==p6vec1[0]) {
            p6cont1++;
            f_ok($('#p6dcon5'));
        }else{
            p6cont1;
            f_no($('#p6dcon5'));
        }
        if (p6dcon6==p6vec1[0]) {
            p6cont1++;
            f_ok($('#p6dcon6'));
        }else{
            p6cont1;
            f_no($('#p6dcon6'));
        }
        if (p6dcon7==(p6vec1[0]*3)) {
            p6cont1++;
            f_ok($('#p6dcon7'));
        }else{
            p6cont1;
            f_no($('#p6dcon7'));
        }

        var p6dcon11=$('#p6dcon11').val();
        var p6dcon12=$('#p6dcon12').val();
        var p6dcon13=$('#p6dcon13').val();
        var p6dcon14=$('#p6dcon14').val();
        var p6dcon15=$('#p6dcon15').val();
        var p6dcon16=$('#p6dcon16').val();
        var p6dcon17=$('#p6dcon17').val();
        if (p6dcon11==p6vec1[1]) {
            p6cont1++;
            f_ok($('#p6dcon11'));
        }else{
            p6cont1;
            f_no($('#p6dcon11'));
        }
        if (p6dcon12==p6vec1[1]) {
            p6cont1++;
            f_ok($('#p6dcon12'));
        }else{
            p6cont1;
            f_no($('#p6dcon12'));
        }
        if (p6dcon13==(p6vec1[1]*2)) {
            p6cont1++;
            f_ok($('#p6dcon13'));
        }else{
            p6cont1;
            f_no($('#p6dcon13'));
        }
        if (p6dcon14==p6vec1[1]) {
            p6cont1++;
            f_ok($('#p6dcon14'));
        }else{
            p6cont1;
            f_no($('#p6dcon14'));
        }
        if (p6dcon15==p6vec1[1]) {
            p6cont1++;
            f_ok($('#p6dcon15'));
        }else{
            p6cont1;
            f_no($('#p6dcon15'));
        }
        if (p6dcon16==p6vec1[1]) {
            p6cont1++;
            f_ok($('#p6dcon16'));
        }else{
            p6cont1;
            f_no($('#p6dcon16'));
        }
        if (p6dcon17==(p6vec1[1]*3)) {
            p6cont1++;
            f_ok($('#p6dcon17'));
        }else{
            p6cont1;
            f_no($('#p6dcon17'));
        }
        var p6dcon21=$('#p6dcon21').val();
        var p6dcon22=$('#p6dcon22').val();
        var p6dcon23=$('#p6dcon23').val();
        var p6dcon24=$('#p6dcon24').val();
        var p6dcon25=$('#p6dcon25').val();
        var p6dcon26=$('#p6dcon26').val();
        var p6dcon27=$('#p6dcon27').val();
        if (p6dcon21==p6vec1[2]) {
            p6cont1++;
            f_ok($('#p6dcon21'));
        }else{
            p6cont1;
            f_no($('#p6dcon21'));
        }
        if (p6dcon22==p6vec1[2]) {
            p6cont1++;
            f_ok($('#p6dcon22'));
        }else{
            p6cont1;
            f_no($('#p6dcon22'));
        }
        if (p6dcon23==(p6vec1[2]*2)) {
            p6cont1++;
            f_ok($('#p6dcon23'));
        }else{
            p6cont1;
            f_no($('#p6dcon23'));
        }
        if (p6dcon24==p6vec1[2]) {
            p6cont1++;
            f_ok($('#p6dcon24'));
        }else{
            p6cont1;
            f_no($('#p6dcon24'));
        }
        if (p6dcon25==p6vec1[2]) {
            p6cont1++;
            f_ok($('#p6dcon25'));
        }else{
            p6cont1;
            f_no($('#p6dcon25'));
        }
        if (p6dcon26==p6vec1[2]) {
            p6cont1++;
            f_ok($('#p6dcon26'));
        }else{
            p6cont1;
            f_no($('#p6dcon26'));
        }
        if (p6dcon27==(p6vec1[2]*3)) {
            p6cont1++;
            f_ok($('#p6dcon27'));
        }else{
            p6cont1;
            f_no($('#p6dcon27'));
        }
        var p6dcon31=$('#p6dcon31').val();
        var p6dcon32=$('#p6dcon32').val();
        var p6dcon33=$('#p6dcon33').val();
        var p6dcon34=$('#p6dcon34').val();
        var p6dcon35=$('#p6dcon35').val();
        var p6dcon36=$('#p6dcon36').val();
        var p6dcon37=$('#p6dcon37').val();
        if (p6dcon31==p6vec1[3]) {
            p6cont1++;
            f_ok($('#p6dcon31'));
        }else{
            p6cont1;
            f_no($('#p6dcon31'));
        }
        if (p6dcon32==p6vec1[3]) {
            p6cont1++;
            f_ok($('#p6dcon32'));
        }else{
            p6cont1;
            f_no($('#p6dcon32'));
        }
        if (p6dcon33==(p6vec1[3]*2)) {
            p6cont1++;
            f_ok($('#p6dcon33'));
        }else{
            p6cont1;
            f_no($('#p6dcon33'));
        }
        if (p6dcon34==p6vec1[3]) {
            p6cont1++;
            f_ok($('#p6dcon34'));
        }else{
            p6cont1;
            f_no($('#p6dcon34'));
        }
        if (p6dcon35==p6vec1[3]) {
            p6cont1++;
            f_ok($('#p6dcon35'));
        }else{
            p6cont1;
            f_no($('#p6dcon35'));
        }
        if (p6dcon36==p6vec1[3]) {
            p6cont1++;
            f_ok($('#p6dcon36'));
        }else{
            p6cont1;
            f_no($('#p6dcon36'));
        }
        if (p6dcon37==(p6vec1[3]*3)) {
            p6cont1++;
            f_ok($('#p6dcon37'));
        }else{
            p6cont1;
            f_no($('#p6dcon37'));
        }
        var result6 = (p6cont1 * 1) / 28;
        cor = cor + result6;
        inc = inc + (1 - result6);
        $('#pre6a').val(result6.toFixed(2));
        $('#pre6a').css('display', '');

        var p7dcon1=$('#p7dcon1').val();
        var p7dcon2=$('#p7dcon2').val();
        var p7cont1=0;
        if (p7dcon1==p7vec1[0]) {
            p7cont1++;
            f_ok($('#p7dcon1'));
        }else{
            p7cont1;
            f_no($('#p7dcon1'));
        }
        if (p7dcon2==p7vec1[1]) {
            p7cont1++;
            f_ok($('#p7dcon2'));
        }else{
            p7cont1;
            f_no($('#p7dcon2'));
        }
        var p7dcon21=$('#p7dcon21').val();
        var p7dcon22=$('#p7dcon22').val();
        if (p7dcon21==p7vec1[4]) {
            p7cont1++;
            f_ok($('#p7dcon21'));
        }else{
            p7cont1;
            f_no($('#p7dcon21'));
        }
        if (p7dcon22==p7vec1[5]) {
            p7cont1++;
            f_ok($('#p7dcon22'));
        }else{
            p7cont1;
            f_no($('#p7dcon22'));
        }
        for (var i = 0; i < p7vec1[2]; i++) {
            var p7res1=$('#p7dco'+i).val();
            if (p7res1==p7vec1[3]) {
                p7cont1++;
                f_ok($('#p7dco'+i));
            }else{
                p7cont1;
                f_no($('#p7dco'+i));
            }
        }
        for (var i = 0; i < p7vec1[6]; i++) {
            var p7res2=$('#p71dco'+i).val();
            if (p7res2==p7vec1[7]) {
                p7cont1++;
                f_ok($('#p71dco'+i));
            }else{
                p7cont1;
                f_no($('#p71dco'+i));
            }
        }
        var result7 = (p7cont1 * 1) / (4+p7vec1[2]+p7vec1[6]);
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#pre7a').val(result7.toFixed(2));
        $('#pre7a').css('display', '');

        var p8dcon1=$('#p8dcon1').val();
        var p8dcon2=$('#p8dcon2').val();
        var p8dcon3=$('#p8dcon3').val();
        var p8cont1=0;
        if (p8dcon1==p8vec1[0]) {
            p8cont1++;
            f_ok($('#p8dcon1'));
        }else{
            p8cont1;
            f_no($('#p8dcon1'));
        }
        if (p8dcon2=='4') {
            p8cont1++;
            f_ok($('#p8dcon2'));
        }else{
            p8cont1;
            f_no($('#p8dcon2'));
        }
        if (p8dcon3==(p8vec1[0]*4)) {
            p8cont1++;
            f_ok($('#p8dcon3'));
        }else{
            p8cont1;
            f_no($('#p8dcon3'));
        }
        var p8dcon11=$('#p8dcon11').val();
        var p8dcon12=$('#p8dcon12').val();
        var p8dcon13=$('#p8dcon13').val();
        if (p8dcon11==p8vec1[0]) {
            p8cont1++;
            f_ok($('#p8dcon11'));
        }else{
            p8cont1;
            f_no($('#p8dcon11'));
        }
        if (p8dcon12=='4') {
            p8cont1++;
            f_ok($('#p8dcon12'));
        }else{
            p8cont1;
            f_no($('#p8dcon12'));
        }
        if (p8dcon13==(p8vec1[0]*4)) {
            p8cont1++;
            f_ok($('#p8dcon13'));
        }else{
            p8cont1;
            f_no($('#p8dcon13'));
        }

        var p8dcon21=$('#p8dcon21').val();
        var p8dcon22=$('#p8dcon22').val();
        var p8dcon23=$('#p8dcon23').val();
        if (p8dcon21==p8vec1[1]) {
            p8cont1++;
            f_ok($('#p8dcon21'));
        }else{
            p8cont1;
            f_no($('#p8dcon21'));
        }
        if (p8dcon22=='10') {
            p8cont1++;
            f_ok($('#p8dcon22'));
        }else{
            p8cont1;
            f_no($('#p8dcon22'));
        }
        if (p8dcon23==(p8vec1[1]*10)) {
            p8cont1++;
            f_ok($('#p8dcon23'));
        }else{
            p8cont1;
            f_no($('#p8dcon23'));
        }

        var p8dcon31=$('#p8dcon31').val();
        var p8dcon32=$('#p8dcon32').val();
        var p8dcon33=$('#p8dcon33').val();
        if (p8dcon31==p8vec1[1]) {
            p8cont1++;
            f_ok($('#p8dcon31'));
        }else{
            p8cont1;
            f_no($('#p8dcon31'));
        }
        if (p8dcon32=='10') {
            p8cont1++;
            f_ok($('#p8dcon32'));
        }else{
            p8cont1;
            f_no($('#p8dcon32'));
        }
        if (p8dcon33==(p8vec1[1]*10)) {
            p8cont1++;
            f_ok($('#p8dcon33'));
        }else{
            p8cont1;
            f_no($('#p8dcon33'));
        }
        for (var i = 0; i < p8vec1[0]; i++) {
            var p8res1=$('#p8dco'+i).val();
            if (p8res1=='4') {
                p8cont1++;
                f_ok($('#p8dco'+i));
            }else{
                p8cont1;
                f_no($('#p8dco'+i));
            }
        }
        for (var i = 0; i < p8vec1[1]; i++) {
            var p8res1=$('#p81dco'+i).val();
            if (p8res1=='10') {
                p8cont1++;
                f_ok($('#p81dco'+i));
            }else{
                p8cont1;
                f_no($('#p81dco'+i));
            }
        }
        var p8dc1=$('#p8dc1').val();
        var p8dc2=$('#p8dc2').val();
        if (p8dc1==(p8vec1[0]*4)) {
            p8cont1++;
            f_ok($('#p8dc1'));
        }else{
            p8cont1;
            f_no($('#p8dc1'));
        }
        if (p8dc2==(p8vec1[1]*10)) {
            p8cont1++;
            f_ok($('#p8dc2'));
        }else{
            p8cont1;
            f_no($('#p8dc2'));
        }
        var result8 = (p8cont1 * 2) / (14+p8vec1[0]+p8vec1[1]);
        cor = cor + result8;
        inc = inc + (2 - result8);
        $('#pre8a').val(result8.toFixed(2));
        $('#pre8a').css('display', '');

        var p9dcon1=$('#p9dcon1').val();
        var p9dcon2=$('#p9dcon2').val();
        var p9dcon3=$('#p9dcon3').val();
        var p9cont1=0;
        if (p9dcon1==(p9vec1[0])) {
            p9cont1++;
            f_ok($('#p9dcon1'));
        }else{
            p9cont1;
            f_no($('#p9dcon1'));
        }
        if (p9dcon2==(p9vec1[1])) {
            p9cont1++;
            f_ok($('#p9dcon2'));
        }else{
            p9cont1;
            f_no($('#p9dcon2'));
        }
        if (p9dcon3==(p9vec1[0]*p9vec1[1])) {
            p9cont1++;
            f_ok($('#p9dcon3'));
        }else{
            p9cont1;
            f_no($('#p9dcon3'));
        }

        var p9dcon11=$('#p9dcon11').val();
        var p9dcon12=$('#p9dcon12').val();
        var p9dcon13=$('#p9dcon13').val();
        if (p9dcon11==(p9vec1[0])) {
            p9cont1++;
            f_ok($('#p9dcon11'));
        }else{
            p9cont1;
            f_no($('#p9dcon11'));
        }
        if (p9dcon12==(p9vec1[1])) {
            p9cont1++;
            f_ok($('#p9dcon12'));
        }else{
            p9cont1;
            f_no($('#p9dcon12'));
        }
        if (p9dcon13==(p9vec1[0]*p9vec1[1])) {
            p9cont1++;
            f_ok($('#p9dcon13'));
        }else{
            p9cont1;
            f_no($('#p9dcon13'));
        }

        var p9dcon21=$('#p9dcon21').val();
        var p9dcon22=$('#p9dcon22').val();
        var p9dcon23=$('#p9dcon23').val();
        if (p9dcon21==(p9vec1[2])) {
            p9cont1++;
            f_ok($('#p9dcon21'));
        }else{
            p9cont1;
            f_no($('#p9dcon21'));
        }
        if (p9dcon22==(p9vec1[3])) {
            p9cont1++;
            f_ok($('#p9dcon22'));
        }else{
            p9cont1;
            f_no($('#p9dcon22'));
        }
        if (p9dcon23==(p9vec1[2]*p9vec1[3])) {
            p9cont1++;
            f_ok($('#p9dcon23'));
        }else{
            p9cont1;
            f_no($('#p9dcon23'));
        }
        var p9dcon31=$('#p9dcon31').val();
        var p9dcon32=$('#p9dcon32').val();
        var p9dcon33=$('#p9dcon33').val();
        if (p9dcon31==(p9vec1[2])) {
            p9cont1++;
            f_ok($('#p9dcon31'));
        }else{
            p9cont1;
            f_no($('#p9dcon31'));
        }
        if (p9dcon32==(p9vec1[3])) {
            p9cont1++;
            f_ok($('#p9dcon32'));
        }else{
            p9cont1;
            f_no($('#p9dcon32'));
        }
        if (p9dcon33==(p9vec1[2]*p9vec1[3])) {
            p9cont1++;
            f_ok($('#p9dcon33'));
        }else{
            p9cont1;
            f_no($('#p9dcon33'));
        }

        var p9dcon41=$('#p9dcon41').val();
        var p9dcon42=$('#p9dcon42').val();
        var p9dcon43=$('#p9dcon43').val();
        if (p9dcon41==(p9vec1[4])) {
            p9cont1++;
            f_ok($('#p9dcon41'));
        }else{
            p9cont1;
            f_no($('#p9dcon41'));
        }
        if (p9dcon42==(p9vec1[5])) {
            p9cont1++;
            f_ok($('#p9dcon42'));
        }else{
            p9cont1;
            f_no($('#p9dcon42'));
        }
        if (p9dcon43==(p9vec1[4]*p9vec1[5])) {
            p9cont1++;
            f_ok($('#p9dcon43'));
        }else{
            p9cont1;
            f_no($('#p9dcon43'));
        }
        var p9dcon51=$('#p9dcon51').val();
        var p9dcon52=$('#p9dcon52').val();
        var p9dcon53=$('#p9dcon53').val();
        if (p9dcon51==(p9vec1[4])) {
            p9cont1++;
            f_ok($('#p9dcon51'));
        }else{
            p9cont1;
            f_no($('#p9dcon51'));
        }
        if (p9dcon52==(p9vec1[5])) {
            p9cont1++;
            f_ok($('#p9dcon52'));
        }else{
            p9cont1;
            f_no($('#p9dcon52'));
        }
        if (p9dcon53==(p9vec1[4]*p9vec1[5])) {
            p9cont1++;
            f_ok($('#p9dcon53'));
        }else{
            p9cont1;
            f_no($('#p9dcon53'));
        }
        var result9 = (p9cont1 * 1) / 18;
        cor = cor + result9;
        inc = inc + (1 - result9);
        $('#pre9a').val(result9.toFixed(2));
        $('#pre9a').css('display', '');
        Calculo_nota();
    }
}