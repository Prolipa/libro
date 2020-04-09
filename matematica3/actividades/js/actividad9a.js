var tpre1 = 0;
var tpre2 = 0;

// #region Random1
var random1 = [
    [
        '<table bordercolor="orange" border="1" style="text-align: center"><tr><td></td><td width="33%"><font color="green"><b>C</b></font></td><td width="33%"><font color="purple"><b>D</b></font></td><td width="33%"><font color="blue"><b>U</b></font></td></tr><tr><td><h4><b></b></h4></td><td><h4><b>6</b></h4></td><td><h4><b>7</b></h4></td><td><h4><b>5</b></h4></td></tr><tr><td><h4><b>&nbsp;-&nbsp;</b></h4></td><td><h4><b>1</b></h4></td><td><h4><b>4</b></h4></td><td><h4><b>3</b></h4></td></tr><tr><td></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="5"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></font></h4></td></tr></table>'
    ],
    [
        '<table bordercolor="orange" border="1" style="text-align: center"><tr><td></td><td width="33%"><font color="green"><b>C</b></font></td> <td width="33%"><font color="purple"><b>D</b></font></td><td width="33%"><font color="blue"><b>U</b></font></td></tr><tr><td><h4><b></b></h4></td><td><h4><b>9</b></h4></td><td><h4><b>6</b></h4></td><td><h4><b>6</b></h4></td></tr><tr><td><h4><b>&nbsp;-&nbsp;</b></h4></td><td><h4><b>7</b></h4></td><td><h4><b>5</b></h4></td><td><h4><b>4</b></h4></td></tr><tr><td></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></font></h4></td></tr></table>'
    ],
    [
        '<table bordercolor="orange" border="1" style="text-align: center"><tr><td></td><td width="33%"><font color="green"><b>C</b></font></td><td width="33%"><font color="purple"><b>D</b></font></td><td width="33%"><font color="blue"><b>U</b></font></td></tr><tr><td><h4><b></b></h4></td><td><h4><b>9</b></h4></td><td><h4><b>8</b></h4></td><td><h4><b>4</b></h4></td></tr><tr><td><h4><b>&nbsp;-&nbsp;</b></h4></td><td><h4><b>6</b></h4></td><td><h4><b>7</b></h4></td><td><h4><b>3</b></h4></td></tr><tr><td></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></font></h4></td></tr></table>'
    ],
    [
        '<table bordercolor="orange" border="1" style="text-align: center"><tr><td></td> <td width="33%"><font color="green"><b>C</b></font></td><td width="33%"><font color="purple"><b>D</b></font></td><td width="33%"><font color="blue"><b>U</b></font></td></tr><tr><td><h4><b></b></h4></td><td><h4><b>3</b></h4></td><td><h4><b>4</b></h4></td><td><h4><b>6</b></h4></td></tr><tr><td><h4><b>&nbsp;-&nbsp;</b></h4></td><td><h4><b>2</b></h4></td><td><h4><b>0</b></h4></td><td><h4><b>4</b></h4></td></tr><tr><td></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"></font></h4></td><td><h4><font color="brown"><input type="text" size="1"  style="width:50px" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></font></h4></td></tr></table>'
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
    tpre1 = ((nota * 7) / 10);
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
    tpre2 = ((nota * 3) / 10);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}
// #endregion