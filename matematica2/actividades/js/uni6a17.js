var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;

document.getElementById("pre7a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre7a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre7a"), 1);
});

var p1vec1 = [];
var p1vec2 = [];
var p1vec3 = [];

n1 = parseInt((Math.random() * 50) + 40);
n2 = parseInt((Math.random() * 50) + 40);

n3 = parseInt((Math.random() * 5) + 1);
n4 = parseInt((Math.random() * 5) + 1);




for (i = 0; i < 10; i++) {
    p1vec1.push(n1);
    n1 = n1 - n3;
}

for (i = 0; i < 10; i++) {
    p1vec2.push(n2);
    n2 = n2 - n4;
}


for (i = 0; i < 2; i++) {
    $("#p1num" + [i] + "").html(p1vec1[i]);
}

for (i = 0; i < 2; i++) {
    $("#p1num1" + [i] + "").html(p1vec2[i]);
}



function pregunta1() {
    var corr = 0;
    p1res1 = [];
    p1res10 = [];
    for (var i = 2; i < 10; i++) {
        var n = $('#p1num' + [i] + '').val();
        p1res1.push(n);
        var n1 = $('#p1num1' + [i] + '').val();
        p1res10.push(n1);
    }

    for (var i = 2; i < 10; i++) {
        if (p1vec1[i] == p1res1[i - 2]) {
            corr++;
            f_ok($('#p1num' + [i] + ''));
        } else {
            corr;
            f_no($('#p1num' + [i] + ''));
        }
    }

    for (var i = 2; i < 10; i++) {
        if (p1vec2[i] == p1res10[i - 2]) {
            corr++;
            f_ok($('#p1num1' + [i] + ''));
        } else {
            corr;
            f_no($('#p1num1' + [i] + ''));
        }
    }

    var n = $('#sec1').val();
    if (n == (n3 * (-1))) {
        corr++;
        f_ok($('#sec1'));
    } else {
        corr;
        f_no($('#sec1'));
    }

    var n1 = $('#sec2').val();
    if (n1 == (n4 * (-1))) {
        corr++;
        f_ok($('#sec2'));
    } else {
        corr;
        f_no($('#sec2'));
    }




    var total = ((corr * 1) / 18);
    tpre1 = total.toFixed(2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


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
    tpre2 = nota / 5;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion



// #region Pregunta3
function pregunta3() {
    var respuestas = document.getElementsByClassName("respuestas3");
    var soluciones = document.getElementsByClassName("solucion3");
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
    tpre3 = nota / 10;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

p3vec1 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p3vec1.push(n1);
        p3vec1.push(n2);
        p3vec1.push(n1 - n2);
    }
}
var num1 = p3vec1[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#mlsa' + [i] + '').html(num1[i]);
}
var num1 = p3vec1[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#mlsa' + [i] + '').html(num1[i - 2]);
}

p3vec2 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p3vec2.push(n1);
        p3vec2.push(n2);
        p3vec2.push(n1 + n2);
    }
}
var num1 = p3vec2[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#mlsb' + [i] + '').html(num1[i]);
}
var num1 = p3vec2[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#mlsb' + [i] + '').html(num1[i - 2]);
}

p3vec3 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p3vec3.push(n1);
        p3vec3.push(n2);
        p3vec3.push(n1 - n2);
    }
}
var num1 = p3vec3[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#mlsc' + [i] + '').html(num1[i]);
}
var num1 = p3vec3[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#mlsc' + [i] + '').html(num1[i - 2]);
}

