var titulos = "aplico";
numero_pagina(161);


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;


$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 p3en1':
            $('.p3en1').addClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');
            $('.p3en5').removeClass('encierra1');
            break;
        case '1 p3en2':
            $('.p3en2').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');
            $('.p3en5').removeClass('encierra1');
            break;
        case '1 p3en3':
            $('.p3en3').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');
            $('.p3en5').removeClass('encierra1');
            break;
        case '1 p3en4':
            $('.p3en4').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en5').removeClass('encierra1');
            break;
        case '1 p3en5':
            $('.p3en5').addClass('encierra1');
            $('.p3en1').removeClass('encierra1');
            $('.p3en2').removeClass('encierra1');
            $('.p3en3').removeClass('encierra1');
            $('.p3en4').removeClass('encierra1');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p4en1':
            $('.p4en1').addClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            $('.p4en5').removeClass('encierra1');
            break;
        case '2 p4en2':
            $('.p4en2').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            $('.p4en5').removeClass('encierra1');
            break;
        case '2 p4en3':
            $('.p4en3').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            $('.p4en5').removeClass('encierra1');
            break;
        case '2 p4en4':
            $('.p4en4').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en5').removeClass('encierra1');
            break;
        case '2 p4en5':
            $('.p4en5').addClass('encierra1');
            $('.p4en1').removeClass('encierra1');
            $('.p4en2').removeClass('encierra1');
            $('.p4en3').removeClass('encierra1');
            $('.p4en4').removeClass('encierra1');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 p5en1':
            $('.p5en1').addClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '3 p5en2':
            $('.p5en2').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '3 p5en3':
            $('.p5en3').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '3 p5en4':
            $('.p5en4').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en5').removeClass('encierra1');
            break;
        case '3 p5en5':
            $('.p5en5').addClass('encierra1');
            $('.p5en1').removeClass('encierra1');
            $('.p5en2').removeClass('encierra1');
            $('.p5en3').removeClass('encierra1');
            $('.p5en4').removeClass('encierra1');
            break;
    }
});


$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});


// #region Pregunta1
function pregunta1() {
    var respuestas = document.getElementsByClassName("respuestas1");
    var soluciones = document.getElementsByClassName("solucion1");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre1 = nota / 10;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2))
}
// #endregion

// #region Pregunta2

var p2vec1 = [
    '<li ><div class="table-responsive"><img src="img/i1_p161_act2.jpg">                                            <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="f"></div></li><br>',
    '<li ><div class="table-responsive"><img src="img/i2_p161_act2.jpg">                                            <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="v"></div></li><br>',
    '<li ><div class="table-responsive"><img src="img/i3_p161_act2.jpg">                                            <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="f"></div></li><br>',
    '<li ><div class="table-responsive"><img src="img/i4_p161_act2.jpg">                                            <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="v"></div></li><br>',
    '<li ><div class="table-responsive"><img src="img/i5_p161_act2.jpg">                                            <input maxlength="3" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="f"></div></li><br>'
];
p2vec1.sort(f_randomico);
$('#p2aux1').html(p2vec1);

function pregunta2() {
    var respuestas = document.getElementsByClassName("respuestas2");
    var soluciones = document.getElementsByClassName("solucion2");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre2 = nota / 10;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2))
}
// #endregion


// #region Pregunta3


var cor=0;
var inc=0;

