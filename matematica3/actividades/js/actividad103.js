var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 15,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var pal1 = ['<span class="bg_palabra drag3 c1">7</span>',
        '<span class="bg_palabra drag3 c2">5</span>',
        '<span class="bg_palabra drag3 c3">6</span>',
        '<span class="bg_palabra drag3 c4">3</span>',
        '<span class="bg_palabra drag3 c5">10</span>'
    ];
    var pal2 = ['<div><b>silla</b></div>',
        '<div><b>murciélago</b></div>',
        '<div><b>jirafa</b></div>',
        '<div><b>uva</b></div>',
        '<div><b>tortuga</b></div>'
    ];
    var pal3 = ['5',
        '10',
        '6',
        '3',
        '7'
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
        p5aux1.push(pal3[c]);

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
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);

        var a102dcon1 = $('#a102dcon1').val();
        var a102dcon2 = $('#a102dcon2').val();
        var a102dcon3 = $('#a102dcon3').val();
        var a102dcon4 = $('#a102dcon4').val();
        var a102dcon5 = $('#a102dcon5').val();
        var a102dcon6 = $('#a102dcon6').val();
        var a102dcon7 = $('#a102dcon7').val();
        var a102dcon8 = $('#a102dcon8').val();
        var a102dcon9 = $('#a102dcon9').val();
        var a102dcon10 = $('#a102dcon10').val();
        var a102vec1 = ['silla', 'murciélago', 'jirafa', 'uva', 'tortuga'];
        var a102vec2 = ['5', '10', '6', '3', '7'];
        var a102cont1 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon1 == a102vec1[i] && (a102dcon1 + ',' + a102dcon2) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont1++;
                a102vec1[i] == a102cont1;

            }
        }
        if (a102cont1 == '1') {
            cor++;
            f_ok($('#a102dcon1'));
        } else {
            inc++;
            f_no($('#a102dcon1'));
        }
        var a102cont2 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon2 == a102vec2[i] && (a102dcon1 + ',' + a102dcon2) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont2++;

                a102vec2[i] == a102cont2;
            }
        }
        if (a102cont2 == '1') {
            cor++;
            f_ok($('#a102dcon2'));
        } else {
            inc++;
            f_no($('#a102dcon2'));
        }
        var a102cont3 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon3 == a102vec1[i] && (a102dcon3 + ',' + a102dcon4) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont3++;
                a102vec1[i] == a102cont3;

            }
        }
        if (a102cont3 == '1') {
            cor++;
            f_ok($('#a102dcon3'));
        } else {
            inc++;
            f_no($('#a102dcon3'));
        }
        var a102cont4 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon4 == a102vec2[i] && (a102dcon3 + ',' + a102dcon4) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont4++;

                a102vec2[i] == a102cont4;
            }
        }
        if (a102cont4 == '1') {
            cor++;
            f_ok($('#a102dcon4'));
        } else {
            inc++;
            f_no($('#a102dcon4'));
        }
        var a102cont5 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon5 == a102vec1[i] && (a102dcon5 + ',' + a102dcon6) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont5++;
                a102vec1[i] == a102cont5;

            }
        }
        if (a102cont5 == '1') {
            cor++;
            f_ok($('#a102dcon5'));
        } else {
            inc++;
            f_no($('#a102dcon5'));
        }
        var a102cont6 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon6 == a102vec2[i] && (a102dcon5 + ',' + a102dcon6) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont6++;

                a102vec2[i] == a102cont6;
            }
        }
        if (a102cont6 == '1') {
            cor++;
            f_ok($('#a102dcon6'));
        } else {
            inc++;
            f_no($('#a102dcon6'));
        }

        var a102cont7 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon7 == a102vec1[i] && (a102dcon7 + ',' + a102dcon8) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont7++;
                a102vec1[i] == a102cont7;

            }
        }
        if (a102cont7 == '1') {
            cor++;
            f_ok($('#a102dcon7'));
        } else {
            inc++;
            f_no($('#a102dcon7'));
        }
        var a102cont8 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon8 == a102vec2[i] && (a102dcon7 + ',' + a102dcon8) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont8++;

                a102vec2[i] == a102cont8;
            }
        }
        if (a102cont8 == '1') {
            cor++;
            f_ok($('#a102dcon8'));
        } else {
            inc++;
            f_no($('#a102dcon8'));
        }

        var a102cont9 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon9 == a102vec1[i] && (a102dcon9 + ',' + a102dcon10) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont9++;
                a102vec1[i] == a102cont9;

            }
        }
        if (a102cont9 == '1') {
            cor++;
            f_ok($('#a102dcon9'));
        } else {
            inc++;
            f_no($('#a102dcon9'));
        }
        var a102cont10 = 0;
        for (var i = 0; i < a102vec1.length; i++) {
            if (a102dcon10 == a102vec2[i] && (a102dcon9 + ',' + a102dcon10) == (a102vec1[i] + ',' + a102vec2[i])) {
                a102cont10++;

                a102vec2[i] == a102cont10;
            }
        }
        if (a102cont10 == '1') {
            cor++;
            f_ok($('#a102dcon10'));
        } else {
            inc++;
            f_no($('#a102dcon10'));
        }

        var p5im1 = $('.p5im1 span').text();
        var p5im2 = $('.p5im2 span').text();
        var p5im3 = $('.p5im3 span').text();
        var p5im4 = $('.p5im4 span').text();
        var p5im5 = $('.p5im5 span').text();

        if (p5im1 == p5aux1[0]) {
            cor++;
            f_ok($('.p5im1'));
        } else {
            inc++;
            f_no($('.p5im1'));
        }
        if (p5im2 == p5aux1[1]) {
            cor++;
            f_ok($('.p5im2'));
        } else {
            inc++;
            f_no($('.p5im2'));
        }
        if (p5im3 == p5aux1[2]) {
            cor++;
            f_ok($('.p5im3'));
        } else {
            inc++;
            f_no($('.p5im3'));
        }
        if (p5im4 == p5aux1[3]) {
            cor++;
            f_ok($('.p5im4'));
        } else {
            inc++;
            f_no($('.p5im4'));
        }
        if (p5im5 == p5aux1[4]) {
            cor++;
            f_ok($('.p5im5'));
        } else {
            inc++;
            f_no($('.p5im5'));
        }
        Calculo_nota();
    }
}