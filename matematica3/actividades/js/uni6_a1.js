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
    validMaxIngreso(document.getElementById("pre7a"), 0.5);
});

p1vec1 = [
    '<li class="col-sm-3 table-responsive">                                            <table border="1" bordercolor="orange">                                                <tbody align="center">                                                    <tr>                                                        <td></td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="green"><b>C</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#D81B60"><b>D</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#2E86C1"><b>U</b></font>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><b>8</b></td>                                                        <td><b>2</b></td>                                                        <td><b>7</b></td>                                                    </tr>                                                    <tr>                                                        <td><b>+</b>                                                        </td>                                                        <td><b>1</b></td>                                                        <td><b>6</b></td>                                                        <td><b>2</b></td>                                                    </tr>                                                </tbody>                                                <tbody align="center">                                                    <tr>                                                        <td style="border-top: solid 2px black;"></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></b></td>                                                    </tr>                                                </tbody>                                            </table><br>                                            <table border="1" bordercolor="orange">                                                <tbody align="center">                                                    <tr>                                                        <td></td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="green"><b>C</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#D81B60"><b>D</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#2E86C1"><b>U</b></font>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></b></td>                                                    </tr>                                                    <tr>                                                        <td><b>-</b>                                                        </td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></b></td>                                                    </tr>                                                </tbody>                                                <tbody align="center">                                                    <tr>                                                        <td style="border-top: solid 2px black;"></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"></b></td>                                                    </tr>                                                </tbody>                                            </table>                                            <br>                                        </li>',
    '<li class="col-sm-3 table-responsive">                                            <table border="1" bordercolor="orange">                                                <tbody align="center">                                                    <tr>                                                        <td></td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="green"><b>C</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#D81B60"><b>D</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#2E86C1"><b>U</b></font>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><b>9</b></td>                                                        <td><b>3</b></td>                                                        <td><b>8</b></td>                                                    </tr>                                                    <tr>                                                        <td><b>-</b>                                                        </td>                                                        <td><b>3</b></td>                                                        <td><b>2</b></td>                                                        <td><b>8</b></td>                                                    </tr>                                                </tbody>                                                <tbody align="center">                                                    <tr>                                                        <td style="border-top: solid 2px black;"></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0"></b></td>                                                    </tr>                                                </tbody>                                            </table><br>                                            <table border="1" bordercolor="orange">                                                <tbody align="center">                                                    <tr>                                                        <td></td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="green"><b>C</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#D81B60"><b>D</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#2E86C1"><b>U</b></font>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"></b></td>                                                    </tr>                                                    <tr>                                                        <td><b>+</b>                                                        </td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="0"></b></td>                                                    </tr>                                                </tbody>                                                <tbody align="center">                                                    <tr>                                                        <td style="border-top: solid 2px black;"></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"></b></td>                                                    </tr>                                                </tbody>                                            </table>                                            <br>                                        </li>',
    '<li class="col-sm-3 table-responsive">                                            <table border="1" bordercolor="orange">                                                <tbody align="center">                                                    <tr>                                                        <td></td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="green"><b>C</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#D81B60"><b>D</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#2E86C1"><b>U</b></font>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><b>4</b></td>                                                        <td><b>2</b></td>                                                        <td><b>6</b></td>                                                    </tr>                                                    <tr>                                                        <td><b>+</b>                                                        </td>                                                        <td><b>2</b></td>                                                        <td><b>6</b></td>                                                        <td><b>9</b></td>                                                    </tr>                                                </tbody>                                                <tbody align="center">                                                    <tr>                                                        <td style="border-top: solid 2px black;"></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="5"></b></td>                                                    </tr>                                                </tbody>                                            </table><br>                                            <table border="1" bordercolor="orange">                                                <tbody align="center">                                                    <tr>                                                        <td></td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="green"><b>C</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#D81B60"><b>D</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#2E86C1"><b>U</b></font>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="5"></b></td>                                                    </tr>                                                    <tr>                                                        <td><b>-</b>                                                        </td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="9"></b></td>                                                    </tr>                                                </tbody>                                                <tbody align="center">                                                    <tr>                                                        <td style="border-top: solid 2px black;"></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"></b></td>                                                    </tr>                                                </tbody>                                            </table>                                            <br>                                        </li>',
    '<li class="col-sm-3 table-responsive">                                            <table border="1" bordercolor="orange">                                                <tbody align="center">                                                    <tr>                                                        <td></td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="green"><b>C</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#D81B60"><b>D</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#2E86C1"><b>U</b></font>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><b>7</b></td>                                                        <td><b>4</b></td>                                                        <td><b>5</b></td>                                                    </tr>                                                    <tr>                                                        <td><b>-</b>                                                        </td>                                                        <td><b>3</b></td>                                                        <td><b>2</b></td>                                                        <td><b>8</b></td>                                                    </tr>                                                </tbody>                                                <tbody align="center">                                                    <tr>                                                        <td style="border-top: solid 2px black;"></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"></b></td>                                                    </tr>                                                </tbody>                                            </table><br>                                            <table border="1" bordercolor="orange">                                                <tbody align="center">                                                    <tr>                                                        <td></td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="green"><b>C</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#D81B60"><b>D</b></font>                                                        </td>                                                        <td bgcolor="#FDEFDF">                                                            <font color="#2E86C1"><b>U</b></font>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"></b></td>                                                    </tr>                                                    <tr>                                                        <td><b>+</b>                                                        </td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"></b></td>                                                        <td><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"></b></td>                                                    </tr>                                                </tbody>                                                <tbody align="center">                                                    <tr>                                                        <td style="border-top: solid 2px black;"></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="7"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"></b></td>                                                        <td style="border-top: solid 2px black;"><b><input maxlength="1" type="text" size="1" style="width:50px;text-align: center;"  style="text-align: center" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="5"></b></td>                                                    </tr>                                                </tbody>                                            </table>                                            <br>                                        </li>'
];
p1vec1.sort(f_randomico);
$('#li1').html(p1vec1);

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
    tpre1 = nota / 10;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
