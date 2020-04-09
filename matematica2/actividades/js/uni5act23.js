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
document.getElementById('pre7a').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('pre7a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre7a'), 1)
});
$('.enc1').click(function() {
    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('subrayar1')
    } else if ($(this).hasClass('subrayar1')) {
        $(this).removeClass('subrayar1')
        $(this).addClass('subrayar')
    } else {
        $(this).removeClass('subrayar')
        $(this).addClass('vacio')
    }
});
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 sub1':
            $('.sub1').addClass('encierra');
            $('.sub2').removeClass('encierra');
            $('.sub3').removeClass('encierra');
            $('.sub4').removeClass('encierra');

            break;
        case '1 sub2':
            $('.sub2').addClass('encierra');
            $('.sub1').removeClass('encierra');
            $('.sub3').removeClass('encierra');
            $('.sub4').removeClass('encierra');
            break;
        case '1 sub3':
            $('.sub3').addClass('encierra');
            $('.sub1').removeClass('encierra');
            $('.sub2').removeClass('encierra');
            $('.sub4').removeClass('encierra');

            break;
        case '1 sub4':
            $('.sub4').addClass('encierra');
            $('.sub1').removeClass('encierra');
            $('.sub2').removeClass('encierra');
            $('.sub3').removeClass('encierra');

            break;


    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 sub5':
            $('.sub5').addClass('encierra');
            $('.sub6').removeClass('encierra');
            $('.sub7').removeClass('encierra');
            $('.sub8').removeClass('encierra');

            break;
        case '2 sub6':
            $('.sub6').addClass('encierra');
            $('.sub5').removeClass('encierra');
            $('.sub7').removeClass('encierra');
            $('.sub8').removeClass('encierra');
            break;
        case '2 sub7':
            $('.sub7').addClass('encierra');
            $('.sub5').removeClass('encierra');
            $('.sub6').removeClass('encierra');
            $('.sub8').removeClass('encierra');

            break;
        case '2 sub8':
            $('.sub8').addClass('encierra');
            $('.sub5').removeClass('encierra');
            $('.sub6').removeClass('encierra');
            $('.sub7').removeClass('encierra');

            break;


    }
});

