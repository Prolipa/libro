$("#n_pagina").html("164"); //impresion de pagina
var titulos = "evaluacion";

var tpre1 = 0;
var tpre2 = 0;


document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

// #region Pregunta1
var pal1 = [
    '<img class="img-responsive drag3 c1" alt="1" src="img/i6_p164_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i7_p164_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c1" alt="3" src="img/i8_p164_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="4" src="img/i9_p164_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="5" src="img/i10_p164_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];
var pal2 = [
    '<div><center><img src="img/i1_p164_act1.jpg"></center></div>',
    '<div><center><img src="img/i2_p164_act1.jpg"></center></div>',
    '<div><center><img src="img/i3_p164_act1.jpg"></center></div>',
    '<div><center><img src="img/i4_p164_act1.jpg"></center></div>',
    '<div><center><img src="img/i5_p164_act1.jpg"></center></div>'
];

pal1.sort(f_randomico);
var p2vec1 = ['2', '1', '4', '5', '3'];
var p2aux2 = [];
$(".textos").append(pal1);
var myArray2 = ['0', '1', '2', '3', '4'];
var i, j, k;
for (i = myArray2.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray2[i - 1];
    myArray2[i - 1] = myArray2[j];
    myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 5; i++) {
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
    var p2im1 = $('.p2im1 > img').attr('alt');
    var p2cont1 = 0;
    if (p2im1 == p2aux2[0]) {
        p2cont1++;
        f_ok($('.p2im1'));
    } else {
        f_no($('.p2im1'));
    }
    var p2im2 = $('.p2im2 > img').attr('alt');
    if (p2im2 == p2aux2[1]) {
        p2cont1++;
        f_ok($('.p2im2'));
    } else {
        f_no($('.p2im2'));
    }
    var p2im3 = $('.p2im3 > img').attr('alt');
    if (p2im3 == p2aux2[2]) {
        p2cont1++;
        f_ok($('.p2im3'));
    } else {
        f_no($('.p2im3'));
    }
    var p2im4 = $('.p2im4 > img').attr('alt');
    if (p2im4 == p2aux2[3]) {
        p2cont1++;
        f_ok($('.p2im4'));
    } else {
        f_no($('.p2im4'));
    }
    var p2im5 = $('.p2im5 > img').attr('alt');
    if (p2im5 == p2aux2[4]) {
        p2cont1++;
        f_ok($('.p2im5'));
    } else {
        f_no($('.p2im5'));
    }

    var total = ((p2cont1 * 5) / 5)
    tpre1 = total;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
        alert("Pregunta 8: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        var Nf = parseFloat(tpre1) + parseFloat(tpre2);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal + "/10");
        document.getElementById("bt_comprobar").disabled = true;
        
    }
}

// #endregion