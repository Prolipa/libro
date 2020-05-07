var titulos = "aplico";
$("#txtNota").html("0/10");
$("#n_pagina").html("147");
var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2.5);
});
// #region Pregunta1

ramdon1 = [
    'Los <input type="text" size="1" maxlength="10" style="width:80px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden" class="solucion1" value="peces"> son animales vertebrados, tienen escamas y respiran por branquias.',
    'Los <input type="text" size="1" maxlength="10" style="width:80px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden" class="solucion1" value="lápices"> de colores sirven para decorar hermosos dibujos.',
    'Con las <input type="text" size="1" maxlength="10" style="width:80px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden" class="solucion1" value="nueces"> se preparan deliciosos pasteles.',
    'Las <input type="text" size="1" maxlength="10" style="width:80px;text-align: center;" class="border-blue respuestas1 cajas1"><input type="hidden" class="solucion1" value="luces"> de los parques iluminan las canchas deportivas.'
];

ramdon1.sort(f_randomico);
for (var i = 0; i < 4; i++) {
    $('#p2ran' + [i] + '').html(ramdon1[i]);
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
    tpre1 = ((nota * 2.5) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2

var resul = [],
    tmp, cor = 0,
    inc = 0,
    cont = 0,
    calificacion = 2.5,
    itemsT = 8,
    ejer = 1;
var totalC = 0,
    totalFinal = 0,
    total = 0;


var words = ['cicatriz', 'lombriz', 'arroz', 'juez', 'perdiz', 'cruz', 'actriz', 'voz'];
var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');
$('#solve').click(function() { wordfindgame.solve(gamePuzzle, words); });
var puzzle = wordfind.newPuzzle(words, { height: 20, width: 20, fillBlanks: false });
wordfind.print(puzzle);

function pregunta2() {
    var corr = 0;
    totalC = (cor * (calificacion / itemsT)).toFixed(2); //suma de calificacion cerrada

    tpre2 = (totalC);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
ramdon3 = [
    '<tr>                            <td width="33%">llave</td>                            <td width="33%"><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/yave/"></td>                            <td width="33%"><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/llave/"></td>                        </tr>',
    ' <tr>                            <td>pollo</td>                            <td><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/poyo/"></td>                            <td><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/pollo/"></td>                        </tr>',
    '<tr>                            <td>mantequilla</td>                            <td><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/mantequiya/"></td>                            <td><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/mantequilla/"></td>                        </tr>',
    '<tr>                            <td>pasillo</td>                            <td><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/pasiyo/"></td>                            <td><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/pasillo/"></td>                        </tr>',
    '<tr>                            <td>caballo</td>                            <td><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/cabayo/"></td>                            <td><input type="text" size="1"  style="width:180px;text-align: center;" class="border-blue respuestas3 cajas1"><input type="hidden" class="solucion3" value="/caballo/"></td>                        </tr>'
];
ramdon3.sort(f_randomico);
$('#tab3').html(ramdon3);

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
    tpre3 = ((nota * 2.5) / 10);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion


// #region Pregunta4

function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal + "/10");
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}
// #endregion