function f_iniciar() {
    var p1vec1 = [(Math.floor(Math.random() * 20) + 2)];
    var p1pt1 = (Math.floor(Math.random() * 9) + 2);
    for (var i = 0; i < 7; i++) {
        p1vec1.push(p1vec1[i] + p1pt1);
    }
    $('#p1im1').text(p1vec1[0]);
    $('#p1im2').text(p1vec1[1]);
    $('#p1im3').text(p1vec1[2]);
    var p1vec2 = [(Math.floor(Math.random() * 10) + 50)];
    var p1pt2 = (Math.floor(Math.random() * 6) + 2);
    for (var i = 0; i < 7; i++) {
        p1vec2.push(p1vec2[i] + p1pt2);
    }
    $('#p1im11').text(p1vec2[0]);
    $('#p1im12').text(p1vec2[1]);
    $('#p1im13').text(p1vec2[2]);
    var p1vec11 = [];
    var p1vec12 = [];
    var myArray1 = [];
    var myArray2 = [];
    var j = 0;
    var x = 0;
    for (var i = 1; i <= 90; i++) {
        if (i % 2 == 0) {
            p1vec11.push(i);
            myArray1.push(j);
            j++;
        } else {
            p1vec12.push(i);
            myArray2.push(j);
            x++;
        }
    }
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    var p1cv1 = [];
    for (var i = 0; i < 5; i++) {
        var c = myArray1[i];
        p1cv1.push(p1vec11[c]);
    }
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    for (var i = 0; i < 5; i++) {
        var c1 = myArray2[i];
        p1cv1.push(p1vec12[c1]);
    }
    p1cv1.sort(f_randomico);
    for (var i = 0; i < p1cv1.length; i++) {
        $('#p2im' + (i + 1)).html(p1cv1[i]);
    }

    var p3n1 = (Math.floor(Math.random() * 40) + 10);
    var p3n2 = (Math.floor(Math.random() * 40) + 10);
    var p3v1 = p3n1.toString().split('');
    var p3v2 = p3n2.toString().split('');
    var p3vec1 = [];
    for (var i = 0; i < p3v1[0]; i++) {
        p3vec1.push('<img src="img/i2_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < p3v1[1]; i++) {
        p3vec1.push('<img src="img/i5_p189_u5a9.jpg" alt="">');
    }
    var p3vec2 = [];
    for (var i = 0; i < p3v2[0]; i++) {
        p3vec2.push('<img src="img/i2_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < p3v2[1]; i++) {
        p3vec2.push('<img src="img/i5_p189_u5a9.jpg" alt="">');
    }
    $('#p3im1').html(p3vec1);
    $('#p3im2').html(p3vec2);
    var p3n3 = (Math.floor(Math.random() * 40) + 10);
    var p3n4 = (Math.floor(Math.random() * 40) + 10);
    var p3v3 = p3n3.toString().split('');
    var p3v4 = p3n4.toString().split('');
    var p3vec3 = [];
    for (var i = 0; i < p3v3[0]; i++) {
        p3vec3.push('<img src="img/i2_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < p3v3[1]; i++) {
        p3vec3.push('<img src="img/i5_p189_u5a9.jpg" alt="">');
    }
    var p3vec4 = [];
    for (var i = 0; i < p3v4[0]; i++) {
        p3vec4.push('<img src="img/i2_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < p3v4[1]; i++) {
        p3vec4.push('<img src="img/i5_p189_u5a9.jpg" alt="">');
    }
    $('#p3im3').html(p3vec3);
    $('#p3im4').html(p3vec4);

    var p4vec1 = [];
    var myArray3 = [];
    for (var i = 40; i < 98; i++) {
        p4vec1.push(i);
        myArray3.push(i - 40);
    }
    var i, j, k;
    for (i = myArray3.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray3[i - 1];
        myArray3[i - 1] = myArray3[j];
        myArray3[j] = k;
    }

    var p4vec2 = [];
    var myArray4 = [];
    for (var i = 10; i < 39; i++) {
        p4vec2.push(i);
        myArray4.push(i - 10);
    }
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }
    var c = myArray3[5];
    var p4n1 = p4vec1[c];
    var c1 = myArray4[6];
    var p4n2 = p4vec2[c1];
    var p4d1 = p4n1.toString().split('');
    var p4d2 = p4n2.toString().split('');
    if (p4d1[1] < p4d2[1]) {
        var p4c1 = p4d1[1];
        var p4c2 = p4d2[1];
        p4d1[1] = p4c2;
        p4d2[1] = p4c1;
        p4n1 = p4d1.join('');
        p4n2 = p4d2.join('');
    }
    var p4n3 = parseInt(p4n1) - parseInt(p4n2);
    var p4sp1 = p4n3.toString().split('');
    var p4sp2 = p4n2.toString().split('');
    var p4sp3 = p4n1.toString().split('');
    var p4vc1 = [];
    var p4vc2 = [];
    for (var i = 0; i < parseInt(p4sp1[0]); i++) {
        p4vc1.push('<img src="img/i2_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < parseInt(p4sp2[0]); i++) {
        p4vc1.push('<img src="img/i3_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < parseInt(p4sp1[1]); i++) {
        p4vc2.push('<img src="img/i5_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < parseInt(p4sp2[1]); i++) {
        p4vc2.push('<img src="img/i4_p189_u5a9.jpg" alt="">');
    }
    $('#p4im1').html(p4vc1);
    $('#p4im2').html(p4vc2);

    var p4vec3 = [];
    var myArray5 = [];
    for (var i = 40; i < 98; i++) {
        p4vec3.push(i);
        myArray5.push(i - 40);
    }
    var i, j, k;
    for (i = myArray5.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray5[i - 1];
        myArray5[i - 1] = myArray5[j];
        myArray5[j] = k;
    }

    var p4vec4 = [];
    var myArray6 = [];
    for (var i = 10; i < 39; i++) {
        p4vec4.push(i);
        myArray6.push(i - 10);
    }
    var i, j, k;
    for (i = myArray6.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray6[i - 1];
        myArray6[i - 1] = myArray6[j];
        myArray6[j] = k;
    }
    var c2 = myArray5[5];
    var p4n4 = p4vec3[c2];
    var c3 = myArray6[6];
    var p4n5 = p4vec4[c3];
    var p4d3 = p4n4.toString().split('');
    var p4d4 = p4n5.toString().split('');
    if (p4d3[1] < p4d4[1]) {
        var p4c3 = p4d3[1];
        var p4c4 = p4d4[1];
        p4d3[1] = p4c4;
        p4d4[1] = p4c3;
        p4n4 = p4d3.join('');
        p4n5 = p4d4.join('');
    }
    var p4n6 = parseInt(p4n4) - parseInt(p4n5);
    var p4sp4 = p4n6.toString().split('');
    var p4sp5 = p4n5.toString().split('');
    var p4sp6 = p4n4.toString().split('');
    var p4vc3 = [];
    var p4vc4 = [];
    for (var i = 0; i < parseInt(p4sp4[0]); i++) {
        p4vc3.push('<img src="img/i2_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < parseInt(p4sp5[0]); i++) {
        p4vc3.push('<img src="img/i3_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < parseInt(p4sp4[1]); i++) {
        p4vc4.push('<img src="img/i5_p189_u5a9.jpg" alt="">');
    }
    for (var i = 0; i < parseInt(p4sp5[1]); i++) {
        p4vc4.push('<img src="img/i4_p189_u5a9.jpg" alt="">');
    }
    $('#p4im3').html(p4vc3);
    $('#p4im4').html(p4vc4);

    var p5vec1 = [];
    var myArray7 = [];
    for (var i = 40; i < 98; i++) {
        p5vec1.push(i);
        myArray7.push(i - 40);
    }
    var i, j, k;
    for (i = myArray7.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray7[i - 1];
        myArray7[i - 1] = myArray7[j];
        myArray7[j] = k;
    }

    var p5vec2 = [];
    var myArray8 = [];
    for (var i = 10; i < 39; i++) {
        p5vec2.push(i);
        myArray8.push(i - 10);
    }
    var i, j, k;
    for (i = myArray8.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray8[i - 1];
        myArray8[i - 1] = myArray8[j];
        myArray8[j] = k;
    }

    var p5vc1 = [];
    //aleatorio literal 1
    for (var i = 1; i <= 1; i++) {
        var c = myArray7[i - 1];
        p5vc1.push(p5vec1[c]);
        var c1 = myArray8[i - 1];
        p5vc1.push(p5vec2[c1]);

    };
    var p5d1 = p5vc1[0].toString().split('');
    var p5d2 = p5vc1[1].toString().split('');
    if (p5d1[1] < p5d2[1]) {
        var p5c1 = p5d1[1];
        var p5c2 = p5d2[1];
        p5d1[1] = p5c2;
        p5d2[1] = p5c1;
        p5vc1[0] = p5d1.join('');
        p5vc1[1] = p5d2.join('');
    }
    for (var i = 0; i < p5vc1.length; i++) {
        $('#p5im' + (i + 1)).html(p5vc1[i]);
    }
    $(".drag1").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p5act1"
    });
    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop1").draggable({ disabled: true });
            str = (ui.draggable.attr("id")); //capturamos los IDS
            if (str == 'c1') {
                sum_total += 10;
            } else if (str == 'c2') {
                sum_total += 1;
            } else if (str == 'c3') {
                sum_total2 += 10;
            } else if (str == 'c4') {
                sum_total2 += 1;
            }
        }
    });

    var p5n1 = (Math.floor(Math.random() * 40) + 10);
    var p5n2 = (Math.floor(Math.random() * 40) + 10);
    $('#p5im11').text(p5n1);
    $('#p5im12').text(p5n2);
    $(".drag2").draggable({
        rever: "invalid",
        helper: "clone",
        containment: "#p5act2"
    });
    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode: multiply;");
            })
            $(this).find(".drop2").draggable({ disabled: true });
            str2 = (ui.draggable.attr("id")); //capturamos los IDS
            if (str2 == 'c1') {
                sum_total3 += 10;
            } else {
                sum_total3 += 1;
            }
        }
    });

    var p6vec1 = ['jueves', 'domingo', 'martes', 'miércoles'];
    p6vec1.sort(f_randomico);
    for (var i = 0; i < p6vec1.length; i++) {
        $('#p6im' + (i + 1)).text(p6vec1[i]);
    }
    var p6vec2 = ['marzo', 'junio', 'mayo', 'abril'];
    p6vec2.sort(f_randomico);
    for (var i = 0; i < p6vec2.length; i++) {
        $('#p6im1' + (i + 1)).text(p6vec2[i]);
    }

    var p7vec1=['1','2','3','4','5','6','7'];
    p7vec1.sort(f_randomico);
    $('#p7im1').html(p7vec1[0]);
    $('#p7im2').html(p7vec1[1]);
    $('#p7im3').html(p7vec1[2]);
    $('#p7im4').html(p7vec1[3]);
    bt_comprobar.addEventListener("click", preg7);
    function preg7() {
        cor = 0;
        var pre7a = $('#pre7a').val();
        if (!pre7a) {
            alert('Ingrese la calificación en la Pregunta 7.')
        } else {
            cor = cor + parseFloat(pre7a);
            inc = inc + (1 - parseFloat(pre7a));
            $('#pre7a').val(parseFloat(pre7a).toFixed(2));
            $('#pre7a').attr('disabled', 'true');
            f_comprobar();
        }

    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg7);
        var p1cont1 = 0;
        for (var i = 3; i < p1vec1.length; i++) {
            var p1res1 = $('#p1dcon' + (i - 2)).val();
            if (p1res1 == p1vec1[i]) {
                p1cont1++;
                f_ok($('#p1dcon' + (i - 2)));
            } else {
                p1cont1;
                f_no($('#p1dcon' + (i - 2)));
            }
        }
        var p1dcon6 = $('#p1dcon6').val();
        if (p1dcon6 == p1pt1) {
            p1cont1++;
            f_ok($('#p1dcon6'));
        } else {
            p1cont1;
            f_no($('#p1dcon6'));
        }
        for (var i = 3; i < p1vec2.length; i++) {
            var p1res2 = $('#p1dcon1' + (i - 2)).val();
            if (p1res2 == p1vec2[i]) {
                p1cont1++;
                f_ok($('#p1dcon1' + (i - 2)));
            } else {
                p1cont1;
                f_no($('#p1dcon1' + (i - 2)));
            }
        }
        var p1dcon16 = $('#p1dcon16').val();
        if (p1dcon16 == p1pt2) {
            p1cont1++;
            f_ok($('#p1dcon16'));
        } else {
            p1cont1;
            f_no($('#p1dcon16'));
        }
        var result1 = (p1cont1 * 1) / 12;
        cor = cor + result1;
        inc = inc + (1 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2cont1 = 0;
        for (var i = 0; i < 10; i++) {
            var p2res1 = $('#p2im' + (i + 1)).html();
            if (p2res1 % 2 == 0) {
                if ($('#p2im' + (i + 1)).hasClass('subrayar')) {
                    p2cont1++;
                    $('#p2im' + (i + 1)).addClass('valid');
                } else {
                    p2cont1;
                    $('#p2im' + (i + 1)).addClass('no-valid');
                }
            } else {
                if ($('#p2im' + (i + 1)).hasClass('subrayar1')) {
                    p2cont1++;
                    $('#p2im' + (i + 1)).addClass('valid');
                } else {
                    p2cont1;
                    $('#p2im' + (i + 1)).addClass('no-valid');
                }
            }
        }
        var result2 = (p2cont1 * 1) / 10;
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');

        var nlrd1 = [$('#nlrd0').val(), $('#nlrd1').val()];
        nlrd1 = nlrd1.join('');
        var nlrd2 = [$('#nlrd2').val(), $('#nlrd3').val()];
        nlrd2 = nlrd2.join('');
        var nlrd3 = [$('#nlrd4').val(), $('#nlrd5').val()];
        nlrd3 = nlrd3.join('');
        var p3cont1 = 0;
        if (nlrd1 == p3n1) {
            p3cont1++;
            f_ok($('#nlrd0'));
            f_ok($('#nlrd1'));
        } else {
            p3cont1;
            f_no($('#nlrd0'));
            f_no($('#nlrd1'));
        }
        if (nlrd2 == p3n2) {
            p3cont1++;
            f_ok($('#nlrd2'));
            f_ok($('#nlrd3'));
        } else {
            p3cont1;
            f_no($('#nlrd2'));
            f_no($('#nlrd3'));
        }
        if (nlrd3 == (p3n1 + p3n2)) {
            p3cont1++;
            f_ok($('#nlrd4'));
            f_ok($('#nlrd5'));
        } else {
            p3cont1;
            f_no($('#nlrd4'));
            f_no($('#nlrd5'));
        }
        var nlrd4 = [$('#nlrd10').val(), $('#nlrd11').val()];
        nlrd4 = nlrd4.join('');
        var nlrd5 = [$('#nlrd12').val(), $('#nlrd13').val()];
        nlrd5 = nlrd5.join('');
        var nlrd6 = [$('#nlrd14').val(), $('#nlrd15').val()];
        nlrd6 = nlrd6.join('');
        if (nlrd4 == p3n3) {
            p3cont1++;
            f_ok($('#nlrd10'));
            f_ok($('#nlrd11'));
        } else {
            p3cont1;
            f_no($('#nlrd10'));
            f_no($('#nlrd11'));
        }
        if (nlrd5 == p3n4) {
            p3cont1++;
            f_ok($('#nlrd12'));
            f_ok($('#nlrd13'));
        } else {
            p3cont1;
            f_no($('#nlrd12'));
            f_no($('#nlrd13'));
        }
        if (nlrd6 == (p3n3 + p3n4)) {
            p3cont1++;
            f_ok($('#nlrd14'));
            f_ok($('#nlrd15'));
        } else {
            p3cont1;
            f_no($('#nlrd14'));
            f_no($('#nlrd15'));
        }
        var result3 = (p3cont1 * 2) / 6;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');

        var nlrd7 = [$('#nlrd20').val(), $('#nlrd21').val()];
        nlrd7 = nlrd7.join('');
        var nlrd8 = [$('#nlrd22').val(), $('#nlrd23').val()];
        nlrd8 = nlrd8.join('');
        var nlrd9 = [$('#nlrd24').val(), $('#nlrd25').val()];
        nlrd9 = nlrd9.join('');
        var p4cont1 = 0;
        if (nlrd7 == p4n1) {
            p4cont1++;
            f_ok($('#nlrd20'));
            f_ok($('#nlrd21'));
        } else {
            p4cont1;
            f_no($('#nlrd20'));
            f_no($('#nlrd21'));
        }
        if (nlrd8 == p4n2) {
            p4cont1++;
            f_ok($('#nlrd22'));
            f_ok($('#nlrd23'));
        } else {
            p4cont1;
            f_no($('#nlrd22'));
            f_no($('#nlrd23'));
        }
        if (nlrd9 == p4n3) {
            p4cont1++;
            f_ok($('#nlrd24'));
            f_ok($('#nlrd25'));
        } else {
            p4cont1;
            f_no($('#nlrd24'));
            f_no($('#nlrd25'));
        }
        var nlrd10 = [$('#nlrd30').val(), $('#nlrd31').val()];
        nlrd10 = nlrd10.join('');
        var nlrd11 = [$('#nlrd32').val(), $('#nlrd33').val()];
        nlrd11 = nlrd11.join('');
        var nlrd12 = [$('#nlrd34').val(), $('#nlrd35').val()];
        nlrd12 = nlrd12.join('');
        if (nlrd10 == p4n4) {
            p4cont1++;
            f_ok($('#nlrd30'));
            f_ok($('#nlrd31'));
        } else {
            p4cont1;
            f_no($('#nlrd30'));
            f_no($('#nlrd31'));
        }
        if (nlrd11 == p4n5) {
            p4cont1++;
            f_ok($('#nlrd32'));
            f_ok($('#nlrd33'));
        } else {
            p4cont1;
            f_no($('#nlrd32'));
            f_no($('#nlrd33'));
        }
        if (nlrd12 == p4n6) {
            p4cont1++;
            f_ok($('#nlrd34'));
            f_ok($('#nlrd35'));
        } else {
            p4cont1;
            f_no($('#nlrd34'));
            f_no($('#nlrd35'));
        }
        var result4 = (p4cont1 * 2) / 6;
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#pre4a').val(result4.toFixed(2));
        $('#pre4a').css('display', '');

        var p5cont1 = 0;

        var p5dcon1 = $('#p5dcon1').val();
        var p5dcon2 = $('#p5dcon2').val();
        if (p5dcon1 == p5vc1[0]) {
            p5cont1++;
            f_ok($('#p5dcon1'));
        } else {
            p5cont1;
            f_no($('#p5dcon1'));
        }
        if (p5dcon2 == p5vc1[1]) {
            p5cont1++;
            f_ok($('#p5dcon2'));
        } else {
            p5cont1;
            f_no($('#p5dcon2'));
        }
        var p5dcon4 = $('#p5dcon4').val();
        var p5dcon5 = $('#p5dcon5').val();
        if (p5dcon4 == p5vc1[0]) {
            p5cont1++;
            f_ok($('#p5dcon4'));
        } else {
            p5cont1;
            f_no($('#p5dcon4'));
        }
        if (p5dcon5 == p5vc1[1]) {
            p5cont1++;
            f_ok($('#p5dcon5'));
        } else {
            p5cont1;
            f_no($('#p5dcon5'));
        }
        var p5dcon6 = $('#p5dcon6').val();
        if (p5dcon6 == (p5vc1[0] - p5vc1[1])) {
            p5cont1++;
            f_ok($('#p5dcon6'));
        } else {
            p5cont1;
            f_no($('#p5dcon6'));
        }
        var nlrd1 = [$('#nlrd40').val(), $('#nlrd41').val()];
        nlrd1 = nlrd1.join('');
        var nlrd2 = [$('#nlrd42').val(), $('#nlrd43').val()];
        nlrd2 = nlrd2.join('');
        var nlrd3 = [$('#nlrd44').val(), $('#nlrd45').val()];
        nlrd3 = nlrd3.join('');
        if (nlrd1 == p5vc1[0]) {
            p5cont1++;
            f_ok($('#nlrd40'));
            f_ok($('#nlrd41'));
        } else {
            p5cont1;
            f_no($('#nlrd40'));
            f_no($('#nlrd41'));
        }
        if (nlrd2 == p5vc1[1]) {
            p5cont1++;
            f_ok($('#nlrd42'));
            f_ok($('#nlrd43'));
        } else {
            p5cont1;
            f_no($('#nlrd42'));
            f_no($('#nlrd43'));
        }
        if (nlrd3 == (p5vc1[0] - p5vc1[1])) {
            p5cont1++;
            f_ok($('#nlrd44'));
            f_ok($('#nlrd45'));
        } else {
            p5cont1;
            f_no($('#nlrd44'));
            f_no($('#nlrd45'));
        }

        if ((sum_total + sum_total2) + '-' + sum_total2 == p5vc1[0] + '-' + p5vc1[1]) {
            p5cont1++;
            f_ok($('#p5a1'));
        } else {
            p5cont1;
            f_no($('#p5a1'));
        }
        var p5dcon3 = $('#p5dcon3').val().toLowerCase();
        if (p5dcon3 == 'resta' || p5dcon3 == 'sustracción') {
            p5cont1++;
            f_ok($('#p5dcon3'));
        } else {
            p5cont1;
            f_no($('#p5dcon3'));
        }
        var p5dcon11 = $('#p5dcon11').val();
        var p5dcon12 = $('#p5dcon12').val();
        if (p5dcon11 == p5n1) {
            p5cont1++;
            f_ok($('#p5dcon11'));
        } else {
            p5cont1;
            f_no($('#p5dcon11'));
        }
        if (p5dcon12 == p5n2) {
            p5cont1++;
            f_ok($('#p5dcon12'));
        } else {
            p5cont1;
            f_no($('#p5dcon12'));
        }
        var p5dcon14 = $('#p5dcon14').val();
        var p5dcon15 = $('#p5dcon15').val();
        if (p5dcon14 == p5n1) {
            p5cont1++;
            f_ok($('#p5dcon14'));
        } else {
            p5cont1;
            f_no($('#p5dcon14'));
        }
        if (p5dcon15 == p5n2) {
            p5cont1++;
            f_ok($('#p5dcon15'));
        } else {
            p5cont1;
            f_no($('#p5dcon15'));
        }
        var p5dcon16 = $('#p5dcon16').val();
        if (p5dcon16 == (p5n1 + p5n2)) {
            p5cont1++;
            f_ok($('#p5dcon16'));
        } else {
            p5cont1;
            f_no($('#p5dcon16'));
        }
        var nlrd1 = [$('#nlrd50').val(), $('#nlrd51').val()];
        nlrd1 = nlrd1.join('');
        var nlrd2 = [$('#nlrd52').val(), $('#nlrd53').val()];
        nlrd2 = nlrd2.join('');
        var nlrd3 = [$('#nlrd54').val(), $('#nlrd55').val()];
        nlrd3 = nlrd3.join('');
        if (nlrd1 == p5n1) {
            p5cont1++;
            f_ok($('#nlrd50'));
            f_ok($('#nlrd51'));
        } else {
            p5cont1;
            f_no($('#nlrd50'));
            f_no($('#nlrd51'));
        }
        if (nlrd2 == p5n2) {
            p5cont1++;
            f_ok($('#nlrd52'));
            f_ok($('#nlrd53'));
        } else {
            p5cont1;
            f_no($('#nlrd52'));
            f_no($('#nlrd53'));
        }
        if (nlrd3 == (p5n1 + p5n2)) {
            p5cont1++;
            f_ok($('#nlrd54'));
            f_ok($('#nlrd55'));
        } else {
            p5cont1;
            f_no($('#nlrd54'));
            f_no($('#nlrd55'));
        }

        if (sum_total3 == (p5n1 + p5n2)) {
            p5cont1++;
            f_ok($('#p5a2'));
        } else {
            p5cont1;
            f_no($('#p5a2'));
        }
        var p5dcon13 = $('#p5dcon13').val().toLowerCase();
        if (p5dcon13 == 'suma' || p5dcon13 == 'adición') {
            p5cont1++;
            f_ok($('#p5dcon13'));
        } else {
            p5cont1;
            f_no($('#p5dcon13'));
        }
        var result5 = (p5cont1 * 2) / 18;
        cor = cor + result5;
        inc = inc + (2 - result5);
        $('#pre5a').val(result5.toFixed(2));
        $('#pre5a').css('display', '');

        var p6res1 = $('#p6rs1 .encierra span').text();
        var p6res2 = $('#p6rs2 .encierra span').text();
        var p6cont1 = 0;
        if (!p6res1) {
            p6cont1;
            f_no($('.1'));
        }else{
            if (p6res1 == 'miércoles') {
                p6cont1++;
                f_ok($('#p6rs1 .encierra'));
            } else {
                p6cont1;
                f_no($('#p6rs1 .encierra'));
            }
        }
        if (!p6res2) {
            p6cont1;
            f_no($('.2'));
        }else{
            if (p6res2 == 'junio') {
                p6cont1++;
                f_ok($('#p6rs2 .encierra'));
            } else {
                p6cont1;
                f_no($('#p6rs2 .encierra'));
            }
        }
        var result6 = (p6cont1 * 1) / 2;
        cor = cor + result6;
        inc = inc + (1 - result6);
        $('#pre6a').val(result6.toFixed(2));
        $('#pre6a').css('display', '');

        Calculo_nota();
    }
}