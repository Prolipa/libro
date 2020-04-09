var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
p1vec1=
[
'<li class="col-sm-6">                            <div class="table-responsive">                                <table>                                    <tr>                                        <td>5</td>                                        <td>x</td>                                        <td>5</td>                                        <td>=&nbsp;&nbsp;</td>                                        <td><input maxlength="2" type="text" size="1" style="width:30px;text-align: centertext-align: center;border: solid 1px green;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="25"></td>                                    </tr>                                    <tr>                                        <td colspan="3"><img src="img/i1_p219_act1.jpg"></td>                                        <td></td>                                        <td><img src="img/i2_p219_act1.jpg"></td>                                    </tr>                                    <tr>                                        <td colspan="3">                                            <input type="text" size="1" style="width:100px;text-align: centertext-align: center;border-radius:10px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="factores">                                        </td>                                        <td></td>                                        <td><input type="text" size="1" style="width:100px;text-align: centertext-align: center;border-radius:10px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="producto"></td>                                    </tr>                                </table>                            </div>                            <br><br>                        </li>',
'<li class="col-sm-6">                            <div class="table-responsive">                                <table>                                    <tr>                                        <td>2</td>                                        <td>x</td>                                        <td>8</td>                                        <td>=&nbsp;&nbsp;</td>                                        <td><input maxlength="2" type="text" size="1" style="width:30px;text-align: centertext-align: center;border: solid 1px green;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="16"></td>                                    </tr>                                    <tr>                                        <td colspan="3"><img src="img/i1_p219_act1.jpg"></td>                                        <td></td>                                        <td><img src="img/i2_p219_act1.jpg"></td>                                    </tr>                                    <tr>                                        <td colspan="3">                                            <input type="text" size="1" style="width:100px;text-align: centertext-align: center;border-radius:10px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="factores">                                        </td>                                        <td></td>                                        <td><input type="text" size="1" style="width:100px;text-align: centertext-align: center;border-radius:10px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="producto"></td>                                    </tr>                                </table>                            </div>                            <br><br>                        </li>',
'<li class="col-sm-6">                            <div class="table-responsive">                                <table>                                    <tr>                                        <td></td>                                        <td></td>                                        <td>7</td>                                        <td rowspan="2"><img src="img/i3_p219_act1.jpg"></td>                                        <td rowspan="2"><input type="text" size="1" style="width:100px;text-align: centertext-align: center;border-radius:10px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="factores"></td>                                    </tr>                                    <tr>                                        <td><b>x</b></td>                                        <td></td>                                        <td>5</td>                                        <td></td>                                    </tr>                                    <tr>                                        <td colspan="3" style="border-top: solid 1px;">35</td>                                        <td><img src="img/i4_p219_act1.jpg"></td>                                        <td><input type="text" size="1" style="width:100px;text-align: centertext-align: center;border-radius:10px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="producto"></td>                                    </tr>                                </table>                            </div>                            <br><br>                        </li>',
'<li class="col-sm-6">                            <div class="table-responsive">                                <table>                                    <tr>                                        <td></td>                                        <td></td>                                        <td>2</td>                                        <td rowspan="2"><img src="img/i3_p219_act1.jpg"></td>                                        <td rowspan="2"><input type="text" size="1" style="width:100px;text-align: centertext-align: center;border-radius:10px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="factores"></td>                                    </tr>                                    <tr>                                        <td><b>x</b></td>                                        <td></td>                                        <td>9</td>                                        <td></td>                                    </tr>                                    <tr>                                        <td colspan="3" style="border-top: solid 1px;">18</td>                                        <td><img src="img/i4_p219_act1.jpg"></td>                                        <td><input type="text" size="1" style="width:100px;text-align: centertext-align: center;border-radius:10px;border: solid 2px #5D9ED1;text-align: center;" class=" border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="producto"></td>                                    </tr>                                </table>                            </div>                            <br><br>                        </li>'
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
    tpre1 = nota / 2;
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
    var Nf = parseFloat(tpre1) + parseFloat(tpre2);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}