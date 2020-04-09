var titulos = "aplico";
numero_pagina(157);


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 1);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});


$(".btn_mostrar").on("click", function() {
    //mostrar todas las preguntas
    $(".panel-collapse").removeClass("in");
    $(".panel-collapse").addClass("in");
});


// #region Pregunta1
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2

var p2vec1 = [
    '<li ><span class="enc2" id="1">Juan Montalvo era escritor.</span></li>',
    '<li ><span class="enc2" id="2">Juan Montalvo no era pintor.</span></li>',
    '<li ><span class="enc2" id="3">Juan Montalvo no era escritor.</span></li>'
];
p2vec1.sort(f_randomico);
$('#p2aux1').html(p2vec1);

$(".enc2").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

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

    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 3; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "Juan Montalvo no era pintor.") {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("subrayarc");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("subrayari");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 1) / 1;
    if (total < 0) {
        total = 0;
    } else {
        total;
    }



    tpre2 = ((nota / 10) + total);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3

// #endregion

// #region Pregunta3

function pregunta3() {
    var pre3a = document.getElementById("pre3a").value;
    tpre3 = pre3a;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4

// #endregion

// #region Pregunta4
function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
var pal1 = [
    '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p157_act5.jpg"  style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p157_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
    '<img class="img-responsive drag3 c3" alt="3" src="img/i3_p157_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
    '<img class="img-responsive drag3 c1" alt="4" src="img/i4_p157_act5.jpg"  style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
    '<img class="img-responsive drag3 c2" alt="5" src="img/i5_p157_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
    '<img class="img-responsive drag3 c3" alt="6" src="img/i6_p157_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;',
    '<img class="img-responsive drag3 c4" alt="7" src="img/i7_p157_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">&nbsp;&nbsp;'
];

var pal2 = [
    "<div><h3>Llueve y no hace sol.</h3></div>",
    "<div><h3>Si no llueve, hace sol.</h3></div>",
    "<div><h3>No es cierto que no llueva.</h3></div>",
    "<div><h3>Hará sol si y solo si no llueve.</h3></div>"
];

pal1.sort(f_randomico);

var p2vec1 = ["4", "7", "5", "6"];
var p2aux2 = [];
$(".textos").append(pal1);
var myArray2 = ["0", "1", "2", "3"];
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
}
$(".drag3").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: ".actividad17",
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

function pregunta5() {
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

    var total = (p2cont1 * 2) / 4;
    tpre5 = total;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
var p6vec1 = [
    '<li><span class="enc6" id="4">Si no vas a la fiesta, entonces Ana, que ya está preparada, se enfadará contigo.</span></li>',
    '<li><span class="enc6" id="5">Mozart fue un gran compositor y Vivaldi también.</span></li>',
    '<li><span class="enc6" id="6">Si la inflación sube y hay elecciones cerca, entonces las pensiones suben.</span></li>'
];
p6vec1.sort(f_randomico);
$('#li6').html(p6vec1);

$(".enc6").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta6() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 4; i <= 6; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "Si la inflación sube y hay elecciones cerca, entonces las pensiones suben.") {
                respr1 = respr1 + 1;

                $("#" + [i] + "").addClass("subrayarc");
            } else {
                respr2 = respr2 + 1;

                $("#" + [i] + "").addClass("subrayari");
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 2) / 1;
    if (total < 0) {
        total = 0;
    } else {
        total;
    }

    tpre6 = (total);
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        var pre3a = document.getElementById("pre3a").value;
        if (pre3a == "") {
            alert("Pregunta 3: Califiqué la pregunta");
        } else {
            var pre4a = document.getElementById("pre4a").value;
            if (pre4a == "") {
                alert("Pregunta 4: Califiqué la pregunta");
            } else {
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
        }
    }
}
// #endregion