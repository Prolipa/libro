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
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 pint1':
            $('.pint1').addClass('pintar');
            $('.pint2').removeClass('pintar');
            $('.pint3').removeClass('pintar');

            break;
        case '1 pint2':
            $('.pint2').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint3').removeClass('pintar');
            break;
        case '1 pint3':
            $('.pint3').addClass('pintar');
            $('.pint1').removeClass('pintar');
            $('.pint2').removeClass('pintar');

            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 pint4':
            $('.pint4').addClass('pintar');
            $('.pint5').removeClass('pintar');
            $('.pint6').removeClass('pintar');

            break;
        case '2 pint5':
            $('.pint5').addClass('pintar');
            $('.pint4').removeClass('pintar');
            $('.pint6').removeClass('pintar');
            break;
        case '2 pint6':
            $('.pint6').addClass('pintar');
            $('.pint4').removeClass('pintar');
            $('.pint5').removeClass('pintar');

            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 pint7':
            $('.pint7').addClass('pintar');
            $('.pint8').removeClass('pintar');
            $('.pint9').removeClass('pintar');

            break;
        case '3 pint8':
            $('.pint8').addClass('pintar');
            $('.pint7').removeClass('pintar');
            $('.pint9').removeClass('pintar');
            break;
        case '3 pint9':
            $('.pint9').addClass('pintar');
            $('.pint7').removeClass('pintar');
            $('.pint8').removeClass('pintar');

            break;
    }
});

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}


function f_iniciar() {
    var p1vec1 = [];
    for (var i = 0; i < 7; i++) {
        p1vec1.push(parseInt((Math.random() * 5) + 4));
    }
    var p1aux1 = [p1vec1[0], p1vec1[1]];
    p1aux1 = p1aux1.join('');
    p1aux1 = parseInt(p1aux1) * p1vec1[2];
    $('#p1im2').text(p1vec1[0]);
    $('#p1im3').text(p1vec1[1]);
    $('#p1im6').text(p1vec1[2]);
    $('#p1cim1').text(p1vec1[2]);
    $('#p1cim2').text(p1vec1[1]);
    $('#p1cim3').text(p1vec1[2]);

    $('#p11im1').text(p1vec1[3]);
    $('#p11im2').text(p1vec1[4]);
    $('#p11im3').text(p1vec1[5]);
    $('#p11im6').text(p1vec1[6]);
    $('#p11cim1').text(p1vec1[6]);
    $('#p11cim2').text(p1vec1[5]);
    $('#p11cim3').text(p1vec1[6]);
    $('#p11cim4').text(p1vec1[6]);
    var p1aux2 = [p1vec1[3], p1vec1[4], p1vec1[5]];
    p1aux2 = p1aux2.join('');
    p1aux2 = parseInt(p1aux2) * p1vec1[6];


    var p2vec1 = [parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100)];
    var p2vec2 = [parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2)];
    $('#p2i1').text(p2vec1[0]);
    $('#p2i2').text(p2vec2[0])
    $('#p2im6').val(p2vec2[0]);
    var p2aux1 = p2vec1[0].toString().split('');
    $('#p2im1').val(p2aux1[0]);
    $('#p2im2').val(p2aux1[1]);
    $('#p2im3').val(p2aux1[2]);
    var p2res1 = [(p2vec1[0] * p2vec2[0]), (p2vec1[1] * p2vec2[1]), (p2vec1[2] * p2vec2[2]), (p2vec1[3] * p2vec2[3])];
    var p2vec4 = p2res1[0].toString().split('');
    for (var i = 0; i < p2vec4.length; i++) {
        $('#p2cim' + (i + 1)).html('<input type="text" style="text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p2dcon' + (i + 1) + '">');
    }

    $('#p21i1').text(p2vec1[1]);
    $('#p21i2').text(p2vec2[1])
    $('#p21im6').val(p2vec2[1]);
    var p2aux2 = p2vec1[1].toString().split('');
    $('#p21im1').val(p2aux2[0]);
    $('#p21im2').val(p2aux2[1]);
    $('#p21im3').val(p2aux2[2]);
    var p2vec5 = p2res1[1].toString().split('');
    for (var i = 0; i < p2vec5.length; i++) {
        $('#p21cim' + (i + 1)).html('<input type="text" style="text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p21dcon' + (i + 1) + '">');
    }
    $('#p22i1').text(p2vec1[2]);
    $('#p22i2').text(p2vec2[2])
    $('#p22im6').val(p2vec2[2]);
    var p2aux3 = p2vec1[2].toString().split('');
    $('#p22im1').val(p2aux3[0]);
    $('#p22im2').val(p2aux3[1]);
    $('#p22im3').val(p2aux3[2]);
    var p2vec6 = p2res1[2].toString().split('');
    for (var i = 0; i < p2vec6.length; i++) {
        $('#p22cim' + (i + 1)).html('<input type="text" style="text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p22dcon' + (i + 1) + '">');
    }
    $('#p23i1').text(p2vec1[3]);
    $('#p23i2').text(p2vec2[3])
    $('#p23im6').val(p2vec2[3]);
    var p2aux4 = p2vec1[3].toString().split('');
    $('#p23im1').val(p2aux4[0]);
    $('#p23im2').val(p2aux4[1]);
    $('#p23im3').val(p2aux4[2]);
    var p2vec7 = p2res1[3].toString().split('');
    for (var i = 0; i < p2vec7.length; i++) {
        $('#p23cim' + (i + 1)).html('<input type="text" style="text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p23dcon' + (i + 1) + '">');
    }


    var pal1 = ['<span class="bg_palabra drag1">536</span>',
        '<span class="bg_palabra drag1">253</span>',
        '<span class="bg_palabra drag1">69</span>'
    ];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var pal2 = ['<span class="bg_palabra drag2">2024</span>',
        '<span class="bg_palabra drag2">3752</span>',
        '<span class="bg_palabra drag2">621</span>'
    ];
    pal2.sort(f_randomico);
    $(".textos1").append(pal2);
    var p3vec1 = ['8', '9', '7'];
    var p3vec2 = ['253', '69', '536'];
    var p3vec3 = ['2024', '621', '3752'];
    var myArray1 = ['0', '1', '2'];
    var p3vec4 = [];
    var p3vec5 = [];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c1 = myArray1[i - 1];
        $("#p3im" + i).text(p3vec1[c1]);
        p3vec4.push(p3vec2[c1]);
        p3vec5.push(p3vec3[c1]);
    };

    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p3act1",
        scroll: false,
    });

    $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p3act1",
        scroll: false,
    });

    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });


    var p4vec1 = [parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100), parseInt((Math.random() * 700) + 100)];
    var p4vec2 = [parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2)];
    $('#p4im6').text(p4vec2[0]);
    var p4aux1 = p4vec1[0].toString().split('');
    $('#p4im1').text(p4aux1[0]);
    $('#p4im2').text(p4aux1[1]);
    $('#p4im3').text(p4aux1[2]);
    var p4res1 = [(p4vec1[0] * p4vec2[0]), (p4vec1[1] * p4vec2[1]), (p4vec1[2] * p4vec2[2])];
    var p4rs1 = [(p4res1[0] + 1), (p4res1[0]), (p4res1[0] - 1)];
    var myArray2 = ['0', '1', '2'];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c2 = myArray2[i - 1];
        $(".pint" + (i)).html(p4rs1[c2]);

    };
    var p4rs2 = [(p4res1[1] + 100), (p4res1[1]), (p4res1[1] - 10)];
    var myArray3 = ['0', '1', '2'];
    var i, j, k;
    for (i = myArray3.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray3[i - 1];
        myArray3[i - 1] = myArray3[j];
        myArray3[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c3 = myArray3[i - 1];
        $(".pint" + (i + 3)).html(p4rs2[c3]);

    };
    var p4rs3 = [(p4res1[2] + 100), (p4res1[2]), (p4res1[2] + 200)];
    var myArray4 = ['0', '1', '2'];
    var i, j, k;
    for (i = myArray4.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray4[i - 1];
        myArray4[i - 1] = myArray4[j];
        myArray4[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c4 = myArray4[i - 1];
        $(".pint" + (i + 6)).html(p4rs3[c4]);

    };
    var p4vec4 = p4res1[0].toString().split('');
    for (var i = 0; i < p4vec4.length; i++) {
        $('#p4cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p4dcon' + (i + 1) + '">');
    }
    $('#p41im6').text(p4vec2[1]);
    var p4aux2 = p4vec1[1].toString().split('');
    $('#p41im1').text(p4aux2[0]);
    $('#p41im2').text(p4aux2[1]);
    $('#p41im3').text(p4aux2[2]);
    var p4vec5 = p4res1[1].toString().split('');
    for (var i = 0; i < p4vec5.length; i++) {
        $('#p41cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p41dcon' + (i + 1) + '">');
    }
    $('#p42im6').text(p4vec2[2]);
    var p4aux3 = p4vec1[2].toString().split('');
    $('#p42im1').text(p4aux3[0]);
    $('#p42im2').text(p4aux3[1]);
    $('#p42im3').text(p4aux3[2]);
    var p4vec6 = p4res1[2].toString().split('');
    for (var i = 0; i < p4vec6.length; i++) {
        $('#p42cim' + (i + 1)).html('<input type="text" style="border: 2px solid #D68500; border-radius: 5px; text-align:center; width: 40px;" onkeypress="return soloNumeros(event)" maxlength="1" id="p42dcon' + (i + 1) + '">');
    }

    var p5vec1 = [parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2), parseInt((Math.random() * 7) + 2)];
    for (var i = 0; i < p5vec1.length; i++) {
        $('#p5cim' + (i + 1)).text(p5vec1[i]);

    }
    $('#p5dcon5').val(p5vec1[0]);
    $('#p5dcon5').attr('disabled', 'true');
    $('#p51dcon5').val(p5vec1[1]);
    $('#p51dcon5').attr('disabled', 'true');
    $('#p52dcon5').val(p5vec1[2]);
    $('#p52dcon5').attr('disabled', 'true');
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = [];
        var p1cont1 = 0;
        for (var i = 0; i < 3; i++) {
            p1dcon1.push($('#p1dcon' + (i + 1)).val());
        }
        p1dcon1 = p1dcon1.join('');
        if (p1dcon1 == p1aux1) {
            p1cont1++;
            for (var i = 0; i < 3; i++) {
                f_ok($('#p1dcon' + (i + 1)));
            }
        } else {
            p1cont1;
            for (var i = 0; i < 3; i++) {
                f_no($('#p1dcon' + (i + 1)));
            }
        }
        var p1dco1 = $('#p1dco1').val();
        var p1dco2 = $('#p1dco2').val();
        var p1dco3 = $('#p1dco3').val();
        var p1dco4 = $('#p1dco4').val();
        var p1dco5 = $('#p1dco5').val();
        var p1dco6 = $('#p1dco6').val();
        var p1dco7 = $('#p1dco7').val();
        if (p1dco1 == (p1vec1[1] * p1vec1[2])) {
            p1cont1++;
            f_ok($('#p1dco1'));
        } else {
            p1cont1;
            f_no($('#p1dco1'));
        }
        var p1a1 = (p1vec1[1] * p1vec1[2]);
        p1a1 = p1a1.toString().split('');
        if (p1dco2 == p1a1[1]) {
            p1cont1++;
            f_ok($('#p1dco2'));
        } else {
            p1cont1;
            f_no($('#p1dco2'));
        }
        if (p1dco3 == p1a1[0]) {
            p1cont1++;
            f_ok($('#p1dco3'));
        } else {
            p1cont1;
            f_no($('#p1dco3'));
        }

        if (p1dco4 == p1vec1[0]) {
            p1cont1++;
            f_ok($('#p1dco4'));
        } else {
            p1cont1;
            f_no($('#p1dco4'));
        }
        if (p1dco5 == (p1vec1[0] * p1vec1[2])) {
            p1cont1++;
            f_ok($('#p1dco5'));
        } else {
            p1cont1;
            f_no($('#p1dco5'));
        }
        if (p1dco6 == p1a1[0]) {
            p1cont1++;
            f_ok($('#p1dco6'));
        } else {
            p1cont1;
            f_no($('#p1dco6'));
        }
        if (p1dco7 == (parseInt(p1a1[0]) + (p1vec1[0] * p1vec1[2]))) {
            p1cont1++;
            f_ok($('#p1dco7'));
        } else {
            p1cont1;
            f_no($('#p1dco7'));
        }

        var p1dcon2 = [];
        for (var i = 0; i < 4; i++) {
            p1dcon2.push($('#p1dcon' + (i + 4)).val());
        }
        p1dcon2 = p1dcon2.join('');
        if (p1dcon2 == p1aux2) {
            p1cont1++;
            for (var i = 0; i < 4; i++) {
                f_ok($('#p1dcon' + (i + 4)));
            }
        } else {
            p1cont1;
            for (var i = 0; i < 4; i++) {
                f_no($('#p1dcon' + (i + 4)));
            }
        }
        var p11dco1 = $('#p11dco1').val();
        var p11dco2 = $('#p11dco2').val();
        var p11dco3 = $('#p11dco3').val();
        var p11dco4 = $('#p11dco4').val();
        var p11dco5 = $('#p11dco5').val();
        var p11dco6 = $('#p11dco6').val();
        var p11dco7 = $('#p11dco7').val();
        var p11dco8 = $('#p11dco8').val();
        var p11dco9 = $('#p11dco9').val();
        var p11dco10 = $('#p11dco10').val();
        var p11dco11 = $('#p11dco11').val();
        var p11dco12 = $('#p11dco12').val();
        var p11dco13 = $('#p11dco13').val();
        if (p11dco1 == (p1vec1[6] * p1vec1[5])) {
            p1cont1++;
            f_ok($('#p11dco1'));
        } else {
            p1cont1;
            f_no($('#p11dco1'));
        }

        var p11a1 = (p1vec1[6] * p1vec1[5]);
        p11a1 = p11a1.toString().split('');
        if (p11dco2 == p11a1[1]) {
            p1cont1++;
            f_ok($('#p11dco2'));
        } else {
            p1cont1;
            f_no($('#p11dco2'));
        }
        if (p11dco3 == p11a1[0]) {
            p1cont1++;
            f_ok($('#p11dco3'));
        } else {
            p1cont1;
            f_no($('#p11dco3'));
        }

        if (p11dco4 == p1vec1[4]) {
            p1cont1++;
            f_ok($('#p11dco4'));
        } else {
            p1cont1;
            f_no($('#p11dco4'));
        }
        if (p11dco5 == (p1vec1[6] * p1vec1[4])) {
            p1cont1++;
            f_ok($('#p11dco5'));
        } else {
            p1cont1;
            f_no($('#p11dco5'));
        }
        if (p11dco6 == p11a1[0]) {
            p1cont1++;
            f_ok($('#p11dco6'));
        } else {
            p1cont1;
            f_no($('#p11dco6'));
        }
        if (p11dco7 == (parseInt(p11a1[0]) + (p1vec1[6] * p1vec1[4]))) {
            p1cont1++;
            f_ok($('#p11dco7'));
        } else {
            p1cont1;
            f_no($('#p11dco7'));
        }
        var p11a2 = (parseInt(p11a1[0]) + (p1vec1[6] * p1vec1[4]));
        p11a2 = p11a2.toString().split('');
        if (p11dco8 == p11a2[1]) {
            p1cont1++;
            f_ok($('#p11dco8'));
        } else {
            p1cont1;
            f_no($('#p11dco8'));
        }
        if (p11dco9 == p11a2[0]) {
            p1cont1++;
            f_ok($('#p11dco9'));
        } else {
            p1cont1;
            f_no($('#p11dco9'));
        }


        if (p11dco10 == p1vec1[3]) {
            p1cont1++;
            f_ok($('#p11dco10'));
        } else {
            p1cont1;
            f_no($('#p11dco10'));
        }
        if (p11dco11 == (p1vec1[6] * p1vec1[3])) {
            p1cont1++;
            f_ok($('#p11dco11'));
        } else {
            p1cont1;
            f_no($('#p11dco11'));
        }

        if (p11dco12 == p11a2[0]) {
            p1cont1++;
            f_ok($('#p11dco12'));
        } else {
            p1cont1;
            f_no($('#p11dco12'));
        }
        if (p11dco13 == (parseInt(p11a2[0]) + (p1vec1[6] * p1vec1[3]))) {
            p1cont1++;
            f_ok($('#p11dco13'));
        } else {
            p1cont1;
            f_no($('#p11dco13'));
        }
        var result1 = (p1cont1 * 2) / 22;
        cor = cor + result1;
        inc = inc + (2 - result1);


        var p2dcon1 = [];
        var p2cont1 = 0;
        for (var i = (p2vec4.length - 1); i >= 0; i--) {
            p2dcon1.push($('#p2dcon' + (i + 1)).val());
        }
        p2dcon1 = p2dcon1.join('');
        if (p2dcon1 == p2res1[0]) {
            p2cont1++;
            for (var i = (p2vec4.length - 1); i >= 0; i--) {
                f_ok($('#p2dcon' + (i + 1)));
            }
        } else {
            p2cont1;
            for (var i = (p2vec4.length - 1); i >= 0; i--) {
                f_no($('#p2dcon' + (i + 1)));
            }
        }
        var p2dcon2 = [];
        for (var i = (p2vec5.length - 1); i >= 0; i--) {
            p2dcon2.push($('#p21dcon' + (i + 1)).val());
        }
        p2dcon2 = p2dcon2.join('');
        if (p2dcon2 == p2res1[1]) {
            p2cont1++;
            for (var i = (p2vec5.length - 1); i >= 0; i--) {
                f_ok($('#p21dcon' + (i + 1)));
            }
        } else {
            p2cont1;
            for (var i = (p2vec5.length - 1); i >= 0; i--) {
                f_no($('#p21dcon' + (i + 1)));
            }
        }
        var p2dcon3 = [];
        for (var i = (p2vec6.length - 1); i >= 0; i--) {
            p2dcon3.push($('#p22dcon' + (i + 1)).val());
        }
        p2dcon3 = p2dcon3.join('');
        if (p2dcon3 == p2res1[2]) {
            p2cont1++;
            for (var i = (p2vec6.length - 1); i >= 0; i--) {
                f_ok($('#p22dcon' + (i + 1)));
            }
        } else {
            p2cont1;
            for (var i = (p2vec6.length - 1); i >= 0; i--) {
                f_no($('#p22dcon' + (i + 1)));
            }
        }
        var p2dcon4 = [];
        for (var i = (p2vec7.length - 1); i >= 0; i--) {
            p2dcon4.push($('#p23dcon' + (i + 1)).val());
        }
        p2dcon4 = p2dcon4.join('');
        if (p2dcon4 == p2res1[3]) {
            p2cont1++;
            for (var i = (p2vec7.length - 1); i >= 0; i--) {
                f_ok($('#p23dcon' + (i + 1)));
            }
        } else {
            p2cont1;
            for (var i = (p2vec7.length - 1); i >= 0; i--) {
                f_no($('#p23dcon' + (i + 1)));
            }
        }
        var result2 = (p2cont1 * 1) / 4;
        cor = cor + result2;
        inc = inc + (1 - result2);


        var p3cont1 = 0;
        for (var i = 0; i < 3; i++) {
            if ($('.p1dc' + (i + 1) + ' span').text() == p3vec4[i] && $('.p1d' + (i + 1) + ' span').text() == p3vec5[i]) {
                p3cont1++;
                f_ok($('.p1dc' + (i + 1)));
                f_ok($('.p1d' + (i + 1)));
            } else {
                p3cont1;
                f_no($('.p1dc' + (i + 1)));
                f_no($('.p1d' + (i + 1)));
            }
        }
        var p3res1 = [$('#p3dcon1').val(), $('#p3dcon2').val(), $('#p3dcon3').val(), $('#p3dcon4').val()];
        p3res1 = parseInt(p3res1.join(''));
        var p3dcon5 = $('#p3dcon5').val();
        if (p3res1 == '3752' && p3dcon5 == '7') {
            p3cont1++;
            f_ok($('#p3dcon1'));
            f_ok($('#p3dcon2'));
            f_ok($('#p3dcon3'));
            f_ok($('#p3dcon4'));
            f_ok($('#p3dcon5'));
        } else {
            p3cont1;
            f_no($('#p3dcon1'));
            f_no($('#p3dcon2'));
            f_no($('#p3dcon3'));
            f_no($('#p3dcon4'));
            f_no($('#p3dcon5'));
        }
        var p3res2 = [$('#p31dcon1').val(), $('#p31dcon2').val(), $('#p31dcon3').val(), $('#p31dcon4').val()];
        p3res2 = parseInt(p3res2.join(''));
        var p31dcon5 = $('#p31dcon5').val();
        if (p3res2 == '2024' && p31dcon5 == '8') {
            p3cont1++;
            f_ok($('#p31dcon1'));
            f_ok($('#p31dcon2'));
            f_ok($('#p31dcon3'));
            f_ok($('#p31dcon4'));
            f_ok($('#p31dcon5'));
        } else {
            p3cont1;
            f_no($('#p31dcon1'));
            f_no($('#p31dcon2'));
            f_no($('#p31dcon3'));
            f_no($('#p31dcon4'));
            f_no($('#p31dcon5'));
        }
        var p3res3 = [$('#p32dcon1').val(), $('#p32dcon2').val(), $('#p32dcon3').val(), $('#p32dcon4').val()];
        p3res3 = parseInt(p3res3.join(''));
        var p32dcon5 = $('#p32dcon5').val();
        if (p3res3 == '621' && p32dcon5 == '9') {
            p3cont1++;
            f_ok($('#p32dcon1'));
            f_ok($('#p32dcon2'));
            f_ok($('#p32dcon3'));
            f_ok($('#p32dcon4'));
            f_ok($('#p32dcon5'));
        } else {
            p3cont1;
            f_no($('#p32dcon1'));
            f_no($('#p32dcon2'));
            f_no($('#p32dcon3'));
            f_no($('#p32dcon4'));
            f_no($('#p32dcon5'));
        }
        var result3 = (p3cont1 * 2) / 6;
        cor = cor + result3;
        inc = inc + (2 - result3);


        var p4dcon1 = [];
        var p4cont1 = 0;
        for (var i = (p4vec4.length - 1); i >= 0; i--) {
            p4dcon1.push($('#p4dcon' + (i + 1)).val());
        }
        p4dcon1 = p4dcon1.join('');
        if (p4dcon1 == p4res1[0]) {
            p4cont1++;
            for (var i = (p4vec4.length - 1); i >= 0; i--) {
                f_ok($('#p4dcon' + (i + 1)));
            }
        } else {
            p4cont1;
            for (var i = (p4vec4.length - 1); i >= 0; i--) {
                f_no($('#p4dcon' + (i + 1)));
            }
        }
        var p4dcon2 = [];
        for (var i = (p4vec5.length - 1); i >= 0; i--) {
            p4dcon2.push($('#p41dcon' + (i + 1)).val());
        }
        p4dcon2 = p4dcon2.join('');
        if (p4dcon2 == p4res1[1]) {
            p4cont1++;
            for (var i = (p4vec5.length - 1); i >= 0; i--) {
                f_ok($('#p41dcon' + (i + 1)));
            }
        } else {
            p4cont1;
            for (var i = (p4vec5.length - 1); i >= 0; i--) {
                f_no($('#p41dcon' + (i + 1)));
            }
        }
        var p4dcon3 = [];
        for (var i = (p4vec6.length - 1); i >= 0; i--) {
            p4dcon3.push($('#p42dcon' + (i + 1)).val());
        }
        p4dcon3 = p4dcon3.join('');
        if (p4dcon3 == p4res1[2]) {
            p4cont1++;
            for (var i = (p4vec6.length - 1); i >= 0; i--) {
                f_ok($('#p42dcon' + (i + 1)));
            }
        } else {
            p4cont1;
            for (var i = (p4vec6.length - 1); i >= 0; i--) {
                f_no($('#p42dcon' + (i + 1)));
            }
        }
        var p4pin1 = $('#p4p1 .pintar').html();
        var p4pin2 = $('#p4p2 .pintar').html();
        var p4pin3 = $('#p4p3 .pintar').html();
        if (!p4pin1) {
            f_no($('.pint1'));
            f_no($('.pint2'));
            f_no($('.pint3'));
        } else {
            if (p4pin1 == p4res1[0]) {
                p4cont1++;
                f_ok($('#p4p1 .pintar'));
                $('#p4p1 .pintar').removeClass('pintar');
            } else {
                p4cont1;
                f_no($('#p4p1 .pintar'));
                $('#p4p1 .pintar').removeClass('pintar');
            }
        }
        if (!p4pin2) {
            f_no($('.pint4'));
            f_no($('.pint5'));
            f_no($('.pint6'));
        } else {
            if (p4pin2 == p4res1[1]) {
                p4cont1++;
                f_ok($('#p4p2 .pintar'));
                $('#p4p2 .pintar').removeClass('pintar');
            } else {
                p4cont1;
                f_no($('#p4p2 .pintar'));
                $('#p4p2 .pintar').removeClass('pintar');
            }
        }
        if (!p4pin3) {
            f_no($('.pint7'));
            f_no($('.pint8'));
            f_no($('.pint9'));
        } else {
            if (p4pin3 == p4res1[2]) {
                p4cont1++;
                f_ok($('#p4p3 .pintar'));
                $('#p4p3 .pintar').removeClass('pintar');
            } else {
                p4cont1;
                f_no($('#p4p3 .pintar'));
                $('#p4p3 .pintar').removeClass('pintar');
            }
        }
        var result4 = (p4cont1 * 2) / 6;
        cor = cor + result4;
        inc = inc + (2 - result4);


        var p5dcon1 = [$('#p5dcon1').val(), $('#p5dcon2').val(), $('#p5dcon3').val(), $('#p5dcon4').val()];
        p5dcon1 = p5dcon1.join('');
        var p5dcon2 = [$('#p51dcon1').val(), $('#p51dcon2').val(), $('#p51dcon3').val(), $('#p51dcon4').val()];
        p5dcon2 = p5dcon2.join('');
        var p5dcon3 = [$('#p52dcon1').val(), $('#p52dcon2').val(), $('#p52dcon3').val(), $('#p52dcon4').val()];
        p5dcon3 = p5dcon3.join('');
        var p5cont1 = 0;
        if (p5dcon1 == (82 * p5vec1[0])) {
            p5cont1++;
            f_ok($('#p5dcon1'));
            f_ok($('#p5dcon2'));
            f_ok($('#p5dcon3'));
            f_ok($('#p5dcon4'));
        } else {
            p5cont1;
            f_no($('#p5dcon1'));
            f_no($('#p5dcon2'));
            f_no($('#p5dcon3'));
            f_no($('#p5dcon4'));
        }
        var p5dcon6 = $('#p5dcon6').val();
        if (p5dcon6 == (82 * p5vec1[0])) {
            p5cont1++;
            f_ok($('#p5dcon6'));
        } else {
            p5cont1;
            f_no($('#p5dcon6'));
        }

        if (p5dcon2 == (584 * p5vec1[1])) {
            p5cont1++;
            f_ok($('#p51dcon1'));
            f_ok($('#p51dcon2'));
            f_ok($('#p51dcon3'));
            f_ok($('#p51dcon4'));
        } else {
            p5cont1;
            f_no($('#p51dcon1'));
            f_no($('#p51dcon2'));
            f_no($('#p51dcon3'));
            f_no($('#p51dcon4'));
        }
        var p51dcon6 = $('#p51dcon6').val();
        if (p51dcon6 == (584 * p5vec1[1])) {
            p5cont1++;
            f_ok($('#p51dcon6'));
        } else {
            p5cont1;
            f_no($('#p51dcon6'));
        }
        if (p5dcon3 == (475 * p5vec1[2])) {
            p5cont1++;
            f_ok($('#p52dcon1'));
            f_ok($('#p52dcon2'));
            f_ok($('#p52dcon3'));
            f_ok($('#p52dcon4'));
        } else {
            p5cont1;
            f_no($('#p52dcon1'));
            f_no($('#p52dcon2'));
            f_no($('#p52dcon3'));
            f_no($('#p52dcon4'));
        }
        var p52dcon6 = $('#p52dcon6').val();
        if (p52dcon6 == (475 * p5vec1[2])) {
            p5cont1++;
            f_ok($('#p52dcon6'));
        } else {
            p5cont1;
            f_no($('#p52dcon6'));
        }
        var result5 = (p5cont1 * 1) / 6;
        cor = cor + result5;
        inc = inc + (1 - result5);



        var p6dcon1 = [$('#p6dcon1').val(), $('#p6dcon2').val(), $('#p6dcon3').val(), $('#p6dcon4').val()];
        p6dcon1 = p6dcon1.join('');
        var p6dcon2 = [$('#p61dcon1').val(), $('#p61dcon2').val(), $('#p61dcon3').val(), $('#p61dcon4').val()];
        p6dcon2 = p6dcon2.join('');
        var p6dcon3 = [$('#p62dcon1').val(), $('#p62dcon2').val(), $('#p62dcon3').val(), $('#p62dcon4').val()];
        p6dcon3 = p6dcon3.join('');
        var p6dcon4 = [$('#p63dcon1').val(), $('#p63dcon2').val(), $('#p63dcon3').val(), $('#p63dcon4').val()];
        p6dcon4 = p6dcon4.join('');
        var p6dcon5 = [$('#p64dcon1').val(), $('#p64dcon2').val(), $('#p64dcon3').val(), $('#p64dcon4').val()];
        p6dcon5 = p6dcon5.join('');
        var p6dcon6 = [$('#p65dcon1').val(), $('#p65dcon2').val(), $('#p65dcon3').val(), $('#p65dcon4').val()];
        p6dcon6 = p6dcon6.join('');
        var p6cont1 = 0;
        if (p6dcon1 == (568 * 4)) {
            p6cont1++;
            f_ok($('#p6dcon1'));
            f_ok($('#p6dcon2'));
            f_ok($('#p6dcon3'));
            f_ok($('#p6dcon4'));
        } else {
            p6cont1;
            f_no($('#p6dcon1'));
            f_no($('#p6dcon2'));
            f_no($('#p6dcon3'));
            f_no($('#p6dcon4'));
        }
        if (p6dcon2 == (376 * 7)) {
            p6cont1++;
            f_ok($('#p61dcon1'));
            f_ok($('#p61dcon2'));
            f_ok($('#p61dcon3'));
            f_ok($('#p61dcon4'));
        } else {
            p6cont1;
            f_no($('#p61dcon1'));
            f_no($('#p61dcon2'));
            f_no($('#p61dcon3'));
            f_no($('#p61dcon4'));
        }
        if (p6dcon3 == (442 * 6)) {
            p6cont1++;
            f_ok($('#p62dcon1'));
            f_ok($('#p62dcon2'));
            f_ok($('#p62dcon3'));
            f_ok($('#p62dcon4'));
        } else {
            p6cont1;
            f_no($('#p62dcon1'));
            f_no($('#p62dcon2'));
            f_no($('#p62dcon3'));
            f_no($('#p62dcon4'));
        }
        if (p6dcon4 == (238 * 9)) {
            p6cont1++;
            f_ok($('#p63dcon1'));
            f_ok($('#p63dcon2'));
            f_ok($('#p63dcon3'));
            f_ok($('#p63dcon4'));
        } else {
            p6cont1;
            f_no($('#p63dcon1'));
            f_no($('#p63dcon2'));
            f_no($('#p63dcon3'));
            f_no($('#p63dcon4'));
        }
        if (p6dcon5 == (915 * 7)) {
            p6cont1++;
            f_ok($('#p64dcon1'));
            f_ok($('#p64dcon2'));
            f_ok($('#p64dcon3'));
            f_ok($('#p64dcon4'));
        } else {
            p6cont1;
            f_no($('#p64dcon1'));
            f_no($('#p64dcon2'));
            f_no($('#p64dcon3'));
            f_no($('#p64dcon4'));
        }
        if (p6dcon6 == (742 * 8)) {
            p6cont1++;
            f_ok($('#p65dcon1'));
            f_ok($('#p65dcon2'));
            f_ok($('#p65dcon3'));
            f_ok($('#p65dcon4'));
        } else {
            p6cont1;
            f_no($('#p65dcon1'));
            f_no($('#p65dcon2'));
            f_no($('#p65dcon3'));
            f_no($('#p65dcon4'));
        }

        var respal1 = [$('#C0').val(), $('#C1').val(), $('#C2').val(), $('#C3').val()];
        var respal2 = [$('#C5').val(), $('#C6').val(), $('#C7').val(), $('#C8').val()];
        var respal3 = [$('#C10').val(), $('#C11').val(), $('#C12').val(), $('#C13').val()];
        var respal4 = [$('#C14').val(), $('#C15').val(), $('#C16').val(), $('#C17').val()];
        var respal5 = [$('#C0').val(), $('#C4').val(), $('#C9').val(), $('#C14').val()];
        var respal6 = [$('#C3').val(), $('#C5').val(), $('#C10').val(), $('#C17').val()];
        if (respal1.join('') == '2272') {
            p6cont1++;
            f_ok($('#C0'));
            f_ok($('#C1'));
            f_ok($('#C2'));
            f_ok($('#C3'));
        } else {
            p6cont1;
            f_no($('#C0'));
            f_no($('#C1'));
            f_no($('#C2'));
            f_no($('#C3'));
        }
        if (respal2.join('') == '6405') {
            p6cont1++;
            f_ok($('#C5'));
            f_ok($('#C6'));
            f_ok($('#C7'));
            f_ok($('#C8'));
        } else {
            p6cont1;
            f_no($('#C5'));
            f_no($('#C6'));
            f_no($('#C7'));
            f_no($('#C8'));
        }
        if (respal3.join('') == '5936') {
            p6cont1++;
            f_ok($('#C10'));
            f_ok($('#C11'));
            f_ok($('#C12'));
            f_ok($('#C13'));
        } else {
            p6cont1;
            f_no($('#C10'));
            f_no($('#C11'));
            f_no($('#C12'));
            f_no($('#C13'));
        }
        if (respal4.join('') == '2142') {
            p6cont1++;
            f_ok($('#C14'));
            f_ok($('#C15'));
            f_ok($('#C16'));
            f_ok($('#C17'));
        } else {
            p6cont1;
            f_no($('#C14'));
            f_no($('#C15'));
            f_no($('#C16'));
            f_no($('#C17'));
        }
        if (respal5.join('') == '2632') {
            p6cont1++;
            f_ok($('#C0'));
            f_ok($('#C4'));
            f_ok($('#C9'));
            f_ok($('#C14'));
        } else {
            p6cont1;
            f_no($('#C0'));
            f_no($('#C4'));
            f_no($('#C9'));
            f_no($('#C14'));
        }
        if (respal6.join('') == '2652') {
            p6cont1++;
            f_ok($('#C3'));
            f_ok($('#C5'));
            f_ok($('#C10'));
            f_ok($('#C17'));
        } else {
            p6cont1;
            f_no($('#C3'));
            f_no($('#C5'));
            f_no($('#C10'));
            f_no($('#C17'));
        }
        var result6 = (p6cont1 * 2) / 12;
        cor = cor + result6;
        inc = inc + (2 - result6);
        Calculo_nota();
    }
}