p3vec1 = ['VVFV', 'VFVV', 'VVVV', 'VVVF', 'FVVV'];
    p3vec1.sort(f_randomico);
    for (var i = 0; i < p3vec1.length; i++) {
        $('#p3im' + (i + 1)).html(p3vec1[i]);
    }
    p4vec1 = ['VFV', 'VVV', 'VFF', 'FVF', 'FFF'];
    p4vec1.sort(f_randomico);
    for (var i = 0; i < p4vec1.length; i++) {
        $('#p4im' + (i + 1)).html(p4vec1[i]);
    }

    p5vec1 = ['VVF', 'VFF', 'VVV', 'VFV', 'FFF'];
    p5vec1.sort(f_randomico);
    for (var i = 0; i < p5vec1.length; i++) {
        $('#p5im' + (i + 1)).html(p5vec1[i]);
    }

    p6vec2 = [
        '<li><span style="color: black;">(p∨q)∨∼ q <select id="p6sel1">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="tautología">tautología</option>' +
        '<option value="contradicción">contradicción</option>' +
        '<option value="contingencia">contingencia</option>' +
        '</select></span></li>' ,
        '<li><span style="color: black;">(p∨q)∧(∼ p∧∼ q) <select id="p6sel2">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="tautología">tautología</option>' +
        '<option value="contradicción">contradicción</option>' +
        '<option value="contingencia">contingencia</option>' +
        '</select></span></li>' ,
        '<li><span style="color: black;">[(p ⇒ q)∧ p]⇒ q) <select id="p6sel3">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="tautología">tautología</option>' +
        '<option value="contradicción">contradicción</option>' +
        '<option value="contingencia">contingencia</option>' +
        '</select></span></li>' ,
        '<li><span style="color: black;">(p ∧ q) ⇒ (p ∨∼ r) <select id="p6sel4">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="tautología">tautología</option>' +
        '<option value="contradicción">contradicción</option>' +
        '<option value="contingencia">contingencia</option>' +
        '</select></span></li>' ,
        '<li><span style="color: black;">[(∼p∧q)∨∼ r ]⇔[r ∧∼(p∧∼ q)]<select id="p6sel5">' +
        '<option value="" selected disabled>Seleccione</option>' +
        '<option value="tautología">tautología</option>' +
        '<option value="contradicción">contradicción</option>' +
        '<option value="contingencia">contingencia</option>' +
        '</select></span></li>' ,
    ];
    p6vec2.sort(f_randomico);
    $('#p6cm1').html(p6vec2);




function pregunta3() {
var p3dcon1 = $('#p3rs1 .encierra1 span').text();
        var p3cont1 = 0;
        if (!p3dcon1) {
            p3cont1;
            f_no($('.1'));
        } else {
            if (p3dcon1 == 'VVVF') {
                p3cont1++;
                f_ok($('#p3rs1 .encierra1'));
            } else {
                p3cont1;
                f_no($('#p3rs1 .encierra1'));
            }
        }
        var tpre3 = (p3cont1 * 1) / 1;
        cor = cor + tpre3;
        inc = inc + (1 - tpre3);
        $('#pre3a').val(tpre3.toFixed(2));
}
// #endregion

// #region Pregunta4
function pregunta4() {

        var p4dcon1 = $('#p4rs1 .encierra1 span').text();
        var p4cont1 = 0;
        if (!p4dcon1) {
            p4cont1;
            f_no($('.2'));
        } else {
            if (p4dcon1 == 'VFV') {
                p4cont1++;
                f_ok($('#p4rs1 .encierra1'));
            } else {
                p4cont1;
                f_no($('#p4rs1 .encierra1'));
            }
        }
        var tpre4 = (p4cont1 * 1) / 1;
        $('#pre4a').val(tpre4.toFixed(2));
}
// #endregion

// #region Pregunta5

function pregunta5() {
        var p5dcon1 = $('#p5rs1 .encierra1 span').text();
        var p5cont1 = 0;
        if (!p5dcon1) {
            p5cont1;
            f_no($('.3'));
        } else {
            if (p5dcon1 == 'VFF') {
                p5cont1++;
                f_ok($('#p5rs1 .encierra1'));
            } else {
                p5cont1;
                f_no($('#p5rs1 .encierra1'));
            }
        }
        var tpre5 = (p5cont1 * 1) / 1;
        $('#pre5a').val(tpre5.toFixed(2));
}
// #endregion

// #region Pregunta6

function pregunta6() {



        var p6vec1 = ['tautología', 'contradicción', 'tautología', 'tautología', 'contingencia'];
        var p6cont1 = 0;
        for (var i = 0; i < p6vec1.length; i++) {
            var p6rs1 = $('#p6sel' + (i + 1)).val();
            if (p6rs1 == p6vec1[i]) {
                p6cont1++;
                f_ok($('#p6sel' + (i + 1)));
            } else {
                p6cont1;
                f_no($('#p6sel' + (i + 1)));
            }
        }
        var tpre6 = (p6cont1 * 1) / 5;
        $('#pre6a').val(tpre6.toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4) +
        parseFloat(tpre5) +
        parseFloat(tpre6);
    var Vtotal = ((Nf * 10) / 6).toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}
// #endregion