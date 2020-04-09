var tpre1 = 0;
var tpre2 = 0;

// #region Random1
var p1vec1 = [];
var p1vec2 = [];

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

// #endregion

// #region Pregunta1

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
        if (p1vec1[i] == p1res1[i-2]) {
            corr++;
            f_ok($('#p1num' + [i] + ''));
        } else {
            corr;
            f_no($('#p1num' + [i] + ''));
        }
    }

    for (var i = 2; i < 10; i++) {
        if (p1vec2[i] == p1res10[i-2]) {
            corr++;
            f_ok($('#p1num1' + [i] + ''));
        } else {
            corr;
            f_no($('#p1num1' + [i] + ''));
        }
    }
    var n = $('#sec1').val();
    if (n == (n3*(-1))) {
            corr++;
            f_ok($('#sec1'));
        } else {
            corr;
            f_no($('#sec1'));
        }

        var n1 = $('#sec2').val();
    if (n1 == (n4*(-1))) {
            corr++;
            f_ok($('#sec2'));
        } else {
            corr;
            f_no($('#sec2'));
        }


    var total = ((corr * 5) / 18);
    tpre1 = total.toFixed(2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
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
    tpre2 = nota / 2;
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