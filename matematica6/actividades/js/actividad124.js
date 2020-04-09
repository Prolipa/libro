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
        case '1 p1enc1':
            $('.p1enc1').addClass('encierra');
            $('.p1enc2').removeClass('encierra');
            $('.p1enc3').removeClass('encierra');
            $('.p1enc4').removeClass('encierra');

            break;
        case '1 p1enc2':
            $('.p1enc2').addClass('encierra');
            $('.p1enc1').removeClass('encierra');
            $('.p1enc3').removeClass('encierra');
            $('.p1enc4').removeClass('encierra');
            break;
        case '1 p1enc3':
            $('.p1enc3').addClass('encierra');
            $('.p1enc1').removeClass('encierra');
            $('.p1enc2').removeClass('encierra');
            $('.p1enc4').removeClass('encierra');

            break;
        case '1 p1enc4':
            $('.p1enc4').addClass('encierra');
            $('.p1enc1').removeClass('encierra');
            $('.p1enc2').removeClass('encierra');
            $('.p1enc3').removeClass('encierra');

            break;


    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p11enc1':
            $('.p11enc1').addClass('encierra');
            $('.p11enc2').removeClass('encierra');
            $('.p11enc3').removeClass('encierra');
            $('.p11enc4').removeClass('encierra');

            break;
        case '2 p11enc2':
            $('.p11enc2').addClass('encierra');
            $('.p11enc1').removeClass('encierra');
            $('.p11enc3').removeClass('encierra');
            $('.p11enc4').removeClass('encierra');
            break;
        case '2 p11enc3':
            $('.p11enc3').addClass('encierra');
            $('.p11enc1').removeClass('encierra');
            $('.p11enc2').removeClass('encierra');
            $('.p11enc4').removeClass('encierra');

            break;
        case '2 p11enc4':
            $('.p11enc4').addClass('encierra');
            $('.p11enc1').removeClass('encierra');
            $('.p11enc2').removeClass('encierra');
            $('.p11enc3').removeClass('encierra');

            break;


    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 p12enc1':
            $('.p12enc1').addClass('encierra');
            $('.p12enc2').removeClass('encierra');
            $('.p12enc3').removeClass('encierra');
            $('.p12enc4').removeClass('encierra');

            break;
        case '3 p12enc2':
            $('.p12enc2').addClass('encierra');
            $('.p12enc1').removeClass('encierra');
            $('.p12enc3').removeClass('encierra');
            $('.p12enc4').removeClass('encierra');
            break;
        case '3 p12enc3':
            $('.p12enc3').addClass('encierra');
            $('.p12enc1').removeClass('encierra');
            $('.p12enc2').removeClass('encierra');
            $('.p12enc4').removeClass('encierra');

            break;
        case '3 p12enc4':
            $('.p12enc4').addClass('encierra');
            $('.p12enc1').removeClass('encierra');
            $('.p12enc2').removeClass('encierra');
            $('.p12enc3').removeClass('encierra');

            break;


    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 p13enc1':
            $('.p13enc1').addClass('encierra');
            $('.p13enc2').removeClass('encierra');
            $('.p13enc3').removeClass('encierra');
            $('.p13enc4').removeClass('encierra');

            break;
        case '4 p13enc2':
            $('.p13enc2').addClass('encierra');
            $('.p13enc1').removeClass('encierra');
            $('.p13enc3').removeClass('encierra');
            $('.p13enc4').removeClass('encierra');
            break;
        case '4 p13enc3':
            $('.p13enc3').addClass('encierra');
            $('.p13enc1').removeClass('encierra');
            $('.p13enc2').removeClass('encierra');
            $('.p13enc4').removeClass('encierra');

            break;
        case '4 p13enc4':
            $('.p13enc4').addClass('encierra');
            $('.p13enc1').removeClass('encierra');
            $('.p13enc2').removeClass('encierra');
            $('.p13enc3').removeClass('encierra');

            break;


    }
});
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 p14enc1':
            $('.p14enc1').addClass('encierra');
            $('.p14enc2').removeClass('encierra');
            $('.p14enc3').removeClass('encierra');
            $('.p14enc4').removeClass('encierra');

            break;
        case '5 p14enc2':
            $('.p14enc2').addClass('encierra');
            $('.p14enc1').removeClass('encierra');
            $('.p14enc3').removeClass('encierra');
            $('.p14enc4').removeClass('encierra');
            break;
        case '5 p14enc3':
            $('.p14enc3').addClass('encierra');
            $('.p14enc1').removeClass('encierra');
            $('.p14enc2').removeClass('encierra');
            $('.p14enc4').removeClass('encierra');

            break;
        case '5 p14enc4':
            $('.p14enc4').addClass('encierra');
            $('.p14enc1').removeClass('encierra');
            $('.p14enc2').removeClass('encierra');
            $('.p14enc3').removeClass('encierra');

            break;


    }
});
$('.6').click(function() {
    switch ($(this).attr('class')) {
        case '6 p15enc1':
            $('.p15enc1').addClass('encierra');
            $('.p15enc2').removeClass('encierra');
            $('.p15enc3').removeClass('encierra');
            $('.p15enc4').removeClass('encierra');

            break;
        case '6 p15enc2':
            $('.p15enc2').addClass('encierra');
            $('.p15enc1').removeClass('encierra');
            $('.p15enc3').removeClass('encierra');
            $('.p15enc4').removeClass('encierra');
            break;
        case '6 p15enc3':
            $('.p15enc3').addClass('encierra');
            $('.p15enc1').removeClass('encierra');
            $('.p15enc2').removeClass('encierra');
            $('.p15enc4').removeClass('encierra');

            break;
        case '6 p15enc4':
            $('.p15enc4').addClass('encierra');
            $('.p15enc1').removeClass('encierra');
            $('.p15enc2').removeClass('encierra');
            $('.p15enc3').removeClass('encierra');

            break;


    }
});

for (var i = 0; i < 63; i++) {
    $('#p2im' + (i + 1)).click(function() {
        if ($(this).hasClass('pintar')) {
            $(this).removeClass('pintar')


        } else {
            $(this).addClass('pintar')

        }
    })
}

