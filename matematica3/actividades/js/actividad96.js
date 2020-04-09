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
var nump1 = 0;
var nump2 = 0;
var nump3 = 0;

var t = 0;
var t1 = 0;
var t2 = 0;

f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 1)
});

$('.pint1').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')


    } else {
        $(this).addClass('pinta')
        $('.pint2').removeClass('pinta');

    }

})
$('.pint2').click(function() {

    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta')


    } else {
        $(this).addClass('pinta')
        $('.pint1').removeClass('pinta');

    }

})

$('.enc1').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc2').removeClass('encierra');
        $('.enc3').removeClass('encierra');
        $('.enc4').removeClass('encierra');

    }

})
$('.enc2').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc1').removeClass('encierra');
        $('.enc3').removeClass('encierra');
        $('.enc4').removeClass('encierra');

    }

})
$('.enc3').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc2').removeClass('encierra');
        $('.enc1').removeClass('encierra');
        $('.enc4').removeClass('encierra');

    }

})
$('.enc4').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc2').removeClass('encierra');
        $('.enc3').removeClass('encierra');
        $('.enc1').removeClass('encierra');

    }

})



$('.enc5').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc6').removeClass('encierra');
        $('.enc7').removeClass('encierra');
        $('.enc8').removeClass('encierra');

    }

})
$('.enc6').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc5').removeClass('encierra');
        $('.enc7').removeClass('encierra');
        $('.enc8').removeClass('encierra');

    }

})
$('.enc7').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc6').removeClass('encierra');
        $('.enc5').removeClass('encierra');
        $('.enc8').removeClass('encierra');

    }

})
$('.enc8').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')


    } else {
        $(this).addClass('encierra')
        $('.enc6').removeClass('encierra');
        $('.enc7').removeClass('encierra');
        $('.enc5').removeClass('encierra');

    }

})

function st() {
    t = nn(nump1);
    t1 = nn(nump2);
    t2 = nn(nump3);


}
window.onload = st;

