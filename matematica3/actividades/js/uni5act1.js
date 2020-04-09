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
document.getElementById('pre8a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre8a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre8a'), 2)
});
function f_iniciar() {
    var p2vec1 = [
        '<tr align="center">' +
        '<td><img src="img/i4_p178_u5a1.jpg" class="img-responsive"></td>' +
        '<td><b>(</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon1" maxlength="1"></td>' +
        '<td><b>,</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon2" maxlength="1"></td>' +
        '<td><b>)</b></td>' +
        '</tr>',
        '<tr align="center">' +
        '<td><img src="img/i5_p178_u5a1.jpg" class="img-responsive"></td>' +
        '<td><b>(</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon3" maxlength="1"></td>' +
        '<td><b>,</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon4" maxlength="1"></td>' +
        '<td><b>)</b></td>' +
        '</tr>',
        '<tr align="center">' +
        '<td><img src="img/i6_p178_u5a1.jpg" class="img-responsive"></td>' +
        '<td><b>(</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon5" maxlength="1"></td>' +
        '<td><b>,</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon6" maxlength="1"></td>' +
        '<td><b>)</b></td>' +
        '</tr>',
        '<tr align="center">' +
        '<td><img src="img/i7_p178_u5a1.jpg" class="img-responsive"></td>' +
        '<td><b>(</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon7" maxlength="1"></td>' +
        '<td><b>,</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon8" maxlength="1"></td>' +
        '<td><b>)</b></td>' +
        '</tr>',
        '<tr align="center">' +
        '<td><img src="img/i8_p178_u5a1.jpg" class="img-responsive"></td>' +
        '<td><b>(</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon9" maxlength="1"></td>' +
        '<td><b>,</b></td>' +
        '<td><input type="text" style="text-align: center;" class="form-control" onkeyup="mayus1(this)" id="p2dcon10" maxlength="1"></td>' +
        '<td><b>)</b></td>' +
        '</tr>'
    ];
    p2vec1.sort(f_randomico);
    $('#p2im1').html(p2vec1);

    var n1 = (Math.floor(Math.random() * 50) + 10);
    var n2 = (Math.floor(Math.random() * 50) + 10);

    $("#nm41").val('-' + n1);
    $("#nm41").attr("disabled", "true");

    $("#nm42").val('+' + n2);
    $("#nm42").attr("disabled", "true");
    var vector1 = [];
    for (i = 0; i < 12; i++) {
        if (i >= 0 && i < 6) {
            var numero = (Math.floor(Math.random() * 900) + 100);
            vector1.push(numero - n1);
        }
        if (i >= 6 && i < 12) {
            var numero = (Math.floor(Math.random() * 500) + 100);
            vector1.push(numero + n2);
        }
        $("#nm" + [i] + "").val(numero);
        $("#nm" + [i] + "").attr("disabled", "true");
    }

    var vn = [];
    var n = [];
    for (i = 0; i < 5; i++) {
        numero = parseInt(Math.random() * 500 + 10);
        if (numero % 2 == 0) {
            n.push(numero);
            $("#p4r" + [i] + "").html(n[i]);
        } else {
            i--;
        }
    }
    for (i = 0; i < 5; i++) {
        vn.push(n[i] / 2);
    }
    for (i = 0; i < 5; i++) {
        vn.push(n[i] * 2);
    }

    var p5n1 = (Math.floor(Math.random() * 400) + 100);
    var p5n2 = (Math.floor(Math.random() * 400) + 100);
    var p5n3 = (Math.floor(Math.random() * 400) + 100);
    var p5n4 = (Math.floor(Math.random() * 400) + 100);
    var p5n5=(Math.floor(Math.random() * 600) + 100);
    var p5n6=(Math.floor(Math.random() * 600) + 100);
    if (p5n5>p5n6) {
        p5n5;
        p5n6;
    }else{
        var p5c1=p5n5;
        var p5c2=p5n6;
        p5n5=p5c2;
        p5n6=p5c1;
    }
    var p5n7=(Math.floor(Math.random() * 600) + 100);
    var p5n8=(Math.floor(Math.random() * 600) + 100);
    if (p5n7>p5n8) {
        p5n7;
        p5n8;
    }else{
        var p5c3=p5n7;
        var p5c4=p5n8;
        p5n7=p5c4;
        p5n8=p5c3;
    }
    var p5sp1=p5n1.toString().split('');
    $('#nla0').val(p5sp1[0]);
    $('#nla0').attr('disabled','true');
    $('#nla1').val(p5sp1[1]);
    $('#nla1').attr('disabled','true');
    $('#nla2').val(p5sp1[2]);
    $('#nla2').attr('disabled','true');
    var p5sp2=p5n2.toString().split('');
    $('#nlsa0').val(p5sp2[0]);
    $('#nlsa0').attr('disabled','true');
    $('#nlsa1').val(p5sp2[1]);
    $('#nlsa1').attr('disabled','true');
    $('#nlsa2').val(p5sp2[2]);
    $('#nlsa2').attr('disabled','true');
    var p5sp3=p5n3.toString().split('');
    $('#nlb0').val(p5sp3[0]);
    $('#nlb0').attr('disabled','true');
    $('#nlb1').val(p5sp3[1]);
    $('#nlb1').attr('disabled','true');
    $('#nlb2').val(p5sp3[2]);
    $('#nlb2').attr('disabled','true');
    var p5sp4=p5n4.toString().split('');
    $('#nlsb0').val(p5sp4[0]);
    $('#nlsb0').attr('disabled','true');
    $('#nlsb1').val(p5sp4[1]);
    $('#nlsb1').attr('disabled','true');
    $('#nlsb2').val(p5sp4[2]);
    $('#nlsb2').attr('disabled','true');
    var p5sp5=p5n5.toString().split('');
    $('#nlc0').val(p5sp5[0]);
    $('#nlc0').attr('disabled','true');
    $('#nlc1').val(p5sp5[1]);
    $('#nlc1').attr('disabled','true');
    $('#nlc2').val(p5sp5[2]);
    $('#nlc2').attr('disabled','true');
    var p5sp6=p5n6.toString().split('');
    $('#nlsc0').val(p5sp6[0]);
    $('#nlsc0').attr('disabled','true');
    $('#nlsc1').val(p5sp6[1]);
    $('#nlsc1').attr('disabled','true');
    $('#nlsc2').val(p5sp6[2]);
    $('#nlsc2').attr('disabled','true');
    var p5sp7=p5n7.toString().split('');
    $('#nld0').val(p5sp7[0]);
    $('#nld0').attr('disabled','true');
    $('#nld1').val(p5sp7[1]);
    $('#nld1').attr('disabled','true');
    $('#nld2').val(p5sp7[2]);
    $('#nld2').attr('disabled','true');
    var p5sp8=p5n8.toString().split('');
    $('#nlsd0').val(p5sp8[0]);
    $('#nlsd0').attr('disabled','true');
    $('#nlsd1').val(p5sp8[1]);
    $('#nlsd1').attr('disabled','true');
    $('#nlsd2').val(p5sp8[2]);
    $('#nlsd2').attr('disabled','true');

    var p6vec1=[(Math.floor(Math.random() * 10) + 1),(Math.floor(Math.random() * 10) + 1),(Math.floor(Math.random() * 10) + 1),(Math.floor(Math.random() * 10) + 1)];
    var p6vec2=[];
    for (var i = 0; i < p6vec1.length; i++) {
        $('#p6im'+(i+1)).html(p6vec1[i]);

    }
    p6vec2.push(p6vec1[0]*25);
    p6vec2.push(p6vec1[1]*100);
    p6vec2.push(p6vec1[2]*4);
    p6vec2.push(p6vec1[3]*25);
    bt_comprobar.addEventListener("click", preg8);
    function preg8() {
        cor = 0;
        var pre8a = $('#pre8a').val();
        if (!pre8a) {
            alert('Ingrese la calificación en la Pregunta 8.')
        } else {
            cor = cor + parseFloat(pre8a);
            inc = inc + (2 - parseFloat(pre8a));
            $('#pre8a').val(parseFloat(pre8a).toFixed(2));
            $('#pre8a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg8);
        var p1im1 = $('#p1im1').val();
        var p1im2 = $('#p1im2').val();
        var p1im3 = $('#p1im3').val();
        var p1im4 = $('#p1im4').val();
        var p1cont1 = 0;
        if (p1im1 == 'extensión') {
            p1cont1++;
            f_ok($('#p1im1'));
        } else {
            p1cont1;
            f_no($('#p1im1'));
        }
        if (p1im2 == 'comprensión') {
            p1cont1++;
            f_ok($('#p1im2'));
        } else {
            p1cont1;
            f_no($('#p1im2'));
        }
        if (p1im3 == 'comprensión') {
            p1cont1++;
            f_ok($('#p1im3'));
        } else {
            p1cont1;
            f_no($('#p1im3'));
        }
        if (p1im4 == 'extensión') {
            p1cont1++;
            f_ok($('#p1im4'));
        } else {
            p1cont1;
            f_no($('#p1im4'));
        }
        var result1 = (p1cont1 * 1) / 4;
        cor = cor + result1;
        inc = inc + (1 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2dcon1 = [$('#p2dcon1').val(), $('#p2dcon2').val()];
        var p2dcon2 = [$('#p2dcon3').val(), $('#p2dcon4').val()];
        var p2dcon3 = [$('#p2dcon5').val(), $('#p2dcon6').val()];
        var p2dcon4 = [$('#p2dcon7').val(), $('#p2dcon8').val()];
        var p2dcon5 = [$('#p2dcon9').val(), $('#p2dcon10').val()];
        var p2cont1 = 0;
        if (p2dcon1.join('') == 'A3') {
            p2cont1++;
            f_ok($('#p2dcon1'));
            f_ok($('#p2dcon2'));
        } else {
            p2cont1;
            f_no($('#p2dcon1'));
            f_no($('#p2dcon2'));
        }
        if (p2dcon2.join('') == 'B3') {
            p2cont1++;
            f_ok($('#p2dcon3'));
            f_ok($('#p2dcon4'));
        } else {
            p2cont1;
            f_no($('#p2dcon3'));
            f_no($('#p2dcon4'));
        }
        if (p2dcon3.join('') == 'B1') {
            p2cont1++;
            f_ok($('#p2dcon5'));
            f_ok($('#p2dcon6'));
        } else {
            p2cont1;
            f_no($('#p2dcon5'));
            f_no($('#p2dcon6'));
        }
        if (p2dcon4.join('') == 'C2') {
            p2cont1++;
            f_ok($('#p2dcon7'));
            f_ok($('#p2dcon8'));
        } else {
            p2cont1;
            f_no($('#p2dcon7'));
            f_no($('#p2dcon8'));
        }
        if (p2dcon5.join('') == 'D4') {
            p2cont1++;
            f_ok($('#p2dcon9'));
            f_ok($('#p2dcon10'));
        } else {
            p2cont1;
            f_no($('#p2dcon9'));
            f_no($('#p2dcon10'));
        }
        var result2 = (p2cont1 * 1) / 5;
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');

        var p3cont1 = 0;
        for (i = 0; i < 12; i++) {
            var resp = $("#nr" + [i] + "").val();
            if (resp == vector1[i]) {
                p3cont1++;
                f_ok($("#nr" + [i] + ""));
            } else {
                p3cont1;
                f_no($("#nr" + [i] + ""));
            }
        }
        var result3 = (p3cont1 * 1) / 12;
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');

        var p4cont1 = 0;
        for (i = 0; i < 10; i++) {
            var resp = $("#p4m" + [i] + "").val();
            if (resp == vn[i]) {
                p4cont1++;
                f_ok($("#p4m" + [i] + ""));
            } else {
                p4cont1;
                f_no($("#p4m" + [i] + ""));
            }
        }
        var result4 = (p4cont1 * 1) / 10;
        cor = cor + result4;
        inc = inc + (1 - result4);
        $('#pre4a').val(result4.toFixed(2));
        $('#pre4a').css('display', '');

        var p5cont1=0;
        var num1 = p5n1;
        var num2 = p5n2;
        var num3 = p5n3;
        var num4 = p5n4;
        var num5 = p5n5;
        var num6 = p5n6;
        var num7 = p5n7;
        var num8 = p5n8;

        var dif = parseInt(num1) + parseInt(num2);
        var res =
            $("#nlra" + [0] + "").val() +
            $("#nlra" + [1] + "").val() +
            $("#nlra" + [2] + "").val();

        if (dif == res) {
            p5cont1++;
            f_ok($("#nlra0"));
            f_ok($("#nlra1"));
            f_ok($("#nlra2"));
        } else {
            f_no($("#nlra0"));
            f_no($("#nlra1"));
            f_no($("#nlra2"));
            p5cont1;
        }

        var dif1 = parseInt(num3) + parseInt(num4);
        var res1 =
            $("#nlrb" + [0] + "").val() +
            $("#nlrb" + [1] + "").val() +
            $("#nlrb" + [2] + "").val();

        if (dif1 == res1) {
            p5cont1++;
            f_ok($("#nlrb0"));
            f_ok($("#nlrb1"));
            f_ok($("#nlrb2"));
        } else {
            f_no($("#nlrb0"));
            f_no($("#nlrb1"));
            f_no($("#nlrb2"));
            p5cont1;
        }

        var dif2 = parseInt(num5) - parseInt(num6);
        var res2 =
            $("#nlrc" + [0] + "").val() +
            $("#nlrc" + [1] + "").val() +
            $("#nlrc" + [2] + "").val();

        if (dif2 == res2) {
            p5cont1++;
            f_ok($("#nlrc0"));
            f_ok($("#nlrc1"));
            f_ok($("#nlrc2"));
        } else {
            f_no($("#nlrc0"));
            f_no($("#nlrc1"));
            f_no($("#nlrc2"));
            p5cont1;
        }

        var dif3 = parseInt(num7) - parseInt(num8);
        var res3 =
            $("#nlrd" + [0] + "").val() +
            $("#nlrd" + [1] + "").val() +
            $("#nlrd" + [2] + "").val();

        if (dif3 == res3) {
            p5cont1++;
            f_ok($("#nlrd0"));
            f_ok($("#nlrd1"));
            f_ok($("#nlrd2"));
        } else {
            f_no($("#nlrd0"));
            f_no($("#nlrd1"));
            f_no($("#nlrd2"));
            p5cont1;
        }
        var result5 = (p5cont1 * 1) / 4;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#pre5a').val(result5.toFixed(2));
        $('#pre5a').css('display', '');

        var p6cont1=0;
        for (var i = 0; i < p6vec2.length; i++) {
            var p6res1=$('#p6dcon'+(i+1)).val();
            if (p6res1==p6vec2[i]) {
                p6cont1++;
                f_ok($('#p6dcon'+(i+1)));
            }else{
                p6cont1;
                f_no($('#p6dcon'+(i+1)));
            }
        }
        var result6 = (p6cont1 * 1) / 4;
        cor = cor + result6;
        inc = inc + (1 - result6);
        $('#pre6a').val(result6.toFixed(2));
        $('#pre6a').css('display', '');

        var p7dcon1=$('#p7dcon1').val();
        var p7dcon2=$('#p7dcon2').val();
        var p7dcon3=$('#p7dcon3').val();
        var p7dcon4=$('#p7dcon4').val();
        var p7cont1=0;
        if (p7dcon1=='72') {
            p7cont1++;
            f_ok($('#p7dcon1'));
        }else{
            p7cont1;
            f_no($('#p7dcon1'));
        }
        if (p7dcon2=='240') {
            p7cont1++;
            f_ok($('#p7dcon2'));
        }else{
            p7cont1;
            f_no($('#p7dcon2'));
        }
        if (p7dcon3=='600') {
            p7cont1++;
            f_ok($('#p7dcon3'));
        }else{
            p7cont1;
            f_no($('#p7dcon3'));
        }
        if (p7dcon4=='12') {
            p7cont1++;
            f_ok($('#p7dcon4'));
        }else{
            p7cont1;
            f_no($('#p7dcon4'));
        }
        var result7 = (p7cont1 * 1) / 4;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#pre7a').val(result7.toFixed(2));
        $('#pre7a').css('display', '');

        var p9dcon1=$('#p9dcon1').val();
        var p9dcon2=$('#p9dcon2').val();
        var p9dcon3=$('#p9dcon3').val();
        var p9dcon4=$('#p9dcon4').val();
        var p9cont1=0;
        if (p9dcon1=='9') {
            p9cont1++;
            f_ok($('#p9dcon1'));
        }else{
            p9cont1;
            f_no($('#p9dcon1'));
        }
        if (p9dcon2=='hot dog' || p9dcon2=='hotdog' || p9dcon2=='hot-dog') {
            p9cont1++;
            f_ok($('#p9dcon2'));
        }else{
            p9cont1;
            f_no($('#p9dcon2'));
        }
        if (p9dcon3=='21') {
            p9cont1++;
            f_ok($('#p9dcon3'));
        }else{
            p9cont1;
            f_no($('#p9dcon3'));
        }
        if (p9dcon4=='18') {
            p9cont1++;
            f_ok($('#p9dcon4'));
        }else{
            p9cont1;
            f_no($('#p9dcon4'));
        }
        var result9 = (p9cont1 * 1) / 4;
        cor = cor + result9;
        inc = inc + (1 - result9);
        $('#pre9a').val(result9.toFixed(2));
        $('#pre9a').css('display', '');
        Calculo_nota();
    }
}