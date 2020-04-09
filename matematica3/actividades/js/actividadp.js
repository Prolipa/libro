var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});

// #region Random1
var random1 = [
    [
        '<h4>A <select id="cbounod" ><option value="1">Seleccione</option><option value="2">⊂</option><option value="3">⊄</option></select> L</h4>'
    ],
    [
        '<h4>oso <select id="cbounob"><option value="1">Seleccione</option><option value="2">⊂</option><option value="3">⊄</option></select> L</h4>'
    ],
    [
        '<h4>perro <select id="cbounoe" ><option value="1">Seleccione</option><option value="2">⊂</option><option value="3">⊄</option></select> A</h4>'
    ],
    [
        '<h4>conejo <select id="cbounoc"><option value="1">Seleccione</option><option value="2">⊂</option><option value="3">⊄</option></select> L</h4>'
    ],
    [
        '<h4>tortuga <select id="cbounoa"><option value="1">Seleccione</option><option value="2">⊂</option><option value="3">⊄</option></select> A</h4>'
    ],
    [
        '<h4>oso <select id="cbounof" ><option value="1">Seleccione</option><option value="2">⊂</option><option value="3">⊄</option></select> L</h4>'
    ]
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
    var cor = 0;
    var inc = 0;

    var cbounoa = document.getElementById("cbounoa").value;
    var cbounob = document.getElementById("cbounob").value;
    var cbounoc = document.getElementById("cbounoc").value;
    var cbounod = document.getElementById("cbounod").value;
    var cbounoe = document.getElementById("cbounoe").value;
    var cbounof = document.getElementById("cbounof").value;

    if (cbounoa == "2") {
        cor = cor + 1;
        $("#cbounoa").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbounoa").removeClass("correcto");
        $("#cbounoa").addClass("incorrecto");
    }
    if (cbounob == "3") {
        cor = cor + 1;
        $("#cbounob").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbounob").removeClass("correcto");
        $("#cbounob").addClass("incorrecto");
    }
    if (cbounoc == "2") {
        cor = cor + 1;
        $("#cbounoc").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbounoc").removeClass("correcto");
        $("#cbounoc").addClass("incorrecto");
    }
    if (cbounod == "2") {
        cor = cor + 1;
        $("#cbounod").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbounod").removeClass("correcto");
        $("#cbounod").addClass("incorrecto");
    }
    if (cbounoe == "3") {
        cor = cor + 1;
        $("#cbounoe").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbounoe").removeClass("correcto");
        $("#cbounoe").addClass("incorrecto");
    }
    if (cbounof == "3") {
        cor = cor + 1;
        $("#cbounof").addClass("correcto");
    } else {
        inc = inc + 1;
        $("#cbounof").removeClass("correcto");
        $("#cbounof").addClass("incorrecto");
    }

    var total = (cor * 1) / 6;
    if (total < 0) {
        total = 0;
        tpre1 = total.toFixed(2);
    } else {
        tpre1 = total.toFixed(2);
    }
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
    tpre2 = nota / 10;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3
var random3 = [
    [
        '<h4><b>987 - 654</b></h4>    <table bordercolor="orange" border="1" style="text-align: center">            <tr>                <td></td>                <td width="33%"><font color="green"><b>C</b></font></td>                <td width="33%"><font color="purple"><b>D</b></font></td>                <td width="33%"><font color="blue"><b>U</b></font></td>            </tr>            <tr>                    <td></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="9"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="8"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="7"></h4></td>            </tr>            <tr>                    <td><h4>-</h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="6"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="5"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="4"></h4></td>            </tr>            <tr>                <td></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="3"></font></h4></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="3"></font></h4></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="3"></font></h4></td>            </tr>        </table><br>'
    ],
    [
        '<h4><b>883 + 581</b></h4>    <table bordercolor="orange" border="1" style="text-align: center">            <tr>                <td></td>                <td width="33%"><font color="green"><b>C</b></font></td>                <td width="33%"><font color="purple"><b>D</b></font></td>                <td width="33%"><font color="blue"><b>U</b></font></td>            </tr>            <tr>                    <td></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="8"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="8"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="3"></h4></td>            </tr>            <tr>                    <td><h4>-</h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="5"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="8"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="1"></h4></td>            </tr>            <tr>                <td></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="3"></font></h4></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="0"></font></h4></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="2"></font></h4></td>            </tr>        </table><br>'
    ],
    [
        '<h4><b>129 + 450</b></h4>    <table bordercolor="orange" border="1" style="text-align: center">            <tr>                <td></td>                <td width="33%"><font color="green"><b>C</b></font></td>                <td width="33%"><font color="purple"><b>D</b></font></td>                <td width="33%"><font color="blue"><b>U</b></font></td>            </tr>            <tr>                    <td></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="1"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                   <input type="hidden" style="color:blue" class="solucion3" value="2"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="9"></h4></td>            </tr>            <tr>                    <td><h4>+</h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="4"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="5"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="0"></h4></td>            </tr>            <tr>                <td></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="5"></font></h4></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="7"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="9"></font></h4></td></tr></table><br>'
    ],
    [
        '<h4><b>472 + 325</b></h4>    <table bordercolor="orange" border="1" style="text-align: center">            <tr>                <td></td>                <td width="33%"><font color="green"><b>C</b></font></td>                <td width="33%"><font color="purple"><b>D</b></font></td>                <td width="33%"><font color="blue"><b>U</b></font></td>            </tr>            <tr>                    <td></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="4"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="7"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="2"></h4></td>            </tr>            <tr>                    <td><h4>+</h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="3"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="2"></h4></td>                <td><h4><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="5"></h4></td>            </tr>            <tr>                <td></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="7"></font></h4></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="9"></font></h4></td>                <td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas3">                    <input type="hidden" style="color:blue" class="solucion3" value="7"></font></h4></td>            </tr>        </table><br>'
    ]
];
var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
        '<span width="50px">' + random3[i][0] + "</span> "
    );
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
    tpre3 = (nota * 4) / 10;
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
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
    tpre4 = nota / 10;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6
