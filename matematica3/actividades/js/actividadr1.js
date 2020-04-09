var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 2.5);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2.5);
});
// #region Random1
var random1 = [
    ['<img class="img-responsive" src="img/i3_p124_act1.jpg"><br><h4>ángulo <input type="text" size="1" style="width:70px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="obtuso"></h4>'],
    ['<img class="img-responsive" src="img/i1_p124_act1.jpg"><br><h4>ángulo <input type="text" size="1" style="width:70px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="agudo"></h4>'],
    ['<img class="img-responsive" src="img/i2_p124_act1.jpg"><br><h4>ángulo <input type="text" size="1" style="width:70px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="recto"></h4>']
];
var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
    $("#" + ranuno[i].id).html(
        '<span width="50px">' + random1[i][0] + "</span> "
    );
}
// #endregion

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
    tpre1 = nota / 4;
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

// #region Pregunta3
function pregunta3() {
    var pre3a = document.getElementById("pre3a").value;
    tpre3 = pre3a;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Random4
var random4 = [
    ['¿Cuál es la fruta menos preferida? <input type="text" size="1" style="width:70px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="La piña*piña">'],
    ['¿Cuántas personas prefieren la sandia? <input type="text" size="1" style="width:70px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="10">'],
    ['¿A cuántas personas entrevistaron? <input type="text" size="1" style="width:70px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="22">'],
    ['¿A cuántas personas les gustan las uvas? <input type="text" size="1" style="width:70px" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="4">']
];
var rancuatro = document.getElementsByClassName("imagen4");
random4.sort(f_randomico);
for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
        '<span width="50px">' + random4[i][0] + "</span> "
    );
}
// #endregion

// #region Pregunta4
function pregunta4() {
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
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
    tpre4 = nota / 4;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
        alert("Pregunta 2: Califiqué la pregunta");
    } else {
        var pre3a = document.getElementById("pre3a").value;
        if (pre3a == "") {
            alert("Pregunta 3: Califiqué la pregunta");
        } else {
            pregunta1();
            pregunta2();
            pregunta3();
            pregunta4();
            var Nf = parseFloat(tpre1) + parseFloat(tpre2);
            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
        }
    }
}
// #endregion