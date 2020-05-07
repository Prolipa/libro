var titulos = "aplico";
f_titulos();
numero_pagina(237);

var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
var pal1 = [
    '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p237_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p237_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="3" src="img/i3_p237_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c4" alt="4" src="img/i4_p237_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal10 = [
    '<img class="img-responsive drag30 c1" alt="1" src="img/i5_p237_act1.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag30 c2" alt="2" src="img/i6_p237_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag30 c3" alt="3" src="img/i7_p237_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag30 c4" alt="4" src="img/i8_p237_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal2 = [
    "<div><b>30</b></div>",
    "<div><b>230</b></div>",
    "<div><b>80</b></div>",
    "<div><b>70</b></div>"
];

var pal20 = [
    "<div><b>50</b></div>",
    "<div><b>70</b></div>",
    "<div><b>110</b></div>",
    "<div><b>30</b></div>"
];

pal1.sort(f_randomico);
pal10.sort(f_randomico);

var p2vec1 = ["3", "1", "4", "2"];
var p2vec10 = ["3", "4", "1", "2"];
var p2aux2 = [];
var p2aux20 = [];
$(".textos").append(pal1);
$(".textos1").append(pal10);
var myArray2 = ["0", "1", "2", "3"];
var myArray20 = ["0", "1", "2", "3"];
var i, j, k;
for (i = myArray2.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray2[i - 1];
    myArray2[i - 1] = myArray2[j];
    myArray2[j] = k;
}
var i, j, k;
for (i = myArray20.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray20[i - 1];
    myArray20[i - 1] = myArray20[j];
    myArray20[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 4; i++) {
    var c1 = myArray2[i - 1];
    $(".p2cim1" + i).html(pal2[c1]);
    p2aux2.push(p2vec1[c1]);
}
for (var i = 1; i <= 4; i++) {
    var c1 = myArray20[i - 1];
    $(".p2cim2" + i).html(pal20[c1]);
    p2aux20.push(p2vec10[c1]);
}
$(".drag3").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad17",
    scroll: false
});
$(".drag30").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad18",
    scroll: false
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
$(".drop4").droppable({
    accept: ".drag30",
    drop: function(e, ui) {
        $(ui.draggable).removeClass("drag30");
        $(ui.draggable).removeClass("bg_palabra");
        ui.draggable.attr("style", "mix-blend-mode:multiply;");
        $(this).append(ui.draggable);
    }
});

function pregunta1() {
    var p2im1 = $(".p2im1 > img").attr("alt");
    var p2cont1 = 0;
    if (p2im1 == p2aux2[0]) {
        p2cont1++;
        f_ok($(".p2im1"));
    } else {
        f_no($(".p2im1"));
    }
    var p2im2 = $(".p2im2 > img").attr("alt");
    if (p2im2 == p2aux2[1]) {
        p2cont1++;
        f_ok($(".p2im2"));
    } else {
        f_no($(".p2im2"));
    }
    var p2im3 = $(".p2im3 > img").attr("alt");
    if (p2im3 == p2aux2[2]) {
        p2cont1++;
        f_ok($(".p2im3"));
    } else {
        f_no($(".p2im3"));
    }
    var p2im4 = $(".p2im4 > img").attr("alt");
    if (p2im4 == p2aux2[3]) {
        p2cont1++;
        f_ok($(".p2im4"));
    } else {
        f_no($(".p2im4"));
    }
    var p2im5 = $(".p2im5 > img").attr("alt");
    if (p2im5 == p2aux20[0]) {
        p2cont1++;
        f_ok($(".p2im5"));
    } else {
        f_no($(".p2im5"));
    }
    var p2im6 = $(".p2im6 > img").attr("alt");
    if (p2im6 == p2aux20[1]) {
        p2cont1++;
        f_ok($(".p2im6"));
    } else {
        f_no($(".p2im6"));
    }
    var p2im7 = $(".p2im7 > img").attr("alt");
    if (p2im7 == p2aux20[2]) {
        p2cont1++;
        f_ok($(".p2im7"));
    } else {
        f_no($(".p2im7"));
    }
    var p2im8 = $(".p2im8 > img").attr("alt");
    if (p2im8 == p2aux20[3]) {
        p2cont1++;
        f_ok($(".p2im8"));
    } else {
        f_no($(".p2im8"));
    }

    var total = (p2cont1 * 5) / 8;
    tpre1 = total;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2


function pregunta2() {
    var respuestas = document.getElementsByClassName("respuestas5");
    var soluciones = document.getElementsByClassName("solucion5");
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
    tpre2 = (nota / 2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();

    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion