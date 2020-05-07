var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Random1
p1vec1 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 1);
    n2 = parseInt(Math.random() * 48 + 1);
    if (n1 < n2) {
        i--;
    } else {
        p1vec1.push(n1);
        p1vec1.push(n2);
        p1vec1.push(n1 + n2);
    }
}
for (var i = 0; i < 2; i++) {
    $('#rana' + [i] + '').html(p1vec1[i]);
}

p1vec2 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 5);
    n2 = parseInt(Math.random() * 48 + 5);
    if (n1 < n2) {
        i--;
    } else {
        p1vec2.push(n1);
        p1vec2.push(n2);
        p1vec2.push(n1 - n2);
    }
}
for (var i = 0; i < 2; i++) {
    $('#ranb' + [i] + '').html(p1vec2[i]);
}

p1vec3 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 5);
    n2 = parseInt(Math.random() * 48 + 5);
    if (n1 < n2) {
        i--;
    } else {
        p1vec3.push(n1);
        p1vec3.push(n2);
        p1vec3.push(n1 + n2);
    }
}
for (var i = 0; i < 2; i++) {
    $('#ranc' + [i] + '').html(p1vec3[i]);
}

p1vec4 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 5);
    n2 = parseInt(Math.random() * 48 + 5);
    if (n1 < n2) {
        i--;
    } else {
        p1vec4.push(n1);
        p1vec4.push(n2);
        p1vec4.push(n1 - n2);
    }
}
for (var i = 0; i < 2; i++) {
    $('#rand' + [i] + '').html(p1vec4[i]);
}


// #endregion

// #region Pregunta1

function pregunta1() {
    var corr = 0;
    var resa1 = $("#nlra" + [0] + "").val() + $("#nlra" + [1] + "").val();
    var resa2 = $("#nlra" + [2] + "").val() + $("#nlra" + [3] + "").val();
    var resa3 = $("#nlra" + [4] + "").val() + $("#nlra" + [5] + "").val();

    if (p1vec1[0] == resa1) {
        corr++;
        f_ok($("#nlra0"));
        f_ok($("#nlra1"));
    } else {
        f_no($("#nlra0"));
        f_no($("#nlra1"));
        corr;
    }

    if (p1vec1[1] == resa2) {
        corr++;
        f_ok($("#nlra2"));
        f_ok($("#nlra3"));
    } else {
        f_no($("#nlra2"));
        f_no($("#nlra3"));
        corr;
    }

    if (p1vec1[2] == resa3) {
        corr++;
        f_ok($("#nlra4"));
        f_ok($("#nlra5"));
    } else {
        f_no($("#nlra4"));
        f_no($("#nlra5"));
        corr;
    }

    var resb1 = $("#nlrb" + [0] + "").val() + $("#nlrb" + [1] + "").val();
    var resb2 = $("#nlrb" + [2] + "").val() + $("#nlrb" + [3] + "").val();
    var resb3 = $("#nlrb" + [4] + "").val() + $("#nlrb" + [5] + "").val();

    if (p1vec2[0] == resb1) {
        corr++;
        f_ok($("#nlrb0"));
        f_ok($("#nlrb1"));
    } else {
        f_no($("#nlrb0"));
        f_no($("#nlrb1"));
        corr;
    }

    if (p1vec2[1] == resb2) {
        corr++;
        f_ok($("#nlrb2"));
        f_ok($("#nlrb3"));
    } else {
        f_no($("#nlrb2"));
        f_no($("#nlrb3"));
        corr;
    }

    if (p1vec2[2] == resb3) {
        corr++;
        f_ok($("#nlrb4"));
        f_ok($("#nlrb5"));
    } else {
        f_no($("#nlrb4"));
        f_no($("#nlrb5"));
        corr;
    }

    var resc1 = $("#nlrc" + [0] + "").val() + $("#nlrc" + [1] + "").val();
    var resc2 = $("#nlrc" + [2] + "").val() + $("#nlrc" + [3] + "").val();
    var resc3 = $("#nlrc" + [4] + "").val() + $("#nlrc" + [5] + "").val();

    if (p1vec3[0] == resc1) {
        corr++;
        f_ok($("#nlrc0"));
        f_ok($("#nlrc1"));
    } else {
        f_no($("#nlrc0"));
        f_no($("#nlrc1"));
        corr;
    }

    if (p1vec3[1] == resc2) {
        corr++;
        f_ok($("#nlrc2"));
        f_ok($("#nlrc3"));
    } else {
        f_no($("#nlrc2"));
        f_no($("#nlrc3"));
        corr;
    }

    if (p1vec3[2] == resc3) {
        corr++;
        f_ok($("#nlrc4"));
        f_ok($("#nlrc5"));
    } else {
        f_no($("#nlrc4"));
        f_no($("#nlrc5"));
        corr;
    }

    var resd1 = $("#nlrd" + [0] + "").val() + $("#nlrd" + [1] + "").val();
    var resd2 = $("#nlrd" + [2] + "").val() + $("#nlrd" + [3] + "").val();
    var resd3 = $("#nlrd" + [4] + "").val() + $("#nlrd" + [5] + "").val();

    if (p1vec4[0] == resd1) {
        corr++;
        f_ok($("#nlrd0"));
        f_ok($("#nlrd1"));
    } else {
        f_no($("#nlrd0"));
        f_no($("#nlrd1"));
        corr;
    }

    if (p1vec4[1] == resd2) {
        corr++;
        f_ok($("#nlrd2"));
        f_ok($("#nlrd3"));
    } else {
        f_no($("#nlrd2"));
        f_no($("#nlrd3"));
        corr;
    }

    if (p1vec4[2] == resd3) {
        corr++;
        f_ok($("#nlrd4"));
        f_ok($("#nlrd5"));
    } else {
        f_no($("#nlrd4"));
        f_no($("#nlrd5"));
        corr;
    }



    var result1 = (corr * 4) / 12;
    tpre1 = parseFloat(result1);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2

$('.enc2').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')

    } else {
        $(this).addClass('subrayar')
    }
});


p2vec1 = ['63', '89', '79'];
p2vec1.sort(f_randomico);
for (var i = 0; i < 3; i++) {
    $('#' + [i] + '').html(p2vec1[i]);
}

p2vec2 = ['31', '78', '59'];
p2vec2.sort(f_randomico);
j = 0;
for (var i = 3; i < 6; i++) {

    $('#' + [i] + '').html(p2vec2[j]);
    j++;
}

p2vec3 = ['76', '38', '52'];
p2vec3.sort(f_randomico);
j = 0;
for (var i = 6; i < 9; i++) {

    $('#' + [i] + '').html(p2vec3[j]);
    j++;
}

p2vec4 = ['67', '76', '66'];
p2vec4.sort(f_randomico);
j = 0;
for (var i = 9; i < 12; i++) {

    $('#' + [i] + '').html(p2vec4[j]);
    j++;
}

// #endregion

// #region Pregunta2
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

    var corr = 0;
    var inc = 0;
    for (var i = 0; i <= 11; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if (($('#' + [i] + '').hasClass("subrayar") == true)) {


            if (caja == '89' || caja == '59' || caja == '52' || caja == '67') {
                corr++;
                $('#' + [i] + '').addClass('correctoi');

            } else {
                inc++;
                $('#' + [i] + '').addClass('incorrectoi');

            }
        }
    }
    var res = ((corr - inc) * 2) / 4;
    if (res < 0) {
        res = 0;
    } else {
        res;
    }


    tpre2 = (nota / 5)+(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));

}
// #endregion

// #region Random3

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
    tpre3 = nota / 5;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}