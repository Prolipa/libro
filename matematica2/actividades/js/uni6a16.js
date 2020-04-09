var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});

var p1vec1 = [];
var p1vec2 = [];
var p1vec3 = [];

n1 = parseInt((Math.random() * 50) + 40);
n2 = parseInt((Math.random() * 50) + 40);
n5 = parseInt((Math.random() * 50) + 40);

n3 = parseInt((Math.random() * 5) + 1);
n4 = parseInt((Math.random() * 5) + 1);
n6 = parseInt((Math.random() * 5) + 1);




for (i = 0; i < 10; i++) {
    p1vec1.push(n1);
    n1 = n1 - n3;
}

for (i = 0; i < 10; i++) {
    p1vec2.push(n2);
    n2 = n2 - n4;
}

for (i = 0; i < 10; i++) {
    p1vec3.push(n5);
    n5 = n5 - n6;
}

for (i = 0; i < 2; i++) {
    $("#p1num" + [i] + "").html(p1vec1[i]);
}

for (i = 0; i < 2; i++) {
    $("#p1num1" + [i] + "").html(p1vec2[i]);
}

for (i = 0; i < 2; i++) {
    $("#p1num2" + [i] + "").html(p1vec3[i]);
}

function pregunta1() {
    var corr = 0;
    p1res1 = [];
    p1res10 = [];
    p1res20 = [];
    for (var i = 2; i < 10; i++) {
        var n = $('#p1num' + [i] + '').val();
        p1res1.push(n);
        var n1 = $('#p1num1' + [i] + '').val();
        p1res10.push(n1);
        var n2 = $('#p1num2' + [i] + '').val();
        p1res20.push(n2);
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

    for (var i = 2; i < 10; i++) {
        if (p1vec3[i] == p1res20[i - 2]) {
            corr++;
            f_ok($('#p1num2' + [i] + ''));
        } else {
            corr;
            f_no($('#p1num2' + [i] + ''));
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

    var n2 = $('#sec3').val();
    if (n2 == (n6 * (-1))) {
        corr++;
        f_ok($('#sec3'));
    } else {
        corr;
        f_no($('#sec3'));
    }


    var total = ((corr * 2) / 27);
    tpre1 = total.toFixed(2);
    if (tpre1 >= 1) {
        f_ok($('#p2fe1'));
    } else {
        f_no($('#p2tr1'));
    }
}
// #endregion

p2vec1 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p2vec1.push(n1);
        p2vec1.push(n2);
        p2vec1.push(n1 - n2);
    }
}
var num1 = p2vec1[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsa' + [i] + '').html(num1[i]);
}
var num1 = p2vec1[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsa' + [i] + '').html(num1[i - 2]);
}

p2vec2 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p2vec2.push(n1);
        p2vec2.push(n2);
        p2vec2.push(n1 + n2);
    }
}
var num1 = p2vec2[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsb' + [i] + '').html(num1[i]);
}
var num1 = p2vec2[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsb' + [i] + '').html(num1[i - 2]);
}

p2vec3 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p2vec3.push(n1);
        p2vec3.push(n2);
        p2vec3.push(n1 - n2);
    }
}
var num1 = p2vec3[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsc' + [i] + '').html(num1[i]);
}
var num1 = p2vec3[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsc' + [i] + '').html(num1[i - 2]);
}

p2vec4 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p2vec4.push(n1);
        p2vec4.push(n2);
        p2vec4.push(n1 + n2);
    }
}
var num1 = p2vec4[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsd' + [i] + '').html(num1[i]);
}
var num1 = p2vec4[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsd' + [i] + '').html(num1[i - 2]);
}


function pregunta2() {
    var corr = 0;
    var resa1 = $("#nlra" + [0] + "").val() + $("#nlra" + [1] + "").val();

    if (p2vec1[2] == resa1) {
        corr++;
        f_ok($("#nlra0"));
        f_ok($("#nlra1"));
    } else {
        f_no($("#nlra0"));
        f_no($("#nlra1"));
        corr;
    }

    var resb1 = $("#nlrb" + [0] + "").val() + $("#nlrb" + [1] + "").val();

    if (p2vec2[2] == resb1) {
        corr++;
        f_ok($("#nlrb0"));
        f_ok($("#nlrb1"));
    } else {
        f_no($("#nlrb0"));
        f_no($("#nlrb1"));
        corr;
    }

    var resc1 = $("#nlrc" + [0] + "").val() + $("#nlrc" + [1] + "").val();

    if (p2vec3[2] == resc1) {
        corr++;
        f_ok($("#nlrc0"));
        f_ok($("#nlrc1"));
    } else {
        f_no($("#nlrc0"));
        f_no($("#nlrc1"));
        corr;
    }

    var resd1 = $("#nlrd" + [0] + "").val() + $("#nlrd" + [1] + "").val();

    if (p2vec4[2] == resd1) {
        corr++;
        f_ok($("#nlrd0"));
        f_ok($("#nlrd1"));
    } else {
        f_no($("#nlrd0"));
        f_no($("#nlrd1"));
        corr;
    }



    var result2 = (corr * 2) / 4;
    tpre2 = parseFloat(result2);
    if (tpre2 >= 1) {
        f_ok($('#p2fe2'));
    } else {
        f_no($('#p2tr2'));
    }

}
// #endregion

// #region Random3


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
// #endregion

// #region Pregunta3
function pregunta3() {
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



    var result3 = (corr * 2) / 4;
    tpre3 = parseFloat(result3);
    if (tpre3 >= 1) {
        f_ok($('#p2fe3'));
    } else {
        f_no($('#p2tr3'));
    }
}
// #endregion

// #region Random4


p4res1 = ['100', '200', '300', '400', '500', '600', '700', '800', '900', ];
p4res1.sort(f_randomico);

var nm1 = p4res1[0];
var nm2 = p4res1[1];
var nm3 = p4res1[2];
var nm4 = p4res1[3];
var nm5 = p4res1[4];
var nm6 = p4res1[5];
var nm7 = p4res1[6];
var nm8 = p4res1[7];


$("#nm1").val(nm1);
$("#nm1").attr("disabled", "true");

$("#nm4").val(nm4);
$("#nm4").attr("disabled", "true");

$("#nm5").val(nm5);
$("#nm5").attr("disabled", "true");

$("#nm8").val(nm8);
$("#nm8").attr("disabled", "true");

// conversión de numero a letras


var tra1 = 0;
var tra2 = 0;
var tra3 = 0;
var tra4 = 0;
var tra5 = 0;
var tra6 = 0;
var tra7 = 0;
var tra8 = 0;

function st() {

    tra1 = nn(nm1);
    tra2 = nn(nm2);
    tra3 = nn(nm3);
    tra4 = nn(nm4);
    tra5 = nn(nm5);
    tra6 = nn(nm6);
    tra7 = nn(nm7);
    tra8 = nn(nm8);

    $("#lt2").val(tra2);
    $("#lt2").attr("disabled", "true");

    $("#lt3").val(tra3);
    $("#lt3").attr("disabled", "true");

    $("#lt6").val(tra6);
    $("#lt6").attr("disabled", "true");

    $("#lt7").val(tra7);
    $("#lt7").attr("disabled", "true");

}

window.onload = st;
//
// #endregion

// #region Pregunta4
function pregunta4() {
    var cor = 0;
    var lt1 = document.getElementById("lt1").value;
    var lt4 = document.getElementById("lt4").value;
    var lt5 = document.getElementById("lt5").value;
    var lt8 = document.getElementById("lt8").value;

    if (lt1 == tra1) {
        f_ok("#lt1");
        cor = cor + 1;
    } else {
        f_no("#lt1");
        cor;
    }
    if (lt4 == tra4) {
        f_ok("#lt4");
        cor = cor + 1;
    } else {
        f_no("#lt4");
        cor;
    }
    if (lt5 == tra5) {
        f_ok("#lt5");
        cor = cor + 1;
    } else {
        f_no("#lt5");
        cor;
    }
    if (lt8 == tra8) {
        f_ok("#lt8");
        cor = cor + 1;
    } else {
        f_no("#lt8");
        cor;
    }

    var nume2 = document.getElementById("nm2").value;
    var nume3 = document.getElementById("nm3").value;
    var nume6 = document.getElementById("nm6").value;
    var nume7 = document.getElementById("nm7").value;

    if (nume2 == nm2) {
        f_ok("#nm2");
        cor = cor + 1;
    } else {
        f_no("#nm2");
        cor;
    }
    if (nume3 == nm3) {
        f_ok("#nm3");
        cor = cor + 1;
    } else {
        f_no("#nm3");
        cor;
    }
    if (nume6 == nm6) {
        f_ok("#nm6");
        cor = cor + 1;
    } else {
        f_no("#nm6");
        cor;
    }
    if (nume7 == nm7) {
        f_ok("#nm7");
        cor = cor + 1;
    } else {
        f_no("#nm7");
        cor;
    }

    var total = (cor * 2) / 8;
    if (total < 0) {
        total = 0;
        tpre4 = total.toFixed(2);
    } else {
        tpre4 = total.toFixed(2);
    }
    if (tpre4 >= 1) {
        f_ok($('#p2fe4'));
    } else {
        f_no($('#p2tr4'));
    }
}
// #endregion

var vec1 = [
    ["1", "img/i1_p246_act5.jpg"],
    ["2", "img/i2_p246_act5.jpg"],
    ["3", "img/i3_p246_act5.jpg"],
    ["4", "img/i4_p246_act5.jpg"],
    ["5", "img/i5_p246_act5.jpg"]
]

var res1 = [
    ["img/i5_p246_act5.jpg"]
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


// #region Pregunta5
function pregunta5() {
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
    var corr = nota / 10;

    tpre5 = ((total + corr) / 2).toFixed(2);
    if (tpre5 >= 0.5) {
        f_ok($('#p2fe5'));
    } else {
        f_no($('#p2tr5'));
    }
}
// #endregion

// #region Pregunta6
function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
    if (tpre6 >= 0.5) {
        f_ok($('#p2fe6'));
    } else {
        f_no($('#p2tr6'));
    }
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre6a = document.getElementById("pre6a").value;
    if (pre6a == "") {
        alert("Pregunta 6: Califiqué la pregunta");
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
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}