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
var titulos = "aplico";
numero_pagina(163);
document.getElementById("pre1a1").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a1").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a1"), 1);
});
document.getElementById("pre1a7").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a7").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a7"), 1);
});
document.getElementById("pre1a11").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a11").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a11"), 1);
});
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
        case '1 p4en1':
            $('.p4en1').addClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');

            break;
        case '1 p4en2':
            $('.p4en2').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            break;
        case '1 p4en3':
            $('.p4en3').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');

            break;
        case '1 p4en4':
            $('.p4en4').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');

            break;


    }
});

function f_iniciar() {
    p2vc1 = [
        '<li>' +
        '<div style="color: black;">' +
        '<table>' +
        '<tr align="center">' +
        '<td>p</td>' +
        '<td>V</td>' +
        '<td>p</td>' +
        '<td>≡</td>' +
        '<td>' +
        '<input type="text" maxlength="1" style="text-align: center; width: 40px; border: 2px solid #009BDB; border-radius: 10px;" id="p2dcon1" onkeyup="mayus(this)">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</li>' +
        '<br>',
        '<li>' +
        '<div style="color: black;">' +
        '<table>' +
        '<tr align="center">' +
        '<td>p</td>' +
        '<td>∧</td>' +
        '<td>q</td>' +
        '<td>≡</td>' +
        '<td>q</td>' +
        '<td>' +
        '<input type="text" maxlength="1" style="text-align: center; width: 40px; border: 2px solid #009BDB; border-radius: 10px;" id="p2dcon2" onkeyup="mayus1(this)">' +
        '</td>' +
        '<td>p</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</li>' +
        '<br>',
        '<li>' +
        '<div style="color: black;">' +
        '<table>' +
        '<tr align="center">' +
        '<td>(</td>' +
        '<td>p</td>' +
        '<td>V</td>' +
        '<td>q</td>' +
        '<td>)</td>' +
        '<td>V</td>' +
        '<td>r</td>' +
        '<td>≡</td>' +
        '<td>p</td>' +
        '<td>' +
        '<input type="text" maxlength="1" style="text-align: center; width: 40px; border: 2px solid #009BDB; border-radius: 10px;" id="p2dcon3" onkeyup="mayus1(this)">' +
        '</td>' +
        '<td>(</td>' +
        '<td>q</td>' +
        '<td>' +
        '<input type="text" maxlength="1" style="text-align: center; width: 40px; border: 2px solid #009BDB; border-radius: 10px;" id="p2dcon4" onkeyup="mayus1(this)">' +
        '</td>' +
        '<td>r</td>' +
        '<td>)</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</li>' +
        '<br>',
        '<li>' +
        '<div style="color: black;">' +
        '<table>' +
        '<tr align="center">' +
        '<td>p</td>' +
        '<td>' +
        '<input type="text" maxlength="1" style="text-align: center; width: 40px; border: 2px solid #009BDB; border-radius: 10px;" id="p2dcon5" onkeyup="mayus1(this)">' +
        '</td>' +
        '<td>(</td>' +
        '<td>q</td>' +
        '<td>' +
        '<input type="text" maxlength="1" style="text-align: center; width: 40px; border: 2px solid #009BDB; border-radius: 10px;" id="p2dcon6" onkeyup="mayus1(this)">' +
        '</td>' +
        '<td>r</td>' +
        '<td>)</td>' +
        '<td>≡</td>' +
        '<td>(</td>' +
        '<td>p</td>' +
        '<td>∧</td>' +
        '<td>q</td>' +
        '<td>)</td>' +
        '<td>V</td>' +
        '<td>(</td>' +
        '<td>p</td>' +
        '<td>∧</td>' +
        '<td>r</td>' +
        '<td>)</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</li>' +
        '<br>',
        '<li>' +
        '<div style="color: black;">' +
        '<table>' +
        '<tr align="center">' +
        '<td>∼</td>' +
        '<td>(</td>' +
        '<td>p</td>' +
        '<td>' +
        '<input type="text" maxlength="1" style="text-align: center; width: 40px; border: 2px solid #009BDB; border-radius: 10px;" id="p2dcon7" onkeyup="mayus1(this)">' +
        '</td>' +
        '<td>q</td>' +
        '<td>)</td>' +
        '<td>≡</td>' +
        '<td>∼</td>' +
        '<td>p</td>' +
        '<td>∧</td>' +
        '<td>∼</td>' +
        '<td>q</td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '</li>' +
        '<br>'
    ]
    p2vc1.sort(f_randomico);
    $('#p2im1').html(p2vc1);

    var p3vec1 = ['p ∧ V', 'p ∧∼ p', 'p ⇒ q', '∼(p ∧ q)'];
    var p3vec2 = ['<span class="bg_palabra drag1">F</span>', '<span class="bg_palabra drag1">∼p ∨ ∼q</span>', '<span class="bg_palabra drag1">p</span>', '<span class="bg_palabra drag1">∼p ∨ q</span>'];
    p3vec2.sort(f_randomico);
    $('.textos').html(p3vec2);
    var p3vec3 = ["p", "F", "∼p ∨ q", "∼p ∨ ∼q"];
    var p3aux1 = [];
    var myArray1 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c1 = myArray1[i - 1];
        $(".p3cim" + i).html(p3vec1[c1]);
        p3aux1.push(p3vec3[c1]);
    }
    $(".drag1").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p3rs1",
        scroll: false
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

    var p4vec1 = ['p ∨ q', '∼p ∨ q', 'p ∨ ∼q', '∼p ∧ ∼q'];
    var myArray2 = ["0", "1", "2", "3"];
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c2 = myArray2[i - 1];
        $("#p4im" + i).html(p4vec1[c2]);
    }

    var p5vec1 = [
        '<span class="bg_palabra drag2">∼[(p⇒∼q)⇒∼p]Vq</span>',
        '<span class="bg_palabra drag2">∼[∼(p⇒∼q)V∼p]Vq</span>',
        '<span class="bg_palabra drag2">∼[∼(∼pV∼q)V∼p]Vq</span>',
        '<span class="bg_palabra drag2">{∼[∼(∼pV∼q)]∧∼(∼p)}Vq</span>',
        '<span class="bg_palabra drag2">[(∼pV∼q)∧p]Vq</span>',
        '<span class="bg_palabra drag2">[(∼p∧p)V(∼q∧p)]Vq</span>',
        '<span class="bg_palabra drag2">[FV(∼q∧p)]Vq</span>',
        '<span class="bg_palabra drag2">(∼q∧p)Vq</span>',
        '<span class="bg_palabra drag2">(∼qVq)∧(pVq)</span>',
        '<span class="bg_palabra drag2">V∧(pVq)</span>',
        '<span class="bg_palabra drag2">(pVq)</span>'
    ];
    p5vec1.sort(f_randomico);
    $('.textos1').html(p5vec1);
    $(".drag2").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p5rs1",
        scroll: false
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
    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor=0;
        var pre1a1 = $('#pre1a1').val();
        if (!pre1a1) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a1);
            inc = inc + (1 - parseFloat(pre1a1));
            $('#pre1a1').val(parseFloat(pre1a1).toFixed(2));
            $('#pre1a1').attr('disabled', 'true');
            preg7();
        }

    }
    function preg7() {
        var pre1a7 = $('#pre1a7').val();
        if (!pre1a7) {
            alert('Ingrese la calificación en la Pregunta 7.')
        } else {
            cor = cor + parseFloat(pre1a7);
            inc = inc + (1 - parseFloat(pre1a7));
            $('#pre1a7').val(parseFloat(pre1a7).toFixed(2));
            $('#pre1a7').attr('disabled', 'true');
            preg11();
        }

    }
    function preg11() {
        var pre1a11 = $('#pre1a11').val();
        if (!pre1a11) {
            alert('Ingrese la calificación en la Pregunta 11.')
        } else {
            cor = cor + parseFloat(pre1a11);
            inc = inc + (1 - parseFloat(pre1a11));
            $('#pre1a11').val(parseFloat(pre1a11).toFixed(2));
            $('#pre1a11').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p2vec1 = ['p', '∧', 'V', 'V', '∧', 'V', 'V'];
        var p2cont1 = 0;
        for (var i = 0; i < p2vec1.length; i++) {
            var p2rp1 = $('#p2dcon' + (i + 1)).val();
            if (p2rp1 == p2vec1[i]) {
                p2cont1++;
                f_ok($('#p2dcon' + (i + 1)));
            } else {
                p2cont1;
                f_no($('#p2dcon' + (i + 1)));
            }
        }
        var result2 = (p2cont1 * 1) / 7;
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#pre1a2').val(result2.toFixed(2));

        var p3cont1 = 0;
        for (var i = 0; i < p3aux1.length; i++) {
            var p3rp1 = $('.p3im' + (i + 1) + ' span').text();
            if (p3rp1 == p3aux1[i]) {
                p3cont1++;
                f_ok($('.p3im' + (i + 1)));
            } else {
                p3cont1;
                f_no($('.p3im' + (i + 1)));
            }
        }
        var result3 = (p3cont1 * 1) / 4;
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#pre1a3').val(result3.toFixed(2));

        var p4dcon1 = $('#p4rs1 .encierra1 span').text();
        var p4cont1 = 0;
        if (!p4dcon1) {
            p4cont1;
            f_no($('.1'));
        } else {
            if (p4dcon1 == 'p ∨ q') {
                p4cont1++;
                f_ok($('#p4rs1 .encierra1'));
            } else {
                p4cont1;
                f_no($('#p4rs1 .encierra1'));
            }
        }
        var result4 = (p4cont1 * 0.5) / 1;
        cor = cor + result4;
        inc = inc + (0.5 - result4);
        $('#pre1a4').val(result4.toFixed(2));

        var p5vec1 = [
            '∼[(p⇒∼q)⇒∼p]Vq',
            '∼[∼(p⇒∼q)V∼p]Vq',
            '∼[∼(∼pV∼q)V∼p]Vq',
            '{∼[∼(∼pV∼q)]∧∼(∼p)}Vq',
            '[(∼pV∼q)∧p]Vq',
            '[(∼p∧p)V(∼q∧p)]Vq',
            '[FV(∼q∧p)]Vq',
            '(∼q∧p)Vq',
            '(∼qVq)∧(pVq)',
            'V∧(pVq)',
            '(pVq)'
        ];
        var p5cont1=0;
        for (var i = 0; i < p5vec1.length; i++) {
            var p5rs1=$('.p5im'+(i+1)+' span').text();
            if (p5rs1==p5vec1[i]) {
                p5cont1++;
                f_ok($('.p5im'+(i+1)));
            }else{
                p5cont1;
                f_no($('.p5im'+(i+1)));
            }
        }

        var p5vec2=['V','V','F','F'];
        var p5vec3=['V','F','V','F'];
        var p5vec4=['F','V','V','V'];
        var p5vec5=['V','F','V','V'];
        var p5vec6=['V','V','V','F'];
        for (var i = 0; i < p5vec2.length; i++) {
            var p5rs2=$('#p5dcon'+(i+1)).val();
            if (p5rs2==p5vec2[i]) {
                p5cont1++;
                f_ok($('#p5dcon'+(i+1)));
            }else{
                p5cont1;
                f_no($('#p5dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p5vec3.length; i++) {
            var p5rs3=$('#p51dcon'+(i+1)).val();
            if (p5rs3==p5vec3[i]) {
                p5cont1++;
                f_ok($('#p51dcon'+(i+1)));
            }else{
                p5cont1;
                f_no($('#p51dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p5vec4.length; i++) {
            var p5rs4=$('#p52dcon'+(i+1)).val();
            if (p5rs4==p5vec4[i]) {
                p5cont1++;
                f_ok($('#p52dcon'+(i+1)));
            }else{
                p5cont1;
                f_no($('#p52dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p5vec5.length; i++) {
            var p5rs5=$('#p53dcon'+(i+1)).val();
            if (p5rs5==p5vec5[i]) {
                p5cont1++;
                f_ok($('#p53dcon'+(i+1)));
            }else{
                p5cont1;
                f_no($('#p53dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p5vec6.length; i++) {
            var p5rs6=$('#p54dcon'+(i+1)).val();
            if (p5rs6==p5vec6[i]) {
                p5cont1++;
                f_ok($('#p54dcon'+(i+1)));
            }else{
                p5cont1;
                f_no($('#p54dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p5vec6.length; i++) {
            var p5rs7=$('#p55dcon'+(i+1)).val();
            if (p5rs7==p5vec6[i]) {
                p5cont1++;
                f_ok($('#p55dcon'+(i+1)));
            }else{
                p5cont1;
                f_no($('#p55dcon'+(i+1)));
            }
        }
        var result5 = (p5cont1 * 1) / 35;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#pre1a5').val(result5.toFixed(2));

        var p6vec1=['V','V','F','V'];
        var p6cont1=0;
        for (var i = 0; i < p6vec1.length; i++) {
            var p6rs1=$('#p6sel'+(i+1)).val();
            if (p6rs1==p6vec1[i]) {
                p6cont1++;
                f_ok($('#p6sel'+(i+1)));
            }else{
                p6cont1;
                f_no($('#p6sel'+(i+1)));
            }
        }
        var result6 = (p6cont1 * 0.5) / 4;
        cor = cor + result6;
        inc = inc + (0.5 - result6);
        $('#pre1a6').val(result6.toFixed(2));

        var p8vec1=['V','V','F','F'];
        var p8vec2=['V','F','V','F'];
        var p8vec3=['V','F','F','V'];
        var p8vec4=['V','F','V','V'];
        var p8vec5=['V','F','F','V'];
        var p8vec6=['V','V','F','V'];
        var p8cont1=0;
        for (var i = 0; i < p8vec1.length; i++) {
            var p8rs1=$('#p8dcon'+(i+1)).val();
            if (p8rs1==p8vec1[i]) {
                p8cont1++;
                f_ok($('#p8dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p8dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec2.length; i++) {
            var p8rs2=$('#p81dcon'+(i+1)).val();
            if (p8rs2==p8vec2[i]) {
                p8cont1++;
                f_ok($('#p81dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p81dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec3.length; i++) {
            var p8rs3=$('#p82dcon'+(i+1)).val();
            if (p8rs3==p8vec3[i]) {
                p8cont1++;
                f_ok($('#p82dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p82dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec4.length; i++) {
            var p8rs4=$('#p83dcon'+(i+1)).val();
            if (p8rs4==p8vec4[i]) {
                p8cont1++;
                f_ok($('#p83dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p83dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec5.length; i++) {
            var p8rs5=$('#p84dcon'+(i+1)).val();
            if (p8rs5==p8vec5[i]) {
                p8cont1++;
                f_ok($('#p84dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p84dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p8vec6.length; i++) {
            var p8rs6=$('#p85dcon'+(i+1)).val();
            if (p8rs6==p8vec6[i]) {
                p8cont1++;
                f_ok($('#p85dcon'+(i+1)));
            }else{
                p8cont1;
                f_no($('#p85dcon'+(i+1)));
            }
        }

        var result8 = (p8cont1 * 1) / 24;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#pre1a8').val(result8.toFixed(2));

        var p9vec1=['V','V','V','V','F','F','F','F'];
        var p9vec2=['V','V','F','F','V','V','F','F'];
        var p9vec3=['V','F','V','F','V','F','V','F'];
        var p9vec4=['F','F','F','F','F','F','V','V'];
        var p9vec5=['F','F','F','F','F','F','V','F'];
        var p9vec6=['F','F','F','F','V','V','V','V'];
        var p9vec7=['F','F','V','F','F','F','V','F'];
        var p9cont1=0;
        for (var i = 0; i < p9vec1.length; i++) {
            var p9rs1=$('#p9dcon'+(i+1)).val();
            if (p9rs1==p9vec1[i]) {
                p9cont1++;
                f_ok($('#p9dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p9dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec2.length; i++) {
            var p9rs2=$('#p91dcon'+(i+1)).val();
            if (p9rs2==p9vec2[i]) {
                p9cont1++;
                f_ok($('#p91dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p91dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec3.length; i++) {
            var p9rs3=$('#p92dcon'+(i+1)).val();
            if (p9rs3==p9vec3[i]) {
                p9cont1++;
                f_ok($('#p92dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p92dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec4.length; i++) {
            var p9rs4=$('#p93dcon'+(i+1)).val();
            if (p9rs4==p9vec4[i]) {
                p9cont1++;
                f_ok($('#p93dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p93dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec5.length; i++) {
            var p9rs5=$('#p94dcon'+(i+1)).val();
            if (p9rs5==p9vec5[i]) {
                p9cont1++;
                f_ok($('#p94dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p94dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec6.length; i++) {
            var p9rs6=$('#p95dcon'+(i+1)).val();
            if (p9rs6==p9vec6[i]) {
                p9cont1++;
                f_ok($('#p95dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p95dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec5.length; i++) {
            var p9rs7=$('#p96dcon'+(i+1)).val();
            if (p9rs7==p9vec5[i]) {
                p9cont1++;
                f_ok($('#p96dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p96dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p9vec7.length; i++) {
            var p9rs8=$('#p97dcon'+(i+1)).val();
            if (p9rs8==p9vec7[i]) {
                p9cont1++;
                f_ok($('#p97dcon'+(i+1)));
            }else{
                p9cont1;
                f_no($('#p97dcon'+(i+1)));
            }
        }
        var result9 = (p9cont1 * 1) / 64;
        cor = cor + result9;
        inc = inc + (1 - result9);
        $('#pre1a9').val(result9.toFixed(2));


        var p10vec1=['V','V','F','V'];
        var p10cont1=0;
        for (var i = 0; i < p10vec1.length; i++) {
            var p10rs1=$('#p10sel'+(i+1)).val();
            if (p10rs1==p10vec1[i]) {
                p10cont1++;
                f_ok($('#p10sel'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p10sel'+(i+1)));
            }
        }
        var p10vec1=['V','V','F','F'];
        var p10vec2=['V','F','V','F'];
        var p10vec3=['F','V','F','F'];
        var p10vec4=['V','F','V','V'];
        var p10vec5=['V','V','V','F'];
        var p10vec6=['F','F','V','F'];
        for (var i = 0; i < p10vec1.length; i++) {
            var p10rs1=$('#p10dcon'+(i+1)).val();
            if (p10rs1==p10vec1[i]) {
                p10cont1++;
                f_ok($('#p10dcon'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p10dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec2.length; i++) {
            var p10rs2=$('#p101dcon'+(i+1)).val();
            if (p10rs2==p10vec2[i]) {
                p10cont1++;
                f_ok($('#p101dcon'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p101dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec3.length; i++) {
            var p10rs3=$('#p102dcon'+(i+1)).val();
            if (p10rs3==p10vec3[i]) {
                p10cont1++;
                f_ok($('#p102dcon'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p102dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec3.length; i++) {
            var p10rs4=$('#p103dcon'+(i+1)).val();
            if (p10rs4==p10vec3[i]) {
                p10cont1++;
                f_ok($('#p103dcon'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p103dcon'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec1.length; i++) {
            var p10rs5=$('#p10dcon1'+(i+1)).val();
            if (p10rs5==p10vec1[i]) {
                p10cont1++;
                f_ok($('#p10dcon1'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p10dcon1'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec2.length; i++) {
            var p10rs6=$('#p101dcon1'+(i+1)).val();
            if (p10rs6==p10vec2[i]) {
                p10cont1++;
                f_ok($('#p101dcon1'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p101dcon1'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec4.length; i++) {
            var p10rs7=$('#p102dcon1'+(i+1)).val();
            if (p10rs7==p10vec4[i]) {
                p10cont1++;
                f_ok($('#p102dcon1'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p102dcon1'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec4.length; i++) {
            var p10rs8=$('#p103dcon1'+(i+1)).val();
            if (p10rs8==p10vec4[i]) {
                p10cont1++;
                f_ok($('#p103dcon1'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p103dcon1'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec1.length; i++) {
            var p10rs9=$('#p10dcon3'+(i+1)).val();
            if (p10rs9==p10vec1[i]) {
                p10cont1++;
                f_ok($('#p10dcon3'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p10dcon3'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec2.length; i++) {
            var p10rs10=$('#p101dcon3'+(i+1)).val();
            if (p10rs10==p10vec2[i]) {
                p10cont1++;
                f_ok($('#p101dcon3'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p101dcon3'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec5.length; i++) {
            var p10rs11=$('#p102dcon3'+(i+1)).val();
            if (p10rs11==p10vec5[i]) {
                p10cont1++;
                f_ok($('#p102dcon3'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p102dcon3'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec6.length; i++) {
            var p10rs12=$('#p103dcon3'+(i+1)).val();
            if (p10rs12==p10vec6[i]) {
                p10cont1++;
                f_ok($('#p103dcon3'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p103dcon3'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec5.length; i++) {
            var p10rs13=$('#p104dcon3'+(i+1)).val();
            if (p10rs13==p10vec5[i]) {
                p10cont1++;
                f_ok($('#p104dcon3'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p104dcon3'+(i+1)));
            }
        }
        var p10vec7=['V','V','V','V','F','F','F','F'];
        var p10vec8=['V','V','F','F','V','V','F','F'];
        var p10vec9=['V','F','V','F','V','F','V','F'];
        var p10vec10=['V','F','V','V','V','F','V','V'];
        var p10vec11=['V','F','F','F','V','F','F','F'];
        var p10vec12=['V','V','V','F','V','V','V','F'];
        for (var i = 0; i < p10vec7.length; i++) {
            var p10rs14=$('#p10dcon2'+(i+1)).val();
            if (p10rs14==p10vec7[i]) {
                p10cont1++;
                f_ok($('#p10dcon2'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p10dcon2'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec8.length; i++) {
            var p10rs15=$('#p101dcon2'+(i+1)).val();
            if (p10rs15==p10vec8[i]) {
                p10cont1++;
                f_ok($('#p101dcon2'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p101dcon2'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec9.length; i++) {
            var p10rs16=$('#p102dcon2'+(i+1)).val();
            if (p10rs16==p10vec9[i]) {
                p10cont1++;
                f_ok($('#p102dcon2'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p102dcon2'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec10.length; i++) {
            var p10rs17=$('#p103dcon2'+(i+1)).val();
            if (p10rs17==p10vec10[i]) {
                p10cont1++;
                f_ok($('#p103dcon2'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p103dcon2'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec11.length; i++) {
            var p10rs18=$('#p104dcon2'+(i+1)).val();
            if (p10rs18==p10vec11[i]) {
                p10cont1++;
                f_ok($('#p104dcon2'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p104dcon2'+(i+1)));
            }
        }
        for (var i = 0; i < p10vec12.length; i++) {
            var p10rs19=$('#p105dcon2'+(i+1)).val();
            if (p10rs19==p10vec12[i]) {
                p10cont1++;
                f_ok($('#p105dcon2'+(i+1)));
            }else{
                p10cont1;
                f_no($('#p105dcon2'+(i+1)));
            }
        }
        var result10 = (p10cont1 * 1) / 104;
        cor = cor + result10;
        inc = inc + (1 - result10);
        $('#pre1a10').val(result10.toFixed(2));
        Calculo_nota();
    }
}