function f_iniciar() {
    var p2num1 = [parseInt((Math.random() * 50) + 10)];
    var p2pt1 = parseInt((Math.random() * 9) + 1);
    for (var i = 0; i < 8; i++) {
        p2num1.push((p2num1[i] + p2pt1));
    }
    $('#p2dcon2').val(p2num1[0]);
    $('#p2dcon3').val(p2num1[1]);
    $('#p2dcon4').val(p2num1[2]);
    $('#p2dcon5').val(p2num1[3]);



    var p3num1 = parseInt((Math.random() * 700) + 100);
    var p3num2 = parseInt((Math.random() * 700) + 100);
    var p3num3 = parseInt((Math.random() * 700) + 100);
    var p3aux1 = p3num1.toString().split('');
    var p3aux2 = p3num2.toString().split('');
    var p3aux3 = p3num3.toString().split('');
    $('#p3dcon1').val(p3num1);
    $('#p3dcon2').val(p3aux1[0] + 'C');
    $('#p3dcon3').val(p3aux1[1] + 'D');
    $('#p3dcon4').val(p3aux1[2] + 'U');
    $('#p31dcon1').val(p3num2);
    $('#p31dcon5').val(p3aux2[0] + '00');
    $('#p31dcon6').val(p3aux2[1] + '0');
    $('#p31dcon7').val(p3aux2[2]);
    $('#p32dcon2').val(p3aux3[0] + 'C');
    $('#p32dcon3').val(p3aux3[1] + 'D');
    $('#p32dcon4').val(p3aux3[2] + 'U');
    nump1 = p3num1;
    nump2 = p3num2;
    nump3 = p3num3;


    sum_total = 0;

    $(".c_destino").html('');

    $(".drag").draggable({
        rever: "invalid",
        helper: "clone"
    });
    $(".drop").droppable({
        accept: '.drag',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop").draggable({ disabled: true });
            str = (ui.draggable.attr("id")); //capturamos los IDS
            if (str == 'b1') {
                sum_total += 100;
            } else if (str == 'b2') {
                sum_total += 10;
            } else if (str == 'b3') {
                sum_total += 1;
            }
        }
    });

    sum_total1 = 0;



    $(".drag1").draggable({
        rever: "invalid",
        helper: "clone"
    });
    $(".drop1").droppable({
        accept: '.drag1',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop1").draggable({ disabled: true });
            str1 = (ui.draggable.attr("id")); //capturamos los IDS
            if (str1 == 'b1') {
                sum_total1 += 100;
            } else if (str1 == 'b2') {
                sum_total1 += 10;
            } else if (str1 == 'b3') {
                sum_total1 += 1;
            }
        }
    });
    sum_total2 = 0;



    $(".drag2").draggable({
        rever: "invalid",
        helper: "clone"
    });
    $(".drop2").droppable({
        accept: '.drag2',
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "mix-blend-mode:multiply");
            })
            $(this).find(".drop2").draggable({ disabled: true });
            str2 = (ui.draggable.attr("id")); //capturamos los IDS
            if (str2 == 'b1') {
                sum_total2 += 100;
            } else if (str2 == 'b2') {
                sum_total2 += 10;
            } else if (str2 == 'b3') {
                sum_total2 += 1;
            }
        }
    });

    var p4vec1 = [];
    var p4num1 = parseInt((Math.random() * 700) + 100);
    var p4num2 = parseInt((Math.random() * 700) + 100);
    if (p4num1 == p4num2) {
        p4num1 = p4num1 + 10;
        p4num2;
    } else {
        p4num1;
        p4num2;
    }
    if (p4num1 < p4num2) {
        p4vec1.push('<');
    } else if (p4num1 > p4num2) {
        p4vec1.push('>');
    }
    $('#p4im1').html(p4num1);
    $('#p4im11').html(p4num2);
    var p4num3 = parseInt((Math.random() * 700) + 100);
    var p4num4 = parseInt((Math.random() * 700) + 100);
    if (p4num3 == p4num4) {
        p4num3 = p4num3 + 10;
        p4num4;
    } else {
        p4num3;
        p4num4;
    }
    if (p4num3 < p4num4) {
        p4vec1.push('<');
    } else if (p4num3 > p4num4) {
        p4vec1.push('>');
    }
    $('#p4im2').html(p4num3);
    $('#p4im12').html(p4num4);
    var p4num5 = parseInt((Math.random() * 700) + 100);
    var p4num6 = parseInt((Math.random() * 700) + 100);
    if (p4num5 == p4num6) {
        p4num5 = p4num5 + 10;
        p4num6;
    } else {
        p4num5;
        p4num6;
    }

    if (p4num5 < p4num6) {
        p4vec1.push('<');
    } else if (p4num5 > p4num6) {
        p4vec1.push('>');
    }
    $('#p4im3').html(p4num5);
    $('#p4im13').html(p4num6);
    var p4num7 = parseInt((Math.random() * 700) + 100);
    var p4num8 = parseInt((Math.random() * 700) + 100);
    if (p4num7 == p4num8) {
        p4num7 = p4num7 + 10;
        p4num8;
    } else {
        p4num7;
        p4num8;
    }
    if (p4num7 < p4num8) {
        p4vec1.push('<');
    } else if (p4num7 > p4num8) {
        p4vec1.push('>');
    }
    $('#p4im4').html(p4num7);
    $('#p4im14').html(p4num8);
    var p4num9 = parseInt((Math.random() * 700) + 100);
    var p4num10 = parseInt((Math.random() * 700) + 100);
    if (p4num9 == p4num10) {
        p4num9 = p4num9 + 10;
        p4num10;
    } else {
        p4num9;
        p4num10;
    }
    if (p4num9 < p4num10) {
        p4vec1.push('<');
    } else if (p4num9 > p4num10) {
        p4vec1.push('>');
    }
    $('#p4im5').html(p4num9);
    $('#p4im15').html(p4num10);
    var p4num11 = parseInt((Math.random() * 700) + 100);
    var p4num12 = parseInt((Math.random() * 700) + 100);
    if (p4num11 == p4num12) {
        p4num11 = p4num11 + 10;
        p4num12;
    } else {
        p4num11;
        p4num12;
    }
    if (p4num11 < p4num12) {
        p4vec1.push('<');
    } else if (p4num11 > p4num12) {
        p4vec1.push('>');
    }
    $('#p4im6').html(p4num11);
    $('#p4im16').html(p4num12);

    var pal1 = ['<span class="bg_palabra drag3 c1">décimo quinto</span>',
        '<span class="bg_palabra drag3 c2">décimo segundo</span>',
        '<span class="bg_palabra drag3 c3">décimo</span>',
        '<span class="bg_palabra drag3 c4">décimo cuarto</span>',
        '<span class="bg_palabra drag3 c5">octavo</span>'
    ];
    var pal2 = ['<div><b>15.°</b></div>',
        '<div><b>12.°</b></div>',
        '<div><b>10.°</b></div>',
        '<div><b>14.°</b></div>',
        '<div><b>8.°</b></div>'
    ];
    var pal5 = ['décimo quinto',
        'décimo segundo',
        'décimo',
        'décimo cuarto',
        'octavo'
    ];
    var p5aux1 = [];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var myArray1 = ['0', '1', '2', '3', '4'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c = myArray1[i - 1];
        $(".p5cim1" + i).html(pal2[c]);
        p5aux1.push(pal5[c]);

    };
    $(".drag3").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad17",
        scroll: false,
    });

    $(".drop3").droppable({
        accept: ".drag3",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag3");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });
    var pal3 = ['<span class="bg_palabra1 drag4 c6">décimo primero</span>',
        '<span class="bg_palabra1 drag4 c7">vigésimo</span>',
        '<span class="bg_palabra1 drag4 c8">noveno</span>',
        '<span class="bg_palabra1 drag4 c9">décimo séptimo</span>',
        '<span class="bg_palabra1 drag4 c10">tercero</span>'
    ];
    var pal4 = ['<div><b>11.°</b></div>',
        '<div><b>20.°</b></div>',
        '<div><b>9.°</b></div>',
        '<div><b>17.°</b></div>',
        '<div><b>3.°</b></div>'
    ];
    var pal6 = ['décimo primero',
        'vigésimo',
        'noveno',
        'décimo séptimo',
        'tercero'
    ];
    pal3.sort(f_randomico);
    var p5aux2 = [];
    $(".textos1").append(pal3);
    var myArray1 = ['0', '1', '2', '3', '4'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5; i++) {
        var c1 = myArray1[i - 1];
        $(".p5ciim1" + i).html(pal4[c1]);
        p5aux2.push(pal6[c1]);
    };
    $(".drag4").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: ".actividad17",
        scroll: false,
    });

    $(".drop4").droppable({
        accept: ".drag4",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag4");
            $(ui.draggable).removeClass("bg_palabra1");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p2dcon1 = $('#p2dcon1').val();
        var p2dcon6 = $('#p2dcon6').val();
        var p2dcon7 = $('#p2dcon7').val();
        var p2dcon8 = $('#p2dcon8').val();
        var p2dcon9 = $('#p2dcon9').val();
        var p2dcon10 = $('#p2dcon10').val();
        var p2cont1 = 0;
        if (p2dcon1 == p2pt1) {
            p2cont1++;
            f_ok($('#p2dcon1'));
        } else {
            p2cont1;
            f_no($('#p2dcon1'));
        }

        if (p2dcon6 == p2num1[4]) {
            p2cont1++;
            f_ok($('#p2dcon6'));
        } else {
            p2cont1;
            f_no($('#p2dcon6'));
        }
        if (p2dcon7 == p2num1[5]) {
            p2cont1++;
            f_ok($('#p2dcon7'));
        } else {
            p2cont1;
            f_no($('#p2dcon7'));
        }
        if (p2dcon8 == p2num1[6]) {
            p2cont1++;
            f_ok($('#p2dcon8'));
        } else {
            p2cont1;
            f_no($('#p2dcon8'));
        }
        if (p2dcon9 == p2num1[7]) {
            p2cont1++;
            f_ok($('#p2dcon9'));
        } else {
            p2cont1;
            f_no($('#p2dcon9'));
        }
        if (p2dcon10 == p2num1[8]) {
            p2cont1++;
            f_ok($('#p2dcon10'));
        } else {
            p2cont1;
            f_no($('#p2dcon10'));
        }
        var result2 = (p2cont1 * 1) / 6
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css("display", "");
        f_ok($('#nota1_2'));



        var p3dcon8 = $('#p3dcon8').val();
        var p3dcon5 = $('#p3dcon5').val();
        var p3dcon6 = $('#p3dcon6').val();
        var p3dcon7 = $('#p3dcon7').val();
        var p3cont1 = 0;
        if (p3dcon8 == t) {
            p3cont1++;
            f_ok($('#p3dcon8'));
        } else {
            p3cont1;
            f_no($('#p3dcon8'));
        }
        if (p3dcon5 == (p3aux1[0] + '00')) {
            p3cont1++;
            f_ok($('#p3dcon5'));
        } else {
            p3cont1;
            f_no($('#p3dcon5'));
        }
        if (p3dcon6 == (p3aux1[1] + '0')) {
            p3cont1++;
            f_ok($('#p3dcon6'));
        } else {
            p3cont1;
            f_no($('#p3dcon6'));
        }
        if (p3dcon7 == (p3aux1[2])) {
            p3cont1++;
            f_ok($('#p3dcon7'));
        } else {
            p3cont1;
            f_no($('#p3dcon7'));
        }
        if (sum_total == (p3num1)) {
            p3cont1++;
            f_ok($('.p3res1'));
        } else {
            p3cont1;
            f_no($('.p3res1'));
        }

        var p31dcon8 = $('#p31dcon8').val();
        var p31dcon2 = $('#p31dcon2').val();
        var p31dcon3 = $('#p31dcon3').val();
        var p31dcon4 = $('#p31dcon4').val();

        if (p31dcon8 == t1) {
            p3cont1++;
            f_ok($('#p31dcon8'));
        } else {
            p3cont1;
            f_no($('#p31dcon8'));
        }
        if (p31dcon2 == (p3aux2[0] + 'C')) {
            p3cont1++;
            f_ok($('#p31dcon2'));
        } else {
            p3cont1;
            f_no($('#p31dcon2'));
        }
        if (p31dcon3 == (p3aux2[1] + 'D')) {
            p3cont1++;
            f_ok($('#p31dcon3'));
        } else {
            p3cont1;
            f_no($('#p31dcon3'));
        }
        if (p31dcon4 == (p3aux2[2] + 'U')) {
            p3cont1++;
            f_ok($('#p31dcon4'));
        } else {
            p3cont1;
            f_no($('#p31dcon4'));
        }
        if (sum_total1 == (p3num2)) {
            p3cont1++;
            f_ok($('.p3res2'));
        } else {
            p3cont1;
            f_no($('.p3res2'));
        }


        var p32dcon1 = $('#p32dcon1').val();
        var p32dcon8 = $('#p32dcon8').val();
        var p32dcon5 = $('#p32dcon5').val();
        var p32dcon6 = $('#p32dcon6').val();
        var p32dcon7 = $('#p32dcon7').val();

        if (p32dcon1 == p3num3) {
            p3cont1++;
            f_ok($('#p32dcon1'));
        } else {
            p3cont1;
            f_no($('#p32dcon1'));
        }
        if (p32dcon8 == t2) {
            p3cont1++;
            f_ok($('#p32dcon8'));
        } else {
            p3cont1;
            f_no($('#p32dcon8'));
        }
        if (p32dcon5 == (p3aux3[0] + '00')) {
            p3cont1++;
            f_ok($('#p32dcon5'));
        } else {
            p3cont1;
            f_no($('#p32dcon5'));
        }
        if (p32dcon6 == (p3aux3[1] + '0')) {
            p3cont1++;
            f_ok($('#p32dcon6'));
        } else {
            p3cont1;
            f_no($('#p32dcon6'));
        }
        if (p32dcon7 == (p3aux3[2])) {
            p3cont1++;
            f_ok($('#p32dcon7'));
        } else {
            p3cont1;
            f_no($('#p32dcon7'));
        }
        if (sum_total2 == (p3num3)) {
            p3cont1++;
            f_ok($('.p3res3'));
        } else {
            p3cont1;
            f_no($('.p3res3'));
        }

        var result3 = (p3cont1 * 2) / 16
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css("display", "");
        f_ok($('#nota1_3'));

        var p4sel1 = $('#p4sel1').val();
        var p4sel2 = $('#p4sel2').val();
        var p4sel3 = $('#p4sel3').val();
        var p4sel4 = $('#p4sel4').val();
        var p4sel5 = $('#p4sel5').val();
        var p4sel6 = $('#p4sel6').val();
        var p4cont1 = 0;
        if (p4sel1 == p4vec1[0]) {
            p4cont1++;
            f_ok($('#p4sel1'));
        } else {
            p4cont1;
            f_no($('#p4sel1'));
        }
        if (p4sel2 == p4vec1[1]) {
            p4cont1++;
            f_ok($('#p4sel2'));
        } else {
            p4cont1;
            f_no($('#p4sel2'));
        }
        if (p4sel3 == p4vec1[2]) {
            p4cont1++;
            f_ok($('#p4sel3'));
        } else {
            p4cont1;
            f_no($('#p4sel3'));
        }
        if (p4sel4 == p4vec1[3]) {
            p4cont1++;
            f_ok($('#p4sel4'));
        } else {
            p4cont1;
            f_no($('#p4sel4'));
        }
        if (p4sel5 == p4vec1[4]) {
            p4cont1++;
            f_ok($('#p4sel5'));
        } else {
            p4cont1;
            f_no($('#p4sel5'));
        }
        if (p4sel6 == p4vec1[5]) {
            p4cont1++;
            f_ok($('#p4sel6'));
        } else {
            p4cont1;
            f_no($('#p4sel6'));
        }
        var result4 = (p4cont1 * 1) / 6
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#nota1_4').val(result4.toFixed(2));
        $('#nota1_4').css("display", "");
        f_ok($('#nota1_4'));



        var p5im1 = $('.p5im1 span').text();
        var p5im2 = $('.p5im2 span').text();
        var p5im3 = $('.p5im3 span').text();
        var p5im4 = $('.p5im4 span').text();
        var p5im5 = $('.p5im5 span').text();
        var p5cont1 = 0;
        if (p5im1 == p5aux1[0]) {
            p5cont1++;
            f_ok($('.p5im1'));
        } else {
            p5cont1;
            f_no($('.p5im1'));
        }
        if (p5im2 == p5aux1[1]) {
            p5cont1++;
            f_ok($('.p5im2'));
        } else {
            p5cont1;
            f_no($('.p5im2'));
        }
        if (p5im3 == p5aux1[2]) {
            p5cont1++;
            f_ok($('.p5im3'));
        } else {
            p5cont1;
            f_no($('.p5im3'));
        }
        if (p5im4 == p5aux1[3]) {
            p5cont1++;
            f_ok($('.p5im4'));
        } else {
            p5cont1;
            f_no($('.p5im4'));
        }
        if (p5im5 == p5aux1[4]) {
            p5cont1++;
            f_ok($('.p5im5'));
        } else {
            p5cont1;
            f_no($('.p5im5'));
        }

        var p5iim1 = $('.p5iim1 span').text();
        var p5iim2 = $('.p5iim2 span').text();
        var p5iim3 = $('.p5iim3 span').text();
        var p5iim4 = $('.p5iim4 span').text();
        var p5iim5 = $('.p5iim5 span').text();

        if (p5iim1 == p5aux2[0]) {
            p5cont1++;
            f_ok($('.p5iim1'));
        } else {
            p5cont1;
            f_no($('.p5iim1'));
        }
        if (p5iim2 == p5aux2[1]) {
            p5cont1++;
            f_ok($('.p5iim2'));
        } else {
            p5cont1;
            f_no($('.p5iim2'));
        }
        if (p5iim3 == p5aux2[2]) {
            p5cont1++;
            f_ok($('.p5iim3'));
        } else {
            p5cont1;
            f_no($('.p5iim3'));
        }
        if (p5iim4 == p5aux2[3]) {
            p5cont1++;
            f_ok($('.p5iim4'));
        } else {
            p5cont1;
            f_no($('.p5iim4'));
        }
        if (p5iim5 == p5aux2[4]) {
            p5cont1++;
            f_ok($('.p5iim5'));
        } else {
            p5cont1;
            f_no($('.p5iim5'));
        }
        var result5 = (p5cont1 * 1) / 10
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css("display", "");
        f_ok($('#nota1_5'));



        var p6dcon1 = $('#p6dcon1').val();
        var p6dcon2 = $('#p6dcon2').val();
        var p6dcon3 = $('#p6dcon3').val();
        var p6dcon4 = $('#p6dcon4').val();
        var p6dcon5 = $('#p6dcon5').val();
        var p6dcon6 = $('#p6dcon6').val();
        var p6dcon7 = $('#p6dcon7').val();
        var p6cont1 = 0;
        var p6cont2 = 0;
        var p6vec1 = ['6', '10', '6', '10', '32'];
        for (var i = 0; i < 4; i++) {
            if (p6dcon1 == p6vec1[i] && (parseInt(p6dcon1) + parseInt(p6dcon2) + parseInt(p6dcon3) + parseInt(p6dcon4)) == p6vec1[4]) {
                p6cont2++;
            }
        }
        if (p6cont2 == '2') {
            p6cont1++;
            f_ok($('#p6dcon1'));
        } else {
            p6cont1;
            f_no($('#p6dcon1'));
        }
        var p6cont3 = 0;
        for (var i = 0; i < 4; i++) {
            if (p6dcon2 == p6vec1[i] && (parseInt(p6dcon1) + parseInt(p6dcon2) + parseInt(p6dcon3) + parseInt(p6dcon4)) == p6vec1[4]) {
                p6cont3++;
            }
        }
        if (p6cont3 == '2') {
            p6cont1++;
            f_ok($('#p6dcon2'));
        } else {
            p6cont1;
            f_no($('#p6dcon2'));
        }
        var p6cont4 = 0;
        for (var i = 0; i < 4; i++) {
            if (p6dcon3 == p6vec1[i] && (parseInt(p6dcon1) + parseInt(p6dcon2) + parseInt(p6dcon3) + parseInt(p6dcon4)) == p6vec1[4]) {
                p6cont4++;
            }
        }
        if (p6cont4 == '2') {
            p6cont1++;
            f_ok($('#p6dcon3'));
        } else {
            p6cont1;
            f_no($('#p6dcon3'));
        }
        var p6cont5 = 0;
        for (var i = 0; i < 4; i++) {
            if (p6dcon4 == p6vec1[i] && (parseInt(p6dcon1) + parseInt(p6dcon2) + parseInt(p6dcon3) + parseInt(p6dcon4)) == p6vec1[4]) {
                p6cont5++;
            }
        }
        if (p6cont5 == '2') {
            p6cont1++;
            f_ok($('#p6dcon4'));
        } else {
            p6cont1;
            f_no($('#p6dcon4'));
        }
        if (p6dcon5 == p6vec1[4]) {
            p6cont1++;
            f_ok($('#p6dcon5'));
        } else {
            p6cont1;
            f_no($('#p6dcon5'));
        }
        if (p6dcon6 == p6vec1[4]) {
            p6cont1++;
            f_ok($('#p6dcon6'));
        } else {
            p6cont1;
            f_no($('#p6dcon6'));
        }
        if (p6dcon7 == p6vec1[4]) {
            p6cont1++;
            f_ok($('#p6dcon7'));
        } else {
            p6cont1;
            f_no($('#p6dcon7'));
        }

        var p61dcon1 = $('#p61dcon1').val();
        var p61dcon2 = $('#p61dcon2').val();
        var p61dcon3 = $('#p61dcon3').val();
        var p61dcon4 = $('#p61dcon4').val();
        var p61dcon5 = $('#p61dcon5').val();
        var p61dcon6 = $('#p61dcon6').val();
        var p61dcon7 = $('#p61dcon7').val();
        if (p61dcon1 == '5') {
            p6cont1++;
            f_ok($('#p61dcon1'));
        } else {
            p6cont1;
            f_no($('#p61dcon1'));
        }
        if (p61dcon2 == '5') {
            p6cont1++;
            f_ok($('#p61dcon2'));
        } else {
            p6cont1;
            f_no($('#p61dcon2'));
        }
        if (p61dcon3 == '5') {
            p6cont1++;
            f_ok($('#p61dcon3'));
        } else {
            p6cont1;
            f_no($('#p61dcon3'));
        }
        if (p61dcon4 == '5') {
            p6cont1++;
            f_ok($('#p61dcon4'));
        } else {
            p6cont1;
            f_no($('#p61dcon4'));
        }
        if (p61dcon5 == '20') {
            p6cont1++;
            f_ok($('#p61dcon5'));
        } else {
            p6cont1;
            f_no($('#p61dcon5'));
        }
        if (p61dcon6 == '20') {
            p6cont1++;
            f_ok($('#p61dcon6'));
        } else {
            p6cont1;
            f_no($('#p61dcon6'));
        }
        if (p61dcon7 == '20') {
            p6cont1++;
            f_ok($('#p61dcon7'));
        } else {
            p6cont1;
            f_no($('#p61dcon7'));
        }
        var result6 = (p6cont1 * 2) / 14
        cor = cor + result6;
        inc = inc + (2 - result6);
        $('#nota1_6').val(result6.toFixed(2));
        $('#nota1_6').css("display", "");
        f_ok($('#nota1_6'));


        var p7dcon1 = $('#p7dcon1').val();
        var p7dcon3 = $('#p7dcon3').val();
        var p7dcon12 = $('#p7dcon12').val();
        var p7dcon14 = $('#p7dcon14').val();
        var p7dcon5 = $('#p7dcon5').val();
        var p7dcon6 = $('#p7dcon6').val();
        var p7dcon7 = $('#p7dcon7').val();
        var p7dcon8 = $('#p7dcon8').val();
        var p7dcon9 = $('#p7dcon9').val();
        var p7dcon10 = $('#p7dcon10').val();
        var p7dcon111 = $('#p7dcon111').val();
        var p7cont1 = 0;
        if (p7dcon1 == 'llllll') {
            p7cont1++;
            f_ok($('#p7dcon1'));
        } else {
            p7cont1;
            f_no($('#p7dcon1'));
        }
        if (p7dcon3 == 'llllll') {
            p7cont1++;
            f_ok($('#p7dcon3'));
        } else {
            p7cont1;
            f_no($('#p7dcon3'));
        }
        if (p7dcon12 == '4') {
            p7cont1++;
            f_ok($('#p7dcon12'));
        } else {
            p7cont1;
            f_no($('#p7dcon12'));
        }
        if (p7dcon14 == '12') {
            p7cont1++;
            f_ok($('#p7dcon14'));
        } else {
            p7cont1;
            f_no($('#p7dcon14'));
        }
        var p7vec1 = ['pimientos', 'zuquini', 'zanahorias', 'tomate', 'zanahoria', 'pimiento', 'zuquinis', 'tomates'];
        var p7cont2 = 0;
        for (var i = 0; i < p7vec1.length; i++) {
            if (p7dcon5 == p7vec1[i]) {
                p7cont2++;
            }
        }
        if (p7cont2 == '1') {
            p7cont1++;
            f_ok($('#p7dcon5'));
        } else {
            p7cont1;
            f_no($('#p7dcon5'));
        }
        var p7cont3 = 0;
        for (var i = 0; i < p7vec1.length; i++) {
            if (p7dcon6 == p7vec1[i]) {
                p7cont3++;
            }
        }
        if (p7cont3 == '1') {
            p7cont1++;
            f_ok($('#p7dcon6'));
        } else {
            p7cont1;
            f_no($('#p7dcon6'));
        }
        var p7cont4 = 0;
        for (var i = 0; i < p7vec1.length; i++) {
            if (p7dcon7 == p7vec1[i]) {
                p7cont4++;
            }
        }
        if (p7cont4 == '1') {
            p7cont1++;
            f_ok($('#p7dcon7'));
        } else {
            p7cont1;
            f_no($('#p7dcon7'));
        }
        var p7cont5 = 0;
        for (var i = 0; i < p7vec1.length; i++) {
            if (p7dcon8 == p7vec1[i]) {
                p7cont5++;
            }
        }
        if (p7cont5 == '1') {
            p7cont1++;
            f_ok($('#p7dcon8'));
        } else {
            p7cont1;
            f_no($('#p7dcon8'));
        }

        if (p7dcon9 == 'los tomates' || p7dcon9 == 'tomates' || p7dcon9 == 'el tomate' || p7dcon9 == 'tomate') {
            p7cont1++;
            f_ok($('#p7dcon9'));
        } else {
            p7cont1;
            f_no($('#p7dcon9'));
        }
        if (p7dcon10 == '6') {
            p7cont1++;
            f_ok($('#p7dcon10'));
        } else {
            p7cont1;
            f_no($('#p7dcon10'));
        }
        if (p7dcon111 == '28') {
            p7cont1++;
            f_ok($('#p7dcon111'));
        } else {
            p7cont1;
            f_no($('#p7dcon111'));
        }
        var result7 = (p7cont1 * 2) / 11
        cor = cor + result7;
        inc = inc + (2 - result7);
        $('#nota1_7').val(result7.toFixed(2));
        $('#nota1_7').css("display", "");
        f_ok($('#nota1_7'));

        var nota1_1 = $('#nota1_1').val();

        if (!nota1_1) {
            inc = inc + 1;
            f_no($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (1 - parseFloat(nota1_1));
            f_ok($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        }

        Calculo_nota();
    }
}