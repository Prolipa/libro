var titulos = "aplico";
$("#txtNota").html("0/10");
$("#n_pagina").html("153");
var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});
// #region Pregunta1
var pal1 = [
    '<img class="img-responsive drag3 c1" src="img/i1_p153_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2"  src="img/i2_p153_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c1"  src="img/i3_p153_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2"  src="img/i4_p153_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2"  src="img/i5_p153_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c1"  src="img/i6_p153_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];
var pal2 = ['<div><b>Palabras propias de las lenguas originarias del Ecuador</b></div>',
    '<div><b>Diferentes formas de hablar el español en el Ecuador</b></div>'
];

pal1.sort(f_randomico);
var p2vec1 = ['1', '2', '1', '2', '2', '1'];
var p2aux2 = [];
$(".textos").append(pal1);
var myArray2 = ['0', '1'];
var i, j, k;
for (i = myArray2.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray2[i - 1];
    myArray2[i - 1] = myArray2[j];
    myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 6; i++) {
    var c1 = myArray2[i - 1];
    $(".p2cim1" + i).html(pal2[c1]);
    p2aux2.push(p2vec1[c1]);

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
        ui.draggable.attr("style", "mix-blend-mode:multiply;");
        $(this).append(ui.draggable);

    }
});

function pregunta1() {
    var p2cont1 = 0;

    var p2im1 = $('.p2im1 > .c1').length;
    var p2im2 = $('.p2im1 > img').length;
    if (p2im1 == 3 && p2im2 == 3) {
        p2cont1++;
        f_ok($('.p2im1'));
    } else {
        f_no($('.p2im1'));
    }

    var p2im3 = $('.p2im2 > .c2').length;
    var p2im4 = $('.p2im2 > img').length;
    if (p2im3 == 3 && p2im4 == 3) {
        p2cont1++;
        f_ok($('.p2im2'));
    } else {
        f_no($('.p2im2'));
    }

    var total = ((p2cont1 * 4) / 2)
    tpre1 = total;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2
ramdon2 = [
    '/cacho/',
    'Quito',
    '/suco/',
    'Cuenca',
    '/caleta/',
    'Guayaquil',
    '/chuchaqui/'
];
ramdon2.sort(f_randomico);
for (var i = 0; i < 8; i++) {
    $('#' + [i] + '').html(ramdon2[i]);
}

$('.enc2').click(function() {
    if ($(this).hasClass('subrayar2')) {
        $(this).removeClass('subrayar2')
        $(this).addClass('subrayar1')
    } else if ($(this).hasClass('subrayar1')) {
        $(this).removeClass('subrayar1')
        $(this).addClass('subrayar0')
    } else {
        $(this).removeClass('subrayar0')
        $(this).addClass('subrayar2')
    }
});

function pregunta2() {
    var corr = 0;
    vec0 = [$('.subrayar0').text(), $('.subrayar1').text(), $('.subrayar2').text()];
    vec1 = ['/cacho/Quito/chuchaqui/', '/cacho//chuchaqui/Quito', '/chuchaqui//cacho/Quito', '/chuchaqui/Quito/cacho/', 'Quito/chuchaqui//cacho/', 'Quito/cacho//chuchaqui/', 'Cuenca/suco/', '/suco/Cuenca', '/caleta/Guayaquil', 'Guayaquil/caleta/'];

    for (var i = 0; i < 3; i++) {
        var acu = 0;
        for (var j = 0; j < 11; j++) {
            if (vec0[i] == vec1[j]) {
                acu++;
                vec1[j] = 'asdf';
            } else {
                acu;
            }
        }
        if (acu == '1') {
            corr++;
            f_ok($('.subrayar' + [i] + ''));
            $('.subrayar' + [i] + '').removeClass('subrayar' + [i] + '');

        } else {
            f_no($('.subrayar' + [i] + ''));
            $('.subrayar' + [i] + '').removeClass('subrayar' + [i] + '');

        }
    }

    var total = ((corr) * 4) / 3;
    if (total < 0) {
        total = 0;
        tpre2 = total;
    } else {
        tpre2 = total;
    }

    tpre2 = total.toFixed(2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

$(".enc3").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta3() {
    var pre3a = document.getElementById("pre3a").value;
    tpre3 = pre3a;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre3a = document.getElementById("pre3a").value;
    if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal + "/10");
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}
// #endregion