p3vec4 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p3vec4.push(n1);
        p3vec4.push(n2);
        p3vec4.push(n1 + n2);
    }
}
var num1 = p3vec4[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#mlsd' + [i] + '').html(num1[i]);
}
var num1 = p3vec4[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#mlsd' + [i] + '').html(num1[i - 2]);
}
// #region Pregunta4
function pregunta4() {
    var corr = 0;
    var resa1 = $("#mlra" + [0] + "").val() + $("#mlra" + [1] + "").val();

    if (p3vec1[2] == resa1) {
        corr++;
        f_ok($("#mlra0"));
        f_ok($("#mlra1"));
    } else {
        f_no($("#mlra0"));
        f_no($("#mlra1"));
        corr;
    }

    var resb1 = $("#mlrb" + [0] + "").val() + $("#mlrb" + [1] + "").val();

    if (p3vec2[2] == resb1) {
        corr++;
        f_ok($("#mlrb0"));
        f_ok($("#mlrb1"));
    } else {
        f_no($("#mlrb0"));
        f_no($("#mlrb1"));
        corr;
    }

    var resc1 = $("#mlrc" + [0] + "").val() + $("#mlrc" + [1] + "").val();

    if (p3vec3[2] == resc1) {
        corr++;
        f_ok($("#mlrc0"));
        f_ok($("#mlrc1"));
    } else {
        f_no($("#mlrc0"));
        f_no($("#mlrc1"));
        corr;
    }

    var resd1 = $("#mlrd" + [0] + "").val() + $("#mlrd" + [1] + "").val();

    if (p3vec4[2] == resd1) {
        corr++;
        f_ok($("#mlrd0"));
        f_ok($("#mlrd1"));
    } else {
        f_no($("#mlrd0"));
        f_no($("#mlrd1"));
        corr;
    }



    var result4 = (corr * 1) / 4;
    tpre4 = parseFloat(result4);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

p4res1 = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
p4res1.sort(f_randomico);

var nm1 = p4res1[0];
var nm2 = p4res1[1];
var nm3 = p4res1[2];
var nm4 = p4res1[3];
var nm5 = p4res1[4];
var nm6 = p4res1[5];

$("#nm1").val(nm1);
$("#nm1").attr("disabled", "true");

$("#nm3").val(nm3);
$("#nm3").attr("disabled", "true");

$("#nm5").val(nm5);
$("#nm5").attr("disabled", "true");

var tra1 = 0;
var tra2 = 0;
var tra3 = 0;
var tra4 = 0;
var tra5 = 0;
var tra6 = 0;

function st() {

    tra1 = nn(nm1);
    tra2 = nn(nm2);
    tra3 = nn(nm3);
    tra4 = nn(nm4);
    tra5 = nn(nm5);
    tra6 = nn(nm6);

    $("#lt2").val(tra2);
    $("#lt2").attr("disabled", "true");

    $("#lt4").val(tra4);
    $("#lt4").attr("disabled", "true");


}

window.onload = st;

// #region Pregunta5
function pregunta5() {

    var cor = 0;
    var lt1 = document.getElementById("lt1").value;
    var lt3 = document.getElementById("lt3").value;
    var lt5 = document.getElementById("lt5").value;

    if (lt1 == tra1) {
        f_ok("#lt1");
        cor = cor + 1;
    } else {
        f_no("#lt1");
        cor;
    }
    if (lt3 == tra3) {
        f_ok("#lt3");
        cor = cor + 1;
    } else {
        f_no("#lt3");
        cor;
    }
    if (lt5 == tra5) {
        f_ok("#lt5");
        cor = cor + 1;
    } else {
        f_no("#lt5");
        cor;
    }

    var nume2 = document.getElementById("nm2").value;
    var nume4 = document.getElementById("nm4").value;

    if (nume2 == nm2) {
        f_ok("#nm2");
        cor = cor + 1;
    } else {
        f_no("#nm2");
        cor;
    }
    if (nume4 == nm4) {
        f_ok("#nm4");
        cor = cor + 1;
    } else {
        f_no("#nm4");
        cor;
    }

    var total = (cor * 1) / 5;
    if (total < 0) {
        total = 0;
        tpre5 = total.toFixed(2);
    } else {
        tpre5 = total.toFixed(2);
    }
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6

var vec1 = [
    ["1", "img/i2_p248_act6.jpg"],
    ["2", "img/i3_p248_act6.jpg"],
    ["3", "img/i4_p248_act6.jpg"]
]

var res1 = [
    ["img/i3_p248_act6.jpg"]
]
var random3 = document.getElementsByClassName('imagen');

vec1.sort(f_randomico);
for (i = 0; i < random3.length; i++) {
    $('#' + random3[i].id).html('<img id=' + vec1[i][1] + ' style="mix-blend-mode: multiply;" class=" imgAcom" src="' + vec1[i][1] + '">');
}

$('.enc').click(function() {

    if ($(this).hasClass('seleccionCaja')) {
        $(this).removeClass('seleccionCaja')
    } else {
        $(this).addClass('seleccionCaja')

    }

});

function pregunta6() {
    var corr = 0;
    var inco = 0;
    for (var i = 1; i < 6; i++) {
        var acu = 0;
        if ($("#caja_img" + [i] + "").hasClass("seleccionCaja")) {
            var caja = $("div[id=caja_img" + [i] + "").find('img')[0].id;

            for (var j = 0; j < 1; j++) {
                if (caja == res1[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                corr++;
                $("#caja_img" + [i] + "").addClass('correctoi')
            } else {
                inco++;
                $("#caja_img" + [i] + "").removeClass('correctoi')
                $("#caja_img" + [i] + "").addClass('incorrectoi')
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 1) / 1;
    }

    var respuestas = document.getElementsByClassName("respuestas6");
    var soluciones = document.getElementsByClassName("solucion6");
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
    var corr = nota / 10;

    tpre6 = ((total + corr) / 2).toFixed(2);
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Pregunta7
function pregunta7() {
    var pre7a = document.getElementById("pre7a").value;
    tpre7 = pre7a;
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Pregunta8

p8vec1 = [
    '<li class="col-sm-6">En 7 semanas hay <input type="text" size="1" style="width:70px;border: solid 1px #E76E83;text-align: center;border-radius: 10px" class="respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="49"> días.</li><br>',
    '<li class="col-sm-6">En 3 días completos hay <input type="text" size="1" style="width:70px;border: solid 1px #E76E83;text-align: center;border-radius: 10px" class="respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="72"> horas.</li><br>',
    '<li class="col-sm-6">En 1 año hay <input type="text" size="1" style="width:70px;border: solid 1px #E76E83;text-align: center;border-radius: 10px" class="respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="365"> días.</li><br>',
    '<li class="col-sm-6">En 4 horas hay <input type="text" size="1" style="width:70px;border: solid 1px #E76E83;text-align: center;border-radius: 10px" class="respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="240"> minutos.</li><br>',
    '<li class="col-sm-6">En dos minutos hay <input type="text" size="1" style="width:70px;border: solid 1px #E76E83;text-align: center;border-radius: 10px" class="respuestas8"><input type="hidden" style="color:blue" class="solucion8" value="120"> segundos.</li><br>'
];
p8vec1.sort(f_randomico);
$('#li8').html(p8vec1);


function pregunta8() {
    var respuestas = document.getElementsByClassName("respuestas8");
    var soluciones = document.getElementsByClassName("solucion8");
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
    tpre8 = nota / 10;
    $("#pre8a").val(parseFloat(tpre8).toFixed(2));
}
// #endregion

// #region Pregunta6

var sum_total1 = 0;
var sum_total2 = 0;
var sum_total3 = 0;
var sum_total4 = 0;

$(".c_destino").html("");

$(".drag1").draggable({
    rever: "invalid",
    helper: "clone"
});
$(".drop1").droppable({
    accept: ".drag1",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop1")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b1") {
            sum_total1 += 10;
        } else if (str == "b2") {
            sum_total1 += 20;
        } else if (str == "b3") {
            sum_total1 += 1;
        } else if (str == "b4") {
            sum_total1 += 2;
        }


    }
});

$(".drop2").droppable({
    accept: ".drag1",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop2")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b1") {
            sum_total2 += 10;
        } else if (str == "b2") {
            sum_total2 += 20;
        } else if (str == "b3") {
            sum_total2 += 1;
        } else if (str == "b4") {
            sum_total2 += 2;
        }


    }
});

$(".drop3").droppable({
    accept: ".drag1",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop3")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b1") {
            sum_total3 += 10;
        } else if (str == "b2") {
            sum_total3 += 20;
        } else if (str == "b3") {
            sum_total3 += 1;
        } else if (str == "b4") {
            sum_total3 += 2;
        }


    }
});

$(".drop4").droppable({
    accept: ".drag1",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop4")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b1") {
            sum_total4 += 10;
        } else if (str == "b2") {
            sum_total4 += 20;
        } else if (str == "b3") {
            sum_total4 += 1;
        } else if (str == "b4") {
            sum_total4 += 2;
        }


    }
});

