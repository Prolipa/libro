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
document.getElementById('pre6a').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('pre6a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre6a'), 1)
});
function f_iniciar() {
    $(".drag1").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p1act1"
    });
    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
        }
    });
    var p2vec1 = [(Math.floor(Math.random() * 400) + 100), (Math.floor(Math.random() * 400) + 100)];
    var p2s1 = p2vec1[0].toString().split('');
    $('#nlrd0').val(p2s1[0]);
    $('#nlrd0').attr('disabled', 'true');
    $('#nlrd1').val(p2s1[1]);
    $('#nlrd1').attr('disabled', 'true');
    $('#nlrd2').val(p2s1[2]);
    $('#nlrd2').attr('disabled', 'true');
    var p2s2 = p2vec1[1].toString().split('');
    $('#nlrd3').val(p2s2[0]);
    $('#nlrd3').attr('disabled', 'true');
    $('#nlrd4').val(p2s2[1]);
    $('#nlrd4').attr('disabled', 'true');
    $('#nlrd5').val(p2s2[2]);
    $('#nlrd5').attr('disabled', 'true');
    $('#nlrd13').val(p2s2[0]);
    $('#nlrd13').attr('disabled', 'true');
    $('#nlrd14').val(p2s2[1]);
    $('#nlrd14').attr('disabled', 'true');
    $('#nlrd15').val(p2s2[2]);
    $('#nlrd15').attr('disabled', 'true');

    var p2n7 = (Math.floor(Math.random() * 600) + 100);
    var p2n8 = (Math.floor(Math.random() * 600) + 100);
    if (p2n7 > p2n8) {
        p2n7;
        p2n8;
    } else {
        var p2c3 = p2n7;
        var p2c4 = p2n8;
        p2n7 = p2c4;
        p2n8 = p2c3;
    }
    var p2s3 = p2n7.toString().split('');
    $('#nlrd20').val(p2s3[0]);
    $('#nlrd20').attr('disabled', 'true');
    $('#nlrd21').val(p2s3[1]);
    $('#nlrd21').attr('disabled', 'true');
    $('#nlrd22').val(p2s3[2]);
    $('#nlrd22').attr('disabled', 'true');
    var p2s4 = p2n8.toString().split('');
    $('#nlrd23').val(p2s4[0]);
    $('#nlrd23').attr('disabled', 'true');
    $('#nlrd24').val(p2s4[1]);
    $('#nlrd24').attr('disabled', 'true');
    $('#nlrd25').val(p2s4[2]);
    $('#nlrd25').attr('disabled', 'true');
    $('#nlrd33').val(p2s4[0]);
    $('#nlrd33').attr('disabled', 'true');
    $('#nlrd34').val(p2s4[1]);
    $('#nlrd34').attr('disabled', 'true');
    $('#nlrd35').val(p2s4[2]);
    $('#nlrd35').attr('disabled', 'true');

    var p3vec2 = [(Math.floor(Math.random() * 40) + 10)];
    for (var i = 0; i < 1; i++) {
        var p3n1 = (Math.floor(Math.random() * 40) + 10);
        if (p3n1 == p3vec2[0]) {
            i--;
        } else {
            p3vec2.push(p3n1);
        }
    }
    p3vec2.sort((a, b) => a - b);
    p3vec2.push(p3vec2[0] + p3vec2[1]);
    p3vec1 = [
        p3vec2[2] + '-' + p3vec2[1] + '' + p3vec2[0],
        p3vec2[0] + '+' + p3vec2[1] + '' + p3vec2[2],
        p3vec2[2] + '-' + p3vec2[0] + '' + p3vec2[1],
        p3vec2[1] + '+' + p3vec2[0] + '' + p3vec2[2]
    ];
    $('#p3im1').text(p3vec2[1]);
    $('#p3im2').text(p3vec2[0]);
    $('#p3im3').text(p3vec2[2]);

    var p3vec3 = [(Math.floor(Math.random() * 400) + 100)];
    for (var i = 0; i < 1; i++) {
        var p3n2 = (Math.floor(Math.random() * 400) + 100);
        if (p3n2 == p3vec3[0]) {
            i--;
        } else {
            p3vec3.push(p3n2);
        }
    }
    p3vec3.sort((a, b) => a - b);
    p3vec3.push(p3vec3[0] + p3vec3[1]);
    p3vec14 = [
        p3vec3[2] + '-' + p3vec3[1] + '' + p3vec3[0],
        p3vec3[0] + '+' + p3vec3[1] + '' + p3vec3[2],
        p3vec3[2] + '-' + p3vec3[0] + '' + p3vec3[1],
        p3vec3[1] + '+' + p3vec3[0] + '' + p3vec3[2]
    ];
    $('#p3im4').text(p3vec3[1]);
    $('#p3im5').text(p3vec3[0]);
    $('#p3im6').text(p3vec3[2]);

    var p4vec1 = [];
    for (var i = 20; i < 90; i++) {
        if (i % 10 == 0) {
            p4vec1.push(i);
        } else {
            p4vec1;
        }
    }
    p4vec1.sort(f_randomico);
    var p4vec2 = [p4vec1[0], p4vec1[1]];
    $('#p4im1').html(p4vec2[0]);
    $('#p4im2').html(p4vec2[1]);

    var p5vec1 = [(Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2)];
    var p5ta1 = [];
    for (var i = 0; i < p5vec1[0]; i++) {
        if ((i + 1) == p5vec1[0]) {
            p5ta1.push('<span id="p5cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p5dco1">');
        } else {
            p5ta1.push('<span id="p5cim' + i + '"></span> + ');
        }

    }
    $('#p5im1').html(p5ta1);
    for (var i = 0; i < p5vec1[0]; i++) {
        $('#p5cim' + i).text(p5vec1[1]);
    }
    var p5ta2 = [];
    for (var i = 0; i < p5vec1[2]; i++) {
        if ((i + 1) == p5vec1[2]) {
            p5ta2.push('<span id="p51cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p5dco2">');
        } else {
            p5ta2.push('<span id="p51cim' + i + '"></span> + ');
        }

    }
    $('#p5im2').html(p5ta2);
    for (var i = 0; i < p5vec1[2]; i++) {
        $('#p51cim' + i).text(p5vec1[3]);
    }
    var p5ta3 = [];
    for (var i = 0; i < p5vec1[4]; i++) {
        if ((i + 1) == p5vec1[4]) {
            p5ta3.push('<span id="p52cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p5dco3">');
        } else {
            p5ta3.push('<span id="p52cim' + i + '"></span> + ');
        }

    }
    $('#p5im3').html(p5ta3);
    for (var i = 0; i < p5vec1[4]; i++) {
        $('#p52cim' + i).text(p5vec1[5]);
    }
    var p5ta4 = [];
    for (var i = 0; i < p5vec1[6]; i++) {
        if ((i + 1) == p5vec1[6]) {
            p5ta4.push('<span id="p53cim' + i + '"></span> = <input type="text" style="border-radius: 10px; width: 50px; border: 2px solid #C4A1C8; text-align: center;" onkeypress="return soloNumeros1(event)" maxlength="3" id="p5dco4">');
        } else {
            p5ta4.push('<span id="p53cim' + i + '"></span> + ');
        }

    }
    $('#p5im4').html(p5ta4);
    for (var i = 0; i < p5vec1[6]; i++) {
        $('#p53cim' + i).text(p5vec1[7]);
    }
    bt_comprobar.addEventListener("click", preg6);

    function preg6() {
        cor = 0;
        var pre6a = $('#pre6a').val();
        if (!pre6a) {
            alert('Ingrese la calificación en la Pregunta 6.')
        } else {
            cor = cor + parseFloat(pre6a);
            inc = inc + (1 - parseFloat(pre6a));
            $('#pre6a').val(parseFloat(pre6a).toFixed(2));
            $('#pre6a').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg6);
        var p1vec1 = ['1', '2', '3', '4', '5', '6', '7', '8'];
        var p1cont1 = 0;
        for (var i = 0; i < 8; i++) {
            var p1cont2 = 0;
            for (var j = 0; j < p1vec1.length; j++) {
                var p1res3 = $('#p1a' + (i + 1) + ' img').attr('alt');
                if ($('#p1a' + (i + 1) + ' img').length == '1') {
                    if (p1res3 == p1vec1[j]) {
                        p1cont2++;
                        p1vec1[j] = 'aaa';
                    }
                } else {
                    p1cont2;
                }

            }
            if (p1cont2 == '1') {
                p1cont1++;
                f_ok($('#p1a' + (i + 1)));
            } else {
                p1cont1;
                f_no($('#p1a' + (i + 1)));
            }
        }
        var result1 = (p1cont1 * 1) / 8;
        cor = cor + result1;
        inc = inc + (1 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var nlrd1 = $('#nlrd6').val() + $('#nlrd7').val() + $('#nlrd8').val();
        var nlrd2 = $('#nlrd10').val() + $('#nlrd11').val() + $('#nlrd12').val();
        var nlrd3 = $('#nlrd16').val() + $('#nlrd17').val() + $('#nlrd18').val();
        var nlrd4 = $('#nlrd26').val() + $('#nlrd27').val() + $('#nlrd28').val();
        var nlrd5 = $('#nlrd30').val() + $('#nlrd31').val() + $('#nlrd32').val();
        var nlrd6 = $('#nlrd36').val() + $('#nlrd37').val() + $('#nlrd38').val();
        var p2cont1 = 0;
        if (nlrd1 == (p2vec1[1] + p2vec1[0])) {
            p2cont1++;
            f_ok($('#nlrd6'));
            f_ok($('#nlrd7'));
            f_ok($('#nlrd8'));
        } else {
            p2cont1;
            f_no($('#nlrd6'));
            f_no($('#nlrd7'));
            f_no($('#nlrd8'));
        }
        if (nlrd2 == (p2vec1[1] + p2vec1[0])) {
            p2cont1++;
            f_ok($('#nlrd10'));
            f_ok($('#nlrd11'));
            f_ok($('#nlrd12'));
        } else {
            p2cont1;
            f_no($('#nlrd10'));
            f_no($('#nlrd11'));
            f_no($('#nlrd12'));
        }
        if (nlrd3 == (p2vec1[0])) {
            p2cont1++;
            f_ok($('#nlrd16'));
            f_ok($('#nlrd17'));
            f_ok($('#nlrd18'));
        } else {
            p2cont1;
            f_no($('#nlrd16'));
            f_no($('#nlrd17'));
            f_no($('#nlrd18'));
        }
        if (nlrd4 == (p2n7 - p2n8)) {
            p2cont1++;
            f_ok($('#nlrd26'));
            f_ok($('#nlrd27'));
            f_ok($('#nlrd28'));
        } else {
            p2cont1;
            f_no($('#nlrd26'));
            f_no($('#nlrd27'));
            f_no($('#nlrd28'));
        }
        if (nlrd5 == (p2n7 - p2n8)) {
            p2cont1++;
            f_ok($('#nlrd30'));
            f_ok($('#nlrd31'));
            f_ok($('#nlrd32'));
        } else {
            p2cont1;
            f_no($('#nlrd30'));
            f_no($('#nlrd31'));
            f_no($('#nlrd32'));
        }
        if (nlrd6 == (p2n7)) {
            p2cont1++;
            f_ok($('#nlrd36'));
            f_ok($('#nlrd37'));
            f_ok($('#nlrd38'));
        } else {
            p2cont1;
            f_no($('#nlrd36'));
            f_no($('#nlrd37'));
            f_no($('#nlrd38'));
        }
        var result2 = (p2cont1 * 2) / 6;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');

        var p3res1 = [];
        var p3res2 = [];
        var p3res3 = [];
        var p3res4 = [];

        for (var i = 1; i < 5; i++) {
            var n = $("#resa" + [i] + "").val();
            p3res1.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resb" + [i] + "").val();
            p3res2.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resc" + [i] + "").val();
            p3res3.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resd" + [i] + "").val();
            p3res4.push(n);
        }
        var p3vec4 = [];
        p3vec4.push(p3res1[0] + p3res1[1] + p3res1[2] + p3res1[3]);
        p3vec4.push(p3res2[0] + p3res2[1] + p3res2[2] + p3res2[3]);
        p3vec4.push(p3res3[0] + p3res3[1] + p3res3[2] + p3res3[3]);
        p3vec4.push(p3res4[0] + p3res4[1] + p3res4[2] + p3res4[3]);
        p3vec3 = ['a', 'b', 'c', 'd'];
        var corr = 0;
        for (var i = 0; i < 4; i++) {
            var cont = 0;
            for (var j = 0; j < 4; j++) {
                if (p3vec4[i] == p3vec1[j]) {
                    cont++;
                    p3vec1[j] = 'aa';
                } else {
                    cont;
                }
            }
            if (cont == 1) {

                corr++;
                f_ok($("#res" + p3vec3[i] + "1"));
                f_ok($("#res" + p3vec3[i] + "2"));
                f_ok($("#res" + p3vec3[i] + "3"));
                f_ok($("#res" + p3vec3[i] + "4"));
            } else {
                corr;

                f_no($("#res" + p3vec3[i] + "1"));
                f_no($("#res" + p3vec3[i] + "2"));
                f_no($("#res" + p3vec3[i] + "3"));
                f_no($("#res" + p3vec3[i] + "4"));
            }
        }
        var p3res5 = [];
        var p3res6 = [];
        var p3res7 = [];
        var p3res8 = [];

        for (var i = 1; i < 5; i++) {
            var n = $("#rese" + [i] + "").val();
            p3res5.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resf" + [i] + "").val();
            p3res6.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resg" + [i] + "").val();
            p3res7.push(n);
        }

        for (var i = 1; i < 5; i++) {
            var n = $("#resh" + [i] + "").val();
            p3res8.push(n);
        }
        var p3vec5 = [];
        p3vec5.push(p3res5[0] + p3res5[1] + p3res5[2] + p3res5[3]);
        p3vec5.push(p3res6[0] + p3res6[1] + p3res6[2] + p3res6[3]);
        p3vec5.push(p3res7[0] + p3res7[1] + p3res7[2] + p3res7[3]);
        p3vec5.push(p3res8[0] + p3res8[1] + p3res8[2] + p3res8[3]);
        p3vec6 = ['e', 'f', 'g', 'h'];
        for (var i = 0; i < 4; i++) {
            var cont = 0;
            for (var j = 0; j < 4; j++) {
                if (p3vec5[i] == p3vec14[j]) {
                    cont++;
                    p3vec14[j] = 'aa';
                } else {
                    cont;
                }
            }
            if (cont == 1) {

                corr++;
                f_ok($("#res" + p3vec6[i] + "1"));
                f_ok($("#res" + p3vec6[i] + "2"));
                f_ok($("#res" + p3vec6[i] + "3"));
                f_ok($("#res" + p3vec6[i] + "4"));
            } else {
                corr;

                f_no($("#res" + p3vec6[i] + "1"));
                f_no($("#res" + p3vec6[i] + "2"));
                f_no($("#res" + p3vec6[i] + "3"));
                f_no($("#res" + p3vec6[i] + "4"));
            }
        }
        var result3 = (corr * 2) / 8;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');

        var p4aux1 = [p4vec2[0] - 5, p4vec2[0] - 4, p4vec2[0] - 3, p4vec2[0] - 2, p4vec2[0] - 1, p4vec2[0], p4vec2[0] + 1, p4vec2[0] + 2, p4vec2[0] + 3, p4vec2[0] + 4];
        var p4aux2 = [p4vec2[1] - 5, p4vec2[1] - 4, p4vec2[1] - 3, p4vec2[1] - 2, p4vec2[1] - 1, p4vec2[1], p4vec2[1] + 1, p4vec2[1] + 2, p4vec2[1] + 3, p4vec2[1] + 4];
        var p4cont1 = 0;
        for (var i = 0; i < 6; i++) {
            var p4cont2 = 0;
            for (var j = 0; j < p4aux1.length; j++) {
                var p4res1 = $('#p4dcon' + (i + 1)).val();
                if (p4res1 == p4aux1[j]) {
                    p4cont2++;
                    p4aux1[j] = 'aaa';
                }
            }
            if (p4cont2 == '1') {
                p4cont1++;
                f_ok($('#p4dcon' + (i + 1)));
            } else {
                p4cont1;
                f_no($('#p4dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < 6; i++) {
            var p4cont3 = 0;
            for (var j = 0; j < p4aux2.length; j++) {
                var p4res2 = $('#p4dcon' + (i + 7)).val();
                if (p4res2 == p4aux2[j]) {
                    p4cont3++;
                    p4aux2[j] = 'aaa';
                }
            }
            if (p4cont3 == '1') {
                p4cont1++;
                f_ok($('#p4dcon' + (i + 7)));
            } else {
                p4cont1;
                f_no($('#p4dcon' + (i + 7)));
            }
        }
        var result4 = (p4cont1 * 1) / 12;
        cor = cor + result4;
        inc = inc + (1 - result4);
        $('#pre4a').val(result4.toFixed(2));
        $('#pre4a').css('display', '');

        var p5cont1=0;
        var p5dcon1=$('#p5dcon1').val();
        var p5dcon2=$('#p5dcon2').val();
        var p5dcon3=$('#p5dcon3').val();
        var p5dcon4=$('#p5dcon4').val();
        var p5dcon5=$('#p5dcon5').val();
        var p5dcon6=$('#p5dcon6').val();
        if (p5dcon1==(p5vec1[0]*p5vec1[1])) {
            p5cont1++;
            f_ok($('#p5dcon1'));
        }else{
            p5cont1;
            f_no($('#p5dcon1'));
        }
        if (p5dcon2==(p5vec1[0])) {
            p5cont1++;
            f_ok($('#p5dcon2'));
        }else{
            p5cont1;
            f_no($('#p5dcon2'));
        }
        if (p5dcon3==(p5vec1[1])) {
            p5cont1++;
            f_ok($('#p5dcon3'));
        }else{
            p5cont1;
            f_no($('#p5dcon3'));
        }
        if (p5dcon4==(p5vec1[0])) {
            p5cont1++;
            f_ok($('#p5dcon4'));
        }else{
            p5cont1;
            f_no($('#p5dcon4'));
        }
        if (p5dcon5==(p5vec1[1])) {
            p5cont1++;
            f_ok($('#p5dcon5'));
        }else{
            p5cont1;
            f_no($('#p5dcon5'));
        }
        if (p5dcon6==(p5vec1[0]*p5vec1[1])) {
            p5cont1++;
            f_ok($('#p5dcon6'));
        }else{
            p5cont1;
            f_no($('#p5dcon6'));
        }
        var p5dcon11=$('#p5dcon11').val();
        var p5dcon12=$('#p5dcon12').val();
        var p5dcon13=$('#p5dcon13').val();
        var p5dcon14=$('#p5dcon14').val();
        var p5dcon15=$('#p5dcon15').val();
        var p5dcon16=$('#p5dcon16').val();
        if (p5dcon11==(p5vec1[2]*p5vec1[3])) {
            p5cont1++;
            f_ok($('#p5dcon11'));
        }else{
            p5cont1;
            f_no($('#p5dcon11'));
        }
        if (p5dcon12==(p5vec1[2])) {
            p5cont1++;
            f_ok($('#p5dcon12'));
        }else{
            p5cont1;
            f_no($('#p5dcon12'));
        }
        if (p5dcon13==(p5vec1[3])) {
            p5cont1++;
            f_ok($('#p5dcon13'));
        }else{
            p5cont1;
            f_no($('#p5dcon13'));
        }
        if (p5dcon14==(p5vec1[2])) {
            p5cont1++;
            f_ok($('#p5dcon14'));
        }else{
            p5cont1;
            f_no($('#p5dcon14'));
        }
        if (p5dcon15==(p5vec1[3])) {
            p5cont1++;
            f_ok($('#p5dcon15'));
        }else{
            p5cont1;
            f_no($('#p5dcon15'));
        }
        if (p5dcon16==(p5vec1[2]*p5vec1[3])) {
            p5cont1++;
            f_ok($('#p5dcon16'));
        }else{
            p5cont1;
            f_no($('#p5dcon16'));
        }
        var p5dcon21=$('#p5dcon21').val();
        var p5dcon22=$('#p5dcon22').val();
        var p5dcon23=$('#p5dcon23').val();
        var p5dcon24=$('#p5dcon24').val();
        var p5dcon25=$('#p5dcon25').val();
        var p5dcon26=$('#p5dcon26').val();
        if (p5dcon21==(p5vec1[4]*p5vec1[5])) {
            p5cont1++;
            f_ok($('#p5dcon21'));
        }else{
            p5cont1;
            f_no($('#p5dcon21'));
        }
        if (p5dcon22==(p5vec1[4])) {
            p5cont1++;
            f_ok($('#p5dcon22'));
        }else{
            p5cont1;
            f_no($('#p5dcon22'));
        }
        if (p5dcon23==(p5vec1[5])) {
            p5cont1++;
            f_ok($('#p5dcon23'));
        }else{
            p5cont1;
            f_no($('#p5dcon23'));
        }
        if (p5dcon24==(p5vec1[4])) {
            p5cont1++;
            f_ok($('#p5dcon24'));
        }else{
            p5cont1;
            f_no($('#p5dcon24'));
        }
        if (p5dcon25==(p5vec1[5])) {
            p5cont1++;
            f_ok($('#p5dcon25'));
        }else{
            p5cont1;
            f_no($('#p5dcon25'));
        }
        if (p5dcon26==(p5vec1[4]*p5vec1[5])) {
            p5cont1++;
            f_ok($('#p5dcon26'));
        }else{
            p5cont1;
            f_no($('#p5dcon26'));
        }
        var p5dcon31=$('#p5dcon31').val();
        var p5dcon32=$('#p5dcon32').val();
        var p5dcon33=$('#p5dcon33').val();
        var p5dcon34=$('#p5dcon34').val();
        var p5dcon35=$('#p5dcon35').val();
        var p5dcon36=$('#p5dcon36').val();
        if (p5dcon31==(p5vec1[6]*p5vec1[7])) {
            p5cont1++;
            f_ok($('#p5dcon31'));
        }else{
            p5cont1;
            f_no($('#p5dcon31'));
        }
        if (p5dcon32==(p5vec1[6])) {
            p5cont1++;
            f_ok($('#p5dcon32'));
        }else{
            p5cont1;
            f_no($('#p5dcon32'));
        }
        if (p5dcon33==(p5vec1[7])) {
            p5cont1++;
            f_ok($('#p5dcon33'));
        }else{
            p5cont1;
            f_no($('#p5dcon33'));
        }
        if (p5dcon34==(p5vec1[6])) {
            p5cont1++;
            f_ok($('#p5dcon34'));
        }else{
            p5cont1;
            f_no($('#p5dcon34'));
        }
        if (p5dcon35==(p5vec1[7])) {
            p5cont1++;
            f_ok($('#p5dcon35'));
        }else{
            p5cont1;
            f_no($('#p5dcon35'));
        }
        if (p5dcon36==(p5vec1[6]*p5vec1[7])) {
            p5cont1++;
            f_ok($('#p5dcon36'));
        }else{
            p5cont1;
            f_no($('#p5dcon36'));
        }
        var p5dco1=$('#p5dco1').val();
        var p5dco2=$('#p5dco2').val();
        var p5dco3=$('#p5dco3').val();
        var p5dco4=$('#p5dco4').val();
        if (p5dco1==(p5vec1[0]*p5vec1[1])) {
            p5cont1++;
            f_ok($('#p5dco1'));
        }else{
            p5cont1;
            f_no($('#p5dco1'));
        }
        if (p5dco2==(p5vec1[2]*p5vec1[3])) {
            p5cont1++;
            f_ok($('#p5dco2'));
        }else{
            p5cont1;
            f_no($('#p5dco2'));
        }
        if (p5dco3==(p5vec1[4]*p5vec1[5])) {
            p5cont1++;
            f_ok($('#p5dco3'));
        }else{
            p5cont1;
            f_no($('#p5dco3'));
        }
        if (p5dco4==(p5vec1[6]*p5vec1[7])) {
            p5cont1++;
            f_ok($('#p5dco4'));
        }else{
            p5cont1;
            f_no($('#p5dco4'));
        }
        var result5 = (p5cont1 * 1) / 24;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#pre5a').val(result5.toFixed(2));
        $('#pre5a').css('display', '');

        var p7dcon1=$('#p7dcon1').val();
        var p7dcon2=$('#p7dcon2').val();
        var p7dcon3=$('#p7dcon3').val();
        var p7dcon4=$('#p7dcon4').val();
        var p7dcon5=$('#p7dcon5').val();
        var p7dcon6=$('#p7dcon6').val();
        var p7dcon7=$('#p7dcon7').val();
        var p7cont1=0;
        if (p7dcon1=='sábado' || p7dcon1=='domingo') {
            p7cont1++;
            f_ok($('#p7dcon1'));
        }else{
            p7cont1;
            f_no($('#p7dcon1'));
        }
        if ((p7dcon2=='sábado' || p7dcon2=='domingo') && p7dcon2!=p7dcon1) {
            p7cont1++;
            f_ok($('#p7dcon2'));
        }else{
            p7cont1;
            f_no($('#p7dcon2'));
        }
        if (p7dcon3=='diciembre') {
            p7cont1++;
            f_ok($('#p7dcon3'));
        }else{
            p7cont1;
            f_no($('#p7dcon3'));
        }
        if (p7dcon4=='mayo') {
            p7cont1++;
            f_ok($('#p7dcon4'));
        }else{
            p7cont1;
            f_no($('#p7dcon4'));
        }
        if (p7dcon5=='julio' || p7dcon5=='agosto') {
            p7cont1++;
            f_ok($('#p7dcon5'));
        }else{
            p7cont1;
            f_no($('#p7dcon5'));
        }
        if ((p7dcon6=='julio' || p7dcon6=='agosto') && p7dcon6!=p7dcon5) {
            p7cont1++;
            f_ok($('#p7dcon6'));
        }else{
            p7cont1;
            f_no($('#p7dcon6'));
        }
        if (p7dcon7=='febrero') {
            p7cont1++;
            f_ok($('#p7dcon7'));
        }else{
            p7cont1;
            f_no($('#p7dcon7'));
        }
        var result7 = (p7cont1 * 1) / 7;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#pre7a').val(result7.toFixed(2));
        $('#pre7a').css('display', '');

        var p8dcon1=$('#p8dcon1').val();
        var p8dcon2=$('#p8dcon2').val();
        var p8cont1=0;
        if (p8dcon1=='blanco') {
            p8cont1++;
            f_ok($('#p8dcon1'));
        }else{
            p8cont1;
            f_no($('#p8dcon1'));
        }
        if (p8dcon2=='rojo') {
            p8cont1++;
            f_ok($('#p8dcon2'));
        }else{
            p8cont1;
            f_no($('#p8dcon2'));
        }
        var result8 = (p8cont1 * 1) / 2;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#pre8a').val(result8.toFixed(2));
        $('#pre8a').css('display', '');
        Calculo_nota();
    }
}