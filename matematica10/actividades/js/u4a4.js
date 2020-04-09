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
var titulos = "refuerzo";
numero_pagina(170);

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
document.getElementById("pre1a1").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a1").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a1"), 1);
});
document.getElementById("pre1a5").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a5").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a5"), 1);
});
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 p3en1':
            $('.p3en1').addClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');

            break;
        case '1 p3en2':
            $('.p3en2').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');
            break;
        case '1 p3en3':
            $('.p3en3').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');

            break;
        case '1 p3en4':
            $('.p3en4').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');

            break;


    }
});

$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p8en1':
            $('.p8en1').addClass('encierra1');
            $('.p8en2').removeClass('encierra1');
            $('.p8en3').removeClass('encierra1');
            $('.p8en4').removeClass('encierra1');

            break;
        case '2 p8en2':
            $('.p8en2').addClass('encierra1');
            $('.p8en1').removeClass('encierra1');
            $('.p8en3').removeClass('encierra1');
            $('.p8en4').removeClass('encierra1');
            break;
        case '2 p8en3':
            $('.p8en3').addClass('encierra1');
            $('.p8en1').removeClass('encierra1');
            $('.p8en2').removeClass('encierra1');
            $('.p8en4').removeClass('encierra1');

            break;
        case '2 p8en4':
            $('.p8en4').addClass('encierra1');
            $('.p8en1').removeClass('encierra1');
            $('.p8en2').removeClass('encierra1');
            $('.p8en3').removeClass('encierra1');

            break;


    }
});

$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 p9en1':
            $('.p9en1').addClass('encierra1');
            $('.p9en2').removeClass('encierra1');
            $('.p9en3').removeClass('encierra1');
            $('.p9en4').removeClass('encierra1');

            break;
        case '3 p9en2':
            $('.p9en2').addClass('encierra1');
            $('.p9en1').removeClass('encierra1');
            $('.p9en3').removeClass('encierra1');
            $('.p9en4').removeClass('encierra1');
            break;
        case '3 p9en3':
            $('.p9en3').addClass('encierra1');
            $('.p9en1').removeClass('encierra1');
            $('.p9en2').removeClass('encierra1');
            $('.p9en4').removeClass('encierra1');

            break;
        case '3 p9en4':
            $('.p9en4').addClass('encierra1');
            $('.p9en1').removeClass('encierra1');
            $('.p9en2').removeClass('encierra1');
            $('.p9en3').removeClass('encierra1');

            break;


    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 p10en1':
            $('.p10en1').addClass('encierra1');
            $('.p10en2').removeClass('encierra1');
            $('.p10en3').removeClass('encierra1');
            $('.p10en4').removeClass('encierra1');

            break;
        case '4 p10en2':
            $('.p10en2').addClass('encierra1');
            $('.p10en1').removeClass('encierra1');
            $('.p10en3').removeClass('encierra1');
            $('.p10en4').removeClass('encierra1');
            break;
        case '4 p10en3':
            $('.p10en3').addClass('encierra1');
            $('.p10en1').removeClass('encierra1');
            $('.p10en2').removeClass('encierra1');
            $('.p10en4').removeClass('encierra1');

            break;
        case '4 p10en4':
            $('.p10en4').addClass('encierra1');
            $('.p10en1').removeClass('encierra1');
            $('.p10en2').removeClass('encierra1');
            $('.p10en3').removeClass('encierra1');

            break;


    }
});

