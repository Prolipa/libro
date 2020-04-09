var tpre1 = 0;
var tpre2 = 0;

var titulos = "refuerzo";

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

vec1 = [
    '<td width="55%" bgcolor="#E5F1DB">Número de fracción</td>                                <td width="15%">4</td>                                <td width="15%"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="6"></td>                                <td width="15%"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="8"></td>',
    '<td bgcolor="#E5F1DB">Número de partes de color azul</td>                                <td><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="2"></td>                                <td><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="1"></td>                                <td><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="4"></td>',
    '<td bgcolor="#E5F1DB">Probabilidades de que salga azul</td>                                <td>                                    <div class="fraction text-question">                                        <span class="fup"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="2"></span>                                        <span class="bar">/</span>                                        <span class="fdn"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="4"></span>                                    </div>                                </td>                                <td>                                    <div class="fraction text-question">                                        <span class="fup">1</span>                                        <span class="bar">/</span>                                        <span class="fdn">6</span></div>                                </td>                                <td>                                    <div class="fraction text-question">                                        <span class="fup"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="4"></span>                                        <span class="bar">/</span>                                        <span class="fdn"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="8"></span>                                    </div>                                </td>',
    '<td bgcolor="#E5F1DB">Número de partes de color amarillo</td>                                <td><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="1"></td>                                <td><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="3"></td>                                <td><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="2"></td>',
    '<td bgcolor="#E5F1DB">Probabilidades de que salga azul</td>                                <td>                                    <div class="fraction text-question">                                        <span class="fup"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="1"></span>                                        <span class="bar">/</span>                                        <span class="fdn"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="4"></span>                                    </div>                                </td>                                <td>                                    <div class="fraction text-question">                                        <span class="fup"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="3"></span>                                        <span class="bar">/</span>                                        <span class="fdn"><input maxlength="1" type="text" size="1" style="width:60px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="6"></span>                                    </div>                                </td>                                <td>                                    <div class="fraction text-question">                                        <span class="fup">2</span>                                        <span class="bar">/</span>                                        <span class="fdn">8</span></div>                                </td>'
];
vec1.sort(f_randomico);
for (var i = 0; i < 6; i++) {
    $('#tab' + [i] + '').html(vec1[i]);
}

vec2 = [
    '¿Qué color tiene más probabilidad de salir en el círculo dividido en seis partes? ¿Por qué?<br>                            R. El <input type="text" size="1" style="width:100px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="amarillo">, porque <input style="border: 1px solid #64BCF7;width: 250px"><br>',
    '¿Es probable que salga el color verde en el círculo dividido en 4 partes? ¿Por qué?<br>                            R. <input type="text" maxlength="3" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="Si"> porque <input style="border: 1px solid #64BCF7;width: 250px"><br>',
    '¿Cuál es la probabilidad de que salga el color rojo en el círculo dividido en 8 partes? ¿Por qué?<br>                                R. La probabilidad es <input type="text" maxlength="2" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="0">, porque <input style="border: 1px solid #64BCF7;width: 250px"><br>'
];
vec2.sort(f_randomico);
for (var i = 0; i < 3; i++) {
    $('#li' + [i] + '').html(vec2[i]);
}

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

function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion



// #region Calculo Nota Final
function NotaFinal() {
    var pre2a = document.getElementById("pre2a").value;
    if (pre2a == "") {
        alert("Pregunta 2: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        var Nf =
            parseFloat(tpre1) + parseFloat(tpre2);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}
// #endregion