var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();
$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 p3pin1':
            $('.p3pin1').addClass('pintar');
            $('.p3pin2').removeClass('pintar');
            $('.p3pin3').removeClass('pintar');
            break;
        case '1 p3pin2':
            $('.p3pin2').addClass('pintar');
            $('.p3pin1').removeClass('pintar');
            $('.p3pin3').removeClass('pintar');
            break;
        case '1 p3pin3':
            $('.p3pin3').addClass('pintar');
            $('.p3pin1').removeClass('pintar');
            $('.p3pin2').removeClass('pintar');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p31pin1':
            $('.p31pin1').addClass('pintar');
            $('.p31pin2').removeClass('pintar');
            $('.p31pin3').removeClass('pintar');
            break;
        case '2 p31pin2':
            $('.p31pin2').addClass('pintar');
            $('.p31pin1').removeClass('pintar');
            $('.p31pin3').removeClass('pintar');
            break;
        case '2 p31pin3':
            $('.p31pin3').addClass('pintar');
            $('.p31pin1').removeClass('pintar');
            $('.p31pin2').removeClass('pintar');
            break;
    }
});

function f_iniciar() {
    var p1vec1 = [
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '<b>;</b>'
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);
    var p1vec2 = [
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div>' +
        '<b>;</b>'
    ];
    p1vec2.sort(f_randomico);
    $('#p1im2').html(p1vec2);

    var p1vec3 = [
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">2</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">4</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">11</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">16</span>' +
        '</div>' +
        '<b>;</b>'
    ];
    p1vec3.sort(f_randomico);
    $('#p1im3').html(p1vec3);

    var p1vec4 = [
        '<div class="fraction">' +
        '<span class="fup">9</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">17</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">16</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">2</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">3</span>' +
        '</div>' +
        '<b>;</b>',
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">9</span>' +
        '</div>' +
        '<b>;</b>'
    ];
    p1vec4.sort(f_randomico);
    $('#p1im4').html(p1vec4);


    var p3vec1 = [
        '<div class="1 p3pin1" style="display: inline-block; border: 2px solid #BC005C; border-radius: 10px; padding: 10px;">7</div>',
        '<div class="1 p3pin2" style="display: inline-block; border: 2px solid #BC005C; border-radius: 10px; padding: 10px;">6</div>',
        '<div class="1 p3pin3" style="display: inline-block; border: 2px solid #BC005C; border-radius: 10px; padding: 10px;">63</div>',
    ];
    p3vec1.sort(f_randomico);
    $('#p3im1').html(p3vec1);

    var p3vec2 = [
        '<div class="2 p31pin1" style="display: inline-block; border: 2px solid #BC005C; border-radius: 10px; padding: 10px;">84</div>',
        '<div class="2 p31pin2" style="display: inline-block; border: 2px solid #BC005C; border-radius: 10px; padding: 10px;">94</div>',
        '<div class="2 p31pin3" style="display: inline-block; border: 2px solid #BC005C; border-radius: 10px; padding: 10px;">104</div>',
    ];
    p3vec2.sort(f_randomico);
    $('#p3im2').html(p3vec2);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        var x = 1;
        var y = 2;
        var p1rs1 = ['23', '36', '14', '29', '112'];
        var p1cont1 = 0;
        for (var i = 0; i < 5; i++) {
            var p1res1 = $('#p1dcon' + (i + x)).val() + $('#p1dcon' + (i + y)).val();
            if (p1res1 == p1rs1[i]) {
                p1cont1++;
                f_ok($('#p1dcon' + (i + x)));
                f_ok($('#p1dcon' + (i + y)));
            } else {
                p1cont1;
                f_no($('#p1dcon' + (i + x)));
                f_no($('#p1dcon' + (i + y)));
            }
            x++;
            y++;
        }
        var x1 = 1;
        var y1 = 2;
        var p1rs2 = ['45', '34', '710', '512', '26'];
        for (var i = 0; i < 5; i++) {
            var p1res2 = $('#p11dcon' + (i + x1)).val() + $('#p11dcon' + (i + y1)).val();
            if (p1res2 == p1rs2[i]) {
                p1cont1++;
                f_ok($('#p11dcon' + (i + x1)));
                f_ok($('#p11dcon' + (i + y1)));
            } else {
                p1cont1;
                f_no($('#p11dcon' + (i + x1)));
                f_no($('#p11dcon' + (i + y1)));
            }
            x1++;
            y1++;
        }
        var x2 = 1;
        var y2 = 2;
        var p1rs3 = ['12', '712', '1116', '34', '56'];
        for (var i = 0; i < 5; i++) {
            var p1res3 = $('#p12dcon' + (i + x2)).val() + $('#p12dcon' + (i + y2)).val();
            if (p1res3 == p1rs3[i]) {
                p1cont1++;
                f_ok($('#p12dcon' + (i + x2)));
                f_ok($('#p12dcon' + (i + y2)));
            } else {
                p1cont1;
                f_no($('#p12dcon' + (i + x2)));
                f_no($('#p12dcon' + (i + y2)));
            }
            x2++;
            y2++;
        }
        var x3 = 1;
        var y3 = 2;
        var p1rs4 = ['23', '79', '910', '55', '1716'];
        for (var i = 0; i < 5; i++) {
            var p1res4 = $('#p13dcon' + (i + x3)).val() + $('#p13dcon' + (i + y3)).val();
            if (p1res4 == p1rs4[i]) {
                p1cont1++;
                f_ok($('#p13dcon' + (i + x3)));
                f_ok($('#p13dcon' + (i + y3)));
            } else {
                p1cont1;
                f_no($('#p13dcon' + (i + x3)));
                f_no($('#p13dcon' + (i + y3)));
            }
            x3++;
            y3++;
        }
        var result1 = (p1cont1 * 2) / 20;
        cor = cor + result1;
        inc = inc + (2 - result1);

        var x4 = 1;
        var y4 = 2;
        var p2rs4 = ['310', '210', '410', '110'];
        var p2cont1 = 0;
        for (var i = 0; i < 4; i++) {
            var p2res1 = $('#p2dcon' + (i + x4)).val() + $('#p2dcon' + (i + y4)).val();
            var p2con1 = 0;
            for (var j = 0; j < p2rs4.length; j++) {
                if (p2res1 == p2rs4[j]) {
                    p2con1++;

                }
            }
            if (p2con1 == '1') {
                p2cont1++;
                f_ok($('#p2dcon' + (i + x4)));
                f_ok($('#p2dcon' + (i + y4)));
            } else {
                p2cont1;
                f_no($('#p2dcon' + (i + x4)));
                f_no($('#p2dcon' + (i + y4)));
            }
            x4++;
            y4++;
        }
        var p2dcon9 = $('#p2dcon9').val() + $('#p2dcon10').val();
        if (p2dcon9 == '1010') {
            p2cont1++;
            f_ok($('#p2dcon9'));
            f_ok($('#p2dcon10'));
        } else {
            p2cont1;
            f_no($('#p2dcon9'));
            f_no($('#p2dcon10'));
        }
        var result2 = (p2cont1 * 2) / 5;
        cor = cor + result2;
        inc = inc + (2 - result2);

        var p3dcon1 = $('#p3dcon1').val() + $('#p3dcon2').val();
        var p3dcon2 = $('#p3dcon3').val() + $('#p3dcon4').val();
        var p3cont1 = 0;
        if (p3dcon1 == '1063') {
            p3cont1++;
            f_ok($('#p3dcon1'));
            f_ok($('#p3dcon2'));
        } else {
            p3cont1;
            f_no($('#p3dcon1'));
            f_no($('#p3dcon2'));
        }
        if (p3dcon2 == '1984') {
            p3cont1++;
            f_ok($('#p3dcon3'));
            f_ok($('#p3dcon4'));
        } else {
            p3cont1;
            f_no($('#p3dcon3'));
            f_no($('#p3dcon4'));
        }
        var p3im1 = $('#p3im1 .pintar').html();
        var p3im2 = $('#p3im2 .pintar').html();
        if (!p3im1) {
            p3cont1;
            f_no($('.p3pin1'));
            f_no($('.p3pin2'));
            f_no($('.p3pin3'));
        } else {
            if (p3im1 == '63') {
                p3cont1++;
                $('#p3im1 .pintar').addClass('valid');
            } else {
                p3cont1;
                $('#p3im1 .pintar').addClass('no-valid');
            }
        }
        if (!p3im2) {
            p3cont1;
            f_no($('.p31pin1'));
            f_no($('.p31pin2'));
            f_no($('.p31pin3'));
        } else {
            if (p3im2 == '84') {
                p3cont1++;
                $('#p3im2 .pintar').addClass('valid');
            } else {
                p3cont1;
                $('#p3im2 .pintar').addClass('no-valid');
            }
        }
        var result3 = (p3cont1 * 2) / 4;
        cor = cor + result3;
        inc = inc + (2 - result3);

        var x5=1;
        var y5=2;
        var p4cont1=0;
        var p4vec1=['azulanaranjado','azulrojo','azulverde','azulceleste','rojoanaranjado','rojorojo','rojoverde','rojoceleste','blancoanaranjado','blancorojo','blancoverde','blancoceleste'];
        for (var i = 0; i < 12; i++) {
            rp1=$('#p4dcon'+(i+x5)).val().toLowerCase()+$('#p4dcon'+(i+y5)).val().toLowerCase();
            if (rp1==p4vec1[i]) {
                p4cont1++;
                f_ok($('#p4dcon'+(i+x5)));
                f_ok($('#p4dcon'+(i+y5)));
            }else{
                p4cont1;
                f_no($('#p4dcon'+(i+x5)));
                f_no($('#p4dcon'+(i+y5)));
            }
            x5++;
            y5++;
        }
        var result4 = (p4cont1 * 2) / 12;
        cor = cor + result4;
        inc = inc + (2 - result4);

        var p5dcon1=$('#p5dcon1').val();
        var p5dcon2=$('#p5dcon2').val();
        var p5dcon3=$('#p5dcon3').val();
        var p5cont1=0;
        if (p5dcon1=='4') {
            p5cont1++;
            f_ok($('#p5dcon1'));
        }else{
            p5cont1;
            f_no($('#p5dcon1'));
        }
        if (p5dcon2=='1') {
            p5cont1++;
            f_ok($('#p5dcon2'));
        }else{
            p5cont1;
            f_no($('#p5dcon2'));
        }
        if (p5dcon3=='2') {
            p5cont1++;
            f_ok($('#p5dcon3'));
        }else{
            p5cont1;
            f_no($('#p5dcon3'));
        }
        var p5dcon4=$('#p5dcon4').val()+$('#p5dcon5').val();
        var p5dcon5=$('#p5dcon6').val()+$('#p5dcon7').val();
        var p5dcon6=$('#p5dcon8').val()+$('#p5dcon9').val();
        if (p5dcon4=='47') {
            p5cont1++;
            f_ok($('#p5dcon4'));
            f_ok($('#p5dcon5'));
        }else{
            p5cont1;
            f_no($('#p5dcon4'));
            f_no($('#p5dcon5'));
        }
        if (p5dcon5=='17') {
            p5cont1++;
            f_ok($('#p5dcon6'));
            f_ok($('#p5dcon7'));
        }else{
            p5cont1;
            f_no($('#p5dcon6'));
            f_no($('#p5dcon7'));
        }
        if (p5dcon6=='27') {
            p5cont1++;
            f_ok($('#p5dcon8'));
            f_ok($('#p5dcon9'));
        }else{
            p5cont1;
            f_no($('#p5dcon8'));
            f_no($('#p5dcon9'));
        }
        var p5dcon10=$('#p5dcon10').val();
        var p5dcon11=$('#p5dcon11').val();
        var p5dcon12=$('#p5dcon12').val();
        
        if (p5dcon10=='4') {
            p5cont1++;
            f_ok($('#p5dcon10'));
        }else{
            p5cont1;
            f_no($('#p5dcon10'));
        }
        if (p5dcon11=='1') {
            p5cont1++;
            f_ok($('#p5dcon11'));
        }else{
            p5cont1;
            f_no($('#p5dcon11'));
        }
        if (p5dcon12=='2') {
            p5cont1++;
            f_ok($('#p5dcon12'));
        }else{
            p5cont1;
            f_no($('#p5dcon12'));
        }
        var p5dcon13=$('#p5dcon13').val();
        var p5dcon14=$('#p5dcon14').val();
        var p5dcon15=$('#p5dcon15').val();
        var p5dcon16=$('#p5dcon16').val();
        
        if (p5dcon13=='4') {
            p5cont1++;
            f_ok($('#p5dcon13'));
        }else{
            p5cont1;
            f_no($('#p5dcon13'));
        }
        if (p5dcon14=='1') {
            p5cont1++;
            f_ok($('#p5dcon14'));
        }else{
            p5cont1;
            f_no($('#p5dcon14'));
        }
        if (p5dcon15=='2') {
            p5cont1++;
            f_ok($('#p5dcon15'));
        }else{
            p5cont1;
            f_no($('#p5dcon15'));
        }
        if (p5dcon16=='7') {
            p5cont1++;
            f_ok($('#p5dcon16'));
        }else{
            p5cont1;
            f_no($('#p5dcon16'));
        }
        var p5dcon17=$('#p5dcon17').val()+$('#p5dcon18').val();
        var p5dcon18=$('#p5dcon19').val()+$('#p5dcon20').val();
        var p5dcon19=$('#p5dcon21').val()+$('#p5dcon22').val();
        if (p5dcon17=='47') {
            p5cont1++;
            f_ok($('#p5dcon17'));
            f_ok($('#p5dcon18'));
        }else{
            p5cont1;
            f_no($('#p5dcon17'));
            f_no($('#p5dcon18'));
        }
        if (p5dcon18=='17') {
            p5cont1++;
            f_ok($('#p5dcon19'));
            f_ok($('#p5dcon20'));
        }else{
            p5cont1;
            f_no($('#p5dcon19'));
            f_no($('#p5dcon20'));
        }
        if (p5dcon19=='27') {
            p5cont1++;
            f_ok($('#p5dcon21'));
            f_ok($('#p5dcon22'));
        }else{
            p5cont1;
            f_no($('#p5dcon21'));
            f_no($('#p5dcon22'));
        }
        var result5 = (p5cont1 * 2) / 16;
        cor = cor + result5;
        inc = inc + (2 - result5);
        Calculo_nota();
    }
}