function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion

// #region Random7
var random7 = [
    [
        '<table class="table" style="text-align: center" border="1">    <tr><td WIDTH="50%"><h4><b>Pinturas</b></h4></td><td><h4><b><input type="text" size="1" style="width:100px" class=" border-blue respuestas7">        <input type="hidden" style="color:blue" class="solucion7" value="xxxx"></b></h4></td></tr></table>'
    ],
    [
        '<table class="table" style="text-align: center" border="1">    <tr>        <td WIDTH="50%">            <h4><b>Lápiz</b></h4>        </td>        <td WIDTH="50%">            <h4><b><input type="text" size="1" style="width:100px"                         class=" border-blue respuestas7">                    <input type="hidden" style="color:blue" class="solucion7" value="xxxxxxx"></b></h4>        </td>    </tr></table>'
    ],
    [
        '<table class="table" style="text-align: center" border="1">    <tr><td WIDTH="50%"><h4><b>Borrador</b></h4></td><td><h4><b><input type="text" size="1" style="width:100px"         class=" border-blue respuestas7">    <input type="hidden" style="color:blue" class="solucion7" value="xxxxxxxxx"></b></h4></td></tr></table>'
    ]
];
var ransiete = document.getElementsByClassName("imagen7");
random7.sort(f_randomico);
for (i = 0; i < ransiete.length; i++) {
    $("#" + ransiete[i].id).html(
        '<span width="50px">' + random7[i][0] + "</span> "
    );
}
// #endregion

// #region Pregunta7
function pregunta7() {
    var respuestas = document.getElementsByClassName("respuestas7");
    var soluciones = document.getElementsByClassName("solucion7");
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
    tpre7 = nota / 10;
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var cbounoa = document.getElementById("cbounoa").value;
    var cbounob = document.getElementById("cbounob").value;
    var cbounoc = document.getElementById("cbounoc").value;
    var cbounod = document.getElementById("cbounod").value;
    var cbounoe = document.getElementById("cbounoe").value;
    var cbounof = document.getElementById("cbounof").value;
    if (
        cbounoa == "1" ||
        cbounob == "1" ||
        cbounoc == "1" ||
        cbounod == "1" ||
        cbounoe == "1" ||
        cbounof == "1"
    ) {
        alert("Pregunta 1: Seleccione todas las respuestas posibles");
    } else {
        var pre5a = document.getElementById("pre5a").value;
        if (pre5a == "") {
            alert("Pregunta 5: Califiqué la pregunta");
        } else {
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
                pregunta7();
                var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5) + parseFloat(tpre6) + parseFloat(tpre7);
                var Vtotal = Nf.toFixed(2);
                $("#txtNota").html(Vtotal);
                document.getElementById("bt_comprobar").disabled = true;
            }
        }
    }
}
// #endregion