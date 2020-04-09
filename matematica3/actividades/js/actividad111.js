var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    $(".panel-collapse").removeClass('in');
    $(".panel-collapse").addClass('in');
});
$(".panel-collapse").addClass('out');
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_6').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_6'), 1)
});
$('.enc1').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc2').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc3').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc4').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc5').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc6').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc7').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc8').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc9').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})
$('.enc10').click(function() {

    if ($(this).hasClass('pinta3')) {
        $(this).removeClass('pinta3')
        $(this).addClass('pinta2')

    } else if ($(this).hasClass('pinta2')) {
        $(this).removeClass('pinta2')
        $(this).addClass('pinta1')

    } else if ($(this).hasClass('pinta1')) {
        $(this).removeClass('pinta1')
        $(this).addClass('pinta3')

    }

})

function f_iniciar() {
    var p1vec1 = ['Adrián ⊂ S', 'Carmen ⊄ S', 'Luis ⊄ J', 'Jaime ⊄ S', 'María ⊂ J', 'Wendy ⊄ J', 'Ismael ⊂ S', 'Miriam ⊂ J', 'Pedro ⊂ J'];
    var p1vec2 = ['V', 'V', 'V', 'F', 'V', 'F', 'V', 'V', 'F'];
    var p1aux1 = [];
    var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 9; i++) {
        var c = myArray1[i - 1];
        $("#p1im" + i).html(p1vec1[c]);
        p1aux1.push(p1vec2[c]);

    };


    var p5vec1 = ['<p><input type="radio" name="group1" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p5dcon1" maxlength="1" onkeypress="return soloNumeros2(event)" value="1"> <span id="p5im1">4 conjuntos de 4 elementos</span></p><br>',
        '<p><input type="radio" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p5dcon2" maxlength="1" onkeypress="return soloNumeros2(event)" name="group1" value="2"> <span id="p5im2">3 conjuntos de 5 elementos</span></p><br>',
        '<p><input type="radio" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p5dcon3" maxlength="1" onkeypress="return soloNumeros2(event)" name="group1" value="3"> <span id="p5im3">3 conjuntos de 4 elementos</span></p><br>',
        '<p><input type="radio" name="group1" style="border:2px solid #0098C9; width: 40px; border-radius: 5px; text-align: center;" id="p5dcon4" maxlength="1" onkeypress="return soloNumeros2(event)" value="4"> <span id="p5im4">6 conjuntos de 6 elementos</span></p><br>'
    ];
    p5vec1.sort(f_randomico);
    $('#group1').html(p5vec1);

    var pal1 = ['<img src="img/i2_p132_act111.jpg" class="drag2 img-responsive c1" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i3_p132_act111.jpg" class="drag2 img-responsive c2" alt="2" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i4_p132_act111.jpg"  class="drag2 img-responsive c1" alt="3" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i5_p132_act111.jpg" class="drag2 img-responsive c3" alt="4" style="display:inline-block; mix-blend-mode:multiply;">',
        '<img src="img/i6_p132_act111.jpg" class="drag2 img-responsive c1" alt="5" style="display:inline-block; mix-blend-mode:multiply;">'
    ];
    var pal2 = ['<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p2im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p2cim11" ><h3>silla</h3></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p2im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p2cim12"><h3>mesa</h3></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p2im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p2cim13"><h3>lápiz</h3></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p2im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p2cim14"><h3>borrador</h3></div>' +
        '</td>' +
        '</tr>',
        '<tr>' +
        '<td>' +
        '<div class="col-lg-10 col-sm-10 col-md-10 col-xs-10 c_destino1 drop2 p2im5"></div>' +
        '</td>' +
        '<td>' +
        '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 c_origen p2cim15"><h3>libro</h3></div>' +
        '</td>' +
        '</tr>'
    ];
    pal1.sort(f_randomico);
    $(".textos1").append(pal1);
    pal2.sort(f_randomico);
    $("#datos1").append(pal2);

    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#pregunta2",
        scroll: false,
    });

    $(".drop2").droppable({
        accept: ".drag2",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag2");

            ui.draggable.attr("style", "mix-blend-mode:multiply;");
            $(this).append(ui.draggable);

        }
    });



    var p3num1 = [parseInt((Math.random() * 30) + 1)];
    var p3pt1 = parseInt((Math.random() * 9) + 1);
    for (var i = 0; i < 5; i++) {
        p3num1.push((p3num1[i] + p3pt1));
        $('#p3im' + (i + 1)).html('+ ' + p3pt1);
    }
    $('#p3dcon1').val(p3num1[0]);
    $('#p3dcon2').val(p3num1[1]);

    var p3num2 = [parseInt((Math.random() * 300) + 100)];
    var p3pt2 = parseInt((Math.random() * 9) + 1);
    for (var i = 0; i < 5; i++) {
        p3num2.push((p3num2[i] + p3pt2));
        $('#p3im1' + (i + 1)).html('+ ' + p3pt2);
    }
    $('#p3dcon11').val(p3num2[0]);
    $('#p3dcon12').val(p3num2[1]);


    var p4num1 = [parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100),
        parseInt((Math.random() * 900) + 100)
    ];
    var p4num2 = [];
    var p4num3 = [];
    for (var i = 0; i < 10; i++) {
        $('#p4im' + (i + 1)).html(p4num1[i]);
        if ((p4num1[i] % 2) == 0) {
            p4num2.push(p4num1[i]);
        } else {
            p4num3.push(p4num1[i]);
        }
    }
    var p5num1 = parseInt((Math.random() * 400) + 100);
    var p5num2 = parseInt((Math.random() * 400) + 100);
    var p5aux1 = p5num1.toString().split('');
    var p5aux2 = p5num2.toString().split('');
    $('#p5im1').html(p5aux1[0]);
    $('#p5im2').html(p5aux1[1]);
    $('#p5im3').html(p5aux1[2]);
    $('#p5im4').html(p5aux2[0]);
    $('#p5im5').html(p5aux2[1]);
    $('#p5im6').html(p5aux2[2]);
    var p5num3 = parseInt((Math.random() * 400) + 100);
    var p5num4 = parseInt((Math.random() * 400) + 100);
    var p5aux3 = p5num3.toString().split('');
    var p5aux4 = p5num4.toString().split('');
    $('#p5im21').html(p5aux3[0]);
    $('#p5im22').html(p5aux3[1]);
    $('#p5im23').html(p5aux3[2]);
    $('#p5im24').html(p5aux4[0]);
    $('#p5im25').html(p5aux4[1]);
    $('#p5im26').html(p5aux4[2]);
    var p5num5 = parseInt((Math.random() * 700) + 100);
    var p5num6 = parseInt((Math.random() * 700) + 100);
    var p5a1 = 0;
    var p5a2 = 0;
    if (p5num5 > p5num6) {
        p5a1 = p5num5;
        p5a2 = p5num6;
    } else if (p5num5 < p5num6) {
        p5a1 = p5num6;
        p5a2 = p5num5;
    } else if (p5num5 == p5num6) {
        p5a1 = p5num5 + 50;
        p5a2 = p5num6;
    }
    var p5aux5 = p5a1.toString().split('');
    var p5aux6 = p5a2.toString().split('');
    $('#p5im11').html(p5aux5[0]);
    $('#p5im12').html(p5aux5[1]);
    $('#p5im13').html(p5aux5[2]);
    $('#p5im14').html(p5aux6[0]);
    $('#p5im15').html(p5aux6[1]);
    $('#p5im16').html(p5aux6[2]);
    var p5num7 = parseInt((Math.random() * 700) + 100);
    var p5num8 = parseInt((Math.random() * 700) + 100);
    var p5a3 = 0;
    var p5a4 = 0;
    if (p5num7 > p5num8) {
        p5a3 = p5num7;
        p5a4 = p5num8;
    } else if (p5num7 < p5num8) {
        p5a3 = p5num8;
        p5a4 = p5num7;
    } else if (p5num7 == p5num8) {
        p5a3 = p5num7 + 50;
        p5a4 = p5num8;
    }
    var p5aux7 = p5a3.toString().split('');
    var p5aux8 = p5a4.toString().split('');
    $('#p5im31').html(p5aux7[0]);
    $('#p5im32').html(p5aux7[1]);
    $('#p5im33').html(p5aux7[2]);
    $('#p5im34').html(p5aux8[0]);
    $('#p5im35').html(p5aux8[1]);
    $('#p5im36').html(p5aux8[2]);

    var myArray7 = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
    var i, j, k;
    for (i = myArray7.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray7[i - 1];
        myArray7[i - 1] = myArray7[j];
        myArray7[j] = k;
    }

    var p7vec2 = [];
    var p7vec3 = [];
    var mayor = 0;
    var aux1 = 0;
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c7 = myArray7[i - 1];
        var p7vec1 = [];
        for (var j = 0; j < (parseInt(c7) + 1); j++) {

            p7vec1.push('<img src="img/i9_p132_act111.jpg" class="img-responsive" style="display: inline-block;" alt="">');
        }
        $("#p7im" + i).append(p7vec1);
        p7vec2.push(parseInt(c7) + 1);
        p7vec3.push(i);
    };
    for (i = 0; i < p7vec2.length; i++) {
        if (p7vec2[i] > mayor) {
            mayor = p7vec2[i];
            aux1 = (i);
        }
    }

    bt_comprobar.addEventListener("click", f_preg6);

    function f_preg1() {
        var p1sel1 = $('#p1sel1').val();
        var p1sel2 = $('#p1sel2').val();
        var p1sel3 = $('#p1sel3').val();
        var p1sel4 = $('#p1sel4').val();
        var p1sel5 = $('#p1sel5').val();
        var p1sel6 = $('#p1sel6').val();
        var p1sel7 = $('#p1sel7').val();
        var p1sel8 = $('#p1sel8').val();
        var p1sel9 = $('#p1sel9').val();
        var p1cont1 = 0;
        if (p1sel1 == p1aux1[0]) {
            p1cont1++;
            f_ok($('#p1sel1'));
        } else {
            p1cont1;
            f_no($('#p1sel1'));
        }
        if (p1sel2 == p1aux1[1]) {
            p1cont1++;
            f_ok($('#p1sel2'));
        } else {
            p1cont1;
            f_no($('#p1sel2'));
        }
        if (p1sel3 == p1aux1[2]) {
            p1cont1++;
            f_ok($('#p1sel3'));
        } else {
            p1cont1;
            f_no($('#p1sel3'));
        }
        if (p1sel4 == p1aux1[3]) {
            p1cont1++;
            f_ok($('#p1sel4'));
        } else {
            p1cont1;
            f_no($('#p1sel4'));
        }
        if (p1sel5 == p1aux1[4]) {
            p1cont1++;
            f_ok($('#p1sel5'));
        } else {
            p1cont1;
            f_no($('#p1sel5'));
        }
        if (p1sel6 == p1aux1[5]) {
            p1cont1++;
            f_ok($('#p1sel6'));
        } else {
            p1cont1;
            f_no($('#p1sel6'));
        }
        if (p1sel7 == p1aux1[6]) {
            p1cont1++;
            f_ok($('#p1sel7'));
        } else {
            p1cont1;
            f_no($('#p1sel7'));
        }
        if (p1sel8 == p1aux1[7]) {
            p1cont1++;
            f_ok($('#p1sel8'));
        } else {
            p1cont1;
            f_no($('#p1sel8'));
        }
        if (p1sel9 == p1aux1[8]) {
            p1cont1++;
            f_ok($('#p1sel9'));
        } else {
            p1cont1;
            f_no($('#p1sel9'));
        }
        result1 = (p1cont1 * 2) / 9;
        cor = cor + result1;
        inc = inc + (2 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');
        f_preg2();
    }

    function f_preg2() {
        var p2im1 = $('.p2im1 > img').attr('alt');
        var p2im2 = $('.p2im2 > img').attr('alt');
        var p2im3 = $('.p2im3 > img').attr('alt');
        var p2im4 = $('.p2im4 > img').attr('alt');
        var p2im5 = $('.p2im5 > img').attr('alt');
        var p2cont1 = 0;
        if (p2im1 == '5') {
            p2cont1++;
            f_ok($('.p2im1'));
        } else {
            p2cont1;
            f_no($('.p2im1'));
        }
        if (p2im2 == '3') {
            p2cont1++;
            f_ok($('.p2im2'));
        } else {
            p2cont1;
            f_no($('.p2im2'));
        }
        if (p2im3 == '4') {
            p2cont1++;
            f_ok($('.p2im3'));
        } else {
            p2cont1;
            f_no($('.p2im3'));
        }
        if (p2im4 == '2') {
            p2cont1++;
            f_ok($('.p2im4'));
        } else {
            p2cont1;
            f_no($('.p2im4'));
        }
        if (p2im5 == '1') {
            p2cont1++;
            f_ok($('.p2im5'));
        } else {
            p2cont1;
            f_no($('.p2im5'));
        }
        result2 = (p2cont1 * 2) / 5;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#nota1_2').val(result2.toFixed(2));
        $('#nota1_2').css('display', '');
        f_preg3();
    }

    function f_preg3() {
        var p3dcon3 = $('#p3dcon3').val();
        var p3dcon4 = $('#p3dcon4').val();
        var p3dcon5 = $('#p3dcon5').val();
        var p3dcon6 = $('#p3dcon6').val();
        var p3cont1 = 0;
        if (p3dcon3 == p3num1[2]) {
            p3cont1++;
            f_ok($('#p3dcon3'));
        } else {
            p3cont1;
            f_no($('#p3dcon3'));
        }
        if (p3dcon4 == p3num1[3]) {
            p3cont1++;
            f_ok($('#p3dcon4'));
        } else {
            p3cont1;
            f_no($('#p3dcon4'));
        }
        if (p3dcon5 == p3num1[4]) {
            p3cont1++;
            f_ok($('#p3dcon5'));
        } else {
            p3cont1;
            f_no($('#p3dcon5'));
        }
        if (p3dcon6 == p3num1[5]) {
            p3cont1++;
            f_ok($('#p3dcon6'));
        } else {
            p3cont1;
            f_no($('#p3dcon6'));
        }
        var p3dcon13 = $('#p3dcon13').val();
        var p3dcon14 = $('#p3dcon14').val();
        var p3dcon15 = $('#p3dcon15').val();
        var p3dcon16 = $('#p3dcon16').val();
        if (p3dcon13 == p3num2[2]) {
            p3cont1++;
            f_ok($('#p3dcon13'));
        } else {
            p3cont1;
            f_no($('#p3dcon13'));
        }
        if (p3dcon14 == p3num2[3]) {
            p3cont1++;
            f_ok($('#p3dcon14'));
        } else {
            p3cont1;
            f_no($('#p3dcon14'));
        }
        if (p3dcon15 == p3num2[4]) {
            p3cont1++;
            f_ok($('#p3dcon15'));
        } else {
            p3cont1;
            f_no($('#p3dcon15'));
        }
        if (p3dcon16 == p3num2[5]) {
            p3cont1++;
            f_ok($('#p3dcon16'));
        } else {
            p3cont1;
            f_no($('#p3dcon16'));
        }
        result3 = (p3cont1 * 2) / 8;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');
        f_preg4();
    }

    function f_preg4() {
        var p4cont1 = 0;
        if ($('.enc1').hasClass('pinta1')) {
            var p4aux1 = 0;
            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im1').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc1').addClass('valid');
            } else {
                p4cont1;
                $('.enc1').addClass('no-valid');
            }
        } else if ($('.enc1').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im1').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc1').addClass('valid');
            } else {
                p4cont1;
                $('.enc1').addClass('no-valid');
            }
        } else if ($('.enc1').hasClass('pinta3')) {
            p4cont1;
            $('.enc1').addClass('no-valid');
        }
        if ($('.enc2').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im2').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc2').addClass('valid');
            } else {
                p4cont1;
                $('.enc2').addClass('no-valid');
            }
        } else if ($('.enc2').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im2').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc2').addClass('valid');
            } else {
                p4cont1;
                $('.enc2').addClass('no-valid');
            }
        } else if ($('.enc2').hasClass('pinta3')) {
            p4cont1;
            $('.enc2').addClass('no-valid');
        }
        if ($('.enc3').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im3').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc3').addClass('valid');
            } else {
                p4cont1;
                $('.enc3').addClass('no-valid');
            }
        } else if ($('.enc3').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im3').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc3').addClass('valid');
            } else {
                p4cont1;
                $('.enc3').addClass('no-valid');
            }
        } else if ($('.enc3').hasClass('pinta3')) {
            p4cont1;
            $('.enc3').addClass('no-valid');
        }
        if ($('.enc4').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im4').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc4').addClass('valid');
            } else {
                p4cont1;
                $('.enc4').addClass('no-valid');
            }
        } else if ($('.enc4').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im4').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc4').addClass('valid');
            } else {
                p4cont1;
                $('.enc4').addClass('no-valid');
            }
        } else if ($('.enc4').hasClass('pinta3')) {
            p4cont1;
            $('.enc4').addClass('no-valid');
        }
        if ($('.enc5').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im5').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc5').addClass('valid');
            } else {
                p4cont1;
                $('.enc5').addClass('no-valid');
            }
        } else if ($('.enc5').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im5').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc5').addClass('valid');
            } else {
                p4cont1;
                $('.enc5').addClass('no-valid');
            }
        } else if ($('.enc5').hasClass('pinta3')) {
            p4cont1;
            $('.enc5').addClass('no-valid');
        }

        if ($('.enc6').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im6').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc6').addClass('valid');
            } else {
                p4cont1;
                $('.enc6').addClass('no-valid');
            }
        } else if ($('.enc6').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im6').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc6').addClass('valid');
            } else {
                p4cont1;
                $('.enc6').addClass('no-valid');
            }
        } else if ($('.enc6').hasClass('pinta3')) {
            p4cont1;
            $('.enc6').addClass('no-valid');
        }

        if ($('.enc7').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im7').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc7').addClass('valid');
            } else {
                p4cont1;
                $('.enc7').addClass('no-valid');
            }
        } else if ($('.enc7').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im7').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc7').addClass('valid');
            } else {
                p4cont1;
                $('.enc7').addClass('no-valid');
            }
        } else if ($('.enc7').hasClass('pinta3')) {
            p4cont1;
            $('.enc7').addClass('no-valid');
        }

        if ($('.enc8').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im8').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc8').addClass('valid');
            } else {
                p4cont1;
                $('.enc8').addClass('no-valid');
            }
        } else if ($('.enc8').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im8').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc8').addClass('valid');
            } else {
                p4cont1;
                $('.enc8').addClass('no-valid');
            }
        } else if ($('.enc8').hasClass('pinta3')) {
            p4cont1;
            $('.enc8').addClass('no-valid');
        }

        if ($('.enc9').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im9').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc9').addClass('valid');
            } else {
                p4cont1;
                $('.enc9').addClass('no-valid');
            }
        } else if ($('.enc9').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im9').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc9').addClass('valid');
            } else {
                p4cont1;
                $('.enc9').addClass('no-valid');
            }
        } else if ($('.enc9').hasClass('pinta3')) {
            p4cont1;
            $('.enc9').addClass('no-valid');
        }
        if ($('.enc10').hasClass('pinta1')) {
            var p4aux1 = 0;

            for (var i = 0; i < p4num3.length; i++) {
                if ($('#p4im10').text() == p4num3[i]) {
                    p4aux1++;

                }
            }
            if (p4aux1 >= '1') {
                p4cont1++;
                $('.enc10').addClass('valid');
            } else {
                p4cont1;
                $('.enc10').addClass('no-valid');
            }
        } else if ($('.enc10').hasClass('pinta2')) {
            var p4aux2 = 0;
            for (var i = 0; i < p4num2.length; i++) {
                if ($('#p4im10').text() == p4num2[i]) {
                    p4aux2++;

                }
            }
            if (p4aux2 >= '1') {
                p4cont1++;
                $('.enc10').addClass('valid');
            } else {
                p4cont1;
                $('.enc10').addClass('no-valid');
            }
        } else if ($('.enc10').hasClass('pinta3')) {
            p4cont1;
            $('.enc10').addClass('no-valid');
        }
        result4 = (p4cont1 * 1) / 10;
        cor = cor + result4;
        inc = inc + (1 - result4);
        $('#nota1_4').val(result4.toFixed(2));
        $('#nota1_4').css('display', '');
        f_preg5();
    }

    function f_preg5() {
        var p5dcon1 = [$('#p5dcon1').val(), $('#p5dcon2').val(), $('#p5dcon3').val()];
        p5dcon1 = p5dcon1.join('');
        var p5dcon2 = [$('#p5dcon4').val(), $('#p5dcon5').val(), $('#p5dcon6').val()];
        p5dcon2 = p5dcon2.join('');
        var p5dcon3 = [$('#p5dcon7').val(), $('#p5dcon8').val(), $('#p5dcon9').val()];
        p5dcon3 = p5dcon3.join('');
        var p5dcon4 = [$('#p5dcon10').val(), $('#p5dcon11').val(), $('#p5dcon12').val()];
        p5dcon4 = p5dcon4.join('');
        var p5cont1 = 0;
        if (p5dcon1 == (p5num1 + p5num2)) {
            p5cont1++;
            f_ok($('#p5dcon1'));
            f_ok($('#p5dcon2'));
            f_ok($('#p5dcon3'));
        } else {
            p5cont1;
            f_no($('#p5dcon1'));
            f_no($('#p5dcon2'));
            f_no($('#p5dcon3'));
        }
        if (parseInt(p5dcon2) == (p5a1 - p5a2)) {
            p5cont1++;
            f_ok($('#p5dcon4'));
            f_ok($('#p5dcon5'));
            f_ok($('#p5dcon6'));
        } else {
            p5cont1;
            f_no($('#p5dcon4'));
            f_no($('#p5dcon5'));
            f_no($('#p5dcon6'));
        }
        if (p5dcon3 == (p5num3 + p5num4)) {
            p5cont1++;
            f_ok($('#p5dcon7'));
            f_ok($('#p5dcon8'));
            f_ok($('#p5dcon9'));
        } else {
            p5cont1;
            f_no($('#p5dcon7'));
            f_no($('#p5dcon8'));
            f_no($('#p5dcon9'));
        }
        if (parseInt(p5dcon4) == (p5a3 - p5a4)) {
            p5cont1++;
            f_ok($('#p5dcon10'));
            f_ok($('#p5dcon11'));
            f_ok($('#p5dcon12'));
        } else {
            p5cont1;
            f_no($('#p5dcon10'));
            f_no($('#p5dcon11'));
            f_no($('#p5dcon12'));
        }
        result5 = (p5cont1 * 1) / 4;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#nota1_5').val(result5.toFixed(2));
        $('#nota1_5').css('display', '');
        f_preg7();
    }

    function f_preg6() {
        var nota1_6 = $('#nota1_6').val();

        if (!nota1_6) {
            alert('Ingrese la calificación en la pregunta 6')
        } else {
            cor = cor + parseFloat(nota1_6);
            inc = inc + (1 - parseFloat(nota1_6));
            $('#nota1_6').val(parseInt(nota1_6).toFixed(2));
            $('#nota1_6').attr('disabled', 'true');
            f_preg1();
        }

    }

    function f_preg7() {
        var p7aux1 = ['violín', 'guitarra', 'saxofón', 'flauta'];
        var p7dcon1 = $('#p7dcon1').val();
        var p7dcon2 = $('#p7dcon2').val().toLowerCase();
        var p7dcon3 = $('#p7dcon3').val();
        var p7dcon4 = $('#p7dcon4').val();
        var p7cont1 = 0;
        if (p7dcon1 == (parseInt(p7vec2[0]) * 3)) {
            p7cont1++;
            f_ok($('#p7dcon1'));
        } else {
            p7cont1;
            f_no($('#p7dcon1'));
        }
        if (p7dcon2 == p7aux1[aux1]) {
            p7cont1++;
            f_ok($('#p7dcon2'));
        } else {
            p7cont1;
            f_no($('#p7dcon2'));
        }
        if (p7dcon3 == ((parseInt(p7vec2[1]) + parseInt(p7vec2[3])) * 3)) {
            p7cont1++;
            f_ok($('#p7dcon3'));
        } else {
            p7cont1;
            f_no($('#p7dcon3'));
        }
        if (p7dcon4 == ((parseInt(p7vec2[1]) + parseInt(p7vec2[3]) + parseInt(p7vec2[0]) + parseInt(p7vec2[2])) * 3)) {
            p7cont1++;
            f_ok($('#p7dcon4'));
        } else {
            p7cont1;
            f_no($('#p7dcon4'));
        }
        result7 = (p7cont1 * 1) / 4;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#nota1_7').val(result7.toFixed(2));
        $('#nota1_7').css('display', '');
        f_comprobar();
    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg6);

        Calculo_nota();
    }
}