var titulos = "aplico";
numero_pagina(161);

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 5);
});

var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
p2vec1 = [
    '<div class="col-sm-6" style="text-align: left;">                        Me bañé.                        <input type="text" size="1" style="width:120px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="reflejo"><br><br>                    </div>',
    '<div class="col-sm-6" style="text-align: left;">                        Se apresuró.                        <input type="text" size="1" style="width:120px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="cuasirreflejo"><br><br>                    </div>',
    '<div class="col-sm-6" style="text-align: left;">                        Nos dormimos.                        <input type="text" size="1" style="width:120px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="cuasirreflejo"><br><br>                    </div>',
    '<div class="col-sm-6" style="text-align: left;">                        Se peinó.                        <input type="text" size="1" style="width:120px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="reflejo"><br><br>                    </div>',
    '<div class="col-sm-6" style="text-align: left;">                        Me arreglo.                        <input type="text" size="1" style="width:120px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="reflejo"><br><br>                    </div>',
    '<div class="col-sm-6" style="text-align: left;">                        Se imaginaron.                        <input type="text" size="1" style="width:120px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="cuasirreflejo"><br><br>                    </div>',
    '<div class="col-sm-6" style="text-align: left;">                        Se estrecharon las manos.                        <input type="text" size="1" style="width:120px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="recíproco"><br><br>                    </div>',
    '<div class="col-sm-6" style="text-align: left;">                        MSe entrevistaron en la televisión.                        <input type="text" size="1" style="width:120px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="recíproco"><br><br>                    </div>'
];
p2vec1.sort(f_randomico);
$('#li2').html(p2vec1);

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
    $("#pre2a").val(parseFloat(tpre2).toFixed(2))
}
// #endregion

function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        var Nf = parseFloat(tpre1) + parseFloat(tpre2);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}