function f_iniciar() {
    var p1aux1 = [
        '<img src="img/i1_p160_act124.png" alt="">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p1im1">' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<img src="img/i2_p160_act124.png" alt="">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p1im2">' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<img src="img/i3_p160_act124.png" alt="">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p1im3">' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<img src="img/i4_p160_act124.png" alt="">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p1im4">' +
        '</tr>' +
        '</table>' +
        '</div> ',
        '<img src="img/i5_p160_act124.png" alt="">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p1im5">' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<img src="img/i6_p160_act124.png" alt="">' +
        '<div class="table-responsive">' +
        '<table>' +
        '<tr id="p1im6">' +
        '</tr>' +
        '</table>' +
        '</div> '
    ];
    var myArray7 = ['0', '1', '2', '3', '4', '5'];
    var i, j, k;
    for (i = myArray7.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray7[i - 1];
        myArray7[i - 1] = myArray7[j];
        myArray7[j] = k;
    }
    for (var i = 1; i <= 6; i++) {
        var c6 = myArray7[i - 1];
        $('#p1cim' + (i)).html(p1aux1[c6]);
    };
    var p1vec1 = [
        '<td>' +
        '<div class="1 p1enc1" style="padding: 15px;">' +
        '<img src="img/i7_p160_act124.jpg" alt="1" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="1 p1enc2" style="padding: 15px;">' +
        '<img src="img/i8_p160_act124.jpg" alt="2" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="1 p1enc3" style="padding: 15px;">' +
        '<img src="img/i9_p160_act124.jpg" alt="3" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="1 p1enc4" style="padding: 15px;">' +
        '<img src="img/i10_p160_act124.jpg" alt="4" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>'
    ];
    var myArray1 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    var p1vec2 = [];
    for (var i = 1; i <= 4; i++) {
        var c = myArray1[i - 1];
        p1vec2.push(p1vec1[c]);

    };
    $('#p1im1').html(p1vec2);
    var p1vec3 = [
        '<td>' +
        '<div class="2 p11enc1" style="padding: 15px;">' +
        '<img src="img/i11_p160_act124.jpg" alt="1" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="2 p11enc2" style="padding: 15px;">' +
        '<img src="img/i12_p160_act124.jpg" alt="2" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="2 p11enc3" style="padding: 15px;">' +
        '<img src="img/i13_p160_act124.jpg" alt="3" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="2 p11enc4" style="padding: 15px;">' +
        '<img src="img/i14_p160_act124.jpg" alt="4" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>'
    ];
    var myArray2 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    var p1vec4 = [];
    for (var i = 1; i <= 4; i++) {
        var c1 = myArray2[i - 1];
        p1vec4.push(p1vec3[c1]);

    };
    $('#p1im2').html(p1vec4);

    var p1vec5 = [
        '<td>' +
        '<div class="3 p12enc1" style="padding: 15px;">' +
        '<img src="img/i15_p160_act124.jpg" alt="1" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="3 p12enc2" style="padding: 15px;">' +
        '<img src="img/i16_p160_act124.jpg" alt="2" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="3 p12enc3" style="padding: 15px;">' +
        '<img src="img/i17_p160_act124.jpg" alt="3" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="3 p12enc4" style="padding: 15px;">' +
        '<img src="img/i18_p160_act124.jpg" alt="4" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>'
    ];
    var myArray3 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray3.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray3[i - 1];
        myArray3[i - 1] = myArray3[j];
        myArray3[j] = k;
    }
    var p1vec6 = [];
    for (var i = 1; i <= 4; i++) {
        var c2 = myArray3[i - 1];
        p1vec6.push(p1vec5[c2]);

    };
    $('#p1im3').html(p1vec6);

    var p1vec7 = [
        '<td>' +
        '<div class="4 p13enc1" style="padding: 15px;">' +
        '<img src="img/i19_p160_act124.jpg" alt="1" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="4 p13enc2" style="padding: 15px;">' +
        '<img src="img/i20_p160_act124.jpg" alt="2" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="4 p13enc3" style="padding: 15px;">' +
        '<img src="img/i21_p160_act124.jpg" alt="3" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="4 p13enc4" style="padding: 15px;">' +
        '<img src="img/i22_p160_act124.jpg" alt="4" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>'
    ];
    var myArray4 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }
    var p1vec8 = [];
    for (var i = 1; i <= 4; i++) {
        var c3 = myArray4[i - 1];
        p1vec8.push(p1vec7[c3]);

    };
    $('#p1im4').html(p1vec8);

    var p1vec9 = [
        '<td>' +
        '<div class="5 p14enc1" style="padding: 15px;">' +
        '<img src="img/i23_p160_act124.jpg" alt="1" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="5 p14enc2" style="padding: 15px;">' +
        '<img src="img/i24_p160_act124.jpg" alt="2" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="5 p14enc3" style="padding: 15px;">' +
        '<img src="img/i25_p160_act124.jpg" alt="3" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="5 p14enc4" style="padding: 15px;">' +
        '<img src="img/i26_p160_act124.jpg" alt="4" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
    ];
    var myArray5 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray5.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray5[i - 1];
        myArray5[i - 1] = myArray5[j];
        myArray5[j] = k;
    }
    var p1vec10 = [];
    for (var i = 1; i <= 4; i++) {
        var c4 = myArray5[i - 1];
        p1vec10.push(p1vec9[c4]);

    };
    $('#p1im5').html(p1vec10);

    var p1vec11 = [
        '<td>' +
        '<div class="6 p15enc1" style="padding: 15px;">' +
        '<img src="img/i27_p160_act124.jpg" alt="1" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="6 p15enc2" style="padding: 15px;">' +
        '<img src="img/i28_p160_act124.jpg" alt="2" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="6 p15enc3" style="padding: 15px;">' +
        '<img src="img/i29_p160_act124.jpg" alt="3" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>',
        '<td>' +
        '<div class="6 p15enc4" style="padding: 15px;">' +
        '<img src="img/i30_p160_act124.jpg" alt="4" style="mix-blend-mode: multiply;">' +
        '</div>' +
        '</td>'
    ];
    var myArray6 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray6.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray6[i - 1];
        myArray6[i - 1] = myArray6[j];
        myArray6[j] = k;
    }
    var p1vec12 = [];
    for (var i = 1; i <= 4; i++) {
        var c5 = myArray6[i - 1];
        p1vec12.push(p1vec11[c5]);

    };
    $('#p1im6').html(p1vec12);
    var p4vec1 = [parseInt((Math.random() * 500) + 100), parseInt((Math.random() * 8) + 2), parseInt((Math.random() * 8) + 2)];
    $('#p4im1').html(p4vec1[0]);
    $('#p4im2').html(p4vec1[1]);
    $('#p4im3').html(p4vec1[2]);
    $('#p4dcon1').val(p4vec1[0]);
    var p4vec2 = [parseInt((Math.random() * 500) + 100), parseInt((Math.random() * 80) + 10), parseInt((Math.random() * 8) + 2)];
    $('#p41im1').html(p4vec2[0]);
    $('#p41im2').html(p4vec2[1]);
    $('#p41im3').html(p4vec2[2]);
    $('#p41dcon1').val(p4vec2[0]);

    var p5vec1 = [parseInt((Math.random() * 9) + 1), parseInt((Math.random() * 9) + 1)];
    var p5vec2 = [parseInt((Math.random() * 9) + 2), parseInt((Math.random() * 9) + 2), parseInt((Math.random() * 30) + 10), parseInt((Math.random() * 30) + 10), parseInt((Math.random() * 30) + 10), parseInt((Math.random() * 9) + 2), parseInt((Math.random() * 9) + 2), parseInt((Math.random() * 9) + 2), parseInt((Math.random() * 30) + 10), parseInt((Math.random() * 50) + 10)];
    var p5vec3 = [parseInt((Math.random() * 9) + 1), parseInt((Math.random() * 9) + 1), parseInt((Math.random() * 9) + 1)];
    var p5vec4 = [parseInt((Math.random() * 60) + 30)];
    for (var i = 0; i < 1; i++) {
        var r1 = parseInt((Math.random() * 20) + 10);
        if (r1 < p5vec4[0]) {
            p5vec4.push(r1);
        } else {
            i--;
        }
    }
    var p5vec5 = [parseInt((Math.random() * 60) + 30)];
    for (var i = 0; i < 1; i++) {
        var r1 = parseInt((Math.random() * 20) + 10);
        if (r1 < p5vec5[0]) {
            p5vec5.push(r1);
        } else {
            i--;
        }
    }
    var p5vec6 = [parseInt((Math.random() * 60) + 30)];
    for (var i = 0; i < 1; i++) {
        var r1 = parseInt((Math.random() * 20) + 10);
        if (r1 < p5vec6[0]) {
            p5vec6.push(r1);
        } else {
            i--;
        }
    }
    var p5vec7 = [parseInt((Math.random() * 20) + 1), parseInt((Math.random() * 20) + 1), parseInt((Math.random() * 20) + 1)];
    var p5vec8 = [parseInt((Math.random() * 20) + 1), parseInt((Math.random() * 20) + 1), parseInt((Math.random() * 20) + 1)];
    var p5vec9 = [parseInt((Math.random() * 60) + 30)];
    for (var i = 0; i < 1; i++) {
        var r1 = parseInt((Math.random() * 20) + 10);
        if (r1 < p5vec9[0]) {
            p5vec9.push(r1);
        } else {
            i--;
        }
    }
    var p5vec10 = [parseInt((Math.random() * 60) + 30)];
    for (var i = 0; i < 1; i++) {
        var r1 = parseInt((Math.random() * 20) + 10);
        if (r1 < p5vec10[0]) {
            p5vec10.push(r1);
        } else {
            i--;
        }
    }
    var p5vec11 = [parseInt((Math.random() * 60) + 30)];
    for (var i = 0; i < 1; i++) {
        var r1 = parseInt((Math.random() * 20) + 10);
        if (r1 < p5vec11[0]) {
            p5vec11.push(r1);
        } else {
            i--;
        }
    }
    $('#p5im1').html(p5vec1[0]);
    $('#p5im2').html(p5vec2[0]);
    $('#p5im3').html(p5vec1[1]);
    $('#p5im4').html(p5vec2[0]);

    $('#p51im1').html(p5vec3[0]);
    $('#p51im2').html(p5vec2[1]);
    $('#p51im3').html(p5vec3[1]);
    $('#p51im4').html(p5vec2[1]);
    $('#p51im5').html(p5vec3[2]);
    $('#p51im6').html(p5vec2[1]);

    $('#p52im1').html(p5vec4[0]);
    $('#p52im2').html(p5vec2[2]);
    $('#p52im3').html(p5vec4[1]);
    $('#p52im4').html(p5vec2[2]);

    $('#p53im1').html(p5vec5[0]);
    $('#p53im2').html(p5vec2[3]);
    $('#p53im3').html(p5vec5[1]);
    $('#p53im4').html(p5vec2[3]);

    $('#p54im1').html(p5vec6[0]);
    $('#p54im2').html(p5vec2[4]);
    $('#p54im3').html(p5vec6[1]);
    $('#p54im4').html(p5vec2[4]);

    $('#p55im1').html(p5vec7[0]);
    $('#p55im2').html(p5vec2[5]);
    $('#p55im3').html(p5vec7[1]);
    $('#p55im4').html(p5vec2[5]);
    $('#p55im5').html(p5vec7[2]);
    $('#p55im6').html(p5vec2[5]);

    $('#p56im1').html(p5vec8[0]);
    $('#p56im2').html(p5vec2[6]);
    $('#p56im3').html(p5vec8[1]);
    $('#p56im4').html(p5vec2[6]);
    $('#p56im5').html(p5vec8[2]);
    $('#p56im6').html(p5vec2[6]);

    $('#p57im1').html(p5vec9[0]);
    $('#p57im2').html(p5vec2[7]);
    $('#p57im3').html(p5vec9[1]);
    $('#p57im4').html(p5vec2[7]);

    $('#p58im1').html(p5vec10[0]);
    $('#p58im2').html(p5vec2[8]);
    $('#p58im3').html(p5vec10[1]);
    $('#p58im4').html(p5vec2[8]);

    $('#p59im1').html(p5vec11[0]);
    $('#p59im2').html(p5vec2[9]);
    $('#p59im3').html(p5vec11[1]);
    $('#p59im4').html(p5vec2[9]);
    var p2vc1 = [
        '<div class="col-sm-6">' +
        '<div class="col-sm-4">' +
        '<table>' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;"></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</td>' +
        '<td><b>y</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<table>' +
        '<tr align="center">' +
        '<td></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">6</span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<select id="p2sel1">' +
        '<option value="" selected="true"></option>' +
        '<option value="<"><</option>' +
        '<option value=">">></option>' +
        '</select>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '' +
        '</div>' +
        '' +
        '<div class="col-sm-8 table-responsive">' +
        '<table>' +
        '<tr align="center" id="p2res1">' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im1">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im2">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im3">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im4">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im5">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im6">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '<table>' +
        '<tr align="center" id="p2res2">' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im7">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im8">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im9">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im10">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im11">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im12">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im13">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6">' +
        '<div class="col-sm-4">' +
        '<table>' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;"></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div>' +
        '</td>' +
        '<td><b>y</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<table>' +
        '<tr align="center">' +
        '<td></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">7</span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<select id="p2sel2">' +
        '<option value="" selected="true"></option>' +
        '<option value="<"><</option>' +
        '<option value=">">></option>' +
        '</select>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">6</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '' +
        '</div>' +
        '' +
        '<div class="col-sm-8 table-responsive">' +
        '<table>' +
        '<tr align="center" id="p2res3">' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im14">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im15">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im16">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im17">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im18">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im19">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im20">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '<table>' +
        '<tr align="center" id="p2res4">' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im21">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im22">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im23">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im24">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im25">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im26">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im27">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im28">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6">' +
        '<div class="col-sm-4">' +
        '<table>' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;"></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '</td>' +
        '<td><b>y</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<table>' +
        '<tr align="center">' +
        '<td></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">8</span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<select id="p2sel3">' +
        '<option value="" selected="true"></option>' +
        '<option value="<"><</option>' +
        '<option value=">">></option>' +
        '</select>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">5</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '' +
        '</div>' +
        '' +
        '<div class="col-sm-8 table-responsive">' +
        '<table>' +
        '<tr align="center" id="p2res5">' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im29">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im30">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im31">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im32">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im33">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im34">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im35">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im36">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '<table>' +
        '<tr align="center" id="p2res6">' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im37">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im38">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im39">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im40">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im41">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '</div>' +
        '</div>',
        '<div class="col-sm-6">' +
        '<div class="col-sm-4">' +
        '<table>' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;"></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div>' +
        '</td>' +
        '<td><b>y</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<table>' +
        '<tr align="center">' +
        '<td></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">10</span>' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<select id="p2sel4">' +
        '<option value="" selected="true"></option>' +
        '<option value="<"><</option>' +
        '<option value=">">></option>' +
        '</select>' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">12</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '' +
        '</div>' +
        '' +
        '<div class="col-sm-8 table-responsive">' +
        '<table>' +
        '<tr align="center" id="p2res7">' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im42">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im43">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im44">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im45">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im46">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im47">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im48">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im49">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im50">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im51">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '<table>' +
        '<tr align="center" id="p2res8">' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im52">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im53">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im54">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im55">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im56">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im57">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im58">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im59">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im60">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im61">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im62">' +
        '</div>' +
        '</td>' +
        '<td>' +
        '<div style="width: 20px; height: 20px; border: 2px solid black;" id="p2im63">' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '</div>' +
        '</div>'
    ];
    p2vc1.sort(f_randomico);
    $('#p2cim1').html(p2vc1);

    var p6vc1 = [
        '<div class=" col-sm-4 table-responsive">' +
        '<table>' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;"></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p6im1">5</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p6im2">6</span>' +
        '</div>' +
        '</td>' +
        '<td><b>+</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p6im3">3</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p6im4">9</span>' +
        '</div>' +
        '</td>' +
        '<td><b>+</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p6im5">7</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p6im6">12</span>' +
        '</div>' +
        '</td>' +
        '<td><b>=</b></td>' +
        '<td>' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon1">' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon2">' +
        '</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon3">' +
        '</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="col-sm-8 table-responsive">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #0097C1;">MCM</b></td>' +
        '<td><b>=</b></td>' +
        '<td>' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dco1">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="row">' +
        '</div>',
        '<div class=" col-sm-4 table-responsive">' +
        '<table>' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;"></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p61im1">9</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p61im2">10</span>' +
        '</div>' +
        '</td>' +
        '<td><b>+</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p61im3">4</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p61im4">5</span>' +
        '</div>' +
        '</td>' +
        '<td><b>+</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p61im5">1</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p61im6">6</span>' +
        '</div>' +
        '</td>' +
        '<td><b>=</b></td>' +
        '<td>' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon4">' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon5">' +
        '</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon6">' +
        '</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="col-sm-8 table-responsive">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #0097C1;">MCM</b></td>' +
        '<td><b>=</b></td>' +
        '<td>' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dco2">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="row">' +
        '</div>',
        '<div class=" col-sm-4 table-responsive">' +
        '<table>' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;"></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p62im1">15</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p62im2">24</span>' +
        '</div>' +
        '</td>' +
        '<td><b>+</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p62im3">11</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p62im4">20</span>' +
        '</div>' +
        '</td>' +
        '<td><b>+</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p62im5">13</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p62im6">18</span>' +
        '</div>' +
        '</td>' +
        '<td><b>=</b></td>' +
        '<td>' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon7">' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon8">' +
        '</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon9">' +
        '</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="col-sm-8 table-responsive">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #0097C1;">MCM</b></td>' +
        '<td><b>=</b></td>' +
        '<td>' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dco3">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="row">' +
        '</div>',
        '<div class=" col-sm-4 table-responsive">' +
        '<table>' +
        '<tr align="center">' +
        '<td><b style="color: #005CA4;"></b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p63im1">11</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p63im2">20</span>' +
        '</div>' +
        '</td>' +
        '<td><b>+</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p63im3">29</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p63im4">40</span>' +
        '</div>' +
        '</td>' +
        '<td><b>+</b></td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup" id="p63im5">31</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn" id="p63im6">80</span>' +
        '</div>' +
        '</td>' +
        '<td><b>=</b></td>' +
        '<td>' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon10">' +
        '</td>' +
        '<td>' +
        '<div class="fraction">' +
        '<span class="fup">' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon11">' +
        '</span>' +
        '<span class="bar">/</span>' +
        '<span class="fdn">' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dcon12">' +
        '</span>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="col-sm-8 table-responsive">' +
        '<table>' +
        '<tr>' +
        '<td><b style="color: #0097C1;">MCM</b></td>' +
        '<td><b>=</b></td>' +
        '<td>' +
        '<input type="text" style="width: 50px; text-align: center;" maxlength="4" onkeypress="return soloNumeros(event)" id="p6dco4">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="row">' +
        '</div>'
    ];
    p6vc1.sort(f_randomico);
    $('#p6cim1').html(p6vc1);

    var p7vec1=[parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 2),parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 2),parseInt((Math.random() * 15) + 4),parseInt((Math.random() * 20) + 4)];
    for (var i = 0; i < 6; i++) {
        $('#p7im'+(i+1)).html(p7vec1[i]);
    }
    var p7vec2=[parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 2),parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 2),parseInt((Math.random() * 9) + 2),parseInt((Math.random() * 9) + 2),parseInt((Math.random() * 9) + 2),parseInt((Math.random() * 9) + 2)];
    for (var i = 0; i < 8; i++) {
        $('#p71im'+(i+1)).html(p7vec2[i]);
    }
    var p7vec3=[parseInt((Math.random() * 50) + 10),parseInt((Math.random() * 30) + 10),parseInt((Math.random() * 90) + 20),parseInt((Math.random() * 100) + 50)];
    for (var i = 0; i < 4; i++) {
        $('#p72im'+(i+1)).html(p7vec3[i]);
    }
    var p7vec4=[parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 2),parseInt((Math.random() * 15) + 4),parseInt((Math.random() * 20) + 4),parseInt((Math.random() * 9) + 1),parseInt((Math.random() * 9) + 2)];
    for (var i = 0; i < 6; i++) {
        $('#p73im'+(i+1)).html(p7vec4[i]);
    }
    var p7res1=[((p7vec1[0]/p7vec1[1])*(p7vec1[2]/p7vec1[3])*(p7vec1[4]/p7vec1[5])).toFixed(1)];
    p7res1.push(((p7vec2[0]/p7vec2[1])*(p7vec2[2]/p7vec2[3])*(p7vec2[4]/p7vec2[5])*(p7vec2[6]/p7vec2[7])).toFixed(1));
    p7res1.push(((p7vec3[0]/p7vec3[1])*(p7vec3[2]/p7vec3[3])).toFixed(1));
    p7res1.push(((p7vec4[0]/p7vec4[1])*(p7vec4[2]/p7vec4[3])*(p7vec4[4]/p7vec4[5])).toFixed(1));
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1im1 = $('#p1im1 .encierra img').attr('alt');
        var p1im2 = $('#p1im2 .encierra img').attr('alt');
        var p1im3 = $('#p1im3 .encierra img').attr('alt');
        var p1im4 = $('#p1im4 .encierra img').attr('alt');
        var p1im5 = $('#p1im5 .encierra img').attr('alt');
        var p1im6 = $('#p1im6 .encierra img').attr('alt');
        var p1cont1 = 0;
        if (!p1im1) {
            p1cont1;
            f_no($('.p1enc1'));
            f_no($('.p1enc2'));
            f_no($('.p1enc3'));
            f_no($('.p1enc4'));
        } else {
            if (p1im1 == '1') {
                p1cont1++;
                f_ok($('#p1im1 .encierra'));
            } else {
                p1cont1;
                f_no($('#p1im1 .encierra'));
            }
        }

        if (!p1im2) {
            p1cont1;
            f_no($('.p11enc1'));
            f_no($('.p11enc2'));
            f_no($('.p11enc3'));
            f_no($('.p11enc4'));
        } else {
            if (p1im2 == '4') {
                p1cont1++;
                f_ok($('#p1im2 .encierra'));
            } else {
                p1cont1;
                f_no($('#p1im2 .encierra'));
            }
        }

        if (!p1im3) {
            p1cont1;
            f_no($('.p12enc1'));
            f_no($('.p12enc2'));
            f_no($('.p12enc3'));
            f_no($('.p12enc4'));
        } else {
            if (p1im3 == '4') {
                p1cont1++;
                f_ok($('#p1im3 .encierra'));
            } else {
                p1cont1;
                f_no($('#p1im3 .encierra'));
            }
        }
        if (!p1im4) {
            p1cont1;
            f_no($('.p13enc1'));
            f_no($('.p13enc2'));
            f_no($('.p13enc3'));
            f_no($('.p13enc4'));
        } else {
            if (p1im4 == '4') {
                p1cont1++;
                f_ok($('#p1im4 .encierra'));
            } else {
                p1cont1;
                f_no($('#p1im4 .encierra'));
            }
        }
        if (!p1im5) {
            p1cont1;
            f_no($('.p14enc1'));
            f_no($('.p14enc2'));
            f_no($('.p14enc3'));
            f_no($('.p14enc4'));
        } else {
            if (p1im5 == '1') {
                p1cont1++;
                f_ok($('#p1im5 .encierra'));
            } else {
                p1cont1;
                f_no($('#p1im5 .encierra'));
            }
        }
        if (!p1im6) {
            p1cont1;
            f_no($('.p15enc1'));
            f_no($('.p15enc2'));
            f_no($('.p15enc3'));
            f_no($('.p15enc4'));
        } else {
            if (p1im6 == '1') {
                p1cont1++;
                f_ok($('#p1im6 .encierra'));
            } else {
                p1cont1;
                f_no($('#p1im6 .encierra'));
            }
        }
        var result1 = (p1cont1 * 1) / 6;
        cor = cor + result1;
        inc = inc + (1 - result1);
        var p3r1 = [$('#p3dcon1').val(), $('#p3dcon2').val()];
        p3r1 = p3r1.join('');
        var p3r2 = [$('#p3dcon3').val(), $('#p3dcon4').val(), $('#p3dcon5').val()];
        p3r2 = p3r2.join('');
        var p3r3 = [$('#p31dcon1').val(), $('#p31dcon2').val(), $('#p31dcon3').val()];
        p3r3 = p3r3.join('');
        var p3r4 = [$('#p31dcon4').val(), $('#p31dcon5').val(), $('#p31dcon6').val()];
        p3r4 = p3r4.join('');
        var p3r5 = [$('#p32dcon1').val(), $('#p32dcon2').val(), $('#p32dcon3').val()];
        p3r5 = p3r5.join('');
        var p3r6 = [$('#p32dcon4').val(), $('#p32dcon5').val(), $('#p32dcon6').val()];
        p3r6 = p3r6.join('');
        var p3r7 = [$('#p33dcon1').val(), $('#p33dcon2').val(), $('#p33dcon3').val()];
        p3r7 = p3r7.join('');
        var p3r8 = [$('#p33dcon4').val(), $('#p33dcon5').val()];
        p3r8 = p3r8.join('');
        var p3r9 = [$('#p34dcon1').val(), $('#p34dcon2').val(), $('#p34dcon3').val()];
        p3r9 = p3r9.join('');
        var p3r10 = [$('#p34dcon4').val(), $('#p34dcon5').val(), $('#p34dcon6').val()];
        p3r10 = p3r10.join('');
        var p3cont1 = 0;
        if (p3r1 == '12') {
            p3cont1++;
            f_ok($('#p3dcon1'));
            f_ok($('#p3dcon2'));
        } else {
            p3cont1;
            f_no($('#p3dcon1'));
            f_no($('#p3dcon2'));
        }
        if (p3r2 == '114') {
            p3cont1++;
            f_ok($('#p3dcon3'));
            f_ok($('#p3dcon4'));
            f_ok($('#p3dcon5'));
        } else {
            p3cont1;
            f_no($('#p3dcon3'));
            f_no($('#p3dcon4'));
            f_no($('#p3dcon5'));
        }

        if (p3r3 == '334') {
            p3cont1++;
            f_ok($('#p31dcon1'));
            f_ok($('#p31dcon2'));
            f_ok($('#p31dcon3'));
        } else {
            p3cont1;
            f_no($('#p31dcon1'));
            f_no($('#p31dcon2'));
            f_no($('#p31dcon3'));
        }
        if (p3r4 == '212') {
            p3cont1++;
            f_ok($('#p31dcon4'));
            f_ok($('#p31dcon5'));
            f_ok($('#p31dcon6'));
        } else {
            p3cont1;
            f_no($('#p31dcon4'));
            f_no($('#p31dcon5'));
            f_no($('#p31dcon6'));
        }

        if (p3r5 == '134') {
            p3cont1++;
            f_ok($('#p32dcon1'));
            f_ok($('#p32dcon2'));
            f_ok($('#p32dcon3'));
        } else {
            p3cont1;
            f_no($('#p32dcon1'));
            f_no($('#p32dcon2'));
            f_no($('#p32dcon3'));
        }
        if (p3r6 == '334') {
            p3cont1++;
            f_ok($('#p32dcon4'));
            f_ok($('#p32dcon5'));
            f_ok($('#p32dcon6'));
        } else {
            p3cont1;
            f_no($('#p32dcon4'));
            f_no($('#p32dcon5'));
            f_no($('#p32dcon6'));
        }

        if (p3r7 == '212') {
            p3cont1++;
            f_ok($('#p33dcon1'));
            f_ok($('#p33dcon2'));
            f_ok($('#p33dcon3'));
        } else {
            p3cont1;
            f_no($('#p33dcon1'));
            f_no($('#p33dcon2'));
            f_no($('#p33dcon3'));
        }
        if (p3r8 == '34') {
            p3cont1++;
            f_ok($('#p33dcon4'));
            f_ok($('#p33dcon5'));
        } else {
            p3cont1;
            f_no($('#p33dcon4'));
            f_no($('#p33dcon5'));
        }

        if (p3r9 == '112') {
            p3cont1++;
            f_ok($('#p34dcon1'));
            f_ok($('#p34dcon2'));
            f_ok($('#p34dcon3'));
        } else {
            p3cont1;
            f_no($('#p34dcon1'));
            f_no($('#p34dcon2'));
            f_no($('#p34dcon3'));
        }
        if (p3r10 == '234') {
            p3cont1++;
            f_ok($('#p34dcon4'));
            f_ok($('#p34dcon5'));
            f_ok($('#p34dcon6'));
        } else {
            p3cont1;
            f_no($('#p34dcon4'));
            f_no($('#p34dcon5'));
            f_no($('#p34dcon6'));
        }
        var result3 = (p3cont1 * 1) / 10;
        cor = cor + result3;
        inc = inc + (1 - result3);

        var p4dcon2 = $('#p4dcon2').val();
        var p4dcon3 = $('#p4dcon3').val();
        var p4dcon4 = $('#p4dcon4').val();
        var p4dcon5 = $('#p4dcon5').val();
        var p4dcon6 = $('#p4dcon6').val();
        var p4dcon7 = $('#p4dcon7').val();
        var p4dcon8 = $('#p4dcon8').val();
        var p4dcon9 = $('#p4dcon9').val();
        var p4dcon10 = $('#p4dcon10').val();
        var p4cont1 = 0;
        if (p4dcon2 == p4vec1[2]) {
            p4cont1++;
            f_ok($('#p4dcon2'));
        } else {
            p4cont1;
            f_no($('#p4dcon2'));
        }
        if (p4dcon3 == p4vec1[1]) {
            p4cont1++;
            f_ok($('#p4dcon3'));
        } else {
            p4cont1;
            f_no($('#p4dcon3'));
        }
        if (p4dcon4 == p4vec1[2]) {
            p4cont1++;
            f_ok($('#p4dcon4'));
        } else {
            p4cont1;
            f_no($('#p4dcon4'));
        }
        if (p4dcon5 == (p4vec1[0] + p4vec1[1])) {
            p4cont1++;
            f_ok($('#p4dcon5'));
        } else {
            p4cont1;
            f_no($('#p4dcon5'));
        }
        if (p4dcon6 == (p4vec1[2])) {
            p4cont1++;
            f_ok($('#p4dcon6'));
        } else {
            p4cont1;
            f_no($('#p4dcon6'));
        }
        if (p4dcon7 == (p4vec1[0] * p4vec1[2])) {
            p4cont1++;
            f_ok($('#p4dcon7'));
        } else {
            p4cont1;
            f_no($('#p4dcon7'));
        }
        if (p4dcon8 == (p4vec1[1] * p4vec1[2])) {
            p4cont1++;
            f_ok($('#p4dcon8'));
        } else {
            p4cont1;
            f_no($('#p4dcon8'));
        }
        if (p4dcon9 == ((p4vec1[0] + p4vec1[1]) * p4vec1[2])) {
            p4cont1++;
            f_ok($('#p4dcon9'));
        } else {
            p4cont1;
            f_no($('#p4dcon9'));
        }
        if (p4dcon10 == ((p4vec1[0] + p4vec1[1]) * p4vec1[2])) {
            p4cont1++;
            f_ok($('#p4dcon10'));
        } else {
            p4cont1;
            f_no($('#p4dcon10'));
        }

        var p41dcon2 = $('#p41dcon2').val();
        var p41dcon3 = $('#p41dcon3').val();
        var p41dcon4 = $('#p41dcon4').val();
        var p41dcon5 = $('#p41dcon5').val();
        var p41dcon6 = $('#p41dcon6').val();
        var p41dcon7 = $('#p41dcon7').val();
        var p41dcon8 = $('#p41dcon8').val();
        var p41dcon9 = $('#p41dcon9').val();
        var p41dcon10 = $('#p41dcon10').val();
        if (p41dcon2 == p4vec2[2]) {
            p4cont1++;
            f_ok($('#p41dcon2'));
        } else {
            p4cont1;
            f_no($('#p41dcon2'));
        }
        if (p41dcon3 == p4vec2[1]) {
            p4cont1++;
            f_ok($('#p41dcon3'));
        } else {
            p4cont1;
            f_no($('#p41dcon3'));
        }
        if (p41dcon4 == p4vec2[2]) {
            p4cont1++;
            f_ok($('#p41dcon4'));
        } else {
            p4cont1;
            f_no($('#p41dcon4'));
        }
        if (p41dcon5 == (p4vec2[0] - p4vec2[1])) {
            p4cont1++;
            f_ok($('#p41dcon5'));
        } else {
            p4cont1;
            f_no($('#p41dcon5'));
        }
        if (p41dcon6 == (p4vec2[2])) {
            p4cont1++;
            f_ok($('#p41dcon6'));
        } else {
            p4cont1;
            f_no($('#p41dcon6'));
        }
        if (p41dcon7 == (p4vec2[0] * p4vec2[2])) {
            p4cont1++;
            f_ok($('#p41dcon7'));
        } else {
            p4cont1;
            f_no($('#p41dcon7'));
        }
        if (p41dcon8 == (p4vec2[1] * p4vec2[2])) {
            p4cont1++;
            f_ok($('#p41dcon8'));
        } else {
            p4cont1;
            f_no($('#p41dcon8'));
        }
        if (p41dcon9 == ((p4vec2[0] - p4vec2[1]) * p4vec2[2])) {
            p4cont1++;
            f_ok($('#p41dcon9'));
        } else {
            p4cont1;
            f_no($('#p41dcon9'));
        }
        if (p41dcon10 == ((p4vec2[0] - p4vec2[1]) * p4vec2[2])) {
            p4cont1++;
            f_ok($('#p41dcon10'));
        } else {
            p4cont1;
            f_no($('#p41dcon10'));
        }

        var result4 = (p4cont1 * 1) / 18;
        cor = cor + result4;
        inc = inc + (1 - result4);

        var p5res1 = [
            ((p5vec1[0] / p5vec2[0]) + (p5vec1[1] / p5vec2[0])).toFixed(1),
            ((p5vec3[0] / p5vec2[1]) + (p5vec3[1] / p5vec2[1]) + (p5vec3[2] / p5vec2[1])).toFixed(1),
            ((p5vec4[0] / p5vec2[2]) - (p5vec4[1] / p5vec2[2])).toFixed(1),
            ((p5vec5[0] / p5vec2[3]) - (p5vec5[1] / p5vec2[3])).toFixed(1),
            ((p5vec6[0] / p5vec2[4]) - (p5vec6[1] / p5vec2[4])).toFixed(1),
            ((p5vec7[0] / p5vec2[5]) + (p5vec7[1] / p5vec2[5]) + (p5vec7[2] / p5vec2[5])).toFixed(1),
            ((p5vec8[0] / p5vec2[6]) + (p5vec8[1] / p5vec2[6]) + (p5vec8[2] / p5vec2[6])).toFixed(1),
            ((p5vec9[0] / p5vec2[7]) - (p5vec9[1] / p5vec2[7])).toFixed(1),
            ((p5vec10[0] / p5vec2[8]) - (p5vec10[1] / p5vec2[8])).toFixed(1),
            ((p5vec11[0] / p5vec2[9]) - (p5vec11[1] / p5vec2[9])).toFixed(1),
        ];
        var p5res2 = [];
        var j = 1;
        var k = 2;
        for (var i = 0; i < 10; i++) {
            var resp1 = $('#p5dcon' + (i + j)).val();
            var resp2 = $('#p5dcon' + (i + k)).val();
            p5res2.push((parseInt(resp1) / parseInt(resp2)).toFixed(1));
            j++;
            k++;
        }
        var x = 1;
        var y = 2;
        var p5cont1 = 0;
        for (var i = 0; i < 10; i++) {
            if (p5res2[i] == p5res1[i]) {
                p5cont1++;
                f_ok($('#p5dcon' + (i + x)));
                f_ok($('#p5dcon' + (i + y)));
            } else {
                p5cont1;
                f_no($('#p5dcon' + (i + x)));
                f_no($('#p5dcon' + (i + y)));
            }
            x++;
            y++;
        }
        var result5 = (p5cont1 * 2) / 10;
        cor = cor + result5;
        inc = inc + (2 - result5);

        var p2vec1 = ['>', '<', '<', '>'];
        var p2cont1 = 0;
        for (var i = 0; i < p2vec1.length; i++) {
            var p2r1 = $('#p2sel' + (i + 1)).val();
            if (p2r1 == p2vec1[i]) {
                p2cont1++;
                f_ok($('#p2sel' + (i + 1)));
            } else {
                p2cont1;
                f_no($('#p2sel' + (i + 1)));
            }
        }
        var p2vec2 = ['5', '5', '6', '6', '4', '4', '7', '7'];
        for (var i = 0; i < p2vec2.length; i++) {
            var p2r2 = $('#p2res' + (i + 1) + ' .pintar').length;
            if (p2r2 == p2vec2[i]) {
                p2cont1++;
                $('#p2res' + (i + 1)).addClass('valid');
            } else {
                p2cont1;
                $('#p2res' + (i + 1)).addClass('no-valid');
            }
        }
        var result2 = (p2cont1 * 1) / 12;
        cor = cor + result2;
        inc = inc + (2 - result2);

        var p6res1 = [$('#p6dcon1').val(), $('#p6dcon2').val(), $('#p6dcon3').val()];
        p6res1 = p6res1.join('');
        var p6res2 = [$('#p6dcon4').val(), $('#p6dcon5').val(), $('#p6dcon6').val()];
        p6res2 = p6res2.join('');
        var p6res3 = [$('#p6dcon7').val(), $('#p6dcon8').val(), $('#p6dcon9').val()];
        p6res3 = p6res3.join('');
        var p6res4 = [$('#p6dcon10').val(), $('#p6dcon11').val(), $('#p6dcon12').val()];
        p6res4 = p6res4.join('');
        var p6cont1 = 0;
        if (p6res1 == '134') {
            p6cont1++;
            f_ok($('#p6dcon1'));
            f_ok($('#p6dcon2'));
            f_ok($('#p6dcon3'));
        } else {
            p6cont1;
            f_no($('#p6dcon1'));
            f_no($('#p6dcon2'));
            f_no($('#p6dcon3'));
        }
        if (p6res2 == '11315') {
            p6cont1++;
            f_ok($('#p6dcon4'));
            f_ok($('#p6dcon5'));
            f_ok($('#p6dcon6'));
        } else {
            p6cont1;
            f_no($('#p6dcon4'));
            f_no($('#p6dcon5'));
            f_no($('#p6dcon6'));
        }
        if (p6res3 == '1323360') {
            p6cont1++;
            f_ok($('#p6dcon7'));
            f_ok($('#p6dcon8'));
            f_ok($('#p6dcon9'));
        } else {
            p6cont1;
            f_no($('#p6dcon7'));
            f_no($('#p6dcon8'));
            f_no($('#p6dcon9'));
        }
        if (p6res4 == '15380') {
            p6cont1++;
            f_ok($('#p6dcon10'));
            f_ok($('#p6dcon11'));
            f_ok($('#p6dcon12'));
        } else {
            p6cont1;
            f_no($('#p6dcon10'));
            f_no($('#p6dcon11'));
            f_no($('#p6dcon12'));
        }
        var p6dco1 = $('#p6dco1').val();
        var p6dco2 = $('#p6dco2').val();
        var p6dco3 = $('#p6dco3').val();
        var p6dco4 = $('#p6dco4').val();
        if (p6dco1 == '36') {
            p6cont1++;
            f_ok($('#p6dco1'));
        } else {
            p6cont1;
            f_no($('#p6dco1'));
        }
        if (p6dco2 == '30') {
            p6cont1++;
            f_ok($('#p6dco2'));
        } else {
            p6cont1;
            f_no($('#p6dco2'));
        }
        if (p6dco3 == '360') {
            p6cont1++;
            f_ok($('#p6dco3'));
        } else {
            p6cont1;
            f_no($('#p6dco3'));
        }
        if (p6dco4 == '80') {
            p6cont1++;
            f_ok($('#p6dco4'));
        } else {
            p6cont1;
            f_no($('#p6dco4'));
        }
        var result6 = (p6cont1 * 2) / 8;
        cor = cor + result6;
        inc = inc + (2 - result6);

        x=1;
        y=2;
        var p7cont1=0;
        for (var i = 0; i < 4; i++) {
            var rep1=parseInt($('#p7dcon'+(i+x)).val());
            var rep2=parseInt($('#p7dcon'+(i+y)).val());
            if (((rep1/rep2).toFixed(1))== p7res1[i]) {
                p7cont1++;
                f_ok($('#p7dcon'+(i+x)));
                f_ok($('#p7dcon'+(i+y)));
            }else{
                p7cont1;
                f_no($('#p7dcon'+(i+x)));
                f_no($('#p7dcon'+(i+y)));
            }
            x++;
            y++;
        }
        var result7 = (p7cont1 * 2) / 4;
        cor = cor + result7;
        inc = inc + (2 - result7);
        Calculo_nota();
    }
}