function f_iniciar() {
    var p2vec2 = [
        '<td style="background: #E5BDC3;">Negación</td>' +
        '<td>' +
        '<img src="img/linea.jpg" class="img-responsive">' +
        '</td>' +
        '<td>' +
        '<select id="p2sel1">' +
        '</select>' +
        '</td>',
        '<td style="background: #E5BDC3;">Conjunción</td>' +
        '<td>' +
        '<img src="img/linea.jpg" class="img-responsive">' +
        '</td>' +
        '<td>' +
        '<select id="p2sel2">' +
        '</select>' +
        '</td>',
        '<td style="background: #E5BDC3;">Disyunción inclusiva</td>' +
        '<td>' +
        '<img src="img/linea.jpg" class="img-responsive">' +
        '</td>' +
        '<td>' +
        '<select id="p2sel3">' +
        '' +
        '</select>' +
        '</td>',
        '<td style="background: #E5BDC3;">Disyunción exclusiva</td>' +
        '<td>' +
        '<img src="img/linea.jpg" class="img-responsive">' +
        '</td>' +
        '<td>' +
        '<select id="p2sel4">' +
        '' +
        '</select>' +
        '</td>',
        '<td style="background: #E5BDC3;">Condicional</td>' +
        '<td>' +
        '<img src="img/linea.jpg" class="img-responsive">' +
        '</td>' +
        '<td>' +
        '<select id="p2sel5">' +
        '' +
        '</select>' +
        '</td>',
        '<td style="background: #E5BDC3;">Bicondicional</td>' +
        '<td>' +
        '<img src="img/linea.jpg" class="img-responsive">' +
        '</td>' +
        '<td>' +
        '<select id="p2sel6">' +
        '' +
        '</select>' +
        '</td>'
    ];
    p2vec2.sort(f_randomico);
    for (var i = 0; i < p2vec2.length; i++) {
        $('#p2im' + (i + 1)).html(p2vec2[i]);
    }
    var p2vec3 = [
        '<option value="No">No</option>',
        '<option value="y">y</option>',
        '<option value="o">o</option>',
        '<option value="o … o">o … o</option>',
        '<option value="Si… entonces">Si… entonces</option>',
        '<option value="… si y solo si…">… si y solo si…</option>',
    ];

    p2vec3.sort(f_randomico);
    for (var i = 0; i < p2vec3.length; i++) {
        $('#p2sel' + (i + 1)).html('<option value="" disabled selected>Seleccione</option>' + p2vec3);
    }

    var p3vec1 = ['¡Es increíble que lo hayas hecho!', 'El sol nace por el oeste.', '¿Quieres cenar con nosotros?', '¡Deténgase inmediatamente!'];
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
        $("#p3im" + i).html(p3vec1[c1]);
    }
    var p4vec1 = [
        '<li>' +
        '<span style="color: black;">Si vamos al supermercado, entonces: vamos en bicicleta y llevamos bolsas.' +
        '<select id="p4sel1">' +
        '</select>' +
        '</span>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">Comeremos bananas si y solo si compramos fruta y no nos olvidamos la compra.' +
        '<select id="p4sel2">' +
        '</select>' +
        '</span>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">No es cierto que: caminaremos si y solo si tenemos zapatillas deportivas.' +
        '<select id="p4sel3">' +
        '</select>' +
        '</span>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">Si ganamos los próximos dos partidos y otros equipos no ganan, entonces iremos al mundial.' +
        '<select id="p4sel4">' +
        '</select>' +
        '</span>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">Iremos al cine o no iremos al cine si y solo si compramos canguil.' +
        '<select id="p4sel5">' +
        '</select>' +
        '</span>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">Si no es cierto que aprobamos el examen, y no estudiamos mucho, entonces tendremos que estudiar para el próximo examen.' +
        '<select id="p4sel6">' +
        '</select>' +
        '</span>' +
        '</li>'
    ];
    p4vec1.sort(f_randomico);
    $('#p4im1').html(p4vec1);
    var p4vec2 = [
        '<option value="p ⇒ (q∧r)">p ⇒ (q∧r)</option>',
        '<option value="p ⇔ (q∧∼r)">p ⇔ (q∧∼r)</option>',
        '<option value="∼(p ⇔ q)">∼(p ⇔ q)</option>',
        '<option value="(p∧∼q) ⇔ r">(p∧∼q) ⇔ r</option>',
        '<option value="(p∨∼q) ⇔ r">(p∨∼q) ⇔ r</option>',
        '<option value="(∼p∧¬q) ⇔ r">(∼p∧¬q) ⇔ r</option>',
    ];
    p4vec2.sort(f_randomico);
    for (var i = 0; i < p4vec2.length; i++) {
        $('#p4sel' + (i + 1)).html('<option value="" disabled selected>Seleccione</option>' + p4vec2);
    }

    var p6vec1 = [
        '<li>' +
        '<span style="color: black;">v(p)=V ; v(q)=V <img src="img/i1_p170_u4a4.jpg"> v (∼p ∨ q) =</span>' +
        '<select id="p6sel1" style="color: black;">' +
        '<option value="" selected disabled> Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">v(p)=F; v(q)=F <img src="img/i1_p170_u4a4.jpg"> v (p ⇔ ∼q) =</span>' +
        '<select id="p6sel2" style="color: black;">' +
        '<option value="" selected disabled> Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">v(p)=F; v(q)=V <img src="img/i1_p170_u4a4.jpg"> v [∼(p∧∼q)] =</span>' +
        '<select id="p6sel3" style="color: black;">' +
        '<option value="" selected disabled> Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">v(p)=V ; v(q)=V <img src="img/i1_p170_u4a4.jpg"> v [(p∧q) ⇒∼ q] =</span>' +
        '<select id="p6sel4" style="color: black;">' +
        '<option value="" selected disabled> Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>' +
        '</li>',
        '<li>' +
        '<span style="color: black;">v(p)=F; v(q)=V <img src="img/i1_p170_u4a4.jpg"> v [(p⇔q)∧(∼p∧q)] =</span>' +
        '<select id="p6sel5" style="color: black;">' +
        '<option value="" selected disabled> Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select>' +
        '</li>'
    ];
    p6vec1.sort(f_randomico);
    $('#p6im1').html(p6vec1);

    var p7vec1 = [
        '<li>' +
        '<span style="color: black;">[(p∧q)∨∼p]⇔(∼p∨q)</span>' +
        '<select id="p7sel1" style="color: black;">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="Es tautología">Es tautología</option>' +
        '<option value="Es contingencia">Es contingencia</option>' +
        '<option value="Es contradicción">Es contradicción</option>' +
        '</select>' +
        '<textarea class="form-control text-question no-redimensionar " cols="60" rows="4"></textarea>' +
        '</li>' ,
        '<li>' +
        '<span style="color: black;">[(p∨q)∧∼p]⇔∼p∧(p∨q)</span>' +
        '<select id="p7sel2" style="color: black;">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="Es tautología">Es tautología</option>' +
        '<option value="Es contingencia">Es contingencia</option>' +
        '<option value="Es contradicción">Es contradicción</option>' +
        '</select>' +
        '<textarea class="form-control text-question no-redimensionar " cols="60" rows="4"></textarea>' +
        '</li>' ,
        '<li>' +
        '<span style="color: black;">(p∧q) ⇒ (p∨r)</span>' +
        '<select id="p7sel3" style="color: black;">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="Es tautología">Es tautología</option>' +
        '<option value="Es contingencia">Es contingencia</option>' +
        '<option value="Es contradicción">Es contradicción</option>' +
        '</select>' +
        '<textarea class="form-control text-question no-redimensionar " cols="60" rows="4"></textarea>' +
        '</li>' 
    ];
    p7vec1.sort(f_randomico);
    $('#p7im1').html(p7vec1);

    var p8vec1=['p∨q','∼p∧q','p∨∼q','∼p∨∼q'];
    p8vec1.sort(f_randomico);
    for (var i = 0; i < p8vec1.length; i++) {
        $('#p8im'+(i+1)).html(p8vec1[i]);
    }

    var p9vec1=['q ⇒ p','p ⇒ q','∼(q ∨ p)','∼q'];
    p9vec1.sort(f_randomico);
    for (var i = 0; i < p9vec1.length; i++) {
        $('#p9im'+(i+1)).html(p9vec1[i]);
    }

    var p10vec1=['∼(p ∨ q)','∼p ⇒ q','∼(q ∧ p)','∼q ⇒ p'];
    p10vec1.sort(f_randomico);
    for (var i = 0; i < p10vec1.length; i++) {
        $('#p10im'+(i+1)).html(p10vec1[i]);
    }
    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        var pre1a1 = $('#pre1a1').val();
        if (!pre1a1) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a1);
            inc = inc + (1 - parseFloat(pre1a1));
            $('#pre1a1').val(parseFloat(pre1a1).toFixed(2));
            $('#pre1a1').attr('disabled', 'true');
            preg5();
        }

    }

    function preg5() {
        var pre1a5 = $('#pre1a5').val();
        if (!pre1a5) {
            alert('Ingrese la calificación en la Pregunta 5.')
        } else {
            cor = cor + parseFloat(pre1a5);
            inc = inc + (1 - parseFloat(pre1a5));
            $('#pre1a5').val(parseFloat(pre1a5).toFixed(2));
            $('#pre1a5').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p2vec1 = ['No', 'y', 'o', 'o … o', 'Si… entonces', '… si y solo si…'];
        var p2cont1 = 0;
        for (var i = 0; i < p2vec1.length; i++) {
            var p2rs1 = $('#p2sel' + (i + 1)).val();
            if (p2rs1 == p2vec1[i]) {
                p2cont1++;
                f_ok($('#p2sel' + (i + 1)));
            } else {
                p2cont1;
                f_no($('#p2sel' + (i + 1)));
            }
        }
        var result2 = (p2cont1 * 1) / 6;
        cor = cor + result2;
        inc = inc + (1 - result2);
        $('#pre1a2').val(result2.toFixed(2));

        var p3dcon1 = $('#p3rs1 .encierra1 span').text();
        var p3cont1 = 0;
        if (!p3dcon1) {
            p3cont1;
            f_no($('.1'));
        } else {
            if (p3dcon1 == 'El sol nace por el oeste.') {
                p3cont1++;
                f_ok($('#p3rs1 .encierra1'));
            } else {
                p3cont1;
                f_no($('#p3rs1 .encierra1'));
            }
        }
        var result3 = (p3cont1 * 1) / 1;
        cor = cor + result3;
        inc = inc + (1 - result3);
        $('#pre1a3').val(result3.toFixed(2));

        var p4vec3 = ['p ⇒ (q∧r)', 'p ⇔ (q∧∼r)', '∼(p ⇔ q)', '(p∧∼q) ⇔ r', '(p∨∼q) ⇔ r', '(∼p∧¬q) ⇔ r'];
        var p4cont1 = 0;
        for (var i = 0; i < p4vec3.length; i++) {
            var p4rs1 = $('#p4sel' + (i + 1)).val();
            if (p4rs1 == p4vec3[i]) {
                p4cont1++;
                f_ok($('#p4sel' + (i + 1)));
            } else {
                p4cont1;
                f_no($('#p4sel' + (i + 1)));
            }
        }
        var result4 = (p4cont1 * 1) / 6;
        cor = cor + result4;
        inc = inc + (1 - result4);
        $('#pre1a4').val(result4.toFixed(2));

        var p6vec2 = ['V', 'V', 'V', 'F', 'F'];
        var p6cont1 = 0;
        for (var i = 0; i < p6vec2.length; i++) {
            var p6rs1 = $('#p6sel' + (i + 1)).val();
            if (p6rs1 == p6vec2[i]) {
                p6cont1++;
                f_ok($('#p6sel' + (i + 1)));
            } else {
                p6cont1;
                f_no($('#p6sel' + (i + 1)));
            }
        }
        var result6 = (p6cont1 * 1) / 5;
        cor = cor + result6;
        inc = inc + (1 - result6);
        $('#pre1a6').val(result6.toFixed(2));

        var p7vec2 = ['Es tautología', 'Es tautología', 'Es contingencia'];
        var p7cont1 = 0;
        for (var i = 0; i < p7vec2.length; i++) {
            var p7rs1 = $('#p7sel' + (i + 1)).val();
            if (p7rs1 == p7vec2[i]) {
                p7cont1++;
                f_ok($('#p7sel' + (i + 1)));
            } else {
                p7cont1;
                f_no($('#p7sel' + (i + 1)));
            }
        }
        var result7 = (p7cont1 * 1) / 3;
        cor = cor + result7;
        inc = inc + (1 - result7);
        $('#pre1a7').val(result7.toFixed(2));

        var p8dcon1 = $('#p8rs1 .encierra1 span').text();
        var p8cont1 = 0;
        if (!p8dcon1) {
            p8cont1;
            f_no($('.2'));
        } else {
            if (p8dcon1 == '∼p∧q') {
                p8cont1++;
                f_ok($('#p8rs1 .encierra1'));
            } else {
                p8cont1;
                f_no($('#p8rs1 .encierra1'));
            }
        }
        var result8 = (p8cont1 * 1) / 1;
        cor = cor + result8;
        inc = inc + (1 - result8);
        $('#pre1a8').val(result8.toFixed(2));

        var p9dcon1 = $('#p9rs1 .encierra1 span').text();
        var p9cont1 = 0;
        if (!p9dcon1) {
            p9cont1;
            f_no($('.3'));
        } else {
            if (p9dcon1 == '∼(q ∨ p)') {
                p9cont1++;
                f_ok($('#p9rs1 .encierra1'));
            } else {
                p9cont1;
                f_no($('#p9rs1 .encierra1'));
            }
        }
        var result9 = (p9cont1 * 1) / 1;
        cor = cor + result9;
        inc = inc + (1 - result9);
        $('#pre1a9').val(result9.toFixed(2));

        var p10dcon1 = $('#p10rs1 .encierra1 span').text();
        var p10cont1 = 0;
        if (!p10dcon1) {
            p10cont1;
            f_no($('.4'));
        } else {
            if (p10dcon1 == '∼(p ∨ q)') {
                p10cont1++;
                f_ok($('#p10rs1 .encierra1'));
            } else {
                p10cont1;
                f_no($('#p10rs1 .encierra1'));
            }
        }
        var result10 = (p10cont1 * 1) / 1;
        cor = cor + result10;
        inc = inc + (1 - result10);
        $('#pre1a10').val(result10.toFixed(2));
        Calculo_nota();
    }
}