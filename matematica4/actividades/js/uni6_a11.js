var titulos = "aplico";
f_titulos();
numero_pagina(245);

var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
p1vec1 = [
    '<li class="col-sm-4">                            <div class="table-responsive"><img src="img/i1_p245_act1.jpg">                             <br>                             <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="4"> h <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="45"><br><br>                               </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive"><img src="img/i2_p245_act1.jpg">                             <br>                             <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="6"> h <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="37"><br><br>                               </div>                        </li>',
    '<li class="col-sm-4">                            <div class="table-responsive"><img src="img/i3_p245_act1.jpg">                             <br>                             <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"> h <input maxlength="2" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="33"><br><br>                               </div>                        </li>'
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
    tpre1 = (nota / 2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2
document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

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
            parseFloat(tpre1) +
            parseFloat(tpre2);

        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}

// #endregion