function pregunta9() {
    p1vec1 = ['11', '12', '21', '22'];
    var cor1 = 0;
    var cor2 = 0;
    var cor3 = 0;
    var cor4 = 0;

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total1 == p1vec1[i]) {
            cor1 = cor1 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor1;
        }
    }
    if (cor1 == 1) {
        f_ok(".p3res1");
    } else {
        f_no(".p3res1");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total2 == p1vec1[i]) {
            cor2 = cor2 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor2;
        }
    }
    if (cor2 == 1) {
        f_ok(".p3res2");
    } else {
        f_no(".p3res2");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total3 == p1vec1[i]) {
            cor3 = cor3 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor3;
        }
    }
    if (cor3 == 1) {
        f_ok(".p3res3");
    } else {
        f_no(".p3res3");
    }

    for (var i = 0; i < p1vec1.length; i++) {
        if (sum_total4 == p1vec1[i]) {
            cor4 = cor4 + 1;
            p1vec1[i] = 'aa';
        } else {
            cor4;
        }
    }
    if (cor4 == 1) {
        f_ok(".p3res4");
    } else {
        f_no(".p3res4");
    }






    var result9 = ((cor1 + cor2 + cor3 + cor4) * 1) / 4;
    tpre9 = parseFloat(result9);
    $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    // var pre7a = document.getElementById("pre7a").value;
    // if (pre7a == "") {
    //     alert("Pregunta 7: Califiqué la pregunta");
    // } else {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta9();
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4) +
        parseFloat(tpre5) +
        parseFloat(tpre6) +
        parseFloat(tpre7) +
        parseFloat(tpre8) +
        parseFloat(tpre9);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}
// }