n1 = parseInt(Math.random() * 90 + 1);
n2 = parseInt(Math.random() * 90 + 1);
n3 = n1 + n2;
$('#a1').html(n1);
$('#a2').html(n2);
$('#a3').html(n3);
p102vec1 = [
    '' + n3 + '-' + n2 + '' + n1 + '',
    '' + n1 + '+' + n2 + '' + n3 + '',
    '' + n3 + '-' + n1 + '' + n2 + '',
    '' + n2 + '+' + n1 + '' + n3 + ''
];
var p2res1 = [];
var p2res2 = [];
var p2res3 = [];
var p2res4 = [];

function pregunta2() {
    var corr = 0;



    for (var i = 1; i < 5; i++) {
        var n = $("#resa" + [i] + "").val();
        p2res1.push(n);
    }

    for (var i = 1; i < 5; i++) {
        var n = $("#resb" + [i] + "").val();
        p2res2.push(n);
    }

    for (var i = 1; i < 5; i++) {
        var n = $("#resc" + [i] + "").val();
        p2res3.push(n);
    }

    for (var i = 1; i < 5; i++) {
        var n = $("#resd" + [i] + "").val();
        p2res4.push(n);
    }
    p2vec2 = [];
    p2vec3 = ['a', 'b', 'c', 'd'];

    p2vec2.push(p2res1[0] + p2res1[1] + p2res1[2] + p2res1[3]);
    p2vec2.push(p2res2[0] + p2res2[1] + p2res2[2] + p2res2[3]);
    p2vec2.push(p2res3[0] + p2res3[1] + p2res3[2] + p2res3[3]);
    p2vec2.push(p2res4[0] + p2res4[1] + p2res4[2] + p2res4[3]);


    for (var i = 0; i < 4; i++) {
        var cont = 0;
        for (var j = 0; j < 4; j++) {
            if (p2vec2[i] == p102vec1[j]) {
                cont++;
                p102vec1[j] = 'aa';
            } else {
                cont;
            }
        }
        if (cont == 1) {

            corr++;
            f_ok($("#res" + p2vec3[i] + "1"));
            f_ok($("#res" + p2vec3[i] + "2"));
            f_ok($("#res" + p2vec3[i] + "3"));
            f_ok($("#res" + p2vec3[i] + "4"));
        } else {
            corr;

            f_no($("#res" + p2vec3[i] + "1"));
            f_no($("#res" + p2vec3[i] + "2"));
            f_no($("#res" + p2vec3[i] + "3"));
            f_no($("#res" + p2vec3[i] + "4"));
        }
    }
    var res = (corr * 1) / 4;
    tpre2 = parseFloat(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

var vn = [];
var n = [];
for (i = 0; i < 5; i++) {
    numero = parseInt(Math.random() * 30 + 1);

    n.push(numero);
    $("#p4r" + [i] + "").html(n[i]);

}
for (i = 0; i < 3; i++) {
    vn.push(n[i] * 2);
}
for (i = 0; i < 3; i++) {
    vn.push(n[i] * 3);
}

function pregunta3() {
    var corr = 0;
    for (i = 0; i < 6; i++) {
        var resp = $("#p4m" + [i] + "").val();
        if (resp == vn[i]) {
            corr++;
            f_ok($("#p4m" + [i] + ""));
        } else {
            corr;
            f_no($("#p4m" + [i] + ""));
        }
    }
    var res = (corr * 0.5) / 6;
    tpre3 = parseFloat(res);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4

p4vec1 = [
    '<li class="col-sm-6">29 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30"><br><br></li>',
    '<li class="col-sm-6">91 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="90"><br><br></li>',
    '<li class="col-sm-6">33 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30"><br><br></li>',
    '<li class="col-sm-6">66 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="70"><br><br></li>',
    '<li class="col-sm-6">55 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="60"><br><br></li>',
    '<li class="col-sm-6">12 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="10"><br><br></li>',
    '<li class="col-sm-6">27 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="30"><br><br></li>',
    '<li class="col-sm-6">15 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="20"><br><br></li>',
    '<li class="col-sm-6">88 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="90"><br><br></li>',
    '<li class="col-sm-6">37 = <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;" style="text-align: center" class=" border-blue respuestas4"><input type="hidden" style="color:blue" class="solucion4" value="40"><br><br></li>'
];
p4vec1.sort(f_randomico);
$('#li4').html(p4vec1);

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

var pal1 = [
    '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p216_act5.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p216_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c2" alt="3" src="img/i3_p216_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
    '<img class="img-responsive drag3 c3" alt="4" src="img/i4_p216_act5.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];
var pal2 = [
    '<div><b>5 X 3</b></div>',
    '<div><b>3 X 5</b></div>',
    '<div><b>9 X 7</b></div>',
    '<div><b>7 X 9</b></div>'
];

pal1.sort(f_randomico);
var p2vec1 = ['1', '2', '4', '3'];
var p2aux2 = [];
$(".textos").append(pal1);
var myArray2 = ['0', '1', '2', '3'];
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

function pregunta5() {
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

    var p2im3 = $('.p2im4 > img').attr('alt');
    if (p2im3 == p2aux2[3]) {
        p2cont1++;
        f_ok($('.p2im4'));
    } else {
        f_no($('.p2im4'));
    }

    var total = ((p2cont1 * 1) / 4)
    tpre5 = total;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

//pregunta 6


function pregunta6() {
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
    tpre6 = nota / 10;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
//

//pregunta 7

function pregunta7() {
    var pre7a = document.getElementById("pre7a").value;
    tpre7 = pre7a;
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
}

//pregunta 8


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
//

//pregunta 9

p9vec1 = [
    '<li>Es muy probable que Pamela coma carne de res. <input maxlength="1"  type="text" size="1" style="width:50px;text-align: centertext-align: center;border-radius:px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas9"><input type="hidden" style="color:blue" class="solucion9" value="f"><br><br></li>',
    '<li>Es improbable que Pamela coma muchos vegetales. <input maxlength="1"  type="text" size="1" style="width:50px;text-align: centertext-align: center;border-radius:px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas9"><input type="hidden" style="color:blue" class="solucion9" value="f"><br><br></li>',
    '<li>Es muy probable que Pamela tome agua. <input maxlength="1"  type="text" size="1" style="width:50px;text-align: centertext-align: center;border-radius:px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas9"><input type="hidden" style="color:blue" class="solucion9" value="v"><br><br></li>',
    '<li>Es muy probable que Pamela coma frutas. <input maxlength="1"  type="text" size="1" style="width:50px;text-align: centertext-align: center;border-radius:px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas9"><input type="hidden" style="color:blue" class="solucion9" value="v"><br><br></li>'
];
p9vec1.sort(f_randomico);
$('#li9').html(p9vec1);


function pregunta9() {
    var respuestas = document.getElementsByClassName("respuestas9");
    var soluciones = document.getElementsByClassName("solucion9");
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
    tpre9 = nota / 10;
    $("#pre9a").val(parseFloat(tpre9).toFixed(2));
}
//

// #region Calculo Nota Final
function NotaFinal() {
    var pre7a = document.getElementById("pre7a").value;
    if (pre7a == "") {
        alert("Pregunta 7: Califiqué la pregunta");
    } else {
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
    }
}